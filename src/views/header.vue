<template>
    <section class="wrapper">
        <div class="box" :style="{height: cHeight + 'px'}">
            <div
                class="tab-item"
                :style="{
                    width: (100/listArr.length)*(idx+1) + '%',
                    zIndex:(7 - idx),
                }"
                v-for="(el,idx) in listArr"
                :key="idx"
            >
                <span class="tab-text"
                    :style="{ width: (100 / (idx + 1)) + '%',
                        marginRight: idx !== listArr.length-1? '11px' : 0,
                        color: defaultIndex === idx ?
                            selectData.selectColor : defaultIndex > idx ?
                            selectData.selectColor2 : selectData.normalColor,
                        }">{{el}}</span>
                <div
                    class="tab-content"
                    :style="{
                        backgroundColor: defaultIndex === idx ?
                            selectData.selectBGColor : defaultIndex > idx ?
                            selectData.selectBGColor2 : selectData.normalBGColor,
                    }"
                ></div>
                <div
                    class="tab-arrow-bordr"
                    :style="{
                        borderWidth: `${cHeight/2}px 0 ${cHeight/2}px ${cHeight/2-10}px`,
                        borderLeftColor: defaultIndex === idx ?
                            selectData.selectBGColor : defaultIndex > idx ?
                            selectData.normalBGBorder : selectData.normalBGBorder,
                    }"
                ></div>
                <div v-if="idx < listArr.length-1"
                    class="tab-arrow-bordr-abs"
                    :style="{
                        borderWidth: `${cHeight/2}px 0 ${cHeight/2}px ${cHeight/2-10}px`,
                        borderLeftColor: defaultIndex === idx ?
                            selectData.selectBGColor : defaultIndex > idx ?
                            selectData.selectBGColor2 : selectData.normalBGColor,
                        right: defaultIndex < idx ? '1px' : 0
                    }"
                ></div>
                <div v-if="idx === listArr.length-1"
                    class="tab-arrow-bordr-abs"
                    :style="{
                        borderWidth: `${cHeight/2}px 0 ${cHeight/2}px ${cHeight/2}px`,
                        borderColor: defaultIndex === idx ?
                            selectData.selectBGColor : defaultIndex > idx ?
                            selectData.selectBGColor2 : selectData.normalBGColor,
                        right: defaultIndex < idx ? '1px' : 0
                    }"
                ></div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: '',
    props: {
        defaultIndex: {
            type: Number,
            default: 0
        },
        cHeight: {
            type: Number,
            default: 44
        },
        listArr: {
            type: Array,
            default() {
                return ['合同申报', '审查审批', '合同签订', '合同履行', '合同归档'];
            }
        },
        selectData: {
            type: Object,
            default() {
                return {
                    selectColor: '#1277B4', // 选中 颜色
                    selectBGColor: '#E6F1F7', // 选中 背景 颜色
                    selectBGBorder: '#E6F1F7', // 选中 边框

                    selectColor2: 'white', // 已通过 颜色
                    selectBGColor2: '#0571B1', // 已通过 背景 颜色
                    selectBGBorder2: '#0571B1', // 已通过 边框

                    normalColor: '#333', // 未通过 颜色
                    normalBGBorder: '#F1F1F1', // 未通过 边框
                    normalBGColor: '#fff', // 未通过 背景色
                };
            }
        }
    },
    computed: {
        rightGaps() {
            return parseFloat(
                (Math.sin(Math.PI / 4) * this.cHeight).toFixed(2)
            );
        }
    },
    mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper {
    overflow: hidden;
}
.box {
    font-size: 14px;
    width: calc(100% + 0px);
    position: relative;
    .tab-item {
        box-sizing: border-box;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        overflow: hidden;
        .tab-text {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
        }
        .tab-content {
            flex: 1;
            background: #fff;
            // height: 100%;
        }
        .tab-arrow-bordr {
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid;
        }
        .tab-arrow-bordr-abs {
            position: absolute;
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid;
        }
    }
}
</style>
