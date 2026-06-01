

boton.addEventListener("click", function() {
    alert("Hola, gracias por visitar mi perfil!");
});


boton.addEventListener("click", function() {
    const seccionContacto = document.getElementById("contacto");

    if (!saludoMostrado) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "Gracias por visitar mi perfil. Espero que volvamos a vernos!";
        mensaje.style.color = "#27ae60";
        mensaje.style.fontWeight = "bold";
        seccionContacto.appendChild(mensaje);

        boton.textContent = "Saludo enviado";
        boton.disabled = true;
        boton.style.backgroundColor = "#7f8c8d";

        saludoMostrado = true;
    }
});

const boton2 = document.getElementById("btn-nombre");
let nombreMostrado = false;

boton2.addEventListener("click", function() {
    const seccionProyecto= document.getElementById("proyectos");

if (!nombreMostrado) {
    const botonTexto = document.querySelector( "h1");
    botonTexto.textContent = "Alexis Arriola Martinez";
    bottonTexto.style.color = "#aeac27";
    boton2.style.fontWeight = "bold";

}
})
