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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioControl; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction AudioControl() {\n    _s();\n    //creating instance of audio context that gives us access to features and functions of webAudio API\n    const AudioContext = window.AudioContext || window.webkitAudioContext;\n    const audioContext = new AudioContext();\n    let audio = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    let playButton = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const [isPlaying, setIsPlaying] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    function handlePlay() {\n        //check if context is in suspended state (autoplay policy for accessibility)\n        if (audioContext.state === \"suspended\") {\n            audioContext.resume();\n        }\n        //Play or pause track depending on state \n        if (!isPlaying) {\n            audioElement.play();\n            setIsPlaying(true);\n        } else {\n            audioElement.pause();\n            setIsPlaying(false);\n        }\n    }\n    ;\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        //get audio element\n        const audioElement1 = audio.current.querySelector(\"audio\");\n        console.log(audioElement1);\n        //passing element into audio context to create input node\n        const track = audioContext.createMediaElementSource(audioElement1);\n        console.log(track);\n        track.connect(audioContext.destination);\n        //selecting our play button\n        const playElement = playButton.current.querySelector(\"button\");\n        console.log(playElement);\n        //fire an end event when the track is done playing\n        audioElement1.addEventListener(\"ended\", ()=>{\n            playElement.dataset.playing = \"false;\";\n        }, false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: audio,\n        className: \"audio-player\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                src: \"Claude Debussy - Prelude to the Afternoon of a Faun.mp3\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: playButton,\n                onClick: handlePlay,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    \"data-playing\": \"false\",\n                    role: \"switch\",\n                    \"aria-checked\": \"false\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Play/Pause\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n}\n_s(AudioControl, \"/tQt6dGtFZ24jfqAij/AOvS/d+4=\");\n_c = AudioControl;\nvar _c;\n$RefreshReg$(_c, \"AudioControl\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2F1ZGlvQ29udHJvbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUVYLFNBQVNDLGVBQWU7O0lBQ25DLG1HQUFtRztJQUNuRyxNQUFNQyxlQUFlQyxPQUFPRCxZQUFZLElBQUlDLE9BQU9DLGtCQUFrQjtJQUNyRSxNQUFNQyxlQUFlLElBQUlIO0lBRXpCLElBQUlJLFFBQVFOLG1EQUFZLENBQUMsSUFBSTtJQUM3QixJQUFJUSxhQUFhUixtREFBWSxDQUFDLElBQUk7SUFFbEMsTUFBTSxDQUFDUyxXQUFXQyxhQUFhLEdBQUdWLHFEQUFjLENBQUMsS0FBSztJQUV0RCxTQUFTWSxhQUFZO1FBQ2hCLDRFQUE0RTtRQUM1RSxJQUFJUCxhQUFhUSxLQUFLLEtBQUssYUFBWTtZQUNwQ1IsYUFBYVMsTUFBTTtRQUN2QixDQUFDO1FBRUQseUNBQXlDO1FBQ3pDLElBQUksQ0FBQ0wsV0FBVTtZQUNYTSxhQUFhQyxJQUFJO1lBQ2pCTixhQUFhLElBQUk7UUFDckIsT0FBTztZQUNISyxhQUFhRSxLQUFLO1lBQ2xCUCxhQUFhLEtBQUs7UUFDdEIsQ0FBQztJQUNMOztJQUVBVixzREFBZSxDQUFDLElBQU07UUFFbEIsbUJBQW1CO1FBQ25CLE1BQU1lLGdCQUFlVCxNQUFNYSxPQUFPLENBQUNDLGFBQWEsQ0FBQztRQUNqREMsUUFBUUMsR0FBRyxDQUFDUDtRQUVaLHlEQUF5RDtRQUN6RCxNQUFNUSxRQUFRbEIsYUFBYW1CLHdCQUF3QixDQUFDVDtRQUNwRE0sUUFBUUMsR0FBRyxDQUFDQztRQUNaQSxNQUFNRSxPQUFPLENBQUNwQixhQUFhcUIsV0FBVztRQUV0QywyQkFBMkI7UUFDM0IsTUFBTUMsY0FBY25CLFdBQVdXLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDO1FBQ3JEQyxRQUFRQyxHQUFHLENBQUNLO1FBRVAsa0RBQWtEO1FBQ25EWixjQUFhYSxnQkFBZ0IsQ0FDN0IsU0FDQSxJQUFNO1lBQ0ZELFlBQVlFLE9BQU8sQ0FBQ0MsT0FBTyxHQUFHO1FBQ2xDLEdBQ0EsS0FBSztJQUtiLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDQztRQUFJQyxLQUFLMUI7UUFBTzJCLFdBQVU7OzBCQUN2Qiw4REFBQzNCO2dCQUFNNEIsS0FBSTs7Ozs7OzBCQUNYLDhEQUFDSDtnQkFBSUMsS0FBS3hCO2dCQUFZMkIsU0FBU3ZCOzBCQUMzQiw0RUFBQ3dCO29CQUFPQyxnQkFBYTtvQkFBUUMsTUFBSztvQkFBU0MsZ0JBQWE7OEJBQ3BELDRFQUFDQztrQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQixDQUFDO0dBaEV1QnZDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvYXVkaW9Db250cm9sLmpzeD9jZTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1ZGlvQ29udHJvbCgpIHtcbiAgICAvL2NyZWF0aW5nIGluc3RhbmNlIG9mIGF1ZGlvIGNvbnRleHQgdGhhdCBnaXZlcyB1cyBhY2Nlc3MgdG8gZmVhdHVyZXMgYW5kIGZ1bmN0aW9ucyBvZiB3ZWJBdWRpbyBBUElcbiAgICBjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG4gICAgY29uc3QgYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gICAgbGV0IGF1ZGlvID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGxldCBwbGF5QnV0dG9uID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVBsYXkoKXtcbiAgICAgICAgIC8vY2hlY2sgaWYgY29udGV4dCBpcyBpbiBzdXNwZW5kZWQgc3RhdGUgKGF1dG9wbGF5IHBvbGljeSBmb3IgYWNjZXNzaWJpbGl0eSlcbiAgICAgICAgIGlmIChhdWRpb0NvbnRleHQuc3RhdGUgPT09IFwic3VzcGVuZGVkXCIpe1xuICAgICAgICAgICAgYXVkaW9Db250ZXh0LnJlc3VtZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9QbGF5IG9yIHBhdXNlIHRyYWNrIGRlcGVuZGluZyBvbiBzdGF0ZSBcbiAgICAgICAgaWYgKCFpc1BsYXlpbmcpe1xuICAgICAgICAgICAgYXVkaW9FbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF1ZGlvRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgICAgc2V0SXNQbGF5aW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgLy9nZXQgYXVkaW8gZWxlbWVudFxuICAgICAgICBjb25zdCBhdWRpb0VsZW1lbnQgPSBhdWRpby5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCJhdWRpb1wiKTsgXG4gICAgICAgIGNvbnNvbGUubG9nKGF1ZGlvRWxlbWVudCk7XG5cbiAgICAgICAgLy9wYXNzaW5nIGVsZW1lbnQgaW50byBhdWRpbyBjb250ZXh0IHRvIGNyZWF0ZSBpbnB1dCBub2RlXG4gICAgICAgIGNvbnN0IHRyYWNrID0gYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpb0VsZW1lbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0cmFjayk7XG4gICAgICAgIHRyYWNrLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgICAgICAvL3NlbGVjdGluZyBvdXIgcGxheSBidXR0b25cbiAgICAgICAgY29uc3QgcGxheUVsZW1lbnQgPSBwbGF5QnV0dG9uLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocGxheUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgLy9maXJlIGFuIGVuZCBldmVudCB3aGVuIHRoZSB0cmFjayBpcyBkb25lIHBsYXlpbmdcbiAgICAgICAgICAgIGF1ZGlvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJlbmRlZFwiLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBsYXlFbGVtZW50LmRhdGFzZXQucGxheWluZyA9IFwiZmFsc2U7XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcblxuICAgICAgIFxuXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgcmVmPXthdWRpb30gY2xhc3NOYW1lPVwiYXVkaW8tcGxheWVyXCI+XG4gICAgICAgICAgICA8YXVkaW8gc3JjPVwiQ2xhdWRlIERlYnVzc3kgLSBQcmVsdWRlIHRvIHRoZSBBZnRlcm5vb24gb2YgYSBGYXVuLm1wM1wiPjwvYXVkaW8+XG4gICAgICAgICAgICA8ZGl2IHJlZj17cGxheUJ1dHRvbn0gb25DbGljaz17aGFuZGxlUGxheX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXBsYXlpbmc9XCJmYWxzZVwiIHJvbGU9XCJzd2l0Y2hcIiBhcmlhLWNoZWNrZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QbGF5L1BhdXNlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJBdWRpb0NvbnRyb2wiLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJhdWRpb0NvbnRleHQiLCJhdWRpbyIsInVzZVJlZiIsInBsYXlCdXR0b24iLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJ1c2VTdGF0ZSIsImhhbmRsZVBsYXkiLCJzdGF0ZSIsInJlc3VtZSIsImF1ZGlvRWxlbWVudCIsInBsYXkiLCJwYXVzZSIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsInRyYWNrIiwiY3JlYXRlTWVkaWFFbGVtZW50U291cmNlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwicGxheUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGF0YXNldCIsInBsYXlpbmciLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJzcmMiLCJvbkNsaWNrIiwiYnV0dG9uIiwiZGF0YS1wbGF5aW5nIiwicm9sZSIsImFyaWEtY2hlY2tlZCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/audioControl.jsx\n"));

/***/ })

});