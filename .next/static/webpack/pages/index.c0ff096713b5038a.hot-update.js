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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioControl; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction AudioControl() {\n    _s();\n    let audio = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    let playButton = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    //get audio element\n    const audioElement = audio.current.querySelector(\"audio\");\n    console.log(audioElement);\n    //passing element into audio context to create input node\n    const track = audioContext.createMediaElementSource(audioElement);\n    console.log(track);\n    track.connect(audioContext.destination);\n    //selecting our play button\n    const playElement = playButton.current.querySelector(\"button\");\n    console.log(playElement);\n    const handleClick = ()=>{\n        playElement.addEventListener(\"click\", ()=>{\n            //check if context is in suspended state (autoplay policy for accessibility)\n            if (audioContext.state === \"suspended\") {\n                audioContext.resume();\n            }\n            //Play or pause track depending on state \n            if (playElement.dataset.playing === \"false\") {\n                audioElement.play();\n                playElement.dataset.playing = \"true\";\n            } else if (playButton.dataset.playing === \"true\") {\n                audioElement.pause();\n                playElement.dataset.playing = \"false\";\n            }\n        }, false);\n        //fire an end event when the track is done playing\n        audioElement.addEventListener(\"ended\", ()=>{\n            playElement.dataset.playing = \"false;\";\n        }, false);\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        //creating instance of audio context that gives us access to features and functions of webAudio API\n        const AudioContext = window.AudioContext || window.webkitAudioContext;\n        const audioContext1 = new AudioContext();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: audio,\n        className: \"audio-player\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                src: \"Claude Debussy - Prelude to the Afternoon of a Faun.mp3\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: playButton,\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    \"data-playing\": \"false\",\n                    role: \"switch\",\n                    \"aria-checked\": \"false\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Play/Pause\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\n_s(AudioControl, \"RCrVCOJfbnCKALc/4RqoNHbXkgI=\");\n_c = AudioControl;\nvar _c;\n$RefreshReg$(_c, \"AudioControl\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2F1ZGlvQ29udHJvbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUVYLFNBQVNDLGVBQWU7O0lBQ25DLElBQUlDLFFBQVFGLG1EQUFZLENBQUMsSUFBSTtJQUM3QixJQUFJSSxhQUFhSixtREFBWSxDQUFDLElBQUk7SUFHOUIsbUJBQW1CO0lBQ25CLE1BQU1LLGVBQWVILE1BQU1JLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDO0lBQ2pEQyxRQUFRQyxHQUFHLENBQUNKO0lBRVoseURBQXlEO0lBQ3pELE1BQU1LLFFBQVFDLGFBQWFDLHdCQUF3QixDQUFDUDtJQUNwREcsUUFBUUMsR0FBRyxDQUFDQztJQUNaQSxNQUFNRyxPQUFPLENBQUNGLGFBQWFHLFdBQVc7SUFFdEMsMkJBQTJCO0lBQzNCLE1BQU1DLGNBQWNYLFdBQVdFLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDO0lBQ3JEQyxRQUFRQyxHQUFHLENBQUNNO0lBRVosTUFBTUMsY0FBYyxJQUFNO1FBQ3RCRCxZQUFZRSxnQkFBZ0IsQ0FDNUIsU0FDQSxJQUFNO1lBQ0YsNEVBQTRFO1lBQzVFLElBQUlOLGFBQWFPLEtBQUssS0FBSyxhQUFZO2dCQUNuQ1AsYUFBYVEsTUFBTTtZQUN2QixDQUFDO1lBRUQseUNBQXlDO1lBQ3pDLElBQUlKLFlBQVlLLE9BQU8sQ0FBQ0MsT0FBTyxLQUFLLFNBQVE7Z0JBQ3hDaEIsYUFBYWlCLElBQUk7Z0JBQ2pCUCxZQUFZSyxPQUFPLENBQUNDLE9BQU8sR0FBRztZQUNsQyxPQUFPLElBQUlqQixXQUFXZ0IsT0FBTyxDQUFDQyxPQUFPLEtBQUssUUFBUTtnQkFDOUNoQixhQUFha0IsS0FBSztnQkFDbEJSLFlBQVlLLE9BQU8sQ0FBQ0MsT0FBTyxHQUFHO1lBQ2xDLENBQUM7UUFDTCxHQUNBLEtBQUs7UUFHSixrREFBa0Q7UUFDbkRoQixhQUFhWSxnQkFBZ0IsQ0FDN0IsU0FDQSxJQUFNO1lBQ0ZGLFlBQVlLLE9BQU8sQ0FBQ0MsT0FBTyxHQUFHO1FBQ2xDLEdBQ0EsS0FBSztJQUVUO0lBRUpyQixzREFBZSxDQUFDLElBQU07UUFDbEIsbUdBQW1HO1FBQ25HLE1BQU15QixlQUFlQyxPQUFPRCxZQUFZLElBQUlDLE9BQU9DLGtCQUFrQjtRQUNyRSxNQUFNaEIsZ0JBQWUsSUFBSWM7SUFLN0IsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNHO1FBQUlDLEtBQUszQjtRQUFPNEIsV0FBVTs7MEJBQ3ZCLDhEQUFDNUI7Z0JBQU02QixLQUFJOzs7Ozs7MEJBQ1gsOERBQUNIO2dCQUFJQyxLQUFLekI7Z0JBQVk0QixTQUFTaEI7MEJBQzNCLDRFQUFDaUI7b0JBQU9DLGdCQUFhO29CQUFRQyxNQUFLO29CQUFTQyxnQkFBYTs4QkFDcEQsNEVBQUNDO2tDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFCLENBQUM7R0FyRXVCcEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9hdWRpb0NvbnRyb2wuanN4P2NlMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXVkaW9Db250cm9sKCkge1xuICAgIGxldCBhdWRpbyA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBsZXQgcGxheUJ1dHRvbiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuXG4gICAgICAgIC8vZ2V0IGF1ZGlvIGVsZW1lbnRcbiAgICAgICAgY29uc3QgYXVkaW9FbGVtZW50ID0gYXVkaW8uY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiYXVkaW9cIik7IFxuICAgICAgICBjb25zb2xlLmxvZyhhdWRpb0VsZW1lbnQpO1xuXG4gICAgICAgIC8vcGFzc2luZyBlbGVtZW50IGludG8gYXVkaW8gY29udGV4dCB0byBjcmVhdGUgaW5wdXQgbm9kZVxuICAgICAgICBjb25zdCB0cmFjayA9IGF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW9FbGVtZW50KTtcbiAgICAgICAgY29uc29sZS5sb2codHJhY2spO1xuICAgICAgICB0cmFjay5jb25uZWN0KGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAgICAgLy9zZWxlY3Rpbmcgb3VyIHBsYXkgYnV0dG9uXG4gICAgICAgIGNvbnN0IHBsYXlFbGVtZW50ID0gcGxheUJ1dHRvbi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXlFbGVtZW50KTtcblxuICAgICAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHBsYXlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiBjb250ZXh0IGlzIGluIHN1c3BlbmRlZCBzdGF0ZSAoYXV0b3BsYXkgcG9saWN5IGZvciBhY2Nlc3NpYmlsaXR5KVxuICAgICAgICAgICAgICAgIGlmIChhdWRpb0NvbnRleHQuc3RhdGUgPT09IFwic3VzcGVuZGVkXCIpe1xuICAgICAgICAgICAgICAgICAgICBhdWRpb0NvbnRleHQucmVzdW1lKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9QbGF5IG9yIHBhdXNlIHRyYWNrIGRlcGVuZGluZyBvbiBzdGF0ZSBcbiAgICAgICAgICAgICAgICBpZiAocGxheUVsZW1lbnQuZGF0YXNldC5wbGF5aW5nID09PSBcImZhbHNlXCIpe1xuICAgICAgICAgICAgICAgICAgICBhdWRpb0VsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5RWxlbWVudC5kYXRhc2V0LnBsYXlpbmcgPSBcInRydWVcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXlCdXR0b24uZGF0YXNldC5wbGF5aW5nID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICBhdWRpb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheUVsZW1lbnQuZGF0YXNldC5wbGF5aW5nID0gXCJmYWxzZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgIC8vZmlyZSBhbiBlbmQgZXZlbnQgd2hlbiB0aGUgdHJhY2sgaXMgZG9uZSBwbGF5aW5nXG4gICAgICAgICAgICBhdWRpb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiZW5kZWRcIixcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBwbGF5RWxlbWVudC5kYXRhc2V0LnBsYXlpbmcgPSBcImZhbHNlO1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvL2NyZWF0aW5nIGluc3RhbmNlIG9mIGF1ZGlvIGNvbnRleHQgdGhhdCBnaXZlcyB1cyBhY2Nlc3MgdG8gZmVhdHVyZXMgYW5kIGZ1bmN0aW9ucyBvZiB3ZWJBdWRpbyBBUElcbiAgICAgICAgY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgICAgICBjb25zdCBhdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cblxuICAgICAgIFxuXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgcmVmPXthdWRpb30gY2xhc3NOYW1lPVwiYXVkaW8tcGxheWVyXCI+XG4gICAgICAgICAgICA8YXVkaW8gc3JjPVwiQ2xhdWRlIERlYnVzc3kgLSBQcmVsdWRlIHRvIHRoZSBBZnRlcm5vb24gb2YgYSBGYXVuLm1wM1wiPjwvYXVkaW8+XG4gICAgICAgICAgICA8ZGl2IHJlZj17cGxheUJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1wbGF5aW5nPVwiZmFsc2VcIiByb2xlPVwic3dpdGNoXCIgYXJpYS1jaGVja2VkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGxheS9QYXVzZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXVkaW9Db250cm9sIiwiYXVkaW8iLCJ1c2VSZWYiLCJwbGF5QnV0dG9uIiwiYXVkaW9FbGVtZW50IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwidHJhY2siLCJhdWRpb0NvbnRleHQiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJwbGF5RWxlbWVudCIsImhhbmRsZUNsaWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlIiwicmVzdW1lIiwiZGF0YXNldCIsInBsYXlpbmciLCJwbGF5IiwicGF1c2UiLCJ1c2VFZmZlY3QiLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJzcmMiLCJvbkNsaWNrIiwiYnV0dG9uIiwiZGF0YS1wbGF5aW5nIiwicm9sZSIsImFyaWEtY2hlY2tlZCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/audioControl.jsx\n"));

/***/ })

});