// Hide/show menu
var active = true
$(".left-menu-header-button").on("click", actives)

function actives() {
	if(active === true) {
		$(".menu").css("opacity", "1")
		$(".menu").css("transition", ".5s")
		return active = false
	} else {
			$(".menu").css("opacity", "0")
			$(".menu").css("transition", ".5s")
			return active = true
	}
}

// Changes background when scroll
$(window).scroll(function(){
	if($(this).scrollTop()>50) {
		$(".top-menu-fixed").addClass("top-menu-background")
	}
	else {
		$(".top-menu-fixed").removeClass("top-menu-background")
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
	});
}

// Open mobile menu
if(window.matchMedia('(max-width: 768px)').matches) {
	$(".mobile-menu").addClass("col-xs-10")
	$(".mobile-menu").addClass("col-xs-offset-1")
}