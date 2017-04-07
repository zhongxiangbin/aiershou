
//首页特效
$(function(){

	// 回到顶部
	$(".back_top").click(function(){
		$("html,body").animate({"scrollTop":0},300,'linear');
	});


	
});



//公用函数

//补零函数 ，返回的是字符串
function zero(num) {
	if(num < 10) {
		return '0' + num;

	} else {
		return '' + num;
	}
}



