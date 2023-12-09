document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");
    var token = sessionStorage.getItem("token");
  
    // Verificar si el token está presente en sessionStorage
    if (!token) {
      console.error('Token no encontrado en sessionStorage.');
      return;
    }


    fetch(`https://contactos-back-3955e37c5233.herokuapp.com/contactos/${encodeURIComponent(email)}`)
        .then(response => response.json())
        .then(data => {
            const contactDetailsDiv = document.getElementById("contact-details");
            contactDetailsDiv.innerHTML = `
                <p>Email: ${data.email}</p>
                <p>Nombre: ${data.nombre}</p>
                <p>Teléfono: ${data.telefono}</p>
            `;
        })
        .catch(error => console.error("Error al obtener detalles del contacto:", error));
});
