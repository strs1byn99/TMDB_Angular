import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  isMobile: any;
  mobileClass = "bg"
  imgClass = "slide-img"
  overlayClass = "overlay"
  constructor(private breakpointObserver: BreakpointObserver,
    private service : AppServiceService) {
      this.breakpointObserver.observe(Breakpoints.Handset).subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = true;
          this.mobileClass = "hide-indicators bg-mobile"
          this.imgClass = "slide-img-mobile"
          this.overlayClass = "overlay-mobile"
        } else {
          this.isMobile = false;
          this.mobileClass = "bg"
          this.imgClass = "slide-img"
          this.overlayClass = "overlay"
        }
      });
  }

  

  @Input() images = [];
  @Input() ids = [];
  @Input() titles = [];
  @Input() posters = [];
  ngOnInit() {

  }

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

}
