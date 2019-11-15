<template>
    <section :style="{width: cWidth + 'px', height: cHeight + 'px'}" class="btn" >
        <div class="pullDefine" @click.stop="handleClickBtn">{{dataDefault}}</div>
        <div class="pullWrapper">
            <div class="pullContent" v-for="(el,idx) in dataList" :key="idx">
                <div class="item" @click.stop="itemClick(el,idx)">{{el}}</div>
            </div>
        </div>
        <div v-if="!allow" class="pullMark" @click.stop="handleClickMark"></div>
    </section>
</template>
<script>
export default {
    name: 'PullSel',
    props: {
        dataDefault: {
            type: [Object, String],
            default() {
                return '按钮';
            }
        },
        dataList: {
            type: Array,
            default() {
                return ['按钮0', '按钮1', '按钮2'];
            }
        },
        cWidth: {
            type: Number,
            default: 44
        },
        cHeight: {
            type: Number,
            default: 44
        },
        rotateDeg: {
            type: String,
            default: '1turn'
        },
        autoClose: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            allow: true,
        };
    },
    mounted() {
        this.$nextTick(() => {
            const wrapper = document.querySelector('.pullWrapper');
            const content = document.querySelectorAll('.pullContent');
            const defineHeight = this.cWidth;
            // 外壳变化
            wrapper.style.height = `${defineHeight}px`; // 初始化 wrapper为 44 让其与 item 一起起跑
            wrapper.style.overflow = 'hidden'; // 测试关闭
            // 内容变化
            [...content].forEach((item, index) => {
                // item.style.transform = `translate3d(${50 * (index + 1)}px, 0, 0)`; // 测试 打开
                item.style.height = `${defineHeight}px`; // 初始化 wrapper为 44 让其与 item 一起起跑
                item.style['z-index'] = 9 - index;
            });
        });
    },
    methods: {
        itemClick(el, idx) {
            this.$emit('itemClick', { el, idx });
            if (this.autoClose) {
                setTimeout(() => {
                    this.handleClickBtn();
                }, 80);
            }
        },
        handleClickMark() {
            if (!this.allow) { this.handleClickBtn(); }
        },
        handleClickBtn() {
            const wrapper = document.querySelector('.pullWrapper');
            const content = document.querySelectorAll('.pullContent');
            const defineHeight = this.cWidth;
            if (this.allow) {
                wrapper.style.height = `${defineHeight * (content.length + 1) + 100}px`; //  wrapper 无高度 不会显示 item
                [...content].forEach((item, index) => {
                    // item.style.transform = `translate3d(${50 * (index + 1)}px, ${defineHeight * (index + 1)}px, 0)`; // 测试 打开
                    item.style.transform = `translate3d(0, ${(defineHeight + 5) * (index + 1)}px, 0)`; // 启用 打开
                    item.children[0].style.transform = `rotate(${this.rotateDeg})`;
                });
                // wrapper.style.transition = '.42 all';
                this.allow = false;
            } else {
                wrapper.style.height = `${defineHeight}px`;
                [...content].forEach((item, index) => {
                    // item.style.transform = `translate3d(${50 * (index + 1)}px, 0px, 0)`; // 测试 打开
                    item.style.transform = `translate3d(0px, ${(index * 0)}px, 0)`; // 启用 打开
                    item.children[0].style.transform = 'rotate(0deg)';
                });
                this.allow = true;
            }
        },
    },
};
</script>
<style lang="scss" scoped>
    $transitionTime: .42s;
    .btn {
        position: relative;
        color: #fff;
        .pullMark {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: transparent;
            // background: rgba(0,0,0,.1);
            z-index: 0;
        }
        .pullDefine {
            position: relative;
            background: orange;
            border-radius: 100px;
            height: 100%;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .pullWrapper {
            position: absolute;
            width: 100%;
            left: 0;
            top: 0;
            transition: $transitionTime all;
            border-radius: 200px;
            // overflow: hidden;
            // background: teal;
        }
        .pullContent {
            position: absolute;
            width: 100%;
            border-radius: 200px;
            overflow: hidden;
            transition: $transitionTime all;
            // box-shadow: 0px 0px 5px -1px #000;
            .item {
                width: 100%;
                height: 100%;
                transition: $transitionTime all;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: cadetblue;
            }
        }
    }
</style>
