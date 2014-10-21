$(document).ready(function(){

	var slides = 0;
	var currentSlide = 0;
	//currentSlide = 17;
	
	$("article").each(function(){
		slides++;
	});
	
	slides -= 1;
	
		$("main").css("top", -currentSlide * 1080 + "px");
		$(".bar").css("width", ((currentSlide + 1) / slides) * 100 + "%");
		$(".bar .current").text(currentSlide + 1);		
		$(".bar .all").text(slides);
/*
	$(document).click(function() {
	  	if(currentSlide < slides-1)	{
		 	currentSlide++;
	  	}
	  	changeSlide();
  	});
*/
  	
  	//! Key & Mouse Input
	document.addEventListener("keydown", function(e) {
	  if (e.keyCode == 13) {
		 toggleFullScreen();
	  } else if (e.keyCode == 37 || e.keyCode == 38)	{
		 if (currentSlide != 0)	{
		 	currentSlide--;
		 }		 
		  changeSlide();
	  } else if (e.keyCode == 39 || e.keyCode == 40)	{
	  	if(currentSlide < slides)	{
		 	currentSlide++;
	  	}
	  	if(currentSlide == slides)	{
			$(".progress").css("top", 0 + "px");  	
	  	}
	  	changeSlide(); 	
	  }
	}, false);
	
	function changeSlide()	{
		$("main").css("top", -currentSlide * 1080 + "px");
		$(".bar").css("width", ((currentSlide + 1) / slides) * 100 + "%");	
		$(".bar .current").text(currentSlide + 1);		
	}
	
	function toggleFullScreen() {
	  if (!document.fullscreenElement &&	 // alternative standard method
		   !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {	 // current working methods
		 if (document.documentElement.requestFullscreen) {
		   document.documentElement.requestFullscreen();
		 } else if (document.documentElement.msRequestFullscreen) {
		   document.documentElement.msRequestFullscreen();
		 } else if (document.documentElement.mozRequestFullScreen) {
		   document.documentElement.mozRequestFullScreen();
		 } else if (document.documentElement.webkitRequestFullscreen) {
		   document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		 }
	  } else {
		 if (document.exitFullscreen) {
		   document.exitFullscreen();
		 } else if (document.msExitFullscreen) {
		   document.msExitFullscreen();
		 } else if (document.mozCancelFullScreen) {
		   document.mozCancelFullScreen();
		 } else if (document.webkitExitFullscreen) {
		   document.webkitExitFullscreen();
		 }
	  }
	}
	
	////////////////////////////////////
	////	KEY INPUT				////
	////////////////////////////////////
	
	//! Key & Mouse Input
	document.addEventListener("keydown", function(e) {
	  if (e.keyCode == 13) {
		 toggleFullScreen();
	  }
	}, false);

});