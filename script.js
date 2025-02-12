window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hide');
        setTimeout(() => {
            preloader.remove();
        }, 800);
    }
});
const searchInput = document.getElementById('search');
const appList = document.getElementById('appList');

const apps = [
      { name: "Four in One", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/4in1.module" },
{ name: "BingAI for Safari", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/bfs.module" },
{ name: "去开屏广告轻量版", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/adlite.module" },
{ name: "去开屏广告融合版", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/startingad.module" },
{ name: "去开屏广告融合版ultra", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/adultra.module" },
{ name: "去开屏广告融合版ultra+", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/adultraplus.module" },
{ name: "今日辟谣", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/rumors.module" },
{ name: "今日平台热榜", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hotoday.module" },
{ name: "AppStore限免APP", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/appsdoor.module" },
{ name: "热映电影资讯", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/movie.module" },
{ name: "电视热度榜", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/tv.module" },
{ name: "QQ音乐热歌榜", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/qm.module" },
{ name: "网易云热歌榜", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/nm.module" },
{ name: "酷狗音乐热歌榜", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/km.module" },
{ name: "Billboard Hot100", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/bb100.module" },
{ name: "今日天气", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/tianqi.module" },
{ name: "今日汇率", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/rates.module" },
{ name: "汇率·加密货币", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/crypto.module" },
{ name: "新书速递", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/book.module" },
{ name: "历史上的今天", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/histoday.module" },
{ name: "accuweather解锁", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/accu.module" },
{ name: "AdBlock", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/AdBlock.module" },
{ name: "alarmy", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/alarmy.module" },
{ name: "aloha", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/aloha.module" },
{ name: "爱美剧", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/amj.module" },
{ name: "Background Eraser", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/aosoft.module" },
{ name: "appraven", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/appraven.module" },
{ name: "audiomack", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/audiomack.module" },
{ name: "b612相机", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/b612.module" },
{ name: "百度云倍速", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/baiducloud.sgmodule" },
{ name: "白描", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/baimiao.module" },
{ name: "bazaart", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/bazaart.module" },
{ name: "布丁锁屏", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/bdsp.module" },
{ name: "bedtime fan", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/bedtime-fan.module" },
{ name: "波点音乐", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/Bodian.module" },
{ name: "BOOM", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/boom.module" },
{ name: "boxjs", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/boxjs.sgmodule" },
{ name: "财新文章解锁", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/caixin.module" },
{ name: "彩云天气", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/caiyun.module" },
{ name: "计算器HD", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/calculator.module" },
{ name: "扫描全能王", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/camscanner.sgmodule" },
{ name: "克拉壁纸", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/clarity.module" },
{ name: "colorwidgets", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/colorwidgets.module" },
{ name: "dailyyoga", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dailyyoga.module" },
{ name: "大蓝鲸", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dalanjing.module" },
{ name: "darkroom", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/darkroom.module" },
{ name: "读书笔记", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dsbj.module" },
{ name: "第一弹", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dyd.module" },
{ name: "儿哥点点", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/egdd.module" },
{ name: "ellabook", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ellabook.module" },
{ name: "emby", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/emby.sgmodule" },
{ name: "emmo", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/emmo.module" },
{ name: "fabulous", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/fabulous.module" },
{ name: "番茄小说", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/fanqie.module" },
{ name: "fantastical", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/fantastical.module" },
{ name: "fimo", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/fimo.module" },
{ name: "grammarly", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/grammarly.module" },
{ name: "grow", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/grow.module" },
{ name: "烘焙小屋", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hbxw.module" },
{ name: "京东历史价格", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/HistoryPrice.sgmodule" },
{ name: "海豚记账本", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/htjzb.module" },
{ name: "hyperweb", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hyperweb.module" },
{ name: "ilovepdf", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ilovepdf.module" },
{ name: "imuseum", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/imuseum.module" },
{ name: "invideo", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/invideo.module" },
{ name: "jibjab", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/jibjab.module" },
{ name: "句读", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/judou.module" },
{ name: "kika", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/kika.module" },
{ name: "酷我音乐", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/kuwo-unlock.sgmodule" },
{ name: "lightroom", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/lightroom.module" },
{ name: "流利说·阅读", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/lls.module" },
{ name: "免耽漫画", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/mdmanhua.module" },
{ name: "美篇", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/meipian.module" },
{ name: "meistertask", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/meistertask.module" },
{ name: "美图秀秀", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/meituxx.module" },
{ name: "漫画台", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/mht.module" },
{ name: "mix-camera", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/mix-camera.module" },
{ name: "马卡龙玩图", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/mklwt.module" },
{ name: "mojo", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/mojo.module" },
{ name: "molycam", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/molycam.module" },
{ name: "musixmatch", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/musixmatch.module" },
{ name: "myfitnesspal", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/myfitnesspal.module" },
{ name: "myplate", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/myplate.module" },
{ name: "奈飞评分+双字幕", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/netflix_rating.sgmodule" },
{ name: "nicegram", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/nicegram.module" },
{ name: "notability", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/notability.module" },
{ name: "Now冥想", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/now.module" },
{ name: "奶由壁纸", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/nybz.module" },
{ name: "oldroll", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/oldroll.module" },
{ name: "peak", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/peak.module" },
{ name: "配音秀", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/peiyinxiu.module" },
{ name: "photomath", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/photomath.module" },
{ name: "photoshop Express", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/photoshop.module" },
{ name: "piccollage", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/piccollage.module" },
{ name: "pillow", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/pillow.module" },
{ name: "pixelcut", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/pixelcut.module" },
{ name: "pocket lists", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/pocketlists.module" },
{ name: "polarr", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/polarr.module" },
{ name: "皮皮虾", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ppx.module" },
{ name: "起伏", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/qifu.module" },
{ name: "七猫小说", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/qmxs.module" },
{ name: "多重搜索", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/multisearch.module" },
{ name: "人人视频", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/rrsp.module" },
{ name: "时光手账", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/sgsz.module" },
{ name: "shadowlinkVPN", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/shadowlinkVPN.module" },
{ name: "smallpdf", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/smallpdf.module" },
{ name: "石墨文档", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/smwd.module" },
{ name: "少年得到", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/sndd.module" },
{ name: "soundcloud", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://raw.githubusercontent.com/quocchienn/Make/refs/heads/crack/Soundcloud.module" },
{ name: "spotify", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/spotifyVIP.module" },
{ name: "substore", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/substore.sgmodule" },
{ name: "symbolab", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/symbolab.module" },
{ name: "tangerine", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/tangerine.module" },
{ name: "tenpercent", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/tenpercent.module" },
{ name: "迅雷", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/thunder.module" },
{ name: "tok cam", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/tokcam.module" },
{ name: "图图记账", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/tutu.module" },
{ name: "vista看天下", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/vista.module" },
{ name: "wallcraft", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wallcraft.module" },
{ name: "豌豆清单", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wdqd.module" },
{ name: "微信公众号去广告", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wechatad.module" },
{ name: "微博去广告", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/weiboad.module" },
{ name: "workout for women", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wfw.module" },
{ name: "widgetsmith", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/widgetsmith.module" },
{ name: "万能变声器", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wnbsq.module" },
{ name: "网易蜗牛读书", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wnds.module" },
{ name: "WPS", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/WPS.module" },
{ name: "西窗烛", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xcz.module" },
{ name: "小影", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xiaoying.module" },
{ name: "香蕉视频", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xjsp.module" },
{ name: "xmind思维导图", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xmind.module" },
{ name: "喜马拉雅去广告", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xmlyad.module" },
{ name: "小习惯", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xxg.module" },
{ name: "新语听书", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xyts.module" },
{ name: "有道云笔记", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ydybj.module" },
{ name: "亦飞GIF", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/yifeigif.module" },
{ name: "一甜相机", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/yitian.module" },
{ name: "一言", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/yiyan.module" },
{ name: "云听", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/yunting.module" },
{ name: "语文趣配音", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ywqpy.module" },
{ name: "斑马海报", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/zebra.module" },
{ name: "知乎去广告", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ZhihuBlock.sgmodule" },
{ name: "知乎优化", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ZhihuOpt.sgmodule" },
{ name: "纸条", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/zhitiao.module" },
{ name: "指尖时光", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/zjsg.module" },
{ name: "知音漫客", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/zymk.module" },
{ name: "Spotify歌词翻译", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/spotify_lyric.module" },
{ name: "NFC门禁卡公交卡", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/nfc.module" },
{ name: "搜图神器", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/stsq.module" },
{ name: "彩云天气通知任务", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/caiyun_cron.module" },
{ name: "Calm解锁", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/calm.module" },
{ name: "HTTPS抓包", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/https.module" },
{ name: "SSA丝社", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ssa.module" },
{ name: "小小优趣", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xxyq.module" },
{ name: "幻影相册", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hyxc.module" },
{ name: "精塾国学", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/jsgx.module" },
{ name: "PrettyUp", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/prettyup.module" },
{ name: "微博lite去广告", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/weibolitead.module" },
{ name: "Bilibili Helper", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://raw.githubusercontent.com/Maasea/sgmodule/refs/heads/master/Bilibili.Helper.sgmodule" },
{ name: "CUBOX", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/cubox.sgmodule" },
{ name: "pandora", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/pandora.module" },
{ name: "微信阅读积分兑换", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wechatread.module" },
{ name: "来音智能陪练", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ly.module" },
{ name: "熊掌记", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xzj.module" },
{ name: "如期", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/rq.module" },
{ name: "CEO周课", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ceo.module" },
{ name: "Fileball", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/fileball.module" },
{ name: "1blocker", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/1blocker.module" },
{ name: "AI换脸秀", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ai.module" },
{ name: "proknockout", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/proknockout.module" },
{ name: "青柠海报", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/qnhb.module" },
{ name: "Faintv", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/faintv.module" },
{ name: "微信听书", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wxts.module" },
{ name: "人民日报去广告", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/rmrb.module" },
{ name: "爱企查", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/aqc.module" },
{ name: "微信读书免费卡解锁", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wxds.module" },
{ name: "chic", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/chic.module" },
{ name: "有道词典", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ydcd.module" },
{ name: "网速测试大师", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wscsds.module" },
{ name: "网速管家", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wsgj.module" },
{ name: "EFEKT美易", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/efekt.module" },
{ name: "WPS稻壳会员", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/doc.module" },
{ name: "米克锁屏", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/mksp.module" },
{ name: "阿布睡前故事", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/absqgs.module" },
{ name: "collart", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/collart.module" },
{ name: "博商小麦", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/bsxm.module" },
{ name: "MEMRISE", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/memrise.module" },
{ name: "堆糖", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/duitang.module" },
{ name: "Flomo", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/flomo.module" },
{ name: "APTV", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/aptv.module" },
{ name: "香哈菜谱大全", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/cp.module" },
{ name: "长相思", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/cxs.module" },
{ name: "电子请柬制作", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dzqj.module" },
{ name: "黄油相机", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hyxj.module" },
{ name: "Lingokids", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/lingokids.module" },
{ name: "百度文库", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/bdwk.module" },
{ name: "Craft", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/craft.module" },
{ name: "Panda小组件", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/panda.module" },
{ name: "Keep", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/keep.module" },
{ name: "Documents", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/documents.module" },
{ name: "Planny", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/planny.module" },
{ name: "Ego Reader", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ego.module" },
{ name: "极速扫描仪", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/jssmy.module" },
{ name: "指尖笔记", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/zjbj.module" },
{ name: "钱迹", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/qj.module" },
{ name: "Agenda", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/agenda.module" },
{ name: "即刻运动", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/agenda.module" },
{ name: "Day One", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dayone.module" },
{ name: "Usage", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/usage.module" },
{ name: "谜底时钟", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/mdsz.module" },
{ name: "MoneyThings", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/moneythings.module" },
{ name: "手机扫描仪", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/sjsmy.module" },
{ name: "Sorted", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/sorted.module" },
{ name: "尽简衣橱", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/jjyc.module" },
{ name: "看理想", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/klx.module" },
{ name: "目标地图", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/mbdt.module" },
{ name: "拼图酱", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ptj.module" },
{ name: "向日葵阅读", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xrk.module" },
{ name: "卡片日记", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/kprj.module" },
{ name: "莉景天气", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ljtq.module" },
{ name: "Motivation", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/motivation.module" },
{ name: "PDF Viewer", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/pdfviewer.module" },
{ name: "Percento", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/percento.module" },
{ name: "Pixelance", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/pixelance.module" },
{ name: "Retake", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/retake.module" },
{ name: "色采", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/sc.module" },
{ name: "闪萌表情", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/smbq.module" },
{ name: "音频剪辑", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ypjj.module" },
{ name: "Varlens", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/varlens.module" },
{ name: "一木记账", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ymjz.module" },
{ name: "Drafts", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/drafts.module" },
{ name: "叮叮水印相机", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ddsyxj.module" },
{ name: "Emote", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/emote.module" },
{ name: "灵敢足迹", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/lgzj.module" },
{ name: "7分钟HIIT运动", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/seven.module" },
{ name: "私密相册管家", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/smxcgj.module" },
{ name: "FitnessView", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/fnv.module" },
{ name: "TODO清单", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/todo.module" },
{ name: "淘票票评分", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/tpp.module" },
{ name: "天天豆", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ttd.module" },
{ name: "咖映", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ky.module" },
{ name: "VCUS", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/vcus.module" },
{ name: "傲软PDF编辑", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/arpdfbj.module" },
{ name: "傲软投屏", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/artp.module" },
{ name: "幻休", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hx.module" },
{ name: "绘影字幕", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hyzm.module" },
{ name: "汇中考", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hzk.module" },
{ name: "iScreen", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/iscreen.module" },
{ name: "小组件盒子", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xzjhz.module" },
{ name: "佐糖", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/zt.module" },
{ name: "飞鱼计划", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/fyjh.module" },
{ name: "过期啦", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/gql.module" },
{ name: "乃糖小组件", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/nt.module" },
{ name: "一书一课", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ysyk.module" },
{ name: "充电助手", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/cdzs.module" },
{ name: "电视家", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dsj.module" },
{ name: "Endel", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/endel.module" },
{ name: "格至日记", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/gzrj.module" },
{ name: "高德地图去广告", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/gddt.module" },
{ name: "好事发生", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hsfs.module" },
{ name: "简讯", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/jianxun.module" },
{ name: "可拍", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/kepai.module" },
{ name: "Lifeviewer", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/lifeviewer.module" },
{ name: "Relens", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/relens.module" },
{ name: "Vivacut", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/vivacut.module" },
{ name: "Watchout", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/watchout.module" },
{ name: "无痕去水印", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/whqsy.module" },
{ name: "一键换脸", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/yjhl.module" },
{ name: "Styleart", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/styleart.module" },
{ name: "7动", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/7dong.module" },
{ name: "生活指数定时提醒", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/lifeindex.module" },
{ name: "油价提醒", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/oil.module" },
{ name: "海报工厂", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hbgc.module" },
{ name: "我的番茄", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wdfq.module" },
{ name: "FoMz", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/fomz.module" },
{ name: "日杂相机", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/rzxj.module" },
{ name: "古诗词大全", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/gscdq.module" },
{ name: "Mondly", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/mondly.module" },
{ name: "猫头鹰文件", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/mtywj.module" },
{ name: "汉堡儿童故事", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hbetgs.module" },
{ name: "iconKiller", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/iconkiller.module" },
{ name: "一寸证件照", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/yczjz.module" },
{ name: "中华诗词库", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/zhsck.module" },
{ name: "字体册", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ztc.module" },
{ name: "配音", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/peiyin.module" },
{ name: "AdGuard", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/adguard.module" },
{ name: "阿里云盘签到", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/aliyun.module" },
{ name: "爱题词", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/atc.module" },
{ name: "Beelinguapp", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/beelinguapp.module" },
{ name: "蛋啵", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/danbo.module" },
{ name: "Happy:Days", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/happydays.module" },
{ name: "Spark Mail", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/spark.module" },
{ name: "VN视频剪辑", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/vn.module" },
{ name: "小决定", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xjd.module" },
{ name: "Art Widget", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/artwidget.module" },
{ name: "薄荷健康", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/bhjk.module" },
{ name: "不折叠输入法", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/bzdsrf.module" },
{ name: "才士题库", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/cstk.module" },
{ name: "当燃", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dangran.module" },
{ name: "得间小说", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/djxs.module" },
{ name: "大神水印", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dssy.module" },
{ name: "丁香医考", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dxyk.module" },
{ name: "电音阁DJ解锁", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dygdj.module" },
{ name: "饭橘减肥", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/fanju.module" },
{ name: "分贝仪", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/fenbeiyi.module" },
{ name: "高级恋爱话术", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/gjlahs.module" },
{ name: "婚礼精选", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hljx.module" },
{ name: "画世界", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/huashijie.module" },
{ name: "呼吸 小组件", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hxxzj.module" },
{ name: "iScreen", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/iscreen.module" },
{ name: "简影", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/jianying.module" },
{ name: "开心拍", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/kaixinpai.module" },
{ name: "看剧学英语", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/kjxyy.module" },
{ name: "Koan 提问日记", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/koan.module" },
{ name: "蓝基因", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/lanjiyin.module" },
{ name: "lUV-万能小组件", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/luv.module" },
{ name: "薄荷壁纸", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/mint.module" },
{ name: "MOJi辞書", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/moji.module" },
{ name: "轻图", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/qingtu.module" },
{ name: "趣铃", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/quling.module" },
{ name: "趣拍", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/qupai.module" },
{ name: "趣颜", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/quyan.module" },
{ name: "Silimini", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/silimini.module" },
{ name: "You're So Great", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/sogreat.module" },
{ name: "TouchRetouch", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/touchretouch.module" },
{ name: "Weather Fit", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/weatherfit.module" },
{ name: "Wink", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://raw.githubusercontent.com/quocchienn/quocchien/refs/heads/Quocchien_Module/WinkVipCrackPro.module" },
{ name: "问真八字", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wzbz.module" },
{ name: "习惯管家", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xggj.module" },
{ name: "小鸡专注", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xjzz.module" },
{ name: "小鹿声文", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xlsw.module" },
{ name: "熊猫睡眠", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xmsm.module" },
{ name: "小熊便签", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xxbq.module" },
{ name: "小熊录屏", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xxlp.module" },
{ name: "阅读记录", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ydjl.module" },
{ name: "一天阅读", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ytyd.module" },
{ name: "元气桌面壁纸", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/yuanqi.module" },
{ name: "中华日历", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/zhrl.module" },
{ name: "站酷高高手", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/zkggs.module" },
{ name: "AI绘画", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/aihh.module" },
{ name: "Al设计师", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/aisjs.module" },
{ name: "AI头像馆", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/aitxg.module" },
{ name: "变美相机", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/bmxj.module" },
{ name: "笔趣阁", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/bqg.module" },
{ name: "长图拼接", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ctpj.module" },
{ name: "电池管家", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dcgj.module" },
{ name: "多彩相册", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dcxc.module" },
{ name: "DeepFaker换脸", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/deepfaker.module" },
{ name: "倒数鸭", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dsy.module" },
{ name: "疯狂背单词", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/fkbdc.module" },
{ name: "Foodie", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/foodie.module" },
{ name: "稿好作文", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ghzw.module" },
{ name: "GuitarTuner", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/guitartuner.module" },
{ name: "换脸 AI黑科技", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hlai.module" },
{ name: "Lungy:呼吸练习", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hxlx.module" },
{ name: "imageX-Ai绘画", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/imagex.module" },
{ name: "解剖大师", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/jpds.module" },
{ name: "开练", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/kailian.module" },
{ name: "开拍", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/kaipai.module" },
{ name: "律动鼓点舞", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ldgdw.module" },
{ name: "Lingvist", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/lingvist.module" },
{ name: "mindkit", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/mindkit.module" },
{ name: "魔图", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/motu.module" },
{ name: "猫语翻译器", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/myfyq.module" },
{ name: "PeakVisor", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/peakvisor.module" },
{ name: "Pure记账", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/pure.module" },
{ name: "软眠眠", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/rsm.module" },
{ name: "Sharp Al", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/sharp.module" },
{ name: "Sketchar", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/sketchar.module" },
{ name: "Soul", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/soul.module" },
{ name: "视频编辑", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/spbj.module" },
{ name: "视频剪辑神器", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/spjjsq.module" },
{ name: "刷刷题", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ssti.module" },
{ name: "天天跳绳", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ttts.module" },
{ name: "喔知wozi背单词", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wozi.module" },
{ name: "物品指南", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wpzn.module" },
{ name: "小包搜题", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xbst.module" },
{ name: "新知卫星地图", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xzwsdt.module" },
{ name: "有诗", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/youshi.module" },
{ name: "柚子轻断食", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/yzqds.module" },
{ name: "指南针GPS", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/znz.module" },
{ name: "凹凸啦查妆", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/atlcz.module" },
{ name: "安心天气", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/axtq.module" },
{ name: "爱证件", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/azj.module" },
{ name: "表格大师", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/bgds.module" },
{ name: "超级简历", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/cjjl.module" },
{ name: "Clica", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/clica.module" },
{ name: "车票票", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/cpp.module" },
{ name: "Currency", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/currency.module" },
{ name: "查妆妆", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/czz.module" },
{ name: "倒放挑战", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dftz.module" },
{ name: "电工计算器", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dgjsj.module" },
{ name: "Dofm", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dofm.module" },
{ name: "多漫", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/duoman.module" },
{ name: "DVD相机", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/dvd.module" },
{ name: "Flowkey钢琴", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/flowkey.module" },
{ name: "翻译全能王", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/fyqnw.module" },
{ name: "工地记工", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/gdrj.module" },
{ name: "瓜瓜龙启蒙", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/gglqm.module" },
{ name: "故事飞船", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/gsfc.module" },
{ name: "GUGA一超级白板", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/guga.module" },
{ name: "慧考智学", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/hkzx.module" },
{ name: "海豚儿童英语", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/htetyy.module" },
{ name: "减脂食谱", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/jfsp.module" },
{ name: "建工计算器", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/jgjsq.module" },
{ name: "记乎", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/jihu.module" },
{ name: "极简日记", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/jjrj.module" },
{ name: "极简时钟", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/jjsz.module" },
{ name: "简易表格", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/jybg.module" },
{ name: "九州短剧", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/jzdj.module" },
{ name: "快影", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/kuaiying.module" },
{ name: "徕卡水印相机", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/laika.module" },
{ name: "灵敢提词器", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/lgtcq.module" },
{ name: "蓝基因", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ljy.module" },
{ name: "乐刷短剧", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/lsdj.module" },
{ name: "录音机", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/lyj.module" },
{ name: "录音专业版", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/lyzyb.module" },
{ name: "梦剧场", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/mjc.module" },
{ name: "OneTodo", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/onetodo.module" },
{ name: "派客", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/paike.module" },
{ name: "PhotoRoom", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/photoroom.module" },
{ name: "普通话测试", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/pthcs.module" },
{ name: "千本笔记", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/qbbj.module" },
{ name: "情侣飞行棋", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/qlfxq.module" },
{ name: "全民幸福社", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/qmxfs.module" },
{ name: "瑞网微视", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/rwws.module" },
{ name: "时光序", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/sgx.module" },
{ name: "手机通话录音机", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/sjthly.module" },
{ name: "Smart Al", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/smartai.module" },
{ name: "SODA相机", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/soda.module" },
{ name: "通话录音", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/thly.module" },
{ name: "套路键盘", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/tljp.module" },
{ name: "ToonMe卡通头像", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/toonme.module" },
{ name: "Wake瑜伽", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wakeyj.module" },
{ name: "五年日记本", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wnrjb.module" },
{ name: "万源阅读", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/wnyd.module" },
{ name: "小伴龙学数学", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xblxsx.module" },
{ name: "小熊油耗", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xxyh.module" },
{ name: "小鹦看看", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/xykk.module" },
{ name: "亚瑟浏览器", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/yase.module" },
{ name: "易截图2", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/yjt2.module" },
{ name: "医考帮", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ykb.module" },
{ name: "一起欺词", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/yqqc.module" },
{ name: "一万年日记", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ywnrj.module" },
{ name: "证件照高清版", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/zjzgqb.module" },
{ name: "朝暮计划", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/zmjh.module" },
{ name: "智能视频抠图", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/znspkt.module" },
{ name: "指南针定位", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/znzdw.module" },
{ name: "真题伴侣", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/ztbl.module" },
{ name: "真心话大冒险", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/zxhdmx.module" },
{ name: "杂志天下", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://whatshub.top/module/zztx.module" },
{ name: "Photomater - Photo Editor", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://raw.githubusercontent.com/ddgksf2013/Modules/main/RevenueCat.Vip.sgmodule" },
{ name: "Duplete Pro", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://github.com/ddgksf2013/Modules/raw/main/RevenueCat.Vip.sgmodule" },
{ name: "Obscura — Pro camera", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://github.com/ddgksf2013/Modules/raw/main/RevenueCat.Vip.sgmodule" },
{ name: "Action Button", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://github.com/ddgksf2013/Modules/raw/main/RevenueCat.Vip.sgmodule" },
{ name: "ntPlayer", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://github.com/ddgksf2013/Modules/raw/main/RevenueCat.Vip.sgmodule" },
{ name: "Locket Gold", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://raw.githubusercontent.com/quocchienn/lockcrack/refs/heads/module/Locket_Gold.sgmodule" },
{ name: "Aido AI Pro", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://github.com/ddgksf2013/Modules/raw/main/RevenueCat.Vip.sgmodule" },
{ name: "VSCO", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://raw.githubusercontent.com/quocchienn/Make/refs/heads/crack/ALL_Lucky_VP3.modules" },
{ name: "YouTubePIP", desc: "Không có mô tả.", link: "https://raw.githubusercontent.com/quocchienn/YouTubePIP/refs/heads/YouTube%2B%2B/YouTubePIP.conf" },
{ name: "MbankBlocks_JB", desc: "Không có mô tả.", link: "https://raw.githubusercontent.com/quocchienn/Mbank_Blocks/refs/heads/Mbank_Block_Jb/MbankBlocks_JB.conf" },
{ name: "YouTube Dùng Cấu Hình", desc: "Không có mô tả.", link: "https://raw.githubusercontent.com/quocchienn/Make/refs/heads/crack/YouTube.conf" },
{ name: "KineMaster Bản Conf", desc: "Không có mô tả.", link: "https://raw.githubusercontent.com/quocchienn/Make/refs/heads/crack/KineMaster.conf" },
{ name: "KineMaster Bản Module", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://raw.githubusercontent.com/quocchienn/Make/refs/heads/crack/KineMaster.modules" },
{ name: "Alight Motion Bản Module", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://raw.githubusercontent.com/quocchienn/lockcrack/refs/heads/module/Alight%20motion.modules" },
{ name: "5 Trong 1 Conf", desc: "Không có mô tả.", link: "https://raw.githubusercontent.com/quocchienn/Make/refs/heads/crack/ALL_Lucky.conf" },
{ name: "5 Trong 1 Module", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://raw.githubusercontent.com/quocchienn/Make/refs/heads/crack/ALL_Lucky_VP3.modules" },
{ name: "4 Trong 1 Conf", desc: "Không có mô tả.", link: "https://raw.githubusercontent.com/quocchienn/Make/refs/heads/crack/4trong1.conf" },
{ name: "Youtube v1 Module cài cùng bản conf để dùng proxy", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://raw.githubusercontent.com/vantuan380/youtubep/refs/heads/pre/YouTube%20premium.mudule" },
{ name: "Youtube v1 Conf cài cùng bản module để dùng proxy", desc: "Không có mô tả.", link: "https://raw.githubusercontent.com/quocchienn/Make/refs/heads/crack/YouTube_%20premium.conf" },
{ name: "Spotify", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://raw.githubusercontent.com/quocchienn/Make/refs/heads/crack/ALL_Lucky_VP3.modules" },
{ name: "Picsart", desc: "Không có mô tả.", link: "shadowrocket://install?module=https://raw.githubusercontent.com/quocchienn/Make/refs/heads/crack/ALL_Lucky_VP3.modules" }
    ];

function renderApps(filteredApps) {
    appList.innerHTML = "";
    filteredApps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.className = 'app-card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md';
        appCard.innerHTML = `
            <h2 class="font-semibold">${app.name}</h2>
            <p>${app.desc}</p>
            <a href="${app.link}" target="_blank" class="download-btn">
                🔗Lấy link
            </a>
        `;
        appList.appendChild(appCard);
        observer.observe(appCard);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    renderApps(apps);
});
searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredApps = apps.filter(app => app.name.toLowerCase().includes(searchText));
    renderApps(filteredApps);
});
const darkModeToggle = document.getElementById('darkModeToggle');
const root = document.documentElement;
if (localStorage.getItem('darkMode') === 'enabled') {
    root.classList.add('dark');
    darkModeToggle.textContent = '☀️';
} else {
    darkModeToggle.textContent = '🌙';
}
darkModeToggle.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    darkModeToggle.textContent = isDark ? '☀️' : '🌙';
});
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});
document.addEventListener('dragstart', (event) => {
    event.preventDefault();
});
document.addEventListener('copy', (event) => {
    event.preventDefault();
});
const devtoolsDetection = setInterval(() => {
    const devtools = window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100;
    if (devtools) {
        alert('Đừng sử dụng DevTools!');
        clearInterval(devtoolsDetection);
    }
}, 1000);
const menuToggle = document.getElementById('menu-toggle');
const menuDropdown = document.getElementById('menuDropdown');
menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    menuDropdown.classList.toggle('hidden');
    menuDropdown.classList.toggle('show');
});
document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !menuDropdown.contains(event.target)) {
        menuDropdown.classList.add('hidden');
        menuDropdown.classList.remove('show');
    }
});
const sections = document.querySelectorAll('section');
const checkVisibility = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop < window.innerHeight && sectionBottom > 0) {
            section.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', checkVisibility);
checkVisibility();
const navbarTitle = document.querySelector('.navbar-title');
if (navbarTitle) {
    navbarTitle.addEventListener('click', () => {
        window.location.href = 'https://nguyenngocphung2000.github.io/Fontbath/';
    });
}
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        if (document.documentElement.classList.contains("dark")) {
            navbar.style.background = "rgba(15, 23, 42, 0.8)";
        } else {
            navbar.style.background = "rgba(30, 58, 138, 0.8)";
        }
    } else {
        navbar.style.background = "";
        navbar.style.backdropFilter = "none";
    }
});
const appCards = document.querySelectorAll('.app-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

appCards.forEach(card => {
    observer.observe(card);
});
