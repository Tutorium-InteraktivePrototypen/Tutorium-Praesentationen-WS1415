$(document).ready( function()	{
	$("#button1").click( function()	{
		var box1 = $("#box1");
		$(".box-container").prepend(box1);
		setTimeout(function(){	box1.toggleClass("active")	}, 5);
	})
	
	
	$("#button2").click( function()	{
		var box2 = $("#box2");
		$(".box-container").prepend(box2);
		setTimeout(function(){	box2.toggleClass("active")	}, 5);
			
	})
	
	$("#button3").click( function()	{
		var box3 = $("#box3");
		$(".box-container").prepend(box3);
		setTimeout(function(){	box3.toggleClass("active")	}, 5);
	})
	
});