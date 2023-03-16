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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nfunction ImageList() {\n    _s();\n    let slideshow = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    let clones = [];\n    let disableScroll = false;\n    let scrollheight = 0;\n    let scrollpos = 0;\n    let clonesHeight = 0;\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const slideshowElement = slideshow.current.querySelector(\".art-slideshow\");\n        function getScrollPos() {\n            return slideshowElement.scrollTop; //amount window scrolled\n        }\n        function setScrollPos(pos) {\n            slideshowElement.scrollTop = pos;\n        }\n        function getClonesHeight() {\n            clonesHeight = 0;\n            clones.forEach((clone)=>{\n                clonesHeight += clone.offsetHeight; //height of element\n            });\n            return clonesHeight;\n        }\n        //recalculate dimesnions of screen when resized\n        function reCalc() {\n            scrollpos = getScrollPos();\n            scrollheight = slideshowElement.scrollHeight; // height of elements content\n            clonesHeight = getClonesHeight();\n            if (scrollpos <= 0) {\n                setScrollPos(1); //allows scroll up \n            }\n        }\n        function scrollUpdate() {\n            if (!disableScroll) {\n                scrollpos = getScrollPos();\n                if (clonesHeight + scrollpos >= scrollheight) {\n                    //Scroll back to top when we reach bottom of page \n                    setScrollPos(1);\n                    disableScroll = true;\n                } else if (scrollpos <= 0) {\n                    //Scroll to bottom when we reach the top \n                    setScrollPos(scrollheight - clonesHeight);\n                    disableScroll = true;\n                }\n            }\n            if (disableScroll) {\n                //disable scroll-jumping to avoid flickering effect \n                window.setTimeout(()=>{\n                    disableScroll = false;\n                }, 40);\n            }\n        }\n        function onLoad() {\n            const clone = slideshowElement.cloneNode(true);\n            slideshowElement.parentElement.appendChild(clone);\n            clone.classList.add(\"js-clone\");\n            clones = slideshowElement.querySelectorAll(\".js-clone\");\n            reCalc();\n        // slideshowElement.addEventListener('scroll', () => {\n        //   window.requestAnimationFrame(scrollUpdate);\n        // }, false);\n        // window.addEventListener('resize', () => {\n        //   window.requestAnimationFrame(reCalc)\n        // }, false)\n        }\n        window.onload = onLoad();\n    }, []);\n    //commented out last four URLS to have no remainders left over in a group of 5\n    const imageURLS = [\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP123847.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1943.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14201-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-21959-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-20613-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1027.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1025.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1500.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1924.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1952.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP231550.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1860.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1944.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3131.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DP-17279-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3117.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP341200.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-043.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1864.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-037.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1139.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1863.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1867.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1559.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT837.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1866.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1954.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3113.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-049.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP317780.jpg\"\n    ];\n    const mappedImages = Array(Math.ceil(imageURLS.length / 5)).fill().map((_, index)=>imageURLS.slice(index * 5, index * 5 + 5));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: slideshow,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"art-slideshow\",\n            children: mappedImages.map((imageArray)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"a\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[0]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 137,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 136,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"b\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[1]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 140,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 139,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"c\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[2]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 143,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 142,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[3]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 146,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 145,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"e\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[4]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 149,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 148,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                    lineNumber: 135,\n                    columnNumber: 11\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n            lineNumber: 132,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n        lineNumber: 131,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageList, \"Igeu0LJKY3qxNiynOtg34cL7axc=\");\n_c = ImageList;\nfunction ImageContainer(param) {\n    let {} = param;\n    _s1();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{});\n    // FETCHING DATA FROM MET API \n    // const [images, setImages] = React.useState([]);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    // React.useEffect(() => {\n    //   async function getImages() {\n    //     setIsLoading(true);\n    //     // FETCHING DATA FROM MET API \n    //     //returning an array of object ID's with French Art between 1890-1900 - Belle Epoque (era of progress and prosperity)/ Impressionists \n    //     // const idResponse = await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=1890&dateEnd=1900&q=French\");\n    //     // const idJSON = await idResponse.json();\n    //     // const parsedIds = idJSON.objectIDs;\n    //     // //returning an array of object URL's associated to the object ID's\n    //     // const promiseObjects = parsedIds.map( async id => await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/objects/\" + id));\n    //     // const objects = await Promise.all(promiseObjects);\n    //     // const urls = objects.map( object => object.url);\n    //     // const promiseURLObjects = urls.map(async url => await (await fetch(url)).json());\n    //     // const urlObjects = await Promise.all(promiseURLObjects);\n    //     // function filterClassification(urlObjects){\n    //     //   return urlObjects.filter(urlObject => urlObject.classification.includes(\"Paintings\"))\n    //     // }\n    //     // const filteredClassification = filterClassification(urlObjects);\n    //     // const imageURLList = filteredClassification.map( object => object.primaryImageSmall);\n    //     // function filterList(imageURLList){\n    //     //   return imageURLList.filter(url => {\n    //     //     if (url === ''){\n    //     //       return false;\n    //     //     } \n    //     //     return true;\n    //     //   })\n    //     // };\n    //     // const filteredList = filterList(imageURLList);\n    //     setImages(imageURLS);\n    //     setIsLoading(false);\n    //   }\n    //   getImages();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageList, {\n            isLoading: isLoading\n        }, void 0, false, {\n            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n            lineNumber: 211,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n        lineNumber: 210,\n        columnNumber: 5\n    }, this);\n}\n_s1(ImageContainer, \"1XRtNQiR1cMX2EOFRE5XOTDT+3I=\");\n_c1 = ImageContainer;\nvar _c, _c1;\n$RefreshReg$(_c, \"ImageList\");\n$RefreshReg$(_c1, \"ImageContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLFVBQVU7SUFFVixxQkFDRSw4REFBQzZDO2tCQUNDLDRFQUFDNUM7WUFBVW1ELFdBQVdBOzs7Ozs7Ozs7OztBQUc1QixDQUFDO0lBdkR1QkQ7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gSW1hZ2VMaXN0KCl7XG4gIGxldCBzbGlkZXNob3cgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGxldCBjbG9uZXMgPSBbXTtcbiAgbGV0IGRpc2FibGVTY3JvbGwgPSBmYWxzZTtcbiAgbGV0IHNjcm9sbGhlaWdodCA9IDA7XG4gIGxldCBzY3JvbGxwb3MgPSAwO1xuICBsZXQgY2xvbmVzSGVpZ2h0ID0gMDtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlc2hvd0VsZW1lbnQgPSBzbGlkZXNob3cuY3VycmVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0LXNsaWRlc2hvdycpOyAgICBcblxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbFBvcygpe1xuICAgICAgcmV0dXJuIHNsaWRlc2hvd0VsZW1lbnQuc2Nyb2xsVG9wOyAvL2Ftb3VudCB3aW5kb3cgc2Nyb2xsZWRcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIHNldFNjcm9sbFBvcyhwb3Mpe1xuICAgICAgc2xpZGVzaG93RWxlbWVudC5zY3JvbGxUb3AgPSBwb3M7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBnZXRDbG9uZXNIZWlnaHQoKXtcbiAgICAgIGNsb25lc0hlaWdodCA9IDA7XG4gIFxuICAgICAgY2xvbmVzLmZvckVhY2goY2xvbmUgPT4ge1xuICAgICAgICBjbG9uZXNIZWlnaHQgKz0gY2xvbmUub2Zmc2V0SGVpZ2h0OyAvL2hlaWdodCBvZiBlbGVtZW50XG4gICAgICB9KVxuICBcbiAgICAgIHJldHVybiBjbG9uZXNIZWlnaHQ7XG4gICAgfVxuICBcbiAgICAvL3JlY2FsY3VsYXRlIGRpbWVzbmlvbnMgb2Ygc2NyZWVuIHdoZW4gcmVzaXplZFxuICAgIGZ1bmN0aW9uIHJlQ2FsYygpe1xuICAgICAgc2Nyb2xscG9zID0gZ2V0U2Nyb2xsUG9zKCk7XG4gICAgICBzY3JvbGxoZWlnaHQgPSBzbGlkZXNob3dFbGVtZW50LnNjcm9sbEhlaWdodDsgLy8gaGVpZ2h0IG9mIGVsZW1lbnRzIGNvbnRlbnRcbiAgICAgIGNsb25lc0hlaWdodCA9IGdldENsb25lc0hlaWdodCgpO1xuICBcbiAgICAgIGlmKHNjcm9sbHBvcyA8PSAwKXtcbiAgICAgICAgc2V0U2Nyb2xsUG9zKDEpOyAvL2FsbG93cyBzY3JvbGwgdXAgXG4gICAgICB9XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBzY3JvbGxVcGRhdGUoKXtcbiAgICAgIGlmKCFkaXNhYmxlU2Nyb2xsKXtcbiAgICAgICAgc2Nyb2xscG9zID0gZ2V0U2Nyb2xsUG9zKCk7XG4gICAgICAgIGlmKGNsb25lc0hlaWdodCArIHNjcm9sbHBvcyA+PSBzY3JvbGxoZWlnaHQpe1xuICAgICAgICAgIC8vU2Nyb2xsIGJhY2sgdG8gdG9wIHdoZW4gd2UgcmVhY2ggYm90dG9tIG9mIHBhZ2UgXG4gICAgICAgICAgc2V0U2Nyb2xsUG9zKDEpO1xuICAgICAgICAgIGRpc2FibGVTY3JvbGwgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbHBvcyA8PSAwKXtcbiAgICAgICAgICAvL1Njcm9sbCB0byBib3R0b20gd2hlbiB3ZSByZWFjaCB0aGUgdG9wIFxuICAgICAgICAgIHNldFNjcm9sbFBvcyhzY3JvbGxoZWlnaHQgLSBjbG9uZXNIZWlnaHQpO1xuICAgICAgICAgIGRpc2FibGVTY3JvbGwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihkaXNhYmxlU2Nyb2xsKXtcbiAgICAgICAgLy9kaXNhYmxlIHNjcm9sbC1qdW1waW5nIHRvIGF2b2lkIGZsaWNrZXJpbmcgZWZmZWN0IFxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIGRpc2FibGVTY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgfSwgNDApO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gb25Mb2FkKCl7ICAgIFxuICAgICAgICBjb25zdCBjbG9uZSA9IHNsaWRlc2hvd0VsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBzbGlkZXNob3dFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgICBjbG9uZS5jbGFzc0xpc3QuYWRkKCdqcy1jbG9uZScpO1xuXG4gICAgICAgXG4gICAgICBjbG9uZXMgPSBzbGlkZXNob3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1jbG9uZScpO1xuICBcbiAgICAgIHJlQ2FsYygpO1xuICBcbiAgICAgIC8vIHNsaWRlc2hvd0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgLy8gICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbFVwZGF0ZSk7XG4gICAgICAvLyB9LCBmYWxzZSk7XG4gIFxuICAgICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIC8vICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZUNhbGMpXG4gICAgICAvLyB9LCBmYWxzZSlcbiAgICB9XG4gIFxuICAgIHdpbmRvdy5vbmxvYWQgPSBvbkxvYWQoKTtcbiAgfSwgW10pO1xuXG4gIFxuXG4gIC8vY29tbWVudGVkIG91dCBsYXN0IGZvdXIgVVJMUyB0byBoYXZlIG5vIHJlbWFpbmRlcnMgbGVmdCBvdmVyIGluIGEgZ3JvdXAgb2YgNVxuICBjb25zdCBpbWFnZVVSTFMgPSBbXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUDEyMzg0Ny5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTk0My5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQLTE0MjAxLTAwMS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQLTIxOTU5LTAwMS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQLTIwNjEzLTAwMS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTAyNy5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTAyNS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTUwMC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTkyNC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTk1Mi5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQMjMxNTUwLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxODYwLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxOTQ0LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9ybC93ZWItbGFyZ2UvRFQzMTMxLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9ybC93ZWItbGFyZ2UvRFAtMTcyNzktMDAxLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9ybC93ZWItbGFyZ2UvRFQzMTE3LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAzNDEyMDAuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0xNDkzNi0wNDMuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE4NjQuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0xNDkzNi0wMzcuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDExMzkuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE4NjMuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE4NjcuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE1NTkuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDgzNy5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTg2Ni5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTk1NC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvcmwvd2ViLWxhcmdlL0RUMzExMy5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQLTE0OTM2LTA0OS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQMzE3NzgwLmpwZycsIFxuICAgIC8vICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMjM3MDQtMDAxLmpwZycsIFxuICAgIC8vICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxMDI2Mi5qcGcnLCBcbiAgICAvLyAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTkyMy5qcGcnLCBcbiAgICAvLyAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL2VwMTk3NC4zNTYuMzUuUi5qcGcnXG4gIF1cblxuICBjb25zdCBtYXBwZWRJbWFnZXMgPSBBcnJheShNYXRoLmNlaWwoaW1hZ2VVUkxTLmxlbmd0aCAvIDUpKVxuICAgIC5maWxsKClcbiAgICAubWFwKChfLCBpbmRleCkgPT4gaW1hZ2VVUkxTLnNsaWNlKGluZGV4ICogNSwgaW5kZXggKiA1ICsgNSkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e3NsaWRlc2hvd30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydC1zbGlkZXNob3dcIj5cbiAgICAgICAgICB7bWFwcGVkSW1hZ2VzLm1hcCgoaW1hZ2VBcnJheSkgPT4geyBcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUFycmF5WzBdfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VBcnJheVsxXX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlQXJyYXlbMl19Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUFycmF5WzNdfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VBcnJheVs0XX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZUNvbnRhaW5lcih7fSkge1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgfSlcblxuICAvLyBGRVRDSElORyBEQVRBIEZST00gTUVUIEFQSSBcbiAgLy8gY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGFzeW5jIGZ1bmN0aW9uIGdldEltYWdlcygpIHtcbiAgLy8gICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAvLyAgICAgLy8gRkVUQ0hJTkcgREFUQSBGUk9NIE1FVCBBUEkgXG4gIC8vICAgICAvL3JldHVybmluZyBhbiBhcnJheSBvZiBvYmplY3QgSUQncyB3aXRoIEZyZW5jaCBBcnQgYmV0d2VlbiAxODkwLTE5MDAgLSBCZWxsZSBFcG9xdWUgKGVyYSBvZiBwcm9ncmVzcyBhbmQgcHJvc3Blcml0eSkvIEltcHJlc3Npb25pc3RzIFxuICAvLyAgICAgLy8gY29uc3QgaWRSZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9jb2xsZWN0aW9uYXBpLm1ldG11c2V1bS5vcmcvcHVibGljL2NvbGxlY3Rpb24vdjEvc2VhcmNoP2RhdGVCZWdpbj0xODkwJmRhdGVFbmQ9MTkwMCZxPUZyZW5jaFwiKTtcbiAgLy8gICAgIC8vIGNvbnN0IGlkSlNPTiA9IGF3YWl0IGlkUmVzcG9uc2UuanNvbigpO1xuICAvLyAgICAgLy8gY29uc3QgcGFyc2VkSWRzID0gaWRKU09OLm9iamVjdElEcztcbiAgLy8gICAgIC8vIC8vcmV0dXJuaW5nIGFuIGFycmF5IG9mIG9iamVjdCBVUkwncyBhc3NvY2lhdGVkIHRvIHRoZSBvYmplY3QgSUQnc1xuICAvLyAgICAgLy8gY29uc3QgcHJvbWlzZU9iamVjdHMgPSBwYXJzZWRJZHMubWFwKCBhc3luYyBpZCA9PiBhd2FpdCBmZXRjaChcImh0dHBzOi8vY29sbGVjdGlvbmFwaS5tZXRtdXNldW0ub3JnL3B1YmxpYy9jb2xsZWN0aW9uL3YxL29iamVjdHMvXCIgKyBpZCkpO1xuICAvLyAgICAgLy8gY29uc3Qgb2JqZWN0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VPYmplY3RzKTtcbiAgLy8gICAgIC8vIGNvbnN0IHVybHMgPSBvYmplY3RzLm1hcCggb2JqZWN0ID0+IG9iamVjdC51cmwpO1xuICAvLyAgICAgLy8gY29uc3QgcHJvbWlzZVVSTE9iamVjdHMgPSB1cmxzLm1hcChhc3luYyB1cmwgPT4gYXdhaXQgKGF3YWl0IGZldGNoKHVybCkpLmpzb24oKSk7XG4gIC8vICAgICAvLyBjb25zdCB1cmxPYmplY3RzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZVVSTE9iamVjdHMpO1xuXG4gIC8vICAgICAvLyBmdW5jdGlvbiBmaWx0ZXJDbGFzc2lmaWNhdGlvbih1cmxPYmplY3RzKXtcbiAgLy8gICAgIC8vICAgcmV0dXJuIHVybE9iamVjdHMuZmlsdGVyKHVybE9iamVjdCA9PiB1cmxPYmplY3QuY2xhc3NpZmljYXRpb24uaW5jbHVkZXMoXCJQYWludGluZ3NcIikpXG4gIC8vICAgICAvLyB9XG5cbiAgLy8gICAgIC8vIGNvbnN0IGZpbHRlcmVkQ2xhc3NpZmljYXRpb24gPSBmaWx0ZXJDbGFzc2lmaWNhdGlvbih1cmxPYmplY3RzKTtcbiAgLy8gICAgIC8vIGNvbnN0IGltYWdlVVJMTGlzdCA9IGZpbHRlcmVkQ2xhc3NpZmljYXRpb24ubWFwKCBvYmplY3QgPT4gb2JqZWN0LnByaW1hcnlJbWFnZVNtYWxsKTtcbiAgICAgXG4gIC8vICAgICAvLyBmdW5jdGlvbiBmaWx0ZXJMaXN0KGltYWdlVVJMTGlzdCl7XG4gIC8vICAgICAvLyAgIHJldHVybiBpbWFnZVVSTExpc3QuZmlsdGVyKHVybCA9PiB7XG4gIC8vICAgICAvLyAgICAgaWYgKHVybCA9PT0gJycpe1xuICAvLyAgICAgLy8gICAgICAgcmV0dXJuIGZhbHNlO1xuICAvLyAgICAgLy8gICAgIH0gXG4gIC8vICAgICAvLyAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgICAvLyAgIH0pXG4gIC8vICAgICAvLyB9O1xuXG4gIC8vICAgICAvLyBjb25zdCBmaWx0ZXJlZExpc3QgPSBmaWx0ZXJMaXN0KGltYWdlVVJMTGlzdCk7XG5cbiAgLy8gICAgIHNldEltYWdlcyhpbWFnZVVSTFMpO1xuICAvLyAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICB9XG4gIC8vICAgZ2V0SW1hZ2VzKCk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SW1hZ2VMaXN0IGlzTG9hZGluZz17aXNMb2FkaW5nfSAvPlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2VMaXN0Iiwic2xpZGVzaG93IiwidXNlUmVmIiwiY2xvbmVzIiwiZGlzYWJsZVNjcm9sbCIsInNjcm9sbGhlaWdodCIsInNjcm9sbHBvcyIsImNsb25lc0hlaWdodCIsInVzZUVmZmVjdCIsInNsaWRlc2hvd0VsZW1lbnQiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvciIsImdldFNjcm9sbFBvcyIsInNjcm9sbFRvcCIsInNldFNjcm9sbFBvcyIsInBvcyIsImdldENsb25lc0hlaWdodCIsImZvckVhY2giLCJjbG9uZSIsIm9mZnNldEhlaWdodCIsInJlQ2FsYyIsInNjcm9sbEhlaWdodCIsInNjcm9sbFVwZGF0ZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJvbkxvYWQiLCJjbG9uZU5vZGUiLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib25sb2FkIiwiaW1hZ2VVUkxTIiwibWFwcGVkSW1hZ2VzIiwiQXJyYXkiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImZpbGwiLCJtYXAiLCJfIiwiaW5kZXgiLCJzbGljZSIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsImltYWdlQXJyYXkiLCJpbWciLCJzcmMiLCJJbWFnZUNvbnRhaW5lciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});