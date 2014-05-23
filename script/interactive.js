// JavaScript Document

$(document).ready(function() {
	var $showNav = $('.toggle-nav');
	
	$showNav.click(function(event) {
    	event.preventDefault();
    	$('nav').toggleClass('active');
	});
	
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
		var portItem = "#item"+itemNum;
		var $portSelector = $(portItem);
		
		if($portSelector.css('display')==='none'){
			$portSelector.css('display','block');
			if(itemShowing != portItem){
				$(itemShowing).css('display','none');
			}
		}
		else
		{
			$portSelector.css('display','none');
		}
		itemShowing = portItem;		
	})
	
	
	
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
		
	
	setTimeout(function(){
		$('header h1').css('opacity',1);
		$('header').css('opacity',1);
	},1000);
	
	$( window ).resize(function() {
		//fix for scale on android 2.3//
		
	});
});

