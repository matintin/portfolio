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

			isOpen = false;
		}



		
		// $(this).addClass("hidden");

		// $("#overlay").removeClass("hidden").addClass("animated slideInDown");
		// // $("#overlay nav").css("display","block");
		// $("#overlay").one("animationend",function(){
		// 	$("#overlay").removeClass("animated slideInDown");
		// });
		
		
	});//menu click
	
	var isEmpty = false;

	$("#message").on("click",function(){
	
		if(isEmpty == true) {
			
			$("#message").text("Message here");

			isEmpty =false;

		}else {

			$(this).empty();

			isEmpty = true;

		}

	});

	


	
});//Jquery

