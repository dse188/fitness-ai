const API_KEY = 'f2HD1flyKLTLE8IKJaEmKA==y36xdleog7rOpFAI';
const BASE_URL = 'https://api.api-ninjas.com/v1/exercises';

// Predefined list of common exercises as fallback
const COMMON_EXERCISES = [
  'Bench Press',
  'Squat',
  'Deadlift',
  'Overhead Press',
  'Pull-up',
  'Barbell Row',
  'Dumbbell Curl',
  'Leg Press',
  'Lat Pulldown',
  'Push-up',
  'Dumbbell Shoulder Press',
  'Barbell Curl'
];

export const searchExerciseName = async (name = '') => {
    try {
        // Return common exercises if no name provided
        if (!name.trim()) {
            return COMMON_EXERCISES.map(ex => ({ name: ex }));
        }

        const response = await fetch(`${BASE_URL}?name=${encodeURIComponent(name)}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch exercises');
        }

        const data = await response.json();
        return data.length > 0 ? data : [{ name }]; // Return at least the searched name
    } catch (error) {
        console.error("API Error:", error);
        // Return common exercises if API fails
        return COMMON_EXERCISES.map(ex => ({ name: ex }));
    }
};