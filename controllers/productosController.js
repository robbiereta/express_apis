const productosModel = require('../models/productosModel.js');

/**
 * productosController.js
 *
 * @description :: Server-side logic for managing productoss.
 */
module.exports = {

  /**
   * productosController.list()
   */
  list: (req, res) => {
    productosModel.find(req.query.where, req.query.fields, req.query.sort, (err, productoss) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting productos.',
          error: err
        });
      }
      return res.json(productoss);
    });
  },

  /**
   * productosController.show()
   */
  show: (req, res) => {
    let id = req.params.id;
    productosModel.findOne({_id: id}, (err, productos) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting productos.',
          error: err
        });
      }
      if (!productos) {
        return res.status(404).json({
          message: 'No such productos'
        });
      }
      return res.json(productos);
    });
  },

  /**
   * productosController.create()
   */
  create: (req, res) => {
    let productos = new productosModel({			precio : req.body.precio,			categoria : req.body.categoria,			descripcion : req.body.descripcion,			marca : req.body.marca,			especificaciones : req.body.especificaciones,			codigo : req.body.codigo,			moto : req.body.moto,			compatibilidades : req.body.compatibilidades
    });

    productos.save((err, productos) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating productos',
          error: err
        });
      }
      return res.status(201).json(productos);
    });
  },

  /**
   * productosController.update()
   */
  update: (req, res) => {
    let id = req.params.id;
    productosModel.findOne({_id: id}, (err, productos) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting productos',
          error: err
        });
      }
      if (!productos) {
        return res.status(404).json({
          message: 'No such productos'
        });
      }

      productos.precio = req.body.precio ? req.body.precio : productos.precio;			productos.categoria = req.body.categoria ? req.body.categoria : productos.categoria;			productos.descripcion = req.body.descripcion ? req.body.descripcion : productos.descripcion;			productos.marca = req.body.marca ? req.body.marca : productos.marca;			productos.especificaciones = req.body.especificaciones ? req.body.especificaciones : productos.especificaciones;			productos.codigo = req.body.codigo ? req.body.codigo : productos.codigo;			productos.moto = req.body.moto ? req.body.moto : productos.moto;			productos.compatibilidades = req.body.compatibilidades ? req.body.compatibilidades : productos.compatibilidades;			
      productos.save( (err, productos) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating productos.',
            error: err
          });
        }

        return res.json(productos);
      });
    });
  },

  /**
   * productosController.remove()
   */
  remove: (req, res) => {
    let id = req.params.id;
    productosModel.findByIdAndRemove(id, (err, productos) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the productos.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
