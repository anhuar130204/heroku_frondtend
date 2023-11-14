document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");

    const editContactForm = document.getElementById("edit-contact-form");
    const emailInput = document.getElementById("email");
    const nombreInput = document.getElementById("nombre");
    const telefonoInput = document.getElementById("telefono");

    fetch(`https://contactos-back-3955e37c5233.herokuapp.com/contactos/${encodeURIComponent(email)}`)
        .then(response => response.json())
        .then(data => {
            emailInput.value = data.email;
            nombreInput.value = data.nombre;
            telefonoInput.value = data.telefono;
        })
        .catch(error => console.error("Error al obtener detalles del contacto:", error));
});

function actualizar() {
    const nuevoNombre = document.getElementById("nombre").value;
    const nuevoTelefono = document.getElementById("telefono").value;

    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");

    fetch(`https://contactos-back-3955e37c5233.herokuapp.com/contactos/${encodeURIComponent(email)}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            nombre: nuevoNombre,
            telefono: nuevoTelefono,
        }),
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(error => {
                throw new Error(`Error al actualizar el contacto. Código de estado: ${response.status}. Detalles: ${JSON.stringify(error)}`);
            });
        }
        return response.json();
    })
    .then(data => {
        const mensajeElemento = document.getElementById("mensaje");
        mensajeElemento.innerHTML = `Contacto actualizado con éxito: ${data.email}, ${data.nombre}, ${data.telefono}`;

        const errorMensajeElemento = document.getElementById("error-mensaje");
        errorMensajeElemento.innerHTML = "";

        window.location.href = "/";
    })
    .catch(error => {
        const errorMensajeElemento = document.getElementById("error-mensaje");
        errorMensajeElemento.innerHTML = `Error al actualizar el contacto: ${error.message}`;

        const mensajeElemento = document.getElementById("mensaje");
        mensajeElemento.innerHTML = "";
    });
}
