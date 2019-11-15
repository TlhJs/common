<template>
    <div class="home">
        <cube-button  @click="permission">权限控制</cube-button>
        <cube-button  @click="timeFormat">时间戳转换</cube-button>
        <cube-button  @click="cart">购物车</cube-button>
        <cube-button  @click="comAdd">组件动态添加</cube-button>
        <cube-button  @click="time">时间起止</cube-button>
        <cube-button  @click="pullSel">下拉选择</cube-button>
        <cube-button  @click="robot">图灵机器人</cube-button>
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
        },
        time() {
            this.$router.push({ name: 'TimePeriod' });
        },
        pullSel() {
            this.$router.push({ name: 'PullSel' });
        },
        robot() {
            this.$router.push({ name: 'Robot' });
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
