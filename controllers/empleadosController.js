var EmpleadosModel = require('../models/empleadosModel.js');

/**
 * empleadosController.js
 *
 * @description :: Server-side logic for managing empleadoss.
 */
module.exports = {

    /**
     * empleadosController.list()
     */
    list: function (req, res) {
        EmpleadosModel.find(function (err, empleadoss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting empleados.',
                    error: err
                });
            }

            return res.json(empleadoss);
        });
    },

    /**
     * empleadosController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        EmpleadosModel.findOne({_id: id}, function (err, empleados) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting empleados.',
                    error: err
                });
            }

            if (!empleados) {
                return res.status(404).json({
                    message: 'No such empleados'
                });
            }

            return res.json(empleados);
        });
    },

    /**
     * empleadosController.create()
     */
    create: function (req, res) {
        var empleados = new EmpleadosModel({
			SubTotal : req.body.SubTotal,
			Descuento : req.body.Descuento,
			Total : req.body.Total,
			LugarExpedicion : req.body.LugarExpedicion,
			Emisor : req.body.Emisor,
			Receptor : req.body.Receptor,
			Conceptos : req.body.Conceptos,
			Datos_Nomina12 : req.body.Datos_Nomina12,
			Percepciones : req.body.Percepciones,
			Deducciones : req.body.Deducciones,
			OtrosPagos : req.body.OtrosPagos
        });

        empleados.save(function (err, empleados) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating empleados',
                    error: err
                });
            }

            return res.status(201).json(empleados);
        });
    },

    /**
     * empleadosController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        EmpleadosModel.findOne({_id: id}, function (err, empleados) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting empleados',
                    error: err
                });
            }

            if (!empleados) {
                return res.status(404).json({
                    message: 'No such empleados'
                });
            }

            empleados.SubTotal = req.body.SubTotal ? req.body.SubTotal : empleados.SubTotal;
			empleados.Descuento = req.body.Descuento ? req.body.Descuento : empleados.Descuento;
			empleados.Total = req.body.Total ? req.body.Total : empleados.Total;
			empleados.LugarExpedicion = req.body.LugarExpedicion ? req.body.LugarExpedicion : empleados.LugarExpedicion;
			empleados.Emisor = req.body.Emisor ? req.body.Emisor : empleados.Emisor;
			empleados.Receptor = req.body.Receptor ? req.body.Receptor : empleados.Receptor;
			empleados.Conceptos = req.body.Conceptos ? req.body.Conceptos : empleados.Conceptos;
			empleados.Datos_Nomina12 = req.body.Datos_Nomina12 ? req.body.Datos_Nomina12 : empleados.Datos_Nomina12;
			empleados.Percepciones = req.body.Percepciones ? req.body.Percepciones : empleados.Percepciones;
			empleados.Deducciones = req.body.Deducciones ? req.body.Deducciones : empleados.Deducciones;
			empleados.OtrosPagos = req.body.OtrosPagos ? req.body.OtrosPagos : empleados.OtrosPagos;
			
            empleados.save(function (err, empleados) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating empleados.',
                        error: err
                    });
                }

                return res.json(empleados);
            });
        });
    },

    /**
     * empleadosController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        EmpleadosModel.findByIdAndRemove(id, function (err, empleados) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the empleados.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
