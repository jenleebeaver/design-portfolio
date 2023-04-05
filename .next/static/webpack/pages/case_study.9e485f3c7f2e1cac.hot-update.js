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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CaseStudy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav */ \"./pages/components/nav.jsx\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n// import AudioControl from \"./components/audioControl\";\n\nconst caseStudyData = [\n    {\n        id: 1,\n        // Hero\n        heroImage: [\n            \"./images/agavos-hero-mockup.png\"\n        ],\n        heroAltText: \"Hi fidelity mockup of Agavos hero.  Includes navigation menu with additional information for job seekers, employers, courses, pricing, and an about us page. Also, includes a video of services.\",\n        // Details\n        projectName: \"Agavos Group\",\n        projectDescription: \"is an individually owned recruitment agency specializing in the solar industry.\",\n        goal: \"In this design case study our primary objective was to highlight the agency's placement services for both companies and individuals with a focus on optimizing the website for relevant SEO keywords.\",\n        contribution: [\n            \"User Experience\",\n            \"Visual Design\",\n            \"Content Strategy\",\n            \"SEO Keyword Analysis\"\n        ],\n        userStory: \"As a specialized job seeker, I want to get placed at a new company, so that I can get a job in the solar industry and as a solar company, I want to find specialized candidates, so that I can build an effective team.\",\n        targetAudience: \"Companies and job seekers in the solar industry.\",\n        site: \"Design Stage\",\n        wireframeImage: [\n            \"./images/agavos-wireframe.png\"\n        ],\n        wireframeAltText: \"Hand written wireframe of Agavos Group landing page.\",\n        userFlowImages: [],\n        description: \"This is placeholder text for an explanation of design decisions.\",\n        challenge: \"This is placeholder text for a design challenge\",\n        solution: \"This is placeholder text for a design solution\",\n        keyFeatures: \"KEY FEATURE\",\n        functionality: \"FUNCTION\",\n        hifiImages: [],\n        // This can be hardcoded into the site layout\n        // feedbackTitle: \"FEEDBACK\"\n        analytics: \"Analytics placeholder text\",\n        data: \"Data placeholder text\"\n    }\n];\nconst Card = (param)=>{\n    let { content , title  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"details\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-header\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-content\",\n                children: Array.isArray(content) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"contribution-list\",\n                    children: content.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: item\n                        }, item, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 21\n                }, undefined) : content\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Card;\nfunction CaseStudy(props) {\n    _s();\n    const { id , heroImage , heroAltText , projectName , projectDescription , goal , contribution , userStory , targetAudience , site , wireframeImage , wireframeAltText , userFlowImages , description , challenge , solution , keyFeatures , functionality , hifiImages , analytics , data  } = caseStudyData[0];\n    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fromTo(imageRef.current, {\n            x: \"-5%\",\n            opacity: 0\n        }, {\n            x: 0,\n            opacity: 1,\n            duration: 2.5,\n            ease: \"power2.out\"\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fullscreen-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: heroImage,\n                    alt: heroAltText,\n                    ref: imageRef\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                    lineNumber: 100,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"casestudy-body\",\n                ref: contentRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: [\n                            projectName,\n                            \" \",\n                            projectDescription\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"description-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"details-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: goal,\n                                        title: \"GOAL\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: contribution,\n                                        title: \"CONTRIBUTION\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: userStory,\n                                        title: \"USER STORY\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: targetAudience,\n                                        title: \"TARGET AUDIENCE\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: site,\n                                        title: \"SITE\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"wireframe-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: wireframeImage,\n                                    alt: wireframeAltText,\n                                    className: \"wireframe-img\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                lineNumber: 114,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 119,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CaseStudy, \"7op1SejEisqiZ9+cHZFXM4vylxY=\");\n_c1 = CaseStudy;\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"CaseStudy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXNlX3N0dWR5LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDYjtBQUNuQyx3REFBd0Q7QUFDaEM7QUFFeEIsTUFBTUssZ0JBQWdCO0lBQ2xCO1FBQ0lDLElBQUk7UUFDSixPQUFPO1FBQ1BDLFdBQVc7WUFBQztTQUFrQztRQUM5Q0MsYUFBYTtRQUNiLFVBQVU7UUFDVkMsYUFBYTtRQUNiQyxvQkFBb0I7UUFDcEJDLE1BQU07UUFDTkMsY0FBYztZQUFDO1lBQW1CO1lBQWlCO1lBQW9CO1NBQXVCO1FBQzlGQyxXQUFXO1FBQ1hDLGdCQUFnQjtRQUNoQkMsTUFBTTtRQUVOQyxnQkFBZ0I7WUFBQztTQUFnQztRQUNqREMsa0JBQWtCO1FBQ2xCQyxnQkFBZ0IsRUFBRTtRQUNsQkMsYUFBYTtRQUNiQyxXQUFXO1FBQ1hDLFVBQVU7UUFDVkMsYUFBYTtRQUNiQyxlQUFlO1FBQ2ZDLFlBQVksRUFBRTtRQUNkLDZDQUE2QztRQUM3Qyw0QkFBNEI7UUFDNUJDLFdBQVc7UUFDWEMsTUFBTTtJQUNWO0NBQ0g7QUFFRCxNQUFNQyxPQUFPLFNBQXVCO1FBQXRCLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFDO0lBRTNCLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1ZGOzs7Ozs7MEJBRUwsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNWQyxNQUFNQyxPQUFPLENBQUNMLHlCQUNYLDhEQUFDTTtvQkFBR0gsV0FBVTs4QkFDVEgsUUFBUU8sR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDQztzQ0FBZUQ7MkJBQVBBOzs7Ozs7Ozs7Z0NBSWpCUixPQUNIOzs7Ozs7Ozs7Ozs7QUFJakI7S0FwQk1EO0FBc0JTLFNBQVNXLFVBQVVDLEtBQUssRUFBQzs7SUFDcEMsTUFBTSxFQUNGakMsR0FBRSxFQUNGQyxVQUFTLEVBQ1RDLFlBQVcsRUFDWEMsWUFBVyxFQUNYQyxtQkFBa0IsRUFDbEJDLEtBQUksRUFDSkMsYUFBWSxFQUNaQyxVQUFTLEVBQ1RDLGVBQWMsRUFDZEMsS0FBSSxFQUNKQyxlQUFjLEVBQ2RDLGlCQUFnQixFQUNoQkMsZUFBYyxFQUNkQyxZQUFXLEVBQ1hDLFVBQVMsRUFDVEMsU0FBUSxFQUNSQyxZQUFXLEVBQ1hDLGNBQWEsRUFDYkMsV0FBVSxFQUNWQyxVQUFTLEVBQ1RDLEtBQUksRUFDTixHQUFHckIsYUFBYSxDQUFDLEVBQUU7SUFFcEIsTUFBTW1DLGFBQWF2Qyw2Q0FBTUEsQ0FBQyxJQUFJO0lBQzlCLE1BQU13QyxXQUFXeEMsNkNBQU1BLENBQUMsSUFBSTtJQUU1QkQsc0RBQWUsQ0FBQyxJQUFNO1FBRW5CSSxtREFBVyxDQUNQcUMsU0FBU0csT0FBTyxFQUNoQjtZQUFFQyxHQUFHO1lBQU9DLFNBQVM7UUFBQyxHQUN0QjtZQUFFRCxHQUFHO1lBQUdDLFNBQVM7WUFBR0MsVUFBVTtZQUFLQyxNQUFNO1FBQVk7SUFFNUQsR0FBRyxFQUFFO0lBR1QscUJBQ0c7OzBCQUNJLDhEQUFDbEI7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNrQjtvQkFBSUMsS0FBSzNDO29CQUFXNEMsS0FBSzNDO29CQUFhNEMsS0FBS1g7Ozs7Ozs7Ozs7OzBCQUVoRCw4REFBQ1g7Z0JBQUlDLFdBQVU7Z0JBQWlCcUIsS0FBS1o7O2tDQUNqQyw4REFBQ1Y7d0JBQUlDLFdBQVU7OzRCQUNYdEI7NEJBQVk7NEJBQUVDOzs7Ozs7O2tDQUVsQiw4REFBQ29CO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDSjt3Q0FBS0MsU0FBU2pCO3dDQUFNa0IsT0FBTTs7Ozs7O2tEQUMzQiw4REFBQ0Y7d0NBQUtDLFNBQVNoQjt3Q0FBY2lCLE9BQU07Ozs7OztrREFDbkMsOERBQUNGO3dDQUFLQyxTQUFTZjt3Q0FBV2dCLE9BQU07Ozs7OztrREFDaEMsOERBQUNGO3dDQUFLQyxTQUFTZDt3Q0FBZ0JlLE9BQU07Ozs7OztrREFDckMsOERBQUNGO3dDQUFLQyxTQUFTYjt3Q0FBTWMsT0FBTTs7Ozs7Ozs7Ozs7OzBDQUUvQiw4REFBQ0M7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNrQjtvQ0FBSUMsS0FBS2xDO29DQUFnQm1DLEtBQUtsQztvQ0FBa0JjLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUluRSw4REFBQzVCLHVEQUFHQTs7Ozs7Ozs7Ozs7OztBQUloQixDQUFDO0dBaEV1Qm1DO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Nhc2Vfc3R1ZHkuanN4PzJlY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2XCI7XG4vLyBpbXBvcnQgQXVkaW9Db250cm9sIGZyb20gXCIuL2NvbXBvbmVudHMvYXVkaW9Db250cm9sXCI7XG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcblxuY29uc3QgY2FzZVN0dWR5RGF0YSA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICAvLyBIZXJvXG4gICAgICAgIGhlcm9JbWFnZTogWycuL2ltYWdlcy9hZ2F2b3MtaGVyby1tb2NrdXAucG5nJ10sXG4gICAgICAgIGhlcm9BbHRUZXh0OiBcIkhpIGZpZGVsaXR5IG1vY2t1cCBvZiBBZ2F2b3MgaGVyby4gIEluY2x1ZGVzIG5hdmlnYXRpb24gbWVudSB3aXRoIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gZm9yIGpvYiBzZWVrZXJzLCBlbXBsb3llcnMsIGNvdXJzZXMsIHByaWNpbmcsIGFuZCBhbiBhYm91dCB1cyBwYWdlLiBBbHNvLCBpbmNsdWRlcyBhIHZpZGVvIG9mIHNlcnZpY2VzLlwiLFxuICAgICAgICAvLyBEZXRhaWxzXG4gICAgICAgIHByb2plY3ROYW1lOiBcIkFnYXZvcyBHcm91cFwiLFxuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb246IFwiaXMgYW4gaW5kaXZpZHVhbGx5IG93bmVkIHJlY3J1aXRtZW50IGFnZW5jeSBzcGVjaWFsaXppbmcgaW4gdGhlIHNvbGFyIGluZHVzdHJ5LlwiLFxuICAgICAgICBnb2FsOiBcIkluIHRoaXMgZGVzaWduIGNhc2Ugc3R1ZHkgb3VyIHByaW1hcnkgb2JqZWN0aXZlIHdhcyB0byBoaWdobGlnaHQgdGhlIGFnZW5jeSdzIHBsYWNlbWVudCBzZXJ2aWNlcyBmb3IgYm90aCBjb21wYW5pZXMgYW5kIGluZGl2aWR1YWxzIHdpdGggYSBmb2N1cyBvbiBvcHRpbWl6aW5nIHRoZSB3ZWJzaXRlIGZvciByZWxldmFudCBTRU8ga2V5d29yZHMuXCIsXG4gICAgICAgIGNvbnRyaWJ1dGlvbjogW1wiVXNlciBFeHBlcmllbmNlXCIsIFwiVmlzdWFsIERlc2lnblwiLCBcIkNvbnRlbnQgU3RyYXRlZ3lcIiwgXCJTRU8gS2V5d29yZCBBbmFseXNpc1wiXSxcbiAgICAgICAgdXNlclN0b3J5OiBcIkFzIGEgc3BlY2lhbGl6ZWQgam9iIHNlZWtlciwgSSB3YW50IHRvIGdldCBwbGFjZWQgYXQgYSBuZXcgY29tcGFueSwgc28gdGhhdCBJIGNhbiBnZXQgYSBqb2IgaW4gdGhlIHNvbGFyIGluZHVzdHJ5IGFuZCBhcyBhIHNvbGFyIGNvbXBhbnksIEkgd2FudCB0byBmaW5kIHNwZWNpYWxpemVkIGNhbmRpZGF0ZXMsIHNvIHRoYXQgSSBjYW4gYnVpbGQgYW4gZWZmZWN0aXZlIHRlYW0uXCIsXG4gICAgICAgIHRhcmdldEF1ZGllbmNlOiBcIkNvbXBhbmllcyBhbmQgam9iIHNlZWtlcnMgaW4gdGhlIHNvbGFyIGluZHVzdHJ5LlwiLFxuICAgICAgICBzaXRlOiBcIkRlc2lnbiBTdGFnZVwiLFxuICAgICAgIFxuICAgICAgICB3aXJlZnJhbWVJbWFnZTogWycuL2ltYWdlcy9hZ2F2b3Mtd2lyZWZyYW1lLnBuZyddLFxuICAgICAgICB3aXJlZnJhbWVBbHRUZXh0OiBcIkhhbmQgd3JpdHRlbiB3aXJlZnJhbWUgb2YgQWdhdm9zIEdyb3VwIGxhbmRpbmcgcGFnZS5cIixcbiAgICAgICAgdXNlckZsb3dJbWFnZXM6IFtdLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHBsYWNlaG9sZGVyIHRleHQgZm9yIGFuIGV4cGxhbmF0aW9uIG9mIGRlc2lnbiBkZWNpc2lvbnMuXCIsXG4gICAgICAgIGNoYWxsZW5nZTogXCJUaGlzIGlzIHBsYWNlaG9sZGVyIHRleHQgZm9yIGEgZGVzaWduIGNoYWxsZW5nZVwiLFxuICAgICAgICBzb2x1dGlvbjogXCJUaGlzIGlzIHBsYWNlaG9sZGVyIHRleHQgZm9yIGEgZGVzaWduIHNvbHV0aW9uXCIsXG4gICAgICAgIGtleUZlYXR1cmVzOiBcIktFWSBGRUFUVVJFXCIsXG4gICAgICAgIGZ1bmN0aW9uYWxpdHk6IFwiRlVOQ1RJT05cIixcbiAgICAgICAgaGlmaUltYWdlczogW10sXG4gICAgICAgIC8vIFRoaXMgY2FuIGJlIGhhcmRjb2RlZCBpbnRvIHRoZSBzaXRlIGxheW91dFxuICAgICAgICAvLyBmZWVkYmFja1RpdGxlOiBcIkZFRURCQUNLXCJcbiAgICAgICAgYW5hbHl0aWNzOiBcIkFuYWx5dGljcyBwbGFjZWhvbGRlciB0ZXh0XCIsXG4gICAgICAgIGRhdGE6IFwiRGF0YSBwbGFjZWhvbGRlciB0ZXh0XCJcbiAgICB9XG5dO1xuXG5jb25zdCBDYXJkID0gKHsgY29udGVudCwgdGl0bGV9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoY29udGVudCkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb250cmlidXRpb24tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbX0+e2l0ZW19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FzZVN0dWR5KHByb3BzKXtcbiAgICBjb25zdCB7IFxuICAgICAgICBpZCxcbiAgICAgICAgaGVyb0ltYWdlLFxuICAgICAgICBoZXJvQWx0VGV4dCxcbiAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbixcbiAgICAgICAgZ29hbCwgXG4gICAgICAgIGNvbnRyaWJ1dGlvbiwgXG4gICAgICAgIHVzZXJTdG9yeSwgXG4gICAgICAgIHRhcmdldEF1ZGllbmNlLFxuICAgICAgICBzaXRlLFxuICAgICAgICB3aXJlZnJhbWVJbWFnZSxcbiAgICAgICAgd2lyZWZyYW1lQWx0VGV4dCxcbiAgICAgICAgdXNlckZsb3dJbWFnZXMsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjaGFsbGVuZ2UsXG4gICAgICAgIHNvbHV0aW9uLFxuICAgICAgICBrZXlGZWF0dXJlcyxcbiAgICAgICAgZnVuY3Rpb25hbGl0eSwgXG4gICAgICAgIGhpZmlJbWFnZXMsXG4gICAgICAgIGFuYWx5dGljcyxcbiAgICAgICAgZGF0YVxuICAgICB9ID0gY2FzZVN0dWR5RGF0YVswXTtcblxuICAgICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKG51bGwpO1xuICAgICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGdzYXAuZnJvbVRvKFxuICAgICAgICAgICAgaW1hZ2VSZWYuY3VycmVudCxcbiAgICAgICAgICAgIHsgeDogXCItNSVcIiwgb3BhY2l0eTogMH0sXG4gICAgICAgICAgICB7IHg6IDAsIG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAyLjUsIGVhc2U6IFwicG93ZXIyLm91dFwifVxuICAgICAgICApO1xuICAgICB9LCBbXSk7XG5cblxuIHJldHVybihcbiAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGxzY3JlZW4tc2VjdGlvblwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2hlcm9JbWFnZX0gYWx0PXtoZXJvQWx0VGV4dH0gcmVmPXtpbWFnZVJlZn0+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1ib2R5XCIgcmVmPXtjb250ZW50UmVmfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgIHtwcm9qZWN0TmFtZX0ge3Byb2plY3REZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNvbnRlbnQ9e2dvYWx9IHRpdGxlPVwiR09BTFwiPjwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY29udGVudD17Y29udHJpYnV0aW9ufSB0aXRsZT1cIkNPTlRSSUJVVElPTlwiPjwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY29udGVudD17dXNlclN0b3J5fSB0aXRsZT1cIlVTRVIgU1RPUllcIj48L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNvbnRlbnQ9e3RhcmdldEF1ZGllbmNlfSB0aXRsZT1cIlRBUkdFVCBBVURJRU5DRVwiPjwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY29udGVudD17c2l0ZX0gdGl0bGU9XCJTSVRFXCI+PC9DYXJkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lyZWZyYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d2lyZWZyYW1lSW1hZ2V9IGFsdD17d2lyZWZyYW1lQWx0VGV4dH0gY2xhc3NOYW1lPVwid2lyZWZyYW1lLWltZ1wiPjwvaW1nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPEF1ZGlvQ29udHJvbD48L0F1ZGlvQ29udHJvbD4gKi99XG4gICAgICAgICAgICA8TmF2PjwvTmF2PlxuICAgICAgICAgPC9kaXY+XG4gICAgPC8+XG4gKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTmF2IiwiZ3NhcCIsImNhc2VTdHVkeURhdGEiLCJpZCIsImhlcm9JbWFnZSIsImhlcm9BbHRUZXh0IiwicHJvamVjdE5hbWUiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJnb2FsIiwiY29udHJpYnV0aW9uIiwidXNlclN0b3J5IiwidGFyZ2V0QXVkaWVuY2UiLCJzaXRlIiwid2lyZWZyYW1lSW1hZ2UiLCJ3aXJlZnJhbWVBbHRUZXh0IiwidXNlckZsb3dJbWFnZXMiLCJkZXNjcmlwdGlvbiIsImNoYWxsZW5nZSIsInNvbHV0aW9uIiwia2V5RmVhdHVyZXMiLCJmdW5jdGlvbmFsaXR5IiwiaGlmaUltYWdlcyIsImFuYWx5dGljcyIsImRhdGEiLCJDYXJkIiwiY29udGVudCIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJDYXNlU3R1ZHkiLCJwcm9wcyIsImNvbnRlbnRSZWYiLCJpbWFnZVJlZiIsInVzZUVmZmVjdCIsImZyb21UbyIsImN1cnJlbnQiLCJ4Iiwib3BhY2l0eSIsImR1cmF0aW9uIiwiZWFzZSIsImltZyIsInNyYyIsImFsdCIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/case_study.jsx\n"));

/***/ })

});