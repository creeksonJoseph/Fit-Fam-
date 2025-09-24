import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const AppHeader = ({ activeTab = "", isAuthenticated = false, showAuthButtons = false }) => {
  return (
    <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm flex items-center justify-between px-6 sm:px-10 py-4 border-b border-primary/20 dark:border-primary/30">
      <div className="flex items-center gap-4">
        <Logo />
        <h1 className="text-2xl font-bold text-black dark:text-white">
          FitFam
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        {showAuthButtons ? (
          <>
            <Link
              className="px-6 py-2.5 rounded-full text-sm font-bold bg-transparent border-2 border-primary hover:bg-primary/20 transition-colors"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="px-6 py-2.5 rounded-full text-sm font-bold bg-primary text-background-dark hover:bg-opacity-90 transition-colors"
              to="/signup"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <button className="p-2 rounded-full hover:bg-primary/20 transition-colors">
              <svg className="w-6 h-6 text-background-dark dark:text-background-light" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-primary/20 transition-colors">
              <svg className="w-6 h-6 text-background-dark dark:text-background-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
