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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav.jsx */ \"./pages/components/nav.jsx\");\n/* harmony import */ var _components_audioControl_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/audioControl.jsx */ \"./pages/components/audioControl.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ImageList() {\n    _s();\n    let slideshow = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const slideshowElement = slideshow.current.querySelector(\".art-slideshow\");\n        const artContainerHeight = slideshowElement.offsetHeight - window.innerHeight;\n        document.getAnimations().forEach((anim)=>{\n            anim.cancel();\n            anim.play();\n        });\n        const animation = slideshowElement.animate([\n            {\n                transform: \"translateY(-\".concat(artContainerHeight, \"px)\")\n            }\n        ], {\n            duration: 100000,\n            iterations: Infinity\n        });\n        animation.commitStyles();\n        //add no scroll on body \n        document.body.classList.add(\"no-scroll\");\n        //remove no scroll from body when component is unmounted\n        return ()=>{\n            document.body.classList.remove(\"no-scroll\");\n        };\n    }, []);\n    //commented out last four URLS to have no remainders left over in a group of 5\n    const imageURLS = [\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP123847.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1943.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14201-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-21959-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-20613-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1027.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-23704-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1500.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT10262.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1952.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP231550.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1860.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1944.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3131.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/ep1974.356.35.R.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-20100-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP341200.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-043.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1864.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-037.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1139.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1863.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1867.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1559.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP364161.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1866.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1954.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3113.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-049.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP317780.jpg\"\n    ];\n    const mappedImages = Array(Math.ceil(imageURLS.length / 5)).fill().map((_, index)=>imageURLS.slice(index * 5, index * 5 + 5));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: slideshow,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"art-slideshow\",\n            children: mappedImages.map((imageArray)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"a\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[0]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"b\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[1]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"c\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[2]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[3]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"e\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[4]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 11\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageList, \"Igeu0LJKY3qxNiynOtg34cL7axc=\");\n_c = ImageList;\nfunction ImageContainer(param) {\n    let {} = param;\n    // FETCHING DATA FROM MET API \n    // const [images, setImages] = React.useState([]);\n    // const [isLoading, setIsLoading] = React.useState(false);\n    // React.useEffect(() => {\n    //   async function getImages() {\n    //     setIsLoading(true);\n    //     // // FETCHING DATA FROM MET API \n    //     // // returning an array of object ID's with French Art between 1890-1900 - Belle Epoque (era of progress and prosperity)/ Impressionists \n    //     // const idResponse = await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=1890&dateEnd=1900&q=French\");\n    //     // const idJSON = await idResponse.json();\n    //     // const parsedIds = idJSON.objectIDs.slice(0,1000);\n    //     // console.log(parsedIds);\n    //     // //returning an array of object URL's associated to the object ID's. Includes three filters: 1) 404 errors 2) painting classfication 3) empty string\n    //     // Promise.all(parsedIds.map( async id => await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/objects/\" + id)))\n    //     // .then(responses => {\n    //     //   //filter out responses that return 404 \n    //     //   const validResponses = responses.filter(response => response.status !== 404);\n    //     //     return Promise.all(validResponses.map(response => response.json()));\n    //     // }).then(data => {\n    //     //   console.log(data);\n    //     //   const paintings =  data.filter(object => (object.classification.includes(\"Paintings\")));\n    //     //   console.log(paintings);\n    //     //   const urls = paintings.map( object => object.primaryImageSmall);\n    //     //   console.log(urls);\n    //     //   function filterList(urls){\n    //     //     return urls.filter(url => {\n    //     //       if (url === ''){\n    //     //         return false;\n    //     //       } \n    //     //       return true;\n    //     //     })\n    //     //   };\n    //     //   const filteredList = filterList(urls);\n    //     //   console.log(filteredList);\n    //     // });\n    //     // setImages(imageURLS);\n    //     // setIsLoading(false);\n    //   }\n    //   // getImages();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageList, {}, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_audioControl_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n        lineNumber: 155,\n        columnNumber: 5\n    }, this);\n}\n_c1 = ImageContainer;\nvar _c, _c1;\n$RefreshReg$(_c, \"ImageList\");\n$RefreshReg$(_c1, \"ImageContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QThCO0lBQzlCLG9HQUFvRztJQUNwRyxtQ0FBbUM7SUFDbkMsNEVBQTRFO0lBQzVFLDhCQUE4QjtJQUU5QixzQ0FBc0M7SUFDdEMseUNBQXlDO0lBQ3pDLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsY0FBYztJQUVkLGtEQUFrRDtJQUNsRCxzQ0FBc0M7SUFDdEMsYUFBYTtJQUViLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsTUFBTTtJQUNOLG9CQUFvQjtJQUNwQixVQUFVO0lBRVYscUJBQ0UsOERBQUNOOzswQkFDQyw4REFBQ3ZDOzs7OzswQkFDRCw4REFBQ0Qsb0VBQVlBOzs7OzswQkFDYiw4REFBQ0QsMkRBQUdBOzs7Ozs7Ozs7OztBQUdWLENBQUM7TUF4RHVCK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXYgZnJvbSAnLi9jb21wb25lbnRzL25hdi5qc3gnO1xuaW1wb3J0IEF1ZGlvQ29udHJvbCBmcm9tICcuL2NvbXBvbmVudHMvYXVkaW9Db250cm9sLmpzeCc7XG5cbmZ1bmN0aW9uIEltYWdlTGlzdCgpe1xuICBsZXQgc2xpZGVzaG93ID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVzaG93RWxlbWVudCA9IHNsaWRlc2hvdy5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnQtc2xpZGVzaG93Jyk7ICBcbiAgICBjb25zdCBhcnRDb250YWluZXJIZWlnaHQgPSBzbGlkZXNob3dFbGVtZW50Lm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGRvY3VtZW50LmdldEFuaW1hdGlvbnMoKS5mb3JFYWNoKChhbmltKSA9PiB7XG4gICAgYW5pbS5jYW5jZWwoKTtcbiAgICBhbmltLnBsYXkoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHNsaWRlc2hvd0VsZW1lbnQuYW5pbWF0ZShbXG4gICAgICB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLSR7YXJ0Q29udGFpbmVySGVpZ2h0fXB4KWB9XG4gICAgXSwge1xuICAgICAgZHVyYXRpb246IDEwMDAwMCwgXG4gICAgICBpdGVyYXRpb25zOiBJbmZpbml0eSxcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvbi5jb21taXRTdHlsZXMoKTtcblxuICAgIC8vYWRkIG5vIHNjcm9sbCBvbiBib2R5IFxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XG5cbiAgICAvL3JlbW92ZSBubyBzY3JvbGwgZnJvbSBib2R5IHdoZW4gY29tcG9uZW50IGlzIHVubW91bnRlZFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgIH1cbiAgXG4gIH0sIFtdKTtcblxuICBcblxuICAvL2NvbW1lbnRlZCBvdXQgbGFzdCBmb3VyIFVSTFMgdG8gaGF2ZSBubyByZW1haW5kZXJzIGxlZnQgb3ZlciBpbiBhIGdyb3VwIG9mIDVcbiAgY29uc3QgaW1hZ2VVUkxTID0gW1xuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAxMjM4NDcuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE5NDMuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0xNDIwMS0wMDEuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0yMTk1OS0wMDEuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0yMDYxMy0wMDEuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDEwMjcuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0yMzcwNC0wMDEuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE1MDAuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDEwMjYyLmpwZycsXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE5NTIuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUDIzMTU1MC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTg2MC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTk0NC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvcmwvd2ViLWxhcmdlL0RUMzEzMS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL2VwMTk3NC4zNTYuMzUuUi5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQLTIwMTAwLTAwMS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQMzQxMjAwLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMTQ5MzYtMDQzLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxODY0LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMTQ5MzYtMDM3LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxMTM5LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxODYzLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxODY3LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxNTU5LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAzNjQxNjEuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE4NjYuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE5NTQuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL3JsL3dlYi1sYXJnZS9EVDMxMTMuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0xNDkzNi0wNDkuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUDMxNzc4MC5qcGcnLCAgIFxuICBdXG5cbiAgY29uc3QgbWFwcGVkSW1hZ2VzID0gQXJyYXkoTWF0aC5jZWlsKGltYWdlVVJMUy5sZW5ndGggLyA1KSlcbiAgICAuZmlsbCgpXG4gICAgLm1hcCgoXywgaW5kZXgpID0+IGltYWdlVVJMUy5zbGljZShpbmRleCAqIDUsIGluZGV4ICogNSArIDUpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtzbGlkZXNob3d9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnQtc2xpZGVzaG93XCI+XG4gICAgICAgICAge21hcHBlZEltYWdlcy5tYXAoKGltYWdlQXJyYXkpID0+IHsgXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VBcnJheVswXX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlQXJyYXlbMV19Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUFycmF5WzJdfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VBcnJheVszXX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlQXJyYXlbNF19Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VDb250YWluZXIoe30pIHtcblxuICAvLyBGRVRDSElORyBEQVRBIEZST00gTUVUIEFQSSBcbiAgLy8gY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGFzeW5jIGZ1bmN0aW9uIGdldEltYWdlcygpIHtcbiAgLy8gICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAvLyAgICAgLy8gLy8gRkVUQ0hJTkcgREFUQSBGUk9NIE1FVCBBUEkgXG4gIC8vICAgICAvLyAvLyByZXR1cm5pbmcgYW4gYXJyYXkgb2Ygb2JqZWN0IElEJ3Mgd2l0aCBGcmVuY2ggQXJ0IGJldHdlZW4gMTg5MC0xOTAwIC0gQmVsbGUgRXBvcXVlIChlcmEgb2YgcHJvZ3Jlc3MgYW5kIHByb3NwZXJpdHkpLyBJbXByZXNzaW9uaXN0cyBcbiAgLy8gICAgIC8vIGNvbnN0IGlkUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vY29sbGVjdGlvbmFwaS5tZXRtdXNldW0ub3JnL3B1YmxpYy9jb2xsZWN0aW9uL3YxL3NlYXJjaD9kYXRlQmVnaW49MTg5MCZkYXRlRW5kPTE5MDAmcT1GcmVuY2hcIik7XG4gIC8vICAgICAvLyBjb25zdCBpZEpTT04gPSBhd2FpdCBpZFJlc3BvbnNlLmpzb24oKTtcbiAgLy8gICAgIC8vIGNvbnN0IHBhcnNlZElkcyA9IGlkSlNPTi5vYmplY3RJRHMuc2xpY2UoMCwxMDAwKTtcbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHBhcnNlZElkcyk7XG5cbiAgLy8gICAgIC8vIC8vcmV0dXJuaW5nIGFuIGFycmF5IG9mIG9iamVjdCBVUkwncyBhc3NvY2lhdGVkIHRvIHRoZSBvYmplY3QgSUQncy4gSW5jbHVkZXMgdGhyZWUgZmlsdGVyczogMSkgNDA0IGVycm9ycyAyKSBwYWludGluZyBjbGFzc2ZpY2F0aW9uIDMpIGVtcHR5IHN0cmluZ1xuICAvLyAgICAgLy8gUHJvbWlzZS5hbGwocGFyc2VkSWRzLm1hcCggYXN5bmMgaWQgPT4gYXdhaXQgZmV0Y2goXCJodHRwczovL2NvbGxlY3Rpb25hcGkubWV0bXVzZXVtLm9yZy9wdWJsaWMvY29sbGVjdGlvbi92MS9vYmplY3RzL1wiICsgaWQpKSlcbiAgLy8gICAgIC8vIC50aGVuKHJlc3BvbnNlcyA9PiB7XG4gIC8vICAgICAvLyAgIC8vZmlsdGVyIG91dCByZXNwb25zZXMgdGhhdCByZXR1cm4gNDA0IFxuICAvLyAgICAgLy8gICBjb25zdCB2YWxpZFJlc3BvbnNlcyA9IHJlc3BvbnNlcy5maWx0ZXIocmVzcG9uc2UgPT4gcmVzcG9uc2Uuc3RhdHVzICE9PSA0MDQpO1xuICAvLyAgICAgLy8gICAgIHJldHVybiBQcm9taXNlLmFsbCh2YWxpZFJlc3BvbnNlcy5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSk7XG4gIC8vICAgICAvLyB9KS50aGVuKGRhdGEgPT4ge1xuICAvLyAgICAgLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gICAgIC8vICAgY29uc3QgcGFpbnRpbmdzID0gIGRhdGEuZmlsdGVyKG9iamVjdCA9PiAob2JqZWN0LmNsYXNzaWZpY2F0aW9uLmluY2x1ZGVzKFwiUGFpbnRpbmdzXCIpKSk7XG4gIC8vICAgICAvLyAgIGNvbnNvbGUubG9nKHBhaW50aW5ncyk7XG4gIC8vICAgICAvLyAgIGNvbnN0IHVybHMgPSBwYWludGluZ3MubWFwKCBvYmplY3QgPT4gb2JqZWN0LnByaW1hcnlJbWFnZVNtYWxsKTtcbiAgLy8gICAgIC8vICAgY29uc29sZS5sb2codXJscyk7XG5cbiAgLy8gICAgIC8vICAgZnVuY3Rpb24gZmlsdGVyTGlzdCh1cmxzKXtcbiAgLy8gICAgIC8vICAgICByZXR1cm4gdXJscy5maWx0ZXIodXJsID0+IHtcbiAgLy8gICAgIC8vICAgICAgIGlmICh1cmwgPT09ICcnKXtcbiAgLy8gICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAvLyAgICAgLy8gICAgICAgfSBcbiAgLy8gICAgIC8vICAgICAgIHJldHVybiB0cnVlO1xuICAvLyAgICAgLy8gICAgIH0pXG4gIC8vICAgICAvLyAgIH07XG5cbiAgLy8gICAgIC8vICAgY29uc3QgZmlsdGVyZWRMaXN0ID0gZmlsdGVyTGlzdCh1cmxzKTtcbiAgLy8gICAgIC8vICAgY29uc29sZS5sb2coZmlsdGVyZWRMaXN0KTtcbiAgLy8gICAgIC8vIH0pO1xuICAgICBcbiAgLy8gICAgIC8vIHNldEltYWdlcyhpbWFnZVVSTFMpO1xuICAvLyAgICAgLy8gc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICB9XG4gIC8vICAgLy8gZ2V0SW1hZ2VzKCk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SW1hZ2VMaXN0IC8+XG4gICAgICA8QXVkaW9Db250cm9sIC8+XG4gICAgICA8TmF2IC8+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJOYXYiLCJBdWRpb0NvbnRyb2wiLCJJbWFnZUxpc3QiLCJzbGlkZXNob3ciLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJzbGlkZXNob3dFbGVtZW50IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcnRDb250YWluZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZ2V0QW5pbWF0aW9ucyIsImZvckVhY2giLCJhbmltIiwiY2FuY2VsIiwicGxheSIsImFuaW1hdGlvbiIsImFuaW1hdGUiLCJ0cmFuc2Zvcm0iLCJkdXJhdGlvbiIsIml0ZXJhdGlvbnMiLCJJbmZpbml0eSIsImNvbW1pdFN0eWxlcyIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJpbWFnZVVSTFMiLCJtYXBwZWRJbWFnZXMiLCJBcnJheSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiZmlsbCIsIm1hcCIsIl8iLCJpbmRleCIsInNsaWNlIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwiaW1hZ2VBcnJheSIsImltZyIsInNyYyIsIkltYWdlQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});