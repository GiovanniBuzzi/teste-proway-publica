/// Rotas que podem ser acessadas para contato com a api

const MatchController = require('./controllers/MatchController');
const UserController = require('./controllers/UserController');

const express = require('express');

const routes = express.Router();

routes.get('/matches/:id_user', MatchController.index);
routes.post('/matches/:id_user', MatchController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

module.exports = routes;