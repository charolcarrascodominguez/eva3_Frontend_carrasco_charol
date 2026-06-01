document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const message = document.getElementById("message").value.trim();
  const honeypot = document.getElementById("website")?.value;

  const messageBox = document.getElementById("formMessage");

  // Limpia mensajes anteriores
  messageBox.innerHTML = "";

  // Honeypot anti bots
  if (honeypot) {
    return;
  }

  // Campos obligatorios
  if (!name || !email || !contact || !message) {
    showMessage("Completar todos los campos.", "danger");
    return;
  }

  // Nombre solo letras
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name)) {
    showMessage("El nombre solo puede contener letras.", "danger");
    return;
  }

  // Email válido
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showMessage("Correo electrónico inválido.", "danger");
    return;
  }

  // Teléfono solo números
  if (!/^\d+$/.test(contact)) {
    showMessage("El teléfono solo puede contener números.", "danger");
    return;
  }

  // Éxito
  showMessage("Mensaje enviado correctamente.", "success");

  this.reset();
});

function showMessage(text, type) {
  const messageBox = document.getElementById("formMessage");

  messageBox.innerHTML = `
    <div class="alert alert-${type}" role="alert">
      ${text}
    </div>
  `;
}
