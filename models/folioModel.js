const mongoose = require('mongoose');

const folioSchema = new mongoose.Schema({
  ultimoFolio: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model('Folio', folioSchema);