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
    _getCarList = (0,C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_imachado_Desktop_Develop_projects_uolDesafio_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(modelo) {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvcmUvaG9va3MvdXNlQ2Fyc0FwaS9pbmRleC50c3giXSwibmFtZXMiOlsidXNlQ2Fyc0FwaSIsInVzZVN0YXRlIiwiY2Fyc0xpc3QiLCJzZXRDYXJzTGlzdCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNsZWFuIiwiZ2V0Q2FyTGlzdCIsIm1vZGVsbyIsImF4aW9zIiwicmVzIiwiZGF0YSIsInN0YXRlIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBQ0hDLCtDQUFRLENBQVEsRUFBUixDQURMO0FBQUEsTUFDNUJDLFFBRDRCO0FBQUEsTUFDbEJDLFdBRGtCOztBQUFBLG1CQUVERiwrQ0FBUSxDQUFVLEtBQVYsQ0FGUDtBQUFBLE1BRTVCRyxTQUY0QjtBQUFBLE1BRWpCQyxZQUZpQjs7QUFJbkMsV0FBU0MsS0FBVCxHQUF1QjtBQUNyQkgsZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBRSxnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNEOztBQVBrQyxXQVNwQkUsVUFUb0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsb1hBU25DLGlCQUEwQkMsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VGLG1CQUFLO0FBQ0xELDBCQUFZLENBQUMsSUFBRCxDQUFaO0FBRkY7QUFBQTtBQUFBLHFCQUlzQkksZ0RBQUEsa0RBSnRCOztBQUFBO0FBSVVDLGlCQUpWO0FBT0lQLHlCQUFXLENBQUNPLEdBQUcsQ0FBQ0MsSUFBTCxDQUFYOztBQVBKO0FBQUE7QUFTSU4sMEJBQVksQ0FBQyxLQUFELENBQVo7QUFUSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVRtQztBQUFBO0FBQUE7O0FBc0JuQyxTQUFPO0FBQ0xPLFNBQUssRUFBRTtBQUNMVixjQUFRLEVBQVJBLFFBREs7QUFFTEUsZUFBUyxFQUFUQTtBQUZLLEtBREY7QUFLTFMsV0FBTyxFQUFFO0FBQ1BOLGdCQUFVLEVBQVZBLFVBRE87QUFFUEQsV0FBSyxFQUFMQTtBQUZPO0FBTEosR0FBUDtBQVVEOztHQWhDdUJOLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjI2M2Q2YzY4MWM3YTk2YTBhZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1BUks6IExpYnNcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDYXJzQXBpKCkge1xyXG4gIGNvbnN0IFtjYXJzTGlzdCwgc2V0Q2Fyc0xpc3RdID0gdXNlU3RhdGU8Q2FyW10+KFtdKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBjbGVhbigpOiB2b2lkIHtcclxuICAgIHNldENhcnNMaXN0KFtdKTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRDYXJMaXN0KG1vZGVsbzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjbGVhbigpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0PENhcltdPihcclxuICAgICAgICBgaHR0cHM6Ly9zcHJpbnQtY2Fycy5oZXJva3VhcHAuY29tL2FwaS92MS90ZXN0ZWAsXHJcbiAgICAgICk7XHJcbiAgICAgIHNldENhcnNMaXN0KHJlcy5kYXRhKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RhdGU6IHtcclxuICAgICAgY2Fyc0xpc3QsXHJcbiAgICAgIGlzTG9hZGluZyxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIGdldENhckxpc3QsXHJcbiAgICAgIGNsZWFuLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=