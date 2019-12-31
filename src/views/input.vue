<template>
    <section class="inputcontrol" :style="{height: cHeight + 'px'}">
        <div ref="control-scroll-wrapper" class="control-scroll-wrapper" :style="{height: controlScrollWrapperHeight + 'px'}">
            <div ref="control-write" :style="{height: cHeight + 'px'}" class="control-write">
                <div class="control-changyong" :class="{'chooseColor':isClick[0]}" @click.stop="handleClickWrite('common')">
                    <i ref="control-common-i"></i>
                    <!-- <b class="iconfont">&#xe66e;</b> -->
                    常用
                </div>
                <div class="control-input">
                    <input type="text" v-model="remark" placeholder="请输入您的意见...">
                    <!-- <textarea ref="text" @click.stop placeholder="请输入意见..." @focus="wordFocus" v-model="remark"></textarea> -->
                </div>
                <div class="control-more" @click.stop="handleClickWrite('more')" :class="{'chooseColor':isClick[1]}">
                    <i ref="control-more-i"></i>
                    <!-- <b class="iconfont">&#xe68b;</b> -->
                    更多
                </div>
                <div class="control-yes" :class="{'chooseColor':isClick[2]}" @click.stop="handleClickWrite('agree')">
                    <!-- <i ref="control-yes-i"></i> -->
                    <!-- <b class="iconfont">&#xe50c;</b> -->
                    同意
                </div>
            </div>
            <div ref="control-select" v-if="!isCommon" :style="{height: selectHeight + 'px' }" class="control-select">
                <div class="control-list" :class="{controlColor: index===idx}" v-for="(el,idx) in listArr" :key="idx" @click="moreList(el,idx)">
                    <!-- <i class="iconfont">{{el.icon}}&nbsp;</i> -->
                    {{el.name}}
                </div>
            </div>
            <div ref="control-select" v-if="isCommon" :style="{height: selectHeight + 'px' }" class="control-select">
                <div class="control-list">

                </div>
            </div>
        </div>
        <div v-if="isShowMark" @click.stop="handleClickClose" class="control-mark"></div>
    </section>
</template>
<script>
export default {
    name: 'c-inputControl',
    props: {
        selectHeight: {
            type: Number,
            default: 100
        },
        cHeight: {
            type: Number,
            default: 64
        },
        listArr: {
            type: Array,
            default() {
                return [{ name: 1 }, { name: 2 }];
            }
        },
    },
    data() {
        return {
            isShowMark: false,
            controlScrollWrapperHeight: this.cHeight,
            remark: '',
            isClick: [false, false, false],
            index: '',
            isCommon: ''
        };
    },
    methods: {
        handleClickWrite(val) {
            this.isClick = [false, false, false];
            switch (val) {
            case 'common':
                this.isCommon = true;
                this.controlScrollWrapperHeight = this.selectHeight + this.cHeight;
                this.$refs['control-common-i'].style['z-index'] = 1;
                this.$refs['control-more-i'].style['z-index'] = -1;
                // this.$refs['control-yes-i'].style['z-index'] = -1;
                this.isShowMark = true;
                this.isClick[0] = true;
                break;
            case 'more':
                this.isCommon = false;
                this.controlScrollWrapperHeight = this.selectHeight + this.cHeight;
                this.$refs['control-more-i'].style['z-index'] = 1;
                this.$refs['control-common-i'].style['z-index'] = -1;
                // this.$refs['control-yes-i'].style['z-index'] = -1;
                this.isShowMark = true;
                this.isClick[1] = true;
                break;
            case 'agree':
                this.$refs['control-common-i'].style['z-index'] = -1;
                this.$refs['control-more-i'].style['z-index'] = -1;
                this.controlScrollWrapperHeight = this.cHeight;
                this.isShowMark = false;
                this.isClick[2] = true;
                this.index = '';
                this.remark = '';
                this.$emit('agreeClick', { views: this.remark, commond: 1 });
                break;
            default:
                break;
            }
        },
        handleClickClose() {
            this.controlScrollWrapperHeight = this.cHeight;
            this.$refs['control-common-i'].style['z-index'] = -1;
            this.$refs['control-more-i'].style['z-index'] = -1;
            this.isShowMark = false;
            this.isClick = [false, false, false];
            this.index = '';
        },
        moreList(el, val) {
            this.index = val;
            // console.log(el);
            if (el.name === '退回') {
                this.remark = '';
                this.$emit('agreeClick', { views: this.remark, commond: 2 });
            }
        }
    },
};
</script>
<style lang="scss" scoped>
    $transitionTime: .5s;
    .inputcontrol {
        width: 100%;
        // position: relative;
        position: fixed;
        bottom: 0;
        .control-scroll-wrapper {
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0;
            transition: $transitionTime all;
            z-index: 3;
            overflow: hidden;
        }
        .control-write {
            background: #F5F5F5;
            display: flex;
            align-items: center;
            padding: 12px 6px;
            box-sizing: border-box;
            > div {
                height: 100%;
                text-align: center;
                display: flex;
                // align-items: center;
                justify-content: center;
                flex-direction: column;
            }
            .chooseColor {
                color: #086AAD;
            }
            .chooseColor2 {
                color: rgb(5, 72, 187);
            }
            .control-changyong {
                width: 44px;
                font-size: 13px;
                i {
                    display: block;
                    width: 22px;
                    height: 22px;
                    background: #fff;
                    position: absolute;
                    // bottom: -31px;
                    left: 16px;
                    top: 60px;
                    transform: rotate(45deg);
                    z-index: -1;
                }
                b {
                    display: block;
                    font-size: 22px;
                    margin-bottom: 3px;
                }
            }
            .control-input {
                flex: 1;
                input {
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                    border-radius: 5px;
                    padding: 0 5px;
                    text-indent: 8px;
                }
                textarea {
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                    border-radius: 5px;
                    padding: 0 5px;
                    background: #fff;
                }
            }
            .control-more {
                position: relative;
                width: 44px;
                font-size: 13px;
                i {
                    display: block;
                    width: 22px;
                    height: 22px;
                    background: #fff;
                    position: absolute;
                    bottom: -31px;
                    left: 10px;
                    transform: rotate(45deg);
                    z-index: -1;
                }
                b {
                    display: block;
                    font-size: 26px;
                    margin-bottom: 3px;
                }
            }
            .control-yes {
                width: 44px;
                font-size: 13px;
                i {
                    display: block;
                    width: 22px;
                    height: 22px;
                    background: #fff;
                    position: absolute;
                    bottom: -31px;
                    left: 10px;
                    transform: rotate(45deg);
                    z-index: -1;
                }
                b {
                    display: block;
                    font-size: 26px;
                    margin-bottom: 3px;
                }
            }
        }
        .control-select {
            position: relative;
            background: #fff;
            display: flex;
            flex-direction: column;
            z-index: 2;
            padding: 0px 20px;
            .control-list {
                i {
                    font-size: 19px;
                }
                flex: 1;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #F6F6F6;
                text-indent: 3px;
            }
            .controlColor {
                color: #BF8A94;
            }
        }
        .control-mark {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: transparent;
            z-index: 2;
        }
        input::-webkit-input-placeholder {
        color: #D9DBDF;
    }

    input:-moz-placeholder {
        color: #D9DBDF;
    }

    input::-moz-placeholder {
        color: #D9DBDF;
    }

    input:-ms-input-placeholder {
        color: #D9DBDF;
    }
    }
</style>
