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

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_GetNFT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GetNFT */ \"./utils/GetNFT.js\");\n/* harmony import */ var _utils_GetURI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GetURI */ \"./utils/GetURI.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction dashboard() {\n    _s();\n    const [nft, setNft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [supply, setSupply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        resolveURI();\n    }, [\n        nft\n    ]);\n    const resolveURI = async ()=>{\n        try {\n            const result = await (0,_utils_GetURI__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            const res = await (0,_utils_GetNFT__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(result.nft);\n            setNft(res);\n            populateArray(parseInt(result.total._hex, 16));\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const populateArray = (i)=>{\n        const num = [];\n        for(let x = 0; x < i; x++){\n            num[x] = x;\n        }\n        setSupply(num);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-[#85d7d9]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-7xl font-One font-bold pt-16 text-gray-700\",\n                            children: [\n                                \"Live \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"underline text-[#6b63de]\",\n                                    children: \"NFT's\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/dashboard.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 82\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/dashboard.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Mint New\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/dashboard.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/dashboard.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center px-40 mt-12 flex-wrap gap-y-8\",\n                    children: nft && supply.map((i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-80 h-48\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: nft.image,\n                                        className: \"h-[100%] w-full rounded-md shadow-lg shadow-gray-400\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/dashboard.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/dashboard.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"font-Two font-bold text-red-400 text-lg\",\n                                            children: nft.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/dashboard.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-One text-sm font-extralight text-black\",\n                                            children: nft.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/dashboard.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/dashboard.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/dashboard.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/dashboard.js\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/dashboard.js\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/dashboard.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(dashboard, \"LffJlaRby2CBABZjSYPcr2CKOAc=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (dashboard);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFrRDtBQUNiO0FBQ0E7QUFFckMsU0FBU0ssWUFBWTs7SUFDakIsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdMLCtDQUFRQSxDQUFDLENBQUM7SUFDaEMsTUFBTSxDQUFDTSxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkNELGdEQUFTQSxDQUFDLElBQUk7UUFDVlM7SUFDSixHQUFFO1FBQUNKO0tBQUk7SUFFUCxNQUFNSSxhQUFhLFVBQVc7UUFDMUIsSUFBSTtZQUNBLE1BQU1DLFNBQVMsTUFBTVAseURBQU1BO1lBQzNCLE1BQU1RLE1BQU0sTUFBTVQseURBQU1BLENBQUNRLE9BQU9MLEdBQUc7WUFDbkNDLE9BQU9LO1lBQ1BDLGNBQWNDLFNBQVNILE9BQU9JLEtBQUssQ0FBQ0MsSUFBSSxFQUFFO1FBQzlDLEVBQUUsT0FBT0MsT0FBTztZQUNaQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2xCO0lBQ0o7SUFFQSxNQUFNSixnQkFBZ0IsQ0FBQ00sSUFBSztRQUN4QixNQUFNQyxNQUFJLEVBQUU7UUFDWixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUYsR0FBR0UsSUFBSTtZQUN2QkQsR0FBRyxDQUFDQyxFQUFFLEdBQUdBO1FBQ2I7UUFDQVosVUFBVVc7SUFDZDtJQUVGLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7O3NDQUNELDhEQUFDRTs0QkFBR0QsV0FBVTs7Z0NBQWtEOzhDQUFLLDhEQUFDRTtvQ0FBS0YsV0FBVTs4Q0FBMkI7Ozs7Ozs7Ozs7OztzQ0FDaEgsOERBQUNHO3NDQUFPOzs7Ozs7Ozs7Ozs7OEJBRVIsOERBQUNKO29CQUFJQyxXQUFVOzhCQUVYakIsT0FBT0UsT0FBT21CLEdBQUcsQ0FBQyxDQUFDUixJQUFJO3dCQUNwQixxQkFDQyw4REFBQ0c7NEJBQUlDLFdBQVU7OzhDQUNmLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDWCw0RUFBQ0s7d0NBQUlDLEtBQUt2QixJQUFJd0IsS0FBSzt3Q0FBRVAsV0FBVTs7Ozs7Ozs7Ozs7OENBRW5DLDhEQUFDRDs7c0RBQ0csOERBQUNTOzRDQUFHUixXQUFVO3NEQUEyQ2pCLElBQUkwQixJQUFJOzs7Ozs7c0RBQ2pFLDhEQUFDQzs0Q0FBRVYsV0FBVTtzREFBK0NqQixJQUFJNEIsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUluRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEI7R0FyRFM3QjtBQXVEVCwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmQuanM/MGU1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdldE5GVCBmcm9tICcuLi91dGlscy9HZXRORlQnO1xuaW1wb3J0IEdldFVSSSBmcm9tICcuLi91dGlscy9HZXRVUkknO1xuXG5mdW5jdGlvbiBkYXNoYm9hcmQoKSB7XG4gICAgY29uc3QgW25mdCwgc2V0TmZ0XSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbc3VwcGx5LCBzZXRTdXBwbHldID0gdXNlU3RhdGUoW10pO1xuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICByZXNvbHZlVVJJKCk7XG4gICAgfSxbbmZ0XSlcblxuICAgIGNvbnN0IHJlc29sdmVVUkkgPSBhc3luYygpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEdldFVSSSgpO1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgR2V0TkZUKHJlc3VsdC5uZnQpO1xuICAgICAgICAgICAgc2V0TmZ0KHJlcyk7XG4gICAgICAgICAgICBwb3B1bGF0ZUFycmF5KHBhcnNlSW50KHJlc3VsdC50b3RhbC5faGV4LCAxNikpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwb3B1bGF0ZUFycmF5ID0gKGkpID0+e1xuICAgICAgICBjb25zdCBudW09W107XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaTsgeCsrKXtcbiAgICAgICAgICAgIG51bVt4XSA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U3VwcGx5KG51bSlcbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWluLWgtc2NyZWVuIGJnLVsjODVkN2Q5XSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC03eGwgZm9udC1PbmUgZm9udC1ib2xkIHB0LTE2IHRleHQtZ3JheS03MDAnPkxpdmUgPHNwYW4gY2xhc3NOYW1lPSd1bmRlcmxpbmUgdGV4dC1bIzZiNjNkZV0nPk5GVCdzPC9zcGFuPjwvaDI+XG4gICAgICAgICAgICA8YnV0dG9uPk1pbnQgTmV3PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHgtNDAgbXQtMTIgZmxleC13cmFwIGdhcC15LTgnPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5mdCAmJiBzdXBwbHkubWFwKChpKT0+e1xuICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy04MCBoLTQ4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtuZnQuaW1hZ2V9IGNsYXNzTmFtZT0naC1bMTAwJV0gdy1mdWxsIHJvdW5kZWQtbWQgc2hhZG93LWxnIHNoYWRvdy1ncmF5LTQwMCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdmb250LVR3byBmb250LWJvbGQgdGV4dC1yZWQtNDAwIHRleHQtbGcnPntuZnQubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LU9uZSB0ZXh0LXNtIGZvbnQtZXh0cmFsaWdodCB0ZXh0LWJsYWNrJz57bmZ0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBkYXNoYm9hcmQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkdldE5GVCIsIkdldFVSSSIsImRhc2hib2FyZCIsIm5mdCIsInNldE5mdCIsInN1cHBseSIsInNldFN1cHBseSIsInJlc29sdmVVUkkiLCJyZXN1bHQiLCJyZXMiLCJwb3B1bGF0ZUFycmF5IiwicGFyc2VJbnQiLCJ0b3RhbCIsIl9oZXgiLCJlcnJvciIsImNvbnNvbGUiLCJpIiwibnVtIiwieCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwic3BhbiIsImJ1dHRvbiIsIm1hcCIsImltZyIsInNyYyIsImltYWdlIiwiaDMiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n"));

/***/ })

});