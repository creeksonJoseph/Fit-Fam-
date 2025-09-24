import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full max-w-4xl">
          {/* Left side image */}
          <div className="lg:w-1/2 hidden lg:block min-h-[600px]">
            <img
              src="/bruce-mars.jpg"
              alt="Fitness class"
              className="h-full w-full object-cover rounded-l-xl"
            />
          </div>

          {/* Right side form */}
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

              <form className="mt-8 space-y-6" method="POST">
                {/* Username */}
                <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    required
                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border-2 border-primary/20 bg-background-light dark:bg-background-dark placeholder-background-dark/50 dark:placeholder-background-light/50 text-background-dark dark:text-background-light focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-base"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border-2 border-primary/20 bg-background-light dark:bg-background-dark placeholder-background-dark/50 dark:placeholder-background-light/50 text-background-dark dark:text-background-light focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-base"
                  />
                </div>

                {/* Password */}
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
                    className="appearance-none rounded-lg relative block w-full px-4 py-3 pr-10 border-2 border-primary/20 bg-background-light dark:bg-background-dark placeholder-background-dark/50 dark:placeholder-background-light/50 text-background-dark dark:text-background-light focus:outline-none focus:ring-primary focus:border-primary text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-background-dark/70 dark:text-background-light/70"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <label htmlFor="confirm-password" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm Password"
                    required
                    className="appearance-none rounded-lg relative block w-full px-4 py-3 pr-10 border-2 border-primary/20 bg-background-light dark:bg-background-dark placeholder-background-dark/50 dark:placeholder-background-light/50 text-background-dark dark:text-background-light focus:outline-none focus:ring-primary focus:border-primary text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute inset-y-0 right-3 flex items-center text-background-dark/70 dark:text-background-light/70"
                  >
                    {showConfirm ? "🙈" : "👁️"}
                  </button>
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-bold rounded-lg text-background-dark bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors duration-300"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-background-dark/70 dark:text-background-light/70">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary hover:text-primary/90"
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
