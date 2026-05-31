/*
Autor: Charol Carraco
Archivo: validation.js
Responsabilidad: Validación del lado cliente y seguridad básica.
*/

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !contact || !message) {
    alert("Completar todos los campos.");
    return;
  }

  // Nombre: solo letras y espacios
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name)) {
    alert("El nombre solo puede contener letras.");
    return;
  }

  // Correo válido
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Correo electrónico inválido.");
    return;
  }

  // Teléfono: solo números
  if (!/^\d+$/.test(contact)) {
    alert("El teléfono solo puede contener números.");
    return;
  }

  alert("Formulario enviado correctamente.");
  this.reset();
});