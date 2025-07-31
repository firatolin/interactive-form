const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));
  document.getElementById("successMessage").textContent = "";

  let valid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  if (!email.match(/^\S+@\S+\.\S+$/)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    valid = false;
  }

  if (!phone.match(/^\d{10,15}$/)) {
    document.getElementById("phoneError").textContent =
      "Phone must be 10-15 digits.";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }

  if (valid) {
    document.getElementById("successMessage").textContent =
      "Form submitted successfully!";
    form.reset();
  }
});
