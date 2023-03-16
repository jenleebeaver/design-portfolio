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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nfunction ImageList() {\n    _s();\n    let slideshow = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const slideshowElement = slideshow.current.querySelector(\".art-slideshow\");\n        const artContainerHeight = slideshowElement.offsetHeight - window.innerHeight;\n        document.getAnimations().forEach((anim)=>{\n            anim.cancel();\n            anim.play();\n        });\n        const animation = slideshowElement.animate([\n            {\n                transform: \"translateY(-\".concat(artContainerHeight, \"px)\")\n            }\n        ], {\n            duration: 200000,\n            iterations: Infinity\n        });\n        animation.commitStyles();\n    }, []);\n    //commented out last four URLS to have no remainders left over in a group of 5\n    const imageURLS = [\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP123847.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1943.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14201-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-21959-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-20613-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1027.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-23704-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1500.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT10262.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1952.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP231550.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1860.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1944.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3131.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/ep1974.356.35.R.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3117.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP341200.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-043.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1864.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-037.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1139.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1863.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1867.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1559.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT837.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1866.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1954.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3113.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-049.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP317780.jpg\"\n    ];\n    const mappedImages = Array(Math.ceil(imageURLS.length / 5)).fill().map((_, index)=>imageURLS.slice(index * 5, index * 5 + 5));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: slideshow,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"art-slideshow\",\n            children: mappedImages.map((imageArray)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"a\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[0]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"b\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[1]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"c\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[2]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[3]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"e\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[4]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageList, \"Igeu0LJKY3qxNiynOtg34cL7axc=\");\n_c = ImageList;\nfunction ImageContainer(param) {\n    let {} = param;\n    _s1();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{});\n    // FETCHING DATA FROM MET API \n    // const [images, setImages] = React.useState([]);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        async function getImages() {\n            setIsLoading(true);\n            // FETCHING DATA FROM MET API \n            // returning an array of object ID's with French Art between 1890-1900 - Belle Epoque (era of progress and prosperity)/ Impressionists \n            const idResponse = await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=1890&dateEnd=1900&q=French\");\n            const idJSON = await idResponse.json();\n            const parsedIds = idJSON.objectIDs.slice(0, 500);\n            console.log(parsedIds);\n            //returning an array of object URL's associated to the object ID's\n            Promise.all(parsedIds.map(async (id)=>await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/objects/\" + id))).then((responses)=>{\n                //filter out responses that return 404 \n                const validResponses = responses.filter((response)=>response.status !== 404);\n                return Promise.all(validResponses.map((response)=>response.json()));\n            }).then((data)=>{\n                console.log(data);\n                paintings = data.filter((object)=>object.classification.includes(\"Paintings\"));\n                console.log(paintings);\n            });\n        // function filterClassification(data){\n        //   return data.filter(object => object.classification.includes(\"Paintings\"))\n        // }\n        // const urls = objects.map( object => object.url);\n        // const promiseURLObjects = urls.map(async url => await (await fetch(url)).json());\n        // const urlObjects = await Promise.all(promiseURLObjects);\n        // const filteredClassification = filterClassification(urlObjects);\n        // const imageURLList = filteredClassification.map( object => object.primaryImageSmall);\n        // function filterList(imageURLList){\n        //   return imageURLList.filter(url => {\n        //     if (url === ''){\n        //       return false;\n        //     } \n        //     return true;\n        //   })\n        // };\n        // const filteredList = filterList(imageURLList);\n        // console.log(filteredList);\n        // setImages(imageURLS);\n        // setIsLoading(false);\n        }\n        getImages();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageList, {\n            isLoading: isLoading\n        }, void 0, false, {\n            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n            lineNumber: 166,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n        lineNumber: 165,\n        columnNumber: 5\n    }, this);\n}\n_s1(ImageContainer, \"jO5DXEX+GSEm8ZRVBzxvoV7+uzo=\");\n_c1 = ImageContainer;\nvar _c, _c1;\n$RefreshReg$(_c, \"ImageList\");\n$RefreshReg$(_c1, \"ImageContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNFQUFzRVMsTUFDdkhDLElBQUksQ0FBQ0MsQ0FBQUEsWUFBYTtnQkFDakIsdUNBQXVDO2dCQUN2QyxNQUFNQyxpQkFBaUJELFVBQVVFLE1BQU0sQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsTUFBTSxLQUFLO2dCQUN0RSxPQUFPUixRQUFRQyxHQUFHLENBQUNJLGVBQWU1QixHQUFHLENBQUM4QixDQUFBQSxXQUFZQSxTQUFTWixJQUFJO1lBQ25FLEdBQUdRLElBQUksQ0FBQ00sQ0FBQUEsT0FBUTtnQkFDZFgsUUFBUUMsR0FBRyxDQUFDVTtnQkFDWkMsWUFBYUQsS0FBS0gsTUFBTSxDQUFDSyxDQUFBQSxTQUFVQSxPQUFPQyxjQUFjLENBQUNDLFFBQVEsQ0FBQztnQkFDbEVmLFFBQVFDLEdBQUcsQ0FBQ1c7WUFDZDtRQUVBLHVDQUF1QztRQUN2Qyw4RUFBOEU7UUFDOUUsSUFBSTtRQUdKLG1EQUFtRDtRQUNuRCxvRkFBb0Y7UUFDcEYsMkRBQTJEO1FBSTNELG1FQUFtRTtRQUNuRSx3RkFBd0Y7UUFFeEYscUNBQXFDO1FBQ3JDLHdDQUF3QztRQUN4Qyx1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLFNBQVM7UUFDVCxtQkFBbUI7UUFDbkIsT0FBTztRQUNQLEtBQUs7UUFFTCxpREFBaUQ7UUFDakQsNkJBQTZCO1FBRTdCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDekI7UUFDQW5CO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNWO2tCQUNDLDRFQUFDbkM7WUFBVTBDLFdBQVdBOzs7Ozs7Ozs7OztBQUc1QixDQUFDO0lBckV1QkQ7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gSW1hZ2VMaXN0KCl7XG4gIGxldCBzbGlkZXNob3cgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzbGlkZXNob3dFbGVtZW50ID0gc2xpZGVzaG93LmN1cnJlbnQucXVlcnlTZWxlY3RvcignLmFydC1zbGlkZXNob3cnKTsgICAgXG4gICAgXG4gICAgY29uc3QgYXJ0Q29udGFpbmVySGVpZ2h0ID0gc2xpZGVzaG93RWxlbWVudC5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIGRvY3VtZW50LmdldEFuaW1hdGlvbnMoKS5mb3JFYWNoKChhbmltKSA9PiB7XG4gICAgICBhbmltLmNhbmNlbCgpO1xuICAgICAgYW5pbS5wbGF5KCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgYW5pbWF0aW9uID0gc2xpZGVzaG93RWxlbWVudC5hbmltYXRlKFtcbiAgICAgICAgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0ke2FydENvbnRhaW5lckhlaWdodH1weClgfVxuICAgICAgXSwge1xuICAgICAgICBkdXJhdGlvbjogMjAwMDAwLCBcbiAgICAgICAgaXRlcmF0aW9uczogSW5maW5pdHksXG4gICAgICB9KTtcblxuICAgICAgYW5pbWF0aW9uLmNvbW1pdFN0eWxlcygpO1xuICBcbiAgfSwgW10pO1xuXG4gIFxuXG4gIC8vY29tbWVudGVkIG91dCBsYXN0IGZvdXIgVVJMUyB0byBoYXZlIG5vIHJlbWFpbmRlcnMgbGVmdCBvdmVyIGluIGEgZ3JvdXAgb2YgNVxuICBjb25zdCBpbWFnZVVSTFMgPSBbXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUDEyMzg0Ny5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTk0My5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQLTE0MjAxLTAwMS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQLTIxOTU5LTAwMS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQLTIwNjEzLTAwMS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTAyNy5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQLTIzNzA0LTAwMS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTUwMC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTAyNjIuanBnJyxcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTk1Mi5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQMjMxNTUwLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxODYwLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxOTQ0LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9ybC93ZWItbGFyZ2UvRFQzMTMxLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvZXAxOTc0LjM1Ni4zNS5SLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9ybC93ZWItbGFyZ2UvRFQzMTE3LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAzNDEyMDAuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0xNDkzNi0wNDMuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE4NjQuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0xNDkzNi0wMzcuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDExMzkuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE4NjMuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE4NjcuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE1NTkuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDgzNy5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTg2Ni5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTk1NC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvcmwvd2ViLWxhcmdlL0RUMzExMy5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQLTE0OTM2LTA0OS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQMzE3NzgwLmpwZycsIFxuICAgICBcbiAgICBcbiAgIFxuICAgXG4gIF1cblxuICBjb25zdCBtYXBwZWRJbWFnZXMgPSBBcnJheShNYXRoLmNlaWwoaW1hZ2VVUkxTLmxlbmd0aCAvIDUpKVxuICAgIC5maWxsKClcbiAgICAubWFwKChfLCBpbmRleCkgPT4gaW1hZ2VVUkxTLnNsaWNlKGluZGV4ICogNSwgaW5kZXggKiA1ICsgNSkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e3NsaWRlc2hvd30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydC1zbGlkZXNob3dcIj5cbiAgICAgICAgICB7bWFwcGVkSW1hZ2VzLm1hcCgoaW1hZ2VBcnJheSkgPT4geyBcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUFycmF5WzBdfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VBcnJheVsxXX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlQXJyYXlbMl19Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUFycmF5WzNdfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VBcnJheVs0XX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZUNvbnRhaW5lcih7fSkge1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgfSlcblxuICAvLyBGRVRDSElORyBEQVRBIEZST00gTUVUIEFQSSBcbiAgLy8gY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEltYWdlcygpIHtcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgICAgLy8gRkVUQ0hJTkcgREFUQSBGUk9NIE1FVCBBUEkgXG4gICAgICAvLyByZXR1cm5pbmcgYW4gYXJyYXkgb2Ygb2JqZWN0IElEJ3Mgd2l0aCBGcmVuY2ggQXJ0IGJldHdlZW4gMTg5MC0xOTAwIC0gQmVsbGUgRXBvcXVlIChlcmEgb2YgcHJvZ3Jlc3MgYW5kIHByb3NwZXJpdHkpLyBJbXByZXNzaW9uaXN0cyBcbiAgICAgIGNvbnN0IGlkUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vY29sbGVjdGlvbmFwaS5tZXRtdXNldW0ub3JnL3B1YmxpYy9jb2xsZWN0aW9uL3YxL3NlYXJjaD9kYXRlQmVnaW49MTg5MCZkYXRlRW5kPTE5MDAmcT1GcmVuY2hcIik7XG4gICAgICBjb25zdCBpZEpTT04gPSBhd2FpdCBpZFJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IHBhcnNlZElkcyA9IGlkSlNPTi5vYmplY3RJRHMuc2xpY2UoMCw1MDApO1xuICAgICAgY29uc29sZS5sb2cocGFyc2VkSWRzKTtcbiAgICAgIC8vcmV0dXJuaW5nIGFuIGFycmF5IG9mIG9iamVjdCBVUkwncyBhc3NvY2lhdGVkIHRvIHRoZSBvYmplY3QgSUQnc1xuICAgICBQcm9taXNlLmFsbChwYXJzZWRJZHMubWFwKCBhc3luYyBpZCA9PiBhd2FpdCBmZXRjaChcImh0dHBzOi8vY29sbGVjdGlvbmFwaS5tZXRtdXNldW0ub3JnL3B1YmxpYy9jb2xsZWN0aW9uL3YxL29iamVjdHMvXCIgKyBpZCkpKVxuICAgICAgLnRoZW4ocmVzcG9uc2VzID0+IHtcbiAgICAgICAgLy9maWx0ZXIgb3V0IHJlc3BvbnNlcyB0aGF0IHJldHVybiA0MDQgXG4gICAgICAgIGNvbnN0IHZhbGlkUmVzcG9uc2VzID0gcmVzcG9uc2VzLmZpbHRlcihyZXNwb25zZSA9PiByZXNwb25zZS5zdGF0dXMgIT09IDQwNCk7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHZhbGlkUmVzcG9uc2VzLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpKTtcbiAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBwYWludGluZ3MgPSAgZGF0YS5maWx0ZXIob2JqZWN0ID0+IG9iamVjdC5jbGFzc2lmaWNhdGlvbi5pbmNsdWRlcyhcIlBhaW50aW5nc1wiKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhaW50aW5ncyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gZnVuY3Rpb24gZmlsdGVyQ2xhc3NpZmljYXRpb24oZGF0YSl7XG4gICAgICAvLyAgIHJldHVybiBkYXRhLmZpbHRlcihvYmplY3QgPT4gb2JqZWN0LmNsYXNzaWZpY2F0aW9uLmluY2x1ZGVzKFwiUGFpbnRpbmdzXCIpKVxuICAgICAgLy8gfVxuXG5cbiAgICAgIC8vIGNvbnN0IHVybHMgPSBvYmplY3RzLm1hcCggb2JqZWN0ID0+IG9iamVjdC51cmwpO1xuICAgICAgLy8gY29uc3QgcHJvbWlzZVVSTE9iamVjdHMgPSB1cmxzLm1hcChhc3luYyB1cmwgPT4gYXdhaXQgKGF3YWl0IGZldGNoKHVybCkpLmpzb24oKSk7XG4gICAgICAvLyBjb25zdCB1cmxPYmplY3RzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZVVSTE9iamVjdHMpO1xuXG4gICAgICBcblxuICAgICAgLy8gY29uc3QgZmlsdGVyZWRDbGFzc2lmaWNhdGlvbiA9IGZpbHRlckNsYXNzaWZpY2F0aW9uKHVybE9iamVjdHMpO1xuICAgICAgLy8gY29uc3QgaW1hZ2VVUkxMaXN0ID0gZmlsdGVyZWRDbGFzc2lmaWNhdGlvbi5tYXAoIG9iamVjdCA9PiBvYmplY3QucHJpbWFyeUltYWdlU21hbGwpO1xuICAgICBcbiAgICAgIC8vIGZ1bmN0aW9uIGZpbHRlckxpc3QoaW1hZ2VVUkxMaXN0KXtcbiAgICAgIC8vICAgcmV0dXJuIGltYWdlVVJMTGlzdC5maWx0ZXIodXJsID0+IHtcbiAgICAgIC8vICAgICBpZiAodXJsID09PSAnJyl7XG4gICAgICAvLyAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvLyAgICAgfSBcbiAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vIH07XG5cbiAgICAgIC8vIGNvbnN0IGZpbHRlcmVkTGlzdCA9IGZpbHRlckxpc3QoaW1hZ2VVUkxMaXN0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcmVkTGlzdCk7XG5cbiAgICAgIC8vIHNldEltYWdlcyhpbWFnZVVSTFMpO1xuICAgICAgLy8gc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZ2V0SW1hZ2VzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SW1hZ2VMaXN0IGlzTG9hZGluZz17aXNMb2FkaW5nfSAvPlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2VMaXN0Iiwic2xpZGVzaG93IiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic2xpZGVzaG93RWxlbWVudCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXJ0Q29udGFpbmVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudCIsImdldEFuaW1hdGlvbnMiLCJmb3JFYWNoIiwiYW5pbSIsImNhbmNlbCIsInBsYXkiLCJhbmltYXRpb24iLCJhbmltYXRlIiwidHJhbnNmb3JtIiwiZHVyYXRpb24iLCJpdGVyYXRpb25zIiwiSW5maW5pdHkiLCJjb21taXRTdHlsZXMiLCJpbWFnZVVSTFMiLCJtYXBwZWRJbWFnZXMiLCJBcnJheSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiZmlsbCIsIm1hcCIsIl8iLCJpbmRleCIsInNsaWNlIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwiaW1hZ2VBcnJheSIsImltZyIsInNyYyIsIkltYWdlQ29udGFpbmVyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlU3RhdGUiLCJnZXRJbWFnZXMiLCJpZFJlc3BvbnNlIiwiZmV0Y2giLCJpZEpTT04iLCJqc29uIiwicGFyc2VkSWRzIiwib2JqZWN0SURzIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJhbGwiLCJpZCIsInRoZW4iLCJyZXNwb25zZXMiLCJ2YWxpZFJlc3BvbnNlcyIsImZpbHRlciIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGF0YSIsInBhaW50aW5ncyIsIm9iamVjdCIsImNsYXNzaWZpY2F0aW9uIiwiaW5jbHVkZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});