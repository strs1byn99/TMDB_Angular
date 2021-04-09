import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  public isMobile = false;
  constructor(private breakpointObserver: BreakpointObserver,
    ) { 
    
  }

  mylist:any;
  overlayClass = "overlay"
  contentClass = "content"
  itemClass = "item"
  ngOnInit(): void {
    let t:any = window.localStorage.getItem("mylist")
    this.mylist = JSON.parse(t)
    console.log(this.mylist)
    // Breakpoints.Handset
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMobile = true;
        this.removePlaceholder()
        this.overlayClass = "overlay-mobile"
        this.contentClass = "content-mobile"
        this.itemClass = "item-mobile"
      } else {
        this.isMobile = false;
        this.placeholder()
        this.overlayClass = "overlay"
        this.contentClass = "content"
        this.itemClass = "item"
      }
    });
  }
  
  placeholder() {
    let len = this.mylist.length;
    if (len % 6 != 0) {
      let ph = {"id": "", "title": "", "type": "", "img": ""}
      let tmp = 6 - (len % 6);
      for (let idx = 0; idx < tmp; idx++) {
        this.mylist.push(ph);
      }

    }
  }

  removePlaceholder() {
    let len = this.mylist.length, idx = len;
    for (let i = 0; i < len; i += 1) {
      if (this.mylist[i].title === "") {
        idx = i; break;
      }
    }
    this.mylist.splice(idx)
    // console.log(idx)
    // console.log('removing...')
    // console.log(this.mylist)
  }

  splitArrayIntoChunksOfLen(arr: any, len: any) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    return chunks;
  }

  splitLines() {
    let n = 6;
    this.splitArrayIntoChunksOfLen(this.mylist, n);
  }

  @ViewChildren('imgs') imgs!: QueryList<ElementRef>;
  @ViewChildren('overlays') overlays!: QueryList<ElementRef>;

  mouseOver(idx: any) {
    if (this.isMobile) {
      let imgarr = this.imgs.toArray()
      let overlayarr = this.overlays.toArray()
      imgarr[idx].nativeElement.style.transform = 'scale(1.1)'
      imgarr[idx].nativeElement.style.transition = 'transform .1s'
      overlayarr[idx].nativeElement.style.transform = 'scale(1.1)'
      overlayarr[idx].nativeElement.style.transition = 'transform .1s'
      overlayarr[idx].nativeElement.style.cursor = 'pointer'
    }
    
  }

  mouseLeave(idx: any) {
    if (this.isMobile) {
      let imgarr = this.imgs.toArray()
      let overlayarr = this.overlays.toArray()
      imgarr[idx].nativeElement.style.transform = 'none'
      overlayarr[idx].nativeElement.style.transform = 'none'
    }
    
  }
}

