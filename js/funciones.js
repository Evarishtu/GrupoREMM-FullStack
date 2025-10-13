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
    const contenedor = document.querySelector('.consulta')

    contenedor.innerHTML = `
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
        contenedor.innerHTML += `
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
