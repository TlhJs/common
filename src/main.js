import Vue from 'vue';
import './cube-ui';
import FastClick from 'fastclick';
import App from './App.vue';
import router from './router';
import store from './store';
import './common/scss/index.scss';
import './common/js/WinUtil';

// 移动端移动点击延时
document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
}, false);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
