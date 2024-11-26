var express = require('express');
var router = express.Router();
var notas_ventaController = require('../controllers/notas_ventaController.js');

/*
 * GET
 */
router.get('/', notas_ventaController.list);

router.get('/last',notas_ventaController.list_last);

/*
 * GET
 */
router.get('/:id', notas_ventaController.show);

/*
 * POST
 */
router.post('/', notas_ventaController.create);

/*
 * PUT
 */
router.put('/:id', notas_ventaController.update);

/*
 * DELETE
 */
router.delete('/:id', notas_ventaController.remove);

module.exports = router;
