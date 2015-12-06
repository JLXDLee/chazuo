
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
	var ml = '0px';
	$(".menuBtn.right").click(function(){
		$(".menuList").css("margin-left", ml);
		if(i == c){
			$(this).css("display", "none");
			$(".menuBtn.left").css("display", "block");
		} else if(i > c){
			$(this).css("display", "none");
			$(".menuBtn.left").css("display", "block");
			return;
		}
		ml = - i * 180 + "px";
		$(".menuList").animate({
			"marginLeft": ml
		});
		i++;
	});
	$(".menuBtn.left").click(function(){
		$(".menuList").css("margin-left", ml);
		if(i == 2){
			$(this).css("display", "none");
			$(".menuBtn.right").css("display", "block");
		} else if(i < 2){
			$(this).css("display", "none");
			$(".menuBtn.right").css("display", "block");
			return;
		}
		ml = parseInt($(".menuList").css("margin-left")) + 180 + "px";
		$(".menuList").animate({
			"marginLeft": ml
		});
		i--;
	});
	//加载更多
	$("#loadMore").click(function(){
		$(this).hide();
		$("#loaded").show();
	});
});
