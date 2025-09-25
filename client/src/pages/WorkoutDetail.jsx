import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const WorkoutDetail = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="workouts" />
        <main className="flex-1 p-3 sm:p-6 lg:p-8 pb-24 lg:pb-8">
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

            <div className="relative w-full aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-lg mb-6 sm:mb-8">
              <img 
                alt="Exercise demonstration" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqz4oIxTMRi_VxCVZSsL1_zwmdfpnPcYzAXhtf-c738kiNGnaEYdFG5Ks5J48AihLCmxtFWYIb9Xqu3vCXU3HdBSlJG10qBiWUSvhUX5bWyMmPw3xw0s7iF3tMN7LxsyNw1Nr1WWznOXCpG08U8kB7wkf6kY_bpt2o_S5Kixp0FnE7cexAs6d3oQ1w2Opxq3nS9K1d9lg21TtIrcbUqhxanAn1vl5jdkvLtV71xS70jnpJrXQrQeiErdCfIh-xOBBATiYS1UQvZUA"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-background-dark dark:text-background-light">Workout Details</h2>
                <div className="space-y-3 sm:space-y-4 rounded-lg bg-white dark:bg-background-dark/20 border border-primary/20 dark:border-primary/30 p-4 sm:p-6">
                  <div className="flex justify-between">
                    <span className="font-medium text-background-dark/60 dark:text-background-light/60">Name</span>
                    <span className="font-semibold text-background-dark dark:text-background-light">Squats</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-background-dark/60 dark:text-background-light/60">Body Part</span>
                    <span className="font-semibold text-background-dark dark:text-background-light">Legs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-background-dark/60 dark:text-background-light/60">Target Muscle</span>
                    <span className="font-semibold text-background-dark dark:text-background-light">Quadriceps</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-background-dark/60 dark:text-background-light/60">Equipment</span>
                    <span className="font-semibold text-background-dark dark:text-background-light">Barbell</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-background-dark/60 dark:text-background-light/60">Secondary Muscles</span>
                    <span className="font-semibold text-background-dark dark:text-background-light">Hamstrings, Glutes</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-background-dark dark:text-background-light">Instructions</h2>
                <div className="space-y-2 sm:space-y-3">
                  <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-background-dark dark:text-background-light">
                    <li>Stand with your feet shoulder-width apart, holding a barbell across your upper back.</li>
                    <li>Lower your body as if sitting in a chair, keeping your back straight and core engaged.</li>
                    <li>Descend until your thighs are parallel to the ground.</li>
                    <li>Push back up to the starting position.</li>
                    <li>Repeat for the desired number of repetitions.</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="text-center pt-6 sm:pt-8">
              <button className="inline-block bg-primary text-black font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg">
                Start Workout
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorkoutDetail;