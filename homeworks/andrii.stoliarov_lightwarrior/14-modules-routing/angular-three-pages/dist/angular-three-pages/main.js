(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andrii/Desktop/git/frontend-course-2020/homeworks/andrii.stoliarov_lightwarrior/14-modules-routing/angular-three-pages/src/main.ts */"zUnb");


/***/ }),

/***/ "0PuV":
/*!***********************************!*\
  !*** ./src/app/data/usertends.ts ***!
  \***********************************/
/*! exports provided: USERTENDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERTENDS", function() { return USERTENDS; });
const USERTENDS = [
    {
        message: 'User tends to home',
        journey: ['/home', '/account', '/home']
    },
    {
        message: 'User tends to account',
        journey: ['/account', '/home', '/account']
    },
    {
        message: 'User loves journeys',
        journey: ['/home', '/account', '/accessories']
    }
];


/***/ }),

/***/ "6T4/":
/*!********************************************!*\
  !*** ./src/app/guards/transition.guard.ts ***!
  \********************************************/
/*! exports provided: TransitionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionGuard", function() { return TransitionGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "o0su");



class TransitionGuard {
    constructor(routeVisitingPagesService) {
        this.routeVisitingPagesService = routeVisitingPagesService;
    }
    canActivate(route, state) {
        this.routeVisitingPagesService.setTransition(state.url);
        this.routeVisitingPagesService.checkPath();
        return true;
    }
}
TransitionGuard.ɵfac = function TransitionGuard_Factory(t) { return new (t || TransitionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__["RouteVisitingPagesService"])); };
TransitionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransitionGuard, factory: TransitionGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransitionGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["RouteVisitingPagesService"] }]; }, null); })();


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

/***/ "FpXt":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "HQ31");





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                ],
                exports: [
                    _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "HQ31":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/navigation/navigation.component.ts ***!
  \******************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 11, vars: 0, consts: [[1, "navbar"], [1, "navigation-list"], ["routerLink", "/home", 1, "navigation-link"], ["routerLink", "/account", 1, "navigation-link"], ["routerLink", "/accessories", 1, "navigation-link"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navigation-list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n}\n\n.navigation-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  padding-right: 15px;\n}\n\n.navigation-link[_ngcontent-%COMP%]:hover {\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubmF2aWdhdGlvbi1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4ubmF2aWdhdGlvbi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICM2NjY7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "N2Gk":
/*!*******************************!*\
  !*** ./src/app/data/index.ts ***!
  \*******************************/
/*! exports provided: USERTENDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usertends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usertends */ "0PuV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USERTENDS", function() { return _usertends__WEBPACK_IMPORTED_MODULE_0__["USERTENDS"]; });




/***/ }),

/***/ "PUzl":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/account/components/account-page/account-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AccountPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageComponent", function() { return AccountPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/navigation/navigation.component */ "HQ31");



class AccountPageComponent {
}
AccountPageComponent.ɵfac = function AccountPageComponent_Factory(t) { return new (t || AccountPageComponent)(); };
AccountPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountPageComponent, selectors: [["app-account-page"]], decls: 5, vars: 0, template: function AccountPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui autem earum aliquid, tempore vero commodi hic veritatis, dolores alias saepe reprehenderit repellat laboriosam fugiat voluptatibus adipisci, minus dicta excepturi! Officiis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account-page',
                templateUrl: './account-page.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "Q7nK":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/accessories/components/accessories-page/accessories-page.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AccessoriesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoriesPageComponent", function() { return AccessoriesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/navigation/navigation.component */ "HQ31");



class AccessoriesPageComponent {
}
AccessoriesPageComponent.ɵfac = function AccessoriesPageComponent_Factory(t) { return new (t || AccessoriesPageComponent)(); };
AccessoriesPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessoriesPageComponent, selectors: [["app-accessories-page"]], decls: 5, vars: 0, template: function AccessoriesPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora iusto dolores, corrupti itaque modi, nihil officia ex ipsum recusandae ab fugit optio repellat quidem aperiam illum! Accusantium exercitationem eveniet quae!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessoriesPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accessories-page',
                templateUrl: './accessories-page.component.html'
            }]
    }], null, null); })();


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
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "container"], ["routerLink", "/", 1, "caption-link"], [1, "post-page"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Angular routing navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1rem;\n  line-height: 1.6;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 1rem;\n}\n\n.post-page[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: #CCC 1px dotted;\n  margin: .7rem 0;\n}\n\n.caption-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.caption-link[_ngcontent-%COMP%]:hover {\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ucG9zdC1wYWdlIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAjQ0NDIDFweCBkb3R0ZWQ7XG4gIG1hcmdpbjogLjdyZW0gMDtcbn1cblxuLmNhcHRpb24tbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNhcHRpb24tbGluazpob3ZlciB7XG4gIGNvbG9yOiAjNjY2O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "FpXt");




const modules = [
    _home_home_module__WEBPACK_IMPORTED_MODULE_0__["HomeModule"],
    _account_account_module__WEBPACK_IMPORTED_MODULE_1__["AccountModule"],
    _accessories_accessories_module__WEBPACK_IMPORTED_MODULE_2__["AccessoriesModule"],
    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
];


/***/ }),

/***/ "XZFC":
/*!**********************************************************!*\
  !*** ./src/app/services/route-visiting-pages.service.ts ***!
  \**********************************************************/
/*! exports provided: RouteVisitingPagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteVisitingPagesService", function() { return RouteVisitingPagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "N2Gk");



class RouteVisitingPagesService {
    constructor() {
        this.journey = [];
    }
    setTransition(url) {
        this.journey.push(url);
    }
    clearJourneyArray() {
        this.journey = [];
    }
    ;
    showMassage(index) {
        if (_data__WEBPACK_IMPORTED_MODULE_1__["USERTENDS"][index].journey.length !== this.journey.length)
            return;
        console.log(_data__WEBPACK_IMPORTED_MODULE_1__["USERTENDS"][index].message);
        this.clearJourneyArray();
    }
    checkPath() {
        const lengthJourneyArray = this.journey.length;
        const stringJourney = this.journey.join('');
        const index = _data__WEBPACK_IMPORTED_MODULE_1__["USERTENDS"].findIndex(item => item.journey.slice(0, lengthJourneyArray).join('') === stringJourney);
        if (index !== -1) {
            this.showMassage(index);
        }
        else {
            const currentTransition = this.journey[lengthJourneyArray - 1];
            this.clearJourneyArray();
            this.setTransition(currentTransition);
        }
    }
}
RouteVisitingPagesService.ɵfac = function RouteVisitingPagesService_Factory(t) { return new (t || RouteVisitingPagesService)(); };
RouteVisitingPagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouteVisitingPagesService, factory: RouteVisitingPagesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteVisitingPagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules */ "WNGt");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "o0su");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/home/home.module */ "iydT");
/* harmony import */ var _modules_account_account_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/account/account.module */ "lKKO");
/* harmony import */ var _modules_accessories_accessories_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/accessories/accessories.module */ "ryoB");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/shared/shared.module */ "FpXt");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ..._services__WEBPACK_IMPORTED_MODULE_5__["appServices"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ..._modules__WEBPACK_IMPORTED_MODULE_4__["modules"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"], _modules_account_account_module__WEBPACK_IMPORTED_MODULE_7__["AccountModule"], _modules_accessories_accessories_module__WEBPACK_IMPORTED_MODULE_8__["AccessoriesModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ..._modules__WEBPACK_IMPORTED_MODULE_4__["modules"]
                ],
                providers: [
                    ..._services__WEBPACK_IMPORTED_MODULE_5__["appServices"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "auXs":
/*!*********************************!*\
  !*** ./src/app/guards/index.ts ***!
  \*********************************/
/*! exports provided: TransitionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition.guard */ "6T4/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGuard", function() { return _transition_guard__WEBPACK_IMPORTED_MODULE_0__["TransitionGuard"]; });




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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "nlee");





class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]], exports: [_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
                ],
                exports: [
                    _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");
/* harmony import */ var _components_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/account-page/account-page.component */ "PUzl");





class AccountModule {
}
AccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AccountModule });
AccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AccountModule_Factory(t) { return new (t || AccountModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccountModule, { declarations: [_components_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]], exports: [_components_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountPageComponent"]
                ],
                exports: [
                    _components_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountPageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/navigation/navigation.component */ "HQ31");



class HomePageComponent {
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 5, vars: 0, template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam error dicta obcaecati perferendis recusandae natus quis corporis explicabo quia ea, doloribus provident fuga vero voluptatum quos nesciunt aliquam! Id!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "o0su":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: appServices, RouteVisitingPagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appServices", function() { return appServices; });
/* harmony import */ var _route_visiting_pages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-visiting-pages.service */ "XZFC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteVisitingPagesService", function() { return _route_visiting_pages_service__WEBPACK_IMPORTED_MODULE_0__["RouteVisitingPagesService"]; });


const appServices = [
    _route_visiting_pages_service__WEBPACK_IMPORTED_MODULE_0__["RouteVisitingPagesService"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");
/* harmony import */ var _components_accessories_page_accessories_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/accessories-page/accessories-page.component */ "Q7nK");





class AccessoriesModule {
}
AccessoriesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AccessoriesModule });
AccessoriesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AccessoriesModule_Factory(t) { return new (t || AccessoriesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccessoriesModule, { declarations: [_components_accessories_page_accessories_page_component__WEBPACK_IMPORTED_MODULE_3__["AccessoriesPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]], exports: [_components_accessories_page_accessories_page_component__WEBPACK_IMPORTED_MODULE_3__["AccessoriesPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccessoriesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_accessories_page_accessories_page_component__WEBPACK_IMPORTED_MODULE_3__["AccessoriesPageComponent"]
                ],
                exports: [
                    _components_accessories_page_accessories_page_component__WEBPACK_IMPORTED_MODULE_3__["AccessoriesPageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_accessories_components_accessories_page_accessories_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accessories/components/accessories-page/accessories-page.component */ "Q7nK");
/* harmony import */ var _modules_account_components_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/account/components/account-page/account-page.component */ "PUzl");
/* harmony import */ var _modules_home_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/home/components/home-page/home-page.component */ "nlee");
/* harmony import */ var _modules_shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/shared/components/navigation/navigation.component */ "HQ31");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards */ "auXs");









const routes = [
    { path: '', component: _modules_shared_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"] },
    { path: 'home', component: _modules_home_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_6__["TransitionGuard"]] },
    { path: 'account', component: _modules_account_components_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountPageComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_6__["TransitionGuard"]] },
    { path: 'accessories', component: _modules_accessories_components_accessories_page_accessories_page_component__WEBPACK_IMPORTED_MODULE_2__["AccessoriesPageComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_6__["TransitionGuard"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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