$(function(){

		$("#home-box").removeClass("hidden");
		$("#home-box").addClass("animated fadeInRightBig");

	$(window).on("scroll",function(){

		var iTop = $(window).scrollTop();

		console.log(iTop);
		if(iTop > 400) {

			$("#home-box").one("animationend",function(){

			$("#home-box").removeClass();
		});
			$("#home-box").addClass("animated fadeOutRightBig");
			
			$("#home-box").one("animationend",function(){
				$("#home-box").removeClass();
				$("#home-box").addClass("hidden");
			});
		}else {

			$("#home-box").removeClass("hidden");
			$("#home-box").addClass("animated fadeInRightBig");

		}
			
	});

	
});

