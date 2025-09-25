import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen">
      <AppHeader isAuthenticated={false} showAuthButtons={true} currentPage="login" />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center py-4 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row w-full max-w-4xl mx-auto">
            <div className="lg:w-1/2 hidden lg:block">
              <img
                alt="Fitness class"
                className="h-full w-full object-cover rounded-l-xl"
                src="fat-lads.jpg"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-4 lg:space-y-8">
              <div className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 shadow-xl rounded-xl lg:rounded-r-xl h-full flex flex-col justify-center">
                <div>
                  <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-black text-background-dark dark:text-background-light">
                    Welcome Back
                  </h1>
                  <h2 className="mt-2 lg:mt-4 text-center text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-background-dark dark:text-background-light">
                    Sign in to your account
                  </h2>
                  <p className="mt-1 lg:mt-2 text-center text-xs sm:text-sm text-background-dark/70 dark:text-background-light/70">
                    Ready to continue your fitness journey?
                  </p>
                </div>
                <form className="mt-4 lg:mt-8 space-y-4 lg:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-lg relative block w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-primary/20 bg-background-light dark:bg-background-dark placeholder-background-dark/50 dark:placeholder-background-light/50 text-background-dark dark:text-background-light focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-sm sm:text-base"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-lg relative block w-full px-3 py-2 sm:px-4 sm:py-3 pr-10 sm:pr-12 border-2 border-primary/20 bg-background-light dark:bg-background-dark placeholder-background-dark/50 dark:placeholder-background-light/50 text-background-dark dark:text-background-light focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-sm sm:text-base"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg
                          className="h-5 w-5 text-background-dark/50 dark:text-background-light/50"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-background-dark/50 dark:text-background-light/50"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <Link
                        to="/forgot-password"
                        className="font-medium text-primary hover:text-primary/90"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 sm:py-3 px-4 border border-transparent text-sm sm:text-base font-bold rounded-lg text-background-dark bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors duration-300"
                    >
                      Log In
                    </button>
                  </div>
                </form>
                <div className="mt-4 lg:mt-6 text-center">
                  <p className="text-xs sm:text-sm text-background-dark/70 dark:text-background-light/70">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="font-medium text-primary hover:text-primary/90"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
