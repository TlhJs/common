<template>
    <div id="app">
        <ul class="shop">
            <li v-for="item in items">
                <span>{{item.text}}</span>
                <span>{{item.price}}</span>
                <button @click="additem">添加</button>
            </li>
        </ul>
        <div class="cart" style="">{{count}}</div>
        <div class="ball-container"><!--小球-->
            <div v-for="ball in balls">
                <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
                    <div class="ball" v-show="ball.show">
                        <div class="inner inner-hook"></div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
            items: [
                {
                    text: '苹果',
                    price: 15
                },
                {
                    text: '香蕉',
                    price: 15
                }
            ],
            balls: [ // 小球 设为3个
                {
                    show: false
                },
                {
                    show: false
                },
                {
                    show: false
                },
            ],
            dropBalls: [],
        };
    },
    methods: {
        additem(event) {
            this.drop(event.target);
            this.count++;
        },
        drop(el) { // 抛物
            for (let i = 0; i < this.balls.length; i++) {
                const ball = this.balls[i];
                if (!ball.show) {
                    ball.show = true;
                    ball.el = el;
                    this.dropBalls.push(ball);
                    // return;
                }
            }
        },
        beforeDrop(el) { /* 购物车小球动画实现 */
            let count = this.balls.length;
            while (count--) {
                const ball = this.balls[count];
                if (ball.show) {
                    const rect = ball.el.getBoundingClientRect(); // 元素相对于视口的位置
                    const x = rect.left - 32;
                    const y = -(window.innerHeight - rect.top - 22); // 获取y
                    el.style.display = '';
                    el.style.webkitTransform = `translateY(${y}px)`; // translateY
                    el.style.transform = `translateY(${y}px)`;
                    const inner = el.getElementsByClassName('inner-hook')[0];
                    inner.style.webkitTransform = `translateX(${x}px)`;
                    inner.style.transform = `translateX(${x}px)`;
                }
            }
        },
        dropping(el, done) { /* 重置小球数量  样式重置 */
            // const rf = el.offsetHeight;
            el.style.webkitTransform = 'translate3d(0,0,0)';
            el.style.transform = 'translate3d(0,0,0)';
            const inner = el.getElementsByClassName('inner-hook')[0];
            inner.style.webkitTransform = 'translate3d(0,0,0)';
            inner.style.transform = 'translate3d(0,0,0)';
            el.addEventListener('transitionend', done);
        },
        afterDrop(el) { /* 初始化小球 */
            const ball = this.dropBalls.shift();
            if (ball) {
                ball.show = false;
                el.style.display = 'none';
            }
        }
    }

};
</script>
<style lang="scss" scoped>
.shop{
     position: fixed;
     top: 100px;
     left: 250px;
     li {
         padding: 12px 0 ;
     }
 }
 .ball{
     position: fixed;
     left: 32px;
     bottom: 22px;
     z-index: 200;
     transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41); /*贝塞尔曲线*/
 }
 .inner{
     width: 16px;
     height: 16px;
     border-radius: 50%;
    //  background-color: rgb(0,160,220);
    background: pink;
     transition: all 0.4s linear;
}
.cart{
    position: fixed;
    bottom: 22px;
    left: 32px;
    width: 30px;
    height: 30px;
    background-color: rgb(0,160,220);
    color: rgb(255,255,255);
}
</style>
