$(function(){
	

	$(window).load(function(){

	// 	var iTop = $(window).scrollTop();
		$(".lastname").addClass("moving");
		$(".firstname").removeClass("hidden").addClass("animated fadeIn");
	});//window onload

	$(window).on("scroll",function(){

		var iTop = $(window).scrollTop();

		$("#plus").removeClass("invisiable").addClass("animated zoomIn");
	
		console.log(iTop);

		if(iTop > 5) {
			$("#bbj").removeClass("hidden").addClass("animated slideInUp");
		}
		if(iTop > 250) {
			$("#goldway").removeClass("hidden").addClass("animated slideInUp");
		} 
		if(iTop > 400) {
			$("#bestfriend").removeClass("hidden").addClass("animated slideInUp");
		}

		if(iTop > 50) {
			$(".line-1").removeClass("invisiable").addClass("animated slideInLeft");
		}

		if(iTop > 1500) {
			$(".line-2").removeClass("invisiable").addClass("animated slideInLeft");
		}
		if(iTop > 2900) {
			$(".line-3").removeClass("invisiable").addClass("animated slideInLeft");
		}
	});//scroll


	
	var isOpen = false;

	$(".menu").on("click",function(){

		if(isOpen == false) {

			$("#mobile-nav").removeClass("hidden").addClass("animated slideInRight");
		
			$(".menu span").addClass("close");

			setTimeout(function(){

				$(".menu").addClass("moving-menu");
				$(".logo").addClass("moving-logo");

			
			},1);

			$("#mobile-nav").one("animationend",function(){

				$(this).removeClass("animated slideInRight");
			});
			$("#overlay").removeClass("hidden").addClass("animated slideInRight");
		
			$("#overlay").one("animationend",function(){
				$("#overlay").removeClass("animated slideInRight");
			});

			isOpen = true;

		}else {


			$("#mobile-nav").addClass("animated slideOutRight");

			$(".menu span").removeClass("close");

			$(".menu").removeClass("moving-menu");
			$(".logo").removeClass("moving-logo");

			$("#mobile-nav").one("animationend",function(){

				$(this).removeClass("animated slideOutRight");
				$(this).addClass("hidden");
			});

			$("#overlay").addClass("animated slideOutRight");
		
			$("#overlay").one("animationend",function(){
				$("#overlay").removeClass("animated slideOutRight");
				$(this).addClass('hidden');
			});

			isOpen = false;
		}

		
	});//menu click
	
	$(".html").on("click",function() {
		if(isOpen == false) {

				$(this).addClass("animated slideOutUp");
				$(".html-text").removeClass("hidden");
				$(this).one("animationend", function() {
					$(this).removeClass("animated slideOutUp");
					$(this).addClass("hidden");
				});

			isOpen = true;

		} else{


			isOpen = false;
		}

	});

	


	
});//Jquery

