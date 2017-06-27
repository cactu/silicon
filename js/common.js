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
    //console.log(222);
    $.ajax({
        type:'get',
        url:'./sdk/jssdk.php',
        success:function(rs){
            var rs = $.parseJSON(rs);
            //console.log(rs.appId);
            wx.config({
                debug: false, 
                appId: rs.appId, 
                timestamp: rs.timestamp, 
                nonceStr: rs.nonceStr, 
                signature: rs.signature,
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] 
            });

            wx.ready(function(){
                // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
                wx.onMenuShareTimeline({
                    title: '', 
                    link:" ",
                    imgUrl: "../img/share_logo.png" 
                });
                // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
                wx.onMenuShareAppMessage({
                    title: '硅康医药', 
                    desc: '集成药物计算研发公司',
                    link:"http://silicontx.cn/",
                    imgUrl: "../img/share_logo.png", 
                    type: 'link' 
                });
            })
        }
    })
})