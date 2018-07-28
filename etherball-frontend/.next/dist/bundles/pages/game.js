module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/PointCounter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = "/Users/ryansimpson/code/etherball/etherball-frontend/components/PointCounter.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 20px;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  letter-spacing: 1px;\n  font-family: Avenir-Heavy;\n  font-size: 14px;\n  color: #212121;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-family: Avenir-MediumOblique;\n  font-size: 30px;\n  color: #212121;\n  margin: 0;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var PointCounter = function PointCounter(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Center, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "HOME"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Points, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.homePoints)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Center, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "AWAY"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Points, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, props.awayPoints)));
};

var Center = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);
var Row = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject2);
var Header = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.p(_templateObject3);
var Points = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.p(_templateObject4);
/* harmony default export */ __webpack_exports__["a"] = (PointCounter);

/***/ }),

/***/ "./components/Statbox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = "/Users/ryansimpson/code/etherball/etherball-frontend/components/Statbox.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  background-color: #F9F9F9;\n  border-radius: 8px;\n  padding: 10px;\n  margin: 10px;\n  width: 300px;\n  margin-right: 40px;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-family: Avenir-Medium;\n  letter-spacing: 0.5px;\n  font-size: 14px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  color: #212121;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-family: Avenir-Heavy;\n  font-size: 16px;\n  margin: 0;\n  margin-right: 5px;\n  color: #212121;\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  border-radius: 8px;\n  height: 60px;\n  width: 60px;\n  margin-right: 10px;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Statbox = function Statbox(props) {
  var player = props.player;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Box, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Player, {
    src: props.source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, player.player.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Paragraph, {
    style: {
      color: "#DCDCDC",
      marginLeft: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, player.player.position)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Numb, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, player.player.points, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    style: {
      fontFamily: "Avenir-Medium",
      fontSize: "10px",
      marginLeft: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "PTS")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Numb, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, player.player.rebounds, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    style: {
      fontFamily: "Avenir-Medium",
      fontSize: "10px",
      marginLeft: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "REB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Numb, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, player.player.assists, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    style: {
      fontFamily: "Avenir-Medium",
      fontSize: "10px",
      marginLeft: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "AST")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Numb, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, player.player.makes, "/", player.player.shots, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    style: {
      fontFamily: "Avenir-Medium",
      fontSize: "10px",
      marginLeft: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, "FG"))))));
};

var Box = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);
var Column = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject2);
var Paragraph = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.p(_templateObject3);
var Numb = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.p(_templateObject4);
var Row = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject5);
var Player = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.img(_templateObject6);
/* harmony default export */ __webpack_exports__["a"] = (Statbox);

/***/ }),

/***/ "./components/ball.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ball; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = "/Users/ryansimpson/code/etherball/etherball-frontend/components/ball.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n      0% {\n        top: ", ";\n        right: ", ";\n      }\n      100% {\n        top: ", ";\n        right: ", ";\n        transform: translate(", "px, ", "px);\n      }"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n      0% {\n        top: ", ";\n        right: ", ";\n      }\n      50% {\n        transform: translate(", "px, ", "px);\n      }\n      100% {\n        top: 40 * 7;\n        right: 60 * 6;\n        transform: translate(", "px, ", "px);\n      }"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 60px;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Ball =
/*#__PURE__*/
function (_Component) {
  _inherits(Ball, _Component);

  function Ball(props) {
    var _this;

    _classCallCheck(this, Ball);

    _this = _possibleConstructorReturn(this, (Ball.__proto__ || Object.getPrototypeOf(Ball)).call(this, props));
    _this.state = {};
    _this.newKeyframes = _this.newKeyframes.bind(_assertThisInitialized(_this));
    _this.shotKeyframes = _this.shotKeyframes.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Ball, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        x: this.convertXToCourtDepth(this.props.player.player.x * 8 + 30, this.props.player.player.y),
        y: this.props.player.player.y * 4 + 20,
        previousX: this.convertXToCourtDepth(this.props.pastPosition.player.x * 8 + 30, this.props.pastPosition.player.y),
        previousY: this.props.pastPosition.player.y * 4 + 20
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        x: this.convertXToCourtDepth(nextProps.player.player.x * 8 + 30, nextProps.player.player.y),
        y: nextProps.player.player.y * 4 + 20,
        previousX: this.convertXToCourtDepth(nextProps.pastPosition.player.x * 8 + 30, nextProps.pastPosition.player.y),
        previousY: nextProps.pastPosition.player.y * 4 + 20
      });
    }
  }, {
    key: "newKeyframes",
    value: function newKeyframes() {
      return Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["keyframes"])(_templateObject, this.state.previousY + window.innerWidth * 0.53 / 2, window.innerWidth / 2 - this.state.previousX, this.state.y + window.innerWidth * 0.53 / 2, window.innerWidth / 2 - this.state.x, this.state.x - this.state.previousX, this.state.y - this.state.previousY);
    }
  }, {
    key: "shotKeyframes",
    value: function shotKeyframes() {
      var sign = this.props.possession === 1 ? 1 : -1;
      return Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["keyframes"])(_templateObject2, this.state.previousY + window.innerWidth * 0.53 / 2, window.innerWidth / 2 - this.state.previousX, (sign * 70 * 5 - this.state.previousX) / 2, -250 - this.state.previousY, sign * 71 * 5 - this.state.previousX, -110 - this.state.previousY);
    }
  }, {
    key: "convertXToCourtDepth",
    value: function convertXToCourtDepth(x, y) {
      var unit = 1 - (-1 * y + 25) / 50 * (170 / 310);
      return unit * x;
    }
  }, {
    key: "render",
    value: function render() {
      var newAnimation = this.props.shot ? this.shotKeyframes() : this.newKeyframes();
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Block, {
        style: {
          animation: "".concat(newAnimation, " 2s ease-in-out"),
          position: "absolute",
          right: window.innerWidth / 2 - this.state.previousX,
          top: this.state.previousY + window.innerWidth * 0.53 / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://cdn.rawgit.com/rsimpsonn/038f31eb1e600ca1a1217d976b4812ec/raw/54b47e60a0ff95a9724638c38299769c4535dd03/basketball-sprite.svg",
        style: {
          width: 60,
          height: 60
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }));
    }
  }]);

  return Ball;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


var Block = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject3);

/***/ }),

/***/ "./components/grid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Statbox__ = __webpack_require__("./components/Statbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player__ = __webpack_require__("./components/player.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ball__ = __webpack_require__("./components/ball.js");
var _jsxFileName = "/Users/ryansimpson/code/etherball/etherball-frontend/components/grid.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100%;\n  height: 350px;\n  background-image: url(https://cdn.rawgit.com/rsimpsonn/6a1f5f9d961adfef1d46a6c2345da7e7/raw/670ef000a3d7a1b749d008dd8b31b0841b2b1468/court-layout.svg);\n  background-repeat: no-repeat;\n  background-size: 960px auto;\n  background-position: center;\n  position: relative;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-family: Avenir-Medium;\n  letter-spacing: 0.5px;\n  color: #212121;\n  font-size: 14px;\n  text-align: center;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Grid =
/*#__PURE__*/
function (_Component) {
  _inherits(Grid, _Component);

  function Grid(props) {
    var _this;

    _classCallCheck(this, Grid);

    _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));
    _this.state = {
      message: _this.props.message,
      pastMessage: _this.props.pastMessage,
      width: 0,
      height: 0
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_assertThisInitialized(_this));
    _this.returnPastPosition = _this.returnPastPosition.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Grid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      this.setState({
        width: window.innerWidth,
        height: window.innerWidth * 0.53,
        windowHeight: window.innerHeight
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        message: nextProps.message
      });
    }
  }, {
    key: "positionToIndex",
    value: function positionToIndex(position) {
      var index = 0;

      switch (position) {
        case "PG":
          break;

        case "SG":
          index = 1;
          break;

        case "SF":
          index = 2;
          break;

        case "PF":
          index = 3;
          break;

        case "C":
          index = 4;
          break;
      }

      return index;
    }
  }, {
    key: "returnPastPosition",
    value: function returnPastPosition(player) {
      var pastMessage;

      if (this.state.message.possession === this.props.pastMessage.possession) {
        pastMessage = this.props.pastMessage[player.player.team === this.state.message.possession ? "offense" : "defense"][this.positionToIndex(player.player.position)];
      } else {
        pastMessage = this.props.pastMessage[player.player.team === this.state.message.possession ? "defense" : "offense"][this.positionToIndex(player.player.position)];
      }

      console.log(player.player.name, pastMessage.player.name);
      return pastMessage;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var homeTeam = [];
      var awayTeam = [];

      if (this.state.message) {
        if (this.state.message.possession === 1) {
          homeTeam = this.state.message.offense;
          awayTeam = this.state.message.defense;
        } else {
          awayTeam = this.state.message.offense;
          homeTeam = this.state.message.defense;
        }
      }

      var players = homeTeam.concat(awayTeam);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, this.state.message.message), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Column, {
        style: {
          paddingBottom: -10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://cdn.rawgit.com/rsimpsonn/6a1f5f9d961adfef1d46a6c2345da7e7/raw/e699b086d3e83309d3d174919f7dce28fc4168bc/court-layout.svg",
        style: {
          width: 980,
          height: "auto",
          margin: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), players.sort(function (a, b) {
        return a.player.y - b.player.y;
      }).map(function (player, index) {
        if (player.player.name === "Goofy") {
          console.log(player.player.team, _this2.state.message.possession);
        }

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__player__["a" /* default */], {
          player: player,
          pastPosition: _this2.returnPastPosition(player),
          species: player.player.species,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        });
      }), this.state.message && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ball__["a" /* default */], {
        offense: true,
        player: this.state.message.ballCarrier,
        pastPosition: this.props.pastMessage.ballCarrier,
        shot: this.state.message.message.includes("shot"),
        possession: this.state.message.possession,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "Q", this.state.message.quarter, " ", Math.floor(this.state.message.time / 60), ":", Math.round(this.state.message.time % 60) < 10 ? "0" : "", Math.round(this.state.message.time % 60)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, homeTeam.map(function (player) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Statbox__["a" /* default */], {
          player: player,
          species: "bear",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, awayTeam.map(function (player) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Statbox__["a" /* default */], {
          player: player,
          species: "bunny",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        });
      }))));
    }
  }]);

  return Grid;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


var Court = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);
var Header = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.p(_templateObject2);
var Row = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject3);
var Column = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject4);

/***/ }),

/***/ "./components/player.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playerAnimations_index__ = __webpack_require__("./components/playerAnimations/index.js");
var _jsxFileName = "/Users/ryansimpson/code/etherball/etherball-frontend/components/player.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n      0% {\n        top: ", ";\n        right: ", ";\n      }\n      100% {\n        top: ", ";\n        right: ", ";\n        transform: translate(", "px, ", "px);\n      }"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 60px;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RIGHT = 0;
var FORWARD = 1;
var LEFT = 2;
var BACK = 3;

var Player =
/*#__PURE__*/
function (_Component) {
  _inherits(Player, _Component);

  function Player(props) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));
    _this.state = {
      index: 0,
      direction: RIGHT,
      loopIndex: 0
    };
    console.log(_this.props.species);
    _this.sprites = __WEBPACK_IMPORTED_MODULE_2__playerAnimations_index__["a" /* default */][_this.props.species]; // this.newKeyframes = this.newKeyframes.bind(this);

    return _this;
  }

  _createClass(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        _this2.setState({
          index: _this2.state.index + 1 === _this2.sprites[RIGHT].length ? 0 : _this2.state.index + 1
        });
      }, 180);
      this.setState({
        x: this.convertXToCourtDepth(this.props.player.player.x * 8 + 30, this.props.player.player.y),
        y: this.props.player.player.y * 4 + 20,
        previousX: this.convertXToCourtDepth(this.props.pastPosition.player.x * 8 + 30, this.props.player.player.y),
        previousY: this.props.pastPosition.player.y * 4 + 20
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.sprites = __WEBPACK_IMPORTED_MODULE_2__playerAnimations_index__["a" /* default */][nextProps.species];
      var yDiff = Math.abs(nextProps.player.player.y - nextProps.pastPosition.player.y);
      var xDiff = Math.abs(nextProps.player.player.x - nextProps.pastPosition.player.x);
      var xDirection = nextProps.player.player.x > nextProps.pastPosition.player.x ? RIGHT : LEFT;
      var yDirection = nextProps.player.player.y > nextProps.pastPosition.player.y ? FORWARD : BACK;

      if (xDiff === yDiff) {
        var rightSideOfCourt = nextProps.player.player.x > 0;
        var upperSideOfCourt = nextProps.player.player.y > 0;

        if (Math.abs(nextProps.player.player.y) > 15) {
          yDiff = 1000;
          yDirection = upperSideOfCourt ? BACK : FORWARD;
        } else {
          xDiff = 1000;
          xDirection = rightSideOfCourt ? RIGHT : LEFT;
        }
      }

      this.setState({
        x: this.convertXToCourtDepth(nextProps.player.player.x * 8 + 30, nextProps.player.player.y),
        y: nextProps.player.player.y * 4 + 20,
        previousX: this.convertXToCourtDepth(nextProps.pastPosition.player.x * 8 + 30, nextProps.pastPosition.player.y),
        previousY: nextProps.pastPosition.player.y * 4 + 20,
        direction: yDiff > xDiff ? yDirection : xDirection,
        loopStarted: true
      });
    }
  }, {
    key: "convertXToCourtDepth",
    value: function convertXToCourtDepth(x, y) {
      var unit = 1 - (-1 * y + 25) / 50 * (170 / 310);
      return unit * x;
    }
  }, {
    key: "newKeyframes",
    value: function newKeyframes() {
      return Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["keyframes"])(_templateObject, this.state.previousY + window.innerWidth * 0.53 / 2, window.innerWidth / 2 - this.state.previousX, this.state.y + window.innerWidth * 0.53 / 2, window.innerWidth / 2 - this.state.x, this.state.x - this.state.previousX, this.state.y - this.state.previousY);
    }
  }, {
    key: "render",
    value: function render() {
      var newAnimation;

      if (this.state.x !== this.state.previousX || this.state.y !== this.state.previousY) {
        newAnimation = this.newKeyframes();
      } // if (this.state.loopStarted) {
      //   this.looper = setInterval(() => {
      //     this.setState({
      //       index: this.state.index + 1 === Right.length
      //         ? 0
      //         : this.state.index + 1
      //     });
      //   }, 200);
      //
      //   this.setState({
      //     loopStarted: false
      //   });
      // }
      //
      // if (this.state.index === 10) {
      //   clearInterval(this.looper);
      //
      //   const side = Math.abs(this.state.x) > 40;
      //   var direction;
      //   if (side) {
      //     if (
      //       Math.abs(this.state.x) >
      //       Math.abs(this.props.ballCarrier.player.x + 10)
      //     ) {
      //       direction = this.state.x > 0 ? LEFT : RIGHT;
      //     } else {
      //       direction = this.state.x > 0 ? RIGHT : LEFT;
      //     }
      //   } else {
      //     if (y > 0) {
      //       direction = FORWARD;
      //     } else {
      //       direction = BACK;
      //     }
      //   }
      //
      //   this.setState({
      //     direction
      //   });
      // }


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Block, {
        style: {
          animation: "".concat(newAnimation, " 2s ease-in-out"),
          position: "absolute",
          right: window.innerWidth / 2 - this.state.previousX,
          top: this.state.previousY + window.innerWidth * 0.53 / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, this.sprites[this.state.direction][this.state.index]);
    }
  }]);

  return Player;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


var Block = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject2);

/***/ }),

/***/ "./components/playerAnimations/bear.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Right", function() { return Right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return Forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Left", function() { return Left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/ryansimpson/code/etherball/etherball-frontend/components/playerAnimations/bear.js";

var RightSideStraight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/658f7d9b0f971624fe683fafc1766536/raw/d2fdd7450835319f6b12ddd526b8c0c86a4b0e1c/bear-rightsidestraight.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  }
});
var RightSideRight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/2490fe6b05bd3cfea1110bf5f0fd3460/raw/f68d1c93c64580bc73a8097fdf43198e9e889599/bear-rightsideright.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  }
});
var RightSideLeft = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/7f297f36120ba0c94e13d5c70851984c/raw/fdfcb75ed7850443f2794408e010195037ee3304/bear-rightsideleft.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  }
});
var FrontSideStraight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/def6ef513fdea6369fa72466e9d0b564/raw/af08a8e8dd164d1e998531ff81e801d3e76fb5eb/bear-frontsidestraight.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  }
});
var FrontSideRight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/a5d1c20f415c36da84a7fd8756933bd3/raw/bf553e3cea3f380d5b43eab4f77d22867ae45656/bear-frontsideright.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  }
});
var FrontSideLeft = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/dac10bd9b85f00e37ec92d5d1ac4294c/raw/ed0f78f7499dc9743b5f54f0217ca50a52a1ca95/bear-frontsideleft.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  }
});
var LeftSideStraight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60,
    transform: "scaleX(-1)"
  },
  src: "https://cdn.rawgit.com/rsimpsonn/658f7d9b0f971624fe683fafc1766536/raw/d2fdd7450835319f6b12ddd526b8c0c86a4b0e1c/bear-rightsidestraight.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  }
});
var LeftSideRight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60,
    transform: "scaleX(-1)"
  },
  src: "https://cdn.rawgit.com/rsimpsonn/2490fe6b05bd3cfea1110bf5f0fd3460/raw/f68d1c93c64580bc73a8097fdf43198e9e889599/bear-rightsideright.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  }
});
var LeftSideLeft = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60,
    transform: "scaleX(-1)"
  },
  src: "https://cdn.rawgit.com/rsimpsonn/7f297f36120ba0c94e13d5c70851984c/raw/fdfcb75ed7850443f2794408e010195037ee3304/bear-rightsideleft.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  }
});
var BackSideStraight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/05b63e5bb89147b718dc99faba532081/raw/502665daf163aa176d6d0103b215bcfa1577407b/bear-backsidestraight.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  }
});
var BackSideRight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/221383dc4235996d4f2f523daf770973/raw/3d4004673d08c667431ee36b06c3b7871f289ac6/bear-backsideright.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  }
});
var BackSideLeft = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/c5bc53bafec270b0c7cb2934febe6248/raw/20a7320d9c064d0630e5da0c99de8e6d8d48c07e/bear-backsideleft.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  }
});
var Right = [RightSideStraight, RightSideRight, RightSideStraight, RightSideLeft];
var Forward = [FrontSideStraight, FrontSideRight, FrontSideStraight, FrontSideLeft];
var Back = [BackSideStraight, BackSideRight, BackSideStraight, BackSideLeft];
var Left = [LeftSideStraight, LeftSideRight, LeftSideStraight, LeftSideLeft];


/***/ }),

/***/ "./components/playerAnimations/bunny.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Right", function() { return Right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return Forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Left", function() { return Left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/ryansimpson/code/etherball/etherball-frontend/components/playerAnimations/bunny.js";

var RightSideStraight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/3ffb318ea0edf707451a58573364b180/raw/f393c31f7a0f25959a2389bad681183180698a19/bunny-rightsidestraight.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  }
});
var RightSideRight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/49a7602d3942852d543998821669b3d4/raw/b741aedb0a8c224b2c3bd1d0980e9aec16cda5f3/bunny-rightsideright.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  }
});
var RightSideLeft = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/14f187360f3f136d4a05db6ae910acc0/raw/9521dc6d9555e74be3708cbb58b190a842d41c30/bunny-rightsideleft.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  }
});
var FrontSideStraight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/935de9a81e01693ff06a8e23df0054f2/raw/74210eb40a0f2c955d2fca283b991dda75a52546/bunny-frontsidestraight.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  }
});
var FrontSideRight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/e1f66c09959b3be3070b66a618ad39a4/raw/458899f38134a52dc0f98bbe00b4ff1b128fcd51/bunny-frontsideright.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  }
});
var FrontSideLeft = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/449fa894240cad2d75afd305821eb31e/raw/cf2d190a0ca3abd65e4310596aa0ddaf7099e900/bunny-frontsideleft.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  }
});
var LeftSideStraight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60,
    transform: "scaleX(-1)"
  },
  src: "https://cdn.rawgit.com/rsimpsonn/3ffb318ea0edf707451a58573364b180/raw/f393c31f7a0f25959a2389bad681183180698a19/bunny-rightsidestraight.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  }
});
var LeftSideRight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60,
    transform: "scaleX(-1)"
  },
  src: "https://cdn.rawgit.com/rsimpsonn/49a7602d3942852d543998821669b3d4/raw/b741aedb0a8c224b2c3bd1d0980e9aec16cda5f3/bunny-rightsideright.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  }
});
var LeftSideLeft = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60,
    transform: "scaleX(-1)"
  },
  src: "https://cdn.rawgit.com/rsimpsonn/14f187360f3f136d4a05db6ae910acc0/raw/9521dc6d9555e74be3708cbb58b190a842d41c30/bunny-rightsideleft.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  }
});
var BackSideStraight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/4065e53602a0c82214027bebf9cc6b78/raw/278217bbfdb7c01b0069e37b02d2c4c983e0bd73/bunny-backsidestraight.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  }
});
var BackSideRight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/c6c60d686b5f550c5c46686a43ca3d74/raw/02438f10fadf2024787ede421aeb54dcec9365e0/bunny-backsideright.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  }
});
var BackSideLeft = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/32240410a299ce2fd03d81b4fe3715b9/raw/3b5a5928fd5270fc6b67a8f38ce753be1b442640/bunny-backsideleft.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  }
});
var Right = [RightSideStraight, RightSideRight, RightSideStraight, RightSideLeft];
var Forward = [FrontSideStraight, FrontSideRight, FrontSideStraight, FrontSideLeft];
var Back = [BackSideStraight, BackSideRight, BackSideStraight, BackSideLeft];
var Left = [LeftSideStraight, LeftSideRight, LeftSideStraight, LeftSideLeft];


/***/ }),

/***/ "./components/playerAnimations/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var BearLoader = __webpack_require__("./components/playerAnimations/bear.js");

var BunnyLoader = __webpack_require__("./components/playerAnimations/bunny.js");

var TurtleLoader = __webpack_require__("./components/playerAnimations/turtle.js");

var characterAnimations = {
  bear: [BearLoader.Right, BearLoader.Forward, BearLoader.Left, BearLoader.Back],
  bunny: [BunnyLoader.Right, BunnyLoader.Forward, BunnyLoader.Left, BunnyLoader.Back],
  turtle: [TurtleLoader.Right, TurtleLoader.Forward, TurtleLoader.Left, TurtleLoader.Back]
};
/* harmony default export */ __webpack_exports__["a"] = (characterAnimations);

/***/ }),

/***/ "./components/playerAnimations/turtle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Right", function() { return Right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return Forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Left", function() { return Left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/ryansimpson/code/etherball/etherball-frontend/components/playerAnimations/turtle.js";

var RightSideStraight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/5a8e3e6fb2a7f50d6ce9e5524eed5df3/raw/f00738def30c52c3c605e0108180e4e9aa3aea91/turtle-rightsidestraight.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  }
});
var RightSideRight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/fa12349f9b4a127e521a9cfaf93f6fad/raw/1a25367864845f0dcd38ef2add3c08bfcc5d3fbc/turtle-rightsideright.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  }
});
var RightSideLeft = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/b7c4d2ca9d5307c009748ffadac50849/raw/48c11d2df4ff240ed03ba1414084424e65b2d789/turtle-rightsideleft.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  }
});
var FrontSideStraight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/2e1c5c737fea0250dcb44497f0de0c69/raw/3e058569fc7ccffb9315d002245ac49e431de273/turtle-frontsidestraight.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  }
});
var FrontSideRight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/840efec442c2de4012054f96057363aa/raw/97349277c6b4efb7ceb0fb6b33cea333bc7446ca/turtle-frontsideright.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  }
});
var FrontSideLeft = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/0dcd7d4037d089f0accd7a4181ed3bbf/raw/ce2fb223910a461a17f6995cf01e6b50c1f8023b/turtle-frontsideleft.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  }
});
var LeftSideStraight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60,
    transform: "scaleX(-1)"
  },
  src: "https://cdn.rawgit.com/rsimpsonn/5a8e3e6fb2a7f50d6ce9e5524eed5df3/raw/f00738def30c52c3c605e0108180e4e9aa3aea91/turtle-rightsidestraight.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  }
});
var LeftSideRight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60,
    transform: "scaleX(-1)"
  },
  src: "https://cdn.rawgit.com/rsimpsonn/fa12349f9b4a127e521a9cfaf93f6fad/raw/1a25367864845f0dcd38ef2add3c08bfcc5d3fbc/turtle-rightsideright.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  }
});
var LeftSideLeft = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60,
    transform: "scaleX(-1)"
  },
  src: "https://cdn.rawgit.com/rsimpsonn/b7c4d2ca9d5307c009748ffadac50849/raw/48c11d2df4ff240ed03ba1414084424e65b2d789/turtle-rightsideleft.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  }
});
var BackSideStraight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/7580f4489ebdb58fefa8d25eee7e9de5/raw/1cceff9b692c2906e1940a2bef4b41fdb8f63126/turtle-backsidestraight.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  }
});
var BackSideRight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/ae32f2ccdf4c6f81ebdfa2ffbabe041c/raw/d0015336b609c80b92d89c8ae9c82fe69acefcae/turtle-backsideright.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  }
});
var BackSideLeft = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
  style: {
    width: 60,
    height: 60
  },
  src: "https://cdn.rawgit.com/rsimpsonn/b239e8718470338e9918348fbc3316b5/raw/9eef17fff17f6b62a73109089a553bcaacd9fe6e/turtle-backsideleft.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  }
});
var Right = [RightSideStraight, RightSideRight, RightSideStraight, RightSideLeft];
var Forward = [FrontSideStraight, FrontSideRight, FrontSideStraight, FrontSideLeft];
var Back = [BackSideStraight, BackSideRight, BackSideStraight, BackSideLeft];
var Left = [LeftSideStraight, LeftSideRight, LeftSideStraight, LeftSideLeft];


/***/ }),

/***/ "./pages/game.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("socket.io-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_grid__ = __webpack_require__("./components/grid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Statbox__ = __webpack_require__("./components/Statbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PointCounter__ = __webpack_require__("./components/PointCounter.js");
var _jsxFileName = "/Users/ryansimpson/code/etherball/etherball-frontend/pages/game.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var GamePage =
/*#__PURE__*/
function (_Component) {
  _inherits(GamePage, _Component);

  function GamePage(props) {
    var _this;

    _classCallCheck(this, GamePage);

    _this = _possibleConstructorReturn(this, (GamePage.__proto__ || Object.getPrototypeOf(GamePage)).call(this, props));
    _this.state = {
      messages: [],
      team1Points: 0,
      team2Points: 0,
      index: 0
    };
    return _this;
  }

  _createClass(GamePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default()("http://localhost:3000");
      socket.emit("newGame", function (err) {
        return console.log(err);
      });
      socket.on("gameMessage", function (message, err) {
        var _this2$setState;

        console.log(message);

        _this2.setState((_this2$setState = {
          message: message
        }, _defineProperty(_this2$setState, "team".concat(message.team, "Points"), _this2.state["team".concat(message.team, "Points")] + message.add), _defineProperty(_this2$setState, "messages", _this2.state.messages.concat(message)), _this2$setState));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var index = this.state.messages.indexOf(this.state.message);

      if (index === -1) {
        index = 0;
      }

      if (index === 5) {
        console.log(this.state.message);
      }

      var homeTeam = [];
      var awayTeam = [];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_PointCounter__["a" /* default */], {
        homePoints: this.state.team1Points,
        awayPoints: this.state.team2Points,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), this.state.message && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_grid__["a" /* default */], {
        message: this.state.message,
        pastMessage: this.state.messages[index === 0 ? 0 : index - 1],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }));
    }
  }]);

  return GamePage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/game.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "socket.io-client":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=game.js.map