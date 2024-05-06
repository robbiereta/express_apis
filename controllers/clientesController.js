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
    let clientes = new clientesModel({			no_cliente : req.body.no_cliente,			rfc : req.body.rfc,			regimen : req.body.regimen,			razon_social : req.body.razon_social,			cp : req.body.cp,			uso_cfdi : req.body.uso_cfdi,			calle : req.body.calle,			correo : req.body.correo,			num_ext : req.body.num_ext,			num_int : req.body.num_int,			colonia : req.body.colonia,			estado : req.body.estado,			municipio : req.body.municipio
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

      clientes.no_cliente = req.body.no_cliente ? req.body.no_cliente : clientes.no_cliente;			clientes.rfc = req.body.rfc ? req.body.rfc : clientes.rfc;			clientes.regimen = req.body.regimen ? req.body.regimen : clientes.regimen;			clientes.razon_social = req.body.razon_social ? req.body.razon_social : clientes.razon_social;			clientes.cp = req.body.cp ? req.body.cp : clientes.cp;			clientes.uso_cfdi = req.body.uso_cfdi ? req.body.uso_cfdi : clientes.uso_cfdi;			clientes.calle = req.body.calle ? req.body.calle : clientes.calle;			clientes.correo = req.body.correo ? req.body.correo : clientes.correo;			clientes.num_ext = req.body.num_ext ? req.body.num_ext : clientes.num_ext;			clientes.num_int = req.body.num_int ? req.body.num_int : clientes.num_int;			clientes.colonia = req.body.colonia ? req.body.colonia : clientes.colonia;			clientes.estado = req.body.estado ? req.body.estado : clientes.estado;			clientes.municipio = req.body.municipio ? req.body.municipio : clientes.municipio;			
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
