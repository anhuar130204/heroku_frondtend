async function submitForm(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`http://127.0.0.1:8000/usuarios/?username=${username}&password=${password}`);
        const data = await response.json();

        if ('token' in data) {
            alert('tu  Token es : ' + data.token);
            window.location.href = "/token";
            // You can redirect or perform additional actions here after successful login
        } else {
            alert('Invalid credentials. ' + data.mensaje);
        }
    } catch (error) {
        console.error('Error during fetch:', error);
        alert('An error occurred during login.');
    }
}
