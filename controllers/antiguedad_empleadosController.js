var Antiguedad_empleadosModel = require('../models/antiguedad_empleadosModel.js');

/**
 * antiguedad_empleadosController.js
 *
 * @description :: Server-side logic for managing antiguedad_empleadoss.
 */
module.exports = {

    /**
     * antiguedad_empleadosController.list()
     */
    list: function (req, res) {
        Antiguedad_empleadosModel.find(function (err, antiguedad_empleadoss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting antiguedad_empleados.',
                    error: err
                });
            }

            return res.json(antiguedad_empleadoss);
        });
    },

    /**
     * antiguedad_empleadosController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        Antiguedad_empleadosModel.findOne({_id: id}, function (err, antiguedad_empleados) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting antiguedad_empleados.',
                    error: err
                });
            }

            if (!antiguedad_empleados) {
                return res.status(404).json({
                    message: 'No such antiguedad_empleados'
                });
            }

            return res.json(antiguedad_empleados);
        });
    },

    /**
     * antiguedad_empleadosController.create()
     */
    create: function (req, res) {
        var antiguedad_empleados = new Antiguedad_empleadosModel({
			id_empresa : req.body.id_empresa,
			razon_social : req.body.razon_social,
			antiguedad_actual : req.body.antiguedad_actual,
			nombre_empleado : req.body.nombre_empleado
        });

        antiguedad_empleados.save(function (err, antiguedad_empleados) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating antiguedad_empleados',
                    error: err
                });
            }

            return res.status(201).json(antiguedad_empleados);
        });
    },

    /**
     * antiguedad_empleadosController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        Antiguedad_empleadosModel.findOne({_id: id}, function (err, antiguedad_empleados) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting antiguedad_empleados',
                    error: err
                });
            }

            if (!antiguedad_empleados) {
                return res.status(404).json({
                    message: 'No such antiguedad_empleados'
                });
            }

            antiguedad_empleados.id_empresa = req.body.id_empresa ? req.body.id_empresa : antiguedad_empleados.id_empresa;
			antiguedad_empleados.razon_social = req.body.razon_social ? req.body.razon_social : antiguedad_empleados.razon_social;
			antiguedad_empleados.antiguedad_actual = req.body.antiguedad_actual ? req.body.antiguedad_actual : antiguedad_empleados.antiguedad_actual;
			antiguedad_empleados.nombre_empleado = req.body.nombre_empleado ? req.body.nombre_empleado : antiguedad_empleados.nombre_empleado;
			
            antiguedad_empleados.save(function (err, antiguedad_empleados) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating antiguedad_empleados.',
                        error: err
                    });
                }

                return res.json(antiguedad_empleados);
            });
        });
    },

    /**
     * antiguedad_empleadosController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        Antiguedad_empleadosModel.findByIdAndRemove(id, function (err, antiguedad_empleados) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the antiguedad_empleados.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
