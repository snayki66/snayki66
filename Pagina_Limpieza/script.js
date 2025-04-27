// Validación del formulario
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    alert('Formulario enviado correctamente. ¡Gracias por contactarnos!');
    this.reset(); // Limpia el formulario
});

// Animación del botón al hacer clic
const button = document.querySelector('form button');
button.addEventListener('click', function () {
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 300);
});

// Cambio dinámico del fondo
const changeBgButton = document.createElement('button');
changeBgButton.textContent = 'Cambiar Fondo';
changeBgButton.classList.add('btn');
document.body.appendChild(changeBgButton);

changeBgButton.addEventListener('click', function () {
    document.body.style.background = `linear-gradient(135deg, #${Math.floor(Math.random() * 16777215).toString(16)}, #${Math.floor(Math.random() * 16777215).toString(16)})`;
});