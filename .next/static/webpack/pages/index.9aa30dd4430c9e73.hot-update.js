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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioControl; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction AudioControl(props) {\n    _s();\n    let audio = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    let playButton = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const [isPlaying, setIsPlaying] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    function handlePlay() {\n        const audioContext1 = new AudioContext();\n        // check if context is in suspended state (autoplay policy for accessibility)\n        if (audioContext1.state === \"suspended\") {\n            audioContext1.resume();\n        }\n        //Play or pause track depending on state \n        if (!isPlaying) {\n            audioElement.play();\n            setIsPlaying(true);\n        } else {\n            audioElement.pause();\n            setIsPlaying(false);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // creating instance of audio context that gives us access to features and functions of webAudio API\n        const AudioContext1 = window.AudioContext || window.webkitAudioContext;\n        //get audio element\n        const audioElement1 = audio.current.querySelector(\"audio\");\n        console.log(audioElement1);\n        //passing element into audio context to create input node\n        const track = audioContext.createMediaElementSource(audioElement1);\n        console.log(track);\n        track.connect(audioContext.destination);\n        //selecting our play button\n        const playElement = playButton.current.querySelector(\"button\");\n        console.log(playElement);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: audio,\n        className: \"audio-player\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                src: \"./audio/debussy.mp3\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: playButton,\n                onClick: handlePlay,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    \"data-playing\": \"false\",\n                    role: \"switch\",\n                    \"aria-checked\": \"false\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Play/Pause\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n}\n_s(AudioControl, \"/tQt6dGtFZ24jfqAij/AOvS/d+4=\");\n_c = AudioControl;\nvar _c;\n$RefreshReg$(_c, \"AudioControl\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2F1ZGlvQ29udHJvbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUUxQixTQUFTRSxhQUFhQyxLQUFLLEVBQUU7O0lBQ3hDLElBQUlDLFFBQVFKLG1EQUFZLENBQUMsSUFBSTtJQUM3QixJQUFJTSxhQUFhTixtREFBWSxDQUFDLElBQUk7SUFFbEMsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdSLHFEQUFjLENBQUMsS0FBSztJQUV0RCxTQUFTVSxhQUFZO1FBQ2pCLE1BQU1DLGdCQUFlLElBQUlDO1FBRXpCLDZFQUE2RTtRQUM3RSxJQUFJRCxjQUFhRSxLQUFLLEtBQUssYUFBWTtZQUNuQ0YsY0FBYUcsTUFBTTtRQUN2QixDQUFDO1FBRUcseUNBQXlDO1FBQ3pDLElBQUksQ0FBQ1AsV0FBVTtZQUNYUSxhQUFhQyxJQUFJO1lBQ2pCUixhQUFhLElBQUk7UUFDckIsT0FBTztZQUNITyxhQUFhRSxLQUFLO1lBQ2xCVCxhQUFhLEtBQUs7UUFDdEIsQ0FBQztJQUNUO0lBRUFQLGdEQUFTQSxDQUFDLElBQU07UUFDWixvR0FBb0c7UUFDcEcsTUFBTVcsZ0JBQWVNLE9BQU9OLFlBQVksSUFBSU0sT0FBT0Msa0JBQWtCO1FBRXJFLG1CQUFtQjtRQUNuQixNQUFNSixnQkFBZVgsTUFBTWdCLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDO1FBQ2pEQyxRQUFRQyxHQUFHLENBQUNSO1FBRVoseURBQXlEO1FBQ3pELE1BQU1TLFFBQVFiLGFBQWFjLHdCQUF3QixDQUFDVjtRQUNwRE8sUUFBUUMsR0FBRyxDQUFDQztRQUNaQSxNQUFNRSxPQUFPLENBQUNmLGFBQWFnQixXQUFXO1FBRXRDLDJCQUEyQjtRQUMzQixNQUFNQyxjQUFjdEIsV0FBV2MsT0FBTyxDQUFDQyxhQUFhLENBQUM7UUFDckRDLFFBQVFDLEdBQUcsQ0FBQ0s7SUFDaEIsR0FBRyxFQUFFO0lBR0wscUJBQ0ksOERBQUNDO1FBQUlDLEtBQUsxQjtRQUFPMkIsV0FBVTs7MEJBQ3ZCLDhEQUFDM0I7Z0JBQU00QixLQUFJOzs7Ozs7MEJBQ1gsOERBQUNIO2dCQUFJQyxLQUFLeEI7Z0JBQVkyQixTQUFTdkI7MEJBQzNCLDRFQUFDd0I7b0JBQU9DLGdCQUFhO29CQUFRQyxNQUFLO29CQUFTQyxnQkFBYTs4QkFDcEQsNEVBQUNDO2tDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFCLENBQUM7R0FyRHVCcEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9hdWRpb0NvbnRyb2wuanN4P2NlMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXVkaW9Db250cm9sKHByb3BzKSB7XG4gICAgbGV0IGF1ZGlvID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGxldCBwbGF5QnV0dG9uID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVBsYXkoKXsgXG4gICAgICAgIGNvbnN0IGF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNoZWNrIGlmIGNvbnRleHQgaXMgaW4gc3VzcGVuZGVkIHN0YXRlIChhdXRvcGxheSBwb2xpY3kgZm9yIGFjY2Vzc2liaWxpdHkpXG4gICAgICAgIGlmIChhdWRpb0NvbnRleHQuc3RhdGUgPT09IFwic3VzcGVuZGVkXCIpe1xuICAgICAgICAgICAgYXVkaW9Db250ZXh0LnJlc3VtZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vUGxheSBvciBwYXVzZSB0cmFjayBkZXBlbmRpbmcgb24gc3RhdGUgXG4gICAgICAgICAgICBpZiAoIWlzUGxheWluZyl7XG4gICAgICAgICAgICAgICAgYXVkaW9FbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF1ZGlvRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHNldElzUGxheWluZyhmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBjcmVhdGluZyBpbnN0YW5jZSBvZiBhdWRpbyBjb250ZXh0IHRoYXQgZ2l2ZXMgdXMgYWNjZXNzIHRvIGZlYXR1cmVzIGFuZCBmdW5jdGlvbnMgb2Ygd2ViQXVkaW8gQVBJXG4gICAgICAgIGNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcblxuICAgICAgICAvL2dldCBhdWRpbyBlbGVtZW50XG4gICAgICAgIGNvbnN0IGF1ZGlvRWxlbWVudCA9IGF1ZGlvLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcImF1ZGlvXCIpOyBcbiAgICAgICAgY29uc29sZS5sb2coYXVkaW9FbGVtZW50KTtcblxuICAgICAgICAvL3Bhc3NpbmcgZWxlbWVudCBpbnRvIGF1ZGlvIGNvbnRleHQgdG8gY3JlYXRlIGlucHV0IG5vZGVcbiAgICAgICAgY29uc3QgdHJhY2sgPSBhdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvRWxlbWVudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRyYWNrKTtcbiAgICAgICAgdHJhY2suY29ubmVjdChhdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgICAgIC8vc2VsZWN0aW5nIG91ciBwbGF5IGJ1dHRvblxuICAgICAgICBjb25zdCBwbGF5RWxlbWVudCA9IHBsYXlCdXR0b24uY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhwbGF5RWxlbWVudCk7XG4gICAgfSwgW10pO1xuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgcmVmPXthdWRpb30gY2xhc3NOYW1lPVwiYXVkaW8tcGxheWVyXCI+XG4gICAgICAgICAgICA8YXVkaW8gc3JjPVwiLi9hdWRpby9kZWJ1c3N5Lm1wM1wiPjwvYXVkaW8+XG4gICAgICAgICAgICA8ZGl2IHJlZj17cGxheUJ1dHRvbn0gb25DbGljaz17aGFuZGxlUGxheX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXBsYXlpbmc9XCJmYWxzZVwiIHJvbGU9XCJzd2l0Y2hcIiBhcmlhLWNoZWNrZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QbGF5L1BhdXNlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiQXVkaW9Db250cm9sIiwicHJvcHMiLCJhdWRpbyIsInVzZVJlZiIsInBsYXlCdXR0b24iLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJ1c2VTdGF0ZSIsImhhbmRsZVBsYXkiLCJhdWRpb0NvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJzdGF0ZSIsInJlc3VtZSIsImF1ZGlvRWxlbWVudCIsInBsYXkiLCJwYXVzZSIsIndpbmRvdyIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsInRyYWNrIiwiY3JlYXRlTWVkaWFFbGVtZW50U291cmNlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwicGxheUVsZW1lbnQiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJzcmMiLCJvbkNsaWNrIiwiYnV0dG9uIiwiZGF0YS1wbGF5aW5nIiwicm9sZSIsImFyaWEtY2hlY2tlZCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/audioControl.jsx\n"));

/***/ })

});