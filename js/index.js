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