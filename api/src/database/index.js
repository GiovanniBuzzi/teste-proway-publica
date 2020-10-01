//////// Inicialização do banco de dados junto ao sequelize
//////// E inserção dos modelos no servidor

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

module.exports = connection;