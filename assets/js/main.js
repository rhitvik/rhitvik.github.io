/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-3.5em";
  }
  prevScrollpos = currentScrollPos;
}


//const ScrollMagic = require("./ScrollMagic/uncompressed/ScrollMagic");

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
// END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

// SCROLL MAGIC
const controller = new ScrollMagic.Controller();

// Scenes
let scene = new ScrollMagic.Scene({
    duration: 2400,
    triggerElement: intro,
    triggerHook: 0
})
//.addIndicators() // UNCOMMENT THIS DURING DEBUG
.setPin(intro)
.addTo(controller);

// scene 2
const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});
let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

// video Animation
let accelamount = 0.1;
let scrollpos = 0; 
let delay = 0;

scene.on('update', e =>{
    scrollpos = e.scrollPos/1000;
    //console.log(scrollpos);
})

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    //console.log(scrollpos, delay);
    video.currentTime = delay;

}, 33.3);

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 2000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);
