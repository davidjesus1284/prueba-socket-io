const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    precio: {
        type: Number,
        default: 0
    },
    codigo: {
        type: Number,
        require: true
    },
    descripcion: { type: String },
    disponible: { type: Boolean, defult: true },
});

ProductSchema.methods.toJSON = function() {
    const { __v, estado, ...data  } = this.toObject();
    return data;
}


module.exports = model( 'Product', ProductSchema );
