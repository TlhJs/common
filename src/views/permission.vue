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
            test1: [{
                name: '普通权限', perData: ['user', 'admin', 'superAdmin']
            }, {
                name: '用户权限', perData: ['user']
            }, {
                name: '管理员', perData: ['admin']
            }, {
                name: '超级管理员', perData: ['superAdmin']
            }],
            test2: [],
            perList: ['admin', 'superAdmin'] // 权限列表(可通过接口请求)
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            // 方法一
            // this.test2 = this.test.filter(el => permissionData({
            //     arr: el.perData,
            //     arr2: this.perList
            // }) === true);
            // 方法二
            this.test1.forEach((el) => {
                if (this.perList.filter(e => el.perData.indexOf(e) > -1).length > 0) {
                    console.log(el);
                    this.test2.push(el);
                }
            });
        }

    }
};
</script>
<style lang="scss" scoped></style>
