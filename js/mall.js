/**
 * Created by admin on 2018/7/2.
 */
$('.m-header .inputwrap input').click(function () {
    $('.m-header .wrap').css('display','block');
})

$('.m-header .inputwrap input').blur(function () {
    $('.m-header .wrap').css('display','none');
})

$(function () {
    var timer;
    var num=-1;

    function goto() {
        clearInterval(timer);
        timer=setInterval(function () {
            num++;
            if(num>5){
                num=0;
            }
            $('.mall-banner li').eq(num).addClass('banner-active');
            $('.mall-banner li').eq(num).siblings().removeClass('banner-active');
            $('.mall-banner .dots a').eq(num).addClass('dots-active');
            $('.mall-banner .dots a').eq(num).siblings().removeClass('dots-active')

        },1500)
    }
    goto();
    //移出移入停止事件
    $('#banner').hover(function () {
        clearInterval(timer);
    },function () {
        goto();
    });

//    看前一张图片
    $('.mall-banner .point a.left').click(function (event) {
        num--;
        if(num<0){
            num=5;
        }
        $('.mall-banner li').eq(num).addClass('banner-active');
        $('.mall-banner li').eq(num).siblings().removeClass('banner-active');
        $('.mall-banner .dots a').eq(num).addClass('dots-active');
        $('.mall-banner .dots a').eq(num).siblings().removeClass('dots-active');
    })

    $('.mall-banner .point a.right').click(function () {
        num++;
        if(num>5){
            num=0;
        }
        $('.mall-banner li').eq(num).addClass('banner-active');
        $('.mall-banner li').eq(num).siblings().removeClass('banner-active');
        $('.mall-banner .dots a').eq(num).addClass('dots-active');
        $('.mall-banner .dots a').eq(num).siblings().removeClass('dots-active');
    })

    $('.mall-banner .dots a').click(function () {
        num = $(this).index();
        $('.mall-banner li').eq(num).addClass('banner-active');
        $('.mall-banner li').eq(num).siblings().removeClass('banner-active');
        $('.mall-banner .dots a').eq(num).addClass('dots-active');
        $('.mall-banner .dots a').eq(num).siblings().removeClass('dots-active');
    })
})

$(window).scroll(function () {
    if($(window).scrollTop()>480){
        $('#one').addClass('scroll-after');
    }
    else{
        $('#one').removeClass('scroll-after');
    }
})

$('.turn-top').click(function () {
    $('html,body').animate({'scrollTop':$('.m-header').offset().top},100)
})