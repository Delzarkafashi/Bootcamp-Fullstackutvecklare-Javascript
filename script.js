const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  header.classList.toggle("is-small", window.scrollY > 50);
});

/* ========== contactForm ========== */
const form = document.querySelector("#contactForm");

if (form) {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");

  const nameError = document.querySelector("#nameError");
  const emailError = document.querySelector("#emailError");
  const messageError = document.querySelector("#messageError");
  const status = document.querySelector("#formStatus");

  function setError(el, msg) {
    el.textContent = msg;
  }

  function clearErrors() {
    setError(nameError, "");
    setError(emailError, "");
    setError(messageError, "");
    status.textContent = "";
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let hasError = false;

    if (!name) {
      setError(nameError, "Skriv ditt namn.");
      hasError = true;
    }

    if (!email) {
      setError(emailError, "Skriv din email.");
      hasError = true;
    } else if (!isValidEmail(email)) {
      setError(emailError, "Email ser inte korrekt ut.");
      hasError = true;
    }

    if (!message) {
      setError(messageError, "Skriv ett meddelande.");
      hasError = true;
    }

    if (hasError) return;

    status.textContent = "Tack! Jag återkommer så snart jag kan.";
    form.reset();
  });
}
