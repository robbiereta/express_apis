var MosModel = require('../models/mosModel.js');

/**
 * mosController.js
 *
 * @description :: Server-side logic for managing moss.
 */
module.exports = {

    /**
     * mosController.list()
     */
    list: function (req, res) {
        MosModel.find(function (err, moss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting mos.',
                    error: err
                });
            }

            return res.json(moss);
        });
    },

    /**
     * mosController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        MosModel.findOne({_id: id}, function (err, mos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting mos.',
                    error: err
                });
            }

            if (!mos) {
                return res.status(404).json({
                    message: 'No such mos'
                });
            }

            return res.json(mos);
        });
    },

    /**
     * mosController.create()
     */
    create: function (req, res) {
        var mos = new MosModel({
			nombre : req.body.nombre,
			precio : req.body.precio
        });

        mos.save(function (err, mos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating mos',
                    error: err
                });
            }

            return res.status(201).json(mos);
        });
    },

    /**
     * mosController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        MosModel.findOne({_id: id}, function (err, mos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting mos',
                    error: err
                });
            }

            if (!mos) {
                return res.status(404).json({
                    message: 'No such mos'
                });
            }

            mos.nombre = req.body.nombre ? req.body.nombre : mos.nombre;
			mos.precio = req.body.precio ? req.body.precio : mos.precio;
			
            mos.save(function (err, mos) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating mos.',
                        error: err
                    });
                }

                return res.json(mos);
            });
        });
    },

    /**
     * mosController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        MosModel.findByIdAndRemove(id, function (err, mos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the mos.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
