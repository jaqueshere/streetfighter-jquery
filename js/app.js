$(document).ready(function() {

	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});

	$('.ryu').mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});

	$('.ryu').click(function(){
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
	});

});