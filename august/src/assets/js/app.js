$('.responsive').slick({
	dots: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [

	{
		breakpoint: 1440,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: false,
			dots: true
		}},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: false,
				dots: true
			}
		},

		{
			breakpoint: 640,
			settings: "unslick"
			dots: true
		}

		]
	});



// This script reload page and turn on  slick after unslick
// $(window).on('resize', function(){
// 	$(window).resize(function() { 
// 		location.reload();
// 	});

// 	var width = $(window).width();
// 	if(width > 640) {
// 		$('.responsive').slick({
// 			dots: true,
// 			infinite: true,
// 			slidesToShow: 3,
// 			slidesToScroll: 3,
// 			responsive: [

// 			{
// 				breakpoint: 1440,
// 				settings: {
// 					slidesToShow: 3,
// 					slidesToScroll: 3,
// 					infinite: false,
// 					dots: true
// 				}},
// 				{
// 					breakpoint: 1024,
// 					settings: {
// 						slidesToShow: 3,
// 						slidesToScroll: 3,
// 						infinite: false,
// 						dots: true
// 					}
// 				},

// 				{
// 					breakpoint: 640,
// 					settings: "unslick"
// 				}

// 				]
// 			});
// 	}

// });

// $(window).resize(function() {
//  var windowWidth = (window).width();
  
//  if($(window).width()>640)
//     location.reload();//reload current page
// });


// jQuery(document).ready(function($) {
// setTimeout(function() {
// $('.responsive').responsive("updateSliderSize", true);
// }, 10);
// });

