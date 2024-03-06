var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var facturasBorradorObjSchema = new Schema({
	'factura' : Array
});

module.exports = mongoose.model('facturasBorradorObj', facturasBorradorObjSchema);
