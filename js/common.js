var cliend_url = "http://www.jlxdlee.site";	//配置客户端下载地址
$(function(){
	onloadEvt();
});
function onloadEvt(){
	//线上、线下课程
	$("#rMenu>div").hover(function(){
		$(this).addClass("rmcActive").siblings().removeClass("rmcActive");
	});
	//加载更多
	$("#loadMore1").click(function(){
		$(this).hide();
		$("#loaded1").show();
	});
	//客户端
	createClientCode();
	$("#client").mouseover(function(){
		$("#clientCode").show();
	}).mouseout(function(){
		$("#clientCode").hide();
	});
}
//生成客户端下载二维码
function createClientCode(){
	var qrcode = new QRCode(document.getElementById("ccCodeImg"), {
		width: 90, //设置宽高
		height: 90
	});
	qrcode.makeCode(cliend_url);
}