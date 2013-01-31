$(function(){
	$(".hide").hide();
	$(".expandContract").toggle(expand, contract);
	$(".image").toggle(growPic, srinkPic);
	showStylesheet("default"); //show the default stylesheet on pageload
	$(".changeStyle").click(changeStyle);
});



function expand(){
	var id = $(this).attr("href");
	$(id).show();
	$(this).html("contract");
}

function contract(){
	var id = $(this).attr("href")
	$(id).hide();
	$(this).html("expand");
}

function growPic(){
	$(this).animate({
		width: "+=100px"
	}, 200);
}



function srinkPic(){
	$(this).animate({
		width: "-=100px"
	}, 200);
}
function showStylesheet(sheetName){
	//disable all the stylesheets wit hthe class of switchStyle
	$(".switchStyle").prop("disabled", true);
	//endable
	$("#" + sheetName).prop("disabled", false);
}
function changeStyle(){
	var sheetName = $(this).attr("rel");
	showStylesheet(sheetName);
	return false; // dont go to the link destination
}
