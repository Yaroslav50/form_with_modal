function onSubmit(event) {
  event.preventDefault();
  const inputUserName = document.getElementById("input_name");
  informUser(`Hello, ${inputUserName.value}`);
}

function informUser(message) {
  // alert(message);
  modal.innerText = message;
  modalContainer.style.display = "flex";
  // form.style.display = "none";
}

const modalContainer = document.getElementsByClassName("modal_wrapper")[0];
const modal = modalContainer.getElementsByTagName("div")[1];
const htmlFormCollection = document.getElementsByTagName("form");
const form = htmlFormCollection[0];
// form.addEventListener("submit", onSubmit);
const modalBackground = modalContainer.getElementsByTagName("div")[0];
// modalBackground.addEventListener("click", (event) => {
modalContainer.addEventListener("click", (event) => {
  console.log("Hello!");
  modalContainer.style.display = "none";
});

form.addEventListener("submit", function onSubmit(event) {
  event.preventDefault();
  const inputUserName = document.getElementById("input_name");
  informUser(`Hello, ${inputUserName.value}`);
});

modal.addEventListener("click", (event) => {
  event.stopPropagation();
});
