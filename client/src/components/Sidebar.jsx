import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Sidebar = ({ activeTab = "" }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex sticky top-0 h-[100vh] w-80 bg-background-light dark:bg-background-dark p-6 flex-col justify-between border-r border-primary/20 dark:border-primary/30 overflow-y-auto">
      <div className="flex flex-col gap-8">
        <nav className="flex flex-col gap-2">
          <Link
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold ${activeTab === "dashboard" ? "bg-primary/20 dark:bg-primary/30 text-gray-900 dark:text-white" : "hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-400 font-medium"}`}
            to="/dashboard"
          >
            <svg
              fill="currentColor"
              height="24"
              viewBox="0 0 256 256"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
            </svg>
            <span>Dashboard</span>
          </Link>
          <Link
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium ${activeTab === "friends" ? "bg-primary/20 dark:bg-primary/30 text-gray-900 dark:text-white font-semibold" : "hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-400"}`}
            to="/friends"
          >
            <svg
              fill="currentColor"
              height="24"
              viewBox="0 0 256 256"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
            </svg>
            <span>Friends</span>
          </Link>
          <Link
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium ${activeTab === "workouts" ? "bg-primary/20 dark:bg-primary/30 text-gray-900 dark:text-white font-semibold" : "hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-400"}`}
            to="/workouts"
          >
            <svg
              fill="currentColor"
              height="24"
              viewBox="0 0 256 256"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M248,120h-8V88a16,16,0,0,0-16-16H208V64a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v56H104V64A16,16,0,0,0,88,48H64A16,16,0,0,0,48,64v8H32A16,16,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16,16,0,0,0,16,16H48v8a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V136h48v56a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16v-8h16a16,16,0,0,0,16-16V136h8a8,8,0,0,0,0-16ZM32,168V88H48v80Zm56,24H64V64H88V192Zm104,0H168V64h24V175.82c0,.06,0,.12,0,.18s0,.12,0,.18V192Zm32-24H208V88h16Z"></path>
            </svg>
            <span>Workouts</span>
          </Link>
          <Link
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium ${activeTab === "progress" ? "bg-primary/20 dark:bg-primary/30 text-gray-900 dark:text-white font-semibold" : "hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-400"}`}
            to="/my-progress"
          >
            <svg
              fill="currentColor"
              height="24"
              viewBox="0 0 256 256"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
            </svg>
            <span>Progress</span>
          </Link>

        </nav>
      </div>
      <Link
        to="/login"
        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-300"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            clipRule="evenodd"
          />
        </svg>
        Logout
      </Link>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-t border-primary/20 dark:border-primary/30 z-50">
        <div className="flex justify-around items-center py-2">
          <Link className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'text-primary' : 'text-gray-600 dark:text-gray-400 hover:text-primary'}`} to="/dashboard">
            <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path></svg>
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${activeTab === 'friends' ? 'text-primary' : 'text-gray-600 dark:text-gray-400 hover:text-primary'}`} to="/friends">
            <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>
            <span className="text-xs mt-1">Friends</span>
          </Link>
          <Link className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${activeTab === 'workouts' ? 'text-primary' : 'text-gray-600 dark:text-gray-400 hover:text-primary'}`} to="/workouts">
            <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M248,120h-8V88a16,16,0,0,0-16-16H208V64a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v56H104V64A16,16,0,0,0,88,48H64A16,16,0,0,0,48,64v8H32A16,16,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16,16,0,0,0,16,16H48v8a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V136h48v56a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16v-8h16a16,16,0,0,0,16-16V136h8a8,8,0,0,0,0-16ZM32,168V88H48v80Zm56,24H64V64H88V192Zm104,0H168V64h24V175.82c0,.06,0,.12,0,.18s0,.12,0,.18V192Zm32-24H208V88h16Z"></path></svg>
            <span className="text-xs mt-1">Workouts</span>
          </Link>
          <Link className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${activeTab === 'progress' ? 'text-primary' : 'text-gray-600 dark:text-gray-400 hover:text-primary'}`} to="/my-progress">
            <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path></svg>
            <span className="text-xs mt-1">Progress</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
