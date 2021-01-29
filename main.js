(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+JL9":
/*!*************************************************!*\
  !*** ./src/app/directives/vehicle.directive.ts ***!
  \*************************************************/
/*! exports provided: VehicleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDirective", function() { return VehicleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const pattern = /(^https)/;
const url = 'https://www.google.com/search?q=';
class VehicleDirective {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.appVehicle = '';
        this.href = null;
        this.renderer.setAttribute(this.elementRef.nativeElement, 'href', '');
    }
    ngAfterViewInit() {
        if (!pattern.test(this.appVehicle)) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#F00');
        }
        if (this.href !== null) {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'href', `${url}${this.href.replace(/ /g, "+")}`);
            this.renderer.setAttribute(this.elementRef.nativeElement, 'target', '_blank');
        }
    }
}
VehicleDirective.ɵfac = function VehicleDirective_Factory(t) { return new (t || VehicleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
VehicleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: VehicleDirective, selectors: [["", "appVehicle", ""]], inputs: { appVehicle: "appVehicle", href: "href" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appVehicle]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { appVehicle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/batteryfree/Документы/11-dependency-injection/src/main.ts */"zUnb");


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
/* harmony import */ var _mocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mocks */ "6qqp");





class VehicleService {
    constructor() { }
    getVehicles() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mocks__WEBPACK_IMPORTED_MODULE_3__["MOCK_VEHICLES"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000));
    }
    ;
}
VehicleService.ɵfac = function VehicleService_Factory(t) { return new (t || VehicleService)(); };
VehicleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VehicleService, factory: VehicleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "S9xZ":
/*!***********************************************************!*\
  !*** ./src/app/components/vehicles/vehicles.component.ts ***!
  \***********************************************************/
/*! exports provided: VehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleComponent", function() { return VehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_vehicle_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/vehicle.directive */ "+JL9");
/* harmony import */ var _pipes_transform_vehicle_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/transform-vehicle.pipe */ "gQB0");





function VehicleComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Added from");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "transformVehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehicle_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", vehicle_r1.vehicle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("appVehicle", vehicle_r1.post.protocol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, vehicle_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 7, vehicle_r1.cost.amount, vehicle_r1.cost.currencyCode, "code"));
} }
class VehicleComponent {
}
VehicleComponent.ɵfac = function VehicleComponent_Factory(t) { return new (t || VehicleComponent)(); };
VehicleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleComponent, selectors: [["app-vehicles"]], inputs: { vehicles: "vehicles" }, decls: 12, vars: 1, consts: [[1, "vehicles"], [1, "head-list"], [1, "head-list__num-list"], [1, "head-list__added"], [1, "head-list__vehicle"], [1, "head-list__price"], [1, "list"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "item__index"], [1, "item__link", 3, "href", "appVehicle"], [1, "item__vehicle"], [1, "item__price"]], template: function VehicleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2116");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Added from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Vehicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VehicleComponent_li_11_Template, 11, 11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vehicles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _directives_vehicle_directive__WEBPACK_IMPORTED_MODULE_2__["VehicleDirective"]], pipes: [_pipes_transform_vehicle_pipe__WEBPACK_IMPORTED_MODULE_3__["TransformVehiclePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: [".vehicles[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.head-list[_ngcontent-%COMP%] {\n  width: 750px;\n  display: flex;\n  text-align: center;\n}\n\n.head-list__num-list[_ngcontent-%COMP%] {\n  width: 10%;\n  margin-left: 1px;\n  padding: 10px;\n  background-color: #1E8A23;\n  color: #FFF;\n  text-transform: uppercase;\n}\n\n.head-list__added[_ngcontent-%COMP%] {\n  width: 25%;\n  margin-left: 1px;\n  padding: 10px;\n  background-color: #1E8A23;\n  color: #FFF;\n  text-transform: uppercase;\n}\n\n.head-list__vehicle[_ngcontent-%COMP%] {\n  width: 65%;\n  margin-left: 1px;\n  padding: 10px;\n  background-color: #1E8A23;\n  color: #FFF;\n  text-transform: uppercase;\n}\n\n.head-list__price[_ngcontent-%COMP%] {\n  width: 25%;\n  margin-left: 1px;\n  padding: 10px;\n  background-color: #1E8A23;\n  color: #FFF;\n  text-transform: uppercase;\n}\n\n.list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  width: 750px;\n}\n\n.item[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.item__index[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 10%;\n  border-bottom: solid 1px #1E8A23;\n  border-left: solid 1px #1E8A23;\n}\n\n.item__link[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 25%;\n  border-bottom: solid 1px #1E8A23;\n  border-left: solid 1px #1E8A23;\n}\n\n.item__vehicle[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 65%;\n  border-bottom: solid 1px #1E8A23;\n  border-left: solid 1px #1E8A23;\n}\n\n.item__price[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 25%;\n  border-bottom: solid 1px #1E8A23;\n  border-left: solid 1px #1E8A23;\n  border-right: solid 1px #1E8A23;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwrQkFBK0I7QUFDakMiLCJmaWxlIjoidmVoaWNsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnZlaGljbGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWQtbGlzdCB7XG4gIHdpZHRoOiA3NTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZC1saXN0X19udW0tbGlzdCB7XG4gIHdpZHRoOiAxMCU7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRThBMjM7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaGVhZC1saXN0X19hZGRlZCB7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRThBMjM7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaGVhZC1saXN0X192ZWhpY2xlIHtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFOEEyMztcbiAgY29sb3I6ICNGRkY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oZWFkLWxpc3RfX3ByaWNlIHtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFOEEyMztcbiAgY29sb3I6ICNGRkY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB3aWR0aDogNzUwcHg7XG59XG5cbi5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLml0ZW1fX2luZGV4IHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwJTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICMxRThBMjM7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggIzFFOEEyMztcbn1cblxuLml0ZW1fX2xpbmsge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMjUlO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzFFOEEyMztcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjMUU4QTIzO1xufVxuXG4uaXRlbV9fdmVoaWNsZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA2NSU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMUU4QTIzO1xuICBib3JkZXItbGVmdDogc29saWQgMXB4ICMxRThBMjM7XG59XG5cbi5pdGVtX19wcmljZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAyNSU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMUU4QTIzO1xuICBib3JkZXItbGVmdDogc29saWQgMXB4ICMxRThBMjM7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICMxRThBMjM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vehicles',
                templateUrl: './vehicles.component.html',
                styleUrls: ['./vehicles.component.css']
            }]
    }], null, { vehicles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "SKNm":
/*!*************************************!*\
  !*** ./src/app/directives/index.ts ***!
  \*************************************/
/*! exports provided: appDirectives, VehicleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appDirectives", function() { return appDirectives; });
/* harmony import */ var _vehicle_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle.directive */ "+JL9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VehicleDirective", function() { return _vehicle_directive__WEBPACK_IMPORTED_MODULE_0__["VehicleDirective"]; });


const appDirectives = [
    _vehicle_directive__WEBPACK_IMPORTED_MODULE_0__["VehicleDirective"],
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
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loader/loader.component */ "vPOg");
/* harmony import */ var _components_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/vehicles/vehicles.component */ "S9xZ");







function AppComponent_app_loader_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader", 2);
} }
function AppComponent_app_vehicles_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vehicles", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vehicles", ctx_r1.vehicles);
} }
class AppComponent {
    constructor(carService) {
        this.carService = carService;
        this.title = 'vehicles';
        this.vehicles = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.carService.getVehicles()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this.isLoading = true))
            .subscribe((vehicles) => { this.vehicles = vehicles; });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["VehicleService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [["class", "loader", 4, "ngIf"], [3, "vehicles", 4, "ngIf"], [1, "loader"], [3, "vehicles"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_vehicles_1_Template, 1, 1, "app-vehicles", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _components_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_5__["VehicleComponent"]], styles: [".loader[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] }]; }, null); })();


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/vehicles/vehicles.component */ "S9xZ");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives */ "SKNm");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "o0su");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes */ "pFkP");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/loader/loader.component */ "vPOg");
/* harmony import */ var _pipes_transform_vehicle_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/transform-vehicle.pipe */ "gQB0");
/* harmony import */ var _directives_vehicle_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/vehicle.directive */ "+JL9");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ..._services__WEBPACK_IMPORTED_MODULE_5__["appServices"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_3__["VehicleComponent"], _pipes_transform_vehicle_pipe__WEBPACK_IMPORTED_MODULE_8__["TransformVehiclePipe"], _directives_vehicle_directive__WEBPACK_IMPORTED_MODULE_9__["VehicleDirective"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_3__["VehicleComponent"],
                    ..._pipes__WEBPACK_IMPORTED_MODULE_6__["appPipes"],
                    ..._directives__WEBPACK_IMPORTED_MODULE_4__["appDirectives"],
                    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [
                    ..._services__WEBPACK_IMPORTED_MODULE_5__["appServices"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gQB0":
/*!*************************************************!*\
  !*** ./src/app/pipes/transform-vehicle.pipe.ts ***!
  \*************************************************/
/*! exports provided: TransformVehiclePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformVehiclePipe", function() { return TransformVehiclePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TransformVehiclePipe {
    transform(vehicle) {
        return `${vehicle.manufacturer} - ${vehicle.model} (${vehicle.fuel})`;
    }
}
TransformVehiclePipe.ɵfac = function TransformVehiclePipe_Factory(t) { return new (t || TransformVehiclePipe)(); };
TransformVehiclePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "transformVehicle", type: TransformVehiclePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransformVehiclePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'transformVehicle'
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
/*! exports provided: appPipes, TransformVehiclePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appPipes", function() { return appPipes; });
/* harmony import */ var _transform_vehicle_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform-vehicle.pipe */ "gQB0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransformVehiclePipe", function() { return _transform_vehicle_pipe__WEBPACK_IMPORTED_MODULE_0__["TransformVehiclePipe"]; });


const appPipes = [
    _transform_vehicle_pipe__WEBPACK_IMPORTED_MODULE_0__["TransformVehiclePipe"],
];



/***/ }),

/***/ "vPOg":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 0, consts: [[1, "loader"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".loader[_ngcontent-%COMP%] {\n  border: 8px solid #f3f3f3;\n  border-top: 8px solid #1E8A23;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxLQUFLLHVCQUF1QixFQUFFO0VBQzlCLE9BQU8seUJBQXlCLEVBQUU7QUFDcEMiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcbiAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICMxRThBMjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.css']
            }]
    }], function () { return []; }, null); })();


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