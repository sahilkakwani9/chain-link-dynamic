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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\nconst connectWallet = async (walletConnected, setWalletConnected, setCurrentAccount)=>{\n    try {\n        const { ethereum  } = window;\n        if (!ethereum) {\n            alert(\"Please Install Metamask\");\n        } else {\n            const getAccount = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            let provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(ethereum, \"any\");\n            let signer = provider.getSigner();\n            let chaindId = await signer.getChainId();\n            console.log(chaindId);\n            if (chaindId !== 5) {\n                setWalletConnected(false);\n                signer.getChainId().then(async (res)=>{\n                    if (res !== 5) {\n                        const polygon = await ethereum.request({\n                            method: \"wallet_switchEthereumChain\",\n                            params: [\n                                {\n                                    chainId: \"0x5\"\n                                }\n                            ]\n                        });\n                        const accounts = await ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                        signer = provider.getSigner();\n                        setCurrentAccount(accounts[0]);\n                        setWalletConnected(true);\n                    // state.setCurrentAccount(accounts[0])\n                    // console.log(currentAccount);\n                    }\n                });\n            }\n            if (chaindId === 5) {\n                setWalletConnected(true);\n                setCurrentAccount(getAccount[0]);\n            // state.setCurrentAccount(getAccount[0]);\n            }\n            console.log(walletConnected);\n        }\n    } catch (err) {\n        console.log(err);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectWallet);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb25uZWN0V2FsbGV0LmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQWdDO0FBQ2hDLE1BQU1DLGdCQUFnQixPQUFPQyxpQkFBZ0JDLG9CQUFtQkMsb0JBQXNCO0lBQ2xGLElBQUk7UUFDQSxNQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHQztRQUNyQixJQUFJLENBQUNELFVBQVU7WUFDWEUsTUFBTTtRQUNWLE9BQ0s7WUFDRCxNQUFNQyxhQUFhLE1BQU1ILFNBQVNJLE9BQU8sQ0FBQztnQkFDdENDLFFBQVE7WUFDWjtZQUNBLElBQUlDLFdBQVcsSUFBSVgsaUVBQTZCLENBQUNLLFVBQVU7WUFDM0QsSUFBSVMsU0FBU0gsU0FBU0ksU0FBUztZQUMvQixJQUFJQyxXQUFXLE1BQU1GLE9BQU9HLFVBQVU7WUFDdENDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWixJQUFJQSxhQUFhLEdBQUc7Z0JBQ2hCYixtQkFBbUIsS0FBSztnQkFDeEJXLE9BQU9HLFVBQVUsR0FBR0csSUFBSSxDQUFDLE9BQU9DLE1BQVE7b0JBQ3BDLElBQUlBLFFBQVEsR0FBRzt3QkFDWCxNQUFNQyxVQUFVLE1BQU1qQixTQUFTSSxPQUFPLENBQUM7NEJBQ25DQyxRQUFROzRCQUNSYSxRQUFRO2dDQUFDO29DQUFFQyxTQUFTO2dDQUFNOzZCQUFFO3dCQUNoQzt3QkFDQSxNQUFNQyxXQUFXLE1BQU1wQixTQUFTSSxPQUFPLENBQUM7NEJBQ3BDQyxRQUFRO3dCQUNaO3dCQUNBSSxTQUFTSCxTQUFTSSxTQUFTO3dCQUMzQlgsa0JBQWtCcUIsUUFBUSxDQUFDLEVBQUU7d0JBQzdCdEIsbUJBQW1CLElBQUk7b0JBQ3ZCLHVDQUF1QztvQkFDdkMsK0JBQStCO29CQUNuQyxDQUFDO2dCQUNMO1lBQ0osQ0FBQztZQUNELElBQUlhLGFBQWEsR0FBRztnQkFDaEJiLG1CQUFtQixJQUFJO2dCQUN2QkMsa0JBQWtCSSxVQUFVLENBQUMsRUFBRTtZQUMvQiwwQ0FBMEM7WUFDOUMsQ0FBQztZQUNEVSxRQUFRQyxHQUFHLENBQUNqQjtRQUNoQixDQUFDO0lBQ0wsRUFBRSxPQUFPd0IsS0FBSztRQUNaUixRQUFRQyxHQUFHLENBQUNPO0lBQ2Q7QUFFRjtBQUVGLCtEQUFlekIsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9jb25uZWN0V2FsbGV0LmpzPzNjOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICh3YWxsZXRDb25uZWN0ZWQsc2V0V2FsbGV0Q29ubmVjdGVkLHNldEN1cnJlbnRBY2NvdW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuICAgICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBJbnN0YWxsIE1ldGFtYXNrXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZ2V0QWNjb3VudCA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSwgXCJhbnlcIik7XG4gICAgICAgICAgICBsZXQgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgICAgICBsZXQgY2hhaW5kSWQgPSBhd2FpdCBzaWduZXIuZ2V0Q2hhaW5JZCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2hhaW5kSWQpXG4gICAgICAgICAgICBpZiAoY2hhaW5kSWQgIT09IDUpIHtcbiAgICAgICAgICAgICAgICBzZXRXYWxsZXRDb25uZWN0ZWQoZmFsc2UpXG4gICAgICAgICAgICAgICAgc2lnbmVyLmdldENoYWluSWQoKS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyAhPT0gNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9seWdvbiA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFt7IGNoYWluSWQ6IFwiMHg1XCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFdhbGxldENvbm5lY3RlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXRlLnNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudEFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGFpbmRJZCA9PT0gNSkge1xuICAgICAgICAgICAgICAgIHNldFdhbGxldENvbm5lY3RlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50QWNjb3VudChnZXRBY2NvdW50WzBdKTtcbiAgICAgICAgICAgICAgICAvLyBzdGF0ZS5zZXRDdXJyZW50QWNjb3VudChnZXRBY2NvdW50WzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdhbGxldENvbm5lY3RlZClcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cblxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RXYWxsZXQ7Il0sIm5hbWVzIjpbImV0aGVycyIsImNvbm5lY3RXYWxsZXQiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzZXRXYWxsZXRDb25uZWN0ZWQiLCJzZXRDdXJyZW50QWNjb3VudCIsImV0aGVyZXVtIiwid2luZG93IiwiYWxlcnQiLCJnZXRBY2NvdW50IiwicmVxdWVzdCIsIm1ldGhvZCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY2hhaW5kSWQiLCJnZXRDaGFpbklkIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJyZXMiLCJwb2x5Z29uIiwicGFyYW1zIiwiY2hhaW5JZCIsImFjY291bnRzIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/connectWallet.js\n"));

/***/ })

});