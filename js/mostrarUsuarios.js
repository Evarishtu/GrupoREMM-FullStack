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