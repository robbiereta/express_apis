var express = require('express');
var router = express.Router();
var empleadosController = require('../controllers/empleadosController.js');

/*
 * GET
 */
router.get('/', empleadosController.list);

/*
 * GET
 */
router.get('/:id', empleadosController.show);

/*
 * POST
 */
router.post('/', empleadosController.create);

/*
 * PUT
 */
router.put('/:id', empleadosController.update);

/*
 * DELETE
 */
router.delete('/:id', empleadosController.remove);

module.exports = router;
