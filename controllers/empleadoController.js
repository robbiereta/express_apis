var EmpleadoModel = require('../models/empleadoModel.js');

/**
 * empleadoController.js
 *
 * @description :: Server-side logic for managing empleados.
 */
module.exports = {

    /**
     * empleadoController.list()
     */
    list: function (req, res) {
        EmpleadoModel.find(function (err, empleados) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting empleado.',
                    error: err
                });
            }

            return res.json(empleados);
        });
    },

    /**
     * empleadoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        EmpleadoModel.findOne({_id: id}, function (err, empleado) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting empleado.',
                    error: err
                });
            }

            if (!empleado) {
                return res.status(404).json({
                    message: 'No such empleado'
                });
            }

            return res.json(empleado);
        });
    },

    /**
     * empleadoController.create()
     */
    create: function (req, res) {
        var empleado = new EmpleadoModel({
			array : req.body.array
        });

        empleado.save(function (err, empleado) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating empleado',
                    error: err
                });
            }

            return res.status(201).json(empleado);
        });
    },

    /**
     * empleadoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        EmpleadoModel.findOne({_id: id}, function (err, empleado) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting empleado',
                    error: err
                });
            }

            if (!empleado) {
                return res.status(404).json({
                    message: 'No such empleado'
                });
            }

            empleado.array = req.body.array ? req.body.array : empleado.array;
			
            empleado.save(function (err, empleado) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating empleado.',
                        error: err
                    });
                }

                return res.json(empleado);
            });
        });
    },

    /**
     * empleadoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        EmpleadoModel.findByIdAndRemove(id, function (err, empleado) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the empleado.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
