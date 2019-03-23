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
var leftMenu = new Array ('left-menu-display-none', 'left-menu')

$("#mobile-menu-button").click(function() {
	button = button === 0 ? 1 : 0
	$('#mobile-menu').attr('class', displayNone[button])
	$(this).attr('id', mobileMenuButton[button])
	$('#left-menu').attr('class', leftMenu[button]);
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

if($(window).width() < 767) {
	$("#left-menu").height(mainBackgroundHeight)
};

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
})

$(".artist-xs").on("click", function() {
	$(".about-artist-section").removeClass("xs-display-none")
	$(".contract-button").removeClass("xs-display-none")
	$(".section-last-activity").addClass("xs-display-none")
	$(".artist-xs").addClass("xs-border-bottom")
	$(".activity-xs").removeClass("xs-border-bottom")
});


//trades page
if($(window).width() < 767) {
	$(".xs-offers").on("click", function() {
		$(".offers").removeClass("xs-display-none")
		$(".make-and-offer-block").addClass("xs-display-none")
		$(".height").css("height", "auto")
		$(".make").removeClass("border-bottom-trades")
		$(".xs-offers").addClass("border-bottom-trades")
		$("#left-menu").height(740)
	})

	$(".make").on("click", function() {
		$(".offers").addClass("xs-display-none")
		$(".make-and-offer-block").removeClass("xs-display-none")
		$(".height").css("height", "none")
		$("#left-menu").css("height", "auto")
		$(".make").addClass("border-bottom-trades")
		$(".xs-offers").removeClass("border-bottom-trades")
		$("#left-menu").height(rightSectionHeight)
	})
};

//leagues page