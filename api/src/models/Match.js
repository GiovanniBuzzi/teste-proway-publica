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
}

module.exports = Match;