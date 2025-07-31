document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const countrySelect = document.getElementById("country");
  const countryCodeInput = document.getElementById("countryCode");
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");
  const message = document.getElementById("message");

  // Initialize country code input with default selected option
  function updateCountryCode() {
    countryCodeInput.value = countrySelect.value;
  }

  updateCountryCode();

  countrySelect.addEventListener("change", updateCountryCode);

  function showError(msg) {
    message.style.color = "red";
    message.textContent = msg;
  }

  function showSuccess(msg) {
    message.style.color = "green";
    message.textContent = msg;
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Validate phone: only digits, length between 6 and 15
  function validatePhone(phone) {
    const re = /^[0-9]{6,15}$/;
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
      showError("❌ Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      showError("📧 Invalid email format.");
      return;
    }

    if (!validatePhone(phone)) {
      showError("📞 Invalid phone number.");
      return;
    }

    if (password.length < 6) {
      showError("🔒 Password must be at least 6 characters.");
      return;
    }

    const fullPhone = countryCode + phone;

    showSuccess(
      `🎉 Welcome, ${name}! Your registration was successful. Confirmation has been sent to: ${fullPhone}`
    );
    form.reset();
    updateCountryCode();
  });
});
