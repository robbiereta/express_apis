var express = require('express');
var router = express.Router();
var folios_nominaController = require('../controllers/folios_nominaController.js');

/*
 * GET
 */
router.get('/', folios_nominaController.list);

/*
 * GET
 */
router.get('/:id', folios_nominaController.show);

/*
 * POST
 */
router.post('/', folios_nominaController.create);

/*
 * PUT
 */
router.put('/:id', folios_nominaController.update);

/*
 * DELETE
 */
router.delete('/:id', folios_nominaController.remove);

module.exports = router;
