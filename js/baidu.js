/**
 * Created by 孟磊 on 2016/8/23.
 */
var clientH=$(window).height()
var flag=true
var num=0
$(".box").mousedown(function(e){
    e.preventDefault()
    $(".box").mousemove(function(e){
        e.preventDefault()
    })
})
touch.on(".box","swipe",function(e){
    if(e.direction=="down"){
        if(num==0){
            return;
        }
        if(!flag){
            return;
        }
        flag=false
        num--
        $(".box").css("marginTop",-num*clientH)
        $(".box ul li").css("background","").eq(num).css("background","rgba(0,0,0,.6)")
    }else if(e.direction=="up"){
        if(num==$(".list").length-1){
            return;
        }
        if(!flag){
            return;
        }
        flag=false
        num++
        $(".box").css("marginTop",-num*clientH)
        $(".box ul li").css("background","").eq(num).css("background","rgba(0,0,0,.6)")
    }
    $(".list").each(function(index,obj){
        if(index==num){
            $(obj).find(".animate-left").css("transform","translate(0px,0)").css("opacity",1)
            $(obj).find(".animate-right").css("transform","translate(0px,0)").css("opacity",1)
        }else{
            $(obj).find(".animate-left").css("transform","translate(-50px,0)").css("opacity",0.3)
            $(obj).find(".animate-right").css("transform","translate(50px,0)").css("opacity",0.3)
        }
    })
    $(window).resize(function(){
        clientH=$(window).height()
        $(".box").css("marginTop",-clientH*num)
    })

})
$(".box")[0].addEventListener("webkitTransitionEnd",function(){
    flag=true
})










$("input").click(function(){
    $(this).focus()
})

//选项卡
//移入移除
$(".box ul li").hover(function(){
    var index=$(".box ul li").index(this)
    $(".box ul span").css("display","none").eq(index).css("display","block")
},function(){
    $(".box ul span").css("display","none")
})

//点击
$(".box ul li").click(function(){
    var index=$(".box ul li").index(this)
    $(".box ul li").css("background","").eq(index).css("background","rgba(0,0,0,.6)")
    $(".box").css("marginTop",-index*clientH)
    var abc=index
    $(".list").each(function(index,obj) {
        if (index == abc) {
            $(obj).find(".animate-left").css("transform", "translate(0px,0)").css("opacity", 1)
            $(obj).find(".animate-right").css("transform", "translate(0px,0)").css("opacity", 1)
        } else {
            $(obj).find(".animate-left").css("transform", "translate(-50px,0)").css("opacity", 0.3)
            $(obj).find(".animate-right").css("transform", "translate(50px,0)").css("opacity", 0.3)
        }
    })
    $(window).resize(function(){
        clientH=$(window).height()
        $(".box").css("marginTop",-clientH*index)
    })
})

$(".jian").click(function(){
    var index=$(".jian").index(this)
    $(".box").css("marginTop",-(index+1)*clientH)
    $(".box ul li").css("background","").eq(index+1).css("background","rgba(0,0,0,.6)")
    var abc=index+1
    $(".list").each(function(index,obj) {
        if (index == abc) {
            $(obj).find(".animate-left").css("transform", "translate(0px,0)").css("opacity", 1)
            $(obj).find(".animate-right").css("transform", "translate(0px,0)").css("opacity", 1)
        } else {
            $(obj).find(".animate-left").css("transform", "translate(-50px,0)").css("opacity", 0.3)
            $(obj).find(".animate-right").css("transform", "translate(50px,0)").css("opacity", 0.3)
        }
    })

    $(window).resize(function(){
        clientH=$(window).height()
        $(".box").css("marginTop",-clientH*(index+1))
    })

})


//菜单点击
var flag=true
$(".dian").click(function(){
    if(flag){
        $(".dian-top").css("transform","translate(0,6px) rotate(45deg)")
        $(".dian-bottom").css("transform","translate(0,-3px) rotate(-45deg)")
        $(".meau").css({"visibility":"visible","height":500,"padding-top":30})
        $(".meau a").each(function(index,obj){
            $(obj).css("transition","all 0.4s ease "+index*0.3+"s").css("opacity",1).css("transform","rotateY(0deg) scale(1,1)")
        })
        flag=false;
    }else{
        $(".dian-top").css("transform","translate(0,0) rotate(0deg)")
        $(".dian-bottom").css("transform","translate(0,0) rotate(0deg)")
        $(".meau").css({"height":0,"padding-top":0})
        $(".meau a").each(function(index,obj){
            $(obj).css("transition","all 0s ease ").css("opacity",0).css("transform","rotateY(0deg) scale(1,1)")
        })
        flag=true;
    }
})


$(function(){
    $(".obj4").css("transform", "translate(0px,0)").css("opacity", 1)
})


//鼠标
function mouseWheel(obj,upfun,downfun){
    if(obj.attachEvent){
        obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
    }else if(obj.addEventListener){
        obj.addEventListener("mousewheel",scrollFn,false);
    //rome,safari -webkit-
        obj.addEventListener("DOMMouseScroll",scrollFn,false);
        //firefox -moz-
    }
    function scrollFn(e){
        var ev=e||window.event;
        if (ev.preventDefault ){
            ev.preventDefault(); //阻止默认浏览器动作(W3C)
        }else{
            ev.returnValue = false;//IE中阻止函数器默认动作的方式
        }
        var num=ev.detail||ev.wheelDelta;
        if(num==-3||num==120){//向上
            if(upfun){
                upfun();
            }
        }
        if(num==3||num==-120){//向上
            if(downfun){
                downfun();
            }
        }
    }
}

mouseWheel($(".box")[0],function(){
    if(num==0){
        return;
    }
    if(!flag){
        return;
    }
    flag=false
    num--
    $(".box").css("marginTop",-num*clientH)
    $(".box ul li").css("background","").eq(num).css("background","rgba(0,0,0,.6)")
    $(".list").each(function(index,obj){
        if(index==num){
            $(obj).find(".animate-left").css("transform","translate(0px,0)").css("opacity",1)
            $(obj).find(".animate-right").css("transform","translate(0px,0)").css("opacity",1)
        }else{
            $(obj).find(".animate-left").css("transform","translate(-50px,0)").css("opacity",0.3)
            $(obj).find(".animate-right").css("transform","translate(50px,0)").css("opacity",0.3)
        }
    })
    $(window).resize(function(){
        clientH=$(window).height()
        $(".box").css("marginTop",-clientH*num)
    })
},function(){
    if(num==$(".list").length-1){
        return;
    }
    if(!flag){
        return;
    }
    flag=false
    num++
    $(".box").css("marginTop",-num*clientH)
    $(".box ul li").css("background","").eq(num).css("background","rgba(0,0,0,.6)")
    $(".list").each(function(index,obj){
        if(index==num){
            $(obj).find(".animate-left").css("transform","translate(0px,0)").css("opacity",1)
            $(obj).find(".animate-right").css("transform","translate(0px,0)").css("opacity",1)
        }else{
            $(obj).find(".animate-left").css("transform","translate(-50px,0)").css("opacity",0.3)
            $(obj).find(".animate-right").css("transform","translate(50px,0)").css("opacity",0.3)
        }
    })
    $(window).resize(function(){
        clientH=$(window).height()
        $(".box").css("marginTop",-clientH*num)
    })
})