"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_connectWallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/connectWallet */ \"./utils/connectWallet.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [walletConnected, setwalletConnected] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [currentAccount, setcurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (walletConnected) {\n            router.push(\"/dashboard\");\n        }\n    }, [\n        walletConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Chainlink Live NFT\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Chainlink Live NFT\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-hero-pattern bg-cover min-h-screen opacity-80\"\n            }, void 0, false, {\n                fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-[35%] md:top-[25%] left-[5%] md:left-[25%] opacity-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-6xl md:text-8xl font-extrabold font-One text-center items-center text-black\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"opacity-90\",\n                                children: \"Chainlink\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/index.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 text-transparent bg-clip-text text-7xl md:text-9xl block mt-[-10px]\",\n                                children: \"Live NFT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/index.js\",\n                                lineNumber: 30,\n                                columnNumber: 57\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mt-24\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: async ()=>{\n                                await (0,_utils_connectWallet__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(walletConnected, setwalletConnected, setcurrentAccount);\n                            },\n                            class: \"text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-lg text-2xl px-9 py-5 text-center mr-2 mb-2\",\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sahil/Web Projects/Web3/chain-link-dynamic/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"UvC1bE1/8KNHZ6WOooT/U170am0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFPTUE7QUFQc0I7QUFDRTtBQUVvQjtBQUNQO0FBQ0o7QUFJeEIsU0FBU08sT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVELE1BQU0sQ0FBQ0ssZ0JBQWdCQyxrQkFBa0IsR0FBR04sK0NBQVFBLENBQUM7SUFDckQsTUFBTU8sU0FBU04sc0RBQVNBO0lBQ3hCRixnREFBU0EsQ0FBQyxJQUFJO1FBQ1osSUFBR0ksaUJBQWdCO1lBQ2pCSSxPQUFPQyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsR0FBRTtRQUFDTDtLQUFnQjtJQUNuQixxQkFDRTs7MEJBQ0UsOERBQUNQLGtEQUFJQTs7a0NBQ0gsOERBQUNhO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDO2dCQUFJQyxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7OzBDQUNaLDhEQUFDRTtnQ0FBS0YsV0FBVTswQ0FBYTs7Ozs7OzRCQUFnQjswQ0FBQyw4REFBQ0U7Z0NBQUtGLFdBQVU7MENBQW9JOzs7Ozs7Ozs7Ozs7a0NBRXBNLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0c7NEJBQU9DLE1BQUs7NEJBQVNDLFNBQVMsVUFBUztnQ0FDdEMsTUFBTXhCLGdFQUFhQSxDQUFDSyxpQkFBZ0JDLG9CQUFtQkU7NEJBQ3pEOzRCQUFHaUIsT0FBTTtzQ0FBa1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLclEsQ0FBQztHQTlCdUJyQjs7UUFHUEQsa0RBQVNBOzs7S0FIRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnQG5leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgY29ubmVjdFdhbGxldCBmcm9tICcuLi91dGlscy9jb25uZWN0V2FsbGV0J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3dhbGxldENvbm5lY3RlZCwgc2V0d2FsbGV0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRjdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZih3YWxsZXRDb25uZWN0ZWQpe1xuICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICB9XG4gIH0sW3dhbGxldENvbm5lY3RlZF0pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2hhaW5saW5rIExpdmUgTkZUPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNoYWlubGluayBMaXZlIE5GVFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1oZXJvLXBhdHRlcm4gYmctY292ZXIgbWluLWgtc2NyZWVuIG9wYWNpdHktODAnPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC1bMzUlXSBtZDp0b3AtWzI1JV0gbGVmdC1bNSVdIG1kOmxlZnQtWzI1JV0gb3BhY2l0eS0xMDAnPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgbWQ6dGV4dC04eGwgZm9udC1leHRyYWJvbGQgZm9udC1PbmUgdGV4dC1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtYmxhY2tcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J29wYWNpdHktOTAnPkNoYWlubGluazwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPSdiZy1ncmFkaWVudC10by1yIGZyb20tcHVycGxlLTgwMCB2aWEtdmlvbGV0LTkwMCB0by1wdXJwbGUtODAwIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IHRleHQtN3hsIG1kOnRleHQtOXhsIGJsb2NrIG10LVstMTBweF0nPkxpdmUgTkZUPC9zcGFuPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbXQtMjQnPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2FzeW5jKCk9PntcbiAgICAgICAgICAgIGF3YWl0IGNvbm5lY3RXYWxsZXQod2FsbGV0Q29ubmVjdGVkLHNldHdhbGxldENvbm5lY3RlZCxzZXRjdXJyZW50QWNjb3VudCk7XG4gICAgICAgICAgfX0gY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtNTAwIHZpYS1wdXJwbGUtNjAwIHRvLXB1cnBsZS03MDAgaG92ZXI6YmctZ3JhZGllbnQtdG8tYnIgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXB1cnBsZS0zMDAgZGFyazpmb2N1czpyaW5nLXB1cnBsZS04MDAgZm9udC1ib2xkIHJvdW5kZWQtbGcgdGV4dC0yeGwgcHgtOSBweS01IHRleHQtY2VudGVyIG1yLTIgbWItMlwiPkNvbm5lY3QgV2FsbGV0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJJbWFnZSIsImNvbm5lY3RXYWxsZXQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkhvbWUiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzZXR3YWxsZXRDb25uZWN0ZWQiLCJjdXJyZW50QWNjb3VudCIsInNldGN1cnJlbnRBY2NvdW50Iiwicm91dGVyIiwicHVzaCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImNsYXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});