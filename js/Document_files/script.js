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
	
	});

	
});

