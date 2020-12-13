(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/Desktop/master-academy/homeworks/dmytro.shvets_Schweppes-JS/8-components-templates/src/main.ts */"zUnb");


/***/ }),

/***/ "1wVk":
/*!******************************************!*\
  !*** ./src/app/image/image.component.ts ***!
  \******************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "rYbC");



class ImageComponent {
    constructor(service) {
        this.service = service;
        this.title = 'Image';
    }
    ngOnInit() {
        this.service.currentLink.subscribe(link => this.link = link);
    }
    previousImage() {
        this.service.previousImage();
    }
    nextImage() {
        this.service.nextImage();
    }
}
ImageComponent.ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["Service"])); };
ImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageComponent, selectors: [["app-image"]], decls: 8, vars: 2, consts: [[1, "h2"], [1, "container"], [1, "button", "left", 3, "click"], [1, "fas", "fa-chevron-left"], ["alt", "", 1, "img", 3, "src"], [1, "button", "right", 3, "click"], [1, "fas", "fa-chevron-right"]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageComponent_Template_button_click_3_listener() { return ctx.previousImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageComponent_Template_button_click_6_listener() { return ctx.nextImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 15px 10px;\n  width: 100%;\n  height: 90%;\n  flex-grow: 1;\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n}\n\n.button[_ngcontent-%COMP%] {\n  align-self: center;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n  font-size: 3rem;\n  color: #2F4F4FBB;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUMiLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAxNXB4IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5idXR0b24ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiAjMkY0RjRGQkI7XG59XG5cbi5idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5pbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgLjUpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image',
                templateUrl: './image.component.html',
                styleUrls: ['./image.component.css']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["Service"] }]; }, null); })();


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

/***/ "Ij5Q":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "oBPC");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "rYbC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _plate_plate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plate/plate.component */ "Y54x");






const _c0 = ["plate"];
function GalleryComponent_app_plate_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-plate", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_app_plate_4_Template_app_plate_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const image_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selecting(image_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", image_r1 === ctx_r0.selctedImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", image_r1)("index", i_r2);
} }
class GalleryComponent {
    constructor(service) {
        this.service = service;
        this.title = 'Gallery';
        this.images = _data__WEBPACK_IMPORTED_MODULE_1__["data"];
    }
    ngOnInit() {
        this.service.selectedImage.subscribe(selctedImage => this.selctedImage = selctedImage);
    }
    selecting(item) {
        this.selctedImage = item;
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["Service"])); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], viewQuery: function GalleryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.plate = _t.first);
    } }, decls: 5, vars: 2, consts: [[1, "h1"], [1, "container"], [1, "scroll-container"], ["class", "plate", 3, "image", "index", "selected", "click", 4, "ngFor", "ngForOf"], [1, "plate", 3, "image", "index", "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GalleryComponent_app_plate_4_Template, 1, 4, "app-plate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _plate_plate_component__WEBPACK_IMPORTED_MODULE_4__["PlateComponent"]], styles: [".h1[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 10%;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 15px 0 15px 15px;\n  flex-grow: 1;\n  height: 90%;\n  width: 100%;\n  box-shadow: 0 0 10px 1px #888;\n}\n\n.scroll-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  overflow-y: scroll;\n  gap: 15px;\n  height: 100%;\n  width: 100%;\n}\n\n.plate[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  width: 150px;\n  height: 150px;\n  border-radius: 3px;\n  border: 2px solid rgba(0, 0, 0, .164);\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.selected[_ngcontent-%COMP%] {\n  border: 2px solid #52B788;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaDEge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweCAwIDE1cHggMTVweDtcbiAgZmxleC1ncm93OiAxO1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCAjODg4O1xufVxuXG4uc2Nyb2xsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgZ2FwOiAxNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGxhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTY0KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VsZWN0ZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNTJCNzg4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["Service"] }]; }, { plate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['plate']
        }] }); })();


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
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery/gallery.component */ "Ij5Q");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image/image.component */ "1wVk");




class AppComponent {
    constructor() {
        this.title = 'gallery';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "gallery"], [1, "image"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gallery", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-image", 1);
    } }, directives: [_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"], _image_image_component__WEBPACK_IMPORTED_MODULE_2__["ImageComponent"]], styles: [".gallery[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 50%;\n  width: 100%;\n}\n\n.image[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 50%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztBQUNiIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbGxlcnkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Y54x":
/*!**************************************************!*\
  !*** ./src/app/gallery/plate/plate.component.ts ***!
  \**************************************************/
/*! exports provided: PlateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlateComponent", function() { return PlateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "rYbC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["img"];
function PlateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
const _c1 = function (a0, a1, a2) { return { "landscape": a0, "portrait": a1, "hidden": a2 }; };
class PlateComponent {
    constructor(service) {
        this.service = service;
        this.isLandscape = false;
        this.isPortrait = false;
        this.isLoad = false;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.width = this.img.nativeElement.offsetWidth;
            this.height = this.img.nativeElement.offsetHeight;
            if (this.height < this.width) {
                this.isLandscape = true;
                this.isPortrait = false;
            }
            else {
                this.isLandscape = false;
                this.isPortrait = true;
            }
        }, 0);
    }
    hideLoader() {
        this.isLoad = true;
    }
    sendingLink() {
        this.service.changingLink(this.index);
    }
}
PlateComponent.ɵfac = function PlateComponent_Factory(t) { return new (t || PlateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["Service"])); };
PlateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlateComponent, selectors: [["app-plate"]], viewQuery: function PlateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.img = _t.first);
    } }, inputs: { image: "image", index: "index" }, decls: 3, vars: 7, consts: [["class", "loader", 4, "ngIf"], [1, "img", 3, "src", "ngClass", "load", "click"], ["img", ""], [1, "loader"]], template: function PlateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlateComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function PlateComponent_Template_img_load_1_listener() { return ctx.hideLoader(); })("click", function PlateComponent_Template_img_click_1_listener() { return ctx.sendingLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image["urls"]["thumb"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c1, ctx.isLandscape, ctx.isPortrait, !ctx.isLoad));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".loader[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url('loader.svg');\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.img[_ngcontent-%COMP%] {\n  transition: transform 0.25s;\n}\n\n.img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n}\n\n.portrait[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 80%;\n}\n\n.landscape[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80%;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtRDtFQUNuRCw0QkFBNEI7RUFDNUIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoicGxhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xvYWRlci5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5pbWcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XG59XG5cbi5pbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xufVxuXG4ucG9ydHJhaXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5sYW5kc2NhcGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi5oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-plate',
                templateUrl: './plate.component.html',
                styleUrls: ['./plate.component.css']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["Service"] }]; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], img: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['img']
        }] }); })();


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
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "Ij5Q");
/* harmony import */ var _gallery_plate_plate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery/plate/plate.component */ "Y54x");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image/image.component */ "1wVk");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
        _gallery_plate_plate_component__WEBPACK_IMPORTED_MODULE_5__["PlateComponent"],
        _image_image_component__WEBPACK_IMPORTED_MODULE_6__["ImageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
                    _gallery_plate_plate_component__WEBPACK_IMPORTED_MODULE_5__["PlateComponent"],
                    _image_image_component__WEBPACK_IMPORTED_MODULE_6__["ImageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "oBPC":
/*!*********************************!*\
  !*** ./src/app/gallery/data.ts ***!
  \*********************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = [
    {
        id: 'YhWRSEdBXUE',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixid=MXwxODg5MjR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/YhWRSEdBXUE',
            html: 'https://unsplash.com/photos/YhWRSEdBXUE',
            download: 'https://unsplash.com/photos/YhWRSEdBXUE/download',
            download_location: 'https://api.unsplash.com/photos/YhWRSEdBXUE/download'
        },
        likes: 86
    }, {
        id: '02F0ExnlZus',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607332742884-3cea04bf9a6d?ixid=MXwxODg5MjR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607332742884-3cea04bf9a6d?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607332742884-3cea04bf9a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607332742884-3cea04bf9a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607332742884-3cea04bf9a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/02F0ExnlZus',
            html: 'https://unsplash.com/photos/02F0ExnlZus',
            download: 'https://unsplash.com/photos/02F0ExnlZus/download',
            download_location: 'https://api.unsplash.com/photos/02F0ExnlZus/download'
        },
        likes: 0
    }, {
        id: 'CtJxZ1hHepM',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?ixid=MXwxODg5MjR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/CtJxZ1hHepM',
            html: 'https://unsplash.com/photos/CtJxZ1hHepM',
            download: 'https://unsplash.com/photos/CtJxZ1hHepM/download',
            download_location: 'https://api.unsplash.com/photos/CtJxZ1hHepM/download'
        },
        likes: 2
    }, {
        id: 'YJ00hhEtEAo',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?ixid=MXwxODg5MjR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/YJ00hhEtEAo',
            html: 'https://unsplash.com/photos/YJ00hhEtEAo',
            download: 'https://unsplash.com/photos/YJ00hhEtEAo/download',
            download_location: 'https://api.unsplash.com/photos/YJ00hhEtEAo/download'
        },
        likes: 6
    }, {
        id: 'XviljSeFYzU',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607105794278-a7eb7236776b?ixid=MXwxODg5MjR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607105794278-a7eb7236776b?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607105794278-a7eb7236776b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607105794278-a7eb7236776b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607105794278-a7eb7236776b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/XviljSeFYzU',
            html: 'https://unsplash.com/photos/XviljSeFYzU',
            download: 'https://unsplash.com/photos/XviljSeFYzU/download',
            download_location: 'https://api.unsplash.com/photos/XviljSeFYzU/download'
        },
        likes: 33
    }, {
        id: 'JDoa_IajZYA',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1606518559059-5fecead22c43?ixid=MXwxODg5MjR8MHwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1606518559059-5fecead22c43?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1606518559059-5fecead22c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1606518559059-5fecead22c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1606518559059-5fecead22c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/JDoa_IajZYA',
            html: 'https://unsplash.com/photos/JDoa_IajZYA',
            download: 'https://unsplash.com/photos/JDoa_IajZYA/download',
            download_location: 'https://api.unsplash.com/photos/JDoa_IajZYA/download'
        },
        likes: 24
    }, {
        id: 'lJKohd2k1h8',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?ixid=MXwxODg5MjR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/lJKohd2k1h8',
            html: 'https://unsplash.com/photos/lJKohd2k1h8',
            download: 'https://unsplash.com/photos/lJKohd2k1h8/download',
            download_location: 'https://api.unsplash.com/photos/lJKohd2k1h8/download'
        },
        likes: 36
    }, {
        id: '9AXjbDt49jc',
        description: 'Feminine and girly pink and gold styled stock photo flat lays for bloggers, online entrepreneurs, and social media managers.',
        urls: {
            raw: 'https://images.unsplash.com/photo-1607144273105-a821fe2cf636?ixid=MXwxODg5MjR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607144273105-a821fe2cf636?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607144273105-a821fe2cf636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607144273105-a821fe2cf636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607144273105-a821fe2cf636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/9AXjbDt49jc',
            html: 'https://unsplash.com/photos/9AXjbDt49jc',
            download: 'https://unsplash.com/photos/9AXjbDt49jc/download',
            download_location: 'https://api.unsplash.com/photos/9AXjbDt49jc/download'
        },
        likes: 14
    }, {
        id: '1gLdTsX3_70',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MXwxODg5MjR8MXwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/1gLdTsX3_70',
            html: 'https://unsplash.com/photos/1gLdTsX3_70',
            download: 'https://unsplash.com/photos/1gLdTsX3_70/download',
            download_location: 'https://api.unsplash.com/photos/1gLdTsX3_70/download'
        },
        likes: 600
    }, {
        id: '_-7dN56lCEs',
        description: 'Let’s have a photoshoot ',
        urls: {
            raw: 'https://images.unsplash.com/photo-1607190695232-7556d12bb0ad?ixid=MXwxODg5MjR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607190695232-7556d12bb0ad?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607190695232-7556d12bb0ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607190695232-7556d12bb0ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607190695232-7556d12bb0ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/_-7dN56lCEs',
            html: 'https://unsplash.com/photos/_-7dN56lCEs',
            download: 'https://unsplash.com/photos/_-7dN56lCEs/download',
            download_location: 'https://api.unsplash.com/photos/_-7dN56lCEs/download'
        },
        likes: 15
    }, {
        id: 's-hveG5XATM',
        description: 'Face',
        urls: {
            raw: 'https://images.unsplash.com/photo-1607038523484-203fe00e2465?ixid=MXwxODg5MjR8MHwxfGFsbHwxMXx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607038523484-203fe00e2465?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMXx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607038523484-203fe00e2465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607038523484-203fe00e2465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607038523484-203fe00e2465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/s-hveG5XATM',
            html: 'https://unsplash.com/photos/s-hveG5XATM',
            download: 'https://unsplash.com/photos/s-hveG5XATM/download',
            download_location: 'https://api.unsplash.com/photos/s-hveG5XATM/download'
        },
        likes: 11
    }, {
        id: '3CM1ntpVSYs',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607297501620-f120874ab1e9?ixid=MXwxODg5MjR8MHwxfGFsbHwxMnx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607297501620-f120874ab1e9?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMnx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607297501620-f120874ab1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607297501620-f120874ab1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607297501620-f120874ab1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/3CM1ntpVSYs',
            html: 'https://unsplash.com/photos/3CM1ntpVSYs',
            download: 'https://unsplash.com/photos/3CM1ntpVSYs/download',
            download_location: 'https://api.unsplash.com/photos/3CM1ntpVSYs/download'
        },
        likes: 31
    }, {
        id: 'wiUe8qH09-E',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?ixid=MXwxODg5MjR8MHwxfGFsbHwxM3x8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxM3x8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxM3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxM3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxM3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/wiUe8qH09-E',
            html: 'https://unsplash.com/photos/wiUe8qH09-E',
            download: 'https://unsplash.com/photos/wiUe8qH09-E/download',
            download_location: 'https://api.unsplash.com/photos/wiUe8qH09-E/download'
        },
        likes: 11
    }, {
        id: 'nI3W64cJNLk',
        description: 'Horror pasta',
        urls: {
            raw: 'https://images.unsplash.com/photo-1593114630390-e35acaa7d7d6?ixid=MXwxODg5MjR8MHwxfGFsbHwxNHx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1593114630390-e35acaa7d7d6?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNHx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1593114630390-e35acaa7d7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1593114630390-e35acaa7d7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1593114630390-e35acaa7d7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/nI3W64cJNLk',
            html: 'https://unsplash.com/photos/nI3W64cJNLk',
            download: 'https://unsplash.com/photos/nI3W64cJNLk/download',
            download_location: 'https://api.unsplash.com/photos/nI3W64cJNLk/download'
        },
        likes: 62
    }, {
        id: 'FJMqqEOWJCI',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607298634018-b9cce0c71989?ixid=MXwxODg5MjR8MHwxfGFsbHwxNXx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607298634018-b9cce0c71989?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNXx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607298634018-b9cce0c71989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607298634018-b9cce0c71989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607298634018-b9cce0c71989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/FJMqqEOWJCI',
            html: 'https://unsplash.com/photos/FJMqqEOWJCI',
            download: 'https://unsplash.com/photos/FJMqqEOWJCI/download',
            download_location: 'https://api.unsplash.com/photos/FJMqqEOWJCI/download'
        },
        likes: 8
    }, {
        id: 'CZ9d8gh4nVk',
        description: 'Christmas paper star DIY, still life',
        urls: {
            raw: 'https://images.unsplash.com/photo-1607253852325-7b7c623a253e?ixid=MXwxODg5MjR8MHwxfGFsbHwxNnx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607253852325-7b7c623a253e?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNnx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607253852325-7b7c623a253e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607253852325-7b7c623a253e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607253852325-7b7c623a253e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/CZ9d8gh4nVk',
            html: 'https://unsplash.com/photos/CZ9d8gh4nVk',
            download: 'https://unsplash.com/photos/CZ9d8gh4nVk/download',
            download_location: 'https://api.unsplash.com/photos/CZ9d8gh4nVk/download'
        },
        likes: 18
    }, {
        id: 'X_-ZkzoYkUc',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607292987892-7314d9c5f428?ixid=MXwxODg5MjR8MHwxfGFsbHwxN3x8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607292987892-7314d9c5f428?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxN3x8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607292987892-7314d9c5f428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxN3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607292987892-7314d9c5f428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxN3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607292987892-7314d9c5f428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxN3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/X_-ZkzoYkUc',
            html: 'https://unsplash.com/photos/X_-ZkzoYkUc',
            download: 'https://unsplash.com/photos/X_-ZkzoYkUc/download',
            download_location: 'https://api.unsplash.com/photos/X_-ZkzoYkUc/download'
        },
        likes: 7
    }, {
        id: 'bCA_0q625Qw',
        description: 'Carrots are for closers.',
        urls: {
            raw: 'https://images.unsplash.com/photo-1607038072407-a2fe22551a0d?ixid=MXwxODg5MjR8MHwxfGFsbHwxOHx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607038072407-a2fe22551a0d?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOHx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607038072407-a2fe22551a0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607038072407-a2fe22551a0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607038072407-a2fe22551a0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/bCA_0q625Qw',
            html: 'https://unsplash.com/photos/bCA_0q625Qw',
            download: 'https://unsplash.com/photos/bCA_0q625Qw/download',
            download_location: 'https://api.unsplash.com/photos/bCA_0q625Qw/download'
        },
        likes: 14
    }, {
        id: 'rMhTw17rVKw',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?ixid=MXwxODg5MjR8MHwxfGFsbHwxOXx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOXx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/rMhTw17rVKw',
            html: 'https://unsplash.com/photos/rMhTw17rVKw',
            download: 'https://unsplash.com/photos/rMhTw17rVKw/download',
            download_location: 'https://api.unsplash.com/photos/rMhTw17rVKw/download'
        },
        likes: 17
    }, {
        id: 'kM9HOMCULcQ',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607292990250-63c6585e45e5?ixid=MXwxODg5MjR8MHwxfGFsbHwyMHx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607292990250-63c6585e45e5?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607292990250-63c6585e45e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607292990250-63c6585e45e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607292990250-63c6585e45e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200'
        },
        links: {
            self: 'https://api.unsplash.com/photos/kM9HOMCULcQ',
            html: 'https://unsplash.com/photos/kM9HOMCULcQ',
            download: 'https://unsplash.com/photos/kM9HOMCULcQ/download',
            download_location: 'https://api.unsplash.com/photos/kM9HOMCULcQ/download'
        },
        likes: 19
    }
];


/***/ }),

/***/ "rYbC":
/*!*****************************!*\
  !*** ./src/app/services.ts ***!
  \*****************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _gallery_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery/data */ "oBPC");




class Service {
    constructor() {
        this.index = 0;
        this.imageLink = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_gallery_data__WEBPACK_IMPORTED_MODULE_2__["data"][this.index].urls.regular);
        this.currentLink = this.imageLink.asObservable();
        this.currentImage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_gallery_data__WEBPACK_IMPORTED_MODULE_2__["data"][this.index]);
        this.selectedImage = this.currentImage.asObservable();
    }
    changingLink(i) {
        this.index = i;
        this.imageLink.next(_gallery_data__WEBPACK_IMPORTED_MODULE_2__["data"][this.index].urls.regular);
    }
    nextImage() {
        if (this.index < _gallery_data__WEBPACK_IMPORTED_MODULE_2__["data"].length - 1) {
            this.index++;
        }
        else
            this.index = 0;
        this.imageLink.next(_gallery_data__WEBPACK_IMPORTED_MODULE_2__["data"][this.index].urls.regular);
        this.currentImage.next(_gallery_data__WEBPACK_IMPORTED_MODULE_2__["data"][this.index]);
    }
    previousImage() {
        if (this.index > 0) {
            this.index--;
        }
        else
            this.index = _gallery_data__WEBPACK_IMPORTED_MODULE_2__["data"].length - 1;
        this.imageLink.next(_gallery_data__WEBPACK_IMPORTED_MODULE_2__["data"][this.index].urls.regular);
        this.currentImage.next(_gallery_data__WEBPACK_IMPORTED_MODULE_2__["data"][this.index]);
    }
}
Service.ɵfac = function Service_Factory(t) { return new (t || Service)(); };
Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Service, factory: Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
//# sourceMappingURL=main-es2015.js.map