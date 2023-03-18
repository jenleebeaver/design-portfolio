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

/***/ "./pages/components/audioControl.jsx":
/*!*******************************************!*\
  !*** ./pages/components/audioControl.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioControl; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction AudioControl() {\n    _s();\n    let audio = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    let playButton = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        //creating instance of audio context that gives us access to features and functions of webAudio API\n        const AudioContext = window.AudioContext || window.webkitAudioContext;\n        const audioContext = new AudioContext();\n        //get audio element\n        const audioElement = audio.current.querySelector(\"audio\");\n        console.log(audioElement);\n        //passing element into audio context to create input node\n        const track = audioContext.createMediaElementSource(audioElement);\n        console.log(track);\n        track.connect(audioContext.destination);\n        //selecting our play button\n        const playElement = playButton.current.querySelector(\"button\");\n        console.log(playElement);\n        playElement.addEventListener(\"click\", ()=>{\n            //check if context is in suspended state (autoplay policy for accessibility)\n            if (audioContext.state === \"suspended\") {\n                audioContext.resume();\n            }\n            //Play or pause track depending on state \n            if (playElement.dataset.playing === \"false\") {\n                audioElement.play();\n                playElement.dataset.playing = \"true\";\n            } else if (playButton.dataset.playing === \"true\") {\n                audioElement.pause();\n                playButton.dataset.playing = \"false\";\n            }\n        }, false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: audio,\n        className: \"audio-player\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                src: \"Claude Debussy - Prelude to the Afternoon of a Faun.mp3\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: playButton,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    \"data-playing\": \"false\",\n                    role: \"switch\",\n                    \"aria-checked\": \"false\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Play/Pause\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\n_s(AudioControl, \"RCrVCOJfbnCKALc/4RqoNHbXkgI=\");\n_c = AudioControl;\nvar _c;\n$RefreshReg$(_c, \"AudioControl\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2F1ZGlvQ29udHJvbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUVYLFNBQVNDLGVBQWU7O0lBQ25DLElBQUlDLFFBQVFGLG1EQUFZLENBQUMsSUFBSTtJQUM3QixJQUFJSSxhQUFhSixtREFBWSxDQUFDLElBQUk7SUFFbENBLHNEQUFlLENBQUMsSUFBTTtRQUNsQixtR0FBbUc7UUFDbkcsTUFBTU0sZUFBZUMsT0FBT0QsWUFBWSxJQUFJQyxPQUFPQyxrQkFBa0I7UUFDckUsTUFBTUMsZUFBZSxJQUFJSDtRQUV6QixtQkFBbUI7UUFDbkIsTUFBTUksZUFBZVIsTUFBTVMsT0FBTyxDQUFDQyxhQUFhLENBQUM7UUFDakRDLFFBQVFDLEdBQUcsQ0FBQ0o7UUFFWix5REFBeUQ7UUFDekQsTUFBTUssUUFBUU4sYUFBYU8sd0JBQXdCLENBQUNOO1FBQ3BERyxRQUFRQyxHQUFHLENBQUNDO1FBQ1pBLE1BQU1FLE9BQU8sQ0FBQ1IsYUFBYVMsV0FBVztRQUV0QywyQkFBMkI7UUFDM0IsTUFBTUMsY0FBY2YsV0FBV08sT0FBTyxDQUFDQyxhQUFhLENBQUM7UUFDckRDLFFBQVFDLEdBQUcsQ0FBQ0s7UUFFWkEsWUFBWUMsZ0JBQWdCLENBQ3hCLFNBQ0EsSUFBTTtZQUNGLDRFQUE0RTtZQUM1RSxJQUFJWCxhQUFhWSxLQUFLLEtBQUssYUFBWTtnQkFDbkNaLGFBQWFhLE1BQU07WUFDdkIsQ0FBQztZQUVELHlDQUF5QztZQUN6QyxJQUFJSCxZQUFZSSxPQUFPLENBQUNDLE9BQU8sS0FBSyxTQUFRO2dCQUN4Q2QsYUFBYWUsSUFBSTtnQkFDakJOLFlBQVlJLE9BQU8sQ0FBQ0MsT0FBTyxHQUFHO1lBQ2xDLE9BQU8sSUFBSXBCLFdBQVdtQixPQUFPLENBQUNDLE9BQU8sS0FBSyxRQUFRO2dCQUM5Q2QsYUFBYWdCLEtBQUs7Z0JBQ2xCdEIsV0FBV21CLE9BQU8sQ0FBQ0MsT0FBTyxHQUFHO1lBQ2pDLENBQUM7UUFDTCxHQUNBLEtBQUs7SUFHYixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0c7UUFBSUMsS0FBSzFCO1FBQU8yQixXQUFVOzswQkFDdkIsOERBQUMzQjtnQkFBTTRCLEtBQUk7Ozs7OzswQkFDWCw4REFBQ0g7Z0JBQUlDLEtBQUt4QjswQkFDTiw0RUFBQzJCO29CQUFPQyxnQkFBYTtvQkFBUUMsTUFBSztvQkFBU0MsZ0JBQWE7OEJBQ3BELDRFQUFDQztrQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQixDQUFDO0dBdER1QmxDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvYXVkaW9Db250cm9sLmpzeD9jZTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1ZGlvQ29udHJvbCgpIHtcbiAgICBsZXQgYXVkaW8gPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgbGV0IHBsYXlCdXR0b24gPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvL2NyZWF0aW5nIGluc3RhbmNlIG9mIGF1ZGlvIGNvbnRleHQgdGhhdCBnaXZlcyB1cyBhY2Nlc3MgdG8gZmVhdHVyZXMgYW5kIGZ1bmN0aW9ucyBvZiB3ZWJBdWRpbyBBUElcbiAgICAgICAgY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgICAgICBjb25zdCBhdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbiAgICAgICAgLy9nZXQgYXVkaW8gZWxlbWVudFxuICAgICAgICBjb25zdCBhdWRpb0VsZW1lbnQgPSBhdWRpby5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCJhdWRpb1wiKTsgXG4gICAgICAgIGNvbnNvbGUubG9nKGF1ZGlvRWxlbWVudCk7XG5cbiAgICAgICAgLy9wYXNzaW5nIGVsZW1lbnQgaW50byBhdWRpbyBjb250ZXh0IHRvIGNyZWF0ZSBpbnB1dCBub2RlXG4gICAgICAgIGNvbnN0IHRyYWNrID0gYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpb0VsZW1lbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0cmFjayk7XG4gICAgICAgIHRyYWNrLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgICAgICAvL3NlbGVjdGluZyBvdXIgcGxheSBidXR0b25cbiAgICAgICAgY29uc3QgcGxheUVsZW1lbnQgPSBwbGF5QnV0dG9uLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocGxheUVsZW1lbnQpO1xuXG4gICAgICAgIHBsYXlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiBjb250ZXh0IGlzIGluIHN1c3BlbmRlZCBzdGF0ZSAoYXV0b3BsYXkgcG9saWN5IGZvciBhY2Nlc3NpYmlsaXR5KVxuICAgICAgICAgICAgICAgIGlmIChhdWRpb0NvbnRleHQuc3RhdGUgPT09IFwic3VzcGVuZGVkXCIpe1xuICAgICAgICAgICAgICAgICAgICBhdWRpb0NvbnRleHQucmVzdW1lKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9QbGF5IG9yIHBhdXNlIHRyYWNrIGRlcGVuZGluZyBvbiBzdGF0ZSBcbiAgICAgICAgICAgICAgICBpZiAocGxheUVsZW1lbnQuZGF0YXNldC5wbGF5aW5nID09PSBcImZhbHNlXCIpe1xuICAgICAgICAgICAgICAgICAgICBhdWRpb0VsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5RWxlbWVudC5kYXRhc2V0LnBsYXlpbmcgPSBcInRydWVcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXlCdXR0b24uZGF0YXNldC5wbGF5aW5nID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICBhdWRpb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheUJ1dHRvbi5kYXRhc2V0LnBsYXlpbmcgPSBcImZhbHNlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG5cbiAgICB9LCBbXSlcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiByZWY9e2F1ZGlvfSBjbGFzc05hbWU9XCJhdWRpby1wbGF5ZXJcIj5cbiAgICAgICAgICAgIDxhdWRpbyBzcmM9XCJDbGF1ZGUgRGVidXNzeSAtIFByZWx1ZGUgdG8gdGhlIEFmdGVybm9vbiBvZiBhIEZhdW4ubXAzXCI+PC9hdWRpbz5cbiAgICAgICAgICAgIDxkaXYgcmVmPXtwbGF5QnV0dG9ufT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtcGxheWluZz1cImZhbHNlXCIgcm9sZT1cInN3aXRjaFwiIGFyaWEtY2hlY2tlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlBsYXkvUGF1c2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkF1ZGlvQ29udHJvbCIsImF1ZGlvIiwidXNlUmVmIiwicGxheUJ1dHRvbiIsInVzZUVmZmVjdCIsIkF1ZGlvQ29udGV4dCIsIndpbmRvdyIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImF1ZGlvQ29udGV4dCIsImF1ZGlvRWxlbWVudCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsInRyYWNrIiwiY3JlYXRlTWVkaWFFbGVtZW50U291cmNlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwicGxheUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhdGUiLCJyZXN1bWUiLCJkYXRhc2V0IiwicGxheWluZyIsInBsYXkiLCJwYXVzZSIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsInNyYyIsImJ1dHRvbiIsImRhdGEtcGxheWluZyIsInJvbGUiLCJhcmlhLWNoZWNrZWQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/audioControl.jsx\n"));

/***/ })

});