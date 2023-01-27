// $(document).ready(function(){
// 	$('#nav-icon3').click(function(){
// 		$(this).toggleClass('open');
// 		$("#nav-icon3").addClass("closed");
// 		$("main").toggleClass("open-nav");
// 	});
// });

$(document).ready(function(){
	$("#nav-icon3").click(function(){
		$(".nav-text-con").animate({
		'opacity' : '1',
		'margin-top' : "0%"
		},600);
		$("#nav-icon3").toggleClass('open');
		$("main").toggleClass("open-nav");
	});

	$(".overlay-btn").click(function(){
		$(".nav-text-con").animate({
		'margin-top' : "-100vh",
		'opacity' : '0'
		},600);
		$("main").removeClass("open-nav");
		$("#nav-icon3").removeClass("open");
	});

	$(".nav-link").click(function(){
		$(".nav-text-con").animate({
		'margin-top' : "-100vh",
		'opacity' : '0'
		},600);
		$("main").removeClass("open-nav");
		$("#nav-icon3").removeClass("open");
	});
});

// -----------------------------------------------------

$(window).scroll(function(){
  if ($(this).scrollTop() > 30)
  	$("nav").addClass("scroll-down");
  else
    $("nav").removeClass("scroll-down");
});

// -----------------------------------------------------

// var scrollableElement = document.body

// scrollableElement.addEventListener('wheel', checkScrollDirection);

// function checkScrollDirection(event) {
//   if (checkScrollDirectionIsUp(event)) {
//     $("nav").addClass("up");
//     $("nav").removeClass("down");
//   } else {
//     $("nav").addClass("down");
//      $("nav").removeClass("up");
//   }
// }

// function checkScrollDirectionIsUp(event) {
//   if (event.wheelDelta) {
//     return event.wheelDelta > 0;
//   }
//   return event.deltaY < 0;
// }

// -----------------------------------------------------

