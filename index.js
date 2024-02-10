function cambiarColor(event) {
    var circulo = document.getElementById('circulo');
    circulo.style.backgroundColor = event.target.value;
}

function aumentarAncho() {
    var circulo = document.getElementById('circulo');
    circulo.style.width = (circulo.offsetWidth + 10) + 'px';
}

function disminuirAncho() {
    var circulo = document.getElementById('circulo');
    circulo.style.width = (circulo.offsetWidth - 10) + 'px';
}

function aumentarAltura() {
    var circulo = document.getElementById('circulo');
    circulo.style.height = (circulo.offsetHeight + 10) + 'px';
}

function disminuirAltura() {
    var circulo = document.getElementById('circulo');
    circulo.style.height = (circulo.offsetHeight - 10) + 'px';
}