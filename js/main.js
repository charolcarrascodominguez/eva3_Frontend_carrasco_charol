/*
Autor: Charol Carraco
Archivo: main.js
Responsabilidad: Orquestador principal del sistema.
*/

document.addEventListener("DOMContentLoaded", async () => {

  const services = await fetchData("services");
  const testimonials = await fetchData("testimonials");
  const faq = await fetchData("faq");
  const about = await fetchData("about");

  const servicesContainer = document.getElementById("servicesContainer");

  services.forEach(service => {
    servicesContainer.innerHTML += createServiceCard(service);
  });

  console.log("TESTIMONIOS:", testimonials);
  // Cargar testimonios
  loadTestimonials(testimonials);

  // Cargar FAQ
  loadFAQ(faq);

  // Cargar información About
  if (about.description) {
    document.getElementById("aboutContainer").innerHTML =
      `<p class="text-center">${about.description}</p>`;
  }

});