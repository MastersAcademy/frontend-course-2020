(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/Desktop/masters-academy/homeworks/dmytro.shvets_Schweppes-JS/12-httpclient/src/main.ts */"zUnb");


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button/button.component */ "be9G");








function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "circle", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "animate", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "animate", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "circle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "animate", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "animate", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "circle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "animate", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "animate", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "circle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "animate", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "animate", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "circle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "animate", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "animate", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_app_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 22);
} if (rf & 2) {
    const user_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r4);
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_app_card_1_Template, 1, 1, "app-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.userData);
} }
function AppComponent_div_2_app_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_app_button_1_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const pageNumber_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.loadNextPage(pageNumber_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNumber_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageNumber", pageNumber_r6);
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_2_app_button_1_Template, 1, 1, "app-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.totalPages);
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
            console.log(this.isLoaded);
        }));
    }
    loadNextPage(pageNumber) {
        console.log(this.isLoaded);
        this.userService.changingPage(pageNumber);
        this.sendingRequest();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 3, consts: [["class", "loader", 4, "ngIf"], ["class", "card-container", 4, "ngIf"], ["class", "button-container", 4, "ngIf"], [1, "loader"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "410px", "height", "410px", "viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid", 2, "margin", "auto", "background", "none", "display", "block", "shape-rendering", "auto"], ["cx", "84", "cy", "50", "r", "10", "fill", "#1d0e0b"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "0.25510204081632654s", "calcMode", "spline", "keyTimes", "0;1", "values", "10;0", "keySplines", "0 0.5 0.5 1", "begin", "0s"], ["attributeName", "fill", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "discrete", "keyTimes", "0;0.25;0.5;0.75;1", "values", "#1d0e0b;#f3e7c9;#d88c51;#774023;#1d0e0b", "begin", "0s"], ["cx", "16", "cy", "50", "r", "10", "fill", "#1d0e0b"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "0;0;10;10;10", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "0s"], ["attributeName", "cx", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "16;16;16;50;84", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "0s"], ["cx", "50", "cy", "50", "r", "10", "fill", "#774023"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "0;0;10;10;10", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.25510204081632654s"], ["attributeName", "cx", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "16;16;16;50;84", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.25510204081632654s"], ["cx", "84", "cy", "50", "r", "10", "fill", "#d88c51"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "0;0;10;10;10", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.5102040816326531s"], ["attributeName", "cx", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "16;16;16;50;84", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.5102040816326531s"], ["cx", "16", "cy", "50", "r", "10", "fill", "#f3e7c9"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "0;0;10;10;10", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.7653061224489796s"], ["attributeName", "cx", "repeatCount", "indefinite", "dur", "1.0204081632653061s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "16;16;16;50;84", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.7653061224489796s"], [1, "card-container"], ["class", "app-card", 3, "user", 4, "ngFor", "ngForOf"], [1, "app-card", 3, "user"], [1, "button-container"], ["class", "button", 3, "pageNumber", "click", 4, "ngFor", "ngForOf"], [1, "button", 3, "pageNumber", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 17, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"]], styles: [".loader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 15px;\n  height: 90%;\n  min-height: 654px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 15px;\n  overflow-y: auto;\n}\n\n.app-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 350px;\n  height: 100%;\n  min-height: 654px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  opacity: .98;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n}\n\n@media screen and (max-height: 775px) {\n\n  .card-container[_ngcontent-%COMP%] {\n    height: 530px;\n    min-height: 530px;\n  }\n\n  .app-card[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    height: 530px;\n    min-height: 530px;\n    align-items: flex-start;\n  }\n}\n\n@media screen and (max-width: 720px) {\n\n  .button-container[_ngcontent-%COMP%] {\n    transform: scale(.8);\n    gap: 25px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n\n  .button-container[_ngcontent-%COMP%] {\n    transform: scale(.7);\n    gap: 20px;\n  }\n}\n\n@media screen and (max-width: 475px) {\n\n  .button-container[_ngcontent-%COMP%] {\n    transform: scale(.6);\n    gap: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7RUFDekI7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLG9CQUFvQjtJQUNwQixTQUFTO0VBQ1g7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLG9CQUFvQjtJQUNwQixTQUFTO0VBQ1g7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLG9CQUFvQjtJQUNwQixTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGhlaWdodDogOTAlO1xuICBtaW4taGVpZ2h0OiA2NTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYXBwLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogNjU0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9wYWNpdHk6IC45ODtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzc1cHgpIHtcblxuICAuY2FyZC1jb250YWluZXIge1xuICAgIGhlaWdodDogNTMwcHg7XG4gICAgbWluLWhlaWdodDogNTMwcHg7XG4gIH1cblxuICAuYXBwLWNhcmQge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGhlaWdodDogNTMwcHg7XG4gICAgbWluLWhlaWdodDogNTMwcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcblxuICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOCk7XG4gICAgZ2FwOiAyNXB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xuICAgIGdhcDogMjBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzVweCkge1xuXG4gIC5idXR0b24tY29udGFpbmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC42KTtcbiAgICBnYXA6IDE1cHg7XG4gIH1cbn1cbiJdfQ== */"] });
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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button/button.component */ "be9G");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/loader.service */ "5dVO");
/* harmony import */ var _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/loader.interceptor */ "nFoY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_7__["LoaderInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
        _button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
                    _button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ],
                providers: [
                    _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
                    _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_7__["LoaderInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "qfBg");



class ButtonComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { pageNumber: "pageNumber" }, decls: 3, vars: 1, consts: [[1, "button"], [1, "page-number"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageNumber);
    } }, styles: [".page-number[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(241, 198, 163, .589);\n  font-weight: 900;\n  font-size: 3rem;\n}\n\n.button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 6px solid rgba(104, 76, 76, .856);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: inset 0 0 10px 10px rgb(80, 46, 18) , 0 0 10px 0 rgba(0, 0, 0, .5);\n}\n\n.button[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  border: 3px solid rgba(104, 76, 76, .8);\n  background-color: rgb(80, 76, 34);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDhFQUE4RTtBQUNoRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2IiLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1udW1iZXIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMTk4LCAxNjMsIC41ODkpO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDZweCBzb2xpZCByZ2JhKDEwNCwgNzYsIDc2LCAuODU2KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IDEwcHggcmdiKDgwLCA0NiwgMTgpICwgMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIC41KTtcbn1cblxuLmJ1dHRvbjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgxMDQsIDc2LCA3NiwgLjgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDc2LCAzNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAtMTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, { pageNumber: [{
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
    } }, styles: [".square[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  height: 400px;\n  width: 350px;\n  background-color: #2A426E;\n  color: rgba(241, 223, 163, .966);\n  border-radius: 10px;\n}\n\n.square[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 320px;\n  height: 400px;\n  border-left: 3px dashed rgb(104, 76, 76);\n  border-right: 3px dashed rgb(104, 76, 76);\n}\n\n.square[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 300px;\n  height: 400px;\n  border-left: 3px dashed rgb(104, 76, 76);\n  border-right: 3px dashed rgb(104, 76, 76);\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px 1px rgba(61, 37, 9, .733);\n}\n\n.triangle[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  bottom: 135px;\n  left: 50%;\n  height: 248px;\n  width: 248px;\n  background-color: #2A426E;\n  transform: rotate(135deg) skew(20deg, 20deg);\n  transform-origin: bottom left;\n  z-index: -1;\n  border-radius: 10px;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .6);\n}\n\n.triangle[_ngcontent-%COMP%]::after {\n  content: \"\";\n  height: 218px;\n  width: 218px;\n  border-top: 4px dashed rgb(104, 76, 76);\n  border-right: 4px dashed rgb(104, 76, 76);\n  box-shadow: 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHdDQUF3QztFQUN4Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw0Q0FBNEM7RUFDNUMsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLHlDQUF5QztFQUN6QyxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNxdWFyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJBNDI2RTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyMjMsIDE2MywgLjk2Nik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zcXVhcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBib3JkZXItbGVmdDogM3B4IGRhc2hlZCByZ2IoMTA0LCA3NiwgNzYpO1xuICBib3JkZXItcmlnaHQ6IDNweCBkYXNoZWQgcmdiKDEwNCwgNzYsIDc2KTtcbn1cblxuLnNxdWFyZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYm9yZGVyLWxlZnQ6IDNweCBkYXNoZWQgcmdiKDEwNCwgNzYsIDc2KTtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggZGFzaGVkIHJnYigxMDQsIDc2LCA3Nik7XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCByZ2JhKDYxLCAzNywgOSwgLjczMyk7XG59XG5cbi50cmlhbmdsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvdHRvbTogMTM1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgaGVpZ2h0OiAyNDhweDtcbiAgd2lkdGg6IDI0OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkE0MjZFO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpIHNrZXcoMjBkZWcsIDIwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG4gIHotaW5kZXg6IC0xO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAuNik7XG59XG5cbi50cmlhbmdsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDIxOHB4O1xuICB3aWR0aDogMjE4cHg7XG4gIGJvcmRlci10b3A6IDRweCBkYXNoZWQgcmdiKDEwNCwgNzYsIDc2KTtcbiAgYm9yZGVyLXJpZ2h0OiA0cHggZGFzaGVkIHJnYigxMDQsIDc2LCA3Nik7XG4gIGJveC1zaGFkb3c6IDAgMCAwO1xufVxuIl19 */"] });
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
        this.ROOT_URL = 'https://reqres.in/api/users';
        this.options = {
            params: { page: '1', per_page: '2' }
        };
    }
    getUsers() {
        return this.http.get(this.ROOT_URL, this.options);
    }
    changingPage(pageNumber) {
        return this.options.params = { page: pageNumber.toString(), per_page: '2' };
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