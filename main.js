const form = document.querySelector("#form");
const submitBtn = document.querySelector("#submitBtn");
const closeBtn = document.querySelector("#closeBtn");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");

const openModal = () => (modal.style.display = "block");
const closeModal = () => {
  form.reset();
  modal.style.display = "none";
};
const showInfo = (name, gender) => {
  modalContent.innerHTML = `<p>Name: ${name}</p>
  <p> Gender: ${gender}</p>`;
};

const validation = (elem, err) => {
  if (!elem.value) {
    elem.style.outline = "3px solid red";
    err.style.display = "block";

    return false;
  }

  return true;
};

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const nameElement = document.querySelector("#name");
  const errorText = document.querySelector(".error-text");

  if (validation(nameElement, errorText)) {
    nameElement.style.outline = "none";
    errorText.style.display = "none";
    openModal();
    showInfo(nameElement.value, gender);
  }
});

closeBtn.addEventListener("click", () => {
  closeModal();
  form.reset();
});

modal.addEventListener("click", (event) => {
  if (!event.target.closest(".modal__wrapper")) {
    modal.style.display = "none";
    form.reset();
  }
});
