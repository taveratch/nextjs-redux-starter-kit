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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
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
/* 7 */,
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
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 13 */,
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
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32);


/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./lib/I18n.ts
var I18n = __webpack_require__(8);

// CONCATENATED MODULE: ./components/utils/colors.ts
var colors = {
  'green': '21ce99',
  'darkgreen': '27ae60',
  'carrot': 'e67e22',
  "emerald": '2ecc71',
  'white': 'ffffff',
  'black': '000000',
  'greyF5': 'f5f5f5',
  'blue': '108ee9',
  'darkgrey': '3E3E3E',
  'lightgrey': '6c7980',
  'red': 'e74c3c',
  'smokywhite': 'fbfbfb',
  'whitegrey': 'fafafa',
  'divider': 'e9e9e9',
  'lightblue': '84C0EB48',
  'pink': 'ff7979',
  'orange': 'ffbe76',
  'mint': '00b894',
  'reptile_green': '26de81'
};
/* harmony default export */ var utils_colors = ({
  get: function get(name) {
    return "#".concat(colors[name] || colors['white']);
  }
});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(12);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Label.ts


var Label = external_styled_components_default()("label").withConfig({
  displayName: "Label",
  componentId: "sc-1jyjlwt-0"
})(["color:", ";font-size:1em;margin:0px;padding:0px;line-height:1.5em;font-weight:", ";text-decoration:", ";"], function (props) {
  return !!props.color ? utils_colors.get(props.color) : 'inherit';
}, function (props) {
  return props.thin ? 'light' : props.bold ? 'bold' : 500;
}, function (props) {
  return props.underline ? 'underline' : 'inherit';
});
var ThinLabel = external_styled_components_default()(Label).withConfig({
  displayName: "Label__ThinLabel",
  componentId: "sc-1jyjlwt-1"
})(["font-weight:'light';"]);
var SubLabel = external_styled_components_default()(Label).withConfig({
  displayName: "Label__SubLabel",
  componentId: "sc-1jyjlwt-2"
})(["font-size:0.9em;"]);
var Remark = external_styled_components_default()(Label).withConfig({
  displayName: "Label__Remark",
  componentId: "sc-1jyjlwt-3"
})(["font-size:0.7em;"]);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./redux/actionTypes/index.ts + 2 modules
var actionTypes = __webpack_require__(2);

// CONCATENATED MODULE: ./redux/actions/app/increament.ts

var actions = {
  increase: function increase() {
    return function (dispatch) {
      dispatch({
        type: actionTypes["a" /* default */].INCREASE
      });
    };
  }
};
/* harmony default export */ var increament = (actions);
// EXTERNAL MODULE: external "react-redux-loading-bar"
var external_react_redux_loading_bar_ = __webpack_require__(5);

// CONCATENATED MODULE: ./redux/actions/app/loading.ts


var loading_actions = {
  showLoading: function showLoading(isLoading, dispatch) {
    if (isLoading) dispatch(Object(external_react_redux_loading_bar_["showLoading"])());else dispatch(Object(external_react_redux_loading_bar_["hideLoading"])());
    return dispatch({
      type: actionTypes["a" /* default */].APP_TOGGLE_LOADING,
      payload: {
        isLoading: isLoading
      }
    });
  }
};
/* harmony default export */ var loading = (loading_actions);
// CONCATENATED MODULE: ./redux/actions/app/index.ts


var app_actions = {
  increament: increament,
  loading: loading
};
/* harmony default export */ var app = (app_actions);
// CONCATENATED MODULE: ./redux/actions/index.ts

var actions_actions = {
  app: app
};
/* harmony default export */ var redux_actions = (actions_actions);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/main/index.tsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var main_MainPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainPage, _React$Component);

  function MainPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MainPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleButtonClick", function () {
      _this.props.increase();
    });

    return _this;
  }

  _createClass(MainPage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h3", null, I18n["a" /* default */].t('app.name')), external_react_default.a.createElement(Label, {
        color: "red"
      }, this.props.value), external_react_default.a.createElement("button", {
        onClick: this.handleButtonClick
      }, "Increase"));
    }
  }]);

  return MainPage;
}(external_react_default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return state.app_increament;
};

var mapDispatchToProps = {
  increase: redux_actions.app.increament.increase
};
/* harmony default export */ var main = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(main_MainPage));

/***/ })
/******/ ]);