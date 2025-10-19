function addUsuario(){
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const nuevo_usuario = {
        nombre,
        email,
        password
    }
    usuarios.push(nuevo_usuario);
    mostrarDatosUsuarios();
}
