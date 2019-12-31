<template>
    <section class="box">
        <!-- <slot></slot> -->
        <p>内容内容内容</p>
        <div class="box-left"></div>
        <div class="box-right"></div>
    </section>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.box {
    width: 300px;
    height: 300px;
    border: 1px solid rgba( #1A2983, .4);
    position: relative;
    margin: 20px auto;
    p {
        height: 100%;
        width: 100%;
        background: rgba(0,122,204,.3)
    }
    // 伪元素默认为inline元素
    .box-left {
        &::before {
            content: '';
            position: absolute;
            left: -1px;
            top: -1px;
            width: 12px;
            height: 12px;
            border: 1px solid red;
            // display: inline-block;
            border-right: none;
            border-bottom: none;
        }
        &::after {
            content: '';
            position: absolute;
            left: -1px;
            bottom: -1px;
            width: 12px;
            height: 12px;
            border: 1px solid red;
            border-right: none;
            border-top: none;
        }
    }
    .box-right {
        &::before {
            content: '';
            position: absolute;
            right: -1px;
            top: -1px;
            width: 12px;
            height: 12px;
            border: 1px solid red;
            border-left: none;
            border-bottom: none;
        }
        &::after {
            content: '';
            position: absolute;
            right: -1px;
            bottom: -1px;
            width: 12px;
            height: 12px;
            border: 1px solid red;
            border-left: none;
            border-top: none;
        }
    }
}
</style>
