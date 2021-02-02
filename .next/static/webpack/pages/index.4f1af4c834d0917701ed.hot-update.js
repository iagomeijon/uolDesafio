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
              setRepositories(null);
              setIsLoading(true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvcmUvaG9va3MvdXNlR2l0SHViL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VHaXRIdWIiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZXIiLCJzZXRVc2VyIiwidXNlck5vdEZvdW5kIiwic2V0dVVzZXJOb3RGb3VuZCIsInJlcG9zaXRvcmllcyIsInNldFJlcG9zaXRvcmllcyIsImxvYWRpbmdTZWFyY2giLCJzZXRMb2FkaW5nU2VhcmNoIiwiZ2V0VXNlciIsInVzZXJTZWFyY2giLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwiZ2V0UmVwb3NpdG9yaWVzTGlzdCIsImxvZ2luIiwiZ2V0U3RhcnJlZExpc3QiLCJjbGVhbiIsInN0YXRlIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBVSxLQUFWLENBRFI7QUFBQSxNQUMzQkMsU0FEMkI7QUFBQSxNQUNoQkMsWUFEZ0I7O0FBQUEsbUJBRVZGLHNEQUFRLENBQWMsSUFBZCxDQUZFO0FBQUEsTUFFM0JHLElBRjJCO0FBQUEsTUFFckJDLE9BRnFCOztBQUFBLG1CQUdPSixzREFBUSxDQUFVLEtBQVYsQ0FIZjtBQUFBLE1BRzNCSyxZQUgyQjtBQUFBLE1BR2JDLGdCQUhhOztBQUFBLG1CQUlNTixzREFBUSxDQUFzQixJQUF0QixDQUpkO0FBQUEsTUFJM0JPLFlBSjJCO0FBQUEsTUFJYkMsZUFKYTs7QUFBQSxtQkFLUVIsc0RBQVEsQ0FBVSxLQUFWLENBTGhCO0FBQUEsTUFLM0JTLGFBTDJCO0FBQUEsTUFLWkMsZ0JBTFk7O0FBQUEsV0FPbkJDLE9BUG1CO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdNQU9sQyxpQkFBdUJDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUYsOEJBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNBSiw4QkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0FGLHFCQUFPLENBQUMsSUFBRCxDQUFQO0FBSEY7QUFBQSxxQkFJUVMsNENBQUssQ0FDUkMsR0FERyx3Q0FDdUNGLFVBRHZDLEdBRUhHLElBRkcsQ0FFRSxVQUFDQyxHQUFELEVBQVM7QUFDYlosdUJBQU8sQ0FBQ1ksR0FBRyxDQUFDQyxJQUFMLENBQVA7QUFDRCxlQUpHLFdBS0csVUFBQ0MsR0FBRDtBQUFBLHVCQUFTWixnQkFBZ0IsQ0FBQyxJQUFELENBQXpCO0FBQUEsZUFMSCxhQU1LO0FBQUEsdUJBQU1JLGdCQUFnQixDQUFDLEtBQUQsQ0FBdEI7QUFBQSxlQU5MLENBSlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FQa0M7QUFBQTtBQUFBOztBQUFBLFdBb0JuQlMsbUJBcEJtQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSw0TUFvQmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRVgsNkJBQWUsQ0FBQyxJQUFELENBQWY7QUFDQU4sMEJBQVksQ0FBQyxJQUFELENBQVo7O0FBRkYsbUJBR01DLElBSE47QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFJVVUsNENBQUssQ0FDUkMsR0FERyx3Q0FDaUNYLElBQUksQ0FBQ2lCLEtBRHRDLGFBRUhMLElBRkcsQ0FFRSxVQUFDQyxHQUFELEVBQVM7QUFDYlIsK0JBQWUsQ0FBQ1EsR0FBRyxDQUFDQyxJQUFMLENBQWY7QUFDRCxlQUpHLHdCQU1LO0FBQUEsdUJBQU1mLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsZUFOTCxDQUpWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBcEJrQztBQUFBO0FBQUE7O0FBQUEsV0FrQ25CbUIsY0FsQ21CO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVNQWtDbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFYiw2QkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBTiwwQkFBWSxDQUFDLElBQUQsQ0FBWjs7QUFGRixtQkFHTUMsSUFITjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUlVVSw0Q0FBSyxDQUNSQyxHQURHLHdDQUNpQ1gsSUFBSSxDQUFDaUIsS0FEdEMsZUFFSEwsSUFGRyxDQUVFLFVBQUNDLEdBQUQsRUFBUztBQUNiUiwrQkFBZSxDQUFDUSxHQUFHLENBQUNDLElBQUwsQ0FBZjtBQUNELGVBSkcsd0JBTUs7QUFBQSx1QkFBTWYsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxlQU5MLENBSlY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FsQ2tDO0FBQUE7QUFBQTs7QUFnRGxDLFdBQVNvQixLQUFULEdBQXVCO0FBQ3JCaEIsb0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNBSixnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBUSxvQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0FGLG1CQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FKLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDRDs7QUFFRCxTQUFPO0FBQ0xtQixTQUFLLEVBQUU7QUFDTHRCLGVBQVMsRUFBVEEsU0FESztBQUVMRSxVQUFJLEVBQUpBLElBRks7QUFHTEUsa0JBQVksRUFBWkEsWUFISztBQUlMRSxrQkFBWSxFQUFaQSxZQUpLO0FBS0xFLG1CQUFhLEVBQWJBO0FBTEssS0FERjtBQVFMZSxXQUFPLEVBQUU7QUFDUGIsYUFBTyxFQUFQQSxPQURPO0FBRVBRLHlCQUFtQixFQUFuQkEsbUJBRk87QUFHUEUsb0JBQWMsRUFBZEEsY0FITztBQUlQQyxXQUFLLEVBQUxBO0FBSk87QUFSSixHQUFQO0FBZUQ7O0dBdkV1QnZCLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGYxYWY0YzgzNGQwOTE3NzAxZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBVc2VyLCBSZXBvc2l0b3J5IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlR2l0SHViKCkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFt1c2VyTm90Rm91bmQsIHNldHVVc2VyTm90Rm91bmRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXBvc2l0b3JpZXMsIHNldFJlcG9zaXRvcmllc10gPSB1c2VTdGF0ZTxSZXBvc2l0b3J5W10gfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbbG9hZGluZ1NlYXJjaCwgc2V0TG9hZGluZ1NlYXJjaF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIodXNlclNlYXJjaDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBzZXRMb2FkaW5nU2VhcmNoKHRydWUpO1xyXG4gICAgc2V0dVVzZXJOb3RGb3VuZChmYWxzZSk7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgYXdhaXQgYXhpb3NcclxuICAgICAgLmdldDxVc2VyPihgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJTZWFyY2h9YClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldFVzZXIocmVzLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gc2V0dVVzZXJOb3RGb3VuZCh0cnVlKSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZ1NlYXJjaChmYWxzZSkpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UmVwb3NpdG9yaWVzTGlzdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHNldFJlcG9zaXRvcmllcyhudWxsKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXIubG9naW59L3JlcG9zYClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBzZXRSZXBvc2l0b3JpZXMocmVzLmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKClcclxuICAgICAgICAuZmluYWxseSgoKSA9PiBzZXRJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFN0YXJyZWRMaXN0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgc2V0UmVwb3NpdG9yaWVzKG51bGwpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAuZ2V0KGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlci5sb2dpbn0vc3RhcnJlZGApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgc2V0UmVwb3NpdG9yaWVzKHJlcy5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgpXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0SXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhbigpOiB2b2lkIHtcclxuICAgIHNldHVVc2VyTm90Rm91bmQoZmFsc2UpO1xyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldExvYWRpbmdTZWFyY2goZmFsc2UpO1xyXG4gICAgc2V0UmVwb3NpdG9yaWVzKG51bGwpO1xyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdGF0ZToge1xyXG4gICAgICBpc0xvYWRpbmcsXHJcbiAgICAgIHVzZXIsXHJcbiAgICAgIHVzZXJOb3RGb3VuZCxcclxuICAgICAgcmVwb3NpdG9yaWVzLFxyXG4gICAgICBsb2FkaW5nU2VhcmNoLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgZ2V0VXNlcixcclxuICAgICAgZ2V0UmVwb3NpdG9yaWVzTGlzdCxcclxuICAgICAgZ2V0U3RhcnJlZExpc3QsXHJcbiAgICAgIGNsZWFuLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=