//////// Inicialização do banco de dados junto ao sequelize
//////// E inserção dos modelos no servidor

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Team = require('../models/Team');
const Match = require('../models/Match');
const User = require('../models/User');

const connection = new Sequelize(dbConfig);

Team.init(connection);
Match.init(connection);
User.init(connection);

Team.associate(connection.models);
User.associate(connection.models);
Match.associate(connection.models);

module.exports = connection;