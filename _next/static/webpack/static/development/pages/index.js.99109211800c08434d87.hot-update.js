webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_general_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/general/Layout */ "./components/general/Layout.js");
/* harmony import */ var _lib_custom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/custom */ "./lib/custom.js");
/* harmony import */ var _redux_settings_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/settings/action */ "./redux/settings/action.js");
/* harmony import */ var _components_SlideShow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SlideShow */ "./components/SlideShow.js");






var _jsxFileName = "C:\\Users\\phezzy\\Desktop\\WORK\\lampsAndImages\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = _super.call(this, props);
    _this.banner = null;
    _this.onScroll = _this.onScroll.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.onScroll();
      // window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
      this.props.updateHeader({
        fixed: false,
        fixedTop: 0
      });
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      if (this.banner) {
        var _window = window,
            $ = _window.$;
        var bannerHeight = $('#banner').height();
        var socialHeaderHeight = $('#socialHeader').outerHeight();
        var headerHeight = this.props.settings.header.height;
        var bannerPositionTop = Object(_lib_custom__WEBPACK_IMPORTED_MODULE_10__["getCordinates"])(this.banner).top;
        var socialHeaderPositionTop = Object(_lib_custom__WEBPACK_IMPORTED_MODULE_10__["getCordinates"])(this.banner).top;
        console.log(socialHeaderPositionTop, '||', socialHeaderHeight);
        this.props.updateHeader({
          fixed: $('html')[0].scrollTop < socialHeaderHeight,
          fixedTop: socialHeaderHeight
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_general_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 7
        }
      }, __jsx("div", {
        id: "homePage",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "featuring container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, __jsx("h2", {
        className: "uppercase",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      }, "DRAMA | Deadwater Fell - Channel 4"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, "We provided the full camera & grip package to this Channel 4 & Kudos drama shooting in and around Glasgow.")), __jsx("div", {
        id: "banner",
        ref: function ref(e) {
          _this2.banner = e;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }, __jsx(_components_SlideShow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        items: [{
          label: 'Technology',
          content: __jsx("img", {
            src: "/img/innovation-1.jpg",
            alt: "martfury",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 28
            }
          })
        }, {
          label: 'Education',
          content: __jsx("img", {
            src: "/img/innovation-2.jpg",
            alt: "martfury",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 28
            }
          })
        }, {
          label: 'Agriculture',
          content: __jsx("img", {
            src: "/img/innovation-4.jpg",
            alt: "martfury",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 28
            }
          })
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "featured-board row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-lg-2 published",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 19
        }
      }, "Published")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }
      }, "10 / 12 / 2019")), __jsx("div", {
        className: "col-lg-7 details",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }
      }, __jsx("h2", {
        className: "uppercase",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 19
        }
      }, "Deadwater Fell - Channel 4/Kudos")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 19
        }
      }, "Director: Lynsey Miller")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 19
        }
      }, "Producer: Caroline Levy")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 19
        }
      }, "Line Producer: Matthew Brown")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 19
        }
      }, "DOP: Neus Oll\xE9")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }
      }, "This was our first foray into major long form drama in Scotland and went without a hitch. Initial testing and prep happened at our Manchester HQ with further testing up in Scotland pre shoot. It was such a pleasure to work with Neus again after working across shorter projects a few years previous. Her attitude to her work, vision for the project and general personality were uplifting to be around and it was a real joy to meet up with all crew after wrap for a bit of a knees up."), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 17
        }
      }, " ", __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }
      }, " Equipment supplied: "), "2x Arri Alexa Mini and TLS Rehoused Canon K35 & FD Lenses"), __jsx("a", {
        href: "https://www.channel4.com/press/news/deadwater-fell-first-look-images-released",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 17
        }
      }, "https://www.channel4.com/press/news/deadwater-fell-first-look-images-released"), __jsx("iframe", {
        src: "https://www.youtube.com/embed/yEQsLSfl8gA",
        frameBorder: "0",
        width: "560",
        height: "315",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "col-lg-3 more-work",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 15
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 19
        }
      }, "MORE WORK")), __jsx("div", {
        className: "works",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "work",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }
      }, "10 / 12 / 2019"), __jsx("h5", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 23
        }
      }, " DRAMA | Cold Call - Channel 5 ")), __jsx("img", {
        className: "preview",
        src: "/img/work 1.jpg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "work",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 19
        }
      }, __jsx("p", {
        className: "date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }
      }, "10 / 12 / 2019"), __jsx("h5", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 23
        }
      }, " DRAMA | Cold Call - Channel 5 ")), __jsx("img", {
        className: "preview",
        src: "/img/work 2.jpg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }
      }))))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: state.settings
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateHeader: function updateHeader(props) {
      return dispatch(Object(_redux_settings_action__WEBPACK_IMPORTED_MODULE_11__["updateHeader"])(props));
    },
    updateSocialHeader: function updateSocialHeader(props) {
      return dispatch(Object(_redux_settings_action__WEBPACK_IMPORTED_MODULE_11__["updateSocialHeader"])(props));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

/***/ })

})
//# sourceMappingURL=index.js.99109211800c08434d87.hot-update.js.map