import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode : 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import(/* webpackChunkName: "about" */ '../pages/home')
        },
        {
            path: '/shop',
            name: 'Shop',
            component: () => import(/* webpackChunkName: "about" */ '../pages/shop')
        },
        {
            path: '/couture',
            name: 'Couture',
            component: () => import(/* webpackChunkName: "about" */ '../pages/couture')
        },
        {
            path: '/wear',
            name: 'Wear',
            component: () => import(/* webpackChunkName: "about" */ '../pages/wear')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import(/* webpackChunkName: "about" */ '../pages/about')
        },
        {
            path: '/locator',
            name: 'locator',
            component: () => import(/* webpackChunkName: "about" */ '../pages/locator'),
        },
    ]
})

export default router