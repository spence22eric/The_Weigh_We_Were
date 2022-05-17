const { Model, DataTypes } = require('sequelize');

class Strength extends Model { }

Strength.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        workoutName: {
            type: DataTypes.STRING,
            title: VARCHAR(60),
            allowNull: false
        },
        reps: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        }        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Strength'
    }
)