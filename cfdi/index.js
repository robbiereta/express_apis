//const key = 'CSD_Pruebas_CFDI_TCM970625MB1.key';
//const cer = 'CSD_Pruebas_CFDI_TCM970625MB1.cer';
import { 
    CFDI, Emisor
  } from '@cfdi/xml';
 
  const xslt = 'http://www.sat.gob.mx/sitio_internet/cfd/4/cadenaoriginal_4_0/cadenaoriginal_4_0.xslt';
  
  
  const comprobanteAttribute = {
      Serie: 'E',
      Folio: 'ACACUN-27',
      Fecha: '2014-07-08T12:16:50',

  };
  
  const cfd = new CFDI(comprobanteAttribute, {
      debug: true,
      xslt: {
        path: xslt,
      },
  });
  cfd.setAttributesXml({ version: '1.0', encoding: 'utf-8' });
  
  cfd.informacionGlobal({
      Periodicidad: '1',
      Meses: '1',
      Año: '2',
  });
  
  const emisor = new Emisor({
      Rfc: 'TCM970625MB1',
      Nombre: 'FACTURACION MODERNA SA DE CV',
      RegimenFiscal: 601,
      FacAtrAdquirente: 'asdasd',
  });
  cfd.emisor(emisor);

const key = './lib/EKU9003173C9_202305172235320/CSD/EKU9003173C9.key.pem';
const cer = './lib/EKU9003173C9_202305172235320/CSD/EKU9003173C9.cer.pem';
// await cfd.certificar(cer);
//  await cfd.sellar(key, '12345678a');
const xml = await cfd.getXmlCdfi();

console.log(xml)

export default xml
