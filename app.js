var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
var app = express();                                                                                          
require('dotenv').config()
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI,{dbName: 'bvic3'},);
var cfdi_to_json = require('./routes/apis/cfdi_to_json');
var mailerRouter = require('./routes/mailer');
var botRouter = require('./routes/bot');
var ordenRouter = require('./routes/orden');
var preciosRouter = require('./routes/precios');
var productosRouter = require('./routes/productosRoutes');
var inventarioRouter = require('./routes/inventario');
var notas_ventaRouter = require('./routes/notas_ventaRoutes');
var api_timbrado = require('./routes/api_timbrado');
var facturasBorradorObject = require('./routes/facturasBorradorObjRoutes');
var mosRouter=require('./routes/mosRoutes')
app.use(cors());
app.options('/*', cors()) // enable pre-flight request for DELETE request
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/bot',botRouter)
app.use('/mailer',mailerRouter);
app.use('/orden',ordenRouter);
app.use('/precios',preciosRouter);
app.use('/productos',productosRouter);
app.use('/inventario',inventarioRouter)
app.use('/notas_venta',notas_ventaRouter)
app.use('/api_timbrado',api_timbrado)
app.use('/cfdi_to_json',cfdi_to_json)
app.use('/facturas_borradorObject',facturasBorradorObject)
app.use('/mos',mosRouter)
app.use('/', (req, res) => res.send('Hello World!'));
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
module.exports = app;
