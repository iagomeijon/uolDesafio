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
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\Develop\\projects\\uolDesafio\\src\\components\\RepositoryList\\index.tsx";

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
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\Develop\\projects\\uolDesafio\\src\\components\\SearchBar\\index.tsx";

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
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\Develop\\projects\\uolDesafio\\src\\components\\UserCard\\index.tsx";

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
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\Develop\\projects\\uolDesafio\\src\\components\\UserNotFound\\index.tsx";

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

/***/ "./src/core/contexts/GitHubContext/index.tsx":
/*!***************************************************!*\
  !*** ./src/core/contexts/GitHubContext/index.tsx ***!
  \***************************************************/
/*! exports provided: GitHubProvider, useGitHubContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitHubProvider", function() { return GitHubProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGitHubContext", function() { return useGitHubContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_hooks_useGitHub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/useGitHub */ "./src/core/hooks/useGitHub/index.tsx");
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\Develop\\projects\\uolDesafio\\src\\core\\contexts\\GitHubContext\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const GitHubContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

function useGitHubContext() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(GitHubContext);

  if (!context) {
    throw new Error('useUser must be used within an UserProvider.');
  }

  return context;
}

const GitHubProvider = props => {
  const {
    children
  } = props;
  const {
    actions,
    state
  } = Object(_core_hooks_useGitHub__WEBPACK_IMPORTED_MODULE_1__["default"])();

  function getUser(userSearch) {
    actions.getUser(userSearch);
  }

  function getRepositoriesList() {
    actions.getRepositoriesList();
  }

  function getStarredList() {
    actions.getStarredList();
  }

  return __jsx(GitHubContext.Provider, {
    value: {
      hasUserNotFound: state.hasUserNotFound,
      isLoading: state.isLoading,
      isLoadingSearch: state.isLoadingSearch,
      repositories: state.repositories,
      user: state.user,
      getUser,
      getRepositoriesList,
      getStarredList
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, children);
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
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: repositories,
    1: setRepositories
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: hasUserNotFound,
    1: setHasUserNotFound
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isLoadingSearch,
    1: setIsLoadingSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function clean() {
    setHasUserNotFound(false);
    setIsLoading(false);
    setIsLoadingSearch(false);
    setRepositories(null);
    setUser(null);
  }

  async function getUser(userSearch) {
    clean();
    setIsLoadingSearch(true);

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://api.github.com/users/${userSearch}`);
      setUser(res.data);
    } catch (err) {
      setHasUserNotFound(true);
    } finally {
      setIsLoadingSearch(false);
    }
  }

  async function getRepositoriesList() {
    setRepositories(null);
    setIsLoading(true);

    if (user) {
      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://api.github.com/users/${user.login}/repos`);
        setRepositories(res.data);
      } finally {
        setIsLoading(false);
      }
    }
  }

  async function getStarredList() {
    setRepositories(null);
    setIsLoading(true);

    if (user) {
      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://api.github.com/users/${user.login}/starred`);
        setRepositories(res.data);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return {
    state: {
      isLoading,
      user,
      hasUserNotFound,
      repositories,
      isLoadingSearch
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
/* harmony import */ var _core_contexts_GitHubContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/contexts/GitHubContext */ "./src/core/contexts/GitHubContext/index.tsx");
/* harmony import */ var _components_UserCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/UserCard */ "./src/components/UserCard/index.tsx");
/* harmony import */ var _components_UserNotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UserNotFound */ "./src/components/UserNotFound/index.tsx");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/SearchBar */ "./src/components/SearchBar/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/Home/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\Develop\\projects\\uolDesafio\\src\\pages\\Home\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Home = () => {
  const {
    user,
    isLoading,
    hasUserNotFound,
    isLoadingSearch,
    repositories,
    getUser,
    getRepositoriesList,
    getStarredList
  } = Object(_core_contexts_GitHubContext__WEBPACK_IMPORTED_MODULE_1__["useGitHubContext"])();

  function search(userName) {
    getUser(userName);
  }

  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    getSearch: search,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), isLoadingSearch && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 60,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 27
    }
  }), user && __jsx(_components_UserCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: user,
    isLoading: isLoading,
    repositories: repositories,
    handleRepos: getRepositoriesList,
    handleStarred: getStarredList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), hasUserNotFound && __jsx(_components_UserNotFound__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 27
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVwb3NpdG9yeUxpc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlcG9zaXRvcnlMaXN0L3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlckNhcmQvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VyQ2FyZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlckNhcmQvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VzZXJOb3RGb3VuZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlck5vdEZvdW5kL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb250ZXh0cy9HaXRIdWJDb250ZXh0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9ob29rcy91c2VHaXRIdWIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Ib21lL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlJlcG9zaXRvcnlMaXN0IiwicHJvcHMiLCJsaXN0IiwibGlzdFRpdGxlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiY29udGFpbmVyX190aXRsZSIsImxlbmd0aCIsIm1hcCIsIl9yZXBvc2l0b3J5IiwiaW5kZXgiLCJodG1sX3VybCIsIm5hbWUiLCJzZWFyY2hCYXIiLCJnZXRTZWFyY2giLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInVzZVN0YXRlIiwiaGFuZGxlSW5wdXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiY29udGFpbmVyX19pbnB1dCIsImNvbnRhaW5lcl9fYnV0dG9uIiwib25SZXBvc0NsaWNrZWQiLCJoYW5kbGVSZXBvcyIsInNldExpc3RUaXRsZSIsIm9uU3RhcnJlZENsaWNrZWQiLCJoYW5kbGVTdGFycmVkIiwiVXNlckNhcmQiLCJ1c2VyIiwicmVwb3NpdG9yaWVzIiwiaXNMb2FkaW5nIiwiY29udGFpbmVyX19yb3ciLCJhdmF0YXJfdXJsIiwiY29udGFpbmVyX19pbWFnZSIsImNvbnRhaW5lcl9fbG9naW5UZXh0IiwibG9naW4iLCJjb250YWluZXJfX2luZm9UZXh0IiwicHVibGljX3JlcG9zIiwiZm9sbG93ZXJzIiwiY29udGFpbmVyX19saXN0Qm94IiwiY29udGFpbmVyX190ZXh0IiwiR2l0SHViQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VHaXRIdWJDb250ZXh0IiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJFcnJvciIsIkdpdEh1YlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhY3Rpb25zIiwic3RhdGUiLCJ1c2VHaXRIdWIiLCJnZXRVc2VyIiwidXNlclNlYXJjaCIsImdldFJlcG9zaXRvcmllc0xpc3QiLCJnZXRTdGFycmVkTGlzdCIsImhhc1VzZXJOb3RGb3VuZCIsImlzTG9hZGluZ1NlYXJjaCIsInNldFVzZXIiLCJzZXRSZXBvc2l0b3JpZXMiLCJzZXRIYXNVc2VyTm90Rm91bmQiLCJzZXRJc0xvYWRpbmciLCJzZXRJc0xvYWRpbmdTZWFyY2giLCJjbGVhbiIsInJlcyIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsImVyciIsIkhvbWUiLCJzZWFyY2giLCJ1c2VyTmFtZSIsIm1haW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUlDLEtBQUQsSUFBZ0M7QUFDckQsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBc0JGLEtBQTVCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRUcsMERBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFRCwwREFBTSxDQUFDRSxnQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3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MERBQU0sQ0FBQ3VFLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQVcsYUFBUyxFQUFFRixNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR2IsZUFBZSxJQUFJLE1BQUMseUVBQUQ7QUFBa0IsUUFBSSxFQUFFLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGdEIsRUFHRzdCLElBQUksSUFDSCxNQUFDLDREQUFEO0FBQ0UsUUFBSSxFQUFFQSxJQURSO0FBRUUsYUFBUyxFQUFFRSxTQUZiO0FBR0UsZ0JBQVksRUFBRUQsWUFIaEI7QUFJRSxlQUFXLEVBQUV5QixtQkFKZjtBQUtFLGlCQUFhLEVBQUVDLGNBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQVlHQyxlQUFlLElBQUksTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWnRCLENBREY7QUFnQkQsQ0FoQ0Q7O0FBa0NlYSxtRUFBZixFOzs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUVlQSw0R0FBZixFOzs7Ozs7Ozs7OztBQ0ZBLCtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHsgUmVwb3NpdG9yeUxpc3RQcm9wcyB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBSZXBvc2l0b3J5TGlzdCA9IChwcm9wczogUmVwb3NpdG9yeUxpc3RQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbGlzdCwgbGlzdFRpdGxlIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX190aXRsZX0+e2xpc3RUaXRsZX08L3A+XHJcbiAgICAgIHtsaXN0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge2xpc3QubWFwKChfcmVwb3NpdG9yeSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGhyZWY9e19yZXBvc2l0b3J5Lmh0bWxfdXJsfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsaT57X3JlcG9zaXRvcnkubmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+U2VtIHJlcG9zaXTDs3Jpb3MgZW5jb250cmFkb3MgOiggPC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcG9zaXRvcnlMaXN0O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJfX3RpdGxlXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fdGl0bGVfXzNxODZ0XCJcbn07XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2VhcmNoQmFyUHJvcHMgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3Qgc2VhcmNoQmFyID0gKHByb3BzOiBzZWFyY2hCYXJQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZ2V0U2VhcmNoIH0gPSBwcm9wcztcclxuICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICBjb25zdCBoYW5kbGVJbnB1dCA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoVGV4dChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGdldFNlYXJjaChzZWFyY2hUZXh0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2lucHV0fVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBlc3F1aXNlIG8gbG9naW4gZGUgdW0gdXN1w6FyaW8gZ2l0SHViXCJcclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9ufVxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIEJ1c2NhclxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hCYXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlc19jb250YWluZXJfXzE5bFJOXCIsXG5cdFwiY29udGFpbmVyX19pbnB1dFwiOiBcInN0eWxlc19jb250YWluZXJfX2lucHV0X18yMjJTUFwiLFxuXHRcImNvbnRhaW5lcl9fYnV0dG9uXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fYnV0dG9uX19ORmh3ZVwiXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIG9uUmVwb3NDbGlja2VkKFxyXG4gIGhhbmRsZVJlcG9zOiAoKSA9PiB2b2lkLFxyXG4gIHNldExpc3RUaXRsZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQsXHJcbik6IHZvaWQge1xyXG4gIGhhbmRsZVJlcG9zKCk7XHJcbiAgc2V0TGlzdFRpdGxlKCdSZXBvc2l0w7NyaW9zOicpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25TdGFycmVkQ2xpY2tlZChcclxuICBoYW5kbGVTdGFycmVkOiAoKSA9PiB2b2lkLFxyXG4gIHNldExpc3RUaXRsZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQsXHJcbik6IHZvaWQge1xyXG4gIGhhbmRsZVN0YXJyZWQoKTtcclxuICBzZXRMaXN0VGl0bGUoJ1N0YXJyZWQ6Jyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUmVwb3NpdG9yeUxpc3QgZnJvbSAnLi4vUmVwb3NpdG9yeUxpc3QnO1xyXG5pbXBvcnQgeyBvblN0YXJyZWRDbGlja2VkLCBvblJlcG9zQ2xpY2tlZCB9IGZyb20gJy4vaGVscGVycyc7XHJcbmltcG9ydCB7IFVzZXJDYXJkUHJvcHMgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IFVzZXJDYXJkID0gKHByb3BzOiBVc2VyQ2FyZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyLCByZXBvc2l0b3JpZXMsIGlzTG9hZGluZywgaGFuZGxlUmVwb3MsIGhhbmRsZVN0YXJyZWQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtsaXN0VGl0bGUsIHNldExpc3RUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3Jvd30+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXt1c2VyLmF2YXRhcl91cmx9XHJcbiAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19pbWFnZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fbG9naW5UZXh0fT57dXNlci5sb2dpbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fcm93fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19pbmZvVGV4dH0+XHJcbiAgICAgICAgICAgIFJlcG9zaXTDs3Jpb3MgcMO6YmxpY29zOiB7dXNlci5wdWJsaWNfcmVwb3N9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2luZm9UZXh0fT5cclxuICAgICAgICAgICAgU2VndWlkb3Jlczoge3VzZXIuZm9sbG93ZXJzfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25SZXBvc0NsaWNrZWQoaGFuZGxlUmVwb3MsIHNldExpc3RUaXRsZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlcG9zXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblN0YXJyZWRDbGlja2VkKGhhbmRsZVN0YXJyZWQsIHNldExpc3RUaXRsZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN0YXJyZWRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2xpc3RCb3h9PlxyXG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXszNX0gLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgcmVwb3NpdG9yaWVzICYmIChcclxuICAgICAgICAgICAgPFJlcG9zaXRvcnlMaXN0IGxpc3Q9e3JlcG9zaXRvcmllc30gbGlzdFRpdGxlPXtsaXN0VGl0bGV9IC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNhcmQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlc19jb250YWluZXJfX08tRm15XCIsXG5cdFwiY29udGFpbmVyX19yb3dcIjogXCJzdHlsZXNfY29udGFpbmVyX19yb3dfXzJiSDd4XCIsXG5cdFwiY29udGFpbmVyX19saXN0Qm94XCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fbGlzdEJveF9fMldsQ3ZcIixcblx0XCJjb250YWluZXJfX2xvZ2luVGV4dFwiOiBcInN0eWxlc19jb250YWluZXJfX2xvZ2luVGV4dF9fMmNVTDNcIixcblx0XCJjb250YWluZXJfX2luZm9UZXh0XCI6IFwic3R5bGVzX2NvbnRhaW5lcl9faW5mb1RleHRfXzFjZDZaXCIsXG5cdFwiY29udGFpbmVyX19pbWFnZVwiOiBcInN0eWxlc19jb250YWluZXJfX2ltYWdlX18xSDR4QVwiLFxuXHRcImNvbnRhaW5lcl9fYnV0dG9uXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fYnV0dG9uX18zdXFvMlwiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBVc2VyQ2FyZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3RleHR9PlVzdcOhcmlvIE7Do28gZW5jb250cmFkbyA6KCA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNhcmQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlc19jb250YWluZXJfX2VUMEdpXCIsXG5cdFwiY29udGFpbmVyX190ZXh0XCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fdGV4dF9fMl9kaEtcIlxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VHaXRIdWIgZnJvbSAnQGNvcmUvaG9va3MvdXNlR2l0SHViJztcclxuaW1wb3J0IHsgR2l0SHViQ29udGV4dEludGVyZmFjZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG5jb25zdCBHaXRIdWJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxHaXRIdWJDb250ZXh0SW50ZXJmYWNlPihcclxuICB7fSBhcyBHaXRIdWJDb250ZXh0SW50ZXJmYWNlLFxyXG4pO1xyXG5cclxuZnVuY3Rpb24gdXNlR2l0SHViQ29udGV4dCgpOiBHaXRIdWJDb250ZXh0SW50ZXJmYWNlIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChHaXRIdWJDb250ZXh0KTtcclxuICBpZiAoIWNvbnRleHQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndXNlVXNlciBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIFVzZXJQcm92aWRlci4nKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn1cclxuXHJcbmNvbnN0IEdpdEh1YlByb3ZpZGVyID0gKHByb3BzOiB7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICBjb25zdCB7IGFjdGlvbnMsIHN0YXRlIH0gPSB1c2VHaXRIdWIoKTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0VXNlcih1c2VyU2VhcmNoOiBzdHJpbmcpIHtcclxuICAgIGFjdGlvbnMuZ2V0VXNlcih1c2VyU2VhcmNoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFJlcG9zaXRvcmllc0xpc3QoKSB7XHJcbiAgICBhY3Rpb25zLmdldFJlcG9zaXRvcmllc0xpc3QoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFN0YXJyZWRMaXN0KCkge1xyXG4gICAgYWN0aW9ucy5nZXRTdGFycmVkTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHaXRIdWJDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgaGFzVXNlck5vdEZvdW5kOiBzdGF0ZS5oYXNVc2VyTm90Rm91bmQsXHJcbiAgICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5pc0xvYWRpbmcsXHJcbiAgICAgICAgaXNMb2FkaW5nU2VhcmNoOiBzdGF0ZS5pc0xvYWRpbmdTZWFyY2gsXHJcbiAgICAgICAgcmVwb3NpdG9yaWVzOiBzdGF0ZS5yZXBvc2l0b3JpZXMsXHJcbiAgICAgICAgdXNlcjogc3RhdGUudXNlcixcclxuICAgICAgICBnZXRVc2VyLFxyXG4gICAgICAgIGdldFJlcG9zaXRvcmllc0xpc3QsXHJcbiAgICAgICAgZ2V0U3RhcnJlZExpc3QsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvR2l0SHViQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgR2l0SHViUHJvdmlkZXIsIHVzZUdpdEh1YkNvbnRleHQgfTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VHaXRIdWIoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtyZXBvc2l0b3JpZXMsIHNldFJlcG9zaXRvcmllc10gPSB1c2VTdGF0ZTxSZXBvc2l0b3J5W10gfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbaGFzVXNlck5vdEZvdW5kLCBzZXRIYXNVc2VyTm90Rm91bmRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZ1NlYXJjaCwgc2V0SXNMb2FkaW5nU2VhcmNoXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gY2xlYW4oKTogdm9pZCB7XHJcbiAgICBzZXRIYXNVc2VyTm90Rm91bmQoZmFsc2UpO1xyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldElzTG9hZGluZ1NlYXJjaChmYWxzZSk7XHJcbiAgICBzZXRSZXBvc2l0b3JpZXMobnVsbCk7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcih1c2VyU2VhcmNoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNsZWFuKCk7XHJcbiAgICBzZXRJc0xvYWRpbmdTZWFyY2godHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQ8VXNlcj4oXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyU2VhcmNofWAsXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFVzZXIocmVzLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldEhhc1VzZXJOb3RGb3VuZCh0cnVlKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzTG9hZGluZ1NlYXJjaChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc2l0b3JpZXNMaXN0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgc2V0UmVwb3NpdG9yaWVzKG51bGwpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXIubG9naW59L3JlcG9zYCxcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFJlcG9zaXRvcmllcyhyZXMuZGF0YSk7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhcnJlZExpc3QoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBzZXRSZXBvc2l0b3JpZXMobnVsbCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICAgIGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlci5sb2dpbn0vc3RhcnJlZGAsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRSZXBvc2l0b3JpZXMocmVzLmRhdGEpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdGF0ZToge1xyXG4gICAgICBpc0xvYWRpbmcsXHJcbiAgICAgIHVzZXIsXHJcbiAgICAgIGhhc1VzZXJOb3RGb3VuZCxcclxuICAgICAgcmVwb3NpdG9yaWVzLFxyXG4gICAgICBpc0xvYWRpbmdTZWFyY2gsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICBnZXRVc2VyLFxyXG4gICAgICBnZXRSZXBvc2l0b3JpZXNMaXN0LFxyXG4gICAgICBnZXRTdGFycmVkTGlzdCxcclxuICAgICAgY2xlYW4sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlR2l0SHViQ29udGV4dCB9IGZyb20gJ0Bjb3JlL2NvbnRleHRzL0dpdEh1YkNvbnRleHQnO1xyXG5pbXBvcnQgVXNlckNhcmQgZnJvbSAnQGNvbXBvbmVudHMvVXNlckNhcmQnO1xyXG5pbXBvcnQgVXNlck5vdEZvdW5kIGZyb20gJ0Bjb21wb25lbnRzL1VzZXJOb3RGb3VuZCc7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgU2VyYWNoQmFyIGZyb20gJ0Bjb21wb25lbnRzL1NlYXJjaEJhcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB1c2VyLFxyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgaGFzVXNlck5vdEZvdW5kLFxyXG4gICAgaXNMb2FkaW5nU2VhcmNoLFxyXG4gICAgcmVwb3NpdG9yaWVzLFxyXG4gICAgZ2V0VXNlcixcclxuICAgIGdldFJlcG9zaXRvcmllc0xpc3QsXHJcbiAgICBnZXRTdGFycmVkTGlzdCxcclxuICB9ID0gdXNlR2l0SHViQ29udGV4dCgpO1xyXG5cclxuICBmdW5jdGlvbiBzZWFyY2godXNlck5hbWU6IHN0cmluZykge1xyXG4gICAgZ2V0VXNlcih1c2VyTmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgPFNlcmFjaEJhciBnZXRTZWFyY2g9e3NlYXJjaH0gLz5cclxuICAgICAge2lzTG9hZGluZ1NlYXJjaCAmJiA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXs2MH0gLz59XHJcbiAgICAgIHt1c2VyICYmIChcclxuICAgICAgICA8VXNlckNhcmRcclxuICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cclxuICAgICAgICAgIHJlcG9zaXRvcmllcz17cmVwb3NpdG9yaWVzfVxyXG4gICAgICAgICAgaGFuZGxlUmVwb3M9e2dldFJlcG9zaXRvcmllc0xpc3R9XHJcbiAgICAgICAgICBoYW5kbGVTdGFycmVkPXtnZXRTdGFycmVkTGlzdH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7aGFzVXNlck5vdEZvdW5kICYmIDxVc2VyTm90Rm91bmQgLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcInN0eWxlc19tYWluX18xSkowaFwiXG59O1xuIiwiaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==