/// Rotas que podem ser acessadas para contato com a api

const MatchController = require('./controllers/MatchController');
const UserController = require('./controllers/UserController');

const express = require('express');
const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
    var token = req.headers['authorization'];
    if (!token) 
        return res.status(401).json({auth: false, message: 'No token provided.'});
    
    jwt
        .verify(token, 'tokenteste', function (err, decoded) {
            if (err) 
                return res.status(500).json({auth: false, message: 'Failed to authenticate token.'});
            
            req.userId = decoded.id;

            if (decoded.id != req.params.id_user) {
                return res
                    .status(500)
                    .json({auth: false, message: 'Nada disso safado'});
            }
            next();
        });
}

const routes = express.Router();

///Rotas para manipulação dos jogos
routes.get('/matches/:id_user', verifyJWT, MatchController.index);
routes.post('/matches/:id_user', verifyJWT, MatchController.store);

///Rotas para manipulação dos usuarios
routes.get('/users', verifyJWT, UserController.index);
routes.get('/users/records/:id_user', verifyJWT, UserController.record);
routes.get('/users/records', verifyJWT, UserController.records);
routes.post('/users', verifyJWT, UserController.store);
routes.post('/users/login', UserController.login);

module.exports = routes;