webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/UserCard/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/UserCard/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _RepositoryList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RepositoryList */ "./src/components/RepositoryList/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/UserCard/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\next-boilerplate\\src\\components\\UserCard\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var UserCard = function UserCard(props) {
  _s();

  var user = props.user,
      repositories = props.repositories,
      isLoading = props.isLoading,
      handdleRepos = props.handdleRepos,
      handleStarred = props.handleStarred;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      listTitle = _useState[0],
      setListTitle = _useState[1];

  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: user.avatar_url,
    alt: "Avatar",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__loginText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, user.login)), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__infoText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Reposit\xF3rios p\xFAblicos: ", user.public_repos), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__infoText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Seguidores: ", user.followers)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__button,
    onClick: handdleRepos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Repos"), __jsx("button", {
    type: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__button,
    onClick: handleStarred,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Starred"))), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__listBox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, isLoading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 35,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }) : repositories && __jsx(_RepositoryList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    list: repositories,
    listTitle: listTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  })));
};

_s(UserCard, "z0cMR5zknU61JZcmSNo3/aHDSho=");

_c = UserCard;
/* harmony default export */ __webpack_exports__["default"] = (UserCard);

var _c;

$RefreshReg$(_c, "UserCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckNhcmQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlVzZXJDYXJkIiwicHJvcHMiLCJ1c2VyIiwicmVwb3NpdG9yaWVzIiwiaXNMb2FkaW5nIiwiaGFuZGRsZVJlcG9zIiwiaGFuZGxlU3RhcnJlZCIsInVzZVN0YXRlIiwibGlzdFRpdGxlIiwic2V0TGlzdFRpdGxlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiY29udGFpbmVyX19yb3ciLCJhdmF0YXJfdXJsIiwiY29udGFpbmVyX19pbWFnZSIsImNvbnRhaW5lcl9fbG9naW5UZXh0IiwibG9naW4iLCJjb250YWluZXJfX2luZm9UZXh0IiwicHVibGljX3JlcG9zIiwiZm9sbG93ZXJzIiwiY29udGFpbmVyX19idXR0b24iLCJjb250YWluZXJfX2xpc3RCb3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUEwQjtBQUFBOztBQUFBLE1BQ2pDQyxJQURpQyxHQUM4QkQsS0FEOUIsQ0FDakNDLElBRGlDO0FBQUEsTUFDM0JDLFlBRDJCLEdBQzhCRixLQUQ5QixDQUMzQkUsWUFEMkI7QUFBQSxNQUNiQyxTQURhLEdBQzhCSCxLQUQ5QixDQUNiRyxTQURhO0FBQUEsTUFDRkMsWUFERSxHQUM4QkosS0FEOUIsQ0FDRkksWUFERTtBQUFBLE1BQ1lDLGFBRFosR0FDOEJMLEtBRDlCLENBQ1lLLGFBRFo7O0FBQUEsa0JBRVBDLHNEQUFRLENBQVMsRUFBVCxDQUZEO0FBQUEsTUFFbENDLFNBRmtDO0FBQUEsTUFFdkJDLFlBRnVCOztBQUl6QyxTQUNFO0FBQUssYUFBUyxFQUFFQywwREFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELDBEQUFNLENBQUNFLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRVYsSUFBSSxDQUFDVyxVQURaO0FBRUUsT0FBRyxFQUFDLFFBRk47QUFHRSxhQUFTLEVBQUVILDBEQUFNLENBQUNJLGdCQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRTtBQUFHLGFBQVMsRUFBRUosMERBQU0sQ0FBQ0ssb0JBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNENiLElBQUksQ0FBQ2MsS0FBakQsQ0FORixDQURGLEVBU0U7QUFBSyxhQUFTLEVBQUVOLDBEQUFNLENBQUNFLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVGLDBEQUFNLENBQUNPLG1CQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUMwQmYsSUFBSSxDQUFDZ0IsWUFEL0IsQ0FERixFQUlFO0FBQUcsYUFBUyxFQUFFUiwwREFBTSxDQUFDTyxtQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDZWYsSUFBSSxDQUFDaUIsU0FEcEIsQ0FKRixDQURGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFTLEVBQUVULDBEQUFNLENBQUNVLGlCQUZwQjtBQUdFLFdBQU8sRUFBRWYsWUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFRRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFFSywwREFBTSxDQUFDVSxpQkFGcEI7QUFHRSxXQUFPLEVBQUVkLGFBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLENBVEYsQ0FURixFQW1DRTtBQUFLLGFBQVMsRUFBRUksMERBQU0sQ0FBQ1csa0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2pCLFNBQVMsR0FDUixNQUFDLDBFQUFEO0FBQWtCLFFBQUksRUFBRSxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFEsR0FHUkQsWUFBWSxJQUNWLE1BQUMsdURBQUQ7QUFBZ0IsUUFBSSxFQUFFQSxZQUF0QjtBQUFvQyxhQUFTLEVBQUVLLFNBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMTixDQW5DRixDQURGO0FBK0NELENBbkREOztHQUFNUixROztLQUFBQSxRO0FBcURTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYmYzYjFjYzBkNTcxNzczYWE4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUmVwb3NpdG9yeUxpc3QgZnJvbSAnLi4vUmVwb3NpdG9yeUxpc3QnO1xyXG5pbXBvcnQgeyBVc2VyQ2FyZFByb3BzIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBVc2VyQ2FyZCA9IChwcm9wczogVXNlckNhcmRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciwgcmVwb3NpdG9yaWVzLCBpc0xvYWRpbmcsIGhhbmRkbGVSZXBvcywgaGFuZGxlU3RhcnJlZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2xpc3RUaXRsZSwgc2V0TGlzdFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fcm93fT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e3VzZXIuYXZhdGFyX3VybH1cclxuICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2ltYWdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19sb2dpblRleHR9Pnt1c2VyLmxvZ2lufTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19yb3d9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2luZm9UZXh0fT5cclxuICAgICAgICAgICAgUmVwb3NpdMOzcmlvcyBww7pibGljb3M6IHt1c2VyLnB1YmxpY19yZXBvc31cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9faW5mb1RleHR9PlxyXG4gICAgICAgICAgICBTZWd1aWRvcmVzOiB7dXNlci5mb2xsb3dlcnN9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kZGxlUmVwb3N9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlcG9zXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdGFycmVkfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdGFycmVkXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19saXN0Qm94fT5cclxuICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MzV9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIHJlcG9zaXRvcmllcyAmJiAoXHJcbiAgICAgICAgICAgIDxSZXBvc2l0b3J5TGlzdCBsaXN0PXtyZXBvc2l0b3JpZXN9IGxpc3RUaXRsZT17bGlzdFRpdGxlfSAvPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9