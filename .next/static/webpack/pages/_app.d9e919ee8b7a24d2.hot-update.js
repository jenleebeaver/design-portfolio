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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    background-color: black;\\n    overflow: hidden;\\n}\\n\\nh1 {\\n    color: white;\\n}\\n\\nimg {\\n    opacity: 0.7;\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;\\n}\\n\\n.art-slideshow{\\n    /* animation: moveArt 900s linear infinite; */\\n    /* overflow: auto; */\\n    -webkit-overflow-scrolling: touch;\\n}\\n\\n.container {\\n    display: grid;\\n    grid-template-areas: \\n    \\\"a a b b c\\\" \\n    \\\"d d d e e\\\";\\n    grid-template-rows: repeat(2, 1fr);\\n    grid-template-columns: repeat(5, 1fr);\\n    width: 100%;\\n}\\n\\n@keyframes moveArt {\\n    100% {\\n        transform: translateY(-150%);\\n    }\\n}\\n\\n.a {\\n    grid-area: a;\\n}\\n\\n.b {\\n    grid-area: b;\\n}\\n\\n.c {\\n    grid-area: c;\\n}\\n\\n.d {\\n    grid-area: d;\\n}\\n\\n.e {\\n    grid-area: e;\\n}\\n\\n.nav-container {\\n    background-color: black;\\n    opacity: .7;\\n    height: 140px;\\n    position: fixed;\\n    bottom: 0;\\n    width: 100%;\\n    border-radius: 64px;\\n    margin: 24px 24px 24px 24px;\\n    display: grid;\\n    align-content: start;\\n}\\n\\n.nav-container a {\\n    color: #f9f9f9;\\n    font-family: var(--worksans-font);\\n    position: absolute;\\n    top: 20%;\\n    padding: 8px 8px;\\n}\\n\\na:hover {\\n    background-color: #d3d3d3;\\n    border-radius: 64px;\\n    color: black;\\n}\\n\\n.logo-link {\\n    font-size: 48px;\\n    font-weight: 500;\\n    padding-left: 64px;\\n}\\n\\n.nav-links {\\n    font-size: 18px !important;\\n    float: none;\\n    position: absolute;\\n    top: 35%;\\n    left: 40%;\\n    font-weight: 400;\\n}\\n\\n.contact-link {\\n    padding-left: 13em;\\n} \\n\\n@media (max-width: 450px){\\n    .nav-container {\\n        margin: 16px 16px;\\n        height: 120px;\\n    }\\n\\n    .nav-links {\\n        left: 35%;\\n    }\\n\\n    .logo-link {\\n        padding-left: 24px;\\n    }\\n\\n    .contact-link {\\n        padding-left: 6em;\\n    }   \\n}\\n\\n.audio-player button {\\n    position: absolute;\\n    top: 24px;\\n    right: 24px;\\n    background-color: black;\\n    opacity: .7;\\n    color: #f9f9f9;\\n    border: none;\\n    border-radius: 64px;\\n    padding: 24px 24px;\\n}\\n\\n.dropdown-menu-container {\\n    position: relative;\\n}\\n\\n.dropdown-menu {\\n    position: absolute;\\n    top: auto;\\n    bottom: 100%;\\n    left: 0;\\n    transform: translateY(-5px);\\n    list-style: none;\\n    background-color: black;\\n    opacity: .7;\\n    padding: 5px;\\n    margin: 0;\\n    border-radius: 24px;\\n}\\n\\n.dropdown-menu li {\\n    padding: 5px;\\n    color: #f9f9f9;\\n}\\n\\n.dropdown-menu li:hover {\\n    background-color: #d3d3d3;\\n    cursor: pointer;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://index.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,6CAA6C;IAC7C,oBAAoB;IACpB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb;;eAEW;IACX,kCAAkC;IAClC,qCAAqC;IACrC,WAAW;AACf;;AAEA;IACI;QACI,4BAA4B;IAChC;AACJ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,eAAe;IACf,SAAS;IACT,WAAW;IACX,mBAAmB;IACnB,2BAA2B;IAC3B,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,iCAAiC;IACjC,kBAAkB;IAClB,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI;QACI,iBAAiB;QACjB,aAAa;IACjB;;IAEA;QACI,SAAS;IACb;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,WAAW;IACX,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,OAAO;IACP,2BAA2B;IAC3B,gBAAgB;IAChB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB\",\"sourcesContent\":[\"body {\\n    background-color: black;\\n    overflow: hidden;\\n}\\n\\nh1 {\\n    color: white;\\n}\\n\\nimg {\\n    opacity: 0.7;\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;\\n}\\n\\n.art-slideshow{\\n    /* animation: moveArt 900s linear infinite; */\\n    /* overflow: auto; */\\n    -webkit-overflow-scrolling: touch;\\n}\\n\\n.container {\\n    display: grid;\\n    grid-template-areas: \\n    \\\"a a b b c\\\" \\n    \\\"d d d e e\\\";\\n    grid-template-rows: repeat(2, 1fr);\\n    grid-template-columns: repeat(5, 1fr);\\n    width: 100%;\\n}\\n\\n@keyframes moveArt {\\n    100% {\\n        transform: translateY(-150%);\\n    }\\n}\\n\\n.a {\\n    grid-area: a;\\n}\\n\\n.b {\\n    grid-area: b;\\n}\\n\\n.c {\\n    grid-area: c;\\n}\\n\\n.d {\\n    grid-area: d;\\n}\\n\\n.e {\\n    grid-area: e;\\n}\\n\\n.nav-container {\\n    background-color: black;\\n    opacity: .7;\\n    height: 140px;\\n    position: fixed;\\n    bottom: 0;\\n    width: 100%;\\n    border-radius: 64px;\\n    margin: 24px 24px 24px 24px;\\n    display: grid;\\n    align-content: start;\\n}\\n\\n.nav-container a {\\n    color: #f9f9f9;\\n    font-family: var(--worksans-font);\\n    position: absolute;\\n    top: 20%;\\n    padding: 8px 8px;\\n}\\n\\na:hover {\\n    background-color: #d3d3d3;\\n    border-radius: 64px;\\n    color: black;\\n}\\n\\n.logo-link {\\n    font-size: 48px;\\n    font-weight: 500;\\n    padding-left: 64px;\\n}\\n\\n.nav-links {\\n    font-size: 18px !important;\\n    float: none;\\n    position: absolute;\\n    top: 35%;\\n    left: 40%;\\n    font-weight: 400;\\n}\\n\\n.contact-link {\\n    padding-left: 13em;\\n} \\n\\n@media (max-width: 450px){\\n    .nav-container {\\n        margin: 16px 16px;\\n        height: 120px;\\n    }\\n\\n    .nav-links {\\n        left: 35%;\\n    }\\n\\n    .logo-link {\\n        padding-left: 24px;\\n    }\\n\\n    .contact-link {\\n        padding-left: 6em;\\n    }   \\n}\\n\\n.audio-player button {\\n    position: absolute;\\n    top: 24px;\\n    right: 24px;\\n    background-color: black;\\n    opacity: .7;\\n    color: #f9f9f9;\\n    border: none;\\n    border-radius: 64px;\\n    padding: 24px 24px;\\n}\\n\\n.dropdown-menu-container {\\n    position: relative;\\n}\\n\\n.dropdown-menu {\\n    position: absolute;\\n    top: auto;\\n    bottom: 100%;\\n    left: 0;\\n    transform: translateY(-5px);\\n    list-style: none;\\n    background-color: black;\\n    opacity: .7;\\n    padding: 5px;\\n    margin: 0;\\n    border-radius: 24px;\\n}\\n\\n.dropdown-menu li {\\n    padding: 5px;\\n    color: #f9f9f9;\\n}\\n\\n.dropdown-menu li:hover {\\n    background-color: #d3d3d3;\\n    cursor: pointer;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9pbmRleC5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDdUg7QUFDdkgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGdEQUFnRCw4QkFBOEIsdUJBQXVCLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxTQUFTLG1CQUFtQixrQkFBa0IsbUJBQW1CLHdCQUF3QixHQUFHLG1CQUFtQixrREFBa0QsMkJBQTJCLDBDQUEwQyxHQUFHLGdCQUFnQixvQkFBb0IsbUVBQW1FLHlDQUF5Qyw0Q0FBNEMsa0JBQWtCLEdBQUcsd0JBQXdCLFlBQVksdUNBQXVDLE9BQU8sR0FBRyxRQUFRLG1CQUFtQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxRQUFRLG1CQUFtQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcsb0JBQW9CLDhCQUE4QixrQkFBa0Isb0JBQW9CLHNCQUFzQixnQkFBZ0Isa0JBQWtCLDBCQUEwQixrQ0FBa0Msb0JBQW9CLDJCQUEyQixHQUFHLHNCQUFzQixxQkFBcUIsd0NBQXdDLHlCQUF5QixlQUFlLHVCQUF1QixHQUFHLGFBQWEsZ0NBQWdDLDBCQUEwQixtQkFBbUIsR0FBRyxnQkFBZ0Isc0JBQXNCLHVCQUF1Qix5QkFBeUIsR0FBRyxnQkFBZ0IsaUNBQWlDLGtCQUFrQix5QkFBeUIsZUFBZSxnQkFBZ0IsdUJBQXVCLEdBQUcsbUJBQW1CLHlCQUF5QixJQUFJLDhCQUE4QixzQkFBc0IsNEJBQTRCLHdCQUF3QixPQUFPLG9CQUFvQixvQkFBb0Is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Ryw2QkFBNkIsZ0NBQWdDLHNCQUFzQixHQUFHLG1CQUFtQjtBQUNueU07QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9pbmRleC5jc3M/MzdiOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5pbWcge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uYXJ0LXNsaWRlc2hvd3tcXG4gICAgLyogYW5pbWF0aW9uOiBtb3ZlQXJ0IDkwMHMgbGluZWFyIGluZmluaXRlOyAqL1xcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJhIGEgYiBiIGNcXFwiIFxcbiAgICBcXFwiZCBkIGQgZSBlXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZUFydCB7XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNTAlKTtcXG4gICAgfVxcbn1cXG5cXG4uYSB7XFxuICAgIGdyaWQtYXJlYTogYTtcXG59XFxuXFxuLmIge1xcbiAgICBncmlkLWFyZWE6IGI7XFxufVxcblxcbi5jIHtcXG4gICAgZ3JpZC1hcmVhOiBjO1xcbn1cXG5cXG4uZCB7XFxuICAgIGdyaWQtYXJlYTogZDtcXG59XFxuXFxuLmUge1xcbiAgICBncmlkLWFyZWE6IGU7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IC43O1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDY0cHg7XFxuICAgIG1hcmdpbjogMjRweCAyNHB4IDI0cHggMjRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIGEge1xcbiAgICBjb2xvcjogI2Y5ZjlmOTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdvcmtzYW5zLWZvbnQpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcXG4gICAgYm9yZGVyLXJhZGl1czogNjRweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubG9nby1saW5rIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XFxufVxcblxcbi5uYXYtbGlua3Mge1xcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzNSU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmNvbnRhY3QtbGluayB7XFxuICAgIHBhZGRpbmctbGVmdDogMTNlbTtcXG59IFxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCl7XFxuICAgIC5uYXYtY29udGFpbmVyIHtcXG4gICAgICAgIG1hcmdpbjogMTZweCAxNnB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgfVxcblxcbiAgICAubmF2LWxpbmtzIHtcXG4gICAgICAgIGxlZnQ6IDM1JTtcXG4gICAgfVxcblxcbiAgICAubG9nby1saW5rIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcXG4gICAgfVxcblxcbiAgICAuY29udGFjdC1saW5rIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogNmVtO1xcbiAgICB9ICAgXFxufVxcblxcbi5hdWRpby1wbGF5ZXIgYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI0cHg7XFxuICAgIHJpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogLjc7XFxuICAgIGNvbG9yOiAjZjlmOWY5O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDY0cHg7XFxuICAgIHBhZGRpbmc6IDI0cHggMjRweDtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICBib3R0b206IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IC43O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUgbGkge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGNvbG9yOiAjZjlmOWY5O1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudSBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLG9CQUFvQjtJQUNwQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7O2VBRVc7SUFDWCxrQ0FBa0M7SUFDbEMscUNBQXFDO0lBQ3JDLFdBQVc7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksNEJBQTRCO0lBQ2hDO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixPQUFPO0lBQ1AsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5pbWcge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uYXJ0LXNsaWRlc2hvd3tcXG4gICAgLyogYW5pbWF0aW9uOiBtb3ZlQXJ0IDkwMHMgbGluZWFyIGluZmluaXRlOyAqL1xcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJhIGEgYiBiIGNcXFwiIFxcbiAgICBcXFwiZCBkIGQgZSBlXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZUFydCB7XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNTAlKTtcXG4gICAgfVxcbn1cXG5cXG4uYSB7XFxuICAgIGdyaWQtYXJlYTogYTtcXG59XFxuXFxuLmIge1xcbiAgICBncmlkLWFyZWE6IGI7XFxufVxcblxcbi5jIHtcXG4gICAgZ3JpZC1hcmVhOiBjO1xcbn1cXG5cXG4uZCB7XFxuICAgIGdyaWQtYXJlYTogZDtcXG59XFxuXFxuLmUge1xcbiAgICBncmlkLWFyZWE6IGU7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IC43O1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDY0cHg7XFxuICAgIG1hcmdpbjogMjRweCAyNHB4IDI0cHggMjRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIGEge1xcbiAgICBjb2xvcjogI2Y5ZjlmOTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdvcmtzYW5zLWZvbnQpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcXG4gICAgYm9yZGVyLXJhZGl1czogNjRweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubG9nby1saW5rIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XFxufVxcblxcbi5uYXYtbGlua3Mge1xcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzNSU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmNvbnRhY3QtbGluayB7XFxuICAgIHBhZGRpbmctbGVmdDogMTNlbTtcXG59IFxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCl7XFxuICAgIC5uYXYtY29udGFpbmVyIHtcXG4gICAgICAgIG1hcmdpbjogMTZweCAxNnB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgfVxcblxcbiAgICAubmF2LWxpbmtzIHtcXG4gICAgICAgIGxlZnQ6IDM1JTtcXG4gICAgfVxcblxcbiAgICAubG9nby1saW5rIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcXG4gICAgfVxcblxcbiAgICAuY29udGFjdC1saW5rIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogNmVtO1xcbiAgICB9ICAgXFxufVxcblxcbi5hdWRpby1wbGF5ZXIgYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI0cHg7XFxuICAgIHJpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogLjc7XFxuICAgIGNvbG9yOiAjZjlmOWY5O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDY0cHg7XFxuICAgIHBhZGRpbmc6IDI0cHggMjRweDtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICBib3R0b206IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IC43O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUgbGkge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGNvbG9yOiAjZjlmOWY5O1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudSBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./index.css\n"));

/***/ })

});