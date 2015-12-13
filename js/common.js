var cliend_url = "http://www.jlxdlee.site";	//配置客户端下载地址
var enroll_url = "http://www.jlxdlee.site";	//报名
$(function(){
	onloadEvt();
});
function onloadEvt(){
	//线上、线下课程
	$("#rMenu>div").hover(function(){
		$(this).addClass("rmcActive").siblings().removeClass("rmcActive");
	});
	//客户端
	createClientCode('ccCodeImg', cliend_url, '90');
	$("#client").mouseover(function(){
		$("#clientCode").show();
	}).mouseout(function(){
		$("#clientCode").hide();
	});
}
//生成二维码图片
function createClientCode(id, url, size){
	var qrcode = new QRCode(document.getElementById(id), {
		width: size, //设置宽高
		height: size
	});
	qrcode.makeCode(url);
}