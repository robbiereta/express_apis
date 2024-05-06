const inventarioModel = require('../models/inventarioModel.js');

/**
 * inventarioController.js
 *
 * @description :: Server-side logic for managing inventarios.
 */
module.exports = {

  /**
   * inventarioController.list()
   */
  list: (req, res) => {
    inventarioModel.find(req.query.where, req.query.fields, req.query.sort, (err, inventarios) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting inventario.',
          error: err
        });
      }
      return res.json(inventarios);
    });
  },

  /**
   * inventarioController.show()
   */
  show: (req, res) => {
    let id = req.params.id;
    inventarioModel.findOne({_id: id}, (err, inventario) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting inventario.',
          error: err
        });
      }
      if (!inventario) {
        return res.status(404).json({
          message: 'No such inventario'
        });
      }
      return res.json(inventario);
    });
  },

  /**
   * inventarioController.create()
   */
  create: (req, res) => {
    let inventario = new inventarioModel({			producto : req.body.producto,			cantidad : req.body.cantidad,			fecha_movimiento : req.body.fecha_movimiento
    });

    inventario.save((err, inventario) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating inventario',
          error: err
        });
      }
      return res.status(201).json(inventario);
    });
  },

  /**
   * inventarioController.update()
   */
  update: (req, res) => {
    let id = req.params.id;
    inventarioModel.findOne({_id: id}, (err, inventario) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting inventario',
          error: err
        });
      }
      if (!inventario) {
        return res.status(404).json({
          message: 'No such inventario'
        });
      }

      inventario.producto = req.body.producto ? req.body.producto : inventario.producto;			inventario.cantidad = req.body.cantidad ? req.body.cantidad : inventario.cantidad;			inventario.fecha_movimiento = req.body.fecha_movimiento ? req.body.fecha_movimiento : inventario.fecha_movimiento;			
      inventario.save( (err, inventario) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating inventario.',
            error: err
          });
        }

        return res.json(inventario);
      });
    });
  },

  /**
   * inventarioController.remove()
   */
  remove: (req, res) => {
    let id = req.params.id;
    inventarioModel.findByIdAndRemove(id, (err, inventario) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the inventario.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
