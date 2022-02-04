/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/bws_shubox.js":
/*!**************************************!*\
  !*** ./app/javascript/bws_shubox.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shubox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shubox */ "./node_modules/shubox/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var BwsShubox = /*#__PURE__*/function () {
  function BwsShubox() {
    var _this = this;

    _classCallCheck(this, BwsShubox);

    document.addEventListener('turbolinks:load', function (event) {
      _this.connect();
    });
  }

  _createClass(BwsShubox, [{
    key: "connect",
    value: function connect() {
      var _this2 = this;

      this.hideThreddedSubmitButton();

      if (document.querySelectorAll(".thredded--form textarea").length) {
        new shubox__WEBPACK_IMPORTED_MODULE_0__["default"](".thredded--form textarea", {
          key: window.BwsConfig.shuboxKey,
          transformName: "auto-orient",
          textBehavior: "insertAtCursor",
          clickable: ".thredded--form .click-to-add-image",
          successTemplate: "\n![Image]({{s3url}})\n",
          error: function error(file, message) {
            alert("Upload failed: " + message);
          },
          success: function success(file) {
            _this2.displayPreview();
          }
        });
      }
    }
  }, {
    key: "displayPreview",
    value: function displayPreview() {
      // trigger event that will make the preview display (in Thredded)
      document.querySelector('textarea[name$="[content]"]').dispatchEvent(new Event("input"));
    }
  }, {
    key: "hideThreddedSubmitButton",
    value: function hideThreddedSubmitButton() {// currently not doing this
      // $('form[data-thredded-topic-form], form[data-thredded-post-form]').find('input[type=submit]').hide();
    }
  }]);

  return BwsShubox;
}();

var bwsShubox = new BwsShubox();

/***/ }),

/***/ "./app/javascript/controllers sync recursive .js$":
/*!**********************************************!*\
  !*** ./app/javascript/controllers sync .js$ ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app_debug_controller.js": "./app/javascript/controllers/app_debug_controller.js",
	"./app_logged_out_controller.js": "./app/javascript/controllers/app_logged_out_controller.js",
	"./app_messages_controller.js": "./app/javascript/controllers/app_messages_controller.js",
	"./app_qr_code_scanner_controller.js": "./app/javascript/controllers/app_qr_code_scanner_controller.js",
	"./app_upload_controller.js": "./app/javascript/controllers/app_upload_controller.js",
	"./app_version_controller.js": "./app/javascript/controllers/app_version_controller.js",
	"./application_controller.js": "./app/javascript/controllers/application_controller.js",
	"./autosubmit_controller.js": "./app/javascript/controllers/autosubmit_controller.js",
	"./batchables_controller.js": "./app/javascript/controllers/batchables_controller.js",
	"./choices_controller.js": "./app/javascript/controllers/choices_controller.js",
	"./clickable_rows_controller.js": "./app/javascript/controllers/clickable_rows_controller.js",
	"./combobox_controller.js": "./app/javascript/controllers/combobox_controller.js",
	"./contact_controller.js": "./app/javascript/controllers/contact_controller.js",
	"./datatables_controller.js": "./app/javascript/controllers/datatables_controller.js",
	"./direct_upload_controller.js": "./app/javascript/controllers/direct_upload_controller.js",
	"./edit_one_by_one_controller.js": "./app/javascript/controllers/edit_one_by_one_controller.js",
	"./excel_buttons_controller.js": "./app/javascript/controllers/excel_buttons_controller.js",
	"./input_fetch_display_controller.js": "./app/javascript/controllers/input_fetch_display_controller.js",
	"./job_history_filter_controller.js": "./app/javascript/controllers/job_history_filter_controller.js",
	"./job_note_controller.js": "./app/javascript/controllers/job_note_controller.js",
	"./order_delivery_destination_controller.js": "./app/javascript/controllers/order_delivery_destination_controller.js",
	"./package_picker_controller.js": "./app/javascript/controllers/package_picker_controller.js",
	"./package_qr_code_scanner_controller.js": "./app/javascript/controllers/package_qr_code_scanner_controller.js",
	"./package_row_controller.js": "./app/javascript/controllers/package_row_controller.js",
	"./product_code_field_controller.js": "./app/javascript/controllers/product_code_field_controller.js",
	"./sales_contact_controller.js": "./app/javascript/controllers/sales_contact_controller.js",
	"./sales_contacts_controller.js": "./app/javascript/controllers/sales_contacts_controller.js",
	"./test_controller.js": "./app/javascript/controllers/test_controller.js",
	"./turbolinks_form_fixer_controller.js": "./app/javascript/controllers/turbolinks_form_fixer_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/controllers sync recursive .js$";

/***/ }),

/***/ "./app/javascript/controllers/app_debug_controller.js":
/*!************************************************************!*\
  !*** ./app/javascript/controllers/app_debug_controller.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MessageHandler = /*#__PURE__*/function () {
  function MessageHandler(handlerName) {
    _classCallCheck(this, MessageHandler);

    this.handlerName = handlerName;
  }

  _createClass(MessageHandler, [{
    key: "postMessage",
    value: function postMessage(message) {
      this.checkAndLog(message);
    }
  }, {
    key: "checkAndLog",
    value: function checkAndLog(message) {
      if (message == undefined) {
        console.error("when calling postMessage must specify a message");
        return false;
      } else {
        console.info("window.webkit[debug].messageHandlers.".concat(this.handlerName, ".postMessage(").concat(message, ");")); // eslint-disable-line no-console

        return true;
      }
    }
  }]);

  return MessageHandler;
}();

var GetAppVersionMessageHandler = /*#__PURE__*/function (_MessageHandler) {
  _inherits(GetAppVersionMessageHandler, _MessageHandler);

  var _super = _createSuper(GetAppVersionMessageHandler);

  function GetAppVersionMessageHandler() {
    _classCallCheck(this, GetAppVersionMessageHandler);

    return _super.apply(this, arguments);
  }

  _createClass(GetAppVersionMessageHandler, [{
    key: "postMessage",
    value: function postMessage(message) {
      if (this.checkAndLog(message)) {
        window.Jshost.appVersion("vDEV");
      }
    }
  }]);

  return GetAppVersionMessageHandler;
}(MessageHandler);

var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super2 = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super2.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      if (!window.webkit) {
        this.messageHandlers = {};
        ["hasLoggedOut", "showQRCodeScanner", "openUrl", "setUnreadCount", "startOnedriveUpload"].forEach(function (messageHandler) {
          _this.messageHandlers[messageHandler] = new MessageHandler(messageHandler);
        });
        this.messageHandlers.getAppVersion = new GetAppVersionMessageHandler("getAppVersion");
        window.webkit = this;
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (window.webkit && window.webkit == this) {
        window.webkit = null;
      }
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/javascript/controllers/app_logged_out_controller.js":
/*!*****************************************************************!*\
  !*** ./app/javascript/controllers/app_logged_out_controller.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      if (window.webkit) {
        window.webkit.messageHandlers.hasLoggedOut.postMessage(true);
      } else {
        console.info("BWS logged out (non-app)."); // eslint-disable-line no-console
      }
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/javascript/controllers/app_messages_controller.js":
/*!***************************************************************!*\
  !*** ./app/javascript/controllers/app_messages_controller.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.log("connect");
      var count = this.data.get("unreadCount");

      if (count === "0" || count) {
        this.setUnreadCount(count);
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.log("disconnect");
    }
  }, {
    key: "setUnreadCountFromInput",
    value: function setUnreadCountFromInput() {
      var count = this.countTarget.value;
      this.setUnreadCount(count);
    }
  }, {
    key: "setUnreadCount",
    value: function setUnreadCount(count) {
      this.log("setUnreadCount.postMessage(".concat(count, ")"));

      if (window.webkit) {
        window.webkit.messageHandlers.setUnreadCount.postMessage(count);
      } else {
        this.log("no window.webkit found", "asError");
      }
    }
  }, {
    key: "log",
    value: function log(message, asError) {
      if (asError) {
        console.error("AppMessages: ".concat(message));
      } else {
        console.log("AppMessages: ".concat(message)); // eslint-disable-line no-console
      }

      if (this.hasLogTarget) {
        this.logTarget.innerHTML = "".concat(this.logTarget.innerHTML).concat(message, "\n");
      }
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["count", "log"];


/***/ }),

/***/ "./app/javascript/controllers/app_qr_code_scanner_controller.js":
/*!**********************************************************************!*\
  !*** ./app/javascript/controllers/app_qr_code_scanner_controller.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {// this.log("AppQrCodeScannerController connect");
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      // this.log("AppQrCodeScannerController disconnect");
      this.unsetCallback();
    }
  }, {
    key: "scan",
    value: function scan() {
      this.setupCallback();
      this.showScanner(true);
    }
  }, {
    key: "showScanner",
    value: function showScanner(show) {
      this.log("showQRCodeScanner.postMessage(".concat(show, ")"));

      if (window.webkit) {
        window.webkit.messageHandlers.showQRCodeScanner.postMessage(show);
      } else {
        this.log("no window.webkit found", "asWarning");
      }
    }
  }, {
    key: "setupCallback",
    value: function setupCallback() {
      var _this = this;

      if (window.Jshost) {
        window.Jshost.setQRCodeScannedCallback(function (url) {
          return _this.qrCodeScanned(url);
        });
      }
    }
  }, {
    key: "unsetCallback",
    value: function unsetCallback() {
      if (window.Jshost) {
        window.Jshost.setQRCodeScannedCallback(null);
      }
    }
  }, {
    key: "qrCodeScanned",
    value: function qrCodeScanned(url) {
      this.log("I have been called back with ".concat(url));

      if (this.hasUrlTarget) {
        this.urlTarget.value = url;
      }

      this.unsetCallback();
      this.showScanner(false);
    }
  }, {
    key: "log",
    value: function log(message, asWarning) {
      if (asWarning) {
        console.warn("AppQrCodeScannerController: ".concat(message));
      } else {
        console.log("AppQrCodeScannerController: ".concat(message)); // eslint-disable-line no-console
      }

      if (this.hasLogTarget) {
        this.logTarget.innerHTML = "".concat(this.logTarget.innerHTML).concat(message, "\n");
      }
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["url", "log"];


/***/ }),

/***/ "./app/javascript/controllers/app_upload_controller.js":
/*!*************************************************************!*\
  !*** ./app/javascript/controllers/app_upload_controller.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {// this.log("connect");
    }
  }, {
    key: "disconnect",
    value: function disconnect() {// this.log("disconnect");
    }
  }, {
    key: "startOnedriveUpload",
    value: function startOnedriveUpload() {
      var objectUri = this.objectUriTarget.value;
      this.log("startOnedriveUpload.postMessage(".concat(objectUri, ")"));

      if (window.webkit) {
        window.webkit.messageHandlers.startOnedriveUpload.postMessage(objectUri);
      } else {
        this.log("no window.webkit found", "asError");
      }
    }
  }, {
    key: "log",
    value: function log(message, asError) {
      if (asError) {
        console.error("AppUpload: ".concat(message));
      } else {
        console.log("AppUpload: ".concat(message)); // eslint-disable-line no-console
      }

      if (this.hasLogTarget) {
        this.logTarget.innerHTML = "".concat(this.logTarget.innerHTML).concat(message, "\n");
      }
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["log", "objectUri"];


/***/ }),

/***/ "./app/javascript/controllers/app_version_controller.js":
/*!**************************************************************!*\
  !*** ./app/javascript/controllers/app_version_controller.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      if (window.Jshost.versionString) {
        this.displayVersionString(window.Jshost.versionString);
      } else if (window.webkit) {
        window.Jshost.requestVersionString(function (versionString) {
          return _this.displayVersionString(versionString);
        });
      } else {
        this.displayVersionString("non-app");
        console.info("No Version String (non-app)."); // eslint-disable-line no-console
      }
    }
  }, {
    key: "displayVersionString",
    value: function displayVersionString(versionString) {
      this.element.innerText = versionString;
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/javascript/controllers/application_controller.js":
/*!**************************************************************!*\
  !*** ./app/javascript/controllers/application_controller.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);



/***/ }),

/***/ "./app/javascript/controllers/autosubmit_controller.js":
/*!*************************************************************!*\
  !*** ./app/javascript/controllers/autosubmit_controller.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
  allows a input to become an autosubmit
 */

var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      if (this.hasHidableTarget) {
        $(this.hidableTarget).hide();
      }

      var _iterator = _createForOfIteratorHelper(this.controlTargets),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var control = _step.value;
          control.addEventListener("change", function (event) {
            _this.controlChanged(event.target);
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "controlChanged",
    value: function controlChanged(control) {
      var form = $(control).closest("form");
      $(form).find(":submit").attr("disabled", true).addClass("submit--submitting");
      form.submit();
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["control", "hidable"];


/***/ }),

/***/ "./app/javascript/controllers/batchables_controller.js":
/*!*************************************************************!*\
  !*** ./app/javascript/controllers/batchables_controller.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-env es6 */


var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      if (this.hasFormTarget) {
        this.form = this.formTarget;
      } else if (this.element.tagName.toUpperCase() == "FORM") {
        this.form = this.element;
      } else {
        console.error("Batchables controller must specify form target or be on a form");
      }

      this.allIdsCheckbox = document.getElementById("all-ids");

      if (!this.allIdsCheckbox) {
        console.error("Batchables *controller* requires an all ids checkbox -- otherwise maybe you just need a batch form?");
      }

      this.setShiftCheckboxSource(false);

      if (this.data.get("initiallyChecked") === "prespecified") {
        // see BatchHelper::PRESPECIFIED
        this.checkAllPrespecifiedIds();
      }

      this.setCheckboxCallbacks();
      this.ensureStateOfAllIdsCheckbox();
    }
  }, {
    key: "setCheckboxCallbacks",
    value: function setCheckboxCallbacks() {
      var _this = this;

      var _iterator = _createForOfIteratorHelper(this.idCheckboxes()),
          _step;

      try {
        var _loop = function _loop() {
          var checkbox = _step.value;
          checkbox.addEventListener("click", function (event) {
            _this._checkboxClicked(event, checkbox);
          });
          checkbox.addEventListener("mouseover", function (event) {
            _this._checkboxHover(event, checkbox, true);
          });
          checkbox.addEventListener("mouseleave", function (event) {
            _this._checkboxHover(event, checkbox, false);
          });
          checkbox.addEventListener("change", function () {
            _this.ensureStateOfAllIdsCheckbox();
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.allIdsCheckbox.addEventListener("change", function () {
        _this.addIdsCheckboxChanged();
      });
    }
  }, {
    key: "_checkboxClicked",
    value: function _checkboxClicked(event, checkbox) {
      if (event.shiftKey) {
        var _iterator2 = _createForOfIteratorHelper(this._shiftTargets(checkbox)),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var target = _step2.value;
            target.checked = true;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        if (checkbox.checked) {
          this.setShiftCheckboxSource(checkbox);
        } else {
          this.setShiftCheckboxSource(false);
        }
      }
    }
  }, {
    key: "setShiftCheckboxSource",
    value: function setShiftCheckboxSource(checkbox) {
      if (this.shiftCheckboxSource) {
        this.shiftCheckboxSource.closest("td, th").classList.remove("id-checkbox--shift-checkbox-source");
      }

      if (checkbox) {
        this.shiftCheckboxSource = checkbox;
        checkbox.closest("td, th").classList.add("id-checkbox--shift-checkbox-source");
      } else {
        this.shiftCheckboxSource = undefined;
      }
    }
  }, {
    key: "_checkboxHover",
    value: function _checkboxHover(event, checkbox, hovering) {
      // polyfill available but not around: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
      if (!Element.prototype.closest) return;

      if (hovering && this.shiftCheckboxSource && this.shiftCheckboxSource !== checkbox && event.shiftKey) {
        var _iterator3 = _createForOfIteratorHelper(this._shiftTargets(checkbox)),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var target = _step3.value;
            target.closest("td, th").classList.add("id-checkbox--shift-hover");
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else {
        var _iterator4 = _createForOfIteratorHelper(this.idCheckboxes()),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _target = _step4.value;

            _target.closest("td, th").classList.remove("id-checkbox--shift-hover");
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }
  }, {
    key: "_shiftTargets",
    value: function _shiftTargets(shiftCheckbox) {
      if (!this.shiftCheckboxSource) {
        return [];
      }

      var found = false;
      var targets = [];

      var _iterator5 = _createForOfIteratorHelper(this.idCheckboxes()),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var checkbox = _step5.value;

          if (!found) {
            if (checkbox === shiftCheckbox) {
              found = checkbox;
              targets.push(checkbox);
            } else if (checkbox === this.shiftCheckboxSource) {
              found = checkbox;
              targets.push(checkbox);
            }
          } else {
            targets.push(checkbox);

            if (checkbox === shiftCheckbox || checkbox === this.shiftCheckboxSource) {
              return targets;
            }
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return targets;
    }
  }, {
    key: "addIdsCheckboxChanged",
    value: function addIdsCheckboxChanged() {
      this.allIdsCheckbox.classList.remove("input--indeterminate");
      var checked = this.allIdsCheckbox.checked;
      this.ensureStateOfButtons({
        show: checked
      });

      var _iterator6 = _createForOfIteratorHelper(this.idCheckboxes()),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var checkbox = _step6.value;
          checkbox.checked = checked;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "checkAllPrespecifiedIds",
    value: function checkAllPrespecifiedIds() {
      // if (window.location.search.indexOf('ids') > -1) {
      var searchParams = new URL(document.location).searchParams;
      var ids = searchParams.getAll("ids[]");

      var _iterator7 = _createForOfIteratorHelper(ids),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var id = _step7.value;
          var checkbox = this.idCheckbox(id);

          if (checkbox) {
            // NB sometimes checkbox won't be displayed because e.g. completed job on workshop progress page
            checkbox.checked = true;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "idCheckbox",
    value: function idCheckbox(id) {
      return document.getElementById("ids-".concat(id));
    }
  }, {
    key: "ensureStateOfAllIdsCheckbox",
    value: function ensureStateOfAllIdsCheckbox() {
      var state = undefined;

      var _iterator8 = _createForOfIteratorHelper(this.idCheckboxes()),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var e = _step8.value;

          if (state === undefined) {
            state = e.checked;
          } else if (state != e.checked) {
            this.allIdsCheckbox.classList.add("input--indeterminate");
            this.allIdsCheckbox.indeterminate = true;
            this.ensureStateOfButtons({
              show: true
            });
            return;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      this.allIdsCheckbox.indeterminate = false;
      this.allIdsCheckbox.classList.remove("input--indeterminate");
      this.allIdsCheckbox.checked = state;
      this.ensureStateOfButtons({
        show: state
      });
    }
  }, {
    key: "ensureStateOfButtons",
    value: function ensureStateOfButtons(_ref) {
      var show = _ref.show;

      // TODO: convert these to hidableTargets
      // for (let button of this.form.querySelectorAll(".batch.buttons .btn")) { // could add .batch-disablable to btn if we need this
      //   button.disabled = !show;
      //   if (show) {
      //     button.classList.remove("disabled");
      //   } else {
      //     button.classList.add("disabled");
      //   }
      // }
      // TODO: convert these to hidableTargets
      var _iterator9 = _createForOfIteratorHelper(this.form.querySelectorAll(".batch.buttons.hidable,.batch.buttons .hidable")),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var hidable = _step9.value;

          if (show) {
            hidable.style.display = "inline-block";
          } else {
            hidable.style.display = "none";
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }, {
    key: "idCheckboxes",
    value: function idCheckboxes() {
      return this.form.querySelectorAll("input[type=checkbox][name='ids[]']");
    }
  }, {
    key: "submitViaTurbolinks",
    value: function submitViaTurbolinks(event) {
      // TODO: possibly convert this from an action to using the hidableTargets when we create those
      event.preventDefault();
      event.stopPropagation();
      var button = event.currentTarget;
      var name = button.getAttribute("name");
      var value = button.getAttribute("value");
      Turbolinks.visit(this.form.action + this.constructQueryStringFromForm({
        name: name,
        value: value
      }));
    }
  }, {
    key: "constructQueryStringFromForm",
    value: function constructQueryStringFromForm(_ref2) {
      var name = _ref2.name,
          value = _ref2.value;

      var entries = _toConsumableArray(new FormData(this.form).entries());

      if (name && value) {
        entries.push([name, value]);
      }

      var components = entries.map(function (e) {
        return e.map(encodeURIComponent).join("=");
      });
      return "?" + components.join("&");
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["form"];


/***/ }),

/***/ "./app/javascript/controllers/choices_controller.js":
/*!**********************************************************!*\
  !*** ./app/javascript/controllers/choices_controller.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
/* harmony import */ var choices_js_public_assets_styles_choices_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choices.js/public/assets/styles/choices.css */ "./node_modules/choices.js/public/assets/styles/choices.css");
/* harmony import */ var choices_js_public_assets_styles_choices_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choices_js_public_assets_styles_choices_css__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-env es6 */



var Choices = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");

var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.select = this.hasSelectTarget ? this.selectTarget : this.element.querySelectorAll("select")[0];
      var shouldSort = !!this.data.get("sort") || false;
      this.choices = new Choices(this.select, {
        shouldSort: shouldSort,
        searchResultLimit: 7
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.choices.destroy();
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["select"];


/***/ }),

/***/ "./app/javascript/controllers/clickable_rows_controller.js":
/*!*****************************************************************!*\
  !*** ./app/javascript/controllers/clickable_rows_controller.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-env es6 */


var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      this.element.querySelectorAll("tr td:not(.not-clickable):not(.link):not(.buttons)").forEach(function (elem) {
        elem.addEventListener("click", function (event) {
          _this.rowClicked(event);
        });
      });
    }
  }, {
    key: "rowClicked",
    value: function rowClicked(event) {
      var td = event.currentTarget;
      var a = td.parentNode.querySelector("a[href]");
      var href = a && a.getAttribute("href");

      if (href) {
        // this controller is being double added (some bad interaction with datatables), so to prevent weirdness, we just do this once and prevent propagation.
        event.stopImmediatePropagation();
        event.preventDefault();
        Turbolinks.visit(href);
      }
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/javascript/controllers/combobox_controller.js":
/*!***********************************************************!*\
  !*** ./app/javascript/controllers/combobox_controller.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _choices_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choices_controller */ "./app/javascript/controllers/choices_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-env es6 */

/*
  selector wraps around the select and needs to be explicit
  button can be implicit
  typical haml:

  %fieldset.choices--combobox(data-controller="combobox")
    %div(data-combobox-target="selector")
      = select_tag("", options_for_select([current_value] + valid_values), class: "form-control")
    .input-group
      = text_field_tag(name, current_value, class: "form-control", data: {target: "combobox.textInput"})
      %span.input-group-btn
        .btn.btn-default= fas_icon("caret-down")
 */

var _default = /*#__PURE__*/function (_ChoicesController) {
  _inherits(_default, _ChoicesController);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      _get(_getPrototypeOf(_default.prototype), "connect", this).call(this);

      this.button = this.hasButtonInput ? this.buttonTarget : this.element.querySelector(".btn");
      this.select.addEventListener("blur", function () {
        return _this.selectDone();
      });
      this.select.addEventListener("change", function () {
        return _this.selectDone();
      });
      this.button.addEventListener("click", function () {
        return _this.showSelect();
      });
      this.selectorTarget.style.display = "none"; // https://github.com/Choices-js/Choices/issues/811#issuecomment-604555828

      this.choices.input.element.addEventListener("blur", function () {
        _this.selectDone();
      });
    }
  }, {
    key: "selectDone",
    value: function selectDone() {
      this.button.style.display = "";
      this.textInputTarget.style.display = "";
      this.selectorTarget.style.display = "none";
      this.textInputTarget.value = this.choices.getValue(true);
    }
  }, {
    key: "showSelect",
    value: function showSelect() {
      this.button.style.display = "none";
      this.textInputTarget.style.display = "none";
      this.selectorTarget.style.display = "";
      this.selectorTarget.style.zIndex = 999;
      this.selectorTarget.style.position = "relative";
      this.selectorTarget.style.top = 0;
      this.choices.showDropdown();
    }
  }]);

  return _default;
}(_choices_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["selector", "textInput", "button"];


/***/ }),

/***/ "./app/javascript/controllers/contact_controller.js":
/*!**********************************************************!*\
  !*** ./app/javascript/controllers/contact_controller.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Choices = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");

var SingleSelectDynamicChoices = __webpack_require__(/*! ../single_select_dynamic_choices.js */ "./app/javascript/single_select_dynamic_choices.js");

var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.select = this.hasSelectTarget ? this.selectTarget : this.element.querySelectorAll("select")[0];

      if (!this.select) {
        console.warn("No select found. This contact controller can't be used for new");
      } else {
        this.__connectForNew();
      }
    }
  }, {
    key: "__connectForNew",
    value: function __connectForNew() {
      this.clientId = this.data.get("clientId");
      this.baseSearchUrl = this.data.get("searchUrl");

      if (!this.clientId || !this.baseSearchUrl) {
        console.error("ContactController missing parameter ".concat(!this.clientId ? "client-id" : "", " ").concat(!this.baseSearchUrl ? "search-url" : ""));
        return;
      }

      this._initializeSearch();
    }
  }, {
    key: "_initializeSearch",
    value: function _initializeSearch() {
      var _this = this;

      if (!this.select) {
        return;
      }

      this.choices = new Choices(this.select, {
        noChoicesText: "No matches",
        searchPlaceholderValue: "Start typing name or email of a contact",
        shouldSort: false,
        searchFloor: 0,
        searchChoices: false // searchResultLimit: 7

      });
      this.choicesWrapper = new SingleSelectDynamicChoices(this.select, this.choices, {
        searchFunction: function searchFunction(query) {
          return _this.search(query);
        },
        valueKey: "id",
        labelKey: "display"
      });
      this.choices.showDropdown();
      this.choicesWrapper.serverLookup();
    }
  }, {
    key: "search",
    value: function search(query, callback) {
      return fetch("".concat(this.baseSearchUrl, "?preferred_client_id=").concat(this.clientId, "&q=").concat(query), {
        // method: "GET", // *GET, POST, PUT, DELETE, etc.
        // mode: "same-origin", // no-cors, cors, *same-origin
        cache: "no-cache",
        // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        // include, same-origin, *omit
        headers: {
          "Content-Type": "application/json" // "Content-Type": "application/x-www-form-urlencoded",

        }
      }).then(function (response) {
        return response.json().then(function (data) {
          return data;
        });
      })["catch"](function (error) {
        console.warn(error);
      });
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/javascript/controllers/datatables_controller.js":
/*!*************************************************************!*\
  !*** ./app/javascript/controllers/datatables_controller.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* globals Condensable */


var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "initialize",
    value: function initialize() {
      // set up default configs for all datatables
      if (!$.fn || !$.fn.dataTable) {
        console.log("dataTable not loaded on initialize"); // eslint-disable-line no-console

        return;
      } // console.log("initialize from DatatablesController");


      $.extend($.fn.dataTable.defaults, {
        "columnDefs": [{
          "targets": "js-datatables-nosort",
          "orderable": false
        }, {
          "targets": "js-datatables-numeric",
          "type": "num-fmt"
        }],
        "language": {
          "search": "Filter (this page):"
        },
        "paging": false,
        "search": false,
        "stateDuration": 60 * 10,
        "stateSave": window.BwsConfig.rememberLastSort
      });
    }
  }, {
    key: "connect",
    value: function connect() {
      if (!$.fn || !$.fn.dataTable) {
        console.error("dataTable not loaded on connect");
        return;
      }

      var $tableTarget = $(this.tableTarget); // console.log("connect from DatatablesController");

      if (!$tableTarget.attr("id")) {
        console.warn("DatatablesController warning: statesaving won't work on this table");
      }

      this.dataTable = $tableTarget.DataTable(this.makeConfig($tableTarget));
      $tableTarget.find(".dataTables_filter input").keyup(function (e) {
        var $target = $(e.target);
        var $section = $target.closest("section.auto-condense");

        if ($section) {
          if ($target.val() === "") {
            Condensable.condense($section);
          } else {
            Condensable.expand($section);
          }
        }
      }); // auto focus to filter if shown

      $tableTarget.find("div.dataTables_filter input").focus();
    } // useful for testing bug: https://datatables.net/forums/discussion/71499/possible-bug-in-destroy-with-fixedheader#latest

  }, {
    key: "testTeardown",
    value: function testTeardown(event) {
      event.preventDefault();
      event.stopPropagation();
      this.teardown();
    } // https://www.betterstimulus.com/turbolinks/teardown.html

  }, {
    key: "teardown",
    value: function teardown() {
      if (this.dataTable !== null) {
        // remove the datatables add-ons
        this.dataTable.destroy();
        this.dataTable = null;
      }
    }
  }, {
    key: "makeConfig",
    value: function makeConfig($tableTarget) {
      // apply custom configs to each datatable
      var config = {};

      if ($tableTarget.hasClass("js-datatables-no-search")) {
        config.filter = false;
      }

      var $defaultAsc = $tableTarget.find("thead tr th.js-datatables-default-sort-asc").index();

      if ($defaultAsc > -1) {
        config.order = [[$defaultAsc, "asc"]];
      }

      if ($tableTarget.hasClass("js-datatables-noinitialsort")) {
        config.order = [];
      }

      if ($tableTarget.hasClass("js-datatables-nosort")) {
        config.ordering = false;
      }

      if ($tableTarget.data("datatables-fixed-columns")) {
        config.fixedColumns = {
          leftColumns: $tableTarget.data("datatables-fixed-columns")
        };
        config.scrollX = true;
        config.scrollY = $(window).height() - $(".navbar-fixed-top").outerHeight() - 100;
      } else {
        config.fixedHeader = {
          header: true,
          headerOffset: $(".navbar-fixed-top").outerHeight()
        };
      }

      return config;
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["table"];


/***/ }),

/***/ "./app/javascript/controllers/direct_upload_controller.js":
/*!****************************************************************!*\
  !*** ./app/javascript/controllers/direct_upload_controller.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      this.parentForm = this.element.closest("form");
      this.fileFieldTarget.addEventListener("input", function () {
        _this.fileFieldChanged();
      });

      if (this.hiddenFieldTarget.value) {
        this.hideFileField();
        this.updateProgress(1);
      }
    }
  }, {
    key: "fileFieldChanged",
    value: function fileFieldChanged() {
      this.hideFileField();
      this.showProgressAndCancel();
      this.upload();
    }
  }, {
    key: "upload",
    value: function upload() {
      var _this2 = this;

      var file = this.fileFieldTarget.files[0];
      var url = this.parentForm.dataset.url;
      var formData = new FormData();
      var parsed = JSON.parse(this.parentForm.dataset.formData);

      for (var key in parsed) {
        formData.append(key, parsed[key]);
      } // Actual file has to be appended last.


      formData.append("file", file); // vaguely based on
      // https://www.webiny.com/blog/upload-files-to-aws-s3-using-pre-signed-post-data-and-a-lambda-function-7a9fb06d56c1

      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.send(formData);
      xhr.addEventListener("progress", function (event) {
        _this2.updateProgress(event.loaded / event.total);
      });
      xhr.addEventListener("load", function (event) {
        _this2.updateProgress(event.loaded / event.total);

        if (xhr.status === 201) {
          var uploadedUrl = decodeURIComponent(xhr.responseXML.querySelector("Location").textContent);

          _this2.uploadSuccessful(uploadedUrl);
        } else {
          _this2.uploadUnsuccessful(xhr);
        }
      });
    }
  }, {
    key: "uploadSuccessful",
    value: function uploadSuccessful(uploadedUrl) {
      this.hiddenFieldTarget.value = uploadedUrl;
      this.progressBarTarget.classList.add("progress-bar-success");
    }
  }, {
    key: "uploadUnsuccessful",
    value: function uploadUnsuccessful(xhr) {
      console.error("upload unsuccessful ".concat(xhr.status, ": ").concat(xhr.responseText));
      this.progressBarTarget.classList.add("progress-bar-danger");
    }
  }, {
    key: "hideFileField",
    value: function hideFileField() {
      this.fileFieldTarget.style.display = "none";
    }
  }, {
    key: "showProgressAndCancel",
    value: function showProgressAndCancel() {
      this.progressTarget.style.display = "";
      this.updateProgress(0);
    }
  }, {
    key: "updateProgress",
    value: function updateProgress(fraction) {
      this.progressTarget.style.display = "";
      this.progressBarTarget.style.width = "".concat(fraction * 100, "%");

      if (fraction == 1) {
        this.progressBarTarget.innerText = "Completed Uploading";
      } else {
        this.progressBarTarget.innerText = "Uploading (".concat((fraction * 100).toFixed(), "%)");
      }
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["hiddenField", "fileField", "progress", "progressBar"];


/***/ }),

/***/ "./app/javascript/controllers/edit_one_by_one_controller.js":
/*!******************************************************************!*\
  !*** ./app/javascript/controllers/edit_one_by_one_controller.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "initialize",
    value: function initialize() {
      this.screenSmMin = 768;
      this.selector = ".edit-one-by-one";
      this.iframeSelector = ".edit-one-by-one iframe#form";
      this.highlightClass = "highlight";
      this.eventDidChange = "editOneByOneDidChange";
      this.eventShouldVisit = "editOneByOneShouldVisit";
    }
  }, {
    key: "connect",
    value: function connect() {
      this.role = this.data.get("role"); // "parent" or "iframe"

      this.idsParam = this.data.get("idsParam"); // https://discourse.stimulusjs.org/t/access-stimulus-controller-from-outside/78/2

      this.element[this.identifier] = this;

      if (this.role == "iframe") {
        this.setupIframe();
      } else if (this.role == "parent") {
        this.setupParent();
      } else {
        throw "EditOneByOneController not expecting role ".concat(this.role);
      }
    }
  }, {
    key: "setupParent",
    value: function setupParent() {
      var _this = this;

      this.returnPath = this.data.get("returnPath");
      this.setupRowClicks();
      document.addEventListener(this.eventDidChange, function () {
        _this.editFormDidChange();
      });
      this.iframe = document.querySelector(this.iframeSelector);
    }
  }, {
    key: "setupIframe",
    value: function setupIframe() {
      var _this2 = this;

      window.parent.document.dispatchEvent(new CustomEvent(this.eventDidChange));
      document.addEventListener(this.eventShouldVisit, function (event) {
        _this2.shouldVisit(event.detail);
      });
    }
  }, {
    key: "setupRowClicks",
    value: function setupRowClicks() {
      var _this3 = this;

      var rows = this.element.querySelectorAll("section.batch table tr.task[id^=task]");
      rows.forEach(function (elem) {
        elem.addEventListener("click", function (event) {
          _this3.rowClicked(event);
        });
      });
    }
  }, {
    key: "rowClicked",
    value: function rowClicked(event) {
      var elem = event.currentTarget;

      if (elem.classList.contains(this.highlightClass)) {
        return;
      }

      var idMatcher = /task_(\d+)/;
      var m = idMatcher.exec(elem.id);

      if (m) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
        var taskId = m[1];
        var visitPath = "/tasks/".concat(taskId, "/edit?").concat(this.idsParam);
        this.shouldVisit(visitPath);
      }
    }
  }, {
    key: "shouldVisit",
    value: function shouldVisit(visitPath) {
      if (this.role == "parent") {
        var event = new CustomEvent(this.eventShouldVisit, {
          detail: visitPath
        });
        this.iframe.contentDocument.dispatchEvent(event);
      } else {
        Turbolinks.visit(visitPath);
      }
    }
  }, {
    key: "editFormDidChange",
    value: function editFormDidChange() {
      this.highlightRow();
      this.resizeForm();
    }
  }, {
    key: "done",
    value: function done() {
      Turbolinks.visit(this.returnPath);
    }
  }, {
    key: "changePresentation",
    value: function changePresentation(e) {
      var label = e.currentTarget;
      var presentationInput = label.querySelector("input");
      var presentation = presentationInput.value;
      this.element.className = "edit-one-by-one ".concat(presentation);
      this.resizeForm();
    }
  }, {
    key: "resizeForm",
    value: function resizeForm() {
      if (this.element.classList.contains("bottom") || this.element.classList.contains("bottom-with-batch") || window.innerWidth < this.screenSmMin) {
        this.iframe.style.height = this.iframe.contentWindow.document.body.scrollHeight + 10 + "px";
      } else {
        this.iframe.style.height = "";
      }
    }
  }, {
    key: "highlightRow",
    value: function highlightRow() {
      var _this4 = this;

      var iframeWindow = this.iframe.contentWindow;

      if (!iframeWindow) {
        // sometimes gets called in an anomalous state
        return;
      }

      var m = new RegExp("/tasks/(\\d+)/edit").exec(iframeWindow.location.pathname);

      if (m) {
        var taskId = m[1];
        this.element.querySelectorAll(".batch tr.highlight").forEach(function (elem) {
          elem.classList.remove(_this4.highlightClass);
        });
        this.element.querySelector("tr#task_".concat(taskId)).classList.add(this.highlightClass);
      }
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["presentationInput"];


/***/ }),

/***/ "./app/javascript/controllers/excel_buttons_controller.js":
/*!****************************************************************!*\
  !*** ./app/javascript/controllers/excel_buttons_controller.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* globals Condensable */


var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      this.element.querySelector("input[type=file]").addEventListener("change", function () {
        _this.formTarget.submit();
      });
    }
  }, {
    key: "reveal",
    value: function reveal(event) {
      event.currentTarget.style.display = "none";
      this.formTarget.style.display = "";
      this.element.querySelector("input[type=file]").click();
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["form"];


/***/ }),

/***/ "./app/javascript/controllers/input_fetch_display_controller.js":
/*!**********************************************************************!*\
  !*** ./app/javascript/controllers/input_fetch_display_controller.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      this.path = this.data.get("path");

      if (!this.path) {
        console.warn("InputFetchDisplayController needs path");
      }

      if (!this.hasDisplayTarget) {
        console.warn("InputFetchDisplayController needs display target");
      }

      if (!this.hasInputTarget) {
        console.warn("InputFetchDisplayController needs input target");
      }

      var _iterator = _createForOfIteratorHelper(this.inputTargets),
          _step;

      try {
        var _loop = function _loop() {
          var input = _step.value;
          input.addEventListener("change", function (event) {
            _this.retrieveAndDisplay(input);
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } // $(document).on('turbolinks:load', function () {
    //   ClientDisplay.displayWhenBillingClientSelected("#invoice_client_id");
    //   ClientDisplay.displayWhenBillingClientSelected("#order_billing_client_id");
    // });

  }, {
    key: "retrieveAndDisplay",
    value: function retrieveAndDisplay(input) {
      var _this2 = this;

      this.displayTarget.innerHTML = "<i class=\"fas fa-spinner fa-spin\"></i> Loading";
      var id = input.value;
      fetch(this.path.replace("$ID", id), {
        method: "GET",
        // *GET, POST, PUT, DELETE, etc.
        mode: "same-origin",
        // no-cors, cors, *same-origin
        cache: "no-cache",
        // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        // include, *same-origin, omit
        headers: {
          "Content-Type": "text/html"
        }
      }).then(function (response) {
        return response.text().then(function (text) {
          _this2.displayTarget.innerHTML = text;
        });
      });
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["display", "input"];


/***/ }),

/***/ "./app/javascript/controllers/job_history_filter_controller.js":
/*!*********************************************************************!*\
  !*** ./app/javascript/controllers/job_history_filter_controller.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "initialize",
    value: function initialize() {
      this.buttonNoteTypeAttrName = "data-".concat(this.identifier, "-note-type");
      this.ifNoteTypeAttrName = "data-".concat(this.identifier, "-if-note-type");
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this = this;

      this.buttons = this.toolbarTarget.querySelectorAll("button[".concat(this.buttonNoteTypeAttrName, "]"));
      var noteType = undefined;
      this.buttons.forEach(function (el) {
        el.addEventListener("click", function () {
          _this.buttonPressed(el);
        });

        if (el.classList.contains("active")) {
          noteType = el.getAttribute(_this.buttonNoteTypeAttrName);
        }
      });
      this.hasFetchedRows = true; // TODO: check if not yet fetched, and if has a path to fetch for.

      if (document.location.hash && document.location.hash === this.data.get("hash")) {
        this.adjustForNoteType("all");
      } else if (noteType !== undefined) {
        this.adjustForNoteType(noteType);
      }
    }
  }, {
    key: "buttonPressed",
    value: function buttonPressed(button) {
      var noteType = button.getAttribute(this.buttonNoteTypeAttrName);
      this.adjustForNoteType(noteType);
    }
  }, {
    key: "adjustForNoteType",
    value: function adjustForNoteType(noteType) {
      this.adjustButtons(noteType);

      if (this.hasFetchedRows) {
        this.showRowsForNoteType(noteType);
      } // else if (noteType !== "none") { // TODO: fetched using path...
      //   fetch()
      //     .then(response => response.text())
      //     .then((html) => {
      //       this.hasFetchRows = true;
      //       // insert html
      //       this.showRowsForNoteType(noteType);
      //     });
      // }

    }
  }, {
    key: "adjustButtons",
    value: function adjustButtons(noteType) {
      var _this2 = this;

      this.buttons.forEach(function (el) {
        if (el.getAttribute(_this2.buttonNoteTypeAttrName) === noteType) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    }
  }, {
    key: "showRowsForNoteType",
    value: function showRowsForNoteType(noteType) {
      var _this3 = this;

      if (noteType === "all") {
        this.tableTarget.querySelectorAll("[".concat(this.ifNoteTypeAttrName, "]")).forEach(function (el) {
          el.style.display = "";
        });
      } else if (noteType === "none") {
        this.tableTarget.querySelectorAll("[".concat(this.ifNoteTypeAttrName, "]")).forEach(function (el) {
          el.style.display = "none";
        });
      } else {
        this.tableTarget.querySelectorAll("[".concat(this.ifNoteTypeAttrName, "]")).forEach(function (el) {
          if (el.getAttribute(_this3.ifNoteTypeAttrName) === noteType) {
            el.style.display = "";
          } else {
            el.style.display = "none";
          }
        });
      }
    } // function getPressedFilters() {
    //   var shown = $('.job-history-filters button.btn.filter.active').map(function () {
    //     return $(this).data('type');
    //   }).get();
    //   return shown;
    // }
    //
    // function getShownFilters() {
    //   var shown = getPressedFilters();
    //   if (shown.length === 0) {
    //     shown = $('.job-history-filters button.btn.filter').map(function () {
    //       return $(this).data('type');
    //     }).get();
    //   }
    //   return shown;
    // }
    //
    // function jobHistoryFilter() {
    //   var shown = getShownFilters();
    //   $('table.job-history tbody tr').each(function (index, row) {
    //     var $row = $(row);
    //     var rowType = $row.data('job-history-type');
    //     if ($.inArray(rowType, shown) > -1) {
    //       $row.show();
    //     } else {
    //       $row.hide();
    //     }
    //   });
    // }
    //
    // $('.job-history-filters .btn.all').click(function (e) {
    //   var $this = $(this);
    //   var wasActive = $this.hasClass('active');
    //   if (wasActive) {
    //     return;
    //   }
    //   $('.job-history-filters .btn.active').removeClass('active');
    //   $this.addClass('active');
    //   jobHistoryFilter();
    // });
    //
    // $('.job-history-filters .btn.filter').click(function (e) {
    //   var $this = $(this);
    //   var wasActive = $this.hasClass('active');
    //   if (wasActive) {
    //     $this.removeClass('active');
    //     if (getPressedFilters().length === 0) {
    //       $('.job-history-filters .btn.all').addClass('active');
    //     }
    //   } else {
    //     if (e.shiftKey !== true) {
    //       $('.job-history-filters .btn.active').removeClass('active');
    //     } else {
    //       $('.job-history-filters .btn.all').removeClass('active');
    //     }
    //     $this.addClass('active');
    //   }
    //   jobHistoryFilter();
    // });
    //

  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["table", "toolbar"];


/***/ }),

/***/ "./app/javascript/controllers/job_note_controller.js":
/*!***********************************************************!*\
  !*** ./app/javascript/controllers/job_note_controller.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
/* harmony import */ var dialog_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog-polyfill */ "./node_modules/dialog-polyfill/dialog-polyfill.js");
/* harmony import */ var dialog_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dialog_polyfill__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.path = this.data.get("path");
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.dialog = undefined;
      this.form = undefined;
    }
  }, {
    key: "displayDialog",
    value: function displayDialog(event) {
      var _this = this;

      event.preventDefault();
      this.dialog = this._createDialog();
      this.editor = this._createEditor();
      this.dialog.querySelector("form [data-js-form-dialog--body]").innerHTML = ""; // clear in case already used

      this.dialog.querySelector("form [data-js-form-dialog--body]").appendChild(this.editor);

      this._adjustDialog();

      this.eventListener = function () {
        _this.dialogClosed();
      };

      this.dialog.addEventListener("close", this.eventListener);
      this.dialog.showModal();
    }
  }, {
    key: "_adjustDialog",
    value: function _adjustDialog() {
      //place cursor at beginning and add return;
      this.editor.value = "\n\n" + this.editor.value;
      this.editor.setSelectionRange(0, 0);
    }
  }, {
    key: "dialogClosed",
    value: function dialogClosed() {
      var _this2 = this;

      this.dialog.removeEventListener("close", this.eventListener);

      if (this.dialog.returnValue !== "submit") {
        return;
      } // console.log(`submit ${this.path}`);


      var csrfToken = $("meta[name='csrf-token']").attr("content");
      var data = {
        job_current_note: {
          text: this.editor.value
        },
        _method: "put",
        authenticity_token: csrfToken
      };
      fetch(this.path, {
        method: "PUT",
        // *GET, POST, PUT, DELETE, etc.
        mode: "same-origin",
        // no-cors, cors, *same-origin
        cache: "no-cache",
        // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json" // "Content-Type": "application/x-www-form-urlencoded",

        },
        body: JSON.stringify(data)
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        _this2.element.outerHTML = json.partial;
      });
    }
  }, {
    key: "_createDialog",
    value: function _createDialog() {
      var dialog = document.querySelector("[data-js-form-dialog]");
      dialog_polyfill__WEBPACK_IMPORTED_MODULE_1___default.a.registerDialog(dialog);
      var submit = dialog.querySelector("button[value=submit]");
      if (submit) submit.innerHTML = "Save";
      return dialog;
    } // some reference to https://johnbeatty.co/2018/04/11/lets-make-an-editable-header-using-stimulus-js/

  }, {
    key: "_createEditor",
    value: function _createEditor() {
      var editor;

      if (this.hasEditorTarget) {
        editor = this.editorTarget.cloneNode(true);
        editor.classList.remove("dialog-editable--hidden");
      } else {
        editor = document.createElement("textarea");
      }

      return editor;
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["editable", "editor"];


/***/ }),

/***/ "./app/javascript/controllers/order_delivery_destination_controller.js":
/*!*****************************************************************************!*\
  !*** ./app/javascript/controllers/order_delivery_destination_controller.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-env es6 */


var Choices = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");

var SingleSelectDynamicChoices = __webpack_require__(/*! ../single_select_dynamic_choices.js */ "./app/javascript/single_select_dynamic_choices.js");

var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      this.baseSearchUrl = this.data.get("searchUrl");
      this.select = this.hasSelectTarget ? this.selectTarget : this.element.querySelectorAll("select")[0];
      this.choices = new Choices(this.select, {
        noChoicesText: "No matches",
        searchPlaceholderValue: "Start typing part of an already used destination",
        shouldSort: false,
        searchFloor: 2,
        searchChoices: false // searchResultLimit: 7

      });
      this.choicesWrapper = new SingleSelectDynamicChoices(this.select, this.choices, {
        searchFunction: function searchFunction(query) {
          return _this.search(query);
        },
        valueKey: "id",
        labelKey: "display"
      });
    }
  }, {
    key: "reveal",
    value: function reveal(event) {
      event.preventDefault();
      event.stopPropagation(); // reveal

      var _iterator = _createForOfIteratorHelper(this.revealableTargets),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var target = _step.value;
          target.style.display = "";
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(this.hideableTargets),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _target = _step2.value;
          // reveal the reveal button!
          _target.style.display = "none";
        } // this.choices.ajax((callback) => {
        //   this.search(callback);
        // });
        // this.choices.showDropdown();

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "search",
    value: function search(query, callback) {
      return fetch("".concat(this.baseSearchUrl, "?q=").concat(query), {
        // method: "GET", // *GET, POST, PUT, DELETE, etc.
        // mode: "same-origin", // no-cors, cors, *same-origin
        cache: "no-cache",
        // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        // include, same-origin, *omit
        headers: {
          "Content-Type": "application/json" // "Content-Type": "application/x-www-form-urlencoded",

        }
      }).then(function (response) {
        return response.json().then(function (data) {
          return data;
        });
      })["catch"](function (error) {
        console.warn(error);
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      event.preventDefault();
      event.stopPropagation(); // reveal the reveal button!

      var _iterator3 = _createForOfIteratorHelper(this.hideableTargets),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var target = _step3.value;
          target.style.display = "";
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var _iterator4 = _createForOfIteratorHelper(this.revealableTargets),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _target2 = _step4.value;
          _target2.style.display = "none";
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.choices.destroy();
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["select", "revealable", "hideable"];


/***/ }),

/***/ "./app/javascript/controllers/package_picker_controller.js":
/*!*****************************************************************!*\
  !*** ./app/javascript/controllers/package_picker_controller.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-env es6 */


var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      if (!this.hasPackageNumberTarget) {
        console.warn("no packageNumber target found for package-picker");
      }

      if (!this.hasErrorMessageTarget) {
        console.warn("no errorMessage target found for package-picker");
      }

      this.rootPath = this.data.get("rootPath");
    }
  }, {
    key: "pick",
    value: function pick(event) {
      var _this = this;

      var regexp = new RegExp(".*(/packages/[0-9]+)");
      var match = regexp.exec(this.packageNumberTarget.value);

      if (match !== null) {
        this.visitEmbeddedPath(match[1]);
      } else {
        this.search(this.packageNumberTarget.value, function (pakkage) {
          _this.view(pakkage);
        });
      } // just use it if it's a URL
      // otherwise look it up using search()
      // Turbolinks.visit(`/packages/search?${this.packageNumberTarget.value}`);

    }
  }, {
    key: "view",
    value: function view(pakkage) {
      // because package is a reserved word
      if (pakkage.path) {
        this.visitEmbeddedPath(pakkage.path);
      } else if (pakkage.otherUrl) {
        Turbolinks.visit(pakkage.otherUrl);
      } else if (this.hasErrorMessageTarget) {
        this.errorMessageTarget.innerText = pakkage.error || "Couldn't find package";
      } else {
        alert(pakkage.error || "Couldn't find package");
      }
    }
  }, {
    key: "visitEmbeddedPath",
    value: function visitEmbeddedPath(packagePath) {
      Turbolinks.visit("".concat(this.rootPath).concat(packagePath));
    }
  }, {
    key: "search",
    value: function search(query, callback) {
      return fetch("/packages/search.json?q=".concat(query), {
        // method: "GET", // *GET, POST, PUT, DELETE, etc.
        // mode: "same-origin", // no-cors, cors, *same-origin
        cache: "no-cache",
        // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        // include, same-origin, *omit
        headers: {
          "Content-Type": "application/json" // "Content-Type": "application/x-www-form-urlencoded",

        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return callback(data);
      })["catch"](function (error) {
        console.warn(error);
      });
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["packageNumber", "errorMessage"];


/***/ }),

/***/ "./app/javascript/controllers/package_qr_code_scanner_controller.js":
/*!**************************************************************************!*\
  !*** ./app/javascript/controllers/package_qr_code_scanner_controller.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _app_qr_code_scanner_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app_qr_code_scanner_controller */ "./app/javascript/controllers/app_qr_code_scanner_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_AppQrCodeScannerCont) {
  _inherits(_default, _AppQrCodeScannerCont);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      _get(_getPrototypeOf(_default.prototype), "connect", this).call(this);

      this.setupCallback();
      this.showScanner(true);
    }
  }, {
    key: "qrCodeScanned",
    value: function qrCodeScanned(url) {
      _get(_getPrototypeOf(_default.prototype), "qrCodeScanned", this).call(this, url);

      if (this.hasScannedTarget) {
        this.scannedTarget.click();
      }
    }
  }]);

  return _default;
}(_app_qr_code_scanner_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["url", "log", "scanned"];


/***/ }),

/***/ "./app/javascript/controllers/package_row_controller.js":
/*!**************************************************************!*\
  !*** ./app/javascript/controllers/package_row_controller.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
/* harmony import */ var dialog_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog-polyfill */ "./node_modules/dialog-polyfill/dialog-polyfill.js");
/* harmony import */ var dialog_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dialog_polyfill__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-env es6 */



var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      this.href = this._findHref();
      this.linkTarget.addEventListener("click", function (event) {
        _this.showPackageFromEvent(event);
      });
    }
  }, {
    key: "showPackageFromEvent",
    value: function showPackageFromEvent(event) {
      if (event) {
        // this controller is sometimes double added (some bad interaction with datatables), so to prevent weirdness, we just do this once and prevent propagation.
        event.stopImmediatePropagation();
        event.preventDefault();
      }

      this.showPackage();
    }
  }, {
    key: "showPackage",
    value: function showPackage() {
      Turbolinks.visit(this.href); // this.displayDialog();
    } //
    // displayDialog() {
    //   this.dialog = this._createDialog();
    //   this.editor = this._createEditor();
    //   this.dialog.querySelector("form [data-js-form-dialog--body]").innerHTML = ''; // clear in case already used
    //   this.dialog.querySelector("form [data-js-form-dialog--body]").appendChild(this.editor);
    //   this._adjustDialog();
    //
    //   this.eventListener = () => {
    //     this.dialogClosed();
    //   };
    //   this.dialog.addEventListener('close', this.eventListener);
    //   this.dialog.showModal();
    // }
    //
    // _adjustDialog() {
    //   //place cursor at beginning and add return;
    //   this.editor.value = "\n\n" + this.editor.value;
    //   this.editor.setSelectionRange(0, 0);
    // }
    //
    // dialogClosed() {
    //   this.dialog.removeEventListener('close', this.eventListener);
    //   if (this.dialog.returnValue !== "submit") {
    //     return;
    //   }
    //   // console.log(`submit ${this.path}`);
    //   const csrfToken = $("meta[name='csrf-token']").attr('content');
    //   const data = {job_current_note: {text: this.editor.value}, _method: 'put', authenticity_token: csrfToken};
    //   fetch(this.path, {
    //     method: "PUT", // *GET, POST, PUT, DELETE, etc.
    //     mode: "same-origin", // no-cors, cors, *same-origin
    //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: "same-origin", // include, *same-origin, omit
    //     headers: {
    //       "Content-Type": "application/json",
    //       // "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     body: JSON.stringify(data)
    //   })
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((json) => {
    //       this.element.outerHTML = json.partial;
    //     });
    // }
    //
    //
    // _createDialog() {
    //   let dialog = document.querySelector('[data-js-form-dialog]');
    //   dialogPolyfill.registerDialog(dialog);
    //   const submit = dialog.querySelector("button[value=submit]");
    //   if (submit) submit.innerHTML = "Save";
    //   return dialog;
    // }
    //
    // // some reference to https://johnbeatty.co/2018/04/11/lets-make-an-editable-header-using-stimulus-js/
    //
    // _createEditor() {
    //   let editor;
    //   if (this.hasEditorTarget) {
    //     editor = this.editorTarget.cloneNode(true);
    //     editor.classList.remove("dialog-editable--hidden");
    //   } else {
    //     editor = document.createElement("textarea");
    //   }
    //   return editor;
    // }

  }, {
    key: "_findHref",
    value: function _findHref() {
      if (!this.hasLinkTarget) {
        console.warn("no link target found for package_row_controller");
        return null;
      }

      if (this.linkTarget.hasAttribute("href")) {
        return this.linkTarget.getAttribute("href");
      }

      var a = this.linkTarget.querySelector("a[href]");

      if (a) {
        return a.getAttribute("href");
      }
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["link", "editable", "editor"];


/***/ }),

/***/ "./app/javascript/controllers/product_code_field_controller.js":
/*!*********************************************************************!*\
  !*** ./app/javascript/controllers/product_code_field_controller.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-env es6 */


var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {}
  }, {
    key: "remove",
    value: function remove(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.hiddenTarget.value = "";
      this.hidableTargets.forEach(function (element) {
        element.remove();
      });
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["hidden", "hidable"];


/***/ }),

/***/ "./app/javascript/controllers/sales_contact_controller.js":
/*!****************************************************************!*\
  !*** ./app/javascript/controllers/sales_contact_controller.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _contact_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact_controller.js */ "./app/javascript/controllers/contact_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_ContactController) {
  _inherits(_default, _ContactController);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.namePrefix = this.data.get("namePrefix");
      this.index = this.data.get("index");
      this.baseName = "".concat(this.namePrefix, "[").concat(this.index, "]");

      _get(_getPrototypeOf(_default.prototype), "connect", this).call(this);
    }
  }, {
    key: "_initializeSearch",
    value: function _initializeSearch() {
      this._createRoleHiddenField();

      this._tweakOrderingHiddenField();

      if (this.select) {
        // if it's not a new form, it won't have a select
        this.select.setAttribute("name", this._nameForField("contact_id"));

        _get(_getPrototypeOf(_default.prototype), "_initializeSearch", this).call(this);
      }
    }
  }, {
    key: "toggleDeleted",
    value: function toggleDeleted(event) {
      event.preventDefault();
      this.element.classList.toggle("sales-contact-item--deleted");
      var input = this.element.querySelector("input[name='".concat(this._nameForField("_destroy"), "']"));

      if (input) {
        this.element.removeChild(input);
      } else {
        this.createHiddenField({
          fieldName: "_destroy",
          value: "true"
        });
      }
    }
  }, {
    key: "_nameForField",
    value: function _nameForField(fieldName) {
      return "".concat(this.baseName, "[").concat(fieldName, "]");
    }
  }, {
    key: "_createRoleHiddenField",
    value: function _createRoleHiddenField() {
      this.createHiddenField({
        fieldName: "role",
        value: this.data.get("role")
      });
    }
  }, {
    key: "_tweakOrderingHiddenField",
    value: function _tweakOrderingHiddenField() {
      this.orderingTarget.setAttribute("name", this._nameForField("ordering"));
      this.orderingTarget.setAttribute("value", this.data.get("ordering"));
    }
  }, {
    key: "createHiddenField",
    value: function createHiddenField(_ref) {
      var fieldName = _ref.fieldName,
          value = _ref.value;
      var input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", this._nameForField(fieldName));
      input.setAttribute("value", value);
      this.element.append(input);
    }
  }]);

  return _default;
}(_contact_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["ordering"];


/***/ }),

/***/ "./app/javascript/controllers/sales_contacts_controller.js":
/*!*****************************************************************!*\
  !*** ./app/javascript/controllers/sales_contacts_controller.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {}
  }, {
    key: "new",
    value: function _new(event) {
      event.preventDefault();
      var clone = document.importNode(this.templateTarget.content, true);

      var index = this._nextIndex();

      var ordering = this._nextOrdering();

      clone.firstElementChild.setAttribute("data-sales-contact-index", index); // clone.firstElementChild.dataset.salesContactIndex = index;

      clone.firstElementChild.setAttribute("data-sales-contact-ordering", ordering); // clone.firstElementChild.dataset.salesContactOrdering = ordering;

      this.listTarget.insertBefore(clone, this.addButtonRowTarget);
    }
  }, {
    key: "cancelNew",
    value: function cancelNew(event) {
      event.preventDefault();
      var t = event.currentTarget;

      while (t.parentNode != this.listTarget) {
        t = t.parentNode;
      }

      this.listTarget.removeChild(t);
    }
  }, {
    key: "_nextIndex",
    value: function _nextIndex() {
      var t = this.element;

      while ("salesContactsCount" in t.dataset === false) {
        t = t.parentNode;
      }

      var nextIndex = parseInt(t.dataset.salesContactsCount) + 1;
      t.dataset.salesContactsCount = nextIndex;
      return nextIndex;
    }
  }, {
    key: "_nextOrdering",
    value: function _nextOrdering() {
      var maxOrdering = this.orderingTargets.map(function (o) {
        return o.value;
      }).reduce(function (max, value) {
        return Math.max(max, value);
      }, 0);
      return maxOrdering + 1;
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["template", "list", "addButtonRow", "ordering"];


/***/ }),

/***/ "./app/javascript/controllers/test_controller.js":
/*!*******************************************************!*\
  !*** ./app/javascript/controllers/test_controller.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.outputTarget.textContent = "Connect";
    }
  }, {
    key: "greet",
    value: function greet() {
      this.outputTarget.textContent = "Hello from Stimulus";
    }
  }, {
    key: "reset",
    value: function reset() {
      this.outputTarget.textContent = "Reset";
    }
  }, {
    key: "console",
    value: function (_console) {
      function console() {
        return _console.apply(this, arguments);
      }

      console.toString = function () {
        return _console.toString();
      };

      return console;
    }(function () {
      console.log("hello in console"); // eslint-disable-line no-console
    })
  }, {
    key: "error",
    value: function error() {
      this.nonExistingMethod.shouldRaiseSomething();
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ["output"];


/***/ }),

/***/ "./app/javascript/controllers/turbolinks_form_fixer_controller.js":
/*!************************************************************************!*\
  !*** ./app/javascript/controllers/turbolinks_form_fixer_controller.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      // https://github.com/turbolinks/turbolinks/issues/272#issuecomment-615038967
      var _iterator = _createForOfIteratorHelper(document.querySelectorAll("form[method=get]:not([data-remote=true])")),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var form = _step.value;
          form.addEventListener("submit", function (submitEvent) {
            submitEvent.preventDefault();

            var entries = _toConsumableArray(new FormData(submitEvent.target).entries());

            var actionUrl = new URL(submitEvent.target.action);
            var currentUrl = new URL(location.href); // if pathname not changed, hand over per parameter to next page.

            if (actionUrl.pathname === currentUrl.pathname && currentUrl.searchParams.has("per")) {
              actionUrl.searchParams.set("per", currentUrl.searchParams.get("per"));
            }

            entries.forEach(function (entry) {
              var _actionUrl$searchPara;

              return (_actionUrl$searchPara = actionUrl.searchParams).set.apply(_actionUrl$searchPara, _toConsumableArray(entry));
            });
            Turbolinks.visit(actionUrl.toString());
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./app/javascript/js_host_for_ios_app.js":
/*!***********************************************!*\
  !*** ./app/javascript/js_host_for_ios_app.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var JsHostForIosApp = /*#__PURE__*/function () {
  function JsHostForIosApp() {
    _classCallCheck(this, JsHostForIosApp);
  }

  _createClass(JsHostForIosApp, [{
    key: "getCredentials",
    value:
    /* iOS will pass in a callbackHandler and it's useful when testing from the console to pass in the dummy:
     * window.Jshost.getCredentials(window.Jshost.dummyCallbackHandler());
     *
     * This callbackHandler will either receive {bearer_token: "value", user_id: "value", etc} or it will receive {error: "error message", status: 4xx}
    * */
    function getCredentials(callbackHandler, deviceName) {
      if (!callbackHandler || !deviceName) {
        console.error("You need to supply (callbackHandler, deviceName) -- FYI deviceName is scoped to user.");
        return false;
      }

      var currentUserIdElem = document.querySelector('[data-jshost-current-user-id]');

      if (!currentUserIdElem) {
        callbackHandler({
          error: "Can't determine if already logged in",
          status: "500"
        });
        return false;
      } else if (!currentUserIdElem.dataset["jshostCurrentUserId"]) {
        callbackHandler({
          error: "Not logged in",
          status: 401
        });
        return false;
      }

      var xhr = new XMLHttpRequest();
      xhr.open('POST', "/user_devices", true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      var csrfElement = document.querySelector('meta[name="csrf-token"]');
      xhr.send(JSON.stringify({
        authenticity_token: csrfElement.content,
        device_name: deviceName
      }));

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
          var json = JSON.parse(xhr.response);

          if (json.error) {
            callbackHandler({
              "error": "".concat(json.error, " (").concat(xhr.status, ")"),
              status: xhr.status
            });
          } else {
            callbackHandler({
              "bearer_token": json.token,
              "user_id": json.user_id,
              "user_initials": json.user_initials,
              "user_email": json.user_email
            });
          }
        } else {
          callbackHandler({
            "error": "Unexpected response status (".concat(xhr.status, "). Detail: ").concat(xhr.response),
            status: xhr.status
          });
        }
      };

      xhr.onerror = function () {
        callbackHandler({
          error: "big unexpected error",
          status: 0
        });
      };

      return true;
    }
  }, {
    key: "dummyCallbackHandler",
    value: function dummyCallbackHandler() {
      return function (payload) {
        console.warn("Dummy received callback: ");
        console.warn(payload);
      };
    }
  }, {
    key: "QRCodeScanned",
    value: function QRCodeScanned(qrCodeUrl) {
      console.info("QRCodeScanned: ".concat(qrCodeUrl)); // eslint-disable-line no-console

      if (this.QRCodeScannerCallback) {
        this.QRCodeScannerCallback(qrCodeUrl);
      }
    }
  }, {
    key: "setQRCodeScannedCallback",
    value: function setQRCodeScannedCallback(callableOrNull) {
      this.QRCodeScannerCallback = callableOrNull;
    } // called back by window.webkit.messageHandlers.getAppVersion

  }, {
    key: "appVersion",
    value: function appVersion(versionString) {
      this.versionString = versionString;
      console.info("versionString: ".concat(versionString)); // eslint-disable-line no-console

      if (this.versionStringCallback) {
        this.versionStringCallback(versionString);
      }
    }
  }, {
    key: "requestVersionString",
    value: function requestVersionString(callback) {
      this.versionStringCallback = callback;
      window.webkit.messageHandlers.getAppVersion.postMessage("getAppVersion");
    }
  }]);

  return JsHostForIosApp;
}();

module.exports = new JsHostForIosApp();

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/stimulus-webpack-helpers */ "./node_modules/@hotwired/stimulus-webpack-helpers/dist/stimulus-webpack-helpers.js");
/* global process */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


var application = _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["Application"].start();

var context = __webpack_require__("./app/javascript/controllers sync recursive .js$");

application.load(Object(_hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__["definitionsFromContext"])(context)); // enable Stimulus debug mode in development

application.debug = "development" === "development"; // alternatively:
// window.Stimulus = application;
// https://www.betterstimulus.com/turbolinks/teardown.html

document.addEventListener("turbolinks:before-cache", function () {
  application.controllers.forEach(function (controller) {
    if (typeof controller.teardown === "function") {
      controller.teardown();
    }
  });
});
window.Jshost = __webpack_require__(/*! ../js_host_for_ios_app.js */ "./app/javascript/js_host_for_ios_app.js");

__webpack_require__(/*! ../bws_shubox.js */ "./app/javascript/bws_shubox.js");

/***/ }),

/***/ "./app/javascript/single_select_dynamic_choices.js":
/*!*********************************************************!*\
  !*** ./app/javascript/single_select_dynamic_choices.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// very loosely based on https://github.com/jshjohnson/Choices/issues/162
// but for single select
var SingleSelectDynamicChoices = /*#__PURE__*/function () {
  function SingleSelectDynamicChoices(elem, choices, _ref) {
    var _this = this;

    var searchFunction = _ref.searchFunction,
        _ref$lookupDelay = _ref.lookupDelay,
        lookupDelay = _ref$lookupDelay === void 0 ? 200 : _ref$lookupDelay,
        _ref$valueKey = _ref.valueKey,
        valueKey = _ref$valueKey === void 0 ? "id" : _ref$valueKey,
        _ref$labelKey = _ref.labelKey,
        labelKey = _ref$labelKey === void 0 ? "name" : _ref$labelKey;

    _classCallCheck(this, SingleSelectDynamicChoices);

    this.choices = choices;
    this.searchFunction = searchFunction; // new Choices(elem, config);

    this.lookupDelay = lookupDelay;
    this.valueKey = valueKey;
    this.labelKey = labelKey; // Some config and bookkeeping for API calls.

    this.lookupTimeout = null;
    this.lookupCache = {}; // Trigger an API lookup when the user pauses after typing.

    elem.addEventListener('search', function (event) {
      clearTimeout(_this.lookupTimeout);
      _this.lookupTimeout = setTimeout(function () {
        _this.serverLookup();
      }, _this.lookupDelay);
    }); // We want to clear the API-provided options when a choice is selected.

    elem.addEventListener('choice', function (event) {
      _this.choices.setChoices([], _this.valueKey, _this.labelKey, true);
    });
  } // Function to perform the API lookup.


  _createClass(SingleSelectDynamicChoices, [{
    key: "serverLookup",
    value: function serverLookup() {
      var _this2 = this;

      // we can't use choices.currentValue because this is blank if we set searchChoices
      // to false. Instead we use the actual input field's value.
      var query = this.choices.input.value;

      if (query in this.lookupCache) {
        // empty will still be cached
        this.populateOptions(this.lookupCache[query]);
      } else {
        // Ajax query and results parsing depends on your API structure and how
        // you make AJAX calls in your codebase.
        var p = this.searchFunction(query);
        p.then(function (results) {
          _this2.lookupCache[query] = results;

          _this2.populateOptions(results);
        });
      }
    } // Function to actually populate the results from the API lookup.

  }, {
    key: "populateOptions",
    value: function populateOptions(results) {
      this.choices.setChoices(results, this.valueKey, this.labelKey, true);
    }
  }]);

  return SingleSelectDynamicChoices;
}(); // can't use export default class for some reason (https://github.com/webpack/webpack/issues/3929)


module.exports = SingleSelectDynamicChoices;
/* */

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@hotwired/stimulus-webpack-helpers/dist/stimulus-webpack-helpers.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@hotwired/stimulus-webpack-helpers/dist/stimulus-webpack-helpers.js ***!
  \******************************************************************************************/
/*! exports provided: definitionForModuleAndIdentifier, definitionForModuleWithContextAndKey, definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionForModuleAndIdentifier", function() { return definitionForModuleAndIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionForModuleWithContextAndKey", function() { return definitionForModuleWithContextAndKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return definitionsFromContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return identifierForContextKey; });
/*
Stimulus Webpack Helpers 1.0.0
Copyright © 2021 Basecamp, LLC
 */
function definitionsFromContext(context) {
  return context.keys().map(function (key) {
    return definitionForModuleWithContextAndKey(context, key);
  }).filter(function (value) {
    return value;
  });
}

function definitionForModuleWithContextAndKey(context, key) {
  var identifier = identifierForContextKey(key);

  if (identifier) {
    return definitionForModuleAndIdentifier(context(key), identifier);
  }
}

function definitionForModuleAndIdentifier(module, identifier) {
  var controllerConstructor = module.default;

  if (typeof controllerConstructor == "function") {
    return {
      identifier: identifier,
      controllerConstructor: controllerConstructor
    };
  }
}

function identifierForContextKey(key) {
  var logicalName = (key.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/) || [])[1];

  if (logicalName) {
    return logicalName.replace(/_/g, "-").replace(/\//g, "--");
  }
}



/***/ }),

/***/ "./node_modules/@hotwired/stimulus/dist/stimulus.js":
/*!**********************************************************!*\
  !*** ./node_modules/@hotwired/stimulus/dist/stimulus.js ***!
  \**********************************************************/
/*! exports provided: Application, AttributeObserver, Context, Controller, ElementObserver, IndexedMultimap, Multimap, StringMapObserver, TokenListObserver, ValueListObserver, add, defaultSchema, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return AttributeObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return ElementObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return IndexedMultimap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return Multimap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringMapObserver", function() { return StringMapObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return TokenListObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return ValueListObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return prune; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Stimulus 3.0.1
Copyright © 2021 Basecamp, LLC
 */
var EventListener = /*#__PURE__*/function () {
  function EventListener(eventTarget, eventName, eventOptions) {
    _classCallCheck(this, EventListener);

    this.eventTarget = eventTarget;
    this.eventName = eventName;
    this.eventOptions = eventOptions;
    this.unorderedBindings = new Set();
  }

  _createClass(EventListener, [{
    key: "connect",
    value: function connect() {
      this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
    }
  }, {
    key: "bindingConnected",
    value: function bindingConnected(binding) {
      this.unorderedBindings.add(binding);
    }
  }, {
    key: "bindingDisconnected",
    value: function bindingDisconnected(binding) {
      this.unorderedBindings.delete(binding);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var extendedEvent = extendEvent(event);

      var _iterator = _createForOfIteratorHelper(this.bindings),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var binding = _step.value;

          if (extendedEvent.immediatePropagationStopped) {
            break;
          } else {
            binding.handleEvent(extendedEvent);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "bindings",
    get: function get() {
      return Array.from(this.unorderedBindings).sort(function (left, right) {
        var leftIndex = left.index,
            rightIndex = right.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    }
  }]);

  return EventListener;
}();

function extendEvent(event) {
  if ("immediatePropagationStopped" in event) {
    return event;
  } else {
    var _stopImmediatePropagation = event.stopImmediatePropagation;
    return Object.assign(event, {
      immediatePropagationStopped: false,
      stopImmediatePropagation: function stopImmediatePropagation() {
        this.immediatePropagationStopped = true;

        _stopImmediatePropagation.call(this);
      }
    });
  }
}

var Dispatcher = /*#__PURE__*/function () {
  function Dispatcher(application) {
    _classCallCheck(this, Dispatcher);

    this.application = application;
    this.eventListenerMaps = new Map();
    this.started = false;
  }

  _createClass(Dispatcher, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.eventListeners.forEach(function (eventListener) {
          return eventListener.connect();
        });
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        this.eventListeners.forEach(function (eventListener) {
          return eventListener.disconnect();
        });
      }
    }
  }, {
    key: "eventListeners",
    get: function get() {
      return Array.from(this.eventListenerMaps.values()).reduce(function (listeners, map) {
        return listeners.concat(Array.from(map.values()));
      }, []);
    }
  }, {
    key: "bindingConnected",
    value: function bindingConnected(binding) {
      this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    }
  }, {
    key: "bindingDisconnected",
    value: function bindingDisconnected(binding) {
      this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
    }
  }, {
    key: "handleError",
    value: function handleError(error, message) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.application.handleError(error, "Error ".concat(message), detail);
    }
  }, {
    key: "fetchEventListenerForBinding",
    value: function fetchEventListenerForBinding(binding) {
      var eventTarget = binding.eventTarget,
          eventName = binding.eventName,
          eventOptions = binding.eventOptions;
      return this.fetchEventListener(eventTarget, eventName, eventOptions);
    }
  }, {
    key: "fetchEventListener",
    value: function fetchEventListener(eventTarget, eventName, eventOptions) {
      var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      var cacheKey = this.cacheKey(eventName, eventOptions);
      var eventListener = eventListenerMap.get(cacheKey);

      if (!eventListener) {
        eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
        eventListenerMap.set(cacheKey, eventListener);
      }

      return eventListener;
    }
  }, {
    key: "createEventListener",
    value: function createEventListener(eventTarget, eventName, eventOptions) {
      var eventListener = new EventListener(eventTarget, eventName, eventOptions);

      if (this.started) {
        eventListener.connect();
      }

      return eventListener;
    }
  }, {
    key: "fetchEventListenerMapForEventTarget",
    value: function fetchEventListenerMapForEventTarget(eventTarget) {
      var eventListenerMap = this.eventListenerMaps.get(eventTarget);

      if (!eventListenerMap) {
        eventListenerMap = new Map();
        this.eventListenerMaps.set(eventTarget, eventListenerMap);
      }

      return eventListenerMap;
    }
  }, {
    key: "cacheKey",
    value: function cacheKey(eventName, eventOptions) {
      var parts = [eventName];
      Object.keys(eventOptions).sort().forEach(function (key) {
        parts.push("".concat(eventOptions[key] ? "" : "!").concat(key));
      });
      return parts.join(":");
    }
  }]);

  return Dispatcher;
}();

var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#([^:]+?))(:(.+))?$/;

function parseActionDescriptorString(descriptorString) {
  var source = descriptorString.trim();
  var matches = source.match(descriptorPattern) || [];
  return {
    eventTarget: parseEventTarget(matches[4]),
    eventName: matches[2],
    eventOptions: matches[9] ? parseEventOptions(matches[9]) : {},
    identifier: matches[5],
    methodName: matches[7]
  };
}

function parseEventTarget(eventTargetName) {
  if (eventTargetName == "window") {
    return window;
  } else if (eventTargetName == "document") {
    return document;
  }
}

function parseEventOptions(eventOptions) {
  return eventOptions.split(":").reduce(function (options, token) {
    return Object.assign(options, _defineProperty({}, token.replace(/^!/, ""), !/^!/.test(token)));
  }, {});
}

function stringifyEventTarget(eventTarget) {
  if (eventTarget == window) {
    return "window";
  } else if (eventTarget == document) {
    return "document";
  }
}

function camelize(value) {
  return value.replace(/(?:[_-])([a-z0-9])/g, function (_, char) {
    return char.toUpperCase();
  });
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function dasherize(value) {
  return value.replace(/([A-Z])/g, function (_, char) {
    return "-".concat(char.toLowerCase());
  });
}

function tokenize(value) {
  return value.match(/[^\s]+/g) || [];
}

var Action = /*#__PURE__*/function () {
  function Action(element, index, descriptor) {
    _classCallCheck(this, Action);

    this.element = element;
    this.index = index;
    this.eventTarget = descriptor.eventTarget || element;
    this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
    this.eventOptions = descriptor.eventOptions || {};
    this.identifier = descriptor.identifier || error("missing identifier");
    this.methodName = descriptor.methodName || error("missing method name");
  }

  _createClass(Action, [{
    key: "toString",
    value: function toString() {
      var eventNameSuffix = this.eventTargetName ? "@".concat(this.eventTargetName) : "";
      return "".concat(this.eventName).concat(eventNameSuffix, "->").concat(this.identifier, "#").concat(this.methodName);
    }
  }, {
    key: "params",
    get: function get() {
      if (this.eventTarget instanceof Element) {
        return this.getParamsFromEventTargetAttributes(this.eventTarget);
      } else {
        return {};
      }
    }
  }, {
    key: "getParamsFromEventTargetAttributes",
    value: function getParamsFromEventTargetAttributes(eventTarget) {
      var params = {};
      var pattern = new RegExp("^data-".concat(this.identifier, "-(.+)-param$"));
      var attributes = Array.from(eventTarget.attributes);
      attributes.forEach(function (_ref) {
        var name = _ref.name,
            value = _ref.value;
        var match = name.match(pattern);
        var key = match && match[1];

        if (key) {
          Object.assign(params, _defineProperty({}, camelize(key), typecast(value)));
        }
      });
      return params;
    }
  }, {
    key: "eventTargetName",
    get: function get() {
      return stringifyEventTarget(this.eventTarget);
    }
  }], [{
    key: "forToken",
    value: function forToken(token) {
      return new this(token.element, token.index, parseActionDescriptorString(token.content));
    }
  }]);

  return Action;
}();

var defaultEventNames = {
  "a": function a(e) {
    return "click";
  },
  "button": function button(e) {
    return "click";
  },
  "form": function form(e) {
    return "submit";
  },
  "details": function details(e) {
    return "toggle";
  },
  "input": function input(e) {
    return e.getAttribute("type") == "submit" ? "click" : "input";
  },
  "select": function select(e) {
    return "change";
  },
  "textarea": function textarea(e) {
    return "input";
  }
};

function getDefaultEventNameForElement(element) {
  var tagName = element.tagName.toLowerCase();

  if (tagName in defaultEventNames) {
    return defaultEventNames[tagName](element);
  }
}

function error(message) {
  throw new Error(message);
}

function typecast(value) {
  try {
    return JSON.parse(value);
  } catch (o_O) {
    return value;
  }
}

var Binding = /*#__PURE__*/function () {
  function Binding(context, action) {
    _classCallCheck(this, Binding);

    this.context = context;
    this.action = action;
  }

  _createClass(Binding, [{
    key: "index",
    get: function get() {
      return this.action.index;
    }
  }, {
    key: "eventTarget",
    get: function get() {
      return this.action.eventTarget;
    }
  }, {
    key: "eventOptions",
    get: function get() {
      return this.action.eventOptions;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.context.identifier;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (this.willBeInvokedByEvent(event)) {
        this.invokeWithEvent(event);
      }
    }
  }, {
    key: "eventName",
    get: function get() {
      return this.action.eventName;
    }
  }, {
    key: "method",
    get: function get() {
      var method = this.controller[this.methodName];

      if (typeof method == "function") {
        return method;
      }

      throw new Error("Action \"".concat(this.action, "\" references undefined method \"").concat(this.methodName, "\""));
    }
  }, {
    key: "invokeWithEvent",
    value: function invokeWithEvent(event) {
      var target = event.target,
          currentTarget = event.currentTarget;

      try {
        var params = this.action.params;
        var actionEvent = Object.assign(event, {
          params: params
        });
        this.method.call(this.controller, actionEvent);
        this.context.logDebugActivity(this.methodName, {
          event: event,
          target: target,
          currentTarget: currentTarget,
          action: this.methodName
        });
      } catch (error) {
        var identifier = this.identifier,
            controller = this.controller,
            element = this.element,
            index = this.index;
        var detail = {
          identifier: identifier,
          controller: controller,
          element: element,
          index: index,
          event: event
        };
        this.context.handleError(error, "invoking action \"".concat(this.action, "\""), detail);
      }
    }
  }, {
    key: "willBeInvokedByEvent",
    value: function willBeInvokedByEvent(event) {
      var eventTarget = event.target;

      if (this.element === eventTarget) {
        return true;
      } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
        return this.scope.containsElement(eventTarget);
      } else {
        return this.scope.containsElement(this.action.element);
      }
    }
  }, {
    key: "controller",
    get: function get() {
      return this.context.controller;
    }
  }, {
    key: "methodName",
    get: function get() {
      return this.action.methodName;
    }
  }, {
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }]);

  return Binding;
}();

var ElementObserver = /*#__PURE__*/function () {
  function ElementObserver(element, delegate) {
    var _this = this;

    _classCallCheck(this, ElementObserver);

    this.mutationObserverInit = {
      attributes: true,
      childList: true,
      subtree: true
    };
    this.element = element;
    this.started = false;
    this.delegate = delegate;
    this.elements = new Set();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this.processMutations(mutations);
    });
  }

  _createClass(ElementObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.refresh();
      }
    }
  }, {
    key: "pause",
    value: function pause(callback) {
      if (this.started) {
        this.mutationObserver.disconnect();
        this.started = false;
      }

      callback();

      if (!this.started) {
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (this.started) {
        var matches = new Set(this.matchElementsInTree());

        for (var _i = 0, _Array$from = Array.from(this.elements); _i < _Array$from.length; _i++) {
          var element = _Array$from[_i];

          if (!matches.has(element)) {
            this.removeElement(element);
          }
        }

        for (var _i2 = 0, _Array$from2 = Array.from(matches); _i2 < _Array$from2.length; _i2++) {
          var _element = _Array$from2[_i2];
          this.addElement(_element);
        }
      }
    }
  }, {
    key: "processMutations",
    value: function processMutations(mutations) {
      if (this.started) {
        var _iterator2 = _createForOfIteratorHelper(mutations),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var mutation = _step2.value;
            this.processMutation(mutation);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }, {
    key: "processMutation",
    value: function processMutation(mutation) {
      if (mutation.type == "attributes") {
        this.processAttributeChange(mutation.target, mutation.attributeName);
      } else if (mutation.type == "childList") {
        this.processRemovedNodes(mutation.removedNodes);
        this.processAddedNodes(mutation.addedNodes);
      }
    }
  }, {
    key: "processAttributeChange",
    value: function processAttributeChange(node, attributeName) {
      var element = node;

      if (this.elements.has(element)) {
        if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
          this.delegate.elementAttributeChanged(element, attributeName);
        } else {
          this.removeElement(element);
        }
      } else if (this.matchElement(element)) {
        this.addElement(element);
      }
    }
  }, {
    key: "processRemovedNodes",
    value: function processRemovedNodes(nodes) {
      for (var _i3 = 0, _Array$from3 = Array.from(nodes); _i3 < _Array$from3.length; _i3++) {
        var node = _Array$from3[_i3];
        var element = this.elementFromNode(node);

        if (element) {
          this.processTree(element, this.removeElement);
        }
      }
    }
  }, {
    key: "processAddedNodes",
    value: function processAddedNodes(nodes) {
      for (var _i4 = 0, _Array$from4 = Array.from(nodes); _i4 < _Array$from4.length; _i4++) {
        var node = _Array$from4[_i4];
        var element = this.elementFromNode(node);

        if (element && this.elementIsActive(element)) {
          this.processTree(element, this.addElement);
        }
      }
    }
  }, {
    key: "matchElement",
    value: function matchElement(element) {
      return this.delegate.matchElement(element);
    }
  }, {
    key: "matchElementsInTree",
    value: function matchElementsInTree() {
      var tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;
      return this.delegate.matchElementsInTree(tree);
    }
  }, {
    key: "processTree",
    value: function processTree(tree, processor) {
      var _iterator3 = _createForOfIteratorHelper(this.matchElementsInTree(tree)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var element = _step3.value;
          processor.call(this, element);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "elementFromNode",
    value: function elementFromNode(node) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        return node;
      }
    }
  }, {
    key: "elementIsActive",
    value: function elementIsActive(element) {
      if (element.isConnected != this.element.isConnected) {
        return false;
      } else {
        return this.element.contains(element);
      }
    }
  }, {
    key: "addElement",
    value: function addElement(element) {
      if (!this.elements.has(element)) {
        if (this.elementIsActive(element)) {
          this.elements.add(element);

          if (this.delegate.elementMatched) {
            this.delegate.elementMatched(element);
          }
        }
      }
    }
  }, {
    key: "removeElement",
    value: function removeElement(element) {
      if (this.elements.has(element)) {
        this.elements.delete(element);

        if (this.delegate.elementUnmatched) {
          this.delegate.elementUnmatched(element);
        }
      }
    }
  }]);

  return ElementObserver;
}();

var AttributeObserver = /*#__PURE__*/function () {
  function AttributeObserver(element, attributeName, delegate) {
    _classCallCheck(this, AttributeObserver);

    this.attributeName = attributeName;
    this.delegate = delegate;
    this.elementObserver = new ElementObserver(element, this);
  }

  _createClass(AttributeObserver, [{
    key: "element",
    get: function get() {
      return this.elementObserver.element;
    }
  }, {
    key: "selector",
    get: function get() {
      return "[".concat(this.attributeName, "]");
    }
  }, {
    key: "start",
    value: function start() {
      this.elementObserver.start();
    }
  }, {
    key: "pause",
    value: function pause(callback) {
      this.elementObserver.pause(callback);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.elementObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.elementObserver.refresh();
    }
  }, {
    key: "started",
    get: function get() {
      return this.elementObserver.started;
    }
  }, {
    key: "matchElement",
    value: function matchElement(element) {
      return element.hasAttribute(this.attributeName);
    }
  }, {
    key: "matchElementsInTree",
    value: function matchElementsInTree(tree) {
      var match = this.matchElement(tree) ? [tree] : [];
      var matches = Array.from(tree.querySelectorAll(this.selector));
      return match.concat(matches);
    }
  }, {
    key: "elementMatched",
    value: function elementMatched(element) {
      if (this.delegate.elementMatchedAttribute) {
        this.delegate.elementMatchedAttribute(element, this.attributeName);
      }
    }
  }, {
    key: "elementUnmatched",
    value: function elementUnmatched(element) {
      if (this.delegate.elementUnmatchedAttribute) {
        this.delegate.elementUnmatchedAttribute(element, this.attributeName);
      }
    }
  }, {
    key: "elementAttributeChanged",
    value: function elementAttributeChanged(element, attributeName) {
      if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
        this.delegate.elementAttributeValueChanged(element, attributeName);
      }
    }
  }]);

  return AttributeObserver;
}();

var StringMapObserver = /*#__PURE__*/function () {
  function StringMapObserver(element, delegate) {
    var _this2 = this;

    _classCallCheck(this, StringMapObserver);

    this.element = element;
    this.delegate = delegate;
    this.started = false;
    this.stringMap = new Map();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this2.processMutations(mutations);
    });
  }

  _createClass(StringMapObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, {
          attributes: true,
          attributeOldValue: true
        });
        this.refresh();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (this.started) {
        var _iterator4 = _createForOfIteratorHelper(this.knownAttributeNames),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var attributeName = _step4.value;
            this.refreshAttribute(attributeName, null);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }
  }, {
    key: "processMutations",
    value: function processMutations(mutations) {
      if (this.started) {
        var _iterator5 = _createForOfIteratorHelper(mutations),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var mutation = _step5.value;
            this.processMutation(mutation);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  }, {
    key: "processMutation",
    value: function processMutation(mutation) {
      var attributeName = mutation.attributeName;

      if (attributeName) {
        this.refreshAttribute(attributeName, mutation.oldValue);
      }
    }
  }, {
    key: "refreshAttribute",
    value: function refreshAttribute(attributeName, oldValue) {
      var key = this.delegate.getStringMapKeyForAttribute(attributeName);

      if (key != null) {
        if (!this.stringMap.has(attributeName)) {
          this.stringMapKeyAdded(key, attributeName);
        }

        var value = this.element.getAttribute(attributeName);

        if (this.stringMap.get(attributeName) != value) {
          this.stringMapValueChanged(value, key, oldValue);
        }

        if (value == null) {
          var _oldValue = this.stringMap.get(attributeName);

          this.stringMap.delete(attributeName);
          if (_oldValue) this.stringMapKeyRemoved(key, attributeName, _oldValue);
        } else {
          this.stringMap.set(attributeName, value);
        }
      }
    }
  }, {
    key: "stringMapKeyAdded",
    value: function stringMapKeyAdded(key, attributeName) {
      if (this.delegate.stringMapKeyAdded) {
        this.delegate.stringMapKeyAdded(key, attributeName);
      }
    }
  }, {
    key: "stringMapValueChanged",
    value: function stringMapValueChanged(value, key, oldValue) {
      if (this.delegate.stringMapValueChanged) {
        this.delegate.stringMapValueChanged(value, key, oldValue);
      }
    }
  }, {
    key: "stringMapKeyRemoved",
    value: function stringMapKeyRemoved(key, attributeName, oldValue) {
      if (this.delegate.stringMapKeyRemoved) {
        this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
      }
    }
  }, {
    key: "knownAttributeNames",
    get: function get() {
      return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    }
  }, {
    key: "currentAttributeNames",
    get: function get() {
      return Array.from(this.element.attributes).map(function (attribute) {
        return attribute.name;
      });
    }
  }, {
    key: "recordedAttributeNames",
    get: function get() {
      return Array.from(this.stringMap.keys());
    }
  }]);

  return StringMapObserver;
}();

function _add(map, key, value) {
  fetch(map, key).add(value);
}

function del(map, key, value) {
  fetch(map, key).delete(value);
  prune(map, key);
}

function fetch(map, key) {
  var values = map.get(key);

  if (!values) {
    values = new Set();
    map.set(key, values);
  }

  return values;
}

function prune(map, key) {
  var values = map.get(key);

  if (values != null && values.size == 0) {
    map.delete(key);
  }
}

var Multimap = /*#__PURE__*/function () {
  function Multimap() {
    _classCallCheck(this, Multimap);

    this.valuesByKey = new Map();
  }

  _createClass(Multimap, [{
    key: "keys",
    get: function get() {
      return Array.from(this.valuesByKey.keys());
    }
  }, {
    key: "values",
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (values, set) {
        return values.concat(Array.from(set));
      }, []);
    }
  }, {
    key: "size",
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (size, set) {
        return size + set.size;
      }, 0);
    }
  }, {
    key: "add",
    value: function add(key, value) {
      _add(this.valuesByKey, key, value);
    }
  }, {
    key: "delete",
    value: function _delete(key, value) {
      del(this.valuesByKey, key, value);
    }
  }, {
    key: "has",
    value: function has(key, value) {
      var values = this.valuesByKey.get(key);
      return values != null && values.has(value);
    }
  }, {
    key: "hasKey",
    value: function hasKey(key) {
      return this.valuesByKey.has(key);
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      var sets = Array.from(this.valuesByKey.values());
      return sets.some(function (set) {
        return set.has(value);
      });
    }
  }, {
    key: "getValuesForKey",
    value: function getValuesForKey(key) {
      var values = this.valuesByKey.get(key);
      return values ? Array.from(values) : [];
    }
  }, {
    key: "getKeysForValue",
    value: function getKeysForValue(value) {
      return Array.from(this.valuesByKey).filter(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            values = _ref3[1];

        return values.has(value);
      }).map(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            key = _ref5[0],
            values = _ref5[1];

        return key;
      });
    }
  }]);

  return Multimap;
}();

var IndexedMultimap = /*#__PURE__*/function (_Multimap) {
  _inherits(IndexedMultimap, _Multimap);

  var _super = _createSuper(IndexedMultimap);

  function IndexedMultimap() {
    var _this3;

    _classCallCheck(this, IndexedMultimap);

    _this3 = _super.call(this);
    _this3.keysByValue = new Map();
    return _this3;
  }

  _createClass(IndexedMultimap, [{
    key: "values",
    get: function get() {
      return Array.from(this.keysByValue.keys());
    }
  }, {
    key: "add",
    value: function add(key, value) {
      _get(_getPrototypeOf(IndexedMultimap.prototype), "add", this).call(this, key, value);

      _add(this.keysByValue, value, key);
    }
  }, {
    key: "delete",
    value: function _delete(key, value) {
      _get(_getPrototypeOf(IndexedMultimap.prototype), "delete", this).call(this, key, value);

      del(this.keysByValue, value, key);
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      return this.keysByValue.has(value);
    }
  }, {
    key: "getKeysForValue",
    value: function getKeysForValue(value) {
      var set = this.keysByValue.get(value);
      return set ? Array.from(set) : [];
    }
  }]);

  return IndexedMultimap;
}(Multimap);

var TokenListObserver = /*#__PURE__*/function () {
  function TokenListObserver(element, attributeName, delegate) {
    _classCallCheck(this, TokenListObserver);

    this.attributeObserver = new AttributeObserver(element, attributeName, this);
    this.delegate = delegate;
    this.tokensByElement = new Multimap();
  }

  _createClass(TokenListObserver, [{
    key: "started",
    get: function get() {
      return this.attributeObserver.started;
    }
  }, {
    key: "start",
    value: function start() {
      this.attributeObserver.start();
    }
  }, {
    key: "pause",
    value: function pause(callback) {
      this.attributeObserver.pause(callback);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.attributeObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.attributeObserver.refresh();
    }
  }, {
    key: "element",
    get: function get() {
      return this.attributeObserver.element;
    }
  }, {
    key: "attributeName",
    get: function get() {
      return this.attributeObserver.attributeName;
    }
  }, {
    key: "elementMatchedAttribute",
    value: function elementMatchedAttribute(element) {
      this.tokensMatched(this.readTokensForElement(element));
    }
  }, {
    key: "elementAttributeValueChanged",
    value: function elementAttributeValueChanged(element) {
      var _this$refreshTokensFo = this.refreshTokensForElement(element),
          _this$refreshTokensFo2 = _slicedToArray(_this$refreshTokensFo, 2),
          unmatchedTokens = _this$refreshTokensFo2[0],
          matchedTokens = _this$refreshTokensFo2[1];

      this.tokensUnmatched(unmatchedTokens);
      this.tokensMatched(matchedTokens);
    }
  }, {
    key: "elementUnmatchedAttribute",
    value: function elementUnmatchedAttribute(element) {
      this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    }
  }, {
    key: "tokensMatched",
    value: function tokensMatched(tokens) {
      var _this4 = this;

      tokens.forEach(function (token) {
        return _this4.tokenMatched(token);
      });
    }
  }, {
    key: "tokensUnmatched",
    value: function tokensUnmatched(tokens) {
      var _this5 = this;

      tokens.forEach(function (token) {
        return _this5.tokenUnmatched(token);
      });
    }
  }, {
    key: "tokenMatched",
    value: function tokenMatched(token) {
      this.delegate.tokenMatched(token);
      this.tokensByElement.add(token.element, token);
    }
  }, {
    key: "tokenUnmatched",
    value: function tokenUnmatched(token) {
      this.delegate.tokenUnmatched(token);
      this.tokensByElement.delete(token.element, token);
    }
  }, {
    key: "refreshTokensForElement",
    value: function refreshTokensForElement(element) {
      var previousTokens = this.tokensByElement.getValuesForKey(element);
      var currentTokens = this.readTokensForElement(element);
      var firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            previousToken = _ref7[0],
            currentToken = _ref7[1];

        return !tokensAreEqual(previousToken, currentToken);
      });

      if (firstDifferingIndex == -1) {
        return [[], []];
      } else {
        return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
      }
    }
  }, {
    key: "readTokensForElement",
    value: function readTokensForElement(element) {
      var attributeName = this.attributeName;
      var tokenString = element.getAttribute(attributeName) || "";
      return parseTokenString(tokenString, element, attributeName);
    }
  }]);

  return TokenListObserver;
}();

function parseTokenString(tokenString, element, attributeName) {
  return tokenString.trim().split(/\s+/).filter(function (content) {
    return content.length;
  }).map(function (content, index) {
    return {
      element: element,
      attributeName: attributeName,
      content: content,
      index: index
    };
  });
}

function zip(left, right) {
  var length = Math.max(left.length, right.length);
  return Array.from({
    length: length
  }, function (_, index) {
    return [left[index], right[index]];
  });
}

function tokensAreEqual(left, right) {
  return left && right && left.index == right.index && left.content == right.content;
}

var ValueListObserver = /*#__PURE__*/function () {
  function ValueListObserver(element, attributeName, delegate) {
    _classCallCheck(this, ValueListObserver);

    this.tokenListObserver = new TokenListObserver(element, attributeName, this);
    this.delegate = delegate;
    this.parseResultsByToken = new WeakMap();
    this.valuesByTokenByElement = new WeakMap();
  }

  _createClass(ValueListObserver, [{
    key: "started",
    get: function get() {
      return this.tokenListObserver.started;
    }
  }, {
    key: "start",
    value: function start() {
      this.tokenListObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.tokenListObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.tokenListObserver.refresh();
    }
  }, {
    key: "element",
    get: function get() {
      return this.tokenListObserver.element;
    }
  }, {
    key: "attributeName",
    get: function get() {
      return this.tokenListObserver.attributeName;
    }
  }, {
    key: "tokenMatched",
    value: function tokenMatched(token) {
      var element = token.element;

      var _this$fetchParseResul = this.fetchParseResultForToken(token),
          value = _this$fetchParseResul.value;

      if (value) {
        this.fetchValuesByTokenForElement(element).set(token, value);
        this.delegate.elementMatchedValue(element, value);
      }
    }
  }, {
    key: "tokenUnmatched",
    value: function tokenUnmatched(token) {
      var element = token.element;

      var _this$fetchParseResul2 = this.fetchParseResultForToken(token),
          value = _this$fetchParseResul2.value;

      if (value) {
        this.fetchValuesByTokenForElement(element).delete(token);
        this.delegate.elementUnmatchedValue(element, value);
      }
    }
  }, {
    key: "fetchParseResultForToken",
    value: function fetchParseResultForToken(token) {
      var parseResult = this.parseResultsByToken.get(token);

      if (!parseResult) {
        parseResult = this.parseToken(token);
        this.parseResultsByToken.set(token, parseResult);
      }

      return parseResult;
    }
  }, {
    key: "fetchValuesByTokenForElement",
    value: function fetchValuesByTokenForElement(element) {
      var valuesByToken = this.valuesByTokenByElement.get(element);

      if (!valuesByToken) {
        valuesByToken = new Map();
        this.valuesByTokenByElement.set(element, valuesByToken);
      }

      return valuesByToken;
    }
  }, {
    key: "parseToken",
    value: function parseToken(token) {
      try {
        var value = this.delegate.parseValueForToken(token);
        return {
          value: value
        };
      } catch (error) {
        return {
          error: error
        };
      }
    }
  }]);

  return ValueListObserver;
}();

var BindingObserver = /*#__PURE__*/function () {
  function BindingObserver(context, delegate) {
    _classCallCheck(this, BindingObserver);

    this.context = context;
    this.delegate = delegate;
    this.bindingsByAction = new Map();
  }

  _createClass(BindingObserver, [{
    key: "start",
    value: function start() {
      if (!this.valueListObserver) {
        this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
        this.valueListObserver.start();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.valueListObserver) {
        this.valueListObserver.stop();
        delete this.valueListObserver;
        this.disconnectAllActions();
      }
    }
  }, {
    key: "element",
    get: function get() {
      return this.context.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.context.identifier;
    }
  }, {
    key: "actionAttribute",
    get: function get() {
      return this.schema.actionAttribute;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.context.schema;
    }
  }, {
    key: "bindings",
    get: function get() {
      return Array.from(this.bindingsByAction.values());
    }
  }, {
    key: "connectAction",
    value: function connectAction(action) {
      var binding = new Binding(this.context, action);
      this.bindingsByAction.set(action, binding);
      this.delegate.bindingConnected(binding);
    }
  }, {
    key: "disconnectAction",
    value: function disconnectAction(action) {
      var binding = this.bindingsByAction.get(action);

      if (binding) {
        this.bindingsByAction.delete(action);
        this.delegate.bindingDisconnected(binding);
      }
    }
  }, {
    key: "disconnectAllActions",
    value: function disconnectAllActions() {
      var _this6 = this;

      this.bindings.forEach(function (binding) {
        return _this6.delegate.bindingDisconnected(binding);
      });
      this.bindingsByAction.clear();
    }
  }, {
    key: "parseValueForToken",
    value: function parseValueForToken(token) {
      var action = Action.forToken(token);

      if (action.identifier == this.identifier) {
        return action;
      }
    }
  }, {
    key: "elementMatchedValue",
    value: function elementMatchedValue(element, action) {
      this.connectAction(action);
    }
  }, {
    key: "elementUnmatchedValue",
    value: function elementUnmatchedValue(element, action) {
      this.disconnectAction(action);
    }
  }]);

  return BindingObserver;
}();

var ValueObserver = /*#__PURE__*/function () {
  function ValueObserver(context, receiver) {
    _classCallCheck(this, ValueObserver);

    this.context = context;
    this.receiver = receiver;
    this.stringMapObserver = new StringMapObserver(this.element, this);
    this.valueDescriptorMap = this.controller.valueDescriptorMap;
    this.invokeChangedCallbacksForDefaultValues();
  }

  _createClass(ValueObserver, [{
    key: "start",
    value: function start() {
      this.stringMapObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.stringMapObserver.stop();
    }
  }, {
    key: "element",
    get: function get() {
      return this.context.element;
    }
  }, {
    key: "controller",
    get: function get() {
      return this.context.controller;
    }
  }, {
    key: "getStringMapKeyForAttribute",
    value: function getStringMapKeyForAttribute(attributeName) {
      if (attributeName in this.valueDescriptorMap) {
        return this.valueDescriptorMap[attributeName].name;
      }
    }
  }, {
    key: "stringMapKeyAdded",
    value: function stringMapKeyAdded(key, attributeName) {
      var descriptor = this.valueDescriptorMap[attributeName];

      if (!this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
      }
    }
  }, {
    key: "stringMapValueChanged",
    value: function stringMapValueChanged(value, name, oldValue) {
      var descriptor = this.valueDescriptorNameMap[name];
      if (value === null) return;

      if (oldValue === null) {
        oldValue = descriptor.writer(descriptor.defaultValue);
      }

      this.invokeChangedCallback(name, value, oldValue);
    }
  }, {
    key: "stringMapKeyRemoved",
    value: function stringMapKeyRemoved(key, attributeName, oldValue) {
      var descriptor = this.valueDescriptorNameMap[key];

      if (this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
      } else {
        this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
      }
    }
  }, {
    key: "invokeChangedCallbacksForDefaultValues",
    value: function invokeChangedCallbacksForDefaultValues() {
      var _iterator6 = _createForOfIteratorHelper(this.valueDescriptors),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _ref9 = _step6.value;
          var key = _ref9.key;
          var name = _ref9.name;
          var defaultValue = _ref9.defaultValue;
          var writer = _ref9.writer;

          if (defaultValue != undefined && !this.controller.data.has(key)) {
            this.invokeChangedCallback(name, writer(defaultValue), undefined);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "invokeChangedCallback",
    value: function invokeChangedCallback(name, rawValue, rawOldValue) {
      var changedMethodName = "".concat(name, "Changed");
      var changedMethod = this.receiver[changedMethodName];

      if (typeof changedMethod == "function") {
        var descriptor = this.valueDescriptorNameMap[name];
        var value = descriptor.reader(rawValue);
        var oldValue = rawOldValue;

        if (rawOldValue) {
          oldValue = descriptor.reader(rawOldValue);
        }

        changedMethod.call(this.receiver, value, oldValue);
      }
    }
  }, {
    key: "valueDescriptors",
    get: function get() {
      var valueDescriptorMap = this.valueDescriptorMap;
      return Object.keys(valueDescriptorMap).map(function (key) {
        return valueDescriptorMap[key];
      });
    }
  }, {
    key: "valueDescriptorNameMap",
    get: function get() {
      var _this7 = this;

      var descriptors = {};
      Object.keys(this.valueDescriptorMap).forEach(function (key) {
        var descriptor = _this7.valueDescriptorMap[key];
        descriptors[descriptor.name] = descriptor;
      });
      return descriptors;
    }
  }, {
    key: "hasValue",
    value: function hasValue(attributeName) {
      var descriptor = this.valueDescriptorNameMap[attributeName];
      var hasMethodName = "has".concat(capitalize(descriptor.name));
      return this.receiver[hasMethodName];
    }
  }]);

  return ValueObserver;
}();

var TargetObserver = /*#__PURE__*/function () {
  function TargetObserver(context, delegate) {
    _classCallCheck(this, TargetObserver);

    this.context = context;
    this.delegate = delegate;
    this.targetsByName = new Multimap();
  }

  _createClass(TargetObserver, [{
    key: "start",
    value: function start() {
      if (!this.tokenListObserver) {
        this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
        this.tokenListObserver.start();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.tokenListObserver) {
        this.disconnectAllTargets();
        this.tokenListObserver.stop();
        delete this.tokenListObserver;
      }
    }
  }, {
    key: "tokenMatched",
    value: function tokenMatched(_ref10) {
      var element = _ref10.element,
          name = _ref10.content;

      if (this.scope.containsElement(element)) {
        this.connectTarget(element, name);
      }
    }
  }, {
    key: "tokenUnmatched",
    value: function tokenUnmatched(_ref11) {
      var element = _ref11.element,
          name = _ref11.content;
      this.disconnectTarget(element, name);
    }
  }, {
    key: "connectTarget",
    value: function connectTarget(element, name) {
      var _this8 = this;

      var _a;

      if (!this.targetsByName.has(name, element)) {
        this.targetsByName.add(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(function () {
          return _this8.delegate.targetConnected(element, name);
        });
      }
    }
  }, {
    key: "disconnectTarget",
    value: function disconnectTarget(element, name) {
      var _this9 = this;

      var _a;

      if (this.targetsByName.has(name, element)) {
        this.targetsByName.delete(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(function () {
          return _this9.delegate.targetDisconnected(element, name);
        });
      }
    }
  }, {
    key: "disconnectAllTargets",
    value: function disconnectAllTargets() {
      var _iterator7 = _createForOfIteratorHelper(this.targetsByName.keys),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var name = _step7.value;

          var _iterator8 = _createForOfIteratorHelper(this.targetsByName.getValuesForKey(name)),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var element = _step8.value;
              this.disconnectTarget(element, name);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "attributeName",
    get: function get() {
      return "data-".concat(this.context.identifier, "-target");
    }
  }, {
    key: "element",
    get: function get() {
      return this.context.element;
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }]);

  return TargetObserver;
}();

var Context = /*#__PURE__*/function () {
  function Context(module, scope) {
    var _this10 = this;

    _classCallCheck(this, Context);

    this.logDebugActivity = function (functionName) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var identifier = _this10.identifier,
          controller = _this10.controller,
          element = _this10.element;
      detail = Object.assign({
        identifier: identifier,
        controller: controller,
        element: element
      }, detail);

      _this10.application.logDebugActivity(_this10.identifier, functionName, detail);
    };

    this.module = module;
    this.scope = scope;
    this.controller = new module.controllerConstructor(this);
    this.bindingObserver = new BindingObserver(this, this.dispatcher);
    this.valueObserver = new ValueObserver(this, this.controller);
    this.targetObserver = new TargetObserver(this, this);

    try {
      this.controller.initialize();
      this.logDebugActivity("initialize");
    } catch (error) {
      this.handleError(error, "initializing controller");
    }
  }

  _createClass(Context, [{
    key: "connect",
    value: function connect() {
      this.bindingObserver.start();
      this.valueObserver.start();
      this.targetObserver.start();

      try {
        this.controller.connect();
        this.logDebugActivity("connect");
      } catch (error) {
        this.handleError(error, "connecting controller");
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      try {
        this.controller.disconnect();
        this.logDebugActivity("disconnect");
      } catch (error) {
        this.handleError(error, "disconnecting controller");
      }

      this.targetObserver.stop();
      this.valueObserver.stop();
      this.bindingObserver.stop();
    }
  }, {
    key: "application",
    get: function get() {
      return this.module.application;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.module.identifier;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.application.schema;
    }
  }, {
    key: "dispatcher",
    get: function get() {
      return this.application.dispatcher;
    }
  }, {
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "parentElement",
    get: function get() {
      return this.element.parentElement;
    }
  }, {
    key: "handleError",
    value: function handleError(error, message) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var identifier = this.identifier,
          controller = this.controller,
          element = this.element;
      detail = Object.assign({
        identifier: identifier,
        controller: controller,
        element: element
      }, detail);
      this.application.handleError(error, "Error ".concat(message), detail);
    }
  }, {
    key: "targetConnected",
    value: function targetConnected(element, name) {
      this.invokeControllerMethod("".concat(name, "TargetConnected"), element);
    }
  }, {
    key: "targetDisconnected",
    value: function targetDisconnected(element, name) {
      this.invokeControllerMethod("".concat(name, "TargetDisconnected"), element);
    }
  }, {
    key: "invokeControllerMethod",
    value: function invokeControllerMethod(methodName) {
      var controller = this.controller;

      if (typeof controller[methodName] == "function") {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        controller[methodName].apply(controller, args);
      }
    }
  }]);

  return Context;
}();

function readInheritableStaticArrayValues(constructor, propertyName) {
  var ancestors = getAncestorsForConstructor(constructor);
  return Array.from(ancestors.reduce(function (values, constructor) {
    getOwnStaticArrayValues(constructor, propertyName).forEach(function (name) {
      return values.add(name);
    });
    return values;
  }, new Set()));
}

function readInheritableStaticObjectPairs(constructor, propertyName) {
  var ancestors = getAncestorsForConstructor(constructor);
  return ancestors.reduce(function (pairs, constructor) {
    pairs.push.apply(pairs, _toConsumableArray(getOwnStaticObjectPairs(constructor, propertyName)));
    return pairs;
  }, []);
}

function getAncestorsForConstructor(constructor) {
  var ancestors = [];

  while (constructor) {
    ancestors.push(constructor);
    constructor = Object.getPrototypeOf(constructor);
  }

  return ancestors.reverse();
}

function getOwnStaticArrayValues(constructor, propertyName) {
  var definition = constructor[propertyName];
  return Array.isArray(definition) ? definition : [];
}

function getOwnStaticObjectPairs(constructor, propertyName) {
  var definition = constructor[propertyName];
  return definition ? Object.keys(definition).map(function (key) {
    return [key, definition[key]];
  }) : [];
}

function bless(constructor) {
  return shadow(constructor, getBlessedProperties(constructor));
}

function shadow(constructor, properties) {
  var shadowConstructor = extend(constructor);
  var shadowProperties = getShadowProperties(constructor.prototype, properties);
  Object.defineProperties(shadowConstructor.prototype, shadowProperties);
  return shadowConstructor;
}

function getBlessedProperties(constructor) {
  var blessings = readInheritableStaticArrayValues(constructor, "blessings");
  return blessings.reduce(function (blessedProperties, blessing) {
    var properties = blessing(constructor);

    for (var key in properties) {
      var descriptor = blessedProperties[key] || {};
      blessedProperties[key] = Object.assign(descriptor, properties[key]);
    }

    return blessedProperties;
  }, {});
}

function getShadowProperties(prototype, properties) {
  return getOwnKeys(properties).reduce(function (shadowProperties, key) {
    var descriptor = getShadowedDescriptor(prototype, properties, key);

    if (descriptor) {
      Object.assign(shadowProperties, _defineProperty({}, key, descriptor));
    }

    return shadowProperties;
  }, {});
}

function getShadowedDescriptor(prototype, properties, key) {
  var shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
  var shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;

  if (!shadowedByValue) {
    var descriptor = Object.getOwnPropertyDescriptor(properties, key).value;

    if (shadowingDescriptor) {
      descriptor.get = shadowingDescriptor.get || descriptor.get;
      descriptor.set = shadowingDescriptor.set || descriptor.set;
    }

    return descriptor;
  }
}

var getOwnKeys = function () {
  if (typeof Object.getOwnPropertySymbols == "function") {
    return function (object) {
      return [].concat(_toConsumableArray(Object.getOwnPropertyNames(object)), _toConsumableArray(Object.getOwnPropertySymbols(object)));
    };
  } else {
    return Object.getOwnPropertyNames;
  }
}();

var extend = function () {
  function extendWithReflect(constructor) {
    function extended() {
      return Reflect.construct(constructor, arguments, this instanceof extended ? this.constructor : void 0);
    }

    extended.prototype = Object.create(constructor.prototype, {
      constructor: {
        value: extended
      }
    });
    Reflect.setPrototypeOf(extended, constructor);
    return extended;
  }

  function testReflectExtension() {
    var a = function a() {
      this.a.call(this);
    };

    var b = extendWithReflect(a);

    b.prototype.a = function () {};

    return new b();
  }

  try {
    testReflectExtension();
    return extendWithReflect;
  } catch (error) {
    return function (constructor) {
      return /*#__PURE__*/function (_constructor) {
        _inherits(extended, _constructor);

        var _super2 = _createSuper(extended);

        function extended() {
          _classCallCheck(this, extended);

          return _super2.apply(this, arguments);
        }

        return extended;
      }(constructor);
    };
  }
}();

function blessDefinition(definition) {
  return {
    identifier: definition.identifier,
    controllerConstructor: bless(definition.controllerConstructor)
  };
}

var Module = /*#__PURE__*/function () {
  function Module(application, definition) {
    _classCallCheck(this, Module);

    this.application = application;
    this.definition = blessDefinition(definition);
    this.contextsByScope = new WeakMap();
    this.connectedContexts = new Set();
  }

  _createClass(Module, [{
    key: "identifier",
    get: function get() {
      return this.definition.identifier;
    }
  }, {
    key: "controllerConstructor",
    get: function get() {
      return this.definition.controllerConstructor;
    }
  }, {
    key: "contexts",
    get: function get() {
      return Array.from(this.connectedContexts);
    }
  }, {
    key: "connectContextForScope",
    value: function connectContextForScope(scope) {
      var context = this.fetchContextForScope(scope);
      this.connectedContexts.add(context);
      context.connect();
    }
  }, {
    key: "disconnectContextForScope",
    value: function disconnectContextForScope(scope) {
      var context = this.contextsByScope.get(scope);

      if (context) {
        this.connectedContexts.delete(context);
        context.disconnect();
      }
    }
  }, {
    key: "fetchContextForScope",
    value: function fetchContextForScope(scope) {
      var context = this.contextsByScope.get(scope);

      if (!context) {
        context = new Context(this, scope);
        this.contextsByScope.set(scope, context);
      }

      return context;
    }
  }]);

  return Module;
}();

var ClassMap = /*#__PURE__*/function () {
  function ClassMap(scope) {
    _classCallCheck(this, ClassMap);

    this.scope = scope;
  }

  _createClass(ClassMap, [{
    key: "has",
    value: function has(name) {
      return this.data.has(this.getDataKey(name));
    }
  }, {
    key: "get",
    value: function get(name) {
      return this.getAll(name)[0];
    }
  }, {
    key: "getAll",
    value: function getAll(name) {
      var tokenString = this.data.get(this.getDataKey(name)) || "";
      return tokenize(tokenString);
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName(name) {
      return this.data.getAttributeNameForKey(this.getDataKey(name));
    }
  }, {
    key: "getDataKey",
    value: function getDataKey(name) {
      return "".concat(name, "-class");
    }
  }, {
    key: "data",
    get: function get() {
      return this.scope.data;
    }
  }]);

  return ClassMap;
}();

var DataMap = /*#__PURE__*/function () {
  function DataMap(scope) {
    _classCallCheck(this, DataMap);

    this.scope = scope;
  }

  _createClass(DataMap, [{
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "get",
    value: function get(key) {
      var name = this.getAttributeNameForKey(key);
      return this.element.getAttribute(name);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var name = this.getAttributeNameForKey(key);
      this.element.setAttribute(name, value);
      return this.get(key);
    }
  }, {
    key: "has",
    value: function has(key) {
      var name = this.getAttributeNameForKey(key);
      return this.element.hasAttribute(name);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      if (this.has(key)) {
        var name = this.getAttributeNameForKey(key);
        this.element.removeAttribute(name);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "getAttributeNameForKey",
    value: function getAttributeNameForKey(key) {
      return "data-".concat(this.identifier, "-").concat(dasherize(key));
    }
  }]);

  return DataMap;
}();

var Guide = /*#__PURE__*/function () {
  function Guide(logger) {
    _classCallCheck(this, Guide);

    this.warnedKeysByObject = new WeakMap();
    this.logger = logger;
  }

  _createClass(Guide, [{
    key: "warn",
    value: function warn(object, key, message) {
      var warnedKeys = this.warnedKeysByObject.get(object);

      if (!warnedKeys) {
        warnedKeys = new Set();
        this.warnedKeysByObject.set(object, warnedKeys);
      }

      if (!warnedKeys.has(key)) {
        warnedKeys.add(key);
        this.logger.warn(message, object);
      }
    }
  }]);

  return Guide;
}();

function attributeValueContainsToken(attributeName, token) {
  return "[".concat(attributeName, "~=\"").concat(token, "\"]");
}

var TargetSet = /*#__PURE__*/function () {
  function TargetSet(scope) {
    _classCallCheck(this, TargetSet);

    this.scope = scope;
  }

  _createClass(TargetSet, [{
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.scope.schema;
    }
  }, {
    key: "has",
    value: function has(targetName) {
      return this.find(targetName) != null;
    }
  }, {
    key: "find",
    value: function find() {
      var _this11 = this;

      for (var _len2 = arguments.length, targetNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        targetNames[_key2] = arguments[_key2];
      }

      return targetNames.reduce(function (target, targetName) {
        return target || _this11.findTarget(targetName) || _this11.findLegacyTarget(targetName);
      }, undefined);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      var _this12 = this;

      for (var _len3 = arguments.length, targetNames = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        targetNames[_key3] = arguments[_key3];
      }

      return targetNames.reduce(function (targets, targetName) {
        return [].concat(_toConsumableArray(targets), _toConsumableArray(_this12.findAllTargets(targetName)), _toConsumableArray(_this12.findAllLegacyTargets(targetName)));
      }, []);
    }
  }, {
    key: "findTarget",
    value: function findTarget(targetName) {
      var selector = this.getSelectorForTargetName(targetName);
      return this.scope.findElement(selector);
    }
  }, {
    key: "findAllTargets",
    value: function findAllTargets(targetName) {
      var selector = this.getSelectorForTargetName(targetName);
      return this.scope.findAllElements(selector);
    }
  }, {
    key: "getSelectorForTargetName",
    value: function getSelectorForTargetName(targetName) {
      var attributeName = this.schema.targetAttributeForScope(this.identifier);
      return attributeValueContainsToken(attributeName, targetName);
    }
  }, {
    key: "findLegacyTarget",
    value: function findLegacyTarget(targetName) {
      var selector = this.getLegacySelectorForTargetName(targetName);
      return this.deprecate(this.scope.findElement(selector), targetName);
    }
  }, {
    key: "findAllLegacyTargets",
    value: function findAllLegacyTargets(targetName) {
      var _this13 = this;

      var selector = this.getLegacySelectorForTargetName(targetName);
      return this.scope.findAllElements(selector).map(function (element) {
        return _this13.deprecate(element, targetName);
      });
    }
  }, {
    key: "getLegacySelectorForTargetName",
    value: function getLegacySelectorForTargetName(targetName) {
      var targetDescriptor = "".concat(this.identifier, ".").concat(targetName);
      return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    }
  }, {
    key: "deprecate",
    value: function deprecate(element, targetName) {
      if (element) {
        var identifier = this.identifier;
        var attributeName = this.schema.targetAttribute;
        var revisedAttributeName = this.schema.targetAttributeForScope(identifier);
        this.guide.warn(element, "target:".concat(targetName), "Please replace ".concat(attributeName, "=\"").concat(identifier, ".").concat(targetName, "\" with ").concat(revisedAttributeName, "=\"").concat(targetName, "\". ") + "The ".concat(attributeName, " attribute is deprecated and will be removed in a future version of Stimulus."));
      }

      return element;
    }
  }, {
    key: "guide",
    get: function get() {
      return this.scope.guide;
    }
  }]);

  return TargetSet;
}();

var Scope = /*#__PURE__*/function () {
  function Scope(schema, element, identifier, logger) {
    var _this14 = this;

    _classCallCheck(this, Scope);

    this.targets = new TargetSet(this);
    this.classes = new ClassMap(this);
    this.data = new DataMap(this);

    this.containsElement = function (element) {
      return element.closest(_this14.controllerSelector) === _this14.element;
    };

    this.schema = schema;
    this.element = element;
    this.identifier = identifier;
    this.guide = new Guide(logger);
  }

  _createClass(Scope, [{
    key: "findElement",
    value: function findElement(selector) {
      return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
    }
  }, {
    key: "findAllElements",
    value: function findAllElements(selector) {
      return [].concat(_toConsumableArray(this.element.matches(selector) ? [this.element] : []), _toConsumableArray(this.queryElements(selector).filter(this.containsElement)));
    }
  }, {
    key: "queryElements",
    value: function queryElements(selector) {
      return Array.from(this.element.querySelectorAll(selector));
    }
  }, {
    key: "controllerSelector",
    get: function get() {
      return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
    }
  }]);

  return Scope;
}();

var ScopeObserver = /*#__PURE__*/function () {
  function ScopeObserver(element, schema, delegate) {
    _classCallCheck(this, ScopeObserver);

    this.element = element;
    this.schema = schema;
    this.delegate = delegate;
    this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
    this.scopesByIdentifierByElement = new WeakMap();
    this.scopeReferenceCounts = new WeakMap();
  }

  _createClass(ScopeObserver, [{
    key: "start",
    value: function start() {
      this.valueListObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.valueListObserver.stop();
    }
  }, {
    key: "controllerAttribute",
    get: function get() {
      return this.schema.controllerAttribute;
    }
  }, {
    key: "parseValueForToken",
    value: function parseValueForToken(token) {
      var element = token.element,
          identifier = token.content;
      var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
      var scope = scopesByIdentifier.get(identifier);

      if (!scope) {
        scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
        scopesByIdentifier.set(identifier, scope);
      }

      return scope;
    }
  }, {
    key: "elementMatchedValue",
    value: function elementMatchedValue(element, value) {
      var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
      this.scopeReferenceCounts.set(value, referenceCount);

      if (referenceCount == 1) {
        this.delegate.scopeConnected(value);
      }
    }
  }, {
    key: "elementUnmatchedValue",
    value: function elementUnmatchedValue(element, value) {
      var referenceCount = this.scopeReferenceCounts.get(value);

      if (referenceCount) {
        this.scopeReferenceCounts.set(value, referenceCount - 1);

        if (referenceCount == 1) {
          this.delegate.scopeDisconnected(value);
        }
      }
    }
  }, {
    key: "fetchScopesByIdentifierForElement",
    value: function fetchScopesByIdentifierForElement(element) {
      var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);

      if (!scopesByIdentifier) {
        scopesByIdentifier = new Map();
        this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
      }

      return scopesByIdentifier;
    }
  }]);

  return ScopeObserver;
}();

var Router = /*#__PURE__*/function () {
  function Router(application) {
    _classCallCheck(this, Router);

    this.application = application;
    this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
    this.scopesByIdentifier = new Multimap();
    this.modulesByIdentifier = new Map();
  }

  _createClass(Router, [{
    key: "element",
    get: function get() {
      return this.application.element;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.application.schema;
    }
  }, {
    key: "logger",
    get: function get() {
      return this.application.logger;
    }
  }, {
    key: "controllerAttribute",
    get: function get() {
      return this.schema.controllerAttribute;
    }
  }, {
    key: "modules",
    get: function get() {
      return Array.from(this.modulesByIdentifier.values());
    }
  }, {
    key: "contexts",
    get: function get() {
      return this.modules.reduce(function (contexts, module) {
        return contexts.concat(module.contexts);
      }, []);
    }
  }, {
    key: "start",
    value: function start() {
      this.scopeObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.scopeObserver.stop();
    }
  }, {
    key: "loadDefinition",
    value: function loadDefinition(definition) {
      this.unloadIdentifier(definition.identifier);
      var module = new Module(this.application, definition);
      this.connectModule(module);
    }
  }, {
    key: "unloadIdentifier",
    value: function unloadIdentifier(identifier) {
      var module = this.modulesByIdentifier.get(identifier);

      if (module) {
        this.disconnectModule(module);
      }
    }
  }, {
    key: "getContextForElementAndIdentifier",
    value: function getContextForElementAndIdentifier(element, identifier) {
      var module = this.modulesByIdentifier.get(identifier);

      if (module) {
        return module.contexts.find(function (context) {
          return context.element == element;
        });
      }
    }
  }, {
    key: "handleError",
    value: function handleError(error, message, detail) {
      this.application.handleError(error, message, detail);
    }
  }, {
    key: "createScopeForElementAndIdentifier",
    value: function createScopeForElementAndIdentifier(element, identifier) {
      return new Scope(this.schema, element, identifier, this.logger);
    }
  }, {
    key: "scopeConnected",
    value: function scopeConnected(scope) {
      this.scopesByIdentifier.add(scope.identifier, scope);
      var module = this.modulesByIdentifier.get(scope.identifier);

      if (module) {
        module.connectContextForScope(scope);
      }
    }
  }, {
    key: "scopeDisconnected",
    value: function scopeDisconnected(scope) {
      this.scopesByIdentifier.delete(scope.identifier, scope);
      var module = this.modulesByIdentifier.get(scope.identifier);

      if (module) {
        module.disconnectContextForScope(scope);
      }
    }
  }, {
    key: "connectModule",
    value: function connectModule(module) {
      this.modulesByIdentifier.set(module.identifier, module);
      var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach(function (scope) {
        return module.connectContextForScope(scope);
      });
    }
  }, {
    key: "disconnectModule",
    value: function disconnectModule(module) {
      this.modulesByIdentifier.delete(module.identifier);
      var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach(function (scope) {
        return module.disconnectContextForScope(scope);
      });
    }
  }]);

  return Router;
}();

var defaultSchema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target",
  targetAttributeForScope: function targetAttributeForScope(identifier) {
    return "data-".concat(identifier, "-target");
  }
};

var Application = /*#__PURE__*/function () {
  function Application() {
    var _this15 = this;

    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
    var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSchema;

    _classCallCheck(this, Application);

    this.logger = console;
    this.debug = false;

    this.logDebugActivity = function (identifier, functionName) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (_this15.debug) {
        _this15.logFormattedMessage(identifier, functionName, detail);
      }
    };

    this.element = element;
    this.schema = schema;
    this.dispatcher = new Dispatcher(this);
    this.router = new Router(this);
  }

  _createClass(Application, [{
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return domReady();

              case 2:
                this.logDebugActivity("application", "starting");
                this.dispatcher.start();
                this.router.start();
                this.logDebugActivity("application", "start");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      this.logDebugActivity("application", "stopping");
      this.dispatcher.stop();
      this.router.stop();
      this.logDebugActivity("application", "stop");
    }
  }, {
    key: "register",
    value: function register(identifier, controllerConstructor) {
      if (controllerConstructor.shouldLoad) {
        this.load({
          identifier: identifier,
          controllerConstructor: controllerConstructor
        });
      }
    }
  }, {
    key: "load",
    value: function load(head) {
      var _this16 = this;

      for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
      }

      var definitions = Array.isArray(head) ? head : [head].concat(rest);
      definitions.forEach(function (definition) {
        return _this16.router.loadDefinition(definition);
      });
    }
  }, {
    key: "unload",
    value: function unload(head) {
      var _this17 = this;

      for (var _len5 = arguments.length, rest = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        rest[_key5 - 1] = arguments[_key5];
      }

      var identifiers = Array.isArray(head) ? head : [head].concat(rest);
      identifiers.forEach(function (identifier) {
        return _this17.router.unloadIdentifier(identifier);
      });
    }
  }, {
    key: "controllers",
    get: function get() {
      return this.router.contexts.map(function (context) {
        return context.controller;
      });
    }
  }, {
    key: "getControllerForElementAndIdentifier",
    value: function getControllerForElementAndIdentifier(element, identifier) {
      var context = this.router.getContextForElementAndIdentifier(element, identifier);
      return context ? context.controller : null;
    }
  }, {
    key: "handleError",
    value: function handleError(error, message, detail) {
      var _a;

      this.logger.error("%s\n\n%o\n\n%o", message, error, detail);
      (_a = window.onerror) === null || _a === void 0 ? void 0 : _a.call(window, message, "", 0, 0, error);
    }
  }, {
    key: "logFormattedMessage",
    value: function logFormattedMessage(identifier, functionName) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      detail = Object.assign({
        application: this
      }, detail);
      this.logger.groupCollapsed("".concat(identifier, " #").concat(functionName));
      this.logger.log("details:", Object.assign({}, detail));
      this.logger.groupEnd();
    }
  }], [{
    key: "start",
    value: function start(element, schema) {
      var application = new Application(element, schema);
      application.start();
      return application;
    }
  }]);

  return Application;
}();

function domReady() {
  return new Promise(function (resolve) {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        return resolve();
      });
    } else {
      resolve();
    }
  });
}

function ClassPropertiesBlessing(constructor) {
  var classes = readInheritableStaticArrayValues(constructor, "classes");
  return classes.reduce(function (properties, classDefinition) {
    return Object.assign(properties, propertiesForClassDefinition(classDefinition));
  }, {});
}

function propertiesForClassDefinition(key) {
  var _ref12;

  return _ref12 = {}, _defineProperty(_ref12, "".concat(key, "Class"), {
    get: function get() {
      var classes = this.classes;

      if (classes.has(key)) {
        return classes.get(key);
      } else {
        var attribute = classes.getAttributeName(key);
        throw new Error("Missing attribute \"".concat(attribute, "\""));
      }
    }
  }), _defineProperty(_ref12, "".concat(key, "Classes"), {
    get: function get() {
      return this.classes.getAll(key);
    }
  }), _defineProperty(_ref12, "has".concat(capitalize(key), "Class"), {
    get: function get() {
      return this.classes.has(key);
    }
  }), _ref12;
}

function TargetPropertiesBlessing(constructor) {
  var targets = readInheritableStaticArrayValues(constructor, "targets");
  return targets.reduce(function (properties, targetDefinition) {
    return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
  }, {});
}

function propertiesForTargetDefinition(name) {
  var _ref13;

  return _ref13 = {}, _defineProperty(_ref13, "".concat(name, "Target"), {
    get: function get() {
      var target = this.targets.find(name);

      if (target) {
        return target;
      } else {
        throw new Error("Missing target element \"".concat(name, "\" for \"").concat(this.identifier, "\" controller"));
      }
    }
  }), _defineProperty(_ref13, "".concat(name, "Targets"), {
    get: function get() {
      return this.targets.findAll(name);
    }
  }), _defineProperty(_ref13, "has".concat(capitalize(name), "Target"), {
    get: function get() {
      return this.targets.has(name);
    }
  }), _ref13;
}

function ValuePropertiesBlessing(constructor) {
  var valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
  var propertyDescriptorMap = {
    valueDescriptorMap: {
      get: function get() {
        var _this18 = this;

        return valueDefinitionPairs.reduce(function (result, valueDefinitionPair) {
          var valueDescriptor = parseValueDefinitionPair(valueDefinitionPair);

          var attributeName = _this18.data.getAttributeNameForKey(valueDescriptor.key);

          return Object.assign(result, _defineProperty({}, attributeName, valueDescriptor));
        }, {});
      }
    }
  };
  return valueDefinitionPairs.reduce(function (properties, valueDefinitionPair) {
    return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
  }, propertyDescriptorMap);
}

function propertiesForValueDefinitionPair(valueDefinitionPair) {
  var _ref14;

  var definition = parseValueDefinitionPair(valueDefinitionPair);
  var key = definition.key,
      name = definition.name,
      read = definition.reader,
      write = definition.writer;
  return _ref14 = {}, _defineProperty(_ref14, name, {
    get: function get() {
      var value = this.data.get(key);

      if (value !== null) {
        return read(value);
      } else {
        return definition.defaultValue;
      }
    },
    set: function set(value) {
      if (value === undefined) {
        this.data.delete(key);
      } else {
        this.data.set(key, write(value));
      }
    }
  }), _defineProperty(_ref14, "has".concat(capitalize(name)), {
    get: function get() {
      return this.data.has(key) || definition.hasCustomDefaultValue;
    }
  }), _ref14;
}

function parseValueDefinitionPair(_ref15) {
  var _ref16 = _slicedToArray(_ref15, 2),
      token = _ref16[0],
      typeDefinition = _ref16[1];

  return valueDescriptorForTokenAndTypeDefinition(token, typeDefinition);
}

function parseValueTypeConstant(constant) {
  switch (constant) {
    case Array:
      return "array";

    case Boolean:
      return "boolean";

    case Number:
      return "number";

    case Object:
      return "object";

    case String:
      return "string";
  }
}

function parseValueTypeDefault(defaultValue) {
  switch (_typeof(defaultValue)) {
    case "boolean":
      return "boolean";

    case "number":
      return "number";

    case "string":
      return "string";
  }

  if (Array.isArray(defaultValue)) return "array";
  if (Object.prototype.toString.call(defaultValue) === "[object Object]") return "object";
}

function parseValueTypeObject(typeObject) {
  var typeFromObject = parseValueTypeConstant(typeObject.type);

  if (typeFromObject) {
    var defaultValueType = parseValueTypeDefault(typeObject.default);

    if (typeFromObject !== defaultValueType) {
      throw new Error("Type \"".concat(typeFromObject, "\" must match the type of the default value. Given default value: \"").concat(typeObject.default, "\" as \"").concat(defaultValueType, "\""));
    }

    return typeFromObject;
  }
}

function parseValueTypeDefinition(typeDefinition) {
  var typeFromObject = parseValueTypeObject(typeDefinition);
  var typeFromDefaultValue = parseValueTypeDefault(typeDefinition);
  var typeFromConstant = parseValueTypeConstant(typeDefinition);
  var type = typeFromObject || typeFromDefaultValue || typeFromConstant;
  if (type) return type;
  throw new Error("Unknown value type \"".concat(typeDefinition, "\""));
}

function defaultValueForDefinition(typeDefinition) {
  var constant = parseValueTypeConstant(typeDefinition);
  if (constant) return defaultValuesByType[constant];
  var defaultValue = typeDefinition.default;
  if (defaultValue !== undefined) return defaultValue;
  return typeDefinition;
}

function valueDescriptorForTokenAndTypeDefinition(token, typeDefinition) {
  var key = "".concat(dasherize(token), "-value");
  var type = parseValueTypeDefinition(typeDefinition);
  return {
    type: type,
    key: key,
    name: camelize(key),

    get defaultValue() {
      return defaultValueForDefinition(typeDefinition);
    },

    get hasCustomDefaultValue() {
      return parseValueTypeDefault(typeDefinition) !== undefined;
    },

    reader: readers[type],
    writer: writers[type] || writers.default
  };
}

var defaultValuesByType = {
  get array() {
    return [];
  },

  boolean: false,
  number: 0,

  get object() {
    return {};
  },

  string: ""
};
var readers = {
  array: function array(value) {
    var array = JSON.parse(value);

    if (!Array.isArray(array)) {
      throw new TypeError("Expected array");
    }

    return array;
  },
  boolean: function boolean(value) {
    return !(value == "0" || value == "false");
  },
  number: function number(value) {
    return Number(value);
  },
  object: function object(value) {
    var object = JSON.parse(value);

    if (object === null || _typeof(object) != "object" || Array.isArray(object)) {
      throw new TypeError("Expected object");
    }

    return object;
  },
  string: function string(value) {
    return value;
  }
};
var writers = {
  default: writeString,
  array: writeJSON,
  object: writeJSON
};

function writeJSON(value) {
  return JSON.stringify(value);
}

function writeString(value) {
  return "".concat(value);
}

var Controller = /*#__PURE__*/function () {
  function Controller(context) {
    _classCallCheck(this, Controller);

    this.context = context;
  }

  _createClass(Controller, [{
    key: "application",
    get: function get() {
      return this.context.application;
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }, {
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "targets",
    get: function get() {
      return this.scope.targets;
    }
  }, {
    key: "classes",
    get: function get() {
      return this.scope.classes;
    }
  }, {
    key: "data",
    get: function get() {
      return this.scope.data;
    }
  }, {
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "connect",
    value: function connect() {}
  }, {
    key: "disconnect",
    value: function disconnect() {}
  }, {
    key: "dispatch",
    value: function dispatch(eventName) {
      var _ref17 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref17$target = _ref17.target,
          target = _ref17$target === void 0 ? this.element : _ref17$target,
          _ref17$detail = _ref17.detail,
          detail = _ref17$detail === void 0 ? {} : _ref17$detail,
          _ref17$prefix = _ref17.prefix,
          prefix = _ref17$prefix === void 0 ? this.identifier : _ref17$prefix,
          _ref17$bubbles = _ref17.bubbles,
          bubbles = _ref17$bubbles === void 0 ? true : _ref17$bubbles,
          _ref17$cancelable = _ref17.cancelable,
          cancelable = _ref17$cancelable === void 0 ? true : _ref17$cancelable;

      var type = prefix ? "".concat(prefix, ":").concat(eventName) : eventName;
      var event = new CustomEvent(type, {
        detail: detail,
        bubbles: bubbles,
        cancelable: cancelable
      });
      target.dispatchEvent(event);
      return event;
    }
  }], [{
    key: "shouldLoad",
    get: function get() {
      return true;
    }
  }]);

  return Controller;
}();

Controller.blessings = [ClassPropertiesBlessing, TargetPropertiesBlessing, ValuePropertiesBlessing];
Controller.targets = [];
Controller.values = {};


/***/ }),

/***/ "./node_modules/@shubox/core/dist/module/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@shubox/core/dist/module/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "./node_modules/@shubox/core/node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_shubox_callbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/shubox_callbacks */ "./node_modules/@shubox/core/dist/module/src/shubox_callbacks.js");
/* harmony import */ var _src_shubox_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/shubox_options */ "./node_modules/@shubox/core/dist/module/src/shubox_options.js");
/* harmony import */ var _src_webcam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/webcam */ "./node_modules/@shubox/core/dist/module/src/webcam.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};






var Shubox =
/** @class */
function () {
  function Shubox(selector, options) {
    if (selector === void 0) {
      selector = ".shubox";
    }

    if (options === void 0) {
      options = {};
    }

    this.signatureUrl = "https://api.shubox.io/signatures";
    this.uploadUrl = "https://api.shubox.io/uploads";
    this.key = "";
    this.options = {};
    this.callbacks = {};
    this.selector = selector;

    if (options.signatureUrl) {
      this.signatureUrl = options.signatureUrl;
      delete options.signatureUrl;
    }

    if (options.uploadUrl) {
      this.uploadUrl = options.uploadUrl;
      delete options.uploadUrl;
    }

    if (options.uuid) {
      this.key = options.uuid;
      delete options.uuid;
    }

    if (options.key) {
      this.key = options.key;
      delete options.key;
    }

    this.init(options);
  }

  Shubox.prototype.init = function (options) {
    dropzone__WEBPACK_IMPORTED_MODULE_0___default.a.autoDiscover = false;
    var els = document.querySelectorAll(this.selector);

    for (var _i = 0, _a = Array.from(els); _i < _a.length; _i++) {
      var element = _a[_i];
      this.element = element;
      this.callbacks = new _src_shubox_callbacks__WEBPACK_IMPORTED_MODULE_1__["ShuboxCallbacks"](this, Shubox.instances).toHash();
      this.options = __assign(__assign(__assign({}, this.options), new _src_shubox_options__WEBPACK_IMPORTED_MODULE_2__["ShuboxOptions"](this).toHash()), options);

      if (this.options.webcam) {
        this.options.clickable = false;
        this.options.acceptedFiles = "video/webm,video/mp4,image/png";
      }

      var dropzoneOptions = {
        // callbacks that we need to delegate to. In some cases there's work
        // needing to be passed through to Shubox's handler, and sometimes
        // the Dropbox handler, _in addition to_ the callback the user provides.
        accept: this.callbacks.accept,
        acceptedFiles: this.options.acceptedFiles,
        addedfile: this.callbacks.addedfile,
        error: this.callbacks.error,
        previewsContainer: this.options.previewsContainer,
        sending: this.callbacks.sending,
        success: this.callbacks.success,
        uploadprogress: this.callbacks.uploadProgress,
        url: "http://localhost"
      };
      var dropzone = new dropzone__WEBPACK_IMPORTED_MODULE_0___default.a(this.element, __assign(__assign({}, this.options), dropzoneOptions));

      if (this.options.webcam) {
        this.webcam = new _src_webcam__WEBPACK_IMPORTED_MODULE_3__["Webcam"](dropzone, this.element, this.options.webcam);
      }

      this.element.addEventListener("paste", _src_shubox_callbacks__WEBPACK_IMPORTED_MODULE_1__["ShuboxCallbacks"].pasteCallback(dropzone));
      Shubox.instances.push(dropzone);
    }
  };

  Shubox.prototype.upload = function (file) {
    this.element.dropzone.addFile(file);
  };

  Shubox.instances = [];
  Shubox.stopCamera = _src_webcam__WEBPACK_IMPORTED_MODULE_3__["Webcam"].stopCamera;
  return Shubox;
}();

/* harmony default export */ __webpack_exports__["default"] = (Shubox);

/***/ }),

/***/ "./node_modules/@shubox/core/dist/module/src/filename_from_file.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@shubox/core/dist/module/src/filename_from_file.js ***!
  \*************************************************************************/
/*! exports provided: filenameFromFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filenameFromFile", function() { return filenameFromFile; });
function filenameFromFile(file, date) {
  if (!file.name) {
    var now = date || new Date(); // date

    var daynum = now.getDate();
    var day = daynum < 10 ? "0" + daynum : String(daynum);
    var monthnum = now.getMonth() + 1;
    var month = monthnum < 10 ? "0" + monthnum : String(monthnum);
    var year = now.getFullYear(); // time

    var hour = now.getHours();
    var minutenum = now.getMinutes();
    var minute = minutenum < 10 ? "0" + minutenum : String(minutenum);
    var secondnum = now.getSeconds();
    var second = secondnum < 10 ? "0" + secondnum : String(secondnum);
    var datetime = day + "." + month + "." + year + "-" + hour + "." + minute + "." + second;
    file.name = "paste-" + datetime + ".jpg";
  }

  return file.name.replace(/^.*(\\\\|\/)/g, "").replace(/[^0-9A-Za-z.\-_]/g, "_");
}

/***/ }),

/***/ "./node_modules/@shubox/core/dist/module/src/insert_at_cursor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@shubox/core/dist/module/src/insert_at_cursor.js ***!
  \***********************************************************************/
/*! exports provided: insertAtCursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAtCursor", function() { return insertAtCursor; });
function insertAtCursor(el, myValue) {
  if (document.selection) {
    el.focus();
    var sel = document.selection.createRange();
    sel.text = myValue;
  } else if (window.navigator.userAgent.indexOf("Edge") > -1) {
    var startPos = el.selectionStart || 0;
    var endPos = el.selectionEnd || 0;
    var pos = startPos + myValue.length;
    el.value = el.value.substring(0, startPos) + myValue + el.value.substring(endPos, el.value.length);
    el.focus();
    el.setSelectionRange(pos, pos);
  } else if (el.selectionStart || el.selectionStart === 0) {
    var startPos = el.selectionStart || 0;
    var endPos = el.selectionEnd || 0;
    el.value = el.value.substring(0, startPos) + myValue + el.value.substring(endPos, el.value.length);
  } else {
    el.value += myValue;
  }
}

/***/ }),

/***/ "./node_modules/@shubox/core/dist/module/src/object_to_form_data.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shubox/core/dist/module/src/object_to_form_data.js ***!
  \**************************************************************************/
/*! exports provided: objectToFormData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToFormData", function() { return objectToFormData; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function objectToFormData(obj, form, namespace) {
  var formData = form || new window.FormData();
  var formKey;

  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + "[" + property + "]";
      } else {
        formKey = property;
      } // if the property is an object/hash, and not a File,


      if (_typeof(obj[property]) === "object" && !(obj[property] instanceof window.File)) {
        objectToFormData(obj[property], formData, property);
      } else {
        formData.append(formKey, obj[property]);
      }
    }
  }

  return formData;
}

/***/ }),

/***/ "./node_modules/@shubox/core/dist/module/src/shubox_callbacks.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@shubox/core/dist/module/src/shubox_callbacks.js ***!
  \***********************************************************************/
/*! exports provided: ShuboxCallbacks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShuboxCallbacks", function() { return ShuboxCallbacks; });
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "./node_modules/@shubox/core/node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filename_from_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filename_from_file */ "./node_modules/@shubox/core/dist/module/src/filename_from_file.js");
/* harmony import */ var _insert_at_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insert_at_cursor */ "./node_modules/@shubox/core/dist/module/src/insert_at_cursor.js");
/* harmony import */ var _object_to_form_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object_to_form_data */ "./node_modules/@shubox/core/dist/module/src/object_to_form_data.js");
/* harmony import */ var _transform_callback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transform_callback */ "./node_modules/@shubox/core/dist/module/src/transform_callback.js");
/* harmony import */ var _upload_complete_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload_complete_event */ "./node_modules/@shubox/core/dist/module/src/upload_complete_event.js");







var ShuboxCallbacks =
/** @class */
function () {
  function ShuboxCallbacks(shubox, instances) {
    this.replaceable = ["height", "width", "name", "s3", "s3url", "size", "type"];
    this.shubox = shubox;
    this.instances = instances;
  }

  ShuboxCallbacks.pasteCallback = function (dz) {
    return function (event) {
      var items = (event.clipboardData || event.originalEvent.clipboardData).items;

      for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];

        if (item.kind === "file") {
          // adds the file to your dropzone instance
          dz.addFile(item.getAsFile());
        }
      }
    };
  };

  ShuboxCallbacks.prototype.toHash = function () {
    // assigning `this` (instance of ShuboxCallbacks) to `self` to that `this`
    // inside the body of these callback functions are reserved for the
    // instance of Dropzone that fires the function.
    var self = this;
    var hash = {
      accept: function accept(file, done) {
        fetch(self.shubox.signatureUrl, {
          body: Object(_object_to_form_data__WEBPACK_IMPORTED_MODULE_3__["objectToFormData"])({
            file: {
              name: Object(_filename_from_file__WEBPACK_IMPORTED_MODULE_1__["filenameFromFile"])(file),
              size: file.size,
              type: file.type
            },
            key: self.shubox.key,
            s3Key: self.shubox.options.s3Key
          }),
          method: "post",
          mode: "cors"
        }).then(function (response) {
          return response.json();
        }).then(function (json) {
          if (json.error) {
            self.shubox.callbacks.error(file, json.error);
          } else {
            self.instances.forEach(function (dz) {
              dz.options.url = json.aws_endpoint;
            });
            file.postData = json;
            file.s3 = json.key;
            done();
          }
        }).catch(function (err) {
          self.shubox.callbacks.error(file, err.message);
        });
      },
      sending: function sending(file, xhr, formData) {
        self.shubox.element.classList.add("shubox-uploading"); // Update the form value if it is able

        if (self._isFormElement()) {
          self._updateFormValue(file, "uploadingTemplate");
        }

        var keys = Object.keys(file.postData);
        keys.forEach(function (key) {
          var val = file.postData[key];
          formData.append(key, val);
        }); // Run user's provided sending callback

        self.shubox.options.sending(file, xhr, formData);
      },
      addedfile: function addedfile(file) {
        dropzone__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.defaultOptions.addedfile.apply(this, [file]);
        self.shubox.options.addedfile(file);
      },
      success: function success(file, response) {
        self.shubox.element.classList.add("shubox-success");
        self.shubox.element.classList.remove("shubox-uploading");
        var match = /\<Location\>(.*)\<\/Location\>/g.exec(response) || ["", ""];
        var url = match[1];
        file.s3url = url.replace(/%2F/g, "/").replace(/%2B/g, "%20");

        if (self.shubox.options.cdn) {
          var path = file.s3url.split("/").slice(4).join("/");
          file.s3url = self.shubox.options.cdn + "/" + path;
        }

        Object(_upload_complete_event__WEBPACK_IMPORTED_MODULE_5__["uploadCompleteEvent"])(self.shubox, file, self.shubox.options.extraParams || {});
        dropzone__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.defaultOptions.success.apply(this, [file, response]); // Update the form value if it is able

        if (self._isFormElement()) {
          self._updateFormValue(file, "successTemplate");
        }

        if (self.shubox.options.transformCallbacks) {
          var callbacks = self.shubox.options.transformCallbacks;

          for (var _i = 0, _a = Object.keys(callbacks); _i < _a.length; _i++) {
            var variant = _a[_i];
            var callback = callbacks[variant];
            new _transform_callback__WEBPACK_IMPORTED_MODULE_4__["TransformCallback"](file, variant, callback).run();
          }
        } // If supplied, run the options callback


        if (self.shubox.options.success) {
          self.shubox.options.success(file);
        }
      },
      error: function error(file, message) {
        self.shubox.element.classList.remove("shubox-uploading");
        self.shubox.element.classList.add("shubox-error");
        var xhr = new XMLHttpRequest(); // bc type signature

        dropzone__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.defaultOptions.error.apply(this, [file, message, xhr]);

        if (message.includes("Referring domain not permitted") && window.location.hostname === "localhost") {
          console.log("%cOOPS!", "font-size: 14px; color:#7c5cd1; font-weight: bold;");
          console.log("%cIt looks like you're attempting to test Shubox on localhost but are running into an issue.\nYou should check to make sure you're using your %c\"Sandbox\" %ckey while you test as it will\nwork with localhost.\n\n%cFor more information and instructions: https://dashboard.shubox.io/domains/sandbox", "font-size: 12px; color:#7c5cd1;", "font-size: 12px; color:#7c5cd1; font-weight:bold", "font-size: 12px; color:#7c5cd1;", "font-size: 13px; color:#7c5cd1; font-weight:bold;");
        }

        if (self.shubox.options.error) {
          self.shubox.options.error(file, message);
        }
      },
      uploadProgress: function uploadProgress(file, progress, bytesSent) {
        self.shubox.element.dataset.shuboxProgress = String(progress);
        dropzone__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.defaultOptions.uploadprogress.apply(this, [file, progress, bytesSent]);
      }
    };
    return hash;
  }; // Private


  ShuboxCallbacks.prototype._updateFormValue = function (file, templateName) {
    var el = this.shubox.element;
    var interpolatedText = "";
    var uploadingText = ""; // If we're processing the successTemplate, and the user instead used
    // the deprecated "s3urlTemplate" option, then rename the template name
    // to use that one as the key.

    if (templateName === "successTemplate" && this.shubox.options.s3urlTemplate) {
      window.console.warn("DEPRECATION: The \"s3urlTemplate\" will be deprecated by version 1.0. Please update to \"successTemplate\".");
      templateName = "s3urlTemplate";
    }

    if (this.shubox.options[templateName]) {
      interpolatedText = this.shubox.options[templateName];
    }

    for (var _i = 0, _a = this.replaceable; _i < _a.length; _i++) {
      var key = _a[_i];
      interpolatedText = interpolatedText.replace("{{" + key + "}}", file[key]);
    }

    if (this.shubox.options.uploadingTemplate) {
      uploadingText = this.shubox.options.uploadingTemplate;

      for (var _b = 0, _c = this.replaceable; _b < _c.length; _b++) {
        var key = _c[_b];
        uploadingText = uploadingText.replace("{{" + key + "}}", file[key]);
      }
    } // Determine where to place the uploaded file; Replacing the
    // uploadingTemplate, at cursor, at the end, or replace the
    // whole field.


    if ((templateName === "successTemplate" || templateName === "s3urlTemplate") && !!this.shubox.options.uploadingTemplate) {
      el.value = el.value.replace(uploadingText, interpolatedText);

      this._placeCursorAfterText(el, interpolatedText);
    } else if (this._insertableAtCursor(el)) {
      Object(_insert_at_cursor__WEBPACK_IMPORTED_MODULE_2__["insertAtCursor"])(el, interpolatedText);

      this._placeCursorAfterText(el, interpolatedText);
    } else if (this._isAppendingText()) {
      el.value = el.value + interpolatedText;
    } else {
      el.value = interpolatedText;
    }
  };

  ShuboxCallbacks.prototype._placeCursorAfterText = function (el, text) {
    var pos = el.value.indexOf(text);
    pos = pos + text.length;
    el.setSelectionRange(pos, pos);
    el.focus();
  };

  ShuboxCallbacks.prototype._isFormElement = function () {
    return ["INPUT", "TEXTAREA"].indexOf(this.shubox.element.tagName) > -1;
  };

  ShuboxCallbacks.prototype._isAppendingText = function () {
    return this.shubox.options.textBehavior === "append";
  };

  ShuboxCallbacks.prototype._insertableAtCursor = function (el) {
    return el.tagName === "TEXTAREA" && this.shubox.options.textBehavior === "insertAtCursor";
  };

  return ShuboxCallbacks;
}();



/***/ }),

/***/ "./node_modules/@shubox/core/dist/module/src/shubox_options.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@shubox/core/dist/module/src/shubox_options.js ***!
  \*********************************************************************/
/*! exports provided: ShuboxOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShuboxOptions", function() { return ShuboxOptions; });
var ShuboxOptions =
/** @class */
function () {
  function ShuboxOptions(shubox) {
    this.shubox = shubox;
  }

  ShuboxOptions.prototype.toHash = function () {
    return {
      acceptedFiles: "image/*",
      addedfile: function addedfile(file) {},
      cdn: null,
      error: function error(file, message) {},
      extraParams: {},
      previewsContainer: ["INPUT", "TEXTAREA"].indexOf(this.shubox.element.tagName) >= 0 ? false : null,
      s3Key: null,
      sending: function sending(file, xhr, formData) {},
      success: function success(file) {},
      successTemplate: "{{s3url}}",
      textBehavior: "replace",
      transformName: null,
      uploadingTemplate: "",
      webcam: null
    };
  };

  return ShuboxOptions;
}();



/***/ }),

/***/ "./node_modules/@shubox/core/dist/module/src/transform_callback.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@shubox/core/dist/module/src/transform_callback.js ***!
  \*************************************************************************/
/*! exports provided: TransformCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformCallback", function() { return TransformCallback; });
/* harmony import */ var _variant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variant */ "./node_modules/@shubox/core/dist/module/src/variant.js");


var TransformCallback =
/** @class */
function () {
  function TransformCallback(file, variant, callback) {
    var _this = this;

    if (variant === void 0) {
      variant = "";
    }

    this.variant = "";
    this.variantUrl = "";
    this.retry = 10;
    this.success = false;

    this.run = function (error) {
      if (error === void 0) {
        error = null;
      }

      var delay = Math.pow(2, 19 - _this.retry); // 512, 1024, 2048, 4096 ...

      if (_this.retry && !_this.success) {
        _this.retry -= 1;
        setTimeout(function () {
          fetch(_this.cacheBustedUrl(), {
            method: "HEAD"
          }).then(_this.validateResponse).catch(_this.run);
        }, delay);
      }
    };

    this.validateResponse = function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      _this.success = true;
      _this.file.transforms = _this.file.transforms ? _this.file.transforms : {};
      _this.file.transforms[_this.variant] = {
        s3url: _this.variantUrl
      };

      _this.callback(_this.file);

      return response;
    };

    this.cacheBustedUrl = function () {
      var rand = Math.floor(Math.random() * Math.floor(10000000000));
      return _this.variantUrl + "?q=" + rand;
    };

    this.file = file;
    this.variant = variant;
    this.variantUrl = new _variant__WEBPACK_IMPORTED_MODULE_0__["Variant"](file, variant).url();
    this.callback = callback;
  }

  return TransformCallback;
}();



/***/ }),

/***/ "./node_modules/@shubox/core/dist/module/src/upload_complete_event.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@shubox/core/dist/module/src/upload_complete_event.js ***!
  \****************************************************************************/
/*! exports provided: uploadCompleteEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadCompleteEvent", function() { return uploadCompleteEvent; });
/* harmony import */ var _filename_from_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filename_from_file */ "./node_modules/@shubox/core/dist/module/src/filename_from_file.js");
/* harmony import */ var _object_to_form_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object_to_form_data */ "./node_modules/@shubox/core/dist/module/src/object_to_form_data.js");


function uploadCompleteEvent(shubox, file, extraParams) {
  fetch(shubox.uploadUrl, {
    body: Object(_object_to_form_data__WEBPACK_IMPORTED_MODULE_1__["objectToFormData"])({
      bucket: "localhost-4100",
      extraParams: extraParams,
      file: {
        height: file.height,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        name: Object(_filename_from_file__WEBPACK_IMPORTED_MODULE_0__["filenameFromFile"])(file),
        s3Path: file.s3,
        s3Url: file.s3url,
        size: file.size,
        type: file.type,
        width: file.width
      },
      key: shubox.key,
      transformName: shubox.options.transformName
    }),
    method: "POST",
    mode: "cors"
  }).catch(function (err) {
    console.log("There was a problem with your request: " + err.message);
  });
}

/***/ }),

/***/ "./node_modules/@shubox/core/dist/module/src/variant.js":
/*!**************************************************************!*\
  !*** ./node_modules/@shubox/core/dist/module/src/variant.js ***!
  \**************************************************************/
/*! exports provided: Variant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variant", function() { return Variant; });
var Variant =
/** @class */
function () {
  function Variant(file, variant) {
    if (variant === void 0) {
      variant = "";
    }

    this.s3url = "";
    this.variant = "";
    this.s3url = file.s3url;
    this.variant = variant;
  }

  Variant.prototype.url = function () {
    var filename = this.s3url.substring(this.s3url.lastIndexOf("/") + 1);

    var _a = this.variant.split("."),
        vPrefix = _a[0],
        vExtension = _a[1];

    var newFilename = "";
    newFilename = this.cleanFilename(filename);
    newFilename = this.variantPrefix(vPrefix, newFilename);
    newFilename = this.variantFiletype(vExtension, newFilename);
    return this.s3url.replace(filename, newFilename);
  };

  Variant.prototype.cleanFilename = function (filename) {
    return filename.replace(/\+/g, "%2B");
  };

  Variant.prototype.variantPrefix = function (prefix, filename) {
    if (!prefix) {
      return filename;
    }

    prefix = prefix.replace(/\#$/, "_hash").replace(/\^$/, "_carat").replace(/\!$/, "_bang");
    return prefix + "_" + filename;
  };

  Variant.prototype.variantFiletype = function (extension, filename) {
    if (!extension) {
      return filename;
    }

    return filename + "." + extension;
  };

  return Variant;
}();



/***/ }),

/***/ "./node_modules/@shubox/core/dist/module/src/webcam.js":
/*!*************************************************************!*\
  !*** ./node_modules/@shubox/core/dist/module/src/webcam.js ***!
  \*************************************************************/
/*! exports provided: Webcam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Webcam", function() { return Webcam; });
/* harmony import */ var _webcam_device_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webcam/device_selection */ "./node_modules/@shubox/core/dist/module/src/webcam/device_selection.js");
/* harmony import */ var _webcam_photo_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webcam/photo_dom */ "./node_modules/@shubox/core/dist/module/src/webcam/photo_dom.js");
/* harmony import */ var _webcam_photo_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webcam/photo_events */ "./node_modules/@shubox/core/dist/module/src/webcam/photo_events.js");
/* harmony import */ var _webcam_video_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webcam/video_dom */ "./node_modules/@shubox/core/dist/module/src/webcam/video_dom.js");
/* harmony import */ var _webcam_video_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webcam/video_events */ "./node_modules/@shubox/core/dist/module/src/webcam/video_events.js");






var Webcam =
/** @class */
function () {
  function Webcam(dropzone, element, webcamOptions) {
    this.dropzone = dropzone;
    this.webcamOptions = typeof webcamOptions === "string" ? {
      type: webcamOptions
    } : webcamOptions;
    this.element = element; // `this.dom` must be initialized and assigned before events. This is so
    // `events` has access to the initialized `dom` object in the Webcam object
    // passed in.

    this.dom = this.domFactory();
    this.events = this.eventsFactory();
    this.deviceSelection = new _webcam_device_selection__WEBPACK_IMPORTED_MODULE_0__["DeviceSelection"](this.events, this.webcamOptions);
  }

  Webcam.stopCamera = function (callback) {
    if (callback === void 0) {
      callback = function callback() {};
    }

    document.querySelectorAll(".shubox-video").forEach(function (video) {
      video.srcObject.getTracks().forEach(function (track) {
        track.stop();
      });
    });
    callback();
  };

  Webcam.prototype.domFactory = function () {
    return this.webcamOptions.type === "video" ? new _webcam_video_dom__WEBPACK_IMPORTED_MODULE_3__["VideoDom"](this) : new _webcam_photo_dom__WEBPACK_IMPORTED_MODULE_1__["PhotoDom"](this);
  };

  Webcam.prototype.eventsFactory = function () {
    return this.webcamOptions.type === "video" ? new _webcam_video_events__WEBPACK_IMPORTED_MODULE_4__["VideoEvents"](this) : new _webcam_photo_events__WEBPACK_IMPORTED_MODULE_2__["PhotoEvents"](this);
  };

  return Webcam;
}();



/***/ }),

/***/ "./node_modules/@shubox/core/dist/module/src/webcam/device_selection.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@shubox/core/dist/module/src/webcam/device_selection.js ***!
  \******************************************************************************/
/*! exports provided: DeviceSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceSelection", function() { return DeviceSelection; });
var DeviceSelection =
/** @class */
function () {
  function DeviceSelection(events, webcamOptions) {
    var _this = this;

    var _a, _b;

    this.initialized = false;

    this.gotDevices = function (deviceInfos) {
      deviceInfos.forEach(function (deviceInfo) {
        var _a;

        var option = document.createElement("option");
        option.value = deviceInfo.deviceId;

        if (deviceInfo.kind === "audiooutput") {
          return;
        } else {
          option.text = deviceInfo.label || "microphone " + ((_this[deviceInfo.kind] || []).length + 1);
          (_a = _this[deviceInfo.kind]) === null || _a === void 0 ? void 0 : _a.appendChild(option);
        }
      });
    };

    this.updateAudioIn = function (event) {
      var _a, _b;

      _this.events.stopCamera(event);

      _this.events.startCamera(event, {
        audio: {
          deviceId: ((_a = _this.audioinput) === null || _a === void 0 ? void 0 : _a.value) ? {
            exact: (_b = _this.audioinput) === null || _b === void 0 ? void 0 : _b.value
          } : undefined
        }
      });
    };

    this.updateVideoIn = function (event) {
      var _a, _b;

      _this.events.stopCamera(event);

      _this.events.startCamera(event, {
        video: {
          deviceId: ((_a = _this.videoinput) === null || _a === void 0 ? void 0 : _a.value) ? {
            exact: (_b = _this.videoinput) === null || _b === void 0 ? void 0 : _b.value
          } : undefined
        }
      });
    };

    this.events = events;
    this.webcamOptions = webcamOptions;
    this.audioinput = document.querySelector(webcamOptions.audioInput);
    this.videoinput = document.querySelector(webcamOptions.videoInput);
    (_a = this.audioinput) === null || _a === void 0 ? void 0 : _a.addEventListener("change", this.updateAudioIn);
    (_b = this.videoinput) === null || _b === void 0 ? void 0 : _b.addEventListener("change", this.updateVideoIn);
    this.populateSelects();
    this.initialized = true;
  }

  DeviceSelection.prototype.populateSelects = function () {
    if (this.initialized || !this.audioinput && !this.videoinput) {
      return;
    }

    navigator.mediaDevices.enumerateDevices().then(this.gotDevices).catch(this.handleError);
  };

  DeviceSelection.prototype.handleError = function (error) {
    window.console.log("navigator.MediaDevices.getUserMedia error: ", error.message, error.name);
  };

  return DeviceSelection;
}();



/***/ }),

/***/ "./node_modules/@shubox/core/dist/module/src/webcam/photo_dom.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@shubox/core/dist/module/src/webcam/photo_dom.js ***!
  \***********************************************************************/
/*! exports provided: PhotoDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoDom", function() { return PhotoDom; });
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var PhotoDom =
/** @class */
function () {
  function PhotoDom(webcam) {
    this.webcam = webcam;
    this.options = __assign({
      photoTemplate: "\n        <video class=\"shubox-video\" muted autoplay></video>\n        <canvas style=\"display: none\"></canvas>\n        <img style=\"display: none\">\n        "
    }, webcam.webcamOptions);
    this.webcam.element.classList.add("shubox-webcam", "shubox-webcam-uninitialized");
  }

  PhotoDom.prototype.init = function () {
    this.webcam.element.innerHTML = this.options.photoTemplate || "";
    this.video = this.findOrCreate("video");
    this.canvas = this.findOrCreate("canvas");
    this.image = this.findOrCreate("img");
    this.video.width = this.image.width = this.canvas.width = this.webcam.element.offsetWidth;
    this.video.height = this.image.height = this.canvas.height = this.webcam.element.offsetHeight;
  };

  PhotoDom.prototype.toggleStarted = function () {
    this.webcam.element.classList.remove("shubox-webcam-stopped", "shubox-webcam-captured", "shubox-webcam-uninitialized");
    this.webcam.element.classList.add("shubox-webcam-started");
  };

  PhotoDom.prototype.toggleStopped = function () {
    this.webcam.element.classList.remove("shubox-webcam-started");
    this.webcam.element.classList.add("shubox-webcam-stopped", "shubox-webcam-uninitialized");
  };

  PhotoDom.prototype.findOrCreate = function (element) {
    var el = this.webcam.element.querySelector(element);

    if (!el) {
      el = document.createElement(element);
      this.webcam.element.appendChild(el);
    }

    return el;
  };

  PhotoDom.prototype.alreadyStarted = function () {
    return this.webcam.element.classList.contains("shubox-webcam-started");
  };

  PhotoDom.prototype.recordingStarted = function () {// no-op
  };

  PhotoDom.prototype.finalize = function (_) {
    this.image.src = this.canvas.toDataURL("image/png");
    this.image.style.display = "inline";
    this.webcam.element.removeChild(this.canvas);
    this.webcam.element.removeChild(this.video);
    this.webcam.element.classList.add("shubox-webcam-captured", "shubox-webcam-stopped");
    this.webcam.element.classList.remove("shubox-webcam-started");
  };

  return PhotoDom;
}();



/***/ }),

/***/ "./node_modules/@shubox/core/dist/module/src/webcam/photo_events.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shubox/core/dist/module/src/webcam/photo_events.js ***!
  \**************************************************************************/
/*! exports provided: PhotoEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoEvents", function() { return PhotoEvents; });
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var PhotoEvents =
/** @class */
function () {
  function PhotoEvents(webcam) {
    var _this = this;

    this.startCamera = function (event, constraints) {
      if (constraints === void 0) {
        constraints = {};
      }

      var _a, _b;

      (_a = event) === null || _a === void 0 ? void 0 : _a.preventDefault();

      if (_this.webcam.dom.alreadyStarted()) {
        return;
      }

      _this.webcam.dom.init();

      _this.webcam.element.removeEventListener("click", _this.startCamera);

      _this.webcam.dom.video.addEventListener("click", _this.takePhoto);

      constraints = {
        audio: false,
        video: __assign({
          height: _this.webcam.element.offsetHeight,
          width: _this.webcam.element.offsetWidth
        }, constraints.video)
      };
      navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        if (!_this.webcam.dom.video) {
          return;
        }

        _this.webcam.dom.video.srcObject = stream;
      }).catch(function () {});

      _this.webcam.dom.toggleStarted();

      (_b = _this.webcam.webcamOptions.cameraStarted) === null || _b === void 0 ? void 0 : _b.call(_this, _this.webcam);
    };

    this.takePhoto = function (event) {
      var _a, _b, _c, _d;

      (_a = event) === null || _a === void 0 ? void 0 : _a.preventDefault();

      if (!_this.webcam.dom.alreadyStarted()) {
        return;
      }

      var file;
      ((_b = _this.webcam.dom.canvas) === null || _b === void 0 ? void 0 : _b.getContext("2d")).drawImage(_this.webcam.dom.video, 0, 0);
      (_c = _this.webcam.dom.canvas) === null || _c === void 0 ? void 0 : _c.toBlob(function (blob) {
        var dateTime = new Date().toISOString();
        file = blob || new Blob();
        file.name = "webcam-" + dateTime + ".png";

        _this.webcam.dropzone.addFile(file);
      });

      _this.webcam.dom.finalize(file);

      (_d = _this.webcam.webcamOptions.photoTaken) === null || _d === void 0 ? void 0 : _d.call(_this, _this.webcam, file);
    };

    this.stopCamera = function (event) {
      var _a, _b, _c;

      (_a = event) === null || _a === void 0 ? void 0 : _a.preventDefault();

      if (!_this.webcam.dom.video) {
        return;
      }

      var src = _this.webcam.dom.video.srcObject;
      (_b = src) === null || _b === void 0 ? void 0 : _b.getTracks().forEach(function (track) {
        track.stop();
      });

      _this.webcam.element.addEventListener("click", _this.startCamera);

      _this.webcam.dom.toggleStopped();

      (_c = _this.webcam.webcamOptions.cameraStopped) === null || _c === void 0 ? void 0 : _c.call(_this, _this.webcam);
    };

    this.webcam = webcam;
    this.webcam.element.addEventListener("click", this.startCamera);
    this.wireUpSelectorsAndEvents();
  }

  PhotoEvents.prototype.wireUpSelectorsAndEvents = function () {
    var _a;

    this.wireUp("startCamera");
    this.wireUp("stopCamera");
    this.wireUp("takePhoto");

    if ((_a = this.webcam.webcamOptions) === null || _a === void 0 ? void 0 : _a.startCapture) {
      window.console.warn("`startCapture` is being deprecated in favor of `takePhoto`. Use `takePhoto` instead.");
      this.wireUp("takePhoto", this.webcam.webcamOptions.startCapture);
    }
  };

  PhotoEvents.prototype.wireUp = function (eventName, selector) {
    var _a;

    try {
      var el = document.querySelector(selector || this.webcam.webcamOptions[eventName]);
      (_a = el) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this[eventName]);
    } catch (error) {
      if (!(error instanceof DOMException)) {
        throw error;
      }
    }
  };

  return PhotoEvents;
}();



/***/ }),

/***/ "./node_modules/@shubox/core/dist/module/src/webcam/video_dom.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@shubox/core/dist/module/src/webcam/video_dom.js ***!
  \***********************************************************************/
/*! exports provided: VideoDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDom", function() { return VideoDom; });
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var VideoDom =
/** @class */
function () {
  function VideoDom(webcam) {
    this.initialized = false;
    this.webcam = webcam;
    this.options = __assign({
      videoTemplate: "<video muted autoplay></video>"
    }, webcam.webcamOptions);
    this.webcam.element.classList.add("shubox-webcam", "shubox-webcam-uninitialized");
  }

  VideoDom.prototype.init = function () {
    if (this.initialized) {
      return;
    }

    this.webcam.element.innerHTML = this.options.videoTemplate || "";
    this.video = this.findOrCreate("video");
    this.video.width = this.webcam.element.offsetWidth;
    this.video.height = this.webcam.element.offsetHeight;
    this.initialized = true;
  };

  VideoDom.prototype.alreadyStarted = function () {
    return this.webcam.element.classList.contains("shubox-webcam-started");
  };

  VideoDom.prototype.toggleStarted = function () {
    this.webcam.element.classList.remove("shubox-webcam-stopped", "shubox-webcam-captured", "shubox-webcam-uninitialized");
    this.webcam.element.classList.add("shubox-webcam-started", "shubox-webcam-video-started");
  };

  VideoDom.prototype.toggleStopped = function () {
    this.webcam.element.classList.remove("shubox-webcam-started", "shubox-webcam-video-started");
    this.webcam.element.classList.add("shubox-webcam-stopped", "shubox-webcam-uninitialized");
  };

  VideoDom.prototype.recordingStarted = function () {
    this.webcam.element.classList.add("shubox-webcam-video-recording");
  };

  VideoDom.prototype.finalize = function (videoFile) {
    this.webcam.element.classList.remove("shubox-webcam-video-recording");
    this.webcam.element.classList.add("shubox-webcam-video-recorded");
    this.video.src = "";
    this.video.srcObject = null;
    this.video.src = window.URL.createObjectURL(videoFile);
  };

  VideoDom.prototype.findOrCreate = function (element) {
    var el = this.webcam.element.querySelector(element);

    if (!el) {
      el = document.createElement(element);
      this.webcam.element.appendChild(el);
    }

    return el;
  };

  return VideoDom;
}();



/***/ }),

/***/ "./node_modules/@shubox/core/dist/module/src/webcam/video_events.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shubox/core/dist/module/src/webcam/video_events.js ***!
  \**************************************************************************/
/*! exports provided: VideoEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoEvents", function() { return VideoEvents; });
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var VideoEvents =
/** @class */
function () {
  function VideoEvents(webcam) {
    var _this = this;

    this.recordedBlobs = [];
    this.alreadyStopped = false;

    this.startCamera = function (event, constraints) {
      if (constraints === void 0) {
        constraints = {};
      }

      var _a, _b;

      (_a = event) === null || _a === void 0 ? void 0 : _a.preventDefault();

      if (_this.webcam.dom.alreadyStarted()) {
        return;
      }

      _this.webcam.dom.init();

      _this.webcam.element.removeEventListener("click", _this.startCamera);

      _this.webcam.dom.video.addEventListener("click", _this.startRecording);

      constraints = {
        audio: __assign({
          echoCancellation: {
            exact: true
          }
        }, constraints.audio),
        video: __assign({
          height: _this.webcam.element.offsetHeight,
          width: _this.webcam.element.offsetWidth
        }, constraints.video)
      };
      navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        _this.webcam.dom.video.srcObject = stream;
      }).catch(function () {});

      _this.webcam.dom.toggleStarted();

      (_b = _this.webcam.webcamOptions.cameraStarted) === null || _b === void 0 ? void 0 : _b.call(_this, _this.webcam);
    };

    this.stopCamera = function (event) {
      var _a, _b;

      (_a = event) === null || _a === void 0 ? void 0 : _a.preventDefault();

      _this._stopTracks();

      _this.webcam.element.addEventListener("click", _this.startCamera);

      _this.webcam.dom.toggleStopped();

      (_b = _this.webcam.webcamOptions.cameraStopped) === null || _b === void 0 ? void 0 : _b.call(_this, _this.webcam);
    };

    this.startRecording = function (event) {
      var _a, _b, _c, _d;

      (_a = event) === null || _a === void 0 ? void 0 : _a.preventDefault();

      if (!((_b = _this.webcam.dom.video) === null || _b === void 0 ? void 0 : _b.srcObject)) {
        return;
      }

      if (typeof MediaRecorder === "undefined" && _this.isSafari()) {
        window.console.warn("WARNING: Your web browser, Safari, does not have MediaRecorder enabled.\n         You may enable it in the application menu under:\n         Develop > Experimental Features > MediaRecorder");
        return;
      }

      _this.recordedBlobs = [];
      _this.mediaRecorder = new MediaRecorder((_c = _this.webcam.dom.video) === null || _c === void 0 ? void 0 : _c.srcObject, _this.mediaRecorderOptions());
      _this.mediaRecorder.ondataavailable = _this.videoDataAvailable;
      _this.mediaRecorder.onstop = _this.recordingStopped;

      _this.mediaRecorder.start(10);

      if (_this.webcam.webcamOptions.timeLimit) {
        var timeout = _this.webcam.webcamOptions.timeLimit * 1000;
        setTimeout(_this.stopRecording, timeout);
      }

      _this.webcam.dom.video.removeEventListener("click", _this.startRecording);

      _this.webcam.dom.video.addEventListener("click", _this.stopRecording);

      _this.webcam.dom.recordingStarted();

      (_d = _this.webcam.webcamOptions.recordingStarted) === null || _d === void 0 ? void 0 : _d.call(_this, _this.webcam);
    };

    this.stopRecording = function (event) {
      var _a;

      (_a = event) === null || _a === void 0 ? void 0 : _a.preventDefault();

      if (!_this.mediaRecorder || _this.mediaRecorder.state !== "recording" || _this.alreadyStopped) {
        return;
      }

      _this._stopTracks();

      _this.mediaRecorder.stop();
    };

    this._stopTracks = function () {
      var _a, _b;

      var src = (_a = _this.webcam.dom.video) === null || _a === void 0 ? void 0 : _a.srcObject;
      (_b = src) === null || _b === void 0 ? void 0 : _b.getTracks().forEach(function (track) {
        var _a;

        (_a = track) === null || _a === void 0 ? void 0 : _a.stop();
      });
    };

    this.recordingStopped = function (event) {
      var _a, _b;

      (_a = event) === null || _a === void 0 ? void 0 : _a.preventDefault();
      var extension = _this.isSafari() ? "mp4" : "webm";
      var file = new Blob(_this.recordedBlobs, {
        type: "video/" + extension
      });
      var dateTime = new Date().toISOString();
      file.name = "webcam-video-" + dateTime + "." + extension;

      _this.webcam.dom.video.removeEventListener("click", _this.stopRecording);

      _this.webcam.dropzone.addFile(file);

      _this.webcam.dom.finalize(file);

      (_b = _this.webcam.webcamOptions.recordingStopped) === null || _b === void 0 ? void 0 : _b.call(_this, _this.webcam);
    };

    this.videoDataAvailable = function (event) {
      var _a;

      if (((_a = event) === null || _a === void 0 ? void 0 : _a.data.size) > 0) {
        _this.recordedBlobs.push(event.data);
      }
    };

    this.mediaRecorderOptions = function () {
      var mimeType = "";

      if (typeof MediaRecorder.isTypeSupported === "undefined" && _this.isSafari()) {
        mimeType = "video/mp4";
      } else if (MediaRecorder.isTypeSupported("video/webm;codecs=vp9")) {
        mimeType = "video/webm;codecs=vp9";
      } else if (MediaRecorder.isTypeSupported('video/webm;codecs="vp8,opus"')) {
        mimeType = 'video/webm;codecs="vp8,opus"';
      } else if (MediaRecorder.isTypeSupported("video/webm;codecs=vp8")) {
        mimeType = "video/webm;codecs=vp8";
      } else if (MediaRecorder.isTypeSupported("video/webm")) {
        mimeType = "video/webm";
      }

      return {
        mimeType: mimeType
      };
    };

    this.isSafari = function () {
      var ua = navigator.userAgent.toLowerCase();
      return ua.indexOf("safari/") > -1 && ua.indexOf("chrome/") < 0;
    };

    this.webcam = webcam;
    this.webcam.element.addEventListener("click", this.startCamera);
    this.wireUpSelectorsAndEvents();
  }

  VideoEvents.prototype.wireUpSelectorsAndEvents = function () {
    this.webcam.element.addEventListener("click", this.startCamera);
    this.wireUp("startCamera");
    this.wireUp("stopCamera");
    this.wireUp("startRecording");
    this.wireUp("stopRecording");
  };

  VideoEvents.prototype.wireUp = function (eventName, selector) {
    var _a;

    try {
      var el = document.querySelector(selector || this.webcam.webcamOptions[eventName]);
      (_a = el) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this[eventName]);
    } catch (error) {
      if (!(error instanceof DOMException)) {
        throw error;
      }
    }
  };

  return VideoEvents;
}();



/***/ }),

/***/ "./node_modules/@shubox/core/node_modules/dropzone/dist/dropzone.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shubox/core/node_modules/dropzone/dist/dropzone.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
// The Emitter class provides the ability to call `.on()` on Dropzone to listen
// to events.
// It is strongly based on component's emitter class, and I removed the
// functionality because of the dependency hell with different frameworks.


var Emitter = function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
  }

  _createClass(Emitter, [{
    key: "on",
    // Add an event listener for given event
    value: function on(event, fn) {
      this._callbacks = this._callbacks || {}; // Create namespace for this event

      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }

      this._callbacks[event].push(fn);

      return this;
    }
  }, {
    key: "emit",
    value: function emit(event) {
      this._callbacks = this._callbacks || {};
      var callbacks = this._callbacks[event];

      if (callbacks) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        for (var _iterator = callbacks, _isArray = true, _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var callback = _ref;
          callback.apply(this, args);
        }
      }

      return this;
    } // Remove event listener for given event. If fn is not provided, all event
    // listeners for that event will be removed. If neither is provided, all
    // event listeners will be removed.

  }, {
    key: "off",
    value: function off(event, fn) {
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      } // specific event


      var callbacks = this._callbacks[event];

      if (!callbacks) {
        return this;
      } // remove all handlers


      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      } // remove specific handler


      for (var i = 0; i < callbacks.length; i++) {
        var callback = callbacks[i];

        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }

      return this;
    }
  }]);

  return Emitter;
}();

var Dropzone = function (_Emitter) {
  _inherits(Dropzone, _Emitter);

  _createClass(Dropzone, null, [{
    key: "initClass",
    value: function initClass() {
      // Exposing the emitter class, mainly for tests
      this.prototype.Emitter = Emitter;
      /*
       This is a list of all available events you can register on a dropzone object.
        You can register an event handler like this:
        dropzone.on("dragEnter", function() { });
        */

      this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];
      this.prototype.defaultOptions = {
        /**
         * Has to be specified on elements other than form (or when the form
         * doesn't have an `action` attribute). You can also
         * provide a function that will be called with `files` and
         * must return the url (since `v3.12.0`)
         */
        url: null,

        /**
         * Can be changed to `"put"` if necessary. You can also provide a function
         * that will be called with `files` and must return the method (since `v3.12.0`).
         */
        method: "post",

        /**
         * Will be set on the XHRequest.
         */
        withCredentials: false,

        /**
         * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
         */
        timeout: 30000,

        /**
         * How many file uploads to process in parallel (See the
         * Enqueuing file uploads* documentation section for more info)
         */
        parallelUploads: 2,

        /**
         * Whether to send multiple files in one request. If
         * this it set to true, then the fallback file input element will
         * have the `multiple` attribute as well. This option will
         * also trigger additional events (like `processingmultiple`). See the events
         * documentation section for more information.
         */
        uploadMultiple: false,

        /**
         * Whether you want files to be uploaded in chunks to your server. This can't be
         * used in combination with `uploadMultiple`.
         *
         * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
         */
        chunking: false,

        /**
         * If `chunking` is enabled, this defines whether **every** file should be chunked,
         * even if the file size is below chunkSize. This means, that the additional chunk
         * form data will be submitted and the `chunksUploaded` callback will be invoked.
         */
        forceChunking: false,

        /**
         * If `chunking` is `true`, then this defines the chunk size in bytes.
         */
        chunkSize: 2000000,

        /**
         * If `true`, the individual chunks of a file are being uploaded simultaneously.
         */
        parallelChunkUploads: false,

        /**
         * Whether a chunk should be retried if it fails.
         */
        retryChunks: false,

        /**
         * If `retryChunks` is true, how many times should it be retried.
         */
        retryChunksLimit: 3,

        /**
         * If not `null` defines how many files this Dropzone handles. If it exceeds,
         * the event `maxfilesexceeded` will be called. The dropzone element gets the
         * class `dz-max-files-reached` accordingly so you can provide visual feedback.
         */
        maxFilesize: 256,

        /**
         * The name of the file param that gets transferred.
         * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
         * Dropzone will append `[]` to the name.
         */
        paramName: "file",

        /**
         * Whether thumbnails for images should be generated
         */
        createImageThumbnails: true,

        /**
         * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
         */
        maxThumbnailFilesize: 10,

        /**
         * If `null`, the ratio of the image will be used to calculate it.
         */
        thumbnailWidth: 120,

        /**
         * The same as `thumbnailWidth`. If both are null, images will not be resized.
         */
        thumbnailHeight: 120,

        /**
         * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        thumbnailMethod: 'crop',

        /**
         * If set, images will be resized to these dimensions before being **uploaded**.
         * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
         * ratio of the file will be preserved.
         *
         * The `options.transformFile` function uses these options, so if the `transformFile` function
         * is overridden, these options don't do anything.
         */
        resizeWidth: null,

        /**
         * See `resizeWidth`.
         */
        resizeHeight: null,

        /**
         * The mime type of the resized image (before it gets uploaded to the server).
         * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
         * See `resizeWidth` for more information.
         */
        resizeMimeType: null,

        /**
         * The quality of the resized images. See `resizeWidth`.
         */
        resizeQuality: 0.8,

        /**
         * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        resizeMethod: 'contain',

        /**
         * The base that is used to calculate the filesize. You can change this to
         * 1024 if you would rather display kibibytes, mebibytes, etc...
         * 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte` not `1 kilobyte`.
         * You can change this to `1024` if you don't care about validity.
         */
        filesizeBase: 1000,

        /**
         * Can be used to limit the maximum number of files that will be handled by this Dropzone
         */
        maxFiles: null,

        /**
         * An optional object to send additional headers to the server. Eg:
         * `{ "My-Awesome-Header": "header value" }`
         */
        headers: null,

        /**
         * If `true`, the dropzone element itself will be clickable, if `false`
         * nothing will be clickable.
         *
         * You can also pass an HTML element, a CSS selector (for multiple elements)
         * or an array of those. In that case, all of those elements will trigger an
         * upload when clicked.
         */
        clickable: true,

        /**
         * Whether hidden files in directories should be ignored.
         */
        ignoreHiddenFiles: true,

        /**
         * The default implementation of `accept` checks the file's mime type or
         * extension against this list. This is a comma separated list of mime
         * types or file extensions.
         *
         * Eg.: `image/*,application/pdf,.psd`
         *
         * If the Dropzone is `clickable` this option will also be used as
         * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
         * parameter on the hidden file input as well.
         */
        acceptedFiles: null,

        /**
         * **Deprecated!**
         * Use acceptedFiles instead.
         */
        acceptedMimeTypes: null,

        /**
         * If false, files will be added to the queue but the queue will not be
         * processed automatically.
         * This can be useful if you need some additional user input before sending
         * files (or if you want want all files sent at once).
         * If you're ready to send the file simply call `myDropzone.processQueue()`.
         *
         * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
         * section for more information.
         */
        autoProcessQueue: true,

        /**
         * If false, files added to the dropzone will not be queued by default.
         * You'll have to call `enqueueFile(file)` manually.
         */
        autoQueue: true,

        /**
         * If `true`, this will add a link to every file preview to remove or cancel (if
         * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
         * and `dictRemoveFile` options are used for the wording.
         */
        addRemoveLinks: false,

        /**
         * Defines where to display the file previews – if `null` the
         * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
         * selector. The element should have the `dropzone-previews` class so
         * the previews are displayed properly.
         */
        previewsContainer: null,

        /**
         * This is the element the hidden input field (which is used when clicking on the
         * dropzone to trigger file selection) will be appended to. This might
         * be important in case you use frameworks to switch the content of your page.
         *
         * Can be a selector string, or an element directly.
         */
        hiddenInputContainer: "body",

        /**
         * If null, no capture type will be specified
         * If camera, mobile devices will skip the file selection and choose camera
         * If microphone, mobile devices will skip the file selection and choose the microphone
         * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
         * On apple devices multiple must be set to false.  AcceptedFiles may need to
         * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
         */
        capture: null,

        /**
         * **Deprecated**. Use `renameFile` instead.
         */
        renameFilename: null,

        /**
         * A function that is invoked before the file is uploaded to the server and renames the file.
         * This function gets the `File` as argument and can use the `file.name`. The actual name of the
         * file that gets used during the upload can be accessed through `file.upload.filename`.
         */
        renameFile: null,

        /**
         * If `true` the fallback will be forced. This is very useful to test your server
         * implementations first and make sure that everything works as
         * expected without dropzone if you experience problems, and to test
         * how your fallbacks will look.
         */
        forceFallback: false,

        /**
         * The text used before any files are dropped.
         */
        dictDefaultMessage: "Drop files here to upload",

        /**
         * The text that replaces the default message text it the browser is not supported.
         */
        dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",

        /**
         * The text that will be added before the fallback form.
         * If you provide a  fallback element yourself, or if this option is `null` this will
         * be ignored.
         */
        dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",

        /**
         * If the filesize is too big.
         * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
         */
        dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",

        /**
         * If the file doesn't match the file type.
         */
        dictInvalidFileType: "You can't upload files of this type.",

        /**
         * If the server response was invalid.
         * `{{statusCode}}` will be replaced with the servers status code.
         */
        dictResponseError: "Server responded with {{statusCode}} code.",

        /**
         * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
         */
        dictCancelUpload: "Cancel upload",

        /**
         * The text that is displayed if an upload was manually canceled
         */
        dictUploadCanceled: "Upload canceled.",

        /**
         * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
         */
        dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",

        /**
         * If `addRemoveLinks` is true, the text to be used to remove a file.
         */
        dictRemoveFile: "Remove file",

        /**
         * If this is not null, then the user will be prompted before removing a file.
         */
        dictRemoveFileConfirmation: null,

        /**
         * Displayed if `maxFiles` is st and exceeded.
         * The string `{{maxFiles}}` will be replaced by the configuration value.
         */
        dictMaxFilesExceeded: "You can not upload any more files.",

        /**
         * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
         * `b` for bytes.
         */
        dictFileSizeUnits: {
          tb: "TB",
          gb: "GB",
          mb: "MB",
          kb: "KB",
          b: "b"
        },

        /**
         * Called when dropzone initialized
         * You can add event listeners here
         */
        init: function init() {},

        /**
         * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
         * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
         * of a function, this needs to return a map.
         *
         * The default implementation does nothing for normal uploads, but adds relevant information for
         * chunked uploads.
         *
         * This is the same as adding hidden input fields in the form element.
         */
        params: function params(files, xhr, chunk) {
          if (chunk) {
            return {
              dzuuid: chunk.file.upload.uuid,
              dzchunkindex: chunk.index,
              dztotalfilesize: chunk.file.size,
              dzchunksize: this.options.chunkSize,
              dztotalchunkcount: chunk.file.upload.totalChunkCount,
              dzchunkbyteoffset: chunk.index * this.options.chunkSize
            };
          }
        },

        /**
         * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
         * and a `done` function as parameters.
         *
         * If the done function is invoked without arguments, the file is "accepted" and will
         * be processed. If you pass an error message, the file is rejected, and the error
         * message will be displayed.
         * This function will not be called if the file is too big or doesn't match the mime types.
         */
        accept: function accept(file, done) {
          return done();
        },

        /**
         * The callback that will be invoked when all chunks have been uploaded for a file.
         * It gets the file for which the chunks have been uploaded as the first parameter,
         * and the `done` function as second. `done()` needs to be invoked when everything
         * needed to finish the upload process is done.
         */
        chunksUploaded: function chunksUploaded(file, done) {
          done();
        },

        /**
         * Gets called when the browser is not supported.
         * The default implementation shows the fallback input field and adds
         * a text.
         */
        fallback: function fallback() {
          // This code should pass in IE7... :(
          var messageElement = void 0;
          this.element.className = this.element.className + " dz-browser-not-supported";

          for (var _iterator2 = this.element.getElementsByTagName("div"), _isArray2 = true, _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              _ref2 = _i2.value;
            }

            var child = _ref2;

            if (/(^| )dz-message($| )/.test(child.className)) {
              messageElement = child;
              child.className = "dz-message"; // Removes the 'dz-default' class

              break;
            }
          }

          if (!messageElement) {
            messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
            this.element.appendChild(messageElement);
          }

          var span = messageElement.getElementsByTagName("span")[0];

          if (span) {
            if (span.textContent != null) {
              span.textContent = this.options.dictFallbackMessage;
            } else if (span.innerText != null) {
              span.innerText = this.options.dictFallbackMessage;
            }
          }

          return this.element.appendChild(this.getFallbackForm());
        },

        /**
         * Gets called to calculate the thumbnail dimensions.
         *
         * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
         *
         *  - `srcWidth` & `srcHeight` (required)
         *  - `trgWidth` & `trgHeight` (required)
         *  - `srcX` & `srcY` (optional, default `0`)
         *  - `trgX` & `trgY` (optional, default `0`)
         *
         * Those values are going to be used by `ctx.drawImage()`.
         */
        resize: function resize(file, width, height, resizeMethod) {
          var info = {
            srcX: 0,
            srcY: 0,
            srcWidth: file.width,
            srcHeight: file.height
          };
          var srcRatio = file.width / file.height; // Automatically calculate dimensions if not specified

          if (width == null && height == null) {
            width = info.srcWidth;
            height = info.srcHeight;
          } else if (width == null) {
            width = height * srcRatio;
          } else if (height == null) {
            height = width / srcRatio;
          } // Make sure images aren't upscaled


          width = Math.min(width, info.srcWidth);
          height = Math.min(height, info.srcHeight);
          var trgRatio = width / height;

          if (info.srcWidth > width || info.srcHeight > height) {
            // Image is bigger and needs rescaling
            if (resizeMethod === 'crop') {
              if (srcRatio > trgRatio) {
                info.srcHeight = file.height;
                info.srcWidth = info.srcHeight * trgRatio;
              } else {
                info.srcWidth = file.width;
                info.srcHeight = info.srcWidth / trgRatio;
              }
            } else if (resizeMethod === 'contain') {
              // Method 'contain'
              if (srcRatio > trgRatio) {
                height = width / srcRatio;
              } else {
                width = height * srcRatio;
              }
            } else {
              throw new Error("Unknown resizeMethod '" + resizeMethod + "'");
            }
          }

          info.srcX = (file.width - info.srcWidth) / 2;
          info.srcY = (file.height - info.srcHeight) / 2;
          info.trgWidth = width;
          info.trgHeight = height;
          return info;
        },

        /**
         * Can be used to transform the file (for example, resize an image if necessary).
         *
         * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
         * images according to those dimensions.
         *
         * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
         * to be invoked with the file when the transformation is done.
         */
        transformFile: function transformFile(file, done) {
          if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
            return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
          } else {
            return done(file);
          }
        },

        /**
         * A string that contains the template used for each dropped
         * file. Change it to fulfill your needs but make sure to properly
         * provide all elements.
         *
         * If you want to use an actual HTML element instead of providing a String
         * as a config option, you could create a div with the id `tpl`,
         * put the template inside it and provide the element like this:
         *
         *     document
         *       .querySelector('#tpl')
         *       .innerHTML
         *
         */
        previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",
        // END OPTIONS
        // (Required by the dropzone documentation parser)

        /*
         Those functions register themselves to the events on init and handle all
         the user interface specific stuff. Overwriting them won't break the upload
         but can break the way it's displayed.
         You can overwrite them if you don't like the default behavior. If you just
         want to add an additional event handler, register it on the dropzone object
         and don't overwrite those options.
         */
        // Those are self explanatory and simply concern the DragnDrop.
        drop: function drop(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragstart: function dragstart(e) {},
        dragend: function dragend(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragenter: function dragenter(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragover: function dragover(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragleave: function dragleave(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        paste: function paste(e) {},
        // Called whenever there are no files left in the dropzone anymore, and the
        // dropzone should be displayed as if in the initial state.
        reset: function reset() {
          return this.element.classList.remove("dz-started");
        },
        // Called when a file is added to the queue
        // Receives `file`
        addedfile: function addedfile(file) {
          var _this2 = this;

          if (this.element === this.previewsContainer) {
            this.element.classList.add("dz-started");
          }

          if (this.previewsContainer) {
            file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
            file.previewTemplate = file.previewElement; // Backwards compatibility

            this.previewsContainer.appendChild(file.previewElement);

            for (var _iterator3 = file.previewElement.querySelectorAll("[data-dz-name]"), _isArray3 = true, _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
              var _ref3;

              if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
              } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
              }

              var node = _ref3;
              node.textContent = file.name;
            }

            for (var _iterator4 = file.previewElement.querySelectorAll("[data-dz-size]"), _isArray4 = true, _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
              if (_isArray4) {
                if (_i4 >= _iterator4.length) break;
                node = _iterator4[_i4++];
              } else {
                _i4 = _iterator4.next();
                if (_i4.done) break;
                node = _i4.value;
              }

              node.innerHTML = this.filesize(file.size);
            }

            if (this.options.addRemoveLinks) {
              file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
              file.previewElement.appendChild(file._removeLink);
            }

            var removeFileEvent = function removeFileEvent(e) {
              e.preventDefault();
              e.stopPropagation();

              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this2.options.dictCancelUploadConfirmation, function () {
                  return _this2.removeFile(file);
                });
              } else {
                if (_this2.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this2.options.dictRemoveFileConfirmation, function () {
                    return _this2.removeFile(file);
                  });
                } else {
                  return _this2.removeFile(file);
                }
              }
            };

            for (var _iterator5 = file.previewElement.querySelectorAll("[data-dz-remove]"), _isArray5 = true, _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
              var _ref4;

              if (_isArray5) {
                if (_i5 >= _iterator5.length) break;
                _ref4 = _iterator5[_i5++];
              } else {
                _i5 = _iterator5.next();
                if (_i5.done) break;
                _ref4 = _i5.value;
              }

              var removeLink = _ref4;
              removeLink.addEventListener("click", removeFileEvent);
            }
          }
        },
        // Called whenever a file is removed.
        removedfile: function removedfile(file) {
          if (file.previewElement != null && file.previewElement.parentNode != null) {
            file.previewElement.parentNode.removeChild(file.previewElement);
          }

          return this._updateMaxFilesReachedClass();
        },
        // Called when a thumbnail has been generated
        // Receives `file` and `dataUrl`
        thumbnail: function thumbnail(file, dataUrl) {
          if (file.previewElement) {
            file.previewElement.classList.remove("dz-file-preview");

            for (var _iterator6 = file.previewElement.querySelectorAll("[data-dz-thumbnail]"), _isArray6 = true, _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
              var _ref5;

              if (_isArray6) {
                if (_i6 >= _iterator6.length) break;
                _ref5 = _iterator6[_i6++];
              } else {
                _i6 = _iterator6.next();
                if (_i6.done) break;
                _ref5 = _i6.value;
              }

              var thumbnailElement = _ref5;
              thumbnailElement.alt = file.name;
              thumbnailElement.src = dataUrl;
            }

            return setTimeout(function () {
              return file.previewElement.classList.add("dz-image-preview");
            }, 1);
          }
        },
        // Called whenever an error occurs
        // Receives `file` and `message`
        error: function error(file, message) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-error");

            if (typeof message !== "String" && message.error) {
              message = message.error;
            }

            for (var _iterator7 = file.previewElement.querySelectorAll("[data-dz-errormessage]"), _isArray7 = true, _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
              var _ref6;

              if (_isArray7) {
                if (_i7 >= _iterator7.length) break;
                _ref6 = _iterator7[_i7++];
              } else {
                _i7 = _iterator7.next();
                if (_i7.done) break;
                _ref6 = _i7.value;
              }

              var node = _ref6;
              node.textContent = message;
            }
          }
        },
        errormultiple: function errormultiple() {},
        // Called when a file gets processed. Since there is a cue, not all added
        // files are processed immediately.
        // Receives `file`
        processing: function processing(file) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-processing");

            if (file._removeLink) {
              return file._removeLink.innerHTML = this.options.dictCancelUpload;
            }
          }
        },
        processingmultiple: function processingmultiple() {},
        // Called whenever the upload progress gets updated.
        // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
        // To get the total number of bytes of the file, use `file.size`
        uploadprogress: function uploadprogress(file, progress, bytesSent) {
          if (file.previewElement) {
            for (var _iterator8 = file.previewElement.querySelectorAll("[data-dz-uploadprogress]"), _isArray8 = true, _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
              var _ref7;

              if (_isArray8) {
                if (_i8 >= _iterator8.length) break;
                _ref7 = _iterator8[_i8++];
              } else {
                _i8 = _iterator8.next();
                if (_i8.done) break;
                _ref7 = _i8.value;
              }

              var node = _ref7;
              node.nodeName === 'PROGRESS' ? node.value = progress : node.style.width = progress + "%";
            }
          }
        },
        // Called whenever the total upload progress gets updated.
        // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
        totaluploadprogress: function totaluploadprogress() {},
        // Called just before the file is sent. Gets the `xhr` object as second
        // parameter, so you can modify it (for example to add a CSRF token) and a
        // `formData` object to add additional information.
        sending: function sending() {},
        sendingmultiple: function sendingmultiple() {},
        // When the complete upload is finished and successful
        // Receives `file`
        success: function success(file) {
          if (file.previewElement) {
            return file.previewElement.classList.add("dz-success");
          }
        },
        successmultiple: function successmultiple() {},
        // When the upload is canceled.
        canceled: function canceled(file) {
          return this.emit("error", file, this.options.dictUploadCanceled);
        },
        canceledmultiple: function canceledmultiple() {},
        // When the upload is finished, either with success or an error.
        // Receives `file`
        complete: function complete(file) {
          if (file._removeLink) {
            file._removeLink.innerHTML = this.options.dictRemoveFile;
          }

          if (file.previewElement) {
            return file.previewElement.classList.add("dz-complete");
          }
        },
        completemultiple: function completemultiple() {},
        maxfilesexceeded: function maxfilesexceeded() {},
        maxfilesreached: function maxfilesreached() {},
        queuecomplete: function queuecomplete() {},
        addedfiles: function addedfiles() {}
      };
      this.prototype._thumbnailQueue = [];
      this.prototype._processingThumbnail = false;
    } // global utility

  }, {
    key: "extend",
    value: function extend(target) {
      for (var _len2 = arguments.length, objects = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        objects[_key2 - 1] = arguments[_key2];
      }

      for (var _iterator9 = objects, _isArray9 = true, _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
        var _ref8;

        if (_isArray9) {
          if (_i9 >= _iterator9.length) break;
          _ref8 = _iterator9[_i9++];
        } else {
          _i9 = _iterator9.next();
          if (_i9.done) break;
          _ref8 = _i9.value;
        }

        var object = _ref8;

        for (var key in object) {
          var val = object[key];
          target[key] = val;
        }
      }

      return target;
    }
  }]);

  function Dropzone(el, options) {
    _classCallCheck(this, Dropzone);

    var _this = _possibleConstructorReturn(this, (Dropzone.__proto__ || Object.getPrototypeOf(Dropzone)).call(this));

    var fallback = void 0,
        left = void 0;
    _this.element = el; // For backwards compatibility since the version was in the prototype previously

    _this.version = Dropzone.version;
    _this.defaultOptions.previewTemplate = _this.defaultOptions.previewTemplate.replace(/\n*/g, "");
    _this.clickableElements = [];
    _this.listeners = [];
    _this.files = []; // All files

    if (typeof _this.element === "string") {
      _this.element = document.querySelector(_this.element);
    } // Not checking if instance of HTMLElement or Element since IE9 is extremely weird.


    if (!_this.element || _this.element.nodeType == null) {
      throw new Error("Invalid dropzone element.");
    }

    if (_this.element.dropzone) {
      throw new Error("Dropzone already attached.");
    } // Now add this dropzone to the instances.


    Dropzone.instances.push(_this); // Put the dropzone inside the element itself.

    _this.element.dropzone = _this;
    var elementOptions = (left = Dropzone.optionsForElement(_this.element)) != null ? left : {};
    _this.options = Dropzone.extend({}, _this.defaultOptions, elementOptions, options != null ? options : {}); // If the browser failed, just call the fallback and leave

    if (_this.options.forceFallback || !Dropzone.isBrowserSupported()) {
      var _ret;

      return _ret = _this.options.fallback.call(_this), _possibleConstructorReturn(_this, _ret);
    } // @options.url = @element.getAttribute "action" unless @options.url?


    if (_this.options.url == null) {
      _this.options.url = _this.element.getAttribute("action");
    }

    if (!_this.options.url) {
      throw new Error("No URL provided.");
    }

    if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) {
      throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
    }

    if (_this.options.uploadMultiple && _this.options.chunking) {
      throw new Error('You cannot set both: uploadMultiple and chunking.');
    } // Backwards compatibility


    if (_this.options.acceptedMimeTypes) {
      _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
      delete _this.options.acceptedMimeTypes;
    } // Backwards compatibility


    if (_this.options.renameFilename != null) {
      _this.options.renameFile = function (file) {
        return _this.options.renameFilename.call(_this, file.name, file);
      };
    }

    _this.options.method = _this.options.method.toUpperCase();

    if ((fallback = _this.getExistingFallback()) && fallback.parentNode) {
      // Remove the fallback
      fallback.parentNode.removeChild(fallback);
    } // Display previews in the previewsContainer element or the Dropzone element unless explicitly set to false


    if (_this.options.previewsContainer !== false) {
      if (_this.options.previewsContainer) {
        _this.previewsContainer = Dropzone.getElement(_this.options.previewsContainer, "previewsContainer");
      } else {
        _this.previewsContainer = _this.element;
      }
    }

    if (_this.options.clickable) {
      if (_this.options.clickable === true) {
        _this.clickableElements = [_this.element];
      } else {
        _this.clickableElements = Dropzone.getElements(_this.options.clickable, "clickable");
      }
    }

    _this.init();

    return _this;
  } // Returns all files that have been accepted


  _createClass(Dropzone, [{
    key: "getAcceptedFiles",
    value: function getAcceptedFiles() {
      return this.files.filter(function (file) {
        return file.accepted;
      }).map(function (file) {
        return file;
      });
    } // Returns all files that have been rejected
    // Not sure when that's going to be useful, but added for completeness.

  }, {
    key: "getRejectedFiles",
    value: function getRejectedFiles() {
      return this.files.filter(function (file) {
        return !file.accepted;
      }).map(function (file) {
        return file;
      });
    }
  }, {
    key: "getFilesWithStatus",
    value: function getFilesWithStatus(status) {
      return this.files.filter(function (file) {
        return file.status === status;
      }).map(function (file) {
        return file;
      });
    } // Returns all files that are in the queue

  }, {
    key: "getQueuedFiles",
    value: function getQueuedFiles() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    }
  }, {
    key: "getUploadingFiles",
    value: function getUploadingFiles() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    }
  }, {
    key: "getAddedFiles",
    value: function getAddedFiles() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    } // Files that are either queued or uploading

  }, {
    key: "getActiveFiles",
    value: function getActiveFiles() {
      return this.files.filter(function (file) {
        return file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED;
      }).map(function (file) {
        return file;
      });
    } // The function that gets called when Dropzone is initialized. You
    // can (and should) setup event listeners inside this function.

  }, {
    key: "init",
    value: function init() {
      var _this3 = this; // In case it isn't set already


      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }

      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
      }

      if (this.clickableElements.length) {
        var setupHiddenFileInput = function setupHiddenFileInput() {
          if (_this3.hiddenFileInput) {
            _this3.hiddenFileInput.parentNode.removeChild(_this3.hiddenFileInput);
          }

          _this3.hiddenFileInput = document.createElement("input");

          _this3.hiddenFileInput.setAttribute("type", "file");

          if (_this3.options.maxFiles === null || _this3.options.maxFiles > 1) {
            _this3.hiddenFileInput.setAttribute("multiple", "multiple");
          }

          _this3.hiddenFileInput.className = "dz-hidden-input";

          if (_this3.options.acceptedFiles !== null) {
            _this3.hiddenFileInput.setAttribute("accept", _this3.options.acceptedFiles);
          }

          if (_this3.options.capture !== null) {
            _this3.hiddenFileInput.setAttribute("capture", _this3.options.capture);
          } // Not setting `display="none"` because some browsers don't accept clicks
          // on elements that aren't displayed.


          _this3.hiddenFileInput.style.visibility = "hidden";
          _this3.hiddenFileInput.style.position = "absolute";
          _this3.hiddenFileInput.style.top = "0";
          _this3.hiddenFileInput.style.left = "0";
          _this3.hiddenFileInput.style.height = "0";
          _this3.hiddenFileInput.style.width = "0";
          Dropzone.getElement(_this3.options.hiddenInputContainer, 'hiddenInputContainer').appendChild(_this3.hiddenFileInput);
          return _this3.hiddenFileInput.addEventListener("change", function () {
            var files = _this3.hiddenFileInput.files;

            if (files.length) {
              for (var _iterator10 = files, _isArray10 = true, _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
                var _ref9;

                if (_isArray10) {
                  if (_i10 >= _iterator10.length) break;
                  _ref9 = _iterator10[_i10++];
                } else {
                  _i10 = _iterator10.next();
                  if (_i10.done) break;
                  _ref9 = _i10.value;
                }

                var file = _ref9;

                _this3.addFile(file);
              }
            }

            _this3.emit("addedfiles", files);

            return setupHiddenFileInput();
          });
        };

        setupHiddenFileInput();
      }

      this.URL = window.URL !== null ? window.URL : window.webkitURL; // Setup all event listeners on the Dropzone object itself.
      // They're not in @setupEventListeners() because they shouldn't be removed
      // again when the dropzone gets disabled.

      for (var _iterator11 = this.events, _isArray11 = true, _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();;) {
        var _ref10;

        if (_isArray11) {
          if (_i11 >= _iterator11.length) break;
          _ref10 = _iterator11[_i11++];
        } else {
          _i11 = _iterator11.next();
          if (_i11.done) break;
          _ref10 = _i11.value;
        }

        var eventName = _ref10;
        this.on(eventName, this.options[eventName]);
      }

      this.on("uploadprogress", function () {
        return _this3.updateTotalUploadProgress();
      });
      this.on("removedfile", function () {
        return _this3.updateTotalUploadProgress();
      });
      this.on("canceled", function (file) {
        return _this3.emit("complete", file);
      }); // Emit a `queuecomplete` event if all files finished uploading.

      this.on("complete", function (file) {
        if (_this3.getAddedFiles().length === 0 && _this3.getUploadingFiles().length === 0 && _this3.getQueuedFiles().length === 0) {
          // This needs to be deferred so that `queuecomplete` really triggers after `complete`
          return setTimeout(function () {
            return _this3.emit("queuecomplete");
          }, 0);
        }
      });

      var noPropagation = function noPropagation(e) {
        e.stopPropagation();

        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      }; // Create the listeners


      this.listeners = [{
        element: this.element,
        events: {
          "dragstart": function dragstart(e) {
            return _this3.emit("dragstart", e);
          },
          "dragenter": function dragenter(e) {
            noPropagation(e);
            return _this3.emit("dragenter", e);
          },
          "dragover": function dragover(e) {
            // Makes it possible to drag files from chrome's download bar
            // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
            // Try is required to prevent bug in Internet Explorer 11 (SCRIPT65535 exception)
            var efct = void 0;

            try {
              efct = e.dataTransfer.effectAllowed;
            } catch (error) {}

            e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
            noPropagation(e);
            return _this3.emit("dragover", e);
          },
          "dragleave": function dragleave(e) {
            return _this3.emit("dragleave", e);
          },
          "drop": function drop(e) {
            noPropagation(e);
            return _this3.drop(e);
          },
          "dragend": function dragend(e) {
            return _this3.emit("dragend", e);
          } // This is disabled right now, because the browsers don't implement it properly.
          // "paste": (e) =>
          //   noPropagation e
          //   @paste e

        }
      }];
      this.clickableElements.forEach(function (clickableElement) {
        return _this3.listeners.push({
          element: clickableElement,
          events: {
            "click": function click(evt) {
              // Only the actual dropzone or the message element should trigger file selection
              if (clickableElement !== _this3.element || evt.target === _this3.element || Dropzone.elementInside(evt.target, _this3.element.querySelector(".dz-message"))) {
                _this3.hiddenFileInput.click(); // Forward the click

              }

              return true;
            }
          }
        });
      });
      this.enable();
      return this.options.init.call(this);
    } // Not fully tested yet

  }, {
    key: "destroy",
    value: function destroy() {
      this.disable();
      this.removeAllFiles(true);

      if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }

      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    }
  }, {
    key: "updateTotalUploadProgress",
    value: function updateTotalUploadProgress() {
      var totalUploadProgress = void 0;
      var totalBytesSent = 0;
      var totalBytes = 0;
      var activeFiles = this.getActiveFiles();

      if (activeFiles.length) {
        for (var _iterator12 = this.getActiveFiles(), _isArray12 = true, _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator]();;) {
          var _ref11;

          if (_isArray12) {
            if (_i12 >= _iterator12.length) break;
            _ref11 = _iterator12[_i12++];
          } else {
            _i12 = _iterator12.next();
            if (_i12.done) break;
            _ref11 = _i12.value;
          }

          var file = _ref11;
          totalBytesSent += file.upload.bytesSent;
          totalBytes += file.upload.total;
        }

        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }

      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    } // @options.paramName can be a function taking one parameter rather than a string.
    // A parameter name for a file is obtained simply by calling this with an index number.

  }, {
    key: "_getParamName",
    value: function _getParamName(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
      }
    } // If @options.renameFile is a function,
    // the function will be used to rename the file.name before appending it to the formData

  }, {
    key: "_renameFile",
    value: function _renameFile(file) {
      if (typeof this.options.renameFile !== "function") {
        return file.name;
      }

      return this.options.renameFile(file);
    } // Returns a form that can be used as fallback if the browser does not support DragnDrop
    //
    // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
    // This code has to pass in IE7 :(

  }, {
    key: "getFallbackForm",
    value: function getFallbackForm() {
      var existingFallback = void 0,
          form = void 0;

      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }

      var fieldsString = "<div class=\"dz-fallback\">";

      if (this.options.dictFallbackText) {
        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
      }

      fieldsString += "<input type=\"file\" name=\"" + this._getParamName(0) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : undefined) + " /><input type=\"submit\" value=\"Upload!\"></div>";
      var fields = Dropzone.createElement(fieldsString);

      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
        form.appendChild(fields);
      } else {
        // Make sure that the enctype and method attributes are set properly
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }

      return form != null ? form : fields;
    } // Returns the fallback elements if they exist already
    //
    // This code has to pass in IE7 :(

  }, {
    key: "getExistingFallback",
    value: function getExistingFallback() {
      var getFallback = function getFallback(elements) {
        for (var _iterator13 = elements, _isArray13 = true, _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : _iterator13[Symbol.iterator]();;) {
          var _ref12;

          if (_isArray13) {
            if (_i13 >= _iterator13.length) break;
            _ref12 = _iterator13[_i13++];
          } else {
            _i13 = _iterator13.next();
            if (_i13.done) break;
            _ref12 = _i13.value;
          }

          var el = _ref12;

          if (/(^| )fallback($| )/.test(el.className)) {
            return el;
          }
        }
      };

      var _arr = ["div", "form"];

      for (var _i14 = 0; _i14 < _arr.length; _i14++) {
        var tagName = _arr[_i14];
        var fallback;

        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    } // Activates all listeners stored in @listeners

  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];

          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.addEventListener(event, listener, false));
          }

          return result;
        }();
      });
    } // Deactivates all listeners stored in @listeners

  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];

          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.removeEventListener(event, listener, false));
          }

          return result;
        }();
      });
    } // Removes all event listeners and cancels all files in the queue or being processed.

  }, {
    key: "disable",
    value: function disable() {
      var _this4 = this;

      this.clickableElements.forEach(function (element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      this.disabled = true;
      return this.files.map(function (file) {
        return _this4.cancelUpload(file);
      });
    }
  }, {
    key: "enable",
    value: function enable() {
      delete this.disabled;
      this.clickableElements.forEach(function (element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    } // Returns a nicely formatted filesize

  }, {
    key: "filesize",
    value: function filesize(size) {
      var selectedSize = 0;
      var selectedUnit = "b";

      if (size > 0) {
        var units = ['tb', 'gb', 'mb', 'kb', 'b'];

        for (var i = 0; i < units.length; i++) {
          var unit = units[i];
          var cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;

          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }

        selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
      }

      return "<strong>" + selectedSize + "</strong> " + this.options.dictFileSizeUnits[selectedUnit];
    } // Adds or removes the `dz-max-files-reached` class from the form.

  }, {
    key: "_updateMaxFilesReachedClass",
    value: function _updateMaxFilesReachedClass() {
      if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }

        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    }
  }, {
    key: "drop",
    value: function drop(e) {
      if (!e.dataTransfer) {
        return;
      }

      this.emit("drop", e); // Convert the FileList to an Array
      // This is necessary for IE11

      var files = [];

      for (var i = 0; i < e.dataTransfer.files.length; i++) {
        files[i] = e.dataTransfer.files[i];
      }

      this.emit("addedfiles", files); // Even if it's a folder, files.length will contain the folders.

      if (files.length) {
        var items = e.dataTransfer.items;

        if (items && items.length && items[0].webkitGetAsEntry != null) {
          // The browser supports dropping of folders, so handle items instead of files
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }
    }
  }, {
    key: "paste",
    value: function paste(e) {
      if (__guard__(e != null ? e.clipboardData : undefined, function (x) {
        return x.items;
      }) == null) {
        return;
      }

      this.emit("paste", e);
      var items = e.clipboardData.items;

      if (items.length) {
        return this._addFilesFromItems(items);
      }
    }
  }, {
    key: "handleFiles",
    value: function handleFiles(files) {
      for (var _iterator14 = files, _isArray14 = true, _i15 = 0, _iterator14 = _isArray14 ? _iterator14 : _iterator14[Symbol.iterator]();;) {
        var _ref13;

        if (_isArray14) {
          if (_i15 >= _iterator14.length) break;
          _ref13 = _iterator14[_i15++];
        } else {
          _i15 = _iterator14.next();
          if (_i15.done) break;
          _ref13 = _i15.value;
        }

        var file = _ref13;
        this.addFile(file);
      }
    } // When a folder is dropped (or files are pasted), items must be handled
    // instead of files.

  }, {
    key: "_addFilesFromItems",
    value: function _addFilesFromItems(items) {
      var _this5 = this;

      return function () {
        var result = [];

        for (var _iterator15 = items, _isArray15 = true, _i16 = 0, _iterator15 = _isArray15 ? _iterator15 : _iterator15[Symbol.iterator]();;) {
          var _ref14;

          if (_isArray15) {
            if (_i16 >= _iterator15.length) break;
            _ref14 = _iterator15[_i16++];
          } else {
            _i16 = _iterator15.next();
            if (_i16.done) break;
            _ref14 = _i16.value;
          }

          var item = _ref14;
          var entry;

          if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
            if (entry.isFile) {
              result.push(_this5.addFile(item.getAsFile()));
            } else if (entry.isDirectory) {
              // Append all files from that directory to files
              result.push(_this5._addFilesFromDirectory(entry, entry.name));
            } else {
              result.push(undefined);
            }
          } else if (item.getAsFile != null) {
            if (item.kind == null || item.kind === "file") {
              result.push(_this5.addFile(item.getAsFile()));
            } else {
              result.push(undefined);
            }
          } else {
            result.push(undefined);
          }
        }

        return result;
      }();
    } // Goes through the directory, and adds each file it finds recursively

  }, {
    key: "_addFilesFromDirectory",
    value: function _addFilesFromDirectory(directory, path) {
      var _this6 = this;

      var dirReader = directory.createReader();

      var errorHandler = function errorHandler(error) {
        return __guardMethod__(console, 'log', function (o) {
          return o.log(error);
        });
      };

      var readEntries = function readEntries() {
        return dirReader.readEntries(function (entries) {
          if (entries.length > 0) {
            for (var _iterator16 = entries, _isArray16 = true, _i17 = 0, _iterator16 = _isArray16 ? _iterator16 : _iterator16[Symbol.iterator]();;) {
              var _ref15;

              if (_isArray16) {
                if (_i17 >= _iterator16.length) break;
                _ref15 = _iterator16[_i17++];
              } else {
                _i17 = _iterator16.next();
                if (_i17.done) break;
                _ref15 = _i17.value;
              }

              var entry = _ref15;

              if (entry.isFile) {
                entry.file(function (file) {
                  if (_this6.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                    return;
                  }

                  file.fullPath = path + "/" + file.name;
                  return _this6.addFile(file);
                });
              } else if (entry.isDirectory) {
                _this6._addFilesFromDirectory(entry, path + "/" + entry.name);
              }
            } // Recursively call readEntries() again, since browser only handle
            // the first 100 entries.
            // See: https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReader#readEntries


            readEntries();
          }

          return null;
        }, errorHandler);
      };

      return readEntries();
    } // If `done()` is called without argument the file is accepted
    // If you call it with an error message, the file is rejected
    // (This allows for asynchronous validation)
    //
    // This function checks the filesize, and if the file.type passes the
    // `acceptedFiles` check.

  }, {
    key: "accept",
    value: function accept(file, done) {
      if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1024 * 1024) {
        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        return done(this.options.dictInvalidFileType);
      } else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        return this.emit("maxfilesexceeded", file);
      } else {
        return this.options.accept.call(this, file, done);
      }
    }
  }, {
    key: "addFile",
    value: function addFile(file) {
      var _this7 = this;

      file.upload = {
        uuid: Dropzone.uuidv4(),
        progress: 0,
        // Setting the total upload size to file.size for the beginning
        // It's actual different than the size to be transmitted.
        total: file.size,
        bytesSent: 0,
        filename: this._renameFile(file),
        chunked: this.options.chunking && (this.options.forceChunking || file.size > this.options.chunkSize),
        totalChunkCount: Math.ceil(file.size / this.options.chunkSize)
      };
      this.files.push(file);
      file.status = Dropzone.ADDED;
      this.emit("addedfile", file);

      this._enqueueThumbnail(file);

      return this.accept(file, function (error) {
        if (error) {
          file.accepted = false;

          _this7._errorProcessing([file], error); // Will set the file.status

        } else {
          file.accepted = true;

          if (_this7.options.autoQueue) {
            _this7.enqueueFile(file);
          } // Will set .accepted = true

        }

        return _this7._updateMaxFilesReachedClass();
      });
    } // Wrapper for enqueueFile

  }, {
    key: "enqueueFiles",
    value: function enqueueFiles(files) {
      for (var _iterator17 = files, _isArray17 = true, _i18 = 0, _iterator17 = _isArray17 ? _iterator17 : _iterator17[Symbol.iterator]();;) {
        var _ref16;

        if (_isArray17) {
          if (_i18 >= _iterator17.length) break;
          _ref16 = _iterator17[_i18++];
        } else {
          _i18 = _iterator17.next();
          if (_i18.done) break;
          _ref16 = _i18.value;
        }

        var file = _ref16;
        this.enqueueFile(file);
      }

      return null;
    }
  }, {
    key: "enqueueFile",
    value: function enqueueFile(file) {
      var _this8 = this;

      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;

        if (this.options.autoProcessQueue) {
          return setTimeout(function () {
            return _this8.processQueue();
          }, 0); // Deferring the call
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    }
  }, {
    key: "_enqueueThumbnail",
    value: function _enqueueThumbnail(file) {
      var _this9 = this;

      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);

        return setTimeout(function () {
          return _this9._processThumbnailQueue();
        }, 0); // Deferring the call
      }
    }
  }, {
    key: "_processThumbnailQueue",
    value: function _processThumbnailQueue() {
      var _this10 = this;

      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }

      this._processingThumbnail = true;

      var file = this._thumbnailQueue.shift();

      return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, function (dataUrl) {
        _this10.emit("thumbnail", file, dataUrl);

        _this10._processingThumbnail = false;
        return _this10._processThumbnailQueue();
      });
    } // Can be called by the user to remove a file

  }, {
    key: "removeFile",
    value: function removeFile(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }

      this.files = without(this.files, file);
      this.emit("removedfile", file);

      if (this.files.length === 0) {
        return this.emit("reset");
      }
    } // Removes all files that aren't currently processed from the list

  }, {
    key: "removeAllFiles",
    value: function removeAllFiles(cancelIfNecessary) {
      // Create a copy of files since removeFile() changes the @files array.
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }

      for (var _iterator18 = this.files.slice(), _isArray18 = true, _i19 = 0, _iterator18 = _isArray18 ? _iterator18 : _iterator18[Symbol.iterator]();;) {
        var _ref17;

        if (_isArray18) {
          if (_i19 >= _iterator18.length) break;
          _ref17 = _iterator18[_i19++];
        } else {
          _i19 = _iterator18.next();
          if (_i19.done) break;
          _ref17 = _i19.value;
        }

        var file = _ref17;

        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
          this.removeFile(file);
        }
      }

      return null;
    } // Resizes an image before it gets sent to the server. This function is the default behavior of
    // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
    // the resized blob.

  }, {
    key: "resizeImage",
    value: function resizeImage(file, width, height, resizeMethod, callback) {
      var _this11 = this;

      return this.createThumbnail(file, width, height, resizeMethod, true, function (dataUrl, canvas) {
        if (canvas == null) {
          // The image has not been resized
          return callback(file);
        } else {
          var resizeMimeType = _this11.options.resizeMimeType;

          if (resizeMimeType == null) {
            resizeMimeType = file.type;
          }

          var resizedDataURL = canvas.toDataURL(resizeMimeType, _this11.options.resizeQuality);

          if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') {
            // Now add the original EXIF information
            resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
          }

          return callback(Dropzone.dataURItoBlob(resizedDataURL));
        }
      });
    }
  }, {
    key: "createThumbnail",
    value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
      var _this12 = this;

      var fileReader = new FileReader();

      fileReader.onload = function () {
        file.dataURL = fileReader.result; // Don't bother creating a thumbnail for SVG images since they're vector

        if (file.type === "image/svg+xml") {
          if (callback != null) {
            callback(fileReader.result);
          }

          return;
        }

        return _this12.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
      };

      return fileReader.readAsDataURL(file);
    }
  }, {
    key: "createThumbnailFromUrl",
    value: function createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
      var _this13 = this; // Not using `new Image` here because of a bug in latest Chrome versions.
      // See https://github.com/enyo/dropzone/pull/226


      var img = document.createElement("img");

      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }

      img.onload = function () {
        var loadExif = function loadExif(callback) {
          return callback(1);
        };

        if (typeof EXIF !== 'undefined' && EXIF !== null && fixOrientation) {
          loadExif = function loadExif(callback) {
            return EXIF.getData(img, function () {
              return callback(EXIF.getTag(this, 'Orientation'));
            });
          };
        }

        return loadExif(function (orientation) {
          file.width = img.width;
          file.height = img.height;

          var resizeInfo = _this13.options.resize.call(_this13, file, width, height, resizeMethod);

          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          canvas.width = resizeInfo.trgWidth;
          canvas.height = resizeInfo.trgHeight;

          if (orientation > 4) {
            canvas.width = resizeInfo.trgHeight;
            canvas.height = resizeInfo.trgWidth;
          }

          switch (orientation) {
            case 2:
              // horizontal flip
              ctx.translate(canvas.width, 0);
              ctx.scale(-1, 1);
              break;

            case 3:
              // 180° rotate left
              ctx.translate(canvas.width, canvas.height);
              ctx.rotate(Math.PI);
              break;

            case 4:
              // vertical flip
              ctx.translate(0, canvas.height);
              ctx.scale(1, -1);
              break;

            case 5:
              // vertical flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.scale(1, -1);
              break;

            case 6:
              // 90° rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(0, -canvas.width);
              break;

            case 7:
              // horizontal flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(canvas.height, -canvas.width);
              ctx.scale(-1, 1);
              break;

            case 8:
              // 90° rotate left
              ctx.rotate(-0.5 * Math.PI);
              ctx.translate(-canvas.height, 0);
              break;
          } // This is a bugfix for iOS' scaling bug.


          drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
          var thumbnail = canvas.toDataURL("image/png");

          if (callback != null) {
            return callback(thumbnail, canvas);
          }
        });
      };

      if (callback != null) {
        img.onerror = callback;
      }

      return img.src = file.dataURL;
    } // Goes through the queue and processes files if there aren't too many already.

  }, {
    key: "processQueue",
    value: function processQueue() {
      var parallelUploads = this.options.parallelUploads;
      var processingLength = this.getUploadingFiles().length;
      var i = processingLength; // There are already at least as many files uploading than should be

      if (processingLength >= parallelUploads) {
        return;
      }

      var queuedFiles = this.getQueuedFiles();

      if (!(queuedFiles.length > 0)) {
        return;
      }

      if (this.options.uploadMultiple) {
        // The files should be uploaded in one request
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          } // Nothing left to process


          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    } // Wrapper for `processFiles`

  }, {
    key: "processFile",
    value: function processFile(file) {
      return this.processFiles([file]);
    } // Loads the file, then calls finishedLoading()

  }, {
    key: "processFiles",
    value: function processFiles(files) {
      for (var _iterator19 = files, _isArray19 = true, _i20 = 0, _iterator19 = _isArray19 ? _iterator19 : _iterator19[Symbol.iterator]();;) {
        var _ref18;

        if (_isArray19) {
          if (_i20 >= _iterator19.length) break;
          _ref18 = _iterator19[_i20++];
        } else {
          _i20 = _iterator19.next();
          if (_i20.done) break;
          _ref18 = _i20.value;
        }

        var file = _ref18;
        file.processing = true; // Backwards compatibility

        file.status = Dropzone.UPLOADING;
        this.emit("processing", file);
      }

      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }

      return this.uploadFiles(files);
    }
  }, {
    key: "_getFilesWithXhr",
    value: function _getFilesWithXhr(xhr) {
      var files = void 0;
      return files = this.files.filter(function (file) {
        return file.xhr === xhr;
      }).map(function (file) {
        return file;
      });
    } // Cancels the file upload and sets the status to CANCELED
    // **if** the file is actually being uploaded.
    // If it's still in the queue, the file is being removed from it and the status
    // set to CANCELED.

  }, {
    key: "cancelUpload",
    value: function cancelUpload(file) {
      if (file.status === Dropzone.UPLOADING) {
        var groupedFiles = this._getFilesWithXhr(file.xhr);

        for (var _iterator20 = groupedFiles, _isArray20 = true, _i21 = 0, _iterator20 = _isArray20 ? _iterator20 : _iterator20[Symbol.iterator]();;) {
          var _ref19;

          if (_isArray20) {
            if (_i21 >= _iterator20.length) break;
            _ref19 = _iterator20[_i21++];
          } else {
            _i21 = _iterator20.next();
            if (_i21.done) break;
            _ref19 = _i21.value;
          }

          var groupedFile = _ref19;
          groupedFile.status = Dropzone.CANCELED;
        }

        if (typeof file.xhr !== 'undefined') {
          file.xhr.abort();
        }

        for (var _iterator21 = groupedFiles, _isArray21 = true, _i22 = 0, _iterator21 = _isArray21 ? _iterator21 : _iterator21[Symbol.iterator]();;) {
          var _ref20;

          if (_isArray21) {
            if (_i22 >= _iterator21.length) break;
            _ref20 = _iterator21[_i22++];
          } else {
            _i22 = _iterator21.next();
            if (_i22.done) break;
            _ref20 = _i22.value;
          }

          var _groupedFile = _ref20;
          this.emit("canceled", _groupedFile);
        }

        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if (file.status === Dropzone.ADDED || file.status === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);

        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }, {
    key: "resolveOption",
    value: function resolveOption(option) {
      if (typeof option === 'function') {
        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        return option.apply(this, args);
      }

      return option;
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(file) {
      return this.uploadFiles([file]);
    }
  }, {
    key: "uploadFiles",
    value: function uploadFiles(files) {
      var _this14 = this;

      this._transformFiles(files, function (transformedFiles) {
        if (files[0].upload.chunked) {
          // This file should be sent in chunks!
          // If the chunking option is set, we **know** that there can only be **one** file, since
          // uploadMultiple is not allowed with this option.
          var file = files[0];
          var transformedFile = transformedFiles[0];
          var startedChunkCount = 0;
          file.upload.chunks = [];

          var handleNextChunk = function handleNextChunk() {
            var chunkIndex = 0; // Find the next item in file.upload.chunks that is not defined yet.

            while (file.upload.chunks[chunkIndex] !== undefined) {
              chunkIndex++;
            } // This means, that all chunks have already been started.


            if (chunkIndex >= file.upload.totalChunkCount) return;
            startedChunkCount++;
            var start = chunkIndex * _this14.options.chunkSize;
            var end = Math.min(start + _this14.options.chunkSize, file.size);
            var dataBlock = {
              name: _this14._getParamName(0),
              data: transformedFile.webkitSlice ? transformedFile.webkitSlice(start, end) : transformedFile.slice(start, end),
              filename: file.upload.filename,
              chunkIndex: chunkIndex
            };
            file.upload.chunks[chunkIndex] = {
              file: file,
              index: chunkIndex,
              dataBlock: dataBlock,
              // In case we want to retry.
              status: Dropzone.UPLOADING,
              progress: 0,
              retries: 0 // The number of times this block has been retried.

            };

            _this14._uploadData(files, [dataBlock]);
          };

          file.upload.finishedChunkUpload = function (chunk) {
            var allFinished = true;
            chunk.status = Dropzone.SUCCESS; // Clear the data from the chunk

            chunk.dataBlock = null; // Leaving this reference to xhr intact here will cause memory leaks in some browsers

            chunk.xhr = null;

            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              if (file.upload.chunks[i] === undefined) {
                return handleNextChunk();
              }

              if (file.upload.chunks[i].status !== Dropzone.SUCCESS) {
                allFinished = false;
              }
            }

            if (allFinished) {
              _this14.options.chunksUploaded(file, function () {
                _this14._finished(files, '', null);
              });
            }
          };

          if (_this14.options.parallelChunkUploads) {
            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              handleNextChunk();
            }
          } else {
            handleNextChunk();
          }
        } else {
          var dataBlocks = [];

          for (var _i23 = 0; _i23 < files.length; _i23++) {
            dataBlocks[_i23] = {
              name: _this14._getParamName(_i23),
              data: transformedFiles[_i23],
              filename: files[_i23].upload.filename
            };
          }

          _this14._uploadData(files, dataBlocks);
        }
      });
    } /// Returns the right chunk for given file and xhr

  }, {
    key: "_getChunk",
    value: function _getChunk(file, xhr) {
      for (var i = 0; i < file.upload.totalChunkCount; i++) {
        if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) {
          return file.upload.chunks[i];
        }
      }
    } // This function actually uploads the file(s) to the server.
    // If dataBlocks contains the actual data to upload (meaning, that this could either be transformed
    // files, or individual chunks for chunked upload).

  }, {
    key: "_uploadData",
    value: function _uploadData(files, dataBlocks) {
      var _this15 = this;

      var xhr = new XMLHttpRequest(); // Put the xhr object in the file objects to be able to reference it later.

      for (var _iterator22 = files, _isArray22 = true, _i24 = 0, _iterator22 = _isArray22 ? _iterator22 : _iterator22[Symbol.iterator]();;) {
        var _ref21;

        if (_isArray22) {
          if (_i24 >= _iterator22.length) break;
          _ref21 = _iterator22[_i24++];
        } else {
          _i24 = _iterator22.next();
          if (_i24.done) break;
          _ref21 = _i24.value;
        }

        var file = _ref21;
        file.xhr = xhr;
      }

      if (files[0].upload.chunked) {
        // Put the xhr object in the right chunk object, so it can be associated later, and found with _getChunk
        files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
      }

      var method = this.resolveOption(this.options.method, files);
      var url = this.resolveOption(this.options.url, files);
      xhr.open(method, url, true); // Setting the timeout after open because of IE11 issue: https://gitlab.com/meno/dropzone/issues/8

      xhr.timeout = this.resolveOption(this.options.timeout, files); // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179

      xhr.withCredentials = !!this.options.withCredentials;

      xhr.onload = function (e) {
        _this15._finishedUploading(files, xhr, e);
      };

      xhr.onerror = function () {
        _this15._handleUploadError(files, xhr);
      }; // Some browsers do not have the .upload property


      var progressObj = xhr.upload != null ? xhr.upload : xhr;

      progressObj.onprogress = function (e) {
        return _this15._updateFilesUploadProgress(files, xhr, e);
      };

      var headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };

      if (this.options.headers) {
        Dropzone.extend(headers, this.options.headers);
      }

      for (var headerName in headers) {
        var headerValue = headers[headerName];

        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }

      var formData = new FormData(); // Adding all @options parameters

      if (this.options.params) {
        var additionalParams = this.options.params;

        if (typeof additionalParams === 'function') {
          additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
        }

        for (var key in additionalParams) {
          var value = additionalParams[key];
          formData.append(key, value);
        }
      } // Let the user add additional data if necessary


      for (var _iterator23 = files, _isArray23 = true, _i25 = 0, _iterator23 = _isArray23 ? _iterator23 : _iterator23[Symbol.iterator]();;) {
        var _ref22;

        if (_isArray23) {
          if (_i25 >= _iterator23.length) break;
          _ref22 = _iterator23[_i25++];
        } else {
          _i25 = _iterator23.next();
          if (_i25.done) break;
          _ref22 = _i25.value;
        }

        var _file = _ref22;
        this.emit("sending", _file, xhr, formData);
      }

      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }

      this._addFormElementData(formData); // Finally add the files
      // Has to be last because some servers (eg: S3) expect the file to be the last parameter


      for (var i = 0; i < dataBlocks.length; i++) {
        var dataBlock = dataBlocks[i];
        formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
      }

      this.submitRequest(xhr, formData, files);
    } // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.

  }, {
    key: "_transformFiles",
    value: function _transformFiles(files, done) {
      var _this16 = this;

      var transformedFiles = []; // Clumsy way of handling asynchronous calls, until I get to add a proper Future library.

      var doneCounter = 0;

      var _loop = function _loop(i) {
        _this16.options.transformFile.call(_this16, files[i], function (transformedFile) {
          transformedFiles[i] = transformedFile;

          if (++doneCounter === files.length) {
            done(transformedFiles);
          }
        });
      };

      for (var i = 0; i < files.length; i++) {
        _loop(i);
      }
    } // Takes care of adding other input elements of the form to the AJAX request

  }, {
    key: "_addFormElementData",
    value: function _addFormElementData(formData) {
      // Take care of other input elements
      if (this.element.tagName === "FORM") {
        for (var _iterator24 = this.element.querySelectorAll("input, textarea, select, button"), _isArray24 = true, _i26 = 0, _iterator24 = _isArray24 ? _iterator24 : _iterator24[Symbol.iterator]();;) {
          var _ref23;

          if (_isArray24) {
            if (_i26 >= _iterator24.length) break;
            _ref23 = _iterator24[_i26++];
          } else {
            _i26 = _iterator24.next();
            if (_i26.done) break;
            _ref23 = _i26.value;
          }

          var input = _ref23;
          var inputName = input.getAttribute("name");
          var inputType = input.getAttribute("type");
          if (inputType) inputType = inputType.toLowerCase(); // If the input doesn't have a name, we can't use it.

          if (typeof inputName === 'undefined' || inputName === null) continue;

          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
            // Possibly multiple values
            for (var _iterator25 = input.options, _isArray25 = true, _i27 = 0, _iterator25 = _isArray25 ? _iterator25 : _iterator25[Symbol.iterator]();;) {
              var _ref24;

              if (_isArray25) {
                if (_i27 >= _iterator25.length) break;
                _ref24 = _iterator25[_i27++];
              } else {
                _i27 = _iterator25.next();
                if (_i27.done) break;
                _ref24 = _i27.value;
              }

              var option = _ref24;

              if (option.selected) {
                formData.append(inputName, option.value);
              }
            }
          } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) {
            formData.append(inputName, input.value);
          }
        }
      }
    } // Invoked when there is new progress information about given files.
    // If e is not provided, it is assumed that the upload is finished.

  }, {
    key: "_updateFilesUploadProgress",
    value: function _updateFilesUploadProgress(files, xhr, e) {
      var progress = void 0;

      if (typeof e !== 'undefined') {
        progress = 100 * e.loaded / e.total;

        if (files[0].upload.chunked) {
          var file = files[0]; // Since this is a chunked upload, we need to update the appropriate chunk progress.

          var chunk = this._getChunk(file, xhr);

          chunk.progress = progress;
          chunk.total = e.total;
          chunk.bytesSent = e.loaded;
          var fileProgress = 0,
              fileTotal = void 0,
              fileBytesSent = void 0;
          file.upload.progress = 0;
          file.upload.total = 0;
          file.upload.bytesSent = 0;

          for (var i = 0; i < file.upload.totalChunkCount; i++) {
            if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].progress !== undefined) {
              file.upload.progress += file.upload.chunks[i].progress;
              file.upload.total += file.upload.chunks[i].total;
              file.upload.bytesSent += file.upload.chunks[i].bytesSent;
            }
          }

          file.upload.progress = file.upload.progress / file.upload.totalChunkCount;
        } else {
          for (var _iterator26 = files, _isArray26 = true, _i28 = 0, _iterator26 = _isArray26 ? _iterator26 : _iterator26[Symbol.iterator]();;) {
            var _ref25;

            if (_isArray26) {
              if (_i28 >= _iterator26.length) break;
              _ref25 = _iterator26[_i28++];
            } else {
              _i28 = _iterator26.next();
              if (_i28.done) break;
              _ref25 = _i28.value;
            }

            var _file2 = _ref25;
            _file2.upload.progress = progress;
            _file2.upload.total = e.total;
            _file2.upload.bytesSent = e.loaded;
          }
        }

        for (var _iterator27 = files, _isArray27 = true, _i29 = 0, _iterator27 = _isArray27 ? _iterator27 : _iterator27[Symbol.iterator]();;) {
          var _ref26;

          if (_isArray27) {
            if (_i29 >= _iterator27.length) break;
            _ref26 = _iterator27[_i29++];
          } else {
            _i29 = _iterator27.next();
            if (_i29.done) break;
            _ref26 = _i29.value;
          }

          var _file3 = _ref26;
          this.emit("uploadprogress", _file3, _file3.upload.progress, _file3.upload.bytesSent);
        }
      } else {
        // Called when the file finished uploading
        var allFilesFinished = true;
        progress = 100;

        for (var _iterator28 = files, _isArray28 = true, _i30 = 0, _iterator28 = _isArray28 ? _iterator28 : _iterator28[Symbol.iterator]();;) {
          var _ref27;

          if (_isArray28) {
            if (_i30 >= _iterator28.length) break;
            _ref27 = _iterator28[_i30++];
          } else {
            _i30 = _iterator28.next();
            if (_i30.done) break;
            _ref27 = _i30.value;
          }

          var _file4 = _ref27;

          if (_file4.upload.progress !== 100 || _file4.upload.bytesSent !== _file4.upload.total) {
            allFilesFinished = false;
          }

          _file4.upload.progress = progress;
          _file4.upload.bytesSent = _file4.upload.total;
        } // Nothing to do, all files already at 100%


        if (allFilesFinished) {
          return;
        }

        for (var _iterator29 = files, _isArray29 = true, _i31 = 0, _iterator29 = _isArray29 ? _iterator29 : _iterator29[Symbol.iterator]();;) {
          var _ref28;

          if (_isArray29) {
            if (_i31 >= _iterator29.length) break;
            _ref28 = _iterator29[_i31++];
          } else {
            _i31 = _iterator29.next();
            if (_i31.done) break;
            _ref28 = _i31.value;
          }

          var _file5 = _ref28;
          this.emit("uploadprogress", _file5, progress, _file5.upload.bytesSent);
        }
      }
    }
  }, {
    key: "_finishedUploading",
    value: function _finishedUploading(files, xhr, e) {
      var response = void 0;

      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {
        response = xhr.responseText;

        if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
          try {
            response = JSON.parse(response);
          } catch (error) {
            e = error;
            response = "Invalid JSON response from server.";
          }
        }
      }

      this._updateFilesUploadProgress(files);

      if (!(200 <= xhr.status && xhr.status < 300)) {
        this._handleUploadError(files, xhr, response);
      } else {
        if (files[0].upload.chunked) {
          files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr));
        } else {
          this._finished(files, response, e);
        }
      }
    }
  }, {
    key: "_handleUploadError",
    value: function _handleUploadError(files, xhr, response) {
      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (files[0].upload.chunked && this.options.retryChunks) {
        var chunk = this._getChunk(files[0], xhr);

        if (chunk.retries++ < this.options.retryChunksLimit) {
          this._uploadData(files, [chunk.dataBlock]);

          return;
        } else {
          console.warn('Retried this chunk too often. Giving up.');
        }
      }

      for (var _iterator30 = files, _isArray30 = true, _i32 = 0, _iterator30 = _isArray30 ? _iterator30 : _iterator30[Symbol.iterator]();;) {
        var _ref29;

        if (_isArray30) {
          if (_i32 >= _iterator30.length) break;
          _ref29 = _iterator30[_i32++];
        } else {
          _i32 = _iterator30.next();
          if (_i32.done) break;
          _ref29 = _i32.value;
        }

        var file = _ref29;

        this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
      }
    }
  }, {
    key: "submitRequest",
    value: function submitRequest(xhr, formData, files) {
      xhr.send(formData);
    } // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_finished",
    value: function _finished(files, responseText, e) {
      for (var _iterator31 = files, _isArray31 = true, _i33 = 0, _iterator31 = _isArray31 ? _iterator31 : _iterator31[Symbol.iterator]();;) {
        var _ref30;

        if (_isArray31) {
          if (_i33 >= _iterator31.length) break;
          _ref30 = _iterator31[_i33++];
        } else {
          _i33 = _iterator31.next();
          if (_i33.done) break;
          _ref30 = _i33.value;
        }

        var file = _ref30;
        file.status = Dropzone.SUCCESS;
        this.emit("success", file, responseText, e);
        this.emit("complete", file);
      }

      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    } // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_errorProcessing",
    value: function _errorProcessing(files, message, xhr) {
      for (var _iterator32 = files, _isArray32 = true, _i34 = 0, _iterator32 = _isArray32 ? _iterator32 : _iterator32[Symbol.iterator]();;) {
        var _ref31;

        if (_isArray32) {
          if (_i34 >= _iterator32.length) break;
          _ref31 = _iterator32[_i34++];
        } else {
          _i34 = _iterator32.next();
          if (_i34.done) break;
          _ref31 = _i34.value;
        }

        var file = _ref31;
        file.status = Dropzone.ERROR;
        this.emit("error", file, message, xhr);
        this.emit("complete", file);
      }

      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }], [{
    key: "uuidv4",
    value: function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
  }]);

  return Dropzone;
}(Emitter);

Dropzone.initClass();
Dropzone.version = "5.5.1"; // This is a map of options for your different dropzones. Add configurations
// to this object for your different dropzone elemens.
//
// Example:
//
//     Dropzone.options.myDropzoneElementId = { maxFilesize: 1 };
//
// To disable autoDiscover for a specific element, you can set `false` as an option:
//
//     Dropzone.options.myDisabledElementId = false;
//
// And in html:
//
//     <form action="/upload" id="my-dropzone-element-id" class="dropzone"></form>

Dropzone.options = {}; // Returns the options for an element or undefined if none available.

Dropzone.optionsForElement = function (element) {
  // Get the `Dropzone.options.elementId` for this element if it exists
  if (element.getAttribute("id")) {
    return Dropzone.options[camelize(element.getAttribute("id"))];
  } else {
    return undefined;
  }
}; // Holds a list of all dropzone instances


Dropzone.instances = []; // Returns the dropzone for given element if any

Dropzone.forElement = function (element) {
  if (typeof element === "string") {
    element = document.querySelector(element);
  }

  if ((element != null ? element.dropzone : undefined) == null) {
    throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
  }

  return element.dropzone;
}; // Set to false if you don't want Dropzone to automatically find and attach to .dropzone elements.


Dropzone.autoDiscover = true; // Looks for all .dropzone elements and creates a dropzone for them

Dropzone.discover = function () {
  var dropzones = void 0;

  if (document.querySelectorAll) {
    dropzones = document.querySelectorAll(".dropzone");
  } else {
    dropzones = []; // IE :(

    var checkElements = function checkElements(elements) {
      return function () {
        var result = [];

        for (var _iterator33 = elements, _isArray33 = true, _i35 = 0, _iterator33 = _isArray33 ? _iterator33 : _iterator33[Symbol.iterator]();;) {
          var _ref32;

          if (_isArray33) {
            if (_i35 >= _iterator33.length) break;
            _ref32 = _iterator33[_i35++];
          } else {
            _i35 = _iterator33.next();
            if (_i35.done) break;
            _ref32 = _i35.value;
          }

          var el = _ref32;

          if (/(^| )dropzone($| )/.test(el.className)) {
            result.push(dropzones.push(el));
          } else {
            result.push(undefined);
          }
        }

        return result;
      }();
    };

    checkElements(document.getElementsByTagName("div"));
    checkElements(document.getElementsByTagName("form"));
  }

  return function () {
    var result = [];

    for (var _iterator34 = dropzones, _isArray34 = true, _i36 = 0, _iterator34 = _isArray34 ? _iterator34 : _iterator34[Symbol.iterator]();;) {
      var _ref33;

      if (_isArray34) {
        if (_i36 >= _iterator34.length) break;
        _ref33 = _iterator34[_i36++];
      } else {
        _i36 = _iterator34.next();
        if (_i36.done) break;
        _ref33 = _i36.value;
      }

      var dropzone = _ref33; // Create a dropzone unless auto discover has been disabled for specific element

      if (Dropzone.optionsForElement(dropzone) !== false) {
        result.push(new Dropzone(dropzone));
      } else {
        result.push(undefined);
      }
    }

    return result;
  }();
}; // Since the whole Drag'n'Drop API is pretty new, some browsers implement it,
// but not correctly.
// So I created a blacklist of userAgents. Yes, yes. Browser sniffing, I know.
// But what to do when browsers *theoretically* support an API, but crash
// when using it.
//
// This is a list of regular expressions tested against navigator.userAgent
//
// ** It should only be used on browser that *do* support the API, but
// incorrectly **
//


Dropzone.blacklistedBrowsers = [// The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
/opera.*(Macintosh|Windows Phone).*version\/12/i]; // Checks if the browser is supported

Dropzone.isBrowserSupported = function () {
  var capableBrowser = true;

  if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
    if (!("classList" in document.createElement("a"))) {
      capableBrowser = false;
    } else {
      // The browser supports the API, but may be blacklisted.
      for (var _iterator35 = Dropzone.blacklistedBrowsers, _isArray35 = true, _i37 = 0, _iterator35 = _isArray35 ? _iterator35 : _iterator35[Symbol.iterator]();;) {
        var _ref34;

        if (_isArray35) {
          if (_i37 >= _iterator35.length) break;
          _ref34 = _iterator35[_i37++];
        } else {
          _i37 = _iterator35.next();
          if (_i37.done) break;
          _ref34 = _i37.value;
        }

        var regex = _ref34;

        if (regex.test(navigator.userAgent)) {
          capableBrowser = false;
          continue;
        }
      }
    }
  } else {
    capableBrowser = false;
  }

  return capableBrowser;
};

Dropzone.dataURItoBlob = function (dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]); // separate out the mime component

  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to an ArrayBuffer

  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
    ia[i] = byteString.charCodeAt(i);
  } // write the ArrayBuffer to a blob


  return new Blob([ab], {
    type: mimeString
  });
}; // Returns an array without the rejected item


var without = function without(list, rejectedItem) {
  return list.filter(function (item) {
    return item !== rejectedItem;
  }).map(function (item) {
    return item;
  });
}; // abc-def_ghi -> abcDefGhi


var camelize = function camelize(str) {
  return str.replace(/[\-_](\w)/g, function (match) {
    return match.charAt(1).toUpperCase();
  });
}; // Creates an element from string


Dropzone.createElement = function (string) {
  var div = document.createElement("div");
  div.innerHTML = string;
  return div.childNodes[0];
}; // Tests if given element is inside (or simply is) the container


Dropzone.elementInside = function (element, container) {
  if (element === container) {
    return true;
  } // Coffeescript doesn't support do/while loops


  while (element = element.parentNode) {
    if (element === container) {
      return true;
    }
  }

  return false;
};

Dropzone.getElement = function (el, name) {
  var element = void 0;

  if (typeof el === "string") {
    element = document.querySelector(el);
  } else if (el.nodeType != null) {
    element = el;
  }

  if (element == null) {
    throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
  }

  return element;
};

Dropzone.getElements = function (els, name) {
  var el = void 0,
      elements = void 0;

  if (els instanceof Array) {
    elements = [];

    try {
      for (var _iterator36 = els, _isArray36 = true, _i38 = 0, _iterator36 = _isArray36 ? _iterator36 : _iterator36[Symbol.iterator]();;) {
        if (_isArray36) {
          if (_i38 >= _iterator36.length) break;
          el = _iterator36[_i38++];
        } else {
          _i38 = _iterator36.next();
          if (_i38.done) break;
          el = _i38.value;
        }

        elements.push(this.getElement(el, name));
      }
    } catch (e) {
      elements = null;
    }
  } else if (typeof els === "string") {
    elements = [];

    for (var _iterator37 = document.querySelectorAll(els), _isArray37 = true, _i39 = 0, _iterator37 = _isArray37 ? _iterator37 : _iterator37[Symbol.iterator]();;) {
      if (_isArray37) {
        if (_i39 >= _iterator37.length) break;
        el = _iterator37[_i39++];
      } else {
        _i39 = _iterator37.next();
        if (_i39.done) break;
        el = _i39.value;
      }

      elements.push(el);
    }
  } else if (els.nodeType != null) {
    elements = [els];
  }

  if (elements == null || !elements.length) {
    throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
  }

  return elements;
}; // Asks the user the question and calls accepted or rejected accordingly
//
// The default implementation just uses `window.confirm` and then calls the
// appropriate callback.


Dropzone.confirm = function (question, accepted, rejected) {
  if (window.confirm(question)) {
    return accepted();
  } else if (rejected != null) {
    return rejected();
  }
}; // Validates the mime type like this:
//
// https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept


Dropzone.isValidFile = function (file, acceptedFiles) {
  if (!acceptedFiles) {
    return true;
  } // If there are no accepted mime types, it's OK


  acceptedFiles = acceptedFiles.split(",");
  var mimeType = file.type;
  var baseMimeType = mimeType.replace(/\/.*$/, "");

  for (var _iterator38 = acceptedFiles, _isArray38 = true, _i40 = 0, _iterator38 = _isArray38 ? _iterator38 : _iterator38[Symbol.iterator]();;) {
    var _ref35;

    if (_isArray38) {
      if (_i40 >= _iterator38.length) break;
      _ref35 = _iterator38[_i40++];
    } else {
      _i40 = _iterator38.next();
      if (_i40.done) break;
      _ref35 = _i40.value;
    }

    var validType = _ref35;
    validType = validType.trim();

    if (validType.charAt(0) === ".") {
      if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
        return true;
      }
    } else if (/\/\*$/.test(validType)) {
      // This is something like a image/* mime type
      if (baseMimeType === validType.replace(/\/.*$/, "")) {
        return true;
      }
    } else {
      if (mimeType === validType) {
        return true;
      }
    }
  }

  return false;
}; // Augment jQuery


if (typeof jQuery !== 'undefined' && jQuery !== null) {
  jQuery.fn.dropzone = function (options) {
    return this.each(function () {
      return new Dropzone(this, options);
    });
  };
}

if ( true && module !== null) {
  module.exports = Dropzone;
} else {
  window.Dropzone = Dropzone;
} // Dropzone file status codes


Dropzone.ADDED = "added";
Dropzone.QUEUED = "queued"; // For backwards compatibility. Now, if a file is accepted, it's either queued
// or uploading.

Dropzone.ACCEPTED = Dropzone.QUEUED;
Dropzone.UPLOADING = "uploading";
Dropzone.PROCESSING = Dropzone.UPLOADING; // alias

Dropzone.CANCELED = "canceled";
Dropzone.ERROR = "error";
Dropzone.SUCCESS = "success";
/*

 Bugfix for iOS 6 and 7
 Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 based on the work of https://github.com/stomita/ios-imagefile-megapixel

 */
// Detecting vertical squash in loaded image.
// Fixes a bug which squash image vertically while drawing into canvas for some images.
// This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel

var detectVerticalSquash = function detectVerticalSquash(img) {
  var iw = img.naturalWidth;
  var ih = img.naturalHeight;
  var canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = ih;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var _ctx$getImageData = ctx.getImageData(1, 0, 1, ih),
      data = _ctx$getImageData.data; // search image edge pixel position in case it is squashed vertically.


  var sy = 0;
  var ey = ih;
  var py = ih;

  while (py > sy) {
    var alpha = data[(py - 1) * 4 + 3];

    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }

    py = ey + sy >> 1;
  }

  var ratio = py / ih;

  if (ratio === 0) {
    return 1;
  } else {
    return ratio;
  }
}; // A replacement for context.drawImage
// (args are for source and destination).


var drawImageIOSFix = function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
  var vertSquashRatio = detectVerticalSquash(img);
  return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
}; // Based on MinifyJpeg
// Source: http://www.perry.cz/files/ExifRestorer.js
// http://elicon.blog57.fc2.com/blog-entry-206.html


var ExifRestore = function () {
  function ExifRestore() {
    _classCallCheck(this, ExifRestore);
  }

  _createClass(ExifRestore, null, [{
    key: "initClass",
    value: function initClass() {
      this.KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    }
  }, {
    key: "encode64",
    value: function encode64(input) {
      var output = '';
      var chr1 = undefined;
      var chr2 = undefined;
      var chr3 = '';
      var enc1 = undefined;
      var enc2 = undefined;
      var enc3 = undefined;
      var enc4 = '';
      var i = 0;

      while (true) {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }

        output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';

        if (!(i < input.length)) {
          break;
        }
      }

      return output;
    }
  }, {
    key: "restore",
    value: function restore(origFileBase64, resizedFileBase64) {
      if (!origFileBase64.match('data:image/jpeg;base64,')) {
        return resizedFileBase64;
      }

      var rawImage = this.decode64(origFileBase64.replace('data:image/jpeg;base64,', ''));
      var segments = this.slice2Segments(rawImage);
      var image = this.exifManipulation(resizedFileBase64, segments);
      return "data:image/jpeg;base64," + this.encode64(image);
    }
  }, {
    key: "exifManipulation",
    value: function exifManipulation(resizedFileBase64, segments) {
      var exifArray = this.getExifArray(segments);
      var newImageArray = this.insertExif(resizedFileBase64, exifArray);
      var aBuffer = new Uint8Array(newImageArray);
      return aBuffer;
    }
  }, {
    key: "getExifArray",
    value: function getExifArray(segments) {
      var seg = undefined;
      var x = 0;

      while (x < segments.length) {
        seg = segments[x];

        if (seg[0] === 255 & seg[1] === 225) {
          return seg;
        }

        x++;
      }

      return [];
    }
  }, {
    key: "insertExif",
    value: function insertExif(resizedFileBase64, exifArray) {
      var imageData = resizedFileBase64.replace('data:image/jpeg;base64,', '');
      var buf = this.decode64(imageData);
      var separatePoint = buf.indexOf(255, 3);
      var mae = buf.slice(0, separatePoint);
      var ato = buf.slice(separatePoint);
      var array = mae;
      array = array.concat(exifArray);
      array = array.concat(ato);
      return array;
    }
  }, {
    key: "slice2Segments",
    value: function slice2Segments(rawImageArray) {
      var head = 0;
      var segments = [];

      while (true) {
        var length;

        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
          break;
        }

        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
          head += 2;
        } else {
          length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
          var endPoint = head + length + 2;
          var seg = rawImageArray.slice(head, endPoint);
          segments.push(seg);
          head = endPoint;
        }

        if (head > rawImageArray.length) {
          break;
        }
      }

      return segments;
    }
  }, {
    key: "decode64",
    value: function decode64(input) {
      var output = '';
      var chr1 = undefined;
      var chr2 = undefined;
      var chr3 = '';
      var enc1 = undefined;
      var enc2 = undefined;
      var enc3 = undefined;
      var enc4 = '';
      var i = 0;
      var buf = []; // remove all characters that are not A-Z, a-z, 0-9, +, /, or =

      var base64test = /[^A-Za-z0-9\+\/\=]/g;

      if (base64test.exec(input)) {
        console.warn('There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, \'+\', \'/\',and \'=\'\nExpect errors in decoding.');
      }

      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

      while (true) {
        enc1 = this.KEY_STR.indexOf(input.charAt(i++));
        enc2 = this.KEY_STR.indexOf(input.charAt(i++));
        enc3 = this.KEY_STR.indexOf(input.charAt(i++));
        enc4 = this.KEY_STR.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        buf.push(chr1);

        if (enc3 !== 64) {
          buf.push(chr2);
        }

        if (enc4 !== 64) {
          buf.push(chr3);
        }

        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';

        if (!(i < input.length)) {
          break;
        }
      }

      return buf;
    }
  }]);

  return ExifRestore;
}();

ExifRestore.initClass();
/*
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 */
// @win window reference
// @fn function reference

var contentLoaded = function contentLoaded(win, fn) {
  var done = false;
  var top = true;
  var doc = win.document;
  var root = doc.documentElement;
  var add = doc.addEventListener ? "addEventListener" : "attachEvent";
  var rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
  var pre = doc.addEventListener ? "" : "on";

  var init = function init(e) {
    if (e.type === "readystatechange" && doc.readyState !== "complete") {
      return;
    }

    (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);

    if (!done && (done = true)) {
      return fn.call(win, e.type || e);
    }
  };

  var poll = function poll() {
    try {
      root.doScroll("left");
    } catch (e) {
      setTimeout(poll, 50);
      return;
    }

    return init("poll");
  };

  if (doc.readyState !== "complete") {
    if (doc.createEventObject && root.doScroll) {
      try {
        top = !win.frameElement;
      } catch (error) {}

      if (top) {
        poll();
      }
    }

    doc[add](pre + "DOMContentLoaded", init, false);
    doc[add](pre + "readystatechange", init, false);
    return win[add](pre + "load", init, false);
  }
}; // As a single function to be able to write tests.


Dropzone._autoDiscoverFunction = function () {
  if (Dropzone.autoDiscover) {
    return Dropzone.discover();
  }
};

contentLoaded(window, Dropzone._autoDiscoverFunction);

function __guard__(value, transform) {
  return typeof value !== 'undefined' && value !== null ? transform(value) : undefined;
}

function __guardMethod__(obj, methodName, transform) {
  if (typeof obj !== 'undefined' && obj !== null && typeof obj[methodName] === 'function') {
    return transform(obj, methodName);
  } else {
    return undefined;
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/choices.js/public/assets/scripts/choices.js":
/*!******************************************************************!*\
  !*** ./node_modules/choices.js/public/assets/scripts/choices.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! choices.js v9.0.1 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/public/assets/scripts/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 4);
      /******/
    }
    /************************************************************************/

    /******/
    ([
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var isMergeableObject = function isMergeableObject(value) {
        return isNonNullObject(value) && !isSpecial(value);
      };

      function isNonNullObject(value) {
        return !!value && _typeof(value) === 'object';
      }

      function isSpecial(value) {
        var stringValue = Object.prototype.toString.call(value);
        return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
      } // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


      var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

      function isReactElement(value) {
        return value.$$typeof === REACT_ELEMENT_TYPE;
      }

      function emptyTarget(val) {
        return Array.isArray(val) ? [] : {};
      }

      function cloneUnlessOtherwiseSpecified(value, options) {
        return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
      }

      function defaultArrayMerge(target, source, options) {
        return target.concat(source).map(function (element) {
          return cloneUnlessOtherwiseSpecified(element, options);
        });
      }

      function getMergeFunction(key, options) {
        if (!options.customMerge) {
          return deepmerge;
        }

        var customMerge = options.customMerge(key);
        return typeof customMerge === 'function' ? customMerge : deepmerge;
      }

      function getEnumerableOwnPropertySymbols(target) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
          return target.propertyIsEnumerable(symbol);
        }) : [];
      }

      function getKeys(target) {
        return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
      } // Protects from prototype poisoning and unexpected merging up the prototype chain.


      function propertyIsUnsafe(target, key) {
        try {
          return key in target // Properties are safe to merge if they don't exist in the target yet,
          && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
          && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
        } catch (unused) {
          // Counterintuitively, it's safe to merge any property on a target that causes the `in` operator to throw.
          // This happens when trying to copy an object in the source over a plain string in the target.
          return false;
        }
      }

      function mergeObject(target, source, options) {
        var destination = {};

        if (options.isMergeableObject(target)) {
          getKeys(target).forEach(function (key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
          });
        }

        getKeys(source).forEach(function (key) {
          if (propertyIsUnsafe(target, key)) {
            return;
          }

          if (!options.isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
          } else {
            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
          }
        });
        return destination;
      }

      function deepmerge(target, source, options) {
        options = options || {};
        options.arrayMerge = options.arrayMerge || defaultArrayMerge;
        options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
        // implementations can use it. The caller may not replace it.

        options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
        var sourceIsArray = Array.isArray(source);
        var targetIsArray = Array.isArray(target);
        var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

        if (!sourceAndTargetTypesMatch) {
          return cloneUnlessOtherwiseSpecified(source, options);
        } else if (sourceIsArray) {
          return options.arrayMerge(target, source, options);
        } else {
          return mergeObject(target, source, options);
        }
      }

      deepmerge.all = function deepmergeAll(array, options) {
        if (!Array.isArray(array)) {
          throw new Error('first argument should be an array');
        }

        return array.reduce(function (prev, next) {
          return deepmerge(prev, next, options);
        }, {});
      };

      var deepmerge_1 = deepmerge;
      module.exports = deepmerge_1;
      /***/
    },
    /* 1 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (global, module) {
        /* harmony import */
        var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
        /* global window */


        var root;

        if (typeof self !== 'undefined') {
          root = self;
        } else if (typeof window !== 'undefined') {
          root = window;
        } else if (typeof global !== 'undefined') {
          root = global;
        } else if (true) {
          root = module;
        } else {}

        var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[
        /* default */
        "a"])(root);
        /* harmony default export */

        __webpack_exports__["a"] = result;
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(5), __webpack_require__(6)(module));
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      /*!
       * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
       * 
       * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
       * All Rights Reserved. Apache Software License 2.0
       * 
       * http://www.apache.org/licenses/LICENSE-2.0
       */
      !function (e, t) {
        true ? module.exports = t() : undefined;
      }(this, function () {
        return function (e) {
          var t = {};

          function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
              i: r,
              l: !1,
              exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
          }

          return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
              enumerable: !0,
              get: r
            });
          }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module"
            }), Object.defineProperty(e, "__esModule", {
              value: !0
            });
          }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
              enumerable: !0,
              value: e
            }), 2 & t && "string" != typeof e) for (var o in e) {
              n.d(r, o, function (t) {
                return e[t];
              }.bind(null, o));
            }
            return r;
          }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
              return e.default;
            } : function () {
              return e;
            };
            return n.d(t, "a", t), t;
          }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }, n.p = "", n(n.s = 1);
        }([function (e, t) {
          e.exports = function (e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e);
          };
        }, function (e, t, n) {
          function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
              return _typeof(e);
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
            })(e);
          }

          function o(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
          }

          var i = n(2),
              a = n(8),
              s = n(0),
              c = function () {
            function e(t, n) {
              var r = n.location,
                  o = void 0 === r ? 0 : r,
                  i = n.distance,
                  s = void 0 === i ? 100 : i,
                  c = n.threshold,
                  h = void 0 === c ? .6 : c,
                  l = n.maxPatternLength,
                  u = void 0 === l ? 32 : l,
                  f = n.caseSensitive,
                  d = void 0 !== f && f,
                  v = n.tokenSeparator,
                  p = void 0 === v ? / +/g : v,
                  g = n.findAllMatches,
                  y = void 0 !== g && g,
                  m = n.minMatchCharLength,
                  k = void 0 === m ? 1 : m,
                  S = n.id,
                  x = void 0 === S ? null : S,
                  b = n.keys,
                  M = void 0 === b ? [] : b,
                  _ = n.shouldSort,
                  L = void 0 === _ || _,
                  w = n.getFn,
                  A = void 0 === w ? a : w,
                  C = n.sortFn,
                  I = void 0 === C ? function (e, t) {
                return e.score - t.score;
              } : C,
                  O = n.tokenize,
                  j = void 0 !== O && O,
                  P = n.matchAllTokens,
                  F = void 0 !== P && P,
                  T = n.includeMatches,
                  z = void 0 !== T && T,
                  E = n.includeScore,
                  K = void 0 !== E && E,
                  $ = n.verbose,
                  J = void 0 !== $ && $;
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this.options = {
                location: o,
                distance: s,
                threshold: h,
                maxPatternLength: u,
                isCaseSensitive: d,
                tokenSeparator: p,
                findAllMatches: y,
                minMatchCharLength: k,
                id: x,
                keys: M,
                includeMatches: z,
                includeScore: K,
                shouldSort: L,
                getFn: A,
                sortFn: I,
                verbose: J,
                tokenize: j,
                matchAllTokens: F
              }, this.setCollection(t);
            }

            var t, n, c;
            return t = e, (n = [{
              key: "setCollection",
              value: function value(e) {
                return this.list = e, e;
              }
            }, {
              key: "search",
              value: function value(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                  limit: !1
                };

                this._log('---------\nSearch pattern: "'.concat(e, '"'));

                var n = this._prepareSearchers(e),
                    r = n.tokenSearchers,
                    o = n.fullSearcher,
                    i = this._search(r, o),
                    a = i.weights,
                    s = i.results;

                return this._computeScore(a, s), this.options.shouldSort && this._sort(s), t.limit && "number" == typeof t.limit && (s = s.slice(0, t.limit)), this._format(s);
              }
            }, {
              key: "_prepareSearchers",
              value: function value() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = [];
                if (this.options.tokenize) for (var n = e.split(this.options.tokenSeparator), r = 0, o = n.length; r < o; r += 1) {
                  t.push(new i(n[r], this.options));
                }
                return {
                  tokenSearchers: t,
                  fullSearcher: new i(e, this.options)
                };
              }
            }, {
              key: "_search",
              value: function value() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = this.list,
                    r = {},
                    o = [];

                if ("string" == typeof n[0]) {
                  for (var i = 0, a = n.length; i < a; i += 1) {
                    this._analyze({
                      key: "",
                      value: n[i],
                      record: i,
                      index: i
                    }, {
                      resultMap: r,
                      results: o,
                      tokenSearchers: e,
                      fullSearcher: t
                    });
                  }

                  return {
                    weights: null,
                    results: o
                  };
                }

                for (var s = {}, c = 0, h = n.length; c < h; c += 1) {
                  for (var l = n[c], u = 0, f = this.options.keys.length; u < f; u += 1) {
                    var d = this.options.keys[u];

                    if ("string" != typeof d) {
                      if (s[d.name] = {
                        weight: 1 - d.weight || 1
                      }, d.weight <= 0 || d.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");
                      d = d.name;
                    } else s[d] = {
                      weight: 1
                    };

                    this._analyze({
                      key: d,
                      value: this.options.getFn(l, d),
                      record: l,
                      index: c
                    }, {
                      resultMap: r,
                      results: o,
                      tokenSearchers: e,
                      fullSearcher: t
                    });
                  }
                }

                return {
                  weights: s,
                  results: o
                };
              }
            }, {
              key: "_analyze",
              value: function value(e, t) {
                var n = e.key,
                    r = e.arrayIndex,
                    o = void 0 === r ? -1 : r,
                    i = e.value,
                    a = e.record,
                    c = e.index,
                    h = t.tokenSearchers,
                    l = void 0 === h ? [] : h,
                    u = t.fullSearcher,
                    f = void 0 === u ? [] : u,
                    d = t.resultMap,
                    v = void 0 === d ? {} : d,
                    p = t.results,
                    g = void 0 === p ? [] : p;

                if (null != i) {
                  var y = !1,
                      m = -1,
                      k = 0;

                  if ("string" == typeof i) {
                    this._log("\nKey: ".concat("" === n ? "-" : n));

                    var S = f.search(i);

                    if (this._log('Full text: "'.concat(i, '", score: ').concat(S.score)), this.options.tokenize) {
                      for (var x = i.split(this.options.tokenSeparator), b = [], M = 0; M < l.length; M += 1) {
                        var _ = l[M];

                        this._log('\nPattern: "'.concat(_.pattern, '"'));

                        for (var L = !1, w = 0; w < x.length; w += 1) {
                          var A = x[w],
                              C = _.search(A),
                              I = {};

                          C.isMatch ? (I[A] = C.score, y = !0, L = !0, b.push(C.score)) : (I[A] = 1, this.options.matchAllTokens || b.push(1)), this._log('Token: "'.concat(A, '", score: ').concat(I[A]));
                        }

                        L && (k += 1);
                      }

                      m = b[0];

                      for (var O = b.length, j = 1; j < O; j += 1) {
                        m += b[j];
                      }

                      m /= O, this._log("Token score average:", m);
                    }

                    var P = S.score;
                    m > -1 && (P = (P + m) / 2), this._log("Score average:", P);
                    var F = !this.options.tokenize || !this.options.matchAllTokens || k >= l.length;

                    if (this._log("\nCheck Matches: ".concat(F)), (y || S.isMatch) && F) {
                      var T = v[c];
                      T ? T.output.push({
                        key: n,
                        arrayIndex: o,
                        value: i,
                        score: P,
                        matchedIndices: S.matchedIndices
                      }) : (v[c] = {
                        item: a,
                        output: [{
                          key: n,
                          arrayIndex: o,
                          value: i,
                          score: P,
                          matchedIndices: S.matchedIndices
                        }]
                      }, g.push(v[c]));
                    }
                  } else if (s(i)) for (var z = 0, E = i.length; z < E; z += 1) {
                    this._analyze({
                      key: n,
                      arrayIndex: z,
                      value: i[z],
                      record: a,
                      index: c
                    }, {
                      resultMap: v,
                      results: g,
                      tokenSearchers: l,
                      fullSearcher: f
                    });
                  }
                }
              }
            }, {
              key: "_computeScore",
              value: function value(e, t) {
                this._log("\n\nComputing score:\n");

                for (var n = 0, r = t.length; n < r; n += 1) {
                  for (var o = t[n].output, i = o.length, a = 1, s = 1, c = 0; c < i; c += 1) {
                    var h = e ? e[o[c].key].weight : 1,
                        l = (1 === h ? o[c].score : o[c].score || .001) * h;
                    1 !== h ? s = Math.min(s, l) : (o[c].nScore = l, a *= l);
                  }

                  t[n].score = 1 === s ? a : s, this._log(t[n]);
                }
              }
            }, {
              key: "_sort",
              value: function value(e) {
                this._log("\n\nSorting...."), e.sort(this.options.sortFn);
              }
            }, {
              key: "_format",
              value: function value(e) {
                var t = [];

                if (this.options.verbose) {
                  var n = [];
                  this._log("\n\nOutput:\n\n", JSON.stringify(e, function (e, t) {
                    if ("object" === r(t) && null !== t) {
                      if (-1 !== n.indexOf(t)) return;
                      n.push(t);
                    }

                    return t;
                  })), n = null;
                }

                var o = [];
                this.options.includeMatches && o.push(function (e, t) {
                  var n = e.output;
                  t.matches = [];

                  for (var r = 0, o = n.length; r < o; r += 1) {
                    var i = n[r];

                    if (0 !== i.matchedIndices.length) {
                      var a = {
                        indices: i.matchedIndices,
                        value: i.value
                      };
                      i.key && (a.key = i.key), i.hasOwnProperty("arrayIndex") && i.arrayIndex > -1 && (a.arrayIndex = i.arrayIndex), t.matches.push(a);
                    }
                  }
                }), this.options.includeScore && o.push(function (e, t) {
                  t.score = e.score;
                });

                for (var i = 0, a = e.length; i < a; i += 1) {
                  var s = e[i];

                  if (this.options.id && (s.item = this.options.getFn(s.item, this.options.id)[0]), o.length) {
                    for (var c = {
                      item: s.item
                    }, h = 0, l = o.length; h < l; h += 1) {
                      o[h](s, c);
                    }

                    t.push(c);
                  } else t.push(s.item);
                }

                return t;
              }
            }, {
              key: "_log",
              value: function value() {
                var e;
                this.options.verbose && (e = console).log.apply(e, arguments);
              }
            }]) && o(t.prototype, n), c && o(t, c), e;
          }();

          e.exports = c;
        }, function (e, t, n) {
          function r(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
          }

          var o = n(3),
              i = n(4),
              a = n(7),
              s = function () {
            function e(t, n) {
              var r = n.location,
                  o = void 0 === r ? 0 : r,
                  i = n.distance,
                  s = void 0 === i ? 100 : i,
                  c = n.threshold,
                  h = void 0 === c ? .6 : c,
                  l = n.maxPatternLength,
                  u = void 0 === l ? 32 : l,
                  f = n.isCaseSensitive,
                  d = void 0 !== f && f,
                  v = n.tokenSeparator,
                  p = void 0 === v ? / +/g : v,
                  g = n.findAllMatches,
                  y = void 0 !== g && g,
                  m = n.minMatchCharLength,
                  k = void 0 === m ? 1 : m;
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this.options = {
                location: o,
                distance: s,
                threshold: h,
                maxPatternLength: u,
                isCaseSensitive: d,
                tokenSeparator: p,
                findAllMatches: y,
                minMatchCharLength: k
              }, this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase(), this.pattern.length <= u && (this.patternAlphabet = a(this.pattern));
            }

            var t, n, s;
            return t = e, (n = [{
              key: "search",
              value: function value(e) {
                if (this.options.isCaseSensitive || (e = e.toLowerCase()), this.pattern === e) return {
                  isMatch: !0,
                  score: 0,
                  matchedIndices: [[0, e.length - 1]]
                };
                var t = this.options,
                    n = t.maxPatternLength,
                    r = t.tokenSeparator;
                if (this.pattern.length > n) return o(e, this.pattern, r);
                var a = this.options,
                    s = a.location,
                    c = a.distance,
                    h = a.threshold,
                    l = a.findAllMatches,
                    u = a.minMatchCharLength;
                return i(e, this.pattern, this.patternAlphabet, {
                  location: s,
                  distance: c,
                  threshold: h,
                  findAllMatches: l,
                  minMatchCharLength: u
                });
              }
            }]) && r(t.prototype, n), s && r(t, s), e;
          }();

          e.exports = s;
        }, function (e, t) {
          var n = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

          e.exports = function (e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g,
                o = new RegExp(t.replace(n, "\\$&").replace(r, "|")),
                i = e.match(o),
                a = !!i,
                s = [];
            if (a) for (var c = 0, h = i.length; c < h; c += 1) {
              var l = i[c];
              s.push([e.indexOf(l), l.length - 1]);
            }
            return {
              score: a ? .5 : 1,
              isMatch: a,
              matchedIndices: s
            };
          };
        }, function (e, t, n) {
          var r = n(5),
              o = n(6);

          e.exports = function (e, t, n, i) {
            for (var a = i.location, s = void 0 === a ? 0 : a, c = i.distance, h = void 0 === c ? 100 : c, l = i.threshold, u = void 0 === l ? .6 : l, f = i.findAllMatches, d = void 0 !== f && f, v = i.minMatchCharLength, p = void 0 === v ? 1 : v, g = s, y = e.length, m = u, k = e.indexOf(t, g), S = t.length, x = [], b = 0; b < y; b += 1) {
              x[b] = 0;
            }

            if (-1 !== k) {
              var M = r(t, {
                errors: 0,
                currentLocation: k,
                expectedLocation: g,
                distance: h
              });

              if (m = Math.min(M, m), -1 !== (k = e.lastIndexOf(t, g + S))) {
                var _ = r(t, {
                  errors: 0,
                  currentLocation: k,
                  expectedLocation: g,
                  distance: h
                });

                m = Math.min(_, m);
              }
            }

            k = -1;

            for (var L = [], w = 1, A = S + y, C = 1 << S - 1, I = 0; I < S; I += 1) {
              for (var O = 0, j = A; O < j;) {
                r(t, {
                  errors: I,
                  currentLocation: g + j,
                  expectedLocation: g,
                  distance: h
                }) <= m ? O = j : A = j, j = Math.floor((A - O) / 2 + O);
              }

              A = j;
              var P = Math.max(1, g - j + 1),
                  F = d ? y : Math.min(g + j, y) + S,
                  T = Array(F + 2);
              T[F + 1] = (1 << I) - 1;

              for (var z = F; z >= P; z -= 1) {
                var E = z - 1,
                    K = n[e.charAt(E)];

                if (K && (x[E] = 1), T[z] = (T[z + 1] << 1 | 1) & K, 0 !== I && (T[z] |= (L[z + 1] | L[z]) << 1 | 1 | L[z + 1]), T[z] & C && (w = r(t, {
                  errors: I,
                  currentLocation: E,
                  expectedLocation: g,
                  distance: h
                })) <= m) {
                  if (m = w, (k = E) <= g) break;
                  P = Math.max(1, 2 * g - k);
                }
              }

              if (r(t, {
                errors: I + 1,
                currentLocation: g,
                expectedLocation: g,
                distance: h
              }) > m) break;
              L = T;
            }

            return {
              isMatch: k >= 0,
              score: 0 === w ? .001 : w,
              matchedIndices: o(x, p)
            };
          };
        }, function (e, t) {
          e.exports = function (e, t) {
            var n = t.errors,
                r = void 0 === n ? 0 : n,
                o = t.currentLocation,
                i = void 0 === o ? 0 : o,
                a = t.expectedLocation,
                s = void 0 === a ? 0 : a,
                c = t.distance,
                h = void 0 === c ? 100 : c,
                l = r / e.length,
                u = Math.abs(s - i);
            return h ? l + u / h : u ? 1 : l;
          };
        }, function (e, t) {
          e.exports = function () {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = [], r = -1, o = -1, i = 0, a = e.length; i < a; i += 1) {
              var s = e[i];
              s && -1 === r ? r = i : s || -1 === r || ((o = i - 1) - r + 1 >= t && n.push([r, o]), r = -1);
            }

            return e[i - 1] && i - r >= t && n.push([r, i - 1]), n;
          };
        }, function (e, t) {
          e.exports = function (e) {
            for (var t = {}, n = e.length, r = 0; r < n; r += 1) {
              t[e.charAt(r)] = 0;
            }

            for (var o = 0; o < n; o += 1) {
              t[e.charAt(o)] |= 1 << n - o - 1;
            }

            return t;
          };
        }, function (e, t, n) {
          var r = n(0);

          e.exports = function (e, t) {
            return function e(t, n, o) {
              if (n) {
                var i = n.indexOf("."),
                    a = n,
                    s = null;
                -1 !== i && (a = n.slice(0, i), s = n.slice(i + 1));
                var c = t[a];
                if (null != c) if (s || "string" != typeof c && "number" != typeof c) {
                  if (r(c)) for (var h = 0, l = c.length; h < l; h += 1) {
                    e(c[h], s, o);
                  } else s && e(c, s, o);
                } else o.push(c.toString());
              } else o.push(t);

              return o;
            }(e, t, []);
          };
        }]);
      });
      /***/
    },
    /* 3 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */

      __webpack_require__.d(__webpack_exports__, "a", function () {
        return symbolObservablePonyfill;
      });

      function symbolObservablePonyfill(root) {
        var result;
        var _Symbol = root.Symbol;

        if (typeof _Symbol === 'function') {
          if (_Symbol.observable) {
            result = _Symbol.observable;
          } else {
            result = _Symbol('observable');
            _Symbol.observable = result;
          }
        } else {
          result = '@@observable';
        }

        return result;
      }

      ;
      /***/
    },
    /* 4 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__(7);
      /***/
    },
    /* 5 */

    /***/
    function (module, exports) {
      var g; // This works in non-strict mode

      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || new Function("return this")();
      } catch (e) {
        // This works if the window reference is available
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
      } // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}


      module.exports = g;
      /***/
    },
    /* 6 */

    /***/
    function (module, exports) {
      module.exports = function (originalModule) {
        if (!originalModule.webpackPolyfill) {
          var module = Object.create(originalModule); // module.parent = undefined by default

          if (!module.children) module.children = [];
          Object.defineProperty(module, "loaded", {
            enumerable: true,
            get: function get() {
              return module.l;
            }
          });
          Object.defineProperty(module, "id", {
            enumerable: true,
            get: function get() {
              return module.i;
            }
          });
          Object.defineProperty(module, "exports", {
            enumerable: true
          });
          module.webpackPolyfill = 1;
        }

        return module;
      };
      /***/

    },
    /* 7 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); // EXTERNAL MODULE: ./node_modules/fuse.js/dist/fuse.js


      var dist_fuse = __webpack_require__(2);

      var fuse_default = /*#__PURE__*/__webpack_require__.n(dist_fuse); // EXTERNAL MODULE: ./node_modules/deepmerge/dist/cjs.js


      var cjs = __webpack_require__(0);

      var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs); // EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js


      var es = __webpack_require__(1); // CONCATENATED MODULE: ./node_modules/redux/es/redux.js

      /**
       * These are private action types reserved by Redux.
       * For any unknown actions, you must return the current state.
       * If the current state is undefined, you must return the initial state.
       * Do not reference these action types directly in your code.
       */


      var randomString = function randomString() {
        return Math.random().toString(36).substring(7).split('').join('.');
      };

      var ActionTypes = {
        INIT: "@@redux/INIT" + randomString(),
        REPLACE: "@@redux/REPLACE" + randomString(),
        PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
          return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
        }
      };
      /**
       * @param {any} obj The object to inspect.
       * @returns {boolean} True if the argument appears to be a plain object.
       */

      function isPlainObject(obj) {
        if (_typeof(obj) !== 'object' || obj === null) return false;
        var proto = obj;

        while (Object.getPrototypeOf(proto) !== null) {
          proto = Object.getPrototypeOf(proto);
        }

        return Object.getPrototypeOf(obj) === proto;
      }
      /**
       * Creates a Redux store that holds the state tree.
       * The only way to change the data in the store is to call `dispatch()` on it.
       *
       * There should only be a single store in your app. To specify how different
       * parts of the state tree respond to actions, you may combine several reducers
       * into a single reducer function by using `combineReducers`.
       *
       * @param {Function} reducer A function that returns the next state tree, given
       * the current state tree and the action to handle.
       *
       * @param {any} [preloadedState] The initial state. You may optionally specify it
       * to hydrate the state from the server in universal apps, or to restore a
       * previously serialized user session.
       * If you use `combineReducers` to produce the root reducer function, this must be
       * an object with the same shape as `combineReducers` keys.
       *
       * @param {Function} [enhancer] The store enhancer. You may optionally specify it
       * to enhance the store with third-party capabilities such as middleware,
       * time travel, persistence, etc. The only store enhancer that ships with Redux
       * is `applyMiddleware()`.
       *
       * @returns {Store} A Redux store that lets you read the state, dispatch actions
       * and subscribe to changes.
       */


      function createStore(reducer, preloadedState, enhancer) {
        var _ref2;

        if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
          throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
        }

        if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
          enhancer = preloadedState;
          preloadedState = undefined;
        }

        if (typeof enhancer !== 'undefined') {
          if (typeof enhancer !== 'function') {
            throw new Error('Expected the enhancer to be a function.');
          }

          return enhancer(createStore)(reducer, preloadedState);
        }

        if (typeof reducer !== 'function') {
          throw new Error('Expected the reducer to be a function.');
        }

        var currentReducer = reducer;
        var currentState = preloadedState;
        var currentListeners = [];
        var nextListeners = currentListeners;
        var isDispatching = false;
        /**
         * This makes a shallow copy of currentListeners so we can use
         * nextListeners as a temporary list while dispatching.
         *
         * This prevents any bugs around consumers calling
         * subscribe/unsubscribe in the middle of a dispatch.
         */

        function ensureCanMutateNextListeners() {
          if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
          }
        }
        /**
         * Reads the state tree managed by the store.
         *
         * @returns {any} The current state tree of your application.
         */


        function getState() {
          if (isDispatching) {
            throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
          }

          return currentState;
        }
        /**
         * Adds a change listener. It will be called any time an action is dispatched,
         * and some part of the state tree may potentially have changed. You may then
         * call `getState()` to read the current state tree inside the callback.
         *
         * You may call `dispatch()` from a change listener, with the following
         * caveats:
         *
         * 1. The subscriptions are snapshotted just before every `dispatch()` call.
         * If you subscribe or unsubscribe while the listeners are being invoked, this
         * will not have any effect on the `dispatch()` that is currently in progress.
         * However, the next `dispatch()` call, whether nested or not, will use a more
         * recent snapshot of the subscription list.
         *
         * 2. The listener should not expect to see all state changes, as the state
         * might have been updated multiple times during a nested `dispatch()` before
         * the listener is called. It is, however, guaranteed that all subscribers
         * registered before the `dispatch()` started will be called with the latest
         * state by the time it exits.
         *
         * @param {Function} listener A callback to be invoked on every dispatch.
         * @returns {Function} A function to remove this change listener.
         */


        function subscribe(listener) {
          if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.');
          }

          if (isDispatching) {
            throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
          }

          var isSubscribed = true;
          ensureCanMutateNextListeners();
          nextListeners.push(listener);
          return function unsubscribe() {
            if (!isSubscribed) {
              return;
            }

            if (isDispatching) {
              throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
            }

            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
          };
        }
        /**
         * Dispatches an action. It is the only way to trigger a state change.
         *
         * The `reducer` function, used to create the store, will be called with the
         * current state tree and the given `action`. Its return value will
         * be considered the **next** state of the tree, and the change listeners
         * will be notified.
         *
         * The base implementation only supports plain object actions. If you want to
         * dispatch a Promise, an Observable, a thunk, or something else, you need to
         * wrap your store creating function into the corresponding middleware. For
         * example, see the documentation for the `redux-thunk` package. Even the
         * middleware will eventually dispatch plain object actions using this method.
         *
         * @param {Object} action A plain object representing “what changed”. It is
         * a good idea to keep actions serializable so you can record and replay user
         * sessions, or use the time travelling `redux-devtools`. An action must have
         * a `type` property which may not be `undefined`. It is a good idea to use
         * string constants for action types.
         *
         * @returns {Object} For convenience, the same action object you dispatched.
         *
         * Note that, if you use a custom middleware, it may wrap `dispatch()` to
         * return something else (for example, a Promise you can await).
         */


        function dispatch(action) {
          if (!isPlainObject(action)) {
            throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
          }

          if (typeof action.type === 'undefined') {
            throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
          }

          if (isDispatching) {
            throw new Error('Reducers may not dispatch actions.');
          }

          try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
          } finally {
            isDispatching = false;
          }

          var listeners = currentListeners = nextListeners;

          for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            listener();
          }

          return action;
        }
        /**
         * Replaces the reducer currently used by the store to calculate the state.
         *
         * You might need this if your app implements code splitting and you want to
         * load some of the reducers dynamically. You might also need this if you
         * implement a hot reloading mechanism for Redux.
         *
         * @param {Function} nextReducer The reducer for the store to use instead.
         * @returns {void}
         */


        function replaceReducer(nextReducer) {
          if (typeof nextReducer !== 'function') {
            throw new Error('Expected the nextReducer to be a function.');
          }

          currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
          // Any reducers that existed in both the new and old rootReducer
          // will receive the previous state. This effectively populates
          // the new state tree with any relevant data from the old one.

          dispatch({
            type: ActionTypes.REPLACE
          });
        }
        /**
         * Interoperability point for observable/reactive libraries.
         * @returns {observable} A minimal observable of state changes.
         * For more information, see the observable proposal:
         * https://github.com/tc39/proposal-observable
         */


        function observable() {
          var _ref;

          var outerSubscribe = subscribe;
          return _ref = {
            /**
             * The minimal observable subscription method.
             * @param {Object} observer Any object that can be used as an observer.
             * The observer object should have a `next` method.
             * @returns {subscription} An object with an `unsubscribe` method that can
             * be used to unsubscribe the observable from the store, and prevent further
             * emission of values from the observable.
             */
            subscribe: function subscribe(observer) {
              if (_typeof(observer) !== 'object' || observer === null) {
                throw new TypeError('Expected the observer to be an object.');
              }

              function observeState() {
                if (observer.next) {
                  observer.next(getState());
                }
              }

              observeState();
              var unsubscribe = outerSubscribe(observeState);
              return {
                unsubscribe: unsubscribe
              };
            }
          }, _ref[es["a"
          /* default */
          ]] = function () {
            return this;
          }, _ref;
        } // When a store is created, an "INIT" action is dispatched so that every
        // reducer returns their initial state. This effectively populates
        // the initial state tree.


        dispatch({
          type: ActionTypes.INIT
        });
        return _ref2 = {
          dispatch: dispatch,
          subscribe: subscribe,
          getState: getState,
          replaceReducer: replaceReducer
        }, _ref2[es["a"
        /* default */
        ]] = observable, _ref2;
      }
      /**
       * Prints a warning in the console if it exists.
       *
       * @param {String} message The warning message.
       * @returns {void}
       */


      function warning(message) {
        /* eslint-disable no-console */
        if (typeof console !== 'undefined' && typeof console.error === 'function') {
          console.error(message);
        }
        /* eslint-enable no-console */


        try {
          // This error was thrown as a convenience so that if you enable
          // "break on all exceptions" in your console,
          // it would pause the execution at this line.
          throw new Error(message);
        } catch (e) {} // eslint-disable-line no-empty

      }

      function getUndefinedStateErrorMessage(key, action) {
        var actionType = action && action.type;
        var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
        return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
      }

      function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
        var reducerKeys = Object.keys(reducers);
        var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

        if (reducerKeys.length === 0) {
          return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
        }

        if (!isPlainObject(inputState)) {
          return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
        }

        var unexpectedKeys = Object.keys(inputState).filter(function (key) {
          return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
        });
        unexpectedKeys.forEach(function (key) {
          unexpectedKeyCache[key] = true;
        });
        if (action && action.type === ActionTypes.REPLACE) return;

        if (unexpectedKeys.length > 0) {
          return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
        }
      }

      function assertReducerShape(reducers) {
        Object.keys(reducers).forEach(function (key) {
          var reducer = reducers[key];
          var initialState = reducer(undefined, {
            type: ActionTypes.INIT
          });

          if (typeof initialState === 'undefined') {
            throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
          }

          if (typeof reducer(undefined, {
            type: ActionTypes.PROBE_UNKNOWN_ACTION()
          }) === 'undefined') {
            throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
          }
        });
      }
      /**
       * Turns an object whose values are different reducer functions, into a single
       * reducer function. It will call every child reducer, and gather their results
       * into a single state object, whose keys correspond to the keys of the passed
       * reducer functions.
       *
       * @param {Object} reducers An object whose values correspond to different
       * reducer functions that need to be combined into one. One handy way to obtain
       * it is to use ES6 `import * as reducers` syntax. The reducers may never return
       * undefined for any action. Instead, they should return their initial state
       * if the state passed to them was undefined, and the current state for any
       * unrecognized action.
       *
       * @returns {Function} A reducer function that invokes every reducer inside the
       * passed object, and builds a state object with the same shape.
       */


      function combineReducers(reducers) {
        var reducerKeys = Object.keys(reducers);
        var finalReducers = {};

        for (var i = 0; i < reducerKeys.length; i++) {
          var key = reducerKeys[i];

          if (false) {}

          if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
          }
        }

        var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
        // keys multiple times.

        var unexpectedKeyCache;

        if (false) {}

        var shapeAssertionError;

        try {
          assertReducerShape(finalReducers);
        } catch (e) {
          shapeAssertionError = e;
        }

        return function combination(state, action) {
          if (state === void 0) {
            state = {};
          }

          if (shapeAssertionError) {
            throw shapeAssertionError;
          }

          if (false) { var warningMessage; }

          var hasChanged = false;
          var nextState = {};

          for (var _i = 0; _i < finalReducerKeys.length; _i++) {
            var _key = finalReducerKeys[_i];
            var reducer = finalReducers[_key];
            var previousStateForKey = state[_key];
            var nextStateForKey = reducer(previousStateForKey, action);

            if (typeof nextStateForKey === 'undefined') {
              var errorMessage = getUndefinedStateErrorMessage(_key, action);
              throw new Error(errorMessage);
            }

            nextState[_key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
          }

          return hasChanged ? nextState : state;
        };
      }

      function bindActionCreator(actionCreator, dispatch) {
        return function () {
          return dispatch(actionCreator.apply(this, arguments));
        };
      }
      /**
       * Turns an object whose values are action creators, into an object with the
       * same keys, but with every function wrapped into a `dispatch` call so they
       * may be invoked directly. This is just a convenience method, as you can call
       * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
       *
       * For convenience, you can also pass an action creator as the first argument,
       * and get a dispatch wrapped function in return.
       *
       * @param {Function|Object} actionCreators An object whose values are action
       * creator functions. One handy way to obtain it is to use ES6 `import * as`
       * syntax. You may also pass a single function.
       *
       * @param {Function} dispatch The `dispatch` function available on your Redux
       * store.
       *
       * @returns {Function|Object} The object mimicking the original object, but with
       * every action creator wrapped into the `dispatch` call. If you passed a
       * function as `actionCreators`, the return value will also be a single
       * function.
       */


      function bindActionCreators(actionCreators, dispatch) {
        if (typeof actionCreators === 'function') {
          return bindActionCreator(actionCreators, dispatch);
        }

        if (_typeof(actionCreators) !== 'object' || actionCreators === null) {
          throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : _typeof(actionCreators)) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
        }

        var boundActionCreators = {};

        for (var key in actionCreators) {
          var actionCreator = actionCreators[key];

          if (typeof actionCreator === 'function') {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
          }
        }

        return boundActionCreators;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
          keys.push.apply(keys, Object.getOwnPropertySymbols(object));
        }

        if (enumerableOnly) keys = keys.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        return keys;
      }

      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};

          if (i % 2) {
            ownKeys(source, true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(source).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }

        return target;
      }
      /**
       * Composes single-argument functions from right to left. The rightmost
       * function can take multiple arguments as it provides the signature for
       * the resulting composite function.
       *
       * @param {...Function} funcs The functions to compose.
       * @returns {Function} A function obtained by composing the argument functions
       * from right to left. For example, compose(f, g, h) is identical to doing
       * (...args) => f(g(h(...args))).
       */


      function compose() {
        for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
          funcs[_key] = arguments[_key];
        }

        if (funcs.length === 0) {
          return function (arg) {
            return arg;
          };
        }

        if (funcs.length === 1) {
          return funcs[0];
        }

        return funcs.reduce(function (a, b) {
          return function () {
            return a(b.apply(void 0, arguments));
          };
        });
      }
      /**
       * Creates a store enhancer that applies middleware to the dispatch method
       * of the Redux store. This is handy for a variety of tasks, such as expressing
       * asynchronous actions in a concise manner, or logging every action payload.
       *
       * See `redux-thunk` package as an example of the Redux middleware.
       *
       * Because middleware is potentially asynchronous, this should be the first
       * store enhancer in the composition chain.
       *
       * Note that each middleware will be given the `dispatch` and `getState` functions
       * as named arguments.
       *
       * @param {...Function} middlewares The middleware chain to be applied.
       * @returns {Function} A store enhancer applying the middleware.
       */


      function applyMiddleware() {
        for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
          middlewares[_key] = arguments[_key];
        }

        return function (createStore) {
          return function () {
            var store = createStore.apply(void 0, arguments);

            var _dispatch = function dispatch() {
              throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
            };

            var middlewareAPI = {
              getState: store.getState,
              dispatch: function dispatch() {
                return _dispatch.apply(void 0, arguments);
              }
            };
            var chain = middlewares.map(function (middleware) {
              return middleware(middlewareAPI);
            });
            _dispatch = compose.apply(void 0, chain)(store.dispatch);
            return _objectSpread2({}, store, {
              dispatch: _dispatch
            });
          };
        };
      }
      /*
       * This is a dummy function to check if the function name has been altered by minification.
       * If the function has been minified and NODE_ENV !== 'production', warn the user.
       */


      function isCrushed() {}

      if (false) {} // CONCATENATED MODULE: ./src/scripts/reducers/items.js


      var defaultState = [];

      function items_items(state, action) {
        if (state === void 0) {
          state = defaultState;
        }

        switch (action.type) {
          case 'ADD_ITEM':
            {
              // Add object to items array
              var newState = [].concat(state, [{
                id: action.id,
                choiceId: action.choiceId,
                groupId: action.groupId,
                value: action.value,
                label: action.label,
                active: true,
                highlighted: false,
                customProperties: action.customProperties,
                placeholder: action.placeholder || false,
                keyCode: null
              }]);
              return newState.map(function (obj) {
                var item = obj;
                item.highlighted = false;
                return item;
              });
            }

          case 'REMOVE_ITEM':
            {
              // Set item to inactive
              return state.map(function (obj) {
                var item = obj;

                if (item.id === action.id) {
                  item.active = false;
                }

                return item;
              });
            }

          case 'HIGHLIGHT_ITEM':
            {
              return state.map(function (obj) {
                var item = obj;

                if (item.id === action.id) {
                  item.highlighted = action.highlighted;
                }

                return item;
              });
            }

          default:
            {
              return state;
            }
        }
      } // CONCATENATED MODULE: ./src/scripts/reducers/groups.js


      var groups_defaultState = [];

      function groups(state, action) {
        if (state === void 0) {
          state = groups_defaultState;
        }

        switch (action.type) {
          case 'ADD_GROUP':
            {
              return [].concat(state, [{
                id: action.id,
                value: action.value,
                active: action.active,
                disabled: action.disabled
              }]);
            }

          case 'CLEAR_CHOICES':
            {
              return [];
            }

          default:
            {
              return state;
            }
        }
      } // CONCATENATED MODULE: ./src/scripts/reducers/choices.js


      var choices_defaultState = [];

      function choices_choices(state, action) {
        if (state === void 0) {
          state = choices_defaultState;
        }

        switch (action.type) {
          case 'ADD_CHOICE':
            {
              /*
                  A disabled choice appears in the choice dropdown but cannot be selected
                  A selected choice has been added to the passed input's value (added as an item)
                  An active choice appears within the choice dropdown
               */
              return [].concat(state, [{
                id: action.id,
                elementId: action.elementId,
                groupId: action.groupId,
                value: action.value,
                label: action.label || action.value,
                disabled: action.disabled || false,
                selected: false,
                active: true,
                score: 9999,
                customProperties: action.customProperties,
                placeholder: action.placeholder || false,
                keyCode: null
              }]);
            }

          case 'ADD_ITEM':
            {
              // If all choices need to be activated
              if (action.activateOptions) {
                return state.map(function (obj) {
                  var choice = obj;
                  choice.active = action.active;
                  return choice;
                });
              } // When an item is added and it has an associated choice,
              // we want to disable it so it can't be chosen again


              if (action.choiceId > -1) {
                return state.map(function (obj) {
                  var choice = obj;

                  if (choice.id === parseInt(action.choiceId, 10)) {
                    choice.selected = true;
                  }

                  return choice;
                });
              }

              return state;
            }

          case 'REMOVE_ITEM':
            {
              // When an item is removed and it has an associated choice,
              // we want to re-enable it so it can be chosen again
              if (action.choiceId > -1) {
                return state.map(function (obj) {
                  var choice = obj;

                  if (choice.id === parseInt(action.choiceId, 10)) {
                    choice.selected = false;
                  }

                  return choice;
                });
              }

              return state;
            }

          case 'FILTER_CHOICES':
            {
              return state.map(function (obj) {
                var choice = obj; // Set active state based on whether choice is
                // within filtered results

                choice.active = action.results.some(function (_ref) {
                  var item = _ref.item,
                      score = _ref.score;

                  if (item.id === choice.id) {
                    choice.score = score;
                    return true;
                  }

                  return false;
                });
                return choice;
              });
            }

          case 'ACTIVATE_CHOICES':
            {
              return state.map(function (obj) {
                var choice = obj;
                choice.active = action.active;
                return choice;
              });
            }

          case 'CLEAR_CHOICES':
            {
              return choices_defaultState;
            }

          default:
            {
              return state;
            }
        }
      } // CONCATENATED MODULE: ./src/scripts/reducers/general.js


      var general_defaultState = {
        loading: false
      };

      var general = function general(state, action) {
        if (state === void 0) {
          state = general_defaultState;
        }

        switch (action.type) {
          case 'SET_IS_LOADING':
            {
              return {
                loading: action.isLoading
              };
            }

          default:
            {
              return state;
            }
        }
      };
      /* harmony default export */


      var reducers_general = general; // CONCATENATED MODULE: ./src/scripts/lib/utils.js

      /**
       * @param {number} min
       * @param {number} max
       * @returns {number}
       */

      var getRandomNumber = function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      };
      /**
       * @param {number} length
       * @returns {string}
       */


      var generateChars = function generateChars(length) {
        return Array.from({
          length: length
        }, function () {
          return getRandomNumber(0, 36).toString(36);
        }).join('');
      };
      /**
       * @param {HTMLInputElement | HTMLSelectElement} element
       * @param {string} prefix
       * @returns {string}
       */


      var generateId = function generateId(element, prefix) {
        var id = element.id || element.name && element.name + "-" + generateChars(2) || generateChars(4);
        id = id.replace(/(:|\.|\[|\]|,)/g, '');
        id = prefix + "-" + id;
        return id;
      };
      /**
       * @param {any} obj
       * @returns {string}
       */


      var getType = function getType(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1);
      };
      /**
       * @param {string} type
       * @param {any} obj
       * @returns {boolean}
       */


      var isType = function isType(type, obj) {
        return obj !== undefined && obj !== null && getType(obj) === type;
      };
      /**
       * @param {HTMLElement} element
       * @param {HTMLElement} [wrapper={HTMLDivElement}]
       * @returns {HTMLElement}
       */


      var utils_wrap = function wrap(element, wrapper) {
        if (wrapper === void 0) {
          wrapper = document.createElement('div');
        }

        if (element.nextSibling) {
          element.parentNode.insertBefore(wrapper, element.nextSibling);
        } else {
          element.parentNode.appendChild(wrapper);
        }

        return wrapper.appendChild(element);
      };
      /**
       * @param {Element} startEl
       * @param {string} selector
       * @param {1 | -1} direction
       * @returns {Element | undefined}
       */


      var getAdjacentEl = function getAdjacentEl(startEl, selector, direction) {
        if (direction === void 0) {
          direction = 1;
        }

        if (!(startEl instanceof Element) || typeof selector !== 'string') {
          return undefined;
        }

        var prop = (direction > 0 ? 'next' : 'previous') + "ElementSibling";
        var sibling = startEl[prop];

        while (sibling) {
          if (sibling.matches(selector)) {
            return sibling;
          }

          sibling = sibling[prop];
        }

        return sibling;
      };
      /**
       * @param {Element} element
       * @param {Element} parent
       * @param {-1 | 1} direction
       * @returns {boolean}
       */


      var isScrolledIntoView = function isScrolledIntoView(element, parent, direction) {
        if (direction === void 0) {
          direction = 1;
        }

        if (!element) {
          return false;
        }

        var isVisible;

        if (direction > 0) {
          // In view from bottom
          isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
        } else {
          // In view from top
          isVisible = element.offsetTop >= parent.scrollTop;
        }

        return isVisible;
      };
      /**
       * @param {any} value
       * @returns {any}
       */


      var sanitise = function sanitise(value) {
        if (typeof value !== 'string') {
          return value;
        }

        return value.replace(/&/g, '&amp;').replace(/>/g, '&rt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
      };
      /**
       * @returns {() => (str: string) => Element}
       */


      var strToEl = function () {
        var tmpEl = document.createElement('div');
        return function (str) {
          var cleanedInput = str.trim();
          tmpEl.innerHTML = cleanedInput;
          var firldChild = tmpEl.children[0];

          while (tmpEl.firstChild) {
            tmpEl.removeChild(tmpEl.firstChild);
          }

          return firldChild;
        };
      }();
      /**
       * @param {{ label?: string, value: string }} a
       * @param {{ label?: string, value: string }} b
       * @returns {number}
       */


      var sortByAlpha = function sortByAlpha(_ref, _ref2) {
        var value = _ref.value,
            _ref$label = _ref.label,
            label = _ref$label === void 0 ? value : _ref$label;
        var value2 = _ref2.value,
            _ref2$label = _ref2.label,
            label2 = _ref2$label === void 0 ? value2 : _ref2$label;
        return label.localeCompare(label2, [], {
          sensitivity: 'base',
          ignorePunctuation: true,
          numeric: true
        });
      };
      /**
       * @param {{ score: number }} a
       * @param {{ score: number }} b
       */


      var sortByScore = function sortByScore(a, b) {
        return a.score - b.score;
      };
      /**
       * @param {HTMLElement} element
       * @param {string} type
       * @param {object} customArgs
       */


      var dispatchEvent = function dispatchEvent(element, type, customArgs) {
        if (customArgs === void 0) {
          customArgs = null;
        }

        var event = new CustomEvent(type, {
          detail: customArgs,
          bubbles: true,
          cancelable: true
        });
        return element.dispatchEvent(event);
      };
      /**
       * @param {array} array
       * @param {any} value
       * @param {string} [key="value"]
       * @returns {boolean}
       */


      var existsInArray = function existsInArray(array, value, key) {
        if (key === void 0) {
          key = 'value';
        }

        return array.some(function (item) {
          if (typeof value === 'string') {
            return item[key] === value.trim();
          }

          return item[key] === value;
        });
      };
      /**
       * @param {any} obj
       * @returns {any}
       */


      var cloneObject = function cloneObject(obj) {
        return JSON.parse(JSON.stringify(obj));
      };
      /**
       * Returns an array of keys present on the first but missing on the second object
       * @param {object} a
       * @param {object} b
       * @returns {string[]}
       */


      var diff = function diff(a, b) {
        var aKeys = Object.keys(a).sort();
        var bKeys = Object.keys(b).sort();
        return aKeys.filter(function (i) {
          return bKeys.indexOf(i) < 0;
        });
      }; // CONCATENATED MODULE: ./src/scripts/reducers/index.js


      var appReducer = combineReducers({
        items: items_items,
        groups: groups,
        choices: choices_choices,
        general: reducers_general
      });

      var reducers_rootReducer = function rootReducer(passedState, action) {
        var state = passedState; // If we are clearing all items, groups and options we reassign
        // state and then pass that state to our proper reducer. This isn't
        // mutating our actual state
        // See: http://stackoverflow.com/a/35641992

        if (action.type === 'CLEAR_ALL') {
          state = undefined;
        } else if (action.type === 'RESET_TO') {
          return cloneObject(action.state);
        }

        return appReducer(state, action);
      };
      /* harmony default export */


      var reducers = reducers_rootReducer; // CONCATENATED MODULE: ./src/scripts/store/store.js

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      /**
       * @typedef {import('../../../types/index').Choices.Choice} Choice
       * @typedef {import('../../../types/index').Choices.Group} Group
       * @typedef {import('../../../types/index').Choices.Item} Item
       */


      var store_Store = /*#__PURE__*/function () {
        function Store() {
          this._store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        }
        /**
         * Subscribe store to function call (wrapped Redux method)
         * @param  {Function} onChange Function to trigger when state changes
         * @return
         */


        var _proto = Store.prototype;

        _proto.subscribe = function subscribe(onChange) {
          this._store.subscribe(onChange);
        }
        /**
         * Dispatch event to store (wrapped Redux method)
         * @param  {{ type: string, [x: string]: any }} action Action to trigger
         * @return
         */
        ;

        _proto.dispatch = function dispatch(action) {
          this._store.dispatch(action);
        }
        /**
         * Get store object (wrapping Redux method)
         * @returns {object} State
         */
        ;
        /**
         * Get loading state from store
         * @returns {boolean} Loading State
         */


        _proto.isLoading = function isLoading() {
          return this.state.general.loading;
        }
        /**
         * Get single choice by it's ID
         * @param {string} id
         * @returns {Choice | undefined} Found choice
         */
        ;

        _proto.getChoiceById = function getChoiceById(id) {
          return this.activeChoices.find(function (choice) {
            return choice.id === parseInt(id, 10);
          });
        }
        /**
         * Get group by group id
         * @param  {number} id Group ID
         * @returns {Group | undefined} Group data
         */
        ;

        _proto.getGroupById = function getGroupById(id) {
          return this.groups.find(function (group) {
            return group.id === id;
          });
        };

        _createClass(Store, [{
          key: "state",
          get: function get() {
            return this._store.getState();
          }
          /**
           * Get items from store
           * @returns {Item[]} Item objects
           */

        }, {
          key: "items",
          get: function get() {
            return this.state.items;
          }
          /**
           * Get active items from store
           * @returns {Item[]} Item objects
           */

        }, {
          key: "activeItems",
          get: function get() {
            return this.items.filter(function (item) {
              return item.active === true;
            });
          }
          /**
           * Get highlighted items from store
           * @returns {Item[]} Item objects
           */

        }, {
          key: "highlightedActiveItems",
          get: function get() {
            return this.items.filter(function (item) {
              return item.active && item.highlighted;
            });
          }
          /**
           * Get choices from store
           * @returns {Choice[]} Option objects
           */

        }, {
          key: "choices",
          get: function get() {
            return this.state.choices;
          }
          /**
           * Get active choices from store
           * @returns {Choice[]} Option objects
           */

        }, {
          key: "activeChoices",
          get: function get() {
            return this.choices.filter(function (choice) {
              return choice.active === true;
            });
          }
          /**
           * Get selectable choices from store
           * @returns {Choice[]} Option objects
           */

        }, {
          key: "selectableChoices",
          get: function get() {
            return this.choices.filter(function (choice) {
              return choice.disabled !== true;
            });
          }
          /**
           * Get choices that can be searched (excluding placeholders)
           * @returns {Choice[]} Option objects
           */

        }, {
          key: "searchableChoices",
          get: function get() {
            return this.selectableChoices.filter(function (choice) {
              return choice.placeholder !== true;
            });
          }
          /**
           * Get placeholder choice from store
           * @returns {Choice | undefined} Found placeholder
           */

        }, {
          key: "placeholderChoice",
          get: function get() {
            return [].concat(this.choices).reverse().find(function (choice) {
              return choice.placeholder === true;
            });
          }
          /**
           * Get groups from store
           * @returns {Group[]} Group objects
           */

        }, {
          key: "groups",
          get: function get() {
            return this.state.groups;
          }
          /**
           * Get active groups from store
           * @returns {Group[]} Group objects
           */

        }, {
          key: "activeGroups",
          get: function get() {
            var groups = this.groups,
                choices = this.choices;
            return groups.filter(function (group) {
              var isActive = group.active === true && group.disabled === false;
              var hasActiveOptions = choices.some(function (choice) {
                return choice.active === true && choice.disabled === false;
              });
              return isActive && hasActiveOptions;
            }, []);
          }
        }]);

        return Store;
      }(); // CONCATENATED MODULE: ./src/scripts/components/dropdown.js


      function dropdown_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function dropdown_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) dropdown_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) dropdown_defineProperties(Constructor, staticProps);
        return Constructor;
      }
      /**
       * @typedef {import('../../../types/index').Choices.passedElement} passedElement
       * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
       */


      var Dropdown = /*#__PURE__*/function () {
        /**
         * @param {{
         *  element: HTMLElement,
         *  type: passedElement['type'],
         *  classNames: ClassNames,
         * }} args
         */
        function Dropdown(_ref) {
          var element = _ref.element,
              type = _ref.type,
              classNames = _ref.classNames;
          this.element = element;
          this.classNames = classNames;
          this.type = type;
          this.isActive = false;
        }
        /**
         * Bottom position of dropdown in viewport coordinates
         * @returns {number} Vertical position
         */


        var _proto = Dropdown.prototype;
        /**
         * Find element that matches passed selector
         * @param {string} selector
         * @returns {HTMLElement | null}
         */

        _proto.getChild = function getChild(selector) {
          return this.element.querySelector(selector);
        }
        /**
         * Show dropdown to user by adding active state class
         * @returns {this}
         */
        ;

        _proto.show = function show() {
          this.element.classList.add(this.classNames.activeState);
          this.element.setAttribute('aria-expanded', 'true');
          this.isActive = true;
          return this;
        }
        /**
         * Hide dropdown from user
         * @returns {this}
         */
        ;

        _proto.hide = function hide() {
          this.element.classList.remove(this.classNames.activeState);
          this.element.setAttribute('aria-expanded', 'false');
          this.isActive = false;
          return this;
        };

        dropdown_createClass(Dropdown, [{
          key: "distanceFromTopWindow",
          get: function get() {
            return this.element.getBoundingClientRect().bottom;
          }
        }]);
        return Dropdown;
      }(); // CONCATENATED MODULE: ./src/scripts/constants.js

      /**
       * @typedef {import('../../types/index').Choices.ClassNames} ClassNames
       * @typedef {import('../../types/index').Choices.Options} Options
       */

      /** @type {ClassNames} */


      var DEFAULT_CLASSNAMES = {
        containerOuter: 'choices',
        containerInner: 'choices__inner',
        input: 'choices__input',
        inputCloned: 'choices__input--cloned',
        list: 'choices__list',
        listItems: 'choices__list--multiple',
        listSingle: 'choices__list--single',
        listDropdown: 'choices__list--dropdown',
        item: 'choices__item',
        itemSelectable: 'choices__item--selectable',
        itemDisabled: 'choices__item--disabled',
        itemChoice: 'choices__item--choice',
        placeholder: 'choices__placeholder',
        group: 'choices__group',
        groupHeading: 'choices__heading',
        button: 'choices__button',
        activeState: 'is-active',
        focusState: 'is-focused',
        openState: 'is-open',
        disabledState: 'is-disabled',
        highlightedState: 'is-highlighted',
        selectedState: 'is-selected',
        flippedState: 'is-flipped',
        loadingState: 'is-loading',
        noResults: 'has-no-results',
        noChoices: 'has-no-choices'
      };
      /** @type {Options} */

      var DEFAULT_CONFIG = {
        items: [],
        choices: [],
        silent: false,
        renderChoiceLimit: -1,
        maxItemCount: -1,
        addItems: true,
        addItemFilter: null,
        removeItems: true,
        removeItemButton: false,
        editItems: false,
        duplicateItemsAllowed: true,
        delimiter: ',',
        paste: true,
        searchEnabled: true,
        searchChoices: true,
        searchFloor: 1,
        searchResultLimit: 4,
        searchFields: ['label', 'value'],
        position: 'auto',
        resetScrollPosition: true,
        shouldSort: true,
        shouldSortItems: false,
        sorter: sortByAlpha,
        placeholder: true,
        placeholderValue: null,
        searchPlaceholderValue: null,
        prependValue: null,
        appendValue: null,
        renderSelectedChoices: 'auto',
        loadingText: 'Loading...',
        noResultsText: 'No results found',
        noChoicesText: 'No choices to choose from',
        itemSelectText: 'Press to select',
        uniqueItemText: 'Only unique values can be added',
        customAddItemText: 'Only values matching specific conditions can be added',
        addItemText: function addItemText(value) {
          return "Press Enter to add <b>\"" + sanitise(value) + "\"</b>";
        },
        maxItemText: function maxItemText(maxItemCount) {
          return "Only " + maxItemCount + " values can be added";
        },
        valueComparer: function valueComparer(value1, value2) {
          return value1 === value2;
        },
        fuseOptions: {
          includeScore: true
        },
        callbackOnInit: null,
        callbackOnCreateTemplates: null,
        classNames: DEFAULT_CLASSNAMES
      };
      var EVENTS = {
        showDropdown: 'showDropdown',
        hideDropdown: 'hideDropdown',
        change: 'change',
        choice: 'choice',
        search: 'search',
        addItem: 'addItem',
        removeItem: 'removeItem',
        highlightItem: 'highlightItem',
        highlightChoice: 'highlightChoice'
      };
      var ACTION_TYPES = {
        ADD_CHOICE: 'ADD_CHOICE',
        FILTER_CHOICES: 'FILTER_CHOICES',
        ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
        CLEAR_CHOICES: 'CLEAR_CHOICES',
        ADD_GROUP: 'ADD_GROUP',
        ADD_ITEM: 'ADD_ITEM',
        REMOVE_ITEM: 'REMOVE_ITEM',
        HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM',
        CLEAR_ALL: 'CLEAR_ALL'
      };
      var KEY_CODES = {
        BACK_KEY: 46,
        DELETE_KEY: 8,
        ENTER_KEY: 13,
        A_KEY: 65,
        ESC_KEY: 27,
        UP_KEY: 38,
        DOWN_KEY: 40,
        PAGE_UP_KEY: 33,
        PAGE_DOWN_KEY: 34
      };
      var TEXT_TYPE = 'text';
      var SELECT_ONE_TYPE = 'select-one';
      var SELECT_MULTIPLE_TYPE = 'select-multiple';
      var SCROLLING_SPEED = 4; // CONCATENATED MODULE: ./src/scripts/components/container.js

      /**
       * @typedef {import('../../../types/index').Choices.passedElement} passedElement
       * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
       */

      var container_Container = /*#__PURE__*/function () {
        /**
         * @param {{
         *  element: HTMLElement,
         *  type: passedElement['type'],
         *  classNames: ClassNames,
         *  position
         * }} args
         */
        function Container(_ref) {
          var element = _ref.element,
              type = _ref.type,
              classNames = _ref.classNames,
              position = _ref.position;
          this.element = element;
          this.classNames = classNames;
          this.type = type;
          this.position = position;
          this.isOpen = false;
          this.isFlipped = false;
          this.isFocussed = false;
          this.isDisabled = false;
          this.isLoading = false;
          this._onFocus = this._onFocus.bind(this);
          this._onBlur = this._onBlur.bind(this);
        }

        var _proto = Container.prototype;

        _proto.addEventListeners = function addEventListeners() {
          this.element.addEventListener('focus', this._onFocus);
          this.element.addEventListener('blur', this._onBlur);
        };

        _proto.removeEventListeners = function removeEventListeners() {
          this.element.removeEventListener('focus', this._onFocus);
          this.element.removeEventListener('blur', this._onBlur);
        }
        /**
         * Determine whether container should be flipped based on passed
         * dropdown position
         * @param {number} dropdownPos
         * @returns {boolean}
         */
        ;

        _proto.shouldFlip = function shouldFlip(dropdownPos) {
          if (typeof dropdownPos !== 'number') {
            return false;
          } // If flip is enabled and the dropdown bottom position is
          // greater than the window height flip the dropdown.


          var shouldFlip = false;

          if (this.position === 'auto') {
            shouldFlip = !window.matchMedia("(min-height: " + (dropdownPos + 1) + "px)").matches;
          } else if (this.position === 'top') {
            shouldFlip = true;
          }

          return shouldFlip;
        }
        /**
         * @param {string} activeDescendantID
         */
        ;

        _proto.setActiveDescendant = function setActiveDescendant(activeDescendantID) {
          this.element.setAttribute('aria-activedescendant', activeDescendantID);
        };

        _proto.removeActiveDescendant = function removeActiveDescendant() {
          this.element.removeAttribute('aria-activedescendant');
        }
        /**
         * @param {number} dropdownPos
         */
        ;

        _proto.open = function open(dropdownPos) {
          this.element.classList.add(this.classNames.openState);
          this.element.setAttribute('aria-expanded', 'true');
          this.isOpen = true;

          if (this.shouldFlip(dropdownPos)) {
            this.element.classList.add(this.classNames.flippedState);
            this.isFlipped = true;
          }
        };

        _proto.close = function close() {
          this.element.classList.remove(this.classNames.openState);
          this.element.setAttribute('aria-expanded', 'false');
          this.removeActiveDescendant();
          this.isOpen = false; // A dropdown flips if it does not have space within the page

          if (this.isFlipped) {
            this.element.classList.remove(this.classNames.flippedState);
            this.isFlipped = false;
          }
        };

        _proto.focus = function focus() {
          if (!this.isFocussed) {
            this.element.focus();
          }
        };

        _proto.addFocusState = function addFocusState() {
          this.element.classList.add(this.classNames.focusState);
        };

        _proto.removeFocusState = function removeFocusState() {
          this.element.classList.remove(this.classNames.focusState);
        };

        _proto.enable = function enable() {
          this.element.classList.remove(this.classNames.disabledState);
          this.element.removeAttribute('aria-disabled');

          if (this.type === SELECT_ONE_TYPE) {
            this.element.setAttribute('tabindex', '0');
          }

          this.isDisabled = false;
        };

        _proto.disable = function disable() {
          this.element.classList.add(this.classNames.disabledState);
          this.element.setAttribute('aria-disabled', 'true');

          if (this.type === SELECT_ONE_TYPE) {
            this.element.setAttribute('tabindex', '-1');
          }

          this.isDisabled = true;
        }
        /**
         * @param {HTMLElement} element
         */
        ;

        _proto.wrap = function wrap(element) {
          utils_wrap(element, this.element);
        }
        /**
         * @param {Element} element
         */
        ;

        _proto.unwrap = function unwrap(element) {
          // Move passed element outside this element
          this.element.parentNode.insertBefore(element, this.element); // Remove this element

          this.element.parentNode.removeChild(this.element);
        };

        _proto.addLoadingState = function addLoadingState() {
          this.element.classList.add(this.classNames.loadingState);
          this.element.setAttribute('aria-busy', 'true');
          this.isLoading = true;
        };

        _proto.removeLoadingState = function removeLoadingState() {
          this.element.classList.remove(this.classNames.loadingState);
          this.element.removeAttribute('aria-busy');
          this.isLoading = false;
        };

        _proto._onFocus = function _onFocus() {
          this.isFocussed = true;
        };

        _proto._onBlur = function _onBlur() {
          this.isFocussed = false;
        };

        return Container;
      }(); // CONCATENATED MODULE: ./src/scripts/components/input.js


      function input_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function input_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) input_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) input_defineProperties(Constructor, staticProps);
        return Constructor;
      }
      /**
       * @typedef {import('../../../types/index').Choices.passedElement} passedElement
       * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
       */


      var input_Input = /*#__PURE__*/function () {
        /**
         * @param {{
         *  element: HTMLInputElement,
         *  type: passedElement['type'],
         *  classNames: ClassNames,
         *  preventPaste: boolean
         * }} args
         */
        function Input(_ref) {
          var element = _ref.element,
              type = _ref.type,
              classNames = _ref.classNames,
              preventPaste = _ref.preventPaste;
          this.element = element;
          this.type = type;
          this.classNames = classNames;
          this.preventPaste = preventPaste;
          this.isFocussed = this.element === document.activeElement;
          this.isDisabled = element.disabled;
          this._onPaste = this._onPaste.bind(this);
          this._onInput = this._onInput.bind(this);
          this._onFocus = this._onFocus.bind(this);
          this._onBlur = this._onBlur.bind(this);
        }
        /**
         * @param {string} placeholder
         */


        var _proto = Input.prototype;

        _proto.addEventListeners = function addEventListeners() {
          this.element.addEventListener('paste', this._onPaste);
          this.element.addEventListener('input', this._onInput, {
            passive: true
          });
          this.element.addEventListener('focus', this._onFocus, {
            passive: true
          });
          this.element.addEventListener('blur', this._onBlur, {
            passive: true
          });
        };

        _proto.removeEventListeners = function removeEventListeners() {
          this.element.removeEventListener('input', this._onInput, {
            passive: true
          });
          this.element.removeEventListener('paste', this._onPaste);
          this.element.removeEventListener('focus', this._onFocus, {
            passive: true
          });
          this.element.removeEventListener('blur', this._onBlur, {
            passive: true
          });
        };

        _proto.enable = function enable() {
          this.element.removeAttribute('disabled');
          this.isDisabled = false;
        };

        _proto.disable = function disable() {
          this.element.setAttribute('disabled', '');
          this.isDisabled = true;
        };

        _proto.focus = function focus() {
          if (!this.isFocussed) {
            this.element.focus();
          }
        };

        _proto.blur = function blur() {
          if (this.isFocussed) {
            this.element.blur();
          }
        }
        /**
         * Set value of input to blank
         * @param {boolean} setWidth
         * @returns {this}
         */
        ;

        _proto.clear = function clear(setWidth) {
          if (setWidth === void 0) {
            setWidth = true;
          }

          if (this.element.value) {
            this.element.value = '';
          }

          if (setWidth) {
            this.setWidth();
          }

          return this;
        }
        /**
         * Set the correct input width based on placeholder
         * value or input value
         */
        ;

        _proto.setWidth = function setWidth() {
          // Resize input to contents or placeholder
          var _this$element = this.element,
              style = _this$element.style,
              value = _this$element.value,
              placeholder = _this$element.placeholder;
          style.minWidth = placeholder.length + 1 + "ch";
          style.width = value.length + 1 + "ch";
        }
        /**
         * @param {string} activeDescendantID
         */
        ;

        _proto.setActiveDescendant = function setActiveDescendant(activeDescendantID) {
          this.element.setAttribute('aria-activedescendant', activeDescendantID);
        };

        _proto.removeActiveDescendant = function removeActiveDescendant() {
          this.element.removeAttribute('aria-activedescendant');
        };

        _proto._onInput = function _onInput() {
          if (this.type !== SELECT_ONE_TYPE) {
            this.setWidth();
          }
        }
        /**
         * @param {Event} event
         */
        ;

        _proto._onPaste = function _onPaste(event) {
          if (this.preventPaste) {
            event.preventDefault();
          }
        };

        _proto._onFocus = function _onFocus() {
          this.isFocussed = true;
        };

        _proto._onBlur = function _onBlur() {
          this.isFocussed = false;
        };

        input_createClass(Input, [{
          key: "placeholder",
          set: function set(placeholder) {
            this.element.placeholder = placeholder;
          }
          /**
           * @returns {string}
           */

        }, {
          key: "value",
          get: function get() {
            return sanitise(this.element.value);
          }
          /**
           * @param {string} value
           */
          ,
          set: function set(value) {
            this.element.value = value;
          }
        }]);
        return Input;
      }(); // CONCATENATED MODULE: ./src/scripts/components/list.js

      /**
       * @typedef {import('../../../types/index').Choices.Choice} Choice
       */


      var list_List = /*#__PURE__*/function () {
        /**
         * @param {{ element: HTMLElement }} args
         */
        function List(_ref) {
          var element = _ref.element;
          this.element = element;
          this.scrollPos = this.element.scrollTop;
          this.height = this.element.offsetHeight;
        }

        var _proto = List.prototype;

        _proto.clear = function clear() {
          this.element.innerHTML = '';
        }
        /**
         * @param {Element | DocumentFragment} node
         */
        ;

        _proto.append = function append(node) {
          this.element.appendChild(node);
        }
        /**
         * @param {string} selector
         * @returns {Element | null}
         */
        ;

        _proto.getChild = function getChild(selector) {
          return this.element.querySelector(selector);
        }
        /**
         * @returns {boolean}
         */
        ;

        _proto.hasChildren = function hasChildren() {
          return this.element.hasChildNodes();
        };

        _proto.scrollToTop = function scrollToTop() {
          this.element.scrollTop = 0;
        }
        /**
         * @param {Element} element
         * @param {1 | -1} direction
         */
        ;

        _proto.scrollToChildElement = function scrollToChildElement(element, direction) {
          var _this = this;

          if (!element) {
            return;
          }

          var listHeight = this.element.offsetHeight; // Scroll position of dropdown

          var listScrollPosition = this.element.scrollTop + listHeight;
          var elementHeight = element.offsetHeight; // Distance from bottom of element to top of parent

          var elementPos = element.offsetTop + elementHeight; // Difference between the element and scroll position

          var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
          requestAnimationFrame(function () {
            _this._animateScroll(destination, direction);
          });
        }
        /**
         * @param {number} scrollPos
         * @param {number} strength
         * @param {number} destination
         */
        ;

        _proto._scrollDown = function _scrollDown(scrollPos, strength, destination) {
          var easing = (destination - scrollPos) / strength;
          var distance = easing > 1 ? easing : 1;
          this.element.scrollTop = scrollPos + distance;
        }
        /**
         * @param {number} scrollPos
         * @param {number} strength
         * @param {number} destination
         */
        ;

        _proto._scrollUp = function _scrollUp(scrollPos, strength, destination) {
          var easing = (scrollPos - destination) / strength;
          var distance = easing > 1 ? easing : 1;
          this.element.scrollTop = scrollPos - distance;
        }
        /**
         * @param {*} destination
         * @param {*} direction
         */
        ;

        _proto._animateScroll = function _animateScroll(destination, direction) {
          var _this2 = this;

          var strength = SCROLLING_SPEED;
          var choiceListScrollTop = this.element.scrollTop;
          var continueAnimation = false;

          if (direction > 0) {
            this._scrollDown(choiceListScrollTop, strength, destination);

            if (choiceListScrollTop < destination) {
              continueAnimation = true;
            }
          } else {
            this._scrollUp(choiceListScrollTop, strength, destination);

            if (choiceListScrollTop > destination) {
              continueAnimation = true;
            }
          }

          if (continueAnimation) {
            requestAnimationFrame(function () {
              _this2._animateScroll(destination, direction);
            });
          }
        };

        return List;
      }(); // CONCATENATED MODULE: ./src/scripts/components/wrapped-element.js


      function wrapped_element_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function wrapped_element_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) wrapped_element_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) wrapped_element_defineProperties(Constructor, staticProps);
        return Constructor;
      }
      /**
       * @typedef {import('../../../types/index').Choices.passedElement} passedElement
       * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
       */


      var wrapped_element_WrappedElement = /*#__PURE__*/function () {
        /**
         * @param {{
         *  element: HTMLInputElement | HTMLSelectElement,
         *  classNames: ClassNames,
         * }} args
         */
        function WrappedElement(_ref) {
          var element = _ref.element,
              classNames = _ref.classNames;
          this.element = element;
          this.classNames = classNames;

          if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) {
            throw new TypeError('Invalid element passed');
          }

          this.isDisabled = false;
        }

        var _proto = WrappedElement.prototype;

        _proto.conceal = function conceal() {
          // Hide passed input
          this.element.classList.add(this.classNames.input);
          this.element.hidden = true; // Remove element from tab index

          this.element.tabIndex = -1; // Backup original styles if any

          var origStyle = this.element.getAttribute('style');

          if (origStyle) {
            this.element.setAttribute('data-choice-orig-style', origStyle);
          }

          this.element.setAttribute('data-choice', 'active');
        };

        _proto.reveal = function reveal() {
          // Reinstate passed element
          this.element.classList.remove(this.classNames.input);
          this.element.hidden = false;
          this.element.removeAttribute('tabindex'); // Recover original styles if any

          var origStyle = this.element.getAttribute('data-choice-orig-style');

          if (origStyle) {
            this.element.removeAttribute('data-choice-orig-style');
            this.element.setAttribute('style', origStyle);
          } else {
            this.element.removeAttribute('style');
          }

          this.element.removeAttribute('data-choice'); // Re-assign values - this is weird, I know
          // @todo Figure out why we need to do this

          this.element.value = this.element.value; // eslint-disable-line no-self-assign
        };

        _proto.enable = function enable() {
          this.element.removeAttribute('disabled');
          this.element.disabled = false;
          this.isDisabled = false;
        };

        _proto.disable = function disable() {
          this.element.setAttribute('disabled', '');
          this.element.disabled = true;
          this.isDisabled = true;
        };

        _proto.triggerEvent = function triggerEvent(eventType, data) {
          dispatchEvent(this.element, eventType, data);
        };

        wrapped_element_createClass(WrappedElement, [{
          key: "isActive",
          get: function get() {
            return this.element.dataset.choice === 'active';
          }
        }, {
          key: "dir",
          get: function get() {
            return this.element.dir;
          }
        }, {
          key: "value",
          get: function get() {
            return this.element.value;
          },
          set: function set(value) {
            // you must define setter here otherwise it will be readonly property
            this.element.value = value;
          }
        }]);
        return WrappedElement;
      }(); // CONCATENATED MODULE: ./src/scripts/components/wrapped-input.js


      function wrapped_input_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function wrapped_input_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) wrapped_input_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) wrapped_input_defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }
      /**
       * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
       * @typedef {import('../../../types/index').Choices.Item} Item
       */


      var WrappedInput = /*#__PURE__*/function (_WrappedElement) {
        _inheritsLoose(WrappedInput, _WrappedElement);
        /**
         * @param {{
         *  element: HTMLInputElement,
         *  classNames: ClassNames,
         *  delimiter: string
         * }} args
         */


        function WrappedInput(_ref) {
          var _this;

          var element = _ref.element,
              classNames = _ref.classNames,
              delimiter = _ref.delimiter;
          _this = _WrappedElement.call(this, {
            element: element,
            classNames: classNames
          }) || this;
          _this.delimiter = delimiter;
          return _this;
        }
        /**
         * @returns {string}
         */


        wrapped_input_createClass(WrappedInput, [{
          key: "value",
          get: function get() {
            return this.element.value;
          }
          /**
           * @param {Item[]} items
           */
          ,
          set: function set(items) {
            var itemValues = items.map(function (_ref2) {
              var value = _ref2.value;
              return value;
            });
            var joinedValues = itemValues.join(this.delimiter);
            this.element.setAttribute('value', joinedValues);
            this.element.value = joinedValues;
          }
        }]);
        return WrappedInput;
      }(wrapped_element_WrappedElement); // CONCATENATED MODULE: ./src/scripts/components/wrapped-select.js


      function wrapped_select_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function wrapped_select_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) wrapped_select_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) wrapped_select_defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function wrapped_select_inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }
      /**
       * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
       * @typedef {import('../../../types/index').Choices.Item} Item
       * @typedef {import('../../../types/index').Choices.Choice} Choice
       */


      var WrappedSelect = /*#__PURE__*/function (_WrappedElement) {
        wrapped_select_inheritsLoose(WrappedSelect, _WrappedElement);
        /**
         * @param {{
         *  element: HTMLSelectElement,
         *  classNames: ClassNames,
         *  delimiter: string
         *  template: function
         * }} args
         */

        function WrappedSelect(_ref) {
          var _this;

          var element = _ref.element,
              classNames = _ref.classNames,
              template = _ref.template;
          _this = _WrappedElement.call(this, {
            element: element,
            classNames: classNames
          }) || this;
          _this.template = template;
          return _this;
        }

        var _proto = WrappedSelect.prototype;
        /**
         * @param {DocumentFragment} fragment
         */

        _proto.appendDocFragment = function appendDocFragment(fragment) {
          this.element.innerHTML = '';
          this.element.appendChild(fragment);
        };

        wrapped_select_createClass(WrappedSelect, [{
          key: "placeholderOption",
          get: function get() {
            return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
            this.element.querySelector('option[placeholder]');
          }
          /**
           * @returns {Element[]}
           */

        }, {
          key: "optionGroups",
          get: function get() {
            return Array.from(this.element.getElementsByTagName('OPTGROUP'));
          }
          /**
           * @returns {Item[] | Choice[]}
           */

        }, {
          key: "options",
          get: function get() {
            return Array.from(this.element.options);
          }
          /**
           * @param {Item[] | Choice[]} options
           */
          ,
          set: function set(options) {
            var _this2 = this;

            var fragment = document.createDocumentFragment();

            var addOptionToFragment = function addOptionToFragment(data) {
              // Create a standard select option
              var option = _this2.template(data); // Append it to fragment


              fragment.appendChild(option);
            }; // Add each list item to list


            options.forEach(function (optionData) {
              return addOptionToFragment(optionData);
            });
            this.appendDocFragment(fragment);
          }
        }]);
        return WrappedSelect;
      }(wrapped_element_WrappedElement); // CONCATENATED MODULE: ./src/scripts/components/index.js
      // CONCATENATED MODULE: ./src/scripts/templates.js

      /**
       * Helpers to create HTML elements used by Choices
       * Can be overridden by providing `callbackOnCreateTemplates` option
       * @typedef {import('../../types/index').Choices.Templates} Templates
       * @typedef {import('../../types/index').Choices.ClassNames} ClassNames
       * @typedef {import('../../types/index').Choices.Options} Options
       * @typedef {import('../../types/index').Choices.Item} Item
       * @typedef {import('../../types/index').Choices.Choice} Choice
       * @typedef {import('../../types/index').Choices.Group} Group
       */


      var TEMPLATES =
      /** @type {Templates} */
      {
        /**
         * @param {Partial<ClassNames>} classNames
         * @param {"ltr" | "rtl" | "auto"} dir
         * @param {boolean} isSelectElement
         * @param {boolean} isSelectOneElement
         * @param {boolean} searchEnabled
         * @param {"select-one" | "select-multiple" | "text"} passedElementType
         */
        containerOuter: function containerOuter(_ref, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType) {
          var _containerOuter = _ref.containerOuter;
          var div = Object.assign(document.createElement('div'), {
            className: _containerOuter
          });
          div.dataset.type = passedElementType;

          if (dir) {
            div.dir = dir;
          }

          if (isSelectOneElement) {
            div.tabIndex = 0;
          }

          if (isSelectElement) {
            div.setAttribute('role', searchEnabled ? 'combobox' : 'listbox');

            if (searchEnabled) {
              div.setAttribute('aria-autocomplete', 'list');
            }
          }

          div.setAttribute('aria-haspopup', 'true');
          div.setAttribute('aria-expanded', 'false');
          return div;
        },

        /**
         * @param {Partial<ClassNames>} classNames
         */
        containerInner: function containerInner(_ref2) {
          var _containerInner = _ref2.containerInner;
          return Object.assign(document.createElement('div'), {
            className: _containerInner
          });
        },

        /**
         * @param {Partial<ClassNames>} classNames
         * @param {boolean} isSelectOneElement
         */
        itemList: function itemList(_ref3, isSelectOneElement) {
          var list = _ref3.list,
              listSingle = _ref3.listSingle,
              listItems = _ref3.listItems;
          return Object.assign(document.createElement('div'), {
            className: list + " " + (isSelectOneElement ? listSingle : listItems)
          });
        },

        /**
         * @param {Partial<ClassNames>} classNames
         * @param {string} value
         */
        placeholder: function placeholder(_ref4, value) {
          var _placeholder = _ref4.placeholder;
          return Object.assign(document.createElement('div'), {
            className: _placeholder,
            innerHTML: value
          });
        },

        /**
         * @param {Partial<ClassNames>} classNames
         * @param {Item} item
         * @param {boolean} removeItemButton
         */
        item: function item(_ref5, _ref6, removeItemButton) {
          var _item = _ref5.item,
              button = _ref5.button,
              highlightedState = _ref5.highlightedState,
              itemSelectable = _ref5.itemSelectable,
              placeholder = _ref5.placeholder;
          var id = _ref6.id,
              value = _ref6.value,
              label = _ref6.label,
              customProperties = _ref6.customProperties,
              active = _ref6.active,
              disabled = _ref6.disabled,
              highlighted = _ref6.highlighted,
              isPlaceholder = _ref6.placeholder;
          var div = Object.assign(document.createElement('div'), {
            className: _item,
            innerHTML: label
          });
          Object.assign(div.dataset, {
            item: '',
            id: id,
            value: value,
            customProperties: customProperties
          });

          if (active) {
            div.setAttribute('aria-selected', 'true');
          }

          if (disabled) {
            div.setAttribute('aria-disabled', 'true');
          }

          if (isPlaceholder) {
            div.classList.add(placeholder);
          }

          div.classList.add(highlighted ? highlightedState : itemSelectable);

          if (removeItemButton) {
            if (disabled) {
              div.classList.remove(itemSelectable);
            }

            div.dataset.deletable = '';
            /** @todo This MUST be localizable, not hardcoded! */

            var REMOVE_ITEM_TEXT = 'Remove item';
            var removeButton = Object.assign(document.createElement('button'), {
              type: 'button',
              className: button,
              innerHTML: REMOVE_ITEM_TEXT
            });
            removeButton.setAttribute('aria-label', REMOVE_ITEM_TEXT + ": '" + value + "'");
            removeButton.dataset.button = '';
            div.appendChild(removeButton);
          }

          return div;
        },

        /**
         * @param {Partial<ClassNames>} classNames
         * @param {boolean} isSelectOneElement
         */
        choiceList: function choiceList(_ref7, isSelectOneElement) {
          var list = _ref7.list;
          var div = Object.assign(document.createElement('div'), {
            className: list
          });

          if (!isSelectOneElement) {
            div.setAttribute('aria-multiselectable', 'true');
          }

          div.setAttribute('role', 'listbox');
          return div;
        },

        /**
         * @param {Partial<ClassNames>} classNames
         * @param {Group} group
         */
        choiceGroup: function choiceGroup(_ref8, _ref9) {
          var group = _ref8.group,
              groupHeading = _ref8.groupHeading,
              itemDisabled = _ref8.itemDisabled;
          var id = _ref9.id,
              value = _ref9.value,
              disabled = _ref9.disabled;
          var div = Object.assign(document.createElement('div'), {
            className: group + " " + (disabled ? itemDisabled : '')
          });
          div.setAttribute('role', 'group');
          Object.assign(div.dataset, {
            group: '',
            id: id,
            value: value
          });

          if (disabled) {
            div.setAttribute('aria-disabled', 'true');
          }

          div.appendChild(Object.assign(document.createElement('div'), {
            className: groupHeading,
            innerHTML: value
          }));
          return div;
        },

        /**
         * @param {Partial<ClassNames>} classNames
         * @param {Choice} choice
         * @param {Options['itemSelectText']} selectText
         */
        choice: function choice(_ref10, _ref11, selectText) {
          var item = _ref10.item,
              itemChoice = _ref10.itemChoice,
              itemSelectable = _ref10.itemSelectable,
              selectedState = _ref10.selectedState,
              itemDisabled = _ref10.itemDisabled,
              placeholder = _ref10.placeholder;
          var id = _ref11.id,
              value = _ref11.value,
              label = _ref11.label,
              groupId = _ref11.groupId,
              elementId = _ref11.elementId,
              isDisabled = _ref11.disabled,
              isSelected = _ref11.selected,
              isPlaceholder = _ref11.placeholder;
          var div = Object.assign(document.createElement('div'), {
            id: elementId,
            innerHTML: label,
            className: item + " " + itemChoice
          });

          if (isSelected) {
            div.classList.add(selectedState);
          }

          if (isPlaceholder) {
            div.classList.add(placeholder);
          }

          div.setAttribute('role', groupId > 0 ? 'treeitem' : 'option');
          Object.assign(div.dataset, {
            choice: '',
            id: id,
            value: value,
            selectText: selectText
          });

          if (isDisabled) {
            div.classList.add(itemDisabled);
            div.dataset.choiceDisabled = '';
            div.setAttribute('aria-disabled', 'true');
          } else {
            div.classList.add(itemSelectable);
            div.dataset.choiceSelectable = '';
          }

          return div;
        },

        /**
         * @param {Partial<ClassNames>} classNames
         * @param {string} placeholderValue
         */
        input: function input(_ref12, placeholderValue) {
          var _input = _ref12.input,
              inputCloned = _ref12.inputCloned;
          var inp = Object.assign(document.createElement('input'), {
            type: 'text',
            className: _input + " " + inputCloned,
            autocomplete: 'off',
            autocapitalize: 'off',
            spellcheck: false
          });
          inp.setAttribute('role', 'textbox');
          inp.setAttribute('aria-autocomplete', 'list');
          inp.setAttribute('aria-label', placeholderValue);
          return inp;
        },

        /**
         * @param {Partial<ClassNames>} classNames
         */
        dropdown: function dropdown(_ref13) {
          var list = _ref13.list,
              listDropdown = _ref13.listDropdown;
          var div = document.createElement('div');
          div.classList.add(list, listDropdown);
          div.setAttribute('aria-expanded', 'false');
          return div;
        },

        /**
         *
         * @param {Partial<ClassNames>} classNames
         * @param {string} innerHTML
         * @param {"no-choices" | "no-results" | ""} type
         */
        notice: function notice(_ref14, innerHTML, type) {
          var item = _ref14.item,
              itemChoice = _ref14.itemChoice,
              noResults = _ref14.noResults,
              noChoices = _ref14.noChoices;

          if (type === void 0) {
            type = '';
          }

          var classes = [item, itemChoice];

          if (type === 'no-choices') {
            classes.push(noChoices);
          } else if (type === 'no-results') {
            classes.push(noResults);
          }

          return Object.assign(document.createElement('div'), {
            innerHTML: innerHTML,
            className: classes.join(' ')
          });
        },

        /**
         * @param {Item} option
         */
        option: function option(_ref15) {
          var label = _ref15.label,
              value = _ref15.value,
              customProperties = _ref15.customProperties,
              active = _ref15.active,
              disabled = _ref15.disabled;
          var opt = new Option(label, value, false, active);

          if (customProperties) {
            opt.dataset.customProperties = customProperties;
          }

          opt.disabled = disabled;
          return opt;
        }
      };
      /* harmony default export */

      var templates = TEMPLATES; // CONCATENATED MODULE: ./src/scripts/actions/choices.js

      /**
       * @typedef {import('redux').Action} Action
       * @typedef {import('../../../types/index').Choices.Choice} Choice
       */

      /**
       * @argument {Choice} choice
       * @returns {Action & Choice}
       */

      var choices_addChoice = function addChoice(_ref) {
        var value = _ref.value,
            label = _ref.label,
            id = _ref.id,
            groupId = _ref.groupId,
            disabled = _ref.disabled,
            elementId = _ref.elementId,
            customProperties = _ref.customProperties,
            placeholder = _ref.placeholder,
            keyCode = _ref.keyCode;
        return {
          type: ACTION_TYPES.ADD_CHOICE,
          value: value,
          label: label,
          id: id,
          groupId: groupId,
          disabled: disabled,
          elementId: elementId,
          customProperties: customProperties,
          placeholder: placeholder,
          keyCode: keyCode
        };
      };
      /**
       * @argument {Choice[]} results
       * @returns {Action & { results: Choice[] }}
       */


      var choices_filterChoices = function filterChoices(results) {
        return {
          type: ACTION_TYPES.FILTER_CHOICES,
          results: results
        };
      };
      /**
       * @argument {boolean} active
       * @returns {Action & { active: boolean }}
       */


      var choices_activateChoices = function activateChoices(active) {
        if (active === void 0) {
          active = true;
        }

        return {
          type: ACTION_TYPES.ACTIVATE_CHOICES,
          active: active
        };
      };
      /**
       * @returns {Action}
       */


      var choices_clearChoices = function clearChoices() {
        return {
          type: ACTION_TYPES.CLEAR_CHOICES
        };
      }; // CONCATENATED MODULE: ./src/scripts/actions/items.js

      /**
       * @typedef {import('redux').Action} Action
       * @typedef {import('../../../types/index').Choices.Item} Item
       */

      /**
       * @param {Item} item
       * @returns {Action & Item}
       */


      var items_addItem = function addItem(_ref) {
        var value = _ref.value,
            label = _ref.label,
            id = _ref.id,
            choiceId = _ref.choiceId,
            groupId = _ref.groupId,
            customProperties = _ref.customProperties,
            placeholder = _ref.placeholder,
            keyCode = _ref.keyCode;
        return {
          type: ACTION_TYPES.ADD_ITEM,
          value: value,
          label: label,
          id: id,
          choiceId: choiceId,
          groupId: groupId,
          customProperties: customProperties,
          placeholder: placeholder,
          keyCode: keyCode
        };
      };
      /**
       * @param {string} id
       * @param {string} choiceId
       * @returns {Action & { id: string, choiceId: string }}
       */


      var items_removeItem = function removeItem(id, choiceId) {
        return {
          type: ACTION_TYPES.REMOVE_ITEM,
          id: id,
          choiceId: choiceId
        };
      };
      /**
       * @param {string} id
       * @param {boolean} highlighted
       * @returns {Action & { id: string, highlighted: boolean }}
       */


      var items_highlightItem = function highlightItem(id, highlighted) {
        return {
          type: ACTION_TYPES.HIGHLIGHT_ITEM,
          id: id,
          highlighted: highlighted
        };
      }; // CONCATENATED MODULE: ./src/scripts/actions/groups.js

      /**
       * @typedef {import('redux').Action} Action
       * @typedef {import('../../../types/index').Choices.Group} Group
       */

      /**
       * @param {Group} group
       * @returns {Action & Group}
       */


      var groups_addGroup = function addGroup(_ref) {
        var value = _ref.value,
            id = _ref.id,
            active = _ref.active,
            disabled = _ref.disabled;
        return {
          type: ACTION_TYPES.ADD_GROUP,
          value: value,
          id: id,
          active: active,
          disabled: disabled
        };
      }; // CONCATENATED MODULE: ./src/scripts/actions/misc.js

      /**
       * @typedef {import('redux').Action} Action
       */

      /**
       * @returns {Action}
       */


      var clearAll = function clearAll() {
        return {
          type: 'CLEAR_ALL'
        };
      };
      /**
       * @param {any} state
       * @returns {Action & { state: object }}
       */


      var resetTo = function resetTo(state) {
        return {
          type: 'RESET_TO',
          state: state
        };
      };
      /**
       * @param {boolean} isLoading
       * @returns {Action & { isLoading: boolean }}
       */


      var setIsLoading = function setIsLoading(isLoading) {
        return {
          type: 'SET_IS_LOADING',
          isLoading: isLoading
        };
      }; // CONCATENATED MODULE: ./src/scripts/choices.js


      function choices_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function choices_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) choices_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) choices_defineProperties(Constructor, staticProps);
        return Constructor;
      }
      /** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */


      var IS_IE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
      /**
       * @typedef {import('../../types/index').Choices.Choice} Choice
       * @typedef {import('../../types/index').Choices.Item} Item
       * @typedef {import('../../types/index').Choices.Group} Group
       * @typedef {import('../../types/index').Choices.Options} Options
       */

      /** @type {Partial<Options>} */

      var USER_DEFAULTS = {};
      /**
       * Choices
       * @author Josh Johnson<josh@joshuajohnson.co.uk>
       */

      var choices_Choices = /*#__PURE__*/function () {
        choices_createClass(Choices, null, [{
          key: "defaults",
          get: function get() {
            return Object.preventExtensions({
              get options() {
                return USER_DEFAULTS;
              },

              get templates() {
                return TEMPLATES;
              }

            });
          }
          /**
           * @param {string | HTMLInputElement | HTMLSelectElement} element
           * @param {Partial<Options>} userConfig
           */

        }]);

        function Choices(element, userConfig) {
          var _this = this;

          if (element === void 0) {
            element = '[data-choice]';
          }

          if (userConfig === void 0) {
            userConfig = {};
          }
          /** @type {Partial<Options>} */


          this.config = cjs_default.a.all([DEFAULT_CONFIG, Choices.defaults.options, userConfig], // When merging array configs, replace with a copy of the userConfig array,
          // instead of concatenating with the default array
          {
            arrayMerge: function arrayMerge(_, sourceArray) {
              return [].concat(sourceArray);
            }
          });
          var invalidConfigOptions = diff(this.config, DEFAULT_CONFIG);

          if (invalidConfigOptions.length) {
            console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
          }

          var passedElement = typeof element === 'string' ? document.querySelector(element) : element;

          if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) {
            throw TypeError('Expected one of the following types text|select-one|select-multiple');
          }

          this._isTextElement = passedElement.type === TEXT_TYPE;
          this._isSelectOneElement = passedElement.type === SELECT_ONE_TYPE;
          this._isSelectMultipleElement = passedElement.type === SELECT_MULTIPLE_TYPE;
          this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
          this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;

          if (!['auto', 'always'].includes(this.config.renderSelectedChoices)) {
            this.config.renderSelectedChoices = 'auto';
          }

          if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== 'function') {
            var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
            this.config.addItemFilter = re.test.bind(re);
          }

          if (this._isTextElement) {
            this.passedElement = new WrappedInput({
              element: passedElement,
              classNames: this.config.classNames,
              delimiter: this.config.delimiter
            });
          } else {
            this.passedElement = new WrappedSelect({
              element: passedElement,
              classNames: this.config.classNames,
              template: function template(data) {
                return _this._templates.option(data);
              }
            });
          }

          this.initialised = false;
          this._store = new store_Store();
          this._initialState = {};
          this._currentState = {};
          this._prevState = {};
          this._currentValue = '';
          this._canSearch = this.config.searchEnabled;
          this._isScrollingOnIe = false;
          this._highlightPosition = 0;
          this._wasTap = true;
          this._placeholderValue = this._generatePlaceholderValue();
          this._baseId = generateId(this.passedElement.element, 'choices-');
          /**
           * setting direction in cases where it's explicitly set on passedElement
           * or when calculated direction is different from the document
           * @type {HTMLElement['dir']}
           */

          this._direction = this.passedElement.dir;

          if (!this._direction) {
            var _window$getComputedSt = window.getComputedStyle(this.passedElement.element),
                elementDirection = _window$getComputedSt.direction;

            var _window$getComputedSt2 = window.getComputedStyle(document.documentElement),
                documentDirection = _window$getComputedSt2.direction;

            if (elementDirection !== documentDirection) {
              this._direction = elementDirection;
            }
          }

          this._idNames = {
            itemChoice: 'item-choice'
          }; // Assign preset groups from passed element

          this._presetGroups = this.passedElement.optionGroups; // Assign preset options from passed element

          this._presetOptions = this.passedElement.options; // Assign preset choices from passed object

          this._presetChoices = this.config.choices; // Assign preset items from passed object first

          this._presetItems = this.config.items; // Add any values passed from attribute

          if (this.passedElement.value) {
            this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter));
          } // Create array of choices from option elements


          if (this.passedElement.options) {
            this.passedElement.options.forEach(function (o) {
              _this._presetChoices.push({
                value: o.value,
                label: o.innerHTML,
                selected: o.selected,
                disabled: o.disabled || o.parentNode.disabled,
                placeholder: o.value === '' || o.hasAttribute('placeholder'),
                customProperties: o.getAttribute('data-custom-properties')
              });
            });
          }

          this._render = this._render.bind(this);
          this._onFocus = this._onFocus.bind(this);
          this._onBlur = this._onBlur.bind(this);
          this._onKeyUp = this._onKeyUp.bind(this);
          this._onKeyDown = this._onKeyDown.bind(this);
          this._onClick = this._onClick.bind(this);
          this._onTouchMove = this._onTouchMove.bind(this);
          this._onTouchEnd = this._onTouchEnd.bind(this);
          this._onMouseDown = this._onMouseDown.bind(this);
          this._onMouseOver = this._onMouseOver.bind(this);
          this._onFormReset = this._onFormReset.bind(this);
          this._onAKey = this._onAKey.bind(this);
          this._onEnterKey = this._onEnterKey.bind(this);
          this._onEscapeKey = this._onEscapeKey.bind(this);
          this._onDirectionKey = this._onDirectionKey.bind(this);
          this._onDeleteKey = this._onDeleteKey.bind(this); // If element has already been initialised with Choices, fail silently

          if (this.passedElement.isActive) {
            if (!this.config.silent) {
              console.warn('Trying to initialise Choices on element already initialised');
            }

            this.initialised = true;
            return;
          } // Let's go


          this.init();
        }

        var _proto = Choices.prototype;

        _proto.init = function init() {
          if (this.initialised) {
            return;
          }

          this._createTemplates();

          this._createElements();

          this._createStructure(); // Set initial state (We need to clone the state because some reducers
          // modify the inner objects properties in the state) 🤢


          this._initialState = cloneObject(this._store.state);

          this._store.subscribe(this._render);

          this._render();

          this._addEventListeners();

          var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute('disabled');

          if (shouldDisable) {
            this.disable();
          }

          this.initialised = true;
          var callbackOnInit = this.config.callbackOnInit; // Run callback if it is a function

          if (callbackOnInit && typeof callbackOnInit === 'function') {
            callbackOnInit.call(this);
          }
        };

        _proto.destroy = function destroy() {
          if (!this.initialised) {
            return;
          }

          this._removeEventListeners();

          this.passedElement.reveal();
          this.containerOuter.unwrap(this.passedElement.element);
          this.clearStore();

          if (this._isSelectElement) {
            this.passedElement.options = this._presetOptions;
          }

          this._templates = null;
          this.initialised = false;
        };

        _proto.enable = function enable() {
          if (this.passedElement.isDisabled) {
            this.passedElement.enable();
          }

          if (this.containerOuter.isDisabled) {
            this._addEventListeners();

            this.input.enable();
            this.containerOuter.enable();
          }

          return this;
        };

        _proto.disable = function disable() {
          if (!this.passedElement.isDisabled) {
            this.passedElement.disable();
          }

          if (!this.containerOuter.isDisabled) {
            this._removeEventListeners();

            this.input.disable();
            this.containerOuter.disable();
          }

          return this;
        };

        _proto.highlightItem = function highlightItem(item, runEvent) {
          if (runEvent === void 0) {
            runEvent = true;
          }

          if (!item) {
            return this;
          }

          var id = item.id,
              _item$groupId = item.groupId,
              groupId = _item$groupId === void 0 ? -1 : _item$groupId,
              _item$value = item.value,
              value = _item$value === void 0 ? '' : _item$value,
              _item$label = item.label,
              label = _item$label === void 0 ? '' : _item$label;
          var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

          this._store.dispatch(items_highlightItem(id, true));

          if (runEvent) {
            this.passedElement.triggerEvent(EVENTS.highlightItem, {
              id: id,
              value: value,
              label: label,
              groupValue: group && group.value ? group.value : null
            });
          }

          return this;
        };

        _proto.unhighlightItem = function unhighlightItem(item) {
          if (!item) {
            return this;
          }

          var id = item.id,
              _item$groupId2 = item.groupId,
              groupId = _item$groupId2 === void 0 ? -1 : _item$groupId2,
              _item$value2 = item.value,
              value = _item$value2 === void 0 ? '' : _item$value2,
              _item$label2 = item.label,
              label = _item$label2 === void 0 ? '' : _item$label2;
          var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

          this._store.dispatch(items_highlightItem(id, false));

          this.passedElement.triggerEvent(EVENTS.highlightItem, {
            id: id,
            value: value,
            label: label,
            groupValue: group && group.value ? group.value : null
          });
          return this;
        };

        _proto.highlightAll = function highlightAll() {
          var _this2 = this;

          this._store.items.forEach(function (item) {
            return _this2.highlightItem(item);
          });

          return this;
        };

        _proto.unhighlightAll = function unhighlightAll() {
          var _this3 = this;

          this._store.items.forEach(function (item) {
            return _this3.unhighlightItem(item);
          });

          return this;
        };

        _proto.removeActiveItemsByValue = function removeActiveItemsByValue(value) {
          var _this4 = this;

          this._store.activeItems.filter(function (item) {
            return item.value === value;
          }).forEach(function (item) {
            return _this4._removeItem(item);
          });

          return this;
        };

        _proto.removeActiveItems = function removeActiveItems(excludedId) {
          var _this5 = this;

          this._store.activeItems.filter(function (_ref) {
            var id = _ref.id;
            return id !== excludedId;
          }).forEach(function (item) {
            return _this5._removeItem(item);
          });

          return this;
        };

        _proto.removeHighlightedItems = function removeHighlightedItems(runEvent) {
          var _this6 = this;

          if (runEvent === void 0) {
            runEvent = false;
          }

          this._store.highlightedActiveItems.forEach(function (item) {
            _this6._removeItem(item); // If this action was performed by the user
            // trigger the event


            if (runEvent) {
              _this6._triggerChange(item.value);
            }
          });

          return this;
        };

        _proto.showDropdown = function showDropdown(preventInputFocus) {
          var _this7 = this;

          if (this.dropdown.isActive) {
            return this;
          }

          requestAnimationFrame(function () {
            _this7.dropdown.show();

            _this7.containerOuter.open(_this7.dropdown.distanceFromTopWindow);

            if (!preventInputFocus && _this7._canSearch) {
              _this7.input.focus();
            }

            _this7.passedElement.triggerEvent(EVENTS.showDropdown, {});
          });
          return this;
        };

        _proto.hideDropdown = function hideDropdown(preventInputBlur) {
          var _this8 = this;

          if (!this.dropdown.isActive) {
            return this;
          }

          requestAnimationFrame(function () {
            _this8.dropdown.hide();

            _this8.containerOuter.close();

            if (!preventInputBlur && _this8._canSearch) {
              _this8.input.removeActiveDescendant();

              _this8.input.blur();
            }

            _this8.passedElement.triggerEvent(EVENTS.hideDropdown, {});
          });
          return this;
        };

        _proto.getValue = function getValue(valueOnly) {
          if (valueOnly === void 0) {
            valueOnly = false;
          }

          var values = this._store.activeItems.reduce(function (selectedItems, item) {
            var itemValue = valueOnly ? item.value : item;
            selectedItems.push(itemValue);
            return selectedItems;
          }, []);

          return this._isSelectOneElement ? values[0] : values;
        }
        /**
         * @param {string[] | import('../../types/index').Choices.Item[]} items
         */
        ;

        _proto.setValue = function setValue(items) {
          var _this9 = this;

          if (!this.initialised) {
            return this;
          }

          items.forEach(function (value) {
            return _this9._setChoiceOrItem(value);
          });
          return this;
        };

        _proto.setChoiceByValue = function setChoiceByValue(value) {
          var _this10 = this;

          if (!this.initialised || this._isTextElement) {
            return this;
          } // If only one value has been passed, convert to array


          var choiceValue = Array.isArray(value) ? value : [value]; // Loop through each value and

          choiceValue.forEach(function (val) {
            return _this10._findAndSelectChoiceByValue(val);
          });
          return this;
        }
        /**
         * Set choices of select input via an array of objects (or function that returns array of object or promise of it),
         * a value field name and a label field name.
         * This behaves the same as passing items via the choices option but can be called after initialising Choices.
         * This can also be used to add groups of choices (see example 2); Optionally pass a true `replaceChoices` value to remove any existing choices.
         * Optionally pass a `customProperties` object to add additional data to your choices (useful when searching/filtering etc).
         *
         * **Input types affected:** select-one, select-multiple
         *
         * @template {Choice[] | ((instance: Choices) => object[] | Promise<object[]>)} T
         * @param {T} [choicesArrayOrFetcher]
         * @param {string} [value = 'value'] - name of `value` field
         * @param {string} [label = 'label'] - name of 'label' field
         * @param {boolean} [replaceChoices = false] - whether to replace of add choices
         * @returns {this | Promise<this>}
         *
         * @example
         * ```js
         * const example = new Choices(element);
         *
         * example.setChoices([
         *   {value: 'One', label: 'Label One', disabled: true},
         *   {value: 'Two', label: 'Label Two', selected: true},
         *   {value: 'Three', label: 'Label Three'},
         * ], 'value', 'label', false);
         * ```
         *
         * @example
         * ```js
         * const example = new Choices(element);
         *
         * example.setChoices(async () => {
         *   try {
         *      const items = await fetch('/items');
         *      return items.json()
         *   } catch(err) {
         *      console.error(err)
         *   }
         * });
         * ```
         *
         * @example
         * ```js
         * const example = new Choices(element);
         *
         * example.setChoices([{
         *   label: 'Group one',
         *   id: 1,
         *   disabled: false,
         *   choices: [
         *     {value: 'Child One', label: 'Child One', selected: true},
         *     {value: 'Child Two', label: 'Child Two',  disabled: true},
         *     {value: 'Child Three', label: 'Child Three'},
         *   ]
         * },
         * {
         *   label: 'Group two',
         *   id: 2,
         *   disabled: false,
         *   choices: [
         *     {value: 'Child Four', label: 'Child Four', disabled: true},
         *     {value: 'Child Five', label: 'Child Five'},
         *     {value: 'Child Six', label: 'Child Six', customProperties: {
         *       description: 'Custom description about child six',
         *       random: 'Another random custom property'
         *     }},
         *   ]
         * }], 'value', 'label', false);
         * ```
         */
        ;

        _proto.setChoices = function setChoices(choicesArrayOrFetcher, value, label, replaceChoices) {
          var _this11 = this;

          if (choicesArrayOrFetcher === void 0) {
            choicesArrayOrFetcher = [];
          }

          if (value === void 0) {
            value = 'value';
          }

          if (label === void 0) {
            label = 'label';
          }

          if (replaceChoices === void 0) {
            replaceChoices = false;
          }

          if (!this.initialised) {
            throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
          }

          if (!this._isSelectElement) {
            throw new TypeError("setChoices can't be used with INPUT based Choices");
          }

          if (typeof value !== 'string' || !value) {
            throw new TypeError("value parameter must be a name of 'value' field in passed objects");
          } // Clear choices if needed


          if (replaceChoices) {
            this.clearChoices();
          }

          if (typeof choicesArrayOrFetcher === 'function') {
            // it's a choices fetcher function
            var fetcher = choicesArrayOrFetcher(this);

            if (typeof Promise === 'function' && fetcher instanceof Promise) {
              // that's a promise
              // eslint-disable-next-line compat/compat
              return new Promise(function (resolve) {
                return requestAnimationFrame(resolve);
              }).then(function () {
                return _this11._handleLoadingState(true);
              }).then(function () {
                return fetcher;
              }).then(function (data) {
                return _this11.setChoices(data, value, label, replaceChoices);
              }).catch(function (err) {
                if (!_this11.config.silent) {
                  console.error(err);
                }
              }).then(function () {
                return _this11._handleLoadingState(false);
              }).then(function () {
                return _this11;
              });
            } // function returned something else than promise, let's check if it's an array of choices


            if (!Array.isArray(fetcher)) {
              throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: " + _typeof(fetcher));
            } // recursion with results, it's sync and choices were cleared already


            return this.setChoices(fetcher, value, label, false);
          }

          if (!Array.isArray(choicesArrayOrFetcher)) {
            throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
          }

          this.containerOuter.removeLoadingState();

          this._startLoading();

          choicesArrayOrFetcher.forEach(function (groupOrChoice) {
            if (groupOrChoice.choices) {
              _this11._addGroup({
                id: parseInt(groupOrChoice.id, 10) || null,
                group: groupOrChoice,
                valueKey: value,
                labelKey: label
              });
            } else {
              _this11._addChoice({
                value: groupOrChoice[value],
                label: groupOrChoice[label],
                isSelected: groupOrChoice.selected,
                isDisabled: groupOrChoice.disabled,
                customProperties: groupOrChoice.customProperties,
                placeholder: groupOrChoice.placeholder
              });
            }
          });

          this._stopLoading();

          return this;
        };

        _proto.clearChoices = function clearChoices() {
          this._store.dispatch(choices_clearChoices());

          return this;
        };

        _proto.clearStore = function clearStore() {
          this._store.dispatch(clearAll());

          return this;
        };

        _proto.clearInput = function clearInput() {
          var shouldSetInputWidth = !this._isSelectOneElement;
          this.input.clear(shouldSetInputWidth);

          if (!this._isTextElement && this._canSearch) {
            this._isSearching = false;

            this._store.dispatch(choices_activateChoices(true));
          }

          return this;
        };

        _proto._render = function _render() {
          if (this._store.isLoading()) {
            return;
          }

          this._currentState = this._store.state;
          var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
          var shouldRenderChoices = this._isSelectElement;
          var shouldRenderItems = this._currentState.items !== this._prevState.items;

          if (!stateChanged) {
            return;
          }

          if (shouldRenderChoices) {
            this._renderChoices();
          }

          if (shouldRenderItems) {
            this._renderItems();
          }

          this._prevState = this._currentState;
        };

        _proto._renderChoices = function _renderChoices() {
          var _this12 = this;

          var _this$_store = this._store,
              activeGroups = _this$_store.activeGroups,
              activeChoices = _this$_store.activeChoices;
          var choiceListFragment = document.createDocumentFragment();
          this.choiceList.clear();

          if (this.config.resetScrollPosition) {
            requestAnimationFrame(function () {
              return _this12.choiceList.scrollToTop();
            });
          } // If we have grouped options


          if (activeGroups.length >= 1 && !this._isSearching) {
            // If we have a placeholder choice along with groups
            var activePlaceholders = activeChoices.filter(function (activeChoice) {
              return activeChoice.placeholder === true && activeChoice.groupId === -1;
            });

            if (activePlaceholders.length >= 1) {
              choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
            }

            choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
          } else if (activeChoices.length >= 1) {
            choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
          } // If we have choices to show


          if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
            var activeItems = this._store.activeItems;

            var canAddItem = this._canAddItem(activeItems, this.input.value); // ...and we can select them


            if (canAddItem.response) {
              // ...append them and highlight the first choice
              this.choiceList.append(choiceListFragment);

              this._highlightChoice();
            } else {
              // ...otherwise show a notice
              this.choiceList.append(this._getTemplate('notice', canAddItem.notice));
            }
          } else {
            // Otherwise show a notice
            var dropdownItem;
            var notice;

            if (this._isSearching) {
              notice = typeof this.config.noResultsText === 'function' ? this.config.noResultsText() : this.config.noResultsText;
              dropdownItem = this._getTemplate('notice', notice, 'no-results');
            } else {
              notice = typeof this.config.noChoicesText === 'function' ? this.config.noChoicesText() : this.config.noChoicesText;
              dropdownItem = this._getTemplate('notice', notice, 'no-choices');
            }

            this.choiceList.append(dropdownItem);
          }
        };

        _proto._renderItems = function _renderItems() {
          var activeItems = this._store.activeItems || [];
          this.itemList.clear(); // Create a fragment to store our list items
          // (so we don't have to update the DOM for each item)

          var itemListFragment = this._createItemsFragment(activeItems); // If we have items to add, append them


          if (itemListFragment.childNodes) {
            this.itemList.append(itemListFragment);
          }
        };

        _proto._createGroupsFragment = function _createGroupsFragment(groups, choices, fragment) {
          var _this13 = this;

          if (fragment === void 0) {
            fragment = document.createDocumentFragment();
          }

          var getGroupChoices = function getGroupChoices(group) {
            return choices.filter(function (choice) {
              if (_this13._isSelectOneElement) {
                return choice.groupId === group.id;
              }

              return choice.groupId === group.id && (_this13.config.renderSelectedChoices === 'always' || !choice.selected);
            });
          }; // If sorting is enabled, filter groups


          if (this.config.shouldSort) {
            groups.sort(this.config.sorter);
          }

          groups.forEach(function (group) {
            var groupChoices = getGroupChoices(group);

            if (groupChoices.length >= 1) {
              var dropdownGroup = _this13._getTemplate('choiceGroup', group);

              fragment.appendChild(dropdownGroup);

              _this13._createChoicesFragment(groupChoices, fragment, true);
            }
          });
          return fragment;
        };

        _proto._createChoicesFragment = function _createChoicesFragment(choices, fragment, withinGroup) {
          var _this14 = this;

          if (fragment === void 0) {
            fragment = document.createDocumentFragment();
          }

          if (withinGroup === void 0) {
            withinGroup = false;
          } // Create a fragment to store our list items (so we don't have to update the DOM for each item)


          var _this$config = this.config,
              renderSelectedChoices = _this$config.renderSelectedChoices,
              searchResultLimit = _this$config.searchResultLimit,
              renderChoiceLimit = _this$config.renderChoiceLimit;
          var filter = this._isSearching ? sortByScore : this.config.sorter;

          var appendChoice = function appendChoice(choice) {
            var shouldRender = renderSelectedChoices === 'auto' ? _this14._isSelectOneElement || !choice.selected : true;

            if (shouldRender) {
              var dropdownItem = _this14._getTemplate('choice', choice, _this14.config.itemSelectText);

              fragment.appendChild(dropdownItem);
            }
          };

          var rendererableChoices = choices;

          if (renderSelectedChoices === 'auto' && !this._isSelectOneElement) {
            rendererableChoices = choices.filter(function (choice) {
              return !choice.selected;
            });
          } // Split array into placeholders and "normal" choices


          var _rendererableChoices$ = rendererableChoices.reduce(function (acc, choice) {
            if (choice.placeholder) {
              acc.placeholderChoices.push(choice);
            } else {
              acc.normalChoices.push(choice);
            }

            return acc;
          }, {
            placeholderChoices: [],
            normalChoices: []
          }),
              placeholderChoices = _rendererableChoices$.placeholderChoices,
              normalChoices = _rendererableChoices$.normalChoices; // If sorting is enabled or the user is searching, filter choices


          if (this.config.shouldSort || this._isSearching) {
            normalChoices.sort(filter);
          }

          var choiceLimit = rendererableChoices.length; // Prepend placeholeder

          var sortedChoices = this._isSelectOneElement ? [].concat(placeholderChoices, normalChoices) : normalChoices;

          if (this._isSearching) {
            choiceLimit = searchResultLimit;
          } else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) {
            choiceLimit = renderChoiceLimit;
          } // Add each choice to dropdown within range


          for (var i = 0; i < choiceLimit; i += 1) {
            if (sortedChoices[i]) {
              appendChoice(sortedChoices[i]);
            }
          }

          return fragment;
        };

        _proto._createItemsFragment = function _createItemsFragment(items, fragment) {
          var _this15 = this;

          if (fragment === void 0) {
            fragment = document.createDocumentFragment();
          } // Create fragment to add elements to


          var _this$config2 = this.config,
              shouldSortItems = _this$config2.shouldSortItems,
              sorter = _this$config2.sorter,
              removeItemButton = _this$config2.removeItemButton; // If sorting is enabled, filter items

          if (shouldSortItems && !this._isSelectOneElement) {
            items.sort(sorter);
          }

          if (this._isTextElement) {
            // Update the value of the hidden input
            this.passedElement.value = items;
          } else {
            // Update the options of the hidden input
            this.passedElement.options = items;
          }

          var addItemToFragment = function addItemToFragment(item) {
            // Create new list element
            var listItem = _this15._getTemplate('item', item, removeItemButton); // Append it to list


            fragment.appendChild(listItem);
          }; // Add each list item to list


          items.forEach(addItemToFragment);
          return fragment;
        };

        _proto._triggerChange = function _triggerChange(value) {
          if (value === undefined || value === null) {
            return;
          }

          this.passedElement.triggerEvent(EVENTS.change, {
            value: value
          });
        };

        _proto._selectPlaceholderChoice = function _selectPlaceholderChoice() {
          var placeholderChoice = this._store.placeholderChoice;

          if (placeholderChoice) {
            this._addItem({
              value: placeholderChoice.value,
              label: placeholderChoice.label,
              choiceId: placeholderChoice.id,
              groupId: placeholderChoice.groupId,
              placeholder: placeholderChoice.placeholder
            });

            this._triggerChange(placeholderChoice.value);
          }
        };

        _proto._handleButtonAction = function _handleButtonAction(activeItems, element) {
          if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
            return;
          }

          var itemId = element.parentNode.getAttribute('data-id');
          var itemToRemove = activeItems.find(function (item) {
            return item.id === parseInt(itemId, 10);
          }); // Remove item associated with button

          this._removeItem(itemToRemove);

          this._triggerChange(itemToRemove.value);

          if (this._isSelectOneElement) {
            this._selectPlaceholderChoice();
          }
        };

        _proto._handleItemAction = function _handleItemAction(activeItems, element, hasShiftKey) {
          var _this16 = this;

          if (hasShiftKey === void 0) {
            hasShiftKey = false;
          }

          if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) {
            return;
          }

          var passedId = element.getAttribute('data-id'); // We only want to select one item with a click
          // so we deselect any items that aren't the target
          // unless shift is being pressed

          activeItems.forEach(function (item) {
            if (item.id === parseInt(passedId, 10) && !item.highlighted) {
              _this16.highlightItem(item);
            } else if (!hasShiftKey && item.highlighted) {
              _this16.unhighlightItem(item);
            }
          }); // Focus input as without focus, a user cannot do anything with a
          // highlighted item

          this.input.focus();
        };

        _proto._handleChoiceAction = function _handleChoiceAction(activeItems, element) {
          if (!activeItems || !element) {
            return;
          } // If we are clicking on an option


          var id = element.dataset.id;

          var choice = this._store.getChoiceById(id);

          if (!choice) {
            return;
          }

          var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : null;
          var hasActiveDropdown = this.dropdown.isActive; // Update choice keyCode

          choice.keyCode = passedKeyCode;
          this.passedElement.triggerEvent(EVENTS.choice, {
            choice: choice
          });

          if (!choice.selected && !choice.disabled) {
            var canAddItem = this._canAddItem(activeItems, choice.value);

            if (canAddItem.response) {
              this._addItem({
                value: choice.value,
                label: choice.label,
                choiceId: choice.id,
                groupId: choice.groupId,
                customProperties: choice.customProperties,
                placeholder: choice.placeholder,
                keyCode: choice.keyCode
              });

              this._triggerChange(choice.value);
            }
          }

          this.clearInput(); // We want to close the dropdown if we are dealing with a single select box

          if (hasActiveDropdown && this._isSelectOneElement) {
            this.hideDropdown(true);
            this.containerOuter.focus();
          }
        };

        _proto._handleBackspace = function _handleBackspace(activeItems) {
          if (!this.config.removeItems || !activeItems) {
            return;
          }

          var lastItem = activeItems[activeItems.length - 1];
          var hasHighlightedItems = activeItems.some(function (item) {
            return item.highlighted;
          }); // If editing the last item is allowed and there are not other selected items,
          // we can edit the item value. Otherwise if we can remove items, remove all selected items

          if (this.config.editItems && !hasHighlightedItems && lastItem) {
            this.input.value = lastItem.value;
            this.input.setWidth();

            this._removeItem(lastItem);

            this._triggerChange(lastItem.value);
          } else {
            if (!hasHighlightedItems) {
              // Highlight last item if none already highlighted
              this.highlightItem(lastItem, false);
            }

            this.removeHighlightedItems(true);
          }
        };

        _proto._startLoading = function _startLoading() {
          this._store.dispatch(setIsLoading(true));
        };

        _proto._stopLoading = function _stopLoading() {
          this._store.dispatch(setIsLoading(false));
        };

        _proto._handleLoadingState = function _handleLoadingState(setLoading) {
          if (setLoading === void 0) {
            setLoading = true;
          }

          var placeholderItem = this.itemList.getChild("." + this.config.classNames.placeholder);

          if (setLoading) {
            this.disable();
            this.containerOuter.addLoadingState();

            if (this._isSelectOneElement) {
              if (!placeholderItem) {
                placeholderItem = this._getTemplate('placeholder', this.config.loadingText);
                this.itemList.append(placeholderItem);
              } else {
                placeholderItem.innerHTML = this.config.loadingText;
              }
            } else {
              this.input.placeholder = this.config.loadingText;
            }
          } else {
            this.enable();
            this.containerOuter.removeLoadingState();

            if (this._isSelectOneElement) {
              placeholderItem.innerHTML = this._placeholderValue || '';
            } else {
              this.input.placeholder = this._placeholderValue || '';
            }
          }
        };

        _proto._handleSearch = function _handleSearch(value) {
          if (!value || !this.input.isFocussed) {
            return;
          }

          var choices = this._store.choices;
          var _this$config3 = this.config,
              searchFloor = _this$config3.searchFloor,
              searchChoices = _this$config3.searchChoices;
          var hasUnactiveChoices = choices.some(function (option) {
            return !option.active;
          }); // Check that we have a value to search and the input was an alphanumeric character

          if (value && value.length >= searchFloor) {
            var resultCount = searchChoices ? this._searchChoices(value) : 0; // Trigger search event

            this.passedElement.triggerEvent(EVENTS.search, {
              value: value,
              resultCount: resultCount
            });
          } else if (hasUnactiveChoices) {
            // Otherwise reset choices to active
            this._isSearching = false;

            this._store.dispatch(choices_activateChoices(true));
          }
        };

        _proto._canAddItem = function _canAddItem(activeItems, value) {
          var canAddItem = true;
          var notice = typeof this.config.addItemText === 'function' ? this.config.addItemText(value) : this.config.addItemText;

          if (!this._isSelectOneElement) {
            var isDuplicateValue = existsInArray(activeItems, value);

            if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
              // If there is a max entry limit and we have reached that limit
              // don't update
              canAddItem = false;
              notice = typeof this.config.maxItemText === 'function' ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
            }

            if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
              canAddItem = false;
              notice = typeof this.config.uniqueItemText === 'function' ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
            }

            if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === 'function' && !this.config.addItemFilter(value)) {
              canAddItem = false;
              notice = typeof this.config.customAddItemText === 'function' ? this.config.customAddItemText(value) : this.config.customAddItemText;
            }
          }

          return {
            response: canAddItem,
            notice: notice
          };
        };

        _proto._searchChoices = function _searchChoices(value) {
          var newValue = typeof value === 'string' ? value.trim() : value;
          var currentValue = typeof this._currentValue === 'string' ? this._currentValue.trim() : this._currentValue;

          if (newValue.length < 1 && newValue === currentValue + " ") {
            return 0;
          } // If new value matches the desired length and is not the same as the current value with a space


          var haystack = this._store.searchableChoices;
          var needle = newValue;
          var keys = [].concat(this.config.searchFields);
          var options = Object.assign(this.config.fuseOptions, {
            keys: keys
          });
          var fuse = new fuse_default.a(haystack, options);
          var results = fuse.search(needle);
          this._currentValue = newValue;
          this._highlightPosition = 0;
          this._isSearching = true;

          this._store.dispatch(choices_filterChoices(results));

          return results.length;
        };

        _proto._addEventListeners = function _addEventListeners() {
          var _document = document,
              documentElement = _document.documentElement; // capture events - can cancel event processing or propagation

          documentElement.addEventListener('touchend', this._onTouchEnd, true);
          this.containerOuter.element.addEventListener('keydown', this._onKeyDown, true);
          this.containerOuter.element.addEventListener('mousedown', this._onMouseDown, true); // passive events - doesn't call `preventDefault` or `stopPropagation`

          documentElement.addEventListener('click', this._onClick, {
            passive: true
          });
          documentElement.addEventListener('touchmove', this._onTouchMove, {
            passive: true
          });
          this.dropdown.element.addEventListener('mouseover', this._onMouseOver, {
            passive: true
          });

          if (this._isSelectOneElement) {
            this.containerOuter.element.addEventListener('focus', this._onFocus, {
              passive: true
            });
            this.containerOuter.element.addEventListener('blur', this._onBlur, {
              passive: true
            });
          }

          this.input.element.addEventListener('keyup', this._onKeyUp, {
            passive: true
          });
          this.input.element.addEventListener('focus', this._onFocus, {
            passive: true
          });
          this.input.element.addEventListener('blur', this._onBlur, {
            passive: true
          });

          if (this.input.element.form) {
            this.input.element.form.addEventListener('reset', this._onFormReset, {
              passive: true
            });
          }

          this.input.addEventListeners();
        };

        _proto._removeEventListeners = function _removeEventListeners() {
          var _document2 = document,
              documentElement = _document2.documentElement;
          documentElement.removeEventListener('touchend', this._onTouchEnd, true);
          this.containerOuter.element.removeEventListener('keydown', this._onKeyDown, true);
          this.containerOuter.element.removeEventListener('mousedown', this._onMouseDown, true);
          documentElement.removeEventListener('click', this._onClick);
          documentElement.removeEventListener('touchmove', this._onTouchMove);
          this.dropdown.element.removeEventListener('mouseover', this._onMouseOver);

          if (this._isSelectOneElement) {
            this.containerOuter.element.removeEventListener('focus', this._onFocus);
            this.containerOuter.element.removeEventListener('blur', this._onBlur);
          }

          this.input.element.removeEventListener('keyup', this._onKeyUp);
          this.input.element.removeEventListener('focus', this._onFocus);
          this.input.element.removeEventListener('blur', this._onBlur);

          if (this.input.element.form) {
            this.input.element.form.removeEventListener('reset', this._onFormReset);
          }

          this.input.removeEventListeners();
        }
        /**
         * @param {KeyboardEvent} event
         */
        ;

        _proto._onKeyDown = function _onKeyDown(event) {
          var _keyDownActions;

          var target = event.target,
              keyCode = event.keyCode,
              ctrlKey = event.ctrlKey,
              metaKey = event.metaKey;
          var activeItems = this._store.activeItems;
          var hasFocusedInput = this.input.isFocussed;
          var hasActiveDropdown = this.dropdown.isActive;
          var hasItems = this.itemList.hasChildren();
          var keyString = String.fromCharCode(keyCode);
          var BACK_KEY = KEY_CODES.BACK_KEY,
              DELETE_KEY = KEY_CODES.DELETE_KEY,
              ENTER_KEY = KEY_CODES.ENTER_KEY,
              A_KEY = KEY_CODES.A_KEY,
              ESC_KEY = KEY_CODES.ESC_KEY,
              UP_KEY = KEY_CODES.UP_KEY,
              DOWN_KEY = KEY_CODES.DOWN_KEY,
              PAGE_UP_KEY = KEY_CODES.PAGE_UP_KEY,
              PAGE_DOWN_KEY = KEY_CODES.PAGE_DOWN_KEY;
          var hasCtrlDownKeyPressed = ctrlKey || metaKey; // If a user is typing and the dropdown is not active

          if (!this._isTextElement && /[a-zA-Z0-9-_ ]/.test(keyString)) {
            this.showDropdown();
          } // Map keys to key actions


          var keyDownActions = (_keyDownActions = {}, _keyDownActions[A_KEY] = this._onAKey, _keyDownActions[ENTER_KEY] = this._onEnterKey, _keyDownActions[ESC_KEY] = this._onEscapeKey, _keyDownActions[UP_KEY] = this._onDirectionKey, _keyDownActions[PAGE_UP_KEY] = this._onDirectionKey, _keyDownActions[DOWN_KEY] = this._onDirectionKey, _keyDownActions[PAGE_DOWN_KEY] = this._onDirectionKey, _keyDownActions[DELETE_KEY] = this._onDeleteKey, _keyDownActions[BACK_KEY] = this._onDeleteKey, _keyDownActions); // If keycode has a function, run it

          if (keyDownActions[keyCode]) {
            keyDownActions[keyCode]({
              event: event,
              target: target,
              keyCode: keyCode,
              metaKey: metaKey,
              activeItems: activeItems,
              hasFocusedInput: hasFocusedInput,
              hasActiveDropdown: hasActiveDropdown,
              hasItems: hasItems,
              hasCtrlDownKeyPressed: hasCtrlDownKeyPressed
            });
          }
        };

        _proto._onKeyUp = function _onKeyUp(_ref2) {
          var target = _ref2.target,
              keyCode = _ref2.keyCode;
          var value = this.input.value;
          var activeItems = this._store.activeItems;

          var canAddItem = this._canAddItem(activeItems, value);

          var backKey = KEY_CODES.BACK_KEY,
              deleteKey = KEY_CODES.DELETE_KEY; // We are typing into a text input and have a value, we want to show a dropdown
          // notice. Otherwise hide the dropdown

          if (this._isTextElement) {
            var canShowDropdownNotice = canAddItem.notice && value;

            if (canShowDropdownNotice) {
              var dropdownItem = this._getTemplate('notice', canAddItem.notice);

              this.dropdown.element.innerHTML = dropdownItem.outerHTML;
              this.showDropdown(true);
            } else {
              this.hideDropdown(true);
            }
          } else {
            var userHasRemovedValue = (keyCode === backKey || keyCode === deleteKey) && !target.value;
            var canReactivateChoices = !this._isTextElement && this._isSearching;
            var canSearch = this._canSearch && canAddItem.response;

            if (userHasRemovedValue && canReactivateChoices) {
              this._isSearching = false;

              this._store.dispatch(choices_activateChoices(true));
            } else if (canSearch) {
              this._handleSearch(this.input.value);
            }
          }

          this._canSearch = this.config.searchEnabled;
        };

        _proto._onAKey = function _onAKey(_ref3) {
          var hasItems = _ref3.hasItems,
              hasCtrlDownKeyPressed = _ref3.hasCtrlDownKeyPressed; // If CTRL + A or CMD + A have been pressed and there are items to select

          if (hasCtrlDownKeyPressed && hasItems) {
            this._canSearch = false;
            var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;

            if (shouldHightlightAll) {
              this.highlightAll();
            }
          }
        };

        _proto._onEnterKey = function _onEnterKey(_ref4) {
          var event = _ref4.event,
              target = _ref4.target,
              activeItems = _ref4.activeItems,
              hasActiveDropdown = _ref4.hasActiveDropdown;
          var enterKey = KEY_CODES.ENTER_KEY;
          var targetWasButton = target.hasAttribute('data-button');

          if (this._isTextElement && target.value) {
            var value = this.input.value;

            var canAddItem = this._canAddItem(activeItems, value);

            if (canAddItem.response) {
              this.hideDropdown(true);

              this._addItem({
                value: value
              });

              this._triggerChange(value);

              this.clearInput();
            }
          }

          if (targetWasButton) {
            this._handleButtonAction(activeItems, target);

            event.preventDefault();
          }

          if (hasActiveDropdown) {
            var highlightedChoice = this.dropdown.getChild("." + this.config.classNames.highlightedState);

            if (highlightedChoice) {
              // add enter keyCode value
              if (activeItems[0]) {
                activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
              }

              this._handleChoiceAction(activeItems, highlightedChoice);
            }

            event.preventDefault();
          } else if (this._isSelectOneElement) {
            this.showDropdown();
            event.preventDefault();
          }
        };

        _proto._onEscapeKey = function _onEscapeKey(_ref5) {
          var hasActiveDropdown = _ref5.hasActiveDropdown;

          if (hasActiveDropdown) {
            this.hideDropdown(true);
            this.containerOuter.focus();
          }
        };

        _proto._onDirectionKey = function _onDirectionKey(_ref6) {
          var event = _ref6.event,
              hasActiveDropdown = _ref6.hasActiveDropdown,
              keyCode = _ref6.keyCode,
              metaKey = _ref6.metaKey;
          var downKey = KEY_CODES.DOWN_KEY,
              pageUpKey = KEY_CODES.PAGE_UP_KEY,
              pageDownKey = KEY_CODES.PAGE_DOWN_KEY; // If up or down key is pressed, traverse through options

          if (hasActiveDropdown || this._isSelectOneElement) {
            this.showDropdown();
            this._canSearch = false;
            var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
            var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
            var selectableChoiceIdentifier = '[data-choice-selectable]';
            var nextEl;

            if (skipKey) {
              if (directionInt > 0) {
                nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier + ":last-of-type");
              } else {
                nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
              }
            } else {
              var currentEl = this.dropdown.element.querySelector("." + this.config.classNames.highlightedState);

              if (currentEl) {
                nextEl = getAdjacentEl(currentEl, selectableChoiceIdentifier, directionInt);
              } else {
                nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
              }
            }

            if (nextEl) {
              // We prevent default to stop the cursor moving
              // when pressing the arrow
              if (!isScrolledIntoView(nextEl, this.choiceList.element, directionInt)) {
                this.choiceList.scrollToChildElement(nextEl, directionInt);
              }

              this._highlightChoice(nextEl);
            } // Prevent default to maintain cursor position whilst
            // traversing dropdown options


            event.preventDefault();
          }
        };

        _proto._onDeleteKey = function _onDeleteKey(_ref7) {
          var event = _ref7.event,
              target = _ref7.target,
              hasFocusedInput = _ref7.hasFocusedInput,
              activeItems = _ref7.activeItems; // If backspace or delete key is pressed and the input has no value

          if (hasFocusedInput && !target.value && !this._isSelectOneElement) {
            this._handleBackspace(activeItems);

            event.preventDefault();
          }
        };

        _proto._onTouchMove = function _onTouchMove() {
          if (this._wasTap) {
            this._wasTap = false;
          }
        };

        _proto._onTouchEnd = function _onTouchEnd(event) {
          var _ref8 = event || event.touches[0],
              target = _ref8.target;

          var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);

          if (touchWasWithinContainer) {
            var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;

            if (containerWasExactTarget) {
              if (this._isTextElement) {
                this.input.focus();
              } else if (this._isSelectMultipleElement) {
                this.showDropdown();
              }
            } // Prevents focus event firing


            event.stopPropagation();
          }

          this._wasTap = true;
        }
        /**
         * Handles mousedown event in capture mode for containetOuter.element
         * @param {MouseEvent} event
         */
        ;

        _proto._onMouseDown = function _onMouseDown(event) {
          var target = event.target;

          if (!(target instanceof HTMLElement)) {
            return;
          } // If we have our mouse down on the scrollbar and are on IE11...


          if (IS_IE11 && this.choiceList.element.contains(target)) {
            // check if click was on a scrollbar area
            var firstChoice =
            /** @type {HTMLElement} */
            this.choiceList.element.firstElementChild;
            var isOnScrollbar = this._direction === 'ltr' ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
            this._isScrollingOnIe = isOnScrollbar;
          }

          if (target === this.input.element) {
            return;
          }

          var item = target.closest('[data-button],[data-item],[data-choice]');

          if (item instanceof HTMLElement) {
            var hasShiftKey = event.shiftKey;
            var activeItems = this._store.activeItems;
            var dataset = item.dataset;

            if ('button' in dataset) {
              this._handleButtonAction(activeItems, item);
            } else if ('item' in dataset) {
              this._handleItemAction(activeItems, item, hasShiftKey);
            } else if ('choice' in dataset) {
              this._handleChoiceAction(activeItems, item);
            }
          }

          event.preventDefault();
        }
        /**
         * Handles mouseover event over this.dropdown
         * @param {MouseEvent} event
         */
        ;

        _proto._onMouseOver = function _onMouseOver(_ref9) {
          var target = _ref9.target;

          if (target instanceof HTMLElement && 'choice' in target.dataset) {
            this._highlightChoice(target);
          }
        };

        _proto._onClick = function _onClick(_ref10) {
          var target = _ref10.target;
          var clickWasWithinContainer = this.containerOuter.element.contains(target);

          if (clickWasWithinContainer) {
            if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
              if (this._isTextElement) {
                if (document.activeElement !== this.input.element) {
                  this.input.focus();
                }
              } else {
                this.showDropdown();
                this.containerOuter.focus();
              }
            } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
              this.hideDropdown();
            }
          } else {
            var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;

            if (hasHighlightedItems) {
              this.unhighlightAll();
            }

            this.containerOuter.removeFocusState();
            this.hideDropdown(true);
          }
        };

        _proto._onFocus = function _onFocus(_ref11) {
          var _this17 = this,
              _focusActions;

          var target = _ref11.target;
          var focusWasWithinContainer = this.containerOuter.element.contains(target);

          if (!focusWasWithinContainer) {
            return;
          }

          var focusActions = (_focusActions = {}, _focusActions[TEXT_TYPE] = function () {
            if (target === _this17.input.element) {
              _this17.containerOuter.addFocusState();
            }
          }, _focusActions[SELECT_ONE_TYPE] = function () {
            _this17.containerOuter.addFocusState();

            if (target === _this17.input.element) {
              _this17.showDropdown(true);
            }
          }, _focusActions[SELECT_MULTIPLE_TYPE] = function () {
            if (target === _this17.input.element) {
              _this17.showDropdown(true); // If element is a select box, the focused element is the container and the dropdown
              // isn't already open, focus and show dropdown


              _this17.containerOuter.addFocusState();
            }
          }, _focusActions);
          focusActions[this.passedElement.element.type]();
        };

        _proto._onBlur = function _onBlur(_ref12) {
          var _this18 = this;

          var target = _ref12.target;
          var blurWasWithinContainer = this.containerOuter.element.contains(target);

          if (blurWasWithinContainer && !this._isScrollingOnIe) {
            var _blurActions;

            var activeItems = this._store.activeItems;
            var hasHighlightedItems = activeItems.some(function (item) {
              return item.highlighted;
            });
            var blurActions = (_blurActions = {}, _blurActions[TEXT_TYPE] = function () {
              if (target === _this18.input.element) {
                _this18.containerOuter.removeFocusState();

                if (hasHighlightedItems) {
                  _this18.unhighlightAll();
                }

                _this18.hideDropdown(true);
              }
            }, _blurActions[SELECT_ONE_TYPE] = function () {
              _this18.containerOuter.removeFocusState();

              if (target === _this18.input.element || target === _this18.containerOuter.element && !_this18._canSearch) {
                _this18.hideDropdown(true);
              }
            }, _blurActions[SELECT_MULTIPLE_TYPE] = function () {
              if (target === _this18.input.element) {
                _this18.containerOuter.removeFocusState();

                _this18.hideDropdown(true);

                if (hasHighlightedItems) {
                  _this18.unhighlightAll();
                }
              }
            }, _blurActions);
            blurActions[this.passedElement.element.type]();
          } else {
            // On IE11, clicking the scollbar blurs our input and thus
            // closes the dropdown. To stop this, we refocus our input
            // if we know we are on IE *and* are scrolling.
            this._isScrollingOnIe = false;
            this.input.element.focus();
          }
        };

        _proto._onFormReset = function _onFormReset() {
          this._store.dispatch(resetTo(this._initialState));
        };

        _proto._highlightChoice = function _highlightChoice(el) {
          var _this19 = this;

          if (el === void 0) {
            el = null;
          }

          var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));

          if (!choices.length) {
            return;
          }

          var passedEl = el;
          var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll("." + this.config.classNames.highlightedState)); // Remove any highlighted choices

          highlightedChoices.forEach(function (choice) {
            choice.classList.remove(_this19.config.classNames.highlightedState);
            choice.setAttribute('aria-selected', 'false');
          });

          if (passedEl) {
            this._highlightPosition = choices.indexOf(passedEl);
          } else {
            // Highlight choice based on last known highlight location
            if (choices.length > this._highlightPosition) {
              // If we have an option to highlight
              passedEl = choices[this._highlightPosition];
            } else {
              // Otherwise highlight the option before
              passedEl = choices[choices.length - 1];
            }

            if (!passedEl) {
              passedEl = choices[0];
            }
          }

          passedEl.classList.add(this.config.classNames.highlightedState);
          passedEl.setAttribute('aria-selected', 'true');
          this.passedElement.triggerEvent(EVENTS.highlightChoice, {
            el: passedEl
          });

          if (this.dropdown.isActive) {
            // IE11 ignores aria-label and blocks virtual keyboard
            // if aria-activedescendant is set without a dropdown
            this.input.setActiveDescendant(passedEl.id);
            this.containerOuter.setActiveDescendant(passedEl.id);
          }
        };

        _proto._addItem = function _addItem(_ref13) {
          var value = _ref13.value,
              _ref13$label = _ref13.label,
              label = _ref13$label === void 0 ? null : _ref13$label,
              _ref13$choiceId = _ref13.choiceId,
              choiceId = _ref13$choiceId === void 0 ? -1 : _ref13$choiceId,
              _ref13$groupId = _ref13.groupId,
              groupId = _ref13$groupId === void 0 ? -1 : _ref13$groupId,
              _ref13$customProperti = _ref13.customProperties,
              customProperties = _ref13$customProperti === void 0 ? null : _ref13$customProperti,
              _ref13$placeholder = _ref13.placeholder,
              placeholder = _ref13$placeholder === void 0 ? false : _ref13$placeholder,
              _ref13$keyCode = _ref13.keyCode,
              keyCode = _ref13$keyCode === void 0 ? null : _ref13$keyCode;
          var passedValue = typeof value === 'string' ? value.trim() : value;
          var passedKeyCode = keyCode;
          var passedCustomProperties = customProperties;
          var items = this._store.items;
          var passedLabel = label || passedValue;
          var passedOptionId = choiceId || -1;
          var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
          var id = items ? items.length + 1 : 1; // If a prepended value has been passed, prepend it

          if (this.config.prependValue) {
            passedValue = this.config.prependValue + passedValue.toString();
          } // If an appended value has been passed, append it


          if (this.config.appendValue) {
            passedValue += this.config.appendValue.toString();
          }

          this._store.dispatch(items_addItem({
            value: passedValue,
            label: passedLabel,
            id: id,
            choiceId: passedOptionId,
            groupId: groupId,
            customProperties: customProperties,
            placeholder: placeholder,
            keyCode: passedKeyCode
          }));

          if (this._isSelectOneElement) {
            this.removeActiveItems(id);
          } // Trigger change event


          this.passedElement.triggerEvent(EVENTS.addItem, {
            id: id,
            value: passedValue,
            label: passedLabel,
            customProperties: passedCustomProperties,
            groupValue: group && group.value ? group.value : undefined,
            keyCode: passedKeyCode
          });
          return this;
        };

        _proto._removeItem = function _removeItem(item) {
          if (!item || !isType('Object', item)) {
            return this;
          }

          var id = item.id,
              value = item.value,
              label = item.label,
              choiceId = item.choiceId,
              groupId = item.groupId;
          var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

          this._store.dispatch(items_removeItem(id, choiceId));

          if (group && group.value) {
            this.passedElement.triggerEvent(EVENTS.removeItem, {
              id: id,
              value: value,
              label: label,
              groupValue: group.value
            });
          } else {
            this.passedElement.triggerEvent(EVENTS.removeItem, {
              id: id,
              value: value,
              label: label
            });
          }

          return this;
        };

        _proto._addChoice = function _addChoice(_ref14) {
          var value = _ref14.value,
              _ref14$label = _ref14.label,
              label = _ref14$label === void 0 ? null : _ref14$label,
              _ref14$isSelected = _ref14.isSelected,
              isSelected = _ref14$isSelected === void 0 ? false : _ref14$isSelected,
              _ref14$isDisabled = _ref14.isDisabled,
              isDisabled = _ref14$isDisabled === void 0 ? false : _ref14$isDisabled,
              _ref14$groupId = _ref14.groupId,
              groupId = _ref14$groupId === void 0 ? -1 : _ref14$groupId,
              _ref14$customProperti = _ref14.customProperties,
              customProperties = _ref14$customProperti === void 0 ? null : _ref14$customProperti,
              _ref14$placeholder = _ref14.placeholder,
              placeholder = _ref14$placeholder === void 0 ? false : _ref14$placeholder,
              _ref14$keyCode = _ref14.keyCode,
              keyCode = _ref14$keyCode === void 0 ? null : _ref14$keyCode;

          if (typeof value === 'undefined' || value === null) {
            return;
          } // Generate unique id


          var choices = this._store.choices;
          var choiceLabel = label || value;
          var choiceId = choices ? choices.length + 1 : 1;
          var choiceElementId = this._baseId + "-" + this._idNames.itemChoice + "-" + choiceId;

          this._store.dispatch(choices_addChoice({
            id: choiceId,
            groupId: groupId,
            elementId: choiceElementId,
            value: value,
            label: choiceLabel,
            disabled: isDisabled,
            customProperties: customProperties,
            placeholder: placeholder,
            keyCode: keyCode
          }));

          if (isSelected) {
            this._addItem({
              value: value,
              label: choiceLabel,
              choiceId: choiceId,
              customProperties: customProperties,
              placeholder: placeholder,
              keyCode: keyCode
            });
          }
        };

        _proto._addGroup = function _addGroup(_ref15) {
          var _this20 = this;

          var group = _ref15.group,
              id = _ref15.id,
              _ref15$valueKey = _ref15.valueKey,
              valueKey = _ref15$valueKey === void 0 ? 'value' : _ref15$valueKey,
              _ref15$labelKey = _ref15.labelKey,
              labelKey = _ref15$labelKey === void 0 ? 'label' : _ref15$labelKey;
          var groupChoices = isType('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
          var groupId = id || Math.floor(new Date().valueOf() * Math.random());
          var isDisabled = group.disabled ? group.disabled : false;

          if (groupChoices) {
            this._store.dispatch(groups_addGroup({
              value: group.label,
              id: groupId,
              active: true,
              disabled: isDisabled
            }));

            var addGroupChoices = function addGroupChoices(choice) {
              var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;

              _this20._addChoice({
                value: choice[valueKey],
                label: isType('Object', choice) ? choice[labelKey] : choice.innerHTML,
                isSelected: choice.selected,
                isDisabled: isOptDisabled,
                groupId: groupId,
                customProperties: choice.customProperties,
                placeholder: choice.placeholder
              });
            };

            groupChoices.forEach(addGroupChoices);
          } else {
            this._store.dispatch(groups_addGroup({
              value: group.label,
              id: group.id,
              active: false,
              disabled: group.disabled
            }));
          }
        };

        _proto._getTemplate = function _getTemplate(template) {
          var _this$_templates$temp;

          if (!template) {
            return null;
          }

          var classNames = this.config.classNames;

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          return (_this$_templates$temp = this._templates[template]).call.apply(_this$_templates$temp, [this, classNames].concat(args));
        };

        _proto._createTemplates = function _createTemplates() {
          var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
          var userTemplates = {};

          if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === 'function') {
            userTemplates = callbackOnCreateTemplates.call(this, strToEl);
          }

          this._templates = cjs_default()(TEMPLATES, userTemplates);
        };

        _proto._createElements = function _createElements() {
          this.containerOuter = new container_Container({
            element: this._getTemplate('containerOuter', this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            position: this.config.position
          });
          this.containerInner = new container_Container({
            element: this._getTemplate('containerInner'),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            position: this.config.position
          });
          this.input = new input_Input({
            element: this._getTemplate('input', this._placeholderValue),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            preventPaste: !this.config.paste
          });
          this.choiceList = new list_List({
            element: this._getTemplate('choiceList', this._isSelectOneElement)
          });
          this.itemList = new list_List({
            element: this._getTemplate('itemList', this._isSelectOneElement)
          });
          this.dropdown = new Dropdown({
            element: this._getTemplate('dropdown'),
            classNames: this.config.classNames,
            type: this.passedElement.element.type
          });
        };

        _proto._createStructure = function _createStructure() {
          // Hide original element
          this.passedElement.conceal(); // Wrap input in container preserving DOM ordering

          this.containerInner.wrap(this.passedElement.element); // Wrapper inner container with outer container

          this.containerOuter.wrap(this.containerInner.element);

          if (this._isSelectOneElement) {
            this.input.placeholder = this.config.searchPlaceholderValue || '';
          } else if (this._placeholderValue) {
            this.input.placeholder = this._placeholderValue;
            this.input.setWidth();
          }

          this.containerOuter.element.appendChild(this.containerInner.element);
          this.containerOuter.element.appendChild(this.dropdown.element);
          this.containerInner.element.appendChild(this.itemList.element);

          if (!this._isTextElement) {
            this.dropdown.element.appendChild(this.choiceList.element);
          }

          if (!this._isSelectOneElement) {
            this.containerInner.element.appendChild(this.input.element);
          } else if (this.config.searchEnabled) {
            this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
          }

          if (this._isSelectElement) {
            this._highlightPosition = 0;
            this._isSearching = false;

            this._startLoading();

            if (this._presetGroups.length) {
              this._addPredefinedGroups(this._presetGroups);
            } else {
              this._addPredefinedChoices(this._presetChoices);
            }

            this._stopLoading();
          }

          if (this._isTextElement) {
            this._addPredefinedItems(this._presetItems);
          }
        };

        _proto._addPredefinedGroups = function _addPredefinedGroups(groups) {
          var _this21 = this; // If we have a placeholder option


          var placeholderChoice = this.passedElement.placeholderOption;

          if (placeholderChoice && placeholderChoice.parentNode.tagName === 'SELECT') {
            this._addChoice({
              value: placeholderChoice.value,
              label: placeholderChoice.innerHTML,
              isSelected: placeholderChoice.selected,
              isDisabled: placeholderChoice.disabled,
              placeholder: true
            });
          }

          groups.forEach(function (group) {
            return _this21._addGroup({
              group: group,
              id: group.id || null
            });
          });
        };

        _proto._addPredefinedChoices = function _addPredefinedChoices(choices) {
          var _this22 = this; // If sorting is enabled or the user is searching, filter choices


          if (this.config.shouldSort) {
            choices.sort(this.config.sorter);
          }

          var hasSelectedChoice = choices.some(function (choice) {
            return choice.selected;
          });
          var firstEnabledChoiceIndex = choices.findIndex(function (choice) {
            return choice.disabled === undefined || !choice.disabled;
          });
          choices.forEach(function (choice, index) {
            var value = choice.value,
                label = choice.label,
                customProperties = choice.customProperties,
                placeholder = choice.placeholder;

            if (_this22._isSelectElement) {
              // If the choice is actually a group
              if (choice.choices) {
                _this22._addGroup({
                  group: choice,
                  id: choice.id || null
                });
              } else {
                /**
                 * If there is a selected choice already or the choice is not the first in
                 * the array, add each choice normally.
                 *
                 * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
                 */
                var shouldPreselect = _this22._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
                var isSelected = shouldPreselect ? true : choice.selected;
                var isDisabled = choice.disabled;

                _this22._addChoice({
                  value: value,
                  label: label,
                  isSelected: isSelected,
                  isDisabled: isDisabled,
                  customProperties: customProperties,
                  placeholder: placeholder
                });
              }
            } else {
              _this22._addChoice({
                value: value,
                label: label,
                isSelected: choice.selected,
                isDisabled: choice.disabled,
                customProperties: customProperties,
                placeholder: placeholder
              });
            }
          });
        }
        /**
         * @param {Item[]} items
         */
        ;

        _proto._addPredefinedItems = function _addPredefinedItems(items) {
          var _this23 = this;

          items.forEach(function (item) {
            if (_typeof(item) === 'object' && item.value) {
              _this23._addItem({
                value: item.value,
                label: item.label,
                choiceId: item.id,
                customProperties: item.customProperties,
                placeholder: item.placeholder
              });
            }

            if (typeof item === 'string') {
              _this23._addItem({
                value: item
              });
            }
          });
        };

        _proto._setChoiceOrItem = function _setChoiceOrItem(item) {
          var _this24 = this;

          var itemType = getType(item).toLowerCase();
          var handleType = {
            object: function object() {
              if (!item.value) {
                return;
              } // If we are dealing with a select input, we need to create an option first
              // that is then selected. For text inputs we can just add items normally.


              if (!_this24._isTextElement) {
                _this24._addChoice({
                  value: item.value,
                  label: item.label,
                  isSelected: true,
                  isDisabled: false,
                  customProperties: item.customProperties,
                  placeholder: item.placeholder
                });
              } else {
                _this24._addItem({
                  value: item.value,
                  label: item.label,
                  choiceId: item.id,
                  customProperties: item.customProperties,
                  placeholder: item.placeholder
                });
              }
            },
            string: function string() {
              if (!_this24._isTextElement) {
                _this24._addChoice({
                  value: item,
                  label: item,
                  isSelected: true,
                  isDisabled: false
                });
              } else {
                _this24._addItem({
                  value: item
                });
              }
            }
          };
          handleType[itemType]();
        };

        _proto._findAndSelectChoiceByValue = function _findAndSelectChoiceByValue(val) {
          var _this25 = this;

          var choices = this._store.choices; // Check 'value' property exists and the choice isn't already selected

          var foundChoice = choices.find(function (choice) {
            return _this25.config.valueComparer(choice.value, val);
          });

          if (foundChoice && !foundChoice.selected) {
            this._addItem({
              value: foundChoice.value,
              label: foundChoice.label,
              choiceId: foundChoice.id,
              groupId: foundChoice.groupId,
              customProperties: foundChoice.customProperties,
              placeholder: foundChoice.placeholder,
              keyCode: foundChoice.keyCode
            });
          }
        };

        _proto._generatePlaceholderValue = function _generatePlaceholderValue() {
          if (this._isSelectElement) {
            var placeholderOption = this.passedElement.placeholderOption;
            return placeholderOption ? placeholderOption.text : false;
          }

          var _this$config4 = this.config,
              placeholder = _this$config4.placeholder,
              placeholderValue = _this$config4.placeholderValue;
          var dataset = this.passedElement.element.dataset;

          if (placeholder) {
            if (placeholderValue) {
              return placeholderValue;
            }

            if (dataset.placeholder) {
              return dataset.placeholder;
            }
          }

          return false;
        };

        return Choices;
      }();
      /* harmony default export */


      var scripts_choices = __webpack_exports__["default"] = choices_Choices;
      /***/
    }
    /******/
    ])["default"]
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/choices.js/public/assets/styles/choices.css":
/*!******************************************************************!*\
  !*** ./node_modules/choices.js/public/assets/styles/choices.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/dialog-polyfill/dialog-polyfill.js":
/*!*********************************************************!*\
  !*** ./node_modules/dialog-polyfill/dialog-polyfill.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  // nb. This is for IE10 and lower _only_.
  var supportCustomEvent = window.CustomEvent;

  if (!supportCustomEvent || _typeof(supportCustomEvent) === 'object') {
    supportCustomEvent = function CustomEvent(event, x) {
      x = x || {};
      var ev = document.createEvent('CustomEvent');
      ev.initCustomEvent(event, !!x.bubbles, !!x.cancelable, x.detail || null);
      return ev;
    };

    supportCustomEvent.prototype = window.Event.prototype;
  }
  /**
   * @param {Element} el to check for stacking context
   * @return {boolean} whether this el or its parents creates a stacking context
   */


  function createsStackingContext(el) {
    while (el && el !== document.body) {
      var s = window.getComputedStyle(el);

      var invalid = function invalid(k, ok) {
        return !(s[k] === undefined || s[k] === ok);
      };

      if (s.opacity < 1 || invalid('zIndex', 'auto') || invalid('transform', 'none') || invalid('mixBlendMode', 'normal') || invalid('filter', 'none') || invalid('perspective', 'none') || s['isolation'] === 'isolate' || s.position === 'fixed' || s.webkitOverflowScrolling === 'touch') {
        return true;
      }

      el = el.parentElement;
    }

    return false;
  }
  /**
   * Finds the nearest <dialog> from the passed element.
   *
   * @param {Element} el to search from
   * @return {HTMLDialogElement} dialog found
   */


  function findNearestDialog(el) {
    while (el) {
      if (el.localName === 'dialog') {
        return (
          /** @type {HTMLDialogElement} */
          el
        );
      }

      el = el.parentElement;
    }

    return null;
  }
  /**
   * Blur the specified element, as long as it's not the HTML body element.
   * This works around an IE9/10 bug - blurring the body causes Windows to
   * blur the whole application.
   *
   * @param {Element} el to blur
   */


  function safeBlur(el) {
    if (el && el.blur && el !== document.body) {
      el.blur();
    }
  }
  /**
   * @param {!NodeList} nodeList to search
   * @param {Node} node to find
   * @return {boolean} whether node is inside nodeList
   */


  function inNodeList(nodeList, node) {
    for (var i = 0; i < nodeList.length; ++i) {
      if (nodeList[i] === node) {
        return true;
      }
    }

    return false;
  }
  /**
   * @param {HTMLFormElement} el to check
   * @return {boolean} whether this form has method="dialog"
   */


  function isFormMethodDialog(el) {
    if (!el || !el.hasAttribute('method')) {
      return false;
    }

    return el.getAttribute('method').toLowerCase() === 'dialog';
  }
  /**
   * @param {!HTMLDialogElement} dialog to upgrade
   * @constructor
   */


  function dialogPolyfillInfo(dialog) {
    this.dialog_ = dialog;
    this.replacedStyleTop_ = false;
    this.openAsModal_ = false; // Set a11y role. Browsers that support dialog implicitly know this already.

    if (!dialog.hasAttribute('role')) {
      dialog.setAttribute('role', 'dialog');
    }

    dialog.show = this.show.bind(this);
    dialog.showModal = this.showModal.bind(this);
    dialog.close = this.close.bind(this);

    if (!('returnValue' in dialog)) {
      dialog.returnValue = '';
    }

    if ('MutationObserver' in window) {
      var mo = new MutationObserver(this.maybeHideModal.bind(this));
      mo.observe(dialog, {
        attributes: true,
        attributeFilter: ['open']
      });
    } else {
      // IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also
      // seem to fire even if the element was removed as part of a parent removal. Use the removed
      // events to force downgrade (useful if removed/immediately added).
      var removed = false;

      var cb = function () {
        removed ? this.downgradeModal() : this.maybeHideModal();
        removed = false;
      }.bind(this);

      var timeout;

      var delayModel = function delayModel(ev) {
        if (ev.target !== dialog) {
          return;
        } // not for a child element


        var cand = 'DOMNodeRemoved';
        removed |= ev.type.substr(0, cand.length) === cand;
        window.clearTimeout(timeout);
        timeout = window.setTimeout(cb, 0);
      };

      ['DOMAttrModified', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument'].forEach(function (name) {
        dialog.addEventListener(name, delayModel);
      });
    } // Note that the DOM is observed inside DialogManager while any dialog
    // is being displayed as a modal, to catch modal removal from the DOM.


    Object.defineProperty(dialog, 'open', {
      set: this.setOpen.bind(this),
      get: dialog.hasAttribute.bind(dialog, 'open')
    });
    this.backdrop_ = document.createElement('div');
    this.backdrop_.className = 'backdrop';
    this.backdrop_.addEventListener('click', this.backdropClick_.bind(this));
  }

  dialogPolyfillInfo.prototype = {
    get dialog() {
      return this.dialog_;
    },

    /**
     * Maybe remove this dialog from the modal top layer. This is called when
     * a modal dialog may no longer be tenable, e.g., when the dialog is no
     * longer open or is no longer part of the DOM.
     */
    maybeHideModal: function maybeHideModal() {
      if (this.dialog_.hasAttribute('open') && document.body.contains(this.dialog_)) {
        return;
      }

      this.downgradeModal();
    },

    /**
     * Remove this dialog from the modal top layer, leaving it as a non-modal.
     */
    downgradeModal: function downgradeModal() {
      if (!this.openAsModal_) {
        return;
      }

      this.openAsModal_ = false;
      this.dialog_.style.zIndex = ''; // This won't match the native <dialog> exactly because if the user set top on a centered
      // polyfill dialog, that top gets thrown away when the dialog is closed. Not sure it's
      // possible to polyfill this perfectly.

      if (this.replacedStyleTop_) {
        this.dialog_.style.top = '';
        this.replacedStyleTop_ = false;
      } // Clear the backdrop and remove from the manager.


      this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_);
      dialogPolyfill.dm.removeDialog(this);
    },

    /**
     * @param {boolean} value whether to open or close this dialog
     */
    setOpen: function setOpen(value) {
      if (value) {
        this.dialog_.hasAttribute('open') || this.dialog_.setAttribute('open', '');
      } else {
        this.dialog_.removeAttribute('open');
        this.maybeHideModal(); // nb. redundant with MutationObserver
      }
    },

    /**
     * Handles clicks on the fake .backdrop element, redirecting them as if
     * they were on the dialog itself.
     *
     * @param {!Event} e to redirect
     */
    backdropClick_: function backdropClick_(e) {
      if (!this.dialog_.hasAttribute('tabindex')) {
        // Clicking on the backdrop should move the implicit cursor, even if dialog cannot be
        // focused. Create a fake thing to focus on. If the backdrop was _before_ the dialog, this
        // would not be needed - clicks would move the implicit cursor there.
        var fake = document.createElement('div');
        this.dialog_.insertBefore(fake, this.dialog_.firstChild);
        fake.tabIndex = -1;
        fake.focus();
        this.dialog_.removeChild(fake);
      } else {
        this.dialog_.focus();
      }

      var redirectedEvent = document.createEvent('MouseEvents');
      redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
      this.dialog_.dispatchEvent(redirectedEvent);
      e.stopPropagation();
    },

    /**
     * Focuses on the first focusable element within the dialog. This will always blur the current
     * focus, even if nothing within the dialog is found.
     */
    focus_: function focus_() {
      // Find element with `autofocus` attribute, or fall back to the first form/tabindex control.
      var target = this.dialog_.querySelector('[autofocus]:not([disabled])');

      if (!target && this.dialog_.tabIndex >= 0) {
        target = this.dialog_;
      }

      if (!target) {
        // Note that this is 'any focusable area'. This list is probably not exhaustive, but the
        // alternative involves stepping through and trying to focus everything.
        var opts = ['button', 'input', 'keygen', 'select', 'textarea'];
        var query = opts.map(function (el) {
          return el + ':not([disabled])';
        }); // TODO(samthor): tabindex values that are not numeric are not focusable.

        query.push('[tabindex]:not([disabled]):not([tabindex=""])'); // tabindex != "", not disabled

        target = this.dialog_.querySelector(query.join(', '));
      }

      safeBlur(document.activeElement);
      target && target.focus();
    },

    /**
     * Sets the zIndex for the backdrop and dialog.
     *
     * @param {number} dialogZ
     * @param {number} backdropZ
     */
    updateZIndex: function updateZIndex(dialogZ, backdropZ) {
      if (dialogZ < backdropZ) {
        throw new Error('dialogZ should never be < backdropZ');
      }

      this.dialog_.style.zIndex = dialogZ;
      this.backdrop_.style.zIndex = backdropZ;
    },

    /**
     * Shows the dialog. If the dialog is already open, this does nothing.
     */
    show: function show() {
      if (!this.dialog_.open) {
        this.setOpen(true);
        this.focus_();
      }
    },

    /**
     * Show this dialog modally.
     */
    showModal: function showModal() {
      if (this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is already open, and therefore cannot be opened modally.');
      }

      if (!document.body.contains(this.dialog_)) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is not in a Document.');
      }

      if (!dialogPolyfill.dm.pushDialog(this)) {
        throw new Error('Failed to execute \'showModal\' on dialog: There are too many open modal dialogs.');
      }

      if (createsStackingContext(this.dialog_.parentElement)) {
        console.warn('A dialog is being shown inside a stacking context. ' + 'This may cause it to be unusable. For more information, see this link: ' + 'https://github.com/GoogleChrome/dialog-polyfill/#stacking-context');
      }

      this.setOpen(true);
      this.openAsModal_ = true; // Optionally center vertically, relative to the current viewport.

      if (dialogPolyfill.needsCentering(this.dialog_)) {
        dialogPolyfill.reposition(this.dialog_);
        this.replacedStyleTop_ = true;
      } else {
        this.replacedStyleTop_ = false;
      } // Insert backdrop.


      this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling); // Focus on whatever inside the dialog.

      this.focus_();
    },

    /**
     * Closes this HTMLDialogElement. This is optional vs clearing the open
     * attribute, however this fires a 'close' event.
     *
     * @param {string=} opt_returnValue to use as the returnValue
     */
    close: function close(opt_returnValue) {
      if (!this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'close\' on dialog: The element does not have an \'open\' attribute, and therefore cannot be closed.');
      }

      this.setOpen(false); // Leave returnValue untouched in case it was set directly on the element

      if (opt_returnValue !== undefined) {
        this.dialog_.returnValue = opt_returnValue;
      } // Triggering "close" event for any attached listeners on the <dialog>.


      var closeEvent = new supportCustomEvent('close', {
        bubbles: false,
        cancelable: false
      });
      this.dialog_.dispatchEvent(closeEvent);
    }
  };
  var dialogPolyfill = {};

  dialogPolyfill.reposition = function (element) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var topValue = scrollTop + (window.innerHeight - element.offsetHeight) / 2;
    element.style.top = Math.max(scrollTop, topValue) + 'px';
  };

  dialogPolyfill.isInlinePositionSetByStylesheet = function (element) {
    for (var i = 0; i < document.styleSheets.length; ++i) {
      var styleSheet = document.styleSheets[i];
      var cssRules = null; // Some browsers throw on cssRules.

      try {
        cssRules = styleSheet.cssRules;
      } catch (e) {}

      if (!cssRules) {
        continue;
      }

      for (var j = 0; j < cssRules.length; ++j) {
        var rule = cssRules[j];
        var selectedNodes = null; // Ignore errors on invalid selector texts.

        try {
          selectedNodes = document.querySelectorAll(rule.selectorText);
        } catch (e) {}

        if (!selectedNodes || !inNodeList(selectedNodes, element)) {
          continue;
        }

        var cssTop = rule.style.getPropertyValue('top');
        var cssBottom = rule.style.getPropertyValue('bottom');

        if (cssTop && cssTop !== 'auto' || cssBottom && cssBottom !== 'auto') {
          return true;
        }
      }
    }

    return false;
  };

  dialogPolyfill.needsCentering = function (dialog) {
    var computedStyle = window.getComputedStyle(dialog);

    if (computedStyle.position !== 'absolute') {
      return false;
    } // We must determine whether the top/bottom specified value is non-auto.  In
    // WebKit/Blink, checking computedStyle.top == 'auto' is sufficient, but
    // Firefox returns the used value. So we do this crazy thing instead: check
    // the inline style and then go through CSS rules.


    if (dialog.style.top !== 'auto' && dialog.style.top !== '' || dialog.style.bottom !== 'auto' && dialog.style.bottom !== '') {
      return false;
    }

    return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);
  };
  /**
   * @param {!Element} element to force upgrade
   */


  dialogPolyfill.forceRegisterDialog = function (element) {
    if (window.HTMLDialogElement || element.showModal) {
      console.warn('This browser already supports <dialog>, the polyfill ' + 'may not work correctly', element);
    }

    if (element.localName !== 'dialog') {
      throw new Error('Failed to register dialog: The element is not a dialog.');
    }

    new dialogPolyfillInfo(
    /** @type {!HTMLDialogElement} */
    element);
  };
  /**
   * @param {!Element} element to upgrade, if necessary
   */


  dialogPolyfill.registerDialog = function (element) {
    if (!element.showModal) {
      dialogPolyfill.forceRegisterDialog(element);
    }
  };
  /**
   * @constructor
   */


  dialogPolyfill.DialogManager = function () {
    /** @type {!Array<!dialogPolyfillInfo>} */
    this.pendingDialogStack = [];
    var checkDOM = this.checkDOM_.bind(this); // The overlay is used to simulate how a modal dialog blocks the document.
    // The blocking dialog is positioned on top of the overlay, and the rest of
    // the dialogs on the pending dialog stack are positioned below it. In the
    // actual implementation, the modal dialog stacking is controlled by the
    // top layer, where z-index has no effect.

    this.overlay = document.createElement('div');
    this.overlay.className = '_dialog_overlay';
    this.overlay.addEventListener('click', function (e) {
      this.forwardTab_ = undefined;
      e.stopPropagation();
      checkDOM([]); // sanity-check DOM
    }.bind(this));
    this.handleKey_ = this.handleKey_.bind(this);
    this.handleFocus_ = this.handleFocus_.bind(this);
    this.zIndexLow_ = 100000;
    this.zIndexHigh_ = 100000 + 150;
    this.forwardTab_ = undefined;

    if ('MutationObserver' in window) {
      this.mo_ = new MutationObserver(function (records) {
        var removed = [];
        records.forEach(function (rec) {
          for (var i = 0, c; c = rec.removedNodes[i]; ++i) {
            if (!(c instanceof Element)) {
              continue;
            } else if (c.localName === 'dialog') {
              removed.push(c);
            }

            removed = removed.concat(c.querySelectorAll('dialog'));
          }
        });
        removed.length && checkDOM(removed);
      });
    }
  };
  /**
   * Called on the first modal dialog being shown. Adds the overlay and related
   * handlers.
   */


  dialogPolyfill.DialogManager.prototype.blockDocument = function () {
    document.documentElement.addEventListener('focus', this.handleFocus_, true);
    document.addEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.observe(document, {
      childList: true,
      subtree: true
    });
  };
  /**
   * Called on the first modal dialog being removed, i.e., when no more modal
   * dialogs are visible.
   */


  dialogPolyfill.DialogManager.prototype.unblockDocument = function () {
    document.documentElement.removeEventListener('focus', this.handleFocus_, true);
    document.removeEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.disconnect();
  };
  /**
   * Updates the stacking of all known dialogs.
   */


  dialogPolyfill.DialogManager.prototype.updateStacking = function () {
    var zIndex = this.zIndexHigh_;

    for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
      dpi.updateZIndex(--zIndex, --zIndex);

      if (i === 0) {
        this.overlay.style.zIndex = --zIndex;
      }
    } // Make the overlay a sibling of the dialog itself.


    var last = this.pendingDialogStack[0];

    if (last) {
      var p = last.dialog.parentNode || document.body;
      p.appendChild(this.overlay);
    } else if (this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
  };
  /**
   * @param {Element} candidate to check if contained or is the top-most modal dialog
   * @return {boolean} whether candidate is contained in top dialog
   */


  dialogPolyfill.DialogManager.prototype.containedByTopDialog_ = function (candidate) {
    while (candidate = findNearestDialog(candidate)) {
      for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
        if (dpi.dialog === candidate) {
          return i === 0; // only valid if top-most
        }
      }

      candidate = candidate.parentElement;
    }

    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleFocus_ = function (event) {
    if (this.containedByTopDialog_(event.target)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    safeBlur(
    /** @type {Element} */
    event.target);

    if (this.forwardTab_ === undefined) {
      return;
    } // move focus only from a tab key


    var dpi = this.pendingDialogStack[0];
    var dialog = dpi.dialog;
    var position = dialog.compareDocumentPosition(event.target);

    if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      if (this.forwardTab_) {
        // forward
        dpi.focus_();
      } else {
        // backwards
        document.documentElement.focus();
      }
    } else {// TODO: Focus after the dialog, is ignored.
    }

    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleKey_ = function (event) {
    this.forwardTab_ = undefined;

    if (event.keyCode === 27) {
      event.preventDefault();
      event.stopPropagation();
      var cancelEvent = new supportCustomEvent('cancel', {
        bubbles: false,
        cancelable: true
      });
      var dpi = this.pendingDialogStack[0];

      if (dpi && dpi.dialog.dispatchEvent(cancelEvent)) {
        dpi.dialog.close();
      }
    } else if (event.keyCode === 9) {
      this.forwardTab_ = !event.shiftKey;
    }
  };
  /**
   * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are
   * removed and immediately readded don't stay modal, they become normal.
   *
   * @param {!Array<!HTMLDialogElement>} removed that have definitely been removed
   */


  dialogPolyfill.DialogManager.prototype.checkDOM_ = function (removed) {
    // This operates on a clone because it may cause it to change. Each change also calls
    // updateStacking, which only actually needs to happen once. But who removes many modal dialogs
    // at a time?!
    var clone = this.pendingDialogStack.slice();
    clone.forEach(function (dpi) {
      if (removed.indexOf(dpi.dialog) !== -1) {
        dpi.downgradeModal();
      } else {
        dpi.maybeHideModal();
      }
    });
  };
  /**
   * @param {!dialogPolyfillInfo} dpi
   * @return {boolean} whether the dialog was allowed
   */


  dialogPolyfill.DialogManager.prototype.pushDialog = function (dpi) {
    var allowed = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;

    if (this.pendingDialogStack.length >= allowed) {
      return false;
    }

    if (this.pendingDialogStack.unshift(dpi) === 1) {
      this.blockDocument();
    }

    this.updateStacking();
    return true;
  };
  /**
   * @param {!dialogPolyfillInfo} dpi
   */


  dialogPolyfill.DialogManager.prototype.removeDialog = function (dpi) {
    var index = this.pendingDialogStack.indexOf(dpi);

    if (index === -1) {
      return;
    }

    this.pendingDialogStack.splice(index, 1);

    if (this.pendingDialogStack.length === 0) {
      this.unblockDocument();
    }

    this.updateStacking();
  };

  dialogPolyfill.dm = new dialogPolyfill.DialogManager();
  dialogPolyfill.formSubmitter = null;
  dialogPolyfill.useValue = null;
  /**
   * Installs global handlers, such as click listers and native method overrides. These are needed
   * even if a no dialog is registered, as they deal with <form method="dialog">.
   */

  if (window.HTMLDialogElement === undefined) {
    /**
     * If HTMLFormElement translates method="DIALOG" into 'get', then replace the descriptor with
     * one that returns the correct value.
     */
    var testForm = document.createElement('form');
    testForm.setAttribute('method', 'dialog');

    if (testForm.method !== 'dialog') {
      var methodDescriptor = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'method');

      if (methodDescriptor) {
        // nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything
        // and don't bother to update the element.
        var realGet = methodDescriptor.get;

        methodDescriptor.get = function () {
          if (isFormMethodDialog(this)) {
            return 'dialog';
          }

          return realGet.call(this);
        };

        var realSet = methodDescriptor.set;

        methodDescriptor.set = function (v) {
          if (typeof v === 'string' && v.toLowerCase() === 'dialog') {
            return this.setAttribute('method', v);
          }

          return realSet.call(this, v);
        };

        Object.defineProperty(HTMLFormElement.prototype, 'method', methodDescriptor);
      }
    }
    /**
     * Global 'click' handler, to capture the <input type="submit"> or <button> element which has
     * submitted a <form method="dialog">. Needed as Safari and others don't report this inside
     * document.activeElement.
     */


    document.addEventListener('click', function (ev) {
      dialogPolyfill.formSubmitter = null;
      dialogPolyfill.useValue = null;

      if (ev.defaultPrevented) {
        return;
      } // e.g. a submit which prevents default submission


      var target =
      /** @type {Element} */
      ev.target;

      if (!target || !isFormMethodDialog(target.form)) {
        return;
      }

      var valid = target.type === 'submit' && ['button', 'input'].indexOf(target.localName) > -1;

      if (!valid) {
        if (!(target.localName === 'input' && target.type === 'image')) {
          return;
        } // this is a <input type="image">, which can submit forms


        dialogPolyfill.useValue = ev.offsetX + ',' + ev.offsetY;
      }

      var dialog = findNearestDialog(target);

      if (!dialog) {
        return;
      }

      dialogPolyfill.formSubmitter = target;
    }, false);
    /**
     * Replace the native HTMLFormElement.submit() method, as it won't fire the
     * submit event and give us a chance to respond.
     */

    var nativeFormSubmit = HTMLFormElement.prototype.submit;

    var replacementFormSubmit = function replacementFormSubmit() {
      if (!isFormMethodDialog(this)) {
        return nativeFormSubmit.call(this);
      }

      var dialog = findNearestDialog(this);
      dialog && dialog.close();
    };

    HTMLFormElement.prototype.submit = replacementFormSubmit;
    /**
     * Global form 'dialog' method handler. Closes a dialog correctly on submit
     * and possibly sets its return value.
     */

    document.addEventListener('submit', function (ev) {
      var form =
      /** @type {HTMLFormElement} */
      ev.target;

      if (!isFormMethodDialog(form)) {
        return;
      }

      ev.preventDefault();
      var dialog = findNearestDialog(form);

      if (!dialog) {
        return;
      } // Forms can only be submitted via .submit() or a click (?), but anyway: sanity-check that
      // the submitter is correct before using its value as .returnValue.


      var s = dialogPolyfill.formSubmitter;

      if (s && s.form === form) {
        dialog.close(dialogPolyfill.useValue || s.value);
      } else {
        dialog.close();
      }

      dialogPolyfill.formSubmitter = null;
    }, true);
  }

  dialogPolyfill['forceRegisterDialog'] = dialogPolyfill.forceRegisterDialog;
  dialogPolyfill['registerDialog'] = dialogPolyfill.registerDialog;

  if ( true && 'amd' in __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")) {
    // AMD support
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return dialogPolyfill;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (( false ? undefined : _typeof(module)) === 'object' && _typeof(module['exports']) === 'object') {
    // CommonJS support
    module['exports'] = dialogPolyfill;
  } else {
    // all others
    window['dialogPolyfill'] = dialogPolyfill;
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/shubox/index.js":
/*!**************************************!*\
  !*** ./node_modules/shubox/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shubox_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shubox/core */ "./node_modules/@shubox/core/dist/module/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_shubox_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-05b5e6e790067533ff21.js.map