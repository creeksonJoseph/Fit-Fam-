import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AppHeader from "../components/AppHeader";

const LandingPage = () => {
  useEffect(() => {
    // Wake up the server
    fetch('https://fit-fam-server.onrender.com/exercises').catch(() => {});
  }, []);
  return (
    <div className="relative w-full min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display">
      <AppHeader isAuthenticated={false} showAuthButtons={true} />

      <main>
        <section className="py-8 md:py-32">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 items-center gap-8 md:gap-16">
            <div className="flex flex-col gap-4 md:gap-8 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter leading-tight">
                Grind Together. <br />{" "}
                <span className="text-primary">Grow Together.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-subtle-light dark:text-subtle-dark">
                Join a community of fitness enthusiasts who push each other to
                achieve their goals. Track your workouts, connect with friends,
                and celebrate progress together.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                <Link
                  className="px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold bg-primary text-background-dark hover:bg-opacity-90 transition-colors"
                  to="/signup"
                >
                  Sign Up for Free
                </Link>
                <Link
                  className="px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold bg-transparent border-2 border-primary hover:bg-primary/20 transition-colors"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 bg-primary rounded-xl transform -rotate-3"></div>
              <div
                className="relative w-full aspect-video bg-cover bg-center rounded-xl"
                style={{
                  backgroundImage: 'url("/candra-winata.jpg")',
                }}
              ></div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-32 bg-background-light dark:bg-background-dark/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
                Achieve More Together
              </h2>
              <p className="mt-2 md:mt-4 text-sm sm:text-base md:text-lg text-subtle-light dark:text-subtle-dark">
                Our platform makes it easy to stay motivated and connected on
                your fitness journey.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-white dark:bg-background-dark p-4 md:p-6 rounded-lg shadow-lg flex flex-col gap-3 md:gap-4">
                <div
                  className="w-full aspect-video bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYNEJYPgBKviqpnrf_5w1Xtb5f7L-bYQYpjutEFMdKyyz7BoPZz2vU82S6SSzWgUJ-xpHSObyJlKW1z55IP5_efsFqkWruwCJmnjlJoXj-opQSAYIGzbIyYhHe-h1ZY-o_buoXAeSWkUvjQMSJ3WWoOBZkRXQ16qi9D2xzxe-bjD_iC4_sDaOiOTdnPKQt9D3FGhF3fpSwnaaDjwli52QAQ1lKsvJW-zpVCu-Ughmo8Wv6IVj0mhuGwOMLfNx2JDM0cRsCmkJnqt4")',
                  }}
                ></div>
                <h3 className="text-lg md:text-xl font-bold">Track Workouts</h3>
                <p className="text-sm md:text-base text-subtle-light dark:text-subtle-dark">
                  Log your workouts, set goals, and monitor your progress over
                  time with our intuitive tracking tools.
                </p>
              </div>
              <div className="bg-white dark:bg-background-dark p-4 md:p-6 rounded-lg shadow-lg flex flex-col gap-3 md:gap-4">
                <div
                  className="w-full aspect-video bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: 'url("/april-laugh.jpg")',
                  }}
                ></div>
                <h3 className="text-lg md:text-xl font-bold">Add Friends</h3>
                <p className="text-sm md:text-base text-subtle-light dark:text-subtle-dark">
                  Connect with friends, share your achievements, and support
                  each other's fitness goals.
                </p>
              </div>
              <div className="bg-white dark:bg-background-dark p-4 md:p-6 rounded-lg shadow-lg flex flex-col gap-3 md:gap-4">
                <div
                  className="w-full aspect-video bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: 'url("/ben-weber-.jpg")',
                  }}
                ></div>
                <h3 className="text-lg md:text-xl font-bold">
                  See Progress Together
                </h3>
                <p className="text-sm md:text-base text-subtle-light dark:text-subtle-dark">
                  Visualize your progress, compare stats with friends, and stay
                  motivated with friendly competition.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 md:py-10">
        <div className="container mx-auto px-4 md:px-6 text-center text-subtle-light dark:text-subtle-dark">
          <p className="text-sm">© 2025 FitFam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
