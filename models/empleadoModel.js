var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var empleadoSchema = new Schema({
	'empleado' : Object
});

module.exports = mongoose.model('empleado', empleadoSchema);
