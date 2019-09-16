<template>
    <section>
        <!-- <cube-button @click="showDateSegmentPicker">StartDate - EndDate</cube-button> -->
        <div class="time">
            <span class="timeBe" @click.stop="showDatePicker('BeDate')">{{searchTime.BeDate || '开始时间'}}&nbsp;</span>至
            <span class="timeEnd" @click.stop="showDatePicker('EndDate')">&nbsp;{{searchTime.EndDate || '结束时间'}}</span>
            <!-- <img class="imgX" :src="x" alt="" @click="timeD()" v-if="timeDele"/> -->
        </div>
    </section>
</template>
<script>
export default {
    name: 'TimePeriod',
    data() {
        return {
            searchTime: {
                BeDate: '',
                EndDate: ''
            }
        };
    },
    mounted() {},
    methods: {
        // 显示 时间插件
        showDatePicker(type) {
            this.timeType = type;
            const d = window.timeFormat().split('-');
            if (!this.datePicker) {
                this.datePicker = this.$createDatePicker({
                    title: '时间',
                    // min: new Date(2008, 7, 8),
                    // max: new Date(2020, 9, 20),
                    min: new Date(+d[0] - 2, +d[1] - 1, +d[2]),
                    max: new Date(+d[0] + 2, +d[1] - 1, +d[2]),
                    value: new Date(+d[0], +d[1] - 1, +d[2]),
                    format: {
                        // year: 'YY年',
                        // month: 'MM月',
                        // date: '第 D 日'
                    },
                    onSelect: this.selectHandle,
                });
            } else {
                let maxArr = new Date(+d[0] + 2, +d[1] - 1, +d[2]);
                let minArr = new Date(+d[0] - 2, +d[1] - 1, +d[2]);
                if (this.timeType === 'BeDate') {
                    if (this.searchTime.BeDate !== undefined && this.searchTime.EndDate !== '') {
                        const ctime = this.searchTime.EndDate.split(' ');
                        const ctime1 = ctime[0];
                        // const ctime2 = ctime[1];
                        const btime1 = ctime1.split('-');
                        // const btime2 = ctime2.split(':');
                        maxArr = new Date(+btime1[0], +btime1[1] - 1, +btime1[2]);
                    }
                    this.datePicker.$updateProps({
                        min: minArr,
                        max: maxArr,
                        // value: window.timeFormat3({time: }),
                        value: window.timeFormat3({ time: this.searchTime.BeDate, date: true, dateObj: true }),
                    });
                } else if (this.timeType === 'EndDate') {
                    if (this.searchTime.EndDate !== undefined && this.searchTime.BeDate !== '') {
                        const ctime = this.searchTime.BeDate.split(' ');
                        const ctime1 = ctime[0];
                        // const ctime2 = ctime[1];
                        const btime1 = ctime1.split('-');
                        // const btime2 = ctime2.split(':');
                        minArr = new Date(+btime1[0], +btime1[1] - 1, +btime1[2]);
                    }
                    this.datePicker.$updateProps({
                        min: minArr,
                        max: maxArr,
                        // value: window.timeFormat3({time: }),
                        value: window.timeFormat3({ time: this.searchTime.EndDate, date: true, dateObj: true }),
                    });
                }
            }
            this.datePicker.show();
        },
        selectHandle(date, selectedVal) {
            // console.log(timeFormat(selectedVal));
            if (this.timeType === 'BeDate') {
                this.searchTime.BeDate = window.timeFormat3({ time: selectedVal });
            } else if (this.timeType === 'EndDate') {
                this.searchTime.EndDate = window.timeFormat3({ time: selectedVal });
            }
            if (this.searchTime.BeDate !== '' || this.searchTime.EndDate !== '') {
                this.timeDele = true;
            }
        },
    }
};
</script>
<style lang="scss" scoped>
    .time {
        text-align: center;
    }
</style>
