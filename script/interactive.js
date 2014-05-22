// JavaScript Document

$(document).ready(function() {
	var $showNav = $('.toggle-nav');
	
	$showNav.click(function(event) {
    	event.preventDefault();
    	$('nav').toggleClass('active');
	});
	
	var isShowingWork = false;
	
	$('.togwork').click(function(){
		if(!isShowingWork){
			$('.work').css('display','block');
			isShowingWork = true;
		}
		else
		{
			$('.work').css('display','none');
			isShowingWork = false;
		}
		
	});
	
	var isShowingPlav = false;
	
	$('.togplav').click(function(){
		if(!isShowingPlav){
			$('.plav').css('display','block');
			isShowingPlav = true;
		}
		else
		{
			$('.plav').css('display','none');
			isShowingPlav = false;
		}
		
	});
	
	var isShowingSplash = false;
	
	$('.togsplash').click(function(){
		if(!isShowingSplash){
			$('.splash').css('display','block');
			isShowingSplash = true;
		}
		else
		{
			$('.splash').css('display','none');
			isShowingSplash = false;
		}
		
	});
	
	var isShowingAds = false;
	
	$('.togads').click(function(){
		if(!isShowingAds){
			$('.ads').css('display','block');
			isShowingAds = true;
		}
		else
		{
			$('.ads').css('display','none');
			isShowingAds = false;
		}
		
	});
	
	var isShowingGfer = false;
	
	$('.toggfer').click(function(){
		if(!isShowingGfer){
			$('.gfer').css('display','block');
			isShowingGfer = true;
		}
		else
		{
			$('.gfer').css('display','none');
			isShowingGfer = false;
		}
		
	});
	
	var isShowingAmstan = false;
	
	$('.togamstan').click(function(){
		if(!isShowingAmstan){
			$('.amstan').css('display','block');
			isShowingAmstan = true;
		}
		else
		{
			$('.amstan').css('display','none');
			isShowingAmstan = false;
		}
		
	});
	
	/*
	$('.togwork').toggle(
		function(){$('.work').css('display','block');},
		function(){$('.work').css('display','none')
	});
	*/
	
	
	
	
	//
	var current_frame, total_frames, path, length, handle, myobj;

	myobj = document.getElementById('myobj').cloneNode(true);
	
	var init = function() {
	  current_frame = 0;
	  total_frames = 60;
	  path = new Array();
	  length = new Array();
	  for(var i=0; i<11;i++){
		path[i] = document.getElementById('i'+i);
		l = path[i].getTotalLength();
		length[i] = l;
		path[i].style.strokeDasharray = l + ' ' + l; 
		path[i].style.strokeDashoffset = l;
	  }
	  handle = 0;
	  draw();
	}
	 
	 
	var draw = function() {
	   var progress = current_frame/total_frames;
	   if (progress > 1) {
		 window.cancelAnimationFrame(handle);
	   } else {
		 current_frame++;
		 for(var j=0; j<path.length;j++){
			 path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
		 }
		 handle = window.requestAnimationFrame(draw);
	   }
	};
	
	init();
	
	setInterval(init,5000);
	
	//
	
		
	
	setTimeout(function(){
		$('header h1').css('opacity',1);
		$('header').css('opacity',1);
		
		
		
	},1000);
	
	$( window ).resize(function() {
		//fix for scale on android 2.3//
		
	});
	
	
});

