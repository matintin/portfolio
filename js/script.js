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
		if(iTop > 400) {
			$("#goldway").removeClass("hidden").addClass("animated slideInUp");
		} 
		if(iTop > 800) {
			$("#bestfriend").removeClass("hidden").addClass("animated slideInUp");
		}

		if(iTop > 500) {
			$(".line-1").removeClass("invisiable").addClass("animated slideInLeft");
		}

		if(iTop > 1300) {
			$(".line-2").removeClass("invisiable").addClass("animated slideInLeft");
		}
		if(iTop > 2200) {
			$(".line-3").removeClass("invisiable").addClass("animated slideInLeft");
		}


		if($(this).scrollTop() > 200) {
			$(".goTop").fadeIn(500);
		} else {
			$(".goTop").fadeOut(500);
		}
	});//scroll

	$(".goTop").on("click", function() {

		$("html, body").animate({scrollTop: "0"}, 500);

	});
	
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

	$(window).on("resize", function(){

		$(".text-wrap").css("height", $(".img-wrap").height());

	}).resize();


	$(".skill-box .img-wrap").on("click",function() {

		$(this).addClass("animated slideOutUp");

		$(this).one("animationend", function() {
			$(this).removeClass("animated slideOutUp");
			$(this).addClass("hidden");
		
		});
		


		
		$(".skill-box .text-wrap").on("click", function() {
			$(this).next().removeClass("hidden").addClass("animated slideInDown");

			$(".skill-box .img-wrap").not(this).removeClass("hidden").addClass("animated slideInDown");

		 	$(this).one("animationend", function() {
	 			$(this).removeClass("animated slideInDown");
	 			
	 		});
		});

	
	
		$(".skill-box .text-wrap").on("click", function() {
			console.log("hi");
			$(this).next().removeClass("hidden").addClass("animated slideInDown");

		 	$(this).one("animationend", function() {
	 			$(this).removeClass("animated slideInDown");
	 			
	 		});
		});


		
		$(".skill-box .img-wrap").not(this).removeClass("hidden").addClass("animated slideInDown");
			
	
			

	});
//////////////////////////////////////////////////////////////////////////

	var words = [
		"see my C.V",
		"send message to me"
	];

	var time = 0;
	
	function typewords() {
		for(i=0; i<words.length; i++) {
			for(j=0;j<words[i].length; j++) {
				var word = words[i].substr(0,j)
				time = time + 500;
				typeWord(word,time);
				
			}
						
			for(k=words[i].length;k>=0;k--) {
				var word = words[i].substr(0,k);
				time = time + 300;
				typeWord(word,time);
			}
			
		}
	}

	function typeWord(word,time) {
		setTimeout(function() {
			$("#change-word").html(word)},time);
	}

	

	setInterval(typewords(),1000);


});//Jquery

