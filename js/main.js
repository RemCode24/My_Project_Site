$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Waypoints
	$('.work').waypoint(function() {
		$('.work').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});
	$('.download').waypoint(function() {
		$('.download .btn').addClass('animated tada');
	}, {
		offset: '75%'
	});

	// Fancybox
	$('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});
	const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const rightMenu = document.querySelector('.right-menu');

menuToggleBtn.addEventListener('mouseover', () => {
  rightMenu.classList.add('show');
});

rightMenu.addEventListener('mouseleave', () => {
  rightMenu.classList.remove('show');
});
var registrationButton = document.querySelector('.registration-button');
var registrationMenu = document.querySelector('.registration-menu');

registrationButton.addEventListener('mouseover', function() {
  registrationMenu.classList.add('show-menu');
});

registrationMenu.addEventListener('mouseleave', function() {
  setTimeout(function() {
	registrationMenu.classList.remove('show-menu');
  }, 2000); // Hide the menu after 2 seconds
});

registrationMenu.addEventListener('click', function(event) {
  if (event.target.textContent === 'Register') {
	// Show the registration form
	showRegistrationForm();
  } else if (event.target.textContent === 'Login') {
	// Show the login form
	showLoginForm();
  }
});

function showRegistrationForm() {
  // Code to show the registration form
  console.log('Registration form shown');
}

function showLoginForm() {
  // Code to show the login form
  console.log('Login form shown');
}
	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
	
});
// Получаем элемент аудио-элемента и кнопку перекения музыки
var audio = document.getElementById("music");
var playButton = document.getElementById("play-pause-button");

// Добавляем обработчик события на кнопку переключения музыки
playPause.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Обработчик событи для сохранения состояния плеера при переключении страницы
window.addEventListener("beforeunload", function() {
  sessionStorage.setItem("musicPosition", audio.currentTime);
});

// Восавливаем позицию воспроизведения загрузке страницы (если она была сохранена)
window.addEventListener("load", function() {
  var savedTime = sessionStorage.getItem("music");
  if (savedTime) {
    audio.currentTime = savedTime;
    audio.play();
  }
})