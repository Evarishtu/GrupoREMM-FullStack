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