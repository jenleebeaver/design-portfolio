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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// import { Routes } from \"@config/routes\";\n\nvar _s = $RefreshSig$();\n\nfunction Nav() {\n    _s();\n    const [menuVisible, setMenuVisible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [isSubMenuOpen, setIsSubMenuOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const menuRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const handleMenuClick = ()=>{\n        setMenuVisible(!menuVisible);\n    };\n    const handleMouseEnter = ()=>{\n        setIsSubMenuOpen(true);\n    };\n    const handleMouseLeave = ()=>{\n        setIsSubMenuOpen(false);\n    };\n    const subMenuItems = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"submenu\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: \"Nipit\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: \"Clean-a-Can\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n    const listItemStyle = {\n        position: \"relative\",\n        height: isSubMenuOpen ? subMenuItems.props.children.length * 60 : 45\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function handleClickOutside(event) {\n            if (menuRef.current && !menuRef.current.contains(event.target)) {\n                setMenuVisible(false);\n            }\n        }\n        document.addEventListener(\"click\", handleClickOutside, true);\n        return ()=>{\n            document.removeEventListener(\"click\", handleClickOutside, true);\n        };\n    }, [\n        menuRef\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"nav-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"nav\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"logo-link\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"JB\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"nav-links\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dropdown-menu-container\",\n                            ref: menuRef,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    onClick: handleMenuClick,\n                                    children: \"PROJECTS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this),\n                                menuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"dropdown-menu \".concat(menuVisible ? \"open\" : \"\"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: \"Agavos Group\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: \"First Republic Bank\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            onMouseEnter: handleMouseEnter,\n                                            onMouseLeave: handleMouseLeave,\n                                            style: listItemStyle,\n                                            children: [\n                                                \"ImForza ⬇\",\n                                                isSubMenuOpen && subMenuItems\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: \"Carol Kline\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: \"Stylebee\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"contact-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"CONTACT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/components/nav.jsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\n_s(Nav, \"WmW8kM6tSTyFmMgSgmywYCueTNI=\");\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25hdi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwyQ0FBMkM7OztBQUNGO0FBRTFCLFNBQVNFLE1BQUs7O0lBQ3pCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSixxREFBYyxDQUFDLEtBQUs7SUFDMUQsTUFBTSxDQUFDTSxlQUFlQyxpQkFBaUIsR0FBR1AscURBQWMsQ0FBQyxLQUFLO0lBQzlELE1BQU1RLFVBQVVSLG1EQUFZLENBQUMsSUFBSTtJQUVqQyxNQUFNVSxrQkFBa0IsSUFBTTtRQUMxQk4sZUFBZSxDQUFDRDtJQUNwQjtJQUVBLE1BQU1RLG1CQUFtQixJQUFNO1FBQzNCSixpQkFBaUIsSUFBSTtJQUN6QjtJQUVBLE1BQU1LLG1CQUFtQixJQUFNO1FBQzNCTCxpQkFBaUIsS0FBSztJQUMxQjtJQUVBLE1BQU1NLDZCQUNGLDhEQUFDQztRQUFHQyxXQUFVOzswQkFDViw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0E7MEJBQUc7Ozs7Ozs7Ozs7OztJQUlaLE1BQU1DLGdCQUFnQjtRQUNsQkMsVUFBVTtRQUNWQyxRQUFRYixnQkFBZ0JPLGFBQWFPLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLEdBQUcsS0FBSyxFQUFFO0lBQ3hFO0lBRUFyQixnREFBU0EsQ0FBQyxJQUFNO1FBQ1osU0FBU3NCLG1CQUFtQkMsS0FBSyxFQUFDO1lBQzlCLElBQUloQixRQUFRaUIsT0FBTyxJQUFJLENBQUNqQixRQUFRaUIsT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sR0FBRTtnQkFDM0R2QixlQUFlLEtBQUs7WUFDeEIsQ0FBQztRQUNMO1FBRUF3QixTQUFTQyxnQkFBZ0IsQ0FBQyxTQUFTTixvQkFBb0IsSUFBSTtRQUUzRCxPQUFPLElBQU07WUFDVEssU0FBU0UsbUJBQW1CLENBQUMsU0FBU1Asb0JBQW9CLElBQUk7UUFDbEU7SUFDSixHQUFHO1FBQUNmO0tBQVE7SUFFWixxQkFDSSw4REFBQ3VCO1FBQUloQixXQUFVO2tCQUNYLDRFQUFDZ0I7WUFBSWhCLFdBQVU7OzhCQUNYLDhEQUFDZ0I7b0JBQUloQixXQUFVOzhCQUNYLDRFQUFDaUI7a0NBQUU7Ozs7Ozs7Ozs7OzhCQUVQLDhEQUFDRDtvQkFBSWhCLFdBQVU7O3NDQUNYLDhEQUFDZ0I7NEJBQUloQixXQUFVOzRCQUEwQmtCLEtBQUt6Qjs7OENBQzFDLDhEQUFDd0I7b0NBQUVFLFNBQVN4Qjs4Q0FBaUI7Ozs7OztnQ0FDNUJQLDZCQUNHLDhEQUFDVztvQ0FBR0MsV0FBVyxpQkFBMkMsT0FBMUJaLGNBQWMsU0FBUyxFQUFFOztzREFDckQsOERBQUNhO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNBO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNBOzRDQUFHbUIsY0FBY3hCOzRDQUNkeUIsY0FBY3hCOzRDQUNkeUIsT0FBT3BCOztnREFBZTtnREFFckJYLGlCQUFpQk87Ozs7Ozs7c0RBRXRCLDhEQUFDRztzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQTtzREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUloQiw4REFBQ2U7NEJBQUloQixXQUFVO3NDQUNYLDRFQUFDaUI7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0IsQ0FBQztHQTFFdUI5QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL25hdi5qc3g/Yzg1YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGNvbmZpZy9yb3V0ZXNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpe1xuICAgIGNvbnN0IFttZW51VmlzaWJsZSwgc2V0TWVudVZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc1N1Yk1lbnVPcGVuLCBzZXRJc1N1Yk1lbnVPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBtZW51UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRNZW51VmlzaWJsZSghbWVudVZpc2libGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1N1Yk1lbnVPcGVuKHRydWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1N1Yk1lbnVPcGVuKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3ViTWVudUl0ZW1zID0gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3VibWVudVwiPlxuICAgICAgICAgICAgPGxpPk5pcGl0PC9saT5cbiAgICAgICAgICAgIDxsaT5DbGVhbi1hLUNhbjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgKTtcblxuICAgIGNvbnN0IGxpc3RJdGVtU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBoZWlnaHQ6IGlzU3ViTWVudU9wZW4gPyBzdWJNZW51SXRlbXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoICogNjAgOiA0NVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpe1xuICAgICAgICAgICAgaWYgKG1lbnVSZWYuY3VycmVudCAmJiAhbWVudVJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpe1xuICAgICAgICAgICAgICAgIHNldE1lbnVWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGUsIHRydWUpO1xuICAgICAgICB9O1xuICAgIH0sIFttZW51UmVmXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiPiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGE+SkI8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWNvbnRhaW5lclwiIHJlZj17bWVudVJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9PlBST0pFQ1RTPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAge21lbnVWaXNpYmxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgZHJvcGRvd24tbWVudSAke21lbnVWaXNpYmxlID8gJ29wZW4nIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BZ2F2b3MgR3JvdXA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Rmlyc3QgUmVwdWJsaWMgQmFuazwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2xpc3RJdGVtU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1Gb3J6YSDirIdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1N1Yk1lbnVPcGVuICYmIHN1Yk1lbnVJdGVtc30gICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DYXJvbCBLbGluZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TdHlsZWJlZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q09OVEFDVDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTmF2IiwibWVudVZpc2libGUiLCJzZXRNZW51VmlzaWJsZSIsInVzZVN0YXRlIiwiaXNTdWJNZW51T3BlbiIsInNldElzU3ViTWVudU9wZW4iLCJtZW51UmVmIiwidXNlUmVmIiwiaGFuZGxlTWVudUNsaWNrIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJzdWJNZW51SXRlbXMiLCJ1bCIsImNsYXNzTmFtZSIsImxpIiwibGlzdEl0ZW1TdHlsZSIsInBvc2l0aW9uIiwiaGVpZ2h0IiwicHJvcHMiLCJjaGlsZHJlbiIsImxlbmd0aCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImEiLCJyZWYiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/nav.jsx\n"));

/***/ })

});