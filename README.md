# Landing Page - Centro de Negocios Santiago SERCOTEC

**Autor:** Charol Carraco  
**Asignatura:** Desarrollo Frontend  
**Evaluación:** Evaluación Sumativa U3  
**Framework utilizado:** Bootstrap 5  

---

## Descripción del Proyecto

Este proyecto consiste en el rediseño de la landing page del Centro de Negocios Santiago de SERCOTEC, incorporando componentes modernos, consumo dinámico de API, arquitectura modular y buenas prácticas de desarrollo frontend.

La solución incluye:

- Componentes reutilizables
- Consumo de API REST
- Carrusel responsive
- Navegación interactiva
- Validación segura de formularios
- Diseño adaptable (responsive)
- Integración tipo CMS (gestionable vía Postman)

---

##  Estructura del Proyecto





---

##  Componentes Implementados

###  1. Tarjeta de Servicios Reutilizable
- Imagen
- Título
- Descripción
- Botón "Contáctanos"
- Autocompleta el campo servicio en el formulario

###  2. Carrusel de Testimonios
- Componente Bootstrap
- Responsive
- Accesible
- Generado dinámicamente desde API

###  3. FAQ Dinámico
- Acordeón Bootstrap
- Carga dinámica desde API

###  4. Formulario de Contacto Seguro
- Validación lado cliente
- Campos obligatorios
- Verificación de formato email
- Scroll automático desde tarjeta

---

##  Integración API (CMS)

La landing consume datos desde una API REST:


La administración del contenido puede realizarse mediante Postman.

Ejemplo de estructura JSON esperada:

#json
[
  {
    "title": "Asesoría Financiera",
    "description": "Apoyo en planificación financiera.",
    "image": "https://ejemplo.com/imagen.jpg"
  }
]



---

## ️ Configuración de la API Local (db.json)

Para simular el backend y cumplir con el requisito de integración CMS, se utiliza **JSON Server**, que permite crear una API REST completa de forma sencilla.

---

###  1. Instalar Node.js

Descargar e instalar la versión LTS desde:

https://nodejs.org

Verificar instalación en la terminal:


node -v
npm -v


## Ejecutar la api

docker run -it --rm -v "RUTA LOCAL\Evaluacion N3:/app" -w /app -p 3000:3000 --entrypoint sh node:24-alpine

# docker run -it --rm -v "C:\Users\manue\Documents\Universidad\Cuarto_trimestre\Desarrollo_Frontend\Evaluacion N3:/app" -w /app -p 3000:3000 --entrypoint sh node:24-alpine

npm install -g json-server


json-server --watch db.json --port 3000


#Probar en navegador

http://localhost:3000/services

#URL repositorio GIT

https://github.com/charolcarrascodominguez/eva3_Frontend_carrasco_charol