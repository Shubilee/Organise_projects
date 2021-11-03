// Переменная для Бургера, блокировки скролла
let unlock = true;

// let menuBtn = document.querySelector('._menu-btn');
// let menu = document.querySelector('._menu');
// let body = document.querySelector('body');
// menuBtn.addEventListener('click', function () {
//     menuBtn.classList.toggle('_active');
//     menu.classList.toggle('_active');
//     body.classList.toggle('_active');
// })

// ФЛС
// Для блокировки сролла
/*
// Он указывается и в popup (body_lock)
ПОДКЛЮЧИТЬ bodyLock.js =======================================================================================
*/

let iconMenu = document.querySelector("._menu-btn");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector("._menu");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
	// Для закрывания меню по нажатию на пустом месте. В html дополнительно указать блок с класслм _close указать 
	// let bodyRead = document.querySelector("._close");
	// bodyRead.addEventListener("click", function (e) {
	// menu_close();
	// });
};
// Чтобы меню закрывалось при ссылках якорях 
function menu_close() {
	let iconMenu = document.querySelector("._menu-btn");
	let menuBody = document.querySelector("._menu");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
// Для работы webP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});
// _scr - для анимации
// _scr-one - чтобы элемент появился только один раз
// Для элемента блока. Например <div> указать _scr, а <p> указать настройку через миксин
// В CSS для первого случая (есть миксин) =========
//      ...
//   transform: translate(100%, 0);
//   opacity: 0;
//   transition: all 0.8s ease 0.5s;
//  &._active {
//      transform: translate(0, 0);
//      opacity: 1;
//   } }

// ПОДКЛЮЧИТЬ slideToggle.js =======================================================================================
// Также используется в форме! 

const animItems = document.querySelectorAll('._scr');

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
				if (!animItem.classList.contains('_scr-one')) {
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
	}, 0);
}