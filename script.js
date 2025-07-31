document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const countrySelect = document.getElementById("country");
  const countryCodeInput = document.getElementById("countryCode");
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");
  const message = document.getElementById("message");

  function updateCountryCode() {
    countryCodeInput.value = countrySelect.value;
  }

  // Initialize country code input on page load
  updateCountryCode();

  // Update country code when select changes
  countrySelect.addEventListener("change", updateCountryCode);

  function showError(msg) {
    message.classList.remove("success");
    message.classList.add("error");
    message.style.color = "#a15e4a"; // brick red
    message.textContent = msg;
  }

  function showSuccess(msg) {
    message.classList.remove("error");
    message.classList.add("success");
    message.style.color = "#5a6b44"; // olive green
    message.textContent = msg;
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    const re = /^[0-9]{9}$/;
    return re.test(phone);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const countryCode = countryCodeInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value;

    if (!name || !email || !phone || !password) {
      showError("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      showError("Invalid email.");
      return;
    }

    if (!validatePhone(phone)) {
      showError("Invalid phone number.");
      return;
    }

    if (password.length < 8) {
      showError("Password must be at least 8 characters.");
      return;
    }

    const fullPhone = countryCode + phone;

    showSuccess(
      `Welcome, ${name}! Your registration was successful. Confirmation has been sent to: ${fullPhone}`
    );
    form.reset();
    updateCountryCode(); // reset country code after form reset
  });
});
