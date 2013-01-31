$(function(){
	// $("#main_menu li").hover(ddSlideDown, ddSlideUp)
	$("#main_menu li").hoverIntent({
		over:ddSlideDown,
		out:ddSlideUp,
		interval: 100,
		timeout:100
	});
});

function ddSlideDown() {
	console.log("ddSlideDown")
	$(this).find(".sub_menu").animate({
		opacity: 1.0,
		height:"toggle"
	}, 300);
}
function ddSlideUp() {
	console.log("ddSlideUp")
	$(this).find(".sub_menu").animate({
		opacity: 0,
		height: "toggle"
	}, 500);
}