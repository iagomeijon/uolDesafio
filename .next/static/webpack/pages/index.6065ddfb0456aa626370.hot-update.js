webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/Home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Home/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_hooks_useGitHub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/useGitHub */ "./src/core/hooks/useGitHub/index.tsx");
/* harmony import */ var _components_UserCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/UserCard */ "./src/components/UserCard/index.tsx");
/* harmony import */ var _components_UserNotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UserNotFound */ "./src/components/UserNotFound/index.tsx");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/SearchBar */ "./src/components/SearchBar/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/Home/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\next-boilerplate\\src\\pages\\Home\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Home = function Home() {
  _s();

  var _useGitHub = Object(_core_hooks_useGitHub__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      actions = _useGitHub.actions,
      state = _useGitHub.state;

  function search(user) {
    actions.clean();
    actions.getUser(user);
  }

  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    getSearch: search,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), state.loadingSearch && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 60,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 31
    }
  }), state.user && __jsx(_components_UserCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: state.user,
    isLoading: state.isLoading,
    repositories: state.repositories,
    handdleRepos: actions.getRepositoriesList,
    handleStarred: function handleStarred() {
      return alert('starred');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), state.userNotFound && __jsx(_components_UserNotFound__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 30
    }
  }));
};

_s(Home, "sJ4enIrNoaO8HpoMG6bW7PFTJVk=", false, function () {
  return [_core_hooks_useGitHub__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0hvbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VHaXRIdWIiLCJhY3Rpb25zIiwic3RhdGUiLCJzZWFyY2giLCJ1c2VyIiwiY2xlYW4iLCJnZXRVc2VyIiwic3R5bGVzIiwibWFpbiIsImxvYWRpbmdTZWFyY2giLCJpc0xvYWRpbmciLCJyZXBvc2l0b3JpZXMiLCJnZXRSZXBvcyIsImFsZXJ0IiwidXNlck5vdEZvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLG1CQUNVQyxxRUFBUyxFQURuQjtBQUFBLE1BQ1RDLE9BRFMsY0FDVEEsT0FEUztBQUFBLE1BQ0FDLEtBREEsY0FDQUEsS0FEQTs7QUFFakIsV0FBU0MsTUFBVCxDQUFnQkMsSUFBaEIsRUFBOEI7QUFDNUJILFdBQU8sQ0FBQ0ksS0FBUjtBQUNBSixXQUFPLENBQUNLLE9BQVIsQ0FBZ0JGLElBQWhCO0FBQ0Q7O0FBQ0QsU0FDRTtBQUFLLGFBQVMsRUFBRUcsMERBQU0sQ0FBQ0MsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBVyxhQUFTLEVBQUVMLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHRCxLQUFLLENBQUNPLGFBQU4sSUFBdUIsTUFBQywwRUFBRDtBQUFrQixRQUFJLEVBQUUsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUYxQixFQUdHUCxLQUFLLENBQUNFLElBQU4sSUFDQyxNQUFDLDREQUFEO0FBQ0UsUUFBSSxFQUFFRixLQUFLLENBQUNFLElBRGQ7QUFFRSxhQUFTLEVBQUVGLEtBQUssQ0FBQ1EsU0FGbkI7QUFHRSxnQkFBWSxFQUFFUixLQUFLLENBQUNTLFlBSHRCO0FBSUUsZ0JBQVksRUFBRVYsT0FBTyxDQUFDVyxRQUp4QjtBQUtFLGlCQUFhLEVBQUU7QUFBQSxhQUFNQyxLQUFLLENBQUMsU0FBRCxDQUFYO0FBQUEsS0FMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBWUdYLEtBQUssQ0FBQ1ksWUFBTixJQUFzQixNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaekIsQ0FERjtBQWdCRCxDQXRCRDs7R0FBTWYsSTtVQUN1QkMsNkQ7OztLQUR2QkQsSTtBQXdCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjA2NWRkZmIwNDU2YWE2MjYzNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VHaXRIdWIgZnJvbSAnQGNvcmUvaG9va3MvdXNlR2l0SHViJztcclxuaW1wb3J0IFVzZXJDYXJkIGZyb20gJ0Bjb21wb25lbnRzL1VzZXJDYXJkJztcclxuaW1wb3J0IFVzZXJOb3RGb3VuZCBmcm9tICdAY29tcG9uZW50cy9Vc2VyTm90Rm91bmQnO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcclxuaW1wb3J0IFNlcmFjaEJhciBmcm9tICdAY29tcG9uZW50cy9TZWFyY2hCYXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBhY3Rpb25zLCBzdGF0ZSB9ID0gdXNlR2l0SHViKCk7XHJcbiAgZnVuY3Rpb24gc2VhcmNoKHVzZXI6IHN0cmluZykge1xyXG4gICAgYWN0aW9ucy5jbGVhbigpO1xyXG4gICAgYWN0aW9ucy5nZXRVc2VyKHVzZXIpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgPFNlcmFjaEJhciBnZXRTZWFyY2g9e3NlYXJjaH0gLz5cclxuICAgICAge3N0YXRlLmxvYWRpbmdTZWFyY2ggJiYgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17NjB9IC8+fVxyXG4gICAgICB7c3RhdGUudXNlciAmJiAoXHJcbiAgICAgICAgPFVzZXJDYXJkXHJcbiAgICAgICAgICB1c2VyPXtzdGF0ZS51c2VyfVxyXG4gICAgICAgICAgaXNMb2FkaW5nPXtzdGF0ZS5pc0xvYWRpbmd9XHJcbiAgICAgICAgICByZXBvc2l0b3JpZXM9e3N0YXRlLnJlcG9zaXRvcmllc31cclxuICAgICAgICAgIGhhbmRkbGVSZXBvcz17YWN0aW9ucy5nZXRSZXBvc31cclxuICAgICAgICAgIGhhbmRsZVN0YXJyZWQ9eygpID0+IGFsZXJ0KCdzdGFycmVkJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge3N0YXRlLnVzZXJOb3RGb3VuZCAmJiA8VXNlck5vdEZvdW5kIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=