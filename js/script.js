
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// Animenu
// -------
// https://github.com/catalinred/animenu
// https://twitter.com/catalinred

// ES6
// a.k.a unicorns everywhere 🙂
(() => {
	let $ = el => document.querySelector(el);
	
	$(".animenu__btn").addEventListener("click", function(){
	  this.classList.toggle("animenu__btn--active")
	  $(".header__list").classList.toggle("header__list--active")
	});
 })()
 
 // ---
 
 // IE 10
 // https://caniuse.com/#search=classlist
 
 // (function(){
 //   var $ = function(el) { 
 //     return document.querySelector(el); 
 //   }
	
 //   $('.animenu__btn').addEventListener('click', function() {
 //     this.classList.toggle("animenu__btn--active")
 //     $('.animenu__nav').classList.toggle("animenu__nav--active")
 //   });
 // })();
 
 // ---
 
 // IE9 / IE8
 // https://caniuse.com/#search=querySelector
 
 // (function(){
 //   var animenuToggle = document.querySelector('.animenu__btn'),
 //       animenuNav    = document.querySelector('.animenu__nav'),
 //       hasClass = function( elem, className ) {
 //         return new RegExp( ' ' + className + ' ' ).test( ' ' + elem.className + ' ' );
 //       },
 //       toggleClass = function( elem, className ) {
 //         var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
 //         if( hasClass(elem, className ) ) {
 //           while( newClass.indexOf( ' ' + className + ' ' ) >= 0 ) {
 //             newClass = newClass.replace( ' ' + className + ' ' , ' ' );
 //           }
 //           elem.className = newClass.replace( /^\s+|\s+$/g, '' );
 //         } else {
 //           elem.className += ' ' + className;
 //         }
 //       },           
 //       animenuToggleNav =  function (){        
 //         toggleClass(animenuToggle, "animenu__btn--active");
 //         toggleClass(animenuNav, "animenu__nav--active");        
 //       }
 
 //   if (!animenuToggle.addEventListener) {
 //     animenuToggle.attachEvent("onclick", animenuToggleNav);
 //   }
 //   else {
 //     animenuToggle.addEventListener('click', animenuToggleNav);
 //   }
 // })()