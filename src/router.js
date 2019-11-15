import Vue from 'vue';
import Router from 'vue-router';

// () => import(/* webpackChunkName: "about" */ './views/About.vue'),
const Home = () => import('./views/index.vue');

Vue.use(Router);

export default new Router({
    mode: 'hash',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home,
            // component: () => import('./views/robot.vue'),
            // component: () => import('./views/sendMessage.vue'),
        },
        {
            path: '/Permission',
            name: 'Permission',
            component: () => import('./views/permission.vue')
        },
        {
            path: '/TimeFormat',
            name: 'TimeFormat',
            component: () => import('./views/timeFormat.vue')
        },
        {
            path: '/Cart',
            name: 'Cart',
            component: () => import('./views/cart.vue')
        },
        {
            path: '/ComAdd',
            name: 'ComAdd',
            component: () => import('./views/comAdd.vue')
        },
        {
            path: '/TimePeriod',
            name: 'TimePeriod',
            component: () => import('./views/timePeriod.vue')
        },
        {
            path: '/PullSel',
            name: 'PullSel',
            component: () => import('./views/pullSel.vue')
        },
        {
            path: '/Robot',
            name: 'Robot',
            component: () => import('./views/robot.vue')
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});
