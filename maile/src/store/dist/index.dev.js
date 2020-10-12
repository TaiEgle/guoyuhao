"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = _interopRequireDefault(require("vuex"));

var _vue = _interopRequireDefault(require("vue"));

var _state;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_vue["default"].use(_vuex["default"]);

var store = new _vuex["default"].Store({
  state: (_state = {
    token: ''
  }, _defineProperty(_state, "token", localStorage.getItem('token') || ''), _defineProperty(_state, "uname", localStorage.getItem('name') || ''), _state),
  mutations: {
    setToken: function setToken(state, token) {
      state.token = token;
    },
    setName: function setName(state, uname) {
      state.uname = uname;
    }
  }
});
var _default = store;
exports["default"] = _default;