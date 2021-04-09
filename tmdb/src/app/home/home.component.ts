import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isMobile!: Observable<BreakpointState>;
  constructor(private breakpointObserver: BreakpointObserver,
    private service : AppServiceService) { 
      this.getPlayingData()
      this.getContinueWatching()
    }

  ngOnInit(): void {
    this.isMobile = this.breakpointObserver.observe(Breakpoints.Handset);
    this.getHomeData()
  }

  playingImages: any; playingIds: any; playingTitles: any; playingPosters: any;

  splitArrayIntoChunksOfLen(arr: any, len: any) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    return chunks;
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

  getPlayingData() {
    this.service.getPlayingData().subscribe((res) => {
      let json = JSON.parse(JSON.stringify(res)); 
      this.playingImages = json.map((each: any) => each.img)
      this.playingIds = json.map((each: any) => each.id)
      this.playingTitles = json.map((each: any) => each.title)
      this.playingPosters = json.map((each: any) => each.poster)
    }, (error) => {
      console.log(error)
    })
  }
  
  CWImages: any; CWIds: any; CWTitles: any; CWTypes: any;
  popularMvImages: any; popularMvIds: any; popularMvTitles: any; 
  trendingMvImages: any; trendingMvIds: any; trendingMvTitles: any; 
  topMvImages: any; topMvIds: any; topMvTitles: any; 

  popularTvImages: any; popularTvIds: any; popularTvTitles: any; 
  trendingTvImages: any; trendingTvIds: any; trendingTvTitles: any;
  topTvImages: any; topTvIds: any; topTvTitles: any;

  mvTypes: any;
  tvTypes: any;

  getHomeData() {
    this.service.getHomeData().subscribe(res => {
      let json = JSON.parse(JSON.stringify(res)); 
      console.log(json)
      let trendmv_tmp = this.splitCards(json.trendmv)
      this.trendingMvIds = trendmv_tmp.ids; this.trendingMvImages = trendmv_tmp.imgs; this.trendingMvTitles = trendmv_tmp.titles;
      let popmv_tmp = this.splitCards(json.popmv)
      this.popularMvIds = popmv_tmp.ids; this.popularMvImages = popmv_tmp.imgs; this.popularMvTitles = popmv_tmp.titles;
      let topmv_tmp = this.splitCards(json.topmv)
      this.topMvIds = topmv_tmp.ids; this.topMvImages = topmv_tmp.imgs; this.topMvTitles = topmv_tmp.titles;
      let trendtv_tmp = this.splitCards(json.trendtv)
      this.trendingTvIds = trendtv_tmp.ids; this.trendingTvImages = trendtv_tmp.imgs; this.trendingTvTitles = trendtv_tmp.titles;
      let poptv_tmp = this.splitCards(json.poptv)
      this.popularTvIds = poptv_tmp.ids; this.popularTvImages = poptv_tmp.imgs; this.popularTvTitles = poptv_tmp.titles;
      let toptv_tmp = this.splitCards(json.toptv)
      this.topTvIds = toptv_tmp.ids; this.topTvImages = toptv_tmp.imgs; this.topTvTitles = toptv_tmp.titles;
      // types
      this.mvTypes = this.typeInit('movie')
      this.tvTypes = this.typeInit('tv')
    })
  }

  getContinueWatching() {
    let x:any = window.localStorage.getItem("watching")
    let json = JSON.parse(x)
    console.log(json)
    let CW_tmp = this.splitCards(json);
    this.CWIds = CW_tmp.ids; this.CWImages = CW_tmp.imgs; this.CWTitles = CW_tmp.titles;
    let CW_types = json.map((each:any) => each.type)
    this.CWTypes = this.splitArrayIntoChunksOfLen(CW_types, 6)
  }

  typeInit(type: string) {
    let json = Array(24).fill(type)
    return this.splitArrayIntoChunksOfLen(json, 6)
  }
}
