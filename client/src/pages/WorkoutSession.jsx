import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const WorkoutSession = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="workouts" />
        <main className="flex-1 flex items-center justify-center p-3 sm:p-6 lg:p-8 pb-24 lg:pb-8">
          <div className="mx-auto w-full max-w-2xl text-center">
            <Link 
              to="/workout-detail" 
              className="inline-flex items-center gap-1 sm:gap-2 mb-6 sm:mb-8 text-sm sm:text-base text-background-dark dark:text-background-light hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">Back to Workout</span>
              <span className="sm:hidden">Back</span>
            </Link>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-background-dark dark:text-background-light">
              Morning Yoga Flow
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-background-dark/60 dark:text-background-light/60">
              Focus on your breath and flow through each pose with intention. Remember to listen to your body and modify as needed.
            </p>

            <div className="mt-8 sm:mt-12">
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                <div className="flex flex-col items-center justify-center rounded-lg bg-white dark:bg-background-dark/50 p-4 sm:p-6 border border-background-dark/10 dark:border-background-light/10">
                  <span className="text-4xl sm:text-6xl lg:text-7xl font-black text-primary">00</span>
                  <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium uppercase tracking-wider text-background-dark/60 dark:text-background-light/60">Hours</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-white dark:bg-background-dark/50 p-4 sm:p-6 border border-background-dark/10 dark:border-background-light/10">
                  <span className="text-4xl sm:text-6xl lg:text-7xl font-black text-primary">30</span>
                  <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium uppercase tracking-wider text-background-dark/60 dark:text-background-light/60">Minutes</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-white dark:bg-background-dark/50 p-4 sm:p-6 border border-background-dark/10 dark:border-background-light/10">
                  <span className="text-4xl sm:text-6xl lg:text-7xl font-black text-primary">00</span>
                  <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium uppercase tracking-wider text-background-dark/60 dark:text-background-light/60">Seconds</span>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
              <button className="flex w-full items-center justify-center rounded-full bg-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-black transition-transform hover:scale-105 sm:w-auto">
                Stop
              </button>
              <button className="flex w-full items-center justify-center rounded-full bg-background-dark/10 dark:bg-background-light/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-background-dark dark:text-background-light transition-transform hover:scale-105 sm:w-auto">
                Save
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorkoutSession;