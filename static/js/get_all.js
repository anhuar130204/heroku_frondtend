function getAll() {
    var request = new XMLHttpRequest;
    request.open('GET', "https://contactos-back-3955e37c5233.herokuapp.com/contactos");
    request.send();

   
    request.onload = (e) => {
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
    };
}
