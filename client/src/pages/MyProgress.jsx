import React from 'react';
import Sidebar from '../components/Sidebar';

const MyProgress = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-white">
      <div className="flex min-h-screen">
        <Sidebar activeTab="progress" />
        <main className="flex-1 p-8">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12">
                <h1 className="text-5xl font-bold text-background-dark dark:text-white">My Progress</h1>
                <p className="mt-2 text-lg text-background-dark/60 dark:text-white/60">Track your fitness journey and celebrate your achievements.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-background-dark dark:text-white">Total Workouts</h3>
                    <span className="text-primary text-3xl font-bold">5</span>
                  </div>
                  <div className="h-2 bg-background-light dark:bg-background-dark rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{width: '71%'}}></div>
                  </div>
                  <p className="text-sm text-background-dark/60 dark:text-white/60">This week's progress</p>
                </div>
                <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-background-dark dark:text-white">Avg. Duration</h3>
                    <span className="text-primary text-3xl font-bold">45<span className="text-lg">min</span></span>
                  </div>
                  <div className="h-2 bg-background-light dark:bg-background-dark rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <p className="text-sm text-background-dark/60 dark:text-white/60">Compared to last week</p>
                </div>
                <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-background-dark dark:text-white">Calories Burned</h3>
                    <span className="text-primary text-3xl font-bold">2500</span>
                  </div>
                  <div className="h-2 bg-background-light dark:bg-background-dark rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <p className="text-sm text-background-dark/60 dark:text-white/60">Weekly goal met</p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2 bg-white dark:bg-background-dark/50 rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-6 text-background-dark dark:text-white">Workout History</h2>
                  <div className="grid grid-flow-col grid-rows-[1fr_auto] items-end justify-items-center gap-6 h-48 px-3">
                    <div className="w-full bg-background-light dark:bg-background-dark rounded-t-lg relative">
                      <div className="absolute bottom-0 w-full bg-primary/20 dark:bg-primary/30 rounded-t" style={{height: '50%'}}></div>
                    </div>
                    <p className="text-xs font-bold text-background-dark/60 dark:text-white/60">Week 1</p>
                    <div className="w-full bg-background-light dark:bg-background-dark rounded-t-lg relative">
                      <div className="absolute bottom-0 w-full bg-primary/20 dark:bg-primary/30 rounded-t" style={{height: '70%'}}></div>
                    </div>
                    <p className="text-xs font-bold text-background-dark/60 dark:text-white/60">Week 2</p>
                    <div className="w-full bg-background-light dark:bg-background-dark rounded-t-lg relative">
                      <div className="absolute bottom-0 w-full bg-primary/20 dark:bg-primary/30 rounded-t" style={{height: '60%'}}></div>
                    </div>
                    <p className="text-xs font-bold text-background-dark/60 dark:text-white/60">Week 3</p>
                    <div className="w-full bg-background-light dark:bg-background-dark rounded-t-lg relative">
                      <div className="absolute bottom-0 w-full bg-primary rounded-t" style={{height: '100%'}}></div>
                    </div>
                    <p className="text-xs font-bold text-primary">Week 4</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-4 text-background-dark dark:text-white">Leaderboard</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-background-dark/60 dark:text-white/60">1</span>
                        <p className="font-medium text-background-dark dark:text-white">Sophia Carter</p>
                      </div>
                      <p className="font-bold text-background-dark dark:text-white">15</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-background-dark/60 dark:text-white/60">2</span>
                        <p className="font-medium text-background-dark dark:text-white">Liam Bennett</p>
                      </div>
                      <p className="font-bold text-background-dark dark:text-white">12</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-background-dark/60 dark:text-white/60">3</span>
                        <p className="font-medium text-background-dark dark:text-white">Ava Harper</p>
                      </div>
                      <p className="font-bold text-background-dark dark:text-white">10</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-background-dark/60 dark:text-white/60">4</span>
                        <p className="font-medium text-background-dark dark:text-white">Noah Foster</p>
                      </div>
                      <p className="font-bold text-background-dark dark:text-white">8</p>
                    </div>
                    <div className="flex items-center justify-between bg-primary/20 dark:bg-primary/30 rounded-lg p-3 -m-3">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-primary">5</span>
                        <p className="font-bold text-primary">You</p>
                      </div>
                      <p className="font-bold text-primary">5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </main>
      </div>
    </div>
  );
};

export default MyProgress;