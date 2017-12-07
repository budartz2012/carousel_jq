
$(document).ready(function(){
	$(".next").on("click", function (){
    
		let currentActiveSlide = $(".active");
		let nextActiveSlide = currentActiveSlide.next();

		if(nextActiveSlide.length==0){
			nextActiveSlide = $(".carousel-inner img").first();
		};
		if (nextActiveSlide.length){
		currentActiveSlide.removeClass("active").css("z-index", -10);
		nextActiveSlide.addClass("active").css("z-index", 10);

	    };
	});

		

	$(".prev").on("click", function (){

     	

		let currentActiveSlide = $(".active");
		let prevActiveSlide = currentActiveSlide.prev();

		if(prevActiveSlide.length==0){
			prevActiveSlide = $(".carousel-inner img").last();
		};
		if (prevActiveSlide.length){
		currentActiveSlide.removeClass("active").css("z-index", -10);
		prevActiveSlide.addClass("active").css("z-index", 10);

	    };
	});
}); 