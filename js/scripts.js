$(document).ready(function(){
	$window = $(window);
	$scroll = $("#background");
	                 
	$(window).scroll(function() {
		var yPos = -($window.scrollTop() / 2); 
		var coords = '0 '+ yPos + 'px';
		$scroll.css({ backgroundPosition: coords });
	});
});

document.createElement("section");

$("#email_form").submit(function( event ) {
	event.preventDefault();
	var $emailAddress = $("input[name=email]").val();
	if ($emailAddress != 'myname@example.com' && $emailAddress != '') {
		$.post('../subscribe.php',$emailAddress,function(data,status) {
		    alert("Data: " + data + "\nStatus: " + status);
		});
		$( "#form_elements" ).fadeTo( "slow" , 0.0, function() {
			$( "#thank_you_text" ).fadeTo( "slow" , 1.0, function() {				
			// alert($emailAddress);
			});
		});
	}
});

$("#email").focus(function() {
	this.value='';
});

$("#submit").click(function() {
	$("#email_form").submit();
});