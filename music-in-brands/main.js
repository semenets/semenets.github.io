var playListVisible = 0;
var play = 0;
var arrows = new Array ('img/arrow-bottom.svg', 'img/arrow-top.svg');
var buttonVisible = new Array ('visibility-hidden', '');
var audio = new Audio('twinkle-twinkle-mozart.mp3');

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

$(".channel-img").click(function(e) {
	var id = e.target.id
	$(".path" + id).css("fill", "#FFC811")
})

