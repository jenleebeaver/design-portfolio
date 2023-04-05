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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CaseStudy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav */ \"./pages/components/nav.jsx\");\n/* harmony import */ var _components_audioControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/audioControl */ \"./pages/components/audioControl.jsx\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst caseStudyData = [\n    {\n        id: 1,\n        heroImage: [\n            \"./images/agavos-hero-mockup.png\"\n        ],\n        heroAltText: \"Hi fidelity mockup of Agavos hero.  Includes navigation menu with additional information for job seekers, employers, courses, pricing, and an about us page. Also, includes a video of services.\",\n        title: \"Agavos Group\",\n        subheader: \"Website Redesign\",\n        goal: \"In this design case study, our goal was to redesign the website of an individual recruitment agency that specializes in the solar industry. Our primary objective was to highlight the agency's placement services for both companies and individuals, with a focus on optimizing the website for relevant SEO keywords.\",\n        userStory: \"As a specialized job seeker, I want to get placed at a new company, so that I can get a job in the solar industry and as a solar company, I want to find specialized candidates, so that I can build an effective team.\",\n        targetAudience: \"Companies and job seekers in the solar industry.\",\n        // This can be hardcoded into the site layout \n        // processTitle: \"PROCESS\"\n        wireframeImage: [\n            \"./images/agavos-wireframe.png\"\n        ],\n        wireframeAltText: \"Hand written wireframe of Agavos Group landing page.\",\n        userFlowImages: [],\n        description: \"This is placeholder text for an explanation of design decisions.\",\n        challenge: \"This is placeholder text for a design challenge\",\n        solution: \"This is placeholder text for a design solution\",\n        keyFeatures: \"KEY FEATURE\",\n        functionality: \"FUNCTION\",\n        hifiImages: [],\n        // This can be hardcoded into the site layout\n        // feedbackTitle: \"FEEDBACK\"\n        analytics: \"Analytics placeholder text\",\n        data: \"Data placeholder text\"\n    }\n];\nconst Card = (param)=>{\n    let { content , title  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"details\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-header\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-content\",\n                children: content\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Card;\nfunction CaseStudy(props) {\n    _s();\n    const { id , heroImage , heroAltText , title , subheader , goal , userStory , targetAudience , wireframeImage , wireframeAltText , userFlowImages , description , challenge , solution , keyFeatures , functionality , hifiImages , analytics , data  } = caseStudyData[0];\n    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const subheaderRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(subheaderRef.current, {\n            x: 0,\n            duration: 2.5,\n            ease: \"Power2.easeOut\",\n            opacity: 1\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fromTo(imageRef.current, {\n            x: \"-100%\",\n            opacity: 0\n        }, {\n            x: 0,\n            opacity: 1,\n            duration: 1.5,\n            ease: \"power2.out\"\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fullscreen-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: heroImage,\n                    alt: heroAltText,\n                    className: \"hero-img\",\n                    ref: imageRef\n                }, void 0, false, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"casestudy-body\",\n                ref: contentRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: [\n                            title,\n                            \":\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title subheader\",\n                        ref: subheaderRef,\n                        children: subheader\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"description-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"details-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: goal,\n                                        title: \"GOAL\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: userStory,\n                                        title: \"USER STORY\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                                        content: targetAudience,\n                                        title: \"TARGET AUDIENCE\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                lineNumber: 102,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"wireframe-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: wireframeImage,\n                                    alt: wireframeAltText,\n                                    className: \"wireframe-img\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_audioControl__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/case_study.jsx\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CaseStudy, \"gG431vACvDdIWU9dwOzTYpF3b48=\");\n_c1 = CaseStudy;\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"CaseStudy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkUsOERBQUN6QixnRUFBWUE7Ozs7O2tDQUNiLDhEQUFDRCx1REFBR0E7Ozs7Ozs7Ozs7Ozs7QUFJaEIsQ0FBQztHQXBFdUIyQjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXNlX3N0dWR5LmpzeD8yZWNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi9jb21wb25lbnRzL25hdlwiO1xuaW1wb3J0IEF1ZGlvQ29udHJvbCBmcm9tIFwiLi9jb21wb25lbnRzL2F1ZGlvQ29udHJvbFwiO1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5cbmNvbnN0IGNhc2VTdHVkeURhdGEgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgaGVyb0ltYWdlOiBbJy4vaW1hZ2VzL2FnYXZvcy1oZXJvLW1vY2t1cC5wbmcnXSxcbiAgICAgICAgaGVyb0FsdFRleHQ6IFwiSGkgZmlkZWxpdHkgbW9ja3VwIG9mIEFnYXZvcyBoZXJvLiAgSW5jbHVkZXMgbmF2aWdhdGlvbiBtZW51IHdpdGggYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBmb3Igam9iIHNlZWtlcnMsIGVtcGxveWVycywgY291cnNlcywgcHJpY2luZywgYW5kIGFuIGFib3V0IHVzIHBhZ2UuIEFsc28sIGluY2x1ZGVzIGEgdmlkZW8gb2Ygc2VydmljZXMuXCIsXG4gICAgICAgIHRpdGxlOiBcIkFnYXZvcyBHcm91cFwiLFxuICAgICAgICBzdWJoZWFkZXI6IFwiV2Vic2l0ZSBSZWRlc2lnblwiLFxuICAgICAgICBnb2FsOiBcIkluIHRoaXMgZGVzaWduIGNhc2Ugc3R1ZHksIG91ciBnb2FsIHdhcyB0byByZWRlc2lnbiB0aGUgd2Vic2l0ZSBvZiBhbiBpbmRpdmlkdWFsIHJlY3J1aXRtZW50IGFnZW5jeSB0aGF0IHNwZWNpYWxpemVzIGluIHRoZSBzb2xhciBpbmR1c3RyeS4gT3VyIHByaW1hcnkgb2JqZWN0aXZlIHdhcyB0byBoaWdobGlnaHQgdGhlIGFnZW5jeSdzIHBsYWNlbWVudCBzZXJ2aWNlcyBmb3IgYm90aCBjb21wYW5pZXMgYW5kIGluZGl2aWR1YWxzLCB3aXRoIGEgZm9jdXMgb24gb3B0aW1pemluZyB0aGUgd2Vic2l0ZSBmb3IgcmVsZXZhbnQgU0VPIGtleXdvcmRzLlwiLFxuICAgICAgICB1c2VyU3Rvcnk6IFwiQXMgYSBzcGVjaWFsaXplZCBqb2Igc2Vla2VyLCBJIHdhbnQgdG8gZ2V0IHBsYWNlZCBhdCBhIG5ldyBjb21wYW55LCBzbyB0aGF0IEkgY2FuIGdldCBhIGpvYiBpbiB0aGUgc29sYXIgaW5kdXN0cnkgYW5kIGFzIGEgc29sYXIgY29tcGFueSwgSSB3YW50IHRvIGZpbmQgc3BlY2lhbGl6ZWQgY2FuZGlkYXRlcywgc28gdGhhdCBJIGNhbiBidWlsZCBhbiBlZmZlY3RpdmUgdGVhbS5cIixcbiAgICAgICAgdGFyZ2V0QXVkaWVuY2U6IFwiQ29tcGFuaWVzIGFuZCBqb2Igc2Vla2VycyBpbiB0aGUgc29sYXIgaW5kdXN0cnkuXCIsXG4gICAgICAgIC8vIFRoaXMgY2FuIGJlIGhhcmRjb2RlZCBpbnRvIHRoZSBzaXRlIGxheW91dCBcbiAgICAgICAgLy8gcHJvY2Vzc1RpdGxlOiBcIlBST0NFU1NcIlxuICAgICAgICB3aXJlZnJhbWVJbWFnZTogWycuL2ltYWdlcy9hZ2F2b3Mtd2lyZWZyYW1lLnBuZyddLFxuICAgICAgICB3aXJlZnJhbWVBbHRUZXh0OiBcIkhhbmQgd3JpdHRlbiB3aXJlZnJhbWUgb2YgQWdhdm9zIEdyb3VwIGxhbmRpbmcgcGFnZS5cIixcbiAgICAgICAgdXNlckZsb3dJbWFnZXM6IFtdLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHBsYWNlaG9sZGVyIHRleHQgZm9yIGFuIGV4cGxhbmF0aW9uIG9mIGRlc2lnbiBkZWNpc2lvbnMuXCIsXG4gICAgICAgIGNoYWxsZW5nZTogXCJUaGlzIGlzIHBsYWNlaG9sZGVyIHRleHQgZm9yIGEgZGVzaWduIGNoYWxsZW5nZVwiLFxuICAgICAgICBzb2x1dGlvbjogXCJUaGlzIGlzIHBsYWNlaG9sZGVyIHRleHQgZm9yIGEgZGVzaWduIHNvbHV0aW9uXCIsXG4gICAgICAgIGtleUZlYXR1cmVzOiBcIktFWSBGRUFUVVJFXCIsXG4gICAgICAgIGZ1bmN0aW9uYWxpdHk6IFwiRlVOQ1RJT05cIixcbiAgICAgICAgaGlmaUltYWdlczogW10sXG4gICAgICAgIC8vIFRoaXMgY2FuIGJlIGhhcmRjb2RlZCBpbnRvIHRoZSBzaXRlIGxheW91dFxuICAgICAgICAvLyBmZWVkYmFja1RpdGxlOiBcIkZFRURCQUNLXCJcbiAgICAgICAgYW5hbHl0aWNzOiBcIkFuYWx5dGljcyBwbGFjZWhvbGRlciB0ZXh0XCIsXG4gICAgICAgIGRhdGE6IFwiRGF0YSBwbGFjZWhvbGRlciB0ZXh0XCJcbiAgICB9XG5dO1xuXG5jb25zdCBDYXJkID0gKHsgY29udGVudCwgdGl0bGV9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXNlU3R1ZHkocHJvcHMpe1xuICAgIGNvbnN0IHsgXG4gICAgICAgIGlkLFxuICAgICAgICBoZXJvSW1hZ2UsXG4gICAgICAgIGhlcm9BbHRUZXh0LFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgc3ViaGVhZGVyLCBcbiAgICAgICAgZ29hbCwgXG4gICAgICAgIHVzZXJTdG9yeSwgXG4gICAgICAgIHRhcmdldEF1ZGllbmNlLFxuICAgICAgICB3aXJlZnJhbWVJbWFnZSxcbiAgICAgICAgd2lyZWZyYW1lQWx0VGV4dCxcbiAgICAgICAgdXNlckZsb3dJbWFnZXMsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjaGFsbGVuZ2UsXG4gICAgICAgIHNvbHV0aW9uLFxuICAgICAgICBrZXlGZWF0dXJlcyxcbiAgICAgICAgZnVuY3Rpb25hbGl0eSwgXG4gICAgICAgIGhpZmlJbWFnZXMsXG4gICAgICAgIGFuYWx5dGljcyxcbiAgICAgICAgZGF0YVxuICAgICB9ID0gY2FzZVN0dWR5RGF0YVswXTtcblxuICAgICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKG51bGwpO1xuICAgICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgICBjb25zdCBzdWJoZWFkZXJSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnc2FwLnRvKHN1YmhlYWRlclJlZi5jdXJyZW50LCBcbiAgICAgICAgICAgIHt4OiAwLCBkdXJhdGlvbjogMi41LCBlYXNlOiBcIlBvd2VyMi5lYXNlT3V0XCIsIG9wYWNpdHk6IDF9XG4gICAgICAgICk7XG5cbiAgICAgICAgZ3NhcC5mcm9tVG8oXG4gICAgICAgICAgICBpbWFnZVJlZi5jdXJyZW50LFxuICAgICAgICAgICAgeyB4OiBcIi0xMDAlXCIsIG9wYWNpdHk6IDB9LFxuICAgICAgICAgICAgeyB4OiAwLCBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMS41LCBlYXNlOiBcInBvd2VyMi5vdXRcIn1cbiAgICAgICAgKTtcbiAgICAgfSwgW10pO1xuXG5cbiByZXR1cm4oXG4gICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsc2NyZWVuLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtoZXJvSW1hZ2V9IGFsdD17aGVyb0FsdFRleHR9IGNsYXNzTmFtZT1cImhlcm8taW1nXCIgcmVmPXtpbWFnZVJlZn0+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzdHVkeS1ib2R5XCIgcmVmPXtjb250ZW50UmVmfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9OlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHN1YmhlYWRlclwiIHJlZj17c3ViaGVhZGVyUmVmfT5cbiAgICAgICAgICAgICAgICB7c3ViaGVhZGVyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY29udGVudD17Z29hbH0gdGl0bGU9XCJHT0FMXCI+PC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjb250ZW50PXt1c2VyU3Rvcnl9IHRpdGxlPVwiVVNFUiBTVE9SWVwiPjwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY29udGVudD17dGFyZ2V0QXVkaWVuY2V9IHRpdGxlPVwiVEFSR0VUIEFVRElFTkNFXCI+PC9DYXJkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lyZWZyYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d2lyZWZyYW1lSW1hZ2V9IGFsdD17d2lyZWZyYW1lQWx0VGV4dH0gY2xhc3NOYW1lPVwid2lyZWZyYW1lLWltZ1wiPjwvaW1nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QXVkaW9Db250cm9sPjwvQXVkaW9Db250cm9sPlxuICAgICAgICAgICAgPE5hdj48L05hdj5cbiAgICAgICAgIDwvZGl2PlxuICAgIDwvPlxuIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk5hdiIsIkF1ZGlvQ29udHJvbCIsImdzYXAiLCJjYXNlU3R1ZHlEYXRhIiwiaWQiLCJoZXJvSW1hZ2UiLCJoZXJvQWx0VGV4dCIsInRpdGxlIiwic3ViaGVhZGVyIiwiZ29hbCIsInVzZXJTdG9yeSIsInRhcmdldEF1ZGllbmNlIiwid2lyZWZyYW1lSW1hZ2UiLCJ3aXJlZnJhbWVBbHRUZXh0IiwidXNlckZsb3dJbWFnZXMiLCJkZXNjcmlwdGlvbiIsImNoYWxsZW5nZSIsInNvbHV0aW9uIiwia2V5RmVhdHVyZXMiLCJmdW5jdGlvbmFsaXR5IiwiaGlmaUltYWdlcyIsImFuYWx5dGljcyIsImRhdGEiLCJDYXJkIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsIkNhc2VTdHVkeSIsInByb3BzIiwiY29udGVudFJlZiIsImltYWdlUmVmIiwic3ViaGVhZGVyUmVmIiwidXNlRWZmZWN0IiwidG8iLCJjdXJyZW50IiwieCIsImR1cmF0aW9uIiwiZWFzZSIsIm9wYWNpdHkiLCJmcm9tVG8iLCJpbWciLCJzcmMiLCJhbHQiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/case_study.jsx\n"));

/***/ })

});