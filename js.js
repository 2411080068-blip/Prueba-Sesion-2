document.addEventListener("DOMContentLoaded" ,() => {
    console.log("Página cargada");

    const contacto = document.getElementById("contacto");
    contacto.addEventListener("click", () =>{
        alert("Disponible los martes y fines de semana");
    });
 });