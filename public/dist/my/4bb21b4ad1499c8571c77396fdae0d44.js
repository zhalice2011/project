require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({8:[function(require,module,exports) {
function swiperAnimateCache(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes.style?allBoxes[i].setAttribute("swiper-animate-style-cache",allBoxes[i].attributes.style.value):allBoxes[i].setAttribute("swiper-animate-style-cache"," "),allBoxes[i].style.visibility="hidden"}function swiperAnimate(e){clearSwiperAnimate();var s=e.slides[e.activeIndex].querySelectorAll(".ani");for(i=0;i<s.length;i++)s[i].style.visibility="visible",effect=s[i].attributes["swiper-animate-effect"]?s[i].attributes["swiper-animate-effect"].value:"",s[i].className=s[i].className+"  "+effect+" animated",style=s[i].attributes.style.value,duration=s[i].attributes["swiper-animate-duration"]?s[i].attributes["swiper-animate-duration"].value:"",duration&&(style=style+"animation-duration:"+duration+";-webkit-animation-duration:"+duration+";"),delay=s[i].attributes["swiper-animate-delay"]?s[i].attributes["swiper-animate-delay"].value:"",delay&&(style=style+"animation-delay:"+delay+";-webkit-animation-delay:"+delay+";"),s[i].setAttribute("style",style)}function clearSwiperAnimate(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["swiper-animate-style-cache"]&&allBoxes[i].setAttribute("style",allBoxes[i].attributes["swiper-animate-style-cache"].value),allBoxes[i].style.visibility="hidden",allBoxes[i].className=allBoxes[i].className.replace("animated"," "),allBoxes[i].attributes["swiper-animate-effect"]&&(effect=allBoxes[i].attributes["swiper-animate-effect"].value,allBoxes[i].className=allBoxes[i].className.replace(effect," "))}var swiper=new Swiper(".swiper-container",{onInit:function(i){swiperAnimate(i)},onSlideChangeEnd:function(i){swiperAnimate(i)}});$(document).ready(function(){$("#showNav ul li").mouseover(function(){$(this).addClass("activeA"),$(this).children().addClass("activeB"),$(this).siblings("li").removeClass("activeA"),$(this).siblings("li").children().removeClass("activeB")}),$("#hiddenNav ul li").mouseover(function(){$(this).css("border-bottom","0.2rem solid #52d3aa"),$(this).children().addClass("activeD"),$(this).siblings("li").css("border-bottom","0.1rem solid #E9E9E9"),$(this).siblings("li").children().removeClass("activeD")});var sta=0;$(".hsEnum").click(function(){0==sta?($("#hiddenNav").stop().slideDown("slow","easeOutBounce"),$(this).children().removeClass("fa-bars").addClass("fa-close"),sta=1):($("#hiddenNav").stop().slideUp("fast"),$(this).children().removeClass("fa-close").addClass("fa-bars"),sta=0)}),$("#showNav ul li").click(function(){$(this).addClass("activeA"),$(this).children().addClass("activeB"),$(this).siblings("li").removeClass("activeA"),$(this).siblings("li").children().removeClass("activeB")}),$("#hiddenNav ul li").click(function(){$(this).css("border-bottom","0.2rem solid #52d3aa"),$(this).children().addClass("activeD"),$(this).siblings("li").css("border-bottom","0.1rem solid #E9E9E9"),$(this).siblings("li").children().removeClass("activeD"),$("#hiddenNav").stop().slideUp("fast"),$(".hsEnum").children().removeClass("fa-close").addClass("fa-bars"),sta=0});var zhi=98,top0=$("#zhutu").offset().top-zhi,top1=$(".aboutMeBox").offset().top-zhi,top2=$(".myWorksBox").offset().top-zhi,top3=$(".mySkillBox").offset().top-zhi,top4=$(".myExperienceBox").offset().top-zhi,top5=$(".contactBox").offset().top-zhi;$("header nav ul li").click(function(){var i=$(this).index(),e=$(".swiper-slide section").eq(i).offset().top-62;$("html, body").animate({scrollTop:e},1e3)}),$(window).scroll(function(){for(var i=0;i<=5;i++)$(this).scrollTop()>=eval("top"+i)&&($("#showNav ul li").eq(i).addClass("activeA"),$("#showNav ul li").eq(i).children().addClass("activeB"),$("#showNav ul li").eq(i).siblings("li").removeClass("activeA"),$("#showNav ul li").eq(i).siblings("li").children().removeClass("activeB"),$("#hiddenNav ul li").eq(i).css("border-bottom","0.2rem solid #52d3aa"),$("#hiddenNav ul li").eq(i).children().addClass("activeD"),$("#hiddenNav ul li").eq(i).siblings("li").css("border-bottom","0.1rem solid #E9E9E9"),$("#hiddenNav ul li").eq(i).siblings("li").children().removeClass("activeD"));var juli=$(this).scrollTop();juli>=top2&&$("#backTop").fadeIn("slow"),0==juli&&$("#backTop").fadeOut("slow")}),$(".workNav li").mouseover(function(){$(this).css({background:"#52d3aa",color:"white"}),$(this).siblings("li").css({background:"#FEFEFE",color:"#515769"});var i=$(this).index();$(".workShow li").eq(i).css("display","block"),$(".workShow li").eq(i).siblings().css("display","none")}),$(".workNav li").click(function(){$(this).css({background:"#52d3aa",color:"white"}),$(this).siblings("li").css({background:"#FEFEFE",color:"#515769"});var i=$(this).index();$(".workShow li").eq(i).css("display","block"),$(".workShow li").eq(i).siblings().css("display","none")}),$("#backTop").click(function(){$("html, body").animate({scrollTop:0},1e3),$(this).fadeOut("slow")}),$("img.lazy").lazyload({effect:"fadeIn"}),$("article.lazy").lazyload({effect:"fadeIn"})});
},{}]},{},[8])