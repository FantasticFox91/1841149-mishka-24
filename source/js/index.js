let mainNavigation = document.querySelector(".main-nav");
let burgerBtn = document.querySelector(".main-nav__toggle");
let checkClass = (element, clas) => element.classList.contains(clas);
let toggleClass= (element, clas) => element.classList.toggle(clas);
let modal = document.querySelector(".modal");
let modalBtn = document.querySelector(".link-button");
let cardBtns = document.querySelectorAll(".card__button");
let nextSlideBtn = document.querySelector(".slider__nav-button--next");
let prevSlideBtn = document.querySelector(".slider__nav-button--prev");
let slides = document.querySelectorAll(".slider__item");
let contactsMap = document.querySelector(".contacts__map");

mainNavigation.classList.add("main-nav--close");

burgerBtn.addEventListener("click", () =>
checkClass(mainNavigation,"main-nav--close") ? toggleClass(mainNavigation,"main-nav--open") : toggleClass(mainNavigation,"main-nav--close"));

if (modal != null) {
  modal.addEventListener("click", (e) =>
  checkClass(e.target, "modal") ? toggleClass(modal, "modal--open") : null);
  cardBtns.forEach(item => {
    item.addEventListener("click", () => {
    toggleClass(modal, "modal--open")
    modal.querySelector(".modal__input").focus()
  })})
  modalBtn.addEventListener("click", () => {
    toggleClass(modal, "modal--open")
    modal.querySelector(".modal__input").focus()
})}

if (nextSlideBtn != null) {
  let i = 0;
  nextSlideBtn.addEventListener("click", function () {
    slides.forEach((item, index) => {
      if (item.classList.contains('slider__item--active')) {
        i = index;
      }
    })
    slides[i].classList.toggle("slider__item--active");
    i++
    if (i >= slides.length){
      i = 0;
      slides[i].classList.toggle("slider__item--active");
    } else if (i <= slides.length) {
      slides[i].classList.toggle("slider__item--active");
    }
  })
  prevSlideBtn.addEventListener("click", function () {
    slides.forEach((item, index) => {
      if (item.classList.contains('slider__item--active')) {
        i = index;
      }
    })
    slides[i].classList.toggle("slider__item--active");
    i--
    if (i < 0){
      i = slides.length-1;
      slides[i].classList.toggle("slider__item--active");
    } else if (i <= slides.length) {
      slides[i].classList.toggle("slider__item--active");
    }
  })
}

if (contactsMap != null) {
  document.querySelector(".contacts__img").remove();

  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 59.93872031587833, lng: 30.32304628352043},
      mapID: "symmetric-ray-334813",
      zoom: 16.6,
    });

    const image = "data:image/svg+xml,%3Csvg width='67' height='100' viewBox='0 0 67 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M57.1276 9.15178C44.0322 -3.05059 22.917 -3.05059 9.82159 9.15178C-3.27386 21.3542 -3.27386 41.0962 9.82159 53.2986C9.82159 53.2986 33.4746 74.9256 33.4746 99.9256C33.4746 74.9256 57.1276 53.2986 57.1276 53.2986C70.2231 41.1954 70.2231 21.3542 57.1276 9.15178Z' fill='white'/%3E%3Cpath d='M47.6871 45.164C47.078 41.8902 47.7886 38.3188 47.6871 34.9458C47.5856 31.1759 46.9765 27.5053 46.9765 23.8347C46.9765 20.8585 47.4841 17.6839 46.4689 14.8069C46.5704 14.5093 46.5704 14.1124 46.672 13.8148C46.9765 12.3267 42.0023 13.1204 41.2917 14.4101C40.7841 14.8069 40.581 15.3029 40.7841 15.6997C40.8856 15.7989 40.8856 15.8982 40.8856 16.0966C39.972 20.5608 38.6523 24.8267 37.1295 29.1918C36.5204 30.8783 35.9114 32.4656 35.3023 34.0529C34.4901 32.5648 33.678 30.9775 32.9674 29.3902C31.0386 24.6283 29.2114 19.7672 26.8765 15.2037C27.1811 13.1204 22.3083 13.3188 21.3947 15.2037C20.278 17.5847 20.3795 19.9656 20.7856 22.4458C21.1917 25.3228 21.2932 28.1005 21.2932 30.9775C21.3947 36.5331 21.8007 41.9894 21.9023 47.545C21.3947 48.1402 21.2932 48.7355 21.8007 49.4299C22.0038 49.7275 22.3083 49.9259 22.6129 50.2235C23.9326 51.2156 27.5871 50.422 27.5871 48.4378C27.5871 42.6839 27.1811 37.0291 26.978 31.2751C26.978 30.6799 26.978 30.1839 26.978 29.5886C27.0795 29.787 27.1811 29.9855 27.1811 30.1839C28.0947 32.3664 29.0083 34.5489 30.328 36.6323C31.5462 38.7156 32.1553 40.8982 32.8659 43.0807C32.5614 43.3783 32.4598 43.6759 32.5614 44.0728C32.4598 44.3704 32.6629 44.4696 32.9674 44.5688C33.8811 45.3624 35.6068 44.9656 36.5204 44.5688C36.9265 44.3704 37.3326 44.172 37.7386 43.9735C38.2462 43.6759 38.9568 42.9815 38.7538 42.3862C38.7538 42.287 38.6523 42.0886 38.6523 41.9894C39.3629 40.2037 39.6674 38.418 40.0735 36.5331C40.4795 34.5489 41.1901 32.664 41.9007 30.7791C42.0023 31.672 42.0023 32.4656 42.1038 33.3585C42.4083 36.9299 42.1038 40.4021 42.1038 43.9735C42.1038 45.164 42.2053 46.2553 42.4083 47.3466C42.5098 47.8426 42.9159 49.8267 42.8144 49.9259C41.9007 50.7196 42.2053 51.7116 43.322 51.9101C44.6417 52.2077 46.2659 51.8109 47.281 50.918C48.9053 49.5291 48.0932 47.1482 47.6871 45.164Z' fill='%236BC6B3'/%3E%3C/svg%3E%0A";
    const myMarker = new google.maps.Marker({
      position: { lat: 59.93872031587833, lng: 30.32304628352043},
      map,
      icon: image,
    });
  }
}
/*
Функция для проверки на перполнение контентом, взята с прошлого курса

function getTextNodesIn(elem, opt_fnFilter) {
  var textNodes = [];
  if (elem) {
    for (var nodes = elem.childNodes, i = nodes.length; i--;) {
      var node = nodes[i],
        nodeType = node.nodeType;
      if (nodeType == 3) {
        if (!opt_fnFilter || opt_fnFilter(node, elem)) {
          if (node.data.trim() !== '') {
            textNodes.push(node.data.trim() !== '' ? node : '');

          }
        }
      } else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
        textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter));
      }
    }
  }
  return textNodes;
}

getTextNodesIn(document.body).forEach((item) => { item.textContent = "У меня есть несколько клиентов, которые записались ко мне на стрижку, не успев даже зайти в салон." })
*/
