const { Socket } = require('socket.io');
const ProductoService = require('../services/productService');

const socketController = async(socket = new Socket(), io) => {

    socket.on('product-save', async (data) => {
        const productoService = new ProductoService(data);
        io.emit('producto-creado', productoService);
        await productoService.crearProducto();
    });

    socket.on('product-update', async (data) => {
        const productoService = new ProductoService(data);
        const productoActualizado = await productoService.actualizarUno(data);
        io.emit('producto-newUpdate', productoActualizado);
    })
}

module.exports = {
    socketController
}