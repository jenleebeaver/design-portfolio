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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CaseStudy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav */ \"./pages/components/nav.jsx\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n// import AudioControl from \"./components/audioControl\";\n\nconst caseStudyData = [\n    {\n        id: 1,\n        heroImage: [\n            \"./images/agavos-hero-mockup.png\"\n        ],\n        heroAltText: \"Hi fidelity mockup of Agavos hero.  Includes navigation menu with additional information for job seekers, employers, courses, pricing, and an about us page. Also, includes a video of services.\",\n        projectName: \"Agavos Group\",\n        projectDescription: \"is an individually owned recruitment agency specializing in the solar industry.\",\n        goal: \"In this design case study, our goal was to redesign the website of an individual recruitment agency that specializes in the solar industry. Our primary objective was to highlight the agency's placement services for both companies and individuals, with a focus on optimizing the website for relevant SEO keywords.\",\n        contribution: [\n            \"User Experience\",\n            \"User Flow\",\n            \"Visual Design\",\n            \"Content Strategy\",\n            \"SEO Keyword Analysis\"\n        ],\n        userStory: \"As a specialized job seeker, I want to get placed at a new company, so that I can get a job in the solar industry and as a solar company, I want to find specialized candidates, so that I can build an effective team.\",\n        targetAudience: \"Companies and job seekers in the solar industry.\",\n        site: \"Design Stage\",\n        // This can be hardcoded into the site layout \n        // processTitle: \"PROCESS\"\n        wireframeImage: [\n            \"./images/agavos-wireframe.png\"\n        ],\n        wireframeAltText: \"Hand written wireframe of Agavos Group landing page.\",\n        userFlowImages: [],\n        description: \"This is placeholder text for an explanation of design decisions.\",\n        challenge: \"This is placeholder text for a design challenge\",\n        solution: \"This is placeholder text for a design solution\",\n        keyFeatures: \"KEY FEATURE\",\n        functionality: \"FUNCTION\",\n        hifiImages: [],\n        // This can be hardcoded into the site layout\n        // feedbackTitle: \"FEEDBACK\"\n        analytics: \"Analytics placeholder text\",\n        data: \"Data placeholder text\"\n    }\n];\nconst Card = (param)=>{\n    let { content , title  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"details\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-header\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-content\",\n                children: Array.isArray(content) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"contribution-list\",\n                    children: content.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: item\n                        }, item, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 21\n                }, undefined) : content\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Card;\nfunction CaseStudy(props) {\n    _s();\n    const { id , heroImage , heroAltText , projectName , projectDescription , goal , contribution , userStory , targetAudience , site , wireframeImage , wireframeAltText , userFlowImages , description , challenge , solution , keyFeatures , functionality , hifiImages , analytics , data  } = caseStudyData[0];\n    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fromTo(imageRef.current, {\n            x: \"-5%\",\n            opacity: 0\n        }, {\n            x: 0,\n            opacity: 1,\n            duration: 2.5,\n            ease: \"power2.out\"\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fullscreen-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: heroImage,\n                    alt: heroAltText,\n                    ref: imageRef\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                    lineNumber: 99,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"casestudy-body\",\n                ref: contentRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: [\n                            projectName,\n                            \" \",\n                            projectDescription\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"description-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"details-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: goal,\n                                        title: \"Goal\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: contribution,\n                                        title: \"CONTRIBUTION\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: userStory,\n                                        title: \"USER STORY\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: targetAudience,\n                                        title: \"TARGET AUDIENCE\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: site,\n                                        title: \"SITE\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"wireframe-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: wireframeImage,\n                                    alt: wireframeAltText,\n                                    className: \"wireframe-img\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                lineNumber: 113,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CaseStudy, \"7op1SejEisqiZ9+cHZFXM4vylxY=\");\n_c1 = CaseStudy;\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"CaseStudy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dDQUFNYyxPQUFNOzs7Ozs7Ozs7Ozs7MENBRS9CLDhEQUFDQztnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ2tCO29DQUFJQyxLQUFLbEM7b0NBQWdCbUMsS0FBS2xDO29DQUFrQmMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSW5FLDhEQUFDNUIsdURBQUdBOzs7Ozs7Ozs7Ozs7O0FBSWhCLENBQUM7R0FoRXVCbUM7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FzZV9zdHVkeS5qc3g/MmVjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXYgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZcIjtcbi8vIGltcG9ydCBBdWRpb0NvbnRyb2wgZnJvbSBcIi4vY29tcG9uZW50cy9hdWRpb0NvbnRyb2xcIjtcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuXG5jb25zdCBjYXNlU3R1ZHlEYXRhID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGhlcm9JbWFnZTogWycuL2ltYWdlcy9hZ2F2b3MtaGVyby1tb2NrdXAucG5nJ10sXG4gICAgICAgIGhlcm9BbHRUZXh0OiBcIkhpIGZpZGVsaXR5IG1vY2t1cCBvZiBBZ2F2b3MgaGVyby4gIEluY2x1ZGVzIG5hdmlnYXRpb24gbWVudSB3aXRoIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gZm9yIGpvYiBzZWVrZXJzLCBlbXBsb3llcnMsIGNvdXJzZXMsIHByaWNpbmcsIGFuZCBhbiBhYm91dCB1cyBwYWdlLiBBbHNvLCBpbmNsdWRlcyBhIHZpZGVvIG9mIHNlcnZpY2VzLlwiLFxuICAgICAgICBwcm9qZWN0TmFtZTogXCJBZ2F2b3MgR3JvdXBcIixcbiAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uOiBcImlzIGFuIGluZGl2aWR1YWxseSBvd25lZCByZWNydWl0bWVudCBhZ2VuY3kgc3BlY2lhbGl6aW5nIGluIHRoZSBzb2xhciBpbmR1c3RyeS5cIixcbiAgICAgICAgZ29hbDogXCJJbiB0aGlzIGRlc2lnbiBjYXNlIHN0dWR5LCBvdXIgZ29hbCB3YXMgdG8gcmVkZXNpZ24gdGhlIHdlYnNpdGUgb2YgYW4gaW5kaXZpZHVhbCByZWNydWl0bWVudCBhZ2VuY3kgdGhhdCBzcGVjaWFsaXplcyBpbiB0aGUgc29sYXIgaW5kdXN0cnkuIE91ciBwcmltYXJ5IG9iamVjdGl2ZSB3YXMgdG8gaGlnaGxpZ2h0IHRoZSBhZ2VuY3kncyBwbGFjZW1lbnQgc2VydmljZXMgZm9yIGJvdGggY29tcGFuaWVzIGFuZCBpbmRpdmlkdWFscywgd2l0aCBhIGZvY3VzIG9uIG9wdGltaXppbmcgdGhlIHdlYnNpdGUgZm9yIHJlbGV2YW50IFNFTyBrZXl3b3Jkcy5cIixcbiAgICAgICAgY29udHJpYnV0aW9uOiBbXCJVc2VyIEV4cGVyaWVuY2VcIiwgXCJVc2VyIEZsb3dcIiwgXCJWaXN1YWwgRGVzaWduXCIsIFwiQ29udGVudCBTdHJhdGVneVwiLCBcIlNFTyBLZXl3b3JkIEFuYWx5c2lzXCJdLFxuICAgICAgICB1c2VyU3Rvcnk6IFwiQXMgYSBzcGVjaWFsaXplZCBqb2Igc2Vla2VyLCBJIHdhbnQgdG8gZ2V0IHBsYWNlZCBhdCBhIG5ldyBjb21wYW55LCBzbyB0aGF0IEkgY2FuIGdldCBhIGpvYiBpbiB0aGUgc29sYXIgaW5kdXN0cnkgYW5kIGFzIGEgc29sYXIgY29tcGFueSwgSSB3YW50IHRvIGZpbmQgc3BlY2lhbGl6ZWQgY2FuZGlkYXRlcywgc28gdGhhdCBJIGNhbiBidWlsZCBhbiBlZmZlY3RpdmUgdGVhbS5cIixcbiAgICAgICAgdGFyZ2V0QXVkaWVuY2U6IFwiQ29tcGFuaWVzIGFuZCBqb2Igc2Vla2VycyBpbiB0aGUgc29sYXIgaW5kdXN0cnkuXCIsXG4gICAgICAgIHNpdGU6IFwiRGVzaWduIFN0YWdlXCIsXG4gICAgICAgIC8vIFRoaXMgY2FuIGJlIGhhcmRjb2RlZCBpbnRvIHRoZSBzaXRlIGxheW91dCBcbiAgICAgICAgLy8gcHJvY2Vzc1RpdGxlOiBcIlBST0NFU1NcIlxuICAgICAgICB3aXJlZnJhbWVJbWFnZTogWycuL2ltYWdlcy9hZ2F2b3Mtd2lyZWZyYW1lLnBuZyddLFxuICAgICAgICB3aXJlZnJhbWVBbHRUZXh0OiBcIkhhbmQgd3JpdHRlbiB3aXJlZnJhbWUgb2YgQWdhdm9zIEdyb3VwIGxhbmRpbmcgcGFnZS5cIixcbiAgICAgICAgdXNlckZsb3dJbWFnZXM6IFtdLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHBsYWNlaG9sZGVyIHRleHQgZm9yIGFuIGV4cGxhbmF0aW9uIG9mIGRlc2lnbiBkZWNpc2lvbnMuXCIsXG4gICAgICAgIGNoYWxsZW5nZTogXCJUaGlzIGlzIHBsYWNlaG9sZGVyIHRleHQgZm9yIGEgZGVzaWduIGNoYWxsZW5nZVwiLFxuICAgICAgICBzb2x1dGlvbjogXCJUaGlzIGlzIHBsYWNlaG9sZGVyIHRleHQgZm9yIGEgZGVzaWduIHNvbHV0aW9uXCIsXG4gICAgICAgIGtleUZlYXR1cmVzOiBcIktFWSBGRUFUVVJFXCIsXG4gICAgICAgIGZ1bmN0aW9uYWxpdHk6IFwiRlVOQ1RJT05cIixcbiAgICAgICAgaGlmaUltYWdlczogW10sXG4gICAgICAgIC8vIFRoaXMgY2FuIGJlIGhhcmRjb2RlZCBpbnRvIHRoZSBzaXRlIGxheW91dFxuICAgICAgICAvLyBmZWVkYmFja1RpdGxlOiBcIkZFRURCQUNLXCJcbiAgICAgICAgYW5hbHl0aWNzOiBcIkFuYWx5dGljcyBwbGFjZWhvbGRlciB0ZXh0XCIsXG4gICAgICAgIGRhdGE6IFwiRGF0YSBwbGFjZWhvbGRlciB0ZXh0XCJcbiAgICB9XG5dO1xuXG5jb25zdCBDYXJkID0gKHsgY29udGVudCwgdGl0bGV9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoY29udGVudCkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb250cmlidXRpb24tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbX0+e2l0ZW19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FzZVN0dWR5KHByb3BzKXtcbiAgICBjb25zdCB7IFxuICAgICAgICBpZCxcbiAgICAgICAgaGVyb0ltYWdlLFxuICAgICAgICBoZXJvQWx0VGV4dCxcbiAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbixcbiAgICAgICAgZ29hbCwgXG4gICAgICAgIGNvbnRyaWJ1dGlvbiwgXG4gICAgICAgIHVzZXJTdG9yeSwgXG4gICAgICAgIHRhcmdldEF1ZGllbmNlLFxuICAgICAgICBzaXRlLFxuICAgICAgICB3aXJlZnJhbWVJbWFnZSxcbiAgICAgICAgd2lyZWZyYW1lQWx0VGV4dCxcbiAgICAgICAgdXNlckZsb3dJbWFnZXMsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjaGFsbGVuZ2UsXG4gICAgICAgIHNvbHV0aW9uLFxuICAgICAgICBrZXlGZWF0dXJlcyxcbiAgICAgICAgZnVuY3Rpb25hbGl0eSwgXG4gICAgICAgIGhpZmlJbWFnZXMsXG4gICAgICAgIGFuYWx5dGljcyxcbiAgICAgICAgZGF0YVxuICAgICB9ID0gY2FzZVN0dWR5RGF0YVswXTtcblxuICAgICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKG51bGwpO1xuICAgICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGdzYXAuZnJvbVRvKFxuICAgICAgICAgICAgaW1hZ2VSZWYuY3VycmVudCxcbiAgICAgICAgICAgIHsgeDogXCItNSVcIiwgb3BhY2l0eTogMH0sXG4gICAgICAgICAgICB7IHg6IDAsIG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAyLjUsIGVhc2U6IFwicG93ZXIyLm91dFwifVxuICAgICAgICApO1xuICAgICB9LCBbXSk7XG5cblxuIHJldHVybihcbiAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGxzY3JlZW4tc2VjdGlvblwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2hlcm9JbWFnZX0gYWx0PXtoZXJvQWx0VGV4dH0gcmVmPXtpbWFnZVJlZn0+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1ib2R5XCIgcmVmPXtjb250ZW50UmVmfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgIHtwcm9qZWN0TmFtZX0ge3Byb2plY3REZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNvbnRlbnQ9e2dvYWx9IHRpdGxlPVwiR29hbFwiPjwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY29udGVudD17Y29udHJpYnV0aW9ufSB0aXRsZT1cIkNPTlRSSUJVVElPTlwiPjwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY29udGVudD17dXNlclN0b3J5fSB0aXRsZT1cIlVTRVIgU1RPUllcIj48L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNvbnRlbnQ9e3RhcmdldEF1ZGllbmNlfSB0aXRsZT1cIlRBUkdFVCBBVURJRU5DRVwiPjwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY29udGVudD17c2l0ZX0gdGl0bGU9XCJTSVRFXCI+PC9DYXJkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lyZWZyYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d2lyZWZyYW1lSW1hZ2V9IGFsdD17d2lyZWZyYW1lQWx0VGV4dH0gY2xhc3NOYW1lPVwid2lyZWZyYW1lLWltZ1wiPjwvaW1nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPEF1ZGlvQ29udHJvbD48L0F1ZGlvQ29udHJvbD4gKi99XG4gICAgICAgICAgICA8TmF2PjwvTmF2PlxuICAgICAgICAgPC9kaXY+XG4gICAgPC8+XG4gKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTmF2IiwiZ3NhcCIsImNhc2VTdHVkeURhdGEiLCJpZCIsImhlcm9JbWFnZSIsImhlcm9BbHRUZXh0IiwicHJvamVjdE5hbWUiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJnb2FsIiwiY29udHJpYnV0aW9uIiwidXNlclN0b3J5IiwidGFyZ2V0QXVkaWVuY2UiLCJzaXRlIiwid2lyZWZyYW1lSW1hZ2UiLCJ3aXJlZnJhbWVBbHRUZXh0IiwidXNlckZsb3dJbWFnZXMiLCJkZXNjcmlwdGlvbiIsImNoYWxsZW5nZSIsInNvbHV0aW9uIiwia2V5RmVhdHVyZXMiLCJmdW5jdGlvbmFsaXR5IiwiaGlmaUltYWdlcyIsImFuYWx5dGljcyIsImRhdGEiLCJDYXJkIiwiY29udGVudCIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJDYXNlU3R1ZHkiLCJwcm9wcyIsImNvbnRlbnRSZWYiLCJpbWFnZVJlZiIsInVzZUVmZmVjdCIsImZyb21UbyIsImN1cnJlbnQiLCJ4Iiwib3BhY2l0eSIsImR1cmF0aW9uIiwiZWFzZSIsImltZyIsInNyYyIsImFsdCIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/case_study.jsx\n"));

/***/ })

});