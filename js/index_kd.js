	
	// banner 信息滚动
	var timer_1 = setInterval(function(){
		$("#banner_news").animate({"top":-60},1000,'linear',function(){
			$li = $(this).find("li").eq(0).clone();
			$(this).append($li);
			$(this).find("li").eq(0).remove();

		
		$(this).css("top",0);
	});
	},3000);
	
	
	
	//鼠标滑过图片变化
	$(".hover").each(function(){
		// console.log($(this).find('li').size());
		$(this).find('li').each(function(){
			// console.log($(this));
			$(this).hover(function(){
				var imt = parseInt($(this).find(".img_box img").css("margin-top"));
				$(this).find(".img_box img").stop().animate({"margin-top":imt-10},500,"linear");
			},function(){
				var imt = parseInt($(this).find(".img_box img").css("margin-top"));
				$(this).find(".img_box img").stop().animate({"margin-top":imt+10},500,"linear");
			});
		});
	});

	// 热卖品类
	$(".hot_con li").each(function(){
		$(this).mouseover(function(){
			$(".hot_con li").each(function(){
				$(this).stop().animate({"width":190},500,'linear');
			});
			$(this).stop().animate({"width":380},500,'linear');
		});
	});

	// 倒计时 初始设定位2017-03-21 00:00:00
	var timer_2 = setInterval(function(){
		var nowTime = new Date();
		var iHours = (21-nowTime.getDate()-1)*24 + (24-nowTime.getHours()-1) + 0;
		var iMinutes = 60-nowTime.getMinutes()-1 + 0;
		var iseconds = 60-nowTime.getSeconds();
		$(".hours").html(iHours);
		$(".minutes").html(iMinutes);
		$(".seconds").html(iseconds);
	},1000);
	
	//发布愿望
	$(".select_now").click(function(){
		$(this).parent().toggleClass('active');
	});
	
	
	function selec(obj){
		obj.find("li").each(function(){
			$(this).click(function(){
				obj.find("li").each(function(){
					$(this).removeClass('active');
				});
				$(this).addClass('active');
			});
		});
	}
	selec($("#lb"));
	selec($("#pp"));
	selec($("jx"));
	
	$("#lb li").click(function(){
		$("#pp ol").addClass("show");
	});
	$("#pp li").click(function(){
		$("#jx ol").addClass("show");
	});
	$("#jx ol li").dblclick(function(){
		var str = $(this).html();
		$(".select_ver .select_now i").html(str);
		$(".select_ver").removeClass("active");
		$(".select_all").addClass("active");
		$(".submit").addClass("active");
	});
	
	$(".sel").each(function(){
		$(this).find("li").click(function(){
			$(this).parent().prev().find('i').html($(this).html());
			$(this).parents(".old_new").removeClass("active");
		});
	});
	
	
	//用户评价滚动
		var timer_1 = setInterval(function(){
		$("#user_discuss").animate({"top":-125},1000,'linear',function(){
			$li = $(this).find("li").eq(0).clone();
			$(this).append($li);
			$(this).find("li").eq(0).remove();

		// $(this).append(".banner_news ul li:eq(0)").css("margin-top",0);
		$(this).css("top",0);
	});
	},3000);