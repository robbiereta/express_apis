var express = require('express');
var router = express.Router();
var mosController = require('../controllers/mosController.js');

/*
 * GET
 */
router.get('/', mosController.list);

/*
 * GET
 */
router.get('/:id', mosController.show);

/*
 * POST
 */
router.post('/', mosController.create);

/*
 * PUT
 */
router.put('/:id', mosController.update);

/*
 * DELETE
 */
router.delete('/:id', mosController.remove);

module.exports = router;
