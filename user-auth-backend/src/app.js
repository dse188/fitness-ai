import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';
import workoutRoutes from './routes/workoutRoutes.js';
import User from './models/userModel.js';
import db from './db/index.js';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173', credentials: true })); // Adjust port if needed

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/workouts', workoutRoutes);

// Sync database and start server
const PORT = process.env.PORT || 5000;

db.sync() // This will create all tables defined by your models if they don't exist
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to sync database:', err);
  });