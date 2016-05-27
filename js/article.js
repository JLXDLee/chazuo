$(function(){
	$("#logo").click(function(){
		window.location.href = "index.html";
	});
	articleEvt();
});
function articleEvt(){
	//更多评论
	$("#loadMore").click(function(){
		$(this).hide();
		$("#loadAllCmt").show();
	});
}
//评论字数检测
function commentCount(){
	var _d = $("#actComment");
	var n = 500 - _d.val().length;
	$(".actcTips>span").text(n);
}
/*************************
 * 
 * 弹窗相关方法
 *
 *************************/
//显示弹窗
function showDialog(url, callback){
	$("#dlContent").load(url, function(){
		autoLocation();
		resizeAuto();
		$(".dlClose").click(hideDialog);
		if(callback){
			callback();
		}
		$("#dialogLayer").show();
		$("#dlContainer").fadeIn();
	});
}
//隐藏弹窗
function hideDialog(){
	$("#dlContainer").fadeOut();
	$("#dialogLayer").hide();
}
//计算弹窗显示位置
function autoLocation(){
	var w = ($(window).width() - 456) / 2;
	var h = ($(window).height() - 612) / 2;
	w = (w > 0 ? w : 0) + "px";
	h = (h > 0 ? h : 0) + "px";
	$("#dlContainer").css({
		"top": h,
		"left": w
	});
}
//自动计算位置
function resizeAuto(){
	$(window).resize(autoLocation);
}
