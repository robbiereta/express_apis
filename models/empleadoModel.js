var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var empleadoSchema = new Schema({
	'nombre' : String,
	'patron' : String,
	'datosNomina' : datosNominaSchema
});


var datosNominaSchema = new Schema({
	"SubTotal": Number,
	"Descuento": "71.18",
	"Moneda": "MXN",
	"Total": "1678.82",
	"TipoDeComprobante": "N",
	"Exportacion": "01",
	"MetodoPago": "PUE",
	"LugarExpedicion": "87030",
	"Emisor": {
		"Rfc": "RERR6008226N5",
		"Nombre": "ROBERTO RETA RESENDEZ",
		"RegimenFiscal": "612"
	},
	"Receptor":  {
		"Rfc": "LOSL890628U96",
		"Nombre": "LUIS ANGEL LOPEZ SANCHEZ",
		"DomicilioFiscalReceptor": "87037",
		"RegimenFiscalReceptor": "605",
		"UsoCFDI": "CN01"
	},
	"Conceptos": [
		{
			"ClaveProdServ": "84111505",
			"Cantidad": "1",
			"ClaveUnidad": "ACT",
			"Descripcion": "Pago de nómina",
			"ValorUnitario": "1750.00",
			"Importe": "1750.00",
			"Descuento": "71.18",
			"ObjetoImp": "01"
		}
	],
	"Complemento": {

				"Nomina12": {
					"Version": "1.2",
					"TipoNomina": "O",
					"NumDiasPagados": "7",
					"TotalPercepciones": "1750.00",
					"TotalDeducciones": "71.18",
					"TotalOtrosPagos": "0.00",
					"Emisor":  {
						"Rfc": "RERR6008226N5",
						"Nombre": "ROBERTO RETA RESENDEZ",
						"RegimenFiscal": "612"
					},
					"Receptor": {
						"Curp": "LOSL890628HDFPNS05 ",
						"NumSeguridadSocial": "09128930774",
						"FechaInicioRelLaboral": "2022-08-01",
						"TipoContrato": "01",
						"TipoJornada": "01",
						"TipoRegimen": "02",
						"NumEmpleado": "5",
						"Departamento": "SERVICIO",
						"Puesto": "Empleado general",
						"RiesgoPuesto": "3",
						"PeriodicidadPago": "02",
						"SalarioBaseCotApor": "250.00",
						"SalarioDiarioIntegrado": "262.33",
						"ClaveEntFed": "TAM"
					},
					"Percepciones": {
						"TotalSueldos": "1750.00",
						"TotalGravado": "1750.00",
						"TotalExento": "0",
						"Percepcion": [
							{
								"TipoPercepcion": "001",
								"Clave": "001",
								"Concepto": "SUELDO",
								"ImporteGravado": "1750.00",
								"ImporteExento": "0.00"
							}
						]
					},
					"Deducciones": { 
						"TotalOtrasDeducciones": "43.61",
						"TotalImpuestosRetenidos":"27.57",
						"Deduccion": [
							{
								"TipoDeduccion": "001",
								"Clave": "001",
								"Concepto": "CUOTA OBRERO IMSS",
								"Importe": "22.95"
							},
							{
								"TipoDeduccion": "002",
								"Clave": "002",
								"Concepto": "RETENCION ISR",
								"Importe": "27.57"
							},
 {
								"TipoDeduccion": "003",
								"Clave": "003",
								"Concepto": " CUOTA OBRERO RCV",
								"Importe": "20.66"
							}
 
 
						]
 
					},
					"OtrosPagos": [
						{
						  "TipoOtroPago": "002",
						  "Clave": "002",
						  "Concepto": "Subsidio",
						  "Importe": "0.0",
						  "SubsidioAlEmpleo": {
							"SubsidioCausado": "0.0"
						  }
						}
					  ]
	
			
	}
 }
});

module.exports = mongoose.model('empleado', empleadoSchema);
