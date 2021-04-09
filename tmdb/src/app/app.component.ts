import { Component, HostListener, OnInit } from '@angular/core';
import {Observable, of, OperatorFunction} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import { AppServiceService } from './app-service.service';
import { Router, Event, NavigationEnd, NavigationError } from '@angular/router';

const TEST_MODE = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppServiceService]
})
export class AppComponent implements OnInit {

  constructor(private service : AppServiceService,
    private router: Router) { 
      /* detect route */
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          console.log(event);
          if (event.url.includes('watch')) {
            this.HomeClass = "nav-link home-not-selected"
          } else if (event.url.includes('mylist')) {
            this.HomeClass = "nav-link home-not-selected"
          } else {
            this.HomeClass = "nav-link active"
          }
        }
    });
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 0) {
      document.getElementById('nav')!.className = "fixed-top"
      document.getElementById('bg')!.style.paddingTop = '3.5rem'
    } else {
      document.getElementById('nav')!.className = ""
      document.getElementById('bg')!.style.paddingTop = '0'
    }
  }
  
  ngOnInit() {
    // init continue-watching & myList local storage
    if (TEST_MODE) {
      window.localStorage.clear()
    }
    if (!window.localStorage.getItem("watching")) {
      let l:any = [];
      window.localStorage.setItem("watching", JSON.stringify(l))
    }
    if (!window.localStorage.getItem("mylist")) {
      let l2:any = [];
      window.localStorage.setItem("mylist", JSON.stringify(l2))
    }

    // if (window.location.href.includes('mylist')) {
    //   console.log('on mylist')
    //   this.HomeClass = "nav-link home-not-selected"
    // } else {
    //   console.log('on home')
    //   this.HomeClass = "nav-link active"
    // }
  }

  myListActive: any;
  model: any;
  result: any;
  searching = false;
  searchFailed = false;
  search: OperatorFunction<string, any> = (text$: Observable<Object>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.service.search(term)),
      tap(() => this.searching = false)
    )

  inputFormatBandListValue(value: any)   {
    if(value.title)
      return value.title
    return value;
  }

  onSelect($event: any) {
    $event.preventDefault();
    this.model = "";
    this.isMenuCollapsed = true
  };

  HomeClass: any;
  changeButtonColor(idx: number) {
    if (idx == 0) {
      console.log("On Home")
      this.HomeClass = "nav-link active"
    } else {
      this.HomeClass = "nav-link home-not-selected"
    }
  }

  public isMenuCollapsed = true;
}
