const Product = require('../models/product');


class ProductoService {

    constructor(data) {
        this.nombre = data.nombre;
        this.precio = data.precio;
        this.descripcion = data.descripcion;
        this.codigo = data.codigo;
    }

    async crearProducto() {

        try {
            const data = {
                nombre: this.nombre,
                precio: this.precio,
                descripcion: this.descripcion,
                codigo: this.codigo
            }
            const producto = new Product(data);
            console.log(producto);
            const resp = await producto.save();
            return resp;
        } catch (error) {
            return error;
        }
    }

    async actualizarUno(data) {

        try {
            const filter = { name: Number(data.codigo) };
            const buscar = await Product.findOne(filter);
            const id = buscar._id;
            const actualizar = await Product.findByIdAndUpdate(id, data, {new: true});
            const { nombre, precio, codigo, descripcion } = actualizar;
            return { nombre, precio, codigo, descripcion };
        } catch (error) {
            return error;
        }
    }
}

module.exports = ProductoService;