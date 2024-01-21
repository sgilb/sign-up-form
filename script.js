const form = document.getElementById("signup");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", (event) => {
  if (
    document.getElementById("password").value !==
    document.getElementById("password-confirm").value
  ) {
    event.preventDefault();
    passwordError.style.visibility = "visible";
  } else {
    passwordError.style.visibility = "hidden";
    alert("Form submitted ✅");
  }
});
