<template>
    <div id="container">
        <!-- <header title="客服" style="background:#fff;border-bottom:1px solid #bbb;height:6vh;color:#101010"> -->
            <button class="btn" icon="back" slot="left" @click="btn1()" style="display:inline-block;text-indent:5px;"><</button>
        <!-- </header> -->

        <ul class="content" ref="charView" :style="{height: cHeight + 'px'}">
            <li v-for="(item, index) in messageList" :key="index" >
                <span :class="'span'+(item.myself?'right':'left')">{{item.message}}</span>
            </li>
        </ul>

        <div class="footer">
            <input id="text" type="text" v-model.trim="inputValue" @keyup.enter='chat' placeholder="说点什么吧...">
            <span id="btn" @click="chat()">发送</span>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

// const content = $('.content');

export default {
    name: 'Robot',
    data() {
        return {
            // 输入的内容,事先约定好的
            inputValue: '',
            // 聊天的数组内容
            messageList: []
        };
    }, // 点击回车时候发送信息
    computed: {
        cHeight() {
            return window.innerHeight - 125;
            // return window.innerHeight - 300;
        },
    },
    watch: {
        messageList() {
            this.$nextTick(() => {
                const list = this.$refs.charView;
                list.scrollTop = list.scrollHeight;
            });
        }
    },
    methods: {
        chat() {
            this.messageList.push({
                message: this.inputValue,
                // 这个是判断当前是否是自己输入的内容,自己的是true,机器人的是false
                myself: true
            });
            // 每次发送信息之后机器人就要回复,所以添加完之后直接调用机器人的接口
            Axios({
                url: 'http://www.tuling123.com/openapi/api',
                method: 'post',
                data: {
                    key: 'e5e78db64c3744fda06533e6729737da',
                    info: this.inputValue,
                    box: ''
                }
            }).then((data) => {
                this.messageList.push({
                    message: data.data.text,
                    myself: false

                });
            }).catch(() => {

            });
            this.inputValue = '';
        },
        btn1() {
            this.$router.go(-1);
        },

    },
    mounted() {
        this.box = this.$refs.charView;
    },
};
</script>
<style scoped="">


     * {
            margin: 0;
            padding: 0;
            list-style: none;
            font-family: '微软雅黑'
        }

        #container {
            width: 100vw;
            height: 100vh;
            background: #eee;
            position: relative;
            box-shadow: 20px 20px 55px #777;
            position: relative;
        }
        button {
            position: absolute;
            top: 0;
            left: 0;
            width: 35px;
            height: 40px;
            background: rgba(255,255,255,.5);
            text-align: inherit;
            font-size: 23px;
        }
        .header {
            background: #000;
            height: 40px;
            color: #fff;
            line-height: 34px;
            font-size: 20px;
            padding: 0 10px;
        }
        .footer {
            width: 100vw;
            height: 70px;
            background: #666;
            position: absolute;
            bottom: 0;
            overflow: hidden;

        }
        .footer input {
            margin-top: 10px;
            width: 70vw;
            height: 45px;
            outline: none;
            font-size: 20px;
            text-indent: 10px;
            position: absolute;
            border-radius: 6px;
           margin-left: 10px;
        }

        .footer span {
            margin-top: 10px;
            display: inline-block;
            width: 20vw;
            height: 48px;
            background: #ccc;
            font-weight: 900;
            line-height: 45px;
            cursor: pointer;
            text-align: center;
            position: absolute;
            right: 10px;
            border-radius: 6px;
        }
        .footer span:hover {
            color: #fff;
            background: #999;
        }
        #user_face_icon {
            display: inline-block;
            background: red;
            width: 60px;
            height: 60px;
            border-radius: 30px;
            position: absolute;
            bottom: 6px;
            left: 14px;
            cursor: pointer;
            overflow: hidden;
        }
        img {
            width: 60px;
            height: 60px;
        }
        .content {
            font-size: 20px;
            width: 100vw;
            height: 400px;
            overflow: auto;

        }
        .content li {
            margin-top: 10px;
            display: block;
            clear: both;
            overflow: hidden;
        }
        .content li img {
            float: left;
        }
        .content li span{
            background: #7cfc00;
            padding: 10px;
            border-radius: 10px;
            float: left;
            margin: 6px 10px 0 10px;
            max-width: 310px;
            border: 1px solid #ccc;
            box-shadow: 0 0 3px #ccc;
            word-break: break-all
        }

        .content li span.spanleft {
            float: left;
            background: #fff;
        }
        .content li span.spanright {
            float: right;
            background: #7cfc00;
        }
</style>
