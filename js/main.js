// scroll page to dedicated location
function scrollToAnchor(location){
    $('html,body').animate({scrollTop: $(location).offset().top - 75},'slow');
}

// change navbar to white when user scrolls
$(document).ready(function () {
	var navOffset = 50;
	$(window).scroll(function() {
		var scrollpos = $(window).scrollTop();
		if (scrollpos > navOffset){
			$("nav").addClass("fixed");
		}else{
			$("nav").removeClass("fixed");
		}
	})	
})
