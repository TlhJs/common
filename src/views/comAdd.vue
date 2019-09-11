<template>
    <section>
        <button @click="add()">点击添加</button>
        <hr/>
        <my-test v-for="(item, index) in people"
            :key="index"
            :index="index"
            :itemC="item"
            @deleteIndex="del"
        ></my-test>
        <button @click="confirm()">确定</button>
    </section>
</template>
<script>
import MyTest from './addCom.vue';

export default {
    name: 'ComAdd',
    components: {
        MyTest
    },
    data() {
        return {
            people: [{ name: '', phone: '', sex: '' }]
        };
    },
    methods: {
        add() {
            this.people.push({ name: '', phone: '', sex: '' });
        },
        del(val) {
            if (val !== 0) {
                this.people.splice(val, 1);
            }
        },
        confirm() {
            console.log(this.people);
        },
    }
};
</script>
<style lang="scss" scoped></style>
