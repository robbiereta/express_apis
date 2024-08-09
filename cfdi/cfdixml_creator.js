import { CFDI } from './cfdi-sat/index.js'
import { Emisor } from './cfdisat'
import { Receptor } from './cfdisat'
import { Concepto } from './cfdisat'
import { CfdiRelacionado } from './cfdisat'
import { Traslado } from './cfdisat'

const cfdi = new CFDI({
  'Fecha': '2018-06-11T08:09:23',
  'NoCertificado': '20001000000300022815',
  'SubTotal': '1000',
  'Moneda': 'MXN',
  'Total': '1160',
  'TipoDeComprobante': 'I',
  'FormaPago': '01',
  'MetodoPago': 'PUE',
  'TipoCambio': '1',
  'LugarExpedicion': '45079',
});

cfdi.cer = './lib/EKU9003173C9.cer.pem';
cfdi.key = './lib/EKU9003173C9.key.pem';
cfdi.withOutCerts = false


cfdi.add(new CfdiRelacionado({
  'UUID': 'A39DA66B-52CA-49E3-879B-5C05185B0EF7'
}, {
  'TipoRelacion': '01'
}))


cfdi.add(new Emisor({
  'Rfc': 'XXXXXXXX',
  'Nombre': 'NOMBRE APELLIDO',
  'RegimenFiscal': '601'
}))

cfdi.add(new Receptor({
  'Rfc': 'ZZZZZZZZZZZ',
  'UsoCFDI': 'G01'
}))

const concepto = new Concepto({
  'ClaveProdServ': '01010101',
  'ClaveUnidad': 'F52',
  'NoIdentificacion': '00001',
  'Cantidad': '1',
  'Unidad': 'TONELADA',
  'Descripcion': 'ACERO',
  'ValorUnitario': '1000',
  'Importe': '1000'
})

concepto.add(new Traslado({
  'Base': '1000',
  'Impuesto': '002',
  'TipoFactor': 'Tasa',
  'TasaOCuota': '0.16',
  'Importe': '160'
}))

cfdi.add(concepto)

cfdi.add(new Traslado({
  'Impuesto': '002',
  'TipoFactor': 'Tasa',
  'TasaOCuota': '0.16',
  'Importe': '160'
}, {}, {
  'TotalImpuestosTrasladados': '160.00'
}))

cfdi.getXml()
.then(xml => console.log(xml))
.catch(e => console.log(e.toString(), '---> error'));