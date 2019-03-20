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

//for IE (on mobile)
if($(window).width() < 767) {
	$(".img-overlay").width(windowWidth)
	$(".img-overlay-white").width(windowWidth)
};

