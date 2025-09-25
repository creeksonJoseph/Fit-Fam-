import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const FriendsActivity = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-background-dark dark:text-background-light">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="dashboard" />
        <main className="flex-1 p-8 pb-24 lg:pb-8 lg:ml-80">
          <div className="max-w-4xl mx-auto">
            <Link to="/dashboard" className="inline-flex items-center gap-2 mb-6 text-background-dark dark:text-background-light hover:text-primary transition-colors">
              <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M244,128a8,8,0,0,1-8,8H19.31l38.35,38.34a8,8,0,0,1-11.32,11.32l-52-52a8,8,0,0,1,0-11.32l52-52a8,8,0,0,1,11.32,11.32L19.31,120H236A8,8,0,0,1,244,128Z"></path>
              </svg>
              Back to Dashboard
            </Link>
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/20 text-primary p-4 rounded-xl mb-6">
                <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M244,144v48a12,12,0,0,1-12,12H132a12,12,0,0,1-12-12V144a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12v12h12a12,12,0,0,1,12,12v12h12a12,12,0,0,1,12,12h12A12,12,0,0,1,244,144Zm-56,24a12,12,0,0,0-12-12h-4v40h4a12,12,0,0,0,12-12Zm-76.33-85.37,48-32A12,12,0,0,0,96,48V112a12,12,0,0,0,23.67,3.37l-48,32A12,12,0,0,0,52.33,144L64,128,52.33,112A12,12,0,0,0,48,112a12,12,0,0,0-3.67,23.37l48-32A12,12,0,0,0,112,96H12V48a12,12,0,0,0-24,0v52H24a12,12,0,0,0,0,24h64V72.25l-36.62,24.41a12,12,0,1,0,13.24,19.86Z"></path>
                </svg>
              </div>
              <h2 className="text-5xl font-bold mb-4">Under Construction</h2>
              <p className="text-lg text-background-dark/70 dark:text-background-light/70 max-w-2xl mx-auto">
                We're building something amazing! This page will soon be your hub for connecting with friends, tracking workouts together, and crushing your fitness goals as a team.
              </p>
            </div>
            <div className="bg-background-light dark:bg-background-dark/50 border border-primary/20 rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-6">What's Coming Soon</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-background-light dark:bg-background-dark rounded-lg">
                  <div className="bg-primary/20 text-primary p-4 rounded-full mb-4">
                    <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Online Friends</h4>
                  <p className="text-sm text-background-dark/70 dark:text-background-light/70">See who's online and ready for a session.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-background-light dark:bg-background-dark rounded-lg">
                  <div className="bg-primary/20 text-primary p-4 rounded-full mb-4">
                    <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Live Workouts</h4>
                  <p className="text-sm text-background-dark/70 dark:text-background-light/70">View your friends' current workouts in real-time.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-background-light dark:bg-background-dark rounded-lg">
                  <div className="bg-primary/20 text-primary p-4 rounded-full mb-4">
                    <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm-8-48A95.44,95.44,0,0,0,60.08,60.15C52.81,67.51,46.35,74.59,40,82V64a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16H49c7.15-8.42,14.27-16.35,22.39-24.57a80,80,0,1,1,1.66,114.75,8,8,0,1,0-11,11.64A96,96,0,1,0,128,32Z"></path>
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Workout History</h4>
                  <p className="text-sm text-background-dark/70 dark:text-background-light/70">Explore past activities and celebrate milestones.</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-background-dark/80 dark:text-background-light/80">Stay tuned for updates. We can't wait to share it with you!</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FriendsActivity;