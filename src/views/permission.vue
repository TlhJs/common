<template>
    <section>
        <ul>
            <li v-for="(el,idx) in test2" :key="idx">{{el.name}}</li>
        </ul>
    </section>
</template>
<script>
import permissionData from '../common/js/per';

export default {
    name: 'Permission',
    components: {

    },
    data() {
        return {
            test: [{
                name: '普通权限', perData: [0, 1, 2]
            }, {
                name: '用户权限', perData: [0]
            }, {
                name: '管理员', perData: [1]
            }, {
                name: '超级管理员', perData: [2]
            }],
            test2: [],
            perList: ['admin', 'superAdmin'] // 权限列表
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.test2 = this.test.filter(el => permissionData({
                arr: el.perData,
                arr2: this.perList
            }) === true);
        }

    }
};
</script>
<style lang="scss" scoped></style>
