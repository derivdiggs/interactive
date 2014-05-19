// JavaScript Document
$(document).ready(function() {
	//var $element = $("#FlashID");
	
	var objectspanmakeinnerhtml = "";
	$(".refresh").click(function(){
		
		var mov = $(this).data('mov');
      	//$('.result').append(mov);
		//$movie = $('#movie' + mov);
		var movie = "movie"+mov;
		
		
		objectspanmakeinnerhtml = document.getElementById(movie).innerHTML;
		document.getElementById(movie).innerHTML = "";
		document.getElementById(movie).innerHTML = objectspanmakeinnerhtml;
		/*
		objectspanmakeinnerhtml = document.getElementById("movie1").innerHTML;
		document.getElementById("movie1").innerHTML = "";
		document.getElementById("movie1").innerHTML = objectspanmakeinnerhtml;
		*/
		
	});
	
});