const CartaPorte30 = require('./CartaPorte30');
const Ubicacion = require('./Ubicacion');
const Domicilio = require('./Domicilio');
const CantidadTransporta = require('./CantidadTransporta');
const Mercancia = require('./Mercancia');
const Mercancias = require('./Mercancias');
const Remolques = require('./Remolques');
const Autotransporte = require('./Autotransporte');
const IdentificacionVehicular = require('./IdentificacionVehicular');
const Seguros = require('./Seguros');
const FiguraTransporte = require('./FiguraTransporte');

const CartaPorte30Nodes = {
    CartaPorte30,
    IdentificacionVehicular,
    Remolques,
    Autotransporte,
    Seguros,
    Mercancias,
    Mercancia,
    Domicilio,
    Ubicacion,
    FiguraTransporte,
    CantidadTransporta,
}

module.exports = CartaPorte30Nodes