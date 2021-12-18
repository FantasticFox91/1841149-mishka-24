const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".link-button");
const cardBtns = document.querySelectorAll(".card__button");

modal.addEventListener("click", (e) =>
checkClass(e.target, "modal") ? toggleClass(modal, "modal--open") : null);

cardBtns.forEach(item => {
  item.addEventListener("click", () => toggleClass(modal, "modal--open"))
});

modalBtn.addEventListener("click", () => toggleClass(modal, "modal--open"));
