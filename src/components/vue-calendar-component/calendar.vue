<style scoped>
@media screen and (min-width: 460px) {
  .wh_item_date:hover {
    background: #fff;
    cursor: pointer;
  }
}
* {
  margin: 0;
  padding: 0;
}

.wh_container {
  /* max-width: 410px; */
  width: 100%;
  margin: auto;
}

li {
  list-style-type: none;
}
.wh_top_changge {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
}

.wh_top_changge .wh_top_month {
  font-size: 35px;
  color: #c3ccd4;
}
.wh_top_changge .wh_top_btn {
  display: flex;
}

.wh_top_changge .wh_top_btn li {
  cursor: pointer;
  display: flex;
  color: #666;
  font-size: 18px;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 47px;
}

.wh_top_changge .wh_top_btn .wh_content_li {
  cursor: auto;
  flex: 2.5;
  white-space: nowrap;
  padding: 0 10px;
  font-size: 15px;
}
.wh_content_all {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
    "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  background-color: #fff;
  width: 100%;
  overflow: hidden;
  padding-bottom: 8px;
  /* height: 100%; */
}

.wh_content {
  display: flex;
  flex-wrap: wrap;
  padding: 0 3% 0 3%;
  width: 100%;
  justify-content: center;
}

.wh_content:first-child .wh_content_item_tag,
.wh_content:first-child .wh_content_item {
  color: #ddd;
  font-size: 16px;
}

.wh_content_item,
wh_content_item_tag {
  font-size: 15px;
  width: 13.4%;
  text-align: center;
  color: #85858a;
  position: relative;
}
.wh_content_item {
  height: 40px;
}
.wh_content_item span {
    width: 3px;
    height: 3px;
    display: block;
    border-radius: 50%;
    background: red;
    margin: 0 auto;
}

.wh_top_tag {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wh_item_date {
  width: 35px;
  height: 35px;
  line-height: 35px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
}
.mark1 {
    background-color: orange;
}

.mark2 {
    background-color: blue;
}

.wh_jiantou1 {
  width: 8px;
  height: 8px;
  border-top: 1px solid #666;
  border-left: 1px solid #666;
  transform: rotate(-45deg);
}

.wh_jiantou1:active,
.wh_jiantou2:active {
  border-color: #ddd;
}

.wh_jiantou2 {
  width: 8px;
  height: 8px;
  border-top: 1px solid #666;
  border-right: 1px solid #666;
  transform: rotate(45deg);
}
.wh_content_item > .wh_isMark {
  margin: auto;
  border-radius: 100px;
  background: blue;
  z-index: 2;
}
.wh_content_item .wh_other_dayhide {
  color: #bfbfbf;
}
.wh_content_item .wh_want_dayhide {
  color: #bfbfbf;
}
.wh_content_item .wh_isToday {
  /* background: yellow; */
  color: #4999ed;
  border-radius: 100px;
}
.wh_content_item .wh_chose_day {
  background: #4999ed;
  color: #fff;
  border-radius: 100px;
}
</style>
<template>
  <section class="wh_container">
    <div class="wh_content_all">
      <div class="wh_top_changge">
        <div class="wh_top_month">{{dateDate}}</div>
        <div class="wh_top_btn">
          <li @click="PreMonth(myDate,false)">
            <div class="wh_jiantou1"></div>
          </li>
          <li class="wh_content_li">{{dateTop}}</li>
          <li @click="NextMonth(myDate,false)">
            <div class="wh_jiantou2"></div>
          </li>
        </div>
      </div>
      <div class="wh_content">
        <div class="wh_content_item" v-for="(tag,idx) in textTop" :key="idx">
          <div class="wh_top_tag">{{tag}}</div>
        </div>
      </div>
      <div class="wh_content">
        <div class="wh_content_item" v-for="(item,index) in list" :key="index" @click="clickDay(item,index)">
          <div
            class="wh_item_date"
            v-bind:class="[{ wh_isMark: item.isMark},{wh_other_dayhide:item.otherMonth!=='nowMonth'},{wh_want_dayhide:item.dayHide},{wh_isToday:item.isToday},{wh_chose_day:item.chooseDay},setClass(item)]"
          >{{item.id}}</div>
          <span v-if="item.isSelect"></span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import timeUtil from './calendar';

export default {
    data() {
        return {
            myDate: [],
            list: [],
            historyChose: [],
            dateTop: '',
            dateDate: '',
        };
    },
    props: {
        markDate: {
            type: Array,
            default: () => []
        },
        markDateMore: {
            type: Array,
            default: () => []
        },
        textTop: {
            type: Array,
            default: () => ['一', '二', '三', '四', '五', '六', '日']
        },
        sundayStart: {
            type: Boolean,
            default: () => false
        },
        agoDayHide: {
            type: String,
            default: '0'
        },
        futureDayHide: {
            type: String,
            default: '2554387200'
        },
        chooseDate: {
            type: Array,
            dafault: () => []
        }
    },
    created() {
        this.intStart();
        this.myDate = new Date();
    },
    methods: {
        intStart() {
            timeUtil.sundayStart = this.sundayStart;
        },
        setClass(data) {
            const obj = {};
            obj[data.markClassName] = data.markClassName;
            return obj;
        },
        clickDay(item) {
            if (item.otherMonth === 'nowMonth' && !item.dayHide) {
                this.getList(this.myDate, item.date);
            }
            if (item.otherMonth !== 'nowMonth') {
                if (item.otherMonth === 'preMonth') {
                    this.PreMonth(item.date);
                } else {
                    this.NextMonth(item.date);
                }
                // item.otherMonth === 'preMonth' ? this.PreMonth(item.date) : this.NextMonth(item.date);
            }
        },
        ChoseMonth(date, isChosedDay = true) {
            date = timeUtil.dateFormat(date);
            this.myDate = new Date(date);
            this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
            if (isChosedDay) {
                this.getList(this.myDate, date, isChosedDay);
            } else {
                this.getList(this.myDate);
            }
        },
        PreMonth(date, isChosedDay = true) {
            date = timeUtil.dateFormat(date);
            this.myDate = timeUtil.getOtherMonth(this.myDate, 'preMonth');
            this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
            if (isChosedDay) {
                this.getList(this.myDate, date, isChosedDay);
            } else {
                this.getList(this.myDate);
            }
        },
        NextMonth(date, isChosedDay = true) {
            date = timeUtil.dateFormat(date);
            this.myDate = timeUtil.getOtherMonth(this.myDate, 'nextMonth');
            this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
            if (isChosedDay) {
                this.getList(this.myDate, date, isChosedDay);
            } else {
                this.getList(this.myDate);
            }
        },
        forMatArgs() {
            let { markDate } = this;
            let { markDateMore } = this;
            markDate = markDate.map(k => timeUtil.dateFormat(k));
            markDateMore = markDateMore.map((k) => {
                k.date = timeUtil.dateFormat(k.date);
                return k;
            });
            return [markDate, markDateMore];
        },
        getList(date, chooseDay) {
            const [markDate, markDateMore] = this.forMatArgs();
            this.dateTop = `${date.getFullYear()} / ${date.getMonth() + 1}`;
            this.dateDate = date.getDate();
            const arr = timeUtil.getMonthList(this.myDate);
            // 标记有日程的日期
            arr.forEach((item) => {
                if (this.chooseDate.indexOf(item.date2) > -1) {
                    item.isSelect = true;
                } else {
                    item.isSelect = false;
                }
            });
            // console.log(arr);
            for (let i = 0; i < arr.length; i += 1) {
                let markClassName = '';
                const k = arr[i];
                k.chooseDay = false;
                const nowTime = k.date;
                const nowTimeShow = k.date2;
                const t = new Date(nowTime).getTime() / 1000;
                // 看每一天的class
                markDateMore.forEach((el) => {
                    if (el.date === nowTime) {
                        markClassName = el.className || '';
                    }
                });
                // for (const c of markDateMore) {
                //     if (c.date === nowTime) {
                //         markClassName = c.className || '';
                //     }
                // }
                // 标记选中某些天 设置class
                k.markClassName = markClassName;
                k.isMark = markDate.indexOf(nowTime) > -1;
                // 无法选中某天
                k.dayHide = t < this.agoDayHide || t > this.futureDayHide;
                // console.log(k);
                if (k.isToday) {
                    this.$emit('isToday', nowTimeShow);
                }
                const flag = !k.dayHide && k.otherMonth === 'nowMonth';
                if (chooseDay && chooseDay === nowTime && flag) {
                    this.$emit('choseDay', nowTimeShow);
                    this.historyChose.push(nowTime);
                    k.chooseDay = true;
                } else if (
                    this.historyChose[this.historyChose.length - 1] === nowTime
          && !chooseDay
          && flag
                ) {
                    k.chooseDay = true;
                }
            }
            this.list = arr;
            // console.log(this.list);
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.getList(this.myDate);
        });
    },
    watch: {
        chooseDate(val) {
            this.list.forEach((item) => {
                if (val.indexOf(item.date2) > -1) {
                    item.isSelect = true;
                } else {
                    item.isSelect = false;
                }
            });
        },
        markDate: {
            handler() {
                this.getList(this.myDate);
            },
            deep: true
        },
        markDateMore: {
            handler() {
                this.getList(this.myDate);
            },
            deep: true
        },
        agoDayHide: {
            handler() {
                this.getList(this.myDate);
            },
            deep: true
        },
        futureDayHide: {
            handler() {
                this.getList(this.myDate);
            },
            deep: true
        },
        sundayStart: {
            handler() {
                this.intStart();
                this.getList(this.myDate);
            },
            deep: true
        },
    }
};
</script>
