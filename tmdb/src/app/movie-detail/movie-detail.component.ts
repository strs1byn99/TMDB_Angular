import { Component, HostListener, OnInit, Type, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { forEachChild } from 'typescript';


const YOUTUBE_LINK = `https://www.youtube.com/watch?v=`
const ADD = "Add to Watchlist"
const REMOVE = "Remove from Watchlist"

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [NgbPopoverConfig],
})
export class MovieDetailComponent implements OnInit {
  private _success = new Subject<string>();
  constructor(private ar : ActivatedRoute,
    private service : AppServiceService,
    private modalService: NgbModal,
    private config: NgbPopoverConfig,
    private breakpointObserver: BreakpointObserver,
    private router: Router) {
      config.triggers = 'hover';
      console.log('constructor')
    }

  mid: any;
  type: any;
  public innerWidth: any;
  resizeObservable$!: Observable<Event>
  resizeSubscription$!: Subscription 
  isMobile = false;
  contentClass = "content row"
  textClass = "text"
  bgClass = "bg"
  modalInfoClass = "modal-info row"
  modalImgClass = "modal-img"
  modalTextClass = "modal-text"
  reviewCardClass = "review-card"
  reviewCardImgClass = "card-img"
  ngOnInit(): void {
    /* reload data on revisit thru recc&sim */ 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    /* responsiveness */
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMobile = true;
        this.contentClass = "content column"
        this.textClass = "text-mobile"
        this.bgClass = "bg-mobile hide-scrollbar"
        this.modalInfoClass = "modal-info column"
        this.modalImgClass = "modal-img-mobile"
        this.modalTextClass = "modal-text-mobile"
        this.reviewCardClass = "review-card-mobile"
        this.reviewCardImgClass = "card-img-mobile"
      } else {
        this.isMobile = false
        this.contentClass = "content row"
        this.textClass = "text"
        this.bgClass = "bg"
        this.modalInfoClass = "modal-info row"
        this.modalImgClass = "modal-img"
        this.modalTextClass = "modal-text"
        this.reviewCardClass = "review-card"
        this.reviewCardImgClass = "card-img"
      }
    }); 
    /* window resize */
    this.youtubeWidth = this.isMobile? window.innerWidth * 0.86 : window.innerWidth * 0.43;
    this.youtubeHeight = this.isMobile ? "180" : "400"
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(( evt:any )=> {
      // not getting here - mobile view dosen't resize
      if (this.isMobile)
        this.youtubeWidth = evt.currentTarget.innerWidth * 0.8;
      else 
        this.youtubeWidth = evt.currentTarget.innerWidth * 0.43;
    })
    /* alert */ 
    this.ar.paramMap.subscribe(params => {
      this.mid = params.get('id'); 
      this.type = params.get('type')
      this.getDetail(this.mid, this.type)
      this._success.subscribe(message => this.successMessage = message);
      this._success.pipe(debounceTime(5000)).subscribe(() => {
        if (this.selfClosingAlert) {
          this.selfClosingAlert.close();
        }
    });
    })
  }
  youtubeWidth: any;
  youtubeHeight: any;

  twitter_text: any;
  facebook_text: any;
  details: any;
  reviews: any;
  video: any;
  casts: any;
  reccImages: any; reccTitles: any; reccIds: any; 
  simImages: any; simTitles: any; simIds: any;
  types: any;

  splitArrayIntoChunksOfLen(arr: any, len: any) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    return chunks;
  }

  typeInit(type: string) {
    let json = Array(24).fill(type)
    return this.splitArrayIntoChunksOfLen(json, 6)
  }

  splitCards(json: any) {
    let n = 6;
    let full_ids = json.map((each:any) => each.id)
    let full_imgs = json.map((each:any) => each.img)
    let full_titles = json.map((each:any) => each.title)
    let ids = this.splitArrayIntoChunksOfLen(full_ids, n);
    let imgs = this.splitArrayIntoChunksOfLen(full_imgs, n);
    let titles = this.splitArrayIntoChunksOfLen(full_titles, n);
    return {"titles": titles, "imgs": imgs, "ids": ids}
  }

  getDetail(id: any, type: any) {
    this.service.getMovieDetail(id, type).subscribe((res) => {
      let json = JSON.parse(JSON.stringify(res)); 
      this.details = json.detail;
      this.video = json.video;
      this.casts = json.cast;
      this.reviews = json.review;
      let recc_tmp = this.splitCards(json.recc)
      this.reccImages = recc_tmp.imgs;
      this.reccIds = recc_tmp.ids;
      this.reccTitles = recc_tmp.titles;
      let sim_tmp = this.splitCards(json.sim)
      this.simIds = sim_tmp.ids;
      this.simImages = sim_tmp.imgs;
      this.simTitles = sim_tmp.titles;
      console.log(this.details);
      console.log(json)
      this.types = this.typeInit(this.type)
      // check added or not
      this.checkAddedOrNot()
      this.addToStorage(this.details.title, this.details.id, this.details.poster, this.type)
    })
  }

  person: any;
  person_fb: any;
  person_ig: any;
  person_imdb: any;
  person_tt: any;
  getCastDetail(id: any) {
    this.service.getCastDetail(id).subscribe((res) => {
      let json = JSON.parse(JSON.stringify(res)); 
      this.person = json.cast;
      this.person_fb = json.extra.facebook_id == null || json.extra.facebook_id == "" ? 
            null : `https://facebook.com/${json.extra.facebook_id}`;
      this.person_ig = json.extra.instagram_id == null || json.extra.instagram_id === "" ? 
            null : `https://instagram.com/${json.extra.instagram_id}`;
      this.person_imdb = json.extra.imdb_id == null || json.extra.imdb_id === "" ? 
            null : `https://imdb.com/name/${json.extra.imdb_id}`;
      this.person_tt = json.extra.twitter_id == null || json.extra.twitter_id === "" ? 
            null : `https://twitter.com/${json.extra.twitter_id}`;
      console.log(this.person)
      console.log(json.extra)
    })
  }

  shareOnTwitter(title:any, link:any) {
    var prefix = "https://twitter.com/intent/tweet?text=";
    var text = `Watch ${title}\n${YOUTUBE_LINK}${link}\n#USC #CSCI571 #FightOn`;
    this.twitter_text = `${prefix}${encodeURIComponent(text)}`
  }
  shareOnFacebook(link:any) {
    this.facebook_text = `https://www.facebook.com/sharer/sharer.php?u=${YOUTUBE_LINK}${link}`
  }

  openModal(content: any) {
    this.person = null;
    this.modalService.open(content, { centered: true, size: 'lg', scrollable: true });
  }

  open(content: any) {
    this.modalService.open(content);
  }

  successMessage = '';
  alertType = '';
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: any;
  public changeSuccessMessage() { 
    this._success.next( this.buttonText == ADD ? `Removed from watchlist.` : `Added to watchlist.`); 
    this.alertType = this.buttonText == ADD ? "danger" : "success";
  }

  addedToMyList = false;
  buttonText = ADD
  
  checkAddedOrNot() {
    console.log('check in list or not...')
    let s:any = window.localStorage.getItem("mylist")
    let mylist = JSON.parse(s)
    console.log(mylist)
    // assuming each has a poster
    if (mylist.find((x: any) => `${x.type}+${x.id}` == `${this.type}+${this.details.id}`)) {
      this.addedToMyList = true; 
      this.buttonText = REMOVE;
    }
    else {
      this.addedToMyList = false;
      this.buttonText = ADD;
    }
    console.log(this.addedToMyList)
  }

  addOrRemove() {
    if (this.buttonText == ADD) {
      this.buttonText = REMOVE
      // add to list
      this.addToList(this.details.id, this.type, this.details.poster, this.details.title)
    } else {
      this.buttonText = ADD
      // remove from list
      this.removeFromList(this.type, this.details.id)
    }
  }
  addToList(id: any, type: any, poster: any, title: any) {
    // call api to get details of this single movie/tv
    // after subscribing -> update it to localStorage
    console.log('add to list...')
    let w:any = window.localStorage.getItem("mylist")
    let mylist = JSON.parse(w)
    mylist.unshift({"id": id, "type": type, "img": poster, "title": title})
    console.log(mylist)
    window.localStorage.setItem("mylist", JSON.stringify(mylist))
  }

  removeFromList(type: any, id: any) {
    // find in localStorage -> delete
    console.log('remove from list...')
    let w:any = window.localStorage.getItem("mylist")
    let mylist = JSON.parse(w)
    let idx = 0;
    for (let i = 0, len = mylist.length; i < len; i += 1) {
      let x = mylist[i]
      console.log(`${type}+${id}`)
      console.log(`${x.type}+${x.id}`)
      if (`${type}+${id}` == `${x.type}+${x.id}`) {
        idx = i; break;
      }
    }
    console.log('idx to be deleted: ' + idx)
    mylist.splice(idx, 1);
    console.log(mylist)
    window.localStorage.setItem("mylist", JSON.stringify(mylist))
  }

  addToStorage(title:any, id:any, img:any, type:any) {
    let x:any = window.localStorage.getItem("watching")
    let watching = JSON.parse(x)
    let key = `${type}+${id}`
    let check = watching.find((x:any) => key == `${x.type}+${x.id}`)
    if (check) {
      // find & remove & add to front
      let idx = 0;
      for (let i = 0, len = watching.length; i < len; i += 1) {
        let each = watching[i];
        if (each.img == img) {
          idx = i; break;
        }
      }
      watching.splice(idx, 1);
      watching.unshift({"title": title, "id": id, "img": img, "type": type});
      window.localStorage.setItem("watching", JSON.stringify(watching))
      return;
    }
    if (watching.length == 24) {
      watching.splice(23, 1) // remove the last elem from list
    }

    watching.unshift({"title": title, "id": id, "img": img, "type": type}) // add to front
    window.localStorage.setItem("watching", JSON.stringify(watching))
    console.log('adding to local storage')
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }

  convertDate(raw_date: string) {
    let myDate = new Date(raw_date);
    // timeZone: "America/Los_Angeles", 
    let  pstDate = myDate.toLocaleTimeString("en-US", 
      {year: 'numeric', month: 'long', day: 'numeric'})
    return pstDate;
  }
}
