(function ($) {
	
	"use strict";

	// Header Scrolling Set White Background
	scrollNavBar();

	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}
	
	
	//animation
	$('#sidebarlist li').on('click', function(e){
		e.preventDefault()
		if(!$(this).hasClass('active')) {
			$('#sidebarlist li').removeClass('active')
			$(this).addClass('active')
			var target = $(this).find('a').attr('data-target')
			$('.featuretab').removeClass('active')
			console.log(target)
			$('#'+target).addClass('active')
		}
	})
	


	// Menu elevator animation
	$('a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 30
				}, 700);
				return false;
			}
		}
	});



	// Home number counterup
	if($('.count-item').length){
		$('.count-item strong').counterUp({
			delay: 10,
			time: 1000
		});
	}


	// Blog cover image
	if($('.blog-post-thumb').length){
		$('.blog-post-thumb .img').imgfix();
	}


	// Page standard gallery
	if($('.page-gallery').length && $('.page-gallery-wrapper').length){
		$('.page-gallery').imgfix({
			scale: 1.1
		});

		$('.page-gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
			}
		});
	}


	// Page loading animation
	$(window).on('load', function() {
		$(".loader-wrapper").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				// Home Parallax
				if($('#download').length){
					$('#download').parallax({
						imageSrc: 'assets/images/photos/parallax.jpg',
						zIndex: '1'
					});
				}

				// Home Parallax Subscribe
				if($('#subscribe').length){
					$('#subscribe').parallax({
						imageSrc: 'assets/images/photos/parallax-subscribe.jpg',
						zIndex: '1'
					});
				}
				$(".loader-wrapper").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Header Scrolling Set White Background
	$(window).on('scroll', function() {
		scrollNavBar();
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


	// Navbar Scroll Set White Background Function
	function scrollNavBar() {
		var width = $(window).width();
		if(width > 991) {
			var scroll = $(window).scrollTop();
			if (scroll >= 30) {
				$(".header-area").addClass("header-sticky");
			}else{
				$(".header-area").removeClass("header-sticky");
			}
		}
	}


})(window.jQuery);