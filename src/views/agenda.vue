<template>
    <section>
        <Calendar
        ref="Calendar"
        :textTop='weeks'
        :sundayStart=true
        :chooseDate='dateChoose2'
        @isToday="clickToday"
        agoDayHide="1530115221"
        @choseDay="clickDay"
        @changeMonth="changeDate"
        ></Calendar>
    </section>
</template>
<script>
import Calendar from '@/components/vue-calendar-component';

export default {
    components: {
        Calendar
    },
    data() {
        return {
            weeks: ['日', '一', '二', '三', '四', '五', '六'],
            dateChoose2: [], // 有日程的日期
        };
    },
    methods: {
        clickToday() {

        },
        clickDay() {

        },
        changeDate() {

        }
    }
};
</script>
