import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const AppHeader = ({ activeTab = "", isAuthenticated = false, showAuthButtons = false, currentPage = "" }) => {
  return (
    <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm flex items-center justify-between px-3 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-4 border-b border-primary/20 dark:border-primary/30">
      <div className="flex items-center gap-2 sm:gap-4">
        <Logo />
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white">
          FitFam
        </h1>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4">
        {showAuthButtons ? (
          <>
            {currentPage === "login" ? (
              <>
                <Link
                  className="px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold bg-transparent border-2 border-primary hover:bg-primary/20 transition-colors"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold bg-primary text-background-dark hover:bg-opacity-90 transition-colors"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </>
            ) : currentPage === "signup" ? (
              <>
                <Link
                  className="px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold bg-transparent border-2 border-primary hover:bg-primary/20 transition-colors"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold bg-primary text-background-dark hover:bg-opacity-90 transition-colors"
                  to="/login"
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold bg-transparent border-2 border-primary hover:bg-primary/20 transition-colors"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold bg-primary text-background-dark hover:bg-opacity-90 transition-colors"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </>
            )}
          </>
        ) : (
          <>
            <button className="p-1.5 sm:p-2 rounded-full hover:bg-primary/20 transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-background-dark dark:text-background-light" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <Link to="/settings" className="p-1.5 sm:p-2 rounded-full hover:bg-primary/20 transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-background-dark dark:text-background-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
