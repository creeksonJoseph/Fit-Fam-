import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const Workouts = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="workouts" />
        <main className="flex-1 p-3 sm:p-6 lg:p-8 pb-24 lg:pb-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 sm:mb-16 text-center">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-background-dark dark:text-background-light">Explore Exercises</h1>
              <p className="mt-3 sm:mt-6 text-sm sm:text-lg text-background-dark/60 dark:text-background-light/60">
                Find the perfect workout for your fitness goals. Browse our extensive library of exercises, categorized by body part and equipment.
              </p>
            </div>
            
            <div className="relative mb-6 sm:mb-10">
              <svg className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 text-background-dark/40 dark:text-background-light/40" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input 
                className="w-full h-12 sm:h-16 pl-10 sm:pl-16 pr-4 sm:pr-6 rounded-lg bg-background-light dark:bg-background-dark border border-background-dark/10 dark:border-background-light/10 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow text-sm sm:text-lg placeholder:text-background-dark/40 dark:placeholder:text-background-light/40" 
                placeholder="Search exercises, e.g. 'bicep curl'" 
                type="search"
              />
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-16">
              <button className="px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-full bg-primary text-black">All</button>
              <button className="px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-full bg-background-dark/5 dark:bg-background-light/10 text-background-dark dark:text-background-light hover:bg-background-dark/10 dark:hover:bg-background-light/20 transition-colors">Arms</button>
              <button className="px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-full bg-background-dark/5 dark:bg-background-light/10 text-background-dark dark:text-background-light hover:bg-background-dark/10 dark:hover:bg-background-light/20 transition-colors">Legs</button>
              <button className="px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-full bg-background-dark/5 dark:bg-background-light/10 text-background-dark dark:text-background-light hover:bg-background-dark/10 dark:hover:bg-background-light/20 transition-colors">Core</button>
              <button className="px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-full bg-background-dark/5 dark:bg-background-light/10 text-background-dark dark:text-background-light hover:bg-background-dark/10 dark:hover:bg-background-light/20 transition-colors">Back</button>
              <button className="px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-full bg-background-dark/5 dark:bg-background-light/10 text-background-dark dark:text-background-light hover:bg-background-dark/10 dark:hover:bg-background-light/20 transition-colors">Chest</button>
              <button className="px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-full bg-background-dark/5 dark:bg-background-light/10 text-background-dark dark:text-background-light hover:bg-background-dark/10 dark:hover:bg-background-light/20 transition-colors">Shoulders</button>
              <button className="px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-full bg-background-dark/5 dark:bg-background-light/10 text-background-dark dark:text-background-light hover:bg-background-dark/10 dark:hover:bg-background-light/20 transition-colors">Cardio</button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
              <div className="group flex flex-col bg-white dark:bg-background-dark/80 border border-background-dark/5 dark:border-background-light/10 rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzgOeCJyjHvXRL4t5uxX4b5YxID1we2e44RZbt_PSkIOHRjBAu5jK050f3qG6Uy03kMWfyd6u5oR7wPRozeBNPWtCCuOTP3quKE_usKxqaEFUcA5cEhcnG0Vs4oMwW0i-ib-JD28Xy1N5EUs_LeAAroQM9RmITmUXd8AKk97iTRAV-2j8900p361Fg5jIWbXiWUnRAGupWsPU7R3nhZ8Sm0Igmgpj4kPOD6I5eB4rgFWS1xB42-b_dRpxRrYax_NjngnHUkLT1umc")'}}></div>
                <div className="p-3 sm:p-5 flex-grow flex flex-col">
                  <h3 className="font-bold text-lg sm:text-xl text-background-dark dark:text-background-light">Bicep Curl</h3>
                  <p className="text-xs sm:text-sm text-background-dark/50 dark:text-background-light/50">Arms</p>
                  <div className="flex items-center justify-between gap-2 mt-2 sm:mt-3">
                    <span className="inline-flex items-center text-xs sm:text-sm font-medium text-background-dark/60 dark:text-background-light/60 min-w-0 flex-1">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-1.5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      <span className="truncate">Dumbbell</span>
                    </span>
                    <Link to="/workout-detail" className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors flex-shrink-0">
                      Grind
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="group flex flex-col bg-white dark:bg-background-dark/80 border border-background-dark/5 dark:border-background-light/10 rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDndU82yVJrYY84KS-46QY_rSoq8aXYF_qgFV_UZLf0NvM8vojnMXemDeP1DJ6gChEXWF2xL_WSIzVyVuNjVs58JipSsdAMn16ZQQ2JY8ZJUOUFmzL-XmURKIfHKu91FuY3aecwBW9cUMWAelEyWO5dRgVxIlRMa3Ws0oiBsAQ6F48NJuZ9QX1MTaPrO2Ho3znms_awXQUz29d9cd8e4Mm4JzmqhydGbNgbVof5plbMC-dN4PV_mKLP_sYRw-Mh0eZBJAq-95gsAEQ")'}}></div>
                <div className="p-3 sm:p-5 flex-grow flex flex-col">
                  <h3 className="font-bold text-lg sm:text-xl text-background-dark dark:text-background-light">Squats</h3>
                  <p className="text-xs sm:text-sm text-background-dark/50 dark:text-background-light/50">Legs</p>
                  <div className="flex items-center justify-between mt-2 sm:mt-3">
                    <span className="inline-flex items-center text-xs sm:text-sm font-medium text-background-dark/60 dark:text-background-light/60">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-1.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      Barbell
                    </span>
                    <Link to="/workout-detail" className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors">
                      Grind
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="group flex flex-col bg-white dark:bg-background-dark/80 border border-background-dark/5 dark:border-background-light/10 rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA630hdlp-NB_6wbo6vnJ4pWFZF8AupML3WG6H6TkUAGVwQHDpfgHGPTjCDmye5yNeBH84d7YE2khbHdOfGWmmkXsW3moiZrbKQ3Ngd9NqXcnRPQcCsqUmCMDyJ-uiF_C_DKsTxhAE8UaK34WFDTXTzJ3Nm6SGnrysFx1znOFdWy8pzF_pZIeIW3PILeIvpu14vvXCcI36zjSCDh8Ar-ILcrvPdwvIE3kiVM--l6I12s9RGjuX-eyO5aa3XLS8H9ROC1z8DOYKOP-g")'}}></div>
                <div className="p-3 sm:p-5 flex-grow flex flex-col">
                  <h3 className="font-bold text-lg sm:text-xl text-background-dark dark:text-background-light">Plank</h3>
                  <p className="text-xs sm:text-sm text-background-dark/50 dark:text-background-light/50">Core</p>
                  <div className="flex items-center justify-between mt-2 sm:mt-3">
                    <span className="inline-flex items-center text-xs sm:text-sm font-medium text-background-dark/60 dark:text-background-light/60">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-1.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" />
                      </svg>
                      Bodyweight
                    </span>
                    <Link to="/workout-detail" className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors">
                      Grind
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="group flex flex-col bg-white dark:bg-background-dark/80 border border-background-dark/5 dark:border-background-light/10 rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJZSaag13CqpwFEK875O7UQNbmDPUFWhI1UciilI4VkwgZ-htB190Hyxn3jf2JOV9kVqOOunRp4NYU64ZyImdA5tfl10HyKguFzyXFcA3RRMzThk8lRA0c9ksEpSCw84i-7qPhVg9cU_g_Rdddg94PPN0qJLJfD9P9CS8bKYD9rRtZBMSD38d8Fuh-8iZBlCqBpsI0e_lK0wtzWHzoauLiBvCKGDqyVGKPUYT-GwoiZU7pTd5aZPwXkKebvKAwzIGLrQ-kWvc5x5o")'}}></div>
                <div className="p-3 sm:p-5 flex-grow flex flex-col">
                  <h3 className="font-bold text-lg sm:text-xl text-background-dark dark:text-background-light">Pull-ups</h3>
                  <p className="text-xs sm:text-sm text-background-dark/50 dark:text-background-light/50">Back</p>
                  <div className="flex items-center justify-between mt-2 sm:mt-3">
                    <span className="inline-flex items-center text-xs sm:text-sm font-medium text-background-dark/60 dark:text-background-light/60">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-1.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" />
                      </svg>
                      Bodyweight
                    </span>
                    <Link to="/workout-detail" className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors">
                      Grind
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Workouts;