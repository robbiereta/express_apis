const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {

let clientesSchema = new Schema(fields);

module.exports = mongoose.model('clientes', clientesSchema);