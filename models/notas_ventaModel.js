var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var notas_ventaSchema = new Schema({
	'folio_venta' : String,
	'fecha' : String,
	'cliente' : String,
	'lineas_venta' : Array,
	'estatus' : String,
	'anticipo' : Number,
	'observaciones' : String
});

module.exports = mongoose.model('notas_venta', notas_ventaSchema);
