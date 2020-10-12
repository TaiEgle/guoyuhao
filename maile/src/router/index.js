import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import product from '@/components/product/index'
import Login from '@/components/User/Login'
import details from '@/components/details/index'
import addSuccess from '@/components/shopCar/addSuccess'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            redirect: '/',
            component: index,
            children: [{
                    path: '/',
                    name: 'product',
                    component: product,

                },
                {
                    path: '/details/:id',
                    name: 'details',
                    component: details,
                },
                {
                    path: '/addSuccess/:id',
                    name: 'addSuccess',
                    component: addSuccess,
                }
            ],

        }, {
            path: '/Login',
            name: 'Login',
            component: Login,

        },
        /* {
               path: '/details/:id',
               name: 'details',
               component: details,

           }, */
    ]
})