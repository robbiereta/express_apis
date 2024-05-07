const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {	'folio_pedido' : String,	'proveedor' : String,	'lineas_pedido' : Array,	' fecha' : String}

let pedido_a_provSchema = new Schema(fields);

module.exports = mongoose.model('pedido_a_prov', pedido_a_provSchema);
