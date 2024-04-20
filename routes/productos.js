const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController.js');
import * as multer from 'multer';
import MulterGoogleCloudStorage from 'multer-cloud-storage';
/*
 * MIDDLEWARE
 */
router.use((req, res, next ) => {
let query = {};  

if(req.query.where)
  query.where = JSON.parse(req.query.where);

if(req.query.fields)
  query.fields = JSON.parse(req.query.fields);

if(req.query.sort)
  query.sort = {sort : JSON.parse(req.query.sort)};
else
  query.sort = {};

if(req.query.limit)
  query.sort.limit = parseInt(req.query.limit);

if(req.query.skip)
  query.sort.skip = parseInt(req.query.skip);

req.query = query;

next();
})

/*
 * GET
 */
router.get('/', (req, res) => {
  productosController.list(req, res);
});

/*
 * GET
 */
router.get('/:id', (req, res) => {
  productosController.show(req, res);
});


const uploadHandler = multer({
  storage: new MulterGoogleCloudStorage()
});

router.post('/upload', uploadHandler.any(), (req, res) => {
    console.log(req.files);
    res.json(req.files);
});


/*
 * POST
 */
router.post('/', (req, res) => {
  productosController.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', (req, res) => {
  productosController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', (req, res) => {
  productosController.remove(req, res);
});

module.exports = router;
