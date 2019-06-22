//determine the maximum height of the columns
var quantity = $('.product').length
var arr = []

for(var i = 1; i <= quantity; i++) {
	var currentHeight = document.getElementById("product-description" + i).offsetHeight;
	arr.push(currentHeight)
}

for (var i = 0; i < arr.length; i++) {
	if(arr[i] > arr[0]) arr[0] = arr[i]
}

var maxHeight = arr[0]
$(".product-description").css("height", maxHeight + "px")


//change value in input
$(".button-ordering-plus").click(numberPlus)
function numberPlus(event) {
	var idButton = parseInt(event.target.id)
	var input = $("#" + idButton + "-input-ordering")
	var value = parseInt(input.val())
	input.val((value + 1) + " шт.")
}

$(".button-ordering-minus").click(numberMinus)
function numberMinus(event) {
	var idButton = parseInt(event.target.id)
	var input = $("#" + idButton + "-input-ordering")
	var value = parseInt(input.val())
	input.val((value - 1) + " шт.")
	if(value < 1) input.val(0 + " шт.")
}

//jquery effect when page has been loaded
$("body").css("display", "none")
$(document).ready(function(){
	$('body').fadeIn(1000);
});
