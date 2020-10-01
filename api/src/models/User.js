const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            login: DataTypes.STRING,
            min_season: DataTypes.INTEGER,
            max_season: DataTypes.INTEGER,
            min_record: DataTypes.INTEGER,
            max_record: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
}

module.exports = User;