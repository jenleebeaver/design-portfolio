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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioControl; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction AudioControl(param) {\n    let { text , children  } = param;\n    _s();\n    let audio = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    let playButton = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const [isPlaying, setIsPlaying] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [showTooltip, setShowTooltip] = useState(false);\n    function handleMouseEnter() {\n        setShowTooltip(true);\n    }\n    ;\n    function handleMouseLeave() {\n        setShowTooltip(false);\n    }\n    ;\n    function handlePlay() {\n        const audioContext = new AudioContext();\n        const audioElement = audio.current.querySelector(\"audio\");\n        // check if context is in suspended state (autoplay policy for accessibility)\n        if (audioContext.state === \"suspended\") {\n            audioContext.resume();\n        }\n        //Play or pause track depending on state \n        if (!isPlaying) {\n            audioElement.play();\n            setIsPlaying(true);\n        } else {\n            audioElement.pause();\n            setIsPlaying(false);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // creating instance of audio context that gives us access to features and functions of webAudio API\n        const AudioContext1 = window.AudioContext || window.webkitAudioContext;\n        const audioContext = new AudioContext1();\n        //get audio element\n        const audioElement = audio.current.querySelector(\"audio\");\n        console.log(audioElement);\n        // //passing element into audio context to create input node - unneccesary code \n        // const track = audioContext.createMediaElementSource(audioElement);\n        // console.log(track);\n        // track.connect(audioContext.destination);\n        //selecting our play button\n        const playElement = playButton.current.querySelector(\"button\");\n        console.log(playElement);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: audio,\n        className: \"audio-player\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                src: \"./audio/debussy.mp3\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: playButton,\n                onClick: handlePlay,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    \"data-playing\": \"false\",\n                    role: \"switch\",\n                    \"aria-checked\": \"false\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"⏯\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/audioControl.jsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n}\n_s(AudioControl, \"Fw8KJF1BRtzo/iJ6AVyM3rc6VAI=\");\n_c = AudioControl;\nvar _c;\n$RefreshReg$(_c, \"AudioControl\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2F1ZGlvQ29udHJvbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUUxQixTQUFTRSxhQUFhLEtBQWtCLEVBQUU7UUFBcEIsRUFBRUMsS0FBSSxFQUFFQyxTQUFRLEVBQUUsR0FBbEI7O0lBQ2pDLElBQUlDLFFBQVFMLG1EQUFZLENBQUMsSUFBSTtJQUM3QixJQUFJTyxhQUFhUCxtREFBWSxDQUFDLElBQUk7SUFFbEMsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdULHFEQUFjLENBQUMsS0FBSztJQUN0RCxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR0YsU0FBUyxLQUFLO0lBRXBELFNBQVNHLG1CQUFrQjtRQUN2QkQsZUFBZSxJQUFJO0lBQ3ZCOztJQUVBLFNBQVNFLG1CQUFtQjtRQUN4QkYsZUFBZSxLQUFLO0lBQ3hCOztJQUVBLFNBQVNHLGFBQVk7UUFDakIsTUFBTUMsZUFBZSxJQUFJQztRQUN6QixNQUFNQyxlQUFlYixNQUFNYyxPQUFPLENBQUNDLGFBQWEsQ0FBQztRQUVqRCw2RUFBNkU7UUFDN0UsSUFBSUosYUFBYUssS0FBSyxLQUFLLGFBQVk7WUFDbkNMLGFBQWFNLE1BQU07UUFDdkIsQ0FBQztRQUVHLHlDQUF5QztRQUN6QyxJQUFJLENBQUNkLFdBQVU7WUFDWFUsYUFBYUssSUFBSTtZQUNqQmQsYUFBYSxJQUFJO1FBQ3JCLE9BQU87WUFDSFMsYUFBYU0sS0FBSztZQUNsQmYsYUFBYSxLQUFLO1FBQ3RCLENBQUM7SUFDVDtJQUVBUixnREFBU0EsQ0FBQyxJQUFNO1FBQ1osb0dBQW9HO1FBQ3BHLE1BQU1nQixnQkFBZVEsT0FBT1IsWUFBWSxJQUFJUSxPQUFPQyxrQkFBa0I7UUFDckUsTUFBTVYsZUFBZSxJQUFJQztRQUV6QixtQkFBbUI7UUFDbkIsTUFBTUMsZUFBZWIsTUFBTWMsT0FBTyxDQUFDQyxhQUFhLENBQUM7UUFDakRPLFFBQVFDLEdBQUcsQ0FBQ1Y7UUFFWixnRkFBZ0Y7UUFDaEYscUVBQXFFO1FBQ3JFLHNCQUFzQjtRQUN0QiwyQ0FBMkM7UUFFM0MsMkJBQTJCO1FBQzNCLE1BQU1XLGNBQWN0QixXQUFXWSxPQUFPLENBQUNDLGFBQWEsQ0FBQztRQUNyRE8sUUFBUUMsR0FBRyxDQUFDQztJQUNoQixHQUFHLEVBQUU7SUFHTCxxQkFDSSw4REFBQ0M7UUFBSUMsS0FBSzFCO1FBQU8yQixXQUFVOzswQkFDdkIsOERBQUMzQjtnQkFBTTRCLEtBQUk7Ozs7OzswQkFDWCw4REFBQ0g7Z0JBQUlDLEtBQUt4QjtnQkFBWTJCLFNBQVNuQjswQkFDM0IsNEVBQUNvQjtvQkFBT0MsZ0JBQWE7b0JBQVFDLE1BQUs7b0JBQVNDLGdCQUFhOzhCQUNwRCw0RUFBQ0M7a0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRMUIsQ0FBQztHQW5FdUJyQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2F1ZGlvQ29udHJvbC5qc3g/Y2UxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWRpb0NvbnRyb2woeyB0ZXh0LCBjaGlsZHJlbiB9KSB7XG4gICAgbGV0IGF1ZGlvID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGxldCBwbGF5QnV0dG9uID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd1Rvb2x0aXAsIHNldFNob3dUb29sdGlwXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoKXtcbiAgICAgICAgc2V0U2hvd1Rvb2x0aXAodHJ1ZSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoKSB7XG4gICAgICAgIHNldFNob3dUb29sdGlwKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlUGxheSgpeyBcbiAgICAgICAgY29uc3QgYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICBjb25zdCBhdWRpb0VsZW1lbnQgPSBhdWRpby5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCJhdWRpb1wiKTsgXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgY29udGV4dCBpcyBpbiBzdXNwZW5kZWQgc3RhdGUgKGF1dG9wbGF5IHBvbGljeSBmb3IgYWNjZXNzaWJpbGl0eSlcbiAgICAgICAgaWYgKGF1ZGlvQ29udGV4dC5zdGF0ZSA9PT0gXCJzdXNwZW5kZWRcIil7XG4gICAgICAgICAgICBhdWRpb0NvbnRleHQucmVzdW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICAgICAgLy9QbGF5IG9yIHBhdXNlIHRyYWNrIGRlcGVuZGluZyBvbiBzdGF0ZSBcbiAgICAgICAgICAgIGlmICghaXNQbGF5aW5nKXtcbiAgICAgICAgICAgICAgICBhdWRpb0VsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXVkaW9FbGVtZW50LnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgc2V0SXNQbGF5aW5nKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGNyZWF0aW5nIGluc3RhbmNlIG9mIGF1ZGlvIGNvbnRleHQgdGhhdCBnaXZlcyB1cyBhY2Nlc3MgdG8gZmVhdHVyZXMgYW5kIGZ1bmN0aW9ucyBvZiB3ZWJBdWRpbyBBUElcbiAgICAgICAgY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgICAgICBjb25zdCBhdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbiAgICAgICAgLy9nZXQgYXVkaW8gZWxlbWVudFxuICAgICAgICBjb25zdCBhdWRpb0VsZW1lbnQgPSBhdWRpby5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCJhdWRpb1wiKTsgXG4gICAgICAgIGNvbnNvbGUubG9nKGF1ZGlvRWxlbWVudCk7XG5cbiAgICAgICAgLy8gLy9wYXNzaW5nIGVsZW1lbnQgaW50byBhdWRpbyBjb250ZXh0IHRvIGNyZWF0ZSBpbnB1dCBub2RlIC0gdW5uZWNjZXNhcnkgY29kZSBcbiAgICAgICAgLy8gY29uc3QgdHJhY2sgPSBhdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvRWxlbWVudCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRyYWNrKTtcbiAgICAgICAgLy8gdHJhY2suY29ubmVjdChhdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgICAgIC8vc2VsZWN0aW5nIG91ciBwbGF5IGJ1dHRvblxuICAgICAgICBjb25zdCBwbGF5RWxlbWVudCA9IHBsYXlCdXR0b24uY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhwbGF5RWxlbWVudCk7XG4gICAgfSwgW10pO1xuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgcmVmPXthdWRpb30gY2xhc3NOYW1lPVwiYXVkaW8tcGxheWVyXCI+XG4gICAgICAgICAgICA8YXVkaW8gc3JjPVwiLi9hdWRpby9kZWJ1c3N5Lm1wM1wiPjwvYXVkaW8+XG4gICAgICAgICAgICA8ZGl2IHJlZj17cGxheUJ1dHRvbn0gb25DbGljaz17aGFuZGxlUGxheX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXBsYXlpbmc9XCJmYWxzZVwiIHJvbGU9XCJzd2l0Y2hcIiBhcmlhLWNoZWNrZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAg4o+vXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17cGxheUljb259IGFsdD1cInBsYXkgYnkgWWFyb3NsYXYgU2Ftb3lsb3YgZnJvbSA8YSBocmVmPSdodHRwczovL3RoZW5vdW5wcm9qZWN0LmNvbS9icm93c2UvaWNvbnMvdGVybS9wbGF5LycgdGFyZ2V0PSdfYmxhbmsnIHRpdGxlPSdwbGF5IEljb25zJz5Ob3VuIFByb2plY3Q8L2E+XCIgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkF1ZGlvQ29udHJvbCIsInRleHQiLCJjaGlsZHJlbiIsImF1ZGlvIiwidXNlUmVmIiwicGxheUJ1dHRvbiIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsInVzZVN0YXRlIiwic2hvd1Rvb2x0aXAiLCJzZXRTaG93VG9vbHRpcCIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwiaGFuZGxlUGxheSIsImF1ZGlvQ29udGV4dCIsIkF1ZGlvQ29udGV4dCIsImF1ZGlvRWxlbWVudCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwic3RhdGUiLCJyZXN1bWUiLCJwbGF5IiwicGF1c2UiLCJ3aW5kb3ciLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjb25zb2xlIiwibG9nIiwicGxheUVsZW1lbnQiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJzcmMiLCJvbkNsaWNrIiwiYnV0dG9uIiwiZGF0YS1wbGF5aW5nIiwicm9sZSIsImFyaWEtY2hlY2tlZCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/audioControl.jsx\n"));

/***/ })

});