const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Exersize extends Model { }

Exersize.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        exersizeName: {
            type: "VARCHAR(60)",
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Exersize'
    }
)

module.exports = Exersize;