var FacturasborradorobjModel = require('../models/facturasBorradorObjModel.js');

/**
 * facturasBorradorObjController.js
 *
 * @description :: Server-side logic for managing facturasBorradorObjs.
 */
module.exports = {

    /**
     * facturasBorradorObjController.list()
     */
    list: function (req, res) {
        FacturasborradorobjModel.find(function (err, facturasBorradorObjs) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting facturasBorradorObj.',
                    error: err
                });
            }

            return res.json(facturasBorradorObjs);
        });
    },

    /**
     * facturasBorradorObjController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        FacturasborradorobjModel.findOne({_id: id}, function (err, facturasBorradorObj) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting facturasBorradorObj.',
                    error: err
                });
            }

            if (!facturasBorradorObj) {
                return res.status(404).json({
                    message: 'No such facturasBorradorObj'
                });
            }

            return res.json(facturasBorradorObj);
        });
    },

    /**
     * facturasBorradorObjController.create()
     */
    create: function (req, res) {
        var facturasBorradorObj = new FacturasborradorobjModel({
			factura : req.body.factura
        });

        facturasBorradorObj.save(function (err, facturasBorradorObj) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating facturasBorradorObj',
                    error: err
                });
            }

            return res.status(201).json(facturasBorradorObj);
        });
    },

    /**
     * facturasBorradorObjController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        FacturasborradorobjModel.findOne({_id: id}, function (err, facturasBorradorObj) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting facturasBorradorObj',
                    error: err
                });
            }

            if (!facturasBorradorObj) {
                return res.status(404).json({
                    message: 'No such facturasBorradorObj'
                });
            }

            facturasBorradorObj.factura = req.body.factura ? req.body.factura : facturasBorradorObj.factura;
			
            facturasBorradorObj.save(function (err, facturasBorradorObj) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating facturasBorradorObj.',
                        error: err
                    });
                }

                return res.json(facturasBorradorObj);
            });
        });
    },

    /**
     * facturasBorradorObjController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        FacturasborradorobjModel.findByIdAndRemove(id, function (err, facturasBorradorObj) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the facturasBorradorObj.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
