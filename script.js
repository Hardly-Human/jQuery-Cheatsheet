// jQuery..

$(document).ready(function () {
	// add class to HTML Element.
	$("button").addClass("text-red");

	// add class to element selected by class.
	$(".well").addClass("animate__animated animate__swing");

	// add class to element selected by id.
	$("#target1").addClass("animate__animated animate__bounce");

	// change css of element
	$("#target3").css("color", "white");

	// change HTML attributes
	$("#target5").prop("disabled", true);

	// change text inside HTML elements
	$("#target6").html("<em>target6</em>");

	//remove Element
	$("#target4").remove();

	// append elements to other
	$("#target2").appendTo("#right-well");

	// Clone Element
	$("#target2").clone().appendTo("#left-well");

	// target parent element
	$("#target1").parent().css("background-color", "black");

	// target Children
	$("#right-well").children().addClass("animate__animated animate__jello");

	// target specific
	$(".target:nth-child(2)").addClass("animate__animated animate__bounce");

	// target even/odd elements
	$(".target:even").addClass("animate__animated animate__bounce");

	// modify entire page
	$("body").addClass("animate__animated animate__flip");
});
