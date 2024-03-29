"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Card = _interopRequireDefault(require("components/Card/Card.jsx"));

var _CardBody = _interopRequireDefault(require("components/Card/CardBody.jsx"));

var _CardHeader = _interopRequireDefault(require("components/Card/CardHeader.jsx"));

var _customTabsStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/customTabsStyle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomTabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomTabs, _React$Component);

  function CustomTabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CustomTabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CustomTabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: 0
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event, value) {
      _this.setState({
        value: value
      });
    });

    return _this;
  }

  _createClass(CustomTabs, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          headerColor = _this$props.headerColor,
          plainTabs = _this$props.plainTabs,
          tabs = _this$props.tabs,
          title = _this$props.title,
          rtlActive = _this$props.rtlActive;
      var cardTitle = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.cardTitle, true), _defineProperty(_classNames, classes.cardTitleRTL, rtlActive), _classNames));
      return _react.default.createElement(_Card.default, {
        plain: plainTabs
      }, _react.default.createElement(_CardHeader.default, {
        color: headerColor,
        plain: plainTabs
      }, title !== undefined ? _react.default.createElement("div", {
        className: cardTitle
      }, title) : null, _react.default.createElement(_Tabs.default, {
        value: this.state.value,
        onChange: this.handleChange,
        classes: {
          root: classes.tabsRoot,
          indicator: classes.displayNone
        }
      }, tabs.map(function (prop, key) {
        var icon = {};

        if (prop.tabIcon) {
          icon = {
            icon: typeof prop.tabIcon === "string" ? _react.default.createElement(_Icon.default, null, prop.tabIcon) : _react.default.createElement(prop.tabIcon, null)
          };
        }

        return _react.default.createElement(_Tab.default, _extends({
          classes: {
            root: classes.tabRootButton,
            labelContainer: classes.tabLabelContainer,
            label: classes.tabLabel,
            selected: classes.tabSelected,
            wrapper: classes.tabWrapper
          },
          key: key,
          label: prop.tabName
        }, icon));
      }))), _react.default.createElement(_CardBody.default, null, tabs.map(function (prop, key) {
        if (key === _this2.state.value) {
          return _react.default.createElement("div", {
            key: key
          }, prop.tabContent);
        }

        return null;
      })));
    }
  }]);

  return CustomTabs;
}(_react.default.Component);

CustomTabs.propTypes = {
  classes: _propTypes.default.object.isRequired,
  headerColor: _propTypes.default.oneOf(["warning", "success", "danger", "info", "primary", "rose"]),
  title: _propTypes.default.string,
  tabs: _propTypes.default.arrayOf(_propTypes.default.shape({
    tabName: _propTypes.default.string.isRequired,
    tabIcon: _propTypes.default.func,
    tabContent: _propTypes.default.node.isRequired
  })),
  rtlActive: _propTypes.default.bool,
  plainTabs: _propTypes.default.bool
};

var _default = (0, _withStyles.default)(_customTabsStyle.default)(CustomTabs);

exports.default = _default;