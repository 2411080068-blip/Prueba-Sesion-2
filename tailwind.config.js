const defaultTheme = require('tailwindcss/defaultTheme')

// Función para mostrar la sección seleccionada
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll("#inicio, #carreras, #docentes, #sedes, #eventos, #registro");
  secciones.forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// Efecto fade-in para imágenes
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  images.forEach(img => observer.observe(img));
});
