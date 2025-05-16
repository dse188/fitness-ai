function WorkoutDataExample({id, title, date, duration, notes, exercises})
{
    // Example workout data structure
{
  id: 1,
  title: "Push Day",
  date: "2023-11-15",
  duration: 60,
  notes: "Great workout! Hit PR on bench press",
  exercises: [
    {
      id: 1,
      name: "Bench Press",
      muscle: "chest",
      sets: [
        { setNumber: 1, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 2, weight: 155, reps: 8, volume: 1240 },
      ]
    },
    // ... more exercises
  ]
}
}