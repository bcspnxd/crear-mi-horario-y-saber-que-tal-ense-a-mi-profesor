// Este archivo NO contiene lógica de horarios, profesores ni Firebase.
// Solo detalles menores de presentación de la propia landing page.

// Mantiene el año del footer siempre actualizado.
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
