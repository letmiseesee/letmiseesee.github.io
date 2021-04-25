let checkTime = function(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};
// userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
let showtime = function() {
    let nowdate = new Date(); //创建Date对象nowdate,以获取当前时间
    let year = nowdate.getFullYear(), //获取年份
        month = nowdate.getMonth() + 1, //获取月份，getMonth()得到的是0-11，需要加1
        date = nowdate.getDate(), //获取日份
        day = nowdate.getDay(), //获取一周中的某一天，getDay()得到的是0-6
        week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        h = nowdate.getHours(),
        m = nowdate.getMinutes(),
        s = nowdate.getSeconds();
    h = checkTime(h); //函数checkTime用于格式化时，分，秒
    m = checkTime(m);
    s = checkTime(s);
    return year + "." + month + "." + date + "." + week[day] + " " + h + ":" + m + ":" + s;
};

function topRemoveThis() {
    let a = mi('#iframeUn');
    a.src = '';
    a.style.display = 'none';
    a.className = 'none';
}

function delS(a) {
    let d = mi('#' + a);
    d = d.value;
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
//  脚步替换
function tooo() {
    setInterval(() => {
        if (mi('#bo14a').className == "bl" || mi('#bo12a').className == 'bl') {
            tr(3, 'a');
        }
    }, 6000);
}
// 添加 bo2b
function addAtoLI(kk) {
    let c = document.createDocumentFragment();
    kk.forEach(z => {
        let n = z.length;
        if (n == 0 || z[0] == "") return;
        let d = document.createElement('div');
        let e = document.createElement('h2');
        e.innerHTML = z[0];
        d.appendChild(e);
        let f = document.createElement('nav');
        let g = document.createElement('ul');
        f.appendChild(g);
        d.appendChild(f);
        for (let i = 2; i < n; i += 2) {
            let l = document.createElement('li');
            let a = document.createElement('span');
            let href = "l/" + z[1] + '/' + z[i] + '/index.html';
            node.add['data-'](l, 'target', href.replace(/\s*/g, ''));
            node.add['data-'](a, 'target', href.replace(/\s*/g, ''));
            a.textContent = z[i + 1];
            l.appendChild(a);
            g.appendChild(l);
        }
        c.appendChild(d);
    });
    return c;
}
// 添加 bo14a
function addCon13a(a) {
    let c = document.createDocumentFragment();
    a.forEach(z => {
        let b = document.createElement('p');
        b.innerText = z;
        c.appendChild(b);
    });
    return c;
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
    let d = mi('#' + b);
    let a = 'a';
    for (let i = 1; i < 16; i++)
        if (mi('#' + b + i + a)) {} else {
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
// alert(getCookie("hi"));
// if (getCookie("hi") == null) {
//     setCookie("hi", "now", 12);
// } else {
//     alert(getCookie("hi"));
//     alert(getCookie("hi"));
// }
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
    let b = mi('#bo2a');
    for (let i = 1; i < 7; i++)
        if (mi("#bo" + i + 'b')) {} else {
            let a = document.createElement('div');
            a.id = 'bo' + i + 'b';
            a.className = i == 2 ? 'bl' : 'none';
            b.appendChild(a);
        }
})();
mi('#bo3b').appendChild(addAtoLI(look.con1b));
mi('#bo2b').appendChild(addAtoLI(look.con2b));
let boc = mi('#div_form');
let bocA = addAtoLIT(look.con1a);
boc.parentNode.appendChild(bocA);

let bAn_o = mi('#beiAn_o'),
    bAn_t = mi('#beiAn_t');
setInterval(() => {
    if (bAn_o.style.display === "none") {
        bAn_t.style.display = "none";
        bAn_o.style.display = "block";
    } else {
        bAn_o.style.display = "none";
        bAn_t.style.display = "block";
    }
}, 2000);
node.add.e(mi('#bu'), 'mouseover', (e) => { tR(e) });
node.add.e(mi('#header'), 'mouseleave', (e) => {
    setTimeout(() => {
        let a = mi('[id$=a].un');
        a.parentNode.appendChild(a.parentNode.removeChild(a));
    }, 600);
});
node.add.e(mi('#bu1c').parentNode, 'mouseover', (e) => { tR(e) });
node.add.e(mi('#bu1b').parentNode, 'mouseover', (e) => { tR(e) });
let bo14 = mi('#bo14a');
bo14.addEventListener('click', () => { tr(2, 'a') });
bo14.addEventListener('dblclick', () => { tr(2, 'a') });
(() => {
    function f(a) {
        for (let i = 1; i < 100; i++) {
            if (!mi('#bo' + i + a)) break;
            mi('#bo' + i + a).className = i == look.firstShow ? 'bl' : 'none';
            mi('#bu' + i + a).className = i == look.firstShow ? 'un' : 'nor';
        }
    }
    f('a');
})();
// if (htmlWidth < 900) {
//     mi('#bo1a').className = 'bl';
//     mi('#bo2a').className = 'none';
//     mi('#bu2a').className = 'nor';
//     mi('#bu1a').className = 'un';
//     alertFirst()
// }

node.add.e(mi('#bo2a'), 'click', function(event) {
    let e = event || window.event;
    let t = e.target || e.srcElement;
    let a = t.dataset["target"];
    if (a) {
        // alert(a);
        let f = mi('#iframeUn');
        f.src = a;
        f.className = 'flow';
        f.style.display = 'block';
    }
});
(() => {
    // 搜索框 
    let ff = mi('#search');
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
    let g = mi('#fanyi');
    g.autocomplete = "off";
    g.addEventListener('focus', () => {
        g.style.backgroundColor = '#060';
        g.style.color = '#0f0';
        g.style.borderRadius = '1rem';
        setInterval(function i() { mi('#fanyi').value = delS('fanyi') }, 50);
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
    let g_a = mi("#formFanyi>a", 1);
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
        a[i] = mi('#bu' + c + 'a');
        a[i].addEventListener('mouseover', () => {
            document.title = "⊱⊱⊱⊱⊱" + b[i] + "⊰⊰⊰⊰⊰"
        });
    }
})();
mi('#bo13a').appendChild(addCon13a(look.con13a));
let div = mi("#showtime");
div.innerHTML = showtime();
setInterval(function() {
    div.innerHTML = showtime();
}, 7890);

// alert('this');
//页脚
let f = mi('#footer');
let f_p = f.getElementsByTagName("p");
let f_p_n = f_p.length;
f_p[3].innerHTML = "CopyRight&nbsp;&copy;2020-" + (new Date()).getFullYear() + "&nbsp;&nbsp;&nbsp;距离被评为百年全网最烂网站还差 &nbsp;&nbsp;&nbsp;" + (2119 - (new Date()).getFullYear()) + "." + 100 * l_floor((12 - (new Date()).getMonth() - 1) / 12, 2) + "&nbsp;&nbsp; 年";
f.addEventListener('click', () => {
    tr(14, 'a');
}, true);
setInterval(
    () => {
        for (let i = 0; i < f_p_n; i++) {
            f_p[i].style.display = "none"
        }
        f_p[l_random(f_p_n - 1)].style.display = "block";
    }, 1200
);

function toolOtO(a, fn) {
    let t = mi("#" + a);
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
    let t = mi("#" + a),
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
node.add.e('body', 'mousemove', (e) => { window.location.hash = cursor.w(e).x + "." + cursor.w(e).y + "&(这数字没啥意义，就是觉得好玩)" });
// alert(mi('li').nodeType);