"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _history = require("history");

var _reactRouterDom = require("react-router-dom");

require("assets/scss/material-kit-react.scss?v=1.4.0");

var _Components = _interopRequireDefault(require("views/Components/Components.jsx"));

var _LandingPage = _interopRequireDefault(require("views/LandingPage/LandingPage.jsx"));

var _ProfilePage = _interopRequireDefault(require("views/ProfilePage/ProfilePage.jsx"));

var _LoginPage = _interopRequireDefault(require("views/LoginPage/LoginPage.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pages for this product
var hist = (0, _history.createBrowserHistory)();

_reactDom.default.render(_react.default.createElement(_reactRouterDom.Router, {
  history: hist
}, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
  path: "/profile-page",
  component: _ProfilePage.default
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/login-page",
  component: _LoginPage.default
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/components",
  component: _Components.default
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/",
  component: _LandingPage.default
}))), document.getElementById("root"));