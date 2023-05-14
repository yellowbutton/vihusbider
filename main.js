// ==UserScript==
// @name         VihuSbider
// @namespace    http://yxzl.top/
// @version      1.0.0
// @description  爬取知乎
// @author       Iron_Grey_
// @require      https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.2.1/jquery.min.js
// @match        *://*/*
// @grant        none
// @run-at document-end
// @grant GM_xmlhttpRequest
// ==/UserScript==



(function() {
    function dlth(num){//去除千分位中的‘，’(delet thouthands)
        if(num&&num!='undefined'&&num!='null'){
            let numS = num;
            numS = numS.toString();
            numS = numS.replace(/,/gi, '');
            return numS;
        }else {
            return num;
        }
    };
    var url = new URL(window.location.href);
    if(url.searchParams.get("sbidermode")=="q"){
        var qtit = $(".QuestionHeader-title").text();
        for(let i=0;i<$(".QuestionHeader-main").find("button").length;i++){
            if($(".QuestionHeader-main").find("button")[i].innerText=="显示全部 ​"){
                $(".QuestionHeader-main").find("button")[i].click();
            };
        };
        //多滚动几行
        var qdes = $(".QuestionHeader-main").find("p")[0].innerText;
        var qflo = $(".QuestionFollowStatus-counts").find(".NumberBoard-itemValue")[0].innerText;
        var qviw = dlth($(".QuestionFollowStatus-counts").find(".NumberBoard-itemValue")[1].innerText);
        var qlks = $("body").find("a");
        var qaid = new Array();
        //var luli = new Array();
        for(let i=0;i<qlks.length;i++){
            try{$(qlks[i]).attr("href").indexOf("//www.zhihu.com/question/")}catch{continue;};
            if($(qlks[i]).attr("href").indexOf("//www.zhihu.com/question/")==0 && $(qlks[i]).attr("href").indexOf("/answer")!=-1){
                qaid.push(qlks[i].getAttribute("href").split("/").pop());
                //alert();
            };
        };
        console.log(qtit+": "+qdes+qflo+qviw+qaid);
    };
})();
