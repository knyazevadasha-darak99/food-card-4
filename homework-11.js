const subscribeForm = document.querySelector("#subscribe-form");

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!subscribeForm.checkValidity()) {
    subscribeForm.reportValidity();
    return;
  }

  const formData = new FormData(subscribeForm);
  const data = Object.fromEntries(formData);

  console.log(data);
});

let user = null;

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#registration-modal");
const overlay = document.querySelector("#overlay");
const registrationForm = document.querySelector("#registration-form");
const registrationError = document.querySelector("#registration-error");

const firstNameInput = document.querySelector("#first-name");
const birthDateInput = document.querySelector("#birth-date");
const passwordInput = document.querySelector("#password");
const passwordRepeatInput = document.querySelector("#password-repeat");

let previousBodyOverflow = "";

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

birthDateInput.max = `${year}-${month}-${day}`;

function openModal() {
  registrationError.textContent = "";

  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");

  document.querySelector(".footer").inert = true;
  openModalButton.inert = true;

  previousBodyOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  firstNameInput.focus();
}

function closeModal() {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");

  document.querySelector(".footer").inert = false;
  openModalButton.inert = false;

  document.body.style.overflow = previousBodyOverflow;
  openModalButton.focus();
}

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (!modal.classList.contains("modal-showed")) {
    return;
  }

  if (event.key === "Escape") {
    closeModal();
  }

  if (event.key === "Tab") {
    const elements = modal.querySelectorAll("button, input");
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

registrationForm.addEventListener("input", () => {
  registrationError.textContent = "";
});

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.checkValidity()) {
    registrationError.textContent =
      "Регистрация отклонена. Проверьте заполнение всех полей.";

    registrationForm.reportValidity();
    return;
  }

  if (passwordInput.value !== passwordRepeatInput.value) {
    registrationError.textContent =
      "Регистрация отклонена. Пароли не совпадают.";

    passwordRepeatInput.focus();
    return;
  }

  const formData = new FormData(registrationForm);

  user = {
    ...Object.fromEntries(formData),
    createdOn: new Date(),
  };

  console.log(user);

  registrationForm.reset();
  closeModal();
});
