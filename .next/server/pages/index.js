module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Loading/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Loading/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Loading/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\next-boilerplate\\src\\components\\Loading\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Loading = () => {
  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Buscando ..."));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/components/Loading/styles.module.scss":
/*!***************************************************!*\
  !*** ./src/components/Loading/styles.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "styles_container__3RRl-"
};


/***/ }),

/***/ "./src/components/RepositoryList/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/RepositoryList/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/RepositoryList/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\next-boilerplate\\src\\components\\RepositoryList\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RepositoryList = props => {
  const {
    list
  } = props;
  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container__title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Repositorios:"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, list.map((_repository, index) => {
    return __jsx("a", {
      key: index,
      href: _repository.html_url,
      target: "_blank",
      rel: "noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }
    }, _repository.name));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RepositoryList);

/***/ }),

/***/ "./src/components/RepositoryList/styles.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/RepositoryList/styles.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container__title": "styles_container__title__3q86t"
};


/***/ }),

/***/ "./src/components/SearchBar/index.tsx":
/*!********************************************!*\
  !*** ./src/components/SearchBar/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/SearchBar/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\next-boilerplate\\src\\components\\SearchBar\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const searchBar = props => {
  const {
    getSearch
  } = props;
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const handleInput = event => {
    setSearchText(event.target.value);
  };

  const handleSubmit = () => {
    getSearch(searchText);
  };

  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("input", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container__input,
    onChange: handleInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("button", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container__button,
    type: "submit",
    onClick: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Buscar"));
};

/* harmony default export */ __webpack_exports__["default"] = (searchBar);

/***/ }),

/***/ "./src/components/SearchBar/styles.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/SearchBar/styles.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "styles_container__19lRN",
	"container__input": "styles_container__input__222SP",
	"container__button": "styles_container__button__NFhwe"
};


/***/ }),

/***/ "./src/components/UserCard/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/UserCard/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RepositoryList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../RepositoryList */ "./src/components/RepositoryList/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/UserCard/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\next-boilerplate\\src\\components\\UserCard\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const UserCard = props => {
  const {
    user,
    repositories,
    handdleRepos,
    handleStarred
  } = props;
  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__row,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: user.avatar_url,
    alt: "Avatar",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__loginText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, user.login)), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__row,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__infoText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Reposit\xF3rios p\xFAblicos: ", user.public_repos), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__infoText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Seguidores: ", user.followers)), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__button,
    onClick: handdleRepos,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Repos"), __jsx("button", {
    type: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__button,
    onClick: handleStarred,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Starred"))), repositories && __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__listBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(_RepositoryList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    list: repositories,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UserCard);

/***/ }),

/***/ "./src/components/UserCard/styles.module.scss":
/*!****************************************************!*\
  !*** ./src/components/UserCard/styles.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "styles_container__O-Fmy",
	"container__row": "styles_container__row__2bH7x",
	"container__listBox": "styles_container__listBox__2WlCv",
	"container__loginText": "styles_container__loginText__2cUL3",
	"container__infoText": "styles_container__infoText__1cd6Z",
	"container__image": "styles_container__image__1H4xA",
	"container__button": "styles_container__button__3uqo2"
};


/***/ }),

/***/ "./src/components/UserNotFound/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/UserNotFound/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/UserNotFound/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\next-boilerplate\\src\\components\\UserNotFound\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const UserCard = () => {
  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container__text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Usu\xE1rio N\xE3o encontrado :( "));
};

/* harmony default export */ __webpack_exports__["default"] = (UserCard);

/***/ }),

/***/ "./src/components/UserNotFound/styles.module.scss":
/*!********************************************************!*\
  !*** ./src/components/UserNotFound/styles.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "styles_container__eT0Gi",
	"container__text": "styles_container__text__2_dhK"
};


/***/ }),

/***/ "./src/core/hooks/useGitHub/index.tsx":
/*!********************************************!*\
  !*** ./src/core/hooks/useGitHub/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGitHub; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function useGitHub() {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: userNotFound,
    1: setuUserNotFound
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: repositories,
    1: setRepositories
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  async function getUser(userSearch) {
    setIsLoading(true);
    setuUserNotFound(false);
    setUser(null);
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://api.github.com/users/${userSearch}`).then(res => {
      setUser(res.data);
    }).catch(err => setuUserNotFound(true)).finally(() => setIsLoading(false));
  }

  async function getRepos() {
    setIsLoading(true);

    if (user) {
      await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://api.github.com/users/${user.login}/repos`).then(res => {
        setRepositories(res.data);
      }).catch().finally(() => setIsLoading(false));
    }
  }

  function clean() {
    setuUserNotFound(false);
    setIsLoading(false);
    setRepositories(null);
    setUser(null);
  }

  return {
    state: {
      isLoading,
      user,
      userNotFound,
      repositories
    },
    actions: {
      getUser,
      getRepos,
      clean
    }
  };
}

/***/ }),

/***/ "./src/pages/Home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Home/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_hooks_useGitHub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/useGitHub */ "./src/core/hooks/useGitHub/index.tsx");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Loading */ "./src/components/Loading/index.tsx");
/* harmony import */ var _components_UserCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UserCard */ "./src/components/UserCard/index.tsx");
/* harmony import */ var _components_UserNotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UserNotFound */ "./src/components/UserNotFound/index.tsx");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/SearchBar */ "./src/components/SearchBar/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/Home/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\next-boilerplate\\src\\pages\\Home\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Home = () => {
  const {
    actions,
    state
  } = Object(_core_hooks_useGitHub__WEBPACK_IMPORTED_MODULE_1__["default"])();

  function search(user) {
    actions.clean();
    actions.getUser(user);
  }

  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    getSearch: search,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), state.isLoading && __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 27
    }
  }), state.user && __jsx(_components_UserCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: state.user,
    repositories: state.repositories,
    handdleRepos: actions.getRepos,
    handleStarred: () => alert('starred'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), state.userNotFound && __jsx(_components_UserNotFound__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 30
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/Home/styles.module.scss":
/*!*******************************************!*\
  !*** ./src/pages/Home/styles.module.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "styles_main__1JJ0h"
};


/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/pages/Home/index.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Home__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVwb3NpdG9yeUxpc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlcG9zaXRvcnlMaXN0L3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlckNhcmQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VzZXJDYXJkL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VyTm90Rm91bmQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VzZXJOb3RGb3VuZC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaG9va3MvdXNlR2l0SHViL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0hvbWUvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkxvYWRpbmciLCJzdHlsZXMiLCJjb250YWluZXIiLCJSZXBvc2l0b3J5TGlzdCIsInByb3BzIiwibGlzdCIsImNvbnRhaW5lcl9fdGl0bGUiLCJtYXAiLCJfcmVwb3NpdG9yeSIsImluZGV4IiwiaHRtbF91cmwiLCJuYW1lIiwic2VhcmNoQmFyIiwiZ2V0U2VhcmNoIiwic2VhcmNoVGV4dCIsInNldFNlYXJjaFRleHQiLCJ1c2VTdGF0ZSIsImhhbmRsZUlucHV0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImNvbnRhaW5lcl9faW5wdXQiLCJjb250YWluZXJfX2J1dHRvbiIsIlVzZXJDYXJkIiwidXNlciIsInJlcG9zaXRvcmllcyIsImhhbmRkbGVSZXBvcyIsImhhbmRsZVN0YXJyZWQiLCJjb250YWluZXJfX3JvdyIsImF2YXRhcl91cmwiLCJjb250YWluZXJfX2ltYWdlIiwiY29udGFpbmVyX19sb2dpblRleHQiLCJsb2dpbiIsImNvbnRhaW5lcl9faW5mb1RleHQiLCJwdWJsaWNfcmVwb3MiLCJmb2xsb3dlcnMiLCJjb250YWluZXJfX2xpc3RCb3giLCJjb250YWluZXJfX3RleHQiLCJ1c2VHaXRIdWIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZXRVc2VyIiwidXNlck5vdEZvdW5kIiwic2V0dVVzZXJOb3RGb3VuZCIsInNldFJlcG9zaXRvcmllcyIsImdldFVzZXIiLCJ1c2VyU2VhcmNoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiZmluYWxseSIsImdldFJlcG9zIiwiY2xlYW4iLCJzdGF0ZSIsImFjdGlvbnMiLCJIb21lIiwic2VhcmNoIiwibWFpbiIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGdEIsRUFHR2tCLEtBQUssQ0FBQ2pDLElBQU4sSUFDQyxNQUFDLDREQUFEO0FBQ0UsUUFBSSxFQUFFaUMsS0FBSyxDQUFDakMsSUFEZDtBQUVFLGdCQUFZLEVBQUVpQyxLQUFLLENBQUNoQyxZQUZ0QjtBQUdFLGdCQUFZLEVBQUVpQyxPQUFPLENBQUNILFFBSHhCO0FBSUUsaUJBQWEsRUFBRSxNQUFNTyxLQUFLLENBQUMsU0FBRCxDQUo1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFXR0wsS0FBSyxDQUFDZixZQUFOLElBQXNCLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVh6QixDQURGO0FBZUQsQ0FyQkQ7O0FBdUJlaUIsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFFZUEsNEdBQWYsRTs7Ozs7Ozs7Ozs7QUNGQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aDE+QnVzY2FuZG8gLi4uPC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzdHlsZXNfY29udGFpbmVyX18zUlJsLVwiXG59O1xuIiwiaW1wb3J0IHsgUmVwb3NpdG9yeUxpc3RQcm9wcyB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBSZXBvc2l0b3J5TGlzdCA9IChwcm9wczogUmVwb3NpdG9yeUxpc3RQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbGlzdCB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fdGl0bGV9PlJlcG9zaXRvcmlvczo8L3A+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bGlzdC5tYXAoKF9yZXBvc2l0b3J5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGhyZWY9e19yZXBvc2l0b3J5Lmh0bWxfdXJsfVxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8bGk+e19yZXBvc2l0b3J5Lm5hbWV9PC9saT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBvc2l0b3J5TGlzdDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyX190aXRsZVwiOiBcInN0eWxlc19jb250YWluZXJfX3RpdGxlX18zcTg2dFwiXG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNlYXJjaEJhclByb3BzIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IHNlYXJjaEJhciA9IChwcm9wczogc2VhcmNoQmFyUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGdldFNlYXJjaCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFNlYXJjaFRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBnZXRTZWFyY2goc2VhcmNoVGV4dCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9faW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH0gLz5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9ufVxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIEJ1c2NhclxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hCYXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlc19jb250YWluZXJfXzE5bFJOXCIsXG5cdFwiY29udGFpbmVyX19pbnB1dFwiOiBcInN0eWxlc19jb250YWluZXJfX2lucHV0X18yMjJTUFwiLFxuXHRcImNvbnRhaW5lcl9fYnV0dG9uXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fYnV0dG9uX19ORmh3ZVwiXG59O1xuIiwiaW1wb3J0IHsgVXNlckNhcmRQcm9wcyB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IFJlcG9zaXRvcnlMaXN0IGZyb20gJy4uL1JlcG9zaXRvcnlMaXN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBVc2VyQ2FyZCA9IChwcm9wczogVXNlckNhcmRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciwgcmVwb3NpdG9yaWVzLCBoYW5kZGxlUmVwb3MsIGhhbmRsZVN0YXJyZWQgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fcm93fT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e3VzZXIuYXZhdGFyX3VybH1cclxuICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2ltYWdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19sb2dpblRleHR9Pnt1c2VyLmxvZ2lufTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19yb3d9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2luZm9UZXh0fT5cclxuICAgICAgICAgICAgUmVwb3NpdMOzcmlvcyBww7pibGljb3M6IHt1c2VyLnB1YmxpY19yZXBvc31cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9faW5mb1RleHR9PlxyXG4gICAgICAgICAgICBTZWd1aWRvcmVzOiB7dXNlci5mb2xsb3dlcnN9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kZGxlUmVwb3N9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlcG9zXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdGFycmVkfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdGFycmVkXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtyZXBvc2l0b3JpZXMgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19saXN0Qm94fT5cclxuICAgICAgICAgIDxSZXBvc2l0b3J5TGlzdCBsaXN0PXtyZXBvc2l0b3JpZXN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNhcmQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlc19jb250YWluZXJfX08tRm15XCIsXG5cdFwiY29udGFpbmVyX19yb3dcIjogXCJzdHlsZXNfY29udGFpbmVyX19yb3dfXzJiSDd4XCIsXG5cdFwiY29udGFpbmVyX19saXN0Qm94XCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fbGlzdEJveF9fMldsQ3ZcIixcblx0XCJjb250YWluZXJfX2xvZ2luVGV4dFwiOiBcInN0eWxlc19jb250YWluZXJfX2xvZ2luVGV4dF9fMmNVTDNcIixcblx0XCJjb250YWluZXJfX2luZm9UZXh0XCI6IFwic3R5bGVzX2NvbnRhaW5lcl9faW5mb1RleHRfXzFjZDZaXCIsXG5cdFwiY29udGFpbmVyX19pbWFnZVwiOiBcInN0eWxlc19jb250YWluZXJfX2ltYWdlX18xSDR4QVwiLFxuXHRcImNvbnRhaW5lcl9fYnV0dG9uXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fYnV0dG9uX18zdXFvMlwiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBVc2VyQ2FyZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3RleHR9PlVzdcOhcmlvIE7Do28gZW5jb250cmFkbyA6KCA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNhcmQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlc19jb250YWluZXJfX2VUMEdpXCIsXG5cdFwiY29udGFpbmVyX190ZXh0XCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fdGV4dF9fMl9kaEtcIlxufTtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBVc2VyLCBSZXBvc2l0b3J5IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlR2l0SHViKCkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFt1c2VyTm90Rm91bmQsIHNldHVVc2VyTm90Rm91bmRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXBvc2l0b3JpZXMsIHNldFJlcG9zaXRvcmllc10gPSB1c2VTdGF0ZTxSZXBvc2l0b3J5W10gfCBudWxsPihudWxsKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcih1c2VyU2VhcmNoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIHNldHVVc2VyTm90Rm91bmQoZmFsc2UpO1xyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgIC5nZXQ8VXNlcj4oYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyU2VhcmNofWApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRVc2VyKHJlcy5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHNldHVVc2VyTm90Rm91bmQodHJ1ZSkpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldElzTG9hZGluZyhmYWxzZSkpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UmVwb3MoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyLmxvZ2lufS9yZXBvc2ApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgc2V0UmVwb3NpdG9yaWVzKHJlcy5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgpXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0SXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhbigpOiB2b2lkIHtcclxuICAgIHNldHVVc2VyTm90Rm91bmQoZmFsc2UpO1xyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldFJlcG9zaXRvcmllcyhudWxsKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RhdGU6IHtcclxuICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICB1c2VyLFxyXG4gICAgICB1c2VyTm90Rm91bmQsXHJcbiAgICAgIHJlcG9zaXRvcmllcyxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIGdldFVzZXIsXHJcbiAgICAgIGdldFJlcG9zLFxyXG4gICAgICBjbGVhbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlR2l0SHViIGZyb20gJ0Bjb3JlL2hvb2tzL3VzZUdpdEh1Yic7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJ0Bjb21wb25lbnRzL0xvYWRpbmcnO1xyXG5pbXBvcnQgVXNlckNhcmQgZnJvbSAnQGNvbXBvbmVudHMvVXNlckNhcmQnO1xyXG5pbXBvcnQgVXNlck5vdEZvdW5kIGZyb20gJ0Bjb21wb25lbnRzL1VzZXJOb3RGb3VuZCc7XHJcbmltcG9ydCBTZXJhY2hCYXIgZnJvbSAnQGNvbXBvbmVudHMvU2VhcmNoQmFyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWN0aW9ucywgc3RhdGUgfSA9IHVzZUdpdEh1YigpO1xyXG4gIGZ1bmN0aW9uIHNlYXJjaCh1c2VyOiBzdHJpbmcpIHtcclxuICAgIGFjdGlvbnMuY2xlYW4oKTtcclxuICAgIGFjdGlvbnMuZ2V0VXNlcih1c2VyKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgIDxTZXJhY2hCYXIgZ2V0U2VhcmNoPXtzZWFyY2h9IC8+XHJcbiAgICAgIHtzdGF0ZS5pc0xvYWRpbmcgJiYgPExvYWRpbmcgLz59XHJcbiAgICAgIHtzdGF0ZS51c2VyICYmIChcclxuICAgICAgICA8VXNlckNhcmRcclxuICAgICAgICAgIHVzZXI9e3N0YXRlLnVzZXJ9XHJcbiAgICAgICAgICByZXBvc2l0b3JpZXM9e3N0YXRlLnJlcG9zaXRvcmllc31cclxuICAgICAgICAgIGhhbmRkbGVSZXBvcz17YWN0aW9ucy5nZXRSZXBvc31cclxuICAgICAgICAgIGhhbmRsZVN0YXJyZWQ9eygpID0+IGFsZXJ0KCdzdGFycmVkJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge3N0YXRlLnVzZXJOb3RGb3VuZCAmJiA8VXNlck5vdEZvdW5kIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJzdHlsZXNfbWFpbl9fMUpKMGhcIlxufTtcbiIsImltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=