/*
Autor: Charol Carraco
Archivo: components.js
Responsabilidad: Generación dinámica de componentes reutilizables.
*/

/* Tarjeta reutilizable de servicio */
function createServiceCard(service) {
  return `
  <div class="col-md-4 mb-4">
    <div class="card h-100 shadow">
      <img src="${service.image}" class="card-img-top img-fluid" loading="lazy">
      <div class="card-body">
        <h5>${service.title}</h5>
        <p>${service.description}</p>
        <button class="btn btn-danger w-100"
          onclick="selectService('${service.title}')">
          Contáctanos
        </button>
      </div>
    </div>
  </div>`;
}

/* Cargar testimonios en carrusel */
function loadTestimonials(data) {
  const container = document.getElementById("testimonialContainer");
  container.innerHTML = "";

  data.forEach((t, index) => {
    container.innerHTML += `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <div class="card text-center p-4 border-0">
          <p class="mb-3">"${t.message}"</p>
          <h5 class="mb-0">- ${t.author}</h5>
        </div>
      </div>
    `;
  });

}

/* Cargar preguntas frecuentes */
function loadFAQ(data) {
  const container = document.getElementById("faqContainer");
  container.innerHTML = "";

  data.forEach((faq, index) => {
    container.innerHTML += `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button ${index !== 0 ? "collapsed" : ""}"
            data-bs-toggle="collapse"
            data-bs-target="#collapse${index}">
            ${faq.question}
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? "show" : ""}">
          <div class="accordion-body">
            ${faq.answer}
          </div>
        </div>
      </div>`;
  });
}

/* Autocompletar servicio en formulario */
function selectService(serviceName) {
  document.getElementById("service").value = serviceName;
  document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
}