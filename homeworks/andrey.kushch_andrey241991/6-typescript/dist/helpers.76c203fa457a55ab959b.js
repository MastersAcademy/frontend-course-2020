/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/helpers.ts":
/*!********************************!*\
  !*** ./src/helpers/helpers.ts ***!
  \********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRandomKey [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRandomPoints [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getRandomPoints = exports.getRandomKey = void 0;\r\nfunction getRandomKey() {\r\n    const AKeyCode = 65;\r\n    const ZKeyCode = 90;\r\n    return String.fromCharCode(Math.floor(Math.random() * (ZKeyCode - AKeyCode + 1) + AKeyCode));\r\n}\r\nexports.getRandomKey = getRandomKey;\r\nfunction getRandomPoints(keyPoints) {\r\n    const [from, to] = keyPoints;\r\n    return Math.floor(Math.random() * (to - from + 1) + from);\r\n}\r\nexports.getRandomPoints = getRandomPoints;\r\n\n\n//# sourceURL=webpack://6-typescript/./src/helpers/helpers.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/helpers/helpers.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;