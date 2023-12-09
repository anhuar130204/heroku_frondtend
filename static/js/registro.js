async function registrarUsuario() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username: username,
        password: password
    };

    try {
        const response = await fetch('https://contactos-back-3955e37c5233.herokuapp.com/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        alert("¡Bienvenido, " + username + "!\nTu token es: " + result['tu token es']);
        
        // Redirigir solo si la respuesta es exitosa
        if (response.ok) {
            window.location.href = "/token";
        }

    } catch (error) {
        console.error('Error al registrar usuario:', error);
        alert('Error al registrar usuario. Consulta la consola para más detalles.');
    }
}
function regresar() {

  
    window.location.href = "/";
  }
  function token() {
    window.location.href = "/token";
  }