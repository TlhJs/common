((window) => { /* eslint-disable */
    window.timeFormat3DateObj = (c) => {
        let timeAll = '';
        let { time } = c;
        if (Array.isArray(time)) {
            // console.log('....array');
            if (time.length > 3) {
                // [2019,2,12,3,2]
                //  年月日 时分秒
                const a = time.slice(0, 3);
                const b = time.slice(3);
                // console.log(a,b);
                timeAll = new Date(time[0], time[1] - 1, time[2], time[3] === undefined ? null : time[3], time[4] === undefined ? null : time[4], time[5] === undefined ? null : time[5]);
            } else {
                // [2019,2,12]
                timeAll = new Date(time[0], time[1] - 1, time[2]);
            }
        } else if (typeof time === 'string') {
            // console.log('....string');
            //  2019-2-3 2:23
            const d = time.split(' ');
            const timeA = d[0];
            const timeB = d[1];
            if (timeB !== undefined) {
                //  2019-2-3 2:23
                const q = timeA.split(c.type);
                const q2 = timeB.split(':');
                timeAll = new Date(q[0], q[1] - 1, q[2], q2[0] === undefined ? null : q2[0], q2[1] === undefined ? null : q2[1], q2[2] === undefined ? null : q2[2]);
            } else {
                //  2019-3-10
                const q = timeA.split(c.type);
                timeAll = new Date(q[0], q[1] - 1, q[2]);
            }
        } else {
            // console.log('....other');
            if (typeof time === 'number') {
                time = new Date(time);
            }
            //
            if (c.date) {
                //
                timeAll = new Date(time.getFullYear(), time.getMonth(), time.getDate());
            } else {
                timeAll = time;
            }
        }
        //  天
        if (c.more) {
            timeAll = new Date(timeAll.getTime() + c.more * 24 * 3600000);
        }
        // 天
        if (c.less) {
            timeAll = new Date(timeAll.getTime() - c.less * 24 * 3600000);
        }
        return timeAll;
    };
    window.timeFormat3Date = (c) => {
        let timeAll = '';
        let { time } = c;
        if (Array.isArray(time)) {
            // console.log('....array');
            if (time.length > 3) {
                // [2019,2,12,3,2]
                //  年月日 时分秒
                const a = time.slice(0, 3);
                const b = time.slice(3);
                // console.log(a,b);
                timeAll = `${a.join(c.typeOut)} ${b.join(':')}`;
            } else {
                // [2019,2,12]
                timeAll = time.join(c.typeOut);
                // time = new Date( time[0], time[1]-1, time[2] );
            }
        } else if (typeof time === 'string') {
            // console.log('....string');
            //  2019-2-3 2:23
            const d = time.split(' ');
            const timeA = d[0];
            const timeB = d[1];

            if (timeB !== undefined) {
                //  2019-2-3 2:23
                const q = timeA.split(c.type);
                timeAll = `${q.join(c.typeOut)} ${timeB}`;
            } else {
                //  2019-3-10
                const q = timeA.split(c.type);
                timeAll = q.join(c.typeOut);
            }
        } else {
            // console.log('....other');
            if (typeof time === 'number') {
                time = new Date(time);
            }
            if (c.date) {
                timeAll = time.getFullYear() + c.typeOut + (time.getMonth() + 1) + c.typeOut + time.getDate();
            } else {
                timeAll = `${time.getFullYear() + c.typeOut + (time.getMonth() + 1) + c.typeOut + time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
            }
        }
        return timeAll;
    };
    window.timeFormat3DateFormat = (timeAll, c) => {
        //  时间格式化
        if (typeof timeAll !== 'object') {
            const w = timeAll.split(' ');
            if (w.length > 1) {
                //
                const w1 = w[0].split(c.typeOut);
                const t1 = w1.map((el) => {
                    if (el.length === 1) {
                        el = `0${el}`;
                    }
                    return el;
                });
                const w2 = w[1].split(':');
                const t2 = w2.map((el) => {
                    if (el.length === 1) {
                        el = `0${el}`;
                    }
                    return el;
                });
                timeAll = `${t1.join(c.typeOut)} ${t2.join(':')}`;
                // console.log(timeAll);
            } else {
                //
                const w1 = timeAll.split(c.typeOut);
                const t1 = w1.map((el) => {
                    if (el.length === 1) {
                        el = `0${el}`;
                    }
                    return el;
                });
                timeAll = t1.join(c.typeOut);
            }
        }
        return timeAll;
    };
    // 将时间 转换成规定格式
    /**
    * 使用
    * 默认 输出短横线 字符串 格式  YYYY-MM-DD 
    * 
    * timeFormat3({
    *   time: string  arr  new Date() number时间戳
    *   date:  是否转化成日期格式
    *   dateObj： 是否 转化成时间对象形式
    *   type:  传入时 链接符 (只针对 字符串时)
    *   typeout:  传出时 链接符 (只针对 字符串时)
    *   more: 比此时 后几天
    *   less： 比此时 前几天   
    * })
    * */
    window.timeFormat3 = (options = {}) => {
        const c = {
            time: new Date(),
            date: false,
            dateObj: false,
            type: '-',
            typeOut: '-',
            more: '',
            less: '',
        };
        Object.assign(c, options);
        if (c.time === undefined || c.time === null || c.time === '') {
            return new Date();
        }
        //  不穿 time 为 获取当前 时间
        let timeAll = '';
        // const { time } = c;
        // console.log(time,'....time...OK');
        if (c.dateObj) {
            // 转换至 dateObj 格式
            timeAll = window.timeFormat3DateObj(c);
        } else {
            if (c.more || c.less) {
                timeAll = window.timeFormat3DateObj(c);
                c.time = timeAll;
            }
            timeAll = window.timeFormat3Date(c);
        }
        // console.log(timeAll,'...timeAll  CCCC');
        return window.timeFormat3DateFormat(timeAll, c);
    }
    window.timeFormat = (time, obj) => {
        if (obj === undefined) {
            obj = { type: '-' };
        } else {
            obj = { type: obj };
        }

        if (time === undefined) {
            time = new Date();
        } else {
            //  [2019, 2, 3]
            if (Array.isArray(time)) {
                time = new Date(time[0], time[1] - 1, time[2]);
            } else {
                //  2019-2-3
                time = time.split('-');
                time = new Date(time[0], time[1] - 1, time[2]);
            }
        }
        return time.getFullYear() + obj.type + (time.getMonth() + 1) + obj.type + time.getDate();
    };
    
})(window);
