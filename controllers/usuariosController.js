var UsuariosModel = require('../models/usuariosModel.js');

/**
 * usuariosController.js
 *
 * @description :: Server-side logic for managing usuarioss.
 */
module.exports = {

    /**
     * usuariosController.list()
     */
    list: function (req, res) {
        UsuariosModel.find(function (err, usuarioss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usuarios.',
                    error: err
                });
            }

            return res.json(usuarioss);
        });
    },

    /**
     * usuariosController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        UsuariosModel.findOne({_id: id}, function (err, usuarios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usuarios.',
                    error: err
                });
            }

            if (!usuarios) {
                return res.status(404).json({
                    message: 'No such usuarios'
                });
            }

            return res.json(usuarios);
        });
    },

    /**
     * usuariosController.create()
     */
    create: function (req, res) {
        var usuarios = new UsuariosModel({
			nombre_comercial : req.body.nombre_comercial,
			razon_social : req.body.razon_social,
			rfc : req.body.rfc,
			codigo_postal : req.body.codigo_postal,
			direccion : req.body.direccion,
			regimen_fiscal : req.body.regimen_fiscal,
			datos_emisor_Nomina12 : req.body.datos_emisor_Nomina12,
			usr : req.body.usr,
			pass : req.body.pass,
			timbres_disponibles : req.body.timbres_disponibles
        });

        usuarios.save(function (err, usuarios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating usuarios',
                    error: err
                });
            }

            return res.status(201).json(usuarios);
        });
    },

    /**
     * usuariosController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        UsuariosModel.findOne({_id: id}, function (err, usuarios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usuarios',
                    error: err
                });
            }

            if (!usuarios) {
                return res.status(404).json({
                    message: 'No such usuarios'
                });
            }

            usuarios.nombre_comercial = req.body.nombre_comercial ? req.body.nombre_comercial : usuarios.nombre_comercial;
			usuarios.razon_social = req.body.razon_social ? req.body.razon_social : usuarios.razon_social;
			usuarios.rfc = req.body.rfc ? req.body.rfc : usuarios.rfc;
			usuarios.codigo_postal = req.body.codigo_postal ? req.body.codigo_postal : usuarios.codigo_postal;
			usuarios.direccion = req.body.direccion ? req.body.direccion : usuarios.direccion;
			usuarios.regimen_fiscal = req.body.regimen_fiscal ? req.body.regimen_fiscal : usuarios.regimen_fiscal;
			usuarios.datos_emisor_Nomina12 = req.body.datos_emisor_Nomina12 ? req.body.datos_emisor_Nomina12 : usuarios.datos_emisor_Nomina12;
			usuarios.usr = req.body.usr ? req.body.usr : usuarios.usr;
			usuarios.pass = req.body.pass ? req.body.pass : usuarios.pass;
			usuarios.timbres_disponibles = req.body.timbres_disponibles ? req.body.timbres_disponibles : usuarios.timbres_disponibles;
			
            usuarios.save(function (err, usuarios) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating usuarios.',
                        error: err
                    });
                }

                return res.json(usuarios);
            });
        });
    },

    /**
     * usuariosController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        UsuariosModel.findByIdAndRemove(id, function (err, usuarios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the usuarios.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
