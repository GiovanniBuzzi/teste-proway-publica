const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            login: DataTypes.STRING,
            password: DataTypes.STRING,
            min_season: DataTypes.INTEGER,
            max_season: DataTypes.INTEGER,
            min_record: DataTypes.INTEGER,
            max_record: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Match, {foreignKey: 'id_user', as: 'matches'});
        this.belongsTo(models.Team, {foreignKey: 'id_team', as: 'team'});
    }
}

module.exports = User;