// $(function() {
//     var bg = $('#header_image');
//     var backgrounds = ['url(./header_image1.jpg)','url(./header_image2.jpg)'];
//     var current = 0;

// function nextBackground() {
//   bg.css(
//    'background-image',
//     backgrounds[current = ++current % backgrounds.length]
//  );

//  setTimeout(nextBackground, 5000);
//  }
//  setTimeout(nextBackground, 5000);
//    bg.css('background-image', backgrounds[0]);
//  });

function scrollToAnchor(def){
    var location = $(def);
    $('html,body').animate({scrollTop: location.offset().top},'slow');
}
