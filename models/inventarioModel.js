const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {	'producto' : String,	'cantidad' : String,	'fecha_movimiento' : String}

let inventarioSchema = new Schema(fields);

module.exports = mongoose.model('inventario', inventarioSchema);
