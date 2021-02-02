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
    list,
    listTitle
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
  }, listTitle), list.length > 0 ? __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
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
        lineNumber: 14,
        columnNumber: 15
      }
    }, __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, _repository.name));
  })) : __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Sem reposit\xF3rios encontrados :( "));
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
    placeholder: "Pesquise o login de um usu\xE1rio gitHub",
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
      lineNumber: 23,
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

/***/ "./src/components/UserCard/helpers.ts":
/*!********************************************!*\
  !*** ./src/components/UserCard/helpers.ts ***!
  \********************************************/
/*! exports provided: onReposClicked, onStarredClicked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReposClicked", function() { return onReposClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStarredClicked", function() { return onStarredClicked; });
function onReposClicked(handleRepos, setListTitle) {
  handleRepos();
  setListTitle('Repositórios:');
}
function onStarredClicked(handleStarred, setListTitle) {
  handleStarred();
  setListTitle('Starred:');
}

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
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RepositoryList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RepositoryList */ "./src/components/RepositoryList/index.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/components/UserCard/helpers.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/UserCard/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\next-boilerplate\\src\\components\\UserCard\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const UserCard = props => {
  const {
    user,
    repositories,
    isLoading,
    handleRepos,
    handleStarred
  } = props;
  const {
    0: listTitle,
    1: setListTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__row,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: user.avatar_url,
    alt: "Avatar",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__loginText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, user.login)), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__row,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__infoText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Reposit\xF3rios p\xFAblicos: ", user.public_repos), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__infoText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Seguidores: ", user.followers)), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__button,
    onClick: () => Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["onReposClicked"])(handleRepos, setListTitle),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Repos"), __jsx("button", {
    type: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__button,
    onClick: () => Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["onStarredClicked"])(handleStarred, setListTitle),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Starred"))), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__listBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, isLoading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 35,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }) : repositories && __jsx(_RepositoryList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    list: repositories,
    listTitle: listTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
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
  const {
    0: loadingSearch,
    1: setLoadingSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  async function getUser(userSearch) {
    setLoadingSearch(true);
    setuUserNotFound(false);
    setUser(null);
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://api.github.com/users/${userSearch}`).then(res => {
      setUser(res.data);
    }).catch(err => setuUserNotFound(true)).finally(() => setLoadingSearch(false));
  }

  async function getRepositoriesList() {
    setRepositories(null);
    setIsLoading(true);

    if (user) {
      await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://api.github.com/users/${user.login}/repos`).then(res => {
        setRepositories(res.data);
      }).catch().finally(() => setIsLoading(false));
    }
  }

  async function getStarredList() {
    setRepositories(null);
    setIsLoading(true);

    if (user) {
      await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://api.github.com/users/${user.login}/starred`).then(res => {
        setRepositories(res.data);
      }).catch().finally(() => setIsLoading(false));
    }
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
      isLoading,
      user,
      userNotFound,
      repositories,
      loadingSearch
    },
    actions: {
      getUser,
      getRepositoriesList,
      getStarredList,
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
/* harmony import */ var _components_UserCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/UserCard */ "./src/components/UserCard/index.tsx");
/* harmony import */ var _components_UserNotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UserNotFound */ "./src/components/UserNotFound/index.tsx");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__);
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
  }), state.loadingSearch && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 60,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 31
    }
  }), state.user && __jsx(_components_UserCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: state.user,
    isLoading: state.isLoading,
    repositories: state.repositories,
    handleRepos: actions.getRepositoriesList,
    handleStarred: actions.getStarredList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), state.userNotFound && __jsx(_components_UserNotFound__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVwb3NpdG9yeUxpc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlcG9zaXRvcnlMaXN0L3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlckNhcmQvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VyQ2FyZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlckNhcmQvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VzZXJOb3RGb3VuZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlck5vdEZvdW5kL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9ob29rcy91c2VHaXRIdWIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Ib21lL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlJlcG9zaXRvcnlMaXN0IiwicHJvcHMiLCJsaXN0IiwibGlzdFRpdGxlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiY29udGFpbmVyX190aXRsZSIsImxlbmd0aCIsIm1hcCIsIl9yZXBvc2l0b3J5IiwiaW5kZXgiLCJodG1sX3VybCIsIm5hbWUiLCJzZWFyY2hCYXIiLCJnZXRTZWFyY2giLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInVzZVN0YXRlIiwiaGFuZGxlSW5wdXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiY29udGFpbmVyX19pbnB1dCIsImNvbnRhaW5lcl9fYnV0dG9uIiwib25SZXBvc0NsaWNrZWQiLCJoYW5kbGVSZXBvcyIsInNldExpc3RUaXRsZSIsIm9uU3RhcnJlZENsaWNrZWQiLCJoYW5kbGVTdGFycmVkIiwiVXNlckNhcmQiLCJ1c2VyIiwicmVwb3NpdG9yaWVzIiwiaXNMb2FkaW5nIiwiY29udGFpbmVyX19yb3ciLCJhdmF0YXJfdXJsIiwiY29udGFpbmVyX19pbWFnZSIsImNvbnRhaW5lcl9fbG9naW5UZXh0IiwibG9naW4iLCJjb250YWluZXJfX2luZm9UZXh0IiwicHVibGljX3JlcG9zIiwiZm9sbG93ZXJzIiwiY29udGFpbmVyX19saXN0Qm94IiwiY29udGFpbmVyX190ZXh0IiwidXNlR2l0SHViIiwic2V0SXNMb2FkaW5nIiwic2V0VXNlciIsInVzZXJOb3RGb3VuZCIsInNldHVVc2VyTm90Rm91bmQiLCJzZXRSZXBvc2l0b3JpZXMiLCJsb2FkaW5nU2VhcmNoIiwic2V0TG9hZGluZ1NlYXJjaCIsImdldFVzZXIiLCJ1c2VyU2VhcmNoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiZmluYWxseSIsImdldFJlcG9zaXRvcmllc0xpc3QiLCJnZXRTdGFycmVkTGlzdCIsImNsZWFuIiwic3RhdGUiLCJhY3Rpb25zIiwiSG9tZSIsInNlYXJjaCIsIm1haW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR0gsS0FBSyxDQUFDZixhQUFOLElBQXVCLE1BQUMseUVBQUQ7QUFBa0IsUUFBSSxFQUFFLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGMUIsRUFHR2UsS0FBSyxDQUFDbEMsSUFBTixJQUNDLE1BQUMsNERBQUQ7QUFDRSxRQUFJLEVBQUVrQyxLQUFLLENBQUNsQyxJQURkO0FBRUUsYUFBUyxFQUFFa0MsS0FBSyxDQUFDaEMsU0FGbkI7QUFHRSxnQkFBWSxFQUFFZ0MsS0FBSyxDQUFDakMsWUFIdEI7QUFJRSxlQUFXLEVBQUVrQyxPQUFPLENBQUNKLG1CQUp2QjtBQUtFLGlCQUFhLEVBQUVJLE9BQU8sQ0FBQ0gsY0FMekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBWUdFLEtBQUssQ0FBQ2xCLFlBQU4sSUFBc0IsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWnpCLENBREY7QUFnQkQsQ0F0QkQ7O0FBd0Jlb0IsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFFZUEsNEdBQWYsRTs7Ozs7Ozs7Ozs7QUNGQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCB7IFJlcG9zaXRvcnlMaXN0UHJvcHMgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgUmVwb3NpdG9yeUxpc3QgPSAocHJvcHM6IFJlcG9zaXRvcnlMaXN0UHJvcHMpID0+IHtcclxuICBjb25zdCB7IGxpc3QsIGxpc3RUaXRsZSB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fdGl0bGV9PntsaXN0VGl0bGV9PC9wPlxyXG4gICAgICB7bGlzdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtsaXN0Lm1hcCgoX3JlcG9zaXRvcnksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtfcmVwb3NpdG9yeS5odG1sX3VybH1cclxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGk+e19yZXBvc2l0b3J5Lm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPlNlbSByZXBvc2l0w7NyaW9zIGVuY29udHJhZG9zIDooIDwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBvc2l0b3J5TGlzdDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyX190aXRsZVwiOiBcInN0eWxlc19jb250YWluZXJfX3RpdGxlX18zcTg2dFwiXG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNlYXJjaEJhclByb3BzIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IHNlYXJjaEJhciA9IChwcm9wczogc2VhcmNoQmFyUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGdldFNlYXJjaCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFNlYXJjaFRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBnZXRTZWFyY2goc2VhcmNoVGV4dCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19pbnB1dH1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXR9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQZXNxdWlzZSBvIGxvZ2luIGRlIHVtIHVzdcOhcmlvIGdpdEh1YlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvbn1cclxuICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgID5cclxuICAgICAgICBCdXNjYXJcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoQmFyO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzdHlsZXNfY29udGFpbmVyX18xOWxSTlwiLFxuXHRcImNvbnRhaW5lcl9faW5wdXRcIjogXCJzdHlsZXNfY29udGFpbmVyX19pbnB1dF9fMjIyU1BcIixcblx0XCJjb250YWluZXJfX2J1dHRvblwiOiBcInN0eWxlc19jb250YWluZXJfX2J1dHRvbl9fTkZod2VcIlxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBvblJlcG9zQ2xpY2tlZChcclxuICBoYW5kbGVSZXBvczogKCkgPT4gdm9pZCxcclxuICBzZXRMaXN0VGl0bGU6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4pOiB2b2lkIHtcclxuICBoYW5kbGVSZXBvcygpO1xyXG4gIHNldExpc3RUaXRsZSgnUmVwb3NpdMOzcmlvczonKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uU3RhcnJlZENsaWNrZWQoXHJcbiAgaGFuZGxlU3RhcnJlZDogKCkgPT4gdm9pZCxcclxuICBzZXRMaXN0VGl0bGU6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4pOiB2b2lkIHtcclxuICBoYW5kbGVTdGFycmVkKCk7XHJcbiAgc2V0TGlzdFRpdGxlKCdTdGFycmVkOicpO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcclxuaW1wb3J0IFJlcG9zaXRvcnlMaXN0IGZyb20gJy4uL1JlcG9zaXRvcnlMaXN0JztcclxuaW1wb3J0IHsgb25TdGFycmVkQ2xpY2tlZCwgb25SZXBvc0NsaWNrZWQgfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBVc2VyQ2FyZFByb3BzIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBVc2VyQ2FyZCA9IChwcm9wczogVXNlckNhcmRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciwgcmVwb3NpdG9yaWVzLCBpc0xvYWRpbmcsIGhhbmRsZVJlcG9zLCBoYW5kbGVTdGFycmVkIH0gPSBwcm9wcztcclxuICBjb25zdCBbbGlzdFRpdGxlLCBzZXRMaXN0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19yb3d9PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17dXNlci5hdmF0YXJfdXJsfVxyXG4gICAgICAgICAgYWx0PVwiQXZhdGFyXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9faW1hZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2xvZ2luVGV4dH0+e3VzZXIubG9naW59PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3Jvd30+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9faW5mb1RleHR9PlxyXG4gICAgICAgICAgICBSZXBvc2l0w7NyaW9zIHDDumJsaWNvczoge3VzZXIucHVibGljX3JlcG9zfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19pbmZvVGV4dH0+XHJcbiAgICAgICAgICAgIFNlZ3VpZG9yZXM6IHt1c2VyLmZvbGxvd2Vyc31cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19idXR0b259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUmVwb3NDbGlja2VkKGhhbmRsZVJlcG9zLCBzZXRMaXN0VGl0bGUpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBSZXBvc1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TdGFycmVkQ2xpY2tlZChoYW5kbGVTdGFycmVkLCBzZXRMaXN0VGl0bGUpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdGFycmVkXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19saXN0Qm94fT5cclxuICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MzV9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIHJlcG9zaXRvcmllcyAmJiAoXHJcbiAgICAgICAgICAgIDxSZXBvc2l0b3J5TGlzdCBsaXN0PXtyZXBvc2l0b3JpZXN9IGxpc3RUaXRsZT17bGlzdFRpdGxlfSAvPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDYXJkO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzdHlsZXNfY29udGFpbmVyX19PLUZteVwiLFxuXHRcImNvbnRhaW5lcl9fcm93XCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fcm93X18yYkg3eFwiLFxuXHRcImNvbnRhaW5lcl9fbGlzdEJveFwiOiBcInN0eWxlc19jb250YWluZXJfX2xpc3RCb3hfXzJXbEN2XCIsXG5cdFwiY29udGFpbmVyX19sb2dpblRleHRcIjogXCJzdHlsZXNfY29udGFpbmVyX19sb2dpblRleHRfXzJjVUwzXCIsXG5cdFwiY29udGFpbmVyX19pbmZvVGV4dFwiOiBcInN0eWxlc19jb250YWluZXJfX2luZm9UZXh0X18xY2Q2WlwiLFxuXHRcImNvbnRhaW5lcl9faW1hZ2VcIjogXCJzdHlsZXNfY29udGFpbmVyX19pbWFnZV9fMUg0eEFcIixcblx0XCJjb250YWluZXJfX2J1dHRvblwiOiBcInN0eWxlc19jb250YWluZXJfX2J1dHRvbl9fM3VxbzJcIlxufTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgVXNlckNhcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX190ZXh0fT5Vc3XDoXJpbyBOw6NvIGVuY29udHJhZG8gOiggPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDYXJkO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzdHlsZXNfY29udGFpbmVyX19lVDBHaVwiLFxuXHRcImNvbnRhaW5lcl9fdGV4dFwiOiBcInN0eWxlc19jb250YWluZXJfX3RleHRfXzJfZGhLXCJcbn07XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgVXNlciwgUmVwb3NpdG9yeSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUdpdEh1YigpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbdXNlck5vdEZvdW5kLCBzZXR1VXNlck5vdEZvdW5kXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbcmVwb3NpdG9yaWVzLCBzZXRSZXBvc2l0b3JpZXNdID0gdXNlU3RhdGU8UmVwb3NpdG9yeVtdIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmdTZWFyY2gsIHNldExvYWRpbmdTZWFyY2hdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHVzZXJTZWFyY2g6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgc2V0TG9hZGluZ1NlYXJjaCh0cnVlKTtcclxuICAgIHNldHVVc2VyTm90Rm91bmQoZmFsc2UpO1xyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgIC5nZXQ8VXNlcj4oYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyU2VhcmNofWApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRVc2VyKHJlcy5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHNldHVVc2VyTm90Rm91bmQodHJ1ZSkpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmdTZWFyY2goZmFsc2UpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFJlcG9zaXRvcmllc0xpc3QoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBzZXRSZXBvc2l0b3JpZXMobnVsbCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyLmxvZ2lufS9yZXBvc2ApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgc2V0UmVwb3NpdG9yaWVzKHJlcy5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgpXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0SXNMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRTdGFycmVkTGlzdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHNldFJlcG9zaXRvcmllcyhudWxsKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXIubG9naW59L3N0YXJyZWRgKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHNldFJlcG9zaXRvcmllcyhyZXMuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHNldElzTG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYW4oKTogdm9pZCB7XHJcbiAgICBzZXR1VXNlck5vdEZvdW5kKGZhbHNlKTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICBzZXRMb2FkaW5nU2VhcmNoKGZhbHNlKTtcclxuICAgIHNldFJlcG9zaXRvcmllcyhudWxsKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RhdGU6IHtcclxuICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICB1c2VyLFxyXG4gICAgICB1c2VyTm90Rm91bmQsXHJcbiAgICAgIHJlcG9zaXRvcmllcyxcclxuICAgICAgbG9hZGluZ1NlYXJjaCxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIGdldFVzZXIsXHJcbiAgICAgIGdldFJlcG9zaXRvcmllc0xpc3QsXHJcbiAgICAgIGdldFN0YXJyZWRMaXN0LFxyXG4gICAgICBjbGVhbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlR2l0SHViIGZyb20gJ0Bjb3JlL2hvb2tzL3VzZUdpdEh1Yic7XHJcbmltcG9ydCBVc2VyQ2FyZCBmcm9tICdAY29tcG9uZW50cy9Vc2VyQ2FyZCc7XHJcbmltcG9ydCBVc2VyTm90Rm91bmQgZnJvbSAnQGNvbXBvbmVudHMvVXNlck5vdEZvdW5kJztcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBTZXJhY2hCYXIgZnJvbSAnQGNvbXBvbmVudHMvU2VhcmNoQmFyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWN0aW9ucywgc3RhdGUgfSA9IHVzZUdpdEh1YigpO1xyXG4gIGZ1bmN0aW9uIHNlYXJjaCh1c2VyOiBzdHJpbmcpIHtcclxuICAgIGFjdGlvbnMuY2xlYW4oKTtcclxuICAgIGFjdGlvbnMuZ2V0VXNlcih1c2VyKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgIDxTZXJhY2hCYXIgZ2V0U2VhcmNoPXtzZWFyY2h9IC8+XHJcbiAgICAgIHtzdGF0ZS5sb2FkaW5nU2VhcmNoICYmIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezYwfSAvPn1cclxuICAgICAge3N0YXRlLnVzZXIgJiYgKFxyXG4gICAgICAgIDxVc2VyQ2FyZFxyXG4gICAgICAgICAgdXNlcj17c3RhdGUudXNlcn1cclxuICAgICAgICAgIGlzTG9hZGluZz17c3RhdGUuaXNMb2FkaW5nfVxyXG4gICAgICAgICAgcmVwb3NpdG9yaWVzPXtzdGF0ZS5yZXBvc2l0b3JpZXN9XHJcbiAgICAgICAgICBoYW5kbGVSZXBvcz17YWN0aW9ucy5nZXRSZXBvc2l0b3JpZXNMaXN0fVxyXG4gICAgICAgICAgaGFuZGxlU3RhcnJlZD17YWN0aW9ucy5nZXRTdGFycmVkTGlzdH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7c3RhdGUudXNlck5vdEZvdW5kICYmIDxVc2VyTm90Rm91bmQgLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcInN0eWxlc19tYWluX18xSkowaFwiXG59O1xuIiwiaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9