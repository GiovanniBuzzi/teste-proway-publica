const { Model, DataTypes } = require('sequelize');

class Team extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.User, {foreignKey: 'id_team', as: 'players'});
        this.hasMany(models.Match, {foreignKey: 'id_adversary', as: 'adversarys'});
    }
}

module.exports = Team;