# Landing Page - Centro de Negocios Santiago SERCOTEC

**Autor:** Charol Carrasco
**Asignatura:** Desarrollo Frontend
**Evaluación:** Evaluación Sumativa Unidad 3
**Framework Utilizado:** Bootstrap 5
**Tipo de Proyecto:** Frontend con integración de CMS simulado



# Descripción del Proyecto

Este proyecto corresponde al rediseño y desarrollo de una **Landing Page para el Centro de Negocios Santiago de SERCOTEC**, aplicando buenas prácticas de desarrollo frontend moderno.

La solución fue construida utilizando una arquitectura modular y desacoplada, permitiendo la carga dinámica de contenido desde una API simulada mediante JSON Server. Además, incorpora criterios de accesibilidad, seguridad básica, optimización de rendimiento y diseño responsive orientado a la experiencia del usuario.

## Características Principales

* Componentes reutilizables.
* Consumo dinámico de datos desde API.
* Integración con CMS simulado mediante JSON Server.
* Diseño responsive adaptable a distintos dispositivos.
* Implementación de criterios de accesibilidad (WCAG 2.1).
* Validación segura de formularios.
* Optimización de carga y rendimiento.
* Código organizado y modular.



#  Arquitectura del Proyecto

La aplicación sigue una estructura modular basada en el principio de **Separación de Responsabilidades (SRP)**, donde cada archivo cumple una función específica.

| Archivo            | Función                                 |
|  |  |
| index.html       | Vista principal de la aplicación        |
| css/styles.css   | Estilos personalizados                  |
| js/api.js        | Comunicación con la API                 |
| js/components.js | Creación de componentes reutilizables   |
| js/main.js       | Orquestación principal de la aplicación |
| js/validation.js | Validación y seguridad del formulario   |
| db.json          | Base de datos simulada (CMS)            |



# Estructura del Proyecto


eva3_Frontend_carrasco_charol-main/
│
├── assets/
│   └── images/
│
├── css/
│   └── styles.css
│
├── js/
│   ├── api.js
│   ├── components.js
│   ├── main.js
│   └── validation.js
│
├── Imagenes/
├── db.json
├── index.html
└── README.md




# Componentes Reutilizables

## 1. Tarjeta de Servicios

Cada servicio es generado dinámicamente e incluye:

* Imagen.
* Título.
* Descripción.
* Botón "Contáctanos".
* Autocompletado del servicio seleccionado en el formulario.



## 2. Carrusel de Testimonios

Características:

* Generación dinámica desde API.
* Diseño responsive.
* Navegación accesible.
* Uso de atributos ARIA para mejorar la experiencia de usuarios con tecnologías asistivas.



## 3. Preguntas Frecuentes (FAQ)

Implementado mediante:

* Acordeón Bootstrap.
* Carga dinámica desde endpoint.
* Fácil escalabilidad para nuevos contenidos.



## 4. Formulario de Contacto

Incluye:

* Validación personalizada.
* Campos obligatorios.
* Protección básica contra bots mediante Honeypot.
* Mensajes dinámicos accesibles.



# Consumo de API

Para simular un CMS se utilizó **JSON Server**.

## URL Base


http://localhost:3000


## Endpoints Consumidos


/services
/testimonials
/faq
/about


## Ejemplo de Consumo

javascript
const API_URL = "http://localhost:3000";

async function fetchData(endpoint) {
  const response = await fetch(${API_URL}/${endpoint});
  return await response.json();
}


### Tecnologías Utilizadas

* Método HTTP: GET.
* Respuesta en formato JSON.
* Programación asíncrona con async/await.
* Manejo básico de errores.



# Accesibilidad Implementada

El proyecto incorpora recomendaciones basadas en **WCAG 2.1**:

* Etiquetas (label) correctamente asociadas a los campos.
* Uso de aria-live para mensajes dinámicos.
* Atributos aria-label en elementos interactivos.
* Roles semánticos como:

  * banner
  * main
  * contentinfo
* Imágenes con atributo alt.
* Navegación clara y accesible.
* Contraste adecuado para mejorar la legibilidad.



# 🔒 Seguridad Implementada

Aunque se trata de una aplicación frontend, se incorporaron medidas preventivas para mejorar la seguridad:

* Validación mediante expresiones regulares.
* Sanitización básica contra ataques XSS.
* Honeypot anti bots.
* Prevención de envíos múltiples.
* Validación de campos obligatorios.

## Ejemplo de Sanitización

javascript
function sanitize(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}





# Buenas Prácticas Aplicadas

Durante el desarrollo se implementaron prácticas orientadas a la mantenibilidad y escalabilidad del proyecto:

* Arquitectura modular.
* Componentes reutilizables.
* Consumo desacoplado de API.
* Uso de async/await.
* Validaciones del lado cliente.
* Control de versiones con Git.

Estas prácticas permiten obtener una solución más robusta, mantenible y alineada con estándares actuales de desarrollo frontend.



# Control de Versiones

El proyecto fue gestionado utilizando Git y GitHub.

Características:

* Repositorio público.
* Commits progresivos.
* Historial documentado.
* Versionado incremental durante el desarrollo.

**Repositorio:**

https://github.com/charolcarrascodominguez/eva3_Frontend_carrasco_charol




# Instalación y Ejecución

## 1. Instalar Node.js

https://nodejs.org

## 2. Instalar JSON Server


npm install -g json-server


## 3. Ejecutar la API


json-server --watch db.json --port 3000


## 4. Ejecutar la Aplicación

Abrir el archivo:

index.html



# Conclusión

Este proyecto cumple con los requerimientos definidos para la evaluación, incorporando conceptos fundamentales del desarrollo frontend moderno:

* Uso de Bootstrap 5.
* Consumo dinámico de datos.
* Componentes reutilizables.
* Accesibilidad.
* Seguridad básica.
* Optimización de rendimiento.
* Arquitectura modular.
* Documentación técnica.

Como resultado, se obtiene una solución funcional, escalable y centrada en el usuario, alineada con las buenas prácticas actuales de desarrollo web.
