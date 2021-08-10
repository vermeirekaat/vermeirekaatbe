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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.module.css */ \"./components/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/vermeirekaat/OneDrive - Hogeschool West-Vlaanderen/vermeirekaat/client/components/Layout.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Layout(_ref) {\n  _s();\n\n  var _this = this;\n\n  var background = _ref.background,\n      projects = _ref.projects;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      showProjects = _useState[0],\n      setShowProjects = _useState[1];\n\n  var overview;\n\n  if (showProjects === false) {\n    overview = projects.slice(0, 4);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n    style: {\n      backgroundColor: background\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().intro),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n        children: \"Projects\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().paragraph),\n        children: \"For the past two years I have gained knowledge of three subjects. Each with a focus on real-life cases and projects.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().devine),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().gold),\n          children: \"Development\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().orange),\n          children: \"Research\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().blue),\n          children: \"Design\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().overview),\n      children: overview.map(function (project) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().project),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n            className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().subtitle),\n            children: project.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().tags),\n            children: project.tags.map(function (tag) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().tag),\n                children: tag[\"short\"]\n              }, tag.name, false, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 33\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"http://localhost:1337\" + project.cover.url,\n            width: project.cover.width,\n            height: project.cover.height,\n            alt: project.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 25\n          }, _this)]\n        }, project.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this), showProjects === false ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Show More\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 21\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"You've seen all projects\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 21\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Layout, \"nqT97e9LcK4sVKd+OXJNLbpEr6Q=\");\n\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/ZTU4YSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJiYWNrZ3JvdW5kIiwicHJvamVjdHMiLCJ1c2VTdGF0ZSIsInNob3dQcm9qZWN0cyIsInNldFNob3dQcm9qZWN0cyIsIm92ZXJ2aWV3Iiwic2xpY2UiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXAiLCJwcm9qZWN0IiwidGl0bGUiLCJ0YWdzIiwidGFnIiwibmFtZSIsInByb2Nlc3MiLCJjb3ZlciIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FBeUM7QUFBQTs7QUFBQTs7QUFBQSxNQUF2QkMsVUFBdUIsUUFBdkJBLFVBQXVCO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXOztBQUFBLGtCQUVaQywrQ0FBUSxDQUFDLEtBQUQsQ0FGSTtBQUFBLE1BRTdDQyxZQUY2QztBQUFBLE1BRS9CQyxlQUYrQjs7QUFJcEQsTUFBSUMsUUFBSjs7QUFFQSxNQUFJRixZQUFZLEtBQUssS0FBckIsRUFBNEI7QUFDeEJFLFlBQVEsR0FBR0osUUFBUSxDQUFDSyxLQUFULENBQWUsQ0FBZixFQUFrQixDQUFsQixDQUFYO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBUyxhQUFTLEVBQUVDLHFFQUFwQjtBQUFzQyxTQUFLLEVBQUU7QUFBRUMscUJBQWUsRUFBRVI7QUFBbkIsS0FBN0M7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRU8saUVBQWhCO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFFQSxpRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFFQSxxRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBSUk7QUFBSyxpQkFBUyxFQUFFQSxrRUFBaEI7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUVBLGdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFFQSxrRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQUcsbUJBQVMsRUFBRUEsZ0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFhSTtBQUFLLGVBQVMsRUFBRUEsb0VBQWhCO0FBQUEsZ0JBQ0tGLFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSw0QkFDVjtBQUFTLG1CQUFTLEVBQUVILG1FQUFwQjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBRUEsb0VBQWY7QUFBQSxzQkFBaUNHLE9BQU8sQ0FBQ0M7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUsscUJBQVMsRUFBRUosZ0VBQWhCO0FBQUEsc0JBQ0tHLE9BQU8sQ0FBQ0UsSUFBUixDQUFhSCxHQUFiLENBQWlCLFVBQUNJLEdBQUQ7QUFBQSxrQ0FDZDtBQUFHLHlCQUFTLEVBQUVOLCtEQUFkO0FBQUEsMEJBQTBDTSxHQUFHO0FBQTdDLGlCQUErQkEsR0FBRyxDQUFDQyxJQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURjO0FBQUEsYUFBakI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBUUksOERBQUMsbURBQUQ7QUFDSSxlQUFHLEVBQUVDLHVCQUFBLEdBQXFDTCxPQUFPLENBQUNNLEtBQVIsQ0FBY0MsR0FENUQ7QUFFSSxpQkFBSyxFQUFFUCxPQUFPLENBQUNNLEtBQVIsQ0FBY0UsS0FGekI7QUFHSSxrQkFBTSxFQUFFUixPQUFPLENBQUNNLEtBQVIsQ0FBY0csTUFIMUI7QUFJSSxlQUFHLEVBQUVULE9BQU8sQ0FBQ0M7QUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSjtBQUFBLFdBQXlDRCxPQUFPLENBQUNVLEVBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKLEVBbUNNakIsWUFBWSxLQUFLLEtBQWpCLGdCQUNFO0FBQUssZUFBUyxFQUFFSSxrRUFBaEI7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixnQkFJRTtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlESDs7R0EzRHVCUixNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBiYWNrZ3JvdW5kLCBwcm9qZWN0c30pIHtcblxuICAgIGNvbnN0IFtzaG93UHJvamVjdHMsIHNldFNob3dQcm9qZWN0c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBsZXQgb3ZlcnZpZXc7XG5cbiAgICBpZiAoc2hvd1Byb2plY3RzID09PSBmYWxzZSkge1xuICAgICAgICBvdmVydmlldyA9IHByb2plY3RzLnNsaWNlKDAsIDQpO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmQgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmludHJvfT5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlByb2plY3RzPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PkZvciB0aGUgcGFzdCB0d28geWVhcnMgSSBoYXZlIGdhaW5lZCBrbm93bGVkZ2Ugb2YgdGhyZWUgc3ViamVjdHMuIEVhY2ggd2l0aCBhIGZvY3VzIG9uIHJlYWwtbGlmZSBjYXNlcyBhbmQgcHJvamVjdHMuPC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXZpbmV9PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5nb2xkfT5EZXZlbG9wbWVudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMub3JhbmdlfT5SZXNlYXJjaDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYmx1ZX0+RGVzaWduPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9PlxuICAgICAgICAgICAgICAgIHtvdmVydmlldy5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdH0ga2V5PXtwcm9qZWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+e3Byb2plY3QudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50YWd9IGtleT17dGFnLm5hbWV9Pnt0YWcuc2hvcnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfVVJMICsgcHJvamVjdC5jb3Zlci51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3Byb2plY3QuY292ZXIud2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtwcm9qZWN0LmNvdmVyLmhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cblxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsgc2hvd1Byb2plY3RzID09PSBmYWxzZSA/IFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgPHA+U2hvdyBNb3JlPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PiA6IFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPllvdSd2ZSBzZWVuIGFsbCBwcm9qZWN0czwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICAgIFxuXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});