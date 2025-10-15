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