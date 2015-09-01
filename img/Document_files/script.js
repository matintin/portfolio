$(function(){
	// $("section:first").on("click",function(){
	// 	console.log("hi");
	// });

	$(window).on("scroll",function(){

		var iTop = $(window).scrollTop();
		
	});
	
	$("#mobile-nav").hide();

	$(".menu").on("click",function(e){


		setTimeout(function(){

			$("#mobile-nav").slideDown();

			$("#mobile-nav").removeClass("hidden");
		});
	
		
		$(this).addClass("hidden");

		$("#overlay").removeClass("hidden").addClass("animated slideInDown");
		// $("#overlay nav").css("display","block");
		$("#overlay").one("animationend",function(){
			$("#overlay").removeClass("animated slideInDown");
		});
		$(".menu-close").delay(750).queue(function(){

			$(this).removeClass("hidden");
			$(this).dequeue();
		});
		
	});

	$(".menu-close").on("click",function(){

		// console.log(e);

		// $("#mobile-nav").one("transitionend",function(){

		// 	console.log("hello");
		// });
		$("#mobile-nav").slideUp(function(){

			$(this).hide();
		});
		
		

		$(this).addClass("hidden");

		$("#overlay").addClass("animated slideOutUp");
		$("#overlay").one("animationend",function(){
			$("#overlay").removeClass("animated slideOutUp");
			// $("#overlay nav").css("display","none");
			$("#overlay").addClass("hidden");
		});
		$(".menu").delay(750).queue(function(){

			$(this).removeClass("hidden");
			$(this).dequeue();
		});
		
	});


	
});

