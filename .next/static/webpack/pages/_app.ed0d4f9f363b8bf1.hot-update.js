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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    background-color: black;\\n    overflow: hidden;\\n}\\n\\nh1 {\\n    color: white;\\n}\\n\\nimg {\\n    opacity: 0.7;\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;\\n}\\n\\n.art-slideshow{\\n    /* animation: moveArt 900s linear infinite; */\\n    /* overflow: auto; */\\n    -webkit-overflow-scrolling: touch;\\n}\\n\\n.container {\\n    display: grid;\\n    grid-template-areas: \\n    \\\"a a b b c\\\" \\n    \\\"d d d e e\\\";\\n    grid-template-rows: repeat(2, 1fr);\\n    grid-template-columns: repeat(5, 1fr);\\n    width: 100%;\\n}\\n\\n@keyframes moveArt {\\n    100% {\\n        transform: translateY(-150%);\\n    }\\n}\\n\\n.a {\\n    grid-area: a;\\n}\\n\\n.b {\\n    grid-area: b;\\n}\\n\\n.c {\\n    grid-area: c;\\n}\\n\\n.d {\\n    grid-area: d;\\n}\\n\\n.e {\\n    grid-area: e;\\n}\\n\\n.nav-container {\\n    background-color: black;\\n    opacity: .7;\\n    height: 140px;\\n    position: fixed;\\n    bottom: 0;\\n    width: 100%;\\n    border-radius: 64px;\\n    margin: 24px 24px 24px 24px;\\n    display: grid;\\n    align-content: start;\\n}\\n\\n.nav-container a {\\n    color: #f9f9f9;\\n    font-family: var(--worksans-font);\\n    position: absolute;\\n    top: 20%;\\n    padding: 8px 8px;\\n}\\n\\na:hover {\\n    background-color: #d3d3d3;\\n    border-radius: 64px;\\n    color: black;\\n}\\n\\n.logo-link {\\n    font-size: 48px;\\n    font-weight: 500;\\n    padding-left: 64px;\\n}\\n\\n.nav-links {\\n    font-size: 18px !important;\\n    float: none;\\n    position: absolute;\\n    top: 35%;\\n    left: 40%;\\n    font-weight: 400;\\n}\\n\\n.contact-link {\\n    padding-left: 13em;\\n} \\n\\n@media (max-width: 450px){\\n    .nav-container {\\n        margin: 16px 16px;\\n        height: 120px;\\n    }\\n\\n    .nav-links {\\n        left: 35%;\\n    }\\n\\n    .logo-link {\\n        padding-left: 24px;\\n    }\\n\\n    .contact-link {\\n        padding-left: 6em;\\n    }   \\n}\\n\\n.audio-player button {\\n    position: absolute;\\n    top: 24px;\\n    right: 24px;\\n    background-color: black;\\n    opacity: .7;\\n    color: #f9f9f9;\\n    border: none;\\n    border-radius: 64px;\\n    padding: 24px 24px;\\n}\\n\\n.dropdown-menu-container {\\n    position: relative;\\n}\\n\\n.dropdown-menu {\\n    position: absolute;\\n    top: auto;\\n    bottom: 0;\\n    left: 0;\\n    /* transform: translateY(-5px); */\\n    list-style: none;\\n    background-color: black;\\n    opacity: .9;\\n    padding: 5px;\\n    margin: 0;\\n    border-radius: 24px;\\n    transition: transform 10s ease-in-out;\\n    transform: translateY(100%);\\n}\\n\\n.dropdown-menu.open {\\n    transform: translateY(0);\\n    width: 200px;\\n}\\n\\n.dropdown-menu li {\\n    padding: 8px;\\n    color: #f9f9f9;\\n    font-family: var(--worksans-font);\\n}\\n\\n.dropdown-menu li:hover {\\n    background-color: #d3d3d3;\\n    color: black;\\n    cursor: pointer;\\n    border-radius: 24px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://index.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,6CAA6C;IAC7C,oBAAoB;IACpB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb;;eAEW;IACX,kCAAkC;IAClC,qCAAqC;IACrC,WAAW;AACf;;AAEA;IACI;QACI,4BAA4B;IAChC;AACJ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,eAAe;IACf,SAAS;IACT,WAAW;IACX,mBAAmB;IACnB,2BAA2B;IAC3B,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,iCAAiC;IACjC,kBAAkB;IAClB,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI;QACI,iBAAiB;QACjB,aAAa;IACjB;;IAEA;QACI,SAAS;IACb;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,WAAW;IACX,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,OAAO;IACP,iCAAiC;IACjC,gBAAgB;IAChB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,mBAAmB;IACnB,qCAAqC;IACrC,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,mBAAmB;AACvB\",\"sourcesContent\":[\"body {\\n    background-color: black;\\n    overflow: hidden;\\n}\\n\\nh1 {\\n    color: white;\\n}\\n\\nimg {\\n    opacity: 0.7;\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;\\n}\\n\\n.art-slideshow{\\n    /* animation: moveArt 900s linear infinite; */\\n    /* overflow: auto; */\\n    -webkit-overflow-scrolling: touch;\\n}\\n\\n.container {\\n    display: grid;\\n    grid-template-areas: \\n    \\\"a a b b c\\\" \\n    \\\"d d d e e\\\";\\n    grid-template-rows: repeat(2, 1fr);\\n    grid-template-columns: repeat(5, 1fr);\\n    width: 100%;\\n}\\n\\n@keyframes moveArt {\\n    100% {\\n        transform: translateY(-150%);\\n    }\\n}\\n\\n.a {\\n    grid-area: a;\\n}\\n\\n.b {\\n    grid-area: b;\\n}\\n\\n.c {\\n    grid-area: c;\\n}\\n\\n.d {\\n    grid-area: d;\\n}\\n\\n.e {\\n    grid-area: e;\\n}\\n\\n.nav-container {\\n    background-color: black;\\n    opacity: .7;\\n    height: 140px;\\n    position: fixed;\\n    bottom: 0;\\n    width: 100%;\\n    border-radius: 64px;\\n    margin: 24px 24px 24px 24px;\\n    display: grid;\\n    align-content: start;\\n}\\n\\n.nav-container a {\\n    color: #f9f9f9;\\n    font-family: var(--worksans-font);\\n    position: absolute;\\n    top: 20%;\\n    padding: 8px 8px;\\n}\\n\\na:hover {\\n    background-color: #d3d3d3;\\n    border-radius: 64px;\\n    color: black;\\n}\\n\\n.logo-link {\\n    font-size: 48px;\\n    font-weight: 500;\\n    padding-left: 64px;\\n}\\n\\n.nav-links {\\n    font-size: 18px !important;\\n    float: none;\\n    position: absolute;\\n    top: 35%;\\n    left: 40%;\\n    font-weight: 400;\\n}\\n\\n.contact-link {\\n    padding-left: 13em;\\n} \\n\\n@media (max-width: 450px){\\n    .nav-container {\\n        margin: 16px 16px;\\n        height: 120px;\\n    }\\n\\n    .nav-links {\\n        left: 35%;\\n    }\\n\\n    .logo-link {\\n        padding-left: 24px;\\n    }\\n\\n    .contact-link {\\n        padding-left: 6em;\\n    }   \\n}\\n\\n.audio-player button {\\n    position: absolute;\\n    top: 24px;\\n    right: 24px;\\n    background-color: black;\\n    opacity: .7;\\n    color: #f9f9f9;\\n    border: none;\\n    border-radius: 64px;\\n    padding: 24px 24px;\\n}\\n\\n.dropdown-menu-container {\\n    position: relative;\\n}\\n\\n.dropdown-menu {\\n    position: absolute;\\n    top: auto;\\n    bottom: 0;\\n    left: 0;\\n    /* transform: translateY(-5px); */\\n    list-style: none;\\n    background-color: black;\\n    opacity: .9;\\n    padding: 5px;\\n    margin: 0;\\n    border-radius: 24px;\\n    transition: transform 10s ease-in-out;\\n    transform: translateY(100%);\\n}\\n\\n.dropdown-menu.open {\\n    transform: translateY(0);\\n    width: 200px;\\n}\\n\\n.dropdown-menu li {\\n    padding: 8px;\\n    color: #f9f9f9;\\n    font-family: var(--worksans-font);\\n}\\n\\n.dropdown-menu li:hover {\\n    background-color: #d3d3d3;\\n    color: black;\\n    cursor: pointer;\\n    border-radius: 24px;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9pbmRleC5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDdUg7QUFDdkgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGdEQUFnRCw4QkFBOEIsdUJBQXVCLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxTQUFTLG1CQUFtQixrQkFBa0IsbUJBQW1CLHdCQUF3QixHQUFHLG1CQUFtQixrREFBa0QsMkJBQTJCLDBDQUEwQyxHQUFHLGdCQUFnQixvQkFBb0IsbUVBQW1FLHlDQUF5Qyw0Q0FBNEMsa0JBQWtCLEdBQUcsd0JBQXdCLFlBQVksdUNBQXVDLE9BQU8sR0FBRyxRQUFRLG1CQUFtQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxRQUFRLG1CQUFtQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcsb0JBQW9CLDhCQUE4QixrQkFBa0Isb0JBQW9CLHNCQUFzQixnQkFBZ0Isa0JBQWtCLDBCQUEwQixrQ0FBa0Msb0JBQW9CLDJCQUEyQixHQUFHLHNCQUFzQixxQkFBcUIsd0NBQXdDLHlCQUF5QixlQUFlLHVCQUF1QixHQUFHLGFBQWEsZ0NBQWdDLDBCQUEwQixtQkFBbUIsR0FBRyxnQkFBZ0Isc0JBQXNCLHVCQUF1Qix5QkFBeUIsR0FBRyxnQkFBZ0IsaUNBQWlDLGtCQUFrQix5QkFBeUIsZUFBZSxnQkFBZ0IsdUJBQXVCLEdBQUcsbUJBQW1CLHlCQUF5QixJQUFJLDhCQUE4QixzQkFBc0IsNEJBQTRCLHdCQUF3QixPQUFPLG9CQUFvQixvQkFBb0Is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Qix5QkFBeUIsZ0JBQWdCLGdCQUFnQixjQUFjLHNDQUFzQyx5QkFBeUIsOEJBQThCLGtCQUFrQixtQkFBbUIsZ0JBQWdCLDBCQUEwQiw0Q0FBNEMsa0NBQWtDLEdBQUcseUJBQXlCLCtCQUErQixtQkFBbUIsR0FBRyx1QkFBdUIsbUJBQW1CLHFCQUFxQix3Q0FBd0MsR0FBRyw2QkFBNkIsZ0NBQWdDLG1CQUFtQixzQkFBc0IsMEJBQTBCLEdBQUcsbUJBQW1CO0FBQzEyTjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2luZGV4LmNzcz8zN2I5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaDEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmltZyB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5hcnQtc2xpZGVzaG93e1xcbiAgICAvKiBhbmltYXRpb246IG1vdmVBcnQgOTAwcyBsaW5lYXIgaW5maW5pdGU7ICovXFxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImEgYSBiIGIgY1xcXCIgXFxuICAgIFxcXCJkIGQgZCBlIGVcXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlQXJ0IHtcXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpO1xcbiAgICB9XFxufVxcblxcbi5hIHtcXG4gICAgZ3JpZC1hcmVhOiBhO1xcbn1cXG5cXG4uYiB7XFxuICAgIGdyaWQtYXJlYTogYjtcXG59XFxuXFxuLmMge1xcbiAgICBncmlkLWFyZWE6IGM7XFxufVxcblxcbi5kIHtcXG4gICAgZ3JpZC1hcmVhOiBkO1xcbn1cXG5cXG4uZSB7XFxuICAgIGdyaWQtYXJlYTogZTtcXG59XFxuXFxuLm5hdi1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogLjc7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNjRweDtcXG4gICAgbWFyZ2luOiAyNHB4IDI0cHggMjRweCAyNHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLm5hdi1jb250YWluZXIgYSB7XFxuICAgIGNvbG9yOiAjZjlmOWY5O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0td29ya3NhbnMtZm9udCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIHBhZGRpbmc6IDhweCA4cHg7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xcbiAgICBib3JkZXItcmFkaXVzOiA2NHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5sb2dvLWxpbmsge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHBhZGRpbmctbGVmdDogNjRweDtcXG59XFxuXFxuLm5hdi1saW5rcyB7XFxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDM1JTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uY29udGFjdC1saW5rIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxM2VtO1xcbn0gXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KXtcXG4gICAgLm5hdi1jb250YWluZXIge1xcbiAgICAgICAgbWFyZ2luOiAxNnB4IDE2cHg7XFxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5uYXYtbGlua3Mge1xcbiAgICAgICAgbGVmdDogMzUlO1xcbiAgICB9XFxuXFxuICAgIC5sb2dvLWxpbmsge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcbiAgICB9XFxuXFxuICAgIC5jb250YWN0LWxpbmsge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2ZW07XFxuICAgIH0gICBcXG59XFxuXFxuLmF1ZGlvLXBsYXllciBidXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjRweDtcXG4gICAgcmlnaHQ6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAuNztcXG4gICAgY29sb3I6ICNmOWY5Zjk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNjRweDtcXG4gICAgcGFkZGluZzogMjRweCAyNHB4O1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kcm9wZG93bi1tZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGF1dG87XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyAqL1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogLjk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTBzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxufVxcblxcbi5kcm9wZG93bi1tZW51Lm9wZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUgbGkge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGNvbG9yOiAjZjlmOWY5O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0td29ya3NhbnMtZm9udCk7XFxufVxcblxcbi5kcm9wZG93bi1tZW51IGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDZDQUE2QztJQUM3QyxvQkFBb0I7SUFDcEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiOztlQUVXO0lBQ1gsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLDRCQUE0QjtJQUNoQztBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsT0FBTztJQUNQLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5pbWcge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uYXJ0LXNsaWRlc2hvd3tcXG4gICAgLyogYW5pbWF0aW9uOiBtb3ZlQXJ0IDkwMHMgbGluZWFyIGluZmluaXRlOyAqL1xcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJhIGEgYiBiIGNcXFwiIFxcbiAgICBcXFwiZCBkIGQgZSBlXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZUFydCB7XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNTAlKTtcXG4gICAgfVxcbn1cXG5cXG4uYSB7XFxuICAgIGdyaWQtYXJlYTogYTtcXG59XFxuXFxuLmIge1xcbiAgICBncmlkLWFyZWE6IGI7XFxufVxcblxcbi5jIHtcXG4gICAgZ3JpZC1hcmVhOiBjO1xcbn1cXG5cXG4uZCB7XFxuICAgIGdyaWQtYXJlYTogZDtcXG59XFxuXFxuLmUge1xcbiAgICBncmlkLWFyZWE6IGU7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IC43O1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDY0cHg7XFxuICAgIG1hcmdpbjogMjRweCAyNHB4IDI0cHggMjRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIGEge1xcbiAgICBjb2xvcjogI2Y5ZjlmOTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdvcmtzYW5zLWZvbnQpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcXG4gICAgYm9yZGVyLXJhZGl1czogNjRweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubG9nby1saW5rIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XFxufVxcblxcbi5uYXYtbGlua3Mge1xcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzNSU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmNvbnRhY3QtbGluayB7XFxuICAgIHBhZGRpbmctbGVmdDogMTNlbTtcXG59IFxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCl7XFxuICAgIC5uYXYtY29udGFpbmVyIHtcXG4gICAgICAgIG1hcmdpbjogMTZweCAxNnB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgfVxcblxcbiAgICAubmF2LWxpbmtzIHtcXG4gICAgICAgIGxlZnQ6IDM1JTtcXG4gICAgfVxcblxcbiAgICAubG9nby1saW5rIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcXG4gICAgfVxcblxcbiAgICAuY29udGFjdC1saW5rIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogNmVtO1xcbiAgICB9ICAgXFxufVxcblxcbi5hdWRpby1wbGF5ZXIgYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI0cHg7XFxuICAgIHJpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogLjc7XFxuICAgIGNvbG9yOiAjZjlmOWY5O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDY0cHg7XFxuICAgIHBhZGRpbmc6IDI0cHggMjRweDtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTsgKi9cXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IC45O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudS5vcGVuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5kcm9wZG93bi1tZW51IGxpIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBjb2xvcjogI2Y5ZjlmOTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdvcmtzYW5zLWZvbnQpO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudSBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./index.css\n"));

/***/ })

});