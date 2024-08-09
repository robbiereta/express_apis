import * as fs from "fs";
import { Credential } from '@nodecfdi/credentials';
// se puede mandar el path o el contenido
const certFile = fs.readFileSync('./lib/CSD_EKU.cer', 'binary');
const keyFile = fs.readFileSync('./lib/CSD_EKU.key', 'binary');
const passPhrase = '12345678a'; // contraseña para abrir la llave privada
const fiel = Credential.create(certFile, keyFile, passPhrase);
const sourceString = '<xml></xml>';
// alias de privateKey/sign/verify
const signature = fiel.sign(sourceString,"sha512");
// alias de certificado/publicKey/verify
// console.log(signature)

const verify = fiel.verify(sourceString, signature);
console.log(verify); // boolean(true)
// objeto certificado
const certificado = fiel.certificate();
console.log("cer",signature) 
console.log(certificado.rfc()); // el RFC del certificado
console.log(certificado.legalName()); // el nombre del propietario del certificado
console.log(certificado.branchName()); // el nombre de la sucursal (en CSD, en FIEL está vacía)
console.log(certificado.serialNumber().bytes()); // número de serie del certificado