const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {	'precio' : String,	'categoria' : String,	'descripcion' : String,	'marca' : String,	'especificaciones' : String,	'codigo' : String,	'moto' : String,	'compatibilidades' : Array}

let productosSchema = new Schema(fields);

module.exports = mongoose.model('productos', productosSchema);
