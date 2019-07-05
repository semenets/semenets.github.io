$(function(){
	$('#number').usPhoneFormat({
		format: '(xxx) xxx-xxxx'
	});
	$('#number2').usPhoneFormat({
		format: '(xxx) xxx-xxxx'
	});
});

window.onload = function() { 
	document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, '')
};
