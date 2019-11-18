((window) => { /* eslint-disable */
    // 设置标题
    window.addBackButtonAction = (addBackFunc) => {
        // 返回 按钮
        cordova.exec((data) => {
            addBackFunc(data);
        }, (err) => {
            console.log(err)
        }, 'NavBarPlugin', 'addBackButtonAction', []);
    };
    // 添加右键
    window.addRightButton = (title, callback) => {
        // 申请 按钮
        cordova.exec((data) => {
            callback(data);
        }, (err) => {
            console.log(err);
        }, 'NavBarPlugin', 'addRightButton', title);
    };
    // 设置标题
    window.setTitle = (title) => cordova.exec(null, null, 'NavBarPlugin', 'setTitleText', [title]);
    //  编辑右键状态
    window.editRightButtonStatus = (d) => cordova.exec(null, null, 'NavBarPlugin', 'editRightButtonStatus', d);
    // 退出
    window.exit = () => cordova.exec(null, null, 'NavBarPlugin', 'exitApp', []);
    // 获取验证参数
    window.getParamsFunc = (callback, errorCallback) => {
        cordova.exec((data) => {
            callback && callback(data);
        }, () => {
            errorCallback && errorCallback();
        }, 'GetUrlParamsPlugin', 'getAllParams', []);
    };
    // 获取 两日期之间天数
    window.GetDateNum = function (strDateStart, strDateEnd) {
        let strSeparator;
        if (/\//.test(strDateStart)) {
            strSeparator = '/'; // 日期分隔符
        } else if (/-/.test(strDateStart)) {
            strSeparator = '-'; // 日期分隔符
        } else {
            strSeparator = ' '; // 日期分隔符
        }
        let oDate1;
        let oDate2;
        let iDays;
        oDate1 = strDateStart.split(strSeparator);
        oDate2 = strDateEnd.split(strSeparator);
        // var strDateS = new Date(oDate1[0] + "-" + oDate1[1] + "-" + oDate1[2]);
        // var strDateE = new Date(oDate2[0] + "-" + oDate2[1] + "-" + oDate2[2]);
        let strDateS = new Date(oDate1[0], oDate1[1] - 1, oDate1[2]);
        let strDateE = new Date(oDate2[0], oDate2[1] - 1, oDate2[2]);
        // console.log(strDateS-strDateE);
        // console.log(strDateS.getTime() - strDateE.getTime());
        // iDays = parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 /24)//把相差的毫秒数转换为天数
        iDays = parseInt((strDateE - strDateS) / 1000 / 60 / 60 / 24);// 把相差的毫秒数转换为天数
        return iDays;
    };
    // 转 时间对象
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
    // 转 字符串
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
                if (c.date) {
                    timeAll = q.join(c.typeOut);
                }else {
                    timeAll = `${q.join(c.typeOut)} ${timeB}`;
                }
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
    // 时间格式化
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
    // 
    /**
     * 功能
     * 将时间 转换诚规定格式
     * 1、获取当前时间 
     * 2、时间格式化 
     * 3、时间格式转换
     * 使用
     * 默认 输出短横线 字符串 格式  YYYY-MM-DD 
     * timeFormat3({
     *   time: string  arr  new Date() number时间戳 ms
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
    };
    window.removeArrUnit = (data) => {
        const b = data.map(el => el = {
            [Object.keys(el)[0]]: el[Object.keys(el)[0]],
            [Object.keys(el)[1]]: el[Object.keys(el)[1]],
        });
        return b;
    };
    // base64图片 中 特殊转换
    window.base64ImgEncode = (val) => {
        let [a, b] = ['', ''];
        const c = JSON.parse(val);
        if (c.length > 0) {
            return c.map((el) => {
                a = el.ImgData.replace(/\+/g, '-');
                b = a.replace(/\=/g, '%3d');
                el.ImgData = b.replace(/\//g, '*');
                return el = {
                    [Object.keys(el)[0]]: el[Object.keys(el)[0]],
                    [Object.keys(el)[1]]: el[Object.keys(el)[1]]
                };
            });
        }
    };
    // 图片加载 
    window.loadImg = url => new Promise(((resolve, reject) => {
        const image = new Image();
        image.onload = function () {
            resolve(image);
        };
        image.onerror = function () {
            reject(new Error(`Could not load image at ${url}`));
        };
        image.src = url;
    }));
    // 定时器
    window.timeout = (ms, done) => new Promise((resolve, reject) => setTimeout(resolve, ms, done = 'done'));
    // cordova插件 错误提示信息 txt
    window.ErrorNotice = (error, msg) => {
        if (error.request) {
            if (error.request.status === 0) {
                msg === undefined ? msg = '请检查网络状态' : msg;
                return `${error.message} ${msg}`;
            } if (error.request.status === 404) {
                msg === undefined ? msg = '地址错误' : msg;
                return `${error.message} ${msg}`;
            }
            msg === undefined ? msg = '服务器异常，请联系管理员' : msg;
            return `${error.message} ${msg}`;
        }
        msg === undefined ? msg = '其他错误' : msg;
        return `${error.message} ${msg}`;
    };
    // cordova插件 弹出错误提示
    window.reportError = (msg, vm, title) => {
        if (title === undefined) {
            title = '';
        }
        if (typeof cordova !== 'undefined') {
            navigator.notification.alert(
                msg, // message
                () => {
                    if (vm != null) {
                        vm.$loading.hide();
                        window.history.back();
                    }
                }, // callback
                title, // title
                '确定' // buttonName
            );
        } else {
            alert(`${msg} ${title}`);
            if (vm != null) {
                vm.$loading.hide();
            }
        }
    };
    // base64方法
    window.Base64 = function () {
        // private property
        let _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        // public method for encoding
        this.encode = function (input) {
            let output = '';
            let chr1;
            let chr2;
            let chr3;
            let enc1;
            let enc2;
            let enc3;
            let enc4;
            let i = 0;
            input = _utf8_encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output
                    + _keyStr.charAt(enc1) + _keyStr.charAt(enc2)
                    + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
            }
            return output;
        };

        // public method for decoding
        this.decode = function (input) {
            let output = '';
            let chr1;
            let chr2;
            let chr3;
            let enc1;
            let enc2;
            let enc3;
            let enc4;
            let i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
            while (i < input.length) {
                enc1 = _keyStr.indexOf(input.charAt(i++));
                enc2 = _keyStr.indexOf(input.charAt(i++));
                enc3 = _keyStr.indexOf(input.charAt(i++));
                enc4 = _keyStr.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output += String.fromCharCode(chr1);
                if (enc3 !== 64) {
                    output += String.fromCharCode(chr2);
                }
                if (enc4 !== 64) {
                    output += String.fromCharCode(chr3);
                }
            }
            output = _utf8_decode(output);
            return output;
        };

        // private method for UTF-8 encoding
        const _utf8_encode = function (string) {
            string = string.replace(/\r\n/g, '\n');
            let utftext = '';
            for (let n = 0; n < string.length; n++) {
                const c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        };

        // private method for UTF-8 decoding
        const _utf8_decode = function (utftext) {
            let string = '';
            let i = 0;
            let c = 0;
            const c1 = 0;
            let c2 = 0;
            let c3;
            while (i < utftext.length) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                } else if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }
            return string;
        };
    };
    //  base64 编码
    window.enBase64 = (params) => {
        if (typeof params === 'object') {
            params = JSON.stringify(params);
        }
        return new Base64().encode(params);
    };
    //  base64 解码
    window.deBase64 = (params) => {
        if (typeof params === 'object') {
            params = JSON.stringify(params);
        }
        return new Base64().decode(params);
    };
    // 将 base64 转换为 blob  ****  不常用  ****
    window.dataURLtoBlob = (dataurl, fileName) => {
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        const blobs = new Blob([u8arr], { type: mime });
        blobs.lastModifiedDate = new Date();
        blobs.name = fileName;
        return blobs;
    },
    // 调用  /////////////////
    // var blob = dataURLtoBlob(base64Data);
    // var file = blobToFile(blob, imgName);
    // 将blob转换为file
    // let c = new File([ccccc], '123.png', {type:'image/png'} )
    window.blobToFile = (theBlob, fileName, type = { type: 'image/png' }) => new File([theBlob], fileName, type);
    //  canvas base64图片 转 bolb
    window.CanvasB64ToBolb = (url, fileName, type = { type: 'image/png' }) => new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;
        image.onload = function () {
            const w = image.width; const
                h = image.height;
            let width = w; let
                height = h;
            const size = 400;
            if (w >= h && w > size) { // 宽 > 高
                width = size;
                height = size / w * h;
            } else if (w < h && h > size) {
                height = size;
                width = size / h * w;
            }

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            ctx.save();
            canvas.toBlob((blob) => {
                // let name = fileName || "systermAndroid" + Math.round(Math.random()*1000000000)+".png";
                // let file = new File([blob], name, type);
                // resolve(file);
                resolve(blob);
            });
        };
    });
    //  token  生成/编码
    window.enCodeToken = (params) => {
        // var o = {"Account":"","DeviceSN":"4564C95D-4C24-4FD0-B2F8-4F74ADC8C9DB",HasKey:0};
        // var o = {"Account":"PTR/guoxd05","DeviceSN":"FK2PNAR7G5QT","HasKey":0};
        const o = { Account: '', DeviceSN: '', HasKey: 0 };
        o.Account = params;
        return new Base64().encode(JSON.stringify(o)).split('').reverse().join('');
    };
    //  token  解码
    window.deCodeToken = (str) => new Base64().decode(str.split('').reverse().join(''));
    //  字符串/token  url 加密
    window.enCodeTokenUrl = params => encodeURIComponent(params);
    //  字符串/token  url 解密
    window.deCodeTokenUrl = params => decodeURIComponent(params);
    //  反转字符串
    window.reversal = str => str.split('').reverse().join('');
    // json to formData string
    window.qsPerson = (obj) => {
        const arr = [];
        for (const i in obj) {
            arr.push(`${i}=${obj[i]}&`);
        }
        return arr.join('').slice(0, -1);
        // "LoginId=" + localStorage.getItem("loginId") +
        // "&Begin=" + begin +
        // "&Length=" + 1000 +
        // "&Resource=" + 'OA'
    };
    // 付款指纹验证
    window.authentication = (callback) => {
        cordova.exec((data) => {
            callback(data);
        }, (err) => {
            console.log(err);
        }, 'BiometricAuthentication', 'authentication', []);
    };
    // 获取 url中参数对象
    window.GetUrlParamsObj = (url) => {
        if (!url) {
            url = window.location.href.split('#')[0];
        }
        if (!url) {
            return null;
        }
        const params = {};
        const tempArray = url.split('?');
        if (tempArray.length > 1) {
            url = tempArray[1];
            url.split('&').forEach((item) => {
                const temp = item.split('=');
                params[temp[0]] = temp[1];
            });
            return params;
        }
        return params;
    };
    // 用法 autoTextareaHeight(this.$refs.text);
    // textarea 文本框自动升高
    window.autoTextareaHeight = (el) => {
        const setStyle = (els) => {
            els.style.height = 'auto';
            els.style.height = `${els.scrollHeight}px`;
        };
        const delayedResize = (els) => {
            window.setTimeout(() => {
                setStyle(els);
            }, 0);
        };
        if (el.addEventListener) {
            el.addEventListener('input', () => {
                setStyle(el);
            }, false);
            setStyle(el);
        } else if (el.attachEvent) {
            el.attachEvent('onpropertychange', () => {
                setStyle(el);
            });
            setStyle(el);
        }
        if (window.VBArray && window.addEventListener) { // IE9
            el.attachEvent('onkeydown', () => {
                const key = window.event.keyCode;
                if (key == 8 || key == 46) delayedResize(el);
            });
            el.attachEvent('oncut', () => {
                delayedResize(el);
            }); // 处理粘贴
        }
    };
})(window);
