// 代码整理：懒人之家 lanrenzhijia.com
$(document).ready(function(){
	slide("#sliderNav", 25, 15, 180, .8);
});

function slide(navigation_id, pad_out, pad_in, time, multiplier){

	// 创建目标路径
	var list_elements = navigation_id + " li.sliderTag";
	var link_elements = list_elements + " a";

	// 启动定时器用于滑动动画
	var timer = 0;

	// 创建幻灯片动画的所有列表元素
	$(list_elements).each(function(i){
		$(this).css("margin-left","-210px");
		// 更新计时器
		timer = (timer*multiplier + time);
		$(this).animate({ marginLeft: "0" }, timer);
		$(this).animate({ marginLeft: "15px" }, timer);
		$(this).animate({ marginLeft: "0" }, timer);
	});

	// 创建的所有链接元素的悬停滑动效果	
	$(link_elements).each(function(i){
		$(this).hover(function(){
			$(this).animate({ paddingLeft: pad_out }, 180);
		},function(){
			$(this).animate({ paddingLeft: pad_in }, 180);
		});
	});

}

/* 代码整理：懒人之家 lanrenzhijia.com */