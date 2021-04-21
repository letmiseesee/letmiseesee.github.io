let checkTime = function(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};
userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
let showtime = function() {
    let nowdate = new Date(); //创建Date对象nowdate,以获取当前时间
    let year = nowdate.getFullYear(), //获取年份
        month = nowdate.getMonth() + 1, //获取月份，getMonth()得到的是0-11，需要加1
        date = nowdate.getDate(), //获取日份
        day = nowdate.getDay(), //获取一周中的某一天，getDay()得到的是0-6
        week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        h = nowdate.getHours(),
        m = nowdate.getMinutes(),
        s = nowdate.getSeconds();
    h = checkTime(h); //函数checkTime用于格式化时，分，秒
    m = checkTime(m);
    s = checkTime(s);
    return year + "年" + month + "月" + date + "日 " + week[day] + " " + h + ":" + m + ":" + s;
};
//显示首次  警告
function alertFirst() {
    if (!window.localStorage.getItem('sto')) {
        alert('你好,我是本地缓存。\n道理上，我只显示一次\n只是想说下，本站收藏页为方便个人使用\n并无任何商业用途\n若您依旧觉着有侵权行为\n还希望尽早告知，可通过反馈页反馈\n再次声明\n\n本站没有技术支持，仅是静态网页，搜索后页面内容不受本站控制');
        window.localStorage.setItem('sto', 'true');
    }
}


function delS(a) {
    let d = document.getElementById(a);
    d = d.value;
    // d = d.trim(); 去除 首尾的 空格，不需要
    if (a == 'fanyi') {
        d = d.replace(/\s{3,}/, '  ');
    } else {
        d = d.replace(/\s{2,}/, ' ')
    }
    if (/\。\。|\.\.|\.\。|\。\./.test(d)) {
        d = '';
    }
    return d;
}

// 添加 bo1a
function addAtoLIT(kk) {
    let lN = htmlWidth < 900 ? 4 : 6;
    let c = document.createDocumentFragment();
    lN = 2 * lN;
    kk.forEach(z => {
        let n = z.length;
        let d = document.createElement('div');
        let g = document.createElement('ul');
        d.id = z[0];
        d.className = z[1];
        for (let i = 3; i < n; i += 2) {
            let m = 1;
            while (m < n - i) {
                if (z[m + i] == '') break;
                m++
            }
            let q = i + m;
            let p = i;
            let l = document.createElement('li');
            l.textContent = z[i];
            g.appendChild(l);
            while (i < q - 2) {
                let j = document.createElement('li');
                let a = document.createElement('a');
                a.href = z[++i].replace(/(\s){0,}/g, '');
                a.textContent = z[++i];
                j.appendChild(a);
                g.appendChild(j);
                if (z[i + 1] == '') break;
                else if ((i - p) % lN == 0) g.appendChild(document.createElement('li'));
            }
            let o;
            if ((i - p) % lN > 1) { o = (lN - (i - p) % lN) / 2 } else if (i == p) o = lN / 2;
            else o = 0;
            while (o > 0) {
                g.appendChild(document.createElement('li'));
                o--
            }
        }
        d.appendChild(g);
        c.appendChild(d)
    });
    return c;
};

function searchAll(b, c) {
    let d = document.getElementById(b);
    let a = 'a';
    for (let i = 1; i < 16; i++)
        if (document.getElementById(b + i + a)) {} else {
            let g = document.createElement(c);
            g.id = b + i + a;
            d.appendChild(g);
        }
};

document.onkeydown = document.onkeyup = document.onkeypress = function(e) {
    let event = e || window.event || arguments.callee.caller.arguments[0];
    if (window.event && window.event.keyCode == 123) {
        event.keyCode = 0;
        event.returnValue = false;
        return false;
    }
    if (event.ctrlKey && window.event.keyCode != 86) {
        event.returnValue = false;
        return false;

    }
    if (event.shiftKey) {
        event.returnValue = false;
        return false;
    }
    if (event.altKey) {
        event.returnValue = false;
        return false;

    }
};

document.addEventListener('dblclick', reload);
document.oncontextmenu = () => {
    window.event.returnValue = false;
    document.styleSheets[3].disabled = document.styleSheets[3].disabled == true ? false : true;
    tr(14, "a");
    return false;
};
let titleL = document.title;
let htmlWidth = document.documentElement.clientWidth;
tooo();
searchAll('bo', 'div');
searchAll('bu', 'li');
// 列表页 
(() => {
    let b = document.getElementById('bo2a');
    for (let i = 1; i < 5; i++)
        if (document.getElementById("bo" + i + 'b')) {} else {
            let a = document.createElement('div');
            a.id = 'bo' + i + 'b';
            a.className = i == 1 ? 'bl' : 'none';
            b.appendChild(a);
        }
})();
document.getElementById('bo1b').appendChild(addAtoLI(look.con1b));
document.getElementById('bo2b').appendChild(addAtoLI(look.con2b));
let boc = document.getElementById('div_form');
let bocA = addAtoLIT(look.con1a);
boc.parentNode.appendChild(bocA);
(() => {
    function f(a) {
        for (let i = 1; i < 100; i++) {
            if (!document.querySelector('#bu' + i + a)) break;
            document.querySelector('#bu' + i + a).addEventListener('mouseover', function(e) {
                tr(i, a)
                stop_bubble(e);
            });
        }
    }
    f('a');
    f('b');
    f('c');
})();
document.querySelector('#bu12a').addEventListener('mouseout', () => { tr(2, 'a') });
document.querySelector('#bu13a').addEventListener('mouseout', () => { tr(2, 'a') });
let bo14 = document.querySelector('#bo14a');
bo14.addEventListener('click', () => { tr(2, 'a') });
bo14.addEventListener('dblclick', () => { tr(2, 'a') });
(() => {
    function f(a) {
        for (let i = 1; i < 100; i++) {
            if (!document.querySelector('#bo' + i + a)) break;
            document.querySelector('#bo' + i + a).className = i == 2 ? 'bl' : 'none';
        }
    }
    f('a');
    f('b');
})();
bo14.className = 'none';
if (htmlWidth < 900) {
    document.getElementById('bo1a').className = 'bl';
    document.getElementById('bo2a').className = 'none';
    document.getElementById('bu2a').className = 'nor';
    document.getElementById('bu1a').className = 'un';
    alertFirst()
}
(() => {
    // 搜索框 
    let ff = document.getElementById('search');
    ff.autocomplete = "off";
    ff.name = "q";
    ff.autofocus = "autofocus";
    ff.placeholder = "默认 Bing 搜索(注意：双句号将清空搜索框，注意别输错)";
    ff.addEventListener('focus', () => {
        ff.style.backgroundColor = '#660';
        ff.style.color = '#ff0';
        ff.style.borderRadius = '1rem';
        setInterval(function i() { ff.value = delS('search') }, 50);
        ff.onblur = clearInterval(i);
    });
    ff.addEventListener('blur', () => {
        ff.style.backgroundColor = '#060';
        ff.style.color = '#0ff';
    });
    ff.parentNode.addEventListener('submit', (e) => {
        if (ff.value == "" || ff.value == " ") {
            window.open("https://cn.bing.com/search?q=" + look.oneL, "");
            stop_bubble(e);
            return;
        }
    });
    let ff_a_n = look.search_url.length;
    for (let i = 0; i < ff_a_n; i++) {
        let ff_a_add = document.createElement("a");
        ff_a_add.innerHTML = look.search_url[i][0];
        ff.parentNode.appendChild(ff_a_add);
    };
    let ff_a = ff.parentNode.getElementsByTagName("a");
    for (let i = 0; i < ff_a_n; i++) {
        ff_a[i].title = look.search_url[i][1];
        ff_a[i].onmouseover = ff_a[i].onclick = function() {
            let a;
            if (ff.value == "" || ff.value == " ") { a = look.oneL } else { a = ff.value }
            return this.href = look.search_url[i][2] + a;
        }
    };
    let g = document.getElementById('fanyi');
    g.autocomplete = "off";
    g.addEventListener('focus', () => {
        g.style.backgroundColor = '#060';
        g.style.color = '#0f0';
        g.style.borderRadius = '1rem';
        setInterval(function i() { document.getElementById('fanyi').value = delS('fanyi') }, 50);
        g.onblur = clearInterval(i);
    });
    g.addEventListener('blur', () => {
        g.style.backgroundColor = '#660';
        g.style.color = '#00ffff';
    });
    let g_a_n = look.translation_url.length;
    for (let i = 0; i < g_a_n; i++) {
        let g_a_add = document.createElement("a");
        g_a_add.innerHTML = look.translation_url[i][0];
        g.parentNode.appendChild(g_a_add);
    };
    let g_a = document.querySelectorAll("#formFanyi>a");
    for (let i = 0; i < g_a_n; i++) {
        g_a[i].onmouseover = g_a[i].onclick = function() {
            if (g.value == " " || g.value == "") {
                return this.href = look.translation_url[i][1].slice();
            }
            let a;
            if (g.value.match(/[^\u0000-\u00ff]/)) {
                a = look.translation_url[i][2] + g.value.trim();
                if (this.dataset.i == 0) a += "&from=zh-Hans&to=en";
            } else if (g.value.match(/[\u0000-\u00ff]/)) {
                a = look.translation_url[i][1] + g.value.trim();
                if (i == 0) a += "&from=en&to=zh-Hans";
            };
            if (look.translation_url[i][3] != undefined) {
                a += look.translation_url[i][3]
            }
            return this.href = a;
        }
    }
})();
// 动态更改 title
(() => {
    let a = [];
    let b = look.title;
    for (let i = 0; i < 15; i++) {
        let c = i + 1;
        a[i] = document.querySelector('#bu' + c + 'a');
        a[i].addEventListener('mouseover', () => {
            document.title = "⊱⊱⊱⊱⊱" + b[i] + "⊰⊰⊰⊰⊰"
        });
    }
})();
// 向 #bo13a 添加 元素 
let bo13a = document.querySelector('#bo13a');
let bo13aa = addCon13a(look.con13a);
bo13a.appendChild(bo13aa);
// 首次显示
let bu1a = document.querySelector('#bu1a');
bu1a.addEventListener('mouseover', alertFirst);
let div = document.querySelector("#showtime");
div.innerHTML = showtime();
setInterval(function() {
    div.innerHTML = showtime();
}, 7890);

function toolOtO(a, fn) {
    let t = document.querySelector("#" + a);
    let tT = document.createElement("input");
    tT.id = a + "T";
    tT.className = "copy";
    tT.type = "text";
    tT.setAttribute("disabled", "disabled");
    t.parentNode.appendChild(tT);
    t.addEventListener("focus", function() {
        setInterval(() => {
            t.value = delS(a);
            tT.value = fn.call(null, t.value)
        }, 25);
    });
    let b = document.createElement("button");
    b.innerHTML = "剪切";
    t.parentNode.appendChild(b);
    b.onclick = b.onmouseover = function() {
        copy_text(tT.value)
    };
};

function toolOtT(a, fn1, b, fn2, c) {
    let t = document.querySelector("#" + a),
        tb = document.createElement("button"),
        tc = document.createElement("button");
    tb.innerHTML = b;
    tc.innerHTML = c;
    t.parentNode.appendChild(tb);
    t.parentNode.appendChild(tc);
    tb.onclick = tb.onmouseover = function() {
        copy_text(fn1.call(null, t.value));
    };
    tc.onclick = tc.onmouseover = function() {
        copy_text(fn2.call(null, t.value))
    };
    let r = document.createElement("input");
    r.type = "reset";
    r.value = "再回首";
    t.parentNode.appendChild(r);
};
toolOtO("tool1", function() {
    let _this = arguments[0] || this;
    if (/^&#/.test(_this)) {
        _this = _this.replace(/&#(\d*);/gmi, f2)
    } else {
        _this = _this.replace(/[^\u00-\uFF]|\w/gim, f1)
    }

    function f1() { return "&#" + arguments[0].charCodeAt(0) + ";" }

    function f2() { return String.fromCharCode(arguments[1]) }
    if (arguments[0] == "") {
        _this = ""
    }
    return _this
});
toolOtO("tool2", function() {
    let a = arguments[0];
    if (a == "") {
        a = "";
    } else
    if (a < 125) {
        a = "抱歉，你好小，别捣乱";
    } else if (a < 226) {
        a = Math.ceil(arguments[0] * 0.9 - 90) * 2;
        a = Math.floor(a * 0.95) + "~" + Math.ceil(a * 1.05) + " 斤"
    } else if (a < 228) {
        a = "是你么，姚同学"
    } else if (a < 312) {
        a = "我的天，你居然比姚同学还高"
    } else {
        a = "边去，别捣乱"
    }
    return a
});
toolOtT("tool3", function() { return escape(arguments[0]); }, "编码", function() { return unescape(arguments[0]) }, "解码");
toolOtT("tool4", function() { return encodeURI(arguments[0]); }, "编码", function() { return decodeURI(arguments[0]) }, "解码");
toolOtT("tool5", function() { return encodeURIComponent(arguments[0]); }, "编码", function() { return decodeURIComponent(arguments[0]) }, "解码");
toolOtO("tool6", function() {
    let a = arguments[0] || "";
    if (/^\d+[\.]?\d*$/.test(a)) {
        return a * Math.PI / 180;
    } else if (/^\d+[\.]?\d*[r]$/.test(a)) { return (parseFloat(a)) * 180 / Math.PI; } else {
        return 0;
    }
});
console.log('this');