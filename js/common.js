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
            wx.config({
                debug: true,
                appId: rs.appId, 
                timestamp: rs.timestamp, 
                nonceStr: rs.nonceStr, 
                signature: rs.signature,
                jsApiList: [
                    'checkJsApi',  //判断当前客户端版本是否支持指定JS接口
                    'onMenuShareTimeline', //分享给好友
                    'onMenuShareAppMessage', //分享到朋友圈
                    'onMenuShareQQ',  //分享到QQ
                    'onMenuShareWeibo' //分享到微博
                ]
            });

            wx.ready(function () {   //ready函数用于调用API，如果你的网页在加载后就需要自定义分享和回调功能，需要在此调用分享函数。//如果是微信游戏结束后，需要点击按钮触发得到分值后分享，这里就不需要调用API了，可以在按钮上绑定事件直接调用。因此，微信游戏由于大多需要用户先触发获取分值，此处请不要填写如下所示的分享API
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

                wx.onMenuShareAppMessage({
                    title: '硅康医药', // 分享标题
                    desc: '集成药物计算研发公司', // 分享描述
                    langink: 'http://silicontx.cn', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
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


            //console.log(rs.appId);
            /*
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
            */
        }
    })


})