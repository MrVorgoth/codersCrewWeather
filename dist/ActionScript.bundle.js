/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ActionScript.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ActionScript.js":
/*!*****************************!*\
  !*** ./src/ActionScript.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BasicInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicInfo.js */ \"./src/BasicInfo.js\");\n/* harmony import */ var _BasicInfoController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicInfoController.js */ \"./src/BasicInfoController.js\");\n\n\n\nwindow.onload = () => {\n    //let basicInfo = new BasicInfo();\n    let basicInfoController = new _BasicInfoController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    basicInfoController.logDataFromApi();\n};\n\n//# sourceURL=webpack:///./src/ActionScript.js?");

/***/ }),

/***/ "./src/BasicInfo.js":
/*!**************************!*\
  !*** ./src/BasicInfo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass BasicInfo {\n    constructor() {\n        this.postalCodeAndCity = document.querySelector('#postalCodeAndCity');\n        this.weekdayAndHour = document.querySelector('#weekdayAndHour');\n        this.insoltation = document.querySelector('#insoltation');\n        this.icon = document.querySelector('#icon');\n        this.temperature = document.querySelector('#temperature');\n        this.precipitation = document.querySelector('#precipitation');\n        this.humidity = document.querySelector('#humidity');\n        this.wind = document.querySelector('#wind');\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (BasicInfo);\n\n//# sourceURL=webpack:///./src/BasicInfo.js?");

/***/ }),

/***/ "./src/BasicInfoController.js":
/*!************************************!*\
  !*** ./src/BasicInfoController.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//import BasicInfo from \"./BasicInfo\";\n\nclass BasicInfoController {\n    constructor(){\n        //this.basicInfo = new BasicInfo();\n        this.CONFING = {\n            CITY_ID: \"3081368\",\n            API_KEY: \"760aed7e289ca1fce93475faf5a1f920\",\n            API_TYPES: ['weather', 'forecast'],\n            FULL_API_URL: \"http://api.openweathermap.org/data/2.5/weather?id=3081368&&appid=760aed7e289ca1fce93475faf5a1f920\"\n        }\n    }\n    logDataFromApi() {\n        fetch(this.CONFING.FULL_API_URL)\n        .then((res) => res.json())\n        .then((data) => console.log(data));\n    }\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (BasicInfoController);\n\n//# sourceURL=webpack:///./src/BasicInfoController.js?");

/***/ })

/******/ });