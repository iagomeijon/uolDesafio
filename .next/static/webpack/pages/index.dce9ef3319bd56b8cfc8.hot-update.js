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
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Loading */ "./src/components/Loading/index.tsx");
/* harmony import */ var _components_UserCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UserCard */ "./src/components/UserCard/index.tsx");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/SearchBar */ "./src/components/SearchBar/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/Home/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\next-boilerplate\\src\\pages\\Home\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Home = function Home() {
  _s();

  var _useGitHub = Object(_core_hooks_useGitHub__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      actions = _useGitHub.actions,
      state = _useGitHub.state;

  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    getSearch: actions.getUser,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), state.isLoading && __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 27
    }
  }), state.user && __jsx(_components_UserCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: state.user,
    handdleRepos: function handdleRepos() {
      return alert('Repos');
    },
    handleStarred: function handleStarred() {
      return alert('starred');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0hvbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VHaXRIdWIiLCJhY3Rpb25zIiwic3RhdGUiLCJzdHlsZXMiLCJtYWluIiwiZ2V0VXNlciIsImlzTG9hZGluZyIsInVzZXIiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxtQkFDVUMscUVBQVMsRUFEbkI7QUFBQSxNQUNUQyxPQURTLGNBQ1RBLE9BRFM7QUFBQSxNQUNBQyxLQURBLGNBQ0FBLEtBREE7O0FBRWpCLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLDBEQUFNLENBQUNDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQVcsYUFBUyxFQUFFSCxPQUFPLENBQUNJLE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHSCxLQUFLLENBQUNJLFNBQU4sSUFBbUIsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRnRCLEVBR0dKLEtBQUssQ0FBQ0ssSUFBTixJQUNDLE1BQUMsNERBQUQ7QUFDRSxRQUFJLEVBQUVMLEtBQUssQ0FBQ0ssSUFEZDtBQUVFLGdCQUFZLEVBQUU7QUFBQSxhQUFNQyxLQUFLLENBQUMsT0FBRCxDQUFYO0FBQUEsS0FGaEI7QUFHRSxpQkFBYSxFQUFFO0FBQUEsYUFBTUEsS0FBSyxDQUFDLFNBQUQsQ0FBWDtBQUFBLEtBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURGO0FBYUQsQ0FmRDs7R0FBTVQsSTtVQUN1QkMsNkQ7OztLQUR2QkQsSTtBQWlCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGNlOWVmMzMxOWJkNTZiOGNmYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VHaXRIdWIgZnJvbSAnQGNvcmUvaG9va3MvdXNlR2l0SHViJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnQGNvbXBvbmVudHMvTG9hZGluZyc7XHJcbmltcG9ydCBVc2VyQ2FyZCBmcm9tICdAY29tcG9uZW50cy9Vc2VyQ2FyZCc7XHJcbmltcG9ydCBTZXJhY2hCYXIgZnJvbSAnQGNvbXBvbmVudHMvU2VhcmNoQmFyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWN0aW9ucywgc3RhdGUgfSA9IHVzZUdpdEh1YigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8U2VyYWNoQmFyIGdldFNlYXJjaD17YWN0aW9ucy5nZXRVc2VyfSAvPlxyXG4gICAgICB7c3RhdGUuaXNMb2FkaW5nICYmIDxMb2FkaW5nIC8+fVxyXG4gICAgICB7c3RhdGUudXNlciAmJiAoXHJcbiAgICAgICAgPFVzZXJDYXJkXHJcbiAgICAgICAgICB1c2VyPXtzdGF0ZS51c2VyfVxyXG4gICAgICAgICAgaGFuZGRsZVJlcG9zPXsoKSA9PiBhbGVydCgnUmVwb3MnKX1cclxuICAgICAgICAgIGhhbmRsZVN0YXJyZWQ9eygpID0+IGFsZXJ0KCdzdGFycmVkJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9