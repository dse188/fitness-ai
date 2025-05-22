import { DataTypes } from 'sequelize';
import db from '../db/index.js';
import User from './userModel.js';

const Workout = db.define('Workout', {
  title: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  duration: { type: DataTypes.INTEGER, allowNull: false },
  notes: { type: DataTypes.TEXT },
  exercises: { type: DataTypes.JSON, allowNull: false }, // store exercises/sets as JSON
});

Workout.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Workout, { foreignKey: 'userId' });

export default Workout;