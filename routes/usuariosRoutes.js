var express = require('express');
var router = express.Router();
var usuariosController = require('../controllers/usuariosController.js');

/*
 * GET
 */
router.get('/', usuariosController.list);

/*
 * GET
 */
router.get('/:id', usuariosController.show);

/*
 * POST
 */
router.post('/', usuariosController.create);

/*
 * PUT
 */
router.put('/:id', usuariosController.update);

/*
 * DELETE
 */
router.delete('/:id', usuariosController.remove);

module.exports = router;
