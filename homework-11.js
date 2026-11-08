import { Modal } from "./Modal.js";
import { Form } from "./Form.js";
import "./Book.js";

let user = null;

const registrationModal = new Modal("registration-modal");
const registrationForm = new Form("registration-form");
const subscribeForm = new Form("subscribe-form");

const openModalButton = document.querySelector("#open-modal");
const overlay = document.querySelector("#overlay");
const footer = document.querySelector(".footer");

const registrationError = document.querySelector("#registration-error");
const birthDateInput = document.querySelector("#birth-date");
const passwordRepeatInput = document.querySelector("#password-repeat");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

birthDateInput.max = `${year}-${month}-${day}`;

function updateBackground() {
  const isOpen = registrationModal.isOpen();

  footer.inert = isOpen;
  openModalButton.inert = isOpen;
}

openModalButton.addEventListener("click", () => {
  registrationError.textContent = "";
  registrationModal.open();
  updateBackground();
});

registrationModal.modal
  .querySelector(".modal__close")
  .addEventListener("click", () => {
    updateBackground();
    openModalButton.focus();
  });

overlay.addEventListener("click", () => {
  registrationModal.close();
  updateBackground();
  openModalButton.focus();
});

document.addEventListener("keydown", (event) => {
  if (!registrationModal.isOpen()) {
    return;
  }

  if (event.key === "Escape") {
    registrationModal.close();
    updateBackground();
    openModalButton.focus();
  }

  if (event.key === "Tab") {
    const elements = registrationModal.modal.querySelectorAll("button, input");

    const firstElement = elements[0];
    const lastElement = elements[elements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
});

subscribeForm.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!subscribeForm.isValid()) {
    subscribeForm.form.reportValidity();
    return;
  }

  console.log(subscribeForm.getValues());
});

registrationForm.form.addEventListener("input", () => {
  registrationError.textContent = "";
});

registrationForm.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.isValid()) {
    registrationError.textContent =
      "Регистрация отклонена. Проверьте заполнение всех полей.";

    registrationForm.form.reportValidity();
    return;
  }

  const values = registrationForm.getValues();

  if (values.password !== values.passwordRepeat) {
    registrationError.textContent =
      "Регистрация отклонена. Пароли не совпадают.";

    passwordRepeatInput.focus();
    return;
  }

  user = {
    ...values,
    createdOn: new Date(),
  };

  console.log(user);

  registrationForm.reset();
  registrationModal.close();
  updateBackground();
  openModalButton.focus();
});
