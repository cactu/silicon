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
           //console.log(rs.app);
            var rs = $.parseJSON(rs);
            
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
                wx.onMenuShareTimeline({  //例如分享到朋友圈的API  
                  title: '', // 分享标题
                  link: '', // 分享链接
                  imgUrl: '', // 分享图标
                  success: function () {
                    // 用户确认分享后执行的回调函数
                  },
                  cancel: function () {
                    // 用户取消分享后执行的回调函数
                  }
                });

                // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
                wx.onMenuShareAppMessage({
                  title: '', // 分享标题
                  desc: '用最精准的计算方法突破传统研发瓶颈，为人类的重大疾病寻找新一代创新药物', // 分享描述
                  langink: rs.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: 'http://silicontx.cn/img/share_logo.png', // 分享图标
                  type: 'link', // 分享类型,music、video或link，不填默认为link
                  dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                  success: function () { 
                      // 用户确认分享后执行的回调函数
                  },
                  cancel: function () { 
                    // 用户取消分享后执行的回调函数
                  }
                });
            });

            wx.error(function (res) {
                alert(res.errMsg);  //打印错误消息。及把 debug:false,设置为debug:ture就可以直接在网页上看到弹出的错误提示
            });
        }
    })
})