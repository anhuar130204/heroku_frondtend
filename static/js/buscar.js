function buscarporEmail() {
    const emailInput = document.getElementById("buscarEmail").value;
    const request = new XMLHttpRequest();

    request.open('GET', `http://127.0.0.1:8000/contactos/${emailInput}`);
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);

        const resultTable = document.getElementById("buscarResult");

        resultTable.innerHTML = "";

        if (request.status === 200) {
            const row = resultTable.insertRow(0);

            const emailCell = row.insertCell(0);
            const nombreCell = row.insertCell(1);
            const telefonoCell = row.insertCell(2);

            emailCell.innerHTML = json.email;
            nombreCell.innerHTML = json.nombre;
            telefonoCell.innerHTML = json.telefono;
        } else {
            const errorMessage = document.createElement("p");
            errorMessage.innerHTML = "Contacto no encontrado.";
            resultTable.appendChild(errorMessage);
        }
    };
}
