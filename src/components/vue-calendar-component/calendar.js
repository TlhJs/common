export default {
    // 某月的天数
    getDaysInOneMonth(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const d = new Date(year, month, 0);
        return d.getDate();
    },
    // 向前空几个
    getMonthweek(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        // 本月第一天
        const dateFirstOne = new Date(`${year}/${month}/1`);
        // 周日开头
        if (this.sundayStart) {
            if (dateFirstOne.getDay() === 0) {
                return 7;
            }
            return dateFirstOne.getDay();
        }
        // 周一开头且第一天为周日
        if (dateFirstOne.getDay() === 0) {
            return 6;
        }
        // 周一开头且第一天非周日
        return dateFirstOne.getDay() - 1;

        // return this.sundayStart ? dateFirstOne.getDay() === 0 ? 7 : dateFirstOne.getDay() : dateFirstOne.getDay() === 0 ? 6 : dateFirstOne.getDay() - 1;
    },
    /**
   * 获取当前日期上个月或者下个月该日期
  */
    getOtherMonth(date, str = 'nextMonth') {
        const timeArray = this.dateFormat(date).split('/');
        const year = timeArray[0];
        const month = timeArray[1];
        const day = timeArray[2];
        let year2 = year;
        let month2;
        if (str === 'nextMonth') {
            month2 = parseInt(month, 10) + 1;
            if (month2 === 13) {
                year2 = parseInt(year2, 10) + 1;
                month2 = 1;
            }
        } else {
            month2 = parseInt(month, 10) - 1;
            if (month2 === 0) {
                year2 = parseInt(year2, 10) - 1;
                month2 = 12;
            }
        }
        let day2 = day;
        // 上月或下月最后一天
        const days2 = new Date(year2, month2, 0).getDate();
        if (day2 > days2) {
            day2 = days2;
        }
        if (month2 < 10) {
            month2 = `0${month2}`;
        }
        if (day2 < 10) {
            day2 = `0${day2}`;
        }
        const t2 = `${year2}/${month2}/${day2}`;
        return new Date(t2);
    },
    // 上个月末尾的一些日期
    getLeftArr(date) {
        const arr = [];
        const leftNum = this.getMonthweek(date);
        const num = this.getDaysInOneMonth(this.getOtherMonth(date, 'preMonth')) - leftNum + 1;
        const preDate = this.getOtherMonth(date, 'preMonth');
        // 上个月多少开始
        for (let i = 0; i < leftNum; i += 1) {
            const nowTime = `${preDate.getFullYear()}/${preDate.getMonth() + 1}/${num + i}`;
            const nowTime2 = `${preDate.getFullYear()}-${preDate.getMonth() + 1 < 10 ? `0${preDate.getMonth() + 1}` : preDate.getMonth() + 1}-${num + i < 10 ? `0${num + i}` : num + i}`;
            arr.push({
                id: num + i,
                date: nowTime,
                date2: nowTime2,
                isToday: false,
                otherMonth: 'preMonth',
            });
        }
        return arr;
    },
    // 下个月末尾的一些日期
    getRightArr(date) {
        const arr = [];
        const nextDate = this.getOtherMonth(date, 'nextMonth');
        // 本月天数+向前空的格数
        const leftLength = this.getDaysInOneMonth(date) + this.getMonthweek(date);
        // 展示天数不固定
        // const lastLength = 7 - (leftLength % 7);
        // 展示天数固定 （42）
        const lastLength = 42 - leftLength;
        for (let i = 0; i < lastLength; i += 1) {
            const nowTime = `${nextDate.getFullYear()}/${nextDate.getMonth() + 1}/${i + 1}`;
            const nowTime2 = `${nextDate.getFullYear()}-${nextDate.getMonth() + 1 < 10 ? `0${nextDate.getMonth() + 1}` : nextDate.getMonth() + 1}-${i + 1 < 10 ? `0${i + 1}` : i + 1}`;
            arr.push({
                id: i + 1,
                date: nowTime,
                date2: nowTime2,
                isToday: false,
                otherMonth: 'nextMonth',
            });
        }
        return arr;
    },
    // format日期
    dateFormat(date) {
        date = typeof date === 'string' ? new Date(date.replace(/-/g, '/')) : date;
        return `${date.getFullYear()}/${date.getMonth() + 1}/${
            date.getDate()}`;
    },
    dateFormat2(date) {
        date = typeof date === 'string' ? new Date(date.replace(/-/g, '/')) : date;
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
    },
    // 获取某月的列表不包括上月和下月
    getMonthListNoOther(date) {
        const arr = [];
        const num = this.getDaysInOneMonth(date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const toDay = this.dateFormat(new Date());

        for (let i = 0; i < num; i += 1) {
            const nowTime = `${year}/${month}/${i + 1}`;
            const nowTime2 = `${year}-${month < 10 ? `0${month}` : month}-${i + 1 < 10 ? `0${i + 1}` : i + 1}`;
            arr.push({
                id: i + 1,
                date: nowTime,
                date2: nowTime2,
                isToday: toDay === nowTime,
                otherMonth: 'nowMonth',
            });
        }
        return arr;
    },
    // 获取某月的列表 用于渲染
    getMonthList(date) {
        return [...this.getLeftArr(date), ...this.getMonthListNoOther(date), ...this.getRightArr(date)];
    },
    // 默认是周一开始
    sundayStart: false,
};
