"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/case_study",{

/***/ "./pages/components/audioControl.jsx":
/*!*******************************************!*\
  !*** ./pages/components/audioControl.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioControl; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _toolTip_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolTip.jsx */ \"./pages/components/toolTip.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction AudioControl() {\n    _s();\n    let audio = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    let playButton = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const [isPlaying, setIsPlaying] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    function handlePlay() {\n        const audioContext = new AudioContext();\n        const audioElement = audio.current.querySelector(\"audio\");\n        // check if context is in suspended state (autoplay policy for accessibility)\n        if (audioContext.state === \"suspended\") {\n            audioContext.resume();\n        }\n        //Play or pause track depending on state \n        if (!isPlaying) {\n            console.log(\"I have been clicked\");\n            audioElement.play();\n            setIsPlaying(true);\n        } else {\n            audioElement.pause();\n            setIsPlaying(false);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // creating instance of audio context that gives us access to features and functions of webAudio API\n        const AudioContext1 = window.AudioContext || window.webkitAudioContext;\n        const audioContext = new AudioContext1();\n        //get audio element\n        const audioElement = audio.current.querySelector(\"audio\");\n        // console.log(audioElement);\n        // //passing element into audio context to create input node - unneccesary code \n        // const track = audioContext.createMediaElementSource(audioElement);\n        // console.log(track);\n        // track.connect(audioContext.destination);\n        //selecting our play button\n        const playElement = playButton.current.querySelector(\"button\");\n    // console.log(playElement);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: audio,\n        className: \"audio-player\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                src: \"./audio/debussy.mp3\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: playButton,\n                onClick: handlePlay,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_toolTip_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    text: \"Press play to listen to Prelude to the Afternoon of a Faun by Debussy.\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        \"data-playing\": \"false\",\n                        role: \"switch\",\n                        \"aria-checked\": \"false\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"⏯\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n_s(AudioControl, \"/tQt6dGtFZ24jfqAij/AOvS/d+4=\");\n_c = AudioControl;\nvar _c;\n$RefreshReg$(_c, \"AudioControl\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2F1ZGlvQ29udHJvbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTDtBQUVyQixTQUFTRyxlQUFlOztJQUNuQyxJQUFJQyxRQUFRSixtREFBWSxDQUFDLElBQUk7SUFDN0IsSUFBSU0sYUFBYU4sbURBQVksQ0FBQyxJQUFJO0lBRWxDLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUixxREFBYyxDQUFDLEtBQUs7SUFFdEQsU0FBU1UsYUFBWTtRQUNqQixNQUFNQyxlQUFlLElBQUlDO1FBQ3pCLE1BQU1DLGVBQWVULE1BQU1VLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDO1FBRWpELDZFQUE2RTtRQUM3RSxJQUFJSixhQUFhSyxLQUFLLEtBQUssYUFBWTtZQUNuQ0wsYUFBYU0sTUFBTTtRQUN2QixDQUFDO1FBRUcseUNBQXlDO1FBQ3pDLElBQUksQ0FBQ1YsV0FBVTtZQUNYVyxRQUFRQyxHQUFHLENBQUM7WUFDWk4sYUFBYU8sSUFBSTtZQUNqQlosYUFBYSxJQUFJO1FBQ3JCLE9BQU87WUFDSEssYUFBYVEsS0FBSztZQUNsQmIsYUFBYSxLQUFLO1FBQ3RCLENBQUM7SUFDVDtJQUVBUCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osb0dBQW9HO1FBQ3BHLE1BQU1XLGdCQUFlVSxPQUFPVixZQUFZLElBQUlVLE9BQU9DLGtCQUFrQjtRQUNyRSxNQUFNWixlQUFlLElBQUlDO1FBRXpCLG1CQUFtQjtRQUNuQixNQUFNQyxlQUFlVCxNQUFNVSxPQUFPLENBQUNDLGFBQWEsQ0FBQztRQUNqRCw2QkFBNkI7UUFFN0IsZ0ZBQWdGO1FBQ2hGLHFFQUFxRTtRQUNyRSxzQkFBc0I7UUFDdEIsMkNBQTJDO1FBRTNDLDJCQUEyQjtRQUMzQixNQUFNUyxjQUFjbEIsV0FBV1EsT0FBTyxDQUFDQyxhQUFhLENBQUM7SUFDckQsNEJBQTRCO0lBQ2hDLEdBQUcsRUFBRTtJQUdMLHFCQUNJLDhEQUFDVTtRQUFJQyxLQUFLdEI7UUFBT3VCLFdBQVU7OzBCQUN2Qiw4REFBQ3ZCO2dCQUFNd0IsS0FBSTs7Ozs7OzBCQUNYLDhEQUFDSDtnQkFBSUMsS0FBS3BCO2dCQUFZdUIsU0FBU25COzBCQUMzQiw0RUFBQ1Isb0RBQU9BO29CQUFDNEIsTUFBSzs4QkFDViw0RUFBQ0M7d0JBQU9DLGdCQUFhO3dCQUFRQyxNQUFLO3dCQUFTQyxnQkFBYTtrQ0FDcEQsNEVBQUNDO3NDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTOUIsQ0FBQztHQTdEdUJoQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2F1ZGlvQ29udHJvbC5qc3g/Y2UxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sVGlwLmpzeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1ZGlvQ29udHJvbCgpIHtcbiAgICBsZXQgYXVkaW8gPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgbGV0IHBsYXlCdXR0b24gPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlUGxheSgpeyBcbiAgICAgICAgY29uc3QgYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICBjb25zdCBhdWRpb0VsZW1lbnQgPSBhdWRpby5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCJhdWRpb1wiKTsgXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgY29udGV4dCBpcyBpbiBzdXNwZW5kZWQgc3RhdGUgKGF1dG9wbGF5IHBvbGljeSBmb3IgYWNjZXNzaWJpbGl0eSlcbiAgICAgICAgaWYgKGF1ZGlvQ29udGV4dC5zdGF0ZSA9PT0gXCJzdXNwZW5kZWRcIil7XG4gICAgICAgICAgICBhdWRpb0NvbnRleHQucmVzdW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICAgICAgLy9QbGF5IG9yIHBhdXNlIHRyYWNrIGRlcGVuZGluZyBvbiBzdGF0ZSBcbiAgICAgICAgICAgIGlmICghaXNQbGF5aW5nKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgaGF2ZSBiZWVuIGNsaWNrZWRcIik7XG4gICAgICAgICAgICAgICAgYXVkaW9FbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF1ZGlvRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHNldElzUGxheWluZyhmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBjcmVhdGluZyBpbnN0YW5jZSBvZiBhdWRpbyBjb250ZXh0IHRoYXQgZ2l2ZXMgdXMgYWNjZXNzIHRvIGZlYXR1cmVzIGFuZCBmdW5jdGlvbnMgb2Ygd2ViQXVkaW8gQVBJXG4gICAgICAgIGNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICAgICAgY29uc3QgYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gICAgICAgIC8vZ2V0IGF1ZGlvIGVsZW1lbnRcbiAgICAgICAgY29uc3QgYXVkaW9FbGVtZW50ID0gYXVkaW8uY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiYXVkaW9cIik7IFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhdWRpb0VsZW1lbnQpO1xuXG4gICAgICAgIC8vIC8vcGFzc2luZyBlbGVtZW50IGludG8gYXVkaW8gY29udGV4dCB0byBjcmVhdGUgaW5wdXQgbm9kZSAtIHVubmVjY2VzYXJ5IGNvZGUgXG4gICAgICAgIC8vIGNvbnN0IHRyYWNrID0gYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpb0VsZW1lbnQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0cmFjayk7XG4gICAgICAgIC8vIHRyYWNrLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgICAgICAvL3NlbGVjdGluZyBvdXIgcGxheSBidXR0b25cbiAgICAgICAgY29uc3QgcGxheUVsZW1lbnQgPSBwbGF5QnV0dG9uLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGxheUVsZW1lbnQpO1xuICAgIH0sIFtdKTtcblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IHJlZj17YXVkaW99IGNsYXNzTmFtZT1cImF1ZGlvLXBsYXllclwiPlxuICAgICAgICAgICAgPGF1ZGlvIHNyYz1cIi4vYXVkaW8vZGVidXNzeS5tcDNcIj48L2F1ZGlvPlxuICAgICAgICAgICAgPGRpdiByZWY9e3BsYXlCdXR0b259IG9uQ2xpY2s9e2hhbmRsZVBsYXl9PlxuICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJQcmVzcyBwbGF5IHRvIGxpc3RlbiB0byBQcmVsdWRlIHRvIHRoZSBBZnRlcm5vb24gb2YgYSBGYXVuIGJ5IERlYnVzc3kuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1wbGF5aW5nPVwiZmFsc2VcIiByb2xlPVwic3dpdGNoXCIgYXJpYS1jaGVja2VkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAg4o+vXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e3BsYXlJY29ufSBhbHQ9XCJwbGF5IGJ5IFlhcm9zbGF2IFNhbW95bG92IGZyb20gPGEgaHJlZj0naHR0cHM6Ly90aGVub3VucHJvamVjdC5jb20vYnJvd3NlL2ljb25zL3Rlcm0vcGxheS8nIHRhcmdldD0nX2JsYW5rJyB0aXRsZT0ncGxheSBJY29ucyc+Tm91biBQcm9qZWN0PC9hPlwiIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJUb29sdGlwIiwiQXVkaW9Db250cm9sIiwiYXVkaW8iLCJ1c2VSZWYiLCJwbGF5QnV0dG9uIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwidXNlU3RhdGUiLCJoYW5kbGVQbGF5IiwiYXVkaW9Db250ZXh0IiwiQXVkaW9Db250ZXh0IiwiYXVkaW9FbGVtZW50IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGF0ZSIsInJlc3VtZSIsImNvbnNvbGUiLCJsb2ciLCJwbGF5IiwicGF1c2UiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJwbGF5RWxlbWVudCIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsInNyYyIsIm9uQ2xpY2siLCJ0ZXh0IiwiYnV0dG9uIiwiZGF0YS1wbGF5aW5nIiwicm9sZSIsImFyaWEtY2hlY2tlZCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/audioControl.jsx\n"));

/***/ })

});