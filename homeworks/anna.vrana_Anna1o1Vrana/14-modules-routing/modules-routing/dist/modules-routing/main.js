(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+m+8":
/*!****************************************************************!*\
  !*** ./src/app/modules/home/components/home/home.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sharing_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sharing/component/nav/nav.component */ "Lsh7");



class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "home module works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sharing_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/anna/Documents/frontend-course-2020/homeworks/anna.vrana_Anna1o1Vrana/14-modules-routing/modules-routing/src/main.ts */"zUnb");


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

/***/ "HoHQ":
/*!***************************************************!*\
  !*** ./src/app/modules/sharing/sharing.module.ts ***!
  \***************************************************/
/*! exports provided: SharingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingModule", function() { return SharingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/nav/nav.component */ "Lsh7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class SharingModule {
}
SharingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharingModule });
SharingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharingModule_Factory(t) { return new (t || SharingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharingModule, { declarations: [_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]],
                exports: [
                    _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "IWOa":
/*!****************************************!*\
  !*** ./src/app/guard/routing.guard.ts ***!
  \****************************************/
/*! exports provided: RoutingGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingGuard", function() { return RoutingGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_check_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/check-routing.service */ "RcNl");




class RoutingGuard {
    constructor(router, checkRouting) {
        this.checkRouting = checkRouting;
    }
    canActivate(route, state) {
        this.checkRouting.createPaths(state.url);
        return true;
    }
}
RoutingGuard.ɵfac = function RoutingGuard_Factory(t) { return new (t || RoutingGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_check_routing_service__WEBPACK_IMPORTED_MODULE_2__["CheckRoutingService"])); };
RoutingGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoutingGuard, factory: RoutingGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_check_routing_service__WEBPACK_IMPORTED_MODULE_2__["CheckRoutingService"] }]; }, null); })();


/***/ }),

/***/ "Lsh7":
/*!****************************************************************!*\
  !*** ./src/app/modules/sharing/component/nav/nav.component.ts ***!
  \****************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavComponent {
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 7, vars: 0, consts: [[1, "nav"], ["routerLink", "/home", "routerLinkActive", "active", 1, "router-link"], ["routerLink", "/account", "routerLinkActive", "active", 1, "router-link"], ["routerLink", "/accessories", "routerLinkActive", "active", 1, "router-link"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Account page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Accessories page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".nav[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #B4E3E3;\n}\n\n.router-link[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-decoration: none;\n  font-size: 18px;\n  color: #0B0C0C;\n}\n\n.router-link[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 1px solid #A3A8A8;\n}\n\n.router-link[_ngcontent-%COMP%]:hover {\n  color: #2765CB;\n  background-color: #00C9C9;\n  transition: background-color 2s;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #921515;\n  background-color: #00C9C9;\n  transition: background-color 2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsK0JBQStCO0FBQ2pDIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNEUzRTM7XG59XG5cbi5yb3V0ZXItbGluayB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzBCMEMwQztcbn1cblxuLnJvdXRlci1saW5rOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQTNBOEE4O1xufVxuXG4ucm91dGVyLWxpbms6aG92ZXIge1xuICBjb2xvcjogIzI3NjVDQjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQzlDOTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAycztcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjOTIxNTE1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBDOUM5O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDJzO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _sharing_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sharing/component/nav/nav.component */ "Lsh7");



class AccountComponent {
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 3, vars: 0, template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account module works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sharing_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account',
                templateUrl: './account.component.html',
                styleUrls: ['./account.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "RcNl":
/*!***************************************************!*\
  !*** ./src/app/services/check-routing.service.ts ***!
  \***************************************************/
/*! exports provided: CheckRoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckRoutingService", function() { return CheckRoutingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CheckRoutingService {
    constructor() {
        this.paths = [];
        this.movingPaths = [
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
    }
    createPaths(url) {
        console.log(url);
        if (url === '' || url === '/') {
            return;
        }
        if (this.paths.length < 3) {
            this.paths.push(url);
        }
        else {
            this.setNewPaths();
            this.paths.push(url);
        }
        this.comparePaths();
    }
    setNewPaths() {
        this.paths = [];
    }
    checkPaths() {
        if (this.paths[0] === '/accessories' || this.paths[1] === '/accessories' || this.paths[0] === '/') {
            this.setNewPaths();
        }
    }
    comparePaths() {
        console.log(this.movingPaths);
        console.log(this.paths);
        if (JSON.stringify(this.movingPaths[0]['journey']) === JSON.stringify(this.paths)) {
            console.log(this.movingPaths[0]['message']);
            this.setNewPaths();
        }
        if (JSON.stringify(this.movingPaths[1]['journey']) === JSON.stringify(this.paths)) {
            console.log(this.movingPaths[1]['message']);
            this.setNewPaths();
        }
        if (JSON.stringify(this.movingPaths[2]['journey']) === JSON.stringify(this.paths)) {
            console.log(this.movingPaths[2]['message']);
            this.setNewPaths();
        }
    }
}
CheckRoutingService.ɵfac = function CheckRoutingService_Factory(t) { return new (t || CheckRoutingService)(); };
CheckRoutingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CheckRoutingService, factory: CheckRoutingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckRoutingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
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
    constructor() {
        this.title = 'modules-routing';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });
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
/* harmony import */ var _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sharing/sharing.module */ "HoHQ");




const modules = [
    _home_home_module__WEBPACK_IMPORTED_MODULE_0__["HomeModule"],
    _account_account_module__WEBPACK_IMPORTED_MODULE_1__["AccountModule"],
    _accessories_accessories_module__WEBPACK_IMPORTED_MODULE_2__["AccessoriesModule"],
    _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_3__["SharingModule"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules */ "WNGt");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/home/home.module */ "iydT");
/* harmony import */ var _modules_account_account_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/account/account.module */ "lKKO");
/* harmony import */ var _modules_accessories_accessories_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/accessories/accessories.module */ "ryoB");
/* harmony import */ var _modules_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sharing/sharing.module */ "HoHQ");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ..._modules__WEBPACK_IMPORTED_MODULE_4__["modules"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"], _modules_account_account_module__WEBPACK_IMPORTED_MODULE_6__["AccountModule"], _modules_accessories_accessories_module__WEBPACK_IMPORTED_MODULE_7__["AccessoriesModule"], _modules_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_8__["SharingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ..._modules__WEBPACK_IMPORTED_MODULE_4__["modules"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _sharing_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sharing/component/nav/nav.component */ "Lsh7");



class AccessoriesComponent {
}
AccessoriesComponent.ɵfac = function AccessoriesComponent_Factory(t) { return new (t || AccessoriesComponent)(); };
AccessoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessoriesComponent, selectors: [["app-accessories"]], decls: 3, vars: 0, template: function AccessoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "accessories module works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sharing_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc3Nvcmllcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accessories',
                templateUrl: './accessories.component.html',
                styleUrls: ['./accessories.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "+m+8");
/* harmony import */ var _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharing/sharing.module */ "HoHQ");





class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_3__["SharingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_3__["SharingModule"]], exports: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
                exports: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_3__["SharingModule"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/account/account.component */ "RcHk");
/* harmony import */ var _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharing/sharing.module */ "HoHQ");





class AccountModule {
}
AccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountModule });
AccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountModule_Factory(t) { return new (t || AccountModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_3__["SharingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountModule, { declarations: [_components_account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_3__["SharingModule"]], exports: [_components_account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"]],
                exports: [_components_account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_3__["SharingModule"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accessories/accessories.component */ "hxf/");
/* harmony import */ var _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharing/sharing.module */ "HoHQ");





class AccessoriesModule {
}
AccessoriesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccessoriesModule });
AccessoriesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccessoriesModule_Factory(t) { return new (t || AccessoriesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_3__["SharingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccessoriesModule, { declarations: [_components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_2__["AccessoriesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_3__["SharingModule"]], exports: [_components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_2__["AccessoriesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessoriesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_2__["AccessoriesComponent"]],
                exports: [_components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_2__["AccessoriesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sharing_sharing_module__WEBPACK_IMPORTED_MODULE_3__["SharingModule"]
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
/* harmony import */ var _modules_home_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home/components/home/home.component */ "+m+8");
/* harmony import */ var _modules_account_components_account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/account/components/account/account.component */ "RcHk");
/* harmony import */ var _modules_accessories_components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accessories/components/accessories/accessories.component */ "hxf/");
/* harmony import */ var _guard_routing_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guard/routing.guard */ "IWOa");








const routes = [
    { path: '', component: _modules_home_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_guard_routing_guard__WEBPACK_IMPORTED_MODULE_5__["RoutingGuard"]] },
    { path: 'home', component: _modules_home_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_guard_routing_guard__WEBPACK_IMPORTED_MODULE_5__["RoutingGuard"]] },
    { path: 'account', component: _modules_account_components_account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"], canActivate: [_guard_routing_guard__WEBPACK_IMPORTED_MODULE_5__["RoutingGuard"]] },
    { path: 'accessories', component: _modules_accessories_components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_4__["AccessoriesComponent"], canActivate: [_guard_routing_guard__WEBPACK_IMPORTED_MODULE_5__["RoutingGuard"]] },
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