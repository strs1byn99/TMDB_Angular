(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/strs1byn99/Desktop/bythemoviedb-gcp/tmdb/src/main.ts */"zUnb");


/***/ }),

/***/ "76GK":
/*!********************************************!*\
  !*** ./src/app/mylist/mylist.component.ts ***!
  \********************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = ["imgs"];
const _c1 = ["overlays"];
function MylistComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No items found in Watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MylistComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function MylistComponent_div_3_div_4_Template_div_mouseover_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.mouseOver(i_r4); })("mouseleave", function MylistComponent_div_3_div_4_Template_div_mouseleave_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const i_r4 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.mouseLeave(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const each_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", ctx_r2.itemClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", each_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", each_r3.type, "/", each_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "img" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "overlay" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", each_r3.type, "/", each_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", ctx_r2.overlayClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](each_r3.title);
} }
function MylistComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MylistComponent_div_3_div_4_Template, 7, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.mylist);
} }
class MylistComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isMobile = false;
        this.overlayClass = "overlay";
        this.contentClass = "content";
        this.itemClass = "item";
    }
    ngOnInit() {
        let t = window.localStorage.getItem("mylist");
        this.mylist = JSON.parse(t);
        console.log(this.mylist);
        // Breakpoints.Handset
        this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset).subscribe((state) => {
            if (state.matches) {
                this.isMobile = true;
                this.removePlaceholder();
                this.overlayClass = "overlay-mobile";
                this.contentClass = "content-mobile";
                this.itemClass = "item-mobile";
            }
            else {
                this.isMobile = false;
                this.placeholder();
                this.overlayClass = "overlay";
                this.contentClass = "content";
                this.itemClass = "item";
            }
        });
    }
    placeholder() {
        let len = this.mylist.length;
        if (len % 6 != 0) {
            let ph = { "id": "", "title": "", "type": "", "img": "" };
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
                idx = i;
                break;
            }
        }
        this.mylist.splice(idx);
        // console.log(idx)
        // console.log('removing...')
        // console.log(this.mylist)
    }
    splitArrayIntoChunksOfLen(arr, len) {
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
    mouseOver(idx) {
        if (this.isMobile) {
            let imgarr = this.imgs.toArray();
            let overlayarr = this.overlays.toArray();
            imgarr[idx].nativeElement.style.transform = 'scale(1.1)';
            imgarr[idx].nativeElement.style.transition = 'transform .1s';
            overlayarr[idx].nativeElement.style.transform = 'scale(1.1)';
            overlayarr[idx].nativeElement.style.transition = 'transform .1s';
            overlayarr[idx].nativeElement.style.cursor = 'pointer';
        }
    }
    mouseLeave(idx) {
        if (this.isMobile) {
            let imgarr = this.imgs.toArray();
            let overlayarr = this.overlays.toArray();
            imgarr[idx].nativeElement.style.transform = 'none';
            overlayarr[idx].nativeElement.style.transform = 'none';
        }
    }
}
MylistComponent.ɵfac = function MylistComponent_Factory(t) { return new (t || MylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
MylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MylistComponent, selectors: [["app-mylist"]], viewQuery: function MylistComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imgs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.overlays = _t);
    } }, decls: 8, vars: 3, consts: [[1, "bg"], [3, "className"], ["class", "no-item", 4, "ngIf"], [4, "ngIf"], [1, "footer"], [1, "container"], [1, "text-muted"], [1, "no-item"], [1, "headline"], [1, "wrapper"], [3, "className", 4, "ngFor", "ngForOf"], [3, "src", "routerLink", "id"], ["imgs", ""], [3, "className", "id", "routerLink", "mouseover", "mouseleave"], ["overlays", ""], [1, "overlay-span"]], template: function MylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MylistComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MylistComponent_div_3_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Powered by TMDB. Designed by Yash, Naureen, Purvam and Samipya. Developed by Perry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", ctx.contentClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mylist.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mylist.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".bg[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 3.5em);\n    padding-top: 1rem;\n}\n.content[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 7.6em);\n    padding: 0 15%;\n}\n.content-mobile[_ngcontent-%COMP%] {\n    padding: 0 4%;\n    min-height: calc(100vh - 8em);\n}\n.no-item[_ngcontent-%COMP%] {\n    padding: 1em .8em;\n    text-align: center;\n    justify-content: center;\n    font-size: 2.5em;\n    color: white;\n}\n.footer[_ngcontent-%COMP%] {\n    padding: .8em 0;\n    text-align: center;\n    background: linear-gradient(to top, rgb(10, 10, 10), rgba(255,255,255,0));\n}\n.text-muted[_ngcontent-%COMP%] {\n    color: #f2f2f2 !important;\n    font-size: 14px;\n}\n.wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n.item[_ngcontent-%COMP%] {\n    width: 13%;\n    margin: 2% 1%;\n    position: relative;\n}\n.item-mobile[_ngcontent-%COMP%] {\n    width: 70%;\n    margin: 0 0 4rem;\n    position: relative;\n}\nimg[_ngcontent-%COMP%] {\n    width: 100%;\n    cursor: pointer;\n}\n.overlay[_ngcontent-%COMP%] {\n    position: absolute; \n    bottom: 0; \n    \n    width: 100%;\n    display: none;\n    color: white;\n    width: 100%;\n    height: 100%;\n    transform: scale(1.1);\n}\n.overlay-mobile[_ngcontent-%COMP%] {\n    position: absolute; \n    bottom: 0; \n    \n    width: 100%;\n    display: block;\n    color: white;\n    width: 100%;\n    height: 100%;\n}\n.overlay-mobile[_ngcontent-%COMP%]:focus {\n    outline: none;\n}\n.overlay-span[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    padding: 8%;\n    font-size: 15px;\n    padding-top: 30%;\n    width: 100%;\n    display: block;\n    background: linear-gradient(to top, black, rgba(0,0,0,.9), rgba(0,0,0,0));\n}\nimg[_ngcontent-%COMP%]:hover    + .overlay[_ngcontent-%COMP%] {\n    display: block;\n    pointer-events: none;\n}\nimg[_ngcontent-%COMP%]:hover {\n    transform: scale(1.1);\n    transition: transform .1s;\n}\nimg[_ngcontent-%COMP%]:focus {\n    outline: none;\n}\n.headline[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 41px;\n    padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlFQUF5RTtBQUM3RTtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULDJGQUEyRjtJQUMzRixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCwyRkFBMkY7SUFDM0YsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7SUFDZCx5RUFBeUU7QUFDN0U7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtBQUNqQiIsImZpbGUiOiJteWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDMuNWVtKTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cbi5jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNy42ZW0pO1xuICAgIHBhZGRpbmc6IDAgMTUlO1xufVxuLmNvbnRlbnQtbW9iaWxlIHtcbiAgICBwYWRkaW5nOiAwIDQlO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4ZW0pO1xufVxuXG4ubm8taXRlbSB7XG4gICAgcGFkZGluZzogMWVtIC44ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAuOGVtIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYigxMCwgMTAsIDEwKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG59XG4udGV4dC1tdXRlZCB7XG4gICAgY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLml0ZW0ge1xuICAgIHdpZHRoOiAxMyU7XG4gICAgbWFyZ2luOiAyJSAxJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaXRlbS1tb2JpbGUge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiAwIDAgNHJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICBib3R0b206IDA7IFxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrLCByZ2JhKDIzLCAyMywgMjMsIDApLCByZ2JhKDIzLCAyMywgMjMsIDApKTsgICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5vdmVybGF5LW1vYmlsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICBib3R0b206IDA7IFxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrLCByZ2JhKDIzLCAyMywgMjMsIDApLCByZ2JhKDIzLCAyMywgMjMsIDApKTsgICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5vdmVybGF5LW1vYmlsZTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLm92ZXJsYXktc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiA4JTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDMwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjaywgcmdiYSgwLDAsMCwuOSksIHJnYmEoMCwwLDAsMCkpO1xufVxuICBcbmltZzpob3ZlciArIC5vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuaW1nOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcztcbn1cblxuaW1nOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uaGVhZGxpbmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDQxcHg7XG4gICAgcGFkZGluZzogMnJlbTtcbn0iXX0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-service.service */ "O+Oc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../carousel/carousel.component */ "EfPX");
/* harmony import */ var _card_carousel_card_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card-carousel/card-carousel.component */ "CN6l");







function HomeComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-carousel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx_r8.playingImages)("ids", ctx_r8.playingIds)("titles", ctx_r8.playingTitles)("posters", ctx_r8.playingPosters);
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_2_div_1_Template, 2, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.playingIds.length > 0);
} }
function HomeComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-card-carousel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r9.CWTypes)("images", ctx_r9.CWImages)("ids", ctx_r9.CWIds)("titles", ctx_r9.CWTitles);
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_3_div_1_Template, 4, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.CWIds.length > 0);
} }
function HomeComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Popular Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-card-carousel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r10.mvTypes)("images", ctx_r10.popularMvImages)("ids", ctx_r10.popularMvIds)("titles", ctx_r10.popularMvTitles);
} }
function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_4_div_1_Template, 4, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.popularMvIds.length > 0);
} }
function HomeComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Top Rated Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-card-carousel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r11.mvTypes)("images", ctx_r11.topMvImages)("ids", ctx_r11.topMvIds)("titles", ctx_r11.topMvTitles);
} }
function HomeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_5_div_1_Template, 4, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.topMvIds.length > 0);
} }
function HomeComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Trending Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-card-carousel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r12.mvTypes)("images", ctx_r12.trendingMvImages)("ids", ctx_r12.trendingMvIds)("titles", ctx_r12.trendingMvTitles);
} }
function HomeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_6_div_1_Template, 4, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.trendingMvIds.length > 0);
} }
function HomeComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Popular TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-card-carousel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r13.tvTypes)("images", ctx_r13.popularTvImages)("ids", ctx_r13.popularTvIds)("titles", ctx_r13.popularTvTitles);
} }
function HomeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_7_div_1_Template, 4, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.popularTvIds.length > 0);
} }
function HomeComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Top Rated TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-card-carousel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r14.tvTypes)("images", ctx_r14.topTvImages)("ids", ctx_r14.topTvIds)("titles", ctx_r14.topTvTitles);
} }
function HomeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_8_div_1_Template, 4, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.topTvIds.length > 0);
} }
function HomeComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Trending TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-card-carousel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r15.tvTypes)("images", ctx_r15.trendingTvImages)("ids", ctx_r15.trendingTvIds)("titles", ctx_r15.trendingTvTitles);
} }
function HomeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_9_div_1_Template, 4, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.trendingTvIds.length > 0);
} }
class HomeComponent {
    constructor(breakpointObserver, service) {
        this.breakpointObserver = breakpointObserver;
        this.service = service;
        this.getPlayingData();
        this.getContinueWatching();
    }
    ngOnInit() {
        this.isMobile = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset);
        this.getHomeData();
    }
    splitArrayIntoChunksOfLen(arr, len) {
        var chunks = [], i = 0, n = arr.length;
        while (i < n) {
            chunks.push(arr.slice(i, i += len));
        }
        return chunks;
    }
    splitCards(json) {
        let n = 6;
        let full_ids = json.map((each) => each.id);
        let full_imgs = json.map((each) => each.img);
        let full_titles = json.map((each) => each.title);
        let ids = this.splitArrayIntoChunksOfLen(full_ids, n);
        let imgs = this.splitArrayIntoChunksOfLen(full_imgs, n);
        let titles = this.splitArrayIntoChunksOfLen(full_titles, n);
        return { "titles": titles, "imgs": imgs, "ids": ids };
    }
    getPlayingData() {
        this.service.getPlayingData().subscribe((res) => {
            let json = JSON.parse(JSON.stringify(res));
            this.playingImages = json.map((each) => each.img);
            this.playingIds = json.map((each) => each.id);
            this.playingTitles = json.map((each) => each.title);
            this.playingPosters = json.map((each) => each.poster);
        }, (error) => {
            console.log(error);
        });
    }
    getHomeData() {
        this.service.getHomeData().subscribe(res => {
            let json = JSON.parse(JSON.stringify(res));
            console.log(json);
            let trendmv_tmp = this.splitCards(json.trendmv);
            this.trendingMvIds = trendmv_tmp.ids;
            this.trendingMvImages = trendmv_tmp.imgs;
            this.trendingMvTitles = trendmv_tmp.titles;
            let popmv_tmp = this.splitCards(json.popmv);
            this.popularMvIds = popmv_tmp.ids;
            this.popularMvImages = popmv_tmp.imgs;
            this.popularMvTitles = popmv_tmp.titles;
            let topmv_tmp = this.splitCards(json.topmv);
            this.topMvIds = topmv_tmp.ids;
            this.topMvImages = topmv_tmp.imgs;
            this.topMvTitles = topmv_tmp.titles;
            let trendtv_tmp = this.splitCards(json.trendtv);
            this.trendingTvIds = trendtv_tmp.ids;
            this.trendingTvImages = trendtv_tmp.imgs;
            this.trendingTvTitles = trendtv_tmp.titles;
            let poptv_tmp = this.splitCards(json.poptv);
            this.popularTvIds = poptv_tmp.ids;
            this.popularTvImages = poptv_tmp.imgs;
            this.popularTvTitles = poptv_tmp.titles;
            let toptv_tmp = this.splitCards(json.toptv);
            this.topTvIds = toptv_tmp.ids;
            this.topTvImages = toptv_tmp.imgs;
            this.topTvTitles = toptv_tmp.titles;
            // types
            this.mvTypes = this.typeInit('movie');
            this.tvTypes = this.typeInit('tv');
        });
    }
    getContinueWatching() {
        let x = window.localStorage.getItem("watching");
        let json = JSON.parse(x);
        console.log(json);
        let CW_tmp = this.splitCards(json);
        this.CWIds = CW_tmp.ids;
        this.CWImages = CW_tmp.imgs;
        this.CWTitles = CW_tmp.titles;
        let CW_types = json.map((each) => each.type);
        this.CWTypes = this.splitArrayIntoChunksOfLen(CW_types, 6);
    }
    typeInit(type) {
        let json = Array(24).fill(type);
        return this.splitArrayIntoChunksOfLen(json, 6);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 15, vars: 12, consts: [[1, "bg"], [4, "ngIf"], [1, "placeholder"], [1, "footer"], [1, "container"], [1, "text-muted"], ["class", "top-slide", 4, "ngIf"], [1, "top-slide"], [3, "images", "ids", "titles", "posters"], ["class", "card-carousel", 4, "ngIf"], [1, "card-carousel"], [1, "title"], [3, "type", "images", "ids", "titles"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_div_5_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomeComponent_div_6_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomeComponent_div_8_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomeComponent_div_9_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Powered by TMDB. Designed by Yash, Naureen, Purvam and Samipya. Developed by Perry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("padding", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 10, ctx.isMobile)) == null ? null : tmp_0_0.matches) ? "0 5%" : "0 8%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.playingIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.CWIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.popularMvIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.topMvIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.trendingMvIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.popularTvIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.topTvIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.trendingTvIds);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _card_carousel_card_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CardCarouselComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".bg[_ngcontent-%COMP%] {\n    min-height: 100vh;\n}\n\n.title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 41px;\n    padding-left: 3.5%;\n    padding-bottom: 1.5rem;\n}\n\n.placeholder[_ngcontent-%COMP%] {\n    height: 10rem;\n}\n\n.footer[_ngcontent-%COMP%] {\n    padding: .8em 0;\n    text-align: center;\n    background: linear-gradient(to top, rgb(10, 10, 10), rgba(255,255,255,0));\n}\n\n.text-muted[_ngcontent-%COMP%] {\n    color: #f2f2f2 !important;\n    font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlFQUF5RTtBQUM3RTs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi50aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNDFweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuNSU7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgICBoZWlnaHQ6IDEwcmVtO1xufVxuXG4uZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAuOGVtIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYigxMCwgMTAsIDEwKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG59XG4udGV4dC1tdXRlZCB7XG4gICAgY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CN6l":
/*!**********************************************************!*\
  !*** ./src/app/card-carousel/card-carousel.component.ts ***!
  \**********************************************************/
/*! exports provided: CardCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCarouselComponent", function() { return CardCarouselComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["carousel"];
const _c1 = ["imgs"];
const _c2 = ["overlays"];
function CardCarouselComponent_div_1_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r5 = ctx_r7.index;
    const img_r4 = ctx_r7.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", ctx_r6.splited_types[i_r5][0], "/", ctx_r6.splited_ids[i_r5][0], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r4[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.splited_titles[i_r5][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", ctx_r6.splited_types[i_r5][1], "/", ctx_r6.splited_ids[i_r5][1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r4[1], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.splited_titles[i_r5][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", ctx_r6.splited_types[i_r5][2], "/", ctx_r6.splited_ids[i_r5][2], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r4[2], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.splited_titles[i_r5][2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", ctx_r6.splited_types[i_r5][3], "/", ctx_r6.splited_ids[i_r5][3], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r4[3], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.splited_titles[i_r5][3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", ctx_r6.splited_types[i_r5][4], "/", ctx_r6.splited_ids[i_r5][4], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r4[4], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.splited_titles[i_r5][4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", ctx_r6.splited_types[i_r5][5], "/", ctx_r6.splited_ids[i_r5][5], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r4[5], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.splited_titles[i_r5][5]);
} }
function CardCarouselComponent_div_1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CardCarouselComponent_div_1_3_ng_template_0_Template, 31, 24, "ng-template", 5);
} }
function CardCarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngb-carousel", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("slide", function CardCarouselComponent_div_1_Template_ngb_carousel_slide_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CardCarouselComponent_div_1_3_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("interval", 0)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.splited_imgs);
} }
function CardCarouselComponent_div_2_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function CardCarouselComponent_div_2_3_ng_template_0_Template_div_mouseover_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.mouseOver(i_r13); })("mouseleave", function CardCarouselComponent_div_2_3_ng_template_0_Template_div_mouseleave_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.mouseLeave(i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const img_r12 = ctx_r22.$implicit;
    const i_r13 = ctx_r22.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", ctx_r14.full_types[i_r13], "/", ctx_r14.full_ids[i_r13], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("className", ctx_r14.overlayClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r14.full_titles[i_r13]);
} }
function CardCarouselComponent_div_2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CardCarouselComponent_div_2_3_ng_template_0_Template, 8, 5, "ng-template", 5);
} }
function CardCarouselComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngb-carousel", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("slide", function CardCarouselComponent_div_2_Template_ngb_carousel_slide_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CardCarouselComponent_div_2_3_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("interval", 0)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.full_imgs);
} }
class CardCarouselComponent {
    // public isMobile!: Observable<BreakpointState>;
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isMobile = false;
        this.overlayClass = "overlay";
        this.onePageStyle = "";
        this.full_ids = [];
        this.full_titles = [];
        this.full_imgs = [];
        this.full_types = [];
        this.splited_ids = [];
        this.splited_titles = [];
        this.splited_imgs = [];
        this.splited_types = [];
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
    }
    ngOnInit() {
        // Breakpoints.Handset
        this.combineList();
        this.preserveList();
        console.log(this.splited_ids);
        /* movile vs. desktop */
        // '(max-width: 911px)'
        this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).subscribe((state) => {
            if (state.matches) {
                this.isMobile = true;
                this.overlayClass = "overlay-mobile";
                this.onePageStyle = "hide-indicators";
                if (this.full_ids.length == 1) {
                    this.onePageStyle = "hide-indicators hide-arrow";
                }
                else {
                    this.onePageStyle = "hide-indicators";
                }
            }
            else {
                this.isMobile = false;
                this.overlayClass = "overlay";
                this.onePageStyle = "";
                if (this.splited_ids.length == 1) {
                    console.log('only 1 page');
                    this.onePageStyle = "hide-indicators hide-arrow";
                }
                else {
                    this.onePageStyle = "";
                }
            }
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    combineList() {
        // original: [[1,2,3,4,5,6], [1,2,3]]
        this.full_ids = this.ids.flat(1);
        this.full_titles = this.titles.flat(1);
        this.full_imgs = this.images.flat(1);
        this.full_types = this.type.flat(1);
    }
    preserveList() {
        this.splited_ids = this.ids;
        this.splited_imgs = this.images;
        this.splited_titles = this.titles;
        this.splited_types = this.type;
    }
    mouseOver(idx) {
        if (this.isMobile) {
            let imgarr = this.imgs.toArray();
            let overlayarr = this.overlays.toArray();
            imgarr[idx].nativeElement.style.transform = 'scale(1.1)';
            imgarr[idx].nativeElement.style.transition = 'transform .1s';
            overlayarr[idx].nativeElement.style.transform = 'scale(1.1)';
            overlayarr[idx].nativeElement.style.cursor = 'pointer';
            overlayarr[idx].nativeElement.style.transition = 'transform .1s';
        }
    }
    mouseLeave(idx) {
        if (this.isMobile) {
            let imgarr = this.imgs.toArray();
            let overlayarr = this.overlays.toArray();
            imgarr[idx].nativeElement.style.transform = 'none';
            overlayarr[idx].nativeElement.style.transform = 'none';
        }
    }
}
CardCarouselComponent.ɵfac = function CardCarouselComponent_Factory(t) { return new (t || CardCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
CardCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CardCarouselComponent, selectors: [["app-card-carousel"]], viewQuery: function CardCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.imgs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.overlays = _t);
    } }, inputs: { images: "images", ids: "ids", titles: "titles", type: "type" }, decls: 3, vars: 3, consts: [[1, "bg", 3, "className"], [4, "ngIf"], [3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "box"], [1, "item"], [1, "slide-img", 3, "src", "routerLink"], [1, "overlay"], [1, "item-mobile"], [1, "slide-img", 3, "src"], ["imgs", ""], [3, "className", "routerLink", "mouseover", "mouseleave"], ["overlays", ""], [1, "overlay-span"]], template: function CardCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CardCarouselComponent_div_1_Template, 4, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CardCarouselComponent_div_2_Template, 4, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("className", ctx.onePageStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".bg[_ngcontent-%COMP%] {\n    margin: 0 auto;\n}\n\n.box[_ngcontent-%COMP%] {\n    \n    \n    \n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n  ngb-carousel:focus {\n    outline: none;\n}\n\n[_nghost-%COMP%]     .carousel-control-prev {\n    left: 0;\n    width: 5%;\n    transform: translateY(-1.5rem);\n}\n\n[_nghost-%COMP%]     .carousel-control-next {\n    right: 0;\n    width: 5%;\n    transform: translateY(-1.5rem);\n}\n\n.slide-img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 8%;\n}\n\n.item[_ngcontent-%COMP%] {\n    margin: 0 1%;\n    width: 13%;\n    height: 95%;\n    position: relative;\n    padding-bottom: 4rem;\n}\n\n.item-mobile[_ngcontent-%COMP%] {\n    margin: 0 1%;\n    height: 95%;\n    position: relative;\n    padding-bottom: 4rem;\n    width: 75%;\n}\n\n.item[_ngcontent-%COMP%]:hover, .item[_ngcontent-%COMP%]:focus {\n    outline: none;\n}\n\n.item-mobile[_ngcontent-%COMP%]:hover, .item-mobile[_ngcontent-%COMP%]:focus {\n    outline: none;\n}\n\n.overlay[_ngcontent-%COMP%] {\n    position: absolute; \n    bottom: 0; \n    \n    display: none;\n    color: white;\n    left: 0px;\n    right: 0px;\n    height: 100%;\n    transform: scale(1.1);\n    margin-bottom: 4rem;\n    transition: transform .1s;\n    \n}\n\n.overlay-mobile[_ngcontent-%COMP%] {\n    position: absolute; \n    bottom: 0; \n    \n    display: block;\n    color: white;\n    left: 0px;\n    right: 0px;\n    height: 85%;\n    margin-bottom: 4rem;\n}\n\n.overlay[_ngcontent-%COMP%]:focus, .overlay[_ngcontent-%COMP%]:hover {\n    outline: none;\n}\n\n.overlay-mobile[_ngcontent-%COMP%]:focus, .overlay[_ngcontent-%COMP%]:hover {\n    outline: none;\n}\n\n.overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    padding: 8%;\n    padding-top: 30%;\n    font-size: 15px;\n    background: linear-gradient(to top, black, rgba(0,0,0,.9), rgba(0,0,0,0)); \n}\n\n.overlay-span[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    padding: 8%;\n    font-size: 15px;\n    padding-top: 30%;\n    background: linear-gradient(to top, black, rgba(0,0,0,.9), rgba(0,0,0,0));\n}\n\nimg[_ngcontent-%COMP%]:hover    + .overlay[_ngcontent-%COMP%] {\n    display: block;\n    pointer-events: none;\n}\n\nimg[_ngcontent-%COMP%]:hover {\n    transform: scale(1.1);\n    transition: transform .1s;\n    cursor: pointer;\n    outline: none;\n}\n\nimg[_ngcontent-%COMP%]:focus {\n    outline: none;\n}\n\n.hide-indicators[_ngcontent-%COMP%]     .carousel-indicators {\n    display: none;\n}\n\n.hide-arrow[_ngcontent-%COMP%]     .carousel-control-prev {\n    display: none;\n}\n\n.hide-arrow[_ngcontent-%COMP%]     .carousel-control-next {\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0RBQW9EO0lBQ3BELHVDQUF1QztJQUN2QyxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsU0FBUztJQUNULDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxxRkFBcUY7SUFDckYsYUFBYTtJQUNiLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULHFGQUFxRjtJQUNyRixjQUFjO0lBQ2QsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUdBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlFQUF5RTtBQUM3RTs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5RUFBeUU7QUFDN0U7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoiY2FyZC1jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJveCB7XG4gICAgLyogcGFkZGluZzogMCA1JTsgKi9cbiAgICAvKiBmb3IgcmVjYyBhbmQgc2ltIHR2L212cyBzaG91bGQgYmUgcGFkZGluZzogMCAwOyAqL1xuICAgIC8qIG5lZWQgYSB2YXJpYWJsZSB0byBpbmplY3QgaW4gc3R5bGUgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIG5nYi1jYXJvdXNlbDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41cmVtKTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiA1JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNXJlbSk7XG59XG5cbi5zbGlkZS1pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDglO1xufVxuLml0ZW0ge1xuICAgIG1hcmdpbjogMCAxJTtcbiAgICB3aWR0aDogMTMlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcbn1cbi5pdGVtLW1vYmlsZSB7XG4gICAgbWFyZ2luOiAwIDElO1xuICAgIGhlaWdodDogOTUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcbiAgICB3aWR0aDogNzUlO1xufVxuLml0ZW06aG92ZXIsIC5pdGVtOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLml0ZW0tbW9iaWxlOmhvdmVyLCAuaXRlbS1tb2JpbGU6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIGJvdHRvbTogMDsgXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2ssIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMCkpOyAgKi9cbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcztcbiAgICAvKiBtYXJnaW4tdG9wOiAxNSU7ICovXG59XG4ub3ZlcmxheS1tb2JpbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgYm90dG9tOiAwOyBcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjaywgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwKSk7ICAqL1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBoZWlnaHQ6IDg1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuLm92ZXJsYXk6Zm9jdXMsIC5vdmVybGF5OmhvdmVyIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLm92ZXJsYXktbW9iaWxlOmZvY3VzLCAub3ZlcmxheTpob3ZlciB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuXG4ub3ZlcmxheSBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDglO1xuICAgIHBhZGRpbmctdG9wOiAzMCU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrLCByZ2JhKDAsMCwwLC45KSwgcmdiYSgwLDAsMCwwKSk7IFxufVxuXG4ub3ZlcmxheS1zcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDglO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMzAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrLCByZ2JhKDAsMCwwLC45KSwgcmdiYSgwLDAsMCwwKSk7XG59XG4gIFxuaW1nOmhvdmVyICsgLm92ZXJsYXkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5pbWc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5pbWc6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5oaWRlLWluZGljYXRvcnMgOjpuZy1kZWVwIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmhpZGUtYXJyb3cgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uaGlkZS1hcnJvdyA6Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5cblxuXG4iXX0= */"] });


/***/ }),

/***/ "EfPX":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-service.service */ "O+Oc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = ["carousel"];
function CarouselComponent_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r3 = ctx_r5.index;
    const img_r2 = ctx_r5.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r4.ids[i_r3], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("className", ctx_r4.imgClass)("src", img_r2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("className", ctx_r4.overlayClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.titles[i_r3]);
} }
function CarouselComponent_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CarouselComponent_3_ng_template_0_Template, 6, 5, "ng-template", 4);
} }
class CarouselComponent {
    constructor(breakpointObserver, service) {
        this.breakpointObserver = breakpointObserver;
        this.service = service;
        this.mobileClass = "bg";
        this.imgClass = "slide-img";
        this.overlayClass = "overlay";
        this.images = [];
        this.ids = [];
        this.titles = [];
        this.posters = [];
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).subscribe((state) => {
            if (state.matches) {
                this.isMobile = true;
                this.mobileClass = "hide-indicators bg-mobile";
                this.imgClass = "slide-img-mobile";
                this.overlayClass = "overlay-mobile";
            }
            else {
                this.isMobile = false;
                this.mobileClass = "bg";
                this.imgClass = "slide-img";
                this.overlayClass = "overlay";
            }
        });
    }
    ngOnInit() {
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_3__["AppServiceService"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, inputs: { images: "images", ids: "ids", titles: "titles", posters: "posters" }, decls: 4, vars: 5, consts: [[1, "bg", 3, "className"], [3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "routerLink"], [1, "picsum-img-wrapper", "item"], [3, "className", "src"], [3, "className"], [1, "overlay-span"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngb-carousel", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("slide", function CarouselComponent_Template_ngb_carousel_slide_1_listener($event) { return ctx.onSlide($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CarouselComponent_3_Template, 1, 0, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("className", ctx.mobileClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx.pauseOnHover)("pauseOnFocus", ctx.pauseOnFocus);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".bg[_ngcontent-%COMP%] {\n    padding: 2rem 7.5%; \n}\n.bg-mobile[_ngcontent-%COMP%] {\n    padding: 1rem 0rem;\n}\n.slide-img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 480px;\n    object-fit: cover;\n    object-position: 100% 0;\n}\n.slide-img-mobile[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 25vh;\n    object-fit: cover;\n    object-position: 100% 0;\n}\n.hide-indicators[_ngcontent-%COMP%]     .carousel-indicators {\n    display: none;\n}\n[_nghost-%COMP%]     .carousel-control-prev {\n    width: 7%;\n}\n[_nghost-%COMP%]     .carousel-control-next {\n    width: 7%;\n}\n.item[_ngcontent-%COMP%] {\n    position: relative;\n}\n.overlay[_ngcontent-%COMP%] {\n    position: absolute; \n    bottom: 0; \n    background: linear-gradient(to top, black, rgba(23, 23, 23, 0)); \n    width: 100%;\n    display: none;\n    color: white;\n    width: 100%;\n    height: 30%;\n    transform: scale(1.1);\n}\n.overlay-mobile[_ngcontent-%COMP%] {\n    position: absolute; \n    bottom: 0; \n    background: linear-gradient(to top, black, rgba(23, 23, 23, 0)); \n    width: 100%;\n    display: block;\n    color: white;\n    width: 100%;\n    height: 30%;\n    transform: none;\n}\n.overlay-span[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    font-size: 17px;\n    margin: 0% 5%; \n    padding: 3%;\n}\nimg[_ngcontent-%COMP%]:hover    + .overlay[_ngcontent-%COMP%] {\n    display: block;\n    pointer-events: none;\n}\nimg[_ngcontent-%COMP%]:hover {\n    transform: scale(1.1);\n    transition: transform .1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsK0RBQStEO0lBQy9ELFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULCtEQUErRDtJQUMvRCxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XG4gICAgcGFkZGluZzogMnJlbSA3LjUlOyBcbn1cbi5iZy1tb2JpbGUge1xuICAgIHBhZGRpbmc6IDFyZW0gMHJlbTtcbn1cblxuLnNsaWRlLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0ODBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IDEwMCUgMDtcbn1cbi5zbGlkZS1pbWctbW9iaWxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1dmg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiAxMDAlIDA7XG59XG5cbi5oaWRlLWluZGljYXRvcnMgOjpuZy1kZWVwIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gICAgd2lkdGg6IDclO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIHdpZHRoOiA3JTtcbn1cblxuLml0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIGJvdHRvbTogMDsgXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2ssIHJnYmEoMjMsIDIzLCAyMywgMCkpOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4ub3ZlcmxheS1tb2JpbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgYm90dG9tOiAwOyBcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjaywgcmdiYSgyMywgMjMsIDIzLCAwKSk7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5vdmVybGF5LXNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIG1hcmdpbjogMCUgNSU7IFxuICAgIHBhZGRpbmc6IDMlO1xufVxuICBcbmltZzpob3ZlciArIC5vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuaW1nOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcztcbn1cblxuIl19 */"] });


/***/ }),

/***/ "O+Oc":
/*!****************************************!*\
  !*** ./src/app/app-service.service.ts ***!
  \****************************************/
/*! exports provided: AppServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServiceService", function() { return AppServiceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





// const DOMAIN = "http://localhost:8000";
const DOMAIN = "https://bythemoviedb.wl.r.appspot.com";
class AppServiceService {
    constructor(http) {
        this.http = http;
    }
    getPlayingData() {
        return this.http.get(`${DOMAIN}/playing`);
    }
    getHomeData() {
        return this.http.get(`${DOMAIN}/home`);
    }
    getMovieDetail(id, type) {
        return this.http.get(`${DOMAIN}/${type}/${id}`);
    }
    getCastDetail(id) {
        return this.http.get(`${DOMAIN}/cast/${id}`);
    }
    search(query) {
        if (query === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.append('query', query);
        return this.http.get(`${DOMAIN}/search?query=${query}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response));
    }
}
AppServiceService.ɵfac = function AppServiceService_Factory(t) { return new (t || AppServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AppServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AppServiceService, factory: AppServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-service.service */ "O+Oc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function AppComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ngb-highlight", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r2 = ctx.result;
    const t_r3 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", r_r2.type, "/", r_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", r_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("result", r_r2.title)("term", t_r3);
} }
const TEST_MODE = false;
class AppComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.searching = false;
        this.searchFailed = false;
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(() => this.searching = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(term => this.service.search(term)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(() => this.searching = false));
        this.isMenuCollapsed = true;
        /* detect route */
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                console.log(event);
                if (event.url.includes('watch')) {
                    this.HomeClass = "nav-link home-not-selected";
                }
                else if (event.url.includes('mylist')) {
                    this.HomeClass = "nav-link home-not-selected";
                }
                else {
                    this.HomeClass = "nav-link active";
                }
            }
        });
    }
    onWindowScroll() {
        var scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 0) {
            document.getElementById('nav').className = "fixed-top";
            document.getElementById('bg').style.paddingTop = '3.5rem';
        }
        else {
            document.getElementById('nav').className = "";
            document.getElementById('bg').style.paddingTop = '0';
        }
    }
    ngOnInit() {
        // init continue-watching & myList local storage
        if (TEST_MODE) {
            window.localStorage.clear();
        }
        if (!window.localStorage.getItem("watching")) {
            let l = [];
            window.localStorage.setItem("watching", JSON.stringify(l));
        }
        if (!window.localStorage.getItem("mylist")) {
            let l2 = [];
            window.localStorage.setItem("mylist", JSON.stringify(l2));
        }
        // if (window.location.href.includes('mylist')) {
        //   console.log('on mylist')
        //   this.HomeClass = "nav-link home-not-selected"
        // } else {
        //   console.log('on home')
        //   this.HomeClass = "nav-link active"
        // }
    }
    inputFormatBandListValue(value) {
        if (value.title)
            return value.title;
        return value;
    }
    onSelect($event) {
        $event.preventDefault();
        this.model = "";
        this.isMenuCollapsed = true;
    }
    ;
    changeButtonColor(idx) {
        if (idx == 0) {
            console.log("On Home");
            this.HomeClass = "nav-link active";
        }
        else {
            this.HomeClass = "nav-link home-not-selected";
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]])], decls: 21, vars: 8, consts: [["id", "bg", 1, "background"], ["id", "nav", 1, ""], [1, "navbar", "navbar-expand-lg", "navbar-dark"], [1, "container-fluid"], ["routerLink", "/", "routerLinkActive", "active", 1, "navbar-brand", 3, "click"], ["type", "button", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 3, "className", "click"], ["routerLink", "/mylist", "routerLinkActive", "active", 1, "nav-link", 3, "click"], [1, "form-inline", "my-2", "my-lg-0"], ["name", "search-form", "id", "typeahead-http", "type", "text", "placeholder", "search", 1, "form-control", "mx-sm-3", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "selectItem"], ["rt", ""], [3, "routerLink"], [1, "search-img", 3, "src"], [1, "search-title", 3, "result", "term"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_a_click_4_listener() { return ctx.isMenuCollapsed = true; })("click", function AppComponent_Template_a_click_4_listener() { return ctx.changeButtonColor(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.isMenuCollapsed = !ctx.isMenuCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_a_click_11_listener() { return ctx.isMenuCollapsed = true; })("click", function AppComponent_Template_a_click_11_listener() { return ctx.changeButtonColor(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_a_click_14_listener() { return ctx.isMenuCollapsed = true; })("click", function AppComponent_Template_a_click_14_listener() { return ctx.changeButtonColor(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_17_listener($event) { return ctx.model = $event; })("selectItem", function AppComponent_Template_input_selectItem_17_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AppComponent_ng_template_18_Template, 3, 5, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "router-outlet");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("className", ctx.HomeClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ctx.searchFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultTemplate", _r0)("inputFormatter", ctx.inputFormatBandListValue);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbHighlight"]], styles: [".background[_ngcontent-%COMP%] {\n    \n}\n\n.home-not-selected[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, .5) !important;\n}\n\n.home-not-selected[_ngcontent-%COMP%]:hover {\n    color: rgba(255, 255, 255, 0.75) !important;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    padding: .5em 3em;\n    background-color: rgb(6,12,42);\n}\n\n.nav-link[_ngcontent-%COMP%] {\n    float: right;\n}\n\n.nav-link[_ngcontent-%COMP%]:focus {\n    color: rgba(255, 255, 255, 1) !important;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n    color: aliceblue;\n}\n\n.form-control[_ngcontent-%COMP%] {\n    background-color: rgb(6,12,42);\n    width: 80%;\n    outline: none;\n    border-radius: 0%;\n    border: #021b45;\n    border-bottom: 2px solid white;\n    color: white;\n}\n\n  .dropdown-menu {\n    \n    background-color: #070D2f;\n    color: white;\n    border: 1px solid lightgrey;\n    border-radius: 5px;\n}\n\n  .dropdown-item {\n    padding: 0.25rem 0.5rem;\n    font-size: 85%;\n    color: white;\n}\n\n.search-img[_ngcontent-%COMP%] {\n    width: 3rem;\n}\n\n.search-title[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n    padding-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUNBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzA3MEQyZjsgKi9cbn1cblxuLmhvbWUtbm90LXNlbGVjdGVkIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSkgIWltcG9ydGFudDtcbn1cbi5ob21lLW5vdC1zZWxlY3RlZDpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhciB7XG4gICAgcGFkZGluZzogLjVlbSAzZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsMTIsNDIpO1xufVxuXG4ubmF2LWxpbmsge1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5uYXYtbGluazpmb2N1cyB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci10b2dnbGVyIHtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwxMiw0Mik7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgIGJvcmRlcjogIzAyMWI0NTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnUge1xuICAgIC8qIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwRDJmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG46Om5nLWRlZXAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogODUlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlYXJjaC1pbWcge1xuICAgIHdpZHRoOiAzcmVtO1xufVxuLnNlYXJjaC10aXRsZSB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mylist/mylist.component */ "76GK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel/carousel.component */ "EfPX");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "n2lM");
/* harmony import */ var _card_carousel_card_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card-carousel/card-carousel.component */ "CN6l");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_4__["MylistComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"],
        _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_9__["MovieDetailComponent"],
        _card_carousel_card_carousel_component__WEBPACK_IMPORTED_MODULE_10__["CardCarouselComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]] }); })();


/***/ }),

/***/ "n2lM":
/*!********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-service.service */ "O+Oc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _card_carousel_card_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../card-carousel/card-carousel.component */ "CN6l");












const _c0 = ["selfClosingAlert"];
function MovieDetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "youtube-player", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("videoId", ctx_r0.video.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("height", ctx_r0.youtubeHeight)("width", ctx_r0.youtubeWidth);
} }
function MovieDetailComponent_div_3_ngb_alert_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngb-alert", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closed", function MovieDetailComponent_div_3_ngb_alert_19_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r9.alertType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r9.successMessage, " ");
} }
function MovieDetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Genres: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Spoken languages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MovieDetailComponent_div_3_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.addOrRemove(); })("click", function MovieDetailComponent_div_3_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.changeSuccessMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, MovieDetailComponent_div_3_ngb_alert_19_Template, 3, 2, "ngb-alert", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("className", ctx_r1.textClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.details.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.details.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", ctx_r1.details.year, " | \u2605 ", ctx_r1.details.vote, " | ", ctx_r1.details.runtime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.details.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.details.spoken_languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.buttonText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.successMessage);
} }
function MovieDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.details.overview);
} }
function MovieDetailComponent_div_12_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MovieDetailComponent_div_12_div_1_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const cast_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r19.getCastDetail(cast_r18.id); })("click", function MovieDetailComponent_div_12_div_1_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17); return ctx_r21.openModal(_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", cast_r18.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cast_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cast_r18.character);
} }
function MovieDetailComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MovieDetailComponent_div_12_div_1_div_4_Template, 10, 3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r16.casts);
} }
function MovieDetailComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MovieDetailComponent_div_12_div_1_Template, 5, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.casts.length > 0);
} }
function MovieDetailComponent_div_13_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("className", ctx_r23.reviewCardClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("className", ctx_r23.reviewCardImgClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", review_r24.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("A review created by ", review_r24.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u2605 ", review_r24.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Written by ", review_r24.author, " on ", ctx_r23.convertDate(review_r24.created_at), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](review_r24.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", review_r24.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function MovieDetailComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MovieDetailComponent_div_13_div_1_div_5_Template, 16, 9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r22.reviews.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r22.reviews);
} }
function MovieDetailComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MovieDetailComponent_div_13_div_1_Template, 6, 2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.reviews.length > 0);
} }
function MovieDetailComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-card-carousel", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r25.type === "movie" ? "Recommended Movies" : "Recommended TV Shows", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r25.types)("images", ctx_r25.reccImages)("ids", ctx_r25.reccIds)("titles", ctx_r25.reccTitles);
} }
function MovieDetailComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MovieDetailComponent_div_14_div_1_Template, 4, 5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.reccIds.length > 0);
} }
function MovieDetailComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-card-carousel", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r26.type === "movie" ? "Similar Movies" : "Similar TV Shows", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r26.types)("images", ctx_r26.simImages)("ids", ctx_r26.simIds)("titles", ctx_r26.simTitles);
} }
function MovieDetailComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MovieDetailComponent_div_15_div_1_Template, 4, 5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.simIds.length > 0);
} }
function MovieDetailComponent_ng_template_16_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MovieDetailComponent_ng_template_16_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const modal_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; return modal_r27.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r28.person.name);
} }
function MovieDetailComponent_ng_template_16_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Birth: ", ctx_r33.person.birthday, " ");
} }
function MovieDetailComponent_ng_template_16_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r34.person.birthplace, " ");
} }
function MovieDetailComponent_ng_template_16_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Gender: ", ctx_r35.person.gender, " ");
} }
function MovieDetailComponent_ng_template_16_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx_r36.person.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r36.person.homepage, "");
} }
function MovieDetailComponent_ng_template_16_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Known for: ", ctx_r37.person.known_for_department, " ");
} }
function MovieDetailComponent_ng_template_16_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r38.person.also_known_as, " ");
} }
function MovieDetailComponent_ng_template_16_div_1_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx_r39.person_imdb, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function MovieDetailComponent_ng_template_16_div_1_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx_r40.person_ig, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function MovieDetailComponent_ng_template_16_div_1_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx_r41.person_fb, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function MovieDetailComponent_ng_template_16_div_1_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx_r42.person_tt, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function MovieDetailComponent_ng_template_16_div_1_div_14_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r44.person.biography);
} }
function MovieDetailComponent_ng_template_16_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MovieDetailComponent_ng_template_16_div_1_div_14_span_3_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r43.person.biography);
} }
function MovieDetailComponent_ng_template_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MovieDetailComponent_ng_template_16_div_1_span_4_Template, 3, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MovieDetailComponent_ng_template_16_div_1_span_5_Template, 3, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MovieDetailComponent_ng_template_16_div_1_span_6_Template, 3, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MovieDetailComponent_ng_template_16_div_1_span_7_Template, 5, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MovieDetailComponent_ng_template_16_div_1_span_8_Template, 3, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, MovieDetailComponent_ng_template_16_div_1_span_9_Template, 3, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, MovieDetailComponent_ng_template_16_div_1_a_10_Template, 2, 1, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MovieDetailComponent_ng_template_16_div_1_a_11_Template, 2, 1, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MovieDetailComponent_ng_template_16_div_1_a_12_Template, 2, 1, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, MovieDetailComponent_ng_template_16_div_1_a_13_Template, 2, 1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, MovieDetailComponent_ng_template_16_div_1_div_14_Template, 4, 1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("className", ctx_r29.modalInfoClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r29.person.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("className", ctx_r29.modalImgClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("className", ctx_r29.modalTextClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r29.person.birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r29.person.birthplace);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r29.person.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r29.person.homepage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r29.person.known_for_department);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r29.person.also_known_as);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r29.person_imdb);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r29.person_ig);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r29.person_fb);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r29.person_tt);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r29.person.biography);
} }
function MovieDetailComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MovieDetailComponent_ng_template_16_div_0_Template, 6, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MovieDetailComponent_ng_template_16_div_1_Template, 15, 15, "div", 58);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.person);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.person);
} }
const YOUTUBE_LINK = `https://www.youtube.com/watch?v=`;
const ADD = "Add to Watchlist";
const REMOVE = "Remove from Watchlist";
class MovieDetailComponent {
    constructor(ar, service, modalService, config, breakpointObserver, router) {
        this.ar = ar;
        this.service = service;
        this.modalService = modalService;
        this.config = config;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isMobile = false;
        this.contentClass = "content row";
        this.textClass = "text";
        this.bgClass = "bg";
        this.modalInfoClass = "modal-info row";
        this.modalImgClass = "modal-img";
        this.modalTextClass = "modal-text";
        this.reviewCardClass = "review-card";
        this.reviewCardImgClass = "card-img";
        this.successMessage = '';
        this.alertType = '';
        this.addedToMyList = false;
        this.buttonText = ADD;
        config.triggers = 'hover';
        console.log('constructor');
    }
    ngOnInit() {
        /* reload data on revisit thru recc&sim */
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        /* responsiveness */
        this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset).subscribe((state) => {
            if (state.matches) {
                this.isMobile = true;
                this.contentClass = "content column";
                this.textClass = "text-mobile";
                this.bgClass = "bg-mobile hide-scrollbar";
                this.modalInfoClass = "modal-info column";
                this.modalImgClass = "modal-img-mobile";
                this.modalTextClass = "modal-text-mobile";
                this.reviewCardClass = "review-card-mobile";
                this.reviewCardImgClass = "card-img-mobile";
            }
            else {
                this.isMobile = false;
                this.contentClass = "content row";
                this.textClass = "text";
                this.bgClass = "bg";
                this.modalInfoClass = "modal-info row";
                this.modalImgClass = "modal-img";
                this.modalTextClass = "modal-text";
                this.reviewCardClass = "review-card";
                this.reviewCardImgClass = "card-img";
            }
        });
        /* window resize */
        this.youtubeWidth = this.isMobile ? window.innerWidth * 0.86 : window.innerWidth * 0.43;
        this.youtubeHeight = this.isMobile ? "180" : "400";
        this.resizeObservable$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize');
        this.resizeSubscription$ = this.resizeObservable$.subscribe((evt) => {
            // not getting here - mobile view dosen't resize
            if (this.isMobile)
                this.youtubeWidth = evt.currentTarget.innerWidth * 0.8;
            else
                this.youtubeWidth = evt.currentTarget.innerWidth * 0.43;
        });
        /* alert */
        this.ar.paramMap.subscribe(params => {
            this.mid = params.get('id');
            this.type = params.get('type');
            this.getDetail(this.mid, this.type);
            this._success.subscribe(message => this.successMessage = message);
            this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(5000)).subscribe(() => {
                if (this.selfClosingAlert) {
                    this.selfClosingAlert.close();
                }
            });
        });
    }
    splitArrayIntoChunksOfLen(arr, len) {
        var chunks = [], i = 0, n = arr.length;
        while (i < n) {
            chunks.push(arr.slice(i, i += len));
        }
        return chunks;
    }
    typeInit(type) {
        let json = Array(24).fill(type);
        return this.splitArrayIntoChunksOfLen(json, 6);
    }
    splitCards(json) {
        let n = 6;
        let full_ids = json.map((each) => each.id);
        let full_imgs = json.map((each) => each.img);
        let full_titles = json.map((each) => each.title);
        let ids = this.splitArrayIntoChunksOfLen(full_ids, n);
        let imgs = this.splitArrayIntoChunksOfLen(full_imgs, n);
        let titles = this.splitArrayIntoChunksOfLen(full_titles, n);
        return { "titles": titles, "imgs": imgs, "ids": ids };
    }
    getDetail(id, type) {
        this.service.getMovieDetail(id, type).subscribe((res) => {
            let json = JSON.parse(JSON.stringify(res));
            this.details = json.detail;
            this.video = json.video;
            this.casts = json.cast;
            this.reviews = json.review;
            let recc_tmp = this.splitCards(json.recc);
            this.reccImages = recc_tmp.imgs;
            this.reccIds = recc_tmp.ids;
            this.reccTitles = recc_tmp.titles;
            let sim_tmp = this.splitCards(json.sim);
            this.simIds = sim_tmp.ids;
            this.simImages = sim_tmp.imgs;
            this.simTitles = sim_tmp.titles;
            console.log(this.details);
            console.log(json);
            this.types = this.typeInit(this.type);
            // check added or not
            this.checkAddedOrNot();
            this.addToStorage(this.details.title, this.details.id, this.details.poster, this.type);
        });
    }
    getCastDetail(id) {
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
            console.log(this.person);
            console.log(json.extra);
        });
    }
    shareOnTwitter(title, link) {
        this.twitter_text = `https://twitter.com/intent/tweet?text=Watch ${title}%0A${YOUTUBE_LINK}${link}%0A%23USC %23CSCI571 %23FightOn`;
    }
    shareOnFacebook(link) {
        this.facebook_text = `https://www.facebook.com/sharer/sharer.php?u=${YOUTUBE_LINK}${link}`;
    }
    openModal(content) {
        this.person = null;
        this.modalService.open(content, { centered: true, size: 'lg', scrollable: true });
    }
    open(content) {
        this.modalService.open(content);
    }
    changeSuccessMessage() {
        this._success.next(this.buttonText == ADD ? `Removed from watchlist.` : `Added to watchlist.`);
        this.alertType = this.buttonText == ADD ? "danger" : "success";
    }
    checkAddedOrNot() {
        console.log('check in list or not...');
        let s = window.localStorage.getItem("mylist");
        let mylist = JSON.parse(s);
        console.log(mylist);
        // assuming each has a poster
        if (mylist.find((x) => `${x.type}+${x.id}` == `${this.type}+${this.details.id}`)) {
            this.addedToMyList = true;
            this.buttonText = REMOVE;
        }
        else {
            this.addedToMyList = false;
            this.buttonText = ADD;
        }
        console.log(this.addedToMyList);
    }
    addOrRemove() {
        if (this.buttonText == ADD) {
            this.buttonText = REMOVE;
            // add to list
            this.addToList(this.details.id, this.type, this.details.poster, this.details.title);
        }
        else {
            this.buttonText = ADD;
            // remove from list
            this.removeFromList(this.type, this.details.id);
        }
    }
    addToList(id, type, poster, title) {
        // call api to get details of this single movie/tv
        // after subscribing -> update it to localStorage
        console.log('add to list...');
        let w = window.localStorage.getItem("mylist");
        let mylist = JSON.parse(w);
        mylist.unshift({ "id": id, "type": type, "img": poster, "title": title });
        console.log(mylist);
        window.localStorage.setItem("mylist", JSON.stringify(mylist));
    }
    removeFromList(type, id) {
        // find in localStorage -> delete
        console.log('remove from list...');
        let w = window.localStorage.getItem("mylist");
        let mylist = JSON.parse(w);
        let idx = 0;
        for (let i = 0, len = mylist.length; i < len; i += 1) {
            let x = mylist[i];
            console.log(`${type}+${id}`);
            console.log(`${x.type}+${x.id}`);
            if (`${type}+${id}` == `${x.type}+${x.id}`) {
                idx = i;
                break;
            }
        }
        console.log('idx to be deleted: ' + idx);
        mylist.splice(idx, 1);
        console.log(mylist);
        window.localStorage.setItem("mylist", JSON.stringify(mylist));
    }
    addToStorage(title, id, img, type) {
        let x = window.localStorage.getItem("watching");
        let watching = JSON.parse(x);
        let key = `${type}+${id}`;
        let check = watching.find((x) => key == `${x.type}+${x.id}`);
        if (check) {
            // find & remove & add to front
            let idx = 0;
            for (let i = 0, len = watching.length; i < len; i += 1) {
                let each = watching[i];
                if (each.img == img) {
                    idx = i;
                    break;
                }
            }
            watching.splice(idx, 1);
            watching.unshift({ "title": title, "id": id, "img": img, "type": type });
            window.localStorage.setItem("watching", JSON.stringify(watching));
            return;
        }
        if (watching.length == 24) {
            watching.splice(23, 1); // remove the last elem from list
        }
        watching.unshift({ "title": title, "id": id, "img": img, "type": type }); // add to front
        window.localStorage.setItem("watching", JSON.stringify(watching));
        console.log('adding to local storage');
    }
    ngOnDestroy() {
        this.resizeSubscription$.unsubscribe();
    }
    convertDate(raw_date) {
        let myDate = new Date(raw_date);
        // timeZone: "America/Los_Angeles", 
        let pstDate = myDate.toLocaleTimeString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
        return pstDate;
    }
}
MovieDetailComponent.ɵfac = function MovieDetailComponent_Factory(t) { return new (t || MovieDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_6__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbPopoverConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
MovieDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MovieDetailComponent, selectors: [["app-movie-detail"]], viewQuery: function MovieDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbPopoverConfig"]])], decls: 22, vars: 11, consts: [[3, "className"], ["class", "video", 4, "ngIf"], [3, "className", 4, "ngIf"], ["class", "desc", 4, "ngIf"], [1, "share"], [1, "headline"], ["target", "_blank", 1, "twitter-share-button", 3, "href", "click"], [1, "fab", "fa-twitter"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 3, "href", "click"], [1, "fab", "fa-facebook-square", 2, "color", "blue"], [4, "ngIf"], ["longContent", ""], [1, "footer"], [1, "container"], [1, "text-muted"], [1, "video"], ["suggestedQuality", "highres", 3, "videoId", "height", "width", "startSeconds", "endSeconds"], [1, "text-title"], [1, "text-tag"], [1, "text-info1"], [1, "text-info2"], [1, "text-button"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "type", "closed", 4, "ngIf"], [3, "type", "closed"], ["selfClosingAlert", ""], [1, "desc"], [1, "desc-text"], ["class", "cast", 4, "ngIf"], [1, "cast"], [1, "headline-large"], [1, "d-flex", "flex-row", "flex-nowrap", "cast-box"], [4, "ngFor", "ngForOf"], ["ngbAutofocus", "", 1, "card", "cast-card", 3, "click"], [1, "card-img-top", 3, "src"], [1, "card-text", "flex-fill"], [1, "cast-name", "real"], [2, "font-weight", "bold"], [1, "cast-name", "char"], ["class", "review", 4, "ngIf"], [1, "review"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "review-card", 3, "className"], [1, "review-card-img", 3, "src"], [1, "card-body"], [1, "card-title", "row"], [1, "card-title-text"], [1, "card-vote"], [1, "card-subtitle"], [1, "card-text"], ["target", "_blank", 2, "color", "blue", "text-decoration", "underline", 3, "href"], ["class", "recc", 4, "ngIf"], [1, "recc"], [3, "type", "images", "ids", "titles"], ["class", "sim", 4, "ngIf"], [1, "sim"], ["class", "modal-header", 4, "ngIf"], ["class", "modal-body", "style", "position: relative;", 4, "ngIf"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "ngbAutofocus", "", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 2, "position", "relative"], [3, "src", "className"], ["target", "_blank", "ngbPopover", "Visit IMDB", 3, "href", 4, "ngIf"], ["target", "_blank", "ngbPopover", "Visit Instagram", 3, "href", 4, "ngIf"], ["target", "_blank", "ngbPopover", "Visit Facebook", 3, "href", 4, "ngIf"], ["target", "_blank", "ngbPopover", "Visit Twitter", 3, "href", 4, "ngIf"], ["class", "modal-bio", 4, "ngIf"], ["target", "_blank", 3, "href"], ["target", "_blank", "ngbPopover", "Visit IMDB", 3, "href"], [1, "fab", "fa-imdb", 2, "color", "#f0cd30"], ["target", "_blank", "ngbPopover", "Visit Instagram", 3, "href"], [1, "fab", "fa-instagram", 2, "color", "purple"], ["target", "_blank", "ngbPopover", "Visit Facebook", 3, "href"], ["target", "_blank", "ngbPopover", "Visit Twitter", 3, "href"], [1, "fab", "fa-twitter", 2, "color", "#1DA1F2"], [1, "modal-bio"]], template: function MovieDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MovieDetailComponent_div_2_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MovieDetailComponent_div_3_Template, 20, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MovieDetailComponent_div_4_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MovieDetailComponent_Template_a_click_8_listener() { return ctx.shareOnTwitter(ctx.details.title, ctx.video.link); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MovieDetailComponent_Template_a_click_10_listener() { return ctx.shareOnFacebook(ctx.video.link); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MovieDetailComponent_div_12_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, MovieDetailComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, MovieDetailComponent_div_14_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, MovieDetailComponent_div_15_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, MovieDetailComponent_ng_template_16_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "footer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Powered by TMDB. Designed by Yash, Naureen, Purvam and Samipya. Developed by Perry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("className", ctx.bgClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("className", ctx.contentClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.video);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx.twitter_text, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx.facebook_text, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.casts);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.reccIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.simIds);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_8__["YouTubePlayer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbAlert"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _card_carousel_card_carousel_component__WEBPACK_IMPORTED_MODULE_9__["CardCarouselComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbPopover"]], styles: [".bg[_ngcontent-%COMP%] {\n    min-height: 100vh;\n    padding: 0 13%;\n    padding-top: 2em !important;\n    color: aliceblue;\n}\n.bg-mobile[_ngcontent-%COMP%] {\n    min-height: 100vh;\n    margin: 0 7%;\n    padding-top: 1rem !important;\n    color: aliceblue;\n}\n.content[_ngcontent-%COMP%] {\n    \n}\n.video[_ngcontent-%COMP%] {\n    margin: 0 auto;\n}\n.text[_ngcontent-%COMP%] {\n    width: 40%;\n    padding: 0 2%;\n    \n}\n.text-mobile[_ngcontent-%COMP%] {\n    width: 100%;\n    \n}\n.text-title[_ngcontent-%COMP%] {\n    font-size: 45px;\n}\n.text-tag[_ngcontent-%COMP%] {\n    font-size: larger;\n    font-style: italic;\n    color: #d3d3d3;\n}\n.text-info1[_ngcontent-%COMP%] {\n    padding: 1.5rem 0 1rem;\n    color: #d3d3d3;\n    font-size: 19.5px;\n}\n.text-info2[_ngcontent-%COMP%] {\n    font-size: 15px;\n    overflow-wrap: break-word;\n}\n.text-info2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: #d3d3d3;\n}\n.text-button[_ngcontent-%COMP%] {\n    padding-top: 1rem;\n}\n.text-button[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n    margin: .5rem 0 0;\n}\n.text-button[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus { outline: none; }\n.alert[_ngcontent-%COMP%] {\n    padding: 0.7rem 1rem;\n    margin-top: 1rem;\n}\n.desc[_ngcontent-%COMP%], .share[_ngcontent-%COMP%] {\n    font-size: normal;\n    padding: .5rem 1.5% 1.5rem;\n}\n.desc-text[_ngcontent-%COMP%] {\n    font-size: 17px;\n    color: #d3d3d3;\n}\n.headline[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n    padding-bottom: .5rem;\n}\n.fab[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin: 0 .2rem;\n}\n.headline-large[_ngcontent-%COMP%] {\n    font-weight: 500;\n    font-size: 30px;\n}\n.cast-box[_ngcontent-%COMP%] {\n    color: black;\n    overflow-x: auto;\n    margin: 0 0 2rem;\n}\n.cast[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n    \n}\n.cast[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 170px;\n    margin: .5em;\n    border: none;\n    border-radius: 10px;\n    height: 335px;\n    flex-direction: column;\n    justify-content: flex-end;\n    overflow: hidden;\n}\n.cast[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n.cast[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0 .5rem 0;\n    height: auto;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n.real[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: bold;\n}\n.char[_ngcontent-%COMP%] {\n    font-size: 14px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 5px;\n    width: .5em;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(184, 182, 182, 0.5);\n    border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background-color: darkgray;\n    border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    display: none;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    display: none;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    display: none;\n}\n.headline-large[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    opacity: .4;\n}\n.review[_ngcontent-%COMP%] {\n    margin-bottom: 5rem;\n}\n.card[_ngcontent-%COMP%] {\n    margin: 1rem 0;\n}\n.review-card[_ngcontent-%COMP%] {\n    color: black;\n    border-radius: 10px;\n    display: flex; \n    flex-direction: row;\n}\n.review-card-mobile[_ngcontent-%COMP%] {\n    color: black;\n    border-radius: 10px;\n    display: inline-block;\n    width: 100%;\n}\n.review-card-img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;    \n}\n.card-img[_ngcontent-%COMP%] {\n    width: 6rem;\n    height: 6rem;\n    margin: 2rem 4rem;\n}\n.card-img-mobile[_ngcontent-%COMP%] {\n    width: 6rem;\n    height: 6rem;\n    margin: 1.25rem 2.25rem 0;\n}\n.review[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 3; \n    -webkit-box-orient: vertical;\n}\n.review[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n    font-weight: 500;\n    margin: 0 0;\n}\n.review[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n    color: slategrey;\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n}\n.card-title-text[_ngcontent-%COMP%] {\n    margin-right: 1rem;\n}\n.card-vote[_ngcontent-%COMP%] {\n    font-size: 22px;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    padding: .1rem .8rem;\n    background-color: black;\n    color:white;\n    border-radius: 50px;\n    white-space: nowrap;\n}\n.recc[_ngcontent-%COMP%]   .headline-large[_ngcontent-%COMP%] {\n    padding-bottom: 1rem;\n}\n.sim[_ngcontent-%COMP%]   .headline-large[_ngcontent-%COMP%] {\n    padding-bottom: 1rem;\n}\n.modal-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    overflow-wrap: break-word;\n}\n.modal-text[_ngcontent-%COMP%] {\n\n}\n.modal-img[_ngcontent-%COMP%]{\n    width: 20%;\n    margin: 0 1.5%;\n}\n.modal-img-mobile[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.modal-text[_ngcontent-%COMP%] {\n    width: 70%;\n    margin-left: .5rem;\n    position: relative;\n}\n.modal-text-mobile[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n}\n.modal-all[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    \n    \n}\n.modal-bio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding: 2% 0 0.5%;\n    margin: 0;\n}\n.modal-bio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 15.5px;\n}\n.fa-instagram[_ngcontent-%COMP%] {\n    \n}\n.modal-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    margin-left: 0;\n    margin-right: .3rem;\n    font-size: 24px;\n    cursor: pointer;\n}\n  .popover {\n    margin-bottom: 1rem;\n    pointer-events: none;\n}\n.footer[_ngcontent-%COMP%] {\n    padding: .8em 0;\n    text-align: center;\n    background: linear-gradient(to top, rgb(10, 10, 10), rgba(255,255,255,0));\n}\n.text-muted[_ngcontent-%COMP%] {\n    color: #f2f2f2 !important;\n    font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixnQkFBZ0I7QUFDcEI7QUFFQTs7QUFFQTtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7QUFDQSwwQkFBMEIsYUFBYSxFQUFFO0FBRXpDO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7O0FBRUE7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtEQUFrRDtJQUNsRCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7O0FBRUE7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJOzs7O29DQUlnQztBQUNwQztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUVBQXlFO0FBQzdFO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQiIsImZpbGUiOiJtb3ZpZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMCAxMyU7XG4gICAgcGFkZGluZy10b3A6IDJlbSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG59XG4uYmctbW9iaWxlIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDAgNyU7XG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xufVxuXG4uY29udGVudCB7XG4gICAgXG59XG4udmlkZW8ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udGV4dCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBwYWRkaW5nOiAwIDIlO1xuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xufVxuLnRleHQtbW9iaWxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBmb250LXNpemU6IDE4cHg7ICovXG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDQ1cHg7XG59XG4udGV4dC10YWcge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogI2QzZDNkMztcbn1cbi50ZXh0LWluZm8xIHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMCAxcmVtO1xuICAgIGNvbG9yOiAjZDNkM2QzO1xuICAgIGZvbnQtc2l6ZTogMTkuNXB4O1xufVxuLnRleHQtaW5mbzIge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuLnRleHQtaW5mbzIgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjZDNkM2QzO1xufVxuLnRleHQtYnV0dG9uIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLnRleHQtYnV0dG9uIC5idG4ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIG1hcmdpbjogLjVyZW0gMCAwO1xufVxuLnRleHQtYnV0dG9uIC5idG46Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9XG5cbi5hbGVydCB7XG4gICAgcGFkZGluZzogMC43cmVtIDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmRlc2MsIC5zaGFyZSB7XG4gICAgZm9udC1zaXplOiBub3JtYWw7XG4gICAgcGFkZGluZzogLjVyZW0gMS41JSAxLjVyZW07XG59XG4uZGVzYy10ZXh0IHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY29sb3I6ICNkM2QzZDM7XG59XG5cbi5oZWFkbGluZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbn1cblxuLmZhYiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbjogMCAuMnJlbTtcbn1cblxuLmhlYWRsaW5lLWxhcmdlIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmNhc3QtYm94IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBtYXJnaW46IDAgMCAycmVtO1xufVxuXG4uY2FzdCAuY2FyZC1pbWctdG9wIHtcbiAgICBcbn1cbi5jYXN0IC5jYXJkIHtcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgbWFyZ2luOiAuNWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMzM1cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXN0IC5jYXJkOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXN0IC5jYXJkLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIC41cmVtIDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5yZWFsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jaGFyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogNXB4O1xuICAgIHdpZHRoOiAuNWVtO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDE4NCwgMTgyLCAxODIsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuXG4uaGlkZS1zY3JvbGxiYXIgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5oaWRlLXNjcm9sbGJhciA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmhpZGUtc2Nyb2xsYmFyIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uaGlkZS1zY3JvbGxiYXIgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4uaGVhZGxpbmUtbGFyZ2Ugc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIG9wYWNpdHk6IC40O1xufVxuXG4ucmV2aWV3IHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5yZXZpZXctY2FyZCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5yZXZpZXctY2FyZC1tb2JpbGUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5yZXZpZXctY2FyZC1pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7ICAgIFxufVxuLmNhcmQtaW1nIHtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgbWFyZ2luOiAycmVtIDRyZW07XG59XG4uY2FyZC1pbWctbW9iaWxlIHtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgbWFyZ2luOiAxLjI1cmVtIDIuMjVyZW0gMDtcbn1cblxuLnJldmlldyAuY2FyZC10ZXh0IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMzsgXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLnJldmlldyAuY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAwIDA7XG59XG4ucmV2aWV3IC5jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogc2xhdGVncmV5O1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5jYXJkLXRpdGxlLXRleHQge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi5jYXJkLXZvdGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogLjFyZW0gLjhyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucmVjYyAuaGVhZGxpbmUtbGFyZ2Uge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuLnNpbSAuaGVhZGxpbmUtbGFyZ2Uge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG4ubW9kYWwtaW5mbyBwIHtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuXG4ubW9kYWwtdGV4dCB7XG5cbn1cblxuLm1vZGFsLWltZ3tcbiAgICB3aWR0aDogMjAlO1xuICAgIG1hcmdpbjogMCAxLjUlO1xufVxuLm1vZGFsLWltZy1tb2JpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9kYWwtdGV4dCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1vZGFsLXRleHQtbW9iaWxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tb2RhbC1hbGwgLmNsb3NlIHtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjYsIDI2LCAyNik7ICovXG4gICAgLyogYm9yZGVyLXJhZGl1czogM3B4OyAqL1xufVxuXG4ubW9kYWwtYmlvIGgzIHtcbiAgICBwYWRkaW5nOiAyJSAwIDAuNSU7XG4gICAgbWFyZ2luOiAwO1xufVxuLm1vZGFsLWJpbyBzcGFuIHtcbiAgICBmb250LXNpemU6IDE1LjVweDtcbn1cblxuLmZhLWluc3RhZ3JhbSB7XG4gICAgLyogY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDEwNyUsICNmZGY0OTcgMCUsICNmZGY0OTcgNSUsICNmZDU5NDkgNDUlLCAjZDYyNDlmIDYwJSwgIzI4NUFFQiA5MCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzMCUgMTA3JSwgI2ZkZjQ5NyAwJSwgI2ZkZjQ5NyA1JSwgI2ZkNTk0OSA0NSUsICNkNjI0OWYgNjAlLCAjMjg1QUVCIDkwJSk7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyAqL1xufVxuXG4ubW9kYWwtaW5mbyBpIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogLjNyZW07XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5wb3BvdmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAuOGVtIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYigxMCwgMTAsIDEwKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG59XG4udGV4dC1tdXRlZCB7XG4gICAgY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cblxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "n2lM");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mylist/mylist.component */ "76GK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'mylist', component: _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_3__["MylistComponent"] },
    { path: 'watch/:type/:id', component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_2__["MovieDetailComponent"] },
    { path: 'watch/:type/:id', component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_2__["MovieDetailComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                enableTracing: false,
                scrollPositionRestoration: 'top'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map