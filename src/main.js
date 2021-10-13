import Vue from 'vue';
import './cube-ui';
// import FastClick from 'fastclick';
// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg';
// import vueEsign from 'vue-esign';
import App from './App.vue';
import router from './router';
import store from './store';
import './common/scss/index.scss';
import './common/js/WinUtil';
//  引入 自定义 vue  组件
import VComponents from './components';


// Import Froala Editor
// import 'froala-editor/js/plugins.pkgd.min';
// // Import third party plugins
// import 'froala-editor/js/third_party/embedly.min';
// import 'froala-editor/js/third_party/font_awesome.min';
// import 'froala-editor/js/third_party/spell_checker.min';
// import 'froala-editor/js/third_party/image_tui.min';
// // Import Froala Editor css files.
// import 'froala-editor/css/froala_editor.pkgd.min.css';
// // import 'froala-editor/css/froala_style.min.css';
// // import 'froala-editor/js/froala_editor.pkgd.min';
// import 'froala-editor/js/languages/zh_cn';

// require('froala-editor/js/plugins.pkgd.min.js');
// require('froala-editor/js/plugins/image.min.js');
require('froala-editor/css/froala_editor.min.css');
// require('froala-editor/css/froala_style.min.css');
// require('froala-editor/js/languages/zh_cn');

// 移动端移动点击延时
// document.addEventListener('DOMContentLoaded', () => {
//     FastClick.attach(document.body);
// }, false);
Vue.use(VueFroala);
Vue.use(VComponents);
// Vue.use(vueEsign);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
