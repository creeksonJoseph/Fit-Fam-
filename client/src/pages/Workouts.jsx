import React from 'react';

const Workouts = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-10">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">fitness_center</span>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">FitFlow</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Workouts</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Programs</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Community</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-gray-700 dark:text-gray-300">notifications</span>
              </button>
              <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjcL42Jc6m0poN0ZM5pv6_glOytom0Rh_No_R2jmaaw3vV1aIxZDMp4t_pwEUl64FcD_5xwTR7thA-Vr_5vzDiy8rRT7kFdYXIEINmLqxRxp7ZsDJmheRvtRoCAV3XJixY8slilIAAuk_9p-Mz1fw_Xb8ZM321zcZEe8R64WPV3el9dnGhq_tuBzfzLQu6KnBClTmklQ-aB0Br5ITI4rOltGe6WQRginVj0zjFxvjzYyvzbnqGHaZq3Jd0pbTdSbtHPhnJo41HpCc")'}}></div>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-6 py-10 flex-grow">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white">Workouts</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Choose a workout to start your fitness journey.</p>
            </div>
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800/20 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center gap-6">
                <img alt="Yoga" className="w-full md:w-48 h-48 md:h-auto object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaHdPPbQupCC0VUs19DpeS3JlTAfMlCMRQxXSNsriHDah56Pl0sLb_Fb2OF__Q2eUJzENZrpRUX1KErvGKrTxpDXfI5k0MmIC5QoCYNxfyZflj5qvBwFDbnczpypzZOp-dusWSXPEPUKWl-j2iqhtjvy6l-ZvTkAiXzY9XIjRUW16HTSO8AF-Xp_aeqz8T7gOlOeCMjKevkr_J8yBAVEZAbSH58TwDvTRHN014FsItAAYtLR1D8itwKlsahViylVyDlk-B6pPmKVo"/>
                <div className="flex-1">
                  <span className="inline-block bg-primary/20 text-primary-dark font-semibold px-3 py-1 rounded-full text-sm mb-2">30 min</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Sunrise Yoga Flow</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A gentle yoga session to energize your morning and set a positive tone for the day.</p>
                </div>
                <button className="w-full md:w-auto bg-primary text-black font-bold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-all transform hover:scale-105">
                  Start Workout
                </button>
              </div>
              <div className="bg-white dark:bg-gray-800/20 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center gap-6">
                <img alt="HIIT" className="w-full md:w-48 h-48 md:h-auto object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcq20-JfoaPiDMpS3z7hbqc26flOXIYoFf_cg3eW_mCw0pCF-6mWp2D2EO0tzCRU8TWZU-0UEQPyhpN1bJPZJNWFXY6IiS2Lme733yPEaTpGmG8SE7v7o_HS-Hj2HTDiA2H62SPWp2-YGd3usDd-WXabFXqnSYaofqLGueOMov_pTMfNdcYbUVVORPyNrst6YB6w_XPdPXLgAgTpLtvKjp7Rj8xDN63wSc5upraOi-XVUIFjf6xtXjNW5XlSk0nCBu6phs7MzHNE0"/>
                <div className="flex-1">
                  <span className="inline-block bg-primary/20 text-primary-dark font-semibold px-3 py-1 rounded-full text-sm mb-2">20 min</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">High-Intensity Interval Training (HIIT)</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Short bursts of intense exercise followed by brief rest periods to maximize calorie burn.</p>
                </div>
                <button className="w-full md:w-auto bg-primary text-black font-bold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-all transform hover:scale-105">
                  Start Workout
                </button>
              </div>
              <div className="bg-white dark:bg-gray-800/20 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center gap-6">
                <img alt="Strength Training" className="w-full md:w-48 h-48 md:h-auto object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwLTLy5Wif10WegHVlmCKPIZXgOgENb-JHGp6i8YBva-KE-BtSAxFmWfPcOAwCh_oLXDhaQf3DaaYRL1c-PPsSBsyZXia4pvMVXMZTPBhBzZftqctcDxZxhi3-U3IUb1WYevRjsgVHnM340_mwLvZdDkMGgOjLIorZVZdx7F8XgfXTTbshy7pHdbmDTeX70WR3w4X-iW4o0JMZptfBROari_OM9ar2UtOBEJ3JSloAA5tSziHIdGoTs4dESbu_dIH_RUjmuUGal7g"/>
                <div className="flex-1">
                  <span className="inline-block bg-primary/20 text-primary-dark font-semibold px-3 py-1 rounded-full text-sm mb-2">45 min</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Strength Training Circuit</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Full-body workout focusing on building strength, endurance, and lean muscle mass.</p>
                </div>
                <button className="w-full md:w-auto bg-primary text-black font-bold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-all transform hover:scale-105">
                  Start Workout
                </button>
              </div>
            </div>
            <div className="mt-20 bg-background-light dark:bg-gray-900/50 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Active Workout</h3>
              <div className="flex justify-center items-center">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                    <circle className="text-gray-200 dark:text-gray-700" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-primary" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeLinecap="round" strokeWidth="8" style={{strokeDasharray: '282.6', strokeDashoffset: '282.6'}}></circle>
                  </svg>
                  <div className="text-center">
                    <p className="text-5xl font-bold text-gray-900 dark:text-white">24:15</p>
                    <p className="text-gray-500 dark:text-gray-400">Time Remaining</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center items-center gap-4">
                <button className="flex items-center justify-center w-32 h-12 bg-primary text-black font-bold rounded-lg shadow-md hover:bg-opacity-90 transition-all transform hover:scale-105">
                  <span className="material-symbols-outlined mr-2">play_arrow</span>
                  Start
                </button>
                <button className="flex items-center justify-center w-32 h-12 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  <span className="material-symbols-outlined mr-2">stop</span>
                  Stop
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Workouts;