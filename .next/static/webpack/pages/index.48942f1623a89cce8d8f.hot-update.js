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
              setRepositories(null);
              setIsLoading(true);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvcmUvaG9va3MvdXNlR2l0SHViL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VHaXRIdWIiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZXIiLCJzZXRVc2VyIiwidXNlck5vdEZvdW5kIiwic2V0dVVzZXJOb3RGb3VuZCIsInJlcG9zaXRvcmllcyIsInNldFJlcG9zaXRvcmllcyIsImxvYWRpbmdTZWFyY2giLCJzZXRMb2FkaW5nU2VhcmNoIiwiZ2V0VXNlciIsInVzZXJTZWFyY2giLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwiZ2V0UmVwb3NpdG9yaWVzTGlzdCIsImxvZ2luIiwiZ2V0U3RhcnJlZExpc3QiLCJjbGVhbiIsInN0YXRlIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBVSxLQUFWLENBRFI7QUFBQSxNQUMzQkMsU0FEMkI7QUFBQSxNQUNoQkMsWUFEZ0I7O0FBQUEsbUJBRVZGLHNEQUFRLENBQWMsSUFBZCxDQUZFO0FBQUEsTUFFM0JHLElBRjJCO0FBQUEsTUFFckJDLE9BRnFCOztBQUFBLG1CQUdPSixzREFBUSxDQUFVLEtBQVYsQ0FIZjtBQUFBLE1BRzNCSyxZQUgyQjtBQUFBLE1BR2JDLGdCQUhhOztBQUFBLG1CQUlNTixzREFBUSxDQUFzQixJQUF0QixDQUpkO0FBQUEsTUFJM0JPLFlBSjJCO0FBQUEsTUFJYkMsZUFKYTs7QUFBQSxtQkFLUVIsc0RBQVEsQ0FBVSxLQUFWLENBTGhCO0FBQUEsTUFLM0JTLGFBTDJCO0FBQUEsTUFLWkMsZ0JBTFk7O0FBQUEsV0FPbkJDLE9BUG1CO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdNQU9sQyxpQkFBdUJDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUYsOEJBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNBSiw4QkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0FGLHFCQUFPLENBQUMsSUFBRCxDQUFQO0FBSEY7QUFBQSxxQkFJUVMsNENBQUssQ0FDUkMsR0FERyx3Q0FDdUNGLFVBRHZDLEdBRUhHLElBRkcsQ0FFRSxVQUFDQyxHQUFELEVBQVM7QUFDYlosdUJBQU8sQ0FBQ1ksR0FBRyxDQUFDQyxJQUFMLENBQVA7QUFDRCxlQUpHLFdBS0csVUFBQ0MsR0FBRDtBQUFBLHVCQUFTWixnQkFBZ0IsQ0FBQyxJQUFELENBQXpCO0FBQUEsZUFMSCxhQU1LO0FBQUEsdUJBQU1JLGdCQUFnQixDQUFDLEtBQUQsQ0FBdEI7QUFBQSxlQU5MLENBSlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FQa0M7QUFBQTtBQUFBOztBQUFBLFdBb0JuQlMsbUJBcEJtQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSw0TUFvQmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRWpCLDBCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FNLDZCQUFlLENBQUMsSUFBRCxDQUFmOztBQUZGLG1CQUdNTCxJQUhOO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBSVVVLDRDQUFLLENBQ1JDLEdBREcsd0NBQ2lDWCxJQUFJLENBQUNpQixLQUR0QyxhQUVITCxJQUZHLENBRUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JSLCtCQUFlLENBQUNRLEdBQUcsQ0FBQ0MsSUFBTCxDQUFmO0FBQ0QsZUFKRyx3QkFNSztBQUFBLHVCQUFNZixZQUFZLENBQUMsS0FBRCxDQUFsQjtBQUFBLGVBTkwsQ0FKVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXBCa0M7QUFBQTtBQUFBOztBQUFBLFdBa0NuQm1CLGNBbENtQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1TUFrQ2xDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRWIsNkJBQWUsQ0FBQyxJQUFELENBQWY7QUFDQU4sMEJBQVksQ0FBQyxJQUFELENBQVo7O0FBRkYsbUJBR01DLElBSE47QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFJVVUsNENBQUssQ0FDUkMsR0FERyx3Q0FDaUNYLElBQUksQ0FBQ2lCLEtBRHRDLGVBRUhMLElBRkcsQ0FFRSxVQUFDQyxHQUFELEVBQVM7QUFDYlIsK0JBQWUsQ0FBQ1EsR0FBRyxDQUFDQyxJQUFMLENBQWY7QUFDRCxlQUpHLHdCQU1LO0FBQUEsdUJBQU1mLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsZUFOTCxDQUpWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbENrQztBQUFBO0FBQUE7O0FBZ0RsQyxXQUFTb0IsS0FBVCxHQUF1QjtBQUNyQmhCLG9CQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDQUosZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQVEsb0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNBRixtQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBSixXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0Q7O0FBRUQsU0FBTztBQUNMbUIsU0FBSyxFQUFFO0FBQ0x0QixlQUFTLEVBQVRBLFNBREs7QUFFTEUsVUFBSSxFQUFKQSxJQUZLO0FBR0xFLGtCQUFZLEVBQVpBLFlBSEs7QUFJTEUsa0JBQVksRUFBWkEsWUFKSztBQUtMRSxtQkFBYSxFQUFiQTtBQUxLLEtBREY7QUFRTGUsV0FBTyxFQUFFO0FBQ1BiLGFBQU8sRUFBUEEsT0FETztBQUVQUSx5QkFBbUIsRUFBbkJBLG1CQUZPO0FBR1BFLG9CQUFjLEVBQWRBLGNBSE87QUFJUEMsV0FBSyxFQUFMQTtBQUpPO0FBUkosR0FBUDtBQWVEOztHQXZFdUJ2QixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ4OTQyZjE2MjNhODljY2U4ZDhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgVXNlciwgUmVwb3NpdG9yeSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUdpdEh1YigpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbdXNlck5vdEZvdW5kLCBzZXR1VXNlck5vdEZvdW5kXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbcmVwb3NpdG9yaWVzLCBzZXRSZXBvc2l0b3JpZXNdID0gdXNlU3RhdGU8UmVwb3NpdG9yeVtdIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmdTZWFyY2gsIHNldExvYWRpbmdTZWFyY2hdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHVzZXJTZWFyY2g6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgc2V0TG9hZGluZ1NlYXJjaCh0cnVlKTtcclxuICAgIHNldHVVc2VyTm90Rm91bmQoZmFsc2UpO1xyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgIC5nZXQ8VXNlcj4oYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyU2VhcmNofWApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRVc2VyKHJlcy5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHNldHVVc2VyTm90Rm91bmQodHJ1ZSkpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmdTZWFyY2goZmFsc2UpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9zaXRvcmllc0xpc3QoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRSZXBvc2l0b3JpZXMobnVsbCk7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyLmxvZ2lufS9yZXBvc2ApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgc2V0UmVwb3NpdG9yaWVzKHJlcy5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgpXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0SXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRTdGFycmVkTGlzdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHNldFJlcG9zaXRvcmllcyhudWxsKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXIubG9naW59L3N0YXJyZWRgKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHNldFJlcG9zaXRvcmllcyhyZXMuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHNldElzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYW4oKTogdm9pZCB7XHJcbiAgICBzZXR1VXNlck5vdEZvdW5kKGZhbHNlKTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICBzZXRMb2FkaW5nU2VhcmNoKGZhbHNlKTtcclxuICAgIHNldFJlcG9zaXRvcmllcyhudWxsKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RhdGU6IHtcclxuICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICB1c2VyLFxyXG4gICAgICB1c2VyTm90Rm91bmQsXHJcbiAgICAgIHJlcG9zaXRvcmllcyxcclxuICAgICAgbG9hZGluZ1NlYXJjaCxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIGdldFVzZXIsXHJcbiAgICAgIGdldFJlcG9zaXRvcmllc0xpc3QsXHJcbiAgICAgIGdldFN0YXJyZWRMaXN0LFxyXG4gICAgICBjbGVhbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9