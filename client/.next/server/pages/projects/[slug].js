/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/projects/[slug]";
exports.ids = ["pages/projects/[slug]"];
exports.modules = {

/***/ "./pages/projects/[slug].js":
/*!**********************************!*\
  !*** ./pages/projects/[slug].js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/vermeirekaat/OneDrive - Hogeschool West-Vlaanderen/vermeirekaat/client/pages/projects/[slug].js\";\n\nfunction Project({\n  data\n}) {\n  console.log(data);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n\n  if (router.isFallback) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: data.title\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, this);\n}\nasync function getStaticProps({\n  params\n}) {\n  const r = await fetch(`${\"http://localhost:1337\"}/projects/?slug=${params.slug}`);\n  const data = await r.json();\n  return {\n    props: {\n      data: data.pop() // The pop() method in JavaScript removes the last element of an array and returns that element. It will remove an item from the end of an array and return that item.\n\n    },\n    revalidate: 1\n  };\n}\n;\nasync function getStaticPaths() {\n  const r = await fetch(`${\"http://localhost:1337\"}/projects?_limit=3&_sort=id:desc`);\n  const data = await r.json();\n  return {\n    paths: data.map(project => ({\n      params: {\n        slug: project.slug\n      }\n    })),\n    fallback: true\n  };\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZXJtZWlyZWthYXQvLi9wYWdlcy9wcm9qZWN0cy9bc2x1Z10uanM/ODEyZSJdLCJuYW1lcyI6WyJQcm9qZWN0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIiwidGl0bGUiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInIiLCJmZXRjaCIsInByb2Nlc3MiLCJzbHVnIiwianNvbiIsInByb3BzIiwicG9wIiwicmV2YWxpZGF0ZSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJtYXAiLCJwcm9qZWN0IiwiZmFsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxDQUFpQjtBQUFFQztBQUFGLENBQWpCLEVBQTJCO0FBRXRDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUVBLFFBQU1HLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBQ0EsTUFBSUQsTUFBTSxDQUFDRSxVQUFYLEVBQXVCO0FBQ25CLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDSDs7QUFFRCxzQkFDSTtBQUFBLGNBQUlMLElBQUksQ0FBQ007QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFHSDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEI7QUFBRUM7QUFBRixDQUE5QixFQUEwQztBQUM3QyxRQUFNQyxDQUFDLEdBQUcsTUFBTUMsS0FBSyxDQUNsQixHQUFFQyx1QkFBbUMsbUJBQWtCSCxNQUFNLENBQUNJLElBQUssRUFEakQsQ0FBckI7QUFHQSxRQUFNWixJQUFJLEdBQUcsTUFBTVMsQ0FBQyxDQUFDSSxJQUFGLEVBQW5CO0FBRUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTGQsVUFBSSxFQUFFQSxJQUFJLENBQUNlLEdBQUwsRUFERCxDQUNhOztBQURiLEtBREY7QUFJTEMsY0FBVSxFQUFFO0FBSlAsR0FBUDtBQU1EO0FBQUE7QUFFTSxlQUFlQyxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1SLENBQUMsR0FBRyxNQUFNQyxLQUFLLENBQ2xCLEdBQUVDLHVCQUFtQyxrQ0FEbkIsQ0FBckI7QUFHQSxRQUFNWCxJQUFJLEdBQUcsTUFBTVMsQ0FBQyxDQUFDSSxJQUFGLEVBQW5CO0FBRUEsU0FBTztBQUNMSyxTQUFLLEVBQUVsQixJQUFJLENBQUNtQixHQUFMLENBQVVDLE9BQUQsS0FBYztBQUM1QlosWUFBTSxFQUFFO0FBQ05JLFlBQUksRUFBRVEsT0FBTyxDQUFDUjtBQURSO0FBRG9CLEtBQWQsQ0FBVCxDQURGO0FBTUxTLFlBQVEsRUFBRTtBQU5MLEdBQVA7QUFRRDtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamVjdHMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoeyBkYXRhIH0pIHtcblxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IFxuICAgIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8cD57ZGF0YS50aXRsZX08L3A+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IHIgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9VUkx9L3Byb2plY3RzLz9zbHVnPSR7cGFyYW1zLnNsdWd9YFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHIuanNvbigpO1xuICBcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZGF0YTogZGF0YS5wb3AoKSwgLy8gVGhlIHBvcCgpIG1ldGhvZCBpbiBKYXZhU2NyaXB0IHJlbW92ZXMgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheSBhbmQgcmV0dXJucyB0aGF0IGVsZW1lbnQuIEl0IHdpbGwgcmVtb3ZlIGFuIGl0ZW0gZnJvbSB0aGUgZW5kIG9mIGFuIGFycmF5IGFuZCByZXR1cm4gdGhhdCBpdGVtLlxuICAgICAgfSxcbiAgICAgIHJldmFsaWRhdGU6IDEsXG4gICAgfTtcbiAgfTtcbiAgXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgICBjb25zdCByID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfVVJMfS9wcm9qZWN0cz9fbGltaXQ9MyZfc29ydD1pZDpkZXNjYFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHIuanNvbigpO1xuICBcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aHM6IGRhdGEubWFwKChwcm9qZWN0KSA9PiAoe1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzbHVnOiBwcm9qZWN0LnNsdWcsXG4gICAgICAgIH0sXG4gICAgICB9KSksXG4gICAgICBmYWxsYmFjazogdHJ1ZSxcbiAgICB9O1xuICB9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/[slug].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/projects/[slug].js"));
module.exports = __webpack_exports__;

})();