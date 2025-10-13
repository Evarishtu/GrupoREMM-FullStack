const contenedor = document.getElementById('alta');
contenedor.addEventListener('submit', function(evento){
    evento.preventDefault();
    addVoluntariado();
    contenedor.reset();
});