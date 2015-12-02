$(function(){
	var l = $(".menuItem").length;	//导航菜单数量
	$(".menuList").width(l * 180 + "px");
	//导航切换
	$(".menuItem").click(function(){
		var _s = $(this);
		_s.addClass("active").siblings().removeClass("active");
	});
	//导航滚动
	var i = 1;
	var c = l - 4;	//可点击次数
	$(".menuBtn.right").click(function(){
		if(i == c){
			$(this).css("display", "none");
			$(".menuBtn.left").css("display", "block");
		} else if(i > c){
			$(this).css("display", "none");
			$(".menuBtn.left").css("display", "block");
			return;
		}
		var ml = - i * 180 + "px";
		$(".menuList").animate({
			"marginLeft": ml
		});
		i++;
	});
	$(".menuBtn.left").click(function(){
		if(i == 2){
			$(this).css("display", "none");
			$(".menuBtn.right").css("display", "block");
		} else if(i < 2){
			$(this).css("display", "none");
			$(".menuBtn.right").css("display", "block");
			return;
		}
		var ml = parseInt($(".menuList").css("margin-left")) + 180 + "px";
		$(".menuList").animate({
			"marginLeft": ml
		});
		i--;
	});
	//线上、线下课程
	$("#rMenu>div").hover(function(){
		$(this).addClass("rmcActive").siblings().removeClass("rmcActive");
	});
	//加载更多
	$("#loadMore").click(function(){
		$(this).hide();
		$("#loaded").show();
	});
	$("#loadMore1").click(function(){
		$(this).hide();
		$("#loaded1").show();
	});
});
