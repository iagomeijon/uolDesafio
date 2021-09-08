exports.id = "src_core_contexts_GitHubContext_index_tsx";
exports.ids = ["src_core_contexts_GitHubContext_index_tsx"];
exports.modules = {

/***/ "./src/core/contexts/GitHubContext/index.tsx":
/*!***************************************************!*\
  !*** ./src/core/contexts/GitHubContext/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GitHubProvider": function() { return /* binding */ GitHubProvider; },
/* harmony export */   "useGitHubContext": function() { return /* binding */ useGitHubContext; }
/* harmony export */ });
/* harmony import */ var C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_hooks_useGitHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/hooks/useGitHub */ "./src/core/hooks/useGitHub/index.tsx");


var _jsxFileName = "C:\\Users\\imachado\\Desktop\\Develop\\projects\\uolDesafio\\src\\core\\contexts\\GitHubContext\\index.tsx",
    _this = undefined;


var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);
// MARK: Libs
 // MARK: Hooks

 // MARK: Interfaces

var GitHubContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});

function useGitHubContext() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GitHubContext);

  if (!context) {
    throw new Error('useUser must be used within an UserProvider.');
  }

  return context;
}

var GitHubProvider = function GitHubProvider(props) {
  var children = props.children;

  var _useGitHub = (0,_core_hooks_useGitHub__WEBPACK_IMPORTED_MODULE_2__.default)(),
      actions = _useGitHub.actions,
      state = _useGitHub.state;

  function getUser(userSearch) {
    actions.getUser(userSearch);
  }

  function getRepositoriesList() {
    actions.getRepositoriesList();
  }

  function getStarredList() {
    actions.getStarredList();
  }

  return __jsx(GitHubContext.Provider, (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
    value: {
      hasUserNotFound: state.hasUserNotFound,
      isLoading: state.isLoading,
      isLoadingSearch: state.isLoadingSearch,
      repositories: state.repositories,
      user: state.user,
      getUser: getUser,
      getRepositoriesList: getRepositoriesList,
      getStarredList: getStarredList
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "__self", _this), children);
};



/***/ }),

/***/ "./src/core/hooks/useGitHub/index.tsx":
/*!********************************************!*\
  !*** ./src/core/hooks/useGitHub/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useGitHub; }
/* harmony export */ });
/* harmony import */ var C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


// MARK: Libs


function useGitHub() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      repositories = _useState2[0],
      setRepositories = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      hasUserNotFound = _useState3[0],
      setHasUserNotFound = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isLoadingSearch = _useState5[0],
      setIsLoadingSearch = _useState5[1];

  function clean() {
    setHasUserNotFound(false);
    setIsLoading(false);
    setIsLoadingSearch(false);
    setRepositories(null);
    setUser(null);
  }

  function getUser(_x) {
    return _getUser.apply(this, arguments);
  }

  function _getUser() {
    _getUser = (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(userSearch) {
      var res;
      return C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              clean();
              setIsLoadingSearch(true);
              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://api.github.com/users/".concat(userSearch));

            case 5:
              res = _context.sent;
              setUser(res.data);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              setHasUserNotFound(true);

            case 12:
              _context.prev = 12;
              setIsLoadingSearch(false);
              return _context.finish(12);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9, 12, 15]]);
    }));
    return _getUser.apply(this, arguments);
  }

  function getRepositoriesList() {
    return _getRepositoriesList.apply(this, arguments);
  }

  function _getRepositoriesList() {
    _getRepositoriesList = (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var res;
      return C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setRepositories(null);
              setIsLoading(true);

              if (!user) {
                _context2.next = 11;
                break;
              }

              _context2.prev = 3;
              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://api.github.com/users/".concat(user.login, "/repos"));

            case 6:
              res = _context2.sent;
              setRepositories(res.data);

            case 8:
              _context2.prev = 8;
              setIsLoading(false);
              return _context2.finish(8);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3,, 8, 11]]);
    }));
    return _getRepositoriesList.apply(this, arguments);
  }

  function getStarredList() {
    return _getStarredList.apply(this, arguments);
  }

  function _getStarredList() {
    _getStarredList = (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      var res;
      return C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setRepositories(null);
              setIsLoading(true);

              if (!user) {
                _context3.next = 11;
                break;
              }

              _context3.prev = 3;
              _context3.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://api.github.com/users/".concat(user.login, "/starred"));

            case 6:
              res = _context3.sent;
              setRepositories(res.data);

            case 8:
              _context3.prev = 8;
              setIsLoading(false);
              return _context3.finish(8);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3,, 8, 11]]);
    }));
    return _getStarredList.apply(this, arguments);
  }

  return {
    state: {
      isLoading: isLoading,
      user: user,
      hasUserNotFound: hasUserNotFound,
      repositories: repositories,
      isLoadingSearch: isLoadingSearch
    },
    actions: {
      getUser: getUser,
      getRepositoriesList: getRepositoriesList,
      getStarredList: getStarredList,
      clean: clean
    }
  };
}

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9VT0wvLi9zcmMvY29yZS9jb250ZXh0cy9HaXRIdWJDb250ZXh0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9VT0wvLi9zcmMvY29yZS9ob29rcy91c2VHaXRIdWIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkdpdEh1YkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlR2l0SHViQ29udGV4dCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXJyb3IiLCJHaXRIdWJQcm92aWRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJ1c2VHaXRIdWIiLCJhY3Rpb25zIiwic3RhdGUiLCJnZXRVc2VyIiwidXNlclNlYXJjaCIsImdldFJlcG9zaXRvcmllc0xpc3QiLCJnZXRTdGFycmVkTGlzdCIsImhhc1VzZXJOb3RGb3VuZCIsImlzTG9hZGluZyIsImlzTG9hZGluZ1NlYXJjaCIsInJlcG9zaXRvcmllcyIsInVzZXIiLCJ1c2VTdGF0ZSIsInNldFVzZXIiLCJzZXRSZXBvc2l0b3JpZXMiLCJzZXRIYXNVc2VyTm90Rm91bmQiLCJzZXRJc0xvYWRpbmciLCJzZXRJc0xvYWRpbmdTZWFyY2giLCJjbGVhbiIsImF4aW9zIiwicmVzIiwiZGF0YSIsImxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztBQUdBLElBQU1BLGFBQWEsZ0JBQUdDLG9EQUFhLENBQ2pDLEVBRGlDLENBQW5DOztBQUlBLFNBQVNDLGdCQUFULEdBQW9EO0FBQ2xELE1BQU1DLE9BQU8sR0FBR0MsaURBQVUsQ0FBQ0osYUFBRCxDQUExQjs7QUFDQSxNQUFJLENBQUNHLE9BQUwsRUFBYztBQUNaLFVBQU0sSUFBSUUsS0FBSixDQUFVLDhDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRixPQUFQO0FBQ0Q7O0FBRUQsSUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQXlCO0FBQzlDLE1BQVFDLFFBQVIsR0FBcUJE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dGVudCI6WyIvLyBNQVJLOiBMaWJzXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbi8vIE1BUks6IEhvb2tzXHJcbmltcG9ydCB1c2VHaXRIdWIgZnJvbSAnQGNvcmUvaG9va3MvdXNlR2l0SHViJztcclxuLy8gTUFSSzogSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBHaXRIdWJDb250ZXh0SW50ZXJmYWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbmNvbnN0IEdpdEh1YkNvbnRleHQgPSBjcmVhdGVDb250ZXh0PEdpdEh1YkNvbnRleHRJbnRlcmZhY2U+KFxyXG4gIHt9IGFzIEdpdEh1YkNvbnRleHRJbnRlcmZhY2UsXHJcbik7XHJcblxyXG5mdW5jdGlvbiB1c2VHaXRIdWJDb250ZXh0KCk6IEdpdEh1YkNvbnRleHRJbnRlcmZhY2Uge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEdpdEh1YkNvbnRleHQpO1xyXG4gIGlmICghY29udGV4dCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VVc2VyIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gVXNlclByb3ZpZGVyLicpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufVxyXG5cclxuY29uc3QgR2l0SHViUHJvdmlkZXIgPSAocHJvcHM6IHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgYWN0aW9ucywgc3RhdGUgfSA9IHVzZUdpdEh1YigpO1xyXG5cclxuICBmdW5jdGlvbiBnZXRVc2VyKHVzZXJTZWFyY2g6IHN0cmluZykge1xyXG4gICAgYWN0aW9ucy5nZXRVc2VyKHVzZXJTZWFyY2gpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0UmVwb3NpdG9yaWVzTGlzdCgpIHtcclxuICAgIGFjdGlvbnMuZ2V0UmVwb3NpdG9yaWVzTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0U3RhcnJlZExpc3QoKSB7XHJcbiAgICBhY3Rpb25zLmdldFN0YXJyZWRMaXN0KCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdpdEh1YkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBoYXNVc2VyTm90Rm91bmQ6IHN0YXRlLmhhc1VzZXJOb3RGb3VuZCxcclxuICAgICAgICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZyxcclxuICAgICAgICBpc0xvYWRpbmdTZWFyY2g6IHN0YXRlLmlzTG9hZGluZ1NlYXJjaCxcclxuICAgICAgICByZXBvc2l0b3JpZXM6IHN0YXRlLnJlcG9zaXRvcmllcyxcclxuICAgICAgICB1c2VyOiBzdGF0ZS51c2VyLFxyXG4gICAgICAgIGdldFVzZXIsXHJcbiAgICAgICAgZ2V0UmVwb3NpdG9yaWVzTGlzdCxcclxuICAgICAgICBnZXRTdGFycmVkTGlzdCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9HaXRIdWJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBHaXRIdWJQcm92aWRlciwgdXNlR2l0SHViQ29udGV4dCB9O1xyXG4iLCIvLyBNQVJLOiBMaWJzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlR2l0SHViKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbcmVwb3NpdG9yaWVzLCBzZXRSZXBvc2l0b3JpZXNdID0gdXNlU3RhdGU8UmVwb3NpdG9yeVtdIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2hhc1VzZXJOb3RGb3VuZCwgc2V0SGFzVXNlck5vdEZvdW5kXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmdTZWFyY2gsIHNldElzTG9hZGluZ1NlYXJjaF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFuKCk6IHZvaWQge1xyXG4gICAgc2V0SGFzVXNlck5vdEZvdW5kKGZhbHNlKTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICBzZXRJc0xvYWRpbmdTZWFyY2goZmFsc2UpO1xyXG4gICAgc2V0UmVwb3NpdG9yaWVzKG51bGwpO1xyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIodXNlclNlYXJjaDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjbGVhbigpO1xyXG4gICAgc2V0SXNMb2FkaW5nU2VhcmNoKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0PFVzZXI+KFxyXG4gICAgICAgIGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlclNlYXJjaH1gLFxyXG4gICAgICApO1xyXG4gICAgICBzZXRVc2VyKHJlcy5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRIYXNVc2VyTm90Rm91bmQodHJ1ZSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc0xvYWRpbmdTZWFyY2goZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UmVwb3NpdG9yaWVzTGlzdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHNldFJlcG9zaXRvcmllcyhudWxsKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyLmxvZ2lufS9yZXBvc2AsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRSZXBvc2l0b3JpZXMocmVzLmRhdGEpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFN0YXJyZWRMaXN0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgc2V0UmVwb3NpdG9yaWVzKG51bGwpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXIubG9naW59L3N0YXJyZWRgLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0UmVwb3NpdG9yaWVzKHJlcy5kYXRhKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RhdGU6IHtcclxuICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICB1c2VyLFxyXG4gICAgICBoYXNVc2VyTm90Rm91bmQsXHJcbiAgICAgIHJlcG9zaXRvcmllcyxcclxuICAgICAgaXNMb2FkaW5nU2VhcmNoLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgZ2V0VXNlcixcclxuICAgICAgZ2V0UmVwb3NpdG9yaWVzTGlzdCxcclxuICAgICAgZ2V0U3RhcnJlZExpc3QsXHJcbiAgICAgIGNsZWFuLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=