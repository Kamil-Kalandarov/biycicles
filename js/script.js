const gallarySwiper = new Swiper('.slider', {
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },
  wrapperClass: 'slider__wrapper',
  slideClass: 'slider__slide',
  slideActiveClass: 'slider__slide_type_active',
  loop: true,
  setWrapperSize: true,
  allowTouchMove: true,
  simulateTouch: true,
  spaceBetween: 40,
  slidesPerView: 2,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  }
});

const data = [
  { title: 'Cervelo Caledonia-5', src: './images/card-road-1.jpg', type: 'road'},
  { title: 'Cannondale Systemsix Himod', src: './images/card-road-2.jpg', type: 'road' },
  { title: 'Trek Domane SL-7', src: './images/card-road-3.jpg', type: 'road' },
  { title: 'Cervelo Aspero GRX 810', src: './images/card-graval-1.jpg', type: 'gravel' },
  { title: 'Specialized S-Works Diverge', src: './images/card-graval-2.jpg', type: 'gravel' },
  { title: 'Cannondale Topstone Lefty 3', src: './images/card-graval-3.jpg', type: 'gravel' },
  { title: 'Specialized S-Works Shiv', src: './images/card-tt-1.jpg', type: 'tt' },
  { title: 'BMC Timemachine 01 ONE', src: './images/card-tt-2.jpg', type: 'tt' },
  { title: 'Cervelo P-Series', src: './images/card-tt-3.jpg', type: 'tt' },
]
const initialCards = data.filter(item => item.type === 'road');
const gravelCards = data.filter(item => item.type === 'gravel');
const ttCards = data.filter(item => item.type === 'tt');
const byciclesSection = document.querySelector('.bycicles')
const cardsContainer = document.querySelector('.cards-container');
const buttonRoad = byciclesSection.querySelector('.bycicles__road');
const buttonGravel = byciclesSection.querySelector('.bycicles__gravel');
const buttonTT = byciclesSection.querySelector('.bycicles__tt');
const selectCards = byciclesSection.querySelector('.bycicles__select');
const sliderTemplate = document.querySelector('#slider-template').content;
const slideTemplate = document.querySelector('#slide-template').content;
const sliderContainer = sliderTemplate.querySelector('.slider-cards'); 
const sliderPagination = sliderTemplate.querySelector('.slider-cards__pagination');
const sliderPaginationBullet = sliderTemplate.querySelector('.slider-cards__pagination-bullet');
const ContainerForSlider = byciclesSection.querySelector('.slider-cards-container');
const switcher = document.querySelector('.switch__off');
const switcherPictureOff = document.querySelector('.switch__off-pic');
const switcherPictureON = document.querySelector('.switch__on-pic');
const page = document.querySelector('.page');
const footer = page.querySelector('.footer');
const titleSection = document.querySelectorAll('.title-of-section');
const textContent = document.querySelectorAll('.text-content');
const headerLink = document.querySelectorAll('.header__link');
const leadLink = document.querySelector('.lead__link');
const quoteTitle = document.querySelector('.quote__title');
const quoteAuthorAbout = document.querySelector('.quote__author-about');
const quoteAuthorName = document.querySelector('.quote__author-name');
const serviceStravaLinks = document.querySelector('.service__strava-link');
const serviceKomootLink = document.querySelector('.service__komoot-link');
const footerTitle = footer.querySelector('.footer__title');
const formInputEmail = document.querySelector('.form__input-email');
const formButton = document.querySelector('.form__button');
const footerCopyright = footer.querySelector('.footer__copyright');
const sliderArrowLeft = document.querySelector('.slider__button-prev');
const sliderArrowRight = document.querySelector('.slider__button-next');


const createCards = data => {
    const sliderContainer = sliderTemplate.querySelector('.slider-cards').cloneNode(true);
    const sliderWrapper = sliderContainer.querySelector('.slider-cards__wrapper');
    data.forEach(item => {
      const cardElement = slideTemplate.querySelector('.slider-cards__slide').cloneNode(true);
      const cardTitle = cardElement.querySelector('.slider-cards__title');
      cardTitle.textContent = item.title;
      const cardImage = cardElement.querySelector('.slider-cards__image');
      cardImage.src = item.src;
      sliderWrapper.append(cardElement);
      ContainerForSlider.append(sliderContainer);
  });
  const cardsSwiper = new Swiper('.slider-cards', {
    pagination: {
      el: '.slider-cards__pagination',
      type: 'bullets',
      bulletClass: 'slider-cards__pagination-bullet',
      bulletActiveClass: 'slider-cards__pagination_type_active',
      clickable: true,
    },
    wrapperClass: 'slider-cards__wrapper',
    slideClass: 'slider-cards__slide',
    setWrapperSize: true,
    allowTouchMove: true,
    simulateTouch: true,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 1,
      },
    }
  });
};

createCards(initialCards);


const deletCards = () => {
  ContainerForSlider.innerHTML = '';
};

buttonGravel.addEventListener('click', () => {
  deletCards();
  createCards(gravelCards);
});

buttonRoad.addEventListener('click', () => {
  deletCards();
  createCards(initialCards);
});

buttonTT.addEventListener('click', () => {
  deletCards();
  createCards(ttCards);
});

selectCards.addEventListener('change', (e) => {
  deletCards();
  const type = e.target.value;
  const items = data.filter(item => item.type === type);
  createCards(items);
});

switcher.addEventListener('click',(e) => {
  switcher.classList.toggle('switch__on');
  page.classList.toggle('page_them_dark');
  leadLink.classList.toggle('lead__link_them_dark');
  switcherPictureOff.classList.toggle('switch__off-pic_type_active');
  switcherPictureON.classList.toggle('switch__on-pic_type_active');
  buttonRoad.classList.toggle('bycicles__road_them_dark');
  buttonGravel.classList.toggle('bycicles__gravel_them_dark');
  buttonTT.classList.toggle('bycicles__tt_them_dark');
  selectCards.classList.toggle('bycicles__select_them_dark');
  quoteTitle.classList.toggle('quote__title_them_dark');
  quoteAuthorName.classList.toggle('quote__author-name_them_dark');
  quoteAuthorAbout.classList.toggle('quote__author-about_them_dark');
  serviceStravaLinks.classList.toggle('service__strava-link_them_dark');
  serviceKomootLink.classList.toggle('service__komoot-link_them_dark');
  footer.classList.toggle('footer_them_dark');
  footerTitle.classList.toggle('footer__title_them_dark');
  formInputEmail.classList.toggle('form__input-email_them_dark');
  footerCopyright.classList.toggle('footer__copyright_them_dark');
  formButton.classList.toggle('form__button_them_dark');
  titleSection.forEach(item => {
    item.classList.toggle('title-of-section_them_dark');
  });
  textContent.forEach(item => {
    item.classList.toggle('text-content_them_dark');
  });
  headerLink.forEach(item => {
    item.classList.toggle('header__link_them_dark');
  });
});
