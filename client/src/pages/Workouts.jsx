import React from 'react';
import WorkoutCard from '../components/WorkoutCard';
import Button from '../components/Button';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const Workouts = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="workouts" />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white">Workouts</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Choose a workout to start your fitness journey.</p>
            </div>
            <div className="space-y-8">
              <WorkoutCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCaHdPPbQupCC0VUs19DpeS3JlTAfMlCMRQxXSNsriHDah56Pl0sLb_Fb2OF__Q2eUJzENZrpRUX1KErvGKrTxpDXfI5k0MmIC5QoCYNxfyZflj5qvBwFDbnczpypzZOp-dusWSXPEPUKWl-j2iqhtjvy6l-ZvTkAiXzY9XIjRUW16HTSO8AF-Xp_aeqz8T7gOlOeCMjKevkr_J8yBAVEZAbSH58TwDvTRHN014FsItAAYtLR1D8itwKlsahViylVyDlk-B6pPmKVo"
                duration="30 min"
                title="Sunrise Yoga Flow"
                description="A gentle yoga session to energize your morning and set a positive tone for the day."
              />
              <WorkoutCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAcq20-JfoaPiDMpS3z7hbqc26flOXIYoFf_cg3eW_mCw0pCF-6mWp2D2EO0tzCRU8TWZU-0UEQPyhpN1bJPZJNWFXY6IiS2Lme733yPEaTpGmG8SE7v7o_HS-Hj2HTDiA2H62SPWp2-YGd3usDd-WXabFXqnSYaofqLGueOMov_pTMfNdcYbUVVORPyNrst6YB6w_XPdPXLgAgTpLtvKjp7Rj8xDN63wSc5upraOi-XVUIFjf6xtXjNW5XlSk0nCBu6phs7MzHNE0"
                duration="20 min"
                title="High-Intensity Interval Training (HIIT)"
                description="Short bursts of intense exercise followed by brief rest periods to maximize calorie burn."
              />
              <WorkoutCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAwLTLy5Wif10WegHVlmCKPIZXgOgENb-JHGp6i8YBva-KE-BtSAxFmWfPcOAwCh_oLXDhaQf3DaaYRL1c-PPsSBsyZXia4pvMVXMZTPBhBzZftqctcDxZxhi3-U3IUb1WYevRjsgVHnM340_mwLvZdDkMGgOjLIorZVZdx7F8XgfXTTbshy7pHdbmDTeX70WR3w4X-iW4o0JMZptfBROari_OM9ar2UtOBEJ3JSloAA5tSziHIdGoTs4dESbu_dIH_RUjmuUGal7g"
                duration="45 min"
                title="Strength Training Circuit"
                description="Full-body workout focusing on building strength, endurance, and lean muscle mass."
              />
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
                <Button icon="play_arrow" className="w-32 h-12 shadow-md transform hover:scale-105">
                  Start
                </Button>
                <Button variant="secondary" icon="stop" className="w-32 h-12 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md hover:bg-gray-300 dark:hover:bg-gray-600">
                  Stop
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Workouts;