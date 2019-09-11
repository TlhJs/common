<template>
    <div class="home">
        <cube-button :active="true" @click="permission">权限控制</cube-button>
        <cube-button :active="true" @click="timeFormat">时间戳转换</cube-button>
        <cube-button :active="true" @click="cart">购物车</cube-button>
        <cube-button :active="true" @click="comAdd">组件动态添加</cube-button>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    components: {},
    methods: {
        permission() {
            this.$router.push({ name: 'Permission' });
        },
        timeFormat() {
            this.$router.push({ name: 'TimeFormat' });
        },
        cart() {
            this.$router.push({ name: 'Cart' });
        },
        comAdd() {
            this.$router.push({ name: 'ComAdd' });
        }
    }
};
</script>
<style type="text/scss" lang="scss" scoped>
.home {
    height: 100%;
    width: 100%;
    overflow: hidden;
    h1 {
        text-align: center;
    }
}
</style>
