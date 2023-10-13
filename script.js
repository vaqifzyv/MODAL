const card = document.querySelector(".modal");
const modalBtn = document.querySelector(".modal-button");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", () => {
  if (card.classList.contains("none")) {
    card.classList.remove("none");
  }
  modalBtn.classList.add("none");
});

closeBtn.addEventListener("click", () => {
  if (!card.classList.contains("none")) {
    card.classList.add("none");
  }
  modalBtn.classList.add("show");
});
