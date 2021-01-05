(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\frontend-course-2020\homeworks\dmytro.shvets_Schweppes-JS\12-httpclient\src\main.ts */"zUnb");


/***/ }),

/***/ "5dVO":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class LoaderService {
    constructor() {
        this.loader = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    visible() {
        this.loader.next(true);
    }
    hidden() {
        this.loader.next(false);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/loader.service */ "5dVO");





function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "circle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "animate", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "animate", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "circle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "animate", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "animate", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "circle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "animate", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "animate", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "circle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "animate", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "animate", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "circle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "animate", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "animate", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-form");
} }
function AppComponent_div_2_app_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 23);
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r5);
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_2_app_card_1_Template, 1, 1, "app-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.userData);
} }
function AppComponent_div_3_app_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_3_app_button_1_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const pageNumber_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.loadNextPage(pageNumber_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNumber_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageNumber", pageNumber_r7);
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_3_app_button_1_Template, 1, 1, "app-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.totalPages);
} }
class AppComponent {
    constructor(userService, loaderService) {
        this.userService = userService;
        this.loaderService = loaderService;
        this.loader = this.loaderService.loader;
        this.isLoaded = false;
        this.userData = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    ngOnInit() {
        this.loader.subscribe((value) => this.isLoaded = value);
        this.sendingRequest();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    sendingRequest() {
        this.subscription.add(this.userService.getUsers().subscribe((users) => {
            this.totalPages = Array(users.total / parseInt(users.per_page)).fill('').map((x, i) => i + 1);
            this.userData = users.data;
        }));
    }
    loadNextPage(pageNumber) {
        console.log(pageNumber);
        this.userService.changingPage(pageNumber);
        this.sendingRequest();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 4, consts: [["class", "loader", 4, "ngIf"], [4, "ngIf"], ["class", "card-container", 4, "ngIf"], ["class", "button-container", 4, "ngIf"], [1, "loader"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "410px", "height", "410px", "viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid", 2, "margin", "auto", "background", "none", "display", "block", "shape-rendering", "auto"], ["cx", "84", "cy", "50", "r", "10", "fill", "#1d0e0b"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "0.25510204081632654s", "calcMode", "spline", "keyTimes", "0;1", "values", "10;0", "keySplines", "0 0.5 0.5 1", "begin", "0s"], ["attributeName", "fill", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "discrete", "keyTimes", "0;0.25;0.5;0.75;1", "values", "#1d0e0b;#f3e7c9;#d88c51;#774023;#1d0e0b", "begin", "0s"], ["cx", "16", "cy", "50", "r", "10", "fill", "#1d0e0b"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "0;0;10;10;10", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "0s"], ["attributeName", "cx", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "16;16;16;50;84", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "0s"], ["cx", "50", "cy", "50", "r", "10", "fill", "#774023"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "0;0;10;10;10", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.25510204081632654s"], ["attributeName", "cx", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "16;16;16;50;84", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.25510204081632654s"], ["cx", "84", "cy", "50", "r", "10", "fill", "#d88c51"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "0;0;10;10;10", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.5102040816326531s"], ["attributeName", "cx", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "16;16;16;50;84", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.5102040816326531s"], ["cx", "16", "cy", "50", "r", "10", "fill", "#f3e7c9"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "0;0;10;10;10", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.7653061224489796s"], ["attributeName", "cx", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "16;16;16;50;84", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.7653061224489796s"], [1, "card-container"], ["class", "app-card", 3, "user", 4, "ngFor", "ngForOf"], [1, "app-card", 3, "user"], [1, "button-container"], ["class", "button", 3, "pageNumber", "click", 4, "ngFor", "ngForOf"], [1, "button", 3, "pageNumber", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 17, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_form_1_Template, 1, 0, "app-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
    } }, styles: [".loader[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding: 15px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  gap: 15px;\r\n}\r\n\r\n.app-card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  min-width: 350px;\r\n  height: 490px;\r\n  overflow: hidden;\r\n  display: flex;\r\n  opacity: .95;\r\n}\r\n\r\n.button-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 30px;\r\n}\r\n\r\n@media screen and (max-height: 775px) {\r\n\r\n  .card-container[_ngcontent-%COMP%] {\r\n    height: 530px;\r\n    min-height: 530px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 720px) {\r\n\r\n  .button-container[_ngcontent-%COMP%] {\r\n    transform: scale(.8);\r\n    gap: 25px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n\r\n  .button-container[_ngcontent-%COMP%] {\r\n    transform: scale(.7);\r\n    gap: 20px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 475px) {\r\n\r\n  .button-container[_ngcontent-%COMP%] {\r\n    transform: scale(.6);\r\n    gap: 15px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxvQkFBb0I7SUFDcEIsU0FBUztFQUNYO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxvQkFBb0I7SUFDcEIsU0FBUztFQUNYO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxvQkFBb0I7SUFDcEIsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNXB4O1xyXG59XHJcblxyXG4uYXBwLWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogNDkwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9wYWNpdHk6IC45NTtcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMzBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc3NXB4KSB7XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDUzMHB4O1xyXG4gICAgbWluLWhlaWdodDogNTMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAuYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC44KTtcclxuICAgIGdhcDogMjVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblxyXG4gIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc1cHgpIHtcclxuXHJcbiAgLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNik7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/loader.interceptor */ "nFoY");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/loader.service */ "5dVO");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./button/button.component */ "be9G");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form/form.component */ "urH6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_4__["LoaderInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
        _button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"],
        _form_form_component__WEBPACK_IMPORTED_MODULE_10__["FormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
                    _button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"],
                    _form_form_component__WEBPACK_IMPORTED_MODULE_10__["FormComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [
                    _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
                    _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_4__["LoaderInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _form_form_component__WEBPACK_IMPORTED_MODULE_10__["FormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
    _button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"]], []);


/***/ }),

/***/ "be9G":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ButtonComponent {
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { pageNumber: "pageNumber" }, decls: 3, vars: 1, consts: [[1, "button"], [1, "page-number"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageNumber);
    } }, styles: [".page-number[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: rgba(241, 198, 163, .589);\r\n  font-weight: 900;\r\n  font-size: 3rem;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: relative;\r\n  height: 90px;\r\n  width: 90px;\r\n  border-radius: 50%;\r\n  border: 6px solid rgba(104, 76, 76, .856);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: inset 0 0 10px 10px rgb(80, 46, 18) , 0 0 10px 0 rgba(0, 0, 0, .5);\r\n}\r\n\r\n.button[_ngcontent-%COMP%]::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 60px;\r\n  width: 60px;\r\n  border-radius: 50%;\r\n  border: 3px solid rgba(104, 76, 76, .8);\r\n  background-color: rgb(80, 76, 34);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: -1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDhFQUE4RTtBQUNoRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2IiLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1udW1iZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogcmdiYSgyNDEsIDE5OCwgMTYzLCAuNTg5KTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogNnB4IHNvbGlkIHJnYmEoMTA0LCA3NiwgNzYsIC44NTYpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAxMHB4IHJnYig4MCwgNDYsIDE4KSAsIDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuNSk7XHJcbn1cclxuXHJcbi5idXR0b246OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMTA0LCA3NiwgNzYsIC44KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDc2LCAzNCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.css']
            }]
    }], null, { pageNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mJ8H":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CardComponent {
    constructor() { }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { user: "user" }, decls: 7, vars: 4, consts: [[1, "square"], [1, "full-name"], [1, "email"], ["alt", "photo", 1, "avatar", 3, "src"], [1, "triangle"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user.first_name, " ", ctx.user.last_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".square[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n  height: 400px;\r\n  width: 350px;\r\n  background-color: #2A426E;\r\n  color: rgba(241, 223, 163, .966);\r\n  border-radius: 10px;\r\n}\r\n\r\n.square[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 320px;\r\n  height: 400px;\r\n  border-left: 3px dashed rgb(104, 76, 76);\r\n  border-right: 3px dashed rgb(104, 76, 76);\r\n}\r\n\r\n.square[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 300px;\r\n  height: 400px;\r\n  border-left: 3px dashed rgb(104, 76, 76);\r\n  border-right: 3px dashed rgb(104, 76, 76);\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px 1px rgba(61, 37, 9, .733);\r\n}\r\n\r\n.triangle[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  bottom: 135px;\r\n  left: 50%;\r\n  height: 248px;\r\n  width: 248px;\r\n  background-color: #2A426E;\r\n  transform: rotate(135deg) skew(20deg, 20deg);\r\n  transform-origin: bottom left;\r\n  z-index: -1;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .6);\r\n}\r\n\r\n.triangle[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  height: 218px;\r\n  width: 218px;\r\n  border-top: 4px dashed rgb(104, 76, 76);\r\n  border-right: 4px dashed rgb(104, 76, 76);\r\n  box-shadow: 0 0 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHdDQUF3QztFQUN4Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw0Q0FBNEM7RUFDNUMsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLHlDQUF5QztFQUN6QyxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNxdWFyZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQTQyNkU7XHJcbiAgY29sb3I6IHJnYmEoMjQxLCAyMjMsIDE2MywgLjk2Nik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnNxdWFyZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBib3JkZXItbGVmdDogM3B4IGRhc2hlZCByZ2IoMTA0LCA3NiwgNzYpO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IGRhc2hlZCByZ2IoMTA0LCA3NiwgNzYpO1xyXG59XHJcblxyXG4uc3F1YXJlOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBkYXNoZWQgcmdiKDEwNCwgNzYsIDc2KTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBkYXNoZWQgcmdiKDEwNCwgNzYsIDc2KTtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSg2MSwgMzcsIDksIC43MzMpO1xyXG59XHJcblxyXG4udHJpYW5nbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm90dG9tOiAxMzVweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgaGVpZ2h0OiAyNDhweDtcclxuICB3aWR0aDogMjQ4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJBNDI2RTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpIHNrZXcoMjBkZWcsIDIwZGVnKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcclxuICB6LWluZGV4OiAtMTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIC42KTtcclxufVxyXG5cclxuLnRyaWFuZ2xlOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDIxOHB4O1xyXG4gIHdpZHRoOiAyMThweDtcclxuICBib3JkZXItdG9wOiA0cHggZGFzaGVkIHJnYigxMDQsIDc2LCA3Nik7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggZGFzaGVkIHJnYigxMDQsIDc2LCA3Nik7XHJcbiAgYm94LXNoYWRvdzogMCAwIDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return []; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "nFoY":
/*!****************************************************!*\
  !*** ./src/app/interceptors/loader.interceptor.ts ***!
  \****************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loader.service */ "5dVO");




class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(req, next) {
        req = req.clone({ headers: req.headers.set('Accept-Language', 'da;q=1, en-GB;q=0.8, en;q=0.7') });
        this.loaderService.hidden();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.loaderService.visible();
        }));
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"])); };
LoaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UserService {
    constructor(http) {
        this.http = http;
        this.cardPerPage = 2;
        this.ROOT_URL = 'https://reqres.in/api/users';
        this.options = {
            params: { page: '1', per_page: '2' }
        };
    }
    getUsers() {
        return this.http.get(this.ROOT_URL, this.options);
    }
    changingPage(pageNumber) {
        return this.options.params = {
            page: pageNumber.toString(),
            per_page: this.options.params.per_page
        };
    }
    changingCardNumber(cardNumber) {
        return (this.cardPerPage = cardNumber,
            this.options.params = {
                page: this.options.params.page,
                per_page: cardNumber.toString()
            });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "urH6":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function FormComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1);
} }
class FormComponent {
    constructor(userService, appComponent) {
        this.userService = userService;
        this.appComponent = appComponent;
        this.cardOption = [1, 2, 3, 4];
        this.selected = this.userService.cardPerPage;
    }
    ngOnInit() {
    }
    onChange(event) {
        this.selected = event.target.value;
        this.userService.changingCardNumber(event.target.value);
        this.appComponent.sendingRequest();
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"])); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 5, vars: 2, consts: [["for", "card-number", 1, "lable__card-number"], ["name", "cardOption", "id", "card-number", 1, "card-number", 3, "ngModel", "change"], ["class", "card-option", 3, "value", 4, "ngFor", "ngForOf"], [1, "card-option", 3, "value"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Card on page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormComponent_Template_select_change_3_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormComponent_option_4_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardOption);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: [".lable__card-number[_ngcontent-%COMP%] {\r\n  color: rgba(241, 223, 163, .966);\r\n  font-size: 1.23rem;\r\n  margin-right: 5px;\r\n}\r\n\r\n.card-number[_ngcontent-%COMP%] {\r\n  color: rgba(241, 223, 163, .966);\r\n  font-size: 1.23rem;\r\n  background-color: #2A426E;\r\n}\r\n\r\n.card-option[_ngcontent-%COMP%] {\r\n  background-color: #2A426E;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmxlX19jYXJkLW51bWJlciB7XHJcbiAgY29sb3I6IHJnYmEoMjQxLCAyMjMsIDE2MywgLjk2Nik7XHJcbiAgZm9udC1zaXplOiAxLjIzcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uY2FyZC1udW1iZXIge1xyXG4gIGNvbG9yOiByZ2JhKDI0MSwgMjIzLCAxNjMsIC45NjYpO1xyXG4gIGZvbnQtc2l6ZTogMS4yM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkE0MjZFO1xyXG59XHJcblxyXG4uY2FyZC1vcHRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQTQyNkU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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