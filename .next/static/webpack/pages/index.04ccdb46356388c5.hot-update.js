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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nfunction ImageList() {\n    _s();\n    let slideshow = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    let clones = [];\n    let disableScroll = false;\n    let scrollheight = 0;\n    let scrollpos = 0;\n    let clonesHeight = 0;\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const slideshowClass = slideshow.current.classList;\n        console.log(slideshowClass);\n        function getScrollPos() {\n            return slideshowClass.scrollTop; //amount window scrolled\n        }\n        function setScrollPos(pos) {\n            slideshowClass.scrollTop = pos;\n        }\n        function getClonesHeight() {\n            clonesHeight = 0;\n            clones.forEach((clone)=>{\n                clonesHeight += clones.offsetHeight;\n                p //height of element\n                ;\n            });\n            return clonesHeight;\n        }\n        //recalculate dimesnions of screen when resized\n        function reCalc() {\n            scrollpos = getScrollPos();\n            scrollheight = slideshowClass.scrollHeight; // height of elements content\n            clonesHeight = getClonesHeight();\n            if (scrollpos <= 0) {\n                setScrollPos(1); //allows scroll up \n            }\n        }\n        function scrollUpdate() {\n            if (!disableScroll) {\n                scrollpos = getScrollPos();\n                if (clonesHeight + scrollpos >= scrollheight) {\n                    //Scroll back to top when we reach bottom of page \n                    setScrollPos(1);\n                    disableScroll = true;\n                } else if (scrollpos <= 0) {\n                    //Scroll to bottom when we reach the top \n                    setScrollPos(scrollheight - clonesHeight);\n                    disableScroll = true;\n                }\n            }\n            if (disableScroll) {\n                //disable scroll-jumping to avoid flickering effect \n                window.setTimeout(()=>{\n                    disableScroll = false;\n                }, 40);\n            }\n        }\n        function onLoad() {\n            console.log(slideshow);\n            const clone = slideshowClass.cloneNode(true);\n            slideshowClass.appendChild(clone);\n            clone.classList.add(\"js-clone\");\n            clones = slideshowClass.querySelectorAll(\".js-clone\");\n            reCalc();\n            slideshow.addEventListener(\"scroll\", ()=>{\n                window.requestAnimationFram(scrollUpdate);\n            }, false);\n            window.addEventListener(\"resize\", ()=>{\n                window.requestAnimationFrame(reCalc);\n            }, false);\n        }\n        window.onload = onLoad();\n    }, []);\n    //commented out last four URLS to have no remainders left over in a group of 5\n    const imageURLS = [\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP123847.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1943.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14201-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-21959-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-20613-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1027.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1025.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1500.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1924.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1952.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP231550.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1860.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1944.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3131.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DP-17279-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3117.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP341200.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-043.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1864.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-037.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1139.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1863.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1867.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1559.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT837.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1866.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1954.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3113.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-049.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP317780.jpg\"\n    ];\n    const mappedImages = Array(Math.ceil(imageURLS.length / 5)).fill().map((_, index)=>imageURLS.slice(index * 5, index * 5 + 5));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"art-slideshow\",\n        ref: slideshow,\n        children: mappedImages.map((imageArray)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"a\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageArray[0]\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 137,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                        lineNumber: 136,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"b\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageArray[1]\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 140,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                        lineNumber: 139,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"c\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageArray[2]\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 143,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                        lineNumber: 142,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageArray[3]\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 146,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                        lineNumber: 145,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"e\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageArray[4]\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 149,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                        lineNumber: 148,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                lineNumber: 135,\n                columnNumber: 9\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n        lineNumber: 132,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageList, \"Igeu0LJKY3qxNiynOtg34cL7axc=\");\n_c = ImageList;\nfunction ImageContainer(param) {\n    let {} = param;\n    _s1();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{});\n    // FETCHING DATA FROM MET API \n    // const [images, setImages] = React.useState([]);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    // React.useEffect(() => {\n    //   async function getImages() {\n    //     setIsLoading(true);\n    //     // FETCHING DATA FROM MET API \n    //     //returning an array of object ID's with French Art between 1890-1900 - Belle Epoque (era of progress and prosperity)/ Impressionists \n    //     // const idResponse = await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=1890&dateEnd=1900&q=French\");\n    //     // const idJSON = await idResponse.json();\n    //     // const parsedIds = idJSON.objectIDs;\n    //     // //returning an array of object URL's associated to the object ID's\n    //     // const promiseObjects = parsedIds.map( async id => await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/objects/\" + id));\n    //     // const objects = await Promise.all(promiseObjects);\n    //     // const urls = objects.map( object => object.url);\n    //     // const promiseURLObjects = urls.map(async url => await (await fetch(url)).json());\n    //     // const urlObjects = await Promise.all(promiseURLObjects);\n    //     // function filterClassification(urlObjects){\n    //     //   return urlObjects.filter(urlObject => urlObject.classification.includes(\"Paintings\"))\n    //     // }\n    //     // const filteredClassification = filterClassification(urlObjects);\n    //     // const imageURLList = filteredClassification.map( object => object.primaryImageSmall);\n    //     // function filterList(imageURLList){\n    //     //   return imageURLList.filter(url => {\n    //     //     if (url === ''){\n    //     //       return false;\n    //     //     } \n    //     //     return true;\n    //     //   })\n    //     // };\n    //     // const filteredList = filterList(imageURLList);\n    //     setImages(imageURLS);\n    //     setIsLoading(false);\n    //   }\n    //   getImages();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageList, {\n            isLoading: isLoading\n        }, void 0, false, {\n            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n            lineNumber: 210,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n        lineNumber: 209,\n        columnNumber: 5\n    }, this);\n}\n_s1(ImageContainer, \"1XRtNQiR1cMX2EOFRE5XOTDT+3I=\");\n_c1 = ImageContainer;\nvar _c, _c1;\n$RefreshReg$(_c, \"ImageList\");\n$RefreshReg$(_c1, \"ImageContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUMsK0NBQStDO0lBQy9DLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsWUFBWTtJQUVaLHdEQUF3RDtJQUV4RCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLE1BQU07SUFDTixpQkFBaUI7SUFDakIsVUFBVTtJQUVWLHFCQUNFLDhEQUFDaUQ7a0JBQ0MsNEVBQUNoRDtZQUFVdUQsV0FBV0E7Ozs7Ozs7Ozs7O0FBRzVCLENBQUM7SUF2RHVCRDtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBJbWFnZUxpc3QoKXtcbiAgbGV0IHNsaWRlc2hvdyA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgbGV0IGNsb25lcyA9IFtdO1xuICBsZXQgZGlzYWJsZVNjcm9sbCA9IGZhbHNlO1xuICBsZXQgc2Nyb2xsaGVpZ2h0ID0gMDtcbiAgbGV0IHNjcm9sbHBvcyA9IDA7XG4gIGxldCBjbG9uZXNIZWlnaHQgPSAwO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVzaG93Q2xhc3MgPSBzbGlkZXNob3cuY3VycmVudC5jbGFzc0xpc3Q7XG4gICAgY29uc29sZS5sb2coc2xpZGVzaG93Q2xhc3MpO1xuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsUG9zKCl7XG4gICAgICByZXR1cm4gc2xpZGVzaG93Q2xhc3Muc2Nyb2xsVG9wOyAvL2Ftb3VudCB3aW5kb3cgc2Nyb2xsZWRcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIHNldFNjcm9sbFBvcyhwb3Mpe1xuICAgICAgc2xpZGVzaG93Q2xhc3Muc2Nyb2xsVG9wID0gcG9zO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gZ2V0Q2xvbmVzSGVpZ2h0KCl7XG4gICAgICBjbG9uZXNIZWlnaHQgPSAwO1xuICBcbiAgICAgIGNsb25lcy5mb3JFYWNoKGNsb25lID0+IHtcbiAgICAgICAgY2xvbmVzSGVpZ2h0ICs9IGNsb25lcy5vZmZzZXRIZWlnaHQ7cCAvL2hlaWdodCBvZiBlbGVtZW50XG4gICAgICB9KVxuICBcbiAgICAgIHJldHVybiBjbG9uZXNIZWlnaHQ7XG4gICAgfVxuICBcbiAgICAvL3JlY2FsY3VsYXRlIGRpbWVzbmlvbnMgb2Ygc2NyZWVuIHdoZW4gcmVzaXplZFxuICAgIGZ1bmN0aW9uIHJlQ2FsYygpe1xuICAgICAgc2Nyb2xscG9zID0gZ2V0U2Nyb2xsUG9zKCk7XG4gICAgICBzY3JvbGxoZWlnaHQgPSBzbGlkZXNob3dDbGFzcy5zY3JvbGxIZWlnaHQ7IC8vIGhlaWdodCBvZiBlbGVtZW50cyBjb250ZW50XG4gICAgICBjbG9uZXNIZWlnaHQgPSBnZXRDbG9uZXNIZWlnaHQoKTtcbiAgXG4gICAgICBpZihzY3JvbGxwb3MgPD0gMCl7XG4gICAgICAgIHNldFNjcm9sbFBvcygxKTsgLy9hbGxvd3Mgc2Nyb2xsIHVwIFxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gc2Nyb2xsVXBkYXRlKCl7XG4gICAgICBpZighZGlzYWJsZVNjcm9sbCl7XG4gICAgICAgIHNjcm9sbHBvcyA9IGdldFNjcm9sbFBvcygpO1xuICAgICAgICBpZihjbG9uZXNIZWlnaHQgKyBzY3JvbGxwb3MgPj0gc2Nyb2xsaGVpZ2h0KXtcbiAgICAgICAgICAvL1Njcm9sbCBiYWNrIHRvIHRvcCB3aGVuIHdlIHJlYWNoIGJvdHRvbSBvZiBwYWdlIFxuICAgICAgICAgIHNldFNjcm9sbFBvcygxKTtcbiAgICAgICAgICBkaXNhYmxlU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxwb3MgPD0gMCl7XG4gICAgICAgICAgLy9TY3JvbGwgdG8gYm90dG9tIHdoZW4gd2UgcmVhY2ggdGhlIHRvcCBcbiAgICAgICAgICBzZXRTY3JvbGxQb3Moc2Nyb2xsaGVpZ2h0IC0gY2xvbmVzSGVpZ2h0KTtcbiAgICAgICAgICBkaXNhYmxlU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoZGlzYWJsZVNjcm9sbCl7XG4gICAgICAgIC8vZGlzYWJsZSBzY3JvbGwtanVtcGluZyB0byBhdm9pZCBmbGlja2VyaW5nIGVmZmVjdCBcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBkaXNhYmxlU2Nyb2xsID0gZmFsc2U7XG4gICAgICAgIH0sIDQwKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIG9uTG9hZCgpe1xuICAgICAgY29uc29sZS5sb2coc2xpZGVzaG93KTtcbiAgICAgICAgY29uc3QgY2xvbmUgPSBzbGlkZXNob3dDbGFzcy5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHNsaWRlc2hvd0NsYXNzLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgICAgY2xvbmUuY2xhc3NMaXN0LmFkZCgnanMtY2xvbmUnKTtcbiAgXG4gICAgICBjbG9uZXMgPSBzbGlkZXNob3dDbGFzcy5xdWVyeVNlbGVjdG9yQWxsKCcuanMtY2xvbmUnKTtcbiAgXG4gICAgICByZUNhbGMoKTtcbiAgXG4gICAgICBzbGlkZXNob3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW0oc2Nyb2xsVXBkYXRlKTtcbiAgICAgIH0sIGZhbHNlKTtcbiAgXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlQ2FsYylcbiAgICAgIH0sIGZhbHNlKVxuICAgIH1cbiAgXG4gICAgd2luZG93Lm9ubG9hZCA9IG9uTG9hZCgpO1xuICB9LCBbXSk7XG5cbiAgXG5cbiAgLy9jb21tZW50ZWQgb3V0IGxhc3QgZm91ciBVUkxTIHRvIGhhdmUgbm8gcmVtYWluZGVycyBsZWZ0IG92ZXIgaW4gYSBncm91cCBvZiA1XG4gIGNvbnN0IGltYWdlVVJMUyA9IFtcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQMTIzODQ3LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxOTQzLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMTQyMDEtMDAxLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMjE5NTktMDAxLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMjA2MTMtMDAxLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxMDI3LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxMDI1LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxNTAwLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxOTI0LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxOTUyLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAyMzE1NTAuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE4NjAuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE5NDQuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL3JsL3dlYi1sYXJnZS9EVDMxMzEuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL3JsL3dlYi1sYXJnZS9EUC0xNzI3OS0wMDEuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL3JsL3dlYi1sYXJnZS9EVDMxMTcuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUDM0MTIwMC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQLTE0OTM2LTA0My5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTg2NC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQLTE0OTM2LTAzNy5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTEzOS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTg2My5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTg2Ny5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTU1OS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUODM3LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxODY2LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxOTU0LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9ybC93ZWItbGFyZ2UvRFQzMTEzLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMTQ5MzYtMDQ5LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAzMTc3ODAuanBnJywgXG4gICAgLy8gJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0yMzcwNC0wMDEuanBnJywgXG4gICAgLy8gJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDEwMjYyLmpwZycsIFxuICAgIC8vICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxOTIzLmpwZycsIFxuICAgIC8vICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvZXAxOTc0LjM1Ni4zNS5SLmpwZydcbiAgXVxuXG4gIGNvbnN0IG1hcHBlZEltYWdlcyA9IEFycmF5KE1hdGguY2VpbChpbWFnZVVSTFMubGVuZ3RoIC8gNSkpXG4gICAgLmZpbGwoKVxuICAgIC5tYXAoKF8sIGluZGV4KSA9PiBpbWFnZVVSTFMuc2xpY2UoaW5kZXggKiA1LCBpbmRleCAqIDUgKyA1KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFydC1zbGlkZXNob3dcIiByZWY9e3NsaWRlc2hvd30+XG4gICAgICAgIHttYXBwZWRJbWFnZXMubWFwKChpbWFnZUFycmF5KSA9PiB7IFxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlQXJyYXlbMF19Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUFycmF5WzFdfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VBcnJheVsyXX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlQXJyYXlbM119Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUFycmF5WzRdfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VDb250YWluZXIoe30pIHtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXG4gIH0pXG5cbiAgLy8gRkVUQ0hJTkcgREFUQSBGUk9NIE1FVCBBUEkgXG4gIC8vIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBhc3luYyBmdW5jdGlvbiBnZXRJbWFnZXMoKSB7XG4gIC8vICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgLy8gICAgIC8vIEZFVENISU5HIERBVEEgRlJPTSBNRVQgQVBJIFxuICAvLyAgICAgLy9yZXR1cm5pbmcgYW4gYXJyYXkgb2Ygb2JqZWN0IElEJ3Mgd2l0aCBGcmVuY2ggQXJ0IGJldHdlZW4gMTg5MC0xOTAwIC0gQmVsbGUgRXBvcXVlIChlcmEgb2YgcHJvZ3Jlc3MgYW5kIHByb3NwZXJpdHkpLyBJbXByZXNzaW9uaXN0cyBcbiAgLy8gICAgIC8vIGNvbnN0IGlkUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vY29sbGVjdGlvbmFwaS5tZXRtdXNldW0ub3JnL3B1YmxpYy9jb2xsZWN0aW9uL3YxL3NlYXJjaD9kYXRlQmVnaW49MTg5MCZkYXRlRW5kPTE5MDAmcT1GcmVuY2hcIik7XG4gIC8vICAgICAvLyBjb25zdCBpZEpTT04gPSBhd2FpdCBpZFJlc3BvbnNlLmpzb24oKTtcbiAgLy8gICAgIC8vIGNvbnN0IHBhcnNlZElkcyA9IGlkSlNPTi5vYmplY3RJRHM7XG4gIC8vICAgICAvLyAvL3JldHVybmluZyBhbiBhcnJheSBvZiBvYmplY3QgVVJMJ3MgYXNzb2NpYXRlZCB0byB0aGUgb2JqZWN0IElEJ3NcbiAgLy8gICAgIC8vIGNvbnN0IHByb21pc2VPYmplY3RzID0gcGFyc2VkSWRzLm1hcCggYXN5bmMgaWQgPT4gYXdhaXQgZmV0Y2goXCJodHRwczovL2NvbGxlY3Rpb25hcGkubWV0bXVzZXVtLm9yZy9wdWJsaWMvY29sbGVjdGlvbi92MS9vYmplY3RzL1wiICsgaWQpKTtcbiAgLy8gICAgIC8vIGNvbnN0IG9iamVjdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlT2JqZWN0cyk7XG4gIC8vICAgICAvLyBjb25zdCB1cmxzID0gb2JqZWN0cy5tYXAoIG9iamVjdCA9PiBvYmplY3QudXJsKTtcbiAgLy8gICAgIC8vIGNvbnN0IHByb21pc2VVUkxPYmplY3RzID0gdXJscy5tYXAoYXN5bmMgdXJsID0+IGF3YWl0IChhd2FpdCBmZXRjaCh1cmwpKS5qc29uKCkpO1xuICAvLyAgICAgLy8gY29uc3QgdXJsT2JqZWN0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VVUkxPYmplY3RzKTtcblxuICAvLyAgICAgLy8gZnVuY3Rpb24gZmlsdGVyQ2xhc3NpZmljYXRpb24odXJsT2JqZWN0cyl7XG4gIC8vICAgICAvLyAgIHJldHVybiB1cmxPYmplY3RzLmZpbHRlcih1cmxPYmplY3QgPT4gdXJsT2JqZWN0LmNsYXNzaWZpY2F0aW9uLmluY2x1ZGVzKFwiUGFpbnRpbmdzXCIpKVxuICAvLyAgICAgLy8gfVxuXG4gIC8vICAgICAvLyBjb25zdCBmaWx0ZXJlZENsYXNzaWZpY2F0aW9uID0gZmlsdGVyQ2xhc3NpZmljYXRpb24odXJsT2JqZWN0cyk7XG4gIC8vICAgICAvLyBjb25zdCBpbWFnZVVSTExpc3QgPSBmaWx0ZXJlZENsYXNzaWZpY2F0aW9uLm1hcCggb2JqZWN0ID0+IG9iamVjdC5wcmltYXJ5SW1hZ2VTbWFsbCk7XG4gICAgIFxuICAvLyAgICAgLy8gZnVuY3Rpb24gZmlsdGVyTGlzdChpbWFnZVVSTExpc3Qpe1xuICAvLyAgICAgLy8gICByZXR1cm4gaW1hZ2VVUkxMaXN0LmZpbHRlcih1cmwgPT4ge1xuICAvLyAgICAgLy8gICAgIGlmICh1cmwgPT09ICcnKXtcbiAgLy8gICAgIC8vICAgICAgIHJldHVybiBmYWxzZTtcbiAgLy8gICAgIC8vICAgICB9IFxuICAvLyAgICAgLy8gICAgIHJldHVybiB0cnVlO1xuICAvLyAgICAgLy8gICB9KVxuICAvLyAgICAgLy8gfTtcblxuICAvLyAgICAgLy8gY29uc3QgZmlsdGVyZWRMaXN0ID0gZmlsdGVyTGlzdChpbWFnZVVSTExpc3QpO1xuXG4gIC8vICAgICBzZXRJbWFnZXMoaW1hZ2VVUkxTKTtcbiAgLy8gICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIC8vICAgfVxuICAvLyAgIGdldEltYWdlcygpO1xuICAvLyB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEltYWdlTGlzdCBpc0xvYWRpbmc9e2lzTG9hZGluZ30gLz5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlTGlzdCIsInNsaWRlc2hvdyIsInVzZVJlZiIsImNsb25lcyIsImRpc2FibGVTY3JvbGwiLCJzY3JvbGxoZWlnaHQiLCJzY3JvbGxwb3MiLCJjbG9uZXNIZWlnaHQiLCJ1c2VFZmZlY3QiLCJzbGlkZXNob3dDbGFzcyIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJjb25zb2xlIiwibG9nIiwiZ2V0U2Nyb2xsUG9zIiwic2Nyb2xsVG9wIiwic2V0U2Nyb2xsUG9zIiwicG9zIiwiZ2V0Q2xvbmVzSGVpZ2h0IiwiZm9yRWFjaCIsImNsb25lIiwib2Zmc2V0SGVpZ2h0IiwicCIsInJlQ2FsYyIsInNjcm9sbEhlaWdodCIsInNjcm9sbFVwZGF0ZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJvbkxvYWQiLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImFkZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW0iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvbmxvYWQiLCJpbWFnZVVSTFMiLCJtYXBwZWRJbWFnZXMiLCJBcnJheSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiZmlsbCIsIm1hcCIsIl8iLCJpbmRleCIsInNsaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwiaW1hZ2VBcnJheSIsImltZyIsInNyYyIsIkltYWdlQ29udGFpbmVyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});