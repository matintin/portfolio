$(function(){
	// $("section:first").on("click",function(){
	// 	console.log("hi");
	// });

	$(window).on("scroll",function(){

		var iTop = $(window).scrollTop();
		
	});

	

	$(".menu").on("click",function(e){

		$("#mobile-nav").removeClass("hidden").addClass("animated slideInDown");;
		$("#mobile-nav").one("animationend",function(){
			$("#mobile-nav").removeClass("animated slideInDown");
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

	$(".menu-close").on("click",function(e){

		console.log(e);

		$("#mobile-nav").addClass("animated fadeOutUp");;
		$("#mobile-nav").one("animationend",function(){
			$("#mobile-nav").removeClass("animated fadeOutUp");
			$("#mobile-nav").addClass("hidden");
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

