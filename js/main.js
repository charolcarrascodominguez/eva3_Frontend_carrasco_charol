/*
Autor: Charol Carraco
Archivo: main.js
Responsabilidad: Orquestador principal del sistema.
*/

document.addEventListener("DOMContentLoaded", async () => {

  const servicesContainer = document.getElementById("servicesContainer");
  const loadingSpinner = document.getElementById("loadingServices");

  try {

    // Cargar todo en paralelo (mejor práctica)
    const [services, testimonials, faq, about] = await Promise.all([
      fetchData("services"),
      fetchData("testimonials"),
      fetchData("faq"),
      fetchData("about")
    ]);

    /* ================= SERVICIOS ================= */

    if (loadingSpinner) {
      loadingSpinner.remove();
    }

    if (services.length === 0) {
      servicesContainer.innerHTML += `
        <p class="text-center text-muted">
          No hay servicios disponibles actualmente.
        </p>
      `;
    } else {
      services.forEach(service => {
        servicesContainer.innerHTML += createServiceCard(service);
      });
    }

    /* ================= TESTIMONIOS ================= */

    if (testimonials.length > 0) {
      loadTestimonials(testimonials);
    }

    /* ================= FAQ ================= */

    if (faq.length > 0) {
      loadFAQ(faq);
    }

    /* ================= ABOUT ================= */

    if (about && about.description) {
      document.getElementById("aboutContainer").innerHTML =
        `<p class="text-center">${about.description}</p>`;
    }

  } catch (error) {

    if (loadingSpinner) {
      loadingSpinner.remove();
    }

    servicesContainer.innerHTML += `
      <p class="text-danger text-center">
        Error al cargar los datos.
      </p>
    `;

    console.error("Error general:", error);
  }

});

/* ================= MODO OSCURO ================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    // Cambiar ícono
    if (document.body.classList.contains("dark-mode")) {
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }

  });

}