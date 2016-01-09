$(document).ready(function(){
	setNavbar();
	setTimeline();
	
	$('#nav-button').click(function(){
		
		if($('.navbar-collapse').hasClass('in')){
			$('#span-top').css('animation', 'rotate2 0.2s ease-in forwards');
			$('#span-bottom').css('animation', 'rotateBack2 0.2s ease-in forwards');
			$('#navbar-main').collapse('hide');
		} else {
			$('#span-top').css('animation', 'rotate 0.2s ease-in forwards');
			$('#span-bottom').css('animation', 'rotateBack 0.2s ease-in forwards');
		}
	});
	
	/*BackgroundCheck.init({
		targets: '.target'
	});*/
	
	$(window).resize(function(){
		setNavbar();
		setTimeline();
		//BackgroundCheck.refresh();
	});
	
	$(window).scroll(function(){
		setNavbar();
		//BackgroundCheck.refresh();
	});
	
	/*$('.div-portfolio-info').bind('mousewheel DOMMouseScroll', function(e) {
		var scrollTo = null;

		if (e.type == 'mousewheel') {
			scrollTo = (e.originalEvent.wheelDelta * -1);
		}
		else if (e.type == 'DOMMouseScroll') {
			scrollTo = 40 * e.originalEvent.detail;
		}

		if (scrollTo) {
			e.preventDefault();
			$(this).scrollTop(scrollTo + $(this).scrollTop());
		}
	});*/
	
	
	$('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
		  }
		}
	  });
	
	function setNavbar(){
	
		var distanceBar = $('#navbar').offset().top;
		var distanceQual = $('#qualifications').offset().top;
		var distanceSkills = $('#skills').offset().top;
		var distancePort = $('#portfolio').offset().top;
		var distanceContact = $('#contact').offset().top;
		var windowScroll = $(window).scrollTop();

		if(windowScroll+50 > distanceContact){
			$('.navbar-pos').css('position', 'fixed');
			$('.navbar-pos').css('top', '0');
			$('#contactlink').addClass('link-active');
			$('#homelink').removeClass('link-active');
			$('#aboutlink').removeClass('link-active');
			$('#quallink').removeClass('link-active');
			$('#skilllink').removeClass('link-active');
			$('#portlink').removeClass('link-active');
		} else if (windowScroll+50> distancePort){
			$('.navbar-pos').css('position', 'fixed');
			$('.navbar-pos').css('top', '0');
			$('#portlink').addClass('link-active');
			$('#homelink').removeClass('link-active');
			$('#aboutlink').removeClass('link-active');
			$('#quallink').removeClass('link-active');
			$('#skilllink').removeClass('link-active');
			$('#contactlink').removeClass('link-active');
		} else if (windowScroll+50 > distanceSkills){
			$('.navbar-pos').css('position', 'fixed');
			$('.navbar-pos').css('top', '0');
			$('#skilllink').addClass('link-active');
			$('#homelink').removeClass('link-active');
			$('#aboutlink').removeClass('link-active');
			$('#quallink').removeClass('link-active');
			$('#portlink').removeClass('link-active');
			$('#contactlink').removeClass('link-active');
			addCircles();		
		} else if (windowScroll+50 > distanceQual){
			$('.navbar-pos').css('position', 'fixed');
			$('.navbar-pos').css('top', '0');
			$('#quallink').addClass('link-active');
			$('#homelink').removeClass('link-active');
			$('#aboutlink').removeClass('link-active');
			$('#portlink').removeClass('link-active');
			$('#skilllink').removeClass('link-active');
			$('#contactlink').removeClass('link-active');
		} else if (windowScroll > distanceBar){
			$('.navbar-pos').css('position', 'fixed');
			$('.navbar-pos').css('top', '0');
			$('#aboutlink').addClass('link-active');
			$('#homelink').removeClass('link-active');
			$('#quallink').removeClass('link-active');
			$('#skilllink').removeClass('link-active');
			$('#portlink').removeClass('link-active');
			$('#contactlink').removeClass('link-active');
		} else {
			$('.navbar-pos').css('position', '');
			$('.navbar-pos').css('top', '');
			$('#homelink').addClass('link-active');
			$('#aboutlink').removeClass('link-active');
			$('#quallink').removeClass('link-active');
			$('#skilllink').removeClass('link-active');
			$('#portlink').removeClass('link-active');
			$('#contactlink').removeClass('link-active');
		}
	};

	function addCircles(){
		$('.20per .spinner').css('animation', 'rota20 2s linear forwards');
		$('.20per .filler').css('animation', 'fill20 2s steps(1, end) forwards');
		$('.20per .mask').css('animation', 'mask20 2s steps(1, end) forwards');
		$('.40per .spinner').css('animation', 'rota40 2s linear forwards');
		$('.40per .filler').css('animation', 'fill40 2s steps(1, end) forwards');
		$('.40per .mask').css('animation', 'mask40 2s steps(1, end) forwards');
		$('.60per .spinner').css('animation', 'rota60 2s linear forwards');
		$('.60per .filler').css('animation', 'fill60 2s steps(1, end) forwards');
		$('.60per .mask').css('animation', 'mask60 2s steps(1, end) forwards');
		$('.80per .spinner').css('animation', 'rota80 2s linear forwards');
		$('.80per .filler').css('animation', 'fill80 2s steps(1, end) forwards');
		$('.80per .mask').css('animation', 'mask80 2s steps(1, end) forwards');
		$('.100per .spinner').css('animation', 'rota100 2s linear forwards');
		$('.100per .filler').css('animation', 'fill100 2s steps(1, end) forwards');
		$('.100per .mask').css('animation', 'mask100 2s steps(1, end) forwards');
	};

	function removeCircles(){
		$('.20per .spinner').css('animation', '');
		$('.20per .filler').css('animation', '');
		$('.20per .mask').css('animation', '');
		$('.40per .spinner').css('animation', '');
		$('.40per .filler').css('animation', '');
		$('.40per .mask').css('animation', '');
		$('.60per .spinner').css('animation', '');
		$('.60per .filler').css('animation', '');
		$('.60per .mask').css('animation', '');
		$('.80per .spinner').css('animation', '');
		$('.80per .filler').css('animation', '');
		$('.80per .mask').css('animation', '');
		$('.100per .spinner').css('animation', '');
		$('.100per .filler').css('animation', '');
		$('.100per .mask').css('animation', '');
	};
	
	function setTimeline(){
		document.getElementById('timeline-original').disabled  = true;
		//document.getElementById('timeline-modified').disabled = false;
		$('#timeline-airbus').addClass('timeline-inverted');
		$('#timeline-astrium').addClass('timeline-inverted');
		$('#timeline-exchange').addClass('timeline-inverted');
			
		var windowWidth = $('.timeline').width();
		
		if (windowWidth > 1400){
			$('.timeline-panel').css('width', 94+"%");
		} else if (windowWidth > 1000) {
			$('.timeline-panel').css('width', 92+"%");
		} else if (windowWidth > 800) {
			$('.timeline-panel').css('width', 92+"%");	
		} else if (windowWidth > 600) {
			$('.timeline-panel').css('width', 88+"%");
		} else if (windowWidth > 400) {
			$('.timeline-panel').css('width', 84+"%");
		} else if (windowWidth > 350) {
			$('.timeline-panel').css('width', 80+"%");
		} else if (windowWidth > 300){
			$('.timeline-panel').css('width', 76+"%");
		} else {
			$('.timeline-panel').css('width', 74+"%");
		}
		
		/*if (windowWidth < 800) {
			document.getElementById('timeline-original').disabled  = true;
			document.getElementById('timeline-modified').disabled = false;
			
			$('#timeline-airbus').addClass('timeline-inverted');
			$('#timeline-astrium').addClass('timeline-inverted');
			$('#timeline-exchange').addClass('timeline-inverted');
			
			if (windowWidght < 300) {
				$('.timeline-panel').css('width', 72+"%");
			} else if (windowWidth < 350) {
				$('.timeline-panel').css('width', 76+"%");
			} else if (windowWidth < 400){
				$('.timeline-panel').css('width', 80+"%");
			} else if (windowWidth < 600){
				$('.timeline-panel').css('width', 82+"%");
			} else{
				$('.timeline-panel').css('width', 84+"%");
			}
			
		} else {
			document.getElementById('timeline-original').disabled  = false;
			document.getElementById('timeline-modified').disabled = true;
			$('#timeline-airbus').removeClass('timeline-inverted');
			$('#timeline-astrium').removeClass('timeline-inverted');
			$('#timeline-exchange').removeClass('timeline-inverted');
			
			if (windowWidth > 1400){
				$('.timeline-panel').css('width', 48+"%");
			} else if (windowWidth > 1000){
				$('.timeline-panel').css('width', 46 +"%");
			} else {
				$('.timeline-panel').css('width', 44 +"%");
			}
		}*/	
	};
	

	
});

/*$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});*/
