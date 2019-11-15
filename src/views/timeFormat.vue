<template>
    <section>
        <div>输入时间戳为：1560545941000</div>
        <div>转化为：{{1560545941000 | TimeFormat}}</div>
    </section>
</template>
<script>
import { formatDate } from '../common/js/date';

export default {
    name: 'TimeFormat',
    data() {
        return {

        };
    },
    filters: {
        TimeFormat(time) {
            const date = new Date(time);
            // var date = new Date(time*1000); 若是10位时间戳*1000
            return formatDate(date, 'yyyy年MM月dd日');
        }
    }
};
</script>
<style lang="scss" scoped type="text/scss">

</style>
