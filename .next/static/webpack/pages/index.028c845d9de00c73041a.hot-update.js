webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/UserCard/helpers.ts":
/*!********************************************!*\
  !*** ./src/components/UserCard/helpers.ts ***!
  \********************************************/
/*! exports provided: onReposClicked, onStarredClicked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReposClicked", function() { return onReposClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStarredClicked", function() { return onStarredClicked; });
function onReposClicked(handleRepos, setListTitle) {
  handleRepos();
  setListTitle('Repositórios:');
}
function onStarredClicked(handleStarred, setListTitle) {
  handleStarred();
  setListTitle('Starred:');
}

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/UserCard/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/UserCard/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _RepositoryList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RepositoryList */ "./src/components/RepositoryList/index.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/components/UserCard/helpers.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/UserCard/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\next-boilerplate\\src\\components\\UserCard\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var UserCard = function UserCard(props) {
  _s();

  var user = props.user,
      repositories = props.repositories,
      isLoading = props.isLoading,
      handleRepos = props.handleRepos,
      handleStarred = props.handleStarred;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      listTitle = _useState[0],
      setListTitle = _useState[1];

  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: user.avatar_url,
    alt: "Avatar",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__loginText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, user.login)), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__infoText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Reposit\xF3rios p\xFAblicos: ", user.public_repos), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__infoText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Seguidores: ", user.followers)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__button,
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["onReposClicked"])(han);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Repos"), __jsx("button", {
    type: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__button,
    onClick: _helpers__WEBPACK_IMPORTED_MODULE_3__["onStarredClicked"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Starred"))), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__listBox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, isLoading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 35,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }) : repositories && __jsx(_RepositoryList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    list: repositories,
    listTitle: listTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })));
};

_s(UserCard, "z0cMR5zknU61JZcmSNo3/aHDSho=");

_c = UserCard;
/* harmony default export */ __webpack_exports__["default"] = (UserCard);

var _c;

$RefreshReg$(_c, "UserCard");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckNhcmQvaGVscGVycy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckNhcmQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIm9uUmVwb3NDbGlja2VkIiwiaGFuZGxlUmVwb3MiLCJzZXRMaXN0VGl0bGUiLCJvblN0YXJyZWRDbGlja2VkIiwiaGFuZGxlU3RhcnJlZCIsIlVzZXJDYXJkIiwicHJvcHMiLCJ1c2VyIiwicmVwb3NpdG9yaWVzIiwiaXNMb2FkaW5nIiwidXNlU3RhdGUiLCJsaXN0VGl0bGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJjb250YWluZXJfX3JvdyIsImF2YXRhcl91cmwiLCJjb250YWluZXJfX2ltYWdlIiwiY29udGFpbmVyX19sb2dpblRleHQiLCJsb2dpbiIsImNvbnRhaW5lcl9faW5mb1RleHQiLCJwdWJsaWNfcmVwb3MiLCJmb2xsb3dlcnMiLCJjb250YWluZXJfX2J1dHRvbiIsImhhbiIsImNvbnRhaW5lcl9fbGlzdEJveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFPLFNBQVNBLGNBQVQsQ0FDTEMsV0FESyxFQUVMQyxZQUZLLEVBR0M7QUFDTkQsYUFBVztBQUNYQyxjQUFZLENBQUMsZUFBRCxDQUFaO0FBQ0Q7QUFFTSxTQUFTQyxnQkFBVCxDQUNMQyxhQURLLEVBRUxGLFlBRkssRUFHQztBQUNORSxlQUFhO0FBQ2JGLGNBQVksQ0FBQyxVQUFELENBQVo7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBMEI7QUFBQTs7QUFBQSxNQUNqQ0MsSUFEaUMsR0FDNkJELEtBRDdCLENBQ2pDQyxJQURpQztBQUFBLE1BQzNCQyxZQUQyQixHQUM2QkYsS0FEN0IsQ0FDM0JFLFlBRDJCO0FBQUEsTUFDYkMsU0FEYSxHQUM2QkgsS0FEN0IsQ0FDYkcsU0FEYTtBQUFBLE1BQ0ZSLFdBREUsR0FDNkJLLEtBRDdCLENBQ0ZMLFdBREU7QUFBQSxNQUNXRyxhQURYLEdBQzZCRSxLQUQ3QixDQUNXRixhQURYOztBQUFBLGtCQUVQTSxzREFBUSxDQUFTLEVBQVQsQ0FGRDtBQUFBLE1BRWxDQyxTQUZrQztBQUFBLE1BRXZCVCxZQUZ1Qjs7QUFJekMsU0FDRTtBQUFLLGFBQVMsRUFBRVUsMERBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCwwREFBTSxDQUFDRSxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUVQLElBQUksQ0FBQ1EsVUFEWjtBQUVFLE9BQUcsRUFBQyxRQUZOO0FBR0UsYUFBUyxFQUFFSCwwREFBTSxDQUFDSSxnQkFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBRyxhQUFTLEVBQUVKLDBEQUFNLENBQUNLLG9CQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRDVixJQUFJLENBQUNXLEtBQWpELENBTkYsQ0FERixFQVNFO0FBQUssYUFBUyxFQUFFTiwwREFBTSxDQUFDRSxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFRiwwREFBTSxDQUFDTyxtQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FDMEJaLElBQUksQ0FBQ2EsWUFEL0IsQ0FERixFQUlFO0FBQUcsYUFBUyxFQUFFUiwwREFBTSxDQUFDTyxtQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDZVosSUFBSSxDQUFDYyxTQURwQixDQUpGLENBREYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBRVQsMERBQU0sQ0FBQ1UsaUJBRnBCO0FBR0UsV0FBTyxFQUFHO0FBQUEsYUFBTXRCLCtEQUFjLENBQUN1QixHQUFELENBQXBCO0FBQUEsS0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFRRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFFWCwwREFBTSxDQUFDVSxpQkFGcEI7QUFHRSxXQUFPLEVBQUVuQix5REFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsQ0FURixDQVRGLEVBbUNFO0FBQUssYUFBUyxFQUFFUywwREFBTSxDQUFDWSxrQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZixTQUFTLEdBQ1IsTUFBQywwRUFBRDtBQUFrQixRQUFJLEVBQUUsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURRLEdBR1JELFlBQVksSUFDVixNQUFDLHVEQUFEO0FBQWdCLFFBQUksRUFBRUEsWUFBdEI7QUFBb0MsYUFBUyxFQUFFRyxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTE4sQ0FuQ0YsQ0FERjtBQStDRCxDQW5ERDs7R0FBTU4sUTs7S0FBQUEsUTtBQXFEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDI4Yzg0NWQ5ZGUwMGM3MzA0MWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBvblJlcG9zQ2xpY2tlZChcclxuICBoYW5kbGVSZXBvczogKCkgPT4gdm9pZCxcclxuICBzZXRMaXN0VGl0bGU6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4pOiB2b2lkIHtcclxuICBoYW5kbGVSZXBvcygpO1xyXG4gIHNldExpc3RUaXRsZSgnUmVwb3NpdMOzcmlvczonKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uU3RhcnJlZENsaWNrZWQoXHJcbiAgaGFuZGxlU3RhcnJlZDogKCkgPT4gdm9pZCxcclxuICBzZXRMaXN0VGl0bGU6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4pOiB2b2lkIHtcclxuICBoYW5kbGVTdGFycmVkKCk7XHJcbiAgc2V0TGlzdFRpdGxlKCdTdGFycmVkOicpO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcclxuaW1wb3J0IFJlcG9zaXRvcnlMaXN0IGZyb20gJy4uL1JlcG9zaXRvcnlMaXN0JztcclxuaW1wb3J0IHsgb25TdGFycmVkQ2xpY2tlZCwgb25SZXBvc0NsaWNrZWR9IGZyb20gJy4vaGVscGVycyc7XHJcbmltcG9ydCB7IFVzZXJDYXJkUHJvcHMgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IFVzZXJDYXJkID0gKHByb3BzOiBVc2VyQ2FyZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyLCByZXBvc2l0b3JpZXMsIGlzTG9hZGluZywgaGFuZGxlUmVwb3MsIGhhbmRsZVN0YXJyZWQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtsaXN0VGl0bGUsIHNldExpc3RUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3Jvd30+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXt1c2VyLmF2YXRhcl91cmx9XHJcbiAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19pbWFnZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fbG9naW5UZXh0fT57dXNlci5sb2dpbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fcm93fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19pbmZvVGV4dH0+XHJcbiAgICAgICAgICAgIFJlcG9zaXTDs3Jpb3MgcMO6YmxpY29zOiB7dXNlci5wdWJsaWNfcmVwb3N9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2luZm9UZXh0fT5cclxuICAgICAgICAgICAgU2VndWlkb3Jlczoge3VzZXIuZm9sbG93ZXJzfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG9uUmVwb3NDbGlja2VkKGhhbil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlcG9zXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvblN0YXJyZWRDbGlja2VkfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdGFycmVkXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19saXN0Qm94fT5cclxuICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MzV9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIHJlcG9zaXRvcmllcyAmJiAoXHJcbiAgICAgICAgICAgIDxSZXBvc2l0b3J5TGlzdCBsaXN0PXtyZXBvc2l0b3JpZXN9IGxpc3RUaXRsZT17bGlzdFRpdGxlfSAvPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9