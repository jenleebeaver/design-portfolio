"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./index.css":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./index.css ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    background-color: black;\\n    overflow: hidden;\\n}\\n\\nh1 {\\n    color: white;\\n}\\n\\nimg {\\n    opacity: 0.7;\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;\\n}\\n\\n.art-slideshow{\\n    /* animation: moveArt 900s linear infinite; */\\n    /* overflow: auto; */\\n    -webkit-overflow-scrolling: touch;\\n}\\n\\n.container {\\n    display: grid;\\n    grid-template-areas: \\n    \\\"a a b b c\\\" \\n    \\\"d d d e e\\\";\\n    grid-template-rows: repeat(2, 1fr);\\n    grid-template-columns: repeat(5, 1fr);\\n    width: 100%;\\n}\\n\\n@keyframes moveArt {\\n    100% {\\n        transform: translateY(-150%);\\n    }\\n}\\n\\n.a {\\n    grid-area: a;\\n}\\n\\n.b {\\n    grid-area: b;\\n}\\n\\n.c {\\n    grid-area: c;\\n}\\n\\n.d {\\n    grid-area: d;\\n}\\n\\n.e {\\n    grid-area: e;\\n}\\n\\n.nav-container {\\n    background-color: black;\\n    opacity: .7;\\n    height: 140px;\\n    position: fixed;\\n    bottom: 0;\\n    width: 100%;\\n    border-radius: 64px;\\n    margin: 24px 24px 24px 24px;\\n    display: grid;\\n    align-content: start;\\n}\\n\\n.nav-container a {\\n    color: #f9f9f9;\\n    font-family: var(--worksans-font);\\n    position: absolute;\\n    top: 20%;\\n    padding: 8px 8px;\\n}\\n\\na:hover {\\n    background-color: #d3d3d3;\\n    border-radius: 64px;\\n    color: black;\\n}\\n\\n.logo-link {\\n    font-size: 48px;\\n    font-weight: 500;\\n    padding-left: 64px;\\n}\\n\\n.nav-links {\\n    font-size: 18px !important;\\n    float: none;\\n    position: absolute;\\n    top: 35%;\\n    left: 40%;\\n    font-weight: 400;\\n}\\n\\n.contact-link {\\n    padding-left: 13em;\\n} \\n\\n@media (max-width: 450px){\\n    .nav-container {\\n        margin: 16px 16px;\\n        height: 120px;\\n    }\\n\\n    .nav-links {\\n        left: 35%;\\n    }\\n\\n    .logo-link {\\n        padding-left: 24px;\\n    }\\n\\n    .contact-link {\\n        padding-left: 6em;\\n    }   \\n}\\n\\n.audio-player button {\\n    position: absolute;\\n    top: 24px;\\n    right: 24px;\\n    background-color: black;\\n    opacity: .7;\\n    color: #f9f9f9;\\n    border: none;\\n    border-radius: 64px;\\n    padding: 24px 24px;\\n}\\n\\n.dropdown-menu-container {\\n    position: relative;\\n}\\n\\n.dropdown-menu {\\n    position: absolute;\\n    top: auto;\\n    bottom: 100%;\\n    left: 0;\\n    transform: translateY(-5px);\\n    list-style: none;\\n    background-color: black;\\n    opacity: .9;\\n    padding: 5px;\\n    margin: 0;\\n    border-radius: 24px;\\n    transition: transform 0.3s ease-in-out;\\n}\\n\\n.dropdown-menu li {\\n    padding: 8px;\\n    color: #f9f9f9;\\n    font-family: var(--worksans-font);\\n}\\n\\n.dropdown-menu li:hover {\\n    background-color: #d3d3d3;\\n    color: black;\\n    cursor: pointer;\\n    border-radius: 24px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://index.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,6CAA6C;IAC7C,oBAAoB;IACpB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb;;eAEW;IACX,kCAAkC;IAClC,qCAAqC;IACrC,WAAW;AACf;;AAEA;IACI;QACI,4BAA4B;IAChC;AACJ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,eAAe;IACf,SAAS;IACT,WAAW;IACX,mBAAmB;IACnB,2BAA2B;IAC3B,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,iCAAiC;IACjC,kBAAkB;IAClB,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI;QACI,iBAAiB;QACjB,aAAa;IACjB;;IAEA;QACI,SAAS;IACb;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,WAAW;IACX,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,OAAO;IACP,2BAA2B;IAC3B,gBAAgB;IAChB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,mBAAmB;IACnB,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,mBAAmB;AACvB\",\"sourcesContent\":[\"body {\\n    background-color: black;\\n    overflow: hidden;\\n}\\n\\nh1 {\\n    color: white;\\n}\\n\\nimg {\\n    opacity: 0.7;\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;\\n}\\n\\n.art-slideshow{\\n    /* animation: moveArt 900s linear infinite; */\\n    /* overflow: auto; */\\n    -webkit-overflow-scrolling: touch;\\n}\\n\\n.container {\\n    display: grid;\\n    grid-template-areas: \\n    \\\"a a b b c\\\" \\n    \\\"d d d e e\\\";\\n    grid-template-rows: repeat(2, 1fr);\\n    grid-template-columns: repeat(5, 1fr);\\n    width: 100%;\\n}\\n\\n@keyframes moveArt {\\n    100% {\\n        transform: translateY(-150%);\\n    }\\n}\\n\\n.a {\\n    grid-area: a;\\n}\\n\\n.b {\\n    grid-area: b;\\n}\\n\\n.c {\\n    grid-area: c;\\n}\\n\\n.d {\\n    grid-area: d;\\n}\\n\\n.e {\\n    grid-area: e;\\n}\\n\\n.nav-container {\\n    background-color: black;\\n    opacity: .7;\\n    height: 140px;\\n    position: fixed;\\n    bottom: 0;\\n    width: 100%;\\n    border-radius: 64px;\\n    margin: 24px 24px 24px 24px;\\n    display: grid;\\n    align-content: start;\\n}\\n\\n.nav-container a {\\n    color: #f9f9f9;\\n    font-family: var(--worksans-font);\\n    position: absolute;\\n    top: 20%;\\n    padding: 8px 8px;\\n}\\n\\na:hover {\\n    background-color: #d3d3d3;\\n    border-radius: 64px;\\n    color: black;\\n}\\n\\n.logo-link {\\n    font-size: 48px;\\n    font-weight: 500;\\n    padding-left: 64px;\\n}\\n\\n.nav-links {\\n    font-size: 18px !important;\\n    float: none;\\n    position: absolute;\\n    top: 35%;\\n    left: 40%;\\n    font-weight: 400;\\n}\\n\\n.contact-link {\\n    padding-left: 13em;\\n} \\n\\n@media (max-width: 450px){\\n    .nav-container {\\n        margin: 16px 16px;\\n        height: 120px;\\n    }\\n\\n    .nav-links {\\n        left: 35%;\\n    }\\n\\n    .logo-link {\\n        padding-left: 24px;\\n    }\\n\\n    .contact-link {\\n        padding-left: 6em;\\n    }   \\n}\\n\\n.audio-player button {\\n    position: absolute;\\n    top: 24px;\\n    right: 24px;\\n    background-color: black;\\n    opacity: .7;\\n    color: #f9f9f9;\\n    border: none;\\n    border-radius: 64px;\\n    padding: 24px 24px;\\n}\\n\\n.dropdown-menu-container {\\n    position: relative;\\n}\\n\\n.dropdown-menu {\\n    position: absolute;\\n    top: auto;\\n    bottom: 100%;\\n    left: 0;\\n    transform: translateY(-5px);\\n    list-style: none;\\n    background-color: black;\\n    opacity: .9;\\n    padding: 5px;\\n    margin: 0;\\n    border-radius: 24px;\\n    transition: transform 0.3s ease-in-out;\\n}\\n\\n.dropdown-menu li {\\n    padding: 8px;\\n    color: #f9f9f9;\\n    font-family: var(--worksans-font);\\n}\\n\\n.dropdown-menu li:hover {\\n    background-color: #d3d3d3;\\n    color: black;\\n    cursor: pointer;\\n    border-radius: 24px;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9pbmRleC5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDdUg7QUFDdkgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGdEQUFnRCw4QkFBOEIsdUJBQXVCLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxTQUFTLG1CQUFtQixrQkFBa0IsbUJBQW1CLHdCQUF3QixHQUFHLG1CQUFtQixrREFBa0QsMkJBQTJCLDBDQUEwQyxHQUFHLGdCQUFnQixvQkFBb0IsbUVBQW1FLHlDQUF5Qyw0Q0FBNEMsa0JBQWtCLEdBQUcsd0JBQXdCLFlBQVksdUNBQXVDLE9BQU8sR0FBRyxRQUFRLG1CQUFtQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxRQUFRLG1CQUFtQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcsb0JBQW9CLDhCQUE4QixrQkFBa0Isb0JBQW9CLHNCQUFzQixnQkFBZ0Isa0JBQWtCLDBCQUEwQixrQ0FBa0Msb0JBQW9CLDJCQUEyQixHQUFHLHNCQUFzQixxQkFBcUIsd0NBQXdDLHlCQUF5QixlQUFlLHVCQUF1QixHQUFHLGFBQWEsZ0NBQWdDLDBCQUEwQixtQkFBbUIsR0FBRyxnQkFBZ0Isc0JBQXNCLHVCQUF1Qix5QkFBeUIsR0FBRyxnQkFBZ0IsaUNBQWlDLGtCQUFrQix5QkFBeUIsZUFBZSxnQkFBZ0IsdUJBQXVCLEdBQUcsbUJBQW1CLHlCQUF5QixJQUFJLDhCQUE4QixzQkFBc0IsNEJBQTRCLHdCQUF3QixPQUFPLG9CQUFvQixvQkFBb0Is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QUFtQixnQkFBZ0IsMEJBQTBCLDZDQUE2QyxHQUFHLHVCQUF1QixtQkFBbUIscUJBQXFCLHdDQUF3QyxHQUFHLDZCQUE2QixnQ0FBZ0MsbUJBQW1CLHNCQUFzQiwwQkFBMEIsR0FBRyxtQkFBbUI7QUFDdGxOO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW5kZXguY3NzPzM3YjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oMSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaW1nIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmFydC1zbGlkZXNob3d7XFxuICAgIC8qIGFuaW1hdGlvbjogbW92ZUFydCA5MDBzIGxpbmVhciBpbmZpbml0ZTsgKi9cXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiYSBhIGIgYiBjXFxcIiBcXG4gICAgXFxcImQgZCBkIGUgZVxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmVBcnQge1xcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XFxuICAgIH1cXG59XFxuXFxuLmEge1xcbiAgICBncmlkLWFyZWE6IGE7XFxufVxcblxcbi5iIHtcXG4gICAgZ3JpZC1hcmVhOiBiO1xcbn1cXG5cXG4uYyB7XFxuICAgIGdyaWQtYXJlYTogYztcXG59XFxuXFxuLmQge1xcbiAgICBncmlkLWFyZWE6IGQ7XFxufVxcblxcbi5lIHtcXG4gICAgZ3JpZC1hcmVhOiBlO1xcbn1cXG5cXG4ubmF2LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAuNztcXG4gICAgaGVpZ2h0OiAxNDBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2NHB4O1xcbiAgICBtYXJnaW46IDI0cHggMjRweCAyNHB4IDI0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4ubmF2LWNvbnRhaW5lciBhIHtcXG4gICAgY29sb3I6ICNmOWY5Zjk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS13b3Jrc2Fucy1mb250KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgcGFkZGluZzogOHB4IDhweDtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDY0cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmxvZ28tbGluayB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4O1xcbn1cXG5cXG4ubmF2LWxpbmtzIHtcXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzUlO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5jb250YWN0LWxpbmsge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEzZW07XFxufSBcXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpe1xcbiAgICAubmF2LWNvbnRhaW5lciB7XFxuICAgICAgICBtYXJnaW46IDE2cHggMTZweDtcXG4gICAgICAgIGhlaWdodDogMTIwcHg7XFxuICAgIH1cXG5cXG4gICAgLm5hdi1saW5rcyB7XFxuICAgICAgICBsZWZ0OiAzNSU7XFxuICAgIH1cXG5cXG4gICAgLmxvZ28tbGluayB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3QtbGluayB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDZlbTtcXG4gICAgfSAgIFxcbn1cXG5cXG4uYXVkaW8tcGxheWVyIGJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyNHB4O1xcbiAgICByaWdodDogMjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IC43O1xcbiAgICBjb2xvcjogI2Y5ZjlmOTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2NHB4O1xcbiAgICBwYWRkaW5nOiAyNHB4IDI0cHg7XFxufVxcblxcbi5kcm9wZG93bi1tZW51LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogYXV0bztcXG4gICAgYm90dG9tOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAuOTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudSBsaSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgY29sb3I6ICNmOWY5Zjk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS13b3Jrc2Fucy1mb250KTtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLG9CQUFvQjtJQUNwQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7O2VBRVc7SUFDWCxrQ0FBa0M7SUFDbEMscUNBQXFDO0lBQ3JDLFdBQVc7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksNEJBQTRCO0lBQ2hDO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixPQUFPO0lBQ1AsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaDEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmltZyB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5hcnQtc2xpZGVzaG93e1xcbiAgICAvKiBhbmltYXRpb246IG1vdmVBcnQgOTAwcyBsaW5lYXIgaW5maW5pdGU7ICovXFxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImEgYSBiIGIgY1xcXCIgXFxuICAgIFxcXCJkIGQgZCBlIGVcXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlQXJ0IHtcXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpO1xcbiAgICB9XFxufVxcblxcbi5hIHtcXG4gICAgZ3JpZC1hcmVhOiBhO1xcbn1cXG5cXG4uYiB7XFxuICAgIGdyaWQtYXJlYTogYjtcXG59XFxuXFxuLmMge1xcbiAgICBncmlkLWFyZWE6IGM7XFxufVxcblxcbi5kIHtcXG4gICAgZ3JpZC1hcmVhOiBkO1xcbn1cXG5cXG4uZSB7XFxuICAgIGdyaWQtYXJlYTogZTtcXG59XFxuXFxuLm5hdi1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogLjc7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNjRweDtcXG4gICAgbWFyZ2luOiAyNHB4IDI0cHggMjRweCAyNHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLm5hdi1jb250YWluZXIgYSB7XFxuICAgIGNvbG9yOiAjZjlmOWY5O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0td29ya3NhbnMtZm9udCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIHBhZGRpbmc6IDhweCA4cHg7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xcbiAgICBib3JkZXItcmFkaXVzOiA2NHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5sb2dvLWxpbmsge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHBhZGRpbmctbGVmdDogNjRweDtcXG59XFxuXFxuLm5hdi1saW5rcyB7XFxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDM1JTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uY29udGFjdC1saW5rIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxM2VtO1xcbn0gXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KXtcXG4gICAgLm5hdi1jb250YWluZXIge1xcbiAgICAgICAgbWFyZ2luOiAxNnB4IDE2cHg7XFxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5uYXYtbGlua3Mge1xcbiAgICAgICAgbGVmdDogMzUlO1xcbiAgICB9XFxuXFxuICAgIC5sb2dvLWxpbmsge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcbiAgICB9XFxuXFxuICAgIC5jb250YWN0LWxpbmsge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2ZW07XFxuICAgIH0gICBcXG59XFxuXFxuLmF1ZGlvLXBsYXllciBidXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjRweDtcXG4gICAgcmlnaHQ6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAuNztcXG4gICAgY29sb3I6ICNmOWY5Zjk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNjRweDtcXG4gICAgcGFkZGluZzogMjRweCAyNHB4O1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kcm9wZG93bi1tZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGF1dG87XFxuICAgIGJvdHRvbTogMTAwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogLjk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUgbGkge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGNvbG9yOiAjZjlmOWY5O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0td29ya3NhbnMtZm9udCk7XFxufVxcblxcbi5kcm9wZG93bi1tZW51IGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./index.css\n"));

/***/ })

});