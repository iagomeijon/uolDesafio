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
/* harmony import */ var _core_hooks_useStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/useStrings */ "./src/core/hooks/useStrings/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/RepositoryList/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\Develop\\projects\\uolDesafio\\src\\components\\RepositoryList\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// MARK: Hooks
 // MARK: Interfaces

// MARK: Styles


const RepositoryList = props => {
  const {
    list,
    listTitle
  } = props;
  const {
    strings
  } = Object(_core_hooks_useStrings__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    repositoryList
  } = strings.components;
  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, listTitle), list.length > 0 ? __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, list.map((_repository, index) => {
    return __jsx("a", {
      key: `repository${index}`,
      href: _repository.html_url,
      target: "_blank",
      rel: "noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    }, __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, _repository.name));
  })) : __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, repositoryList.notFounded, " "));
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
/* harmony import */ var _core_hooks_useStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/useStrings */ "./src/core/hooks/useStrings/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/SearchBar/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\Develop\\projects\\uolDesafio\\src\\components\\SearchBar\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// MARK: Libs
 // MARK: Hooks

 // MARK Interfaces

// MARK: Styles


const SearchBar = props => {
  const {
    getSearch
  } = props;
  const {
    strings
  } = Object(_core_hooks_useStrings__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    searchBar
  } = strings.components;
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
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("input", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__input,
    onChange: handleInput,
    placeholder: searchBar.placeHolder,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("button", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__button,
    type: "submit",
    onClick: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, searchBar.button));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

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
/* harmony import */ var _core_hooks_useStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/useStrings */ "./src/core/hooks/useStrings/index.tsx");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RepositoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RepositoryList */ "./src/components/RepositoryList/index.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./src/components/UserCard/helpers.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/UserCard/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\Develop\\projects\\uolDesafio\\src\\components\\UserCard\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// MARK: Libs
 // MARK: Hooks

 // MARK: components


 // MARK: Helprs

 // MARK: Interfaces

// MARK: Styles


const UserCard = props => {
  const {
    user,
    repositories,
    isLoading,
    handleRepos,
    handleStarred
  } = props;
  const {
    strings
  } = Object(_core_hooks_useStrings__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    userCard
  } = strings.components;
  const {
    0: listTitle,
    1: setListTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__row,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: user.avatar_url,
    alt: "Avatar",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__loginText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, user.login)), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__row,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__infoText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, `${userCard.subTitle1} ${user.public_repos}`), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__infoText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, `${userCard.subTitle2} ${user.followers}`)), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__button,
    onClick: () => Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["onReposClicked"])(handleRepos, setListTitle),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, userCard.button1), __jsx("button", {
    type: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__button,
    onClick: () => Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["onStarredClicked"])(handleStarred, setListTitle),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, userCard.button2))), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__listBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, isLoading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 35,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }) : repositories && __jsx(_RepositoryList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    list: repositories,
    listTitle: listTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
/* harmony import */ var _core_hooks_useStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/hooks/useStrings */ "./src/core/hooks/useStrings/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/UserNotFound/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\imachado\\Desktop\\Develop\\projects\\uolDesafio\\src\\components\\UserNotFound\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// MARK: Hooks
 // MARK: Styles



const UserNotFound = () => {
  const {
    strings
  } = Object(_core_hooks_useStrings__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    userNotFound
  } = strings.components;
  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, userNotFound.warning, " "));
};

/* harmony default export */ __webpack_exports__["default"] = (UserNotFound);

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
// MARK: Libs
 // MARK: Hooks

 // MARK: Interfaces

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
      lineNumber: 37,
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
// MARK: Libs


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

/***/ "./src/core/hooks/useStrings/index.tsx":
/*!*********************************************!*\
  !*** ./src/core/hooks/useStrings/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStrings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "./src/core/hooks/useStrings/interfaces.ts");
// MARK: Libs
 // MARK: Interfaces


function useStrings(initialLanguage) {
  const {
    0: language,
    1: setLanguage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialLanguage || _interfaces__WEBPACK_IMPORTED_MODULE_1__["Language"].ptBR);
  const strings = {
    ptBR: {
      components: {
        repositoryList: {
          notFounded: 'Sem repositórios encontrados :('
        },
        searchBar: {
          button: 'Buscar',
          placeHolder: 'Pesquise o login de um usuário gitHub'
        },
        userCard: {
          subTitle1: 'Repositórios públicos: ',
          subTitle2: 'Seguidores: ',
          button1: 'Repositórios',
          button2: 'Favoritos'
        },
        userNotFound: {
          warning: 'Usuário Não encontrado :('
        }
      }
    },
    enUS: {
      components: {
        repositoryList: {
          notFounded: 'No repositories found :('
        },
        searchBar: {
          button: 'Search',
          placeHolder: 'Search for a gitHub user login'
        },
        userCard: {
          subTitle1: 'Public repositories: ',
          subTitle2: 'Followers: ',
          button1: 'Repos',
          button2: 'Starred'
        },
        userNotFound: {
          warning: 'User Not found :('
        }
      }
    }
  };
  return {
    strings: strings[language],
    language,
    setLanguage
  };
}

/***/ }),

/***/ "./src/core/hooks/useStrings/interfaces.ts":
/*!*************************************************!*\
  !*** ./src/core/hooks/useStrings/interfaces.ts ***!
  \*************************************************/
/*! exports provided: Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
let Language;

(function (Language) {
  Language["ptBR"] = "ptBR";
  Language["enUS"] = "enUS";
})(Language || (Language = {}));

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
// MARK: Libs
 // MARK: Hooks

 // MARK: Components




 // MARK: Styles



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
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    getSearch: search,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), isLoadingSearch && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 60,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 34,
      columnNumber: 9
    }
  }), hasUserNotFound && __jsx(_components_UserNotFound__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVwb3NpdG9yeUxpc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlcG9zaXRvcnlMaXN0L3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlckNhcmQvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VyQ2FyZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlckNhcmQvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VzZXJOb3RGb3VuZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlck5vdEZvdW5kL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb250ZXh0cy9HaXRIdWJDb250ZXh0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9ob29rcy91c2VHaXRIdWIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb3JlL2hvb2tzL3VzZVN0cmluZ3MvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb3JlL2hvb2tzL3VzZVN0cmluZ3MvaW50ZXJmYWNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0hvbWUvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJSZXBvc2l0b3J5TGlzdCIsInByb3BzIiwibGlzdCIsImxpc3RUaXRsZSIsInN0cmluZ3MiLCJ1c2VTdHJpbmdzIiwicmVwb3NpdG9yeUxpc3QiLCJjb21wb25lbnRzIiwic3R5bGVzIiwiY29udGFpbmVyIiwiY29udGFpbmVyX190aXRsZSIsImxlbmd0aCIsIm1hcCIsIl9yZXBvc2l0b3J5IiwiaW5kZXgiLCJodG1sX3VybCIsIm5hbWUiLCJub3RGb3VuZGVkIiwiU2VhcmNoQmFyIiwiZ2V0U2VhcmNoIiwic2VhcmNoQmFyIiwic2VhcmNoVGV4dCIsInNldFNlYXJjaFRleHQiLCJ1c2VTdGF0ZSIsImhhbmRsZUlucHV0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImNvbnRhaW5lcl9faW5wdXQiLCJwbGFjZUhvbGRlciIsImNvbnRhaW5lcl9fYnV0dG9uIiwiYnV0dG9uIiwib25SZXBvc0NsaWNrZWQiLCJoYW5kbGVSZXBvcyIsInNldExpc3RUaXRsZSIsIm9uU3RhcnJlZENsaWNrZWQiLCJoYW5kbGVTdGFycmVkIiwiVXNlckNhcmQiLCJ1c2VyIiwicmVwb3NpdG9yaWVzIiwiaXNMb2FkaW5nIiwidXNlckNhcmQiLCJjb250YWluZXJfX3JvdyIsImF2YXRhcl91cmwiLCJjb250YWluZXJfX2ltYWdlIiwiY29udGFpbmVyX19sb2dpblRleHQiLCJsb2dpbiIsImNvbnRhaW5lcl9faW5mb1RleHQiLCJzdWJUaXRsZTEiLCJwdWJsaWNfcmVwb3MiLCJzdWJUaXRsZTIiLCJmb2xsb3dlcnMiLCJidXR0b24xIiwiYnV0dG9uMiIsImNvbnRhaW5lcl9fbGlzdEJveCIsIlVzZXJOb3RGb3VuZCIsInVzZXJOb3RGb3VuZCIsImNvbnRhaW5lcl9fdGV4dCIsIndhcm5pbmciLCJHaXRIdWJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUdpdEh1YkNvbnRleHQiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkVycm9yIiwiR2l0SHViUHJvdmlkZXIiLCJjaGlsZHJlbiIsImFjdGlvbnMiLCJzdGF0ZSIsInVzZUdpdEh1YiIsImdldFVzZXIiLCJ1c2VyU2VhcmNoIiwiZ2V0UmVwb3NpdG9yaWVzTGlzdCIsImdldFN0YXJyZWRMaXN0IiwiaGFzVXNlck5vdEZvdW5kIiwiaXNMb2FkaW5nU2VhcmNoIiwic2V0VXNlciIsInNldFJlcG9zaXRvcmllcyIsInNldEhhc1VzZXJOb3RGb3VuZCIsInNldElzTG9hZGluZyIsInNldElzTG9hZGluZ1NlYXJjaCIsImNsZWFuIiwicmVzIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwiZXJyIiwiaW5pdGlhbExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsIkxhbmd1YWdlIiwicHRCUiIsImVuVVMiLCJIb21lIiwic2VhcmNoIiwidXNlck5hbWUiLCJtYWluIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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Y2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCIvLyBNQVJLOiBIb29rc1xyXG5pbXBvcnQgdXNlU3RyaW5ncyBmcm9tICdAY29yZS9ob29rcy91c2VTdHJpbmdzJztcclxuLy8gTUFSSzogSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBSZXBvc2l0b3J5TGlzdFByb3BzIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG4vLyBNQVJLOiBTdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBSZXBvc2l0b3J5TGlzdCA9IChwcm9wczogUmVwb3NpdG9yeUxpc3RQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbGlzdCwgbGlzdFRpdGxlIH0gPSBwcm9wcztcclxuICBjb25zdCB7IHN0cmluZ3MgfSA9IHVzZVN0cmluZ3MoKTtcclxuICBjb25zdCB7IHJlcG9zaXRvcnlMaXN0IH0gPSBzdHJpbmdzLmNvbXBvbmVudHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fdGl0bGV9PntsaXN0VGl0bGV9PC9wPlxyXG4gICAgICB7bGlzdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtsaXN0Lm1hcCgoX3JlcG9zaXRvcnksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGtleT17YHJlcG9zaXRvcnkke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtfcmVwb3NpdG9yeS5odG1sX3VybH1cclxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGk+e19yZXBvc2l0b3J5Lm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPntyZXBvc2l0b3J5TGlzdC5ub3RGb3VuZGVkfSA8L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwb3NpdG9yeUxpc3Q7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lcl9fdGl0bGVcIjogXCJzdHlsZXNfY29udGFpbmVyX190aXRsZV9fM3E4NnRcIlxufTtcbiIsIi8vIE1BUks6IExpYnNcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vIE1BUks6IEhvb2tzXHJcbmltcG9ydCB1c2VTdHJpbmdzIGZyb20gJ0Bjb3JlL2hvb2tzL3VzZVN0cmluZ3MnO1xyXG4vLyBNQVJLIEludGVyZmFjZXNcclxuaW1wb3J0IHsgc2VhcmNoQmFyUHJvcHMgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbi8vIE1BUks6IFN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IFNlYXJjaEJhciA9IChwcm9wczogc2VhcmNoQmFyUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGdldFNlYXJjaCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBzdHJpbmdzIH0gPSB1c2VTdHJpbmdzKCk7XHJcbiAgY29uc3QgeyBzZWFyY2hCYXIgfSA9IHN0cmluZ3MuY29tcG9uZW50cztcclxuICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFNlYXJjaFRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBnZXRTZWFyY2goc2VhcmNoVGV4dCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19pbnB1dH1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXR9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3NlYXJjaEJhci5wbGFjZUhvbGRlcn1cclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9ufVxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIHtzZWFyY2hCYXIuYnV0dG9ufVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlc19jb250YWluZXJfXzE5bFJOXCIsXG5cdFwiY29udGFpbmVyX19pbnB1dFwiOiBcInN0eWxlc19jb250YWluZXJfX2lucHV0X18yMjJTUFwiLFxuXHRcImNvbnRhaW5lcl9fYnV0dG9uXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fYnV0dG9uX19ORmh3ZVwiXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIG9uUmVwb3NDbGlja2VkKFxyXG4gIGhhbmRsZVJlcG9zOiAoKSA9PiB2b2lkLFxyXG4gIHNldExpc3RUaXRsZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQsXHJcbik6IHZvaWQge1xyXG4gIGhhbmRsZVJlcG9zKCk7XHJcbiAgc2V0TGlzdFRpdGxlKCdSZXBvc2l0w7NyaW9zOicpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25TdGFycmVkQ2xpY2tlZChcclxuICBoYW5kbGVTdGFycmVkOiAoKSA9PiB2b2lkLFxyXG4gIHNldExpc3RUaXRsZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQsXHJcbik6IHZvaWQge1xyXG4gIGhhbmRsZVN0YXJyZWQoKTtcclxuICBzZXRMaXN0VGl0bGUoJ1N0YXJyZWQ6Jyk7XHJcbn1cclxuIiwiLy8gTUFSSzogTGlic1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gTUFSSzogSG9va3NcclxuaW1wb3J0IHVzZVN0cmluZ3MgZnJvbSAnQGNvcmUvaG9va3MvdXNlU3RyaW5ncyc7XHJcbi8vIE1BUks6IGNvbXBvbmVudHNcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBSZXBvc2l0b3J5TGlzdCBmcm9tICcuLi9SZXBvc2l0b3J5TGlzdCc7XHJcbi8vIE1BUks6IEhlbHByc1xyXG5pbXBvcnQgeyBvblN0YXJyZWRDbGlja2VkLCBvblJlcG9zQ2xpY2tlZCB9IGZyb20gJy4vaGVscGVycyc7XHJcbi8vIE1BUks6IEludGVyZmFjZXNcclxuaW1wb3J0IHsgVXNlckNhcmRQcm9wcyB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuLy8gTUFSSzogU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgVXNlckNhcmQgPSAocHJvcHM6IFVzZXJDYXJkUHJvcHMpID0+IHtcclxuICBjb25zdCB7IHVzZXIsIHJlcG9zaXRvcmllcywgaXNMb2FkaW5nLCBoYW5kbGVSZXBvcywgaGFuZGxlU3RhcnJlZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBzdHJpbmdzIH0gPSB1c2VTdHJpbmdzKCk7XHJcbiAgY29uc3QgeyB1c2VyQ2FyZCB9ID0gc3RyaW5ncy5jb21wb25lbnRzO1xyXG4gIGNvbnN0IFtsaXN0VGl0bGUsIHNldExpc3RUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3Jvd30+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXt1c2VyLmF2YXRhcl91cmx9XHJcbiAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19pbWFnZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fbG9naW5UZXh0fT57dXNlci5sb2dpbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fcm93fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19pbmZvVGV4dH0+XHJcbiAgICAgICAgICAgIHtgJHt1c2VyQ2FyZC5zdWJUaXRsZTF9ICR7dXNlci5wdWJsaWNfcmVwb3N9YH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9faW5mb1RleHR9PlxyXG4gICAgICAgICAgICB7YCR7dXNlckNhcmQuc3ViVGl0bGUyfSAke3VzZXIuZm9sbG93ZXJzfWB9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblJlcG9zQ2xpY2tlZChoYW5kbGVSZXBvcywgc2V0TGlzdFRpdGxlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3VzZXJDYXJkLmJ1dHRvbjF9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblN0YXJyZWRDbGlja2VkKGhhbmRsZVN0YXJyZWQsIHNldExpc3RUaXRsZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt1c2VyQ2FyZC5idXR0b24yfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fbGlzdEJveH0+XHJcbiAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezM1fSAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICByZXBvc2l0b3JpZXMgJiYgKFxyXG4gICAgICAgICAgICA8UmVwb3NpdG9yeUxpc3QgbGlzdD17cmVwb3NpdG9yaWVzfSBsaXN0VGl0bGU9e2xpc3RUaXRsZX0gLz5cclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ2FyZDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fTy1GbXlcIixcblx0XCJjb250YWluZXJfX3Jvd1wiOiBcInN0eWxlc19jb250YWluZXJfX3Jvd19fMmJIN3hcIixcblx0XCJjb250YWluZXJfX2xpc3RCb3hcIjogXCJzdHlsZXNfY29udGFpbmVyX19saXN0Qm94X18yV2xDdlwiLFxuXHRcImNvbnRhaW5lcl9fbG9naW5UZXh0XCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fbG9naW5UZXh0X18yY1VMM1wiLFxuXHRcImNvbnRhaW5lcl9faW5mb1RleHRcIjogXCJzdHlsZXNfY29udGFpbmVyX19pbmZvVGV4dF9fMWNkNlpcIixcblx0XCJjb250YWluZXJfX2ltYWdlXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9faW1hZ2VfXzFINHhBXCIsXG5cdFwiY29udGFpbmVyX19idXR0b25cIjogXCJzdHlsZXNfY29udGFpbmVyX19idXR0b25fXzN1cW8yXCJcbn07XG4iLCIvLyBNQVJLOiBIb29rc1xyXG5pbXBvcnQgdXNlU3RyaW5ncyBmcm9tICdAY29yZS9ob29rcy91c2VTdHJpbmdzJztcclxuLy8gTUFSSzogU3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgVXNlck5vdEZvdW5kID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc3RyaW5ncyB9ID0gdXNlU3RyaW5ncygpO1xyXG4gIGNvbnN0IHsgdXNlck5vdEZvdW5kIH0gPSBzdHJpbmdzLmNvbXBvbmVudHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX190ZXh0fT57dXNlck5vdEZvdW5kLndhcm5pbmd9IDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTm90Rm91bmQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlc19jb250YWluZXJfX2VUMEdpXCIsXG5cdFwiY29udGFpbmVyX190ZXh0XCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fdGV4dF9fMl9kaEtcIlxufTtcbiIsIi8vIE1BUks6IExpYnNcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuLy8gTUFSSzogSG9va3NcclxuaW1wb3J0IHVzZUdpdEh1YiBmcm9tICdAY29yZS9ob29rcy91c2VHaXRIdWInO1xyXG4vLyBNQVJLOiBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IEdpdEh1YkNvbnRleHRJbnRlcmZhY2UgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuY29uc3QgR2l0SHViQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8R2l0SHViQ29udGV4dEludGVyZmFjZT4oXHJcbiAge30gYXMgR2l0SHViQ29udGV4dEludGVyZmFjZSxcclxuKTtcclxuXHJcbmZ1bmN0aW9uIHVzZUdpdEh1YkNvbnRleHQoKTogR2l0SHViQ29udGV4dEludGVyZmFjZSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoR2l0SHViQ29udGV4dCk7XHJcbiAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZVVzZXIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBVc2VyUHJvdmlkZXIuJyk7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59XHJcblxyXG5jb25zdCBHaXRIdWJQcm92aWRlciA9IChwcm9wczogeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBhY3Rpb25zLCBzdGF0ZSB9ID0gdXNlR2l0SHViKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGdldFVzZXIodXNlclNlYXJjaDogc3RyaW5nKSB7XHJcbiAgICBhY3Rpb25zLmdldFVzZXIodXNlclNlYXJjaCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRSZXBvc2l0b3JpZXNMaXN0KCkge1xyXG4gICAgYWN0aW9ucy5nZXRSZXBvc2l0b3JpZXNMaXN0KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRTdGFycmVkTGlzdCgpIHtcclxuICAgIGFjdGlvbnMuZ2V0U3RhcnJlZExpc3QoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R2l0SHViQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGhhc1VzZXJOb3RGb3VuZDogc3RhdGUuaGFzVXNlck5vdEZvdW5kLFxyXG4gICAgICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nLFxyXG4gICAgICAgIGlzTG9hZGluZ1NlYXJjaDogc3RhdGUuaXNMb2FkaW5nU2VhcmNoLFxyXG4gICAgICAgIHJlcG9zaXRvcmllczogc3RhdGUucmVwb3NpdG9yaWVzLFxyXG4gICAgICAgIHVzZXI6IHN0YXRlLnVzZXIsXHJcbiAgICAgICAgZ2V0VXNlcixcclxuICAgICAgICBnZXRSZXBvc2l0b3JpZXNMaXN0LFxyXG4gICAgICAgIGdldFN0YXJyZWRMaXN0LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0dpdEh1YkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IEdpdEh1YlByb3ZpZGVyLCB1c2VHaXRIdWJDb250ZXh0IH07XHJcbiIsIi8vIE1BUks6IExpYnNcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VHaXRIdWIoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtyZXBvc2l0b3JpZXMsIHNldFJlcG9zaXRvcmllc10gPSB1c2VTdGF0ZTxSZXBvc2l0b3J5W10gfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbaGFzVXNlck5vdEZvdW5kLCBzZXRIYXNVc2VyTm90Rm91bmRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZ1NlYXJjaCwgc2V0SXNMb2FkaW5nU2VhcmNoXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gY2xlYW4oKTogdm9pZCB7XHJcbiAgICBzZXRIYXNVc2VyTm90Rm91bmQoZmFsc2UpO1xyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldElzTG9hZGluZ1NlYXJjaChmYWxzZSk7XHJcbiAgICBzZXRSZXBvc2l0b3JpZXMobnVsbCk7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcih1c2VyU2VhcmNoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNsZWFuKCk7XHJcbiAgICBzZXRJc0xvYWRpbmdTZWFyY2godHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQ8VXNlcj4oXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyU2VhcmNofWAsXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFVzZXIocmVzLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldEhhc1VzZXJOb3RGb3VuZCh0cnVlKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzTG9hZGluZ1NlYXJjaChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRSZXBvc2l0b3JpZXNMaXN0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgc2V0UmVwb3NpdG9yaWVzKG51bGwpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXIubG9naW59L3JlcG9zYCxcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFJlcG9zaXRvcmllcyhyZXMuZGF0YSk7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhcnJlZExpc3QoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBzZXRSZXBvc2l0b3JpZXMobnVsbCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICAgIGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlci5sb2dpbn0vc3RhcnJlZGAsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRSZXBvc2l0b3JpZXMocmVzLmRhdGEpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdGF0ZToge1xyXG4gICAgICBpc0xvYWRpbmcsXHJcbiAgICAgIHVzZXIsXHJcbiAgICAgIGhhc1VzZXJOb3RGb3VuZCxcclxuICAgICAgcmVwb3NpdG9yaWVzLFxyXG4gICAgICBpc0xvYWRpbmdTZWFyY2gsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICBnZXRVc2VyLFxyXG4gICAgICBnZXRSZXBvc2l0b3JpZXNMaXN0LFxyXG4gICAgICBnZXRTdGFycmVkTGlzdCxcclxuICAgICAgY2xlYW4sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiLy8gTUFSSzogTGlic1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gTUFSSzogSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBMYW5ndWFnZSwgU3RyaW5nc1R5cGUgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3RyaW5ncyhpbml0aWFsTGFuZ3VhZ2U/OiBMYW5ndWFnZSkge1xyXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGU8TGFuZ3VhZ2U+KFxyXG4gICAgaW5pdGlhbExhbmd1YWdlIHx8IExhbmd1YWdlLnB0QlIsXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgc3RyaW5nczogeyBbbGFuZ3VhZ2U6IHN0cmluZ106IFN0cmluZ3NUeXBlIH0gPSB7XHJcbiAgICBwdEJSOiB7XHJcbiAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICByZXBvc2l0b3J5TGlzdDoge1xyXG4gICAgICAgICAgbm90Rm91bmRlZDogJ1NlbSByZXBvc2l0w7NyaW9zIGVuY29udHJhZG9zIDooJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlYXJjaEJhcjoge1xyXG4gICAgICAgICAgYnV0dG9uOiAnQnVzY2FyJyxcclxuICAgICAgICAgIHBsYWNlSG9sZGVyOiAnUGVzcXVpc2UgbyBsb2dpbiBkZSB1bSB1c3XDoXJpbyBnaXRIdWInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXNlckNhcmQ6IHtcclxuICAgICAgICAgIHN1YlRpdGxlMTogJ1JlcG9zaXTDs3Jpb3MgcMO6YmxpY29zOiAnLFxyXG4gICAgICAgICAgc3ViVGl0bGUyOiAnU2VndWlkb3JlczogJyxcclxuICAgICAgICAgIGJ1dHRvbjE6ICdSZXBvc2l0w7NyaW9zJyxcclxuICAgICAgICAgIGJ1dHRvbjI6ICdGYXZvcml0b3MnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXNlck5vdEZvdW5kOiB7XHJcbiAgICAgICAgICB3YXJuaW5nOiAnVXN1w6FyaW8gTsOjbyBlbmNvbnRyYWRvIDooJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGVuVVM6IHtcclxuICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIHJlcG9zaXRvcnlMaXN0OiB7XHJcbiAgICAgICAgICBub3RGb3VuZGVkOiAnTm8gcmVwb3NpdG9yaWVzIGZvdW5kIDooJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlYXJjaEJhcjoge1xyXG4gICAgICAgICAgYnV0dG9uOiAnU2VhcmNoJyxcclxuICAgICAgICAgIHBsYWNlSG9sZGVyOiAnU2VhcmNoIGZvciBhIGdpdEh1YiB1c2VyIGxvZ2luJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVzZXJDYXJkOiB7XHJcbiAgICAgICAgICBzdWJUaXRsZTE6ICdQdWJsaWMgcmVwb3NpdG9yaWVzOiAnLFxyXG4gICAgICAgICAgc3ViVGl0bGUyOiAnRm9sbG93ZXJzOiAnLFxyXG4gICAgICAgICAgYnV0dG9uMTogJ1JlcG9zJyxcclxuICAgICAgICAgIGJ1dHRvbjI6ICdTdGFycmVkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVzZXJOb3RGb3VuZDoge1xyXG4gICAgICAgICAgd2FybmluZzogJ1VzZXIgTm90IGZvdW5kIDooJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RyaW5nczogc3RyaW5nc1tsYW5ndWFnZV0sXHJcbiAgICBsYW5ndWFnZSxcclxuICAgIHNldExhbmd1YWdlLFxyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gTGFuZ3VhZ2Uge1xyXG4gIHB0QlIgPSAncHRCUicsXHJcbiAgZW5VUyA9ICdlblVTJyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdHJpbmdzVHlwZSB7XHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgcmVwb3NpdG9yeUxpc3Q6IHtcclxuICAgICAgbm90Rm91bmRlZDogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIHNlYXJjaEJhcjoge1xyXG4gICAgICBidXR0b246IHN0cmluZztcclxuICAgICAgcGxhY2VIb2xkZXI6IHN0cmluZztcclxuICAgIH07XHJcbiAgICB1c2VyQ2FyZDoge1xyXG4gICAgICBzdWJUaXRsZTE6IHN0cmluZztcclxuICAgICAgc3ViVGl0bGUyOiBzdHJpbmc7XHJcbiAgICAgIGJ1dHRvbjE6IHN0cmluZztcclxuICAgICAgYnV0dG9uMjogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIHVzZXJOb3RGb3VuZDoge1xyXG4gICAgICB3YXJuaW5nOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuIiwiLy8gTUFSSzogTGlic1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBNQVJLOiBIb29rc1xyXG5pbXBvcnQgeyB1c2VHaXRIdWJDb250ZXh0IH0gZnJvbSAnQGNvcmUvY29udGV4dHMvR2l0SHViQ29udGV4dCc7XHJcbi8vIE1BUks6IENvbXBvbmVudHNcclxuaW1wb3J0IFVzZXJDYXJkIGZyb20gJ0Bjb21wb25lbnRzL1VzZXJDYXJkJztcclxuaW1wb3J0IFVzZXJOb3RGb3VuZCBmcm9tICdAY29tcG9uZW50cy9Vc2VyTm90Rm91bmQnO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICdAY29tcG9uZW50cy9TZWFyY2hCYXInO1xyXG4vLyBNQVJLOiBTdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHVzZXIsXHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBoYXNVc2VyTm90Rm91bmQsXHJcbiAgICBpc0xvYWRpbmdTZWFyY2gsXHJcbiAgICByZXBvc2l0b3JpZXMsXHJcbiAgICBnZXRVc2VyLFxyXG4gICAgZ2V0UmVwb3NpdG9yaWVzTGlzdCxcclxuICAgIGdldFN0YXJyZWRMaXN0LFxyXG4gIH0gPSB1c2VHaXRIdWJDb250ZXh0KCk7XHJcblxyXG4gIGZ1bmN0aW9uIHNlYXJjaCh1c2VyTmFtZTogc3RyaW5nKSB7XHJcbiAgICBnZXRVc2VyKHVzZXJOYW1lKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8U2VhcmNoQmFyIGdldFNlYXJjaD17c2VhcmNofSAvPlxyXG4gICAgICB7aXNMb2FkaW5nU2VhcmNoICYmIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezYwfSAvPn1cclxuICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgIDxVc2VyQ2FyZFxyXG4gICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgcmVwb3NpdG9yaWVzPXtyZXBvc2l0b3JpZXN9XHJcbiAgICAgICAgICBoYW5kbGVSZXBvcz17Z2V0UmVwb3NpdG9yaWVzTGlzdH1cclxuICAgICAgICAgIGhhbmRsZVN0YXJyZWQ9e2dldFN0YXJyZWRMaXN0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtoYXNVc2VyTm90Rm91bmQgJiYgPFVzZXJOb3RGb3VuZCAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwic3R5bGVzX21haW5fXzFKSjBoXCJcbn07XG4iLCJpbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9