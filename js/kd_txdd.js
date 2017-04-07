//填写订单信息
//姓名
$(function(){
	//省市区联动
	$('.address').distpicker({
	    autoSelect: false,
	    province: '省份/直辖市',
	    city: '市/区',
	    district: '区/县'
	  });
	
	//底部提交按钮固定
	$(window).scroll(function(){
		if($(this).scrollTop() >= 250){
			$(".fixed").fadeOut();
		}else{
			$(".fixed").fadeIn();
		}
//				console.log($(window).scrollTop());
	});
	 
	//点击显示优惠券
	var fl = true;
	$(".use_favo").click(function(){
		if(fl){
			$(this).find("i").html("-");
		}else{
			$(this).find("i").html("+");
		}
		fl = !fl;
		$(".favo p").toggleClass("show");
	});
	
	
	
	$("#name").blur(function(){
		if($(this).val() == null || $(this).val() ==''){
			$(this).parent().addClass("erro");
			$(this).parent().children("i").html("请输入姓名");
		}else if($(this).val().length < 2){
			$(this).parent().addClass("erro");
			$(this).parent().children("i").html("姓名不能少2个字符");
		}else{
			$(this).parent().removeClass("erro");
		}
	});
	//手机号
	$("#phone_num").blur(function(){
		if($(this).val() == null || $(this).val() ==''){
			$(this).parent().addClass("erro");
			$(this).parent().children("i").html("请输入手机号");
		}else if(!isMobilePhone($(this).val())){
			$(this).parent().addClass("erro");
			$(this).parent().children("i").html("手机号码格式错误");
		}else{
			$(this).parent().removeClass("erro");
		}
	});
	//详细地址
	$("#xx_address").blur(function(){
		if($(this).val() == null || $(this).val() ==''){
			$(this).parent().addClass("erro");
			$(this).parent().children("i").html("请输入详细地址");
		}else if($(this).val().length < 4){
			$(this).parent().addClass("erro");
			$(this).parent().children("i").html("详细地址不能少4个字符");
		}else{
			$(this).parent().removeClass("erro");
		}
	});
	
	//省份
	$(".prov").change(function(){
//		console.log($(this).val());
		if($(this).val() != null && $(this).val() != ''){
			$(".city").fadeIn();
			$(".erro_i").fadeOut();
		}else{
			$(".city").fadeOut();
			$(".town").fadeOut();
		}
	});
	$(".city").change(function(){
		if($(this).val() != null && $(this).val() != ''){
			$(".town").fadeIn();
			$(".erro_i").fadeOut();
		}else{
			$(".town").fadeOut();
		}
	});
	
	
	
	//保存
	$("#save_btn").click(function(){
		var val = false;
		//保存时再判断一次表单是否为空
		if($("#name").val() == null || $("#name").val() == ''){
			$(".name").addClass("erro");
			$(".name").children("i").html("请输入姓名");
		}
		if($("#phone_num").val() == null || $("#phone_num").val() == ''){
			$(".phone_num").addClass("erro");
			$(".phone_num").children("i").html("请输入手机号");
		}
		if($("#xx_address").val() == null || $("#xx_address").val() == ''){
			$(".xx_address").addClass("erro");
			$(".xx_address").children("i").html("请输入详细地址");
		}
		
		var addre = ($(".prov").val()==null || $(".prov").val()=="") || ($(".city").val()==null || $(".city").val()=="");
		if(addre){
			$(".erro_i").fadeIn();
			val = false;
		}else{
			val = true;
		}
		
		//判断前面的表单是否通过，通过了则不会出现erro类名
		var fl = $(".name,.phone_num,.xx_address").hasClass('erro');
		
		console.log(fl);
		console.log(val);
		if(!fl && val){
			$(".user_info .info").css('display','none');
			$(".user_info .save_info").css('display','block');
			var $save_info = $(".save_info .clone").clone().css("display","block");
			$save_info.removeClass("clone");
			
			$save_info.find('.save_name').html($("#name").val());
			$save_info.find('.save_phone').html($("#phone_num").val());
			$save_info.find('.save_adress').html($(".prov").val()+" "+$(".city").val()+" "+$(".town").val());
			$save_info.find('.save_xxadress').html($("#xx_address").val());
		
			$save_info.insertBefore($(".user_info .save_info .new_info"));
			
		}
	});
	
	//点击选择信息
	$(document).on("click",".save_info_1",function(){
		$(".save_info .save_info_1").each(function(){
			$(this).removeClass('active');
		});
		$(this).addClass("active");
	});
	
	

	//点击修改

	
		$(document).on('click',".revise",function(){
			$(".user_info .info").css('display','block');
			$(".user_info .info #save_btn").css('display','none');
			$(".user_info .info #save_btn_1").css('display','block');
			$(".user_info .info #qx_btn").css('display','block');
			$(".city").fadeIn();
			$(".town").fadeIn();
			//打开表单时现清空表单
			resetInput();
			
			//插入修改的信息
			var arr = $(this).parents(".save_info_1").find(".save_adress").html().split(" ");
			console.log(arr[0]+arr[1]+arr[2]);
			$("#name").val($(this).parents(".save_info_1").find(".save_name").html());
			$("#phone_num").val($(this).parents(".save_info_1").find(".save_phone").html());
			$('.address').distpicker({
			    province: arr[0],
			    city: arr[1],
			    district: arr[2]
			  });
			
			$("#xx_address").val($(this).parents(".save_info_1").find(".save_xxadress").html());
			  var index = $(this).parents(".save_info_1").index();
//			  console.log($(this).parents(".save_info_1").index());

			//点击确定修改
			$("#save_btn_1").click(function(){
				var $cg_info = $(".save_info .save_info_1").eq(index);
				console.log($cg_info);
				$cg_info.find('.save_name').html($("#name").val());
				$cg_info.find('.save_phone').html($("#phone_num").val());
				$cg_info.find('.save_adress').html($(".prov").val()+" "+$(".city").val()+" "+$(".town").val());
				$cg_info.find('.save_xxadress').html($("#xx_address").val());
				
				//修改保存后关闭表单
				$(".user_info .info").css('display','none');
			});
			
			//点击取消时清空并关闭表单
			$("#qx_btn").click(function(){
				resetInput();
				$(".user_info .info").css('display','none');
			});
			
		});
	//清空输入表单
		function resetInput(){
			//每次点击清空表单
			$("#name").val("");
			$("#phone_num").val("");
			$('.address').distpicker({
				autoSelect: false,
			    province: '省份/直辖市',
			    city: '市/区',
			    district: '区/县'
			});
			$("#xx_address").val("");
		}
		//点击删除地址信息
		$(document).on("click",".del",function(){
			$(this).parents(".save_info_1").remove();
			if($(".save_info_1").size() == 1){
				$(".save_info").css("display","none");
				$(".user_info .info").css("display","block");
				resetInput();
				$('.address').distpicker("reset");
				$(".user_info .info #save_btn").css('display','block');
				$(".user_info .info #save_btn_1").css('display','none');
				$(".user_info .info #qx_btn").css('display','none');
			}
		});
		
		//点击新增信息
		$(".new_info").click(function(){
			resetInput();
			$('.address').distpicker("reset");
			$(".user_info .info").css('display','block');
			$(".user_info .info #save_btn").css('display','block');
			$(".user_info .info #save_btn_1").css('display','none');
			$(".user_info .info #qx_btn").css('display','block');
			
		});
		
		//点击修改发票信息
		$(".change").click(function(){
			$(this).parents(".info").css("display","none");
			$(".select_info").css("display","block");
			
		});
		//点击切换样式
		$(".select_info>span").click(function(){
			$(".select_info>span").each(function(){
				$(this).removeClass("active");
			});
			$(this).addClass("active");
		});
		$(".need_fp>span").click(function(){
			$(".need_fp>span").each(function(){
				$(this).removeClass("active");
			});
			$(this).addClass("active");
		});
		//点击不需要发票
		$(".no_fp").click(function(){
			$(this).parent().css("display","none");
			$(".need_fp").css("display","none");
			$("#fp").css("display","none");
			$(".fp_type").css("display","none");
			$(this).parent().prev().css("display","block");
		});
		
		//点击纸质发票
		$(".pt_fp").click(function(){
			$(".need_fp").css("display","block");
			$(".fp_type").css("display","block");
		});
		//点击个人
		$(".need_fp .gr").click(function(){
			$("#fp").css("display","none");
		});
		//点击单位发票
		$(".need_fp .dw").click(function(){
			$("#fp").css("display","inline-block");
		});
		
		
		
	
	
});




function isMobilePhone(value) {
    if(value.search(/^(\+\d{2,3})?\d{11}$/) == -1)
        return false;
    else
        return true;
}