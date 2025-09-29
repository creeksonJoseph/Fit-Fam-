import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const WorkoutDetail = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);

  const BASE_URL = 'https://group-fitness-app.onrender.com';

  useEffect(() => {
    const fetchExercise = () => {
      // Only use cached exercises since individual exercise API doesn't exist
      const cachedExercises = localStorage.getItem('exercises');
      if (cachedExercises) {
        const exercises = JSON.parse(cachedExercises);
        const cachedExercise = exercises.find(ex => ex.id === id);
        if (cachedExercise) {

          setExercise(cachedExercise);
        } else {

        }
      } else {

      }
      setLoading(false);
    };

    if (id) {
      fetchExercise();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display">
        <AppHeader />
        <div className="flex min-h-screen">
          <Sidebar activeTab="workouts" />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-background-dark dark:text-background-light">Loading exercise...</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (!exercise) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display">
        <AppHeader />
        <div className="flex min-h-screen">
          <Sidebar activeTab="workouts" />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-background-dark dark:text-background-light">Exercise not found</p>
              <Link to="/workouts" className="mt-4 inline-block bg-primary text-black px-4 py-2 rounded-lg">Back to Workouts</Link>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="workouts" />
        <main className="flex-1 p-3 sm:p-6 lg:p-8 pb-24 lg:pb-8 lg:ml-80">
          <div className="mx-auto max-w-4xl">
            <Link 
              to="/workouts" 
              className="inline-flex items-center gap-1 sm:gap-2 mb-4 sm:mb-6 text-sm sm:text-base text-background-dark dark:text-background-light hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">Back to Workouts</span>
              <span className="sm:hidden">Back</span>
            </Link>

            <div className="relative w-full max-w-md mx-auto rounded-lg sm:rounded-xl overflow-hidden shadow-lg mb-6 sm:mb-8 bg-background-dark/5 dark:bg-background-light/5">
              <img 
                alt={exercise.name} 
                className="w-full h-auto object-contain" 
                src={exercise.gifUrl}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-background-dark dark:text-background-light">Workout Details</h2>
                <div className="space-y-3 sm:space-y-4 rounded-lg bg-white dark:bg-background-dark/20 border border-primary/20 dark:border-primary/30 p-4 sm:p-6">
                  <div className="flex justify-between">
                    <span className="font-medium text-background-dark/60 dark:text-background-light/60">Name</span>
                    <span className="font-semibold text-background-dark dark:text-background-light capitalize">{exercise.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-background-dark/60 dark:text-background-light/60">Body Part</span>
                    <span className="font-semibold text-background-dark dark:text-background-light capitalize">{exercise.bodyPart}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-background-dark/60 dark:text-background-light/60">Target Muscle</span>
                    <span className="font-semibold text-background-dark dark:text-background-light capitalize">{exercise.target}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-background-dark/60 dark:text-background-light/60">Equipment</span>
                    <span className="font-semibold text-background-dark dark:text-background-light capitalize">{exercise.equipment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-background-dark/60 dark:text-background-light/60">Secondary Muscles</span>
                    <span className="font-semibold text-background-dark dark:text-background-light capitalize">{exercise.secondaryMuscles?.join(', ') || 'N/A'}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-background-dark dark:text-background-light">Instructions</h2>
                <div className="space-y-2 sm:space-y-3">
                  <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-background-dark dark:text-background-light">
                    {exercise.instructions?.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    )) || <li>Instructions not available for this exercise.</li>}
                  </ol>
                </div>
              </div>
            </div>

            <div className="text-center pt-6 sm:pt-8">
              <Link to={`/workout-session/${exercise.id}`} className="inline-block bg-primary text-black font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg">
                Start Workout
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorkoutDetail;