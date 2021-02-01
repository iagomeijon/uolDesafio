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
      loadingRepositores = _useState5[0],
      setLoadingRepositories = _useState5[1];

  function getUser(_x) {
    return _getUser.apply(this, arguments);
  }

  function _getUser() {
    _getUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userSearch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading(true);
              setuUserNotFound(false);
              setUser(null);
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://api.github.com/users/".concat(userSearch)).then(function (res) {
                setUser(res.data);
              })["catch"](function (err) {
                return setuUserNotFound(true);
              })["finally"](function () {
                return setIsLoading(false);
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
              setLoadingRepositories(true);

              if (!user) {
                _context2.next = 4;
                break;
              }

              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://api.github.com/users/".concat(user.login, "/repos")).then(function (res) {
                setRepositories(res.data);
              })["catch"]()["finally"](function () {
                return setLoadingRepositories(false);
              });

            case 4:
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
    setRepositories(null);
    setUser(null);
  }

  return {
    state: {
      isLoading: isLoading,
      user: user,
      userNotFound: userNotFound,
      repositories: repositories,
      loadingRepositores: loadingRepositores
    },
    actions: {
      getUser: getUser,
      getRepositoriesList: getRepositoriesList,
      clean: clean
    }
  };
}

_s(useGitHub, "Mc5ZFrIfmlSXK3WBL3Ds7ZPOo94=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvcmUvaG9va3MvdXNlR2l0SHViL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VHaXRIdWIiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZXIiLCJzZXRVc2VyIiwidXNlck5vdEZvdW5kIiwic2V0dVVzZXJOb3RGb3VuZCIsInJlcG9zaXRvcmllcyIsInNldFJlcG9zaXRvcmllcyIsImxvYWRpbmdSZXBvc2l0b3JlcyIsInNldExvYWRpbmdSZXBvc2l0b3JpZXMiLCJnZXRVc2VyIiwidXNlclNlYXJjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJnZXRSZXBvcyIsImxvZ2luIiwiY2xlYW4iLCJzdGF0ZSIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQVUsS0FBVixDQURSO0FBQUEsTUFDM0JDLFNBRDJCO0FBQUEsTUFDaEJDLFlBRGdCOztBQUFBLG1CQUVWRixzREFBUSxDQUFjLElBQWQsQ0FGRTtBQUFBLE1BRTNCRyxJQUYyQjtBQUFBLE1BRXJCQyxPQUZxQjs7QUFBQSxtQkFHT0osc0RBQVEsQ0FBVSxLQUFWLENBSGY7QUFBQSxNQUczQkssWUFIMkI7QUFBQSxNQUdiQyxnQkFIYTs7QUFBQSxtQkFJTU4sc0RBQVEsQ0FBc0IsSUFBdEIsQ0FKZDtBQUFBLE1BSTNCTyxZQUoyQjtBQUFBLE1BSWJDLGVBSmE7O0FBQUEsbUJBS21CUixzREFBUSxDQUFVLEtBQVYsQ0FMM0I7QUFBQSxNQUszQlMsa0JBTDJCO0FBQUEsTUFLUEMsc0JBTE87O0FBQUEsV0FPbkJDLE9BUG1CO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdNQU9sQyxpQkFBdUJDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRVYsMEJBQVksQ0FBQyxJQUFELENBQVo7QUFDQUksOEJBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNBRixxQkFBTyxDQUFDLElBQUQsQ0FBUDtBQUhGO0FBQUEscUJBSVFTLDRDQUFLLENBQ1JDLEdBREcsd0NBQ3VDRixVQUR2QyxHQUVIRyxJQUZHLENBRUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JaLHVCQUFPLENBQUNZLEdBQUcsQ0FBQ0MsSUFBTCxDQUFQO0FBQ0QsZUFKRyxXQUtHLFVBQUNDLEdBQUQ7QUFBQSx1QkFBU1osZ0JBQWdCLENBQUMsSUFBRCxDQUF6QjtBQUFBLGVBTEgsYUFNSztBQUFBLHVCQUFNSixZQUFZLENBQUMsS0FBRCxDQUFsQjtBQUFBLGVBTkwsQ0FKUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVBrQztBQUFBO0FBQUE7O0FBQUEsV0FvQm5CaUIsUUFwQm1CO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlNQW9CbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFVCxvQ0FBc0IsQ0FBQyxJQUFELENBQXRCOztBQURGLG1CQUVNUCxJQUZOO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBR1VVLDRDQUFLLENBQ1JDLEdBREcsd0NBQ2lDWCxJQUFJLENBQUNpQixLQUR0QyxhQUVITCxJQUZHLENBRUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JSLCtCQUFlLENBQUNRLEdBQUcsQ0FBQ0MsSUFBTCxDQUFmO0FBQ0QsZUFKRyx3QkFNSztBQUFBLHVCQUFNUCxzQkFBc0IsQ0FBQyxLQUFELENBQTVCO0FBQUEsZUFOTCxDQUhWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBcEJrQztBQUFBO0FBQUE7O0FBaUNsQyxXQUFTVyxLQUFULEdBQXVCO0FBQ3JCZixvQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0FKLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FNLG1CQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FKLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDRDs7QUFFRCxTQUFPO0FBQ0xrQixTQUFLLEVBQUU7QUFDTHJCLGVBQVMsRUFBVEEsU0FESztBQUVMRSxVQUFJLEVBQUpBLElBRks7QUFHTEUsa0JBQVksRUFBWkEsWUFISztBQUlMRSxrQkFBWSxFQUFaQSxZQUpLO0FBS0xFLHdCQUFrQixFQUFsQkE7QUFMSyxLQURGO0FBUUxjLFdBQU8sRUFBRTtBQUNQWixhQUFPLEVBQVBBLE9BRE87QUFFUFEsY0FBUSxFQUFSQSxRQUZPO0FBR1BFLFdBQUssRUFBTEE7QUFITztBQVJKLEdBQVA7QUFjRDs7R0F0RHVCdEIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNTg0YmUyMGMzNTEyMzM4ZTRkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFVzZXIsIFJlcG9zaXRvcnkgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VHaXRIdWIoKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3VzZXJOb3RGb3VuZCwgc2V0dVVzZXJOb3RGb3VuZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3JlcG9zaXRvcmllcywgc2V0UmVwb3NpdG9yaWVzXSA9IHVzZVN0YXRlPFJlcG9zaXRvcnlbXSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nUmVwb3NpdG9yZXMsIHNldExvYWRpbmdSZXBvc2l0b3JpZXNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHVzZXJTZWFyY2g6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0dVVzZXJOb3RGb3VuZChmYWxzZSk7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgYXdhaXQgYXhpb3NcclxuICAgICAgLmdldDxVc2VyPihgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJTZWFyY2h9YClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldFVzZXIocmVzLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gc2V0dVVzZXJOb3RGb3VuZCh0cnVlKSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0SXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRSZXBvcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHNldExvYWRpbmdSZXBvc2l0b3JpZXModHJ1ZSk7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyLmxvZ2lufS9yZXBvc2ApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgc2V0UmVwb3NpdG9yaWVzKHJlcy5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgpXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZ1JlcG9zaXRvcmllcyhmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYW4oKTogdm9pZCB7XHJcbiAgICBzZXR1VXNlck5vdEZvdW5kKGZhbHNlKTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICBzZXRSZXBvc2l0b3JpZXMobnVsbCk7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIGlzTG9hZGluZyxcclxuICAgICAgdXNlcixcclxuICAgICAgdXNlck5vdEZvdW5kLFxyXG4gICAgICByZXBvc2l0b3JpZXMsXHJcbiAgICAgIGxvYWRpbmdSZXBvc2l0b3JlcyxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIGdldFVzZXIsXHJcbiAgICAgIGdldFJlcG9zLFxyXG4gICAgICBjbGVhbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9