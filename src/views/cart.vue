<template>
    <section>
        <!--
            单价：28
            数量
            运费 10；
            满 299 包邮

         -->

         <p>单价{{price}}</p>
         <button @click="reduce()">-</button>&nbsp;
         <input type="text" v-model.number="num">&nbsp;
         <button @click="add()">+</button>
         <p>运费{{freight}}</p>
         <p>应付{{pay}}</p>
         <p>实付{{sum}}</p>
    </section>
</template>
<script>
export default {
    name: 'Cart',
    data() {
        return {
            price: 28.8,
            num: 1,
            freight: 10,
        };
    },
    computed: {
        sum() {
            if (this.num * this.price > 299) {
                //* 10/10为了消除掉小数
                return this.num * (this.price * 10) / 10;
            }
            return this.num * (this.price * 10) / 10 + this.freight;
        },
        pay() {
            return this.num * (this.price * 10) / 10 + this.freight;
        }
    },
    methods: {
        reduce() {
            if (this.num === 1) {
                this.num = 1;
            } else {
                this.num--;
            }
        },
        add() {
            this.num++;
        }
    }
};
</script>
<style lang="scss" scoped type="text/scss"></style>
