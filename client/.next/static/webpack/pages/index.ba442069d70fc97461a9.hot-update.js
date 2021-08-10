/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.module.css */ \"./components/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/vermeirekaat/OneDrive - Hogeschool West-Vlaanderen/vermeirekaat/client/components/Layout.js\";\n\n\nfunction Layout(_ref) {\n  var _this = this;\n\n  var background = _ref.background,\n      projects = _ref.projects;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n    style: {\n      backgroundColor: background\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().intro),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n        children: \"Projects\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().paragraph),\n        children: \"For the past two years I have gained knowledge of three subjects. Each with a focus on real-life cases and projects.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().devine),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().gold),\n          children: \"Development\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().orange),\n          children: \"Research\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().blue),\n          children: \"Design\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().overview),\n      children: projects.map(function (project) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().project),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n            className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().subtitle),\n            children: project.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 25\n          }, _this), project.tags.map(function (tag) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().tags),\n              children: [\"- \", tag[\"short\"], \" -\"]\n            }, tag.name, true, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 29\n            }, _this);\n          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"http://localhost:1337\" + project.cover.url,\n            width: project.cover.width,\n            height: project.cover.height,\n            alt: project.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 25\n          }, _this)]\n        }, project.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/ZTU4YSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJiYWNrZ3JvdW5kIiwicHJvamVjdHMiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXAiLCJwcm9qZWN0IiwidGl0bGUiLCJ0YWdzIiwidGFnIiwibmFtZSIsInByb2Nlc3MiLCJjb3ZlciIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUF5QztBQUFBOztBQUFBLE1BQXZCQyxVQUF1QixRQUF2QkEsVUFBdUI7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDcEQsc0JBQ0k7QUFBUyxhQUFTLEVBQUVDLHFFQUFwQjtBQUFzQyxTQUFLLEVBQUU7QUFBRUMscUJBQWUsRUFBRUg7QUFBbkIsS0FBN0M7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUUsaUVBQWhCO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFFQSxpRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFFQSxxRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBSUk7QUFBSyxpQkFBUyxFQUFFQSxrRUFBaEI7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUVBLGdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFFQSxrRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQUcsbUJBQVMsRUFBRUEsZ0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFhSTtBQUFLLGVBQVMsRUFBRUEsb0VBQWhCO0FBQUEsZ0JBQ0tELFFBQVEsQ0FBQ0csR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSw0QkFDVjtBQUFTLG1CQUFTLEVBQUVILG1FQUFwQjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBRUEsb0VBQWY7QUFBQSxzQkFBaUNHLE9BQU8sQ0FBQ0M7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVLRCxPQUFPLENBQUNFLElBQVIsQ0FBYUgsR0FBYixDQUFpQixVQUFDSSxHQUFEO0FBQUEsZ0NBQ2Q7QUFBRyx1QkFBUyxFQUFFTixnRUFBZDtBQUFBLCtCQUE2Q00sR0FBRyxTQUFoRDtBQUFBLGVBQWdDQSxHQUFHLENBQUNDLElBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGM7QUFBQSxXQUFqQixDQUZMLGVBS0ksOERBQUMsbURBQUQ7QUFDSSxlQUFHLEVBQUVDLHVCQUFBLEdBQXFDTCxPQUFPLENBQUNNLEtBQVIsQ0FBY0MsR0FENUQ7QUFFSSxpQkFBSyxFQUFFUCxPQUFPLENBQUNNLEtBQVIsQ0FBY0UsS0FGekI7QUFHSSxrQkFBTSxFQUFFUixPQUFPLENBQUNNLEtBQVIsQ0FBY0csTUFIMUI7QUFJSSxlQUFHLEVBQUVULE9BQU8sQ0FBQ0M7QUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSjtBQUFBLFdBQXlDRCxPQUFPLENBQUNVLEVBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUNIO0tBdEN1QmhCLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTGF5b3V0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBiYWNrZ3JvdW5kLCBwcm9qZWN0c30pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb30+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Qcm9qZWN0czwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5Gb3IgdGhlIHBhc3QgdHdvIHllYXJzIEkgaGF2ZSBnYWluZWQga25vd2xlZGdlIG9mIHRocmVlIHN1YmplY3RzLiBFYWNoIHdpdGggYSBmb2N1cyBvbiByZWFsLWxpZmUgY2FzZXMgYW5kIHByb2plY3RzLjwvcD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV2aW5lfT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZ29sZH0+RGV2ZWxvcG1lbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm9yYW5nZX0+UmVzZWFyY2g8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJsdWV9PkRlc2lnbjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3fT5cbiAgICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3R9IGtleT17cHJvamVjdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9Pntwcm9qZWN0LnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGFnc30ga2V5PXt0YWcubmFtZX0+LSB7dGFnLnNob3J0fSAtPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9VUkwgKyBwcm9qZWN0LmNvdmVyLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17cHJvamVjdC5jb3Zlci53aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3Byb2plY3QuY292ZXIuaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuXG4gICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICBcblxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});