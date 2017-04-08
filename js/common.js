$(function(){
	//判断移动端还是pc端点击事件
    if ('ontouchend' in window) {
        var click = 'touchend';
    } else {
        var click = 'click';
    }

    $('header .tab_icon').on(click,function(){
    	$('.menu').addClass('open');
    	$('.wrap').addClass('open');
    	$('body').css({"overflow-y":'hidden'})
    })
    $('.menu .del').on(click,function(e){
    	$('.menu').removeClass('open');
    	$('.wrap').removeClass('open');
    	e.preventDefault();
    	$('body').css({"overflow-y":'auto'})
    })
})