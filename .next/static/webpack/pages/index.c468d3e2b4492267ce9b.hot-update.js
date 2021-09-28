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
    getUser(userName);
    actions.getCarList();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0hvbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VHaXRIdWJDb250ZXh0IiwidXNlciIsImlzTG9hZGluZyIsImhhc1VzZXJOb3RGb3VuZCIsImlzTG9hZGluZ1NlYXJjaCIsInJlcG9zaXRvcmllcyIsImdldFVzZXIiLCJnZXRSZXBvc2l0b3JpZXNMaXN0IiwiZ2V0U3RhcnJlZExpc3QiLCJ1c2VDYXJzQXBpIiwiYWN0aW9ucyIsInN0YXRlIiwic2VhcmNoIiwidXNlck5hbWUiLCJnZXRDYXJMaXN0Iiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsMEJBVWJDLDhFQUFnQixFQVZIO0FBQUEsTUFFZkMsSUFGZSxxQkFFZkEsSUFGZTtBQUFBLE1BR2ZDLFNBSGUscUJBR2ZBLFNBSGU7QUFBQSxNQUlmQyxlQUplLHFCQUlmQSxlQUplO0FBQUEsTUFLZkMsZUFMZSxxQkFLZkEsZUFMZTtBQUFBLE1BTWZDLFlBTmUscUJBTWZBLFlBTmU7QUFBQSxNQU9mQyxPQVBlLHFCQU9mQSxPQVBlO0FBQUEsTUFRZkMsbUJBUmUscUJBUWZBLG1CQVJlO0FBQUEsTUFTZkMsY0FUZSxxQkFTZkEsY0FUZTs7QUFBQSxvQkFZVUMsa0VBQVUsRUFacEI7QUFBQSxNQVlUQyxPQVpTLGVBWVRBLE9BWlM7QUFBQSxNQVlBQyxLQVpBLGVBWUFBLEtBWkE7O0FBY2pCLFdBQVNDLE1BQVQsQ0FBZ0JDLFFBQWhCLEVBQWtDO0FBQ2hDUCxXQUFPLENBQUNPLFFBQUQsQ0FBUDtBQUNBSCxXQUFPLENBQUNJLFVBQVI7QUFDRDs7QUFFRCxTQUNFO0FBQUssYUFBUyxFQUFFQyxpRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDRSxNQUFDLDBEQUFEO0FBQVcsYUFBUyxFQUFFSCxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUdSLGVBQWUsSUFBSSxNQUFDLHVFQUFEO0FBQWtCLFFBQUksRUFBRSxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZ0QixFQUdHSCxJQUFJLElBQ0gsTUFBQyx5REFBRDtBQUNFLFFBQUksRUFBRUEsSUFEUjtBQUVFLGFBQVMsRUFBRUMsU0FGYjtBQUdFLGdCQUFZLEVBQUVHLFlBSGhCO0FBSUUsZUFBVyxFQUFFRSxtQkFKZjtBQUtFLGlCQUFhLEVBQUVDLGNBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkosRUFZR0wsZUFBZSxJQUFJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFadEIsQ0FERjtBQWdCRCxDQW5DRDs7R0FBTUosSTtVQVVBQywwRSxFQUV1QlMsOEQ7OztLQVp2QlYsSTtBQXFDTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNDY4ZDNlMmI0NDkyMjY3Y2U5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTUFSSzogTGlic1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBNQVJLOiBIb29rc1xyXG5pbXBvcnQgeyB1c2VHaXRIdWJDb250ZXh0IH0gZnJvbSAnQGNvcmUvY29udGV4dHMvR2l0SHViQ29udGV4dCc7XHJcbmltcG9ydCB7dXNlQ2Fyc0FwaX0gZnJvbSAnQGNvcmUvaG9va3MvdXNlQ2Fyc0FwaSc7XHJcbi8vIE1BUks6IENvbXBvbmVudHNcclxuaW1wb3J0IFVzZXJDYXJkIGZyb20gJ0Bjb21wb25lbnRzL1VzZXJDYXJkJztcclxuaW1wb3J0IFVzZXJOb3RGb3VuZCBmcm9tICdAY29tcG9uZW50cy9Vc2VyTm90Rm91bmQnO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICdAY29tcG9uZW50cy9TZWFyY2hCYXInO1xyXG4vLyBNQVJLOiBTdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHVzZXIsXHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBoYXNVc2VyTm90Rm91bmQsXHJcbiAgICBpc0xvYWRpbmdTZWFyY2gsXHJcbiAgICByZXBvc2l0b3JpZXMsXHJcbiAgICBnZXRVc2VyLFxyXG4gICAgZ2V0UmVwb3NpdG9yaWVzTGlzdCxcclxuICAgIGdldFN0YXJyZWRMaXN0LFxyXG4gIH0gPSB1c2VHaXRIdWJDb250ZXh0KCk7XHJcblxyXG4gIGNvbnN0IHsgYWN0aW9ucywgc3RhdGUgfSA9IHVzZUNhcnNBcGkoKTtcclxuXHJcbiAgZnVuY3Rpb24gc2VhcmNoKHVzZXJOYW1lOiBzdHJpbmcpIHtcclxuICAgIGdldFVzZXIodXNlck5hbWUpO1xyXG4gICAgYWN0aW9ucy5nZXRDYXJMaXN0KCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgPFNlYXJjaEJhciBnZXRTZWFyY2g9e3NlYXJjaH0gLz5cclxuICAgICAge2lzTG9hZGluZ1NlYXJjaCAmJiA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXs2MH0gLz59XHJcbiAgICAgIHt1c2VyICYmIChcclxuICAgICAgICA8VXNlckNhcmRcclxuICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cclxuICAgICAgICAgIHJlcG9zaXRvcmllcz17cmVwb3NpdG9yaWVzfVxyXG4gICAgICAgICAgaGFuZGxlUmVwb3M9e2dldFJlcG9zaXRvcmllc0xpc3R9XHJcbiAgICAgICAgICBoYW5kbGVTdGFycmVkPXtnZXRTdGFycmVkTGlzdH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7aGFzVXNlck5vdEZvdW5kICYmIDxVc2VyTm90Rm91bmQgLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==