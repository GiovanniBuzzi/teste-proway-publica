/// Rotas que podem ser acessadas para contato com a api

const MatchController = require('./controllers/MatchController');
const UserController = require('./controllers/UserController');

const express = require('express');

const routes = express.Router();

routes.get('/matches/:id_user', MatchController.index);

routes.get('/users', UserController.index);

module.exports = routes;