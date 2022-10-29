const validateName = () => {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,14}$/i;

  if (!re.test(name.value)) {
    return name.classList.add("is-invalid");
  }
  name.classList.remove("is-invalid");
};
const validateZip = () => {
  const zip = document.getElementById("zip");
  const re = /^([A-Z][0-9]){3}$/;
  if (!re.test(zip.value)) {
    return zip.classList.add("is-invalid");
  }

  zip.classList.remove("is-invalid");
};
const validateEmail = () => {
  const email = document.getElementById("email");
  const re = /^[0-9]{6}$/;
  if (!re.test(email.value)) {
    return email.classList.add("is-invalid");
  }

  email.classList.remove("is-invalid");
};
const validatePhone = () => {
  const phone = document.getElementById("phone");
  const re = /^[0-9]{10}$/;
  if (!re.test(phone.value)) {
    return phone.classList.add("is-invalid");
  }

  phone.classList.remove("is-invalid");
};

//create event listeners for form Blur
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);
