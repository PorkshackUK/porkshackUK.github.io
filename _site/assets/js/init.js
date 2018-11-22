// Code for Preloader
document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');

	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn',);
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    });
  });


$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
	$('.slider').slider();
	$('.sidenav').sidenav();
	$('.dropdown-trigger').dropdown({hover: true});
	$('.chips').chips();
	new WOW().init();
})(jQuery); // end of jQuery name space
