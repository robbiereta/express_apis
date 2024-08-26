var Folios_nominaModel = require('../models/folios_nominaModel.js');

/**
 * folios_nominaController.js
 *
 * @description :: Server-side logic for managing folios_nominas.
 */
module.exports = {

    /**
     * folios_nominaController.list()
     */
    list: function (req, res) {
        Folios_nominaModel.find(function (err, folios_nominas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting folios_nomina.',
                    error: err
                });
            }

            return res.json(folios_nominas);
        });
    },

    /**
     * folios_nominaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        Folios_nominaModel.findOne({_id: id}, function (err, folios_nomina) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting folios_nomina.',
                    error: err
                });
            }

            if (!folios_nomina) {
                return res.status(404).json({
                    message: 'No such folios_nomina'
                });
            }

            return res.json(folios_nomina);
        });
    },

    /**
     * folios_nominaController.create()
     */
    create: function (req, res) {
        var folios_nomina = new Folios_nominaModel({
			id_empresa : req.body.id_empresa,
			razon_social : req.body.razon_social,
			folio_actual : req.body.folio_actual
        });

        folios_nomina.save(function (err, folios_nomina) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating folios_nomina',
                    error: err
                });
            }

            return res.status(201).json(folios_nomina);
        });
    },

    /**
     * folios_nominaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        Folios_nominaModel.findOne({_id: id}, function (err, folios_nomina) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting folios_nomina',
                    error: err
                });
            }

            if (!folios_nomina) {
                return res.status(404).json({
                    message: 'No such folios_nomina'
                });
            }

            folios_nomina.id_empresa = req.body.id_empresa ? req.body.id_empresa : folios_nomina.id_empresa;
			folios_nomina.razon_social = req.body.razon_social ? req.body.razon_social : folios_nomina.razon_social;
			folios_nomina.folio_actual = req.body.folio_actual ? req.body.folio_actual : folios_nomina.folio_actual;
			
            folios_nomina.save(function (err, folios_nomina) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating folios_nomina.',
                        error: err
                    });
                }

                return res.json(folios_nomina);
            });
        });
    },

    /**
     * folios_nominaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        Folios_nominaModel.findByIdAndRemove(id, function (err, folios_nomina) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the folios_nomina.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
