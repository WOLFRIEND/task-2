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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./class.js":
/*!******************!*\
  !*** ./class.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Phones; });\nclass Phones {\n  constructor(brand, model) {\n    this.brand = brand;\n    this.model = model;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGFzcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsYXNzLmpzP2RiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhvbmVzIHtcbiAgY29uc3RydWN0b3IoYnJhbmQsIG1vZGVsKSB7XG4gICAgdGhpcy5icmFuZCA9IGJyYW5kO1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./class.js\n");

/***/ }),

/***/ "./function.js":
/*!*********************!*\
  !*** ./function.js ***!
  \*********************/
/*! exports provided: buyPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buyPhone\", function() { return buyPhone; });\nfunction buyPhone(phones, budget) {\n  console.log(`If you want buy ${phones.brand} ${phones.model} you should have:\n    not less than ${budget} $`);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mdW5jdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Z1bmN0aW9uLmpzPzc0OTciXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYnV5UGhvbmUocGhvbmVzLCBidWRnZXQpIHtcbiAgY29uc29sZS5sb2coYElmIHlvdSB3YW50IGJ1eSAke3Bob25lcy5icmFuZH0gJHtwaG9uZXMubW9kZWx9IHlvdSBzaG91bGQgaGF2ZTpcbiAgICBub3QgbGVzcyB0aGFuICR7YnVkZ2V0fSAkYCk7XG59XG5cbmV4cG9ydCB7IGJ1eVBob25lIH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./function.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ \"./function.js\");\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ \"./class.js\");\n\n\n\n\nlet phone = new _class__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Samsung', 'S9+');\n\nObject(_function__WEBPACK_IMPORTED_MODULE_0__[\"buyPhone\"])(phone, 1000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtidXlQaG9uZX0gZnJvbSBcIi4vZnVuY3Rpb25cIjtcblxuaW1wb3J0IFBob25lcyBmcm9tIFwiLi9jbGFzc1wiO1xuXG5sZXQgcGhvbmUgPSBuZXcgUGhvbmVzKCdTYW1zdW5nJywgJ1M5KycpO1xuXG5idXlQaG9uZShwaG9uZSwgMTAwMCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });