const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Por favor, completa todos los campos.";
    formMessage.className = "form-message error";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Introduce un email válido.";
    formMessage.className = "form-message error";
    return;
  }

  formMessage.textContent = "Mensaje preparado correctamente. Esta demo no envía datos reales.";
  formMessage.className = "form-message success";
  contactForm.reset();
});
