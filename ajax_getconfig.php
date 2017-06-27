<?php
	require_once "jssdk.php";
	$jssdk = new JSSDK("wx36f784e8c13faff0","97b9ca867ce04dbee22661dde3ceb3f8",'$_GET['url']');
	$signPackage = $jssdk->GetSignPackage();
	$signPackage['jsApiList'] = array('onMenuShareTimeline','onMenuShareAppMessage');
	$signPackage['debug'] = true;
	echo json_encode($signPackage);
?>
