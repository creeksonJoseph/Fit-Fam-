import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const WorkoutSession = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const intervalRef = useRef(null);

  const BASE_URL = 'https://fit-fam-server.onrender.com';

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { hours: hours.toString().padStart(2, '0'), minutes: minutes.toString().padStart(2, '0'), seconds: secs.toString().padStart(2, '0') };
  };

  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      setHasStarted(true);
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
  };

  const handleSave = () => {
    alert('Workout saved! (Backend implementation pending)');
  };

  useEffect(() => {
    const fetchExercise = () => {
      // Only use cached exercises since individual exercise API doesn't exist
      const cachedExercises = localStorage.getItem('exercises');
      if (cachedExercises) {
        const exercises = JSON.parse(cachedExercises);
        const cachedExercise = exercises.find(ex => ex.id === id);
        if (cachedExercise) {
          setExercise(cachedExercise);
        }
      }
      setLoading(false);
    };

    if (id) {
      fetchExercise();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
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
              <p className="mt-4 text-background-dark dark:text-background-light">Loading workout...</p>
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
              <p className="text-background-dark dark:text-background-light">Workout not found</p>
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
          <div className="mx-auto w-full max-w-2xl">
            <Link 
              to={`/workout-detail/${id}`} 
              className="inline-flex items-center gap-1 sm:gap-2 mb-6 sm:mb-8 text-sm sm:text-base text-background-dark dark:text-background-light hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">Back to Workout</span>
              <span className="sm:hidden">Back</span>
            </Link>

            <div className="text-center">
              <div className="relative w-full max-w-sm mx-auto rounded-lg sm:rounded-xl overflow-hidden shadow-lg mb-6 sm:mb-8 bg-background-dark/5 dark:bg-background-light/5">
                <img 
                  alt={exercise.name} 
                  className="w-full h-auto object-contain" 
                  src={exercise.gifUrl}
                />
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-background-dark dark:text-background-light capitalize mb-4">
                {exercise.name}
              </h1>

              <div className="mt-8 sm:mt-12">
                <div className="grid grid-cols-3 gap-3 sm:gap-6">
                  <div className="flex flex-col items-center justify-center rounded-lg bg-white dark:bg-background-dark/50 p-4 sm:p-6 border border-background-dark/10 dark:border-background-light/10">
                    <span className="text-4xl sm:text-6xl lg:text-7xl font-black text-primary">{formatTime(time).hours}</span>
                    <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium uppercase tracking-wider text-background-dark/60 dark:text-background-light/60">Hours</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-white dark:bg-background-dark/50 p-4 sm:p-6 border border-background-dark/10 dark:border-background-light/10">
                    <span className="text-4xl sm:text-6xl lg:text-7xl font-black text-primary">{formatTime(time).minutes}</span>
                    <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium uppercase tracking-wider text-background-dark/60 dark:text-background-light/60">Minutes</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-white dark:bg-background-dark/50 p-4 sm:p-6 border border-background-dark/10 dark:border-background-light/10">
                    <span className="text-4xl sm:text-6xl lg:text-7xl font-black text-primary">{formatTime(time).seconds}</span>
                    <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium uppercase tracking-wider text-background-dark/60 dark:text-background-light/60">Seconds</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
                <button 
                  onClick={handleStartStop}
                  className={`flex w-full items-center justify-center rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold transition-all hover:scale-105 sm:w-auto ${
                    isRunning ? 'bg-red-500 text-white' : 'bg-primary text-black'
                  }`}
                >
                  {isRunning ? 'Stop' : 'Start'}
                </button>
                <button 
                  onClick={handleSave}
                  disabled={!hasStarted}
                  className={`flex w-full items-center justify-center rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold transition-all hover:scale-105 sm:w-auto ${
                    hasStarted 
                      ? 'bg-green-500 text-white cursor-pointer' 
                      : 'bg-background-dark/10 dark:bg-background-light/10 text-background-dark/50 dark:text-background-light/50 cursor-not-allowed'
                  }`}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorkoutSession;