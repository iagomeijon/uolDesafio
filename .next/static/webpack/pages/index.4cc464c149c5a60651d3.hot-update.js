self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/Home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Home/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_contexts_GitHubContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/contexts/GitHubContext */ "./src/core/contexts/GitHubContext/index.tsx");
/* harmony import */ var _core_hooks_useCarsApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/hooks/useCarsApi */ "./src/core/hooks/useCarsApi/index.tsx");
/* harmony import */ var _components_UserCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UserCard */ "./src/components/UserCard/index.tsx");
/* harmony import */ var _components_UserNotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/UserNotFound */ "./src/components/UserNotFound/index.tsx");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/SearchBar */ "./src/components/SearchBar/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/Home/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\imachado\\Desktop\\Develop\\projects\\uolDesafio\\src\\pages\\Home\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);
// MARK: Libs
 // MARK: Hooks


 // MARK: Components




 // MARK: Styles



var Home = function Home() {
  _s();

  var _useGitHubContext = (0,_core_contexts_GitHubContext__WEBPACK_IMPORTED_MODULE_2__.useGitHubContext)(),
      user = _useGitHubContext.user,
      isLoading = _useGitHubContext.isLoading,
      hasUserNotFound = _useGitHubContext.hasUserNotFound,
      isLoadingSearch = _useGitHubContext.isLoadingSearch,
      repositories = _useGitHubContext.repositories,
      getUser = _useGitHubContext.getUser,
      getRepositoriesList = _useGitHubContext.getRepositoriesList,
      getStarredList = _useGitHubContext.getStarredList;

  var _useCarsApi = (0,_core_hooks_useCarsApi__WEBPACK_IMPORTED_MODULE_3__.useCarsApi)(),
      actions = _useCarsApi.actions,
      state = _useCarsApi.state;

  function search(userName) {
    getUser(userName); // actions.getCarList();
  }

  return __jsx("div", (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, "__self", _this), __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_6__.default, (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    getSearch: search,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "__self", _this)), isLoadingSearch && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__.default, (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    size: 60,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 27
    }
  }, "__self", _this)), user && __jsx(_components_UserCard__WEBPACK_IMPORTED_MODULE_4__.default, (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    user: user,
    isLoading: isLoading,
    repositories: repositories,
    handleRepos: getRepositoriesList,
    handleStarred: getStarredList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "__self", _this)), hasUserNotFound && __jsx(_components_UserNotFound__WEBPACK_IMPORTED_MODULE_5__.default, (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 27
    }
  }, "__self", _this)));
};

_s(Home, "5m8HX0a3/sgrM1456u4CaweNMSs=", false, function () {
  return [_core_contexts_GitHubContext__WEBPACK_IMPORTED_MODULE_2__.useGitHubContext, _core_hooks_useCarsApi__WEBPACK_IMPORTED_MODULE_3__.useCarsApi];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0hvbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VHaXRIdWJDb250ZXh0IiwidXNlciIsImlzTG9hZGluZyIsImhhc1VzZXJOb3RGb3VuZCIsImlzTG9hZGluZ1NlYXJjaCIsInJlcG9zaXRvcmllcyIsImdldFVzZXIiLCJnZXRSZXBvc2l0b3JpZXNMaXN0IiwiZ2V0U3RhcnJlZExpc3QiLCJ1c2VDYXJzQXBpIiwiYWN0aW9ucyIsInN0YXRlIiwic2VhcmNoIiwidXNlck5hbWUiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSwwQkFVYkMsOEVBQWdCLEVBVkg7QUFBQSxNQUVmQyxJQUZlLHFCQUVmQSxJQUZlO0FBQUEsTUFHZkMsU0FIZSxxQkFHZkEsU0FIZTtBQUFBLE1BSWZDLGVBSmUscUJBSWZBLGVBSmU7QUFBQSxNQUtmQyxlQUxlLHFCQUtmQSxlQUxlO0FBQUEsTUFNZkMsWUFOZSxxQkFNZkEsWUFOZTtBQUFBLE1BT2ZDLE9BUGUscUJBT2ZBLE9BUGU7QUFBQSxNQVFmQyxtQkFSZSxxQkFRZkEsbUJBUmU7QUFBQSxNQVNmQyxjQVRlLHFCQVNmQSxjQVRlOztBQUFBLG9CQVlVQyxrRUFBVSxFQVpwQjtBQUFBLE1BWVRDLE9BWlMsZUFZVEEsT0FaUztBQUFBLE1BWUFDLEtBWkEsZUFZQUEsS0FaQTs7QUFjakIsV0FBU0MsTUFBVCxDQUFnQkMsUUFBaEIsRUFBa0M7QUFDaENQLFdBQU8sQ0FBQ08sUUFBRCxDQUFQLENBRGdDLENBRWpDO0FBQ0E7O0FBRUQsU0FDRTtBQUFLLGFBQVMsRUFBRUMsaUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0UsTUFBQywwREFBRDtBQUFXLGFBQVMsRUFBRUYsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVHUixlQUFlLElBQUksTUFBQyx1RUFBRDtBQUFrQixRQUFJLEVBQUUsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGdEIsRUFHR0gsSUFBSSxJQUNILE1BQUMseURBQUQ7QUFDRSxRQUFJLEVBQUVBLElBRFI7QUFFRSxhQUFTLEVBQUVDLFNBRmI7QUFHRSxnQkFBWSxFQUFFRyxZQUhoQjtBQUlFLGVBQVcsRUFBRUUsbUJBSmY7QUFLRSxpQkFBYSxFQUFFQyxjQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpKLEVBWUdMLGVBQWUsSUFBSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWnRCLENBREY7QUFnQkQsQ0FuQ0Q7O0dBQU1KLEk7VUFVQUMsMEUsRUFFdUJTLDhEOzs7S0FadkJWLEk7QUFxQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGNjNDY0YzE0OWM1YTYwNjUxZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1BUks6IExpYnNcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gTUFSSzogSG9va3NcclxuaW1wb3J0IHsgdXNlR2l0SHViQ29udGV4dCB9IGZyb20gJ0Bjb3JlL2NvbnRleHRzL0dpdEh1YkNvbnRleHQnO1xyXG5pbXBvcnQge3VzZUNhcnNBcGl9IGZyb20gJ0Bjb3JlL2hvb2tzL3VzZUNhcnNBcGknO1xyXG4vLyBNQVJLOiBDb21wb25lbnRzXHJcbmltcG9ydCBVc2VyQ2FyZCBmcm9tICdAY29tcG9uZW50cy9Vc2VyQ2FyZCc7XHJcbmltcG9ydCBVc2VyTm90Rm91bmQgZnJvbSAnQGNvbXBvbmVudHMvVXNlck5vdEZvdW5kJztcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnQGNvbXBvbmVudHMvU2VhcmNoQmFyJztcclxuLy8gTUFSSzogU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB1c2VyLFxyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgaGFzVXNlck5vdEZvdW5kLFxyXG4gICAgaXNMb2FkaW5nU2VhcmNoLFxyXG4gICAgcmVwb3NpdG9yaWVzLFxyXG4gICAgZ2V0VXNlcixcclxuICAgIGdldFJlcG9zaXRvcmllc0xpc3QsXHJcbiAgICBnZXRTdGFycmVkTGlzdCxcclxuICB9ID0gdXNlR2l0SHViQ29udGV4dCgpO1xyXG5cclxuICBjb25zdCB7IGFjdGlvbnMsIHN0YXRlIH0gPSB1c2VDYXJzQXBpKCk7XHJcblxyXG4gIGZ1bmN0aW9uIHNlYXJjaCh1c2VyTmFtZTogc3RyaW5nKSB7XHJcbiAgICBnZXRVc2VyKHVzZXJOYW1lKTtcclxuICAgLy8gYWN0aW9ucy5nZXRDYXJMaXN0KCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgPFNlYXJjaEJhciBnZXRTZWFyY2g9e3NlYXJjaH0gLz5cclxuICAgICAge2lzTG9hZGluZ1NlYXJjaCAmJiA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXs2MH0gLz59XHJcbiAgICAgIHt1c2VyICYmIChcclxuICAgICAgICA8VXNlckNhcmRcclxuICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cclxuICAgICAgICAgIHJlcG9zaXRvcmllcz17cmVwb3NpdG9yaWVzfVxyXG4gICAgICAgICAgaGFuZGxlUmVwb3M9e2dldFJlcG9zaXRvcmllc0xpc3R9XHJcbiAgICAgICAgICBoYW5kbGVTdGFycmVkPXtnZXRTdGFycmVkTGlzdH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7aGFzVXNlck5vdEZvdW5kICYmIDxVc2VyTm90Rm91bmQgLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==