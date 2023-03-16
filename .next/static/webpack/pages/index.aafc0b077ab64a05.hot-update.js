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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ImageList(props) {\n    const { images  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"a\",\n                children: \"Box A\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"b\",\n                children: \"Box B\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.js\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"c\",\n                children: \"Box C\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.js\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d\",\n                children: \"Box D\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"e\",\n                children: \"Box E\"\n            }, void 0, false, {\n                fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = ImageList;\nfunction ImageContainer(param) {\n    let {} = param;\n    _s();\n    const [images, setImages] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        async function getImages() {\n            setIsLoading(true);\n            //returning an array of object ID's with French Art between 1894-1895\n            const idResponse = await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=1894&dateEnd=1895&q=French\");\n            const idJSON = await idResponse.json();\n            const parsedIds = idJSON.objectIDs.slice(0, 35);\n            //returning an array of object URL's associated to the object ID's\n            const promiseObjects = parsedIds.map(async (id)=>await fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/objects/\" + id));\n            const objects = await Promise.all(promiseObjects);\n            const urls = objects.map((object)=>object.url);\n            const promiseURLObjects = urls.map(async (url)=>await (await fetch(url)).json());\n            const urlObjects = await Promise.all(promiseURLObjects);\n            const imageURLList = urlObjects.map((object)=>object.primaryImage);\n            function filterList(imageURLList) {\n                return imageURLList.filter((url)=>{\n                    if (url === \"\") {\n                        return false;\n                    }\n                    return true;\n                });\n            }\n            ;\n            const filteredList = filterList(imageURLList);\n            console.log(filteredList);\n            setImages(filterList);\n            setIsLoading(false);\n        }\n        getImages();\n    }, []);\n    return isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        style: \"color: white\",\n        children: '\"Loading ...\"'\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.js\",\n        lineNumber: 55,\n        columnNumber: 17\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageList, {\n        images: images,\n        isLoading: isLoading\n    }, void 0, false, {\n        fileName: \"/Users/jenniferbeaver/jb_portfolio/pages/index.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageContainer, \"ccjDnFeBD6fkN7m6nZEoLuM0cz4=\");\n_c1 = ImageContainer;\nvar _c, _c1;\n$RefreshReg$(_c, \"ImageList\");\n$RefreshReg$(_c1, \"ImageContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBRTFCLFNBQVNDLFVBQVVDLEtBQUssRUFBQztJQUN2QixNQUFNLEVBQUNDLE9BQU0sRUFBQyxHQUFHRDtJQUVqQixxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2YsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFJOzs7Ozs7MEJBQ25CLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBSTs7Ozs7OzBCQUNuQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQUk7Ozs7OzswQkFDbkIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFJOzs7Ozs7MEJBQ25CLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBSTs7Ozs7Ozs7Ozs7O0FBR3ZCO0tBWlNKO0FBY00sU0FBU0ssZUFBZSxLQUFFLEVBQUU7UUFBSixFQUFFLEdBQUY7O0lBQ3JDLE1BQU0sQ0FBQ0gsUUFBUUksVUFBVSxHQUFHUCxxREFBYyxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFDUyxXQUFXQyxhQUFhLEdBQUdWLHFEQUFjLENBQUMsS0FBSztJQUV0REEsc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCLGVBQWVZLFlBQVk7WUFDekJGLGFBQWEsSUFBSTtZQUNqQixxRUFBcUU7WUFDckUsTUFBTUcsYUFBYSxNQUFNQyxNQUFNO1lBQy9CLE1BQU1DLFNBQVMsTUFBTUYsV0FBV0csSUFBSTtZQUNwQyxNQUFNQyxZQUFZRixPQUFPRyxTQUFTLENBQUNDLEtBQUssQ0FBQyxHQUFHO1lBQzVDLGtFQUFrRTtZQUNsRSxNQUFNQyxpQkFBaUJILFVBQVVJLEdBQUcsQ0FBRSxPQUFNQyxLQUFNLE1BQU1SLE1BQU0sc0VBQXNFUTtZQUNwSSxNQUFNQyxVQUFVLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0w7WUFDbEMsTUFBTU0sT0FBT0gsUUFBUUYsR0FBRyxDQUFFTSxDQUFBQSxTQUFVQSxPQUFPQyxHQUFHO1lBQzlDLE1BQU1DLG9CQUFvQkgsS0FBS0wsR0FBRyxDQUFDLE9BQU1PLE1BQU8sTUFBTSxDQUFDLE1BQU1kLE1BQU1jLElBQUcsRUFBR1osSUFBSTtZQUM3RSxNQUFNYyxhQUFhLE1BQU1OLFFBQVFDLEdBQUcsQ0FBQ0k7WUFDckMsTUFBTUUsZUFBZUQsV0FBV1QsR0FBRyxDQUFFTSxDQUFBQSxTQUFVQSxPQUFPSyxZQUFZO1lBRWxFLFNBQVNDLFdBQVdGLFlBQVksRUFBQztnQkFDL0IsT0FBT0EsYUFBYUcsTUFBTSxDQUFDTixDQUFBQSxNQUFPO29CQUNoQyxJQUFJQSxRQUFRLElBQUc7d0JBQ2IsT0FBTyxLQUFLO29CQUNkLENBQUM7b0JBQ0QsT0FBTyxJQUFJO2dCQUNiO1lBQ0Y7O1lBRUEsTUFBTU8sZUFBZUYsV0FBV0Y7WUFDaENLLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFFWjVCLFVBQVUwQjtZQUNWdkIsYUFBYSxLQUFLO1FBQ3BCO1FBQ0FFO0lBQ0YsR0FBRyxFQUFFO0lBRUwsT0FDRUgsMEJBQVksOERBQUM2QjtRQUFFQyxPQUFNO2tCQUFlOzs7Ozs2QkFDcEMsOERBQUN0QztRQUFVRSxRQUFRQTtRQUFRTSxXQUFXQTs7Ozs7WUFBYTtBQUV2RCxDQUFDO0dBekN1Qkg7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBJbWFnZUxpc3QocHJvcHMpe1xuICBjb25zdCB7aW1hZ2VzfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFcIj5Cb3ggQTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYlwiPkJveCBCPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjXCI+Qm94IEM8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRcIj5Cb3ggRDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZVwiPkJveCBFPC9kaXY+XG4gIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlQ29udGFpbmVyKHt9KSB7XG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRJbWFnZXMoKSB7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAvL3JldHVybmluZyBhbiBhcnJheSBvZiBvYmplY3QgSUQncyB3aXRoIEZyZW5jaCBBcnQgYmV0d2VlbiAxODk0LTE4OTVcbiAgICAgIGNvbnN0IGlkUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vY29sbGVjdGlvbmFwaS5tZXRtdXNldW0ub3JnL3B1YmxpYy9jb2xsZWN0aW9uL3YxL3NlYXJjaD9kYXRlQmVnaW49MTg5NCZkYXRlRW5kPTE4OTUmcT1GcmVuY2hcIik7XG4gICAgICBjb25zdCBpZEpTT04gPSBhd2FpdCBpZFJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IHBhcnNlZElkcyA9IGlkSlNPTi5vYmplY3RJRHMuc2xpY2UoMCwgMzUpO1xuICAgICAgLy9yZXR1cm5pbmcgYW4gYXJyYXkgb2Ygb2JqZWN0IFVSTCdzIGFzc29jaWF0ZWQgdG8gdGhlIG9iamVjdCBJRCdzXG4gICAgICBjb25zdCBwcm9taXNlT2JqZWN0cyA9IHBhcnNlZElkcy5tYXAoIGFzeW5jIGlkID0+IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9jb2xsZWN0aW9uYXBpLm1ldG11c2V1bS5vcmcvcHVibGljL2NvbGxlY3Rpb24vdjEvb2JqZWN0cy9cIiArIGlkKSk7XG4gICAgICBjb25zdCBvYmplY3RzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZU9iamVjdHMpO1xuICAgICAgY29uc3QgdXJscyA9IG9iamVjdHMubWFwKCBvYmplY3QgPT4gb2JqZWN0LnVybCk7XG4gICAgICBjb25zdCBwcm9taXNlVVJMT2JqZWN0cyA9IHVybHMubWFwKGFzeW5jIHVybCA9PiBhd2FpdCAoYXdhaXQgZmV0Y2godXJsKSkuanNvbigpKTtcbiAgICAgIGNvbnN0IHVybE9iamVjdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlVVJMT2JqZWN0cyk7XG4gICAgICBjb25zdCBpbWFnZVVSTExpc3QgPSB1cmxPYmplY3RzLm1hcCggb2JqZWN0ID0+IG9iamVjdC5wcmltYXJ5SW1hZ2UpO1xuICAgICBcbiAgICAgIGZ1bmN0aW9uIGZpbHRlckxpc3QoaW1hZ2VVUkxMaXN0KXtcbiAgICAgICAgcmV0dXJuIGltYWdlVVJMTGlzdC5maWx0ZXIodXJsID0+IHtcbiAgICAgICAgICBpZiAodXJsID09PSAnJyl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkTGlzdCA9IGZpbHRlckxpc3QoaW1hZ2VVUkxMaXN0KTtcbiAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkTGlzdCk7XG5cbiAgICAgIHNldEltYWdlcyhmaWx0ZXJMaXN0KTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICAgIGdldEltYWdlcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICBpc0xvYWRpbmcgPyA8cCBzdHlsZT1cImNvbG9yOiB3aGl0ZVwiPlwiTG9hZGluZyAuLi5cIjwvcD4gOlxuICAgIDxJbWFnZUxpc3QgaW1hZ2VzPXtpbWFnZXN9IGlzTG9hZGluZz17aXNMb2FkaW5nfSAvPlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2VMaXN0IiwicHJvcHMiLCJpbWFnZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJJbWFnZUNvbnRhaW5lciIsInNldEltYWdlcyIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlRWZmZWN0IiwiZ2V0SW1hZ2VzIiwiaWRSZXNwb25zZSIsImZldGNoIiwiaWRKU09OIiwianNvbiIsInBhcnNlZElkcyIsIm9iamVjdElEcyIsInNsaWNlIiwicHJvbWlzZU9iamVjdHMiLCJtYXAiLCJpZCIsIm9iamVjdHMiLCJQcm9taXNlIiwiYWxsIiwidXJscyIsIm9iamVjdCIsInVybCIsInByb21pc2VVUkxPYmplY3RzIiwidXJsT2JqZWN0cyIsImltYWdlVVJMTGlzdCIsInByaW1hcnlJbWFnZSIsImZpbHRlckxpc3QiLCJmaWx0ZXIiLCJmaWx0ZXJlZExpc3QiLCJjb25zb2xlIiwibG9nIiwicCIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});