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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nfunction ImageList() {\n    _s();\n    let slideshow = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const slideshowElement = slideshow.current.querySelector(\".art-slideshow\");\n        const artContainerHeight = slideshowElement.offsetHeight - window.innerHeight;\n        document.getAnimations().forEach((anim)=>{\n            anim.cancel();\n            anim.play();\n        });\n        const animation = slideshowElement.animate([\n            {\n                transform: \"translateY(-\".concat(artContainerHeight, \"px)\")\n            }\n        ], {\n            duration: 200000,\n            iterations: Infinity\n        });\n        animation.commitStyles();\n    }, []);\n    //commented out last four URLS to have no remainders left over in a group of 5\n    const imageURLS = [\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP123847.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1943.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14201-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-21959-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-20613-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1027.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-23704-001.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1500.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT10262.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1952.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP231550.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1860.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1944.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3131.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/ep1974.356.35.R.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3117.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP341200.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-043.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1864.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-037.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1139.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1863.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1867.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1559.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT837.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1866.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DT1954.jpg\",\n        \"https://images.metmuseum.org/CRDImages/rl/web-large/DT3113.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-049.jpg\",\n        \"https://images.metmuseum.org/CRDImages/ep/web-large/DP317780.jpg\"\n    ];\n    const mappedImages = Array(Math.ceil(imageURLS.length / 5)).fill().map((_, index)=>imageURLS.slice(index * 5, index * 5 + 5));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: slideshow,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"art-slideshow\",\n            children: mappedImages.map((imageArray)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"a\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[0]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"b\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[1]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"c\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[2]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[3]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"e\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageArray[4]\n                            }, void 0, false, {\n                                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageList, \"Igeu0LJKY3qxNiynOtg34cL7axc=\");\n_c = ImageList;\nfunction ImageContainer(param) {\n    let {} = param;\n    _s1();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{});\n    // FETCHING DATA FROM MET API \n    // const [images, setImages] = React.useState([]);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        async function getImages() {\n            setIsLoading(true);\n            // FETCHING DATA FROM MET API \n            // returning an array of object ID's with French Art between 1890-1900 - Belle Epoque (era of progress and prosperity)/ Impressionists \n            const idResponse = await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=1890&dateEnd=1900&q=French\");\n            const idJSON = await idResponse.json();\n            const parsedIds = idJSON.objectIDs.slice(0, 500);\n            console.log(parsedIds);\n            //returning an array of object URL's associated to the object ID's\n            Promise.all(parsedIds.map(async (id)=>await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/objects/\" + id))).then((responses)=>{\n                //filter out responses that return 404 \n                const validResponses = responses.filter((response)=>response.status !== 404);\n                return Promise.all(validResponses.map((response)=>response.json()));\n            }).then((data)=>{\n                console.log(data);\n                const paintings = data.filter((object)=>object.classification.includes(\"Paintings\"));\n                console.log(paintings);\n                const urls = paintings.map((object)=>object.primaryImageSmall);\n                console.log(urls);\n            });\n        // function filterList(imageURLList){\n        //   return imageURLList.filter(url => {\n        //     if (url === ''){\n        //       return false;\n        //     } \n        //     return true;\n        //   })\n        // };\n        // const filteredList = filterList(imageURLList);\n        // console.log(filteredList);\n        // setImages(imageURLS);\n        // setIsLoading(false);\n        }\n        getImages();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageList, {\n            isLoading: isLoading\n        }, void 0, false, {\n            fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n            lineNumber: 154,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.jsx\",\n        lineNumber: 153,\n        columnNumber: 5\n    }, this);\n}\n_s1(ImageContainer, \"jO5DXEX+GSEm8ZRVBzxvoV7+uzo=\");\n_c1 = ImageContainer;\nvar _c, _c1;\n$RefreshReg$(_c, \"ImageList\");\n$RefreshReg$(_c1, \"ImageContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNFQUFzRVMsTUFDdkhDLElBQUksQ0FBQ0MsQ0FBQUEsWUFBYTtnQkFDakIsdUNBQXVDO2dCQUN2QyxNQUFNQyxpQkFBaUJELFVBQVVFLE1BQU0sQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsTUFBTSxLQUFLO2dCQUN0RSxPQUFPUixRQUFRQyxHQUFHLENBQUNJLGVBQWU1QixHQUFHLENBQUM4QixDQUFBQSxXQUFZQSxTQUFTWixJQUFJO1lBQ25FLEdBQUdRLElBQUksQ0FBQ00sQ0FBQUEsT0FBUTtnQkFDZFgsUUFBUUMsR0FBRyxDQUFDVTtnQkFDWixNQUFNQyxZQUFhRCxLQUFLSCxNQUFNLENBQUNLLENBQUFBLFNBQVdBLE9BQU9DLGNBQWMsQ0FBQ0MsUUFBUSxDQUFDO2dCQUN6RWYsUUFBUUMsR0FBRyxDQUFDVztnQkFDWixNQUFNSSxPQUFPSixVQUFVakMsR0FBRyxDQUFFa0MsQ0FBQUEsU0FBVUEsT0FBT0ksaUJBQWlCO2dCQUM5RGpCLFFBQVFDLEdBQUcsQ0FBQ2U7WUFDZDtRQUVBLHFDQUFxQztRQUNyQyx3Q0FBd0M7UUFDeEMsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixTQUFTO1FBQ1QsbUJBQW1CO1FBQ25CLE9BQU87UUFDUCxLQUFLO1FBRUwsaURBQWlEO1FBQ2pELDZCQUE2QjtRQUU3Qix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3pCO1FBQ0F2QjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDVjtrQkFDQyw0RUFBQ25DO1lBQVUwQyxXQUFXQTs7Ozs7Ozs7Ozs7QUFHNUIsQ0FBQztJQXpEdUJEO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEltYWdlTGlzdCgpe1xuICBsZXQgc2xpZGVzaG93ID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVzaG93RWxlbWVudCA9IHNsaWRlc2hvdy5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnQtc2xpZGVzaG93Jyk7ICAgIFxuICAgIFxuICAgIGNvbnN0IGFydENvbnRhaW5lckhlaWdodCA9IHNsaWRlc2hvd0VsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICBkb2N1bWVudC5nZXRBbmltYXRpb25zKCkuZm9yRWFjaCgoYW5pbSkgPT4ge1xuICAgICAgYW5pbS5jYW5jZWwoKTtcbiAgICAgIGFuaW0ucGxheSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHNsaWRlc2hvd0VsZW1lbnQuYW5pbWF0ZShbXG4gICAgICAgIHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtJHthcnRDb250YWluZXJIZWlnaHR9cHgpYH1cbiAgICAgIF0sIHtcbiAgICAgICAgZHVyYXRpb246IDIwMDAwMCwgXG4gICAgICAgIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuICAgICAgfSk7XG5cbiAgICAgIGFuaW1hdGlvbi5jb21taXRTdHlsZXMoKTtcbiAgXG4gIH0sIFtdKTtcblxuICBcblxuICAvL2NvbW1lbnRlZCBvdXQgbGFzdCBmb3VyIFVSTFMgdG8gaGF2ZSBubyByZW1haW5kZXJzIGxlZnQgb3ZlciBpbiBhIGdyb3VwIG9mIDVcbiAgY29uc3QgaW1hZ2VVUkxTID0gW1xuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAxMjM4NDcuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE5NDMuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0xNDIwMS0wMDEuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0yMTk1OS0wMDEuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0yMDYxMy0wMDEuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDEwMjcuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0yMzcwNC0wMDEuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE1MDAuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDEwMjYyLmpwZycsXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE5NTIuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUDIzMTU1MC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTg2MC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RUMTk0NC5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvcmwvd2ViLWxhcmdlL0RUMzEzMS5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL2VwMTk3NC4zNTYuMzUuUi5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvcmwvd2ViLWxhcmdlL0RUMzExNy5qcGcnLCBcbiAgICAnaHR0cHM6Ly9pbWFnZXMubWV0bXVzZXVtLm9yZy9DUkRJbWFnZXMvZXAvd2ViLWxhcmdlL0RQMzQxMjAwLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMTQ5MzYtMDQzLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxODY0LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFAtMTQ5MzYtMDM3LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxMTM5LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxODYzLmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxODY3LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQxNTU5LmpwZycsIFxuICAgICdodHRwczovL2ltYWdlcy5tZXRtdXNldW0ub3JnL0NSREltYWdlcy9lcC93ZWItbGFyZ2UvRFQ4MzcuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE4NjYuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EVDE5NTQuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL3JsL3dlYi1sYXJnZS9EVDMxMTMuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUC0xNDkzNi0wNDkuanBnJywgXG4gICAgJ2h0dHBzOi8vaW1hZ2VzLm1ldG11c2V1bS5vcmcvQ1JESW1hZ2VzL2VwL3dlYi1sYXJnZS9EUDMxNzc4MC5qcGcnLCBcbiAgICAgXG4gICAgXG4gICBcbiAgIFxuICBdXG5cbiAgY29uc3QgbWFwcGVkSW1hZ2VzID0gQXJyYXkoTWF0aC5jZWlsKGltYWdlVVJMUy5sZW5ndGggLyA1KSlcbiAgICAuZmlsbCgpXG4gICAgLm1hcCgoXywgaW5kZXgpID0+IGltYWdlVVJMUy5zbGljZShpbmRleCAqIDUsIGluZGV4ICogNSArIDUpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtzbGlkZXNob3d9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnQtc2xpZGVzaG93XCI+XG4gICAgICAgICAge21hcHBlZEltYWdlcy5tYXAoKGltYWdlQXJyYXkpID0+IHsgXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VBcnJheVswXX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlQXJyYXlbMV19Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUFycmF5WzJdfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VBcnJheVszXX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlQXJyYXlbNF19Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VDb250YWluZXIoe30pIHtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXG4gIH0pXG5cbiAgLy8gRkVUQ0hJTkcgREFUQSBGUk9NIE1FVCBBUEkgXG4gIC8vIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRJbWFnZXMoKSB7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIC8vIEZFVENISU5HIERBVEEgRlJPTSBNRVQgQVBJIFxuICAgICAgLy8gcmV0dXJuaW5nIGFuIGFycmF5IG9mIG9iamVjdCBJRCdzIHdpdGggRnJlbmNoIEFydCBiZXR3ZWVuIDE4OTAtMTkwMCAtIEJlbGxlIEVwb3F1ZSAoZXJhIG9mIHByb2dyZXNzIGFuZCBwcm9zcGVyaXR5KS8gSW1wcmVzc2lvbmlzdHMgXG4gICAgICBjb25zdCBpZFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2NvbGxlY3Rpb25hcGkubWV0bXVzZXVtLm9yZy9wdWJsaWMvY29sbGVjdGlvbi92MS9zZWFyY2g/ZGF0ZUJlZ2luPTE4OTAmZGF0ZUVuZD0xOTAwJnE9RnJlbmNoXCIpO1xuICAgICAgY29uc3QgaWRKU09OID0gYXdhaXQgaWRSZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zdCBwYXJzZWRJZHMgPSBpZEpTT04ub2JqZWN0SURzLnNsaWNlKDAsNTAwKTtcbiAgICAgIGNvbnNvbGUubG9nKHBhcnNlZElkcyk7XG4gICAgICAvL3JldHVybmluZyBhbiBhcnJheSBvZiBvYmplY3QgVVJMJ3MgYXNzb2NpYXRlZCB0byB0aGUgb2JqZWN0IElEJ3NcbiAgICAgUHJvbWlzZS5hbGwocGFyc2VkSWRzLm1hcCggYXN5bmMgaWQgPT4gYXdhaXQgZmV0Y2goXCJodHRwczovL2NvbGxlY3Rpb25hcGkubWV0bXVzZXVtLm9yZy9wdWJsaWMvY29sbGVjdGlvbi92MS9vYmplY3RzL1wiICsgaWQpKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlcyA9PiB7XG4gICAgICAgIC8vZmlsdGVyIG91dCByZXNwb25zZXMgdGhhdCByZXR1cm4gNDA0IFxuICAgICAgICBjb25zdCB2YWxpZFJlc3BvbnNlcyA9IHJlc3BvbnNlcy5maWx0ZXIocmVzcG9uc2UgPT4gcmVzcG9uc2Uuc3RhdHVzICE9PSA0MDQpO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh2YWxpZFJlc3BvbnNlcy5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSk7XG4gICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgY29uc3QgcGFpbnRpbmdzID0gIGRhdGEuZmlsdGVyKG9iamVjdCA9PiAob2JqZWN0LmNsYXNzaWZpY2F0aW9uLmluY2x1ZGVzKFwiUGFpbnRpbmdzXCIpKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhaW50aW5ncyk7XG4gICAgICAgIGNvbnN0IHVybHMgPSBwYWludGluZ3MubWFwKCBvYmplY3QgPT4gb2JqZWN0LnByaW1hcnlJbWFnZVNtYWxsKTtcbiAgICAgICAgY29uc29sZS5sb2codXJscyk7XG4gICAgICB9KTtcbiAgICAgXG4gICAgICAvLyBmdW5jdGlvbiBmaWx0ZXJMaXN0KGltYWdlVVJMTGlzdCl7XG4gICAgICAvLyAgIHJldHVybiBpbWFnZVVSTExpc3QuZmlsdGVyKHVybCA9PiB7XG4gICAgICAvLyAgICAgaWYgKHVybCA9PT0gJycpe1xuICAgICAgLy8gICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gICAgIH0gXG4gICAgICAvLyAgICAgcmV0dXJuIHRydWU7XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyB9O1xuXG4gICAgICAvLyBjb25zdCBmaWx0ZXJlZExpc3QgPSBmaWx0ZXJMaXN0KGltYWdlVVJMTGlzdCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXJlZExpc3QpO1xuXG4gICAgICAvLyBzZXRJbWFnZXMoaW1hZ2VVUkxTKTtcbiAgICAgIC8vIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICAgIGdldEltYWdlcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEltYWdlTGlzdCBpc0xvYWRpbmc9e2lzTG9hZGluZ30gLz5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlTGlzdCIsInNsaWRlc2hvdyIsInVzZVJlZiIsInVzZUVmZmVjdCIsInNsaWRlc2hvd0VsZW1lbnQiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvciIsImFydENvbnRhaW5lckhlaWdodCIsIm9mZnNldEhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnQiLCJnZXRBbmltYXRpb25zIiwiZm9yRWFjaCIsImFuaW0iLCJjYW5jZWwiLCJwbGF5IiwiYW5pbWF0aW9uIiwiYW5pbWF0ZSIsInRyYW5zZm9ybSIsImR1cmF0aW9uIiwiaXRlcmF0aW9ucyIsIkluZmluaXR5IiwiY29tbWl0U3R5bGVzIiwiaW1hZ2VVUkxTIiwibWFwcGVkSW1hZ2VzIiwiQXJyYXkiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImZpbGwiLCJtYXAiLCJfIiwiaW5kZXgiLCJzbGljZSIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsImltYWdlQXJyYXkiLCJpbWciLCJzcmMiLCJJbWFnZUNvbnRhaW5lciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwiZ2V0SW1hZ2VzIiwiaWRSZXNwb25zZSIsImZldGNoIiwiaWRKU09OIiwianNvbiIsInBhcnNlZElkcyIsIm9iamVjdElEcyIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwiYWxsIiwiaWQiLCJ0aGVuIiwicmVzcG9uc2VzIiwidmFsaWRSZXNwb25zZXMiLCJmaWx0ZXIiLCJyZXNwb25zZSIsInN0YXR1cyIsImRhdGEiLCJwYWludGluZ3MiLCJvYmplY3QiLCJjbGFzc2lmaWNhdGlvbiIsImluY2x1ZGVzIiwidXJscyIsInByaW1hcnlJbWFnZVNtYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});