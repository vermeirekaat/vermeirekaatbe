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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.module.css */ \"./components/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/vermeirekaat/OneDrive - Hogeschool West-Vlaanderen/vermeirekaat/client/components/Layout.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Layout(_ref) {\n  _s();\n\n  var _this = this;\n\n  var background = _ref.background,\n      projects = _ref.projects;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      showProjects = _useState[0],\n      setShowProjects = _useState[1];\n\n  var overview;\n\n  if (showProjects === false) {\n    overview = projects.slice();\n  }\n\n  console.log(projects.slice(0, 4));\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n    style: {\n      backgroundColor: background\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().intro),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n        children: \"Projects\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().paragraph),\n        children: \"For the past two years I have gained knowledge of three subjects. Each with a focus on real-life cases and projects.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().devine),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().gold),\n          children: \"Development\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().orange),\n          children: \"Research\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().blue),\n          children: \"Design\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().overview),\n      children: projects.map(function (project) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().project),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n            className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().subtitle),\n            children: project.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().tags),\n            children: project.tags.map(function (tag) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().tag),\n                children: tag[\"short\"]\n              }, tag.name, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 33\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"http://localhost:1337\" + project.cover.url,\n            width: project.cover.width,\n            height: project.cover.height,\n            alt: project.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 25\n          }, _this)]\n        }, project.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Layout, \"nqT97e9LcK4sVKd+OXJNLbpEr6Q=\");\n\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/ZTU4YSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJiYWNrZ3JvdW5kIiwicHJvamVjdHMiLCJ1c2VTdGF0ZSIsInNob3dQcm9qZWN0cyIsInNldFNob3dQcm9qZWN0cyIsIm92ZXJ2aWV3Iiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwicHJvamVjdCIsInRpdGxlIiwidGFncyIsInRhZyIsIm5hbWUiLCJwcm9jZXNzIiwiY292ZXIiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BQXlDO0FBQUE7O0FBQUE7O0FBQUEsTUFBdkJDLFVBQXVCLFFBQXZCQSxVQUF1QjtBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVzs7QUFBQSxrQkFFWkMsK0NBQVEsQ0FBQyxLQUFELENBRkk7QUFBQSxNQUU3Q0MsWUFGNkM7QUFBQSxNQUUvQkMsZUFGK0I7O0FBSXBELE1BQUlDLFFBQUo7O0FBRUEsTUFBSUYsWUFBWSxLQUFLLEtBQXJCLEVBQTRCO0FBQ3hCRSxZQUFRLEdBQUdKLFFBQVEsQ0FBQ0ssS0FBVCxFQUFYO0FBQ0g7O0FBRURDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxRQUFRLENBQUNLLEtBQVQsQ0FBZSxDQUFmLEVBQWlCLENBQWpCLENBQVo7QUFFQSxzQkFDSTtBQUFTLGFBQVMsRUFBRUcscUVBQXBCO0FBQXNDLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFVjtBQUFuQixLQUE3QztBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFUyxpRUFBaEI7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUVBLGlFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFHLGlCQUFTLEVBQUVBLHFFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFJSTtBQUFLLGlCQUFTLEVBQUVBLGtFQUFoQjtBQUFBLGdDQUNJO0FBQUcsbUJBQVMsRUFBRUEsZ0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLG1CQUFTLEVBQUVBLGtFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBRyxtQkFBUyxFQUFFQSxnRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQWFJO0FBQUssZUFBUyxFQUFFQSxvRUFBaEI7QUFBQSxnQkFDS1IsUUFBUSxDQUFDVSxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLDRCQUNWO0FBQVMsbUJBQVMsRUFBRUgsbUVBQXBCO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFFQSxvRUFBZjtBQUFBLHNCQUFpQ0csT0FBTyxDQUFDQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBSyxxQkFBUyxFQUFFSixnRUFBaEI7QUFBQSxzQkFDS0csT0FBTyxDQUFDRSxJQUFSLENBQWFILEdBQWIsQ0FBaUIsVUFBQ0ksR0FBRDtBQUFBLGtDQUNkO0FBQUcseUJBQVMsRUFBRU4sK0RBQWQ7QUFBQSwwQkFBMENNLEdBQUc7QUFBN0MsaUJBQStCQSxHQUFHLENBQUNDLElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGM7QUFBQSxhQUFqQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFRSSw4REFBQyxtREFBRDtBQUNJLGVBQUcsRUFBRUMsdUJBQUEsR0FBcUNMLE9BQU8sQ0FBQ00sS0FBUixDQUFjQyxHQUQ1RDtBQUVJLGlCQUFLLEVBQUVQLE9BQU8sQ0FBQ00sS0FBUixDQUFjRSxLQUZ6QjtBQUdJLGtCQUFNLEVBQUVSLE9BQU8sQ0FBQ00sS0FBUixDQUFjRyxNQUgxQjtBQUlJLGVBQUcsRUFBRVQsT0FBTyxDQUFDQztBQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKO0FBQUEsV0FBeUNELE9BQU8sQ0FBQ1UsRUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3Q0g7O0dBcER1QnZCLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTGF5b3V0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGJhY2tncm91bmQsIHByb2plY3RzfSkge1xuXG4gICAgY29uc3QgW3Nob3dQcm9qZWN0cywgc2V0U2hvd1Byb2plY3RzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGxldCBvdmVydmlldztcblxuICAgIGlmIChzaG93UHJvamVjdHMgPT09IGZhbHNlKSB7XG4gICAgICAgIG92ZXJ2aWV3ID0gcHJvamVjdHMuc2xpY2UoKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzLnNsaWNlKDAsNCkpO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZCB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW50cm99PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+UHJvamVjdHM8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFwaH0+Rm9yIHRoZSBwYXN0IHR3byB5ZWFycyBJIGhhdmUgZ2FpbmVkIGtub3dsZWRnZSBvZiB0aHJlZSBzdWJqZWN0cy4gRWFjaCB3aXRoIGEgZm9jdXMgb24gcmVhbC1saWZlIGNhc2VzIGFuZCBwcm9qZWN0cy48L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldmluZX0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmdvbGR9PkRldmVsb3BtZW50PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5vcmFuZ2V9PlJlc2VhcmNoPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ibHVlfT5EZXNpZ248L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld30+XG4gICAgICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0fSBrZXk9e3Byb2plY3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT57cHJvamVjdC50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRhZ30ga2V5PXt0YWcubmFtZX0+e3RhZy5zaG9ydH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9VUkwgKyBwcm9qZWN0LmNvdmVyLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17cHJvamVjdC5jb3Zlci53aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3Byb2plY3QuY292ZXIuaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuXG4gICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICBcblxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});