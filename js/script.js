//             BURGER
"use strict";

$(document).ready(function() {
   $('.header__burger').click(function() {                                           //класс бургера
      $('.header__burger, .nav__list').toggleClass('active');                   //класс меню
      $('body').toggleClass('_lock');
   });
});


const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.nav__list');
const catalogButton = document.getElementById('catalog-btn');
const catalogMenu = document.getElementById('catalog-menu');
const searchInput = document.getElementById('search-input');
const catalogMenuInHeader = document.getElementById('catalog-menu-in-header');
const mediaCatalogMenu = document.getElementById('media-catalog-menu');
const backBtn1 = document.getElementById('back-btn-1');
const backBtn2 = document.getElementById('back-btn-2');
const gelPolishOpener = document.getElementById('gel-polish-opener');
const mediaCatalogSubmenu = document.getElementById('media-catalog-submenu');
const likesCounter = document.querySelector('.likes-counter');
const productsCounter = document.querySelector('.products-counter');
const productLike = document.querySelectorAll('.product__like');
const productInBasket = document.querySelectorAll('.product__in-basket');
const filterBtnPopular = document.querySelector('.popular');
const filterBtnNew = document.querySelector('.new');
const informationTitle = document.querySelector('.information__title');
const productName = document.querySelector('.product-name');
const productBlockColorSelect = document.querySelector('.product-block-color__select');
const productBlockColorButton = document.querySelector('.product-block-color__button');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const counter = document.getElementById('product-counter');
const filterFormSelectBtn = document.querySelectorAll('.filter-form__select-btn');
const filterFormSelect = document.querySelectorAll('.filter-form__select');
const filterTrigger = document.querySelector('.filter-trigger');
const filterForm = document.querySelector('.filter-form');
const ProductsFilter = document.querySelector('.Products');
const ColorsFilter = document.querySelector('.Colors');
const color = document.querySelectorAll('.color');
const productsTab = document.querySelector('.productsTab');
const colorsTab = document.querySelector('.colors-tab');

window.addEventListener('resize', () => {
   if(document.documentElement.clientWidth < 496){
      if(color){
         for(let i = 12; i < color.length; i++){
            let colorItem = color[i];
            colorItem.style.display = "none";
            console.log(45);
         }
      }
   }
   if(document.documentElement.clientWidth > 496){
      if(color){
         for(let i = 0; i < color.length; i++){
            let colorItem = color[i];
            colorItem.style.display = "flex";
         }
      }
   }
});

if(filterTrigger){
   filterTrigger.addEventListener('click', ()=> {
      filterForm.classList.toggle('active');
      filterTrigger.classList.toggle('active');
   });
}
if(document.documentElement.clientWidth < 768){
   if(ColorsFilter){
      ProductsFilter.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">      <path d="M16.0126 10.5649C15.6245 10.1649 15.153 9.85793 14.6391 9.65882L14.059 0H7.94056L7.36044 9.65886C6.84658 9.85793 6.375 10.1649 5.98686 10.565C5.16856 11.4083 4.78378 12.5607 4.93133 13.7265L5.97822 22H16.0213L17.0682 13.7265C17.2157 12.5607 16.831 11.4083 16.0126 10.5649ZM9.29176 1.43477H12.7078L13.186 9.39697H8.81356L9.29176 1.43477ZM15.6448 13.5464L14.7566 20.5652H7.24292L6.3548 13.5464C6.26229 12.8154 6.50356 12.0929 7.01665 11.5641C7.46817 11.0987 8.09908 10.8318 8.74756 10.8318H13.252C13.9005 10.8318 14.5314 11.0987 14.983 11.5641C15.4961 12.0929 15.7373 12.8154 15.6448 13.5464Z" fill="#E83A89"/>      </svg>      ';
      ColorsFilter.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">      <path d="M4.55469 15.5117C3.4885 15.5117 2.62109 16.3791 2.62109 17.4453C2.62109 18.5115 3.4885 19.3789 4.55469 19.3789C5.62087 19.3789 6.48828 18.5115 6.48828 17.4453C6.48828 16.3791 5.62087 15.5117 4.55469 15.5117ZM4.55469 18.0898C4.19929 18.0898 3.91016 17.8007 3.91016 17.4453C3.91016 17.0899 4.19929 16.8008 4.55469 16.8008C4.91008 16.8008 5.19922 17.0899 5.19922 17.4453C5.19922 17.8007 4.91008 18.0898 4.55469 18.0898Z" fill="black"/>      <path d="M20.8367 13.0941C21.2764 12.4991 21.3574 11.6693 20.9576 10.9769L18.3808 6.47075C17.935 5.69869 16.995 5.34639 16.1565 5.57051C16.3351 4.76798 15.9848 3.90702 15.236 3.47471L10.7708 0.896758C10.1331 0.528516 9.37067 0.566242 8.78427 0.928941C8.44443 0.372367 7.83131 0 7.13281 0H1.93359C0.86741 0 0 0.86741 0 1.93359C0 2.38068 0 19.5517 0 20.0664C0 21.1326 0.86741 22 1.93359 22C2.43431 22 17.6158 22 20.0664 22C21.1326 22 22 21.1326 22 20.0664V14.8672C22 14.0747 21.5206 13.3924 20.8367 13.0941ZM7.77734 20.0664C7.77734 20.4218 7.48821 20.7109 7.13281 20.7109H1.93359C1.5782 20.7109 1.28906 20.4218 1.28906 20.0664C1.28906 19.7719 1.28906 14.5055 1.28906 14.2227H7.77734V20.0664ZM7.77734 12.9336H1.28906V7.73438H7.77734V12.9336ZM7.77734 6.44531H1.28906V1.93359C1.28906 1.5782 1.5782 1.28906 1.93359 1.28906H7.13281C7.48821 1.28906 7.77734 1.5782 7.77734 1.93359V6.44531ZM9.06641 2.55956L9.24563 2.24911C9.42343 1.94124 9.81849 1.83537 10.1263 2.01313L14.5915 4.59108C14.8994 4.76884 15.0052 5.1639 14.827 5.47263L14.0822 6.76715C14.0636 6.79469 14.0468 6.82331 14.0327 6.85317L9.06641 15.4857V2.55956ZM9.06641 18.0707L15.0916 7.59765L16.3374 6.87839C16.6532 6.69608 17.0864 6.80681 17.2631 7.11296L19.8399 11.6191C20.0182 11.9278 19.9142 12.3235 19.6023 12.5036C19.1421 12.77 9.51968 18.3407 9.06641 18.6031V18.0707ZM20.7109 20.0664C20.7109 20.4218 20.4218 20.7109 20.0664 20.7109H8.95555C9.02425 20.5171 9.0628 20.3094 9.06576 20.093L19.2057 14.2227H20.0664C20.4218 14.2227 20.7109 14.5118 20.7109 14.8672V20.0664Z" fill="black"/>      </svg>';
   }
}
      if(ProductsFilter){
         ProductsFilter.addEventListener('click', ()=>{
            console.log(2);
            ProductsFilter.classList.add('active');
            ColorsFilter.classList.remove('active');
            productsTab.classList.add('active');
            colorsTab.classList.remove('active');
         });
         ColorsFilter.addEventListener('click', ()=>{
            console.log(2);
            ProductsFilter.classList.remove('active');
            ColorsFilter.classList.add('active');
            productsTab.classList.remove('active');
            colorsTab.classList.add('active');
         });
      }

if(productBlockColorSelect){
   productBlockColorSelect.addEventListener('click', () =>{
      productBlockColorButton.classList.toggle('active');
   });
}

if(minusBtn){
   minusBtn.addEventListener('click', () => {
      if(counter.value > 1){
         counter.value--;
      }
   });
   plusBtn.addEventListener('click', () => {
      counter.value++;
   });
}

if(informationTitle){
   let informationTitleText = informationTitle.textContent;
   productName.textContent = informationTitleText;
}


if(filterBtnPopular){

   filterBtnPopular.addEventListener('click', () => {
      filterBtnNew.classList.remove('active');
      filterBtnPopular.classList.add('active');
   });
}
if(filterBtnNew){

   filterBtnNew.addEventListener('click', () => {
      filterBtnPopular.classList.remove('active');
      filterBtnNew.classList.add('active');
   });
}

new Swiper('.slider-container', {
   spaceBetween: 20,
   pagination: {
      el: '.slider-pagination',
      clickable: true,
   },
   loop: true,
});
new Swiper('.hit-slider-1-container', {
   navigation: {
      nextEl: '.hit-slider-1-swiper-button-next',
      prevEl: '.hit-slider-1-swiper-button-prev'
   },
   breakpoints: {
      700: {
         spaceBetween: 0, 
         slidesPerView: 1,
         pagination: {
            el: '.hit-slider-1-swiper-pagination',
            clickable: true,
         },
      },
      496:{
         slidesPerView: 1.1,
      }
      
   },
   spaceBetween: 10, 
   slidesPerView: 1.1,
   pagination: {
      el: '.hit-slider-1-swiper-pagination',
      clickable: true,
   },
   loop: true,


});
new Swiper('.hit-slider-2-container', {
   navigation: {
      nextEl: '.hit-slider-2-swiper-button-next',
      prevEl: '.hit-slider-2-swiper-button-prev'
   },
   loop: true,
});
new Swiper('.product-block__slider-container', {
   loop: true, 
   effect: 'fade',
   fadeEffect: {
      crossFade: true
   },
   thumbs: {
      swiper: {
         spaceBetween: 10, 
         el: ".product-block__mini-slider", 
         slidesPerView: 4,
      }
   }
});

for(let i = 0; productLike.length > i; i++) {
   let like = productLike[i];
   like.addEventListener('click', () => {
      like.classList.toggle('active');
   });
}
for(let i = 0; productInBasket.length > i; i++) {
   let basketBtn = productInBasket[i];
   basketBtn.addEventListener('click', () => {
      basketBtn.classList.toggle('active');
      if(basketBtn.classList.contains('active')){
         basketBtn.innerHTML = "В корзине";
      } else {
         basketBtn.innerHTML = "В корзину";
      }
   });
}

function openMediaCatalogSubmenu() {
   mediaCatalogSubmenu.classList.add('active');
   closeMediaCatalogMenu();
   console.log(2);
}
function closeMediaCatalogSubmenu() {
   mediaCatalogSubmenu.classList.remove('active');
   console.log(1);
}


function openMediaCatalogMenu() {
   mediaCatalogMenu.classList.add('active');
}
function closeMediaCatalogMenu() {
   mediaCatalogMenu.classList.remove('active');
}


function closeMainHeaderMenu() {
   headerBurger.classList.remove('active');
   headerMenu.classList.remove('active');
}
function openMainHeaderMenu() {
   headerBurger.classList.add('active');
   headerMenu.classList.add('active');
}



if(gelPolishOpener){
   gelPolishOpener.addEventListener("click", () =>{
      openMediaCatalogSubmenu();
   });
}
if(backBtn2){
   backBtn2.addEventListener('click', () =>{
      closeMediaCatalogSubmenu();
      openMediaCatalogMenu();
   });
}
if(backBtn1){
   backBtn1.addEventListener("click", () => {
      openMainHeaderMenu();
      closeMediaCatalogMenu();
   });
}
if(catalogMenuInHeader){
   catalogMenuInHeader.addEventListener("click", () =>{
      openMediaCatalogMenu();
      closeMainHeaderMenu();
   });
}

if(document.documentElement.clientWidth < 768){
   searchInput.placeholder = "Поиск";
}

catalogButton.addEventListener("click", () => {
   catalogMenu.classList.toggle('active-menu');
});







const popupLinks = document.querySelectorAll('.popup-link');  //CCЫЛКА НА ОТКРЫТИЕ POPUP
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');  //(КЛАСС HEADER'А)

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');   // КЛАСС ЗАКРЫТИЯ
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));                          // КЛАСС POPUP
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');   // POPUP С КЛАССОМ OPEN
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');			             //ДОБАВИТЬ OPEN
      curentPopup.addEventListener("click", function (e){
         if (!e.target.closest('.popup__content')) {		    //СОДЕРЖИМОЕ POPUP
            popupClose(e.target.closest('.popup'));		    //КЛАСС POPUP
         }
      });
   }
}
function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');			    //УДАЛИТЬ OPEN
      if (doUnlock) {
         bodyUnLock();
      }
   }
}

function bodyLock() {
   const LockPaddingValue = window.innerWidth - document.querySelector('html').offsetWidth + 'px';
   if (lockPadding.lenght > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];   
         el.style.paddingRight = LockPaddingValue;
      }
   }
   body.style.paddingRight = LockPaddingValue;
   body.classList.add('lock');					   //КЛАСС LOCK НА BODY

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnLock() {
   setTimeout(function () {
      for ( let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRigth ='0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');				//УДАЛИТЬ КЛАСС LOCK НА BODY
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout)
}

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');   //POPUP С КЛАССОМ OPEN
      popupClose(popupActive);
   }
});

(function () {
   if (!Element.prototype.closest) {
      Element.prortotype.closest = function (css) {
         var node = this;
         while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
         }
         return null;
      };
   }
})();
(function () {
   if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.matchesMatchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.sMatchesSelector;
   }
})();
;
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
   callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
   
testWebP(function (support) {
   
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   }else{
      document.querySelector('body').classList.add('no-webp');
   }
});;
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());;


