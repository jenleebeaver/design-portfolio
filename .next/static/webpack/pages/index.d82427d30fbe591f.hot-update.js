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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nfunction ImageList() {\n    _s();\n    let slideshow = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();\n    let clones = [];\n    let disableScroll = false;\n    let scrollheight = 0;\n    let scrollpos = 0;\n    let clonesHeight = 0;\n    function getScrollPos() {\n        return slideshow.scrollTop; //amount window scrolled\n    }\n    function setScrollPos(pos) {\n        slideshow.scrollTop = pos;\n    }\n    function getClonesHeight() {\n        clonesHeight = 0;\n        clones.forEach((clone)=>{\n            clonesHeight += clones.offsetHeight;\n            p //height of element\n            ;\n        });\n        return clonesHeight;\n    }\n    //recalculate dimesnions of screen when resized\n    function reCalc() {\n        scrollpos = getScrollPos();\n        scrollheight = slideshow.scrollHeight; // height of elements content\n        clonesHeight = getClonesHeight();\n        if (scrollpos <= 0) {\n            setScrollPos(1); //allows scroll up \n        }\n    }\n    function scrollUpdate() {\n        if (!disableScroll) {\n            scrollpos = getScrollPos();\n            if (clonesHeight + scrollpos >= scrollheight) {\n                //Scroll back to top when we reach bottom of page \n                setScrollPos(1);\n                disableScroll = true;\n            } else if (scrollpos <= 0) {\n                //Scroll to bottom when we reach the top \n                setScrollPos(scrollheight - clonesHeight);\n                disableScroll = true;\n            }\n        }\n        if (disableScroll) {\n            //disable scroll-jumping to avoid flickering effect \n            window.setTimeout(()=>{\n                disableScroll = false;\n            }, 40);\n        }\n    }\n    function onLoad() {\n        slideshow.forEach((slideshow)=>{\n            const clone = slideshow.cloneNode(true);\n            slideshow.appendChild(clone);\n            clone.classList.add(\"js-clone\");\n        });\n        clones = slideshow.querySelectorAll(\".js-clone\");\n        reCalc();\n        slideshow.addEventListener(\"scroll\", ()=>{\n            window.requestAnimationFram(scrollUpdate);\n        }, false);\n        window.addEventListener(\"resize\", ()=>{\n            window.requestAnimationFrame(reCalc);\n        }, false);\n    }\n    window.onload = onLoad();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const slideshowClass = slideshow.current.classList;\n        console.log(slideshowClass);\n    }, []);\n    //commented out last four URLS to have no remainders left over in a group of 5\n    const imageURLS = [\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP123847.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1943.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14201-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-21959-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-20613-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1027.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1025.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1500.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1924.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1952.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP231550.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1860.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1944.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3131.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DP-17279-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3117.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP341200.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-043.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1864.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-037.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1139.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1863.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1867.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1559.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT837.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1866.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1954.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3113.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-049.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP317780.jpg\"\n    ];\n    const mappedImages = Array(Math.ceil(imageURLS.length / 5)).fill().map((_, index)=>imageURLS.slice(index * 5, index * 5 + 5));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"art-slideshow\",\n        ref: slideshow,\n        children: mappedImages.map((imageArray)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"a\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageArray[0]\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 135,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                        lineNumber: 134,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"b\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageArray[1]\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 138,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                        lineNumber: 137,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"c\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageArray[2]\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 141,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                        lineNumber: 140,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageArray[3]\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 144,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                        lineNumber: 143,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"e\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageArray[4]\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 147,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                        lineNumber: 146,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                lineNumber: 133,\n                columnNumber: 9\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n        lineNumber: 130,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageList, \"Igeu0LJKY3qxNiynOtg34cL7axc=\");\n_c = ImageList;\nfunction ImageContainer(param) {\n    let {} = param;\n    _s1();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{});\n    // FETCHING DATA FROM MET API \n    // const [images, setImages] = React.useState([]);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    // React.useEffect(() => {\n    //   async function getImages() {\n    //     setIsLoading(true);\n    //     // FETCHING DATA FROM MET API \n    //     //returning an array of object ID's with French Art between 1890-1900 - Belle Epoque (era of progress and prosperity)/ Impressionists \n    //     // const idResponse = await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=1890&dateEnd=1900&q=French\");\n    //     // const idJSON = await idResponse.json();\n    //     // const parsedIds = idJSON.objectIDs;\n    //     // //returning an array of object URL's associated to the object ID's\n    //     // const promiseObjects = parsedIds.map( async id => await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/objects/\" + id));\n    //     // const objects = await Promise.all(promiseObjects);\n    //     // const urls = objects.map( object => object.url);\n    //     // const promiseURLObjects = urls.map(async url => await (await fetch(url)).json());\n    //     // const urlObjects = await Promise.all(promiseURLObjects);\n    //     // function filterClassification(urlObjects){\n    //     //   return urlObjects.filter(urlObject => urlObject.classification.includes(\"Paintings\"))\n    //     // }\n    //     // const filteredClassification = filterClassification(urlObjects);\n    //     // const imageURLList = filteredClassification.map( object => object.primaryImageSmall);\n    //     // function filterList(imageURLList){\n    //     //   return imageURLList.filter(url => {\n    //     //     if (url === ''){\n    //     //       return false;\n    //     //     } \n    //     //     return true;\n    //     //   })\n    //     // };\n    //     // const filteredList = filterList(imageURLList);\n    //     setImages(imageURLS);\n    //     setIsLoading(false);\n    //   }\n    //   getImages();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageList, {\n            isLoading: isLoading\n        }, void 0, false, {\n            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n            lineNumber: 208,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n        lineNumber: 207,\n        columnNumber: 5\n    }, this);\n}\n_s1(ImageContainer, \"1XRtNQiR1cMX2EOFRE5XOTDT+3I=\");\n_c1 = ImageContainer;\nvar _c, _c1;\n$RefreshReg$(_c, \"ImageList\");\n$RefreshReg$(_c1, \"ImageContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUMvQyw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLFlBQVk7SUFFWix3REFBd0Q7SUFFeEQsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLFVBQVU7SUFFVixxQkFDRSw4REFBQ2lEO2tCQUNDLDRFQUFDaEQ7WUFBVXVELFdBQVdBOzs7Ozs7Ozs7OztBQUc1QixDQUFDO0lBdkR1QkQ7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gSW1hZ2VMaXN0KCl7XG4gIGxldCBzbGlkZXNob3cgPSBSZWFjdC51c2VSZWYoKTtcbiAgbGV0IGNsb25lcyA9IFtdO1xuICBsZXQgZGlzYWJsZVNjcm9sbCA9IGZhbHNlO1xuICBsZXQgc2Nyb2xsaGVpZ2h0ID0gMDtcbiAgbGV0IHNjcm9sbHBvcyA9IDA7XG4gIGxldCBjbG9uZXNIZWlnaHQgPSAwO1xuXG4gIGZ1bmN0aW9uIGdldFNjcm9sbFBvcygpe1xuICAgIHJldHVybiBzbGlkZXNob3cuc2Nyb2xsVG9wOyAvL2Ftb3VudCB3aW5kb3cgc2Nyb2xsZWRcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFNjcm9sbFBvcyhwb3Mpe1xuICAgIHNsaWRlc2hvdy5zY3JvbGxUb3AgPSBwb3M7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDbG9uZXNIZWlnaHQoKXtcbiAgICBjbG9uZXNIZWlnaHQgPSAwO1xuXG4gICAgY2xvbmVzLmZvckVhY2goY2xvbmUgPT4ge1xuICAgICAgY2xvbmVzSGVpZ2h0ICs9IGNsb25lcy5vZmZzZXRIZWlnaHQ7cCAvL2hlaWdodCBvZiBlbGVtZW50XG4gICAgfSlcblxuICAgIHJldHVybiBjbG9uZXNIZWlnaHQ7XG4gIH1cblxuICAvL3JlY2FsY3VsYXRlIGRpbWVzbmlvbnMgb2Ygc2NyZWVuIHdoZW4gcmVzaXplZFxuICBmdW5jdGlvbiByZUNhbGMoKXtcbiAgICBzY3JvbGxwb3MgPSBnZXRTY3JvbGxQb3MoKTtcbiAgICBzY3JvbGxoZWlnaHQgPSBzbGlkZXNob3cuc2Nyb2xsSGVpZ2h0OyAvLyBoZWlnaHQgb2YgZWxlbWVudHMgY29udGVudFxuICAgIGNsb25lc0hlaWdodCA9IGdldENsb25lc0hlaWdodCgpO1xuXG4gICAgaWYoc2Nyb2xscG9zIDw9IDApe1xuICAgICAgc2V0U2Nyb2xsUG9zKDEpOyAvL2FsbG93cyBzY3JvbGwgdXAgXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsVXBkYXRlKCl7XG4gICAgaWYoIWRpc2FibGVTY3JvbGwpe1xuICAgICAgc2Nyb2xscG9zID0gZ2V0U2Nyb2xsUG9zKCk7XG4gICAgICBpZihjbG9uZXNIZWlnaHQgKyBzY3JvbGxwb3MgPj0gc2Nyb2xsaGVpZ2h0KXtcbiAgICAgICAgLy9TY3JvbGwgYmFjayB0byB0b3Agd2hlbiB3ZSByZWFjaCBib3R0b20gb2YgcGFnZSBcbiAgICAgICAgc2V0U2Nyb2xsUG9zKDEpO1xuICAgICAgICBkaXNhYmxlU2Nyb2xsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc2Nyb2xscG9zIDw9IDApe1xuICAgICAgICAvL1Njcm9sbCB0byBib3R0b20gd2hlbiB3ZSByZWFjaCB0aGUgdG9wIFxuICAgICAgICBzZXRTY3JvbGxQb3Moc2Nyb2xsaGVpZ2h0IC0gY2xvbmVzSGVpZ2h0KTtcbiAgICAgICAgZGlzYWJsZVNjcm9sbCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGRpc2FibGVTY3JvbGwpe1xuICAgICAgLy9kaXNhYmxlIHNjcm9sbC1qdW1waW5nIHRvIGF2b2lkIGZsaWNrZXJpbmcgZWZmZWN0IFxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgZGlzYWJsZVNjcm9sbCA9IGZhbHNlO1xuICAgICAgfSwgNDApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTG9hZCgpe1xuICAgIHNsaWRlc2hvdy5mb3JFYWNoKHNsaWRlc2hvdyA9PiB7XG4gICAgICBjb25zdCBjbG9uZSA9IHNsaWRlc2hvdy5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBzbGlkZXNob3cuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgY2xvbmUuY2xhc3NMaXN0LmFkZCgnanMtY2xvbmUnKTtcbiAgICB9KTtcblxuICAgIGNsb25lcyA9IHNsaWRlc2hvdy5xdWVyeVNlbGVjdG9yQWxsKCcuanMtY2xvbmUnKTtcblxuICAgIHJlQ2FsYygpO1xuXG4gICAgc2xpZGVzaG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbShzY3JvbGxVcGRhdGUpO1xuICAgIH0sIGZhbHNlKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlQ2FsYylcbiAgICB9LCBmYWxzZSlcbiAgfVxuXG4gIHdpbmRvdy5vbmxvYWQgPSBvbkxvYWQoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlc2hvd0NsYXNzID0gc2xpZGVzaG93LmN1cnJlbnQuY2xhc3NMaXN0O1xuICAgIGNvbnNvbGUubG9nKHNsaWRlc2hvd0NsYXNzKTtcbiAgfSwgW10pO1xuICAvL2NvbW1lbnRlZCBvdXQgbGFzdCBmb3VyIFVSTFMgdG8gaGF2ZSBubyByZW1haW5kZXJzIGxlZnQgb3ZlciBpbiBhIGdyb3VwIG9mIDVcbiAgY29uc3QgaW1hZ2VVUkxTID0gW1xuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAxMjM4NDcuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE5NDMuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0xNDIwMS0wMDEuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0yMTk1OS0wMDEuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0yMDYxMy0wMDEuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDEwMjcuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDEwMjUuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE1MDAuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE5MjQuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE5NTIuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUDIzMTU1MC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTg2MC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTk0NC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvcmwvd2ViLWxhcmdlL0RUMzEzMS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvcmwvd2ViLWxhcmdlL0RQLTE3Mjc5LTAwMS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvcmwvd2ViLWxhcmdlL0RUMzExNy5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQMzQxMjAwLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMTQ5MzYtMDQzLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxODY0LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMTQ5MzYtMDM3LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxMTM5LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxODYzLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxODY3LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxNTU5LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQ4MzcuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE4NjYuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE5NTQuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL3JsL3dlYi1sYXJnZS9EVDMxMTMuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0xNDkzNi0wNDkuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUDMxNzc4MC5qcGcnLCBcbiAgICAvLyAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQLTIzNzA0LTAwMS5qcGcnLCBcbiAgICAvLyAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTAyNjIuanBnJywgXG4gICAgLy8gJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE5MjMuanBnJywgXG4gICAgLy8gJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9lcDE5NzQuMzU2LjM1LlIuanBnJ1xuICBdXG5cbiAgY29uc3QgbWFwcGVkSW1hZ2VzID0gQXJyYXkoTWF0aC5jZWlsKGltYWdlVVJMUy5sZW5ndGggLyA1KSlcbiAgICAuZmlsbCgpXG4gICAgLm1hcCgoXywgaW5kZXgpID0+IGltYWdlVVJMUy5zbGljZShpbmRleCAqIDUsIGluZGV4ICogNSArIDUpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXNsaWRlc2hvd1wiIHJlZj17c2xpZGVzaG93fT5cbiAgICAgICAge21hcHBlZEltYWdlcy5tYXAoKGltYWdlQXJyYXkpID0+IHsgXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VBcnJheVswXX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlQXJyYXlbMV19Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUFycmF5WzJdfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VBcnJheVszXX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlQXJyYXlbNF19Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZUNvbnRhaW5lcih7fSkge1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgfSlcblxuICAvLyBGRVRDSElORyBEQVRBIEZST00gTUVUIEFQSSBcbiAgLy8gY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGFzeW5jIGZ1bmN0aW9uIGdldEltYWdlcygpIHtcbiAgLy8gICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAvLyAgICAgLy8gRkVUQ0hJTkcgREFUQSBGUk9NIE1FVCBBUEkgXG4gIC8vICAgICAvL3JldHVybmluZyBhbiBhcnJheSBvZiBvYmplY3QgSUQncyB3aXRoIEZyZW5jaCBBcnQgYmV0d2VlbiAxODkwLTE5MDAgLSBCZWxsZSBFcG9xdWUgKGVyYSBvZiBwcm9ncmVzcyBhbmQgcHJvc3Blcml0eSkvIEltcHJlc3Npb25pc3RzIFxuICAvLyAgICAgLy8gY29uc3QgaWRSZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9jb2xsZWN0aW9uYXBpLm1ldG11c2V1bS5vcmcvcHVibGljL2NvbGxlY3Rpb24vdjEvc2VhcmNoP2RhdGVCZWdpbj0xODkwJmRhdGVFbmQ9MTkwMCZxPUZyZW5jaFwiKTtcbiAgLy8gICAgIC8vIGNvbnN0IGlkSlNPTiA9IGF3YWl0IGlkUmVzcG9uc2UuanNvbigpO1xuICAvLyAgICAgLy8gY29uc3QgcGFyc2VkSWRzID0gaWRKU09OLm9iamVjdElEcztcbiAgLy8gICAgIC8vIC8vcmV0dXJuaW5nIGFuIGFycmF5IG9mIG9iamVjdCBVUkwncyBhc3NvY2lhdGVkIHRvIHRoZSBvYmplY3QgSUQnc1xuICAvLyAgICAgLy8gY29uc3QgcHJvbWlzZU9iamVjdHMgPSBwYXJzZWRJZHMubWFwKCBhc3luYyBpZCA9PiBhd2FpdCBmZXRjaChcImh0dHBzOi8vY29sbGVjdGlvbmFwaS5tZXRtdXNldW0ub3JnL3B1YmxpYy9jb2xsZWN0aW9uL3YxL29iamVjdHMvXCIgKyBpZCkpO1xuICAvLyAgICAgLy8gY29uc3Qgb2JqZWN0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VPYmplY3RzKTtcbiAgLy8gICAgIC8vIGNvbnN0IHVybHMgPSBvYmplY3RzLm1hcCggb2JqZWN0ID0+IG9iamVjdC51cmwpO1xuICAvLyAgICAgLy8gY29uc3QgcHJvbWlzZVVSTE9iamVjdHMgPSB1cmxzLm1hcChhc3luYyB1cmwgPT4gYXdhaXQgKGF3YWl0IGZldGNoKHVybCkpLmpzb24oKSk7XG4gIC8vICAgICAvLyBjb25zdCB1cmxPYmplY3RzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZVVSTE9iamVjdHMpO1xuXG4gIC8vICAgICAvLyBmdW5jdGlvbiBmaWx0ZXJDbGFzc2lmaWNhdGlvbih1cmxPYmplY3RzKXtcbiAgLy8gICAgIC8vICAgcmV0dXJuIHVybE9iamVjdHMuZmlsdGVyKHVybE9iamVjdCA9PiB1cmxPYmplY3QuY2xhc3NpZmljYXRpb24uaW5jbHVkZXMoXCJQYWludGluZ3NcIikpXG4gIC8vICAgICAvLyB9XG5cbiAgLy8gICAgIC8vIGNvbnN0IGZpbHRlcmVkQ2xhc3NpZmljYXRpb24gPSBmaWx0ZXJDbGFzc2lmaWNhdGlvbih1cmxPYmplY3RzKTtcbiAgLy8gICAgIC8vIGNvbnN0IGltYWdlVVJMTGlzdCA9IGZpbHRlcmVkQ2xhc3NpZmljYXRpb24ubWFwKCBvYmplY3QgPT4gb2JqZWN0LnByaW1hcnlJbWFnZVNtYWxsKTtcbiAgICAgXG4gIC8vICAgICAvLyBmdW5jdGlvbiBmaWx0ZXJMaXN0KGltYWdlVVJMTGlzdCl7XG4gIC8vICAgICAvLyAgIHJldHVybiBpbWFnZVVSTExpc3QuZmlsdGVyKHVybCA9PiB7XG4gIC8vICAgICAvLyAgICAgaWYgKHVybCA9PT0gJycpe1xuICAvLyAgICAgLy8gICAgICAgcmV0dXJuIGZhbHNlO1xuICAvLyAgICAgLy8gICAgIH0gXG4gIC8vICAgICAvLyAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgICAvLyAgIH0pXG4gIC8vICAgICAvLyB9O1xuXG4gIC8vICAgICAvLyBjb25zdCBmaWx0ZXJlZExpc3QgPSBmaWx0ZXJMaXN0KGltYWdlVVJMTGlzdCk7XG5cbiAgLy8gICAgIHNldEltYWdlcyhpbWFnZVVSTFMpO1xuICAvLyAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICB9XG4gIC8vICAgZ2V0SW1hZ2VzKCk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SW1hZ2VMaXN0IGlzTG9hZGluZz17aXNMb2FkaW5nfSAvPlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2VMaXN0Iiwic2xpZGVzaG93IiwidXNlUmVmIiwiY2xvbmVzIiwiZGlzYWJsZVNjcm9sbCIsInNjcm9sbGhlaWdodCIsInNjcm9sbHBvcyIsImNsb25lc0hlaWdodCIsImdldFNjcm9sbFBvcyIsInNjcm9sbFRvcCIsInNldFNjcm9sbFBvcyIsInBvcyIsImdldENsb25lc0hlaWdodCIsImZvckVhY2giLCJjbG9uZSIsIm9mZnNldEhlaWdodCIsInAiLCJyZUNhbGMiLCJzY3JvbGxIZWlnaHQiLCJzY3JvbGxVcGRhdGUiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwib25Mb2FkIiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RBbmltYXRpb25GcmFtIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25sb2FkIiwidXNlRWZmZWN0Iiwic2xpZGVzaG93Q2xhc3MiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsImltYWdlVVJMUyIsIm1hcHBlZEltYWdlcyIsIkFycmF5IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJmaWxsIiwibWFwIiwiXyIsImluZGV4Iiwic2xpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJpbWFnZUFycmF5IiwiaW1nIiwic3JjIiwiSW1hZ2VDb250YWluZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});