document.getElementById('animateBtn').addEventListener('click', () => {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
    setTimeout(() => {
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.style.color = '#333';
    }, 3000);
});
function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    document.getElementById('reloj').innerHTML = `La hora es: ${horas}:${minutos}:${segundos}`;
}

setInterval(actualizarReloj, 1000);