$(function(){
	// $("section:first").on("click",function(){
	// 	console.log("hi");
	// });

	$(window).on("scroll",function(){

		var iTop = $(window).scrollTop();

		$("section:nth-child(2)").offset().top;

		// console.log(iTop);
		$("#home-box").removeClass("hidden");
		$("#home-box").addClass("animated fadeInLeftBig");
			// console.log($("section:nth-child(2)").offset().top - iTop);
		// console.log($("section:second").offset().top);
		if($("section:nth-child(2)").offset().top - iTop <= 300) {

			$("#home-box").one("animationend",function(){
				$("#home-box").removeClass("fadeInLeftBig");
			});

			$("#home-box").addClass("animated fadeOutLeftBig");	
			// $("#home-box").addClass("hidden");
		} 	

		$(".bla").css("transform","translate("+iTop*2+"px,-"+iTop/5+"px)");	
	
	});

	

	$(".menu").on("click",function(e){

		

		$(this).addClass("hidden");

		$("#overlay").removeClass("hidden").addClass("animated fadeInDownBig");

		$("#overlay").one("animationend",function(){
			$("#overlay").removeClass("animated fadeInDownBig");
			$(".menu-close").removeClass("hidden");
		});
			
	});

	$(".menu-close").on("click",function(e){

		console.log(e);

		$(this).addClass("hidden");

		$("#overlay").addClass("animated fadeOutUpBig");

		$("#overlay").one("animationend",function(){
			$("#overlay").removeClass("animated fadeOutUpBig");
			$("#overlay").addClass("hidden");
			$(".menu").removeClass("hidden");
		});
		
	});


	
});

