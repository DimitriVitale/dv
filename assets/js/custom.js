(function($){
   	
    // Preloader 	 
   	$(window).load(function() { 
       	$('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow'); 
        $('body').delay(350).css({'overflow':'visible'});
        $('#countdown').addClass('animated bounceInDown');  
    }); 

	$(document).ready(function() {

        // Animation scroll
		$('a[href*=#]').bind('click', function(e) {
			var anchor = $(this);

			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 500);
			e.preventDefault();
		});

        // Background slideshow
        $.backstretch([
            'assets/images/bg3.jpg', 
            'assets/images/bg2.jpg', 
            'assets/images/bg1.jpg'
        ], {duration: 3000, fade: 750});

        // Countdown
		$('#countdown').countdown('2017/01/01', function(event) {	// your date here 
        	$(this).html(event.strftime(''
            	+ '<div><div>%D</div><i>Days</i></div>' 
            	+ '<div><div>%H</div><i>Hours</i></div>'
            	+ '<div><div>%M</div><i>Minutes</i></div>'
            	+ '<div><div>%S</div><i>Seconds</i></div>'
        	));
    	});

        // Google Map 
        map = new GMaps({
            el: '#map',
            scrollwheel: false,
            lat: 50.643739,
            lng: 5.574470
        });

        map.addMarker({
            lat: 50.643739,
            lng: 5.574470,
            title: 'Dimitri Vitale',
            infoWindow: {
                content: '<p><strong>Dimitri Vitale</strong><br/> I am here</p>'
            }
        });

	});

})(jQuery);
