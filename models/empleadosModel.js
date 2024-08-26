var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var empleadosSchema = new Schema({
	'SubTotal' : Number,
	'Descuento' : Number,
	'Total' : Number,
	'LugarExpedicion' : Number,
	'Emisor' : Array,
	'Receptor' : Array,
	'Conceptos' : Array,
	'Datos_Nomina12' : Array,
	'Percepciones' : Array,
	'Deducciones' : Array,
	'OtrosPagos' : Array
});

module.exports = mongoose.model('empleados', empleadosSchema);
