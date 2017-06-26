$(function(){
	//判断移动端还是pc端点击事件
    var click = navigator.userAgent.match(/(iPhone|iPod|Android|iOS)/i)?'touchend':'click';
    
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
    
    $('.team_cards .card').on('click',function(){
        
        //console.log(1111)
        $(this).find('.card_detail').css({'display':'block'})
        

        $('body').css({"overflow-y":'hidden'})
        //e.preventDefault();
        //return false;
    })
    $('.card_detail .detail .del ').on(click,function(){
        
        //console.log(222)
        $(this).parents('.card_detail').css({'display':'none'})
        $('body').css({"overflow-y":'auto'})
        return false;
        
    })

    
})