function insertar() {
    var email = document.getElementById('email').value;
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;

    var request = new XMLHttpRequest();
    request.open('POST', "https://contactos-back-3955e37c5233.herokuapp.com/contactos");
    request.setRequestHeader("Content-Type", "application/json");

    var data = {
        email: email,
        nombre: nombre,
        telefono: telefono
    };

    request.send(JSON.stringify(data));

    request.onload = function () {
        if (request.status === 200) {
            const response = JSON.parse(request.responseText);
            console.log("Respuesta:", response);
            alert("Contacto insertado correctamente");
        } else {
            console.error("Error al hacer la solicitud:", request.status, request.statusText);
            alert("Error al insertar el contacto. Por favor, inténtalo de nuevo.");
        }
    };
}

function cancelar() {
    window.location.href = "/";
    alert("Acción cancelada");
}
