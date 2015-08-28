$(function(){
	// $("section:first").on("click",function(){
	// 	console.log("hi");
	// });

	$(window).on("scroll",function(){

		var iTop = $(window).scrollTop();

		$(".bla").css("transform","translate("+iTop*2+"px,-"+iTop/12+"px)");	

		if(iTop <=100){
			$(".bla").css("flex","0 0 30em").css("height","24em");
		}else if(iTop <=250){
			$(".bla").css("flex","0 0 25em").css("height","20em");
		}else if(iTop <=400){
			$(".bla").css("flex","0 0 18em").css("height","16em");
		}else{
			$(".bla").css("flex","0 0 10em").css("height","8em");
		}
		console.log(iTop);
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

