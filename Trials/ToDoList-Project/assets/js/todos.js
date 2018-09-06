// Add strike through and grey effect on a ToDo
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

// Click on X to delete ToDo
$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

//New ToDo
$("input[type='text']").keypress(function(e){
	if (e.which==13){
		var toDoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+toDoText+"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});