//main menu
if($(window).width() <= 1380) {
	var currentImg = 0;
	var pic = new Array ('images/menu-shut.png', 'images/menu.png');

	$(".menu-button").click(function() {
		$(".header-menu").toggleClass("menu-animation")
		currentImg = currentImg === 0 ? 1 : 0;
		$('.menu-icon-shut').attr('src', pic[currentImg]);
	})

} else {
	var currentImg = 0;
	var pic = new Array ('images/menu.png', 'images/menu-shut.png');

	$(".menu-button").click(function() {
		$(".header-menu-search-buttons").toggleClass("button-animation")
		$(".header-menu").toggleClass("display-none")
		currentImg = currentImg === 0 ? 1 : 0;
		$('.menu-icon').attr('src', pic[currentImg]);
	})
}

//sections of header
if( $(window).width() > 767 && $(window).width() < 991) {
	$(".section-column-one").hover(function() {
		$(".section-column-one").css("width", "236px")
	})

	$(".section-column-three").hover(function() {
		$(".section-column-three").css("width", "236px")
	})
}

$(".section-column-one").hover(function() {
	$(".right-border-in-section-one").addClass("float-right")
	$(".section-column-one").css("backgroundColor", "#09ac7b")
	$(".monitor-icon-one").css("display", "block")
	$(".right-border-in-section-one").css("position", "relative")
	$(".right-border-in-section-one").css("top", "-60px")
	$(".title_of_section-one").css("marginTop", "9px")

	$(".section-column-one").css("-webkit-transition-duration", "1s")
	$(".section-column-one").css("-o-transition-duration", "1s")
	$(".section-column-one").css("-moz-transition-duration", "1s")
	$(".section-column-one").css("transition-duration", "1s")
},

	function(){
		$(".right-border-in-section-one").removeClass("float-right")
		$(".monitor-icon-one").css("display", "none")
		$(".section-column-one").css("backgroundColor", "")
		$(".right-border-in-section-one").css("top", "0px")
		$(".title_of_section-one").css("marginTop", "40px")
	}
)

$(".section-column-two").hover(function() {
	$(".right-border-in-section-two").addClass("float-right")
	$(".section-column-two").css("backgroundColor", "#09ac7b")
	$(".monitor-icon-two").css("display", "block")
	$(".right-border-in-section-two").css("position", "relative")
	$(".right-border-in-section-two").css("top", "-60px")
	$(".title_of_section-two").css("marginTop", "9px")

	$(".section-column-two").css("-webkit-transition-duration", "1s")
	$(".section-column-two").css("-o-transition-duration", "1s")
	$(".section-column-two").css("-moz-transition-duration", "1s")
	$(".section-column-two").css("transition-duration", "1s")
},

	function(){
		$(".right-border-in-section-two").removeClass("float-right")
		$(".monitor-icon-two").css("display", "none")
		$(".section-column-two").css("backgroundColor", "")
		$(".right-border-in-section-two").css("top", "0px")
		$(".title_of_section-two").css("marginTop", "40px")
	}
)

$(".section-column-three").hover(function() {
	$(".right-border-in-section-three").addClass("float-right")
	$(".section-column-three").css("backgroundColor", "#09ac7b")
	$(".monitor-icon-three").css("display", "block")
	$(".right-border-in-section-three").css("position", "relative")
	$(".right-border-in-section-three").css("top", "-60px")
	$(".title_of_section-three").css("marginTop", "9px")

	$(".section-column-three").css("-webkit-transition-duration", "1s")
	$(".section-column-three").css("-o-transition-duration", "1s")
	$(".section-column-three").css("-moz-transition-duration", "1s")
	$(".section-column-three").css("transition-duration", "1s")
},

	function(){
		$(".right-border-in-section-three").removeClass("float-right")
		$(".monitor-icon-three").css("display", "none")
		$(".section-column-three").css("backgroundColor", "")
		$(".right-border-in-section-three").css("top", "0px")
		$(".title_of_section-three").css("marginTop", "40px")
	}
)

//changes placeholder when clicked
$(document).ready(function() {
	$('input,textarea').focus(function() {
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input,textarea').blur(function() {
	$(this).attr('placeholder',$(this).data('placeholder'));
	});
});

//projects page and home page (effect when hover on images)
$(".overlay").hover(function() {
	$(this).css("-ms-transform", "scale(0.9)")
	$(this).css("-webkit-transform", "scale(0.9)")
	$(this).css("-o-transform", "scale(0.9)")
	$(this).css("-moz-transform", "scale(0.9)")

	$(this).css("-webkit-transition-duration", "1s")
	$(this).css("-o-transition-duration", "1s")
	$(this).css("-moz-transition-duration", "1s")
	$(this).css("transition-duration", "1s")
},

	function() {
	$(this).css("-ms-transform", "scale(1)")
	$(this).css("-webkit-transform", "scale(1)")
	$(this).css("-o-transform", "scale(1)")
	$(this).css("-moz-transform", "scale(1)")
	$(this).css("transform", "scale(1)")

	$(this).css("-webkit-transition-duration", "1s")
	$(this).css("-o-transition-duration", "1s")
	$(this).css("-moz-transition-duration", "1s")
	$(this).css("transition-duration", "1s")
	}
)

//cleave plugin
var cleave = new Cleave('.number-phone', {
	prefix: '+0',
	blocks: [4, 4, 3, 3],
	uppercase: true
});

