
$(document).ready(function(){
	$(".next").on("click", function (){

		let currentActiveSlide = $(".active");
		let nextActiveSlide = currentActiveSlide.next().fadeOut();

			currentActiveSlide.fadeOut(1000, function(){
			nextActiveSlide.fadeIn(500)
			});

		if(nextActiveSlide.length==0){
			nextActiveSlide = $(".carousel-inner img").first();
		};
		if (nextActiveSlide.length){
			currentActiveSlide.removeClass("active");
			nextActiveSlide.addClass("active");
		};
			
			
   
	});



	$(".prev").on("click", function (){

	    let currentActiveSlide = $(".active");
		let prevActiveSlide = currentActiveSlide.prev().fadeOut();

			currentActiveSlide.fadeOut(2000, function(){
			prevActiveSlide.fadeIn(1000)
			});

			
		if(prevActiveSlide.length==0){
			prevActiveSlide = $(".carousel-inner img").last();
		};
		if (prevActiveSlide.length){
			currentActiveSlide.removeClass("active");
			prevActiveSlide.addClass("active");

	    };
	});
}); 