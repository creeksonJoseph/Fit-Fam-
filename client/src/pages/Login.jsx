import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-background-dark rounded-xl shadow-lg">
          <div className="text-center">
            <h1 className="text-4xl font-black text-gray-900 dark:text-white">RISE AND GRIND</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Welcome back, champ!</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input name="remember" type="hidden" value="true"/>
            <div className="rounded-lg shadow-sm -space-y-px">
              <div>
                <label className="sr-only" htmlFor="email-address">Email address</label>
                <input 
                  autoComplete="email" 
                  className="appearance-none rounded-t-lg relative block w-full px-3 py-4 border-0 bg-background-light dark:bg-black/20 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" 
                  id="email-address" 
                  name="email" 
                  placeholder="Email address" 
                  required 
                  type="email"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="password">Password</label>
                <input 
                  autoComplete="current-password" 
                  className="appearance-none rounded-b-lg relative block w-full px-3 py-4 border-0 bg-background-light dark:bg-black/20 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" 
                  id="password" 
                  name="password" 
                  placeholder="Password" 
                  required 
                  type="password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a className="font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button 
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-gray-900 bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark" 
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="text-sm text-center">
            <Link className="font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary" to="/signup">
              Don't have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;