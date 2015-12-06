$(function(){
	articleEvt();
});
function articleEvt(){
	//更多评论
	$("#loadMore").click(function(){
		$(this).hide();
	})
}
//评论字数检测
function commentCount(){
	var _d = $("#actComment");
	var n = 500 - _d.val().length;
	$(".actcTips>span").text(n);
}