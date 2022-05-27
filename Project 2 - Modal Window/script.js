"use strict";
const modal = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const btncloseModal = document.querySelector(".close-modal");
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let index = 0; index < showModal.length; index++) {
  showModal[index].addEventListener("click", openModal);
}
btncloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
