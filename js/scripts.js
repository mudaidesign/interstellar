$(document).ready(function(){
	var mq = window.matchMedia('(min-width: 600px)');
	$window = $(window);
	$scroll = $("#background");

	$(window).scroll(function() {
		if (mq.matches) {
			var yPos = -($window.scrollTop() / 2); 
			var coords = '0 '+ yPos + 'px';
			$scroll.css({ backgroundPosition: coords });
		}
	});
});

document.createElement("section");

$("#email_form").submit(function( event ) {
	event.preventDefault();
	var $emailAddress = $("input[name=email]").val();

	if ($emailAddress != 'myname@example.com' && $emailAddress != '') {
		$.ajax({
		    url: '//xcor.us9.list-manage.com/subscribe/post?u=8fcc4d89f8aaa026be4e6f152&amp;id=0b59215714',
		    data: {EMAIL: $emailAddress, u: '8fcc4d89f8aaa026be4e6f152', id: '0b59215714'},
		    type: 'POST',
		    dataType: 'jsonp',
		    success: function() { },
		    error: function() { }
		});
		$( "#form_elements" ).fadeTo( "slow" , 0.0, function() {
			$( "#thank_you_text" ).fadeTo( "slow" , 1.0, function() {				
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