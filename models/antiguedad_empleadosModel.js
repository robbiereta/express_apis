var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var antiguedad_empleadosSchema = new Schema({
	'id_empresa' : String,
	'razon_social' : String,
	'antiguedad_actual' : String,
	'nombre_empleado' : String
});

module.exports = mongoose.model('antiguedad_empleados', antiguedad_empleadosSchema);
