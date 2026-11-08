export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.overlay = document.querySelector("#overlay");
    this.previousBodyOverflow = "";
    this.previousActiveElement = null;

    this.listenCloseButton();
  }

  open() {
    if (this.isOpen()) {
      return;
    }

    this.previousActiveElement = document.activeElement;
    this.previousBodyOverflow = document.body.style.overflow;

    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");

    document.body.style.overflow = "hidden";

    const firstInput = this.modal.querySelector("input");

    if (firstInput) {
      firstInput.focus();
    }
  }

  close() {
    if (!this.isOpen()) {
      return;
    }

    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");

    document.body.style.overflow = this.previousBodyOverflow;

    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
    }
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  listenCloseButton() {
    const closeButton = this.modal.querySelector(".modal__close");

    closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
