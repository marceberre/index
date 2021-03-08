var correo = document.getElementById('correo');
var password = document.getElementById('password');
var error = document.getElementById('error');
error1.style.color = 'red';
error2.style.color = 'red';

function enviarFormulario(){
    var mensajeError =[];

    if(correo.value === null || correo.value === ''){
        mensajeError.push('Ingresa tu correo');
        correo.style.backgroundColor = 'red';
        error1.innerHTML = mensajeError.join('');
    }

    if(password.value === null || password.value === ''){
        mensajeError.push('Ingresa tu contraseña');
        error2.innerHTML = mensajeError.join('');
    }

    return false;
}

