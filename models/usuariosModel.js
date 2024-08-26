var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usuariosSchema = new Schema({
	'nombre_comercial' : String,
	'razon_social' : String,
	'rfc' : String,
	'codigo_postal' : String,
	'direccion' : Array,
	'regimen_fiscal' : String,
	'datos_emisor_Nomina12' : Array,
	'usr' : String,
	'pass' : String,
	'timbres_disponibles' : Number
});

module.exports = mongoose.model('usuarios', usuariosSchema);
