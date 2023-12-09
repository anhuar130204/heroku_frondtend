function getAll() {
    var token = sessionStorage.getItem("token");
  
    if (!token) {
      console.error('Token no encontrado en sessionStorage.');
      return;
    }
  
    var request = new XMLHttpRequest();
    var url = "https://contactos-back-3955e37c5233.herokuapp.com/contactos";
    request.open('GET', url);
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Authorization', 'Bearer ' + token);

    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const response = request.responseText;
                const json = JSON.parse(response);
                console.log("response: " + response);
                console.log("json: " + JSON.stringify(json));
                console.log("status_code: " + request.status);

                const tbody_contactos = document.getElementById("tbody_contactos");

                tbody_contactos.innerHTML = "";

                json.forEach((contacto) => {
                    var tr = document.createElement("tr");
                    var td_email = document.createElement("td");
                    var td_nombre = document.createElement("td");
                    var td_telefono = document.createElement("td");
                    var td_options = document.createElement("td");

                    td_email.innerHTML = contacto["email"];
                    td_nombre.innerHTML = contacto["nombre"];
                    td_telefono.innerHTML = contacto["telefono"];

                    var verButton = document.createElement("button");
                    verButton.textContent = "Ver";
                    verButton.addEventListener("click", function () {
                        window.location.href = `ver?email=${contacto["email"]}`;
                    });

                    var editarButton = document.createElement("button");
                    editarButton.textContent = "Editar";
                    editarButton.addEventListener("click", function () {
                        window.location.href = `editar?email=${contacto["email"]}`;
                    });

                    var eliminarButton = document.createElement("button");
                    eliminarButton.textContent = "Borrar";
                    eliminarButton.addEventListener("click", function () {
                        window.location.href = `borrar?email=${contacto["email"]}`;
                    });

                    td_options.appendChild(verButton);
                    td_options.appendChild(editarButton);
                    td_options.appendChild(eliminarButton);

                    tr.appendChild(td_email);
                    tr.appendChild(td_nombre);
                    tr.appendChild(td_telefono);
                    tr.appendChild(td_options);

                    tbody_contactos.appendChild(tr);
                });
            } else {
                console.error('Error HTTP al intentar realizar la solicitud. Código de estado:', request.status);
            }
        }
    };

    request.send();
}
function cerrarSesion() {
    // Limpiar el token almacenado en sessionStorage
    sessionStorage.removeItem("token");
  
    // Redirigir a la página de inicio de sesión u otra página que desees
    window.location.href = "/";
  }