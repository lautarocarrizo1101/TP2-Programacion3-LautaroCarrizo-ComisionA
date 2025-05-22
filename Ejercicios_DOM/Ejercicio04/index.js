const boton = document.getElementById('Calcular')

boton.addEventListener("click", () => {
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);

    const imc = peso/(estatura*estatura);

    alert(`Su IMC es: ${imc.toFixed(2)}`);
});