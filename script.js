document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");
  const message = document.getElementById("message");

  function showError(input, msg) {
    input.style.borderColor = "red";
    message.style.color = "red";
    message.textContent = msg;
  }

  function clearError(input) {
    input.style.borderColor = "#00c9a7";
    message.textContent = "";
  }

  function validateEmail(email) {
    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  }

  nameInput.addEventListener("blur", () => {
    if (!nameInput.value.trim()) {
      showError(nameInput, "Name cannot be empty");
    } else {
      clearError(nameInput);
    }
  });

  emailInput.addEventListener("blur", () => {
    if (!validateEmail(emailInput.value.trim())) {
      showError(emailInput, "Enter a valid email address");
    } else {
      clearError(emailInput);
    }
  });

  phoneInput.addEventListener("blur", () => {
    if (!validatePhone(phoneInput.value.trim())) {
      showError(phoneInput, "Enter a valid phone number");
    } else {
      clearError(phoneInput);
    }
  });

  passwordInput.addEventListener("blur", () => {
    if (passwordInput.value.length < 6) {
      showError(passwordInput, "Password must be at least 6 characters");
    } else {
      clearError(passwordInput);
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value;

    if (!name || !email || !phone || !password) {
      showError(form, "Please fill in all fields");
      return;
    }

    if (!validateEmail(email) || !validatePhone(phone) || password.length < 6) {
      showError(form, "Please fix the validation errors above");
      return;
    }

    message.style.color = "green";
    message.textContent = `🎉 Thank you for registering, ${name}!`;
    form.reset();
  });
});
