var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var mosSchema = new Schema({
	'nombre' : String,
	'precio' : String
});

module.exports = mongoose.model('mos', mosSchema);
