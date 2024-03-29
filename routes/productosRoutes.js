var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController.js');
var cors = require('cors');
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    exposedHeaders: ['Content-Range,X-Content-Range']
  }

 
/*
 * GET
 */
router.get('/', cors(corsOptions), productosController.list);

/*
 * GET
 */
router.get('/:id', productosController.show);

/*
 * POST
 */
router.post('/', productosController.create);

/*
 * PUT
 */
router.put('/:id', productosController.update);

/*
 * DELETE
 */
router.delete('/:id', productosController.remove);

module.exports = router;
