(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Николай\Desktop\Angular\dependency-injection\src\main.ts */"zUnb");


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
/* harmony import */ var _mocks_vehicles_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mocks/vehicles.mock */ "Lhbt");




class VehicleService {
    constructor() { }
    getVehicleLayouts() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mocks_vehicles_mock__WEBPACK_IMPORTED_MODULE_2__["MOCK_VEHICLES"]);
    }
}
VehicleService.ɵfac = function VehicleService_Factory(t) { return new (t || VehicleService)(); };
VehicleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VehicleService, factory: VehicleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


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

/***/ "SKNm":
/*!*************************************!*\
  !*** ./src/app/directives/index.ts ***!
  \*************************************/
/*! exports provided: appDirectives, LinkAdress, LinkColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appDirectives", function() { return appDirectives; });
/* harmony import */ var _color_link_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-link.directive */ "d513");
/* harmony import */ var _adress_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adress-link.directive */ "irHg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkAdress", function() { return _adress_link_directive__WEBPACK_IMPORTED_MODULE_1__["LinkAdress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkColor", function() { return _color_link_directive__WEBPACK_IMPORTED_MODULE_0__["LinkColor"]; });



const appDirectives = [
    _color_link_directive__WEBPACK_IMPORTED_MODULE_0__["LinkColor"],
    _adress_link_directive__WEBPACK_IMPORTED_MODULE_1__["LinkAdress"],
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
/* harmony import */ var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle/vehicle.component */ "fa1O");






function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_2_div_1_app_vehicle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vehicle", 9);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vehicle", item_r6);
} }
function AppComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_2_div_1_app_vehicle_1_Template, 1, 1, "app-vehicle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.mockVehicles);
} }
function AppComponent_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Something went wrong! :-(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_2_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_ng_template_2_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.itemData)("ngIfElse", _r3);
} }
class AppComponent {
    constructor(vehicleServices) {
        this.vehicleServices = vehicleServices;
        this.mockVehicles = [];
        this.itemData = false;
        this.isLoading = true;
        this.getCars();
    }
    getCars() {
        this.vehicleServices.getVehicleLayouts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000)).subscribe((arg) => {
            this.mockVehicles = arg;
            this.itemData = true;
            this.isLoading = false;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["VehicleService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[1, "wrapper"], ["class", "loader", 4, "ngIf"], [4, "ngIf"], [1, "loader"], ["src", "https://practicaldev-herokuapp-com.freetls.fastly.net/assets/loading-ellipsis-b714cf681fd66c853ff6f03dd161b77aa3c80e03cdc06f478b695f42770421e9.svg", "alt", "Loading..."], ["class", "cards-container", 4, "ngIf", "ngIfElse"], ["itemError", ""], [1, "cards-container"], [3, "vehicle", 4, "ngFor", "ngForOf"], [3, "vehicle"], [1, "error-message"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_4__["VehicleComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.cards-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: #6d7e8f;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #d31c1c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2FyZHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCAxMjYsIDE0Myk7XHJcbn1cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMjExLCAyOCwgMjgpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] }]; }, null); })();


/***/ }),

/***/ "TsiX":
/*!************************************************!*\
  !*** ./src/app/pipes/transform-adress.pipe.ts ***!
  \************************************************/
/*! exports provided: TransformAdressPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformAdressPipe", function() { return TransformAdressPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TransformAdressPipe {
    transform(value) {
        return `https://www.google.com/search?q=${value}`;
    }
}
TransformAdressPipe.ɵfac = function TransformAdressPipe_Factory(t) { return new (t || TransformAdressPipe)(); };
TransformAdressPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "transformAdressPipe", type: TransformAdressPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransformAdressPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'transformAdressPipe'
            }]
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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "o0su");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives */ "SKNm");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes */ "pFkP");
/* harmony import */ var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vehicle/vehicle.component */ "fa1O");
/* harmony import */ var _directives_color_link_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/color-link.directive */ "d513");
/* harmony import */ var _directives_adress_link_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/adress-link.directive */ "irHg");
/* harmony import */ var _pipes_transform_adress_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/transform-adress.pipe */ "TsiX");
/* harmony import */ var _pipes_transform_card_description__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/transform-card-description */ "e6oI");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ..._services__WEBPACK_IMPORTED_MODULE_4__["appServices"],
        ..._pipes__WEBPACK_IMPORTED_MODULE_6__["appPipes"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_directives_color_link_directive__WEBPACK_IMPORTED_MODULE_8__["LinkColor"], _directives_adress_link_directive__WEBPACK_IMPORTED_MODULE_9__["LinkAdress"], _pipes_transform_adress_pipe__WEBPACK_IMPORTED_MODULE_10__["TransformAdressPipe"], _pipes_transform_card_description__WEBPACK_IMPORTED_MODULE_11__["CardDescriptionPipe"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_7__["VehicleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    ..._directives__WEBPACK_IMPORTED_MODULE_5__["appDirectives"],
                    ..._pipes__WEBPACK_IMPORTED_MODULE_6__["appPipes"],
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_7__["VehicleComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [
                    ..._services__WEBPACK_IMPORTED_MODULE_4__["appServices"],
                    ..._pipes__WEBPACK_IMPORTED_MODULE_6__["appPipes"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "d513":
/*!****************************************************!*\
  !*** ./src/app/directives/color-link.directive.ts ***!
  \****************************************************/
/*! exports provided: LinkColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkColor", function() { return LinkColor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LinkColor {
    constructor(el) {
        this.el = el;
        this.colorRed = "#B22222";
        this.colorGreen = "#32CD32";
    }
    ngAfterViewInit() {
        this.protocolType === 'https' ?
            this.el.nativeElement.style.border = `5px solid ${this.colorGreen}` :
            this.el.nativeElement.style.border = `5px solid ${this.colorRed}`;
    }
}
LinkColor.ɵfac = function LinkColor_Factory(t) { return new (t || LinkColor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LinkColor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LinkColor, selectors: [["", "protocolType", ""]], inputs: { protocolType: "protocolType" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkColor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[protocolType]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { protocolType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "e6oI":
/*!*****************************************************!*\
  !*** ./src/app/pipes/transform-card-description.ts ***!
  \*****************************************************/
/*! exports provided: CardDescriptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDescriptionPipe", function() { return CardDescriptionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CardDescriptionPipe {
    transform(value) {
        return `${value[0]}-${value[1]} (${value[2]})`;
    }
}
CardDescriptionPipe.ɵfac = function CardDescriptionPipe_Factory(t) { return new (t || CardDescriptionPipe)(); };
CardDescriptionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "card-description", type: CardDescriptionPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardDescriptionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'card-description'
            }]
    }], null, null); })();


/***/ }),

/***/ "fa1O":
/*!**********************************************!*\
  !*** ./src/app/vehicle/vehicle.component.ts ***!
  \**********************************************/
/*! exports provided: VehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleComponent", function() { return VehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes */ "pFkP");
/* harmony import */ var _directives_adress_link_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/adress-link.directive */ "irHg");
/* harmony import */ var _directives_color_link_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/color-link.directive */ "d513");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class VehicleComponent {
    constructor(cardDescriptionPipe) {
        this.cardDescriptionPipe = cardDescriptionPipe;
        this.cardDescription = '';
    }
    ngOnInit() {
        this.vehicleItem = this.vehicle;
        this.subscribeURL = [this.vehicleItem.post.protocol, `${this.vehicleItem.manufacturer}+${this.vehicleItem.model}`];
        this.cardDescription = this.cardDescriptionPipe.transform([this.vehicleItem.manufacturer, this.vehicleItem.model, this.vehicleItem.fuel]);
    }
}
VehicleComponent.ɵfac = function VehicleComponent_Factory(t) { return new (t || VehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pipes__WEBPACK_IMPORTED_MODULE_1__["CardDescriptionPipe"])); };
VehicleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleComponent, selectors: [["app-vehicle"]], inputs: { vehicle: "vehicle" }, decls: 34, vars: 9, consts: [[1, "card-link", 3, "requestData"], [1, "card", 3, "protocolType"], [1, "card-field"], [1, "card-image"], ["src", "./assets/car.jpg", "alt", "image"]], template: function VehicleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Field ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Added from : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Vehicle : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Price : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("requestData", ctx.subscribeURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("protocolType", ctx.vehicleItem.post.protocol);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.vehicleItem.post.slug, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cardDescription, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](31, 5, ctx.vehicleItem.cost.amount, ctx.vehicleItem.cost.currencyCode, "symbol-narrow"), " ");
    } }, directives: [_directives_adress_link_directive__WEBPACK_IMPORTED_MODULE_2__["LinkAdress"], _directives_color_link_directive__WEBPACK_IMPORTED_MODULE_3__["LinkColor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".card[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 10px;\n  padding: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  width: 620px;\n  height: 150px;\n  background-color: #FFF;\n  border-radius: 5px;\n}\n\n.card-field[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  max-width: 200px;\n  height: 30px;\n}\n\n.card-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000;\n}\n\n.card-image[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border: 1px solid #000;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZlaGljbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0Usc0JBQUE7QUFFRiIsImZpbGUiOiJ2ZWhpY2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgd2lkdGg6IDYyMHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWZpZWxkIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmNhcmQtbGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uY2FyZC1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxufVxyXG4uY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vehicle',
                templateUrl: './vehicle.component.html',
                styleUrls: ['./vehicle.component.scss']
            }]
    }], function () { return [{ type: _pipes__WEBPACK_IMPORTED_MODULE_1__["CardDescriptionPipe"] }]; }, { vehicle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "irHg":
/*!*****************************************************!*\
  !*** ./src/app/directives/adress-link.directive.ts ***!
  \*****************************************************/
/*! exports provided: LinkAdress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkAdress", function() { return LinkAdress; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes */ "pFkP");



class LinkAdress {
    constructor(el, transformAdressPipe) {
        this.el = el;
        this.transformAdressPipe = transformAdressPipe;
    }
    ngAfterViewInit() {
        if (this.requestData[0] === 'https') {
            this.el.nativeElement.setAttribute('href', this.transformAdressPipe.transform(this.requestData[1]));
            console.log(this.requestData);
        }
    }
}
LinkAdress.ɵfac = function LinkAdress_Factory(t) { return new (t || LinkAdress)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pipes__WEBPACK_IMPORTED_MODULE_1__["TransformAdressPipe"])); };
LinkAdress.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LinkAdress, selectors: [["", "requestData", ""]], inputs: { requestData: "requestData" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkAdress, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[requestData]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _pipes__WEBPACK_IMPORTED_MODULE_1__["TransformAdressPipe"] }]; }, { requestData: [{
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
    _vehicle_service__WEBPACK_IMPORTED_MODULE_0__["VehicleService"],
];



/***/ }),

/***/ "pFkP":
/*!********************************!*\
  !*** ./src/app/pipes/index.ts ***!
  \********************************/
/*! exports provided: appPipes, TransformAdressPipe, CardDescriptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appPipes", function() { return appPipes; });
/* harmony import */ var _transform_adress_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform-adress.pipe */ "TsiX");
/* harmony import */ var _transform_card_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform-card-description */ "e6oI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransformAdressPipe", function() { return _transform_adress_pipe__WEBPACK_IMPORTED_MODULE_0__["TransformAdressPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardDescriptionPipe", function() { return _transform_card_description__WEBPACK_IMPORTED_MODULE_1__["CardDescriptionPipe"]; });



const appPipes = [
    _transform_adress_pipe__WEBPACK_IMPORTED_MODULE_0__["TransformAdressPipe"],
    _transform_card_description__WEBPACK_IMPORTED_MODULE_1__["CardDescriptionPipe"],
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
