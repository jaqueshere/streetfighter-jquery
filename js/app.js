$(document).ready(function() {

	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});

	$('.ryu').mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});

	$('.ryu').mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left','600px');
			});
	});

	$('.ryu').mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$('body').keydown(function(event){
		var letter = event.which;
		if(letter == 88) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	});

	$('body').keyup(function(event){
		var letter = event.which;
		if(letter == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();	
		}	
	})

});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};