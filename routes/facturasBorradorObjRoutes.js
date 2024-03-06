var express = require('express');
var router = express.Router();
var facturasBorradorObjController = require('../controllers/facturasBorradorObjController.js');

/*
 * GET
 */
router.get('/', facturasBorradorObjController.list);

/*
 * GET
 */
router.get('/:id', facturasBorradorObjController.show);

/*
 * POST
 */
router.post('/', facturasBorradorObjController.create);

/*
 * PUT
 */
router.put('/:id', facturasBorradorObjController.update);

/*
 * DELETE
 */
router.delete('/:id', facturasBorradorObjController.remove);

module.exports = router;
