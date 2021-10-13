import Vue from 'vue';
import Vuex from 'vuex';

// todo 实际代码在补充完善

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        orderList(s, d) {
            s.list = d;
            // window.localStorage.setItem("list",JSON.stringify(s.orderList))
        },
    },
    actions: {}
});
