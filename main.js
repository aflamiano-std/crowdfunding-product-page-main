// Rewards modal
const selectRewardButtons = document.querySelectorAll(".select-reward");
const closeModalButtons = document.querySelectorAll(".modal__close");
const overlay = document.getElementById("overlay");

// Thank you modal
const continueButtons = document.querySelectorAll(".continue");
const gotItButton = document.querySelector(".got-it");

selectRewardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.getElementById("modal-reward");
    openModal(modal);
  });
});

continueButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal_rewards = document.getElementById("modal-reward");
    closeModal(modal_rewards);
    const modal = document.getElementById("modal-thanks");
    openModal(modal);
  });
});

gotItButton.addEventListener("click", () => {
  closeModal(document.getElementById("modal-thanks"));
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
