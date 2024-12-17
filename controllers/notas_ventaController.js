var Notas_ventaModel = require('../models/notas_ventaModel.js');

/**
 * notas_ventaController.js
 *
 * @description :: Server-side logic for managing notas_ventas.
 */
module.exports = {

    /**
     * notas_ventaController.list()
     */
    list: function (req, res) {
        Notas_ventaModel.find(function (err, notas_ventas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting notas_venta.',
                    error: err
                });
            }

            return res.json(notas_ventas);
        });
    },


    list_last: function (req, res) {
        Notas_ventaModel.find().sort({ _id: -1 }).limit(1).exec(function (err, notas_ventas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting notas_venta.',
                    error: err
                });
            }
        })

            return res.json(notas_ventas);
    },

    /**
     * notas_ventaController.show()
     */
    show: function (req, res) {
        var folio = req.params.folio;

        Notas_ventaModel.findOne({folio_venta: folio}, function (err, notas_venta) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting notas_venta.',
                    error: err
                });
            }

            if (!notas_venta) {
                return res.status(404).json({
                    message: 'No such notas_venta'
                });
            }

            return res.json(notas_venta);
        });
    },

    /**
     * notas_ventaController.create()
     */
    create: function (req, res) {
        var notas_venta = new Notas_ventaModel({
			folio_venta : req.body.folio_venta,
			fecha : req.body.fecha,
			cliente : req.body.cliente,
			lineas_venta : req.body.lineas_venta,
            total:req.body.total,
			estatus : req.body.estatus,
			anticipo : req.body.anticipo,
			observaciones : req.body.observaciones
        });

        notas_venta.save(function (err, notas_venta) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating notas_venta',
                    error: err
                });
            }

            return res.status(201).json(notas_venta);
        });
    },

    /**
     * notas_ventaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        Notas_ventaModel.findOne({_id: id}, function (err, notas_venta) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting notas_venta',
                    error: err
                });
            }

            if (!notas_venta) {
                return res.status(404).json({
                    message: 'No such notas_venta'
                });
            }

            notas_venta.folio_venta = req.body.folio_venta ? req.body.folio_venta : notas_venta.folio_venta;
			notas_venta.fecha = req.body.fecha ? req.body.fecha : notas_venta.fecha;
			notas_venta.cliente = req.body.cliente ? req.body.cliente : notas_venta.cliente;
			notas_venta.lineas_venta = req.body.lineas_venta ? req.body.lineas_venta : notas_venta.lineas_venta;
			notas_venta.estatus = req.body.estatus ? req.body.estatus : notas_venta.estatus;
			notas_venta.anticipo = req.body.anticipo ? req.body.anticipo : notas_venta.anticipo;
			notas_venta.observaciones = req.body.observaciones ? req.body.observaciones : notas_venta.observaciones;
			
            notas_venta.save(function (err, notas_venta) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating notas_venta.',
                        error: err
                    });
                }

                return res.json(notas_venta);
            });
        });
    },

    /**
     * notas_ventaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        Notas_ventaModel.findByIdAndRemove(id, function (err, notas_venta) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the notas_venta.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
