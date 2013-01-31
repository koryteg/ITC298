$(function(){
	SyntaxHighlighter.all();
	$("#assignments").tabs();
	$("#assignment1, #assignment2, #assignment3").accordion({
		collapsible: true,
		heightStyle: "content"
	});
	$(".sortable").sortable();
});
