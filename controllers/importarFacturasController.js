var ImportarfacturasModel = require('../models/importarFacturasModel.js');

/**
 * importarFacturasController.js
 *
 * @description :: Server-side logic for managing importarFacturass.
 */
module.exports = {

    /**
     * importarFacturasController.list()
     */
    list: function (req, res) {
        ImportarfacturasModel.find(function (err, importarFacturass) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting importarFacturas.',
                    error: err
                });
            }

            return res.json(importarFacturass);
        });
    },

    /**
     * importarFacturasController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ImportarfacturasModel.findOne({_id: id}, function (err, importarFacturas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting importarFacturas.',
                    error: err
                });
            }

            if (!importarFacturas) {
                return res.status(404).json({
                    message: 'No such importarFacturas'
                });
            }

            return res.json(importarFacturas);
        });
    },

    /**
     * importarFacturasController.create()
     */
    create: function (req, res) {
        var importarFacturas = new ImportarfacturasModel({
			codigo : req.body.codigo,
			cantidad : req.body.cantidad,
			descripcion : req.body.descripcion,
			precio_bicivic : req.body.precio_bicivic,
			precio_compra : req.body.precio_compra,
			proveedor : req.body.proveedor,
			fecha_factura : req.body.fecha_factura
        });

        importarFacturas.save(function (err, importarFacturas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating importarFacturas',
                    error: err
                });
            }

            return res.status(201).json(importarFacturas);
        });
    },

    /**
     * importarFacturasController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ImportarfacturasModel.findOne({_id: id}, function (err, importarFacturas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting importarFacturas',
                    error: err
                });
            }

            if (!importarFacturas) {
                return res.status(404).json({
                    message: 'No such importarFacturas'
                });
            }

            importarFacturas.codigo = req.body.codigo ? req.body.codigo : importarFacturas.codigo;
			importarFacturas.cantidad = req.body.cantidad ? req.body.cantidad : importarFacturas.cantidad;
			importarFacturas.descripcion = req.body.descripcion ? req.body.descripcion : importarFacturas.descripcion;
			importarFacturas.precio_bicivic = req.body.precio_bicivic ? req.body.precio_bicivic : importarFacturas.precio_bicivic;
			importarFacturas.precio_compra = req.body.precio_compra ? req.body.precio_compra : importarFacturas.precio_compra;
			importarFacturas.proveedor = req.body.proveedor ? req.body.proveedor : importarFacturas.proveedor;
			importarFacturas.fecha_factura = req.body.fecha_factura ? req.body.fecha_factura : importarFacturas.fecha_factura;
			
            importarFacturas.save(function (err, importarFacturas) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating importarFacturas.',
                        error: err
                    });
                }

                return res.json(importarFacturas);
            });
        });
    },

    /**
     * importarFacturasController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ImportarfacturasModel.findByIdAndRemove(id, function (err, importarFacturas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the importarFacturas.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
