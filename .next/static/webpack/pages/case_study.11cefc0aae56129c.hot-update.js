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

/***/ "./pages/case_study.jsx":
/*!******************************!*\
  !*** ./pages/case_study.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CaseStudy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav */ \"./pages/components/nav.jsx\");\n/* harmony import */ var _components_audioControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/audioControl */ \"./pages/components/audioControl.jsx\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst caseStudyData = [\n    {\n        id: 1,\n        title: \"Agavos Group\",\n        subheader: \"Website Redesign\",\n        goal: \"In this design case study, our goal was to redesign the website of an individual recruitment agency that specializes in the solar industry. Our primary objective was to highlight the agency's placement services for both companies and individuals, with a focus on optimizing the website for relevant SEO keywords.\",\n        userStory: \"For this landing page redesign we had two user stories: 1) As a specialized job seeker, I want to get placed at a new company, so that I can get a job in the solar industry. 2) As a solar company, I want to find specialized candidates, so that I can build an effective team.\",\n        targetAudience: \"Companies and job seekers in the solar industry.\",\n        // This can be hardcoded into the site layout \n        // processTitle: \"PROCESS\"\n        userFlowImages: [],\n        description: \"This is placeholder text for an explanation of design decisions.\",\n        challenge: \"This is placeholder text for a design challenge\",\n        solution: \"This is placeholder text for a design solution\",\n        keyFeatures: \"KEY FEATURE\",\n        functionality: \"FUNCTION\",\n        hifiImages: [],\n        // This can be hardcoded into the site layout\n        // feedbackTitle: \"FEEDBACK\"\n        analytics: \"Analytics placeholder text\",\n        data: \"Data placeholder text\"\n    }\n];\nconst Card = (param)=>{\n    let { content , title  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"details\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-header\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-content\",\n                children: content\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Card;\nfunction CaseStudy(props) {\n    _s();\n    const { id , title , subheader , goal , userStory , targetAudience , userFlowImages , description , challenge , solution , keyFeatures , functionality , hifiImages , analytics , data  } = caseStudyData[0];\n    const subheaderRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(subheaderRef.current, {\n            x: 0,\n            duration: 2.5,\n            ease: \"Power2.easeOut\",\n            opacity: 1\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"title\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"title subheader\",\n                ref: subheaderRef,\n                children: subheader\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"description-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"details-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                content: goal,\n                                title: \"GOAL\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                content: userStory,\n                                title: \"USER STORY\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                content: targetAudience,\n                                title: \"TARGET AUDIENCE\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"wireframe-container\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_audioControl__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, this);\n}\n_s(CaseStudy, \"vwaQjSEzvD+1tFLwA1C5m06dOtI=\");\n_c1 = CaseStudy;\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"CaseStudy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXNlX3N0dWR5LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1M7QUFDa0I7QUFDN0I7QUFFeEIsTUFBTUksZ0JBQWdCO0lBQ2xCO1FBQ0lDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxXQUFXO1FBQ1hDLE1BQU07UUFDTkMsV0FBVztRQUNYQyxnQkFBZ0I7UUFDaEIsOENBQThDO1FBQzlDLDBCQUEwQjtRQUMxQkMsZ0JBQWdCLEVBQUU7UUFDbEJDLGFBQWE7UUFDYkMsV0FBVztRQUNYQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsZUFBZTtRQUNmQyxZQUFZLEVBQUU7UUFDZCw2Q0FBNkM7UUFDN0MsNEJBQTRCO1FBQzVCQyxXQUFXO1FBQ1hDLE1BQU07SUFDVjtDQUNIO0FBRUQsTUFBTUMsT0FBTyxTQUF1QjtRQUF0QixFQUFFQyxRQUFPLEVBQUVmLE1BQUssRUFBQztJQUUzQixxQkFDSSw4REFBQ2dCO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDVmpCOzs7Ozs7MEJBRUwsOERBQUNnQjtnQkFBSUMsV0FBVTswQkFDVkY7Ozs7Ozs7Ozs7OztBQUlqQjtLQVpNRDtBQWNTLFNBQVNJLFVBQVVDLEtBQUssRUFBQzs7SUFDcEMsTUFBTSxFQUNGcEIsR0FBRSxFQUNGQyxNQUFLLEVBQ0xDLFVBQVMsRUFDVEMsS0FBSSxFQUNKQyxVQUFTLEVBQ1RDLGVBQWMsRUFDZEMsZUFBYyxFQUNkQyxZQUFXLEVBQ1hDLFVBQVMsRUFDVEMsU0FBUSxFQUNSQyxZQUFXLEVBQ1hDLGNBQWEsRUFDYkMsV0FBVSxFQUNWQyxVQUFTLEVBQ1RDLEtBQUksRUFDTixHQUFHZixhQUFhLENBQUMsRUFBRTtJQUVwQixNQUFNc0IsZUFBZTFCLG1EQUFZO0lBRWpDQSxzREFBZSxDQUFDLElBQU07UUFDbkJHLCtDQUFPLENBQUN1QixhQUFhSSxPQUFPLEVBQUU7WUFBQ0MsR0FBRztZQUFHQyxVQUFVO1lBQUtDLE1BQU07WUFBa0JDLFNBQVM7UUFBQztJQUN6RjtJQUdKLHFCQUNPLDhEQUFDWjs7MEJBQ0csOERBQUNBO2dCQUFJQyxXQUFVOzBCQUNWakI7Ozs7OzswQkFFTCw4REFBQ2dCO2dCQUFJQyxXQUFVO2dCQUFrQlksS0FBS1Q7MEJBQ2pDbkI7Ozs7OzswQkFFTCw4REFBQ2U7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNIO2dDQUFLQyxTQUFTYjtnQ0FBTUYsT0FBTTs7Ozs7OzBDQUMzQiw4REFBQ2M7Z0NBQUtDLFNBQVNaO2dDQUFXSCxPQUFNOzs7Ozs7MENBQ2hDLDhEQUFDYztnQ0FBS0MsU0FBU1g7Z0NBQWdCSixPQUFNOzs7Ozs7Ozs7Ozs7a0NBRXpDLDhEQUFDZ0I7d0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OzswQkFHbkIsOERBQUNyQixnRUFBWUE7Ozs7OzBCQUNiLDhEQUFDRCx1REFBR0E7Ozs7Ozs7Ozs7O0FBR2hCLENBQUM7R0EvQ3VCdUI7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FzZV9zdHVkeS5qc3g/MmVjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi9jb21wb25lbnRzL25hdlwiO1xuaW1wb3J0IEF1ZGlvQ29udHJvbCBmcm9tIFwiLi9jb21wb25lbnRzL2F1ZGlvQ29udHJvbFwiO1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5cbmNvbnN0IGNhc2VTdHVkeURhdGEgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdGl0bGU6IFwiQWdhdm9zIEdyb3VwXCIsXG4gICAgICAgIHN1YmhlYWRlcjogXCJXZWJzaXRlIFJlZGVzaWduXCIsXG4gICAgICAgIGdvYWw6IFwiSW4gdGhpcyBkZXNpZ24gY2FzZSBzdHVkeSwgb3VyIGdvYWwgd2FzIHRvIHJlZGVzaWduIHRoZSB3ZWJzaXRlIG9mIGFuIGluZGl2aWR1YWwgcmVjcnVpdG1lbnQgYWdlbmN5IHRoYXQgc3BlY2lhbGl6ZXMgaW4gdGhlIHNvbGFyIGluZHVzdHJ5LiBPdXIgcHJpbWFyeSBvYmplY3RpdmUgd2FzIHRvIGhpZ2hsaWdodCB0aGUgYWdlbmN5J3MgcGxhY2VtZW50IHNlcnZpY2VzIGZvciBib3RoIGNvbXBhbmllcyBhbmQgaW5kaXZpZHVhbHMsIHdpdGggYSBmb2N1cyBvbiBvcHRpbWl6aW5nIHRoZSB3ZWJzaXRlIGZvciByZWxldmFudCBTRU8ga2V5d29yZHMuXCIsXG4gICAgICAgIHVzZXJTdG9yeTogXCJGb3IgdGhpcyBsYW5kaW5nIHBhZ2UgcmVkZXNpZ24gd2UgaGFkIHR3byB1c2VyIHN0b3JpZXM6IDEpIEFzIGEgc3BlY2lhbGl6ZWQgam9iIHNlZWtlciwgSSB3YW50IHRvIGdldCBwbGFjZWQgYXQgYSBuZXcgY29tcGFueSwgc28gdGhhdCBJIGNhbiBnZXQgYSBqb2IgaW4gdGhlIHNvbGFyIGluZHVzdHJ5LiAyKSBBcyBhIHNvbGFyIGNvbXBhbnksIEkgd2FudCB0byBmaW5kIHNwZWNpYWxpemVkIGNhbmRpZGF0ZXMsIHNvIHRoYXQgSSBjYW4gYnVpbGQgYW4gZWZmZWN0aXZlIHRlYW0uXCIsXG4gICAgICAgIHRhcmdldEF1ZGllbmNlOiBcIkNvbXBhbmllcyBhbmQgam9iIHNlZWtlcnMgaW4gdGhlIHNvbGFyIGluZHVzdHJ5LlwiLFxuICAgICAgICAvLyBUaGlzIGNhbiBiZSBoYXJkY29kZWQgaW50byB0aGUgc2l0ZSBsYXlvdXQgXG4gICAgICAgIC8vIHByb2Nlc3NUaXRsZTogXCJQUk9DRVNTXCJcbiAgICAgICAgdXNlckZsb3dJbWFnZXM6IFtdLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHBsYWNlaG9sZGVyIHRleHQgZm9yIGFuIGV4cGxhbmF0aW9uIG9mIGRlc2lnbiBkZWNpc2lvbnMuXCIsXG4gICAgICAgIGNoYWxsZW5nZTogXCJUaGlzIGlzIHBsYWNlaG9sZGVyIHRleHQgZm9yIGEgZGVzaWduIGNoYWxsZW5nZVwiLFxuICAgICAgICBzb2x1dGlvbjogXCJUaGlzIGlzIHBsYWNlaG9sZGVyIHRleHQgZm9yIGEgZGVzaWduIHNvbHV0aW9uXCIsXG4gICAgICAgIGtleUZlYXR1cmVzOiBcIktFWSBGRUFUVVJFXCIsXG4gICAgICAgIGZ1bmN0aW9uYWxpdHk6IFwiRlVOQ1RJT05cIixcbiAgICAgICAgaGlmaUltYWdlczogW10sXG4gICAgICAgIC8vIFRoaXMgY2FuIGJlIGhhcmRjb2RlZCBpbnRvIHRoZSBzaXRlIGxheW91dFxuICAgICAgICAvLyBmZWVkYmFja1RpdGxlOiBcIkZFRURCQUNLXCJcbiAgICAgICAgYW5hbHl0aWNzOiBcIkFuYWx5dGljcyBwbGFjZWhvbGRlciB0ZXh0XCIsXG4gICAgICAgIGRhdGE6IFwiRGF0YSBwbGFjZWhvbGRlciB0ZXh0XCJcbiAgICB9XG5dO1xuXG5jb25zdCBDYXJkID0gKHsgY29udGVudCwgdGl0bGV9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXNlU3R1ZHkocHJvcHMpe1xuICAgIGNvbnN0IHsgXG4gICAgICAgIGlkLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgc3ViaGVhZGVyLCBcbiAgICAgICAgZ29hbCwgXG4gICAgICAgIHVzZXJTdG9yeSwgXG4gICAgICAgIHRhcmdldEF1ZGllbmNlLFxuICAgICAgICB1c2VyRmxvd0ltYWdlcyxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYWxsZW5nZSxcbiAgICAgICAgc29sdXRpb24sXG4gICAgICAgIGtleUZlYXR1cmVzLFxuICAgICAgICBmdW5jdGlvbmFsaXR5LCBcbiAgICAgICAgaGlmaUltYWdlcyxcbiAgICAgICAgYW5hbHl0aWNzLFxuICAgICAgICBkYXRhXG4gICAgIH0gPSBjYXNlU3R1ZHlEYXRhWzBdO1xuXG4gICAgIGNvbnN0IHN1YmhlYWRlclJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdzYXAudG8oc3ViaGVhZGVyUmVmLmN1cnJlbnQsIHt4OiAwLCBkdXJhdGlvbjogMi41LCBlYXNlOiBcIlBvd2VyMi5lYXNlT3V0XCIsIG9wYWNpdHk6IDF9KTtcbiAgICAgfSk7XG5cblxuIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgc3ViaGVhZGVyXCIgcmVmPXtzdWJoZWFkZXJSZWZ9PlxuICAgICAgICAgICAgICAgIHtzdWJoZWFkZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjb250ZW50PXtnb2FsfSB0aXRsZT1cIkdPQUxcIj48L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNvbnRlbnQ9e3VzZXJTdG9yeX0gdGl0bGU9XCJVU0VSIFNUT1JZXCI+PC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjb250ZW50PXt0YXJnZXRBdWRpZW5jZX0gdGl0bGU9XCJUQVJHRVQgQVVESUVOQ0VcIj48L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXJlZnJhbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxBdWRpb0NvbnRyb2w+PC9BdWRpb0NvbnRyb2w+XG4gICAgICAgICAgICA8TmF2PjwvTmF2PlxuICAgIDwvZGl2PlxuIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJOYXYiLCJBdWRpb0NvbnRyb2wiLCJnc2FwIiwiY2FzZVN0dWR5RGF0YSIsImlkIiwidGl0bGUiLCJzdWJoZWFkZXIiLCJnb2FsIiwidXNlclN0b3J5IiwidGFyZ2V0QXVkaWVuY2UiLCJ1c2VyRmxvd0ltYWdlcyIsImRlc2NyaXB0aW9uIiwiY2hhbGxlbmdlIiwic29sdXRpb24iLCJrZXlGZWF0dXJlcyIsImZ1bmN0aW9uYWxpdHkiLCJoaWZpSW1hZ2VzIiwiYW5hbHl0aWNzIiwiZGF0YSIsIkNhcmQiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiQ2FzZVN0dWR5IiwicHJvcHMiLCJzdWJoZWFkZXJSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0byIsImN1cnJlbnQiLCJ4IiwiZHVyYXRpb24iLCJlYXNlIiwib3BhY2l0eSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/case_study.jsx\n"));

/***/ })

});