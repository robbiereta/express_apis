const CFDI = require('./lib/CFDI.js');
const CFDIPago = require('./lib/CFDI-pago.js');
const CFDICartaPorte = require('./lib/CFDI-carta-porte.js');
const CFDICartaPorte30 = require('./lib/CFDI-carta-porte30.js');
const CartaPorte30Nodes = require('./lib/Node/CartaPorte30/index.js');
const CartaPorteNodes = require('./lib/Node/CartaPorte/index.js');
const Emisor = require('./lib/Node/Emisor.js');
const Receptor = require('./lib/Node/Receptor.js');
const Concepto = require('./lib/Node/Concepto.js');
const CfdiRelacionado = require('./lib/Node/CfdiRelacionado.js');
const Traslado = require('./lib/Node/Impuesto/Traslado.js');
const Retencion = require('./lib/Node/Impuesto/Retencion.js');
const CuentaPredial = require('./lib/Node/CuentaPredial.js');
const InformacionAduanera = require('./lib/Node/InformacionAduanera.js');
const Parte = require('./lib/Node/Parte.js');
const Pagos = require('./lib/Node/Pagos.js');
const Complemento = require('./lib/Node/Complemento.js');
const InformacionGlobal = require('./lib/Node/InformacionGlobal.js');
const DoctoRelacionado = require('./lib/Node/Pago20/DoctoRelacionado.js');
const Pago = require('./lib/Node/Pago20/Pago.js');
const Totales = require('./lib/Node/Pago20/Totales.js');
const TrasladoDR = require('./lib/Node/Pago20/ImpuestosDR/TrasladoDR.js');
const RetencionDR = require('./lib/Node/Pago20/ImpuestosDR/RetencionDR.js');
const TrasladoP = require('./lib/Node/Pago20/ImpuestosP/TrasladoP.js');
const RetencionP = require('./lib/Node/Pago20/ImpuestosP/RetencionP.js');
const ImpuestosP = require('./lib/Node/Pago20/ImpuestosP/ImpuestosP.js');

module.exports = {
  CFDI,
  CFDIPago,
  CFDICartaPorte30,
  CartaPorte30Nodes,
  CFDICartaPorte,
  CartaPorteNodes,
  Emisor,
  Receptor,
  Concepto,
  CfdiRelacionado,
  Traslado,
  Retencion,
  CuentaPredial,
  InformacionAduanera,
  Parte,
  Complemento,
  Pagos,
  InformacionGlobal,
  PagosNodes: {
    DoctoRelacionado,
    Pago,
    Totales,
    TrasladoDR,
    RetencionDR,
    ImpuestosP,
    TrasladoP,
    RetencionP,
  }
};
