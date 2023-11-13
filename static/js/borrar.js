document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");

    fetch(`http://127.0.0.1:8000/contactos/${encodeURIComponent(email)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al obtener detalles del contacto. Código de estado: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const emailElemento = document.getElementById("email");
            emailElemento.textContent = data.email;

            const nombreElemento = document.getElementById("nombre");
            nombreElemento.textContent = data.nombre;

            const telefonoElemento = document.getElementById("telefono");
            telefonoElemento.textContent = data.telefono;
        })
        .catch(error => {
            
            errorMensajeElemento.innerHTML = `Error al cargar los detalles del contacto:`;
        });
});

function borrarContacto() {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");

    fetch(`http://127.0.0.1:8000/contactos/${encodeURIComponent(email)}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(async response => {
        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Error al borrar el contacto. Código de estado: ${response.status}. Detalles: ${JSON.stringify(error)}`);
        }
        return response.json();
    })
    .then(data => {
        alert(`Contacto borrado con éxito.`);
        window.location.href = "/";
    })
    .catch(error => {
        alert(`Error al borrar el contacto: ${error.message}`);
    });
}

function cancelar() {
    window.location.href = "/";
}
