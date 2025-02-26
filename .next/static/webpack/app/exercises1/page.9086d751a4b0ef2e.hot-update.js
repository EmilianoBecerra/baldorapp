"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/exercises1/page",{

/***/ "(app-pages-browser)/./src/components/InputExercise.tsx":
/*!******************************************!*\
  !*** ./src/components/InputExercise.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InputExercise)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/styles.module.css */ \"(app-pages-browser)/./src/app/styles.module.css\");\n/* harmony import */ var _app_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/global.css */ \"(app-pages-browser)/./src/app/global.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction InputExercise(param) {\n    let { idAnswer, sendData } = param;\n    _s();\n    const correctAnswer = {\n        ejercicio1: 320 - 60,\n        ejercicio2: 1170 - 1515,\n        ejercicio3: 200 + 56 - 189,\n        ejercicio4: -665 - 1178 + 2280,\n        ejercicio5: 20 - 15 + 40 - 75,\n        ejercicio6: -67 + 72 - 16 + 2,\n        ejercicio7: 220 - 78 - 81 - 93 + 41 - 59,\n        ejercicio8: -45 - 66 - 79 + 200 - 10\n    };\n    let isTrue;\n    const [userResponse, setUserResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleChange = (e, id)=>{\n        setUserResponse({\n            ...userResponse,\n            [id]: e.target.value\n        });\n        sendData((prevalue)=>({\n                ...prevalue,\n                [id]: \"none\"\n            }));\n        setResponse({\n            ...response,\n            [id]: \"\"\n        });\n    };\n    const checkResponse = (id)=>{\n        const uResponse = userResponse[id] || \"\";\n        const isTrue = +uResponse === correctAnswer[id];\n        setResponse({\n            ...response,\n            [id]: isTrue ? \"✅ Correcto\" : \"❌ Incorrecto\"\n        });\n        sendData((prevalue)=>({\n                ...prevalue,\n                [id]: isTrue ? \"correcto\" : \"incorrecto\"\n            }));\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \" \") {\n            e.preventDefault();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input_exercises\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                required: true,\n                value: userResponse[idAnswer] || \"\",\n                onChange: (e)=>handleChange(e, idAnswer),\n                onKeyDown: handleKeyDown,\n                className: (_app_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().input_exercise)\n            }, void 0, false, {\n                fileName: \"C:\\\\trabajos\\\\src\\\\components\\\\InputExercise.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_app_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().button_exercise),\n                onClick: ()=>checkResponse(idAnswer),\n                children: \"Responder\"\n            }, void 0, false, {\n                fileName: \"C:\\\\trabajos\\\\src\\\\components\\\\InputExercise.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_app_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().p_result),\n                children: response[idAnswer] ? response[idAnswer] : \"   \"\n            }, void 0, false, {\n                fileName: \"C:\\\\trabajos\\\\src\\\\components\\\\InputExercise.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\trabajos\\\\src\\\\components\\\\InputExercise.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(InputExercise, \"MO2YfNttOBt3T0MV+c2JB+LrK0o=\");\n_c = InputExercise;\nvar _c;\n$RefreshReg$(_c, \"InputExercise\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0lucHV0RXhlcmNpc2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QztBQUNBO0FBQ25CO0FBRVosU0FBU0UsY0FBYyxLQUFzQjtRQUF0QixFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUF0Qjs7SUFDcEMsTUFBTUMsZ0JBQWdCO1FBQ3BCQyxZQUFZLE1BQU07UUFDbEJDLFlBQVksT0FBTztRQUNuQkMsWUFBWSxNQUFNLEtBQUs7UUFDdkJDLFlBQVksQ0FBQyxNQUFNLE9BQU87UUFDMUJDLFlBQVksS0FBSyxLQUFLLEtBQUs7UUFDM0JDLFlBQVksQ0FBQyxLQUFLLEtBQUssS0FBSztRQUM1QkMsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUs7UUFDdENDLFlBQVksQ0FBQyxLQUFLLEtBQUssS0FBSyxNQUFNO0lBQ3BDO0lBRUEsSUFBSUM7SUFDSixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHaEIsK0NBQVFBLENBQUMsQ0FBQztJQUNsRCxNQUFNLENBQUNpQixVQUFVQyxZQUFZLEdBQUdsQiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzFDLE1BQU1tQixlQUFlLENBQUNDLEdBQWtDQztRQUN0REwsZ0JBQWdCO1lBQUUsR0FBR0QsWUFBWTtZQUFFLENBQUNNLEdBQUcsRUFBRUQsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO1FBQUM7UUFDeERuQixTQUFTLENBQUNvQixXQUF3QjtnQkFDaEMsR0FBR0EsUUFBUTtnQkFDWCxDQUFDSCxHQUFHLEVBQUU7WUFDUjtRQUNBSCxZQUFZO1lBQ1YsR0FBR0QsUUFBUTtZQUNYLENBQUNJLEdBQUcsRUFBRTtRQUNSO0lBQ0Y7SUFFQSxNQUFNSSxnQkFBZ0IsQ0FBQ0o7UUFDckIsTUFBTUssWUFBWVgsWUFBWSxDQUFDTSxHQUFHLElBQUk7UUFDdEMsTUFBTVAsU0FBUyxDQUFDWSxjQUFjckIsYUFBYSxDQUFDZ0IsR0FBRztRQUMvQ0gsWUFBWTtZQUNWLEdBQUdELFFBQVE7WUFDWCxDQUFDSSxHQUFHLEVBQUVQLFNBQVMsZUFBZTtRQUNoQztRQUNBVixTQUFTLENBQUNvQixXQUF3QjtnQkFDaEMsR0FBR0EsUUFBUTtnQkFDWCxDQUFDSCxHQUFHLEVBQUVQLFNBQVMsYUFBYTtZQUM5QjtJQUNGO0lBRUEsTUFBTWEsZ0JBQWdCLENBQUNQO1FBQ3JCLElBQUlBLEVBQUVRLEdBQUcsS0FBSyxLQUFLO1lBQ2pCUixFQUFFUyxjQUFjO1FBQ2xCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxRQUFRO2dCQUNSWCxPQUFPUixZQUFZLENBQUNaLFNBQVMsSUFBSTtnQkFDakNnQyxVQUFVLENBQUNmLElBQU1ELGFBQWFDLEdBQUdqQjtnQkFDakNpQyxXQUFXVDtnQkFDWEksV0FBVzlCLDhFQUFxQjs7Ozs7OzBCQUVsQyw4REFBQ3FDO2dCQUNDUCxXQUFXOUIsK0VBQXNCO2dCQUNqQ3VDLFNBQVMsSUFBTWYsY0FBY3RCOzBCQUM5Qjs7Ozs7OzBCQUdELDhEQUFDc0M7Z0JBQ0NWLFdBQVc5Qix3RUFBZTswQkFFekJnQixRQUFRLENBQUNkLFNBQVMsR0FBR2MsUUFBUSxDQUFDZCxTQUFTLEdBQUU7Ozs7Ozs7Ozs7OztBQUlsRDtHQXJFd0JEO0tBQUFBIiwic291cmNlcyI6WyJDOlxcdHJhYmFqb3NcXHNyY1xcY29tcG9uZW50c1xcSW5wdXRFeGVyY2lzZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL2FwcC9zdHlsZXMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9hcHAvZ2xvYmFsLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRFeGVyY2lzZSh7IGlkQW5zd2VyLCBzZW5kRGF0YSB9KSB7XHJcbiAgY29uc3QgY29ycmVjdEFuc3dlciA9IHtcclxuICAgIGVqZXJjaWNpbzE6IDMyMCAtIDYwLFxyXG4gICAgZWplcmNpY2lvMjogMTE3MCAtIDE1MTUsXHJcbiAgICBlamVyY2ljaW8zOiAyMDAgKyA1NiAtIDE4OSxcclxuICAgIGVqZXJjaWNpbzQ6IC02NjUgLSAxMTc4ICsgMjI4MCxcclxuICAgIGVqZXJjaWNpbzU6IDIwIC0gMTUgKyA0MCAtIDc1LFxyXG4gICAgZWplcmNpY2lvNjogLTY3ICsgNzIgLSAxNiArIDIsXHJcbiAgICBlamVyY2ljaW83OiAyMjAgLSA3OCAtIDgxIC0gOTMgKyA0MSAtIDU5LFxyXG4gICAgZWplcmNpY2lvODogLTQ1IC0gNjYgLSA3OSArIDIwMCAtIDEwLFxyXG4gIH07XHJcblxyXG4gIGxldCBpc1RydWU7XHJcbiAgY29uc3QgW3VzZXJSZXNwb25zZSwgc2V0VXNlclJlc3BvbnNlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIGlkOiBzdHJpbmcpID0+IHtcclxuICAgIHNldFVzZXJSZXNwb25zZSh7IC4uLnVzZXJSZXNwb25zZSwgW2lkXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBzZW5kRGF0YSgocHJldmFsdWU6IHN0cmluZ1tdKSA9PiAoe1xyXG4gICAgICAuLi5wcmV2YWx1ZSxcclxuICAgICAgW2lkXTogXCJub25lXCIsXHJcbiAgICB9KSk7XHJcbiAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgIC4uLnJlc3BvbnNlLFxyXG4gICAgICBbaWRdOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tSZXNwb25zZSA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB1UmVzcG9uc2UgPSB1c2VyUmVzcG9uc2VbaWRdIHx8IFwiXCI7XHJcbiAgICBjb25zdCBpc1RydWUgPSArdVJlc3BvbnNlID09PSBjb3JyZWN0QW5zd2VyW2lkXTtcclxuICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgLi4ucmVzcG9uc2UsXHJcbiAgICAgIFtpZF06IGlzVHJ1ZSA/IFwi4pyFIENvcnJlY3RvXCIgOiBcIuKdjCBJbmNvcnJlY3RvXCIsXHJcbiAgICB9KTtcclxuICAgIHNlbmREYXRhKChwcmV2YWx1ZTogc3RyaW5nW10pID0+ICh7XHJcbiAgICAgIC4uLnByZXZhbHVlLFxyXG4gICAgICBbaWRdOiBpc1RydWUgPyBcImNvcnJlY3RvXCIgOiBcImluY29ycmVjdG9cIixcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gXCIgXCIpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X2V4ZXJjaXNlc1wiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICB2YWx1ZT17dXNlclJlc3BvbnNlW2lkQW5zd2VyXSB8fCBcIlwifVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGlkQW5zd2VyKX1cclxuICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfZXhlcmNpc2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fZXhlcmNpc2V9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gY2hlY2tSZXNwb25zZShpZEFuc3dlcil9XHJcbiAgICAgID5cclxuICAgICAgICBSZXNwb25kZXJcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxwXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucF9yZXN1bHR9XHJcbiAgICAgID5cclxuICAgICAgICB7cmVzcG9uc2VbaWRBbnN3ZXJdID8gcmVzcG9uc2VbaWRBbnN3ZXJdOiBcIiAgIFwifVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIklucHV0RXhlcmNpc2UiLCJpZEFuc3dlciIsInNlbmREYXRhIiwiY29ycmVjdEFuc3dlciIsImVqZXJjaWNpbzEiLCJlamVyY2ljaW8yIiwiZWplcmNpY2lvMyIsImVqZXJjaWNpbzQiLCJlamVyY2ljaW81IiwiZWplcmNpY2lvNiIsImVqZXJjaWNpbzciLCJlamVyY2ljaW84IiwiaXNUcnVlIiwidXNlclJlc3BvbnNlIiwic2V0VXNlclJlc3BvbnNlIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsImhhbmRsZUNoYW5nZSIsImUiLCJpZCIsInRhcmdldCIsInZhbHVlIiwicHJldmFsdWUiLCJjaGVja1Jlc3BvbnNlIiwidVJlc3BvbnNlIiwiaGFuZGxlS2V5RG93biIsImtleSIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImlucHV0X2V4ZXJjaXNlIiwiYnV0dG9uIiwiYnV0dG9uX2V4ZXJjaXNlIiwib25DbGljayIsInAiLCJwX3Jlc3VsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/InputExercise.tsx\n"));

/***/ })

});