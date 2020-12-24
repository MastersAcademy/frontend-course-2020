(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/volus1986/WebstormProjects/frontend-course-2020/homeworks/volodymyr.ustilkin_VolodymyrUstilkin/11-dependency-injection/dependency-injection/src/main.ts */"zUnb");


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
/* harmony import */ var _mocks_vehicles_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mocks/vehicles.mock */ "Lhbt");





class VehicleService {
    getVehicles() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mocks_vehicles_mock__WEBPACK_IMPORTED_MODULE_3__["MOCK_VEHICLES"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000));
    }
}
VehicleService.ɵfac = function VehicleService_Factory(t) { return new (t || VehicleService)(); };
VehicleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VehicleService, factory: VehicleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "Lhbt":
/*!****************************************!*\
  !*** ./src/app/mocks/vehicles.mock.ts ***!
  \****************************************/
/*! exports provided: MOCK_VEHICLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_VEHICLES", function() { return MOCK_VEHICLES; });
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ "VqFa");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);

const count = 20;
let seed = 1222;
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

/***/ "SKNm":
/*!*************************************!*\
  !*** ./src/app/directives/index.ts ***!
  \*************************************/
/*! exports provided: appDirective, RedBackgroundColorDirective, LinkActiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appDirective", function() { return appDirective; });
/* harmony import */ var _red_background_color_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./red-background-color.directive */ "ZnJT");
/* harmony import */ var _link_active_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link-active.directive */ "l1dh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedBackgroundColorDirective", function() { return _red_background_color_directive__WEBPACK_IMPORTED_MODULE_0__["RedBackgroundColorDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkActiveDirective", function() { return _link_active_directive__WEBPACK_IMPORTED_MODULE_1__["LinkActiveDirective"]; });



const appDirective = [
    _red_background_color_directive__WEBPACK_IMPORTED_MODULE_0__["RedBackgroundColorDirective"],
    _link_active_directive__WEBPACK_IMPORTED_MODULE_1__["LinkActiveDirective"]
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
/* harmony import */ var _directives_link_active_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/link-active.directive */ "l1dh");
/* harmony import */ var _directives_red_background_color_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/red-background-color.directive */ "ZnJT");
/* harmony import */ var _pipes_transform_vehicle_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/transform-vehicle.pipe */ "gQB0");








function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "transformVehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehicle_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appLinkActive", vehicle_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appLinkActive", vehicle_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vehicle_r3.post.protocol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appLinkActive", vehicle_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, vehicle_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appLinkActive", vehicle_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 10, vehicle_r3.cost.amount, vehicle_r3.cost.currencyCode));
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Added from");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Vehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_1_tr_11_Template, 15, 13, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.vehicles);
} }
class AppComponent {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
        this.title = 'dependency-injection';
    }
    ngAfterContentInit() {
        this.getVehicles();
    }
    getVehicles() {
        this.areVehiclesLoading = true;
        this.vehicleService.getVehicles()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this.areVehiclesLoading = false))
            .subscribe(value => {
            this.vehicles = value;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["VehicleService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [["class", "loader", 4, "ngIf"], [4, "ngIf"], [1, "loader"], [1, "vehicle-table"], [4, "ngFor", "ngForOf"], [1, "table-cell-link", 3, "appLinkActive"], ["appRedBackgroundColor", "", 1, "table-cell-link", 3, "appLinkActive"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 12, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.areVehiclesLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.areVehiclesLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _directives_link_active_directive__WEBPACK_IMPORTED_MODULE_4__["LinkActiveDirective"], _directives_red_background_color_directive__WEBPACK_IMPORTED_MODULE_5__["RedBackgroundColorDirective"]], pipes: [_pipes_transform_vehicle_pipe__WEBPACK_IMPORTED_MODULE_6__["TransformVehiclePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".vehicle-table[_ngcontent-%COMP%] {\n  margin: 100px auto 0;\n  font-size: 20px;\n}\n\n.table-cell-link[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.loader[_ngcontent-%COMP%] {\n  margin: 10% auto 0;\n  font-size: 15px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  animation: loader-spinner-animation 1.5s infinite ease;\n  transform: translateZ(0);\n}\n\n@keyframes loader-spinner-animation {\n\n  0%,\n  100% {\n    box-shadow: 0 -2.6em 0 0 #3700FF, 1.8em -1.8em 0 0 rgba(55, 0, 255, .2), 2.5em 0 0 0 rgba(55, 0, 255, .2), 1.75em 1.75em 0 0 rgba(55, 0, 255, .2), 0 2.5em 0 0 rgba(55, 0, 255, .2), -1.8em 1.8em 0 0 rgba(55, 0, 255, .2), -2.6em 0 0 0 rgba(55, 0, 255, .5), -1.8em -1.8em 0 0 rgba(55, 0, 255, .7);\n  }\n\n  12.5% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .7), 1.8em -1.8em 0 0 #3700FF, 2.5em 0 0 0 rgba(55, 0, 255, .2), 1.75em 1.75em 0 0 rgba(55, 0, 255, .2), 0 2.5em 0 0 rgba(55, 0, 255, .2), -1.8em 1.8em 0 0 rgba(55, 0, 255, .2), -2.6em 0 0 0 rgba(55, 0, 255, .2), -1.8em -1.8em 0 0 rgba(55, 0, 255, .5);\n  }\n\n  25% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .5), 1.8em -1.8em 0 0 rgba(55, 0, 255, .7), 2.5em 0 0 0 #3700FF, 1.75em 1.75em 0 0 rgba(55, 0, 255, .2), 0 2.5em 0 0 rgba(55, 0, 255, .2), -1.8em 1.8em 0 0 rgba(55, 0, 255, .2), -2.6em 0 0 0 rgba(55, 0, 255, .2), -1.8em -1.8em 0 0 rgba(55, 0, 255, .2);\n  }\n\n  37.5% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .2), 1.8em -1.8em 0 0 rgba(55, 0, 255, .5), 2.5em 0 0 0 rgba(55, 0, 255, .7), 1.75em 1.75em 0 0 #3700FF, 0 2.5em 0 0 rgba(55, 0, 255, .2), -1.8em 1.8em 0 0 rgba(55, 0, 255, .2), -2.6em 0 0 0 rgba(55, 0, 255, .2), -1.8em -1.8em 0 0 rgba(55, 0, 255, .2);\n  }\n\n  50% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .2), 1.8em -1.8em 0 0 rgba(55, 0, 255, .2), 2.5em 0 0 0 rgba(55, 0, 255, .5), 1.75em 1.75em 0 0 rgba(55, 0, 255, .7), 0 2.5em 0 0 #3700FF, -1.8em 1.8em 0 0 rgba(55, 0, 255, .2), -2.6em 0 0 0 rgba(55, 0, 255, .2), -1.8em -1.8em 0 0 rgba(55, 0, 255, .2);\n  }\n\n  62.5% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .2), 1.8em -1.8em 0 0 rgba(55, 0, 255, .2), 2.5em 0 0 0 rgba(55, 0, 255, .2), 1.75em 1.75em 0 0 rgba(55, 0, 255, .5), 0 2.5em 0 0 rgba(55, 0, 255, .7), -1.8em 1.8em 0 0 #3700FF, -2.6em 0 0 0 rgba(55, 0, 255, .2), -1.8em -1.8em 0 0 rgba(55, 0, 255, .2);\n  }\n\n  75% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .2), 1.8em -1.8em 0 0 rgba(55, 0, 255, .2), 2.5em 0 0 0 rgba(55, 0, 255, .2), 1.75em 1.75em 0 0 rgba(55, 0, 255, .2), 0 2.5em 0 0 rgba(55, 0, 255, .5), -1.8em 1.8em 0 0 rgba(55, 0, 255, .7), -2.6em 0 0 0 #3700FF, -1.8em -1.8em 0 0 rgba(55, 0, 255, .2);\n  }\n\n  87.5% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .2), 1.8em -1.8em 0 0 rgba(55, 0, 255, .2), 2.5em 0 0 0 rgba(55, 0, 255, .2), 1.75em 1.75em 0 0 rgba(55, 0, 255, .2), 0 2.5em 0 0 rgba(55, 0, 255, .2), -1.8em 1.8em 0 0 rgba(55, 0, 255, .5), -2.6em 0 0 0 rgba(55, 0, 255, .7), -1.8em -1.8em 0 0 #3700FF;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFFcEIsc0RBQXNEO0VBR3RELHdCQUF3QjtBQUMxQjs7QUFzQ0E7O0VBRUU7O0lBRUUscVNBQXFTO0VBQ3ZTOztFQUVBO0lBQ0UscVNBQXFTO0VBQ3ZTOztFQUVBO0lBQ0UscVNBQXFTO0VBQ3ZTOztFQUVBO0lBQ0UscVNBQXFTO0VBQ3ZTOztFQUVBO0lBQ0UscVNBQXFTO0VBQ3ZTOztFQUVBO0lBQ0UscVNBQXFTO0VBQ3ZTOztFQUVBO0lBQ0UscVNBQXFTO0VBQ3ZTOztFQUVBO0lBQ0UscVNBQXFTO0VBQ3ZTO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZWhpY2xlLXRhYmxlIHtcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRhYmxlLWNlbGwtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sb2FkZXIge1xuICBtYXJnaW46IDEwJSBhdXRvIDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRlci1zcGlubmVyLWFuaW1hdGlvbiAxLjVzIGluZmluaXRlIGVhc2U7XG4gIGFuaW1hdGlvbjogbG9hZGVyLXNwaW5uZXItYW5pbWF0aW9uIDEuNXMgaW5maW5pdGUgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRlci1zcGlubmVyLWFuaW1hdGlvbiB7XG5cbiAgMCUsXG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCAjMzcwMEZGLCAxLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAyLjVlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMi42ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNSksIC0xLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpO1xuICB9XG5cbiAgMTIuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC43KSwgMS44ZW0gLTEuOGVtIDAgMCAjMzcwMEZGLCAyLjVlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMi42ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjUpO1xuICB9XG5cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yLjZlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNSksIDEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyksIDIuNWVtIDAgMCAwICMzNzAwRkYsIDEuNzVlbSAxLjc1ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAwIDIuNWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIDEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTIuNmVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKTtcbiAgfVxuXG4gIDM3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yLjZlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNSksIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpLCAxLjc1ZW0gMS43NWVtIDAgMCAjMzcwMEZGLCAwIDIuNWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIDEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTIuNmVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAyLjVlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyksIDAgMi41ZW0gMCAwICMzNzAwRkYsIC0xLjhlbSAxLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0yLjZlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMik7XG4gIH1cblxuICA2Mi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAyLjVlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNSksIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpLCAtMS44ZW0gMS44ZW0gMCAwICMzNzAwRkYsIC0yLjZlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMik7XG4gIH1cblxuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMi41ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAwIDIuNWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgLTEuOGVtIDEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC43KSwgLTIuNmVtIDAgMCAwICMzNzAwRkYsIC0xLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpO1xuICB9XG5cbiAgODcuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMi41ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAwIDIuNWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIDEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgLTIuNmVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpLCAtMS44ZW0gLTEuOGVtIDAgMCAjMzcwMEZGO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZGVyLXNwaW5uZXItYW5pbWF0aW9uIHtcblxuICAwJSxcbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwICMzNzAwRkYsIDEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjc1ZW0gMS43NWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMCAyLjVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAxLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0yLjZlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgLTEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyk7XG4gIH1cblxuICAxMi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpLCAxLjhlbSAtMS44ZW0gMCAwICMzNzAwRkYsIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjc1ZW0gMS43NWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMCAyLjVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAxLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0yLjZlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNSk7XG4gIH1cblxuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC43KSwgMi41ZW0gMCAwIDAgIzM3MDBGRiwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMi42ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpO1xuICB9XG5cbiAgMzcuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgMi41ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyksIDEuNzVlbSAxLjc1ZW0gMCAwICMzNzAwRkYsIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMi42ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpO1xuICB9XG5cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yLjZlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjUpLCAxLjc1ZW0gMS43NWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC43KSwgMCAyLjVlbSAwIDAgIzM3MDBGRiwgLTEuOGVtIDEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTIuNmVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKTtcbiAgfVxuXG4gIDYyLjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yLjZlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjc1ZW0gMS43NWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgMCAyLjVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyksIC0xLjhlbSAxLjhlbSAwIDAgIzM3MDBGRiwgLTIuNmVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAyLjVlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjUpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpLCAtMi42ZW0gMCAwIDAgIzM3MDBGRiwgLTEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMik7XG4gIH1cblxuICA4Ny41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAyLjVlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjUpLCAtMi42ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyksIC0xLjhlbSAtMS44ZW0gMCAwICMzNzAwRkY7XG4gIH1cbn1cblxuIl19 */"] });
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "o0su");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives */ "SKNm");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes */ "pFkP");
/* harmony import */ var _directives_red_background_color_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/red-background-color.directive */ "ZnJT");
/* harmony import */ var _directives_link_active_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/link-active.directive */ "l1dh");
/* harmony import */ var _pipes_transform_vehicle_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/transform-vehicle.pipe */ "gQB0");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ..._services__WEBPACK_IMPORTED_MODULE_4__["appServices"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _directives_red_background_color_directive__WEBPACK_IMPORTED_MODULE_7__["RedBackgroundColorDirective"], _directives_link_active_directive__WEBPACK_IMPORTED_MODULE_8__["LinkActiveDirective"], _pipes_transform_vehicle_pipe__WEBPACK_IMPORTED_MODULE_9__["TransformVehiclePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    ..._directives__WEBPACK_IMPORTED_MODULE_5__["appDirective"],
                    ..._pipes__WEBPACK_IMPORTED_MODULE_6__["appPipes"]
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

/***/ "ZnJT":
/*!**************************************************************!*\
  !*** ./src/app/directives/red-background-color.directive.ts ***!
  \**************************************************************/
/*! exports provided: RedBackgroundColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedBackgroundColorDirective", function() { return RedBackgroundColorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RedBackgroundColorDirective {
    constructor(element) {
        this.element = element;
    }
    ngAfterViewInit() {
        if (this.element.nativeElement.innerHTML === 'http') {
            this.element.nativeElement.style.backgroundColor = '#F00';
        }
    }
}
RedBackgroundColorDirective.ɵfac = function RedBackgroundColorDirective_Factory(t) { return new (t || RedBackgroundColorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
RedBackgroundColorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RedBackgroundColorDirective, selectors: [["", "appRedBackgroundColor", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedBackgroundColorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[appRedBackgroundColor]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


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

/***/ "l1dh":
/*!*****************************************************!*\
  !*** ./src/app/directives/link-active.directive.ts ***!
  \*****************************************************/
/*! exports provided: LinkActiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkActiveDirective", function() { return LinkActiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LinkActiveDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        if (this.appLinkActive.post.protocol === 'https') {
            this.el.nativeElement.href = `https://www.google.com/search?q=${this.appLinkActive.vehicle.trim().replace(' ', '+')}`;
        }
    }
}
LinkActiveDirective.ɵfac = function LinkActiveDirective_Factory(t) { return new (t || LinkActiveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LinkActiveDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LinkActiveDirective, selectors: [["", "appLinkActive", ""]], inputs: { appLinkActive: "appLinkActive" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkActiveDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[appLinkActive]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { appLinkActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
    _vehicle_service__WEBPACK_IMPORTED_MODULE_0__["VehicleService"]
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
    _transform_vehicle_pipe__WEBPACK_IMPORTED_MODULE_0__["TransformVehiclePipe"]
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