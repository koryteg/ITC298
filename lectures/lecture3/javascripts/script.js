/**
 * @author Kory tegman
 */

var counter = 0;

$(function(){
	$(".stuff").click(doStuff);
	$(".hideJunk").toggle(hideJunk, showJunk);
	$("#style").toggle(style1, style2);
});

function doStuff(){
	$("h1").text("Fantastic Sweet lecture3 site!");
	counter++;
	var input = $(".text").val();
	$(".stuffToHide").append("<li>" + counter + ". " + input + "</li>")
}

function hideJunk(){
	$(".stuffToHide").hide();
	$(".hideJunk").html("show");
}
function showJunk(){
	$(".stuffToHide").show();
	$(".hideJunk").html("hide");
	
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