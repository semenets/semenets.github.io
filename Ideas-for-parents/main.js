// hide "lstep" on windows
window.onload = function() { 
	document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, '')
};

// button-effect
function slowScroll (id) {
	$('html, body').animate ({
		scrollTop:$(id).offset().top
	}, 500);
	return false;
};


// Free webinar section
$(window).resize(function() {
	if($(window).width() > 2000) {
		$(".kseniya-img").attr("src", "img/Kseniya3.png")
	}

	if($(window).width() > 1450) {
		$(".kseniya-img").attr("src", "img/Kseniya.png")
	}

	if($(window).width() < 1450) {
		$(".kseniya-img").attr("src", "img/Kseniya3.png")
	}

	if($(window).width() < 991) {
		$(".kseniya-img").attr("src", "img/Kseniya2.png")
	}
});


if($(window).width() > 2000) {
	$(".kseniya-img").attr("src", "img/Kseniya3.png")
}

if($(window).width() > 1450) {
	$(".kseniya-img").attr("src", "img/Kseniya.png")
}

if($(window).width() < 1450) {
	$(".kseniya-img").attr("src", "img/Kseniya3.png")
}

if($(window).width() < 991) {
	$(".kseniya-img").attr("src", "img/Kseniya2.png")
};

