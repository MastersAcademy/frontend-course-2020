(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/volus1986/WebstormProjects/frontend-course-2020/homeworks/volodymyr.ustilkin_VolodymyrUstilkin/12-httpclient/httpclient/src/main.ts */"zUnb");


/***/ }),

/***/ "2cLR":
/*!*********************************************************!*\
  !*** ./src/app/interceptor/user.request.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: UserRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRequestInterceptor", function() { return UserRequestInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "o0su");





class UserRequestInterceptor {
    constructor(userService) {
        this.userService = userService;
    }
    intercept(req, next) {
        req = req.clone({ headers: req.headers.set('accept-language', 'en-En') });
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                this.userService.stopLoader();
            }
        }));
    }
}
UserRequestInterceptor.ɵfac = function UserRequestInterceptor_Factory(t) { return new (t || UserRequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
UserRequestInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserRequestInterceptor, factory: UserRequestInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserRequestInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


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

/***/ "GSwS":
/*!************************************************!*\
  !*** ./src/app/models/user.request.options.ts ***!
  \************************************************/
/*! exports provided: UserRequestOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRequestOptions", function() { return UserRequestOptions; });
class UserRequestOptions {
    constructor() {
        this.params = {
            'page': '',
            'per_page': ''
        };
    }
}


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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_user_request_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/user.request.options */ "GSwS");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "o0su");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
} }
function AppComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r4.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("id = ", user_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("email = ", user_r4.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("first name = ", user_r4.first_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("last name = ", user_r4.last_name, "");
} }
function AppComponent_div_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_div_3_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.changePage(ctx_r10.usersPage.page - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2039");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_div_3_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.changePage(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_div_3_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const page_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.changePage(page_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r14 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pagination-current", page_r14 === ctx_r7.usersPage.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r14, " ");
} }
function AppComponent_div_1_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_div_3_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.changePage(ctx_r17.usersPage.total_pages); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_div_3_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.changePage(ctx_r19.usersPage.page + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u203A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_div_3_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_1_div_3_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_1_div_3_div_3_Template, 2, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_1_div_3_div_4_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_1_div_3_div_5_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.usersPage.page > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.usersPage.page > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.pagination);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.usersPage.page < ctx_r3.usersPage.total_pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.usersPage.page < ctx_r3.usersPage.total_pages);
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_1_div_2_Template, 11, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_1_div_3_Template, 6, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Items per page: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_div_1_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.changeNumberCardsPerPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.usersPage.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.usersPage.total_pages > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r1.usersPage.per_page);
} }
class AppComponent {
    constructor(userService) {
        this.userService = userService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.pageOptions = new _models_user_request_options__WEBPACK_IMPORTED_MODULE_3__["UserRequestOptions"]();
    }
    ngOnInit() {
        this.pageOptions.params.page = '1';
        this.pageOptions.params.per_page = '2';
        this.loadUsers();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    loadUsers() {
        this.loading = true;
        this.subscription.add(this.userService
            .getUsers(this.pageOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.loading = this.userService.loading))
            .subscribe((page) => {
            this.usersPage = page;
            this.pagination = this.updatePagination();
        }));
    }
    changeNumberCardsPerPage(event) {
        this.pageOptions.params.per_page = event.target.value;
        this.loadUsers();
    }
    changePage(number) {
        this.pageOptions.params.page = String(number);
        this.loadUsers();
    }
    updatePagination() {
        const offset = 3;
        const pagination = [];
        const startPage = this.usersPage.page - offset > 1 ? this.usersPage.page - offset : 1;
        const endPage = this.usersPage.page + offset <= this.usersPage.total_pages
            ? this.usersPage.page + offset
            : this.usersPage.total_pages;
        for (let i = startPage; i <= endPage; i++) {
            pagination.push(i);
        }
        return pagination;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [["class", "loader", 4, "ngIf"], [4, "ngIf"], [1, "loader"], [1, "user-section"], ["class", "user-card", 4, "ngFor", "ngForOf"], ["class", "pagination-section", 4, "ngIf"], [1, "item-count-selection"], ["for", "cards_per_page"], ["id", "cards_per_page", "type", "number", 1, "item-count-input", 3, "value", "change"], [1, "user-card"], [1, "user-avatar"], ["alt", "loading avatar...", 3, "src"], [1, "pagination-section"], ["class", "pagination-element", 3, "click", 4, "ngIf"], ["class", "pagination-element", 3, "pagination-current", "click", 4, "ngFor", "ngForOf"], [1, "pagination-element", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 8, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".user-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 0 auto;\n  padding-top: 50px;\n  max-width: 50%;\n  min-height: 150px;\n}\n\n.user-card[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  border-style: solid;\n  border-color: #00F;\n  border-width: 2px;\n}\n\n.user-avatar[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding-bottom: 20px;\n}\n\n.pagination-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 50px 20px 0;\n}\n\n.pagination-element[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  margin-left: 5px;\n  border-radius: 10px;\n  border-color: #808080;\n  border-style: solid;\n  border-width: 2px;\n  font-size: 20px;\n}\n\n.pagination-current[_ngcontent-%COMP%] {\n  border-color: #00F;\n}\n\n.pagination-element[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.item-count-selection[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: 0 auto;\n  padding: 20px;\n  max-width: 350px;\n  font-size: 20px;\n}\n\n.item-count-input[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 20px;\n}\n\n.loader[_ngcontent-%COMP%] {\n  margin: 100px auto;\n  font-size: 25px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  animation: load5 1.1s infinite ease;\n  transform: translateZ(0);\n}\n\n@keyframes load5 {\n\n  0%,\n  100% {\n    box-shadow: 0 -2.6em 0 0 #00F, 1.8em -1.8em 0 0 rgba(55, 0, 255, .2), 2.5em 0 0 0 rgba(55, 0, 255, .2), 1.75em 1.75em 0 0 rgba(55, 0, 255, .2), 0 2.5em 0 0 rgba(55, 0, 255, .2), -1.8em 1.8em 0 0 rgba(55, 0, 255, .2), -2.6em 0 0 0 rgba(55, 0, 255, .5), -1.8em -1.8em 0 0 rgba(55, 0, 255, .7);\n  }\n\n  12.5% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .7), 1.8em -1.8em 0 0 #00F, 2.5em 0 0 0 rgba(55, 0, 255, .2), 1.75em 1.75em 0 0 rgba(55, 0, 255, .2), 0 2.5em 0 0 rgba(55, 0, 255, .2), -1.8em 1.8em 0 0 rgba(55, 0, 255, .2), -2.6em 0 0 0 rgba(55, 0, 255, .2), -1.8em -1.8em 0 0 rgba(55, 0, 255, .5);\n  }\n\n  25% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .5), 1.8em -1.8em 0 0 rgba(55, 0, 255, .7), 2.5em 0 0 0 #00F, 1.75em 1.75em 0 0 rgba(55, 0, 255, .2), 0 2.5em 0 0 rgba(55, 0, 255, .2), -1.8em 1.8em 0 0 rgba(55, 0, 255, .2), -2.6em 0 0 0 rgba(55, 0, 255, .2), -1.8em -1.8em 0 0 rgba(55, 0, 255, .2);\n  }\n\n  37.5% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .2), 1.8em -1.8em 0 0 rgba(55, 0, 255, .5), 2.5em 0 0 0 rgba(55, 0, 255, .7), 1.75em 1.75em 0 0 #00F, 0 2.5em 0 0 rgba(55, 0, 255, .2), -1.8em 1.8em 0 0 rgba(55, 0, 255, .2), -2.6em 0 0 0 rgba(55, 0, 255, .2), -1.8em -1.8em 0 0 rgba(55, 0, 255, .2);\n  }\n\n  50% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .2), 1.8em -1.8em 0 0 rgba(55, 0, 255, .2), 2.5em 0 0 0 rgba(55, 0, 255, .5), 1.75em 1.75em 0 0 rgba(55, 0, 255, .7), 0 2.5em 0 0 #00F, -1.8em 1.8em 0 0 rgba(55, 0, 255, .2), -2.6em 0 0 0 rgba(55, 0, 255, .2), -1.8em -1.8em 0 0 rgba(55, 0, 255, .2);\n  }\n\n  62.5% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .2), 1.8em -1.8em 0 0 rgba(55, 0, 255, .2), 2.5em 0 0 0 rgba(55, 0, 255, .2), 1.75em 1.75em 0 0 rgba(55, 0, 255, .5), 0 2.5em 0 0 rgba(55, 0, 255, .7), -1.8em 1.8em 0 0 #00F, -2.6em 0 0 0 rgba(55, 0, 255, .2), -1.8em -1.8em 0 0 rgba(55, 0, 255, .2);\n  }\n\n  75% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .2), 1.8em -1.8em 0 0 rgba(55, 0, 255, .2), 2.5em 0 0 0 rgba(55, 0, 255, .2), 1.75em 1.75em 0 0 rgba(55, 0, 255, .2), 0 2.5em 0 0 rgba(55, 0, 255, .5), -1.8em 1.8em 0 0 rgba(55, 0, 255, .7), -2.6em 0 0 0 #00F, -1.8em -1.8em 0 0 rgba(55, 0, 255, .2);\n  }\n\n  87.5% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .2), 1.8em -1.8em 0 0 rgba(55, 0, 255, .2), 2.5em 0 0 0 rgba(55, 0, 255, .2), 1.75em 1.75em 0 0 rgba(55, 0, 255, .2), 0 2.5em 0 0 rgba(55, 0, 255, .2), -1.8em 1.8em 0 0 rgba(55, 0, 255, .5), -2.6em 0 0 0 rgba(55, 0, 255, .7), -1.8em -1.8em 0 0 #00F;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUVwQixtQ0FBbUM7RUFHbkMsd0JBQXdCO0FBQzFCOztBQXNDQTs7RUFFRTs7SUFFRSxrU0FBa1M7RUFDcFM7O0VBRUE7SUFDRSxrU0FBa1M7RUFDcFM7O0VBRUE7SUFDRSxrU0FBa1M7RUFDcFM7O0VBRUE7SUFDRSxrU0FBa1M7RUFDcFM7O0VBRUE7SUFDRSxrU0FBa1M7RUFDcFM7O0VBRUE7SUFDRSxrU0FBa1M7RUFDcFM7O0VBRUE7SUFDRSxrU0FBa1M7RUFDcFM7O0VBRUE7SUFDRSxrU0FBa1M7RUFDcFM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuXG4udXNlci1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICMwMEY7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuXG4udXNlci1hdmF0YXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4ucGFnaW5hdGlvbi1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweCAyMHB4IDA7XG59XG5cbi5wYWdpbmF0aW9uLWVsZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWNvbG9yOiAjODA4MDgwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucGFnaW5hdGlvbi1jdXJyZW50IHtcbiAgYm9yZGVyLWNvbG9yOiAjMDBGO1xufVxuXG4ucGFnaW5hdGlvbi1lbGVtZW50OmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5pdGVtLWNvdW50LXNlbGVjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaXRlbS1jb3VudC1pbnB1dCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubG9hZGVyIHtcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNSAxLjFzIGluZmluaXRlIGVhc2U7XG4gIGFuaW1hdGlvbjogbG9hZDUgMS4xcyBpbmZpbml0ZSBlYXNlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDUge1xuXG4gIDAlLFxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yLjZlbSAwIDAgIzAwRiwgMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMi41ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAwIDIuNWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIDEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTIuNmVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjUpLCAtMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC43KTtcbiAgfVxuXG4gIDEyLjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yLjZlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyksIDEuOGVtIC0xLjhlbSAwIDAgIzAwRiwgMi41ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAwIDIuNWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIDEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTIuNmVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KTtcbiAgfVxuXG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjUpLCAxLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpLCAyLjVlbSAwIDAgMCAjMDBGLCAxLjc1ZW0gMS43NWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMCAyLjVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAxLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0yLjZlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMik7XG4gIH1cblxuICAzNy41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjUpLCAyLjVlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC43KSwgMS43NWVtIDEuNzVlbSAwIDAgIzAwRiwgMCAyLjVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAxLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0yLjZlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMik7XG4gIH1cblxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMi41ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNSksIDEuNzVlbSAxLjc1ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpLCAwIDIuNWVtIDAgMCAjMDBGLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMi42ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpO1xuICB9XG5cbiAgNjIuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMi41ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjUpLCAwIDIuNWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC43KSwgLTEuOGVtIDEuOGVtIDAgMCAjMDBGLCAtMi42ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpO1xuICB9XG5cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yLjZlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjc1ZW0gMS43NWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMCAyLjVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNSksIC0xLjhlbSAxLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyksIC0yLjZlbSAwIDAgMCAjMDBGLCAtMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKTtcbiAgfVxuXG4gIDg3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yLjZlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjc1ZW0gMS43NWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMCAyLjVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAxLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNSksIC0yLjZlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC43KSwgLTEuOGVtIC0xLjhlbSAwIDAgIzAwRjtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxvYWQ1IHtcblxuICAwJSxcbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwICMwMEYsIDEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjc1ZW0gMS43NWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMCAyLjVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAxLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0yLjZlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgLTEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyk7XG4gIH1cblxuICAxMi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpLCAxLjhlbSAtMS44ZW0gMCAwICMwMEYsIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjc1ZW0gMS43NWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMCAyLjVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAxLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0yLjZlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNSk7XG4gIH1cblxuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC43KSwgMi41ZW0gMCAwIDAgIzAwRiwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMi42ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpO1xuICB9XG5cbiAgMzcuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgMi41ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyksIDEuNzVlbSAxLjc1ZW0gMCAwICMwMEYsIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMi42ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpO1xuICB9XG5cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yLjZlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjUpLCAxLjc1ZW0gMS43NWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC43KSwgMCAyLjVlbSAwIDAgIzAwRiwgLTEuOGVtIDEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTIuNmVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKTtcbiAgfVxuXG4gIDYyLjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yLjZlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjc1ZW0gMS43NWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgMCAyLjVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyksIC0xLjhlbSAxLjhlbSAwIDAgIzAwRiwgLTIuNmVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAyLjVlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjUpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpLCAtMi42ZW0gMCAwIDAgIzAwRiwgLTEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMik7XG4gIH1cblxuICA4Ny41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAyLjVlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjUpLCAtMi42ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyksIC0xLjhlbSAtMS44ZW0gMCAwICMwMEY7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "o0su");
/* harmony import */ var _interceptor_user_request_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptor/user.request.interceptor */ "2cLR");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ..._services__WEBPACK_IMPORTED_MODULE_5__["appServices"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptor_user_request_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserRequestInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                ],
                providers: [
                    ..._services__WEBPACK_IMPORTED_MODULE_5__["appServices"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptor_user_request_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserRequestInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "o0su":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: appServices, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appServices", function() { return appServices; });
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "qfBg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });


const appServices = [
    _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]
];



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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UserService {
    constructor(http) {
        this.http = http;
        this.ROOT_URL = 'https://reqres.in/api/users';
        this.loading = true;
    }
    getUsers(options) {
        this.loading = true;
        return this.http.get(this.ROOT_URL, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((page) => page));
    }
    stopLoader() {
        this.loading = false;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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




const routes = [];
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