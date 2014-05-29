// JavaScript Document

$(document).ready(function() {
	var $showNav = $('.toggle-nav');
	var debug_mode = true;
	
	$showNav.click(function(event) {
    	event.preventDefault();
    	$('nav').toggleClass('active');
	});
	
	/*
	*** test for touch screen
	*/
	
	var isTouch;
	if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    	isTouch = true;
    }
	else
	{
		isTouch = false;
	}
	
	var hasFlash = false;
	try {
	  var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
	  if(fo) hasFlash = true;
	}catch(e){
	if(navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) 
		hasFlash = true;
	}
	/*
	*** add information to #holder in Debug Mode
	*/
	
	if(debug_mode){
		$('#holder').append('is touch: ' + isTouch);
		$('#holder').append('<br/>has flash: ' + hasFlash);
	}
	/*
	*** show flash portfolio if browser is flash enabled otherwise alternate content
	*/
	if(hasFlash) {
		$('.portfolioholder').css('display','inline');
	}
	else
	{
		$('.noflash-portfolioholder').css('display','inline');
	}
	
	
	
	/*
	*** handle refreshing Flash Movies
	*/
	var objectspanmakeinnerhtml = "";
	$(".refresh").click(function(){
		var mov = $(this).data('mov');
		var movie = "movie"+mov;
		objectspanmakeinnerhtml = document.getElementById(movie).innerHTML;
		document.getElementById(movie).innerHTML = "";
		document.getElementById(movie).innerHTML = objectspanmakeinnerhtml;
	});
	
	/*
	*** Togal Portfolio Accordian
	*/
	
	var itemShowing;
	$('.toggle').click(function(){
		var itemNum = $(this).data('item');
		$('#arrow'+itemNum).css({
			'background-position':'-20px',
			'margin-left':'15px',
			'margin-top':'0px'});
		
		var portItem = "#item"+itemNum;
		var $portSelector = $(portItem);
		
		if($portSelector.css('display')==='none'){
			$portSelector.css('display','block');
			if(itemShowing != portItem && typeof itemShowing != 'undefined'){
				$(itemShowing).css('display','none');
				$('#arrow'+lastItemNum).css({
				'background-position':'0px',
				'margin-left':'20px',
				'margin-top':'0px'});
			}
		}
		else
		{	
			$('#arrow'+itemNum).css({
				'background-position':'0px',
				'margin-left':'20px',
				'margin-top':'0px'});
			$portSelector.css('display','none');
		}
		itemShowing = portItem;
		lastItemNum = itemNum;
	});
	
	/*
	*** Animate 'interactive' SVG in header
	*/
	
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
	
	/*
	*** blur and unblur portfolio menu description text if not touch screen
	*/
	if(!isTouch){
		$('.toggle').hover(
			function() { 
				$(this).find('span').css({'text-shadow':'0 0 5px rgba(255,255,255,0)','color':'#fff'}); 
			},
			function() {
				$(this).find('span').css({'text-shadow':'0 0 5px rgba(255,255,255,.5)','color':'transparent'});
			}
		);
	};
	
	
	setTimeout(function(){
		$('header h1').css('opacity',1);
		$('header').css('opacity',1);
	},1000);
	
	$( window ).resize(function() {
		//fix for scale on android 2.3//
		
	});
});

