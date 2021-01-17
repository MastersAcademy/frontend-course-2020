(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ntnnmsh/Documents/Masters Academy/frontend-course-2020/homeworks/anton.nemesh_AntonNemesh/13-ng-forms/src/main.ts */"zUnb");


/***/ }),

/***/ "7kSP":
/*!****************************************************!*\
  !*** ./src/app/text-field/text-field.component.ts ***!
  \****************************************************/
/*! exports provided: TextFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldComponent", function() { return TextFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TextFieldComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function TextFieldComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 4);
} }
const _c0 = ["*"];
class TextFieldComponent {
    constructor(inj) {
        this.inj = inj;
        this.currentFieldControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
    }
    getTypeOfField(name) {
        let result;
        if (this.isVisiblePassword === undefined) {
            result = (name === 'password') ? 'password' : 'text';
        }
        else {
            result = (this.isVisiblePassword) ? 'text' : 'password';
        }
        return result;
    }
    writeValue(text) {
        this.currentFieldControl.setValue(text);
    }
    get isTouched() {
        return this.ngControl.control.touched;
    }
    get errorMessage() {
        const errors = this.ngControl.control.errors;
        if (errors === null)
            return '';
        if (errors.email)
            return 'Wrong format of Email address!';
        if (errors.required)
            return 'Field is empty!';
    }
    registerOnChange(emitTextChange) {
        this.emitTextChange = emitTextChange;
    }
    registerOnTouched(onFieldFocusOut) {
        this.markAsTouched = onFieldFocusOut;
    }
    onFieldFocusOut() {
        this.markAsTouched();
    }
    ngOnInit() {
        this.currentFieldControl.valueChanges.subscribe((text) => { var _a; return (_a = this.emitTextChange) === null || _a === void 0 ? void 0 : _a.call(this, text); });
        this.ngControl = this.inj.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]);
    }
}
TextFieldComponent.ɵfac = function TextFieldComponent_Factory(t) { return new (t || TextFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TextFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextFieldComponent, selectors: [["app-text-field"]], hostBindings: function TextFieldComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextFieldComponent_click_HostBindingHandler() { return ctx.onFieldFocusOut(); });
    } }, inputs: { isVisiblePassword: "isVisiblePassword", nameOfField: "nameOfField" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => TextFieldComponent),
                multi: true
            }
        ])], ngContentSelectors: _c0, decls: 9, vars: 12, consts: [[3, "for"], [1, "text-field-wrapper"], [3, "formControl", "id", "type", "placeholder"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function TextFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TextFieldComponent_span_7_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TextFieldComponent_span_8_Template, 1, 0, "span", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx.nameOfField);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, ctx.nameOfField));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.nameOfField);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.getTypeOfField(ctx.nameOfField));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "Enter ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, ctx.nameOfField), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.currentFieldControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isTouched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]], styles: ["input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 20px;\n  margin-top: 8px;\n  display: inline-block;\n  border: 1px solid #CCC;\n  box-sizing: border-box;\n}\n\nspan[_ngcontent-%COMP%] {\n  display: block;\n  color: #F00;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n}\n\n.text-field-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  height: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InRleHQtZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbnNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNGMDA7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4udGV4dC1maWVsZC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-field',
                templateUrl: './text-field.component.html',
                styleUrls: ['./text-field.component.css'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => TextFieldComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { isVisiblePassword: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nameOfField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onFieldFocusOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _text_field_text_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-field/text-field.component */ "7kSP");
/* harmony import */ var _password_field_password_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-field/password-field.component */ "gEYV");






class AppComponent {
    constructor() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            remember: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
        });
    }
    updateState() {
        this.email = this.loginForm.controls.email.value;
        this.password = this.loginForm.controls.password.value;
        this.remember = this.loginForm.controls.remember.value;
    }
    showMessage() {
        const resultMessage = `
    Email: ${this.email}
    Password: ${this.password}`;
        alert(resultMessage);
    }
    saveLoginData() {
        const email = window.btoa(this.email);
        const password = window.btoa(this.password);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    }
    deleteLoginData() {
        localStorage.clear();
    }
    checkLocalStorage() {
        return localStorage.getItem('email') !== null &&
            localStorage.getItem('password') !== null;
    }
    updateFormLS() {
        if (this.checkLocalStorage()) {
            const email = window.atob(localStorage.getItem('email'));
            const password = window.atob(localStorage.getItem('password'));
            this.loginForm.controls.email.setValue(email);
            this.loginForm.controls.password.setValue(password);
        }
    }
    submit(event) {
        event.preventDefault();
        if (this.loginForm.invalid)
            return false;
        this.updateState();
        if (this.remember) {
            this.saveLoginData();
        }
        else {
            this.deleteLoginData();
        }
        this.showMessage();
        this.loginForm.reset();
    }
    ngOnInit() {
        this.updateFormLS();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 4, consts: [[3, "formGroup"], ["formControlName", "email", 3, "nameOfField"], ["formControlName", "password"], ["for", "remember"], ["formControlName", "remember", "id", "remember", "type", "checkbox", "name", "remember"], ["type", "submit", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-text-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-password-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener($event) { return ctx.submit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nameOfField", "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.loginForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _text_field_text_field_component__WEBPACK_IMPORTED_MODULE_2__["TextFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _password_field_password_field_component__WEBPACK_IMPORTED_MODULE_3__["PasswordFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #CCC;\n  box-sizing: border-box;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin: 4px 0 0 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: #FFF;\n  padding: 14px 20px;\n  margin-top: 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  opacity: .8;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.disabled[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW46IDRweCAwIDAgMTBweDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6ICNGRkY7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogLjg7XG59XG5cbi5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZGlzYWJsZWQ6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuIl19 */"] });
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _text_field_text_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text-field/text-field.component */ "7kSP");
/* harmony import */ var _password_field_password_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password-field/password-field.component */ "gEYV");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _text_field_text_field_component__WEBPACK_IMPORTED_MODULE_5__["TextFieldComponent"],
        _password_field_password_field_component__WEBPACK_IMPORTED_MODULE_6__["PasswordFieldComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _text_field_text_field_component__WEBPACK_IMPORTED_MODULE_5__["TextFieldComponent"],
                    _password_field_password_field_component__WEBPACK_IMPORTED_MODULE_6__["PasswordFieldComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gEYV":
/*!************************************************************!*\
  !*** ./src/app/password-field/password-field.component.ts ***!
  \************************************************************/
/*! exports provided: PasswordFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordFieldComponent", function() { return PasswordFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _text_field_text_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text-field/text-field.component */ "7kSP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PasswordFieldComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PasswordFieldComponent__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PasswordFieldComponent {
    constructor(inj) {
        this.inj = inj;
        this.currentFieldControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.isVisiblePassword = false;
    }
    toggleVisibility() {
        this.isVisiblePassword = (!this.isVisiblePassword);
    }
    writeValue(text) {
        this.currentFieldControl.setValue(text);
    }
    registerOnChange(emitTextChange) {
        this.emitTextChange = emitTextChange;
    }
    registerOnTouched(onFieldFocusOut) {
        this.markAsTouched = onFieldFocusOut;
    }
    onFieldFocusOut() {
        this.markAsTouched();
    }
    ngOnInit() {
        this.currentFieldControl.valueChanges.subscribe((text) => { var _a; return (_a = this.emitTextChange) === null || _a === void 0 ? void 0 : _a.call(this, text); });
        this.ngControl = this.inj.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]);
    }
}
PasswordFieldComponent.ɵfac = function PasswordFieldComponent_Factory(t) { return new (t || PasswordFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
PasswordFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordFieldComponent, selectors: [["app-password-field"]], hostBindings: function PasswordFieldComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordFieldComponent_click_HostBindingHandler() { return ctx.onFieldFocusOut(); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => PasswordFieldComponent),
                multi: true
            }
        ])], decls: 4, vars: 5, consts: [[3, "nameOfField", "isVisiblePassword", "formControl"], [1, "toggle-visibility-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "data-name", "Layer 1", "viewBox", "0 0 24 24", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "data-name", "Layer 1", "viewBox", "0 0 24 24"], ["d", "M10.94,6.08A6.93,6.93,0,0,1,12,6c3.18,0,6.17,2.29,7.91,6a15.23,15.23,0,0,1-.9,1.64,1,1,0,0,0-.16.55,1,1,0,0,0,1.86.5,15.77,15.77,0,0,0,1.21-2.3,1,1,0,0,0,0-.79C19.9,6.91,16.1,4,12,4a7.77,7.77,0,0,0-1.4.12,1,1,0,1,0,.34,2ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.39,6.8a14.62,14.62,0,0,0-3.31,4.8,1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20a9.26,9.26,0,0,0,5.05-1.54l3.24,3.25a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm6.36,9.19,2.45,2.45A1.81,1.81,0,0,1,12,14a2,2,0,0,1-2-2A1.81,1.81,0,0,1,10.07,11.48ZM12,18c-3.18,0-6.17-2.29-7.9-6A12.09,12.09,0,0,1,6.8,8.21L8.57,10A4,4,0,0,0,14,15.43L15.59,17A7.24,7.24,0,0,1,12,18Z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24"], ["d", "M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"]], template: function PasswordFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-text-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordFieldComponent_Template_button_click_1_listener() { return ctx.toggleVisibility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PasswordFieldComponent__svg_svg_2_Template, 2, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PasswordFieldComponent__svg_svg_3_Template, 2, 0, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nameOfField", "password")("isVisiblePassword", ctx.isVisiblePassword)("formControl", ctx.ngControl.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisiblePassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isVisiblePassword);
    } }, directives: [_text_field_text_field_component__WEBPACK_IMPORTED_MODULE_2__["TextFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".toggle-visibility-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 9px;\n  padding: 0;\n}\n\n.toggle-visibility-btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nsvg[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJwYXNzd29yZC1maWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZ2dsZS12aXNpYmlsaXR5LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogOXB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4udG9nZ2xlLXZpc2liaWxpdHktYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zdmcge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzNnB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-password-field',
                templateUrl: './password-field.component.html',
                styleUrls: ['./password-field.component.css'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => PasswordFieldComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { onFieldFocusOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


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