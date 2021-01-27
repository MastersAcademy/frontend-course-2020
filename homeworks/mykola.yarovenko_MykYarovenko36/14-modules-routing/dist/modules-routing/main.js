(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Николай\Desktop\Angular\modules-routing\src\main.ts */"zUnb");


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

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-list/nav-list.component */ "U6M7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_1__["NavListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_components_nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_1__["NavListComponent"]] }); })();


/***/ }),

/***/ "RcHk":
/*!*************************************************************************!*\
  !*** ./src/app/modules/account/components/account/account.component.ts ***!
  \*************************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/nav-list/nav-list.component */ "U6M7");


class AccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 17, vars: 0, consts: [[1, "profile__wrapper"], [1, "user-card"], ["src", "./assets/Circle-icons-profile.svg", "alt", "profile-photo", 1, "profile-photo"], [1, "profile-info__container"], [1, "profile-info__field"], [1, "gallary-wrapper"], [1, "user-gallary"], ["src", "https://i.pinimg.com/originals/0b/ef/20/0bef203d840de504e7b05069c6f9af40.png", "alt", "gallary-image", 1, "user-gallary__item-image"], ["src", "https://i.pinimg.com/originals/c6/63/60/c66360fb6a70edac24b786e9b68574f4.jpg", "alt", "gallary-image", 1, "user-gallary__item-image"], ["src", "https://images.hdqwalls.com/wallpapers/garena-free-fire-hayato-t1.jpg", "alt", "gallary-image", 1, "user-gallary__item-image"], ["src", "https://s3-alpha-sig.figma.com/img/d85f/bb7f/f20a9b3ebbf6a5aeb06b20c12eef7a02?Expires=1612742400&Signature=VMf~8ly0-1tOdrK9xLBbH96GZDZXp2rVUUbVkQHgETzb0vvErVNQPdSJRTCu50cfoJjm-3voT3QDw~horPCJDm8vPa00rwJPEsiqPoTzgu1Zru0G-jrGYSj4UAiu5m1IpRpp2unCaidhW2j69BkBjcH67vrFU2pNrotS1Wcze7gHSlwoi5r03zqxXQ5m6uDd5tPN7mH6vKICfnGlpG5y3TZml3RByJ-giLftZH0yZatFDhFM0JzIIQY7xn8EmAYvtUa078JJIOAZs9OwxpmrPk9EDNoNLxhvO63Mi9d19lRWrfq9aP88nueDVAcwxZtSINypIfXhcdiDXTZ0zNPqzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", "alt", "gallary-image", 1, "user-gallary__item-image"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "John");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Gallary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_1__["NavListComponent"]], styles: ["ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.profile__wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  display: inline-flex;\n  justify-content: space-evenly;\n  margin: 20px auto;\n}\n\n.user-card[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 250px;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid rgb(12, 167, 154);\n}\n\n.profile-photo[_ngcontent-%COMP%] {\n  width: 98px;\n  height: 98px;\n  border-radius: 49px;\n  background-color: #4F5D73;\n  margin: 5px auto;\n  border: 2px solid rgb(12, 167, 154);\n}\n\n.profile-info__container[_ngcontent-%COMP%] {\n  max-width: 180px;\n  margin: 10px;\n}\n\n.profile-info__field[_ngcontent-%COMP%] {\n  list-style: none;\n  width: 180px;\n  text-align: center;\n  font-weight: 800;\n  color: #4F5D73;\n}\n\n.user-gallary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 600px;\n  max-height: 280px;\n}\n\n.user-gallary__item-image[_ngcontent-%COMP%] {\n  max-width: 288px;\n  margin: 2px;\n  border: 2px solid rgb(12, 167, 154);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1DQUFtQztBQUNyQyIsImZpbGUiOiJhY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnByb2ZpbGVfX3dyYXBwZXIge1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4udXNlci1jYXJkIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTIsIDE2NywgMTU0KTtcbn1cblxuLnByb2ZpbGUtcGhvdG8ge1xuICB3aWR0aDogOThweDtcbiAgaGVpZ2h0OiA5OHB4O1xuICBib3JkZXItcmFkaXVzOiA0OXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY1RDczO1xuICBtYXJnaW46IDVweCBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTIsIDE2NywgMTU0KTtcbn1cblxuLnByb2ZpbGUtaW5mb19fY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ucHJvZmlsZS1pbmZvX19maWVsZCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzRGNUQ3Mztcbn1cblxuLnVzZXItZ2FsbGFyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogMjgwcHg7XG59XG5cbi51c2VyLWdhbGxhcnlfX2l0ZW0taW1hZ2Uge1xuICBtYXgtd2lkdGg6IDI4OHB4O1xuICBtYXJnaW46IDJweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDEyLCAxNjcsIDE1NCk7XG59XG4iXX0= */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'modules-routing';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "empty-field"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".empty-field[_ngcontent-%COMP%] {\n  display: none;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0FBQ1oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wdHktZmllbGQge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ "U6M7":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/nav-list/nav-list.component.ts ***!
  \******************************************************************/
/*! exports provided: NavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavListComponent", function() { return NavListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NavListComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavListComponent.ɵfac = function NavListComponent_Factory(t) { return new (t || NavListComponent)(); };
NavListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavListComponent, selectors: [["app-nav-list"]], decls: 11, vars: 0, consts: [[1, "nav-bar__container"], [1, "nav-bar"], [1, "nav-item"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-item-link"], ["routerLink", "/account", "routerLinkActive", "active", 1, "nav-item-link"], ["routerLink", "/accessories", "routerLinkActive", "active", 1, "nav-item-link"]], template: function NavListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".nav-bar__container[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  width: 100%;\r\n  height: 60px;\r\n  background-color: rgb(80, 86, 143);\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  width: 60%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  font-size: 22px;\r\n}\r\n\r\n.nav-item-link[_ngcontent-%COMP%] {\r\n  color: #FFF;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.1);\r\n  text-shadow: 0 0 2px #FFF;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoibmF2LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFyX19jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDg2LCAxNDMpO1xyXG59XHJcblxyXG4ubmF2LWJhciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLm5hdi1pdGVtLWxpbmsge1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLm5hdi1pdGVtOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI0ZGRjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "WNGt":
/*!**********************************!*\
  !*** ./src/app/modules/index.ts ***!
  \**********************************/
/*! exports provided: modules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modules", function() { return modules; });
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.module */ "iydT");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account/account.module */ "lKKO");
/* harmony import */ var _accessories_accessories_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accessories/accessories.module */ "ryoB");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");




const modules = [
    _home_home_module__WEBPACK_IMPORTED_MODULE_0__["HomeModule"],
    _account_account_module__WEBPACK_IMPORTED_MODULE_1__["AccountModule"],
    _accessories_accessories_module__WEBPACK_IMPORTED_MODULE_2__["AccessoriesModule"],
    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
];


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
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules */ "WNGt");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "o0su");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/home/home.module */ "iydT");
/* harmony import */ var _modules_account_account_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/account/account.module */ "lKKO");
/* harmony import */ var _modules_accessories_accessories_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/accessories/accessories.module */ "ryoB");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ..._services__WEBPACK_IMPORTED_MODULE_4__["appServices"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            ..._modules__WEBPACK_IMPORTED_MODULE_3__["modules"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"], _modules_account_account_module__WEBPACK_IMPORTED_MODULE_7__["AccountModule"], _modules_accessories_accessories_module__WEBPACK_IMPORTED_MODULE_8__["AccessoriesModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]] }); })();


/***/ }),

/***/ "amG1":
/*!*********************************************!*\
  !*** ./src/app/services/journey-service.ts ***!
  \*********************************************/
/*! exports provided: JourneyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyService", function() { return JourneyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class JourneyService {
    constructor() {
        this.currentPaths = [];
        this.journeyPaths = [
            {
                message: 'User tends to home',
                journey: ['/home', '/account', '/home'],
            },
            {
                message: 'User tends to account',
                journey: ['/account', '/home', '/account'],
            },
            {
                message: 'User loves journeys',
                journey: ['/home', '/account', '/accessories'],
            }
        ];
        this.clearPaths = () => {
            this.currentPaths = [];
        };
        this.initLastPath = () => {
            this.currentPaths = [`${this.currentPaths.pop()}`];
        };
        this.checkPath = (url) => {
            if (this.currentPaths.length < 3 && url !== '/')
                this.currentPaths.push(url);
            if (this.currentPaths.length === 3) {
                const path = this.currentPaths.join('');
                this.journeyPaths.forEach((item) => {
                    item.journey.join('').includes(path) ? (this.showResult(item.message), this.clearPaths()) : this.initLastPath();
                });
            }
        };
        this.showResult = (message) => {
            console.log(message);
        };
    }
}
JourneyService.ɵfac = function JourneyService_Factory(t) { return new (t || JourneyService)(); };
JourneyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JourneyService, factory: JourneyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gmfS":
/*!**************************************!*\
  !*** ./src/app/guards/path.guard.ts ***!
  \**************************************/
/*! exports provided: PathGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathGuard", function() { return PathGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "o0su");


class PathGuard {
    constructor(journeyService) {
        this.journeyService = journeyService;
    }
    canActivate(route, state) {
        this.journeyService.checkPath(state.url);
        return true;
    }
}
PathGuard.ɵfac = function PathGuard_Factory(t) { return new (t || PathGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__["JourneyService"])); };
PathGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PathGuard, factory: PathGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hxf/":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/accessories/components/accessories/accessories.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AccessoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoriesComponent", function() { return AccessoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/nav-list/nav-list.component */ "U6M7");


class AccessoriesComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccessoriesComponent.ɵfac = function AccessoriesComponent_Factory(t) { return new (t || AccessoriesComponent)(); };
AccessoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessoriesComponent, selectors: [["app-accessories"]], decls: 4, vars: 0, consts: [[1, "content-container"], [1, "text-content"]], template: function AccessoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis fugiat voluptas voluptatibus quaerat! Fugiat tempore odio illo adipisci quidem, illum, rem rerum culpa ad vero iure, doloribus nostrum saepe quaerat? Similique nostrum quisquam quae saepe est nisi corporis ipsa maxime. Ad quae vitae nesciunt maxime, facilis et modi natus odio doloremque? Deleniti molestias veniam consequatur cumque sint ab aperiam fugiat! Porro ullam repellendus, ab sapiente ea maiores incidunt illum doloremque, velit assumenda deleniti nisi eum error, architecto sequi enim rerum hic! Suscipit ut animi ad. Maiores esse repellat minus atque! Quos eum dignissimos voluptatibus fuga ea aut sapiente, tenetur veritatis optio autem? Possimus ipsa ipsum distinctio iste temporibus sint officia perferendis fugiat totam consequuntur, voluptatum illo fuga animi corrupti beatae. Repudiandae labore id soluta veniam sint esse illo nisi impedit fuga ab non porro error aliquam quibusdam velit consectetur, cumque saepe sed, reiciendis, magni magnam dicta quod perspiciatis? Cupiditate, et. Molestias cupiditate eveniet corporis iure expedita amet. Ad veritatis totam quas ipsum nisi quaerat alias modi rem recusandae similique! Quibusdam vitae quam eveniet repellendus, odit impedit aut facilis reprehenderit assumenda? Quos sit earum id ipsum officia sapiente repellendus iusto ab enim iste exercitationem, eum amet aliquam magni quibusdam! Non unde veritatis facere omnis odit sed sit, error et porro similique. Minima, deserunt reprehenderit? Excepturi optio rem expedita quo consequatur autem consectetur. Temporibus deleniti veritatis, quas excepturi nesciunt praesentium fugit error distinctio facere quibusdam recusandae quam sequi amet adipisci, blanditiis quasi. Rem autem nesciunt at architecto odit est distinctio maxime sint, possimus, molestiae ratione. Voluptas quaerat molestiae laboriosam cupiditate eveniet minus iure, quia pariatur, voluptatem non impedit unde, minima ut error. Vel maxime animi ea voluptatibus culpa, eius tempore doloremque soluta, neque provident debitis laborum itaque veniam deserunt accusantium praesentium eligendi dignissimos blanditiis. Repudiandae explicabo fugiat rem provident at dicta pariatur. Recusandae officiis quasi nisi, distinctio fuga, esse alias aut nostrum iste libero modi, dignissimos possimus provident cupiditate laudantium et reiciendis consequatur minus commodi maxime quia aspernatur ipsum. Possimus, fugiat soluta! Vel minima dignissimos doloremque facilis alias voluptatum debitis. Suscipit, accusamus quae veniam iste illum maiores atque dicta delectus assumenda corrupti voluptatibus possimus, ducimus, iusto dignissimos? Tenetur obcaecati labore odio repellat? Cum repellat, harum amet, commodi expedita exercitationem eaque eveniet, nihil velit dolores voluptates aut delectus vitae. Est aperiam ipsam eum beatae, illo molestiae quia. Tempore voluptate necessitatibus accusantium nulla excepturi. Aliquid rerum unde quam magnam corporis ipsam id nemo. Error molestias nihil id voluptatum adipisci. Corporis quia esse, exercitationem cumque laudantium error sunt asperiores est officiis molestiae, animi eaque eveniet. Laudantium corrupti, vel iusto accusantium quidem voluptas itaque laborum molestiae deserunt dolore repudiandae maxime, distinctio omnis suscipit dolores nostrum. Fugiat veniam libero cumque distinctio ut dignissimos magni similique eligendi asperiores. Illo nihil laudantium itaque dolores esse culpa fugiat, tempore odio perferendis maxime sed vero fuga officiis in dignissimos ea deleniti quae incidunt! Vel repellendus nam in aliquam corrupti, fugit eum. Impedit provident recusandae perspiciatis tenetur, nihil ut reprehenderit, vero suscipit, magni veritatis beatae excepturi. Quaerat sequi sunt explicabo odio aliquid laudantium, non, quasi animi nisi unde magnam asperiores excepturi voluptatibus? Veritatis recusandae itaque dolores vero cumque natus libero ullam, iure saepe nostrum aut earum obcaecati necessitatibus ex temporibus illum ipsa quo incidunt aspernatur animi consequuntur officia! Vitae error adipisci accusamus! Expedita hic repellendus ullam, minima id eos tempore dolores dolore perspiciatis eaque fuga. Quia corrupti culpa nam cum, vel et dolorem necessitatibus. Architecto incidunt quidem explicabo reiciendis doloribus nostrum quaerat? Error aut voluptatibus sunt velit voluptatum consectetur. Pariatur voluptatem iure dolorem necessitatibus libero, quas exercitationem consectetur magni eius, totam veritatis saepe rerum dolore molestias sed? Minus vel at culpa quis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_1__["NavListComponent"]], styles: [".content-container[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  text-align: justify;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzc29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJhY2Nlc3Nvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "iydT":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "nlee");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();


/***/ }),

/***/ "lKKO":
/*!***************************************************!*\
  !*** ./src/app/modules/account/account.module.ts ***!
  \***************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/account/account.component */ "RcHk");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AccountModule {
}
AccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AccountModule });
AccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AccountModule_Factory(t) { return new (t || AccountModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AccountModule, { declarations: [_components_account_account_component__WEBPACK_IMPORTED_MODULE_1__["AccountComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();


/***/ }),

/***/ "nlee":
/*!**************************************************************************!*\
  !*** ./src/app/modules/home/components/home-page/home-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/nav-list/nav-list.component */ "U6M7");


class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 4, vars: 0, consts: [[1, "wrapper"], [1, "h1"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to home-page!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_1__["NavListComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "o0su":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: appServices, JourneyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appServices", function() { return appServices; });
/* harmony import */ var _journey_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./journey-service */ "amG1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JourneyService", function() { return _journey_service__WEBPACK_IMPORTED_MODULE_0__["JourneyService"]; });


const appServices = [
    _journey_service__WEBPACK_IMPORTED_MODULE_0__["JourneyService"],
];



/***/ }),

/***/ "ryoB":
/*!***********************************************************!*\
  !*** ./src/app/modules/accessories/accessories.module.ts ***!
  \***********************************************************/
/*! exports provided: AccessoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoriesModule", function() { return AccessoriesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/accessories/accessories.component */ "hxf/");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AccessoriesModule {
}
AccessoriesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AccessoriesModule });
AccessoriesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AccessoriesModule_Factory(t) { return new (t || AccessoriesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AccessoriesModule, { declarations: [_components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_1__["AccessoriesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();


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
/* harmony import */ var _guards_path_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/path.guard */ "gmfS");
/* harmony import */ var _modules_accessories_components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accessories/components/accessories/accessories.component */ "hxf/");
/* harmony import */ var _modules_account_components_account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/account/components/account/account.component */ "RcHk");
/* harmony import */ var _modules_home_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/home/components/home-page/home-page.component */ "nlee");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _modules_home_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], canActivate: [_guards_path_guard__WEBPACK_IMPORTED_MODULE_1__["PathGuard"]] },
    { path: 'home', component: _modules_home_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], canActivate: [_guards_path_guard__WEBPACK_IMPORTED_MODULE_1__["PathGuard"]] },
    { path: 'account', component: _modules_account_components_account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"], canActivate: [_guards_path_guard__WEBPACK_IMPORTED_MODULE_1__["PathGuard"]] },
    { path: 'accessories', component: _modules_accessories_components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_2__["AccessoriesComponent"], canActivate: [_guards_path_guard__WEBPACK_IMPORTED_MODULE_1__["PathGuard"]] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
