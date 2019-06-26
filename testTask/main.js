//determine the maximum height of the columns
var quantity = $('.product').length
var arrProductDescription = []
var arrGoods = []

for(var i = 1; i <= quantity; i++) {
	var currentHeight = document.getElementById("product-description" + i).offsetHeight;
	arrProductDescription.push(currentHeight)

	var currentHeightGoods = document.getElementById("goods" + i).offsetHeight;
	arrGoods.push(currentHeightGoods)
}

for (var i = 0; i < arrProductDescription.length; i++) {
	if(arrProductDescription[i] > arrProductDescription[0]) arrProductDescription[0] = arrProductDescription[i]
	if(arrGoods[i] > arrGoods[0]) arrGoods[0] = arrGoods[i]
}

var maxHeight = arrProductDescription[0]
var maxHeightGoods = arrGoods[0]

$(".product-description").css("height", maxHeight + "px")
$(".goods").css("height", maxHeightGoods + 10 + "px")


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

