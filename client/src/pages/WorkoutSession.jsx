import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const WorkoutSession = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [saveStatus, setSaveStatus] = useState('idle'); // 'idle', 'saving', 'saved', 'error'
  const intervalRef = useRef(null);

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

  const { user } = useAuth();

  const handleSave = async () => {
    if (!hasStarted || isRunning || !exercise || !user) {
      setSaveStatus('error');
      return;
    }
    
    setSaveStatus('saving');
    
    try {
      const workoutData = {
        user_id: user.id,
        exercise_id: exercise.id,
        exercise_name: exercise.name,
        duration: Math.max(1, time),
        description: `${exercise.target} exercise using ${exercise.equipment}`,
        bodyPart: exercise.bodyPart,
        equipment: exercise.equipment,
        target: exercise.target
      };
      
      const response = await fetch('https://group-fitness-app.onrender.com/workout-sessions/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(workoutData)
      });
      
      if (response.ok) {
        setSaveStatus('saved');
        setTime(0);
        setHasStarted(false);
        setTimeout(() => setSaveStatus('idle'), 2000);
      } else {
        setSaveStatus('error');
        setTimeout(() => setSaveStatus('idle'), 3000);
      }
    } catch (error) {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  useEffect(() => {
    const fetchExercise = () => {
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
      <div className="bg-background-light font-display">
        <AppHeader />
        <div className="flex min-h-screen">
          <Sidebar activeTab="workouts" />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-background-dark">Loading workout...</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (!exercise) {
    return (
      <div className="bg-background-light font-display">
        <AppHeader />
        <div className="flex min-h-screen">
          <Sidebar activeTab="workouts" />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-background-dark">Workout not found</p>
              <Link to="/workouts" className="mt-4 inline-block bg-primary text-black px-4 py-2 rounded-lg">Back to Workouts</Link>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light font-display min-h-screen">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="workouts" />
        <main className="flex-1 lg:ml-80">
          <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-2">
            {/* Left Panel - Controls */}
            <div className="flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
              <div className="w-full max-w-md">
                <Link 
                  to={`/workout-detail/${id}`} 
                  className="inline-flex items-center gap-2 mb-6 text-sm text-background-dark hover:text-primary transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back
                </Link>

                <h1 className="text-2xl font-bold tracking-tight text-background-dark sm:text-3xl capitalize">
                  {exercise.name}
                </h1>
                <p className="mt-3 text-sm text-background-dark/60">
                  Target: {exercise.target} • Equipment: {exercise.equipment}
                </p>

                <div className="mt-8">
                  <div className="grid grid-cols-3 gap-4 sm:gap-6">
                    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4">
                      <span className="text-3xl font-black text-primary sm:text-4xl">{formatTime(time).hours}</span>
                      <span className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">Hours</span>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4">
                      <span className="text-3xl font-black text-primary sm:text-4xl">{formatTime(time).minutes}</span>
                      <span className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">Minutes</span>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4">
                      <span className="text-3xl font-black text-primary sm:text-4xl">{formatTime(time).seconds}</span>
                      <span className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">Seconds</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <button 
                    onClick={handleStartStop}
                    className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition-transform hover:scale-105 sm:w-auto ${
                      isRunning ? 'bg-red-500 text-white' : 'bg-primary text-background-dark'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      {isRunning ? (
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      ) : (
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      )}
                    </svg>
                    {isRunning ? 'Stop' : 'Start'}
                  </button>
                  <button 
                    onClick={handleSave}
                    disabled={!hasStarted || isRunning || saveStatus === 'saving'}
                    className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition-all sm:w-auto ${
                      saveStatus === 'saved' 
                        ? 'bg-green-600 text-white' 
                        : saveStatus === 'saving'
                        ? 'bg-blue-500 text-white'
                        : saveStatus === 'error'
                        ? 'bg-red-500 text-white'
                        : hasStarted && !isRunning
                        ? 'bg-green-500 text-white hover:scale-105' 
                        : 'bg-gray-200 text-gray-700 cursor-not-allowed'
                    }`}
                  >
                    {saveStatus === 'saving' ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : saveStatus === 'saved' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : saveStatus === 'error' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                      </svg>
                    )}
                    {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'saved' ? 'Saved!' : saveStatus === 'error' ? 'Error' : 'Save'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panel - GIF */}
            <div className="sticky top-16 flex h-screen min-h-[300px] items-center justify-center bg-gray-100 p-4 lg:h-[calc(100vh-4rem)]">
              <img 
                alt={`${exercise.name} Exercise GIF`} 
                className="h-3/4 w-auto rounded-xl object-contain" 
                src={exercise.gifUrl}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorkoutSession;