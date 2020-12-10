(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/volus1986/WebstormProjects/frontend-course-2020/homeworks/volodymyr.ustilkin_VolodymyrUstilkin/8-components-templates/hw8/src/main.ts */"zUnb");


/***/ }),

/***/ "1XIL":
/*!************************************************************!*\
  !*** ./src/app/gallery-images/gallery-images.component.ts ***!
  \************************************************************/
/*! exports provided: GalleryImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryImagesComponent", function() { return GalleryImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _image_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-list */ "tVPB");
/* harmony import */ var _preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview-image/preview-image.component */ "nfo3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");


// import {BrowserModule} from '@angular/platform-browser';




function GalleryImagesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-preview-image", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryImagesComponent_div_5_Template_app_preview_image_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const img_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setNewActiveImage(img_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", img_r1.id)("smallUrl", img_r1.smallUrl)("fullUrl", img_r1.fullUrl)("isSelected", img_r1.isSelected);
} }
class GalleryImagesComponent {
    constructor() {
    }
    componentImgCompleteLoad(id) {
        console.log('loaded: ' + id);
    }
    setNewActiveImage(id) {
        this.images.forEach((e) => {
            e.isSelected = e.id === id;
        });
        this.mainImage = this.images[id];
    }
    ngOnInit() {
        this.loadImageUrls();
        this.images[0].isSelected = true;
        this.mainImage = this.images[0];
    }
    loadImageUrls() {
        this.images = _image_list__WEBPACK_IMPORTED_MODULE_1__["images"].map((elem, index) => {
            const img = new _preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_2__["PreviewImageComponent"]();
            img.id = index;
            img.smallUrl = elem.urls.small;
            img.fullUrl = elem.urls.full;
            return img;
        });
    }
}
GalleryImagesComponent.ɵfac = function GalleryImagesComponent_Factory(t) { return new (t || GalleryImagesComponent)(); };
GalleryImagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryImagesComponent, selectors: [["app-gallery-images"]], decls: 16, vars: 27, consts: [[4, "ngFor", "ngForOf"], [3, "click"], [3, "fullUrl", "showFullImage"], [3, "id", "smallUrl", "fullUrl", "isSelected", "click"]], template: function GalleryImagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleryImagesComponent_div_5_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryImagesComponent_Template_div_click_11_listener() { return ctx.setNewActiveImage(ctx.mainImage.id - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-preview-image", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryImagesComponent_Template_div_click_15_listener() { return ctx.setNewActiveImage(ctx.mainImage.id + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("main-gallery-container", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-center-x", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("preview-images-container", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-center-x", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("main-image-container", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("main-image-navigate-container", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("main-image-navigate", true)("hidden", ctx.mainImage.id <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("main-image", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullUrl", ctx.mainImage.fullUrl)("showFullImage", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("main-image-navigate-container", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("main-image-navigate", true)("hidden", ctx.mainImage.id >= ctx.images.length - 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_2__["PreviewImageComponent"]], styles: [".main-gallery-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 1100px;\n}\n\n.text-center-x[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.preview-images-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 1100px;\n  min-height: 250px;\n}\n\n.main-image[_ngcontent-%COMP%] {\n  height: 600px;\n  min-width: 600px;\n  border-style: solid;\n  border-color: #000;\n  border-width: 2px;\n}\n\n.main-image-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-image-navigate-container[_ngcontent-%COMP%] {\n  display: block;\n  width: 70px;\n  margin: auto 0;\n  transform: rotate(180deg);\n}\n\n.main-image-navigate[_ngcontent-%COMP%] {\n  display: block;\n  margin: 10px;\n  width: 100%;\n  height: 70px;\n  background-image: url('navigate-arrow.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.main-image-navigate-container[_ngcontent-%COMP%]:last-child {\n  transform: rotate(0deg);\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS1pbWFnZXMvZ2FsbGVyeS1pbWFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWiwyQ0FBK0M7RUFDL0Msd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5LWltYWdlcy9nYWxsZXJ5LWltYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZ2FsbGVyeS1jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDExMDBweDtcbn1cblxuLnRleHQtY2VudGVyLXgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcmV2aWV3LWltYWdlcy1jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDExMDBweDtcbiAgbWluLWhlaWdodDogMjUwcHg7XG59XG5cbi5tYWluLWltYWdlIHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgbWluLXdpZHRoOiA2MDBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxuLm1haW4taW1hZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYWluLWltYWdlLW5hdmlnYXRlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNzBweDtcbiAgbWFyZ2luOiBhdXRvIDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5tYWluLWltYWdlLW5hdmlnYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL25hdmlnYXRlLWFycm93LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5tYWluLWltYWdlLW5hdmlnYXRlLWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryImagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery-images',
                templateUrl: './gallery-images.component.html',
                styleUrls: ['./gallery-images.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _gallery_images_gallery_images_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-images/gallery-images.component */ "1XIL");



class AppComponent {
    constructor() {
        this.title = 'hw8';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gallery-images");
    } }, directives: [_gallery_images_gallery_images_component__WEBPACK_IMPORTED_MODULE_1__["GalleryImagesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
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
/* harmony import */ var _gallery_images_gallery_images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery-images/gallery-images.component */ "1XIL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _gallery_images_preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery-images/preview-image/preview-image.component */ "nfo3");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _gallery_images_gallery_images_component__WEBPACK_IMPORTED_MODULE_4__["GalleryImagesComponent"],
        _gallery_images_preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_6__["PreviewImageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _gallery_images_gallery_images_component__WEBPACK_IMPORTED_MODULE_4__["GalleryImagesComponent"],
                    _gallery_images_preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_6__["PreviewImageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "nfo3":
/*!*************************************************************************!*\
  !*** ./src/app/gallery-images/preview-image/preview-image.component.ts ***!
  \*************************************************************************/
/*! exports provided: PreviewImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewImageComponent", function() { return PreviewImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PreviewImageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function PreviewImageComponent_div_0_Template_img_load_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.completePreviewImageLoad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("preview-image-container", true)("preview-image-container-selected", ctx_r0.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("preview-image", true)("hide-element", !ctx_r0.previewLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.smallUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loader-spinner", true)("hide-element", ctx_r0.previewLoaded);
} }
function PreviewImageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function PreviewImageComponent_div_1_Template_img_load_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.completeFullImageLoad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full-image-container", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("preview-image", true)("hide-element", !ctx_r1.fullLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.fullUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loader-spinner", true)("hide-element", ctx_r1.fullLoaded);
} }
class PreviewImageComponent {
    constructor() {
        this.showFullImage = false;
        this.previewLoaded = false;
        this.fullLoaded = false;
    }
    ngOnInit() {
    }
    completePreviewImageLoad() {
        this.previewLoaded = true;
    }
    completeFullImageLoad() {
        this.fullLoaded = true;
    }
}
PreviewImageComponent.ɵfac = function PreviewImageComponent_Factory(t) { return new (t || PreviewImageComponent)(); };
PreviewImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviewImageComponent, selectors: [["app-preview-image"]], inputs: { id: "id", smallUrl: "smallUrl", fullUrl: "fullUrl", isSelected: "isSelected", showFullImage: "showFullImage" }, decls: 2, vars: 2, consts: [[3, "preview-image-container", "preview-image-container-selected", 4, "ngIf"], [3, "full-image-container", 4, "ngIf"], ["alt", "Loading...", 3, "src", "load"]], template: function PreviewImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PreviewImageComponent_div_0_Template, 3, 13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviewImageComponent_div_1_Template, 3, 11, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showFullImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFullImage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".preview-image-container[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 120px;\n  margin: 10px;\n  border-style: solid;\n  border-color: #000;\n  border-width: 2px;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.preview-image-container-selected[_ngcontent-%COMP%] {\n  border-color: #F00;\n}\n\n.full-image-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.preview-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.hide-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.loader-spinner[_ngcontent-%COMP%] {\n  margin: 50% auto;\n  font-size: 15px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  animation: loader-spinner-animation 1.5s infinite ease;\n  transform: translateZ(0);\n}\n\n@keyframes loader-spinner-animation {\n\n  0%,\n  100% {\n    box-shadow: 0 -2.6em 0 0 #3700FF, 1.8em -1.8em 0 0 rgba(55, 0, 255, .2), 2.5em 0 0 0 rgba(55, 0, 255, .2), 1.75em 1.75em 0 0 rgba(55, 0, 255, .2), 0 2.5em 0 0 rgba(55, 0, 255, .2), -1.8em 1.8em 0 0 rgba(55, 0, 255, .2), -2.6em 0 0 0 rgba(55, 0, 255, .5), -1.8em -1.8em 0 0 rgba(55, 0, 255, .7);\n  }\n\n  12.5% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .7), 1.8em -1.8em 0 0 #3700FF, 2.5em 0 0 0 rgba(55, 0, 255, .2), 1.75em 1.75em 0 0 rgba(55, 0, 255, .2), 0 2.5em 0 0 rgba(55, 0, 255, .2), -1.8em 1.8em 0 0 rgba(55, 0, 255, .2), -2.6em 0 0 0 rgba(55, 0, 255, .2), -1.8em -1.8em 0 0 rgba(55, 0, 255, .5);\n  }\n\n  25% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .5), 1.8em -1.8em 0 0 rgba(55, 0, 255, .7), 2.5em 0 0 0 #3700FF, 1.75em 1.75em 0 0 rgba(55, 0, 255, .2), 0 2.5em 0 0 rgba(55, 0, 255, .2), -1.8em 1.8em 0 0 rgba(55, 0, 255, .2), -2.6em 0 0 0 rgba(55, 0, 255, .2), -1.8em -1.8em 0 0 rgba(55, 0, 255, .2);\n  }\n\n  37.5% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .2), 1.8em -1.8em 0 0 rgba(55, 0, 255, .5), 2.5em 0 0 0 rgba(55, 0, 255, .7), 1.75em 1.75em 0 0 #3700FF, 0 2.5em 0 0 rgba(55, 0, 255, .2), -1.8em 1.8em 0 0 rgba(55, 0, 255, .2), -2.6em 0 0 0 rgba(55, 0, 255, .2), -1.8em -1.8em 0 0 rgba(55, 0, 255, .2);\n  }\n\n  50% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .2), 1.8em -1.8em 0 0 rgba(55, 0, 255, .2), 2.5em 0 0 0 rgba(55, 0, 255, .5), 1.75em 1.75em 0 0 rgba(55, 0, 255, .7), 0 2.5em 0 0 #3700FF, -1.8em 1.8em 0 0 rgba(55, 0, 255, .2), -2.6em 0 0 0 rgba(55, 0, 255, .2), -1.8em -1.8em 0 0 rgba(55, 0, 255, .2);\n  }\n\n  62.5% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .2), 1.8em -1.8em 0 0 rgba(55, 0, 255, .2), 2.5em 0 0 0 rgba(55, 0, 255, .2), 1.75em 1.75em 0 0 rgba(55, 0, 255, .5), 0 2.5em 0 0 rgba(55, 0, 255, .7), -1.8em 1.8em 0 0 #3700FF, -2.6em 0 0 0 rgba(55, 0, 255, .2), -1.8em -1.8em 0 0 rgba(55, 0, 255, .2);\n  }\n\n  75% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .2), 1.8em -1.8em 0 0 rgba(55, 0, 255, .2), 2.5em 0 0 0 rgba(55, 0, 255, .2), 1.75em 1.75em 0 0 rgba(55, 0, 255, .2), 0 2.5em 0 0 rgba(55, 0, 255, .5), -1.8em 1.8em 0 0 rgba(55, 0, 255, .7), -2.6em 0 0 0 #3700FF, -1.8em -1.8em 0 0 rgba(55, 0, 255, .2);\n  }\n\n  87.5% {\n    box-shadow: 0 -2.6em 0 0 rgba(55, 0, 255, .2), 1.8em -1.8em 0 0 rgba(55, 0, 255, .2), 2.5em 0 0 0 rgba(55, 0, 255, .2), 1.75em 1.75em 0 0 rgba(55, 0, 255, .2), 0 2.5em 0 0 rgba(55, 0, 255, .2), -1.8em 1.8em 0 0 rgba(55, 0, 255, .5), -2.6em 0 0 0 rgba(55, 0, 255, .7), -1.8em -1.8em 0 0 #3700FF;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS1pbWFnZXMvcHJldmlldy1pbWFnZS9wcmV2aWV3LWltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBRXBCLHNEQUFzRDtFQUd0RCx3QkFBd0I7QUFDMUI7O0FBc0NBOztFQUVFOztJQUVFLHFTQUFxUztFQUN2Uzs7RUFFQTtJQUNFLHFTQUFxUztFQUN2Uzs7RUFFQTtJQUNFLHFTQUFxUztFQUN2Uzs7RUFFQTtJQUNFLHFTQUFxUztFQUN2Uzs7RUFFQTtJQUNFLHFTQUFxUztFQUN2Uzs7RUFFQTtJQUNFLHFTQUFxUztFQUN2Uzs7RUFFQTtJQUNFLHFTQUFxUztFQUN2Uzs7RUFFQTtJQUNFLHFTQUFxUztFQUN2UztBQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS1pbWFnZXMvcHJldmlldy1pbWFnZS9wcmV2aWV3LWltYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJldmlldy1pbWFnZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcmV2aWV3LWltYWdlLWNvbnRhaW5lci1zZWxlY3RlZCB7XG4gIGJvcmRlci1jb2xvcjogI0YwMDtcbn1cblxuLmZ1bGwtaW1hZ2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByZXZpZXctaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5oaWRlLWVsZW1lbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5sb2FkZXItc3Bpbm5lciB7XG4gIG1hcmdpbjogNTAlIGF1dG87XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRlci1zcGlubmVyLWFuaW1hdGlvbiAxLjVzIGluZmluaXRlIGVhc2U7XG4gIGFuaW1hdGlvbjogbG9hZGVyLXNwaW5uZXItYW5pbWF0aW9uIDEuNXMgaW5maW5pdGUgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRlci1zcGlubmVyLWFuaW1hdGlvbiB7XG5cbiAgMCUsXG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCAjMzcwMEZGLCAxLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAyLjVlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMi42ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNSksIC0xLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpO1xuICB9XG5cbiAgMTIuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC43KSwgMS44ZW0gLTEuOGVtIDAgMCAjMzcwMEZGLCAyLjVlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMi42ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjUpO1xuICB9XG5cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yLjZlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNSksIDEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyksIDIuNWVtIDAgMCAwICMzNzAwRkYsIDEuNzVlbSAxLjc1ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAwIDIuNWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIDEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTIuNmVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKTtcbiAgfVxuXG4gIDM3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yLjZlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNSksIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpLCAxLjc1ZW0gMS43NWVtIDAgMCAjMzcwMEZGLCAwIDIuNWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIDEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTIuNmVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAyLjVlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyksIDAgMi41ZW0gMCAwICMzNzAwRkYsIC0xLjhlbSAxLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0yLjZlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMik7XG4gIH1cblxuICA2Mi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAyLjVlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNSksIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpLCAtMS44ZW0gMS44ZW0gMCAwICMzNzAwRkYsIC0yLjZlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMik7XG4gIH1cblxuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMi41ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAwIDIuNWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgLTEuOGVtIDEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC43KSwgLTIuNmVtIDAgMCAwICMzNzAwRkYsIC0xLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpO1xuICB9XG5cbiAgODcuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMi41ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuNzVlbSAxLjc1ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAwIDIuNWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIDEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgLTIuNmVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpLCAtMS44ZW0gLTEuOGVtIDAgMCAjMzcwMEZGO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZGVyLXNwaW5uZXItYW5pbWF0aW9uIHtcblxuICAwJSxcbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwICMzNzAwRkYsIDEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjc1ZW0gMS43NWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMCAyLjVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAxLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0yLjZlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgLTEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyk7XG4gIH1cblxuICAxMi41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpLCAxLjhlbSAtMS44ZW0gMCAwICMzNzAwRkYsIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjc1ZW0gMS43NWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMCAyLjVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAxLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0yLjZlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNSk7XG4gIH1cblxuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC43KSwgMi41ZW0gMCAwIDAgIzM3MDBGRiwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMi42ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpO1xuICB9XG5cbiAgMzcuNSUge1xuICAgIGJveC1zaGFkb3c6IDAgLTIuNmVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgMi41ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyksIDEuNzVlbSAxLjc1ZW0gMCAwICMzNzAwRkYsIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMi42ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIC0xLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpO1xuICB9XG5cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yLjZlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjUpLCAxLjc1ZW0gMS43NWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC43KSwgMCAyLjVlbSAwIDAgIzM3MDBGRiwgLTEuOGVtIDEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgLTIuNmVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKTtcbiAgfVxuXG4gIDYyLjUlIHtcbiAgICBib3gtc2hhZG93OiAwIC0yLjZlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDIuNWVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjc1ZW0gMS43NWVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC41KSwgMCAyLjVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyksIC0xLjhlbSAxLjhlbSAwIDAgIzM3MDBGRiwgLTIuNmVtIDAgMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gLTEuOGVtIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAyLjVlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjUpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjcpLCAtMi42ZW0gMCAwIDAgIzM3MDBGRiwgLTEuOGVtIC0xLjhlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMik7XG4gIH1cblxuICA4Ny41JSB7XG4gICAgYm94LXNoYWRvdzogMCAtMi42ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAxLjhlbSAtMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAyLjVlbSAwIDAgMCByZ2JhKDU1LCAwLCAyNTUsIC4yKSwgMS43NWVtIDEuNzVlbSAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuMiksIDAgMi41ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjIpLCAtMS44ZW0gMS44ZW0gMCAwIHJnYmEoNTUsIDAsIDI1NSwgLjUpLCAtMi42ZW0gMCAwIDAgcmdiYSg1NSwgMCwgMjU1LCAuNyksIC0xLjhlbSAtMS44ZW0gMCAwICMzNzAwRkY7XG4gIH1cbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-preview-image',
                templateUrl: './preview-image.component.html',
                styleUrls: ['./preview-image.component.css']
            }]
    }], function () { return []; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], smallUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fullUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showFullImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "tVPB":
/*!**********************************************!*\
  !*** ./src/app/gallery-images/image-list.ts ***!
  \**********************************************/
/*! exports provided: images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "images", function() { return images; });
const images = [
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