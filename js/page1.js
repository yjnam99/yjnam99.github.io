
$(document).ready(function(e) { //함수실행
	
	var list = $("#wrap > ul > li"); //변수에 셀렉션 저장
	var btn = $("#closeBtn"); 
    

	list.click(function(){
		$(this).stop().animate({width:"100%"},500); //클릭시 애니메이션 실행 0.5초안에 width 100%
		$(this).siblings().stop().animate({width:"0%"},500);//다른 이웃요소들은 width:0
		btn.stop().delay(100).animate({top:"0px"},800);//버튼 top:0px위치로 0.1초안에 나타남.
	});
	
	btn.click(function(){
		list.stop().animate({width:"25%"},500); //버튼클릭시 list의 width 크기 원래대로.
		$(this).stop().delay(100).animate({top:"-50px"},800);//버튼 top:-80px;위치로.
	});	
	
	
});