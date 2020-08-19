import Vue from 'vue'
import Router from 'vue-router'
import tongxunlu from '@/components/tongxunlu'
import addtongxun from '@/components/addtongxun'
import more from '@/components/more'
import editTonxun from '@/components/editTonxun'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',

            component: tongxunlu
        },
        {
            path: '/tongxunlu',
            name: 'tongxunlu',
            component: tongxunlu
        },
        {
            path: '/addtongxun',
            name: 'addtongxun',
            component: addtongxun

        },
        {
            path: '/more/:id',
            name: 'more',
            component: more
        },
        {
            path: '/editTonxun/:id',
            name: 'editTonxun',
            component: editTonxun
        }
    ]
})