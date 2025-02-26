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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InputExercise)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/styles.module.css */ \"(app-pages-browser)/./src/app/styles.module.css\");\n/* harmony import */ var _app_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/global.css */ \"(app-pages-browser)/./src/app/global.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction InputExercise(param) {\n    let { idAnswer, sendData } = param;\n    _s();\n    const correctAnswer = {\n        ejercicio1: 320 - 60,\n        ejercicio2: 1170 - 1515,\n        ejercicio3: 200 + 56 - 189,\n        ejercicio4: -665 - 1178 + 2280,\n        ejercicio5: 20 - 15 + 40 - 75,\n        ejercicio6: -67 + 72 - 16 + 2,\n        ejercicio7: 220 - 78 - 81 - 93 + 41 - 59,\n        ejercicio8: -45 - 66 - 79 + 200 - 10\n    };\n    const [userResponse, setUserResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleChange = (e, id)=>{\n        setUserResponse({\n            ...userResponse,\n            [id]: e.target.value\n        });\n    };\n    const checkResponse = (id)=>{\n        const uResponse = userResponse[id] || \"\";\n        const uResponseSpace = uResponse.trim().replace(/\\s*/, \"\");\n        const isTrue = +uResponseSpace === correctAnswer[id];\n        setResponse({\n            ...response,\n            [id]: isTrue ? \"✅ Correcto\" : \"❌ Incorrecto\"\n        });\n        sendData((prevalue)=>({\n                ...prevalue,\n                [id]: isTrue ? \"correcto\" : \"incorrecto\"\n            }));\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \" \") {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input_exercises\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                required: true,\n                value: userResponse[idAnswer] || \"\",\n                onChange: (e)=>handleChange(e, idAnswer),\n                className: (_app_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().input_exercise)\n            }, void 0, false, {\n                fileName: \"C:\\\\trabajos\\\\src\\\\components\\\\InputExercise.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_app_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().button_exercise),\n                onClick: ()=>checkResponse(idAnswer),\n                children: \"Responder\"\n            }, void 0, false, {\n                fileName: \"C:\\\\trabajos\\\\src\\\\components\\\\InputExercise.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_app_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().p_result),\n                style: {\n                    display: userResponse[idAnswer] ? \"block\" : \"none\"\n                },\n                children: response[idAnswer]\n            }, void 0, false, {\n                fileName: \"C:\\\\trabajos\\\\src\\\\components\\\\InputExercise.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\trabajos\\\\src\\\\components\\\\InputExercise.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(InputExercise, \"MO2YfNttOBt3T0MV+c2JB+LrK0o=\");\n_c = InputExercise;\nvar _c;\n$RefreshReg$(_c, \"InputExercise\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0lucHV0RXhlcmNpc2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QztBQUNBO0FBQ25CO0FBRVosU0FBU0UsY0FBYyxLQUFzQjtRQUF0QixFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUF0Qjs7SUFDcEMsTUFBTUMsZ0JBQWdCO1FBQ3BCQyxZQUFZLE1BQU07UUFDbEJDLFlBQVksT0FBTztRQUNuQkMsWUFBWSxNQUFNLEtBQUs7UUFDdkJDLFlBQVksQ0FBQyxNQUFNLE9BQU87UUFDMUJDLFlBQVksS0FBSyxLQUFLLEtBQUs7UUFDM0JDLFlBQVksQ0FBQyxLQUFLLEtBQUssS0FBSztRQUM1QkMsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUs7UUFDdENDLFlBQVksQ0FBQyxLQUFLLEtBQUssS0FBSyxNQUFNO0lBQ3BDO0lBRUEsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2YsK0NBQVFBLENBQUMsQ0FBQztJQUNsRCxNQUFNLENBQUNnQixVQUFVQyxZQUFZLEdBQUdqQiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzFDLE1BQU1rQixlQUFlLENBQUNDLEdBQWtDQztRQUN0REwsZ0JBQWdCO1lBQUUsR0FBR0QsWUFBWTtZQUFFLENBQUNNLEdBQUcsRUFBRUQsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO1FBQUM7SUFDMUQ7SUFFQSxNQUFNQyxnQkFBZ0IsQ0FBQ0g7UUFDckIsTUFBTUksWUFBWVYsWUFBWSxDQUFDTSxHQUFHLElBQUk7UUFDdEMsTUFBTUssaUJBQWlCRCxVQUFVRSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxPQUFPO1FBQ3ZELE1BQU1DLFNBQVMsQ0FBQ0gsbUJBQW1CcEIsYUFBYSxDQUFDZSxHQUFHO1FBQ3BESCxZQUFZO1lBQ1YsR0FBR0QsUUFBUTtZQUNYLENBQUNJLEdBQUcsRUFBRVEsU0FBUyxlQUFlO1FBQ2hDO1FBQ0F4QixTQUFTLENBQUN5QixXQUFjO2dCQUN0QixHQUFHQSxRQUFRO2dCQUNYLENBQUNULEdBQUcsRUFBRVEsU0FBUyxhQUFhO1lBQzlCO0lBQ0Y7SUFFQSxNQUFNRSxnQkFBZ0IsQ0FBQ1g7UUFDckIsSUFBSUEsRUFBRVksR0FBRyxLQUFLLEtBQUssQ0FDbkI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLFFBQVE7Z0JBQ1JkLE9BQU9SLFlBQVksQ0FBQ1gsU0FBUyxJQUFJO2dCQUNqQ2tDLFVBQVUsQ0FBQ2xCLElBQU1ELGFBQWFDLEdBQUdoQjtnQkFDakM4QixXQUFXaEMsOEVBQXFCOzs7Ozs7MEJBRWxDLDhEQUFDc0M7Z0JBQ0NOLFdBQVdoQywrRUFBc0I7Z0JBQ2pDd0MsU0FBUyxJQUFNbEIsY0FBY3BCOzBCQUM5Qjs7Ozs7OzBCQUdELDhEQUFDdUM7Z0JBQ0NULFdBQVdoQyx3RUFBZTtnQkFDMUIyQyxPQUFPO29CQUFFQyxTQUFTL0IsWUFBWSxDQUFDWCxTQUFTLEdBQUcsVUFBVTtnQkFBTzswQkFFM0RhLFFBQVEsQ0FBQ2IsU0FBUzs7Ozs7Ozs7Ozs7O0FBSTNCO0dBNUR3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFx0cmFiYWpvc1xcc3JjXFxjb21wb25lbnRzXFxJbnB1dEV4ZXJjaXNlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VFdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vYXBwL3N0eWxlcy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2FwcC9nbG9iYWwuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEV4ZXJjaXNlKHsgaWRBbnN3ZXIsIHNlbmREYXRhIH0pIHtcclxuICBjb25zdCBjb3JyZWN0QW5zd2VyID0ge1xyXG4gICAgZWplcmNpY2lvMTogMzIwIC0gNjAsXHJcbiAgICBlamVyY2ljaW8yOiAxMTcwIC0gMTUxNSxcclxuICAgIGVqZXJjaWNpbzM6IDIwMCArIDU2IC0gMTg5LFxyXG4gICAgZWplcmNpY2lvNDogLTY2NSAtIDExNzggKyAyMjgwLFxyXG4gICAgZWplcmNpY2lvNTogMjAgLSAxNSArIDQwIC0gNzUsXHJcbiAgICBlamVyY2ljaW82OiAtNjcgKyA3MiAtIDE2ICsgMixcclxuICAgIGVqZXJjaWNpbzc6IDIyMCAtIDc4IC0gODEgLSA5MyArIDQxIC0gNTksXHJcbiAgICBlamVyY2ljaW84OiAtNDUgLSA2NiAtIDc5ICsgMjAwIC0gMTAsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3VzZXJSZXNwb25zZSwgc2V0VXNlclJlc3BvbnNlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIGlkOiBzdHJpbmcpID0+IHtcclxuICAgIHNldFVzZXJSZXNwb25zZSh7IC4uLnVzZXJSZXNwb25zZSwgW2lkXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tSZXNwb25zZSA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB1UmVzcG9uc2UgPSB1c2VyUmVzcG9uc2VbaWRdIHx8IFwiXCI7XHJcbiAgICBjb25zdCB1UmVzcG9uc2VTcGFjZSA9IHVSZXNwb25zZS50cmltKCkucmVwbGFjZSgvXFxzKi8sIFwiXCIpO1xyXG4gICAgY29uc3QgaXNUcnVlID0gK3VSZXNwb25zZVNwYWNlID09PSBjb3JyZWN0QW5zd2VyW2lkXTtcclxuICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgLi4ucmVzcG9uc2UsXHJcbiAgICAgIFtpZF06IGlzVHJ1ZSA/IFwi4pyFIENvcnJlY3RvXCIgOiBcIuKdjCBJbmNvcnJlY3RvXCIsXHJcbiAgICB9KTtcclxuICAgIHNlbmREYXRhKChwcmV2YWx1ZSkgPT4gKHtcclxuICAgICAgLi4ucHJldmFsdWUsXHJcbiAgICAgIFtpZF06IGlzVHJ1ZSA/IFwiY29ycmVjdG9cIiA6IFwiaW5jb3JyZWN0b1wiLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gXCIgXCIpIHtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dF9leGVyY2lzZXNcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgdmFsdWU9e3VzZXJSZXNwb25zZVtpZEFuc3dlcl0gfHwgXCJcIn1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpZEFuc3dlcil9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfZXhlcmNpc2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fZXhlcmNpc2V9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gY2hlY2tSZXNwb25zZShpZEFuc3dlcil9XHJcbiAgICAgID5cclxuICAgICAgICBSZXNwb25kZXJcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxwXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucF9yZXN1bHR9XHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogdXNlclJlc3BvbnNlW2lkQW5zd2VyXSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICB7cmVzcG9uc2VbaWRBbnN3ZXJdfVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIklucHV0RXhlcmNpc2UiLCJpZEFuc3dlciIsInNlbmREYXRhIiwiY29ycmVjdEFuc3dlciIsImVqZXJjaWNpbzEiLCJlamVyY2ljaW8yIiwiZWplcmNpY2lvMyIsImVqZXJjaWNpbzQiLCJlamVyY2ljaW81IiwiZWplcmNpY2lvNiIsImVqZXJjaWNpbzciLCJlamVyY2ljaW84IiwidXNlclJlc3BvbnNlIiwic2V0VXNlclJlc3BvbnNlIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsImhhbmRsZUNoYW5nZSIsImUiLCJpZCIsInRhcmdldCIsInZhbHVlIiwiY2hlY2tSZXNwb25zZSIsInVSZXNwb25zZSIsInVSZXNwb25zZVNwYWNlIiwidHJpbSIsInJlcGxhY2UiLCJpc1RydWUiLCJwcmV2YWx1ZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwiaW5wdXRfZXhlcmNpc2UiLCJidXR0b24iLCJidXR0b25fZXhlcmNpc2UiLCJvbkNsaWNrIiwicCIsInBfcmVzdWx0Iiwic3R5bGUiLCJkaXNwbGF5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/InputExercise.tsx\n"));

/***/ })

});