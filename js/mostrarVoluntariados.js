function mostrarDatos(){
    const form_voluntariados = document.querySelector('.consulta')

    form_voluntariados.innerHTML = `
        <div> 
            <h3>Título</h3>
        </div>
        <div>
            <h3>Usuario</h3>
        </div>
        <div>
            <h3>Fecha</h3>
        </div>
        <div>
            <h3>Descripción</h3>
        </div>
        <div>
            <h3>Tipo</h3>
        </div>
        <div>
            <h3>Acciones</h3>
        </div> 
    `;
    for(let i = 0; i < voluntariados.length; i++){
        form_voluntariados.innerHTML += `
        <div>
            <p>${voluntariados[i].titulo}</p>
        </div>
        <div>
            <p>${voluntariados[i].usuario}</p>
        </div>
        <div>
            <p>${voluntariados[i].fecha}</p>
        </div>
        <div>
            <p>${voluntariados[i].descripcion}</p>
        </div>
        <div>
            <p>${voluntariados[i].tipo}</p>
        </div>
        <div>
            <button type="button" class="btn btn-danger" onclick='eliminarVoluntariado(${i})'>Borrar</button>
        </div> 
        `
    }
}