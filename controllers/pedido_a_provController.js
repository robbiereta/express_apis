const pedido_a_provModel = require('../models/pedido_a_provModel.js');

/**
 * pedido_a_provController.js
 *
 * @description :: Server-side logic for managing pedido_a_provs.
 */
module.exports = {

  /**
   * pedido_a_provController.list()
   */
  list: (req, res) => {
    pedido_a_provModel.find(req.query.where, req.query.fields, req.query.sort, (err, pedido_a_provs) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting pedido_a_prov.',
          error: err
        });
      }
      return res.json(pedido_a_provs);
    });
  },

  /**
   * pedido_a_provController.show()
   */
  show: (req, res) => {
    let id = req.params.id;
    pedido_a_provModel.findOne({_id: id}, (err, pedido_a_prov) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting pedido_a_prov.',
          error: err
        });
      }
      if (!pedido_a_prov) {
        return res.status(404).json({
          message: 'No such pedido_a_prov'
        });
      }
      return res.json(pedido_a_prov);
    });
  },

  /**
   * pedido_a_provController.create()
   */
  create: (req, res) => {
    let pedido_a_prov = new pedido_a_provModel({			folio_pedido : req.body.folio_pedido,			proveedor : req.body.proveedor,			lineas_pedido : req.body.lineas_pedido,			 fecha : req.body. fecha
    });

    pedido_a_prov.save((err, pedido_a_prov) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating pedido_a_prov',
          error: err
        });
      }
      return res.status(201).json(pedido_a_prov);
    });
  },

  /**
   * pedido_a_provController.update()
   */
  update: (req, res) => {
    let id = req.params.id;
    pedido_a_provModel.findOne({_id: id}, (err, pedido_a_prov) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting pedido_a_prov',
          error: err
        });
      }
      if (!pedido_a_prov) {
        return res.status(404).json({
          message: 'No such pedido_a_prov'
        });
      }

      pedido_a_prov.folio_pedido = req.body.folio_pedido ? req.body.folio_pedido : pedido_a_prov.folio_pedido;			pedido_a_prov.proveedor = req.body.proveedor ? req.body.proveedor : pedido_a_prov.proveedor;			pedido_a_prov.lineas_pedido = req.body.lineas_pedido ? req.body.lineas_pedido : pedido_a_prov.lineas_pedido;			pedido_a_prov. fecha = req.body. fecha ? req.body. fecha : pedido_a_prov. fecha;			
      pedido_a_prov.save( (err, pedido_a_prov) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating pedido_a_prov.',
            error: err
          });
        }

        return res.json(pedido_a_prov);
      });
    });
  },

  /**
   * pedido_a_provController.remove()
   */
  remove: (req, res) => {
    let id = req.params.id;
    pedido_a_provModel.findByIdAndRemove(id, (err, pedido_a_prov) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the pedido_a_prov.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
