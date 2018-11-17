module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./redux/actionTypes/app.ts
var actionTypes = {
  INCREASE: 'INCREASE',
  APP_TOGGLE_LOADING: 'APP_TOGGLE_LOADING'
};
/* harmony default export */ var app = (actionTypes);
// CONCATENATED MODULE: ./redux/actionTypes/test.ts
var test_actionTypes = {
  TEST: 'TEST'
};
/* harmony default export */ var test = (test_actionTypes);
// CONCATENATED MODULE: ./redux/actionTypes/index.ts
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var actionTypes_actionTypes = _objectSpread({}, app, test);

/* harmony default export */ var redux_actionTypes = __webpack_exports__["a"] = (actionTypes_actionTypes);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux-loading-bar");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(3);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./lib/auth/session.ts


var getCookieFromServer = function getCookieFromServer(key, _ref) {
  var req = _ref.req;
  if (!req) return undefined;

  if (!req.headers.cookie) {
    return undefined;
  }

  var rawCookie = req.headers.cookie.split(";").find(function (c) {
    return c.trim().startsWith("".concat(key, "="));
  });

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split("=")[1];
};

var session_getCookieFromBrowser = function getCookieFromBrowser(key) {
  return external_js_cookie_default.a.get(key);
};

/* harmony default export */ var session = ({
  setCookie: function setCookie(key, value) {
    return external_js_cookie_default.a.set(key, value, {
      path: '/'
    });
  },
  getCookie: function getCookie(key) {
    var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return  false ? undefined : getCookieFromServer(key, ctx);
  },
  removeCookie: function removeCookie(key) {
    return external_js_cookie_default.a.remove(key);
  }
});
// CONCATENATED MODULE: ./lib/locale.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var KEY = 'locale';
var DEFAULT_LOCALE = 'th';
var SUPPORTED_LOCALES = ['en', 'th'];

var locale_Locale =
/*#__PURE__*/
function () {
  function Locale() {
    _classCallCheck(this, Locale);
  }

  _createClass(Locale, [{
    key: "get",
    value: function get(ctx) {
      var locale = session.getCookie(KEY, ctx);
      if (locale) return locale;
      return DEFAULT_LOCALE;
    }
  }, {
    key: "set",
    value: function set(locale) {
      if (SUPPORTED_LOCALES.indexOf(locale) >= 0) session.setCookie(KEY, locale);else console.error(locale + ' locale is not supported');
    }
  }]);

  return Locale;
}();

var locale_locale = new locale_Locale();
/* harmony default export */ var lib_locale = __webpack_exports__["a"] = (locale_locale);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intl_messageformat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var supportedLocales = ['en', 'th'];

var mapping = function mapping(json, locale) {
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.mapValues(json, function (x) {
    return x[locale] || "";
  });
};

var I18n =
/*#__PURE__*/
function () {
  function I18n() {
    var ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, I18n);

    _defineProperty(this, "locale", "");

    _defineProperty(this, "message", {});

    this.init(ctx);
  }

  _createClass(I18n, [{
    key: "init",
    value: function init(ctx) {
      var _this = this;

      this.locale = lib_locale__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].get(ctx);
      if (supportedLocales.indexOf(this.locale) < 0) this.locale = 'en';
      this.message = {};

      var localizationData = _objectSpread({}, __webpack_require__(14).default);

      supportedLocales.forEach(function (locale) {
        _this.message[_this.locale] = mapping(localizationData, _this.locale);
      });
    }
  }, {
    key: "t",
    value: function t(key) {
      var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var m = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.message, [this.locale, key]);

      if (!m) throw new Error("".concat(key, " was not found for internationalization"));
      var msg = new intl_messageformat__WEBPACK_IMPORTED_MODULE_0___default.a(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.message, [this.locale, key]), this.locale);
      return msg.format(opt);
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "withContext",
    value: function withContext(ctx) {
      this.init(ctx);
    }
  }]);

  return I18n;
}();

var i18n = new I18n();
/* harmony default export */ __webpack_exports__["a"] = (i18n);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("intl-messageformat");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

 // import styles from 'components/app/style'

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Next.JS with Redux"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/jquery-3.3.1.min.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/custom.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/bootstrap/bootstrap.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/bootstrap/bootstrap-reboot.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/bootstrap/bootstrap-grid.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/bootstrap/bootstrap.bundle.min.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/font/font.css"
  }));
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "app.name": {
    en: "Next.JS With Redux",
    th: "Next.JS With Redux (ภาษาไทย)"
  }
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(15);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(16);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: ./lib/locale.ts + 1 modules
var locale = __webpack_require__(6);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(1);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./utils/datetime.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var datetime_Datetime =
/*#__PURE__*/
function () {
  function Datetime(ctx) {
    _classCallCheck(this, Datetime);

    external_moment_default.a.locale(locale["a" /* default */].get(ctx));
    this.readableFormat = 'D MMM YYYY';
  }

  _createClass(Datetime, [{
    key: "formatToAppString",
    value: function formatToAppString(isoString) {
      var withTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var format = this.readableFormat;
      if (withTime) format += " H:mm";
      return external_moment_default()(isoString).format(format);
    }
  }, {
    key: "getDaysFromNow",
    value: function getDaysFromNow(lastDateISOString) {
      return external_moment_default()(lastDateISOString).diff(external_moment_default()(), 'days');
    }
  }, {
    key: "getDaysUntilNow",
    value: function getDaysUntilNow(isoString) {
      return external_moment_default()().diff(external_moment_default()(isoString), 'days');
    }
  }, {
    key: "now",
    value: function now() {
      return external_moment_default()();
    }
  }, {
    key: "formatToYYYYMMDDString",
    value: function formatToYYYYMMDDString(datetime) {
      return datetime.format("YYYY-MM-DD");
    }
  }, {
    key: "convertFromYYYYDDMMToDate",
    value: function convertFromYYYYDDMMToDate(string) {
      return external_moment_default()(string, "YYYY-MM-DD");
    }
  }, {
    key: "formatToDDMMMYYYYString",
    value: function formatToDDMMMYYYYString(datetime) {
      return datetime.format('DD MMM YYYY');
    }
  }, {
    key: "diff",
    value: function diff(aISOString, bISOString) {
      return external_moment_default()(aISOString).diff(external_moment_default()(bISOString), 'days');
    }
  }, {
    key: "clone",
    value: function clone(datetime) {
      return datetime.clone();
    }
  }, {
    key: "createDatetime",
    value: function createDatetime(isoString) {
      return external_moment_default()(isoString);
    }
  }], [{
    key: "getInstance",
    value: function getInstance(ctx) {
      if (ctx) {
        Datetime.datetime = new Datetime(ctx);
      }

      if (Datetime.datetime) return Datetime.datetime;
      Datetime.datetime = new Datetime(ctx);
      return Datetime.datetime;
    }
  }]);

  return Datetime;
}();

_defineProperty(datetime_Datetime, "datetime", null);

/* harmony default export */ var datetime = (datetime_Datetime);
// EXTERNAL MODULE: ./pages/head.tsx
var head = __webpack_require__(13);

// EXTERNAL MODULE: ./lib/I18n.ts
var I18n = __webpack_require__(8);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(10);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(11);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(17);

// EXTERNAL MODULE: external "react-redux-loading-bar"
var external_react_redux_loading_bar_ = __webpack_require__(5);

// EXTERNAL MODULE: ./redux/actionTypes/index.ts + 2 modules
var actionTypes = __webpack_require__(2);

// CONCATENATED MODULE: ./redux/reducers/app/increament.ts
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { increament_defineProperty(target, key, source[key]); }); } return target; }

function increament_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var increament_initialState = {
  value: 0
};
/* harmony default export */ var increament = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : increament_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes["a" /* default */].INCREASE:
      {
        return _objectSpread({}, state, {
          value: state.value + 1
        });
      }

    default:
      {
        return state;
      }
  }
});
// CONCATENATED MODULE: ./redux/reducers/app/loading.ts

var loading_initialState = {
  isLoading: false
};
/* harmony default export */ var loading = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : loading_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes["a" /* default */].APP_TOGGLE_LOADING:
      return {
        isLoading: action.payload.isLoading
      };

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/app/index.ts


/* harmony default export */ var app = ({
  increament: increament,
  loading: loading
});
// CONCATENATED MODULE: ./redux/reducers/index.ts



/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  app_increament: app.increament,
  app_loading: app.loading,
  loadingBar: external_react_redux_loading_bar_["loadingBarReducer"]
}));
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(18);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./redux/store.ts





var store_initializeStore = function initializeStore(initialState) {
  return Object(external_redux_["createStore"])(reducers, initialState, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a, Object(external_react_redux_loading_bar_["loadingBarMiddleware"])())));
};
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(19);
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// CONCATENATED MODULE: ./pages/_app.tsx


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app_createClass(Constructor, protoProps, staticProps) { if (protoProps) _app_defineProperties(Constructor.prototype, protoProps); if (staticProps) _app_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _app_classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _app_createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head["default"], null), external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement(external_react_redux_["Provider"], {
        store: store
      }, external_react_default.a.createElement(Component, pageProps))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var Component, ctx;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                // Apply localization for SSR
                I18n["a" /* default */].withContext(ctx);
                datetime.getInstance(ctx);

                if (!Component.getInitialProps) {
                  _context.next = 9;
                  break;
                }

                _context.next = 6;
                return Component.getInitialProps(ctx);

              case 6:
                _context.t0 = _context.sent;
                _context.next = 10;
                break;

              case 9:
                _context.t0 = {};

              case 10:
                _context.t1 = _context.t0;
                return _context.abrupt("return", {
                  pageProps: _context.t1
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(store_initializeStore)(_app_MyApp));

/***/ })
/******/ ]);