"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App"));

var _router = _interopRequireDefault(require("./router"));

var _elementUi = _interopRequireDefault(require("element-ui"));

var _vuex = _interopRequireDefault(require("vuex"));

var _index = _interopRequireDefault(require("./store/index"));

require("element-ui/lib/theme-chalk/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Axios from '@/request/http'
// import Vueaxios from 'vue-axios'
// Vue.use(Vueaxios, Axios)
_vue["default"].use(_elementUi["default"]);

_vue["default"].use(_vuex["default"]);

_vue["default"].config.productionTip = false;
/* eslint-disable no-new */

new _vue["default"]({
  el: '#app',
  router: _router["default"],
  components: {
    App: _App["default"]
  },
  template: '<App/>',
  store: _index["default"]
});