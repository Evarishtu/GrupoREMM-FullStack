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





         
           

