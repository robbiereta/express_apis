const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {

let inventarioSchema = new Schema(fields);

module.exports = mongoose.model('inventario', inventarioSchema);