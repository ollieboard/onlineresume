$(document).ready(function(){
	
	setNavbar();
	
	$(window).resize(function(){
		setNavbar();
	});
	
	$(window).scroll(function(){
		setNavbar();
	});
	
	function setNavbar(){
	
		var distancetop = $('#navbar').offset().top;
		var windowScroll = $(window).scrollTop();

		if (windowScroll > distancetop){
				$('.navbar-pos').css('position', 'fixed');
				$('.navbar-pos').css('top', '0');
			} else {
				$('.navbar-pos').css('position', '');
				$('.navbar-pos').css('top', '');
		}
		
		/*var distanceQual = $('#div-qualifications').offset().top;
		if (distanceQual < windowScroll){
				$('.navbar-default').css('background-color', '#F3EFE0');
			} else {
				$('.navbar-default').css('background-color', '#777');
		}*/
		
	};
});
