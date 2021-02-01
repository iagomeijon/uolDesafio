webpackHotUpdate_N_E("pages/index",{

/***/ "./src/core/hooks/useGitHub/index.tsx":
/*!********************************************!*\
  !*** ./src/core/hooks/useGitHub/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGitHub; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);



var _s = $RefreshSig$();



function useGitHub() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      userNotFound = _useState3[0],
      setuUserNotFound = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      repositories = _useState4[0],
      setRepositories = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loadingSearch = _useState5[0],
      setLoadingSearch = _useState5[1];

  function getUser(_x) {
    return _getUser.apply(this, arguments);
  }

  function _getUser() {
    _getUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userSearch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoadingSearch(true);
              setuUserNotFound(false);
              setUser(null);
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://api.github.com/users/".concat(userSearch)).then(function (res) {
                setUser(res.data);
              })["catch"](function (err) {
                return setuUserNotFound(true);
              })["finally"](function () {
                return setLoadingSearch(false);
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getUser.apply(this, arguments);
  }

  function getRepositoriesList() {
    return _getRepositoriesList.apply(this, arguments);
  }

  function _getRepositoriesList() {
    _getRepositoriesList = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setIsLoading(true);
              setRepositories(null);

              if (!user) {
                _context2.next = 5;
                break;
              }

              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://api.github.com/users/".concat(user.login, "/repos")).then(function (res) {
                setRepositories(res.data);
              })["catch"]()["finally"](function () {
                return setIsLoading(false);
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getRepositoriesList.apply(this, arguments);
  }

  function getStarredList() {
    return _getStarredList.apply(this, arguments);
  }

  function _getStarredList() {
    _getStarredList = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setIsLoading(true);
              setRepositories(null);

              if (!user) {
                _context3.next = 5;
                break;
              }

              _context3.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://api.github.com/users/".concat(user.login, "/starred")).then(function (res) {
                setRepositories(res.data);
              })["catch"]()["finally"](function () {
                return setIsLoading(false);
              });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _getStarredList.apply(this, arguments);
  }

  function clean() {
    setuUserNotFound(false);
    setIsLoading(false);
    setLoadingSearch(false);
    setRepositories(null);
    setUser(null);
  }

  return {
    state: {
      isLoading: isLoading,
      user: user,
      userNotFound: userNotFound,
      repositories: repositories,
      loadingSearch: loadingSearch
    },
    actions: {
      getUser: getUser,
      getRepositoriesList: getRepositoriesList,
      getStarredList: getStarredList,
      clean: clean
    }
  };
}

_s(useGitHub, "bodSQkjrC5MjgOgUmR1btOCNTRI=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvcmUvaG9va3MvdXNlR2l0SHViL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0hvbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbInVzZUdpdEh1YiIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlciIsInNldFVzZXIiLCJ1c2VyTm90Rm91bmQiLCJzZXR1VXNlck5vdEZvdW5kIiwicmVwb3NpdG9yaWVzIiwic2V0UmVwb3NpdG9yaWVzIiwibG9hZGluZ1NlYXJjaCIsInNldExvYWRpbmdTZWFyY2giLCJnZXRVc2VyIiwidXNlclNlYXJjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJnZXRSZXBvc2l0b3JpZXNMaXN0IiwibG9naW4iLCJnZXRTdGFycmVkTGlzdCIsImNsZWFuIiwic3RhdGUiLCJhY3Rpb25zIiwiSG9tZSIsInNlYXJjaCIsInN0eWxlcyIsIm1haW4iLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBVSxLQUFWLENBRFI7QUFBQSxNQUMzQkMsU0FEMkI7QUFBQSxNQUNoQkMsWUFEZ0I7O0FBQUEsbUJBRVZGLHNEQUFRLENBQWMsSUFBZCxDQUZFO0FBQUEsTUFFM0JHLElBRjJCO0FBQUEsTUFFckJDLE9BRnFCOztBQUFBLG1CQUdPSixzREFBUSxDQUFVLEtBQVYsQ0FIZjtBQUFBLE1BRzNCSyxZQUgyQjtBQUFBLE1BR2JDLGdCQUhhOztBQUFBLG1CQUlNTixzREFBUSxDQUFzQixJQUF0QixDQUpkO0FBQUEsTUFJM0JPLFlBSjJCO0FBQUEsTUFJYkMsZUFKYTs7QUFBQSxtQkFLUVIsc0RBQVEsQ0FBVSxLQUFWLENBTGhCO0FBQUEsTUFLM0JTLGFBTDJCO0FBQUEsTUFLWkMsZ0JBTFk7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QURGO0FBZ0JELENBdEJEOztHQUFNb0IsSTtVQUN1QjFCLDZEOzs7S0FEdkIwQixJO0FBd0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNTJhNjViM2U2NjYxMWYzZDA3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFVzZXIsIFJlcG9zaXRvcnkgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VHaXRIdWIoKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3VzZXJOb3RGb3VuZCwgc2V0dVVzZXJOb3RGb3VuZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3JlcG9zaXRvcmllcywgc2V0UmVwb3NpdG9yaWVzXSA9IHVzZVN0YXRlPFJlcG9zaXRvcnlbXSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nU2VhcmNoLCBzZXRMb2FkaW5nU2VhcmNoXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcih1c2VyU2VhcmNoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHNldExvYWRpbmdTZWFyY2godHJ1ZSk7XHJcbiAgICBzZXR1VXNlck5vdEZvdW5kKGZhbHNlKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICBhd2FpdCBheGlvc1xyXG4gICAgICAuZ2V0PFVzZXI+KGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlclNlYXJjaH1gKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcihyZXMuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBzZXR1VXNlck5vdEZvdW5kKHRydWUpKVxyXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRMb2FkaW5nU2VhcmNoKGZhbHNlKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc2l0b3JpZXNMaXN0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0UmVwb3NpdG9yaWVzKG51bGwpO1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAuZ2V0KGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlci5sb2dpbn0vcmVwb3NgKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHNldFJlcG9zaXRvcmllcyhyZXMuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHNldElzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhcnJlZExpc3QoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRSZXBvc2l0b3JpZXMobnVsbCk7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyLmxvZ2lufS9zdGFycmVkYClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBzZXRSZXBvc2l0b3JpZXMocmVzLmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKClcclxuICAgICAgICAuZmluYWxseSgoKSA9PiBzZXRJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFuKCk6IHZvaWQge1xyXG4gICAgc2V0dVVzZXJOb3RGb3VuZChmYWxzZSk7XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgc2V0TG9hZGluZ1NlYXJjaChmYWxzZSk7XHJcbiAgICBzZXRSZXBvc2l0b3JpZXMobnVsbCk7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIGlzTG9hZGluZyxcclxuICAgICAgdXNlcixcclxuICAgICAgdXNlck5vdEZvdW5kLFxyXG4gICAgICByZXBvc2l0b3JpZXMsXHJcbiAgICAgIGxvYWRpbmdTZWFyY2gsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICBnZXRVc2VyLFxyXG4gICAgICBnZXRSZXBvc2l0b3JpZXNMaXN0LFxyXG4gICAgICBnZXRTdGFycmVkTGlzdCxcclxuICAgICAgY2xlYW4sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUdpdEh1YiBmcm9tICdAY29yZS9ob29rcy91c2VHaXRIdWInO1xyXG5pbXBvcnQgVXNlckNhcmQgZnJvbSAnQGNvbXBvbmVudHMvVXNlckNhcmQnO1xyXG5pbXBvcnQgVXNlck5vdEZvdW5kIGZyb20gJ0Bjb21wb25lbnRzL1VzZXJOb3RGb3VuZCc7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgU2VyYWNoQmFyIGZyb20gJ0Bjb21wb25lbnRzL1NlYXJjaEJhcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCB7IGFjdGlvbnMsIHN0YXRlIH0gPSB1c2VHaXRIdWIoKTtcclxuICBmdW5jdGlvbiBzZWFyY2godXNlcjogc3RyaW5nKSB7XHJcbiAgICBhY3Rpb25zLmNsZWFuKCk7XHJcbiAgICBhY3Rpb25zLmdldFVzZXIodXNlcik7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8U2VyYWNoQmFyIGdldFNlYXJjaD17c2VhcmNofSAvPlxyXG4gICAgICB7c3RhdGUubG9hZGluZ1NlYXJjaCAmJiA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXs2MH0gLz59XHJcbiAgICAgIHtzdGF0ZS51c2VyICYmIChcclxuICAgICAgICA8VXNlckNhcmRcclxuICAgICAgICAgIHVzZXI9e3N0YXRlLnVzZXJ9XHJcbiAgICAgICAgICBpc0xvYWRpbmc9e3N0YXRlLmlzTG9hZGluZ31cclxuICAgICAgICAgIHJlcG9zaXRvcmllcz17c3RhdGUucmVwb3NpdG9yaWVzfVxyXG4gICAgICAgICAgaGFuZGRsZVJlcG9zPXthY3Rpb25zLmdldFJlcG9zaXRvcmllc0xpc3R9XHJcbiAgICAgICAgICBoYW5kbGVTdGFycmVkPXsoKSA9PiBhbGVydCgnc3RhcnJlZCcpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzdGF0ZS51c2VyTm90Rm91bmQgJiYgPFVzZXJOb3RGb3VuZCAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9