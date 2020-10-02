const { Model, DataTypes } = require('sequelize');

class Match extends Model {
    static init(sequelize) {
        super.init({
            points: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.User, {foreignKey: 'id_user', as: 'user'});
        this.belongsTo(models.Team, {foreignKey: 'id_adversary', as: 'adversary'});
    }
}

module.exports = Match;