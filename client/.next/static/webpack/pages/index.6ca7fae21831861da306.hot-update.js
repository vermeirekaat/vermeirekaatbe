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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout.module.css */ \"./components/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/vermeirekaat/OneDrive - Hogeschool West-Vlaanderen/vermeirekaat/client/components/Layout.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Layout(_ref) {\n  _s();\n\n  var _this = this;\n\n  var background = _ref.background,\n      projects = _ref.projects;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      showProjects = _useState[0],\n      setShowProjects = _useState[1];\n\n  var overview;\n\n  if (showProjects === false) {\n    overview = projects.slice(0, 4); // console.log(\"false\");\n  } else if (showProjects === true) {\n    overview = projects;\n  }\n\n  var handleClickButton = function handleClickButton(e) {\n    console.log(e);\n    console.log(\"button is clicked\");\n    setShowProjects(!showProjects);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n    style: {\n      backgroundColor: background\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().intro),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n        children: \"Projects\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().paragraph),\n        children: \"For the past two years I have gained knowledge of three subjects. Each with a focus on real-life cases and projects.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().devine),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().gold),\n          children: \"Development\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().orange),\n          children: \"Research\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().blue),\n          children: \"Design\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().overview),\n      children: overview.map(function (project) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"/projects/\".concat(project.slug),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n              className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().project),\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().subtitle),\n                children: project.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 25\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().tags),\n                children: project.tags.map(function (tag) {\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().tag),\n                    children: tag[\"short\"]\n                  }, tag.name, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 47,\n                    columnNumber: 33\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 25\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"http://localhost:1337\" + project.cover.url,\n                width: project.cover.width,\n                height: project.cover.height,\n                alt: project.title,\n                priority: true,\n                quality: 50\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 25\n              }, _this)]\n            }, project.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 21\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 21\n          }, _this)\n        }, project.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, this), showProjects === false ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().bottom),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        onClick: function onClick(e) {\n          return handleClickButton(e);\n        },\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n        children: \"Show More\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 21\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().bottom),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().end),\n        children: \"You've seen all projects.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 21\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Layout, \"nqT97e9LcK4sVKd+OXJNLbpEr6Q=\");\n\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/ZTU4YSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJiYWNrZ3JvdW5kIiwicHJvamVjdHMiLCJ1c2VTdGF0ZSIsInNob3dQcm9qZWN0cyIsInNldFNob3dQcm9qZWN0cyIsIm92ZXJ2aWV3Iiwic2xpY2UiLCJoYW5kbGVDbGlja0J1dHRvbiIsImUiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwicHJvamVjdCIsInNsdWciLCJ0aXRsZSIsInRhZ3MiLCJ0YWciLCJuYW1lIiwicHJvY2VzcyIsImNvdmVyIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FBMEM7QUFBQTs7QUFBQTs7QUFBQSxNQUF4QkMsVUFBd0IsUUFBeEJBLFVBQXdCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUViQywrQ0FBUSxDQUFDLEtBQUQsQ0FGSztBQUFBLE1BRTlDQyxZQUY4QztBQUFBLE1BRWhDQyxlQUZnQzs7QUFJckQsTUFBSUMsUUFBSjs7QUFFQSxNQUFJRixZQUFZLEtBQUssS0FBckIsRUFBNEI7QUFDeEJFLFlBQVEsR0FBR0osUUFBUSxDQUFDSyxLQUFULENBQWUsQ0FBZixFQUFrQixDQUFsQixDQUFYLENBRHdCLENBRXhCO0FBQ0gsR0FIRCxNQUdPLElBQUlILFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUM5QkUsWUFBUSxHQUFHSixRQUFYO0FBQ0g7O0FBRUQsTUFBTU0saUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxDQUFDLEVBQUk7QUFDM0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0FOLG1CQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFmO0FBQ0gsR0FKRDs7QUFNQSxzQkFDSTtBQUFTLGFBQVMsRUFBRVEscUVBQXBCO0FBQXNDLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFWjtBQUFuQixLQUE3QztBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFVyxpRUFBaEI7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUVBLGlFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFHLGlCQUFTLEVBQUVBLHFFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFJSTtBQUFLLGlCQUFTLEVBQUVBLGtFQUFoQjtBQUFBLGdDQUNJO0FBQUcsbUJBQVMsRUFBRUEsZ0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLG1CQUFTLEVBQUVBLGtFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBRyxtQkFBUyxFQUFFQSxnRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQWFJO0FBQUssZUFBUyxFQUFFQSxvRUFBaEI7QUFBQSxnQkFDS04sUUFBUSxDQUFDUSxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLDRCQUNWLDhEQUFDLGtEQUFEO0FBQXVCLGNBQUksc0JBQWVBLE9BQU8sQ0FBQ0MsSUFBdkIsQ0FBM0I7QUFBQSxpQ0FDQTtBQUFHLHFCQUFTLEVBQUVKLGdFQUFkO0FBQUEsbUNBQ0E7QUFBUyx1QkFBUyxFQUFFQSxtRUFBcEI7QUFBQSxzQ0FDSTtBQUFJLHlCQUFTLEVBQUVBLG9FQUFmO0FBQUEsMEJBQWlDRyxPQUFPLENBQUNFO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFLLHlCQUFTLEVBQUVMLGdFQUFoQjtBQUFBLDBCQUNLRyxPQUFPLENBQUNHLElBQVIsQ0FBYUosR0FBYixDQUFpQixVQUFDSyxHQUFEO0FBQUEsc0NBQ2Q7QUFBRyw2QkFBUyxFQUFFUCwrREFBZDtBQUFBLDhCQUEwQ08sR0FBRztBQUE3QyxxQkFBK0JBLEdBQUcsQ0FBQ0MsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEYztBQUFBLGlCQUFqQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFRSSw4REFBQyxtREFBRDtBQUNJLG1CQUFHLEVBQUVDLHVCQUFBLEdBQXFDTixPQUFPLENBQUNPLEtBQVIsQ0FBY0MsR0FENUQ7QUFFSSxxQkFBSyxFQUFFUixPQUFPLENBQUNPLEtBQVIsQ0FBY0UsS0FGekI7QUFHSSxzQkFBTSxFQUFFVCxPQUFPLENBQUNPLEtBQVIsQ0FBY0csTUFIMUI7QUFJSSxtQkFBRyxFQUFFVixPQUFPLENBQUNFLEtBSmpCO0FBS0ksd0JBQVEsRUFBRSxJQUxkO0FBTUksdUJBQU8sRUFBRTtBQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUko7QUFBQSxlQUF5Q0YsT0FBTyxDQUFDVyxFQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLFdBQVdYLE9BQU8sQ0FBQ1csRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkosRUF1Q010QixZQUFZLEtBQUssS0FBakIsZ0JBQ0U7QUFBSyxlQUFTLEVBQUVRLGtFQUFoQjtBQUFBLDZCQUNJO0FBQUcsZUFBTyxFQUFFLGlCQUFDSCxDQUFEO0FBQUEsaUJBQU9ELGlCQUFpQixDQUFDQyxDQUFELENBQXhCO0FBQUEsU0FBWjtBQUF5QyxpQkFBUyxFQUFFRyxrRUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZ0JBSUU7QUFBSyxlQUFTLEVBQUVBLGtFQUFoQjtBQUFBLDZCQUNJO0FBQUcsaUJBQVMsRUFBRUEsK0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0NSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0RIOztHQXJFdUJaLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTGF5b3V0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgYmFja2dyb3VuZCwgcHJvamVjdHMgfSkge1xuXG4gICAgY29uc3QgW3Nob3dQcm9qZWN0cywgc2V0U2hvd1Byb2plY3RzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGxldCBvdmVydmlldztcblxuICAgIGlmIChzaG93UHJvamVjdHMgPT09IGZhbHNlKSB7XG4gICAgICAgIG92ZXJ2aWV3ID0gcHJvamVjdHMuc2xpY2UoMCwgNCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmFsc2VcIik7XG4gICAgfSBlbHNlIGlmIChzaG93UHJvamVjdHMgPT09IHRydWUpIHtcbiAgICAgICAgb3ZlcnZpZXcgPSBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbGlja0J1dHRvbiA9IGUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJidXR0b24gaXMgY2xpY2tlZFwiKTtcbiAgICAgICAgc2V0U2hvd1Byb2plY3RzKCFzaG93UHJvamVjdHMpO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmQgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmludHJvfT5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlByb2plY3RzPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PkZvciB0aGUgcGFzdCB0d28geWVhcnMgSSBoYXZlIGdhaW5lZCBrbm93bGVkZ2Ugb2YgdGhyZWUgc3ViamVjdHMuIEVhY2ggd2l0aCBhIGZvY3VzIG9uIHJlYWwtbGlmZSBjYXNlcyBhbmQgcHJvamVjdHMuPC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXZpbmV9PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5nb2xkfT5EZXZlbG9wbWVudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMub3JhbmdlfT5SZXNlYXJjaDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYmx1ZX0+RGVzaWduPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9PlxuICAgICAgICAgICAgICAgIHtvdmVydmlldy5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtwcm9qZWN0LmlkfSBocmVmPXtgL3Byb2plY3RzLyR7cHJvamVjdC5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdH0ga2V5PXtwcm9qZWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+e3Byb2plY3QudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50YWd9IGtleT17dGFnLm5hbWV9Pnt0YWcuc2hvcnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfVVJMICsgcHJvamVjdC5jb3Zlci51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3Byb2plY3QuY292ZXIud2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtwcm9qZWN0LmNvdmVyLmhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsgc2hvd1Byb2plY3RzID09PSBmYWxzZSA/IFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tfT5cbiAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrQnV0dG9uKGUpfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlNob3cgTW9yZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbX0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmVuZH0+WW91J3ZlIHNlZW4gYWxsIHByb2plY3RzLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});