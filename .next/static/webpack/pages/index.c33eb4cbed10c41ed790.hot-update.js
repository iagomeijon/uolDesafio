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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvcmUvaG9va3MvdXNlR2l0SHViL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VHaXRIdWIiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZXIiLCJzZXRVc2VyIiwidXNlck5vdEZvdW5kIiwic2V0dVVzZXJOb3RGb3VuZCIsInJlcG9zaXRvcmllcyIsInNldFJlcG9zaXRvcmllcyIsImxvYWRpbmdTZWFyY2giLCJzZXRMb2FkaW5nU2VhcmNoIiwiZ2V0VXNlciIsInVzZXJTZWFyY2giLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwiZ2V0UmVwb3MiLCJsb2dpbiIsImNsZWFuIiwic3RhdGUiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR2UsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUNBQyxzREFBUSxDQUFVLEtBQVYsQ0FEUjtBQUFBLE1BQzNCQyxTQUQyQjtBQUFBLE1BQ2hCQyxZQURnQjs7QUFBQSxtQkFFVkYsc0RBQVEsQ0FBYyxJQUFkLENBRkU7QUFBQSxNQUUzQkcsSUFGMkI7QUFBQSxNQUVyQkMsT0FGcUI7O0FBQUEsbUJBR09KLHNEQUFRLENBQVUsS0FBVixDQUhmO0FBQUEsTUFHM0JLLFlBSDJCO0FBQUEsTUFHYkMsZ0JBSGE7O0FBQUEsbUJBSU1OLHNEQUFRLENBQXNCLElBQXRCLENBSmQ7QUFBQSxNQUkzQk8sWUFKMkI7QUFBQSxNQUliQyxlQUphOztBQUFBLG1CQUtRUixzREFBUSxDQUFVLEtBQVYsQ0FMaEI7QUFBQSxNQUszQlMsYUFMMkI7QUFBQSxNQUtaQyxnQkFMWTs7QUFBQSxXQU9uQkMsT0FQbUI7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ01BT2xDLGlCQUF1QkMsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFRiw4QkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0FKLDhCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDQUYscUJBQU8sQ0FBQyxJQUFELENBQVA7QUFIRjtBQUFBLHFCQUlRUyw0Q0FBSyxDQUNSQyxHQURHLHdDQUN1Q0YsVUFEdkMsR0FFSEcsSUFGRyxDQUVFLFVBQUNDLEdBQUQsRUFBUztBQUNiWix1QkFBTyxDQUFDWSxHQUFHLENBQUNDLElBQUwsQ0FBUDtBQUNELGVBSkcsV0FLRyxVQUFDQyxHQUFEO0FBQUEsdUJBQVNaLGdCQUFnQixDQUFDLElBQUQsQ0FBekI7QUFBQSxlQUxILGFBTUs7QUFBQSx1QkFBTUksZ0JBQWdCLENBQUMsS0FBRCxDQUF0QjtBQUFBLGVBTkwsQ0FKUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVBrQztBQUFBO0FBQUE7O0FBQUEsV0FvQm5CUyxRQXBCbUI7QUFBQTtBQUFBOztBQUFBO0FBQUEsaU1Bb0JsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VqQiwwQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBTSw2QkFBZSxDQUFDLElBQUQsQ0FBZjs7QUFGRixtQkFHTUwsSUFITjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUlVVSw0Q0FBSyxDQUNSQyxHQURHLHdDQUNpQ1gsSUFBSSxDQUFDaUIsS0FEdEMsYUFFSEwsSUFGRyxDQUVFLFVBQUNDLEdBQUQsRUFBUztBQUNiUiwrQkFBZSxDQUFDUSxHQUFHLENBQUNDLElBQUwsQ0FBZjtBQUNELGVBSkcsd0JBTUs7QUFBQSx1QkFBTWYsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxlQU5MLENBSlY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FwQmtDO0FBQUE7QUFBQTs7QUFrQ2xDLFdBQVNtQixLQUFULEdBQXVCO0FBQ3JCZixvQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0FKLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FRLG9CQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDQUYsbUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDQUosV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNEOztBQUVELFNBQU87QUFDTGtCLFNBQUssRUFBRTtBQUNMckIsZUFBUyxFQUFUQSxTQURLO0FBRUxFLFVBQUksRUFBSkEsSUFGSztBQUdMRSxrQkFBWSxFQUFaQSxZQUhLO0FBSUxFLGtCQUFZLEVBQVpBLFlBSks7QUFLTEUsbUJBQWEsRUFBYkE7QUFMSyxLQURGO0FBUUxjLFdBQU8sRUFBRTtBQUNQWixhQUFPLEVBQVBBLE9BRE87QUFFUFEsY0FBUSxFQUFSQSxRQUZPO0FBR1BFLFdBQUssRUFBTEE7QUFITztBQVJKLEdBQVA7QUFjRDs7R0F4RHVCdEIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMzNlYjRjYmVkMTBjNDFlZDc5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFVzZXIsIFJlcG9zaXRvcnkgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VHaXRIdWIoKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3VzZXJOb3RGb3VuZCwgc2V0dVVzZXJOb3RGb3VuZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3JlcG9zaXRvcmllcywgc2V0UmVwb3NpdG9yaWVzXSA9IHVzZVN0YXRlPFJlcG9zaXRvcnlbXSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nU2VhcmNoLCBzZXRMb2FkaW5nU2VhcmNoXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcih1c2VyU2VhcmNoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHNldExvYWRpbmdTZWFyY2godHJ1ZSk7XHJcbiAgICBzZXR1VXNlck5vdEZvdW5kKGZhbHNlKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICBhd2FpdCBheGlvc1xyXG4gICAgICAuZ2V0PFVzZXI+KGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlclNlYXJjaH1gKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcihyZXMuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBzZXR1VXNlck5vdEZvdW5kKHRydWUpKVxyXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRMb2FkaW5nU2VhcmNoKGZhbHNlKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRSZXBvcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIHNldFJlcG9zaXRvcmllcyhudWxsKTtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXIubG9naW59L3JlcG9zYClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBzZXRSZXBvc2l0b3JpZXMocmVzLmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKClcclxuICAgICAgICAuZmluYWxseSgoKSA9PiBzZXRJc0xvYWRpbmcoZmFsc2UpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFuKCk6IHZvaWQge1xyXG4gICAgc2V0dVVzZXJOb3RGb3VuZChmYWxzZSk7XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgc2V0TG9hZGluZ1NlYXJjaChmYWxzZSk7XHJcbiAgICBzZXRSZXBvc2l0b3JpZXMobnVsbCk7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIGlzTG9hZGluZyxcclxuICAgICAgdXNlcixcclxuICAgICAgdXNlck5vdEZvdW5kLFxyXG4gICAgICByZXBvc2l0b3JpZXMsXHJcbiAgICAgIGxvYWRpbmdTZWFyY2gsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICBnZXRVc2VyLFxyXG4gICAgICBnZXRSZXBvcyxcclxuICAgICAgY2xlYW4sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==