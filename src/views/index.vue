<template>
    <div class="home">
        <cube-button  @click="permission">权限控制</cube-button>
        <cube-button  @click="timeFormat">时间戳转换</cube-button>
        <cube-button  @click="cart">购物车</cube-button>
        <cube-button  @click="comAdd">组件动态添加</cube-button>
        <cube-button  @click="time">时间起止</cube-button>
        <cube-button  @click="pullSel">下拉选择</cube-button>
        <cube-button  @click="robot">图灵机器人</cube-button>
        <cube-button  @click="tab">选择tab</cube-button>
        <cube-button  @click="input">输入组件</cube-button>
        <cube-button  @click="style">边框样式</cube-button>
        <cube-button  @click="test">测测测</cube-button>
        <cube-button  @click="froala">富文本编辑框</cube-button>
        <cube-button  @click="write">电子签名</cube-button>
        <cube-button  @click="agneda">日历</cube-button>
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
        },
        tab() {
            this.$router.push({ name: 'Tab' });
        },
        input() {
            this.$router.push({ name: 'Input' });
        },
        style() {
            this.$router.push({ name: 'Style' });
        },
        test() {
            this.$router.push({ name: 'Test' });
        },
        froala() {
            this.$router.push({ name: 'Froala' });
        },
        write() {
            this.$router.push({ name: 'Write' });
        },
        agneda() {
            this.$router.push({ name: 'Agenda' });
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
