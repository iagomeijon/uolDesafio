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
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var UserCard = function UserCard(props) {
  var user = props.user,
      repositories = props.repositories,
      isLoading = props.isLoading,
      handdleRepos = props.handdleRepos,
      handleStarred = props.handleStarred;
  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: user.avatar_url,
    alt: "Avatar",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__loginText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, user.login)), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__infoText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Reposit\xF3rios p\xFAblicos: ", user.public_repos), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__infoText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Seguidores: ", user.followers)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__button,
    onClick: handdleRepos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Repos"), __jsx("button", {
    type: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__button,
    onClick: handleStarred,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Starred"))), isLoading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 30,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }) : repositories && __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__listBox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(_RepositoryList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    list: repositories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  })));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckNhcmQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlVzZXJDYXJkIiwicHJvcHMiLCJ1c2VyIiwicmVwb3NpdG9yaWVzIiwiaXNMb2FkaW5nIiwiaGFuZGRsZVJlcG9zIiwiaGFuZGxlU3RhcnJlZCIsInN0eWxlcyIsImNvbnRhaW5lciIsImNvbnRhaW5lcl9fcm93IiwiYXZhdGFyX3VybCIsImNvbnRhaW5lcl9faW1hZ2UiLCJjb250YWluZXJfX2xvZ2luVGV4dCIsImxvZ2luIiwiY29udGFpbmVyX19pbmZvVGV4dCIsInB1YmxpY19yZXBvcyIsImZvbGxvd2VycyIsImNvbnRhaW5lcl9fYnV0dG9uIiwiY29udGFpbmVyX19saXN0Qm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBMEI7QUFBQSxNQUNqQ0MsSUFEaUMsR0FDOEJELEtBRDlCLENBQ2pDQyxJQURpQztBQUFBLE1BQzNCQyxZQUQyQixHQUM4QkYsS0FEOUIsQ0FDM0JFLFlBRDJCO0FBQUEsTUFDYkMsU0FEYSxHQUM4QkgsS0FEOUIsQ0FDYkcsU0FEYTtBQUFBLE1BQ0ZDLFlBREUsR0FDOEJKLEtBRDlCLENBQ0ZJLFlBREU7QUFBQSxNQUNZQyxhQURaLEdBQzhCTCxLQUQ5QixDQUNZSyxhQURaO0FBR3pDLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLDBEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsMERBQU0sQ0FBQ0UsY0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFFUCxJQUFJLENBQUNRLFVBRFo7QUFFRSxPQUFHLEVBQUMsUUFGTjtBQUdFLGFBQVMsRUFBRUgsMERBQU0sQ0FBQ0ksZ0JBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQUcsYUFBUyxFQUFFSiwwREFBTSxDQUFDSyxvQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0Q1YsSUFBSSxDQUFDVyxLQUFqRCxDQU5GLENBREYsRUFTRTtBQUFLLGFBQVMsRUFBRU4sMERBQU0sQ0FBQ0UsY0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUYsMERBQU0sQ0FBQ08sbUJBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBQzBCWixJQUFJLENBQUNhLFlBRC9CLENBREYsRUFJRTtBQUFHLGFBQVMsRUFBRVIsMERBQU0sQ0FBQ08sbUJBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2VaLElBQUksQ0FBQ2MsU0FEcEIsQ0FKRixDQURGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFTLEVBQUVULDBEQUFNLENBQUNVLGlCQUZwQjtBQUdFLFdBQU8sRUFBRVosWUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFRRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFFRSwwREFBTSxDQUFDVSxpQkFGcEI7QUFHRSxXQUFPLEVBQUVYLGFBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLENBVEYsQ0FURixFQW1DR0YsU0FBUyxHQUNSLE1BQUMsMEVBQUQ7QUFBa0IsUUFBSSxFQUFFLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEUSxHQUdSRCxZQUFZLElBQ1Y7QUFBSyxhQUFTLEVBQUVJLDBEQUFNLENBQUNXLGtCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFnQixRQUFJLEVBQUVmLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXZDTixDQURGO0FBK0NELENBbEREOztLQUFNSCxRO0FBb0RTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41OGViYjZmOWFkMzA2ZjY5YmMyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBSZXBvc2l0b3J5TGlzdCBmcm9tICcuLi9SZXBvc2l0b3J5TGlzdCc7XHJcbmltcG9ydCB7IFVzZXJDYXJkUHJvcHMgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IFVzZXJDYXJkID0gKHByb3BzOiBVc2VyQ2FyZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyLCByZXBvc2l0b3JpZXMsIGlzTG9hZGluZywgaGFuZGRsZVJlcG9zLCBoYW5kbGVTdGFycmVkIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3Jvd30+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXt1c2VyLmF2YXRhcl91cmx9XHJcbiAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19pbWFnZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fbG9naW5UZXh0fT57dXNlci5sb2dpbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fcm93fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19pbmZvVGV4dH0+XHJcbiAgICAgICAgICAgIFJlcG9zaXTDs3Jpb3MgcMO6YmxpY29zOiB7dXNlci5wdWJsaWNfcmVwb3N9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2luZm9UZXh0fT5cclxuICAgICAgICAgICAgU2VndWlkb3Jlczoge3VzZXIuZm9sbG93ZXJzfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGRsZVJlcG9zfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBSZXBvc1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3RhcnJlZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3RhcnJlZFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezMwfSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIHJlcG9zaXRvcmllcyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fbGlzdEJveH0+XHJcbiAgICAgICAgICAgIDxSZXBvc2l0b3J5TGlzdCBsaXN0PXtyZXBvc2l0b3JpZXN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=