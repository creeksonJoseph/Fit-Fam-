import React from "react";

export default function SignUp() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full max-w-4xl mx-auto">
          <div className="lg:w-1/2 hidden lg:block">
            <img
              alt="Fitness class"
              className="h-full w-full object-cover rounded-l-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8Zwk-qsBd68n7-UgVBck6I5WdIBc7ezPAdnOEzzNi6EuMyct8PwkoAMkFebDci4V7mM1jilfc1FqFgEYE3GO9JiUjoKMnurUO4lNsBeQlxwLrm_G-AE590gS_clkVvXl2LGlNbR7M9UOrYqtqfvwvXUEMksuSR7hHdjHv4RjJ1TpWQ2QP4PmZSTj6KESkAScdc9QZ27c6LBFV0fSQdMHTcnOEBdxqdjE_h5APmYtog1zUVBQ2TqLo9SZtoEZmMyHBSLKQgQW0zUY"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm p-8 shadow-xl rounded-r-xl h-full flex flex-col justify-center">
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
              <form action="#" className="mt-8 space-y-6" method="POST">
                <div>
                  <label className="sr-only" htmlFor="username">
                    Username
                  </label>
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
                  <label className="sr-only" htmlFor="email-address">
                    Email address
                  </label>
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
                  <label className="sr-only" htmlFor="password">
                    Password
                  </label>
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
              <div className="mt-6 text-center">
                <p className="text-sm text-background-dark/70 dark:text-background-light/70">
                  Already have an account?
                  <a
                    className="font-medium text-primary hover:text-primary/90"
                    href="#"
                  >
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
