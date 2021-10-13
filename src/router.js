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
            // component: () => import('./views/header.vue'),
            // component: () => import('./views/style.vue'),
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
            path: '/Tab',
            name: 'Tab',
            component: () => import('./views/tab.vue')
        },
        {
            path: '/Input',
            name: 'Input',
            component: () => import('./views/input.vue')
        },
        {
            path: '/Style',
            name: 'Style',
            component: () => import('./views/style.vue')
        },
        {
            path: '/Test',
            name: 'Test',
            component: () => import('./views/test.vue')
        },
        {
            path: '/Froala',
            name: 'Froala',
            component: () => import('./views/froala.vue'),
        },
        {
            path: '/Write',
            name: 'Write',
            component: () => import('./views/writehand.vue'),
        },
        {
            path: '/Agenda',
            name: 'Agenda',
            component: () => import('./views/agenda.vue'),
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});
