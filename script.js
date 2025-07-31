// script.js
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !phone || !password) {
    message.style.color = "red";
    message.textContent = "Please fill in all fields.";
    return;
  }

  message.style.color = "green";
  message.textContent = `Thanks for registering, ${name}!`;
  form.reset();
});
