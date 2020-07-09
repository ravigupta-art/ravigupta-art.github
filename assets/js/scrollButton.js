var screenHeight = $(window).height()
		$(document).ready(function() {
		if( screenHeight <= 800 ) {	//if starts
		$("a.scrollClick").click(function() {
    $('html,body').animate({
        scrollTop: $("#intro").offset().top - 40},
        'slow');
});// 
		}//if ends
		else { //else starts	
		$("a.scrollClick").click(function() {
    $('html,body').animate({
        scrollTop: $("#intro").offset().top - 20},
        'slow');
});// 
		}//else ends
		});
	
	
