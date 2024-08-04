document.getElementById('form-text').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;
    
    alert(`Nombres: ${firstName}\nApellidos: ${lastName}\nNúmero Telefónico: ${phoneNumber}\nCorreo Electrónico: ${email}\nFecha: ${date}\nMensaje: ${message}`);
});