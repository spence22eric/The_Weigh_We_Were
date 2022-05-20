const User = require('./User');
const Workout = require('./Workout');
const Exersize = require('./Exersize');
const Category = require('./Category');

// associations
Category.hasMany(Exersize)
Exersize.belongsTo(Category)
User.hasMany(Workout)
Workout.belongsTo(User)
Workout.hasMany(Exersize)
Exersize.belongsToMany(Workout, {
    through: 'workoutExersize'
})

module.exports = { User, Workout, Category, Exersize };
