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

/***/ "./pages/components/nav.jsx":
/*!**********************************!*\
  !*** ./pages/components/nav.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// import { Routes } from \"@config/routes\";\n\nvar _s = $RefreshSig$();\n\nfunction Nav() {\n    _s();\n    const [menuVisible, setMenuVisible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [isSubMenuOpen, setIsSubMenuOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const handleMenuClick = ()=>{\n        setMenuVisible(!menuVisible);\n    };\n    const handleMouseEnter = ()=>{\n        setIsSubMenuOpen(true);\n    };\n    const handleMouseLeave = ()=>{\n        setIsSubMenuOpen(false);\n    };\n    const subMenuItems = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"submenu\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: \"Nipit\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: \"Clean-a-Can\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n    const listItemStyle = {\n        position: \"relative\",\n        height: isSubMenuOpen ? subMenuItems.props.children.length * 30 : 16\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"nav-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"logo-link\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"JB\"\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav-links\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown-menu-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                onClick: handleMenuClick,\n                                children: \"PROJECTS\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, this),\n                            menuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"dropdown-menu \".concat(menuVisible ? \"open\" : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"Agavos Group\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        onMouseEnter: handleMouseEnter,\n                                        onMouseLeave: handleMouseLeave,\n                                        style: listItemStyle,\n                                        children: [\n                                            \"First Republic Bank\",\n                                            isSubMenuOpen && subMenuItems\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"ImForza\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"Carol Kline\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"Stylebee\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"contact-link\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"CONTACT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n_s(Nav, \"u8HUzwSvb+2sLUObTNJLvORy88Y=\");\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25hdi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwyQ0FBMkM7OztBQUNGO0FBRTFCLFNBQVNFLE1BQUs7O0lBQ3pCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSixxREFBYyxDQUFDLEtBQUs7SUFDMUQsTUFBTSxDQUFDTSxlQUFlQyxpQkFBaUIsR0FBR1AscURBQWMsQ0FBQyxLQUFLO0lBRTlELE1BQU1RLGtCQUFrQixJQUFNO1FBQzFCSixlQUFlLENBQUNEO0lBQ3BCO0lBRUEsTUFBTU0sbUJBQW1CLElBQU07UUFDM0JGLGlCQUFpQixJQUFJO0lBQ3pCO0lBRUEsTUFBTUcsbUJBQW1CLElBQU07UUFDM0JILGlCQUFpQixLQUFLO0lBQzFCO0lBRUEsTUFBTUksNkJBQ0YsOERBQUNDO1FBQUdDLFdBQVU7OzBCQUNWLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQTswQkFBRzs7Ozs7Ozs7Ozs7O0lBSVosTUFBTUMsZ0JBQWdCO1FBQ2xCQyxVQUFVO1FBQ1ZDLFFBQVFYLGdCQUFnQkssYUFBYU8sS0FBSyxDQUFDQyxRQUFRLENBQUNDLE1BQU0sR0FBRyxLQUFLLEVBQUU7SUFDeEU7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSVIsV0FBVTs7MEJBQ1gsOERBQUNRO2dCQUFJUixXQUFVOzBCQUNYLDRFQUFDUzs4QkFBRTs7Ozs7Ozs7Ozs7MEJBRVAsOERBQUNEO2dCQUFJUixXQUFVOztrQ0FDWCw4REFBQ1E7d0JBQUlSLFdBQVU7OzBDQUNYLDhEQUFDUztnQ0FBRUMsU0FBU2Y7MENBQWlCOzs7Ozs7NEJBQzVCTCw2QkFDRyw4REFBQ1M7Z0NBQUdDLFdBQVcsaUJBQTJDLE9BQTFCVixjQUFjLFNBQVMsRUFBRTs7a0RBQ3JELDhEQUFDVztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTt3Q0FBR1UsY0FBY2Y7d0NBQ2RnQixjQUFjZjt3Q0FDZGdCLE9BQU9YOzs0Q0FBZTs0Q0FFckJULGlCQUFpQks7Ozs7Ozs7a0RBRXRCLDhEQUFDRztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUloQiw4REFBQ087d0JBQUlSLFdBQVU7a0NBQ1gsNEVBQUNTO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QixDQUFDO0dBekR1QnBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvbmF2LmpzeD9jODVhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAY29uZmlnL3JvdXRlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCl7XG4gICAgY29uc3QgW21lbnVWaXNpYmxlLCBzZXRNZW51VmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzU3ViTWVudU9wZW4sIHNldElzU3ViTWVudU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRNZW51VmlzaWJsZSghbWVudVZpc2libGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1N1Yk1lbnVPcGVuKHRydWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1N1Yk1lbnVPcGVuKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3ViTWVudUl0ZW1zID0gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3VibWVudVwiPlxuICAgICAgICAgICAgPGxpPk5pcGl0PC9saT5cbiAgICAgICAgICAgIDxsaT5DbGVhbi1hLUNhbjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgKTtcblxuICAgIGNvbnN0IGxpc3RJdGVtU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBoZWlnaHQ6IGlzU3ViTWVudU9wZW4gPyBzdWJNZW51SXRlbXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoICogMzAgOiAxNlxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj4gXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tbGlua1wiPlxuICAgICAgICAgICAgICAgIDxhPkpCPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlTWVudUNsaWNrfT5QUk9KRUNUUzwvYT5cbiAgICAgICAgICAgICAgICAgICAge21lbnVWaXNpYmxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2Bkcm9wZG93bi1tZW51ICR7bWVudVZpc2libGUgPyAnb3BlbicgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWdhdm9zIEdyb3VwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17bGlzdEl0ZW1TdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IFJlcHVibGljIEJhbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzU3ViTWVudU9wZW4gJiYgc3ViTWVudUl0ZW1zfSAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbUZvcnphPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q2Fyb2wgS2xpbmU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TdHlsZWJlZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPkNPTlRBQ1Q8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTmF2IiwibWVudVZpc2libGUiLCJzZXRNZW51VmlzaWJsZSIsInVzZVN0YXRlIiwiaXNTdWJNZW51T3BlbiIsInNldElzU3ViTWVudU9wZW4iLCJoYW5kbGVNZW51Q2xpY2siLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsInN1Yk1lbnVJdGVtcyIsInVsIiwiY2xhc3NOYW1lIiwibGkiLCJsaXN0SXRlbVN0eWxlIiwicG9zaXRpb24iLCJoZWlnaHQiLCJwcm9wcyIsImNoaWxkcmVuIiwibGVuZ3RoIiwiZGl2IiwiYSIsIm9uQ2xpY2siLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/nav.jsx\n"));

/***/ })

});