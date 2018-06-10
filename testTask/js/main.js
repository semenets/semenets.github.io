// Hide/show menu
var active = true
$(".left-menu-header-button").on("click", menuAnimation)

function menuAnimation() {
	if(active === true) {
		$(".menu").css("display", "block")
		$(".top-menu-fixed").addClass("top-menu-background")
		$(".top-menu-fixed").css("opacity", "1")
		$(".top-menu-fixed").css("transition", ".5s")
		setTimeout(function() {
			$(".menu").css("opacity", "1")
			$(".menu").css("transition", ".5s")
		}, 50)
		return active = false
	} else {
		$(".menu").css("opacity", "0")
		setTimeout(function() {
			$(".menu").css("display", "none")
		}, 500)
		return active = true
	}
}

// Changes background when scroll
$(window).scroll(function(){
	if($(this).scrollTop() > 50) {
		$(".top-menu-fixed").addClass("top-menu-background")
	}
	else {
		$(".top-menu-fixed").removeClass("top-menu-background")
	}
})

$(window).scroll(function(){
	if($(this).scrollTop() > 5) {
		$(".top-main-menu-fixed").css("paddingTop", "20px")
		$(".top-main-menu-fixed").css("transition", ".5s")
	}
	else {
		$(".top-main-menu-fixed").css("paddingTop", "30px")
		$(".top-main-menu-fixed").css("transition", ".5s")
	}
})

// Plugin "hamburgers.css"
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))
	for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);
	else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)}
var hamburgers = document.querySelectorAll(".hamburger")
if (hamburgers.length > 0) {
	forEach(hamburgers, function(hamburger) {
		hamburger.addEventListener("click", function() {
		this.classList.toggle("is-active")
		}, false)
	})
}

// Open mobile menu
if(window.matchMedia('(max-width: 991px)').matches) {
	$(".mobile-menu").addClass("col-xs-10")
	$(".mobile-menu").addClass("col-xs-offset-1")

	$("ul .title").each(function(index, value) {
	document.getElementById("mobile-top-menu").appendChild(value)
	})

	$(".menu-button").each(function(index, value) {
	document.getElementById("mobile-top-menu").appendChild(value)
	})
}

// Removed placeholder on input when clicked
$(document).ready(function () {
	$('.input-email').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','')
	})
	$('.input-email').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'))
	})
})

//Slider
$('.slider').slick({
	infinite: true,
	speed: 500,
	arrows: true,
	autoplay: true,
	prevArrow: '<img src="img/left-arrow.png" />',
	nextArrow: '<img src="img/right-arrow.png" class="arrow-right"/>',
	responsive: [
	{
		breakpoint: 800,
		settings: {
			arrows: false
		}
	}]
})

$('.slider').on('afterChange', function(event, slick, nextSlide){
	var numberOfPhotos = $('.section-photos > div').length
	for (var i = 0; i < numberOfPhotos; i++) {
		$('#user' + i + ' img').removeClass('selected')
	}
	$('#user' + nextSlide + ' img').toggleClass('selected')
})

$('[id^="user"]').click(function (e) {
	var id = parseInt(this.id.replace( /^\D+/g, ''))
	$('.slider').slick('slickGoTo', id)
});

