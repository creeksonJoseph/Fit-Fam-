import React from "react";
import { Link } from "react-router-dom";
import AppHeader from "../components/AppHeader";

const LandingPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display">
      <AppHeader isAuthenticated={false} showAuthButtons={true} />

      <main>
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
            <div className="flex flex-col gap-8 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                Grind Together. <br />{" "}
                <span className="text-primary">Grow Together.</span>
              </h1>
              <p className="text-lg text-subtle-light dark:text-subtle-dark">
                Join a community of fitness enthusiasts who push each other to
                achieve their goals. Track your workouts, connect with friends,
                and celebrate progress together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  className="px-8 py-4 rounded-full text-base font-bold bg-primary text-background-dark hover:bg-opacity-90 transition-colors"
                  to="/signup"
                >
                  Sign Up for Free
                </Link>
                <Link
                  className="px-8 py-4 rounded-full text-base font-bold bg-transparent border-2 border-primary hover:bg-primary/20 transition-colors"
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
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVHhqaMXNfinX7KJ6Z2g6qHbOMRazdz6wLsewmerg_Zchn2e9siQlXF-6DDijnJntbzA8ETXlcKKNoshcHiDVDZll_kMVllx7dhkTmAlO5VyaYxZpPKONkAtbgRXt0NG0UCXGBJUSFuNliV6tRiHvKUGWGIor2gsohmJet4iBGOqMShkqCHSn9yvgOX_US_ju1B8KRusDU272kxqd7bGwfY3NlshZzuEUneIpVQoqwNYev_e8A9FIGWaCagvC9hUaxG2v1YUV-MxA")',
                }}
              ></div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-background-light dark:bg-background-dark/50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Achieve More Together
              </h2>
              <p className="mt-4 text-lg text-subtle-light dark:text-subtle-dark">
                Our platform makes it easy to stay motivated and connected on
                your fitness journey.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg flex flex-col gap-4">
                <div
                  className="w-full aspect-video bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYNEJYPgBKviqpnrf_5w1Xtb5f7L-bYQYpjutEFMdKyyz7BoPZz2vU82S6SSzWgUJ-xpHSObyJlKW1z55IP5_efsFqkWruwCJmnjlJoXj-opQSAYIGzbIyYhHe-h1ZY-o_buoXAeSWkUvjQMSJ3WWoOBZkRXQ16qi9D2xzxe-bjD_iC4_sDaOiOTdnPKQt9D3FGhF3fpSwnaaDjwli52QAQ1lKsvJW-zpVCu-Ughmo8Wv6IVj0mhuGwOMLfNx2JDM0cRsCmkJnqt4")',
                  }}
                ></div>
                <h3 className="text-xl font-bold">Track Workouts</h3>
                <p className="text-subtle-light dark:text-subtle-dark">
                  Log your workouts, set goals, and monitor your progress over
                  time with our intuitive tracking tools.
                </p>
              </div>
              <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg flex flex-col gap-4">
                <div
                  className="w-full aspect-video bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmjhofhTkxKOzphsT8hAmra0-G_Awxv4o89-HU5T4-OmI1Wu5qtcxoeLh50_ypKHNI_k0t1cG6JNe_ZcxCtngtwov34nMXCOl0ZmekGXfxVOiaQ-Vc9UiJdJ7nnyG_IhiR5GlJH6wSF1G_EOuwOzCZXCJ6Xw5AgVDW2icRE6HFKbiWTjL__Hr8E6g2Fb3oXykm4Qxrv8QSHgInt1CM-rm19O7wCwAQvWvRsIJaVHq1NZxPQa4u-aBcEAwZt5fJ_YSBRveRzY8Ng4s")',
                  }}
                ></div>
                <h3 className="text-xl font-bold">Add Friends</h3>
                <p className="text-subtle-light dark:text-subtle-dark">
                  Connect with friends, share your achievements, and support
                  each other's fitness goals.
                </p>
              </div>
              <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg flex flex-col gap-4">
                <div
                  className="w-full aspect-video bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDx6Xj6SECR4cpZn3sDeLRVVmXvfnq9fqqrSWhIY7VwYpOZ7eGL0GlfARPyI1ETehI6Fk7oUztoqu8P4vBic3a6C0MWPyTepks0IGu5MqBY-qtnG-LLA2-DFRSP0DaeKtRuIxNM4QlQEEAbq3Lg3PkJuL5etB4a7FmnwLjI1I2J_15rXJpZgw19ad_AI1Dj4TJTpBZ8zNGQJfpOMeadS_4t9MSvjyKlhU3xtDrdS1M42JiTfe-xXueEbcF9qJLtAihEXa6hkj6pWhs")',
                  }}
                ></div>
                <h3 className="text-xl font-bold">See Progress Together</h3>
                <p className="text-subtle-light dark:text-subtle-dark">
                  Visualize your progress, compare stats with friends, and stay
                  motivated with friendly competition.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10">
        <div className="container mx-auto px-6 text-center text-subtle-light dark:text-subtle-dark">
          <div className="flex justify-center gap-6 mb-6">
            <Link
              className="text-sm hover:text-primary transition-colors"
              to="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm hover:text-primary transition-colors"
              to="/terms"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm hover:text-primary transition-colors"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>
          <p className="text-sm">© 2024 FitFam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
