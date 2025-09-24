import React from 'react';

const SignUp = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-center text-4xl font-black text-background-dark dark:text-background-light">
              Rise and Shine
            </h1>
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-background-dark dark:text-background-light">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-background-dark/70 dark:text-background-light/70">
              Join our community and start your fitness journey today.
            </p>
          </div>
          <div className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm p-8 shadow-xl rounded-xl space-y-6">
            <form className="space-y-6" method="POST">
              <div>
                <label className="sr-only" htmlFor="username">Username</label>
                <input 
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 border-2 border-primary/20 bg-background-light dark:bg-background-dark placeholder-background-dark/50 dark:placeholder-background-light/50 text-background-dark dark:text-background-light focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-base" 
                  id="username" 
                  name="username" 
                  placeholder="Username" 
                  required 
                  type="text"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="email-address">Email address</label>
                <input 
                  autoComplete="email" 
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 border-2 border-primary/20 bg-background-light dark:bg-background-dark placeholder-background-dark/50 dark:placeholder-background-light/50 text-background-dark dark:text-background-light focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-base" 
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
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 border-2 border-primary/20 bg-background-light dark:bg-background-dark placeholder-background-dark/50 dark:placeholder-background-light/50 text-background-dark dark:text-background-light focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-base" 
                  id="password" 
                  name="password" 
                  placeholder="Password" 
                  required 
                  type="password"
                />
              </div>
              <div>
                <button 
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-bold rounded-lg text-background-dark bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors duration-300" 
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-center">
              <p className="text-sm text-background-dark/70 dark:text-background-light/70">
                Already have an account?{' '}
                <a className="font-medium text-primary hover:text-primary/90" href="#">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;