$(document).ready(function(){
   $window = $(window);
 
   $("#background").each(function(){
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
        var coords = '0% '+ yPos + 'px';
        $scroll.css({ backgroundPosition: coords });    
      });
   });
});

document.createElement("section");

$( "#submit" ).click(function() {
  $( "#email_entry" ).fadeTo( "slow" , 0.0, function() {
	  $( "#thank_you_text" ).fadeTo( "slow" , 1.0, function() {
		var $emailAddress = $("input[name=email]").val();
		// alert($emailAddress);
	  });
  });
});