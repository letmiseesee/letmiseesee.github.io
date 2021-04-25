let userAgent = window.navigator.userAgent;
let eLocation = "https://lmssee.cn/error.html";
// setInterval(() => {
//     if (window == top) {
//         noCopy();
//     };
//     if (top.location.hostname != "lmssee.cn") {
//         noCopy();
//     }

// }, 7);
// alert(top.location.hostname);
// alert(location.hostname);
(() => {
    let header = document.head;
    let ICON = document.createElement("link");
    ICON.rel = "icon";
    ICON.sizes = "any";
    ICON.href = "https://lmssee.cn/image/lmssee.ico";
    header.insertBefore(ICON, header.childNodes[2]);
})();

/*
let _hmt = _hmt || [];
(function() {
    let hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?1b6868a869ef32ae9d28f5d78e665cca";
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

window.onerror = function(message) {
    console.log("错误原因：" + arguments[0] + " 错误的URL：" + arguments[1] + " 错误的行号：" + arguments[2]);
    return true;
};*/
//正则表达式对象
Validator = {
    Email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, //Email
    Phone: /^(?:(\(?:\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6-7}(\-\d{1,4})?$/, //电话号码
    Mobile: /^(?:(?:\(\d{2,3}\))|(?:\d{3}\-))?1[3-9]\d{9}$/, //手机号码	Require : /.+/,//是否为空
    Url: /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/, //使用 HTTP 协议的网址
    Chinese: /^[\u0391-\uFFE5]+$/, //中文
};

//禁止冒泡
function stop_bubble(e) {
    if (typeof e.preventDefault === "function") {
        e.preventDefault();
        e.stopPropagation()
    } else {
        e.returnValue = false;
        e.cancelBubble = true
    }
    return false;
}
/*扩展原型Function.prototype.l_method = function(name, func) {    if (!this.prototype[name]) {        this.prototype[name] = func;        return this;    }}; //原型链添加 整数 类型 Number.l_method("l_integer", function() {     return Math[this < 0 ? 'ceil' : 'floor'](this); });小数保留指定位数*/
let l_floor = function(a, b) {
    let c = 1;
    for (let i = 0; i < b; i++) {
        c *= 10
    }
    return (Math.floor(a * c)) / c
};
// 原型 添加字符串倒序
String.prototype.l_backwards = function() {
    let out = '';
    for (let i = this.length - 1; i >= 0; i--) {
        out += this.substr(i, 1);
    }
    return out;
};
//动态改变每个值
Array.prototype.l_edit = Array.prototype.edit || (Array.prototype.edit = function() {
    let b = arguments,
        a = [];
    this.each(function() {
        a.push(b[0].call(b[1], this));
    });
    return a;
});
Object.prototype.edit = Array.prototype.l_edit;

// 复制对象
Function.prototype.extend = function(o) {
    for (let i in o) {
        this.constructor.prototype[i] = o[i];
    }
};

// 克隆对象
Function.prototype.clone = function(o) {
    function Temp() {};
    Temp.prototype = o;
    return new Temp();
};
/*/ // 检测页面在屏幕位置
// let leftPoss = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
// let topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
// //检索浏览器才能窗口大小
// let pageWidth = window.innerWidth;
// let pageHeight = window.innerHeight;
// if (typeof pageWidth != "number") {
//     if (document.compatMode == "number") {
//         pageWidth = document.documentElement.clientWidth;
//         pageHeight = document.documentElement.clientHeight;
//     } else {
//         pageWidth = document.body.clientWidth;
//         pageHeight = document.body.clientHeight;
//     }
// }
节点对象*/
let cursor = {};
cursor.w = function(event) {
    this.x = X = 0;
    this.y = Y = 0;
    let e = event || window.event;
    if (e.pageX || e.pageY) {
        X = e.pageX;
        Y = e.pageY
    } else if (e.clientX || e.clientY) {
        X = e.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
        Y = e.clientY + document.documentElement.scrollTop + document.body.scrollTop;
    }
    return { x: X, y: Y };
};
cursor.f = function(n, a, b, e) {
    n.style.position = "absolute";
    n.style.top = (cursor.w(e).y + b) + "px";
    n.style.left = (cursor.w(e).x + a) + "px"
}
let node = {};
node.i = function(n, a = 0) {
    if (document.querySelector(n) != null) {
        if (a > 0) { return document.querySelectorAll(n); };
        return document.querySelector(n);
    } else {
        try {
            throw new error('there some error');
        } catch (e) {
            return console.log(e.message)
        }
    }
}
let mi = node.i;
node.add = {
    "li": function(id) {
        let a = document.createDocumentFragment();
        eval(id).forEach(c => {
            let d = document.createElement("li");
            d.innerHTML = c.trim();
            a.appendChild(d)
        });
        let g = document.getElementById(id);
        g.appendChild(a);
        return g;
    },
    "td": function(id) {
        let a = document.createDocumentFragment();
        eval(id).forEach(c => {
            let b = document.createElement("tr");
            c.forEach(o => {
                let d = document.createElement("td");
                d.innerHTML = o;
                b.appendChild(d);
            })
            a.appendChild(b);
        })
        let g = document.getElementById(id);
        g.appendChild(a);
        return g;
    },
    "data-": function(o, n, v) {
        let a = document.createAttribute("data-" + n);
        a.value = v;
        o.setAttributeNode(a);
        return o;
    },
    "e": function(n, event, fn) {
        if (n.nodeType != 1 && mi(n) != null) {
            n = mi(n)
        } else if (n.nodeType == 1) {
            n = n;
        } else if (n.nodeType != 1 && mi(n) == null) {
            throw new error('为捕获元素');
        }
        if (n.addEventListener) {
            n.addEventListener(event, fn, false)
        } else if (n.attachEvent) {
            n.attachEvent("on" + event, fn);
        } else {
            n["on" + event] = fn;
        }
    }
};
node.del = {
    "e": function(n, e, fn) {
        if (n.removeEventListener) {
            n.removeEventListener(e, fn, false)
        } else if (n.detachEvent) {
            n.detachEvent('on' + e, fn)
        }
    }
}


// 捕错
function log(message) {
    if (typeof console == 'Object') {
        console.log(message);
    } else if (typeof opera == 'Object') {
        opera.postError(message);
    } else if (typeof java == 'object' && typeof java.lang == "object") {
        java.lang.System.out.println(message);
    }
}
try {
    //可能的错误
} catch (error) {
    //错误处理机制
    if (error instanceof TypeError) {
        //处理类型错误
    } else if (error instanceof ReferenceError) {
        //处理引用机制
    } else {
        //处理其他错误类型
    }
}

// 数值检测
let isNumber = function isvNumber(value) {
    return typeof value === 'number' && isFinite(value);
}


//生成随机数
function l_random(a, b = 1) {
    return (Math.round(Math.random() * a)) * b;
}


//检测数据类型
function type(o) {
    return (o === null) ? "null" : (typeof o);
}
//安全检测 Javascript 基本数据类型 和 内置对象
// 参数： o 表示检查值
//返回的值：返回字符串 "undefined"、"number"、"boolean"、"string"、"function"、"regexp"、"array"、"date"、"error"、"object"、"null"
function typeOf(o) {
    let l_toString = Object.prototype.toString;
    //获取对象的 toString() 方法的调用
    //列举基本数据类型 和 内置对象类型
    let l_type = {

        "undefined": "undefined",
        "number": "number",
        "boolean": "boolean",
        "string": "string",
        "[object Function]": "function",
        "[object RegExp]": "regexp",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object Error]": "error"
    }
    return l_type[typeof o] || l_type[l_toString.call(o)] || (o ? "object" : "null");
    //通过把值转换成字符串，然后匹配返回字符串中是否含有特定的字符进行检测
}

//定义 数组 say hello
Array.prototype.hello = function() {
    alert("hello ,dog")
}


// 数组 的值 和
Array.prototype.l_sum = Array.prototype.sum || (Array.prototype.sum = function() {
    let _n = 0;
    for (let i in this) { if (this[i] = parseFloat(this[i])) _n += this[i]; };
    return_n;
})
Object.prototype.sum = Array.prototype.l_sum;


//设计迭代器
Array.prototype.l_each = function(f) {
    try {
        this.i || (this.i = 0);
        if (this.length > 0 && f.constructor == Function) {
            while (this.i < this.length) {
                let e = this[this.i];
                if (e && e.constructor == Array) {
                    e.each(f);
                } else {
                    f.apply(e, [e]);
                }
                this.i++;
            }
            this.i = null;
        }
    } catch (w) {}
    return this
};
//对象注册函数

let t1, t2 = new Date();

function tR(event) {
    let e = event || window.event;
    let tar = e.target || e.srcElement;
    // let v = tar.innerText;
    if (tar.nodeName.toUpperCase() == "LI") {
        let n = tar.id;
        let z = n.replace(/.*?\d+(\w)/, '$1');
        n = Number.parseInt(n.substring(2));
        tr(n, z);
    }
}
let trTime1, trTime2 = new Date();

function tr(n, z) {
    let a = document.querySelector('#bo' + n + z);
    let b = document.querySelector('#bu' + n + z);
    trTime1 = new Date();
    if (b.className != 'un' && (trTime1 - trTime2) > 600) {
        trTime2 = trTime1;
        document.querySelector(`[id$=${z}].bl`).className = 'mi';
        document.querySelector(`[id$=${z}].un`).className = 'nor';
        b.className = 'un';
        setTimeout(() => {
            document.querySelector(`[id$=${z}].mi`).className = 'none';
            a.className = 'bl';
        }, 300);
    }
}

// 颜色 转化
function l_rth(m, o = '', p = '', q = 1) {
    if (o == '' && p == '') {
        m = m;
    } else {
        m = 'rgba(' + m + ',' + o + ',' + p + ',' + q + ')';
    }
    let k = '#';
    let a;
    let n = m.length - 1;
    if (m.slice(3, 4) == 'a') {
        m = m.slice(5, n);
        m = m.split(',');
        a = parseFloat(m.pop());
        a = a > 1 ? parseFloat("." + a) : a;
        a = parseInt(255 * a).toString(16);

    } else {
        m = m.slice(4, n);
        m = m.split(',');
        a = 'ff';
    }
    for (let i = 0; i < m.length; i++) {
        let w = parseInt(m[i]);
        k += w > 255 && 'ff' || w > 15 && w.toString(16) || w > 0 && '0' + w.toString(16) || w <= 0 && '00';
    }
    return k + a;
}

// 16进制 -> rgba
function l_htr(a, b = 1) {

    let n = arguments.length - 1;
    let m, p, q;
    if (n > 1) {
        q = 'rgba(127,0,127,0.4)';
    } else {
        if (a.slice(0, 1) == '#') {
            a = a.slice(1, a.length)
        } else {}
        p = a.length;
        m = (p == 1) && (a + a + a + a + a + a) || (p == 2) && (a + a + a) || (p == 3) && (a + a) || (p == 4 || p == 5) && (a.slice(0, 3) + a.slice(0, 3)) || (p == 6) && a || (p > 6) && a.slice(0, 6);
        if (b < 1) {
            o = b;
            // parseInt(100 * parseInt('0x' + m.slice(7, 9)) / 255) / 100;
        } else if (n == 1 && b > 1) {
            o = parseFloat('.' + b);
        } else if (n == 0) {
            o = (p == 4) && parseInt('0x' + a.slice(3, 4) + a.slice(3, 4)) / 255 || p == 5 && (parseInt('0x' + a.slice(3, 5)) / 255) || p > 6 && (parseInt('0x' + a.slice(6, 8)) / (255)) || 1;
        }
        o = (parseInt(o * 100)) / 100;
        q = 'rgba(' + parseInt('0x' + m.slice(0, 2)) + ',' + parseInt('0x' + m.slice(2, 4)) + ',' + parseInt('0x' + m.slice(4, 6)) + ',' + o + ')';
    }
    q = q.replace(/nan/ig, 255);
    return q;
}
//  重新加载
function reload() {
    location.reload('true')
}
//粘贴函数
function copy_node_event(n, evenT) {
    let className = document.querySelectorAll(n);
    let nodeLength = className.length;
    for (let i = 0; i < nodeLength; i++) {
        node.add.e(className[i], evenT, function(e) {
            stop_bubble(e);
            // let e = e || window.event;
            // let t = e.target || e.srcElement;
            // let v = t.innerHTML;
            let v = this.innerHTML;
            v = v.toString();
            v += "本站资源归个人所有。源码地址" + window.location.href.slice(0, window.location.href.lastIndexOf("\/") + 1) + " ©甘酒肆余生 ";
            v = v.replace(/\/\/.*?>/igm, "");
            v = v.replace(/(?:\<span class=\"r\"\>)|(?:<span class="p\d{0,2}">)/gim, "");
            v = v.replace(/\<\/span\>/igm, "\n");
            v = v.replace(/\&lt;/gim, "<");
            v = v.replace(/\&gt;/gim, ">");
            v = v.replace(/“|”|＂|″/gim, "\"");
            v = v.replace(/，|，|，/gim, ",");
            v = v.replace(/。|。|．/gim, ".");
            v = v.replace(/‘|’|＇｜＇|‘|’|＇|＇/igm, "\'");
            v = v.replace(/；/gim, ";");
            v = v.replace(/：/gim, ":");
            v = v.replace(/&amp;/gim, "&");
            v = v.replace(/\&\#8216\;|\&\#8217\;|\&([\s]*)\#8216\;|\&([\s]*)\#8217\;|\&\#([\s]*)8216\;|\&\#([\s]*)8217\;/igm, "'");
            // v = v.substr(0, 100);
            copy_text(v);
        }, true);
    }
};
//复制函数
function copy_text(text) {
    if (window.clipboardData) { //IE 大哥
        window.clipboardData.clearData();
        window.clipboardData.setData("Text", text);
    } else { //其他小弟
        let hover = document.createElement('input');
        hover.value = text;
        document.body.appendChild(hover);
        hover.select();
        document.execCommand("Copy");
        hover.className = 'hover';
        hover.style.display = 'none';
    }
    console.log("已成功偷取该片区域码！\n\n并放置于剪切板");
};
//获取元素属性
function getStyle(e, n) {
    if (e.style[n]) { //如果存在，则直接返回
        return e.style[n];
    } else if (e.currentStyle) { //如果是 IE
        return e.currentStyle[n];
    } else if (document.defaultView && document.defaultView.getComputedStyle) {
        n = n.replace(/([A-Z])/g, "-$1"); //转换参数名称
        n = n.toLowerCase();
        let s = document.defaultView.getComputedStyle(e, null); //获取元素属性对象
        if (s) return s.getPropertyValue(n);
    } else return null; //如果都不支持，则返回 null
};
//元素宽高变整数
function formStyle(e, w, p) {
    let a = getStyle(e, w);
    var p = arguments[2];
    if (!p) p = 1;
    if (/px/.test(a) && parseInt(a)) return parseInt(parseInt(a) * p);
    else if (/\%/.test(a) && parseInt(a)) {
        let b = parseInt(a) / 100;
        if ((p != 1) && p) b *= p;
        e = e.parentNode;
        if (e.tagName == "BODY") throw new Error("整个文档结构没有都没有定义固定尺寸，没法计算，请用其他方式获得元素尺寸");
        // a = getStyle(e, w);
        return arguments.callee(e, w, b); //回调计算
    } else if (/auto/.test(a)) {
        let b = 1;
        if ((p != 1) && p) b *= p;
        e = e.parentNode;
        if (e.tagName == "BODY") throw new Error("整个文档结构没有都没有定义固定尺寸，没法计算，请用其他方式获得元素尺寸");
        // a = getStyle(e, w);
        return arguments.callee(e, w, b); //回调计算
    } else //
        throw new Error("元素或其父元素定义了其他特殊尺寸的单位");
};

function noCopy() {
    let a = document.documentElement.clientHeight;
    let b = document.documentElement.clientWidth;
    let c = window.screen.availHeight;
    let d = window.screen.availWidth;
    let e = c - a;
    let f = d - b;
    let h = window.navigator.userAgent;
    if (d > 1250) {
        if (e < 114) {
            if (!/OPR/igm.test(h) && f > 17.5) {
                window.location = eLocation;
            } else if (/OPR/igm.test(h) && f > 54.5) {
                window.location = eLocation;
            }
        } else {
            window.location = eLocation;
        }
    } else if (d > 950) {
        if (f > 12) {
            window.location = eLocation;
        }
    } else if (d < 950 && c < 950) {
        if (d > c) {
            window.location = eLocation
        } else if (e > 182 || f > 1) {
            window.location = eLocation
        }
    } else {
        window.location = eLocation
    }
};
/* ajax */
function addAjax() {
    let XMLHttpFactories = [function() {
        return new XMLHttpRequest()
    }, function() {
        return new ActiveXObject("Msxml2.XMLHTTP")
    }, function() {
        return new ActiveXObject("Msxml3.XMLHTTP")
    }, function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    }, ];
    let xmlhttp = false;
    for (let i = 0; i < XMLHttpFactories.length; i++) {
        try {
            xmlhttp = XMLHttpFactories[i]();
        } catch (e) {
            continue;
        }
        break;
    }
    return xmlhttp;
}
/* cookie */
function setCookie(name, value, expires, path, domain, secure) {
    let today = new Date();
    today.setTime(today.getTime());
    if (expires) {
        expires = expires * 1000 * 60 * 60 * 24;
    }
    let expires_date = new Date(today.getTime() + (expires));
    document.cookie = name + "=" + escape(value) +
        ((expires) ? ";expires=" + expires_date.toGMTString() : "") +
        ((path) ? ";path=" + path : "") +
        ((domain) ? ";domain=" + domain : "") +
        ((secure) ? ";secure" : "");
}

function getCookie(name) {
    let start = document.cookie.indexOf(name + "=");
    let len = start + name.length + 1;
    if ((!start) && (name != document.cookie.substring(0, name.length))) {
        return null;
    }
    if (start == -1) return null;
    let end = document.cookie.indexOf(";", len);
    if (end == -1) end = document.cookie.length;
    return unescape(document.cookie.substring(len, end));
}

function deleteCookie(name, path, domain) {
    if (getCookie(name)) document.cookie = name + "=" + ((path) ? "?path=" + path : "") + ((domain) ? ";domain=" + domain : "") + ";expires=Thu,01-Jan-1970 00: 00:01 GMT";
};

function getSubCookie() {
    let a = document.cookie.split(";");
    let o = {};
    for (let i = 0; i < a.length; i++) {
        a[i] && (a[i] = a[i].replace(/^\s+|\s+$/, ""));
        let b = a[i].split("=");
        let c = b[1];
        c && (c = c.replace(/^\s+|\s+$/), "");
        c = unescape(c);
        if (!/\,/gi.test(c)) { o[b[0]] = b[1] } else {
            let d = c.split(",");
            for (let j = 0; j < d.length; j++) {
                let e = d[j].split(":");
                o[e[0]] = e[1];
            }
        }
    }
    return o;
};
(function() {
    // 禁止双指缩放
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault()
        }
    });
    // 禁止ios 双击缩放
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        let now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    document.addEventListener('gesturestart', function(event) {
        event.preventDefault()
    });
})();