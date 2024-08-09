var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var empleadoSchema = new Schema({
	'empleado' : Array
});

module.exports = mongoose.model('empleado', empleadoSchema);
