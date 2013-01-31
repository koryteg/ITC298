$(function(){
	$(".generic").bind("click", msg);
	$('.tomato').hover(changeImage, changeImageBack);
	$(".show").click(expand);
	$(".hide").click(collapse);
	$(".details").hide();
});

function msg(){
	var msgText = $(this).text();
	alert(msgText);
}

function changeImage(){
	// get the img current image src
	this.prevImage = $(this).attr("src");
	//change the img src
	$(this).attr("src", "images/rottenTomato.jpg");
}
function changeImageBack(){
	$(this).attr("src", this.prevImage);
}

function expand(){
	event.preventDefault();
	var selector = $(this).attr("href");
	$(selector).show();
}
function collapse(){
	event.preventDefault();
	var selector = $(this).attr("href");
	$(selector).hide();
}
