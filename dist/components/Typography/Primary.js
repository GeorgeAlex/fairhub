"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _typographyStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/typographyStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Primary(_ref) {
  var props = _extends({}, _ref);

  var classes = props.classes,
      children = props.children;
  return _react.default.createElement("div", {
    className: classes.defaultFontStyle + " " + classes.primaryText
  }, children);
}

Primary.propTypes = {
  classes: _propTypes.default.object.isRequired
};

var _default = (0, _withStyles.default)(_typographyStyle.default)(Primary);

exports.default = _default;