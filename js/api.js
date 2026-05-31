/*
Autor: Charol Carraco
Archivo: api.js
Responsabilidad: Comunicación con API (CMS / Backend).
*/

const API_URL = "http://localhost:3000";

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    if (!response.ok) throw new Error("Error en API");
    return await response.json();
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return [];
  }
}