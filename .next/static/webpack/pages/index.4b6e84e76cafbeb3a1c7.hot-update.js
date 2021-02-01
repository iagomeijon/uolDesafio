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
/* harmony import */ var _components_UserNotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UserNotFound */ "./src/components/UserNotFound/index.tsx");
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
  }), state.isLoading && __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 27
    }
  }), state.user && __jsx(_components_UserCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: state.user,
    repositories: state.repositories,
    handdleRepos: actions.getRepos,
    handleStarred: function handleStarred() {
      return alert('starred');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), state.userNotFound && __jsx(_components_UserNotFound__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0hvbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VHaXRIdWIiLCJhY3Rpb25zIiwic3RhdGUiLCJzZWFyY2giLCJ1c2VyIiwiY2xlYW4iLCJnZXRVc2VyIiwic3R5bGVzIiwibWFpbiIsImlzTG9hZGluZyIsInJlcG9zaXRvcmllcyIsImdldFJlcG9zIiwiYWxlcnQiLCJ1c2VyTm90Rm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsbUJBQ1VDLHFFQUFTLEVBRG5CO0FBQUEsTUFDVEMsT0FEUyxjQUNUQSxPQURTO0FBQUEsTUFDQUMsS0FEQSxjQUNBQSxLQURBOztBQUVqQixXQUFTQyxNQUFULENBQWdCQyxJQUFoQixFQUE4QjtBQUM1QkgsV0FBTyxDQUFDSSxLQUFSO0FBQ0FKLFdBQU8sQ0FBQ0ssT0FBUixDQUFnQkYsSUFBaEI7QUFDRDs7QUFDRCxTQUNFO0FBQUssYUFBUyxFQUFFRywwREFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFXLGFBQVMsRUFBRUwsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdELEtBQUssQ0FBQ08sU0FBTixJQUFtQixNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGdEIsRUFHR1AsS0FBSyxDQUFDRSxJQUFOLElBQ0MsTUFBQyw0REFBRDtBQUNFLFFBQUksRUFBRUYsS0FBSyxDQUFDRSxJQURkO0FBRUUsZ0JBQVksRUFBRUYsS0FBSyxDQUFDUSxZQUZ0QjtBQUdFLGdCQUFZLEVBQUVULE9BQU8sQ0FBQ1UsUUFIeEI7QUFJRSxpQkFBYSxFQUFFO0FBQUEsYUFBTUMsS0FBSyxDQUFDLFNBQUQsQ0FBWDtBQUFBLEtBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQVdHVixLQUFLLENBQUNXLFlBQU4sSUFBc0IsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWHpCLENBREY7QUFlRCxDQXJCRDs7R0FBTWQsSTtVQUN1QkMsNkQ7OztLQUR2QkQsSTtBQXVCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGI2ZTg0ZTc2Y2FmYmViM2ExYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VHaXRIdWIgZnJvbSAnQGNvcmUvaG9va3MvdXNlR2l0SHViJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnQGNvbXBvbmVudHMvTG9hZGluZyc7XHJcbmltcG9ydCBVc2VyQ2FyZCBmcm9tICdAY29tcG9uZW50cy9Vc2VyQ2FyZCc7XHJcbmltcG9ydCBVc2VyTm90Rm91bmQgZnJvbSAnQGNvbXBvbmVudHMvVXNlck5vdEZvdW5kJztcclxuaW1wb3J0IFNlcmFjaEJhciBmcm9tICdAY29tcG9uZW50cy9TZWFyY2hCYXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBhY3Rpb25zLCBzdGF0ZSB9ID0gdXNlR2l0SHViKCk7XHJcbiAgZnVuY3Rpb24gc2VhcmNoKHVzZXI6IHN0cmluZykge1xyXG4gICAgYWN0aW9ucy5jbGVhbigpO1xyXG4gICAgYWN0aW9ucy5nZXRVc2VyKHVzZXIpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgPFNlcmFjaEJhciBnZXRTZWFyY2g9e3NlYXJjaH0gLz5cclxuICAgICAge3N0YXRlLmlzTG9hZGluZyAmJiA8TG9hZGluZyAvPn1cclxuICAgICAge3N0YXRlLnVzZXIgJiYgKFxyXG4gICAgICAgIDxVc2VyQ2FyZFxyXG4gICAgICAgICAgdXNlcj17c3RhdGUudXNlcn1cclxuICAgICAgICAgIHJlcG9zaXRvcmllcz17c3RhdGUucmVwb3NpdG9yaWVzfVxyXG4gICAgICAgICAgaGFuZGRsZVJlcG9zPXthY3Rpb25zLmdldFJlcG9zfVxyXG4gICAgICAgICAgaGFuZGxlU3RhcnJlZD17KCkgPT4gYWxlcnQoJ3N0YXJyZWQnKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7c3RhdGUudXNlck5vdEZvdW5kICYmIDxVc2VyTm90Rm91bmQgLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==