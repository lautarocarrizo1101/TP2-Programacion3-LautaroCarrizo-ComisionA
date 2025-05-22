const boton = document.getElementById('area');

boton.addEventListener("click", () => {
    const A = parseFloat(document.getElementById('ladoA').value);
    const B = parseFloat(document.getElementById('ladoB').value);
    const C = parseFloat(document.getElementById('ladoC').value);

    const alturaTriangulo = A - C;

    const areaRectangulo = B * C;

    const areaTriangulo = alturaTriangulo * B;

    const areaTotal = areaRectangulo + areaTriangulo;

    alert(`El Area es de: ${areaTotal.toFixed(2)}`);
});