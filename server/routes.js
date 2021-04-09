const express = require('express');
const router = express.Router();
const axios = require("axios");

const API_KEY = "59e1a8bdd05f5059f7a2fe4b65ed990c"
const DOMAIN = "https://api.themoviedb.org"
const BACKDROP_PATH = "https://image.tmdb.org/t/p/w780"
const POSTER_PATH = "https://image.tmdb.org/t/p/w500"
const AVATAR_PATH = "https://image.tmdb.org/t/p/original"
const VIDEO_LINK = "https://www.youtube.com/watch?v="
const DEFAULT_VIDEO_LINK = `tzkWB85ULJY`
const DEFAULT_AVATAR = `../../assets/avatar.jpeg`
const DEFAULT_POSTER = `../../assets/poster.png`

router.get('/test', (req, res) => {
    console.log("test");
    res.send("test");
})


router.get('/search', (req, res) => {
    let query = req.query.query;
    url = `${DOMAIN}/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}`
    axios.get(url).then(response => {
        let data = response.data["results"]
        var results = []
        for (let i = 0, len = data.length; i < len; i += 1) {
            let each = data[i];
            let type = each.media_type
            if (each.backdrop_path == null || type == "person") continue;
            let backdrop_path = `${BACKDROP_PATH}${each.backdrop_path}`
            results.push({"id": each.id, "title": (type == 'tv' ? each.name : each.title), 
                    "img": backdrop_path, "type": type})
        }
        res.send(results.slice(0,7))
    }).catch(err => res.send(err));
})

router.get('/playing', (req, res) => {
    playing_url = `${DOMAIN}/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    axios.get(playing_url).then(response => {
        let playing_data = response.data["results"];
        var playing_list = [];
        for (let i = 0; i < 5; ) {
            let each = playing_data[i];
            if (each.backdrop_path != null && each.poster_path != null) {
                let backdrop_path = `${BACKDROP_PATH}${each.backdrop_path}`;
                let poster_path = `${POSTER_PATH}${each.poster_path}`;
                playing_list.push({"id": each.id, "title": each.title, "img": backdrop_path, "poster": poster_path});
                i += 1;
            }
        }
        res.send(playing_list);
    }).catch(err => res.send(err));
})

function getVideo(list) {
    let first = list[0] // default the first one
    let trailers = list.filter(each => each.type == "Trailer")
    console.log(trailers)
    let teasers = list.filter(each => each.type == "Teaser")
    console.log(teasers)
    if (trailers.length > 0) return trailers[0];
    if (teasers.length > 0) return teasers[0];
    return null;
}

router.get('/movie/:id', (req, res) => {
    let mid = req.params.id;
    let video = axios.get(`${DOMAIN}/3/movie/${mid}/videos?api_key=${API_KEY}&language=en-US&page=1`)
    let detail = axios.get(`${DOMAIN}/3/movie/${mid}?api_key=${API_KEY}&language=en-US&page=1`)
    let review = axios.get(`${DOMAIN}/3/movie/${mid}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    let cast = axios.get(`${DOMAIN}/3/movie/${mid}/credits?api_key=${API_KEY}&language=en-US&page=1`)
    let recc = axios.get(`${DOMAIN}/3/movie/${mid}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
    let sim = axios.get(`${DOMAIN}/3/movie/${mid}/similar?api_key=${API_KEY}&language=en-US&page=1`)
    axios.all([video, detail, review, cast, recc, sim]).then(axios.spread((...resp) => {
        var vid, det, rev = [], cas = [], rec, sim;
        let video_res = resp[0].data["results"]
        vid = {"type": "", "site": "", "name": "", "link": DEFAULT_VIDEO_LINK}
        if (video_res.length != 0) {
            // vid = {"type": video_res[0].type, "site": video_res[0].site, "name": video_res[0].name,
            //  "link": video_res[0].key}
            let v = getVideo(video_res)
            if (v) {
                vid = {"type": v.type, "site": v.site, "name": v.name, "link": v.key}
            } else {
                vid = {"type": "", "site": "", "name": "", "link": DEFAULT_VIDEO_LINK}
            }
        }
        let detail_res = resp[1].data
        let hr = Math.floor(detail_res.runtime / 60)
        let min = detail_res.runtime % 60
        let time = `${hr > 0? `${hr} hrs `: ''} ${min > 0 ? `${min} mins` : ''}`
        let poster = detail_res.poster_path == null ? 
            DEFAULT_POSTER : `${POSTER_PATH}${detail_res.poster_path}`
        det = {"title": detail_res.title, 
            "runtime": detail_res.runtime == null ? "N/A" : time,
            "year": detail_res.release_date === "" ? "N/A" : detail_res.release_date.slice(0,4),
            "vote": detail_res.vote_average,
            "tagline": detail_res.tagline == null ? "N/A" : detail_res.tagline,
            "overview": detail_res.overview == null ? "N/A" : detail_res.overview,
            "genres": detail_res.genres.map(each => each.name).join(', '),
            "spoken_languages": detail_res.spoken_languages.map(each => each.english_name).join(', '),
            "poster": poster,
            "id": detail_res.id,
        }
        let review_res = resp[2].data["results"]
        review_res = review_res.length > 10 ? review_res.splice(0,10) : review_res
        review_res.map((each) => {
            tmp = {"content": each.content,
                "author": each.author,
                "created_at": each.created_at,
                "url": each.url,
                "avatar_path": each.author_details.avatar_path == null ? DEFAULT_AVATAR : 
                        (each.author_details.avatar_path.includes('.com/') ? 
                        each.author_details.avatar_path.slice(1)
                        : `${AVATAR_PATH}${each.author_details.avatar_path}`),
                "rating": each.author_details.rating == null ? 0 : each.author_details.rating,
            }
            rev.push(tmp)
        })
        let cast_res = resp[3].data["cast"]
        for (let i = 0, len = cast_res.length; i < len; i += 1) {
            each = cast_res[i];
            if (each.profile_path == null) continue;
            cas.push({"id": each.id, "name": each.name, "character": each.character, 
                "img": `${POSTER_PATH}${each.profile_path}`
            })
        }
        let recc_res = resp[4].data["results"]
        rec = recc_res.reduce((result, each) => {
            if (each.poster_path != null) {
                let poster_path = `${POSTER_PATH}${each.poster_path}`
                result.push({"id": each.id, "title": each.title, "img": poster_path})
            }
            return result;
        }, []);
        let sim_res = resp[5].data["results"]
        sim = sim_res.reduce((result, each) => {
            if (each.poster_path != null) {
                let poster_path = `${POSTER_PATH}${each.poster_path}`
                result.push({"id": each.id, "title": each.title, "img": poster_path})
            }
            return result;
        }, []);
        res.send({"video": vid, "detail": det, "review": rev, "cast": cas, "recc": rec, "sim": sim})
    })).catch(err => res.send(err));
})

router.get('/tv/:id', (req, res) => {
    let mid = req.params.id;
    let video = axios.get(`${DOMAIN}/3/tv/${mid}/videos?api_key=${API_KEY}&language=en-US&page=1`)
    let detail = axios.get(`${DOMAIN}/3/tv/${mid}?api_key=${API_KEY}&language=en-US&page=1`)
    let review = axios.get(`${DOMAIN}/3/tv/${mid}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    let cast = axios.get(`${DOMAIN}/3/tv/${mid}/credits?api_key=${API_KEY}&language=en-US&page=1`)
    let recc = axios.get(`${DOMAIN}/3/tv/${mid}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
    let sim = axios.get(`${DOMAIN}/3/tv/${mid}/similar?api_key=${API_KEY}&language=en-US&page=1`)
    axios.all([video, detail, review, cast, recc, sim]).then(axios.spread((...resp) => {
        var vid, det, rev = [], cas = [], rec, sim;
        let video_res = resp[0].data["results"]
        vid = {"type": "", "site": "", "name": "", "link": DEFAULT_VIDEO_LINK}
        if (video_res.length != 0) {
            // vid = {"type": video_res[0].type, "site": video_res[0].site, "name": video_res[0].name, 
            // "link": `${video_res[0].key}`}
            let v = getVideo(video_res)
            if (v) {
                vid = {"type": v.type, "site": v.site, "name": v.name, "link": v.key}
            } else {
                vid = {"type": "", "site": "", "name": "", "link": DEFAULT_VIDEO_LINK}
            }
        }
        let detail_res = resp[1].data
        let hr = Math.floor(detail_res.episode_run_time[0] / 60)
        let min = detail_res.episode_run_time[0] % 60
        let time = `${hr > 0? `${hr} hrs `: ''} ${min > 0 ? `${min} mins` : ''}`
        let poster = detail_res.poster_path == null ? 
            DEFAULT_POSTER : `${POSTER_PATH}${detail_res.poster_path}`
        det = {"title": detail_res.name, 
            "runtime": detail_res.episode_run_time.length == 0 ? "N/A" : time,
            "year": detail_res.first_air_date === "" ? "N/A" : detail_res.first_air_date.slice(0,4),
            "vote": detail_res.vote_average,
            "tagline": detail_res.tagline == null ? "N/A" : detail_res.tagline,
            "overview": detail_res.overview == null ? "N/A" : detail_res.overview,
            "genres": detail_res.genres.map(each => each.name).join(', '),
            "spoken_languages": detail_res.spoken_languages.map(each => each.english_name).join(', '),
            "poster": poster,
            "id": detail_res.id,
        }
        let review_res = resp[2].data["results"]
        review_res = review_res.length > 10 ? review_res.splice(0,10) : review_res
        review_res.map((each) => {
            tmp = {"content": each.content,
                "author": each.author,
                "created_at": each.created_at,
                "url": each.url,
                "avatar_path": each.author_details.avatar_path == null ? DEFAULT_AVATAR : 
                        (each.author_details.avatar_path.includes('.com/') ? 
                        each.author_details.avatar_path.slice(1)
                        : `${AVATAR_PATH}${each.author_details.avatar_path}`),
                "rating": each.author_details.rating == null ? 0 : each.author_details.rating,
            }
            rev.push(tmp)
        })
        let cast_res = resp[3].data["cast"]
        for (let i = 0, len = cast_res.length; i < len; i += 1) {
            each = cast_res[i];
            if (each.profile_path == null) continue;
            cas.push({"id": each.id, "name": each.name, "character": each.character, 
                "img": `${POSTER_PATH}${each.profile_path}`
            })
        }
        let recc_res = resp[4].data["results"]
        rec = recc_res.reduce((result, each) => {
            if (each.poster_path != null) {
                let poster_path = `${POSTER_PATH}${each.poster_path}`
                result.push({"id": each.id, "title": each.name, "img": poster_path})
            }
            return result;
        }, []);
        let sim_res = resp[5].data["results"]
        sim = sim_res.reduce((result, each) => {
            if (each.poster_path != null) {
                let poster_path = `${POSTER_PATH}${each.poster_path}`
                result.push({"id": each.id, "title": each.name, "img": poster_path})
            }
            return result;
        }, []);
        res.send({"video": vid, "detail": det, "review": rev, "cast": cas, "recc": rec, "sim": sim})
    })).catch(err => res.send(err));
})

router.get('/cast/:id', (req, res) => {
    let cid = req.params.id;
    let cast = axios.get(`${DOMAIN}/3/person/${cid}?api_key=${API_KEY}&language=en-US&page=1`)
    let extra = axios.get(`${DOMAIN}/3/person/${cid}/external_ids?api_key=${API_KEY}&language=en-US&page=1`)
    axios.all([cast, extra]).then(axios.spread((...resp) => {
        let cast_res = resp[0].data;
        cas = {"gender": cast_res.gender == 1 ? "Female" : (cast_res.gender == 2 ? "Male" : 
           (cast_res.gender == 3 ? "Non-binary" : "Undefined")),
            "birthplace": cast_res.place_of_birth,
            "birthday": cast_res.birthday,
            "known_for_department": cast_res.known_for_department,
            "also_known_as": cast_res.also_known_as.join(','),
            "biography": cast_res.biography,
            "name": cast_res.name,
            "homepage": cast_res.homepage,
            "img": `${POSTER_PATH}${cast_res.profile_path}`
        }
        let extra_res = resp[1].data;
        ext = {"facebook_id": extra_res.facebook_id,
            "imdb_id": extra_res.imdb_id,
            "instagram_id": extra_res.instagram_id,
            "twitter_id": extra_res.twitter_id,
        }
        res.send({"cast": cas, "extra": ext})
    })).catch(err => res.send(err));
})

function getDetail(json, type) {
    var result = [];
    for (let i = 0, len = json.length; i < len; i += 1) {
        let each = json[i];
        if (each.poster_path == null) continue;
        let poster_path = `${POSTER_PATH}${each.poster_path}`;
        
        result.push({"id": each.id, "title": type === "mv" ? each.title : each.name, "img": poster_path})
    }
    return result;
}

router.get('/home' ,(req, res) => {
    let trendingmv = axios.get(`${DOMAIN}/3/trending/movie/day?api_key=${API_KEY}`);
    let popularmv = axios.get(`${DOMAIN}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    let topratedmv = axios.get(`${DOMAIN}/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    let trendingtv = axios.get(`${DOMAIN}/3/trending/tv/day?api_key=${API_KEY}`);
    let populartv = axios.get(`${DOMAIN}/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
    let topratedtv = axios.get(`${DOMAIN}/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    axios.all([trendingmv, popularmv, topratedmv, trendingtv, populartv, topratedtv]).then(axios.spread((...resp) => {
        let trendmv = getDetail(resp[0].data["results"], "mv");
        let popmv = getDetail(resp[1].data["results"], "mv");
        let topmv = getDetail(resp[2].data["results"], "mv");
        let trendtv = getDetail(resp[3].data["results"], "tv");
        let poptv = getDetail(resp[4].data["results"], "tv");
        let toptv = getDetail(resp[5].data["results"], "tv");
        res.send({"trendmv": trendmv, "popmv": popmv, "topmv": topmv,
                "trendtv": trendtv, "poptv": poptv, "toptv": toptv});
      })
    ).catch(err => res.send(err));
})


module.exports = router;
