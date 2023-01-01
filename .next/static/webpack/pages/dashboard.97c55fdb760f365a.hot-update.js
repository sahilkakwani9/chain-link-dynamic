"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./utils/getURI.js":
/*!*************************!*\
  !*** ./utils/getURI.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./utils/constants.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\n\nconst getURI = async ()=>{\n    try {\n        const { ethereum  } = window;\n        if (ethereum) {\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(ethereum, \"any\");\n            const signer = provider.getSigner();\n            const contract = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.Contract(_constants__WEBPACK_IMPORTED_MODULE_0__.contractAddress, _constants__WEBPACK_IMPORTED_MODULE_0__.ABI, signer);\n            const nft = contract.tokenURI(1);\n            return nft;\n        }\n    } catch (error) {\n        console.error(error);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getURI);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9nZXRVUkkuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW1EO0FBQ25CO0FBRWhDLE1BQU1HLFNBQVMsVUFBVztJQUN0QixJQUFJO1FBQ0EsTUFBTSxFQUFDQyxTQUFRLEVBQUMsR0FBR0M7UUFDbkIsSUFBR0QsVUFBUztZQUNSLE1BQU1FLFdBQVcsSUFBSUosaUVBQTZCLENBQUNFLFVBQVU7WUFDN0QsTUFBTUssU0FBU0gsU0FBU0ksU0FBUztZQUNqQyxNQUFNQyxXQUFXLElBQUlULG1EQUFlLENBQUNELHVEQUFlQSxFQUFFRCwyQ0FBR0EsRUFBRVM7WUFDM0QsTUFBTUksTUFBTUYsU0FBU0csUUFBUSxDQUFDO1lBQzlCLE9BQU9EO1FBQ1gsQ0FBQztJQUNMLEVBQUUsT0FBT0UsT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUNBO0lBQ2xCO0FBQ0o7QUFFQSwrREFBZVosTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9nZXRVUkkuanM/NjE1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQkksIGNvbnRyYWN0QWRkcmVzcyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5jb25zdCBnZXRVUkkgPSBhc3luYyAoKSA9PntcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7ZXRoZXJldW19ID0gd2luZG93O1xuICAgICAgICBpZihldGhlcmV1bSl7XG4gICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSwgXCJhbnlcIik7XG4gICAgICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIEFCSSwgc2lnbmVyKTtcbiAgICAgICAgICAgIGNvbnN0IG5mdCA9IGNvbnRyYWN0LnRva2VuVVJJKDEpO1xuICAgICAgICAgICAgcmV0dXJuIG5mdDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0VVJJOyJdLCJuYW1lcyI6WyJBQkkiLCJjb250cmFjdEFkZHJlc3MiLCJldGhlcnMiLCJnZXRVUkkiLCJldGhlcmV1bSIsIndpbmRvdyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29udHJhY3QiLCJDb250cmFjdCIsIm5mdCIsInRva2VuVVJJIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/getURI.js\n"));

/***/ })

});