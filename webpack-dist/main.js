/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/answerCalculator/addNumbers/index.js":
/*!**************************************************!*\
  !*** ./src/answerCalculator/addNumbers/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNumbers: () => (/* binding */ addNumbers)
/* harmony export */ });
const addNumbers = (a, b) => {
    console.log('adding numbers', a, 'and', b);
    return a + b;
}


/***/ }),

/***/ "./src/answerCalculator/calculate.js":
/*!*******************************************!*\
  !*** ./src/answerCalculator/calculate.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculate: () => (/* binding */ calculate)
/* harmony export */ });
/* harmony import */ var _addNumbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNumbers */ "./src/answerCalculator/addNumbers/index.js");
/* harmony import */ var _firstNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firstNumber */ "./src/answerCalculator/firstNumber.js");
/* harmony import */ var _secondNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./secondNumber */ "./src/answerCalculator/secondNumber.js");




const calculate = () => {
    console.log('calculating answer');
    return (0,_addNumbers__WEBPACK_IMPORTED_MODULE_0__.addNumbers)(_firstNumber__WEBPACK_IMPORTED_MODULE_1__.firstNumber, _secondNumber__WEBPACK_IMPORTED_MODULE_2__.secondNumber);
}


/***/ }),

/***/ "./src/answerCalculator/firstNumber.js":
/*!*********************************************!*\
  !*** ./src/answerCalculator/firstNumber.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstNumber: () => (/* binding */ firstNumber)
/* harmony export */ });
const firstNumber = 40;


/***/ }),

/***/ "./src/answerCalculator/index.js":
/*!***************************************!*\
  !*** ./src/answerCalculator/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculate: () => (/* reexport safe */ _calculate__WEBPACK_IMPORTED_MODULE_0__.calculate)
/* harmony export */ });
/* harmony import */ var _calculate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculate */ "./src/answerCalculator/calculate.js");



/***/ }),

/***/ "./src/answerCalculator/secondNumber.js":
/*!**********************************************!*\
  !*** ./src/answerCalculator/secondNumber.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   secondNumber: () => (/* binding */ secondNumber)
/* harmony export */ });
const secondNumber = 2;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _answerCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./answerCalculator */ "./src/answerCalculator/index.js");


function render() {
  document.getElementById(
    'root'
  ).innerHTML = `The answer to the universe is ${(0,_answerCalculator__WEBPACK_IMPORTED_MODULE_0__.calculate)()}.`;
}
render();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map