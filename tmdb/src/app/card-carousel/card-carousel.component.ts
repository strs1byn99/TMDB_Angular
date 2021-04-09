import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarouselComponent implements OnInit {
  // public isMobile!: Observable<BreakpointState>;
  constructor(private breakpointObserver: BreakpointObserver,) { }

  isMobile = false;  
  overlayClass = "overlay"
  ngOnInit(): void {
    // Breakpoints.Handset
    this.combineList()
    this.preserveList()
    console.log(this.splited_ids)
    /* movile vs. desktop */ 
    // '(max-width: 911px)'
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMobile = true;
        this.overlayClass = "overlay-mobile"
        this.onePageStyle = "hide-indicators"
        if (this.full_ids.length == 1) {
          this.onePageStyle = "hide-indicators hide-arrow"
        } else {
          this.onePageStyle = "hide-indicators"
        }
      } else {
        this.isMobile = false;
        this.overlayClass = "overlay"
        this.onePageStyle = ""
        if (this.splited_ids.length == 1) {
          console.log('only 1 page')
          this.onePageStyle = "hide-indicators hide-arrow"
        } else {
          this.onePageStyle = ""
        }
      }
    });
    
  }
  onePageStyle = ""

  @Input() images: any;
  @Input() ids: any;
  @Input() titles: any;
  @Input() type: any;
  full_ids = []; full_titles = []; full_imgs = []; full_types = [];
  splited_ids = []; splited_titles = []; splited_imgs = []; splited_types = [];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  combineList() {
    // original: [[1,2,3,4,5,6], [1,2,3]]
    this.full_ids = this.ids.flat(1);
    this.full_titles = this.titles.flat(1);
    this.full_imgs = this.images.flat(1);
    this.full_types = this.type.flat(1)
  }

  preserveList() {
    this.splited_ids = this.ids;
    this.splited_imgs = this.images;
    this.splited_titles = this.titles;
    this.splited_types = this.type;
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
      overlayarr[idx].nativeElement.style.cursor = 'pointer'
      overlayarr[idx].nativeElement.style.transition = 'transform .1s'
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
