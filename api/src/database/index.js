//////// Inicialização do banco de dados junto ao sequelize
//////// E inserção dos modelos no servidor

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Match = require('../models/Match');
const User = require('../models/User');

const connection = new Sequelize(dbConfig);

Match.init(connection);
User.init(connection);

module.exports = connection;