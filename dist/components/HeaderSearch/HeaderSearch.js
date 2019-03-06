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

var _Card = _interopRequireDefault(require("components/Card/Card.jsx"));

var _CardBody = _interopRequireDefault(require("components/Card/CardBody.jsx"));

var _CardHeader = _interopRequireDefault(require("components/Card/CardHeader.jsx"));

var _CustomDropdown = _interopRequireDefault(require("components/CustomDropdown/CustomDropdown.jsx"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.jsx"));

var _headerSearchStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/headerSearchStyle.jsx"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _reactDatetime = _interopRequireDefault(require("react-datetime"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HeaderSearch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderSearch, _React$Component);

  function HeaderSearch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HeaderSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HeaderSearch)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

  _createClass(HeaderSearch, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          rest = _objectWithoutProperties(_this$props, ["classes"]);

      var tabContent = _react.default.createElement(_List.default, {
        className: classes.tabContainerList
      }, _react.default.createElement(_ListItem.default, {
        className: classes.listItem
      }, _react.default.createElement(_CustomDropdown.default, {
        buttonText: "Role",
        dropdownHeader: "Available roles",
        buttonProps: {
          className: classes.navLink,
          color: "transparent"
        },
        dropdownList: ["Host/Hostess", "Translator", "Another role"]
      })), _react.default.createElement(_ListItem.default, {
        className: classes.listItem
      }, _react.default.createElement(_FormControl.default, null, _react.default.createElement(_reactDatetime.default, {
        timeFormat: false,
        inputProps: {
          placeholder: "Pick a date"
        }
      }))), _react.default.createElement(_ListItem.default, {
        className: classes.listItem
      }, _react.default.createElement(_CustomDropdown.default, {
        buttonText: "Place",
        buttonProps: {
          className: classes.navLink,
          color: "transparent"
        },
        dropdownList: ["Munchen", "Berlin", "Koln", "Dortmund"]
      })), _react.default.createElement(_ListItem.default, {
        className: classes.listItem
      }, _react.default.createElement(_Button.default, {
        href: "/",
        color: "primary",
        size: "small"
      }, "Search")));

      var tabs = [{
        tabName: "Find a Job",
        tabContent: tabContent
      }, {
        tabName: "Find a Candidate",
        tabContent: tabContent
      }];
      return _react.default.createElement(_Card.default, {
        className: classes.searchCard
      }, _react.default.createElement(_CardHeader.default, {
        className: classes.searchCardHeader,
        plain: true
      }, _react.default.createElement(_Tabs.default, {
        value: this.state.value,
        onChange: this.handleChange,
        classes: {
          root: classes.tabsRoot,
          indicator: classes.displayNone
        }
      }, tabs.map(function (prop, key) {
        return _react.default.createElement(_Tab.default, {
          classes: {
            root: classes.tabRootButton,
            labelContainer: classes.tabLabelContainer,
            label: classes.tabLabel,
            selected: classes.tabSelected,
            wrapper: classes.tabWrapper
          },
          key: key,
          label: prop.tabName
        });
      }))), _react.default.createElement(_CardBody.default, {
        className: classes.searchCardBody
      }, tabs.map(function (prop, key) {
        if (key === _this2.state.value) {
          return _react.default.createElement("div", {
            key: key
          }, prop.tabContent);
        }

        return null;
      })));
    }
  }]);

  return HeaderSearch;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_headerSearchStyle.default)(HeaderSearch);

exports.default = _default;