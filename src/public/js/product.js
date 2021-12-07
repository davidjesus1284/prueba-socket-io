// Referencias HTML
const nombre = document.querySelector('#nombre');
const precio = document.querySelector('#precio'); 
const descripcion = document.querySelector('#descripcion');
const codigo = document.querySelector('#codigo');
const ulProductos = document.querySelector('#ulProductos');
const btnCrear = document.querySelector('#btnCrear');

const nombreUpdate = document.querySelector('#nombreUpdate');
const precioUpdate = document.querySelector('#precioUpdate');
const descripcionUpdate = document.querySelector('#descripcionUpdate');
const codigoUpdate = document.querySelector('#codigoUpdate');
const ulProductUp = document.querySelector('#ulProductUp');
const btnActualizar = document.querySelector('#btnActualizar');

let socket  = io();

socket.on('connect', () => {
    console.log("conectado");
});

socket.on('disconnect', () =>{
    console.log('Desconectado')
});

const productosNuevos = ( productos ) => {

    let productHtml = '';
    productHtml += `
        <li>
            <p>
                <h5 class="text-success"> ${ productos.nombre } </h5>
            </p>
        </li>
        <li>
            <p>
                <h5 class="text-success"> ${ productos.descripcion } </h5>
            </p>
        </li>
        <li>
            <p>
                <h5 class="text-success"> ${ productos.precio } </h5>
            </p>
        </li>
        <li>
            <p>
                <h5 class="text-success"> ${ productos.codigo } </h5>
            </p>
        </li>
    `;

    ulProductos.innerHTML = productHtml;

};

const productosActualizados = ( productos ) => {

    let productHtml = '';
    productHtml += `
        <li>
            <p>
                <h5 class="text-success"> ${ productos.nombre } </h5>
            </p>
        </li>
        <li>
            <p>
                <h5 class="text-success"> ${ productos.descripcion } </h5>
            </p>
        </li>
        <li>
            <p>
                <h5 class="text-success"> ${ productos.precio } </h5>
            </p>
        </li>
        <li>
            <p>
                <h5 class="text-success"> ${ productos.codigo } </h5>
            </p>
        </li>
    `;

    ulProductUp.innerHTML = productHtml;

}
socket.on('producto-creado', productosNuevos);
socket.on('producto-newUpdate', productosActualizados)

btnCrear.addEventListener('click', async(e) => {
    e.preventDefault();
    const data = {
        nombre: nombre.value,
        precio: precio.value,
        descripcion: descripcion.value,
        codigo: codigo.value
    }
    
    socket.emit('product-save', data);
});

btnActualizar.addEventListener('click', async(e) => {
    e.preventDefault();
    const data = {
        nombre:         nombreUpdate.value,
        precio:         precioUpdate.value,
        descripcion:    descripcionUpdate.value,
        codigo:         codigoUpdate.value
    }
    
    socket.emit('product-update', data);
})
