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
    handleRepos: actions.getRepositoriesList,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0hvbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VHaXRIdWIiLCJhY3Rpb25zIiwic3RhdGUiLCJzZWFyY2giLCJ1c2VyIiwiY2xlYW4iLCJnZXRVc2VyIiwic3R5bGVzIiwibWFpbiIsImxvYWRpbmdTZWFyY2giLCJpc0xvYWRpbmciLCJyZXBvc2l0b3JpZXMiLCJnZXRSZXBvc2l0b3JpZXNMaXN0IiwiYWxlcnQiLCJ1c2VyTm90Rm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsbUJBQ1VDLHFFQUFTLEVBRG5CO0FBQUEsTUFDVEMsT0FEUyxjQUNUQSxPQURTO0FBQUEsTUFDQUMsS0FEQSxjQUNBQSxLQURBOztBQUVqQixXQUFTQyxNQUFULENBQWdCQyxJQUFoQixFQUE4QjtBQUM1QkgsV0FBTyxDQUFDSSxLQUFSO0FBQ0FKLFdBQU8sQ0FBQ0ssT0FBUixDQUFnQkYsSUFBaEI7QUFDRDs7QUFDRCxTQUNFO0FBQUssYUFBUyxFQUFFRywwREFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFXLGFBQVMsRUFBRUwsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdELEtBQUssQ0FBQ08sYUFBTixJQUF1QixNQUFDLDBFQUFEO0FBQWtCLFFBQUksRUFBRSxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRjFCLEVBR0dQLEtBQUssQ0FBQ0UsSUFBTixJQUNDLE1BQUMsNERBQUQ7QUFDRSxRQUFJLEVBQUVGLEtBQUssQ0FBQ0UsSUFEZDtBQUVFLGFBQVMsRUFBRUYsS0FBSyxDQUFDUSxTQUZuQjtBQUdFLGdCQUFZLEVBQUVSLEtBQUssQ0FBQ1MsWUFIdEI7QUFJRSxlQUFXLEVBQUVWLE9BQU8sQ0FBQ1csbUJBSnZCO0FBS0UsaUJBQWEsRUFBRTtBQUFBLGFBQU1DLEtBQUssQ0FBQyxTQUFELENBQVg7QUFBQSxLQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFZR1gsS0FBSyxDQUFDWSxZQUFOLElBQXNCLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVp6QixDQURGO0FBZ0JELENBdEJEOztHQUFNZixJO1VBQ3VCQyw2RDs7O0tBRHZCRCxJO0FBd0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NDEzZWZlM2YxMmRjOGZmYjY5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUdpdEh1YiBmcm9tICdAY29yZS9ob29rcy91c2VHaXRIdWInO1xyXG5pbXBvcnQgVXNlckNhcmQgZnJvbSAnQGNvbXBvbmVudHMvVXNlckNhcmQnO1xyXG5pbXBvcnQgVXNlck5vdEZvdW5kIGZyb20gJ0Bjb21wb25lbnRzL1VzZXJOb3RGb3VuZCc7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgU2VyYWNoQmFyIGZyb20gJ0Bjb21wb25lbnRzL1NlYXJjaEJhcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCB7IGFjdGlvbnMsIHN0YXRlIH0gPSB1c2VHaXRIdWIoKTtcclxuICBmdW5jdGlvbiBzZWFyY2godXNlcjogc3RyaW5nKSB7XHJcbiAgICBhY3Rpb25zLmNsZWFuKCk7XHJcbiAgICBhY3Rpb25zLmdldFVzZXIodXNlcik7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8U2VyYWNoQmFyIGdldFNlYXJjaD17c2VhcmNofSAvPlxyXG4gICAgICB7c3RhdGUubG9hZGluZ1NlYXJjaCAmJiA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXs2MH0gLz59XHJcbiAgICAgIHtzdGF0ZS51c2VyICYmIChcclxuICAgICAgICA8VXNlckNhcmRcclxuICAgICAgICAgIHVzZXI9e3N0YXRlLnVzZXJ9XHJcbiAgICAgICAgICBpc0xvYWRpbmc9e3N0YXRlLmlzTG9hZGluZ31cclxuICAgICAgICAgIHJlcG9zaXRvcmllcz17c3RhdGUucmVwb3NpdG9yaWVzfVxyXG4gICAgICAgICAgaGFuZGxlUmVwb3M9e2FjdGlvbnMuZ2V0UmVwb3NpdG9yaWVzTGlzdH1cclxuICAgICAgICAgIGhhbmRsZVN0YXJyZWQ9eygpID0+IGFsZXJ0KCdzdGFycmVkJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge3N0YXRlLnVzZXJOb3RGb3VuZCAmJiA8VXNlck5vdEZvdW5kIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=