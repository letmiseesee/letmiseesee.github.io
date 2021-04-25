const look = new Object();
//一句 俏皮话
look.oneL = "是风太冷，还是我们穿的太少。或者，仅是少了那个让你穿多的人";
look.title = ["友链", "随笔", "简历", "工具", "", "", "", "", "", "", "", "小白自话", "站点简介", "", "l"];
look.firstShow = 3;
// 本地 study 下页面 url
look.con2b = [
    ["html", "ht", "html", "html", "h5", "html 5", "media", "多媒体", 'table', '表格', "form", "表单", "cookie", "cookie", "position", "定位", "storage", "本地储存", "cache", "cache", "Message", "message", "file", "文件", 'ssee', '辅助'],
    ["css", "cs", "css", "css", "c3", "css 3", "canvas", "画布", "box", "布局", "gradient", "变幻和贞"],
    ["javascript", "js", "js", "基础", "number", "数值", "string", "字符串", "array", "数组", "function", "函数", "oop", "背对对象", "BOM", "BOM", "DOM", "DOM", 'DOM2and3', 'DOM 2\/3', "DOMold", "待整理", "event", "事件", "CSS", "CSS", "form", "表单", "JSON", "json", "AJAX", "ajax", "AJA", "待整理", "Worker", "线程", "history", "history", "优化", "优化", "VUE", "VUE"],
    ["jQuery", "jq", "JQ", "JQ", 'selector', '选择器', "DOM", "DOM", "CSS", "CSS", "event", "事件", "ajax", "Ajax", "animation", "动画", 'tools', '辅助工具'],
    ["其他", "other", "browser", "浏览器", "RegExp", "RegExp", "ssee", "扩展阅读", "smallProgram", "小程序", "http", "网络"],
    []
];
// 本地 luoluowind 下页面 url
look.con1b = [
    ["扩展阅读", "rough", "vscode", "vscode", "excel", "excel 函数", "some", "一些"],
    []
];
//  页面 个介
look.con13a = ["其实呢，访问量是没有的。我觉得，以后也不会有的。但是，自娱自乐的精神还是得有的。", "该域名是 let mi see see 的缩写，自觉好玩，可看成是 l（et）m（i）s（ee）see，就是 “让我看看” 的意思。站内包含：我常用网址的收藏、一些零碎的文章、（邮件）反馈页面、个人日记（日志）以及 “隐私政策”。",
    "站内，真正有用的是网址收藏，却都可以通过“度娘”等搜索引擎找到，但，我比较懒，所以做成一个页面，省的每次搜索后还得找哪个才是我想要的。",
    "被网友无情的质问,都 0202 年了,居然还有人用 letmiseesee 这个名....",
    "还问我是不是想起的名字是 let me see see, ohh ，my Lady Gaga...",
    "我。。", "..."
];

// 收藏 网址 数据
look["search_url"] = [
    ["bing", "巨硬出品，不精则以", "https:\/\/cn.bing.com\/search\?q="],
    ["Yandex", "大哥造，你值得拥有", "https:\/\/yandex.com/search\/\?text="],
    ["google", "一个你打不开的嚣张", "https:\/\/www.google.com\/search\?q="],
    ["京东", "我只是凑数的", "https:\/\/search.jd.com\/Search?keyword="],
    ["搜狗", "可圈可点", "https:\/\/www.sogou.com\/web\?query="],
    ["360", "嗯，不要哦", "https:\/\/www.so.com\/s\?q="],
    ["百度", "自行体会", "https://www.baidu.com/s?wd="]
];
look["translation_url"] = [
    ["bing", "https://cn.bing.com/translator/?ref=TThis&text=", "https://cn.bing.com/translator/?ref=TThis&text="],
    ["google", "https://translate.google.cn/?hl=zh-CN&sl=en&tl=zh-CN&text= ", "https://translate.google.cn/?hl=zh-CN&sl=zh-CN&tl=en&text= ", "&op=translate"],
    ["有道", "http://www.youdao.com/w/", "http://www.youdao.com/w/", "/#keyfrom=dict2.top"],
    ["百度", "https://fanyi.baidu.com/#en/zh/", "https://fanyi.baidu.com/#zh/en/"]
];
look.con1a = [
    ["bo1c", "none", "", "影 ", "https://tv.cctv.com/", "央视", "https://www.iqiyi.com/", "爱奇艺", "https://www.bilibili.com/", "哔哩哔哩", "https://www.youku.com/", "优酷", "https://v.qq.com/", "腾讯视频", "",
        "音", "http://www.kugou.com/", "酷狗", "http://www.migu.cn/music.html", "咪咕", "https://y.qq.com/", "腾讯",
        "",
        "行", "https://map.baidu.com/", "百度地图", "https://www.12306.cn/index/", "12306", "http://www.chongqingairlines.cn/", "重庆航空", "",
        "电", "https://hdh.10086.cn/tjbh/login", "停机保号", "http://www.10086.cn/", "移动", "http://www.10010.com/", "联通", "http://www.189.cn/", "电信",
        "",
        "娱乐 ", "https://www.163.com/", "网易", "https://3g.163.com/touch#/", "小网易", "https://passport.weibo.com/", "微博", "https://www.toutiao.com/", "头条", "https://www.qidian.com/", "起点文学", "",
        "game", "https://www.ali213.net/", "游侠网", "https://lol.qq.com/main.shtml", "lol", "https://store.steampowered.com/about/", "Steam", "https://start.qq.com/", "start", "",
        "bank", "http://www.icbc.com.cn/icbc/", "工商", "https://xyk.cebbank.com/", "光大", "https://yunshanfu.unionpay.com/", "云闪付", "http://www.cmbchina.com/", "招商", "",
        "三方金融", "https://jr.jd.com/", "jd金融", "https://www.alipay.com/", "支付宝", ""
    ],
    ["bo2c", "none",
        "", "邮箱 ", "https://mail.10086.cn/", "139", "https://outlook.live.com/mail/inbox", "Outlook", "https://mail.qq.com/", "QQ邮箱", "https://mail.google.com/mail/", "G mail",
        "", "论坛 ", "http://blog.sciencenet.cn/blog.php", "科学网", "https://www.jb51.net/", "脚本之家", "https://www.zhihu.com/", "知乎", "https://www.csdn.net/", "csdn", "", "网站搭建", "https://beian.miit.gov.cn/#/Integrated/index", "ICP", "http://www.beian.gov.cn/portal/index.do", "公安网", "http://www.shdf.gov.cn/shdf/channels/740.html", "扫黄打非", ""
    ],
    ["bo3c", "bl",
        "", "腾讯 ", "https://mp.weixin.qq.com/", "公众", "https://qzone.qq.com/", "空间", "https://weread.qq.com/", "读书", "https://cloud.tencent.com/", "云", "https://open.weixin.qq.com/", "开放", "https://write.qq.com/?siteid=3", "文学", "https://fanyi.qq.com/", "翻译",
        "", "apple ", "https://www.apple.com.cn/", "商城", "https://www.icloud.com/", "iCloud", "https://www.icloud.com/find/", "查找", "https://beta.apple.com/sp/zh-CN/betaprogram/", "测试版", "https://ibeta.me/", "派",
        "", "microsoft ", "https://account.microsoft.com/account/account?refd=a.vvli.top&ru=https%3a%2F%2Faccount.microsoft.com%2F%3Frefd%3Da.vvli.top&destrt=home-index", "账户", "https://onedrive.live.com/", "云盘",
        "", "京东", "http://e-m.jd.com/", "读书", "https://www.jd.com/", "京东",
        "", "google", "https://myaccount.google.com/intro?utm_source=OGB&tab=wk&utm_medium=app", "账号", "https://www.google.com/photos/about/", "图库", "https://chrome.google.com/webstore/category/extensions?utm_source=chrome-ntp-icon", "扩展",
        "", "阿里", "https://www.alipay.com/", "支付宝",
        "", "百度", "https://www.baidu.com/", "度", "https://map.baidu.com/", "地图", "https://pan.baidu.com/", "云盘", "https://fanyi.baidu.com/", "翻译", "https://tongji.baidu.com/web/welcome/login", "统计",
    ],
    ["bo4c", "none",
        "", "en", "https://developer.mozilla.org/zh-CN/docs/Web", "MDN", "https://www.w3school.com.cn/index.html", "w3school", "https://www.runoob.com/", "菜鸟", "https://study.163.com/", "网易课堂", "https://developers.weixin.qq.com/doc/", "tx开发文档", "https://www.jc2182.com/", "花蝴蝶",
        "", "git", "https://git-scm.com/", "git", "https://github.com/", "github", "https://gitee.com/explore", "码云",
        "", "jquery", "https://jquery.com", "jquery", "http://jquery.org", "项目组", "http://jqueryui.com", "UI", "http://jquerymobile.com", "JQMobile", "http://qunitjs.com", "QUnit",
        "", "we", "https://letsencrypt.org/", "tls证书", "http://www.cssarrowplease.com/", "Arrow", "https://cssgradient.io/", "Gradient", "https://inkscape.org/", "cape",
        "", "en", "http://validator.w3.org/", "验证", "http://xue.bookln.cn/", "书链", "http://html5pattern.com/", "pattern",
        "", "浏览器", "https://cj.wealier.com.cn/", "天气插件", "https://caniuse.com/", "支持",
        "", "啥", "http://validator.w3.org/", "w3cs", "https://www.layui.com/doc/", "模板", "http://wbwip.com/wbw/emailencoder.html", "转实体", "https://tool.chinaz.com/", "站长之家", 'https://webaim.org/', 'web可辅助',
        "", "图床", "https://www.gimp.org/", "GIMP", "http://www.gickr.com/",
        // "Gickr", "https://sbimg.cn/", 
        "工艺图床", "https://portal.qiniu.com/signup?code=3lnfyqy2r91ea", "七牛云",
        ""
    ],
    ["bo5c", "none", "", "聊天", "https://dldir1.qq.com/weixin/Windows/WeChatSetup.exe", "微信", "https://down.qq.com/qqweb/PCQQ/PCQQ_EXE/PCQQ2020.exe", "QQ",
        "", "微软", "https://go.microsoft.com/fwlink/p/?LinkID=2121808&clcid=0x804&culture=zh-cn&country=CN", "OneDrive", "https://code.visualstudio.com/docs/?dv=win", "vsCode", "https://visualstudio.microsoft.com/zh-hans/downloads/", "vs",
        "", "管家", "https://guanjia.lenovo.com.cn/download/lenovopcmanager_apps.exe", "联想管家", "https://img.zone139.com/m2012/controlupdate/v6/139Mail_Setup-000.exe", "和云",
        "", "工具 ", "https://www.chuyu.me/zh-Hans/index.html", "工具", "https://www.voidtools.com/Everything-1.4.1.992.x64-Setup.exe", "搜索", "https://www.ccleaner.com/ccleaner/download/standard", "ccleaner",
        "", "浏览器 ", "https://download-ssl.firefox.com.cn/releases-sha2/stub/official/zh-CN/Firefox-latest.exe", "Firefox", "https://dl.google.com/tag/s/appguid%3D%7B401C381F-E0DE-4B85-8BD8-3F3F14FBDA57%7D%26iid%3D%7B4B865D1B-0748-0B47-7B4D-EC7D7959535A%7D%26lang%3Dzh-CN%26browser%3D5%26usagestats%3D1%26appname%3DGoogle%2520Chrome%2520Dev%26needsadmin%3Dprefers%26ap%3D-arch_x64-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe", "Chrome", "https://www.microsoft.com/en-us/edge", "Edge",
        "", "编辑", "https://pacakge.cache.wpscdn.cn/wps/download/W.P.S.10000.12012.2019.exe", "WPS", "https://lmssee.cn/some/app/notaPad.exe", "notePad++",
        "", "en", "https://start.qq.com/", "云游戏",
        "", "其他 ", "https://www.jiangxiatech.com/", "江下科技", "https://storage.jd.com/jdreader/jdreadsetup.exe", "京东读书", "https://issuecdn.baidupcs.com/issue/netdisk/yunguanjia/BaiduNetdisk_7.0.10.2.exe", "百度云", "https://www.xp.cn/linux.html", "小皮", ""
    ]
];

look.music = {
    "梁静茹": ["勇气", ""],
    "庄心妍": ["一万个舍不得", ""],
    "黄玲": ["痒", ""],
    "周杰伦": ["烟花易冷", "告白气球"],
    "杨宗纬": ["无常", "我变了 我没变", "忘了我", "初爱"],
    "林俊杰": ["我还想她"],
    "周华健": ["忘忧草", "朋友"],
    "孙燕姿": ["天黑黑", "淋雨一直走", "开始懂了"],
    "陈奕迅": ["十年", "可以了"],
    "弦子": ["舍不得"],
    "薛之谦": ["几个你", "刚刚好", "暧昧"],
    "许茹芸": ["独角戏"]
}