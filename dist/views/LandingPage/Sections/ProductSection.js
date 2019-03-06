"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _Chat = _interopRequireDefault(require("@material-ui/icons/Chat"));

var _VerifiedUser = _interopRequireDefault(require("@material-ui/icons/VerifiedUser"));

var _Fingerprint = _interopRequireDefault(require("@material-ui/icons/Fingerprint"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.jsx"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.jsx"));

var _InfoArea = _interopRequireDefault(require("components/InfoArea/InfoArea.jsx"));

var _productStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProductSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductSection, _React$Component);

  function ProductSection() {
    _classCallCheck(this, ProductSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductSection).apply(this, arguments));
  }

  _createClass(ProductSection, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react.default.createElement("div", {
        className: classes.section
      }, _react.default.createElement(_GridContainer.default, {
        justify: "center"
      }, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 8
      }, _react.default.createElement("h2", {
        className: classes.title
      }, "Let's talk product"), _react.default.createElement("h5", {
        className: classes.description
      }, "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more."))), _react.default.createElement("div", null, _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, _react.default.createElement(_InfoArea.default, {
        title: "Free Chat",
        description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
        icon: _Chat.default,
        iconColor: "info",
        vertical: true
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, _react.default.createElement(_InfoArea.default, {
        title: "Verified Users",
        description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
        icon: _VerifiedUser.default,
        iconColor: "success",
        vertical: true
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, _react.default.createElement(_InfoArea.default, {
        title: "Fingerprint",
        description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
        icon: _Fingerprint.default,
        iconColor: "danger",
        vertical: true
      })))));
    }
  }]);

  return ProductSection;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_productStyle.default)(ProductSection);

exports.default = _default;