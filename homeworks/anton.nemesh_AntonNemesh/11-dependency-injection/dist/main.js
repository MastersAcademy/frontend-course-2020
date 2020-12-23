(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ntnnmsh/Documents/Masters Academy/frontend-course-2020/homeworks/anton.nemesh_AntonNemesh/11-dependency-injection/src/main.ts */"zUnb");


/***/ }),

/***/ "42bR":
/*!*******************************!*\
  !*** ./src/vechicles.mock.ts ***!
  \*******************************/
/*! exports provided: MOCK_VEHICLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_VEHICLES", function() { return MOCK_VEHICLES; });
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ "NZy3");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);

const count = 20;
let seed = 1222;
// tslint:disable-next-line:typedef
function getFakeVehicle() {
    seed += 1;
    faker__WEBPACK_IMPORTED_MODULE_0__["seed"](seed);
    return {
        color: faker__WEBPACK_IMPORTED_MODULE_0__["vehicle"].color(),
        fuel: faker__WEBPACK_IMPORTED_MODULE_0__["vehicle"].fuel(),
        manufacturer: faker__WEBPACK_IMPORTED_MODULE_0__["vehicle"].manufacturer(),
        model: faker__WEBPACK_IMPORTED_MODULE_0__["vehicle"].model(),
        type: faker__WEBPACK_IMPORTED_MODULE_0__["vehicle"].type(),
        vehicle: faker__WEBPACK_IMPORTED_MODULE_0__["vehicle"].vehicle(),
        vin: faker__WEBPACK_IMPORTED_MODULE_0__["vehicle"].vin(),
        post: {
            slug: faker__WEBPACK_IMPORTED_MODULE_0__["helpers"].slugify(faker__WEBPACK_IMPORTED_MODULE_0__["name"].title()),
            protocol: faker__WEBPACK_IMPORTED_MODULE_0__["internet"].protocol(),
        },
        cost: {
            account: faker__WEBPACK_IMPORTED_MODULE_0__["finance"].account(),
            accountName: faker__WEBPACK_IMPORTED_MODULE_0__["finance"].accountName(),
            amount: faker__WEBPACK_IMPORTED_MODULE_0__["finance"].amount(),
            currencyCode: faker__WEBPACK_IMPORTED_MODULE_0__["finance"].currencyCode(),
        },
    };
}
const MOCK_VEHICLES = new Array(count).fill(0).map(getFakeVehicle);


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

/***/ "D1vo":
/*!*********************************************!*\
  !*** ./src/app/services/vehicle.service.ts ***!
  \*********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _vechicles_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vechicles.mock */ "42bR");





class VehicleService {
    constructor() { }
    getVehicles() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_vechicles_mock__WEBPACK_IMPORTED_MODULE_3__["MOCK_VEHICLES"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000));
    }
}
VehicleService.ɵfac = function VehicleService_Factory(t) { return new (t || VehicleService)(); };
VehicleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VehicleService, factory: VehicleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SKNm":
/*!*************************************!*\
  !*** ./src/app/directives/index.ts ***!
  \*************************************/
/*! exports provided: appDirectives, ClickableLinksDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appDirectives", function() { return appDirectives; });
/* harmony import */ var _clickable_links_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickable-links.directive */ "VHMx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClickableLinksDirective", function() { return _clickable_links_directive__WEBPACK_IMPORTED_MODULE_0__["ClickableLinksDirective"]; });


const appDirectives = [
    _clickable_links_directive__WEBPACK_IMPORTED_MODULE_0__["ClickableLinksDirective"],
];



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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "o0su");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_clickable_links_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/clickable-links.directive */ "VHMx");
/* harmony import */ var _pipes_transformVehicleModelPipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/transformVehicleModelPipe */ "kz/7");
/* harmony import */ var _pipes_transformPricePipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/transformPricePipe */ "URDV");








function AppComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_table_1_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "transformVehicleModel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "transformPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehicle_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vehicle_r3.post.protocol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, vehicle_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, vehicle_r3));
} }
function AppComponent_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Added from");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Vehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_table_1_tr_9_Template, 12, 7, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.vehicles);
} }
class AppComponent {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
        this.vehicles = [];
        this.areLoading = true;
        this.getVehicles();
    }
    getVehicles() {
        this.vehicleService.getVehicles()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this.areLoading = false))
            .subscribe((vehicles) => {
            this.vehicles = vehicles;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["VehicleService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [["class", "pre-loader", 4, "ngIf"], ["class", "table", 4, "ngIf"], [1, "pre-loader"], [1, "table"], [1, "table__body"], [1, "table__row"], [1, "table__col"], ["class", "table__row", "appClickableLinks", "", 4, "ngFor", "ngForOf"], ["appClickableLinks", "", 1, "table__row"], ["href", "", 1, "table__link"], ["tabindex", "-1", "href", "", 1, "table__link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_table_1_Template, 10, 1, "table", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.areLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.areLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _directives_clickable_links_directive__WEBPACK_IMPORTED_MODULE_4__["ClickableLinksDirective"]], pipes: [_pipes_transformVehicleModelPipe__WEBPACK_IMPORTED_MODULE_5__["TransformVehicleModelPipe"], _pipes_transformPricePipe__WEBPACK_IMPORTED_MODULE_6__["transformPricePipe"]], styles: [".pre-loader[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.unclickable[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.red-text[_ngcontent-%COMP%] {\n  color: #F00;\n}\n\n.table[_ngcontent-%COMP%] {\n  border: 2px solid #8A2BE2;\n  border-collapse: collapse;\n}\n\n.table__link[_ngcontent-%COMP%] {\n  color: #5165FF;\n}\n\n.table__col[_ngcontent-%COMP%] {\n  border: 2px solid #CCD2FF;\n  position: relative;\n  padding: 18px;\n}\n\n.table__row[_ngcontent-%COMP%]:hover, .table__row[_ngcontent-%COMP%]:focus-within {\n  background: #F2F3FF;\n  outline: none;\n}\n\n.table__link[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-decoration: none;\n  color: inherit;\n}\n\n.table__link[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJlLWxvYWRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnVuY2xpY2thYmxlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5yZWQtdGV4dCB7XG4gIGNvbG9yOiAjRjAwO1xufVxuXG4udGFibGUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjOEEyQkUyO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4udGFibGVfX2xpbmsge1xuICBjb2xvcjogIzUxNjVGRjtcbn1cblxuLnRhYmxlX19jb2wge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQ0NEMkZGO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE4cHg7XG59XG5cbi50YWJsZV9fcm93OmhvdmVyLFxuLnRhYmxlX19yb3c6Zm9jdXMtd2l0aGluIHtcbiAgYmFja2dyb3VuZDogI0YyRjNGRjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRhYmxlX19saW5rIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi50YWJsZV9fbGluazpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] }]; }, null); })();


/***/ }),

/***/ "URDV":
/*!*********************************************!*\
  !*** ./src/app/pipes/transformPricePipe.ts ***!
  \*********************************************/
/*! exports provided: transformPricePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformPricePipe", function() { return transformPricePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class transformPricePipe {
    transform(value) {
        return `${value.cost.amount} ${value.cost.currencyCode}`;
    }
}
transformPricePipe.ɵfac = function transformPricePipe_Factory(t) { return new (t || transformPricePipe)(); };
transformPricePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "transformPrice", type: transformPricePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](transformPricePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'transformPrice'
            }]
    }], null, null); })();


/***/ }),

/***/ "VHMx":
/*!*********************************************************!*\
  !*** ./src/app/directives/clickable-links.directive.ts ***!
  \*********************************************************/
/*! exports provided: ClickableLinksDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickableLinksDirective", function() { return ClickableLinksDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ClickableLinksDirective {
    constructor(el) {
        this.el = el;
        this.currentModel = '';
    }
    encodeGoogleURL(string) {
        return `https://www.google.com/search?q=${string.split(' ').join('+')}`;
    }
    ngAfterViewInit() {
        this.currentRow = this.el.nativeElement;
        this.currentModel = this.currentRow.children[1].innerText;
        if (this.currentRow.children[0].innerText === 'http') {
            this.currentRow.children[0].classList.add('red-text');
            [...this.currentRow.children].forEach((el) => {
                el.children[0].classList.add('unclickable');
            });
        }
        else {
            [...this.currentRow.children].forEach((el) => {
                el.children[0].href = this.encodeGoogleURL(this.currentModel);
            });
        }
    }
}
ClickableLinksDirective.ɵfac = function ClickableLinksDirective_Factory(t) { return new (t || ClickableLinksDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ClickableLinksDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ClickableLinksDirective, selectors: [["", "appClickableLinks", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickableLinksDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[appClickableLinks]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "o0su");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives */ "SKNm");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes */ "pFkP");
/* harmony import */ var _directives_clickable_links_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/clickable-links.directive */ "VHMx");
/* harmony import */ var _pipes_transformVehicleModelPipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/transformVehicleModelPipe */ "kz/7");
/* harmony import */ var _pipes_transformPricePipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/transformPricePipe */ "URDV");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ..._services__WEBPACK_IMPORTED_MODULE_4__["appServices"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _directives_clickable_links_directive__WEBPACK_IMPORTED_MODULE_7__["ClickableLinksDirective"], _pipes_transformVehicleModelPipe__WEBPACK_IMPORTED_MODULE_8__["TransformVehicleModelPipe"], _pipes_transformPricePipe__WEBPACK_IMPORTED_MODULE_9__["transformPricePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    ..._directives__WEBPACK_IMPORTED_MODULE_5__["appDirectives"],
                    ..._pipes__WEBPACK_IMPORTED_MODULE_6__["appPipes"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [
                    ..._services__WEBPACK_IMPORTED_MODULE_4__["appServices"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kz/7":
/*!****************************************************!*\
  !*** ./src/app/pipes/transformVehicleModelPipe.ts ***!
  \****************************************************/
/*! exports provided: TransformVehicleModelPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformVehicleModelPipe", function() { return TransformVehicleModelPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TransformVehicleModelPipe {
    transform(value) {
        return `${value.manufacturer} - ${value.model} (${value.fuel})`;
    }
}
TransformVehicleModelPipe.ɵfac = function TransformVehicleModelPipe_Factory(t) { return new (t || TransformVehicleModelPipe)(); };
TransformVehicleModelPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "transformVehicleModel", type: TransformVehicleModelPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransformVehicleModelPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'transformVehicleModel'
            }]
    }], null, null); })();


/***/ }),

/***/ "o0su":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: appServices, VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appServices", function() { return appServices; });
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle.service */ "D1vo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return _vehicle_service__WEBPACK_IMPORTED_MODULE_0__["VehicleService"]; });


const appServices = [
    _vehicle_service__WEBPACK_IMPORTED_MODULE_0__["VehicleService"],
];



/***/ }),

/***/ "pFkP":
/*!********************************!*\
  !*** ./src/app/pipes/index.ts ***!
  \********************************/
/*! exports provided: appPipes, TransformVehicleModelPipe, transformPricePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appPipes", function() { return appPipes; });
/* harmony import */ var _transformVehicleModelPipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transformVehicleModelPipe */ "kz/7");
/* harmony import */ var _transformPricePipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transformPricePipe */ "URDV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransformVehicleModelPipe", function() { return _transformVehicleModelPipe__WEBPACK_IMPORTED_MODULE_0__["TransformVehicleModelPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformPricePipe", function() { return _transformPricePipe__WEBPACK_IMPORTED_MODULE_1__["transformPricePipe"]; });



const appPipes = [
    _transformVehicleModelPipe__WEBPACK_IMPORTED_MODULE_0__["TransformVehicleModelPipe"],
    _transformPricePipe__WEBPACK_IMPORTED_MODULE_1__["transformPricePipe"],
];




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