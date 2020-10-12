// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Vuex from 'vuex'
import store from './store/index'
// import Axios from '@/request/http'
// import Vueaxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(Vueaxios, Axios)
Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store: store,
})