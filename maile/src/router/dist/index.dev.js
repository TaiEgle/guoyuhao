"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _index = _interopRequireDefault(require("@/components/index"));

var _index2 = _interopRequireDefault(require("@/components/product/index"));

var _Login = _interopRequireDefault(require("@/components/User/Login"));

var _index3 = _interopRequireDefault(require("@/components/details/index"));

var _addSuccess = _interopRequireDefault(require("@/components/shopCar/addSuccess"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routes: [{
    path: '/',
    name: 'index',
    redirect: '/',
    component: _index["default"],
    children: [{
      path: '/',
      name: 'product',
      component: _index2["default"]
    }, {
      path: '/details/:id',
      name: 'details',
      component: _index3["default"]
    }, {
      path: '/addSuccess/:id',
      name: 'addSuccess',
      component: _addSuccess["default"]
    }]
  }, {
    path: '/Login',
    name: 'Login',
    component: _Login["default"]
  }
  /* {
         path: '/details/:id',
         name: 'details',
         component: details,
      }, */
  ]
});

exports["default"] = _default;