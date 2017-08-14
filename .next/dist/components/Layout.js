'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/johnalbritton/Documents/Websites/next-non-profit/components/Layout.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.toggle = function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    };

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          _props$title = _props.title,
          title = _props$title === undefined ? 'Title' : _props$title;

      return _react2.default.createElement('div', {
        'data-jsx': 2825714945,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('title', {
        'data-jsx': 2825714945,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, title), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 2825714945,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'initial-scale=1.0, width=device-width',
        'data-jsx': 2825714945,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
        'data-jsx': 2825714945,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })), _react2.default.createElement('header', {
        'data-jsx': 2825714945,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_reactstrap.Navbar, { style: { backgroundColor: '#e74c3c' }, inverse: true, toggleable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_reactstrap.NavbarToggler, { right: true, onClick: this.toggle, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_link2.default, { href: '/', prefetch: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('a', { className: 'navbar-brand', 'data-jsx': 2825714945,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Home')), _react2.default.createElement(_reactstrap.Collapse, { isOpen: this.state.isOpen, navbar: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_reactstrap.Nav, { className: 'ml-auto', navbar: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_reactstrap.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_link2.default, { href: '/about', prefetch: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('a', {
        className: this.props.title === 'About Us' ? 'nav-link active' : 'nav-link',
        'data-jsx': 2825714945,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'About'))), _react2.default.createElement(_reactstrap.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_link2.default, { href: '/contact', prefetch: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('a', {
        className: this.props.title === 'Contact Us' ? 'nav-link active' : 'nav-link',
        'data-jsx': 2825714945,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Contact'))))))), children, _react2.default.createElement(_style2.default, {
        styleId: 2825714945,
        css: 'nav[data-jsx="2825714945"]{background-color:#27ae60}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGb0IsQUFHc0MseUJBQzNCIiwiZmlsZSI6ImNvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb2huYWxicml0dG9uL0RvY3VtZW50cy9XZWJzaXRlcy9uZXh0LW5vbi1wcm9maXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7XG4gIENvbGxhcHNlLFxuICBOYXZiYXIsXG4gIE5hdmJhclRvZ2dsZXIsXG4gIE5hdmJhckJyYW5kLFxuICBOYXYsXG4gIE5hdkl0ZW1cbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogZmFsc2VcbiAgICB9O1xuICB9XG4gIHRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuXG4gICAgfSk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSA9ICdUaXRsZScgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAtYWxwaGEuNi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8TmF2YmFyIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNlNzRjM2MnIH19IGludmVyc2UgdG9nZ2xlYWJsZT5cbiAgICAgICAgICAgIDxOYXZiYXJUb2dnbGVyIHJpZ2h0IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfSAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwcmVmZXRjaD5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+SG9tZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e3RoaXMuc3RhdGUuaXNPcGVufSBuYXZiYXI+XG4gICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiIG5hdmJhcj5cbiAgICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBwcmVmZXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50aXRsZSA9PT0gJ0Fib3V0IFVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICduYXYtbGluayBhY3RpdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ25hdi1saW5rJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwcmVmZXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50aXRsZSA9PT0gJ0NvbnRhY3QgVXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ25hdi1saW5rIGFjdGl2ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnbmF2LWxpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhZTYwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Layout.js */'
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;