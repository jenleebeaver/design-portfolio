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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioControl; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction AudioControl(props) {\n    _s();\n    let audio = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    let playButton = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const [isPlaying, setIsPlaying] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    function handlePlay() {\n        //check if context is in suspended state (autoplay policy for accessibility)\n        // if (audioContext.state === \"suspended\"){\n        //     audioContext.resume();\n        // }\n        // //Play or pause track depending on state \n        // if (!isPlaying){\n        //     audioElement.play();\n        //     setIsPlaying(true);\n        // } else {\n        //     audioElement.pause();\n        //     setIsPlaying(false)\n        // }\n        const audioEl = audio.current.querySelector(\"audio\");\n        audioEl.play();\n        console.log();\n    }\n    ;\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        //creating instance of audio context that gives us access to features and functions of webAudio API\n        const AudioContext = window.AudioContext || window.webkitAudioContext;\n        const audioContext = new AudioContext();\n        //get audio element\n        const audioElement = audio.current.querySelector(\"audio\");\n        console.log(audioElement);\n        //passing element into audio context to create input node\n        const track = audioContext.createMediaElementSource(audioElement);\n        console.log(track);\n        track.connect(audioContext.destination);\n        //selecting our play button\n        const playElement = playButton.current.querySelector(\"button\");\n        console.log(playElement);\n        //fire an end event when the track is done playing\n        audioElement.addEventListener(\"ended\", ()=>{\n            playElement.dataset.playing = \"false;\";\n        }, false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: audio,\n        className: \"audio-player\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                src: \"./audio/debussy.mp3\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: playButton,\n                onClick: handlePlay,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    \"data-playing\": \"false\",\n                    role: \"switch\",\n                    \"aria-checked\": \"false\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Play/Pause\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(AudioControl, \"/tQt6dGtFZ24jfqAij/AOvS/d+4=\");\n_c = AudioControl;\nvar _c;\n$RefreshReg$(_c, \"AudioControl\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2F1ZGlvQ29udHJvbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUVYLFNBQVNDLGFBQWFDLEtBQUssRUFBRTs7SUFDeEMsSUFBSUMsUUFBUUgsbURBQVksQ0FBQyxJQUFJO0lBQzdCLElBQUlLLGFBQWFMLG1EQUFZLENBQUMsSUFBSTtJQUVsQyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AscURBQWMsQ0FBQyxLQUFLO0lBRXRELFNBQVNTLGFBQVk7UUFDakIsNEVBQTRFO1FBQzVFLDJDQUEyQztRQUMzQyw2QkFBNkI7UUFDN0IsSUFBSTtRQUVKLDRDQUE0QztRQUM1QyxtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQixXQUFXO1FBQ1gsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQixJQUFJO1FBQ0osTUFBTUMsVUFBVVAsTUFBTVEsT0FBTyxDQUFDQyxhQUFhLENBQUM7UUFDNUNGLFFBQVFHLElBQUk7UUFDWkMsUUFBUUMsR0FBRztJQUNmOztJQUVBZixzREFBZSxDQUFDLElBQU07UUFDbEIsbUdBQW1HO1FBQ25HLE1BQU1pQixlQUFlQyxPQUFPRCxZQUFZLElBQUlDLE9BQU9DLGtCQUFrQjtRQUNyRSxNQUFNQyxlQUFlLElBQUlIO1FBRXpCLG1CQUFtQjtRQUNuQixNQUFNSSxlQUFlbEIsTUFBTVEsT0FBTyxDQUFDQyxhQUFhLENBQUM7UUFDakRFLFFBQVFDLEdBQUcsQ0FBQ007UUFFWix5REFBeUQ7UUFDekQsTUFBTUMsUUFBUUYsYUFBYUcsd0JBQXdCLENBQUNGO1FBQ3BEUCxRQUFRQyxHQUFHLENBQUNPO1FBQ1pBLE1BQU1FLE9BQU8sQ0FBQ0osYUFBYUssV0FBVztRQUV0QywyQkFBMkI7UUFDM0IsTUFBTUMsY0FBY3JCLFdBQVdNLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDO1FBQ3JERSxRQUFRQyxHQUFHLENBQUNXO1FBRVAsa0RBQWtEO1FBQ25ETCxhQUFhTSxnQkFBZ0IsQ0FDN0IsU0FDQSxJQUFNO1lBQ0ZELFlBQVlFLE9BQU8sQ0FBQ0MsT0FBTyxHQUFHO1FBQ2xDLEdBQ0EsS0FBSztJQUtiLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDQztRQUFJQyxLQUFLNUI7UUFBTzZCLFdBQVU7OzBCQUN2Qiw4REFBQzdCO2dCQUFNOEIsS0FBSTs7Ozs7OzBCQUNYLDhEQUFDSDtnQkFBSUMsS0FBSzFCO2dCQUFZNkIsU0FBU3pCOzBCQUMzQiw0RUFBQzBCO29CQUFPQyxnQkFBYTtvQkFBUUMsTUFBSztvQkFBU0MsZ0JBQWE7OEJBQ3BELDRFQUFDQztrQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQixDQUFDO0dBbEV1QnRDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvYXVkaW9Db250cm9sLmpzeD9jZTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1ZGlvQ29udHJvbChwcm9wcykge1xuICAgIGxldCBhdWRpbyA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBsZXQgcGxheUJ1dHRvbiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVQbGF5KCl7XG4gICAgICAgIC8vY2hlY2sgaWYgY29udGV4dCBpcyBpbiBzdXNwZW5kZWQgc3RhdGUgKGF1dG9wbGF5IHBvbGljeSBmb3IgYWNjZXNzaWJpbGl0eSlcbiAgICAgICAgLy8gaWYgKGF1ZGlvQ29udGV4dC5zdGF0ZSA9PT0gXCJzdXNwZW5kZWRcIil7XG4gICAgICAgIC8vICAgICBhdWRpb0NvbnRleHQucmVzdW1lKCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyAvL1BsYXkgb3IgcGF1c2UgdHJhY2sgZGVwZW5kaW5nIG9uIHN0YXRlIFxuICAgICAgICAvLyBpZiAoIWlzUGxheWluZyl7XG4gICAgICAgIC8vICAgICBhdWRpb0VsZW1lbnQucGxheSgpO1xuICAgICAgICAvLyAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgYXVkaW9FbGVtZW50LnBhdXNlKCk7XG4gICAgICAgIC8vICAgICBzZXRJc1BsYXlpbmcoZmFsc2UpXG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc3QgYXVkaW9FbCA9IGF1ZGlvLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcImF1ZGlvXCIpO1xuICAgICAgICBhdWRpb0VsLnBsYXkoKVxuICAgICAgICBjb25zb2xlLmxvZygpXG4gICAgfTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vY3JlYXRpbmcgaW5zdGFuY2Ugb2YgYXVkaW8gY29udGV4dCB0aGF0IGdpdmVzIHVzIGFjY2VzcyB0byBmZWF0dXJlcyBhbmQgZnVuY3Rpb25zIG9mIHdlYkF1ZGlvIEFQSVxuICAgICAgICBjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG4gICAgICAgIGNvbnN0IGF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcblxuICAgICAgICAvL2dldCBhdWRpbyBlbGVtZW50XG4gICAgICAgIGNvbnN0IGF1ZGlvRWxlbWVudCA9IGF1ZGlvLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcImF1ZGlvXCIpOyBcbiAgICAgICAgY29uc29sZS5sb2coYXVkaW9FbGVtZW50KTtcblxuICAgICAgICAvL3Bhc3NpbmcgZWxlbWVudCBpbnRvIGF1ZGlvIGNvbnRleHQgdG8gY3JlYXRlIGlucHV0IG5vZGVcbiAgICAgICAgY29uc3QgdHJhY2sgPSBhdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvRWxlbWVudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRyYWNrKTtcbiAgICAgICAgdHJhY2suY29ubmVjdChhdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgICAgIC8vc2VsZWN0aW5nIG91ciBwbGF5IGJ1dHRvblxuICAgICAgICBjb25zdCBwbGF5RWxlbWVudCA9IHBsYXlCdXR0b24uY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhwbGF5RWxlbWVudCk7XG5cbiAgICAgICAgICAgICAvL2ZpcmUgYW4gZW5kIGV2ZW50IHdoZW4gdGhlIHRyYWNrIGlzIGRvbmUgcGxheWluZ1xuICAgICAgICAgICAgYXVkaW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImVuZGVkXCIsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGxheUVsZW1lbnQuZGF0YXNldC5wbGF5aW5nID0gXCJmYWxzZTtcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApO1xuXG4gICAgICAgXG5cbiAgICB9LCBbXSlcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiByZWY9e2F1ZGlvfSBjbGFzc05hbWU9XCJhdWRpby1wbGF5ZXJcIj5cbiAgICAgICAgICAgIDxhdWRpbyBzcmM9XCIuL2F1ZGlvL2RlYnVzc3kubXAzXCI+PC9hdWRpbz5cbiAgICAgICAgICAgIDxkaXYgcmVmPXtwbGF5QnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVQbGF5fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtcGxheWluZz1cImZhbHNlXCIgcm9sZT1cInN3aXRjaFwiIGFyaWEtY2hlY2tlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlBsYXkvUGF1c2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkF1ZGlvQ29udHJvbCIsInByb3BzIiwiYXVkaW8iLCJ1c2VSZWYiLCJwbGF5QnV0dG9uIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwidXNlU3RhdGUiLCJoYW5kbGVQbGF5IiwiYXVkaW9FbCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJhdWRpb0NvbnRleHQiLCJhdWRpb0VsZW1lbnQiLCJ0cmFjayIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsInBsYXlFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGFzZXQiLCJwbGF5aW5nIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwic3JjIiwib25DbGljayIsImJ1dHRvbiIsImRhdGEtcGxheWluZyIsInJvbGUiLCJhcmlhLWNoZWNrZWQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/audioControl.jsx\n"));

/***/ })

});