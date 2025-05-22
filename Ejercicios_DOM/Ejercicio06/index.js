const boton = document.getElementById('boton');

boton.addEventListener("click", () => {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const correo = document.getElementById('correo').value.trim();

    let mensaje = "";
    let esValido = true;

    if(!nombre||!apellido||nombre.lenght>50||apellido.lenght>50){
        mensaje += 'El nombre y apellido no pueden estar vacíos y deben tener un máximo de 50 caracteres.<br>';
        esValido = false;
    }

    if(isNaN(edad)||edad<18){
        mensaje += 'La edad no puede ser negativa y debe ser mayor o igual a 18 años.<br>';
        esValido = false;
    }

    if(isNaN(altura)||altura<=0||altura>230){
        mensaje += 'La altura no puede ser negativa o mayor a 2,30 cm.<br>';
        esValido = false;
    }

    if(!correo||!correo.includes('@')){
        mensaje += 'El correo electrónico no puede estar vacío y debe incluir el "@". <br>';
        esValido = false;
    }

    const resultado = document.getElementById('mensaje');

    if(esValido){
        resultado.innerHTML = '¡Todos los datos son válidos!';
        resultado.classList.add("Valido");
    }else{
        resultado.innerHTML = mensaje;
        resultado.classList.add("NoValido");
    }
});