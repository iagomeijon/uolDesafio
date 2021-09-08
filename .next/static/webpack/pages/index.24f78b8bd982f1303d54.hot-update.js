self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SearchBar/index.tsx":
/*!********************************************!*\
  !*** ./src/components/SearchBar/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_hooks_useStrings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/hooks/useStrings */ "./src/core/hooks/useStrings/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/SearchBar/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\imachado\\Desktop\\Develop\\projects\\uolDesafio\\src\\components\\SearchBar\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);
// MARK: Libs
 // MARK: Hooks

 // MARK Interfaces

// MARK: Styles


var SearchBar = function SearchBar(props) {
  _s();

  var getSearch = props.getSearch;

  var _useStrings = (0,_core_hooks_useStrings__WEBPACK_IMPORTED_MODULE_2__.default)(),
      strings = _useStrings.strings;

  var searchBar = strings.components.searchBar;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      searchText = _useState[0],
      setSearchText = _useState[1];

  var handleInput = function handleInput(event) {
    setSearchText(event.target.value);
  };

  var handleSubmit = function handleSubmit() {
    getSearch(searchText);
  };

  return __jsx("div", (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, "__self", _this), __jsx("input", (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container__input),
    onChange: handleInput,
    placeholder: searchBar.placeHolder,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "__self", _this)), __jsx("button", (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container__button),
    type: "submit",
    onClick: handleSubmit,
    id: "submitSearchButton",
    "data-testid": "submitSearchButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "__self", _this), searchBar.button));
};

_s(SearchBar, "RWgbR0waMsaWZzYb9Nn1mMnljt4=", false, function () {
  return [_core_hooks_useStrings__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = SearchBar;
/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

var _c;

$RefreshReg$(_c, "SearchBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsImdldFNlYXJjaCIsInVzZVN0cmluZ3MiLCJzdHJpbmdzIiwic2VhcmNoQmFyIiwiY29tcG9uZW50cyIsInVzZVN0YXRlIiwic2VhcmNoVGV4dCIsInNldFNlYXJjaFRleHQiLCJoYW5kbGVJbnB1dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJzdHlsZXMiLCJwbGFjZUhvbGRlciIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0NBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQTJCO0FBQUE7O0FBQUEsTUFDbkNDLFNBRG1DLEdBQ3JCRCxLQURxQixDQUNuQ0MsU0FEbUM7O0FBQUEsb0JBRXZCQywrREFBVSxFQUZhO0FBQUEsTUFFbkNDLE9BRm1DLGVBRW5DQSxPQUZtQzs7QUFBQSxNQUduQ0MsU0FIbUMsR0FHckJELE9BQU8sQ0FBQ0UsVUFIYSxDQUduQ0QsU0FIbUM7O0FBQUEsa0JBSVBFLCtDQUFRLENBQVMsRUFBVCxDQUpEO0FBQUEsTUFJcENDLFVBSm9DO0FBQUEsTUFJeEJDLGFBSndCOztBQU0zQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDN0JGLGlCQUFhLENBQUNFLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQWI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJaLGFBQVMsQ0FBQ00sVUFBRCxDQUFUO0FBQ0QsR0FGRDs7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFFTyxzRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDRTtBQUNFLGFBQVMsRUFBRUEsNkVBRGI7QUFFRSxZQUFRLEVBQUVMLFdBRlo7QUFHRSxlQUFXLEVBQUVMLFNBQVMsQ0FBQ1csV0FIekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQU1FO0FBQ0UsYUFBUyxFQUFFRCw4RUFEYjtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsV0FBTyxFQUFFRCxZQUhYO0FBSUUsTUFBRSxFQUFDLG9CQUpMO0FBS0UsbUJBQVksb0JBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFPR1QsU0FBUyxDQUFDWSxNQVBiLENBTkYsQ0FERjtBQWtCRCxDQWhDRDs7R0FBTWpCLFM7VUFFZ0JHLDJEOzs7S0FGaEJILFM7QUFrQ04sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjRmNzhiOGJkOTgyZjEzMDNkNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1BUks6IExpYnNcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vIE1BUks6IEhvb2tzXHJcbmltcG9ydCB1c2VTdHJpbmdzIGZyb20gJy4uLy4uL2NvcmUvaG9va3MvdXNlU3RyaW5ncyc7XHJcbi8vIE1BUksgSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBzZWFyY2hCYXJQcm9wcyB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuLy8gTUFSSzogU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgU2VhcmNoQmFyID0gKHByb3BzOiBzZWFyY2hCYXJQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZ2V0U2VhcmNoIH0gPSBwcm9wcztcclxuICBjb25zdCB7IHN0cmluZ3MgfSA9IHVzZVN0cmluZ3MoKTtcclxuICBjb25zdCB7IHNlYXJjaEJhciB9ID0gc3RyaW5ncy5jb21wb25lbnRzO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dCA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoVGV4dChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGdldFNlYXJjaChzZWFyY2hUZXh0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2lucHV0fVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH1cclxuICAgICAgICBwbGFjZWhvbGRlcj17c2VhcmNoQmFyLnBsYWNlSG9sZGVyfVxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19idXR0b259XHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgIGlkPVwic3VibWl0U2VhcmNoQnV0dG9uXCJcclxuICAgICAgICBkYXRhLXRlc3RpZD1cInN1Ym1pdFNlYXJjaEJ1dHRvblwiXHJcbiAgICAgID5cclxuICAgICAgICB7c2VhcmNoQmFyLmJ1dHRvbn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9