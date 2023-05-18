(function() {
var __webpack_modules__ = {
"./src/answerCalculator/addNumbers/index.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addNumbers", {
    enumerable: true,
    get: function() {
        return addNumbers;
    }
});
const addNumbers = (a, b)=>{
    console.log('adding numbers', a, 'and', b);
    return a + b;
};
},
"./src/answerCalculator/calculate.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "calculate", {
    enumerable: true,
    get: function() {
        return calculate;
    }
});
var _index = __webpack_require__("./src/answerCalculator/addNumbers/index.js");
var _firstNumber = __webpack_require__("./src/answerCalculator/firstNumber.js");
var _secondNumber = __webpack_require__("./src/answerCalculator/secondNumber.js");
const calculate = ()=>{
    console.log('calculating answer');
    return (0, _index.addNumbers)(_firstNumber.firstNumber, _secondNumber.secondNumber);
};
},
"./src/answerCalculator/firstNumber.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "firstNumber", {
    enumerable: true,
    get: function() {
        return firstNumber;
    }
});
const firstNumber = 40;
},
"./src/answerCalculator/index.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "calculate", {
    enumerable: true,
    get: function() {
        return _calculate.calculate;
    }
});
var _calculate = __webpack_require__("./src/answerCalculator/calculate.js");
},
"./src/answerCalculator/secondNumber.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "secondNumber", {
    enumerable: true,
    get: function() {
        return secondNumber;
    }
});
const secondNumber = 2;
},
"./src/index.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _index = __webpack_require__("./src/answerCalculator/index.js");
function render() {
    document.getElementById('root').innerHTML = `The answer to the universe is ${(0, _index.calculate)()}.`;
}
render();
},

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
       exports: {}
      });
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
// Return the exports of the module
 return module.exports;

}
var __webpack_exports__ = __webpack_require__('./src/index.js');
})()

//# sourceMappingURL=main.js.map