var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var importarFacturasSchema = new Schema({
	'codigo' : String,
	'cantidad' : Number,
	'descripcion' : String,
	'precio_bicivic' : String,
	'precio_compra' : Number,
	'proveedor' : String,
	'fecha_factura' : String
});

module.exports = mongoose.model('importarFacturas', importarFacturasSchema);
