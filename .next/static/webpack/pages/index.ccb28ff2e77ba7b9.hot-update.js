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

/***/ "./utils/connectWallet.js":
/*!********************************!*\
  !*** ./utils/connectWallet.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\nconst connectWallet = async ()=>{\n    try {\n        const { ethereum  } = window;\n        if (!ethereum) {\n            alert(\"Please Install Metamask\");\n        } else {\n            const getAccount = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            let provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(ethereum, \"any\");\n            let signer = provider.getSigner();\n            let chaindId = await signer.getChainId();\n            console.log(chaindId);\n            if (chaindId !== 5) {\n                // setWalletConnected(false)\n                signer.getChainId().then(async (res)=>{\n                    if (res !== 5) {\n                        const polygon = await ethereum.request({\n                            method: \"wallet_switchEthereumChain\",\n                            params: [\n                                {\n                                    chainId: \"0x5\"\n                                }\n                            ]\n                        });\n                        const accounts = await ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                        signer = provider.getSigner();\n                    // setCurrentAccount(accounts[0]);\n                    // setWalletConnected(true);\n                    // state.setCurrentAccount(accounts[0])\n                    // console.log(currentAccount);\n                    }\n                });\n            }\n            if (chaindId === 5) {\n            // setWalletConnected(true);\n            // setCurrentAccount(getAccount[0]);\n            // state.setCurrentAccount(getAccount[0]);\n            }\n        // console.log(walletConnected)\n        }\n    } catch (err) {\n        console.log(err);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectWallet);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb25uZWN0V2FsbGV0LmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQWdDO0FBQ2hDLE1BQU1DLGdCQUFnQixVQUFZO0lBQzlCLElBQUk7UUFDQSxNQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHQztRQUNyQixJQUFJLENBQUNELFVBQVU7WUFDWEUsTUFBTTtRQUNWLE9BQ0s7WUFDRCxNQUFNQyxhQUFhLE1BQU1ILFNBQVNJLE9BQU8sQ0FBQztnQkFDdENDLFFBQVE7WUFDWjtZQUNBLElBQUlDLFdBQVcsSUFBSVIsaUVBQTZCLENBQUNFLFVBQVU7WUFDM0QsSUFBSVMsU0FBU0gsU0FBU0ksU0FBUztZQUMvQixJQUFJQyxXQUFXLE1BQU1GLE9BQU9HLFVBQVU7WUFDdENDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWixJQUFJQSxhQUFhLEdBQUc7Z0JBQ2hCLDRCQUE0QjtnQkFDNUJGLE9BQU9HLFVBQVUsR0FBR0csSUFBSSxDQUFDLE9BQU9DLE1BQVE7b0JBQ3BDLElBQUlBLFFBQVEsR0FBRzt3QkFDWCxNQUFNQyxVQUFVLE1BQU1qQixTQUFTSSxPQUFPLENBQUM7NEJBQ25DQyxRQUFROzRCQUNSYSxRQUFRO2dDQUFDO29DQUFFQyxTQUFTO2dDQUFNOzZCQUFFO3dCQUNoQzt3QkFDQSxNQUFNQyxXQUFXLE1BQU1wQixTQUFTSSxPQUFPLENBQUM7NEJBQ3BDQyxRQUFRO3dCQUNaO3dCQUNBSSxTQUFTSCxTQUFTSSxTQUFTO29CQUMzQixrQ0FBa0M7b0JBQ2xDLDRCQUE0QjtvQkFDNUIsdUNBQXVDO29CQUN2QywrQkFBK0I7b0JBQ25DLENBQUM7Z0JBQ0w7WUFDSixDQUFDO1lBQ0QsSUFBSUMsYUFBYSxHQUFHO1lBQ2hCLDRCQUE0QjtZQUM1QixvQ0FBb0M7WUFDcEMsMENBQTBDO1lBQzlDLENBQUM7UUFDRCwrQkFBK0I7UUFDbkMsQ0FBQztJQUNMLEVBQUUsT0FBT1UsS0FBSztRQUNaUixRQUFRQyxHQUFHLENBQUNPO0lBQ2Q7QUFFRjtBQUVGLCtEQUFldEIsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9jb25uZWN0V2FsbGV0LmpzPzNjOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG4gICAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIEluc3RhbGwgTWV0YW1hc2tcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBnZXRBY2NvdW50ID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtLCBcImFueVwiKTtcbiAgICAgICAgICAgIGxldCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgICAgIGxldCBjaGFpbmRJZCA9IGF3YWl0IHNpZ25lci5nZXRDaGFpbklkKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFpbmRJZClcbiAgICAgICAgICAgIGlmIChjaGFpbmRJZCAhPT0gNSkge1xuICAgICAgICAgICAgICAgIC8vIHNldFdhbGxldENvbm5lY3RlZChmYWxzZSlcbiAgICAgICAgICAgICAgICBzaWduZXIuZ2V0Q2hhaW5JZCgpLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzICE9PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2x5Z29uID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW3sgY2hhaW5JZDogXCIweDVcIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0V2FsbGV0Q29ubmVjdGVkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhdGUuc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50QWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYWluZElkID09PSA1KSB7XG4gICAgICAgICAgICAgICAgLy8gc2V0V2FsbGV0Q29ubmVjdGVkKHRydWUpO1xuICAgICAgICAgICAgICAgIC8vIHNldEN1cnJlbnRBY2NvdW50KGdldEFjY291bnRbMF0pO1xuICAgICAgICAgICAgICAgIC8vIHN0YXRlLnNldEN1cnJlbnRBY2NvdW50KGdldEFjY291bnRbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cod2FsbGV0Q29ubmVjdGVkKVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxuXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFdhbGxldDsiXSwibmFtZXMiOlsiZXRoZXJzIiwiY29ubmVjdFdhbGxldCIsImV0aGVyZXVtIiwid2luZG93IiwiYWxlcnQiLCJnZXRBY2NvdW50IiwicmVxdWVzdCIsIm1ldGhvZCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY2hhaW5kSWQiLCJnZXRDaGFpbklkIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJyZXMiLCJwb2x5Z29uIiwicGFyYW1zIiwiY2hhaW5JZCIsImFjY291bnRzIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/connectWallet.js\n"));

/***/ })

});