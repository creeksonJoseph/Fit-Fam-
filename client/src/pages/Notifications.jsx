import React from 'react';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const Notifications = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 pb-24 lg:pb-8">
          <div className="w-full max-w-4xl mx-auto space-y-6 lg:space-y-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-background-dark dark:text-background-light">Friend Requests</h1>
            
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-background-dark dark:text-background-light">Incoming</h2>
              <div className="bg-background-light dark:bg-background-dark rounded-xl shadow-sm border border-primary/20 dark:border-primary/30 divide-y divide-primary/20 dark:divide-primary/30">
                <div className="p-3 sm:p-4 lg:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    <img alt="Sophia Carter" className="rounded-full w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDanQMvTTrAqHYOzXFUV3UGCmFqXk9UlhEbBx7WqhJGowzFmLu0nWb2IWb9rDfz30H9iZGGWk2TYDgzL_RR00FRR3Q2wYZwNJ_zusdGsLzR5Yt3UoGqDEHJRBl1KrObjeDTMp_5jt5erFnenBYymHjivQ4mCVfv9BAbmhKvpQNQb6yXZKHCPOJv9fxE1Tc7TqkXp3K6KdlMvBLEdhFfV5-NCJNuLs5DzyU58lQJiOtL3hYLg4-V5k7s9Nm7MZHkkCvtOI2-q-871w"/>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm sm:text-base font-semibold text-background-dark dark:text-background-light truncate">Sophia Carter</p>
                      <p className="text-xs sm:text-sm text-background-dark/60 dark:text-background-light/60">2 mutual friends</p>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0 w-full sm:w-auto">
                    <button className="flex items-center justify-center rounded-lg h-9 sm:h-10 px-3 sm:px-5 bg-primary text-background-dark font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity flex-1 sm:flex-none">
                      <span>Accept</span>
                    </button>
                    <button className="flex items-center justify-center rounded-lg h-9 sm:h-10 px-3 sm:px-5 bg-primary/20 dark:bg-primary/30 text-background-dark dark:text-background-light font-medium text-xs sm:text-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors flex-1 sm:flex-none">
                      <span>Decline</span>
                    </button>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 lg:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    <img alt="Ethan Walker" className="rounded-full w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAolyUXFPxwwZtBfGn36cxP78V6HtEXdHVU1RPOlC52ywuj5xndBA1G8wF6IU8j0JHj8_V-1c-FjKGfgguyuwxnZVvF2Vn0UzqkO8C0tbFx348iRPZoezgxUAwkfOY36zdqwwPAncWstyu5em22i9f1Hz9EsjBYY-03cFVmWJN7xOyi9GV-cB66cedpED5EPGE98h9MJGNTJq1R3W8yTDUTwjUhRrArNGMnVhCbufaDl3wFMP2FPZ6ay-F7L4CRdw1dHDaf_qW5oEM"/>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm sm:text-base font-semibold text-background-dark dark:text-background-light truncate">Ethan Walker</p>
                      <p className="text-xs sm:text-sm text-background-dark/60 dark:text-background-light/60">1 mutual friend</p>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0 w-full sm:w-auto">
                    <button className="flex items-center justify-center rounded-lg h-9 sm:h-10 px-3 sm:px-5 bg-primary text-background-dark font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity flex-1 sm:flex-none">
                      <span>Accept</span>
                    </button>
                    <button className="flex items-center justify-center rounded-lg h-9 sm:h-10 px-3 sm:px-5 bg-primary/20 dark:bg-primary/30 text-background-dark dark:text-background-light font-medium text-xs sm:text-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors flex-1 sm:flex-none">
                      <span>Decline</span>
                    </button>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 lg:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    <img alt="Olivia Bennett" className="rounded-full w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGj9UOemKJTg8qjJI8bc7CTR2bzcwlKdQdQaNdGFOURJ2m85kizijbNUdOPl8gOkkqAkQ4qxmgexcNzkWn4Dj2yPqWUwzcOW2rtOeJN5hH8R0FrHJm6Pb-uWEPNqzr2bbou2zlhIDYXlxXVUBR8lJMtKWT8lAmyVGdQn431FUwB3JjE4IXPNzleOV_flnA7qiPVdCys1iLxRGn1yI-bubQRxWgCqiLJnBZrjgc4n2kBiOon_TUPlnXg5GnCCcCUj2TnqIgdYVCVmg"/>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm sm:text-base font-semibold text-background-dark dark:text-background-light truncate">Olivia Bennett</p>
                      <p className="text-xs sm:text-sm text-background-dark/60 dark:text-background-light/60">3 mutual friends</p>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0 w-full sm:w-auto">
                    <button className="flex items-center justify-center rounded-lg h-9 sm:h-10 px-3 sm:px-5 bg-primary text-background-dark font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity flex-1 sm:flex-none">
                      <span>Accept</span>
                    </button>
                    <button className="flex items-center justify-center rounded-lg h-9 sm:h-10 px-3 sm:px-5 bg-primary/20 dark:bg-primary/30 text-background-dark dark:text-background-light font-medium text-xs sm:text-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors flex-1 sm:flex-none">
                      <span>Decline</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-background-dark dark:text-background-light">Outgoing</h2>
              <div className="bg-background-light dark:bg-background-dark rounded-xl shadow-sm border border-primary/20 dark:border-primary/30 divide-y divide-primary/20 dark:divide-primary/30">
                <div className="p-3 sm:p-4 lg:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    <img alt="Liam Harper" className="rounded-full w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuhOG4QE_gOFHbegYf58QqaOPzvDPGvD3yF8iGoBvX47XUQbkHY1Zj-4ZA56PCyOPwbtZpcDOBk0Nk-DQrOatOnzCzTCONNKPbLTFGPAM-GvrGBlR0NYmGbhmdkyb3nUd-bUU9ZPzHS3kek420t-2uI6At9awhhFlYQ67Xk4F_p8s9aE3vOGuq-Qtxnk2Ahav_Y4NyoloDzvPdFHaHtqVWMqcF4fziejgfK2IuPaBli9G23hJSdIEcJwYJ2SQTK6loqbwq3PFQtwU"/>
                    <p className="text-sm sm:text-base text-background-dark/80 dark:text-background-light/80 min-w-0">
                      You requested to follow <span className="font-semibold text-background-dark dark:text-background-light">Liam Harper</span>
                    </p>
                  </div>
                  <button className="flex items-center justify-center rounded-lg h-9 sm:h-10 px-3 sm:px-5 bg-primary/20 dark:bg-primary/30 text-background-dark dark:text-background-light font-medium text-xs sm:text-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors shrink-0">
                    <span>Cancel</span>
                  </button>
                </div>
                
                <div className="p-3 sm:p-4 lg:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    <img alt="Ava Reynolds" className="rounded-full w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxyBfQZLRGA_p1I29bB5_QKDMROawqNKWnIeWvAsmvmSSCd3nyrvwDHUUBZAyBBFGYSsmx0Ar90PD65YfxZZnxAyXvb_ElRkg3DtdgWm20kcHD_C0la0JW0W3gD-cZ5zWgZIj81CuktCIlJCv9xzXKBKUJ3L3yyyW8nbuoX2zRlihiC4RkbLfw5tgw4FvRXtdbCILUfVTsO1wd8kVwib1XNuhMgIUtubzqgoamcBNQz-OxpC0azUUweCgW3OHM-az6bwgSQ5TiDmQ"/>
                    <p className="text-sm sm:text-base text-background-dark/80 dark:text-background-light/80 min-w-0">
                      You requested to follow <span className="font-semibold text-background-dark dark:text-background-light">Ava Reynolds</span>
                    </p>
                  </div>
                  <button className="flex items-center justify-center rounded-lg h-9 sm:h-10 px-3 sm:px-5 bg-primary/20 dark:bg-primary/30 text-background-dark dark:text-background-light font-medium text-xs sm:text-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors shrink-0">
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Notifications;