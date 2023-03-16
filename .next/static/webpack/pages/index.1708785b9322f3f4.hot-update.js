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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nfunction ImageList() {\n    _s();\n    let slideshow = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const slideshowElement = slideshow.current.querySelector(\".art-slideshow\");\n        const artContainerHeight = slideshowElement.offsetHeight - window.innerHeight;\n        document.getAnimations().forEach((anim)=>{\n            anim.cancel();\n            anim.play();\n        });\n        const animation = slideshowElement.animate([\n            {\n                transform: \"translateY(-\".concat(artContainerHeight, \"px)\")\n            }\n        ], {\n            duration: 200000,\n            iterations: Infinity\n        });\n        animation.commitStyles();\n    }, []);\n    //commented out last four URLS to have no remainders left over in a group of 5\n    const imageURLS1 = [\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP123847.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1943.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14201-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-21959-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-20613-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1027.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-23704-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1500.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT10262.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1952.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP231550.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1860.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1944.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3131.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/ep1974.356.35.R.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3117.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP341200.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-043.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1864.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-037.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1139.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1863.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1867.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1559.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT837.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1866.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1954.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3113.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-049.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP317780.jpg\"\n    ];\n    const mappedImages = Array(Math.ceil(imageURLS1.length / 5)).fill().map((_, index)=>imageURLS1.slice(index * 5, index * 5 + 5));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: slideshow,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"art-slideshow\",\n            children: mappedImages.map((imageArray)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"a\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[0]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"b\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[1]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"c\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[2]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[3]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"e\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[4]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageList, \"Igeu0LJKY3qxNiynOtg34cL7axc=\");\n_c = ImageList;\nfunction ImageContainer(param) {\n    let {} = param;\n    _s1();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{});\n    // FETCHING DATA FROM MET API \n    // const [images, setImages] = React.useState([]);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        async function getImages() {\n            setIsLoading(true);\n            // FETCHING DATA FROM MET API \n            //returning an array of object ID's with French Art between 1890-1900 - Belle Epoque (era of progress and prosperity)/ Impressionists \n            // const idResponse = await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=1890&dateEnd=1900&q=French\");\n            // const idJSON = await idResponse.json();\n            // const parsedIds = idJSON.objectIDs;\n            // //returning an array of object URL's associated to the object ID's\n            // const promiseObjects = parsedIds.map( async id => await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/objects/\" + id));\n            // const objects = await Promise.all(promiseObjects);\n            // const urls = objects.map( object => object.url);\n            // const promiseURLObjects = urls.map(async url => await (await fetch(url)).json());\n            // const urlObjects = await Promise.all(promiseURLObjects);\n            // function filterClassification(urlObjects){\n            //   return urlObjects.filter(urlObject => urlObject.classification.includes(\"Paintings\"))\n            // }\n            // const filteredClassification = filterClassification(urlObjects);\n            // const imageURLList = filteredClassification.map( object => object.primaryImageSmall);\n            // function filterList(imageURLList){\n            //   return imageURLList.filter(url => {\n            //     if (url === ''){\n            //       return false;\n            //     } \n            //     return true;\n            //   })\n            // };\n            // const filteredList = filterList(imageURLList);\n            setImages(imageURLS);\n            setIsLoading(false);\n        }\n        getImages();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageList, {\n            isLoading: isLoading\n        }, void 0, false, {\n            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n            lineNumber: 152,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n        lineNumber: 151,\n        columnNumber: 5\n    }, this);\n}\n_s1(ImageContainer, \"jO5DXEX+GSEm8ZRVBzxvoV7+uzo=\");\n_c1 = ImageContainer;\nvar _c, _c1;\n$RefreshReg$(_c, \"ImageList\");\n$RefreshReg$(_c1, \"ImageContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUUxQixTQUFTQyxZQUFXOztJQUNsQixJQUFJQyxZQUFZRixtREFBWSxDQUFDLElBQUk7SUFFakNBLHNEQUFlLENBQUMsSUFBTTtRQUNwQixNQUFNSyxtQkFBbUJILFVBQVVJLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDO1FBRXpELE1BQU1DLHFCQUFxQkgsaUJBQWlCSSxZQUFZLEdBQUdDLE9BQU9DLFdBQVc7UUFFM0VDLFNBQVNDLGFBQWEsR0FBR0MsT0FBTyxDQUFDLENBQUNDLE9BQVM7WUFDM0NBLEtBQUtDLE1BQU07WUFDWEQsS0FBS0UsSUFBSTtRQUNUO1FBRUEsTUFBTUMsWUFBWWIsaUJBQWlCYyxPQUFPLENBQUM7WUFDekM7Z0JBQUVDLFdBQVcsZUFBa0MsT0FBbkJaLG9CQUFtQjtZQUFJO1NBQ3BELEVBQUU7WUFDRGEsVUFBVTtZQUNWQyxZQUFZQztRQUNkO1FBRUFMLFVBQVVNLFlBQVk7SUFFMUIsR0FBRyxFQUFFO0lBSUwsOEVBQThFO0lBQzlFLE1BQU1DLGFBQVk7UUFDaEI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBS0Q7SUFFRCxNQUFNQyxlQUFlQyxNQUFNQyxLQUFLQyxJQUFJLENBQUNKLFdBQVVLLE1BQU0sR0FBRyxJQUNyREMsSUFBSSxHQUNKQyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0MsUUFBVVQsV0FBVVUsS0FBSyxDQUFDRCxRQUFRLEdBQUdBLFFBQVEsSUFBSTtJQUU1RCxxQkFDRSw4REFBQ0U7UUFBSUMsS0FBS25DO2tCQUNSLDRFQUFDa0M7WUFBSUUsV0FBVTtzQkFDVlosYUFBYU0sR0FBRyxDQUFDLENBQUNPLGFBQWU7Z0JBQ2hDLHFCQUNGLDhEQUFDSDtvQkFBSUUsV0FBVTs7c0NBQ1gsOERBQUNGOzRCQUFJRSxXQUFVO3NDQUNiLDRFQUFDRTtnQ0FBSUMsS0FBS0YsVUFBVSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7O3NDQUV6Qiw4REFBQ0g7NEJBQUlFLFdBQVU7c0NBQ2IsNEVBQUNFO2dDQUFJQyxLQUFLRixVQUFVLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7c0NBRXpCLDhEQUFDSDs0QkFBSUUsV0FBVTtzQ0FDYiw0RUFBQ0U7Z0NBQUlDLEtBQUtGLFVBQVUsQ0FBQyxFQUFFOzs7Ozs7Ozs7OztzQ0FFekIsOERBQUNIOzRCQUFJRSxXQUFVO3NDQUNiLDRFQUFDRTtnQ0FBSUMsS0FBS0YsVUFBVSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7O3NDQUV6Qiw4REFBQ0g7NEJBQUlFLFdBQVU7c0NBQ2IsNEVBQUNFO2dDQUFJQyxLQUFLRixVQUFVLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJN0I7Ozs7Ozs7Ozs7O0FBSVY7R0EvRlN0QztLQUFBQTtBQWlHTSxTQUFTeUMsZUFBZSxLQUFFLEVBQUU7UUFBSixFQUFFLEdBQUY7O0lBRXJDMUMsc0RBQWUsQ0FBQyxJQUFNLENBRXRCO0lBRUEsOEJBQThCO0lBQzlCLGtEQUFrRDtJQUNsRCxNQUFNLENBQUMyQyxXQUFXQyxhQUFhLEdBQUc1QyxxREFBYyxDQUFDLEtBQUs7SUFFdERBLHNEQUFlLENBQUMsSUFBTTtRQUNwQixlQUFlOEMsWUFBWTtZQUN6QkYsYUFBYSxJQUFJO1lBRWpCLDhCQUE4QjtZQUM5QixzSUFBc0k7WUFDdEksMElBQTBJO1lBQzFJLDBDQUEwQztZQUMxQyxzQ0FBc0M7WUFDdEMscUVBQXFFO1lBQ3JFLDRJQUE0STtZQUM1SSxxREFBcUQ7WUFDckQsbURBQW1EO1lBQ25ELG9GQUFvRjtZQUNwRiwyREFBMkQ7WUFFM0QsNkNBQTZDO1lBQzdDLDBGQUEwRjtZQUMxRixJQUFJO1lBRUosbUVBQW1FO1lBQ25FLHdGQUF3RjtZQUV4RixxQ0FBcUM7WUFDckMsd0NBQXdDO1lBQ3hDLHVCQUF1QjtZQUN2QixzQkFBc0I7WUFDdEIsU0FBUztZQUNULG1CQUFtQjtZQUNuQixPQUFPO1lBQ1AsS0FBSztZQUVMLGlEQUFpRDtZQUVqREcsVUFBVXRCO1lBQ1ZtQixhQUFhLEtBQUs7UUFDcEI7UUFDQUU7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1Y7a0JBQ0MsNEVBQUNuQztZQUFVMEMsV0FBV0E7Ozs7Ozs7Ozs7O0FBRzVCLENBQUM7SUF2RHVCRDtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBJbWFnZUxpc3QoKXtcbiAgbGV0IHNsaWRlc2hvdyA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlc2hvd0VsZW1lbnQgPSBzbGlkZXNob3cuY3VycmVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0LXNsaWRlc2hvdycpOyAgICBcbiAgICBcbiAgICBjb25zdCBhcnRDb250YWluZXJIZWlnaHQgPSBzbGlkZXNob3dFbGVtZW50Lm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgZG9jdW1lbnQuZ2V0QW5pbWF0aW9ucygpLmZvckVhY2goKGFuaW0pID0+IHtcbiAgICAgIGFuaW0uY2FuY2VsKCk7XG4gICAgICBhbmltLnBsYXkoKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBhbmltYXRpb24gPSBzbGlkZXNob3dFbGVtZW50LmFuaW1hdGUoW1xuICAgICAgICB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLSR7YXJ0Q29udGFpbmVySGVpZ2h0fXB4KWB9XG4gICAgICBdLCB7XG4gICAgICAgIGR1cmF0aW9uOiAyMDAwMDAsIFxuICAgICAgICBpdGVyYXRpb25zOiBJbmZpbml0eSxcbiAgICAgIH0pO1xuXG4gICAgICBhbmltYXRpb24uY29tbWl0U3R5bGVzKCk7XG4gIFxuICB9LCBbXSk7XG5cbiAgXG5cbiAgLy9jb21tZW50ZWQgb3V0IGxhc3QgZm91ciBVUkxTIHRvIGhhdmUgbm8gcmVtYWluZGVycyBsZWZ0IG92ZXIgaW4gYSBncm91cCBvZiA1XG4gIGNvbnN0IGltYWdlVVJMUyA9IFtcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQMTIzODQ3LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxOTQzLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMTQyMDEtMDAxLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMjE5NTktMDAxLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMjA2MTMtMDAxLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxMDI3LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMjM3MDQtMDAxLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxNTAwLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxMDI2Mi5qcGcnLFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxOTUyLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAyMzE1NTAuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE4NjAuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE5NDQuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL3JsL3dlYi1sYXJnZS9EVDMxMzEuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9lcDE5NzQuMzU2LjM1LlIuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL3JsL3dlYi1sYXJnZS9EVDMxMTcuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUDM0MTIwMC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQLTE0OTM2LTA0My5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTg2NC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQLTE0OTM2LTAzNy5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTEzOS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTg2My5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTg2Ny5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTU1OS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUODM3LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxODY2LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxOTU0LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9ybC93ZWItbGFyZ2UvRFQzMTEzLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMTQ5MzYtMDQ5LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAzMTc3ODAuanBnJywgXG4gICAgIFxuICAgIFxuICAgXG4gICBcbiAgXVxuXG4gIGNvbnN0IG1hcHBlZEltYWdlcyA9IEFycmF5KE1hdGguY2VpbChpbWFnZVVSTFMubGVuZ3RoIC8gNSkpXG4gICAgLmZpbGwoKVxuICAgIC5tYXAoKF8sIGluZGV4KSA9PiBpbWFnZVVSTFMuc2xpY2UoaW5kZXggKiA1LCBpbmRleCAqIDUgKyA1KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17c2xpZGVzaG93fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXNsaWRlc2hvd1wiPlxuICAgICAgICAgIHttYXBwZWRJbWFnZXMubWFwKChpbWFnZUFycmF5KSA9PiB7IFxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlQXJyYXlbMF19Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYlwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUFycmF5WzFdfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VBcnJheVsyXX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlQXJyYXlbM119Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUFycmF5WzRdfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlQ29udGFpbmVyKHt9KSB7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblxuICB9KVxuXG4gIC8vIEZFVENISU5HIERBVEEgRlJPTSBNRVQgQVBJIFxuICAvLyBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0SW1hZ2VzKCkge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgICAvLyBGRVRDSElORyBEQVRBIEZST00gTUVUIEFQSSBcbiAgICAgIC8vcmV0dXJuaW5nIGFuIGFycmF5IG9mIG9iamVjdCBJRCdzIHdpdGggRnJlbmNoIEFydCBiZXR3ZWVuIDE4OTAtMTkwMCAtIEJlbGxlIEVwb3F1ZSAoZXJhIG9mIHByb2dyZXNzIGFuZCBwcm9zcGVyaXR5KS8gSW1wcmVzc2lvbmlzdHMgXG4gICAgICAvLyBjb25zdCBpZFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2NvbGxlY3Rpb25hcGkubWV0bXVzZXVtLm9yZy9wdWJsaWMvY29sbGVjdGlvbi92MS9zZWFyY2g/ZGF0ZUJlZ2luPTE4OTAmZGF0ZUVuZD0xOTAwJnE9RnJlbmNoXCIpO1xuICAgICAgLy8gY29uc3QgaWRKU09OID0gYXdhaXQgaWRSZXNwb25zZS5qc29uKCk7XG4gICAgICAvLyBjb25zdCBwYXJzZWRJZHMgPSBpZEpTT04ub2JqZWN0SURzO1xuICAgICAgLy8gLy9yZXR1cm5pbmcgYW4gYXJyYXkgb2Ygb2JqZWN0IFVSTCdzIGFzc29jaWF0ZWQgdG8gdGhlIG9iamVjdCBJRCdzXG4gICAgICAvLyBjb25zdCBwcm9taXNlT2JqZWN0cyA9IHBhcnNlZElkcy5tYXAoIGFzeW5jIGlkID0+IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9jb2xsZWN0aW9uYXBpLm1ldG11c2V1bS5vcmcvcHVibGljL2NvbGxlY3Rpb24vdjEvb2JqZWN0cy9cIiArIGlkKSk7XG4gICAgICAvLyBjb25zdCBvYmplY3RzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZU9iamVjdHMpO1xuICAgICAgLy8gY29uc3QgdXJscyA9IG9iamVjdHMubWFwKCBvYmplY3QgPT4gb2JqZWN0LnVybCk7XG4gICAgICAvLyBjb25zdCBwcm9taXNlVVJMT2JqZWN0cyA9IHVybHMubWFwKGFzeW5jIHVybCA9PiBhd2FpdCAoYXdhaXQgZmV0Y2godXJsKSkuanNvbigpKTtcbiAgICAgIC8vIGNvbnN0IHVybE9iamVjdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlVVJMT2JqZWN0cyk7XG5cbiAgICAgIC8vIGZ1bmN0aW9uIGZpbHRlckNsYXNzaWZpY2F0aW9uKHVybE9iamVjdHMpe1xuICAgICAgLy8gICByZXR1cm4gdXJsT2JqZWN0cy5maWx0ZXIodXJsT2JqZWN0ID0+IHVybE9iamVjdC5jbGFzc2lmaWNhdGlvbi5pbmNsdWRlcyhcIlBhaW50aW5nc1wiKSlcbiAgICAgIC8vIH1cblxuICAgICAgLy8gY29uc3QgZmlsdGVyZWRDbGFzc2lmaWNhdGlvbiA9IGZpbHRlckNsYXNzaWZpY2F0aW9uKHVybE9iamVjdHMpO1xuICAgICAgLy8gY29uc3QgaW1hZ2VVUkxMaXN0ID0gZmlsdGVyZWRDbGFzc2lmaWNhdGlvbi5tYXAoIG9iamVjdCA9PiBvYmplY3QucHJpbWFyeUltYWdlU21hbGwpO1xuICAgICBcbiAgICAgIC8vIGZ1bmN0aW9uIGZpbHRlckxpc3QoaW1hZ2VVUkxMaXN0KXtcbiAgICAgIC8vICAgcmV0dXJuIGltYWdlVVJMTGlzdC5maWx0ZXIodXJsID0+IHtcbiAgICAgIC8vICAgICBpZiAodXJsID09PSAnJyl7XG4gICAgICAvLyAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvLyAgICAgfSBcbiAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vIH07XG5cbiAgICAgIC8vIGNvbnN0IGZpbHRlcmVkTGlzdCA9IGZpbHRlckxpc3QoaW1hZ2VVUkxMaXN0KTtcblxuICAgICAgc2V0SW1hZ2VzKGltYWdlVVJMUyk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBnZXRJbWFnZXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJbWFnZUxpc3QgaXNMb2FkaW5nPXtpc0xvYWRpbmd9IC8+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZUxpc3QiLCJzbGlkZXNob3ciLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJzbGlkZXNob3dFbGVtZW50IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcnRDb250YWluZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZ2V0QW5pbWF0aW9ucyIsImZvckVhY2giLCJhbmltIiwiY2FuY2VsIiwicGxheSIsImFuaW1hdGlvbiIsImFuaW1hdGUiLCJ0cmFuc2Zvcm0iLCJkdXJhdGlvbiIsIml0ZXJhdGlvbnMiLCJJbmZpbml0eSIsImNvbW1pdFN0eWxlcyIsImltYWdlVVJMUyIsIm1hcHBlZEltYWdlcyIsIkFycmF5IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJmaWxsIiwibWFwIiwiXyIsImluZGV4Iiwic2xpY2UiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJpbWFnZUFycmF5IiwiaW1nIiwic3JjIiwiSW1hZ2VDb250YWluZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImdldEltYWdlcyIsInNldEltYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});