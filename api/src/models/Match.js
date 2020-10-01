const { Model, DataTypes } = require('sequelize');

class Match extends Model {
    static init(sequelize) {
        super.init({
            points: DataTypes.INTEGER,
            adversary: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.User, {foreignKey: 'id_user', as: 'user'});
    }
}

module.exports = Match;