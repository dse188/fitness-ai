import Workout from '../models/workoutModel.js';

export const createWorkout = async (req, res) => {
  try {
    const { title, date, duration, notes, exercises } = req.body;
    const userId = req.user.id; // set by auth middleware
    const workout = await Workout.create({ title, date, duration, notes, exercises, userId });
    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ message: 'Failed to save workout', error: err.message });
  }
};

export const getUserWorkouts = async (req, res) => {
  try {
    const userId = req.user.id;
    const workouts = await Workout.findAll({ where: { userId } });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch workouts', error: err.message });
  }
};

export const deleteWorkout = async (req, res) => {
  try {
    const userId = req.user.id;
    const workoutId = req.params.id;
    console.log('Trying to delete workout:', workoutId, 'for user:', userId); // Add this line
    const deleted = await Workout.destroy({ where: { id: workoutId, userId } });
    if (deleted) {
      res.json({ success: true });
    } else {
      res.status(404).json({ message: 'Workout not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete workout', error: err.message });
  }
};