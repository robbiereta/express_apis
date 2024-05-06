const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {	'no_cliente' : Number,	'rfc' : String,	'regimen' : String,	'razon_social' : String,	'cp' : Number,	'uso_cfdi' : String,	'calle' : String,	'correo' : String,	'num_ext' : Number,	'num_int' : Number,	'colonia' : String,	'estado' : String,	'municipio' : String}

let clientesSchema = new Schema(fields);

module.exports = mongoose.model('clientes', clientesSchema);
