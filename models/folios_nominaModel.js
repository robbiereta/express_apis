var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var folios_nominaSchema = new Schema({
	'id_empresa' : String,
	'razon_social' : String,
	'folio_actual' : String
});

module.exports = mongoose.model('folios_nomina', folios_nominaSchema);
