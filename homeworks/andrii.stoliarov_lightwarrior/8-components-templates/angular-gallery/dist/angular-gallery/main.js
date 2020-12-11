(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andrii/Desktop/git/frontend-course-2020/homeworks/andrii.stoliarov_lightwarrior/8-components-templates/angular-gallery/src/main.ts */"zUnb");


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
/* harmony import */ var _collection_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collection-images */ "oBvZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");

// import { Image } from '../image';



function GalleryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const image_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSelect(image_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function GalleryComponent_div_1_Template_img_load_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.loader(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", image_r1 === ctx_r0.selectedImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide-img", !ctx_r0.loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide-img", ctx_r0.loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", image_r1.urls.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class GalleryComponent {
    constructor() {
        // largeImg = 'large image';
        // image: Image = {
        //   urls: 'string',
        //   likes: 18
        // };
        this.images = _collection_images__WEBPACK_IMPORTED_MODULE_1__["IMAGES"];
        // selectedImage: Image = this.images[0];
        this.selectedImage = this.images[0];
        this.loaded = true;
    }
    ngOnInit() {
    }
    onSelect(image) {
        this.selectedImage = image;
    }
    loader() {
        this.loaded = false;
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 8, vars: 4, consts: [[1, "images"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "regular"], [3, "src"], [3, "click"], ["src", "https://nabir.np.gov.ua/images/loading.gif"], [3, "src", "load"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryComponent_div_1_Template, 3, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide-img", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.selectedImage.urls.small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".images[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 0 5em;  \n}\n\n.images[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 5px solid #006400;\n  margin: 5px;\n}\n\n.hide-img[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.images[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n  border: 5px solid #8B0000;\n}\n\n.regular[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.regular[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n  font-weight: 700;\n  margin: 1em;\n}\n\n.regular[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 7px solid #8B0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWEsR0FBRyw2QkFBNkI7QUFDL0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDAgNWVtOyAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG59XG5cbi5pbWFnZXMgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDY0MDA7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uaGlkZS1pbWcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaW1hZ2VzIGRpdi5zZWxlY3RlZCB7XG4gIGJvcmRlcjogNXB4IHNvbGlkICM4QjAwMDA7XG59XG5cbi5yZWd1bGFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZWd1bGFyIGZpZ2NhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzY5O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNTAlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDFlbTtcbn1cblxuLnJlZ3VsYXIgaW1nIHtcbiAgYm9yZGVyOiA3cHggc29saWQgIzhCMDAwMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return []; }, null); })();


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



class AppComponent {
    constructor() {
        this.title = 'Gallery';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-gallery");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"]], styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "Ij5Q");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"]
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

/***/ "oBvZ":
/*!**************************************!*\
  !*** ./src/app/collection-images.ts ***!
  \**************************************/
/*! exports provided: IMAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES", function() { return IMAGES; });
const IMAGES = [
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