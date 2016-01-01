function scrollToAnchor(def){
    var location = $(def);
    $('html,body').animate({scrollTop: location.offset().top},'slow');
}


$(document).ready(function () {
	var navOffset = 0;
	$(window).scroll(function() {
		var scrollpos = $(window).scrollTop();
		if (scrollpos > navOffset){
			$("nav").addClass("fixed");
		}else{
			$("nav").removeClass("fixed");
		}
	})
	
})
