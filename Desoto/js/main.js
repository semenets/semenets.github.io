$(function(){
	$('#number').usPhoneFormat({
		format: '(xxx) xxx-xxxx'
	});
	$('#number2').usPhoneFormat({
		format: '(xxx) xxx-xxxx'
	});
});

// $(document).ready(function() {
// 	$("body").children().each(function() {
// 		$(this).html($(this).html().replace(/&#8232;/g," "));
// 	});
// });

window.onload = function() { document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ''); }