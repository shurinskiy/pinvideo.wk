/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/blocks.js":
/*!**************************!*\
  !*** ./src/js/blocks.js ***!
  \**************************/
/***/ (() => {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYmxvY2tzLmpzIiwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VscC1zY3NzLXN0YXJ0ZXIvLi9zcmMvanMvYmxvY2tzLmpzPzVlM2UiXSwic291cmNlc0NvbnRlbnQiOlsiIl0sIm1hcHBpbmdzIjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/blocks.js\n");

/***/ }),

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _polyfills_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.js */ \"./src/js/polyfills.js\");\n/* harmony import */ var _polyfills_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks.js */ \"./src/js/blocks.js\");\n/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/* Тут можно писать код общий для всего проекта и требующий единого пространства имен *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tbW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdCO0FBQ0g7O0FBRXJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VscC1zY3NzLXN0YXJ0ZXIvLi9zcmMvanMvY29tbW9uLmpzPzQ0MGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9wb2x5ZmlsbHMuanNcIjtcclxuaW1wb3J0IFwiLi9ibG9ja3MuanNcIjtcclxuXHJcbi8qINCi0YPRgiDQvNC+0LbQvdC+INC/0LjRgdCw0YLRjCDQutC+0LQg0L7QsdGJ0LjQuSDQtNC70Y8g0LLRgdC10LPQviDQv9GA0L7QtdC60YLQsCDQuCDRgtGA0LXQsdGD0Y7RidC40Lkg0LXQtNC40L3QvtCz0L4g0L/RgNC+0YHRgtGA0LDQvdGB0YLQstCwINC40LzQtdC9ICovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/common.js\n");

/***/ }),

/***/ "./src/js/polyfills.js":
/*!*****************************!*\
  !*** ./src/js/polyfills.js ***!
  \*****************************/
/***/ (() => {

eval("/* Polyfills */\n(function (e) {\n  e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;\n  e.closest = e.closest || function closest(selector) {\n    if (!this) return null;\n    if (this.matches(selector)) return this;\n    if (!this.parentElement) {\n      return null;\n    } else return this.parentElement.closest(selector);\n  };\n})(Element.prototype);\n(function (e) {\n  var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;\n  !matches ? e.matches = e.matchesSelector = function matches(selector) {\n    var matches = document.querySelectorAll(selector);\n    var th = this;\n    return Array.prototype.some.call(matches, function (e) {\n      return e === th;\n    });\n  } : e.matches = e.matchesSelector = matches;\n})(Element.prototype);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcG9seWZpbGxzLmpzIiwibmFtZXMiOlsiZSIsIm1hdGNoZXMiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJjbG9zZXN0Iiwic2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwiRWxlbWVudCIsInByb3RvdHlwZSIsIm1hdGNoZXNTZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRoIiwiQXJyYXkiLCJzb21lIiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VscC1zY3NzLXN0YXJ0ZXIvLi9zcmMvanMvcG9seWZpbGxzLmpzPzcyNWYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogUG9seWZpbGxzICovXHJcbihmdW5jdGlvbihlKSB7XHJcblx0ZS5tYXRjaGVzID0gZS5tYXRjaGVzIHx8IGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgZS5vTWF0Y2hlc1NlbGVjdG9yIHx8IGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xyXG5cdGUuY2xvc2VzdCA9IGUuY2xvc2VzdCB8fCBmdW5jdGlvbiBjbG9zZXN0KHNlbGVjdG9yKSB7XHJcblx0XHRpZiAoIXRoaXMpIHJldHVybiBudWxsO1xyXG5cdFx0aWYgKHRoaXMubWF0Y2hlcyhzZWxlY3RvcikpIHJldHVybiB0aGlzO1xyXG5cdFx0aWYgKCF0aGlzLnBhcmVudEVsZW1lbnQpIHtyZXR1cm4gbnVsbH1cclxuXHRcdFx0ZWxzZSByZXR1cm4gdGhpcy5wYXJlbnRFbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpXHJcblx0XHR9O1xyXG59KEVsZW1lbnQucHJvdG90eXBlKSk7XHJcblxyXG4oZnVuY3Rpb24oZSkge1xyXG5cdHZhciBtYXRjaGVzID0gZS5tYXRjaGVzIHx8IGUubWF0Y2hlc1NlbGVjdG9yIHx8IGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgZS5vTWF0Y2hlc1NlbGVjdG9yO1xyXG5cdCFtYXRjaGVzID8gKGUubWF0Y2hlcyA9IGUubWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24gbWF0Y2hlcyhzZWxlY3Rvcikge1xyXG5cdFx0dmFyIG1hdGNoZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHRcdHZhciB0aCA9IHRoaXM7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChtYXRjaGVzLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdHJldHVybiBlID09PSB0aDtcclxuXHRcdH0pO1xyXG5cdH0pIDogKGUubWF0Y2hlcyA9IGUubWF0Y2hlc1NlbGVjdG9yID0gbWF0Y2hlcyk7XHJcbn0pKEVsZW1lbnQucHJvdG90eXBlKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0MsV0FBU0EsQ0FBQyxFQUFFO0VBQ1pBLENBQUMsQ0FBQ0MsT0FBTyxHQUFHRCxDQUFDLENBQUNDLE9BQU8sSUFBSUQsQ0FBQyxDQUFDRSxrQkFBa0IsSUFBSUYsQ0FBQyxDQUFDRyxpQkFBaUIsSUFBSUgsQ0FBQyxDQUFDSSxnQkFBZ0IsSUFBSUosQ0FBQyxDQUFDSyxxQkFBcUI7RUFDckhMLENBQUMsQ0FBQ00sT0FBTyxHQUFHTixDQUFDLENBQUNNLE9BQU8sSUFBSSxTQUFTQSxPQUFPQSxDQUFDQyxRQUFRLEVBQUU7SUFDbkQsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLElBQUk7SUFDdEIsSUFBSSxJQUFJLENBQUNOLE9BQU8sQ0FBQ00sUUFBUSxDQUFDLEVBQUUsT0FBTyxJQUFJO0lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUNDLGFBQWEsRUFBRTtNQUFDLE9BQU8sSUFBSTtJQUFBLENBQUMsTUFDaEMsT0FBTyxJQUFJLENBQUNBLGFBQWEsQ0FBQ0YsT0FBTyxDQUFDQyxRQUFRLENBQUM7RUFDakQsQ0FBQztBQUNILENBQUMsRUFBQ0UsT0FBTyxDQUFDQyxTQUFTLENBQUM7QUFFcEIsQ0FBQyxVQUFTVixDQUFDLEVBQUU7RUFDWixJQUFJQyxPQUFPLEdBQUdELENBQUMsQ0FBQ0MsT0FBTyxJQUFJRCxDQUFDLENBQUNXLGVBQWUsSUFBSVgsQ0FBQyxDQUFDSyxxQkFBcUIsSUFBSUwsQ0FBQyxDQUFDRSxrQkFBa0IsSUFBSUYsQ0FBQyxDQUFDRyxpQkFBaUIsSUFBSUgsQ0FBQyxDQUFDSSxnQkFBZ0I7RUFDNUksQ0FBQ0gsT0FBTyxHQUFJRCxDQUFDLENBQUNDLE9BQU8sR0FBR0QsQ0FBQyxDQUFDVyxlQUFlLEdBQUcsU0FBU1YsT0FBT0EsQ0FBQ00sUUFBUSxFQUFFO0lBQ3RFLElBQUlOLE9BQU8sR0FBR1csUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQ04sUUFBUSxDQUFDO0lBQ2pELElBQUlPLEVBQUUsR0FBRyxJQUFJO0lBQ2IsT0FBT0MsS0FBSyxDQUFDTCxTQUFTLENBQUNNLElBQUksQ0FBQ0MsSUFBSSxDQUFDaEIsT0FBTyxFQUFFLFVBQVNELENBQUMsRUFBRTtNQUNyRCxPQUFPQSxDQUFDLEtBQUtjLEVBQUU7SUFDaEIsQ0FBQyxDQUFDO0VBQ0gsQ0FBQyxHQUFLZCxDQUFDLENBQUNDLE9BQU8sR0FBR0QsQ0FBQyxDQUFDVyxlQUFlLEdBQUdWLE9BQVE7QUFDL0MsQ0FBQyxFQUFFUSxPQUFPLENBQUNDLFNBQVMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/js/polyfills.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/common.js");
/******/ 	
/******/ })()
;