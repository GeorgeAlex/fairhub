"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _infoStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/infoStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function InfoArea(_ref) {
  var _classNames, _classNames2;

  var props = _extends({}, _ref);

  var classes = props.classes,
      title = props.title,
      description = props.description,
      iconColor = props.iconColor,
      vertical = props.vertical;
  var iconWrapper = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.iconWrapper, true), _defineProperty(_classNames, classes[iconColor], true), _defineProperty(_classNames, classes.iconWrapperVertical, vertical), _classNames));
  var iconClasses = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.icon, true), _defineProperty(_classNames2, classes.iconVertical, vertical), _classNames2));
  return _react.default.createElement("div", {
    className: classes.infoArea
  }, _react.default.createElement("div", {
    className: iconWrapper
  }, _react.default.createElement(props.icon, {
    className: iconClasses
  })), _react.default.createElement("div", {
    className: classes.descriptionWrapper
  }, _react.default.createElement("h4", {
    className: classes.title
  }, title), _react.default.createElement("p", {
    className: classes.description
  }, description)));
}

InfoArea.defaultProps = {
  iconColor: "gray"
};
InfoArea.propTypes = {
  classes: _propTypes.default.object.isRequired,
  icon: _propTypes.default.func.isRequired,
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  iconColor: _propTypes.default.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"]),
  vertical: _propTypes.default.bool
};

var _default = (0, _withStyles.default)(_infoStyle.default)(InfoArea);

exports.default = _default;