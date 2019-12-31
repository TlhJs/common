<template>
<section class="box" :style="{height: cHeight + 'px'}">
    <div class="tab-item" :class="{'selectItemColor':selectIndex === idx}" v-for="(el,idx) in listArr" :key="idx" @click.stop="handleClick(el,idx)">
        <!-- <i class="iconfont">{{el.icon}}&nbsp;&nbsp;</i> -->
        {{el.name}}
    </div>
    <div ref="slider" class="slider" :style="{width: (100/listArr.length) + '%'}">
        <div class="slider-content"></div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Tab',
    props: {
        defaultIndex: {
            type: Number,
            default: 0,
        },
        listArr: {
            type: Array,
            default() {
                return [{ icon: '\ue679', name: '基本信息' }, { icon: '\ue75e', name: '合同文本' },
                    { icon: '\ue850', name: '相关资料' }, { icon: '\ue617', name: '审批记录' }];
            },
        },
        cHeight: {
            type: Number,
            default: 44,
        },
        chooseColor: {}
    },
    watch: {
        defaultIndex() {
            this.$refs.slider.style.left = `${(100 / this.listArr.length)
        * (this.defaultIndex < this.listArr.length ? this.defaultIndex : this.listArr.length - 1)}%`;
            this.selectIndex = this.defaultIndex;
        }
    },
    mounted() {
        this.$refs.slider.style.left = `${(100 / this.listArr.length)
        * (this.defaultIndex < this.listArr.length ? this.defaultIndex : this.listArr.length - 1)}%`;
        this.selectIndex = this.defaultIndex;
    },
    data() {
        return {
            selectIndex: this.defaultIndex,
            // beforeIndex: []
        };
    },
    methods: {
        handleClick(el, idx) {
            this.selectIndex = idx;
            // this.defaultIndex = idx;
            this.$refs.slider.style.left = `${(100 / this.listArr.length) * (idx)}%`;
            this.beforeIndex = [];
            this.listArr.forEach((val, index) => {
                if (index < idx) {
                    this.beforeIndex.push(index);
                }
            });
            this.$emit('handleClick', this.beforeIndex);
        },
    },
};
</script>

<style lang="scss" scoped>
$transitionTime: .4s;

.selectItemColor {
    color: #0872B0;
}

.box {
    display: flex;
    position: relative;
    background: #EEEEEE;
    // box-shadow: 0px 0px 2px #ccc;
    color: #9B9B9B;
    margin: 16px 24px;
    .tab-item {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 2;
        transition: $transitionTime all;
        font-size: 11px;
        i {
            font-size: 12px;
        }
    }

    .slider {
        position: absolute;
        left: 0;
        height: 100%;
        padding: 6px;
        box-sizing: border-box;
        transition: $transitionTime all;

        .slider-content {
            height: 100%;
            width: 100%;
            background: #fff;
            border-radius: 2px;
            box-shadow: 0 0 5px #eee;
        }
    }
}
</style>
