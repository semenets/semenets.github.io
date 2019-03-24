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


//home page "see all" button
$(".see-all").on("click", function() {
	$(".hidden-xs").removeClass("hidden-xs")
	$(this).remove()
});


//mobile menu
(function() {
	var xsMenu = document.getElementById("mobile-menu-ul")
	var xsMenuLinks = document.getElementsByClassName("mobile-menu-links")

	$(".item-red-menu").each(function() {
		var i = document.createElement("i")
		i.setAttribute("class", "fas fa-angle-right fas-fa-angle-right")
		var items = $(this).text()
		var a = document.createElement("a")
		var content = document.createTextNode(items)
		a.setAttribute("class", "mobile-menu-links")
		a.appendChild(content)
		a.appendChild(i)
		xsMenu.appendChild(a)
});

for(var i = 0; i <= xsMenuLinks.length; i++) {
	var itemMenu = xsMenuLinks[i]
	if (i === 0) itemMenu.setAttribute("href", "news.html")
	if (i === 1) itemMenu.setAttribute("href", "label.html")
	if (i === 2) itemMenu.setAttribute("href", "user_profile.html")
	if (i === 3) itemMenu.setAttribute("href", "leagues.html")
	if (i === 4) itemMenu.setAttribute("href", "venue.html")
	if (i === 5) itemMenu.setAttribute("href", "trades.html")
}

	$( ".mobile-menu-links" ).wrap(function() {
		return "<li></li>"
	})
})();


//mobile menu button
var button = 0
var displayNone = new Array ('active-mobile-menu', '')
var mobileMenuButton = new Array ('mobile-menu-button', 'mobile-menu-button-position')

$("#mobile-menu-button").click(function() {
	button = button === 0 ? 1 : 0
	$(this).attr('id', mobileMenuButton[button])
	$("#mobile-menu").toggleClass("active-mobile-menu")
});
