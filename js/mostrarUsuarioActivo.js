function mostrarUsuarioActivo(){
    const usuario_activo = localStorage.getItem('usuarioActivo');
    const campo_usuario_activo = document.getElementById('usuario-logueado');

    if(campo_usuario_activo){
        if(usuario_activo){
            campo_usuario_activo.innerHTML = `${usuario_activo}`;
        }
    }
}
document.addEventListener('DOMContentLoaded', mostrarUsuarioActivo);
