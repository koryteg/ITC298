/**
 * @author Kory tegman
 */

$(function(){
	$("img").click(gone);
	$("#style").toggle(style1, style2);
	$(".addLike").click(addLike);
});

function gone(){
	$(this).fadeOut();
	
}

function style1(){
	if ($("body").hasClass("style1")){
		$("body").removeClass("style1");
	}
	$("body").addClass("style2");
};

function style2(){
	if ($("body").hasClass("style2")){
		$("body").removeClass("style2");
	}
	$("body").addClass("style1");
}
//this is the code that I added as a zinger!
function addLike(){
	$(".hidden").first().removeClass("hidden");
	var hidden = $("li").hasClass("hidden");
	if (hidden == false){
		alert("that is all I care about!");
	}
}