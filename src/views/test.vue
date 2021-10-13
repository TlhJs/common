<template>
    <section class="app">
        <!-- <div @click="go">跳转</div> -->
        <div class="listWrap">
            <div class="list" v-for="(el,idx) in lll" :key="idx" :style="{top:el.top,left:el.left,width:el.width+'px',height:el.width+'px'}">{{el.name}}</div>
            <canvas id="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
            <!-- <canvas id="canvas"></canvas> -->
        </div>
        <!-- <input type="file" id="fileInput" name="file" multiple="multiple" accept="image/*">
        <input v-model="strokeStyle" type="color"> -->
        <router-view></router-view>
    </section>
</template>
<script>
export default {
    name: 'Test',
    data() {
        return {
            strokeStyle: '',
            canvasWidth: '',
            canvasHeight: '',
            lll: [{
                name: 1,
                top: '5%',
                left: '13%',
                width: 45
            }, {
                name: 2,
                top: '5%',
                left: '55%',
                width: 35
            }, {
                name: 3,
                top: '5%',
                left: '78%',
                width: 40
            }, {
                name: 4,
                top: '35%',
                left: '13%',
                width: 30
            }, {
                name: 5,
                top: '25%',
                left: '40%',
                width: 60
            }, {
                name: 6,
                top: '30%',
                left: '80%',
                width: 40
            }, {
                name: 7,
                top: '65%',
                left: '18%',
                width: 45
            }, {
                name: 8,
                top: '55%',
                left: '48%',
                width: 40
            }, {
                name: 9,
                top: '60%',
                left: '82%',
                width: 40
            }]
        };
    },
    watch: {
        strokeStyle(val) {
            console.log(val);
        }
    },
    mounted() {
        // this.$store.commit('orderList', [1, 2, 3, 4]);
        // this.lll = this.$store.state.list;
        // const www = document.getElementsByClassName('list')[0].getBoundingClientRect();
        // const www = document.getElementsByClassName('list')[0].offsetLeft
        this.$nextTick(() => {
            const list = document.getElementsByClassName('listWrap')[0];
            // const canvas = document.getElementById('canvas');
            this.canvasWidth = list.getBoundingClientRect().width;
            this.canvasHeight = list.getBoundingClientRect().height;
            setTimeout(() => {
                this.canavs();
            }, 100);
        });
        // const fileInput = document.querySelector('#fileInput');
        // fileInput.addEventListener('change', (e) => {
        //     // 文件列表对象
        //     const fileList = fileInput.files;
        //     console.log(fileList);
        //     // 获取第一个文件
        //     const file = fileInput.files[0];
        //     console.log(file);
        //     // 文件名
        //     const filename = file.name;
        //     // 文件大小
        //     const filesize = file.size;
        //     // 文件的 MIME 类型，如果分辨不出类型，则为空字符串，该属性只读
        //     const { type } = file;
        //     // 文件的上次修改时间，格式为时间戳
        //     const { lastModified } = file;
        //     // 文件的上次修改时间，格式为 Date 对象实例
        //     const { lastModifiedDate } = file;
        // }, false);
    },
    methods: {
        canavs() {
            const list = document.getElementsByClassName('listWrap')[0];
            const d1 = document.getElementsByClassName('list')[0];
            const d2 = document.getElementsByClassName('list')[1];
            const d4 = document.getElementsByClassName('list')[3];
            const d5 = document.getElementsByClassName('list')[4];
            const d6 = document.getElementsByClassName('list')[5];
            const d7 = document.getElementsByClassName('list')[6];
            const canvas = document.getElementById('canvas');
            // if (canvas.getContext) {
            //     const ctx = canvas.getContext('2d');

            // ctx.beginPath();
            // const p = new Path2D('M10 10 h 80 v 80 h 20');
            // ctx.stroke(p);
            // }

            // canvas.width = '768';
            // canvas.height = '512';
            // this.canvasWidth = list.getBoundingClientRect().width;
            // this.canvasHeight = list.getBoundingClientRect().height;
            const ctx = canvas.getContext('2d');

            ctx.strokeStyle = 'red';
            ctx.setLineDash([1, 3]);
            ctx.beginPath();
            ctx.moveTo(d1.offsetLeft + 45, d1.offsetTop + 22);
            ctx.lineTo(d1.offsetLeft + 45 + 12, d1.offsetTop + 22);
            ctx.lineTo(d1.offsetLeft + 45 + 12, d5.offsetTop + 15);
            ctx.lineTo(d5.offsetLeft, d5.offsetTop + 15);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(d2.offsetLeft + 17, d2.offsetTop + 35);
            ctx.lineTo(d2.offsetLeft + 17, d2.offsetTop + 35 + 11);
            ctx.lineTo(d5.offsetLeft + 30, d2.offsetTop + 35 + 11);
            ctx.lineTo(d5.offsetLeft + 30, d5.offsetTop);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(d4.offsetLeft + 30, d4.offsetTop + 15);
            ctx.lineTo(d4.offsetLeft + 30 + 12, d4.offsetTop + 15);
            ctx.lineTo(d4.offsetLeft + 30 + 12, d5.offsetTop + 30);
            ctx.lineTo(d5.offsetLeft, d5.offsetTop + 30);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(d6.offsetLeft, d6.offsetTop + 20);
            ctx.lineTo(d5.offsetLeft + 60, d6.offsetTop + 20);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(d7.offsetLeft + 45, d7.offsetTop + 22);
            ctx.lineTo(d5.offsetLeft + 15, d7.offsetTop + 22);
            ctx.lineTo(d5.offsetLeft + 15, d5.offsetTop + 60);
            ctx.stroke();
            // const p = new Path2D('M60 35 h 20 v 40 h 70');
            // ctx.stroke(p);
        },
        go() {
            this.$router.push({ name: 'Test2' });
        }
    }
};
</script>
<style lang="scss" scoped>
.app {
    height: 100%;
    width: 100%;
    .listWrap {
        width: 100%;
        height: 50%;
        background: #ccc;
        position: relative;
        // margin: 0 auto;
        >div {
            position: absolute;
            border: 1px solid #000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
