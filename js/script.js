$(function(){
	
	// $(window).on("scroll",function(){
	var iWidth = $(".header-wrap").offset();

	$(window).load(function(){

	// 	var iTop = $(window).scrollTop();
		$(".lastname").addClass("moving");
		$(".firstname").removeClass("hidden").addClass("animated fadeIn");
		// $(".quote").find("i").addClass("animated slideInDown");
	});

	console.log(iWidth);
	
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

			$(".moving-menu").css("transform","translateX("+iWidth+")");

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
		
		
	});


	


	
});//Jquery

