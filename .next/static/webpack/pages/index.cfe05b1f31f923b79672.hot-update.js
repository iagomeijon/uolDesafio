self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/core/hooks/useCarsApi/index.tsx":
/*!*********************************************!*\
  !*** ./src/core/hooks/useCarsApi/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useCarsApi; }
/* harmony export */ });
/* harmony import */ var C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();

// MARK: Libs


function useCarsApi() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      carsList = _useState[0],
      setCarsList = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  function clean() {
    setCarsList([]);
    setIsLoading(false);
  }

  function getCarList(_x) {
    return _getCarList.apply(this, arguments);
  }

  function _getCarList() {
    _getCarList = (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(userSearch) {
      var res;
      return C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              clean();
              setIsLoading(true);
              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://sprint-cars.herokuapp.com/api/v1/teste");

            case 5:
              res = _context.sent;
              setCarsList(res.data);

            case 7:
              _context.prev = 7;
              setIsLoading(false);
              return _context.finish(7);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2,, 7, 10]]);
    }));
    return _getCarList.apply(this, arguments);
  }

  return {
    state: {
      carsList: carsList,
      isLoading: isLoading
    },
    actions: {
      getCarList: getCarList,
      clean: clean
    }
  };
}

_s(useCarsApi, "WvWYZL9EDQV46ZeDeQWJlPWenP0=");

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


/***/ }),

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
  }

  return __jsx("div", (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, "__self", _this), __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_6__.default, (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    getSearch: search,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "__self", _this)), isLoadingSearch && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__.default, (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    size: 60,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 37,
      columnNumber: 9
    }
  }, "__self", _this)), hasUserNotFound && __jsx(_components_UserNotFound__WEBPACK_IMPORTED_MODULE_5__.default, (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvcmUvaG9va3MvdXNlQ2Fyc0FwaS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9Ib21lL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VDYXJzQXBpIiwidXNlU3RhdGUiLCJjYXJzTGlzdCIsInNldENhcnNMaXN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY2xlYW4iLCJnZXRDYXJMaXN0IiwidXNlclNlYXJjaCIsImF4aW9zIiwicmVzIiwiZGF0YSIsInN0YXRlIiwiYWN0aW9ucyIsIkhvbWUiLCJ1c2VHaXRIdWJDb250ZXh0IiwidXNlciIsImhhc1VzZXJOb3RGb3VuZCIsImlzTG9hZGluZ1NlYXJjaCIsInJlcG9zaXRvcmllcyIsImdldFVzZXIiLCJnZXRSZXBvc2l0b3JpZXNMaXN0IiwiZ2V0U3RhcnJlZExpc3QiLCJzZWFyY2giLCJ1c2VyTmFtZSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBQ0hDLCtDQUFRLENBQVEsRUFBUixDQURMO0FBQUEsTUFDNUJDLFFBRDRCO0FBQUEsTUFDbEJDLFdBRGtCOztBQUFBLG1CQUVERiwrQ0FBUSxDQUFVLEtBQVYsQ0FGUDtBQUFBLE1BRTVCRyxTQUY0QjtBQUFBLE1BRWpCQyxZQUZpQjs7QUFJbkMsV0FBU0MsS0FBVCxHQUF1QjtBQUNyQkgsZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBRSxnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNEOztBQVBrQyxXQVNwQkUsVUFUb0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsb1hBU25DLGlCQUEwQkMsVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VGLG1CQUFLO0FBQ0xELDBCQUFZLENBQUMsSUFBRCxDQUFaO0FBRkY7QUFBQTtBQUFBLHFCQUlzQkksZ0RBQUEsa0RBSnRCOztBQUFBO0FBSVVDLGlCQUpWO0FBT0lQLHlCQUFXLENBQUNPLEdBQUcsQ0FBQ0MsSUFBTCxDQUFYOztBQVBKO0FBQUE7QUFTSU4sMEJBQVksQ0FBQyxLQUFELENBQVo7QUFUSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVRtQztBQUFBO0FBQUE7O0FBc0JuQyxTQUFPO0FBQ0xPLFNBQUssRUFBRTtBQUNMVixjQUFRLEVBQVJBLFFBREs7QUFFTEUsZUFBUyxFQUFUQTtBQUZLLEtBREY7QUFLTFMsV0FBTyxFQUFFO0FBQ1BOLGdCQUFVLEVBQVZBLFVBRE87QUFFUEQsV0FBSyxFQUFMQTtBQUZPO0FBTEosR0FBUDtBQVVEOztHQWhDdUJOLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p4QjtDQUVBOztBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0FBRUEsSUFBTWMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLDBCQVViQyw4RUFBZ0IsRUFWSDtBQUFBLE1BRWZDLElBRmUscUJBRWZBLElBRmU7QUFBQSxNQUdmWixTQUhlLHFCQUdmQSxTQUhlO0FBQUEsTUFJZmEsZUFKZSxxQkFJZkEsZUFKZTtBQUFBLE1BS2ZDLGVBTGUscUJBS2ZBLGVBTGU7QUFBQSxNQU1mQyxZQU5lLHFCQU1mQSxZQU5lO0FBQUEsTUFPZkMsT0FQZSxxQkFPZkEsT0FQZTtBQUFBLE1BUWZDLG1CQVJlLHFCQVFmQSxtQkFSZTtBQUFBLE1BU2ZDLGNBVGUscUJBU2ZBLGNBVGU7O0FBQUEsb0JBWVV0QixrRUFBVSxFQVpwQjtBQUFBLE1BWVRhLE9BWlMsZUFZVEEsT0FaUztBQUFBLE1BWUFELEtBWkEsZUFZQUEsS0FaQTs7QUFjakIsV0FBU1csTUFBVCxDQUFnQkMsUUFBaEIsRUFBa0M7QUFDaENKLFdBQU8sQ0FBQ0ksUUFBRCxDQUFQO0FBQ0Q7O0FBRUQsU0FDRTtBQUFLLGFBQVMsRUFBRUMsaUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0UsTUFBQywwREFBRDtBQUFXLGFBQVMsRUFBRUYsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVHTCxlQUFlLElBQUksTUFBQyx1RUFBRDtBQUFrQixRQUFJLEVBQUUsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGdEIsRUFHR0YsSUFBSSxJQUNILE1BQUMseURBQUQ7QUFDRSxRQUFJLEVBQUVBLElBRFI7QUFFRSxhQUFTLEVBQUVaLFNBRmI7QUFHRSxnQkFBWSxFQUFFZSxZQUhoQjtBQUlFLGVBQVcsRUFBRUUsbUJBSmY7QUFLRSxpQkFBYSxFQUFFQyxjQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpKLEVBWUdMLGVBQWUsSUFBSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWnRCLENBREY7QUFnQkQsQ0FsQ0Q7O0dBQU1ILEk7VUFVQUMsMEUsRUFFdUJmLDhEOzs7S0FadkJjLEk7QUFvQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2ZlMDViMWYzMWY5MjNiNzk2NzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1BUks6IExpYnNcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDYXJzQXBpKCkge1xyXG4gIGNvbnN0IFtjYXJzTGlzdCwgc2V0Q2Fyc0xpc3RdID0gdXNlU3RhdGU8Q2FyW10+KFtdKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBjbGVhbigpOiB2b2lkIHtcclxuICAgIHNldENhcnNMaXN0KFtdKTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRDYXJMaXN0KHVzZXJTZWFyY2g6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY2xlYW4oKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldDxDYXJbXT4oXHJcbiAgICAgICAgYGh0dHBzOi8vc3ByaW50LWNhcnMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdGVzdGVgLFxyXG4gICAgICApO1xyXG4gICAgICBzZXRDYXJzTGlzdChyZXMuZGF0YSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIGNhcnNMaXN0LFxyXG4gICAgICBpc0xvYWRpbmcsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICBnZXRDYXJMaXN0LFxyXG4gICAgICBjbGVhbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCIvLyBNQVJLOiBMaWJzXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIE1BUks6IEhvb2tzXHJcbmltcG9ydCB7IHVzZUdpdEh1YkNvbnRleHQgfSBmcm9tICdAY29yZS9jb250ZXh0cy9HaXRIdWJDb250ZXh0JztcclxuaW1wb3J0IHt1c2VDYXJzQXBpfSBmcm9tICdAY29yZS9ob29rcy91c2VDYXJzQXBpJztcclxuLy8gTUFSSzogQ29tcG9uZW50c1xyXG5pbXBvcnQgVXNlckNhcmQgZnJvbSAnQGNvbXBvbmVudHMvVXNlckNhcmQnO1xyXG5pbXBvcnQgVXNlck5vdEZvdW5kIGZyb20gJ0Bjb21wb25lbnRzL1VzZXJOb3RGb3VuZCc7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ0Bjb21wb25lbnRzL1NlYXJjaEJhcic7XHJcbi8vIE1BUks6IFN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdXNlcixcclxuICAgIGlzTG9hZGluZyxcclxuICAgIGhhc1VzZXJOb3RGb3VuZCxcclxuICAgIGlzTG9hZGluZ1NlYXJjaCxcclxuICAgIHJlcG9zaXRvcmllcyxcclxuICAgIGdldFVzZXIsXHJcbiAgICBnZXRSZXBvc2l0b3JpZXNMaXN0LFxyXG4gICAgZ2V0U3RhcnJlZExpc3QsXHJcbiAgfSA9IHVzZUdpdEh1YkNvbnRleHQoKTtcclxuXHJcbiAgY29uc3QgeyBhY3Rpb25zLCBzdGF0ZSB9ID0gdXNlQ2Fyc0FwaSgpO1xyXG5cclxuICBmdW5jdGlvbiBzZWFyY2godXNlck5hbWU6IHN0cmluZykge1xyXG4gICAgZ2V0VXNlcih1c2VyTmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgPFNlYXJjaEJhciBnZXRTZWFyY2g9e3NlYXJjaH0gLz5cclxuICAgICAge2lzTG9hZGluZ1NlYXJjaCAmJiA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXs2MH0gLz59XHJcbiAgICAgIHt1c2VyICYmIChcclxuICAgICAgICA8VXNlckNhcmRcclxuICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cclxuICAgICAgICAgIHJlcG9zaXRvcmllcz17cmVwb3NpdG9yaWVzfVxyXG4gICAgICAgICAgaGFuZGxlUmVwb3M9e2dldFJlcG9zaXRvcmllc0xpc3R9XHJcbiAgICAgICAgICBoYW5kbGVTdGFycmVkPXtnZXRTdGFycmVkTGlzdH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7aGFzVXNlck5vdEZvdW5kICYmIDxVc2VyTm90Rm91bmQgLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==