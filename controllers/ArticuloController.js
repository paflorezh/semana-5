//const User = require('../models');
//const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const models = require('../models');
//const tokenServices = require('../services/token')

exports.list = async(req, res, next) => {
    try {
        const registro = await models.Articulo.findAll({
            include: [{
                model: models.Categoria,
                as: 'categoria'
            }]
        });
        if(registro){
            res.status(200).json(registro);
        }else{
            res.status(404).send({
                message: 'There is no registro in the system'
            }) 
        }
       
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error);
    }
};

exports.add = async(req, res, next) => {
    try {
        const registro = await models.Articulo.create(req.body);
        res.status(200).json(registro);
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error);
    }
};

exports.update = async(req, res, next) => {
    try {
        
            const registro = await models.Articulo.update({
                categoriaId: req.body.categoria,
                descripcion: req.body.descripcion,
                codigo: req.body.codigo
            },
                {
                    where: {
                        id: req.body.id
                    },
                });
            res.status(200).json(registro);
               
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error);
    }
};

exports.activate = async(req, res, next) => {
    try {
        
            const registro = await models.Articulo.update({estado: 1},
                {
                    where: {
                        id: req.body.id
                    },
                });
            res.status(200).json(registro);
               
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error);
    }
};

exports.deactivate = async(req, res, next) => {
    try {
        
            const registro = await models.Articulo.update({estado: 0},
                {
                    where: {
                        id: req.body.id
                    },
                });
            res.status(200).json(registro);
               
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        })
        next(error);
    }
};