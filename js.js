document.addEventListener("DOMContentLoaded" ,() => {
    console.log("Página cargada");

    const contacto = document.getElementById("contacto");
    contacto.addEventListener("click", () =>{
        alert("Disponible los martes y fines de semana");
    });
 });
 window.addEventListener("load", function () {
    const modal = document.getElementById("bienvenida-modal");
    const botonCerrar = document.getElementById("cerrar-modal");

    modal.style.display = "flex";

    botonCerrar.addEventListener("click", function () {
        modal.style.display = "none";
    });
});
