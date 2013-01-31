$(function(){
	var firstNames = [
	"sally",
	"Kory",
	"bobby",
	"chicken"
	];
	var lastNames = [
	"johnson",
	"freeman",
	"columbus",
	"fucker"
	];
	$("#firstName").autocomplete({
		source: firstNames
	});
	$("#lastName").autocomplete({
		source: lastNames
	});
	$("#birthDate").datepicker();
	$("#dialog").dialog({ 
		autoOpen: false,
		buttons: {
			"Ok":closeDialog
		}
	});
	$("#imConfused").click(openDialog);
	
	
	$('img').hover(changeImage, changeImageBack);
	
});
function openDialog(){
	$("#dialog").dialog("open");
}
function closeDialog(){
	$("#dialog").dialog("close");
}
function changeImage(){
	$(this).attr("src", "images/rottenTomato.jpg");
};
function changeImageBack(){
	$(this).attr("src", "images/Tomato.jpg");
};