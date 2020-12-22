//const User = require('../models');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const models = require('../models');
const tokenServices = require('../services/token')


exports.login = async(req, res, next) => {
    try {
        const user = await models.Usuario.findOne({ where: { email: req.body.email } });
        if (user) {
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {
                const token = await tokenServices.encode(user);
                res.status(200).send({
                    auth: true,
                    tokenReturn: token,
                    user: user
                });
            } else {
                res.status(401).json({
                    error: 'Invalid Password!'
                })
            }
        } else {
            res.status(404).send({
                error: 'User Not Found'
            })
        }

    } catch (error) {
        res.status(500).send({
            message: 'Error ->'
        })
        next(error);
    }
};


exports.register = async(req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await models.Usuario.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send({
            message: 'Error ->'
        })
        next(error);
    }
};


exports.list = async(req, res, next) => {
    try {
        const registro = await models.Usuario.findAll();
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
        const registro = await models.Usuario.create(req.body);
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
        
            const registro = await models.Usuario.update({rol: req.body.rol, nombre: req.body.nombre, password: req.body.password, email: req.body.email, estado: req.body.estado},
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
        
            const registro = await models.Usuario.update({estado: 1},
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
        
            const registro = await models.Usuario.update({estado: 0},
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


// exports.actualizar = async(req, res, next) => {
//     try {
//         const user = await models.finby
//     } catch (error) {

//     }
// };