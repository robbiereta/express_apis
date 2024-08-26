var express = require('express');
var router = express.Router();
var antiguedad_empleadosController = require('../controllers/antiguedad_empleadosController.js');

/*
 * GET
 */
router.get('/', antiguedad_empleadosController.list);

/*
 * GET
 */
router.get('/:id', antiguedad_empleadosController.show);

/*
 * POST
 */
router.post('/', antiguedad_empleadosController.create);

/*
 * PUT
 */
router.put('/:id', antiguedad_empleadosController.update);

/*
 * DELETE
 */
router.delete('/:id', antiguedad_empleadosController.remove);

module.exports = router;
