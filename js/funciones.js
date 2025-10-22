/*AÑADIR HEAD AND MENU*/
function addMenu() {
  fetch('menu.html')
    .then(response => response.text())
    .then(data => document.getElementById('menu').outerHTML = data);
}

/*DASHBOARD*/

function mostrarDashboard() {
    const data_ofertas = document.querySelector('#ofertas');
    data_ofertas.innerHTML = '';
    
    for (let i = 0; i < ofertas.length; i++) {
        const fila = `
            <div class="col mb-3">
                <div class="card p-3">
                    <h5>${ofertas[i].titulo}</h5>
                    <p>${ofertas[i].descripcion}</p>
                    <div class="d-flex justify-content-between">
                        <small>${ofertas[i].user}</small>
                        <small>${ofertas[i].fecha}</small>
                    </div>
                </div>
            </div>
        `;
        data_ofertas.innerHTML += fila;
    }
}

/*LOGIN*/

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

/*VOLUNTARIADOS*/

function addVoluntariado(){
    const titulo = document.getElementById('titulo').value;
    const usuario = document.getElementById('usuario').value;
    const fecha = document.getElementById('fecha').value;
    const descripcion = document.getElementById('descripcion').value;
    const tipo = document.getElementById('tipo').value;

    const nuevo_voluntariado = {
        titulo: titulo,
        usuario: usuario,
        fecha: fecha,
        descripcion: descripcion,
        tipo: tipo
    }
    voluntariados.push(nuevo_voluntariado);
    mostrarDatos();
}

function eliminarVoluntariado(indice){
    voluntariados.splice(indice, 1);   
    mostrarDatos();
}

function mostrarDatos(){
    const form_voluntariados = document.querySelector('#consulta')

    form_voluntariados.innerHTML = '';
        
    
    for(let i = 0; i < voluntariados.length; i++){
        
        const fila =`
            <tr>
                <td>${voluntariados[i].titulo}</td>        
                <td>${voluntariados[i].usuario}</td>       
                <td>${voluntariados[i].fecha}</td>      
                <td>${voluntariados[i].descripcion}</td>      
                <td>${voluntariados[i].tipo}</td>
            
                <td>
                    <button type="button" class="btn btn-danger" onclick='eliminarVoluntariado(${i})'>Borrar</button>
                </td>
            </tr> 
        `;
        form_voluntariados.innerHTML += fila;
    }
}

/*VOLUNTARIADOS*/

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

function eliminarUsuario(indice){
    usuarios.splice(indice, 1);   
    mostrarDatosUsuarios();
}

function mostrarDatosUsuarios(){
    const form_usuarios = document.querySelector('#consulta')

    form_usuarios.innerHTML = '';
        
    
    for(let i = 0; i < usuarios.length; i++){
        
        const fila =`
            <tr>
                <td>${usuarios[i].nombre}</td>        
                <td>${usuarios[i].email}</td>       
                <td>${usuarios[i].password}</td>
                <td>
                    <button type="button" class="btn btn-danger" onclick='eliminarUsuario(${i})'>Borrar</button>
                </td>
            </tr> 
        `;
        form_usuarios.innerHTML += fila;
    }
}
mostrarDatosUsuarios();