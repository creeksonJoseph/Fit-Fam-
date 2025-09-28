import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const WorkoutHistory = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const BASE_URL = 'http://localhost:5000';
  const userId = 1;

  useEffect(() => {
    const fetchWorkoutHistory = async () => {
      try {
        const response = await fetch(`${BASE_URL}/workout-sessions/${userId}`);
        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        console.error('Error fetching workout history:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchWorkoutHistory();
  }, []);

  if (loading) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display">
        <AppHeader />
        <div className="flex min-h-screen">
          <Sidebar activeTab="workouts" />
          <main className="flex-1 flex items-center justify-center lg:ml-80">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
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
        <main className="flex-1 p-8 pb-24 lg:pb-8 lg:ml-80">
          <div className="mx-auto max-w-4xl">
            <Link 
              to="/workouts" 
              className="inline-flex items-center gap-2 mb-6 text-background-dark dark:text-background-light hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Workouts
            </Link>
            
            <h1 className="text-4xl font-bold text-background-dark dark:text-white mb-8">
              Workout History
            </h1>
            
            {workouts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-background-dark/60 dark:text-white/60 mb-4">
                  No workouts completed yet
                </p>
                <Link 
                  to="/workouts" 
                  className="bg-primary text-black px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
                >
                  Start Your First Workout
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {workouts.map((workout, index) => (
                  <div key={index} className="bg-white dark:bg-background-dark/50 rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-background-dark dark:text-white capitalize">
                          {workout.name}
                        </h3>
                        <p className="text-background-dark/60 dark:text-white/60">
                          {workout.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">
                          {workout.duration} min
                        </p>
                        <p className="text-sm text-background-dark/60 dark:text-white/60">
                          Duration
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-background-dark/60 dark:text-white/60">
                        Completed on {new Date(workout.time_completed).toLocaleDateString()}
                      </span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                        {workout.progress}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorkoutHistory;