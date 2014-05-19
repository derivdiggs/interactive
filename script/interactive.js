// JavaScript Document

$(document).ready(function() {
	var $showNav = $('.toggle-nav');
	
	$showNav.click(function(event) {
    	event.preventDefault();
    	$('nav').toggleClass('active');
	});
		
	
		
	
	setTimeout(function(){
		$('header h1').css('opacity',1);
		$('header').css('opacity',1);
		
		
		
	},1000);
	
	$( window ).resize(function() {
		//fix for scale on android 2.3//
		
	});
});

