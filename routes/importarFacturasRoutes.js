var express = require('express');
var router = express.Router();
var importarFacturasController = require('../controllers/importarFacturasController.js');

/*
 * GET
 */
router.get('/', importarFacturasController.list);

/*
 * GET
 */
router.get('/:id', importarFacturasController.show);

/*
 * POST
 */
router.post('/', importarFacturasController.create);

/*
 * PUT
 */
router.put('/:id', importarFacturasController.update);

/*
 * DELETE
 */
router.delete('/:id', importarFacturasController.remove);

module.exports = router;
