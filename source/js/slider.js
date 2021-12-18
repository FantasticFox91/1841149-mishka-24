const nextSlideBtn = document.querySelector(".slider__nav-button--next");
const prevSlideBtn = document.querySelector(".slider__nav-button--prev");
const slides = document.querySelectorAll(".slider__item");
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
