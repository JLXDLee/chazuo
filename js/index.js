$(function(){
	$("#rMenu>div").hover(function(){
		$(this).addClass("rmcActive").siblings().removeClass("rmcActive");
	});
});
