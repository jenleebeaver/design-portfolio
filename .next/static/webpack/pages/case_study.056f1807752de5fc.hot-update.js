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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CaseStudy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav */ \"./pages/components/nav.jsx\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n// import AudioControl from \"./components/audioControl\";\n\nconst caseStudyData = [\n    {\n        id: 1,\n        heroImage: [\n            \"./images/agavos-hero-mockup.png\"\n        ],\n        heroAltText: \"Hi fidelity mockup of Agavos hero.  Includes navigation menu with additional information for job seekers, employers, courses, pricing, and an about us page. Also, includes a video of services.\",\n        projectName: \"Agavos Group\",\n        projectDescription: \"is an individually owned recruitment agency specializing in the solar industry.\",\n        goal: \"In this design case study, our goal was to redesign the website of an individual recruitment agency that specializes in the solar industry. Our primary objective was to highlight the agency's placement services for both companies and individuals, with a focus on optimizing the website for relevant SEO keywords.\",\n        userStory: \"As a specialized job seeker, I want to get placed at a new company, so that I can get a job in the solar industry and as a solar company, I want to find specialized candidates, so that I can build an effective team.\",\n        targetAudience: \"Companies and job seekers in the solar industry.\",\n        // This can be hardcoded into the site layout \n        // processTitle: \"PROCESS\"\n        wireframeImage: [\n            \"./images/agavos-wireframe.png\"\n        ],\n        wireframeAltText: \"Hand written wireframe of Agavos Group landing page.\",\n        userFlowImages: [],\n        description: \"This is placeholder text for an explanation of design decisions.\",\n        challenge: \"This is placeholder text for a design challenge\",\n        solution: \"This is placeholder text for a design solution\",\n        keyFeatures: \"KEY FEATURE\",\n        functionality: \"FUNCTION\",\n        hifiImages: [],\n        // This can be hardcoded into the site layout\n        // feedbackTitle: \"FEEDBACK\"\n        analytics: \"Analytics placeholder text\",\n        data: \"Data placeholder text\"\n    }\n];\nconst Card = (param)=>{\n    let { content , title  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"details\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-header\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-content\",\n                children: content\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Card;\nfunction CaseStudy(props) {\n    _s();\n    const { id , heroImage , heroAltText , projectName , projectDescription , goal , userStory , targetAudience , wireframeImage , wireframeAltText , userFlowImages , description , challenge , solution , keyFeatures , functionality , hifiImages , analytics , data  } = caseStudyData[0];\n    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fromTo(imageRef.current, {\n            x: \"-5%\",\n            opacity: 0\n        }, {\n            x: 0,\n            opacity: 1,\n            duration: 2.5,\n            ease: \"power2.out\"\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fullscreen-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: heroImage,\n                    alt: heroAltText,\n                    ref: imageRef\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"casestudy-body\",\n                ref: contentRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: [\n                            projectName,\n                            \" \",\n                            projectDescription\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"description-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"details-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: goal,\n                                        title: \"GOAL\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: userStory,\n                                        title: \"USER STORY\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: targetAudience,\n                                        title: \"TARGET AUDIENCE\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"wireframe-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: wireframeImage,\n                                    alt: wireframeAltText,\n                                    className: \"wireframe-img\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CaseStudy, \"7op1SejEisqiZ9+cHZFXM4vylxY=\");\n_c1 = CaseStudy;\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"CaseStudy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXNlX3N0dWR5LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDYjtBQUNuQyx3REFBd0Q7QUFDaEM7QUFFeEIsTUFBTUssZ0JBQWdCO0lBQ2xCO1FBQ0lDLElBQUk7UUFDSkMsV0FBVztZQUFDO1NBQWtDO1FBQzlDQyxhQUFhO1FBQ2JDLGFBQWE7UUFDYkMsb0JBQW9CO1FBQ3BCQyxNQUFNO1FBQ05DLFdBQVc7UUFDWEMsZ0JBQWdCO1FBQ2hCLDhDQUE4QztRQUM5QywwQkFBMEI7UUFDMUJDLGdCQUFnQjtZQUFDO1NBQWdDO1FBQ2pEQyxrQkFBa0I7UUFDbEJDLGdCQUFnQixFQUFFO1FBQ2xCQyxhQUFhO1FBQ2JDLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxhQUFhO1FBQ2JDLGVBQWU7UUFDZkMsWUFBWSxFQUFFO1FBQ2QsNkNBQTZDO1FBQzdDLDRCQUE0QjtRQUM1QkMsV0FBVztRQUNYQyxNQUFNO0lBQ1Y7Q0FDSDtBQUVELE1BQU1DLE9BQU8sU0FBdUI7UUFBdEIsRUFBRUMsUUFBTyxFQUFFQyxNQUFLLEVBQUM7SUFFM0IscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDVkY7Ozs7OzswQkFFTCw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ1ZIOzs7Ozs7Ozs7Ozs7QUFJakI7S0FaTUQ7QUFjUyxTQUFTSyxVQUFVQyxLQUFLLEVBQUM7O0lBQ3BDLE1BQU0sRUFDRnpCLEdBQUUsRUFDRkMsVUFBUyxFQUNUQyxZQUFXLEVBQ1hDLFlBQVcsRUFDWEMsbUJBQWtCLEVBQ2xCQyxLQUFJLEVBQ0pDLFVBQVMsRUFDVEMsZUFBYyxFQUNkQyxlQUFjLEVBQ2RDLGlCQUFnQixFQUNoQkMsZUFBYyxFQUNkQyxZQUFXLEVBQ1hDLFVBQVMsRUFDVEMsU0FBUSxFQUNSQyxZQUFXLEVBQ1hDLGNBQWEsRUFDYkMsV0FBVSxFQUNWQyxVQUFTLEVBQ1RDLEtBQUksRUFDTixHQUFHbkIsYUFBYSxDQUFDLEVBQUU7SUFFcEIsTUFBTTJCLGFBQWEvQiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQzlCLE1BQU1nQyxXQUFXaEMsNkNBQU1BLENBQUMsSUFBSTtJQUU1QkQsc0RBQWUsQ0FBQyxJQUFNO1FBRW5CSSxtREFBVyxDQUNQNkIsU0FBU0csT0FBTyxFQUNoQjtZQUFFQyxHQUFHO1lBQU9DLFNBQVM7UUFBQyxHQUN0QjtZQUFFRCxHQUFHO1lBQUdDLFNBQVM7WUFBR0MsVUFBVTtZQUFLQyxNQUFNO1FBQVk7SUFFNUQsR0FBRyxFQUFFO0lBR1QscUJBQ0c7OzBCQUNJLDhEQUFDWjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ1k7b0JBQUlDLEtBQUtuQztvQkFBV29DLEtBQUtuQztvQkFBYW9DLEtBQUtYOzs7Ozs7Ozs7OzswQkFFaEQsOERBQUNMO2dCQUFJQyxXQUFVO2dCQUFpQmUsS0FBS1o7O2tDQUNqQyw4REFBQ0o7d0JBQUlDLFdBQVU7OzRCQUNYcEI7NEJBQVk7NEJBQUVDOzs7Ozs7O2tDQUVsQiw4REFBQ2tCO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDSjt3Q0FBS0MsU0FBU2Y7d0NBQU1nQixPQUFNOzs7Ozs7a0RBQzNCLDhEQUFDRjt3Q0FBS0MsU0FBU2Q7d0NBQVdlLE9BQU07Ozs7OztrREFDaEMsOERBQUNGO3dDQUFLQyxTQUFTYjt3Q0FBZ0JjLE9BQU07Ozs7Ozs7Ozs7OzswQ0FFekMsOERBQUNDO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDWTtvQ0FBSUMsS0FBSzVCO29DQUFnQjZCLEtBQUs1QjtvQ0FBa0JjLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUluRSw4REFBQzFCLHVEQUFHQTs7Ozs7Ozs7Ozs7OztBQUloQixDQUFDO0dBNUR1QjJCO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Nhc2Vfc3R1ZHkuanN4PzJlY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2XCI7XG4vLyBpbXBvcnQgQXVkaW9Db250cm9sIGZyb20gXCIuL2NvbXBvbmVudHMvYXVkaW9Db250cm9sXCI7XG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcblxuY29uc3QgY2FzZVN0dWR5RGF0YSA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBoZXJvSW1hZ2U6IFsnLi9pbWFnZXMvYWdhdm9zLWhlcm8tbW9ja3VwLnBuZyddLFxuICAgICAgICBoZXJvQWx0VGV4dDogXCJIaSBmaWRlbGl0eSBtb2NrdXAgb2YgQWdhdm9zIGhlcm8uICBJbmNsdWRlcyBuYXZpZ2F0aW9uIG1lbnUgd2l0aCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGZvciBqb2Igc2Vla2VycywgZW1wbG95ZXJzLCBjb3Vyc2VzLCBwcmljaW5nLCBhbmQgYW4gYWJvdXQgdXMgcGFnZS4gQWxzbywgaW5jbHVkZXMgYSB2aWRlbyBvZiBzZXJ2aWNlcy5cIixcbiAgICAgICAgcHJvamVjdE5hbWU6IFwiQWdhdm9zIEdyb3VwXCIsXG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbjogXCJpcyBhbiBpbmRpdmlkdWFsbHkgb3duZWQgcmVjcnVpdG1lbnQgYWdlbmN5IHNwZWNpYWxpemluZyBpbiB0aGUgc29sYXIgaW5kdXN0cnkuXCIsXG4gICAgICAgIGdvYWw6IFwiSW4gdGhpcyBkZXNpZ24gY2FzZSBzdHVkeSwgb3VyIGdvYWwgd2FzIHRvIHJlZGVzaWduIHRoZSB3ZWJzaXRlIG9mIGFuIGluZGl2aWR1YWwgcmVjcnVpdG1lbnQgYWdlbmN5IHRoYXQgc3BlY2lhbGl6ZXMgaW4gdGhlIHNvbGFyIGluZHVzdHJ5LiBPdXIgcHJpbWFyeSBvYmplY3RpdmUgd2FzIHRvIGhpZ2hsaWdodCB0aGUgYWdlbmN5J3MgcGxhY2VtZW50IHNlcnZpY2VzIGZvciBib3RoIGNvbXBhbmllcyBhbmQgaW5kaXZpZHVhbHMsIHdpdGggYSBmb2N1cyBvbiBvcHRpbWl6aW5nIHRoZSB3ZWJzaXRlIGZvciByZWxldmFudCBTRU8ga2V5d29yZHMuXCIsXG4gICAgICAgIHVzZXJTdG9yeTogXCJBcyBhIHNwZWNpYWxpemVkIGpvYiBzZWVrZXIsIEkgd2FudCB0byBnZXQgcGxhY2VkIGF0IGEgbmV3IGNvbXBhbnksIHNvIHRoYXQgSSBjYW4gZ2V0IGEgam9iIGluIHRoZSBzb2xhciBpbmR1c3RyeSBhbmQgYXMgYSBzb2xhciBjb21wYW55LCBJIHdhbnQgdG8gZmluZCBzcGVjaWFsaXplZCBjYW5kaWRhdGVzLCBzbyB0aGF0IEkgY2FuIGJ1aWxkIGFuIGVmZmVjdGl2ZSB0ZWFtLlwiLFxuICAgICAgICB0YXJnZXRBdWRpZW5jZTogXCJDb21wYW5pZXMgYW5kIGpvYiBzZWVrZXJzIGluIHRoZSBzb2xhciBpbmR1c3RyeS5cIixcbiAgICAgICAgLy8gVGhpcyBjYW4gYmUgaGFyZGNvZGVkIGludG8gdGhlIHNpdGUgbGF5b3V0IFxuICAgICAgICAvLyBwcm9jZXNzVGl0bGU6IFwiUFJPQ0VTU1wiXG4gICAgICAgIHdpcmVmcmFtZUltYWdlOiBbJy4vaW1hZ2VzL2FnYXZvcy13aXJlZnJhbWUucG5nJ10sXG4gICAgICAgIHdpcmVmcmFtZUFsdFRleHQ6IFwiSGFuZCB3cml0dGVuIHdpcmVmcmFtZSBvZiBBZ2F2b3MgR3JvdXAgbGFuZGluZyBwYWdlLlwiLFxuICAgICAgICB1c2VyRmxvd0ltYWdlczogW10sXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgcGxhY2Vob2xkZXIgdGV4dCBmb3IgYW4gZXhwbGFuYXRpb24gb2YgZGVzaWduIGRlY2lzaW9ucy5cIixcbiAgICAgICAgY2hhbGxlbmdlOiBcIlRoaXMgaXMgcGxhY2Vob2xkZXIgdGV4dCBmb3IgYSBkZXNpZ24gY2hhbGxlbmdlXCIsXG4gICAgICAgIHNvbHV0aW9uOiBcIlRoaXMgaXMgcGxhY2Vob2xkZXIgdGV4dCBmb3IgYSBkZXNpZ24gc29sdXRpb25cIixcbiAgICAgICAga2V5RmVhdHVyZXM6IFwiS0VZIEZFQVRVUkVcIixcbiAgICAgICAgZnVuY3Rpb25hbGl0eTogXCJGVU5DVElPTlwiLFxuICAgICAgICBoaWZpSW1hZ2VzOiBbXSxcbiAgICAgICAgLy8gVGhpcyBjYW4gYmUgaGFyZGNvZGVkIGludG8gdGhlIHNpdGUgbGF5b3V0XG4gICAgICAgIC8vIGZlZWRiYWNrVGl0bGU6IFwiRkVFREJBQ0tcIlxuICAgICAgICBhbmFseXRpY3M6IFwiQW5hbHl0aWNzIHBsYWNlaG9sZGVyIHRleHRcIixcbiAgICAgICAgZGF0YTogXCJEYXRhIHBsYWNlaG9sZGVyIHRleHRcIlxuICAgIH1cbl07XG5cbmNvbnN0IENhcmQgPSAoeyBjb250ZW50LCB0aXRsZX0pID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhc2VTdHVkeShwcm9wcyl7XG4gICAgY29uc3QgeyBcbiAgICAgICAgaWQsXG4gICAgICAgIGhlcm9JbWFnZSxcbiAgICAgICAgaGVyb0FsdFRleHQsXG4gICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24sXG4gICAgICAgIGdvYWwsIFxuICAgICAgICB1c2VyU3RvcnksIFxuICAgICAgICB0YXJnZXRBdWRpZW5jZSxcbiAgICAgICAgd2lyZWZyYW1lSW1hZ2UsXG4gICAgICAgIHdpcmVmcmFtZUFsdFRleHQsXG4gICAgICAgIHVzZXJGbG93SW1hZ2VzLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2hhbGxlbmdlLFxuICAgICAgICBzb2x1dGlvbixcbiAgICAgICAga2V5RmVhdHVyZXMsXG4gICAgICAgIGZ1bmN0aW9uYWxpdHksIFxuICAgICAgICBoaWZpSW1hZ2VzLFxuICAgICAgICBhbmFseXRpY3MsXG4gICAgICAgIGRhdGFcbiAgICAgfSA9IGNhc2VTdHVkeURhdGFbMF07XG5cbiAgICAgY29uc3QgY29udGVudFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBnc2FwLmZyb21UbyhcbiAgICAgICAgICAgIGltYWdlUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICB7IHg6IFwiLTUlXCIsIG9wYWNpdHk6IDB9LFxuICAgICAgICAgICAgeyB4OiAwLCBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMi41LCBlYXNlOiBcInBvd2VyMi5vdXRcIn1cbiAgICAgICAgKTtcbiAgICAgfSwgW10pO1xuXG5cbiByZXR1cm4oXG4gICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsc2NyZWVuLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtoZXJvSW1hZ2V9IGFsdD17aGVyb0FsdFRleHR9IHJlZj17aW1hZ2VSZWZ9PjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlc3R1ZHktYm9keVwiIHJlZj17Y29udGVudFJlZn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICB7cHJvamVjdE5hbWV9IHtwcm9qZWN0RGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjb250ZW50PXtnb2FsfSB0aXRsZT1cIkdPQUxcIj48L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNvbnRlbnQ9e3VzZXJTdG9yeX0gdGl0bGU9XCJVU0VSIFNUT1JZXCI+PC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjb250ZW50PXt0YXJnZXRBdWRpZW5jZX0gdGl0bGU9XCJUQVJHRVQgQVVESUVOQ0VcIj48L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXJlZnJhbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt3aXJlZnJhbWVJbWFnZX0gYWx0PXt3aXJlZnJhbWVBbHRUZXh0fSBjbGFzc05hbWU9XCJ3aXJlZnJhbWUtaW1nXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8QXVkaW9Db250cm9sPjwvQXVkaW9Db250cm9sPiAqL31cbiAgICAgICAgICAgIDxOYXY+PC9OYXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbiApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJOYXYiLCJnc2FwIiwiY2FzZVN0dWR5RGF0YSIsImlkIiwiaGVyb0ltYWdlIiwiaGVyb0FsdFRleHQiLCJwcm9qZWN0TmFtZSIsInByb2plY3REZXNjcmlwdGlvbiIsImdvYWwiLCJ1c2VyU3RvcnkiLCJ0YXJnZXRBdWRpZW5jZSIsIndpcmVmcmFtZUltYWdlIiwid2lyZWZyYW1lQWx0VGV4dCIsInVzZXJGbG93SW1hZ2VzIiwiZGVzY3JpcHRpb24iLCJjaGFsbGVuZ2UiLCJzb2x1dGlvbiIsImtleUZlYXR1cmVzIiwiZnVuY3Rpb25hbGl0eSIsImhpZmlJbWFnZXMiLCJhbmFseXRpY3MiLCJkYXRhIiwiQ2FyZCIsImNvbnRlbnQiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsIkNhc2VTdHVkeSIsInByb3BzIiwiY29udGVudFJlZiIsImltYWdlUmVmIiwidXNlRWZmZWN0IiwiZnJvbVRvIiwiY3VycmVudCIsIngiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJlYXNlIiwiaW1nIiwic3JjIiwiYWx0IiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/case_study.jsx\n"));

/***/ })

});