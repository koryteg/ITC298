$(function(){
	$(".hide").hide();
	$(".expandContract").toggle(expand, contract);
	showStylesheet("style1"); //show the default stylesheet on pageload
	$(".changeStyle").click(changeStyle);
});

function expand(){
	var id = $(this).attr("href");
	$(id).show("slow").animate({
		left: "+=400px",
		top: "0px"
	}, {queue: false, duration: "slow"});
	$(this).html("hide info");
}

function contract(){
	var id = $(this).attr("href")
	$(id).hide("slow").animate({
		left: "-=400px"
	}, {queue: false, duration: "slow"});
	$(this).html("more about this");
}

function showStylesheet(sheetName){
	//disable all the stylesheets with the class of switchStyle
	$(".switchStyle").prop("disabled", true);
	//endable
	$("#" + sheetName).prop("disabled", false);
}
function changeStyle(){
	var sheetName = $(this).attr("rel");
	showStylesheet(sheetName);
	return false; // dont go to the link destination
}