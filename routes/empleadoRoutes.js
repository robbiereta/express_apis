var express = require('express');
var router = express.Router();
var empleadoController = require('../controllers/empleadoController.js');

/*
 * GET
 */
router.get('/', empleadoController.list);

/*
 * GET
 */
router.get('/:id', empleadoController.show);

/*
 * POST
 */
router.post('/', empleadoController.create);

/*
 * PUT
 */
router.put('/:id', empleadoController.update);

/*
 * DELETE
 */
router.delete('/:id', empleadoController.remove);

module.exports = router;
