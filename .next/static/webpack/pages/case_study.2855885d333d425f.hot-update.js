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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CaseStudy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav */ \"./pages/components/nav.jsx\");\n/* harmony import */ var _components_audioControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/audioControl */ \"./pages/components/audioControl.jsx\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst caseStudyData = [\n    {\n        id: 1,\n        title: \"Agavos Group\",\n        subheader: \"Website Redesign\",\n        goal: \"In this design case study, our goal was to redesign the website of an individual recruitment agency that specializes in the solar industry. Our primary objective was to highlight the agency's placement services for both companies and individuals, with a focus on optimizing the website for relevant SEO keywords.\",\n        userStory: \"As a specialized job seeker, I want to get placed at a new company, so that I can get a job in the solar industry and as a solar company, I want to find specialized candidates, so that I can build an effective team.\",\n        targetAudience: \"Companies and job seekers in the solar industry.\",\n        // This can be hardcoded into the site layout \n        // processTitle: \"PROCESS\"\n        wireframeImage: [\n            \"./images/agavos_wireframe.png\"\n        ],\n        userFlowImages: [],\n        description: \"This is placeholder text for an explanation of design decisions.\",\n        challenge: \"This is placeholder text for a design challenge\",\n        solution: \"This is placeholder text for a design solution\",\n        keyFeatures: \"KEY FEATURE\",\n        functionality: \"FUNCTION\",\n        hifiImages: [],\n        // This can be hardcoded into the site layout\n        // feedbackTitle: \"FEEDBACK\"\n        analytics: \"Analytics placeholder text\",\n        data: \"Data placeholder text\"\n    }\n];\nconst Card = (param)=>{\n    let { content , title  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"details\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-header\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-content\",\n                children: content\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Card;\nfunction CaseStudy(props) {\n    _s();\n    const { id , title , subheader , goal , userStory , targetAudience , wireframeImage , userFlowImages , description , challenge , solution , keyFeatures , functionality , hifiImages , analytics , data  } = caseStudyData[0];\n    const subheaderRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(subheaderRef.current, {\n            x: 0,\n            duration: 2.5,\n            ease: \"Power2.easeOut\",\n            opacity: 1\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"casestudy-body\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"title\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"title subheader\",\n                ref: subheaderRef,\n                children: subheader\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"description-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"details-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                content: goal,\n                                title: \"GOAL\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                content: userStory,\n                                title: \"USER STORY\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                content: targetAudience,\n                                title: \"TARGET AUDIENCE\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"wireframe-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: wireframeImage,\n                            alt: \"Hand written wireframe of Agavos Group landing page.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_audioControl__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n        lineNumber: 73,\n        columnNumber: 9\n    }, this);\n}\n_s(CaseStudy, \"vwaQjSEzvD+1tFLwA1C5m06dOtI=\");\n_c1 = CaseStudy;\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"CaseStudy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXNlX3N0dWR5LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1M7QUFDa0I7QUFDN0I7QUFFeEIsTUFBTUksZ0JBQWdCO0lBQ2xCO1FBQ0lDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxXQUFXO1FBQ1hDLE1BQU07UUFDTkMsV0FBVztRQUNYQyxnQkFBZ0I7UUFDaEIsOENBQThDO1FBQzlDLDBCQUEwQjtRQUMxQkMsZ0JBQWdCO1lBQUM7U0FBZ0M7UUFDakRDLGdCQUFnQixFQUFFO1FBQ2xCQyxhQUFhO1FBQ2JDLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxhQUFhO1FBQ2JDLGVBQWU7UUFDZkMsWUFBWSxFQUFFO1FBQ2QsNkNBQTZDO1FBQzdDLDRCQUE0QjtRQUM1QkMsV0FBVztRQUNYQyxNQUFNO0lBQ1Y7Q0FDSDtBQUVELE1BQU1DLE9BQU8sU0FBdUI7UUFBdEIsRUFBRUMsUUFBTyxFQUFFaEIsTUFBSyxFQUFDO0lBRTNCLHFCQUNJLDhEQUFDaUI7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNWbEI7Ozs7OzswQkFFTCw4REFBQ2lCO2dCQUFJQyxXQUFVOzBCQUNWRjs7Ozs7Ozs7Ozs7O0FBSWpCO0tBWk1EO0FBY1MsU0FBU0ksVUFBVUMsS0FBSyxFQUFDOztJQUNwQyxNQUFNLEVBQ0ZyQixHQUFFLEVBQ0ZDLE1BQUssRUFDTEMsVUFBUyxFQUNUQyxLQUFJLEVBQ0pDLFVBQVMsRUFDVEMsZUFBYyxFQUNkQyxlQUFjLEVBQ2RDLGVBQWMsRUFDZEMsWUFBVyxFQUNYQyxVQUFTLEVBQ1RDLFNBQVEsRUFDUkMsWUFBVyxFQUNYQyxjQUFhLEVBQ2JDLFdBQVUsRUFDVkMsVUFBUyxFQUNUQyxLQUFJLEVBQ04sR0FBR2hCLGFBQWEsQ0FBQyxFQUFFO0lBRXBCLE1BQU11QixlQUFlM0IsbURBQVk7SUFFakNBLHNEQUFlLENBQUMsSUFBTTtRQUNuQkcsK0NBQU8sQ0FBQ3dCLGFBQWFJLE9BQU8sRUFBRTtZQUFDQyxHQUFHO1lBQUdDLFVBQVU7WUFBS0MsTUFBTTtZQUFrQkMsU0FBUztRQUFDO0lBQ3pGO0lBR0oscUJBQ08sOERBQUNaO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDVmxCOzs7Ozs7MEJBRUwsOERBQUNpQjtnQkFBSUMsV0FBVTtnQkFBa0JZLEtBQUtUOzBCQUNqQ3BCOzs7Ozs7MEJBRUwsOERBQUNnQjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0g7Z0NBQUtDLFNBQVNkO2dDQUFNRixPQUFNOzs7Ozs7MENBQzNCLDhEQUFDZTtnQ0FBS0MsU0FBU2I7Z0NBQVdILE9BQU07Ozs7OzswQ0FDaEMsOERBQUNlO2dDQUFLQyxTQUFTWjtnQ0FBZ0JKLE9BQU07Ozs7Ozs7Ozs7OztrQ0FFekMsOERBQUNpQjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ2E7NEJBQUlDLEtBQUszQjs0QkFBZ0I0QixLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdEMsOERBQUNyQyxnRUFBWUE7Ozs7OzBCQUNiLDhEQUFDRCx1REFBR0E7Ozs7Ozs7Ozs7O0FBR2hCLENBQUM7R0FqRHVCd0I7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FzZV9zdHVkeS5qc3g/MmVjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi9jb21wb25lbnRzL25hdlwiO1xuaW1wb3J0IEF1ZGlvQ29udHJvbCBmcm9tIFwiLi9jb21wb25lbnRzL2F1ZGlvQ29udHJvbFwiO1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5cbmNvbnN0IGNhc2VTdHVkeURhdGEgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdGl0bGU6IFwiQWdhdm9zIEdyb3VwXCIsXG4gICAgICAgIHN1YmhlYWRlcjogXCJXZWJzaXRlIFJlZGVzaWduXCIsXG4gICAgICAgIGdvYWw6IFwiSW4gdGhpcyBkZXNpZ24gY2FzZSBzdHVkeSwgb3VyIGdvYWwgd2FzIHRvIHJlZGVzaWduIHRoZSB3ZWJzaXRlIG9mIGFuIGluZGl2aWR1YWwgcmVjcnVpdG1lbnQgYWdlbmN5IHRoYXQgc3BlY2lhbGl6ZXMgaW4gdGhlIHNvbGFyIGluZHVzdHJ5LiBPdXIgcHJpbWFyeSBvYmplY3RpdmUgd2FzIHRvIGhpZ2hsaWdodCB0aGUgYWdlbmN5J3MgcGxhY2VtZW50IHNlcnZpY2VzIGZvciBib3RoIGNvbXBhbmllcyBhbmQgaW5kaXZpZHVhbHMsIHdpdGggYSBmb2N1cyBvbiBvcHRpbWl6aW5nIHRoZSB3ZWJzaXRlIGZvciByZWxldmFudCBTRU8ga2V5d29yZHMuXCIsXG4gICAgICAgIHVzZXJTdG9yeTogXCJBcyBhIHNwZWNpYWxpemVkIGpvYiBzZWVrZXIsIEkgd2FudCB0byBnZXQgcGxhY2VkIGF0IGEgbmV3IGNvbXBhbnksIHNvIHRoYXQgSSBjYW4gZ2V0IGEgam9iIGluIHRoZSBzb2xhciBpbmR1c3RyeSBhbmQgYXMgYSBzb2xhciBjb21wYW55LCBJIHdhbnQgdG8gZmluZCBzcGVjaWFsaXplZCBjYW5kaWRhdGVzLCBzbyB0aGF0IEkgY2FuIGJ1aWxkIGFuIGVmZmVjdGl2ZSB0ZWFtLlwiLFxuICAgICAgICB0YXJnZXRBdWRpZW5jZTogXCJDb21wYW5pZXMgYW5kIGpvYiBzZWVrZXJzIGluIHRoZSBzb2xhciBpbmR1c3RyeS5cIixcbiAgICAgICAgLy8gVGhpcyBjYW4gYmUgaGFyZGNvZGVkIGludG8gdGhlIHNpdGUgbGF5b3V0IFxuICAgICAgICAvLyBwcm9jZXNzVGl0bGU6IFwiUFJPQ0VTU1wiXG4gICAgICAgIHdpcmVmcmFtZUltYWdlOiBbJy4vaW1hZ2VzL2FnYXZvc193aXJlZnJhbWUucG5nJ10sXG4gICAgICAgIHVzZXJGbG93SW1hZ2VzOiBbXSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBwbGFjZWhvbGRlciB0ZXh0IGZvciBhbiBleHBsYW5hdGlvbiBvZiBkZXNpZ24gZGVjaXNpb25zLlwiLFxuICAgICAgICBjaGFsbGVuZ2U6IFwiVGhpcyBpcyBwbGFjZWhvbGRlciB0ZXh0IGZvciBhIGRlc2lnbiBjaGFsbGVuZ2VcIixcbiAgICAgICAgc29sdXRpb246IFwiVGhpcyBpcyBwbGFjZWhvbGRlciB0ZXh0IGZvciBhIGRlc2lnbiBzb2x1dGlvblwiLFxuICAgICAgICBrZXlGZWF0dXJlczogXCJLRVkgRkVBVFVSRVwiLFxuICAgICAgICBmdW5jdGlvbmFsaXR5OiBcIkZVTkNUSU9OXCIsXG4gICAgICAgIGhpZmlJbWFnZXM6IFtdLFxuICAgICAgICAvLyBUaGlzIGNhbiBiZSBoYXJkY29kZWQgaW50byB0aGUgc2l0ZSBsYXlvdXRcbiAgICAgICAgLy8gZmVlZGJhY2tUaXRsZTogXCJGRUVEQkFDS1wiXG4gICAgICAgIGFuYWx5dGljczogXCJBbmFseXRpY3MgcGxhY2Vob2xkZXIgdGV4dFwiLFxuICAgICAgICBkYXRhOiBcIkRhdGEgcGxhY2Vob2xkZXIgdGV4dFwiXG4gICAgfVxuXTtcblxuY29uc3QgQ2FyZCA9ICh7IGNvbnRlbnQsIHRpdGxlfSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FzZVN0dWR5KHByb3BzKXtcbiAgICBjb25zdCB7IFxuICAgICAgICBpZCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHN1YmhlYWRlciwgXG4gICAgICAgIGdvYWwsIFxuICAgICAgICB1c2VyU3RvcnksIFxuICAgICAgICB0YXJnZXRBdWRpZW5jZSxcbiAgICAgICAgd2lyZWZyYW1lSW1hZ2UsXG4gICAgICAgIHVzZXJGbG93SW1hZ2VzLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2hhbGxlbmdlLFxuICAgICAgICBzb2x1dGlvbixcbiAgICAgICAga2V5RmVhdHVyZXMsXG4gICAgICAgIGZ1bmN0aW9uYWxpdHksIFxuICAgICAgICBoaWZpSW1hZ2VzLFxuICAgICAgICBhbmFseXRpY3MsXG4gICAgICAgIGRhdGFcbiAgICAgfSA9IGNhc2VTdHVkeURhdGFbMF07XG5cbiAgICAgY29uc3Qgc3ViaGVhZGVyUmVmID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ3NhcC50byhzdWJoZWFkZXJSZWYuY3VycmVudCwge3g6IDAsIGR1cmF0aW9uOiAyLjUsIGVhc2U6IFwiUG93ZXIyLmVhc2VPdXRcIiwgb3BhY2l0eTogMX0pO1xuICAgICB9KTtcblxuXG4gcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHN1YmhlYWRlclwiIHJlZj17c3ViaGVhZGVyUmVmfT5cbiAgICAgICAgICAgICAgICB7c3ViaGVhZGVyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY29udGVudD17Z29hbH0gdGl0bGU9XCJHT0FMXCI+PC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjb250ZW50PXt1c2VyU3Rvcnl9IHRpdGxlPVwiVVNFUiBTVE9SWVwiPjwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY29udGVudD17dGFyZ2V0QXVkaWVuY2V9IHRpdGxlPVwiVEFSR0VUIEFVRElFTkNFXCI+PC9DYXJkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lyZWZyYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d2lyZWZyYW1lSW1hZ2V9IGFsdD1cIkhhbmQgd3JpdHRlbiB3aXJlZnJhbWUgb2YgQWdhdm9zIEdyb3VwIGxhbmRpbmcgcGFnZS5cIj48L2ltZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEF1ZGlvQ29udHJvbD48L0F1ZGlvQ29udHJvbD5cbiAgICAgICAgICAgIDxOYXY+PC9OYXY+XG4gICAgPC9kaXY+XG4gKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdiIsIkF1ZGlvQ29udHJvbCIsImdzYXAiLCJjYXNlU3R1ZHlEYXRhIiwiaWQiLCJ0aXRsZSIsInN1YmhlYWRlciIsImdvYWwiLCJ1c2VyU3RvcnkiLCJ0YXJnZXRBdWRpZW5jZSIsIndpcmVmcmFtZUltYWdlIiwidXNlckZsb3dJbWFnZXMiLCJkZXNjcmlwdGlvbiIsImNoYWxsZW5nZSIsInNvbHV0aW9uIiwia2V5RmVhdHVyZXMiLCJmdW5jdGlvbmFsaXR5IiwiaGlmaUltYWdlcyIsImFuYWx5dGljcyIsImRhdGEiLCJDYXJkIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsIkNhc2VTdHVkeSIsInByb3BzIiwic3ViaGVhZGVyUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidG8iLCJjdXJyZW50IiwieCIsImR1cmF0aW9uIiwiZWFzZSIsIm9wYWNpdHkiLCJyZWYiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/case_study.jsx\n"));

/***/ })

});