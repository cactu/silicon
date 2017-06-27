<?php
require_once "./ceshi/jssdk.php";
$jssdk = new JSSDK("wx36f784e8c13faff0", "97b9ca867ce04dbee22661dde3ceb3f8");
$signPackage = $jssdk->GetSignPackage();
?>

<!DOCTYPE html>
<html>
<head lang="en">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
	<title>硅康医药--关于硅康</title>
	<meta name="Keywords" content="" />
	<meta name="Description" content="综合药物计算研发公司" />
	<link rel="icon" href="img/logo.ico" type="image/x-icon"/>
	<link rel="stylesheet" href="//cdn.bootcss.com/normalize/4.2.0/normalize.min.css">
	<link rel="stylesheet" href="css/common.css">
	<script type="text/javascript" src="//cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
	<script type="text/javascript" src='http://res.wx.qq.com/open/js/jweixin-1.2.0.js'></script>
</head>
<body>
	<div class='menu'>
		<div class='tab clearfix'>
			<ul class='clearfix'>
				<li class='active'>
					<a href="index.html">关于硅康</a>
				</li>
				<li>
					<a href="science.html">硅康技术</a>
				</li>
				<li>
					<a href="team.html">硅康团队</a>
				</li>
				<li>
					<a href="news.html">硅康新闻</a>
				</li>
			</ul>
			<p>
				<a href="http://www.silicontx.com/">
					<span class='active'>中</span>/<span>En</span>
				</a>					
			</p>
		</div>
		<div class='del'>
			<i class="iconfont">&#xe61c;</i>
		</div>
	</div>
	<div class='wrap'>
		<header>
			<div class='layout clearfix'>
				<div class='logo'>
					<a href="index.html">
						<img src="img/logo.png">
					</a>
				</div>
				<div class='tab clearfix'>
					<ul class='clearfix'>
						<li class='active'>
							<a href="index.html">关于硅康</a>
						</li>
						<li>
							<a href="science.html">硅康技术</a>
						</li>
						<li>
							<a href="team.html">硅康团队</a>
						</li>
						<li>
							<a href="news.html">硅康新闻</a>
						</li>
					</ul>
					<p>
						<a href="http://www.silicontx.com/">
							<span class='active'>中</span>/<span>En</span>
						</a>					
					</p>
				</div>
				<div class='tab_icon'>
					<img src="img/tab.png">
				</div>
			</div>
		</header>
		
		<div class='index_banner'>
			<div class='index_intro layout'>
				<div class='name'>
					<h2>集成药物计算研发公司</h2>
				</div>
				<div class='line'></div>
				<div class='intro'>
					我们致力于攻克生物化学难题，以解锁新一代疗法
				</div>
			</div>
			<div class='intro_img'>
				<img src="img/banner_back.png">
			</div>
		</div>
		<div class='about'>
			<div class='layout about_us'>
				<div class='about_1'>
					<div class='yingjian detail'>
						<div class='detail_img'>
							<img src="img/yingjian.png">
						</div>					
						<p>定制化硬件</p>
						<span>根据对计算速度与精度的不同需求来编写代码</span>
					</div>
					<div class='ruanjian detail'>
						<div class='detail_img'>
							<img src="img/ruanjian.png">
						</div>					
						<p>独家软件</p>
						<span>针对高通量药物研发与设计进行专门开发，准确推测药物活性</span>
					</div>
					<div class='shiyan detail'>
						<div class='detail_img'>
							<img src="img/shiyan.png">
						</div>					
						<p>实验室</p>
						<span>由经验丰富的药物设计专家、化学家、生物学家和计算专家组成的综合队伍，进行计算机化的实验研究</span>
					</div>
				</div>
				<div class='about_2'>
					<div class='tuandui detail'>
						<div class='detail_img'>
							<img src="img/tuandui.png">
						</div>					
						<p>硅康团队</p>
						<span>						团队汇聚众多药物研发专家，携手对计算机模拟后化合物进行旨在临床应用的药物设计
						</span>
					</div>
					<div class='target detail'>
						<div class='detail_img'>
							<img src="img/target.png">
						</div>					
						<p>困难标靶</p>
						<span>针对困难靶标进行更深层次的研究，在验证药物在人体内的作用机制方面非常高效，而这通过传统途径几乎无法实现</span>
					</div>
				</div>
			</div>
		</div>
		<div class='index_cards'>
			<div class='cards_list layout'>
				<div class='cards_left'>
					<a href="science.html">
						<img src="img/cards_left.png" style='width:100%'>
						<span>硅康技术</span>
						<p>“...一切生命体都可以从原子间有规律的、或温和或剧烈的跃动层面来理解”</p>
					</a>
					
				</div>
				<div class='cards_center'></div>
				<div class='cards_right'>
					<a href="team.html">
						<img src="img/cards_right.png" style='width:100%'>
						<span>硅康团队</span>
						<p>优秀的科技创始团队  丰富的医药运营经验</p>
					</a>
				</div>
			</div>
		</div>
		<footer>
			<div class='layout'>
				<img src="img/logo_footer.png">
				<span>&copy;2016&nbsp;硅康医药&nbsp;
				<a href="http://www.miitbeian.gov.cn/" target='_blank'>京ICP备17031150号-1</a></span>
			</div>
		</footer>
	</div>
	
	<script type="text/javascript" src='js/common.js'></script>
	<script type="text/javascript">
		wx.config({
	      	debug: true,
	      	appId: '<?php echo $signPackage["appId"];?>',
	      	timestamp: <?php echo $signPackage["timestamp"];?>,
	      	nonceStr: '<?php echo $signPackage["nonceStr"];?>',
	      	signature: '<?php echo $signPackage["signature"];?>',
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
	</script>
</body>
</html>