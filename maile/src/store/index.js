import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: '',
        token: localStorage.getItem('token') || '',
        uname: localStorage.getItem('name') || '',

    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setName(state, uname) {
            state.uname = uname
        },
    }
})

export default store