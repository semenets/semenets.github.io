var playListVisible = 0;
var play = 0;
var arrows = new Array ('img/arrow-bottom.svg', 'img/arrow-top.svg');
var mobileArrows = new Array ('img/arrow-top.svg', 'img/arrow-bottom.svg');
var buttonVisible = new Array ('visibility-hidden', '');
var audio = new Audio('twinkle-twinkle-mozart.mp3');
var rowsChannels = $('.channels4').length;
var heightScreen = $(window).height();
var widthScreen = $(window).width();

$('.arrow-button').click(function() {
	playListVisible = playListVisible === 0 ? 1 : 0;
	$('.play-list').slideToggle('slow');
	$('#arrow-img').attr('src', arrows[playListVisible]);
	$('#return-button').attr('class', buttonVisible[playListVisible]);
});

$(".play-button").click(function() {
	play = play === 0 ? 1 : 0;

	if(play === 1) {
		audio.play();
		$(".play-img").attr('src', 'img/pause.svg');
	} else {
		audio.pause();
		$(".play-img").attr('src', 'img/play.svg');
	}
});

$(".playlist-mobile-button").click(function() {
	playListVisible = playListVisible === 0 ? 1 : 0;
	$('#mobile-arrow').attr('src', mobileArrows[playListVisible]);
	$('.play-list').slideToggle('slow');
});

$(".channel-img").click(function(e) {
	var id = e.target.id
	$(".path" + id).css("fill", "#FFC811")
});

if(rowsChannels === 1 || rowsChannels === 2) {
	$(".bottom-background-img").addClass("height")
} else {
	$(".bottom-background-img").addClass("min-height")
};

// if (heightScreen >= 600 && widthScreen === 800) {
// 	$(".bottom-background-img").removeClass("height")
// 	$(".bottom-background-img").addClass("min-height")
// };

// console.log(heightScreen, widthScreen)
