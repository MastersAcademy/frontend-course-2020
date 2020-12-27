(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/power/JSProjects/frontend-course-2020/homeworks/oleg.kovalenko_oleg20Kovalenko/11-dependency-injection/src/main.ts */"zUnb");


/***/ }),

/***/ "69eX":
/*!*********************************************!*\
  !*** ./src/app/service/vehicles.service.ts ***!
  \*********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mocks */ "6qqp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class VehicleService {
    constructor() { }
    getVehicles() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mocks__WEBPACK_IMPORTED_MODULE_2__["MOCK_VEHICLES"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000));
    }
}
VehicleService.ɵfac = function VehicleService_Factory(t) { return new (t || VehicleService)(); };
VehicleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VehicleService, factory: VehicleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6qqp":
/*!********************************!*\
  !*** ./src/app/mocks/index.ts ***!
  \********************************/
/*! exports provided: MOCK_VEHICLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vechicles_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vechicles.mock */ "BtIW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MOCK_VEHICLES", function() { return _vechicles_mock__WEBPACK_IMPORTED_MODULE_0__["MOCK_VEHICLES"]; });




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

/***/ "B2wE":
/*!***********************************************!*\
  !*** ./src/app/directive/change.directive.ts ***!
  \***********************************************/
/*! exports provided: ChangeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeDirective", function() { return ChangeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ChangeDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        if (this.el.nativeElement.lastChild.textContent === 'http') {
            this.el.nativeElement.style.color = 'red';
        }
    }
}
ChangeDirective.ɵfac = function ChangeDirective_Factory(t) { return new (t || ChangeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ChangeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ChangeDirective, selectors: [["", "appChange", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appChange]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "BtIW":
/*!*****************************************!*\
  !*** ./src/app/mocks/vechicles.mock.ts ***!
  \*****************************************/
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

/***/ "EJUL":
/*!**********************************!*\
  !*** ./src/app/service/index.ts ***!
  \**********************************/
/*! exports provided: appService, VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appService", function() { return appService; });
/* harmony import */ var _vehicles_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicles.service */ "69eX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return _vehicles_service__WEBPACK_IMPORTED_MODULE_0__["VehicleService"]; });


const appService = [_vehicles_service__WEBPACK_IMPORTED_MODULE_0__["VehicleService"]];



/***/ }),

/***/ "O2P3":
/*!***************************************!*\
  !*** ./src/app/pipe/currency.pipe.ts ***!
  \***************************************/
/*! exports provided: CurrencyPrisePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyPrisePipe", function() { return CurrencyPrisePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CurrencyPrisePipe {
    transform(vehicles) {
        return vehicles.cost.currencyCode;
    }
}
CurrencyPrisePipe.ɵfac = function CurrencyPrisePipe_Factory(t) { return new (t || CurrencyPrisePipe)(); };
CurrencyPrisePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "currencyPipe", type: CurrencyPrisePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyPrisePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'currencyPipe',
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "EJUL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _directive_change_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive/change.directive */ "B2wE");
/* harmony import */ var _pipe_vehicles_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe/vehicles.pipe */ "sYwH");








function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
function AppComponent_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Added from : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Vehicle :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "vehiclesPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Price :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehicle_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vehicle_r3.post.protocol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, vehicle_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 6, vehicle_r3.cost.amount), " ", vehicle_r3.cost.currencyCode, "");
} }
function AppComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ul_2_li_1_Template, 18, 8, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.vehicles);
} }
class AppComponent {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
        this.title = 'dependency-injection';
        this.vehicles = [];
        this.vehiclesLoading = false;
        this.getVehicles();
    }
    getVehicles() {
        this.vehiclesLoading = true;
        this.vehicleService
            .getVehicles()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => (this.vehiclesLoading = false)))
            .subscribe((vehicles) => {
            this.vehicles = vehicles;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [[1, "container"], ["class", "loading", 4, "ngIf"], [4, "ngIf"], [1, "loading"], ["class", "vehicle-list-item", 4, "ngFor", "ngForOf"], [1, "vehicle-list-item"], ["appChange", "", 1, "vehicle-label"], ["appChange", "", 1, "vehicle-span"], [1, "vehicle-label"], [1, "vehicle-span"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ul_2_Template, 2, 1, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vehiclesLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.vehiclesLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _directive_change_directive__WEBPACK_IMPORTED_MODULE_5__["ChangeDirective"]], pipes: [_pipe_vehicles_pipe__WEBPACK_IMPORTED_MODULE_6__["VehiclesPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}\n\n.vehicle-list-item[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-bottom: 30px;\n}\n\n.vehicle-label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 20px;\n}\n\n.vehicle-span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #808080;\n}\n\n.loading[_ngcontent-%COMP%] {\n  border: 16px solid #F3F3F3;\n  border-radius: 50%;\n  border-top: 16px solid #3498DB;\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBOztFQUVFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4udmVoaWNsZS1saXN0LWl0ZW0ge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udmVoaWNsZS1sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udmVoaWNsZS1zcGFuIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmxvYWRpbmcge1xuICBib3JkZXI6IDE2cHggc29saWQgI0YzRjNGMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4REI7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcblxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] }]; }, null); })();


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
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe */ "nqyB");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "EJUL");
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive */ "uDWz");
/* harmony import */ var _directive_change_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directive/change.directive */ "B2wE");
/* harmony import */ var _pipe_vehicles_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe/vehicles.pipe */ "sYwH");
/* harmony import */ var _pipe_currency_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipe/currency.pipe */ "O2P3");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ..._service__WEBPACK_IMPORTED_MODULE_5__["appService"],
        ..._pipe__WEBPACK_IMPORTED_MODULE_0__["appPipe"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _directive_change_directive__WEBPACK_IMPORTED_MODULE_7__["ChangeDirective"], _pipe_vehicles_pipe__WEBPACK_IMPORTED_MODULE_8__["VehiclesPipe"], _pipe_currency_pipe__WEBPACK_IMPORTED_MODULE_9__["CurrencyPrisePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    ..._directive__WEBPACK_IMPORTED_MODULE_6__["appDirective"],
                    ..._pipe__WEBPACK_IMPORTED_MODULE_0__["appPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [
                    ..._service__WEBPACK_IMPORTED_MODULE_5__["appService"],
                    ..._pipe__WEBPACK_IMPORTED_MODULE_0__["appPipe"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "nqyB":
/*!*******************************!*\
  !*** ./src/app/pipe/index.ts ***!
  \*******************************/
/*! exports provided: appPipe, VehiclesPipe, CurrencyPrisePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appPipe", function() { return appPipe; });
/* harmony import */ var _vehicles_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicles.pipe */ "sYwH");
/* harmony import */ var _currency_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency.pipe */ "O2P3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VehiclesPipe", function() { return _vehicles_pipe__WEBPACK_IMPORTED_MODULE_0__["VehiclesPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyPrisePipe", function() { return _currency_pipe__WEBPACK_IMPORTED_MODULE_1__["CurrencyPrisePipe"]; });



const appPipe = [_vehicles_pipe__WEBPACK_IMPORTED_MODULE_0__["VehiclesPipe"], _currency_pipe__WEBPACK_IMPORTED_MODULE_1__["CurrencyPrisePipe"]];




/***/ }),

/***/ "sYwH":
/*!***************************************!*\
  !*** ./src/app/pipe/vehicles.pipe.ts ***!
  \***************************************/
/*! exports provided: VehiclesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesPipe", function() { return VehiclesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class VehiclesPipe {
    transform(vehicles) {
        return `${vehicles.manufacturer} - ${vehicles.model}  (${vehicles.fuel})`;
    }
}
VehiclesPipe.ɵfac = function VehiclesPipe_Factory(t) { return new (t || VehiclesPipe)(); };
VehiclesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "vehiclesPipe", type: VehiclesPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehiclesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'vehiclesPipe',
            }]
    }], null, null); })();


/***/ }),

/***/ "uDWz":
/*!************************************!*\
  !*** ./src/app/directive/index.ts ***!
  \************************************/
/*! exports provided: appDirective, ChangeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appDirective", function() { return appDirective; });
/* harmony import */ var _change_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change.directive */ "B2wE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangeDirective", function() { return _change_directive__WEBPACK_IMPORTED_MODULE_0__["ChangeDirective"]; });


const appDirective = [
    _change_directive__WEBPACK_IMPORTED_MODULE_0__["ChangeDirective"],
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