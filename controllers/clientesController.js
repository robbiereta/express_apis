const clientesModel = require('../models/clientesModel.js');

/**
 * clientesController.js
 *
 * @description :: Server-side logic for managing clientess.
 */
module.exports = {

  /**
   * clientesController.list()
   */
  list: (req, res) => {
    clientesModel.find(req.query.where, req.query.fields, req.query.sort, (err, clientess) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting clientes.',
          error: err
        });
      }
      return res.json(clientess);
    });
  },

  /**
   * clientesController.show()
   */
  show: (req, res) => {
    let id = req.params.id;
    clientesModel.findOne({_id: id}, (err, clientes) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting clientes.',
          error: err
        });
      }
      if (!clientes) {
        return res.status(404).json({
          message: 'No such clientes'
        });
      }
      return res.json(clientes);
    });
  },

  /**
   * clientesController.create()
   */
  create: (req, res) => {
    let clientes = new clientesModel({
    });

    clientes.save((err, clientes) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating clientes',
          error: err
        });
      }
      return res.status(201).json(clientes);
    });
  },

  /**
   * clientesController.update()
   */
  update: (req, res) => {
    let id = req.params.id;
    clientesModel.findOne({_id: id}, (err, clientes) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting clientes',
          error: err
        });
      }
      if (!clientes) {
        return res.status(404).json({
          message: 'No such clientes'
        });
      }

      clientes.no_cliente = req.body.no_cliente ? req.body.no_cliente : clientes.no_cliente;
      clientes.save( (err, clientes) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating clientes.',
            error: err
          });
        }

        return res.json(clientes);
      });
    });
  },

  /**
   * clientesController.remove()
   */
  remove: (req, res) => {
    let id = req.params.id;
    clientesModel.findByIdAndRemove(id, (err, clientes) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the clientes.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};