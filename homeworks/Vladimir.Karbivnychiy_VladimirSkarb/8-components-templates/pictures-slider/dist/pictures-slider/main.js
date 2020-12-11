(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vladimir/Рабочий стол/frontend-course-2020/homeworks/Vladimir.Karbivnychiy_VladimirSkarb/8-components-templates/pictures-slider/src/main.ts */"zUnb");


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
/* harmony import */ var _components_image_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/image-gallery/gallery.component */ "ZdqX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_image_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "Yy9e":
/*!***************************************************************!*\
  !*** ./src/app/components/image-item/image-item.component.ts ***!
  \***************************************************************/
/*! exports provided: ImageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageItemComponent", function() { return ImageItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ImageItemComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImageItemComponent_img_1_Template_img_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.hiddenLoader(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.item.urls.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.item.id);
} }
class ImageItemComponent {
    constructor() {
        this.showEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loader = true;
    }
    hiddenLoader() {
        this.loader = false;
    }
    showFullImage() {
        var _a;
        this.showEvent.emit((_a = this.item) === null || _a === void 0 ? void 0 : _a.id);
    }
}
ImageItemComponent.ɵfac = function ImageItemComponent_Factory(t) { return new (t || ImageItemComponent)(); };
ImageItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageItemComponent, selectors: [["app-image-item"]], inputs: { item: "item" }, outputs: { showEvent: "showEvent" }, decls: 3, vars: 3, consts: [[1, "item-wrapper", 3, "click"], ["class", "item", 3, "src", "alt", "load", 4, "ngIf"], [1, "lds-dual-ring"], [1, "item", 3, "src", "alt", "load"]], template: function ImageItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageItemComponent_Template_div_click_0_listener() { return ctx.showFullImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageItemComponent_img_1_Template, 1, 2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.loader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".item[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  object-fit: contain;\n}\n\n.item-wrapper[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n  display: flex;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.lds-dual-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-dual-ring[_ngcontent-%COMP%]::after {\n  content: \" \";\n  display: block;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 6px solid;\n  border-color: #CCC transparent;\n  animation: lds-dual-ring 1.2s linear infinite;\n}\n\n@keyframes lds-dual-ring {\n\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsNkNBQTZDO0FBQy9DOztBQUVBOztFQUVFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoiaW1hZ2UtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5pdGVtLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGRzLWR1YWwtcmluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmxkcy1kdWFsLXJpbmc6OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDZweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjQ0NDIHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IGxkcy1kdWFsLXJpbmcgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbGRzLWR1YWwtcmluZyB7XG5cbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-item',
                templateUrl: './image-item.component.html',
                styleUrls: ['./image-item.component.css']
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
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
/* harmony import */ var _components_image_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/image-gallery/gallery.component */ "ZdqX");
/* harmony import */ var _components_image_item_image_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/image-item/image-item.component */ "Yy9e");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_image_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
        _components_image_item_image_item_component__WEBPACK_IMPORTED_MODULE_5__["ImageItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_image_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
                    _components_image_item_image_item_component__WEBPACK_IMPORTED_MODULE_5__["ImageItemComponent"]
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

/***/ "ZdqX":
/*!***************************************************************!*\
  !*** ./src/app/components/image-gallery/gallery.component.ts ***!
  \***************************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data */ "gw1G");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _image_item_image_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-item/image-item.component */ "Yy9e");





function GalleryComponent_app_image_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-image-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showEvent", function GalleryComponent_app_image_item_2_Template_app_image_item_showEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.showItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.list[i_r3].id === (ctx_r0.fullImage == null ? null : ctx_r0.fullImage.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r2);
} }
function GalleryComponent_div_3_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.fullImage.urls.regular, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r6.fullImage.id);
} }
function GalleryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.prevEl(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GalleryComponent_div_3_img_3_Template, 1, 2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.nextEl(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.fullImage);
} }
class GalleryComponent {
    constructor() {
        this.list = _core_data__WEBPACK_IMPORTED_MODULE_1__["dataImg"];
    }
    ngOnInit() {
        this.fullImage = this.list[0];
    }
    showItem(id) {
        this.fullImage = this.list.find((image) => image.id === id);
    }
    nextEl() {
        if (this.fullImage) {
            const index = this.list.indexOf(this.fullImage);
            if (index === this.list.length - 1) {
                this.fullImage = this.list[0];
            }
            else {
                this.fullImage = this.list[index + 1];
            }
        }
    }
    prevEl() {
        if (this.fullImage) {
            const index = this.list.indexOf(this.fullImage);
            if (index === 0) {
                this.fullImage = this.list[this.list.length - 1];
            }
            else {
                this.fullImage = this.list[index - 1];
            }
        }
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 4, vars: 2, consts: [[1, "section-gallery"], [1, "img-wrapper"], ["class", "img-item", 3, "item", "active", "showEvent", 4, "ngFor", "ngForOf"], ["class", "full-image-container", 4, "ngIf"], [1, "img-item", 3, "item", "showEvent"], [1, "full-image-container"], [1, "btn", 3, "click"], [1, "left"], ["class", "full-image", 3, "src", "alt", 4, "ngIf"], [1, "right"], [1, "full-image", 3, "src", "alt"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryComponent_app_image_item_2_Template, 1, 3, "app-image-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GalleryComponent_div_3_Template, 6, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fullImage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _image_item_image_item_component__WEBPACK_IMPORTED_MODULE_3__["ImageItemComponent"]], styles: [".img-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.img-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 15px;\n  margin-bottom: 10px;\n  border: 1px solid #000;\n}\n\n.active[_ngcontent-%COMP%] {\n  border: 2px solid #EE0606;\n}\n\n.section-gallery[_ngcontent-%COMP%] {\n  width: 900px;\n  margin: 30px auto 0;\n}\n\n.full-image-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 800px;\n  height: 500px;\n  margin: 20px auto 0;\n}\n\n.full-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 0 50px;\n  width: 100px;\n  height: 100px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n\ni[_ngcontent-%COMP%] {\n  border: solid #000;\n  border-width: 0 5px 5px 0;\n  display: inline-block;\n  padding: 15px;\n}\n\n.right[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n\n.left[_ngcontent-%COMP%] {\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztBQUNuQyIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW1nLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNFRTA2MDY7XG59XG5cbi5zZWN0aW9uLWdhbGxlcnkge1xuICB3aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvIDA7XG59XG5cbi5mdWxsLWltYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XG59XG5cbi5mdWxsLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAwIDUwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pIHtcbiAgYm9yZGVyOiBzb2xpZCAjMDAwO1xuICBib3JkZXItd2lkdGg6IDAgNXB4IDVweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5yaWdodCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmxlZnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gw1G":
/*!******************************!*\
  !*** ./src/app/core/data.ts ***!
  \******************************/
/*! exports provided: dataImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataImg", function() { return dataImg; });
const dataImg = [
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