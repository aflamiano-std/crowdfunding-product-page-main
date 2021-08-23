// Rewards modal
const selectRewardButtons = document.querySelectorAll(".select-reward");
const closeModalButtons = document.querySelectorAll(".modal__close");
const overlay = document.getElementById("overlay");

// Thank you modal
const continueButtons = document.querySelectorAll(".continue");
const gotItButton = document.querySelector(".got-it");

// Pledge radio button
const radioButtons = document.querySelectorAll(".pledge__radio-input");

radioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectPledge(button);
  });
});

selectRewardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.getElementById("modal-reward");
    openModal(modal);
    if (button.classList.contains("bamboo")) {
      selectPledge(radioButtons[1]);
      modalFocus(600);
    } else if (button.classList.contains("black")) {
      selectPledge(radioButtons[2]);
      modalFocus(850);
    } else {
      selectPledge(radioButtons[0]);
      modalFocus(400);
    }
  });
});

continueButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal_rewards = document.getElementById("modal-reward");
    closeModal(modal_rewards);
    const modal = document.getElementById("modal-thanks");
    openModal(modal);
    modalFocus(800);
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
  if (radioButtons[1].checked) {
    document.querySelectorAll(".product__title")[0].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  } else if (radioButtons[2].checked) {
    document.querySelectorAll(".product__title")[1].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

function selectPledge(button) {
  button.checked = true;
  const pledge = button.closest(".pledge");
  const allPledges = document.querySelectorAll(".pledge");
  allPledges.forEach((pledge) => {
    pledge.lastElementChild.classList.remove("show");
    pledge.classList.remove("active");
  });
  pledge.classList.add("active");
  pledge.lastElementChild.classList.add("show");
}

function modalFocus(x_coordinate) {
  window.scrollTo({
    top: x_coordinate,
    behavior: "smooth",
  });
}

/* HAMBURGER MENU */
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});
