$(document).ready( function()	{
	$("#button1").click( function()	{
		var box = $("#box1");
		$(".box-container").prepend(box);
		
		setTimeout(function(){	box.addClass("active")	}, 20);
	})
	
	$("#button2").click( function()	{
		var box = $("#box2");
		$(".box-container").prepend(box);
		
		setTimeout(function(){	box.addClass("active")	}, 20);
	})
	
	$("#button3").click( function()	{
		var box = $("#box3");
		$(".box-container").prepend(box);
		
		setTimeout(function(){	box.addClass("active")	}, 20);
	})
	
});