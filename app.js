const validateName = () => {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,14}$/i;

  if (!re.test(name.value)) {
    return name.classList.add("is-invalid");
  }
  name.classList.remove("is-invalid");
};
const validateZip = () => {};
const validateEmail = () => {};
const validatePhone = () => {};

//create event listeners for form Blur
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);
