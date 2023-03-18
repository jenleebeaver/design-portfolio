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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioControl; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction AudioControl() {\n    _s();\n    let audio = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    let playButton = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const [isPlaying, setIsPlaying] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    function handlePlay() {\n        //check if context is in suspended state (autoplay policy for accessibility)\n        if (audioContext.state === \"suspended\") {\n            audioContext.resume();\n        }\n        //Play or pause track depending on state \n        if (!isPlaying) {\n            audioElement.play();\n            setIsPlaying(true);\n        } else {\n            audioElement.pause();\n            setIsPlaying(false);\n        }\n    }\n    ;\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        //creating instance of audio context that gives us access to features and functions of webAudio API\n        const AudioContext = window.AudioContext || window.webkitAudioContext;\n        const audioContext1 = new AudioContext();\n        //get audio element\n        const audioElement1 = audio.current.querySelector(\"audio\");\n        console.log(audioElement1);\n        //passing element into audio context to create input node\n        const track = audioContext1.createMediaElementSource(audioElement1);\n        console.log(track);\n        track.connect(audioContext1.destination);\n        //selecting our play button\n        const playElement = playButton.current.querySelector(\"button\");\n        console.log(playElement);\n        //fire an end event when the track is done playing\n        audioElement1.addEventListener(\"ended\", ()=>{\n            playElement.dataset.playing = \"false;\";\n        }, false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: audio,\n        className: \"audio-player\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                src: \"Claude Debussy - Prelude to the Afternoon of a Faun.mp3\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: playButton,\n                onClick: handlePlay,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    \"data-playing\": \"false\",\n                    role: \"switch\",\n                    \"aria-checked\": \"false\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Play/Pause\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_s(AudioControl, \"/tQt6dGtFZ24jfqAij/AOvS/d+4=\");\n_c = AudioControl;\nvar _c;\n$RefreshReg$(_c, \"AudioControl\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2F1ZGlvQ29udHJvbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUVYLFNBQVNDLGVBQWU7O0lBQ25DLElBQUlDLFFBQVFGLG1EQUFZLENBQUMsSUFBSTtJQUM3QixJQUFJSSxhQUFhSixtREFBWSxDQUFDLElBQUk7SUFFbEMsTUFBTSxDQUFDSyxXQUFXQyxhQUFhLEdBQUdOLHFEQUFjLENBQUMsS0FBSztJQUV0RCxTQUFTUSxhQUFZO1FBQ2pCLDRFQUE0RTtRQUM1RSxJQUFJQyxhQUFhQyxLQUFLLEtBQUssYUFBWTtZQUNuQ0QsYUFBYUUsTUFBTTtRQUN2QixDQUFDO1FBRUQseUNBQXlDO1FBQ3pDLElBQUksQ0FBQ04sV0FBVTtZQUNYTyxhQUFhQyxJQUFJO1lBQ2pCUCxhQUFhLElBQUk7UUFDckIsT0FBTztZQUNITSxhQUFhRSxLQUFLO1lBQ2xCUixhQUFhLEtBQUs7UUFDdEIsQ0FBQztJQUNMOztJQUVBTixzREFBZSxDQUFDLElBQU07UUFDbEIsbUdBQW1HO1FBQ25HLE1BQU1nQixlQUFlQyxPQUFPRCxZQUFZLElBQUlDLE9BQU9DLGtCQUFrQjtRQUNyRSxNQUFNVCxnQkFBZSxJQUFJTztRQUV6QixtQkFBbUI7UUFDbkIsTUFBTUosZ0JBQWVWLE1BQU1pQixPQUFPLENBQUNDLGFBQWEsQ0FBQztRQUNqREMsUUFBUUMsR0FBRyxDQUFDVjtRQUVaLHlEQUF5RDtRQUN6RCxNQUFNVyxRQUFRZCxjQUFhZSx3QkFBd0IsQ0FBQ1o7UUFDcERTLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDWkEsTUFBTUUsT0FBTyxDQUFDaEIsY0FBYWlCLFdBQVc7UUFFdEMsMkJBQTJCO1FBQzNCLE1BQU1DLGNBQWN2QixXQUFXZSxPQUFPLENBQUNDLGFBQWEsQ0FBQztRQUNyREMsUUFBUUMsR0FBRyxDQUFDSztRQUVQLGtEQUFrRDtRQUNuRGYsY0FBYWdCLGdCQUFnQixDQUM3QixTQUNBLElBQU07WUFDRkQsWUFBWUUsT0FBTyxDQUFDQyxPQUFPLEdBQUc7UUFDbEMsR0FDQSxLQUFLO0lBS2IsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNDO1FBQUlDLEtBQUs5QjtRQUFPK0IsV0FBVTs7MEJBQ3ZCLDhEQUFDL0I7Z0JBQU1nQyxLQUFJOzs7Ozs7MEJBQ1gsOERBQUNIO2dCQUFJQyxLQUFLNUI7Z0JBQVkrQixTQUFTM0I7MEJBQzNCLDRFQUFDNEI7b0JBQU9DLGdCQUFhO29CQUFRQyxNQUFLO29CQUFTQyxnQkFBYTs4QkFDcEQsNEVBQUNDO2tDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFCLENBQUM7R0EvRHVCdkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9hdWRpb0NvbnRyb2wuanN4P2NlMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXVkaW9Db250cm9sKCkge1xuICAgIGxldCBhdWRpbyA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBsZXQgcGxheUJ1dHRvbiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVQbGF5KCl7XG4gICAgICAgIC8vY2hlY2sgaWYgY29udGV4dCBpcyBpbiBzdXNwZW5kZWQgc3RhdGUgKGF1dG9wbGF5IHBvbGljeSBmb3IgYWNjZXNzaWJpbGl0eSlcbiAgICAgICAgaWYgKGF1ZGlvQ29udGV4dC5zdGF0ZSA9PT0gXCJzdXNwZW5kZWRcIil7XG4gICAgICAgICAgICBhdWRpb0NvbnRleHQucmVzdW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1BsYXkgb3IgcGF1c2UgdHJhY2sgZGVwZW5kaW5nIG9uIHN0YXRlIFxuICAgICAgICBpZiAoIWlzUGxheWluZyl7XG4gICAgICAgICAgICBhdWRpb0VsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXVkaW9FbGVtZW50LnBhdXNlKCk7XG4gICAgICAgICAgICBzZXRJc1BsYXlpbmcoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy9jcmVhdGluZyBpbnN0YW5jZSBvZiBhdWRpbyBjb250ZXh0IHRoYXQgZ2l2ZXMgdXMgYWNjZXNzIHRvIGZlYXR1cmVzIGFuZCBmdW5jdGlvbnMgb2Ygd2ViQXVkaW8gQVBJXG4gICAgICAgIGNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICAgICAgY29uc3QgYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gICAgICAgIC8vZ2V0IGF1ZGlvIGVsZW1lbnRcbiAgICAgICAgY29uc3QgYXVkaW9FbGVtZW50ID0gYXVkaW8uY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiYXVkaW9cIik7IFxuICAgICAgICBjb25zb2xlLmxvZyhhdWRpb0VsZW1lbnQpO1xuXG4gICAgICAgIC8vcGFzc2luZyBlbGVtZW50IGludG8gYXVkaW8gY29udGV4dCB0byBjcmVhdGUgaW5wdXQgbm9kZVxuICAgICAgICBjb25zdCB0cmFjayA9IGF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW9FbGVtZW50KTtcbiAgICAgICAgY29uc29sZS5sb2codHJhY2spO1xuICAgICAgICB0cmFjay5jb25uZWN0KGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAgICAgLy9zZWxlY3Rpbmcgb3VyIHBsYXkgYnV0dG9uXG4gICAgICAgIGNvbnN0IHBsYXlFbGVtZW50ID0gcGxheUJ1dHRvbi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXlFbGVtZW50KTtcblxuICAgICAgICAgICAgIC8vZmlyZSBhbiBlbmQgZXZlbnQgd2hlbiB0aGUgdHJhY2sgaXMgZG9uZSBwbGF5aW5nXG4gICAgICAgICAgICBhdWRpb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiZW5kZWRcIixcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBwbGF5RWxlbWVudC5kYXRhc2V0LnBsYXlpbmcgPSBcImZhbHNlO1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG5cbiAgICAgICBcblxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IHJlZj17YXVkaW99IGNsYXNzTmFtZT1cImF1ZGlvLXBsYXllclwiPlxuICAgICAgICAgICAgPGF1ZGlvIHNyYz1cIkNsYXVkZSBEZWJ1c3N5IC0gUHJlbHVkZSB0byB0aGUgQWZ0ZXJub29uIG9mIGEgRmF1bi5tcDNcIj48L2F1ZGlvPlxuICAgICAgICAgICAgPGRpdiByZWY9e3BsYXlCdXR0b259IG9uQ2xpY2s9e2hhbmRsZVBsYXl9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1wbGF5aW5nPVwiZmFsc2VcIiByb2xlPVwic3dpdGNoXCIgYXJpYS1jaGVja2VkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGxheS9QYXVzZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXVkaW9Db250cm9sIiwiYXVkaW8iLCJ1c2VSZWYiLCJwbGF5QnV0dG9uIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwidXNlU3RhdGUiLCJoYW5kbGVQbGF5IiwiYXVkaW9Db250ZXh0Iiwic3RhdGUiLCJyZXN1bWUiLCJhdWRpb0VsZW1lbnQiLCJwbGF5IiwicGF1c2UiLCJ1c2VFZmZlY3QiLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJ0cmFjayIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsInBsYXlFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGFzZXQiLCJwbGF5aW5nIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwic3JjIiwib25DbGljayIsImJ1dHRvbiIsImRhdGEtcGxheWluZyIsInJvbGUiLCJhcmlhLWNoZWNrZWQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/audioControl.jsx\n"));

/***/ })

});