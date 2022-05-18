const User = require('./User');
const Cardio = require('./Cardio');
const Strength = require('./Strength');
const Workout = require('./Workout');

// associations
User.hasMany(Workout, {
    foreignKey: 'user_id'
});

Strength.belongsTo(Workout, {
    foreignKey: 'workout_id'
});

Cardio.belongsTo(Workout, {
    foreignKey: 'workout_id'
});



module.exports = { User, Cardio, Strength }
