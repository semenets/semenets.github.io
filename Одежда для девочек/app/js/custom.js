$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};

/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});

	/* placeholder*/
	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	*/
	
	/* components */
});

var handler = function(){
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
}
$(window).bind('load', handler);
$(window).bind('resize', handler);





//left column
var current = 0;
var current2 = 0;
var pic = new Array ('../img/icons/rectangle_shut.png', '../img/icons/rectangle_open.png');

$(".category__text-slide").click(function() {
	current = current === 0 ? 1 : 0;
	$('.category__icon-open-slide').attr('src', pic[current]);
	$(".category__lists-slide").slideToggle("slow")
})

$(".text-material").click(function() {
	current2 = current2 === 0 ? 1 : 0;
	$('.category__icon-open-material').attr('src', pic[current2]);
	$(".list-material").slideToggle("slow")
});


//slick plugin
$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	slidesPerRow: 3,
	autoplay: true,
	responsive: [ 
	{
		breakpoint: 767,
		settings: {
			slidesPerRow: 1,
		}
	}],
	prevArrow: $(".prev"),
	nextArrow: $(".next"),
});

$(".slick-dots").addClass("slick-dots-styles")

//slick buttons (prev, next)
var prev = document.querySelector(".prev")
var next = document.querySelector(".next")
var slickDotsStyles = document.querySelector(".slick-dots-styles")

$(".slick-dots-styles").before(prev)
$(".slick-dots-styles").after(next)
$(".prev, .slick-dots-styles, .next").wrapAll('<div class="bottom-pagination"></div>');

