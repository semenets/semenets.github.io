//footer menu
(function() {
	var xsMenu = document.getElementById("footer-menu-ul");
	var xsMenuLinks = document.getElementsByClassName("footer-menu-links")

	$(".item-menu").each(function() {
		var items = $(this).text()
		var a = document.createElement("a")
		var content = document.createTextNode(items)
		a.setAttribute("class", "footer-menu-links")
		a.appendChild(content)
		xsMenu.appendChild(a)
});

for(var i = 0; i <= xsMenuLinks.length; i++) {
	var itemMenu = xsMenuLinks[i];
	if (i === 0) itemMenu.setAttribute("href", "#")
	if (i === 1) itemMenu.setAttribute("href", "##")
	if (i === 2) itemMenu.setAttribute("href", "###")
	if (i === 3) itemMenu.setAttribute("href", "####")
}

	$( ".footer-menu-links" ).wrap(function() {
		return "<li></li>"
	})
})();


//mobile menu button
var button = 0;
var displayNone = new Array ('display-none', '')
var mobileMenuButton = new Array ('mobile-menu-button', 'mobile-menu-button-position')


$("#mobile-menu-button").click(function() {
	button = button === 0 ? 1 : 0
	$(this).attr('id', mobileMenuButton[button])
	$("#left-menu").toggleClass("left-menu-active")
});


//right section and menu
var windowWidth = $(window).width()
var rightSectionWidth = windowWidth - 288
var rightSectionHeight = $("#right-section").height()
var mainBackgroundHeight = $(".main-background").height()
$("#right-section").width(rightSectionWidth)
var sectionLastActivity = $(".section-last-activity").height()

$(window).resize(function() {
	var windowWidth = $(window).width();
	var rightSectionWidth = windowWidth - 288
	$("#right-section").width(rightSectionWidth)

	if($(window).width() < 767) {
		$(".img-overlay").width(windowWidth)
		$(".img-overlay-white").width(windowWidth)
	}
});

$(".img-overlay").height(rightSectionHeight - 30)

//for IE (on mobile)
if($(window).width() < 767) {
	$(".img-overlay").width(windowWidth)
	$(".img-overlay-white").width(windowWidth)
};

//artist page
$(".activity-xs").on("click", function() {
	$(".about-artist-section").addClass("xs-display-none")
	$(".contract-button").addClass("xs-display-none")
	$(".section-last-activity").removeClass("xs-display-none")
	$(".artist-xs").removeClass("xs-border-bottom")
	$(".activity-xs").addClass("xs-border-bottom")

	if($(window).width() < 767 && $(window).width() > 560) {
		$(".img-overlay-artist").height(rightSectionHeight + 400)
	}
})

$(".artist-xs").on("click", function() {
	$(".about-artist-section").removeClass("xs-display-none")
	$(".contract-button").removeClass("xs-display-none")
	$(".section-last-activity").addClass("xs-display-none")
	$(".artist-xs").addClass("xs-border-bottom")
	$(".activity-xs").removeClass("xs-border-bottom")

	if($(window).width() < 767 && $(window).width() > 560) {
		$(".img-overlay-artist").height(rightSectionHeight)
	}
});

if($(window).width() < 1250 && $(window).width() > 767) {
	$(".img-overlay-artist").height(rightSectionHeight + 300)
}


//trades page
if($(window).width() < 767) {
	$(".xs-offers").on("click", function() {
		$(".offers").removeClass("xs-display-none")
		$(".make-and-offer-block").addClass("xs-display-none")
		$(".height").css("height", "auto")
		$(".make").removeClass("border-bottom-trades")
		$(".xs-offers").addClass("border-bottom-trades")
	})

	$(".make").on("click", function() {
		$(".offers").addClass("xs-display-none")
		$(".make-and-offer-block").removeClass("xs-display-none")
		$(".height").css("height", "none")
		$("#left-menu").css("height", "auto")
		$(".make").addClass("border-bottom-trades")
		$(".xs-offers").removeClass("border-bottom-trades")
	})
};

if($(window).width() < 560) {
	$(".xs-offers").on("click", function() {
		$("#left-menu").height(740)
	})

	$(".make").on("click", function() {
		$("#left-menu").height(rightSectionHeight)
	})
};

//leagues page
$("#invitations").on("click", function() {
	$("#league-section2").removeClass("xs-league-display-none")
	$("#league-section1").addClass("xs-league-display-none")
	$("#league-section3").addClass("xs-league-display-none")

	$("#leagues").removeClass("xs-border-bottom-leagues")
	$("#invitations").addClass("xs-border-bottom-leagues")
	$("#create").removeClass("xs-border-bottom-leagues")
})

$("#create").on("click", function() {
	$("#league-section2").addClass("xs-league-display-none")
	$("#league-section1").addClass("xs-league-display-none")
	$("#league-section3").removeClass("xs-league-display-none")

	$("#leagues").removeClass("xs-border-bottom-leagues")
	$("#invitations").removeClass("xs-border-bottom-leagues")
	$("#create").addClass("xs-border-bottom-leagues")
})

$("#leagues").on("click", function() {
	$("#league-section2").addClass("xs-league-display-none")
	$("#league-section1").removeClass("xs-league-display-none")
	$("#league-section3").addClass("xs-league-display-none")

	$("#leagues").addClass("xs-border-bottom-leagues")
	$("#invitations").removeClass("xs-border-bottom-leagues")
	$("#create").removeClass("xs-border-bottom-leagues")
});
