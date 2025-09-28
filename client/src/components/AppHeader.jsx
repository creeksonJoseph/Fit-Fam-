import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "./Logo";

const AppHeader = ({ activeTab = "", isAuthenticated = false, showAuthButtons = false, currentPage = "" }) => {
  const { user } = useAuth();
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
            <Link to="/notifications" className="p-1.5 sm:p-2 rounded-full hover:bg-primary/20 transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-background-dark dark:text-background-light" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </Link>
            <Link to="/settings" className="block">
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 bg-center bg-cover rounded-full border-2 border-primary hover:border-primary/60 transition-colors"
                style={{
                  backgroundImage: user?.profile_image
                    ? `url("${user.profile_image}")`
                    : 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7qdqiXNj1XEs9_QdNO92DnYy0gUDZ7UMtbFKUQaPluA924iAHM_-aPBRCP-eFe2LWZxAMJ6sNM5HxvlOMZQSiYL7OAN6BiJphg6V7PDaM5fsW8RyKMWHk5luw4NNeufjKmaygCDCYKxdygTuOZMwVEKkkOnjabXYKbDwFGW-dyRfnLyfFY8OMJuQN-H_7czKkwH7z_GukThlP0g8YRJKzS9dZ_SdRYEdGW0XJX__0Z5EzSakZsz8cmYH0llVIYab2H0a2RV1vNsyl")',
                }}
              ></div>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
