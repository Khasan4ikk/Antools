// меню
const burger = document.querySelector('.burger');
const navMobile = document.querySelector('.nav-mobile');
const navLink = document.querySelectorAll('.nav-list a'); // Получаем все ссылки в меню

// Обработчик клика для кнопки гамбургера
burger.addEventListener('click', () => {
  navMobile.classList.toggle('active');
  burger.classList.toggle('active');
});

// Обработчик клика для ссылок в меню
navLink.forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('active'); // Закрываем меню
    burger.classList.remove('active'); // Изменяем состояние кнопки
  });
});
// карусель
const owl = $('.owl-carousel');

owl.owlCarousel({
//   center: true,
  loop: true,
  margin: 30,
  dots: true,
  nav: false,
  startPosition: 1,
  items: 1,
autoplay: true, // Включаем автоматическую прокрутку
 autoplayTimeout: 3000, // Интервал между слайдами (3 секунды)
 autoplayHoverPause: true // Пауза при наведении курсора на карусель
  
});

// Обработчики кликов на кнопках
$('.test__btn-arrow.btn__left').click(function() {
  owl.trigger('prev.owl.carousel'); // Переход на предыдущий слайд
});

$('.test__btn-arrow.btn__right').click(function() {
  owl.trigger('next.owl.carousel'); // Переход на следующий слайд
});

// лайк при клике  //так эксперимент)
const heartButton = document.querySelector('.popular__card-btn--heart');
let isLiked = false; // Переменная для отслеживания состояния лайка

heartButton.addEventListener('click', () => {
 const imgElement = heartButton.querySelector('.popular__card-img');
 const activeHeartSrc = heartButton.dataset.imgSrc; // Путь к активному сердечку
 const defaultHeartSrc = './img/heart.svg'; // Путь к обыкновенному сердечку

 if (!isLiked) {
  // Если лайка нет, меняем изображение на активное
  imgElement.src = activeHeartSrc;
  isLiked = true;
 } else {
  // Если лайк есть, меняем изображение на обыкновенное
  imgElement.src = defaultHeartSrc;
  isLiked = false;
 }
});

// // анимация 

// AOS.init();
