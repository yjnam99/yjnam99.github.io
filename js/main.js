$(function(){
	var $body=$("body");
	var $container=$(".container");
	var $btn=$(".menu_btn");
	var $menu=$(".hamburger_menu");
	var $overlay=$(".overlay");

	$("a[href$='#']").on("click", function(e){
		e.preventDefault();
	});
	$btn.on("click", function(){
		if($body.hasClass("open_status")){
			toggleMenu("close");
		}else{
			toggleMenu("open");
		}
	});
	$overlay.on("click", function(){
		toggleMenu("close");
	});
	function toggleMenu(str){
		if(str == "close"){
			$body.removeClass("open_status");
			$menu.removeClass("on");
			$overlay.removeClass("on");
		}else if(str == "open"){
			$body.addClass("open_status");
			$menu.addClass("on");
			$overlay.addClass("on");
		}
	}
});