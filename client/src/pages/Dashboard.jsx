import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const Dashboard = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="dashboard" />
        <main className="flex-1 p-8 pb-24 lg:pb-8">
          <header className="mb-10">
            <h1 className="text-4xl font-black text-gray-900 dark:text-white">Welcome back, Sophia</h1>
          </header>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-primary/40 dark:border-primary/50 shadow-md">
                <div className="flex gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Today's Workout</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">Strength Training</p>
                    <Link className="bg-primary/20 dark:bg-primary/30 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-lg text-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors inline-block" to="/workouts">Start</Link>
                  </div>
                  <div className="w-32 h-32 rounded-lg bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABFv9qbjgR8HH6SEDDW-tlCjljyVTG9aa1btgktNVVhpYVTgOzWkqkuA_xmCZxi-qSvbzwlrpJtfjGqB0DHV7fcyGMZu8Jshb9hYu-jtbXxV8-ElXpB3SdJKgj-rCnexceQxxxtZCiX0oSZqLJkpH1s4deM70_2Aq_Sc46gtJ8rGTEpNI6znMBOeY6Q-AHD7D0J5aeoHqp6KTx6cBq1SF9-glaN9ABYziSu7rfIr_xNzvDpW38LV5K-90lQZ0jRMsuthmrYaAqFAE")'}}></div>
                </div>
              </div>
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-primary/40 dark:border-primary/50 shadow-md">
                <div className="flex gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Friends Active Now</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">3 friends are working out</p>
                    <Link className="bg-primary/20 dark:bg-primary/30 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-lg text-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors inline-block" to="/friends">View</Link>
                  </div>
                  <div className="w-32 h-32 rounded-lg bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbekwa8x5SOy8tggCWbMxg4mmipEOD2KPcwt6Cdk2XylucxcS8O6WsTo95UhQewXIn2gUSrmNMp_b6IDP6WKKZFfIwrZIxyC3eKT1TDmqpGhrXcf6h_VRuFb-CUC-ZWvRcuep-NtizbgptYYFLMwBybFk0gm1JscXOMVF-797usDswtMSTaweV0SyMSuncpI-6p-6QpI08UZtFdkcMgktn3paWAPBuqjwVu3Y8eXrWqVOdviciC2pQgwJH4vmMxbPpXtuNj96f56A")'}}></div>
                </div>
              </div>
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-primary/40 dark:border-primary/50 shadow-md">
                <div className="flex gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Progress Streak</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">5 days</p>
                    <Link className="bg-primary/20 dark:bg-primary/30 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-lg text-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors inline-block" to="/my-progress">View</Link>
                  </div>
                  <div className="w-32 h-32 rounded-lg bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtKU3f3ujHljVm8SuO2AUgHDVzrruBoYsIjoHGfTyJIVripOo4o0aSGkc5UvcktPRnr8DqPcvQAEyCdLi8av13VDSdADsTL-ESHpEzKA8Anu6PkJNnc3klnUhth7v062VEuOpav1hz6oCFh48QqqqEFpxg7vsAltLvbDABUxJAxZfhTn_DWidOBdYGMT3InVP3FF7jEvsHe_txhDiOONSkpZGbCsD6L0waUNOOmV82zBFq-20J2wxn-0eldz4T5bJiGwco-FQRBuI")'}}></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;