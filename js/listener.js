const form_voluntariados = document.getElementById('alta');
if(form_voluntariados){
    form_voluntariados.addEventListener('submit', function(evento){
        evento.preventDefault();
        addVoluntariado();
        form_voluntariados.reset();
    });

}
const form_login = document.getElementById('login')
if(form_login){
    form_login.addEventListener('submit', function(evento){
        evento.preventDefault();
        checkUsuario();
        form_login.reset();
    });
}


