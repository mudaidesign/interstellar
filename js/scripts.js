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

function clear(obj)
    {
	    var clear = true;

    	alert('hi');
        if(clear)
        {
            obj.value = '';
            clear = false;
        }
    }