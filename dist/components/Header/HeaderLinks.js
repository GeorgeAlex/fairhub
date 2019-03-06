"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _icons = require("@material-ui/icons");

var _CustomDropdown = _interopRequireDefault(require("components/CustomDropdown/CustomDropdown.jsx"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.jsx"));

var _headerLinksStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/headerLinksStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function HeaderLinks(_ref) {
  var props = _extends({}, _ref);

  var classes = props.classes;
  return _react.default.createElement(_List.default, {
    className: classes.list
  }, _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_Button.default, {
    href: "/",
    color: "transparent",
    className: classes.navLink
  }, "Home")), _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_Button.default, {
    href: "#how-it-works",
    color: "transparent",
    className: classes.navLink
  }, "How it works?")), _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_Button.default, {
    href: "/login-page",
    color: "transparent",
    className: classes.navLink
  }, "Log In")), _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_Button.default, {
    href: "/login-company",
    className: classes.registerNavLinkCompany
  }, "Post a job")), _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_Button.default, {
    href: "/login-applicant",
    className: classes.registerNavLinkApplicant
  }, "Want a job")));
}

var _default = (0, _withStyles.default)(_headerLinksStyle.default)(HeaderLinks);

exports.default = _default;