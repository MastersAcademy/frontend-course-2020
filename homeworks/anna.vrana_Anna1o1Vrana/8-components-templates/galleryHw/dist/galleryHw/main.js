(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/anna/Documents/frontend-course-2020/homeworks/anna.vrana_Anna1o1Vrana/8-components-templates/galleryHw/src/main.ts */"zUnb");


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

/***/ "B0wh":
/*!****************************************************************!*\
  !*** ./src/app/selected-picture/selected-picture.component.ts ***!
  \****************************************************************/
/*! exports provided: SelectedPictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedPictureComponent", function() { return SelectedPictureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SelectedPictureComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.selectedImg.urls.small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class SelectedPictureComponent {
}
SelectedPictureComponent.ɵfac = function SelectedPictureComponent_Factory(t) { return new (t || SelectedPictureComponent)(); };
SelectedPictureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectedPictureComponent, selectors: [["app-selected-picture"]], inputs: { selectedImg: "selectedImg" }, decls: 1, vars: 1, consts: [["class", "images", 4, "ngIf"], [1, "images"], ["alt", "", 3, "src"]], template: function SelectedPictureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectedPictureComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedImg);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".images[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdGVkLXBpY3R1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekIiLCJmaWxlIjoic2VsZWN0ZWQtcGljdHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectedPictureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-selected-picture',
                templateUrl: './selected-picture.component.html',
                styleUrls: ['./selected-picture.component.css']
            }]
    }], null, { selectedImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Jj4P":
/*!******************************!*\
  !*** ./src/app/data/Urls.ts ***!
  \******************************/
/*! exports provided: Urls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Urls", function() { return Urls; });
class Urls {
    constructor(raw, full, regular, small, thumb) {
        this.raw = raw;
        this.full = full;
        this.regular = regular;
        this.small = small;
        this.thumb = thumb;
    }
}


/***/ }),

/***/ "OD9T":
/*!**********************************************!*\
  !*** ./src/app/picture/picture.component.ts ***!
  \**********************************************/
/*! exports provided: PictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureComponent", function() { return PictureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PictureComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PictureComponent_ng_template_1_Template(rf, ctx) { }
class PictureComponent {
    constructor() {
        this.loading = true;
    }
    hideLoader() {
        this.loading = false;
        console.log('loader');
    }
}
PictureComponent.ɵfac = function PictureComponent_Factory(t) { return new (t || PictureComponent)(); };
PictureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictureComponent, selectors: [["app-picture"]], inputs: { currentImage: "currentImage" }, decls: 4, vars: 3, consts: [["class", "loading", 4, "ngIf", "ngIfElse"], ["pictureLoadingBlock", ""], ["alt", "gallery picture", 1, "img", 3, "src", "load"], [1, "loading"], [1, "circle"]], template: function PictureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PictureComponent_div_0_Template, 9, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PictureComponent_ng_template_1_Template, 0, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function PictureComponent_Template_img_load_3_listener() { return ctx.hideLoader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.currentImage.urls.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".loading[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 200px;\n  height: 200px;\n  background: #0A2BA1;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  animation: loading 1.2s cubic-bezier(.5, 0, .5, 1) infinite;\n  transform-origin: 40px 40px;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]::after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #FFF;\n  margin: -4px 0 0 -4px;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -.036s;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(1)::after {\n  top: 63px;\n  left: 63px;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -.072s;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2)::after {\n  top: 68px;\n  left: 56px;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -.108s;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(3)::after {\n  top: 71px;\n  left: 48px;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: -.144s;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(4)::after {\n  top: 72px;\n  left: 40px;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: -.18s;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(5)::after {\n  top: 71px;\n  left: 32px;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: -.216s;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(6)::after {\n  top: 68px;\n  left: 24px;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: -.252s;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(7)::after {\n  top: 63px;\n  left: 17px;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: -.288s;\n}\n\n.loading[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(8)::after {\n  top: 56px;\n  left: 12px;\n}\n\n@keyframes loading {\n\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 8px;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY3R1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyREFBMkQ7RUFDM0QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBOztFQUVFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InBpY3R1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZDogIzBBMkJBMTtcbn1cblxuLmxvYWRpbmcgLmNpcmNsZSB7XG4gIGFuaW1hdGlvbjogbG9hZGluZyAxLjJzIGN1YmljLWJlemllciguNSwgMCwgLjUsIDEpIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHg7XG59XG5cbi5sb2FkaW5nIC5jaXJjbGU6OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIG1hcmdpbjogLTRweCAwIDAgLTRweDtcbn1cblxuLmxvYWRpbmcgLmNpcmNsZTpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0uMDM2cztcbn1cblxuLmxvYWRpbmcgLmNpcmNsZTpudGgtY2hpbGQoMSk6OmFmdGVyIHtcbiAgdG9wOiA2M3B4O1xuICBsZWZ0OiA2M3B4O1xufVxuXG4ubG9hZGluZyAuY2lyY2xlOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLS4wNzJzO1xufVxuXG4ubG9hZGluZyAuY2lyY2xlOm50aC1jaGlsZCgyKTo6YWZ0ZXIge1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDU2cHg7XG59XG5cbi5sb2FkaW5nIC5jaXJjbGU6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtLjEwOHM7XG59XG5cbi5sb2FkaW5nIC5jaXJjbGU6bnRoLWNoaWxkKDMpOjphZnRlciB7XG4gIHRvcDogNzFweDtcbiAgbGVmdDogNDhweDtcbn1cblxuLmxvYWRpbmcgLmNpcmNsZTpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0uMTQ0cztcbn1cblxuLmxvYWRpbmcgLmNpcmNsZTpudGgtY2hpbGQoNCk6OmFmdGVyIHtcbiAgdG9wOiA3MnB4O1xuICBsZWZ0OiA0MHB4O1xufVxuXG4ubG9hZGluZyAuY2lyY2xlOm50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLS4xOHM7XG59XG5cbi5sb2FkaW5nIC5jaXJjbGU6bnRoLWNoaWxkKDUpOjphZnRlciB7XG4gIHRvcDogNzFweDtcbiAgbGVmdDogMzJweDtcbn1cblxuLmxvYWRpbmcgLmNpcmNsZTpudGgtY2hpbGQoNikge1xuICBhbmltYXRpb24tZGVsYXk6IC0uMjE2cztcbn1cblxuLmxvYWRpbmcgLmNpcmNsZTpudGgtY2hpbGQoNik6OmFmdGVyIHtcbiAgdG9wOiA2OHB4O1xuICBsZWZ0OiAyNHB4O1xufVxuXG4ubG9hZGluZyAuY2lyY2xlOm50aC1jaGlsZCg3KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLS4yNTJzO1xufVxuXG4ubG9hZGluZyAuY2lyY2xlOm50aC1jaGlsZCg3KTo6YWZ0ZXIge1xuICB0b3A6IDYzcHg7XG4gIGxlZnQ6IDE3cHg7XG59XG5cbi5sb2FkaW5nIC5jaXJjbGU6bnRoLWNoaWxkKDgpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtLjI4OHM7XG59XG5cbi5sb2FkaW5nIC5jaXJjbGU6bnRoLWNoaWxkKDgpOjphZnRlciB7XG4gIHRvcDogNTZweDtcbiAgbGVmdDogMTJweDtcbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nIHtcblxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cblxuLmltZyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-picture',
                templateUrl: './picture.component.html',
                styleUrls: ['./picture.component.css']
            }]
    }], null, { currentImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QhmR":
/*!******************************!*\
  !*** ./src/app/data/data.ts ***!
  \******************************/
/*! exports provided: IMAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES", function() { return IMAGES; });
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Img */ "q79u");
/* harmony import */ var _Urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Urls */ "Jj4P");


const IMAGES = [
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](1, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixid=MXwxODg5MjR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](2, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607332742884-3cea04bf9a6d?ixid=MXwxODg5MjR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607332742884-3cea04bf9a6d?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607332742884-3cea04bf9a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607332742884-3cea04bf9a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607332742884-3cea04bf9a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](3, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607344635159-59930e3330b1?ixid=MXwxODg5MjR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](4, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?ixid=MXwxODg5MjR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](5, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607105794278-a7eb7236776b?ixid=MXwxODg5MjR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607105794278-a7eb7236776b?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607105794278-a7eb7236776b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607105794278-a7eb7236776b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607105794278-a7eb7236776b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](6, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1606518559059-5fecead22c43?ixid=MXwxODg5MjR8MHwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1606518559059-5fecead22c43?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1606518559059-5fecead22c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1606518559059-5fecead22c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1606518559059-5fecead22c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](7, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?ixid=MXwxODg5MjR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](8, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607144273105-a821fe2cf636?ixid=MXwxODg5MjR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607144273105-a821fe2cf636?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607144273105-a821fe2cf636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607144273105-a821fe2cf636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607144273105-a821fe2cf636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](9, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MXwxODg5MjR8MXwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](10, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607190695232-7556d12bb0ad?ixid=MXwxODg5MjR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607190695232-7556d12bb0ad?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607190695232-7556d12bb0ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607190695232-7556d12bb0ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607190695232-7556d12bb0ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](11, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607038523484-203fe00e2465?ixid=MXwxODg5MjR8MHwxfGFsbHwxMXx8fHx8fDJ8&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607038523484-203fe00e2465?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMXx8fHx8fDJ8&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607038523484-203fe00e2465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607038523484-203fe00e2465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607038523484-203fe00e2465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](12, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607297501620-f120874ab1e9?ixid=MXwxODg5MjR8MHwxfGFsbHwxMnx8fHx8fDJ8&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607297501620-f120874ab1e9?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMnx8fHx8fDJ8&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607297501620-f120874ab1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607297501620-f120874ab1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607297501620-f120874ab1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](13, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?ixid=MXwxODg5MjR8MHwxfGFsbHwxM3x8fHx8fDJ8&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxM3x8fHx8fDJ8&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxM3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxM3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxM3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](14, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1593114630390-e35acaa7d7d6?ixid=MXwxODg5MjR8MHwxfGFsbHwxNHx8fHx8fDJ8&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1593114630390-e35acaa7d7d6?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNHx8fHx8fDJ8&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1593114630390-e35acaa7d7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1593114630390-e35acaa7d7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1593114630390-e35acaa7d7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](15, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607298634018-b9cce0c71989?ixid=MXwxODg5MjR8MHwxfGFsbHwxNXx8fHx8fDJ8&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607298634018-b9cce0c71989?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNXx8fHx8fDJ8&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607298634018-b9cce0c71989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607298634018-b9cce0c71989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607298634018-b9cce0c71989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](16, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607253852325-7b7c623a253e?ixid=MXwxODg5MjR8MHwxfGFsbHwxNnx8fHx8fDJ8&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607253852325-7b7c623a253e?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNnx8fHx8fDJ8&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607253852325-7b7c623a253e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607253852325-7b7c623a253e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607253852325-7b7c623a253e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](17, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607292987892-7314d9c5f428?ixid=MXwxODg5MjR8MHwxfGFsbHwxN3x8fHx8fDJ8&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607292987892-7314d9c5f428?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxN3x8fHx8fDJ8&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607292987892-7314d9c5f428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxN3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607292987892-7314d9c5f428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxN3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607292987892-7314d9c5f428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxN3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](18, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607038072407-a2fe22551a0d?ixid=MXwxODg5MjR8MHwxfGFsbHwxOHx8fHx8fDJ8&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607038072407-a2fe22551a0d?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOHx8fHx8fDJ8&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607038072407-a2fe22551a0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607038072407-a2fe22551a0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607038072407-a2fe22551a0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](19, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?ixid=MXwxODg5MjR8MHwxfGFsbHwxOXx8fHx8fDJ8&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOXx8fHx8fDJ8&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200')),
    new _Img__WEBPACK_IMPORTED_MODULE_0__["Img"](20, new _Urls__WEBPACK_IMPORTED_MODULE_1__["Urls"]('https://images.unsplash.com/photo-1607292990250-63c6585e45e5?ixid=MXwxODg5MjR8MHwxfGFsbHwyMHx8fHx8fDJ8&ixlib=rb-1.2.1', 'https://images.unsplash.com/photo-1607292990250-63c6585e45e5?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=85', 'https://images.unsplash.com/photo-1607292990250-63c6585e45e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1607292990250-63c6585e45e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400', 'https://images.unsplash.com/photo-1607292990250-63c6585e45e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200'))
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
/* harmony import */ var _img_list_img_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img-list/img-list.component */ "cLB1");



class AppComponent {
    constructor() {
        this.title = 'galleryHw';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"], [1, "gallery-title"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-img-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_img_list_img_list_component__WEBPACK_IMPORTED_MODULE_1__["ImgListComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 1800px;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.gallery-title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 15px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxODAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmdhbGxlcnktdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _img_list_img_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img-list/img-list.component */ "cLB1");
/* harmony import */ var _picture_picture_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./picture/picture.component */ "OD9T");
/* harmony import */ var _selected_picture_selected_picture_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selected-picture/selected-picture.component */ "B0wh");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _img_list_img_list_component__WEBPACK_IMPORTED_MODULE_3__["ImgListComponent"],
        _picture_picture_component__WEBPACK_IMPORTED_MODULE_4__["PictureComponent"],
        _selected_picture_selected_picture_component__WEBPACK_IMPORTED_MODULE_5__["SelectedPictureComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _img_list_img_list_component__WEBPACK_IMPORTED_MODULE_3__["ImgListComponent"],
                    _picture_picture_component__WEBPACK_IMPORTED_MODULE_4__["PictureComponent"],
                    _selected_picture_selected_picture_component__WEBPACK_IMPORTED_MODULE_5__["SelectedPictureComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cLB1":
/*!************************************************!*\
  !*** ./src/app/img-list/img-list.component.ts ***!
  \************************************************/
/*! exports provided: ImgListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgListComponent", function() { return ImgListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data */ "QhmR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _selected_picture_selected_picture_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selected-picture/selected-picture.component */ "B0wh");
/* harmony import */ var _picture_picture_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../picture/picture.component */ "OD9T");






function ImgListComponent_app_picture_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-picture", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgListComponent_app_picture_1_Template_app_picture_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const img_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSelect(img_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", img_r1 == ctx_r0.selectedImg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentImage", img_r1);
} }
class ImgListComponent {
    constructor() {
        this.images = _data_data__WEBPACK_IMPORTED_MODULE_1__["IMAGES"];
    }
    onSelect(img) {
        this.selectedImg = img;
        console.log(img.id);
    }
}
ImgListComponent.ɵfac = function ImgListComponent_Factory(t) { return new (t || ImgListComponent)(); };
ImgListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImgListComponent, selectors: [["app-img-list"]], decls: 5, vars: 2, consts: [[1, "img-wrapper", "images"], ["class", "image", 3, "currentImage", "selected", "click", 4, "ngFor", "ngForOf"], [1, "image-headline"], [3, "selectedImg"], [1, "image", 3, "currentImage", "click"]], template: function ImgListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImgListComponent_app_picture_1_Template, 1, 3, "app-picture", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-selected-picture", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedImg", ctx.selectedImg);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _selected_picture_selected_picture_component__WEBPACK_IMPORTED_MODULE_3__["SelectedPictureComponent"], _picture_picture_component__WEBPACK_IMPORTED_MODULE_4__["PictureComponent"]], styles: [".img-wrapper[_ngcontent-%COMP%] {\n  margin: 15px auto;\n  list-style: none;\n}\n\n.images[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.image[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 200px;\n  height: 200px;\n  border: 1px solid #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\n.image-headline[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.selected[_ngcontent-%COMP%] {\n  border: 3px solid #FF0505;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoiaW1nLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctd3JhcHBlciB7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uaW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmltYWdlIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW1hZ2UtaGVhZGxpbmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNGRjA1MDU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-img-list',
                templateUrl: './img-list.component.html',
                styleUrls: ['./img-list.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "q79u":
/*!*****************************!*\
  !*** ./src/app/data/Img.ts ***!
  \*****************************/
/*! exports provided: Img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
class Img {
    constructor(id, urls) {
        this.id = id;
        this.urls = urls;
    }
}


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