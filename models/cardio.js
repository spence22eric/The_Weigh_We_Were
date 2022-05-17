const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cardio extends Model { }

Cardio.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        workoutName: {
            type: "VARCHAR(60)",
            allowNull: false
        },
        reps: {
            type: DataTypes.INTEGER,
            allowNull: false
        }        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Cardio'
    }
)

module.exports = Cardio;