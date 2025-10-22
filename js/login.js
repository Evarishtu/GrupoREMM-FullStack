function mostrarUsuarioActivo(){
    const usuario_activo = localStorage.getItem('usuarioActivo');
    const campo_usuario_activo = document.getElementById('usuario-logueado');

    if(campo_usuario_activo){
        if(usuario_activo){
            campo_usuario_activo.innerHTML = `${usuario_activo}`;
        }
    }else{
        campo_usuario_activo.textContent = '';
    }
}

function checkUsuario(){
    const usuario = document.getElementById('id').value;
    const password = document.getElementById('pass').value;
    let encontrado = false;
    for (let i = 0; i < usuarios.length; i++){
        if (usuario === usuarios[i].email){
            encontrado = true;
            if(password === usuarios[i].password){
                localStorage.setItem('usuarioActivo', usuario);
                mostrarUsuarioActivo();
            }
            else{
                console.log('pass incorrecto');
            }
            break;
        }
    }
    if(!encontrado){
        console.log('usuario no existe');
    }
}