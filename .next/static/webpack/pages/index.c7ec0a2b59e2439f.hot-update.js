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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioControl; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction AudioControl() {\n    _s();\n    let audio = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    let playButton = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        //creating instance of audio context that gives us access to features and functions of webAudio API\n        const AudioContext = window.AudioContext || window.webkitAudioContext;\n        const audioContext = new AudioContext();\n        //get audio element\n        const audioElement = audio.current.querySelector(\"audio\");\n        console.log(audioElement);\n        //passing element into audio context to create input node\n        const track = audioContext.createMediaElementSource(audioElement);\n        console.log(track);\n        track.connect(audioContext.destination);\n        //selecting our play button\n        const playElement = playButton.current.querySelector(\"button\");\n        console.log(playElement);\n        const handleClick = ()=>{\n            playElement.addEventListener(\"click\", ()=>{\n                //check if context is in suspended state (autoplay policy for accessibility)\n                if (audioContext.state === \"suspended\") {\n                    audioContext.resume();\n                }\n                //Play or pause track depending on state \n                if (playElement.dataset.playing === \"false\") {\n                    audioElement.play();\n                    playElement.dataset.playing = \"true\";\n                } else if (playButton.dataset.playing === \"true\") {\n                    audioElement.pause();\n                    playElement.dataset.playing = \"false\";\n                }\n            }, false);\n        };\n        //fire an end event when the track is done playing\n        audioElement.addEventListener(\"ended\", ()=>{\n            playElement.dataset.playing = \"false;\";\n        }, false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: audio,\n        className: \"audio-player\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                src: \"Claude Debussy - Prelude to the Afternoon of a Faun.mp3\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: playButton,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    \"data-playing\": \"false\",\n                    role: \"switch\",\n                    \"aria-checked\": \"false\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Play/Pause\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, this);\n}\n_s(AudioControl, \"RCrVCOJfbnCKALc/4RqoNHbXkgI=\");\n_c = AudioControl;\nvar _c;\n$RefreshReg$(_c, \"AudioControl\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2F1ZGlvQ29udHJvbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUVYLFNBQVNDLGVBQWU7O0lBQ25DLElBQUlDLFFBQVFGLG1EQUFZLENBQUMsSUFBSTtJQUM3QixJQUFJSSxhQUFhSixtREFBWSxDQUFDLElBQUk7SUFFbENBLHNEQUFlLENBQUMsSUFBTTtRQUNsQixtR0FBbUc7UUFDbkcsTUFBTU0sZUFBZUMsT0FBT0QsWUFBWSxJQUFJQyxPQUFPQyxrQkFBa0I7UUFDckUsTUFBTUMsZUFBZSxJQUFJSDtRQUV6QixtQkFBbUI7UUFDbkIsTUFBTUksZUFBZVIsTUFBTVMsT0FBTyxDQUFDQyxhQUFhLENBQUM7UUFDakRDLFFBQVFDLEdBQUcsQ0FBQ0o7UUFFWix5REFBeUQ7UUFDekQsTUFBTUssUUFBUU4sYUFBYU8sd0JBQXdCLENBQUNOO1FBQ3BERyxRQUFRQyxHQUFHLENBQUNDO1FBQ1pBLE1BQU1FLE9BQU8sQ0FBQ1IsYUFBYVMsV0FBVztRQUV0QywyQkFBMkI7UUFDM0IsTUFBTUMsY0FBY2YsV0FBV08sT0FBTyxDQUFDQyxhQUFhLENBQUM7UUFDckRDLFFBQVFDLEdBQUcsQ0FBQ0s7UUFFWixNQUFNQyxjQUFjLElBQU07WUFDdEJELFlBQVlFLGdCQUFnQixDQUM1QixTQUNBLElBQU07Z0JBQ0YsNEVBQTRFO2dCQUM1RSxJQUFJWixhQUFhYSxLQUFLLEtBQUssYUFBWTtvQkFDbkNiLGFBQWFjLE1BQU07Z0JBQ3ZCLENBQUM7Z0JBRUQseUNBQXlDO2dCQUN6QyxJQUFJSixZQUFZSyxPQUFPLENBQUNDLE9BQU8sS0FBSyxTQUFRO29CQUN4Q2YsYUFBYWdCLElBQUk7b0JBQ2pCUCxZQUFZSyxPQUFPLENBQUNDLE9BQU8sR0FBRztnQkFDbEMsT0FBTyxJQUFJckIsV0FBV29CLE9BQU8sQ0FBQ0MsT0FBTyxLQUFLLFFBQVE7b0JBQzlDZixhQUFhaUIsS0FBSztvQkFDbEJSLFlBQVlLLE9BQU8sQ0FBQ0MsT0FBTyxHQUFHO2dCQUNsQyxDQUFDO1lBQ0wsR0FDQSxLQUFLO1FBRVQ7UUFFQSxrREFBa0Q7UUFDbERmLGFBQWFXLGdCQUFnQixDQUN6QixTQUNBLElBQU07WUFDRkYsWUFBWUssT0FBTyxDQUFDQyxPQUFPLEdBQUc7UUFDbEMsR0FDQSxLQUFLO0lBR2IsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNHO1FBQUlDLEtBQUszQjtRQUFPNEIsV0FBVTs7MEJBQ3ZCLDhEQUFDNUI7Z0JBQU02QixLQUFJOzs7Ozs7MEJBQ1gsOERBQUNIO2dCQUFJQyxLQUFLekI7MEJBQ04sNEVBQUM0QjtvQkFBT0MsZ0JBQWE7b0JBQVFDLE1BQUs7b0JBQVNDLGdCQUFhOzhCQUNwRCw0RUFBQ0M7a0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUIsQ0FBQztHQWpFdUJuQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2F1ZGlvQ29udHJvbC5qc3g/Y2UxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWRpb0NvbnRyb2woKSB7XG4gICAgbGV0IGF1ZGlvID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGxldCBwbGF5QnV0dG9uID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy9jcmVhdGluZyBpbnN0YW5jZSBvZiBhdWRpbyBjb250ZXh0IHRoYXQgZ2l2ZXMgdXMgYWNjZXNzIHRvIGZlYXR1cmVzIGFuZCBmdW5jdGlvbnMgb2Ygd2ViQXVkaW8gQVBJXG4gICAgICAgIGNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICAgICAgY29uc3QgYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gICAgICAgIC8vZ2V0IGF1ZGlvIGVsZW1lbnRcbiAgICAgICAgY29uc3QgYXVkaW9FbGVtZW50ID0gYXVkaW8uY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiYXVkaW9cIik7IFxuICAgICAgICBjb25zb2xlLmxvZyhhdWRpb0VsZW1lbnQpO1xuXG4gICAgICAgIC8vcGFzc2luZyBlbGVtZW50IGludG8gYXVkaW8gY29udGV4dCB0byBjcmVhdGUgaW5wdXQgbm9kZVxuICAgICAgICBjb25zdCB0cmFjayA9IGF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW9FbGVtZW50KTtcbiAgICAgICAgY29uc29sZS5sb2codHJhY2spO1xuICAgICAgICB0cmFjay5jb25uZWN0KGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAgICAgLy9zZWxlY3Rpbmcgb3VyIHBsYXkgYnV0dG9uXG4gICAgICAgIGNvbnN0IHBsYXlFbGVtZW50ID0gcGxheUJ1dHRvbi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXlFbGVtZW50KTtcblxuICAgICAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHBsYXlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiBjb250ZXh0IGlzIGluIHN1c3BlbmRlZCBzdGF0ZSAoYXV0b3BsYXkgcG9saWN5IGZvciBhY2Nlc3NpYmlsaXR5KVxuICAgICAgICAgICAgICAgIGlmIChhdWRpb0NvbnRleHQuc3RhdGUgPT09IFwic3VzcGVuZGVkXCIpe1xuICAgICAgICAgICAgICAgICAgICBhdWRpb0NvbnRleHQucmVzdW1lKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9QbGF5IG9yIHBhdXNlIHRyYWNrIGRlcGVuZGluZyBvbiBzdGF0ZSBcbiAgICAgICAgICAgICAgICBpZiAocGxheUVsZW1lbnQuZGF0YXNldC5wbGF5aW5nID09PSBcImZhbHNlXCIpe1xuICAgICAgICAgICAgICAgICAgICBhdWRpb0VsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5RWxlbWVudC5kYXRhc2V0LnBsYXlpbmcgPSBcInRydWVcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXlCdXR0b24uZGF0YXNldC5wbGF5aW5nID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICBhdWRpb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheUVsZW1lbnQuZGF0YXNldC5wbGF5aW5nID0gXCJmYWxzZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vZmlyZSBhbiBlbmQgZXZlbnQgd2hlbiB0aGUgdHJhY2sgaXMgZG9uZSBwbGF5aW5nXG4gICAgICAgIGF1ZGlvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJlbmRlZFwiLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBsYXlFbGVtZW50LmRhdGFzZXQucGxheWluZyA9IFwiZmFsc2U7XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgcmVmPXthdWRpb30gY2xhc3NOYW1lPVwiYXVkaW8tcGxheWVyXCI+XG4gICAgICAgICAgICA8YXVkaW8gc3JjPVwiQ2xhdWRlIERlYnVzc3kgLSBQcmVsdWRlIHRvIHRoZSBBZnRlcm5vb24gb2YgYSBGYXVuLm1wM1wiPjwvYXVkaW8+XG4gICAgICAgICAgICA8ZGl2IHJlZj17cGxheUJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXBsYXlpbmc9XCJmYWxzZVwiIHJvbGU9XCJzd2l0Y2hcIiBhcmlhLWNoZWNrZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QbGF5L1BhdXNlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJBdWRpb0NvbnRyb2wiLCJhdWRpbyIsInVzZVJlZiIsInBsYXlCdXR0b24iLCJ1c2VFZmZlY3QiLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJhdWRpb0NvbnRleHQiLCJhdWRpb0VsZW1lbnQiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJ0cmFjayIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsInBsYXlFbGVtZW50IiwiaGFuZGxlQ2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwic3RhdGUiLCJyZXN1bWUiLCJkYXRhc2V0IiwicGxheWluZyIsInBsYXkiLCJwYXVzZSIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsInNyYyIsImJ1dHRvbiIsImRhdGEtcGxheWluZyIsInJvbGUiLCJhcmlhLWNoZWNrZWQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/audioControl.jsx\n"));

/***/ })

});