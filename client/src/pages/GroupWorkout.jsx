import React from 'react';
import Logo from '../components/Logo';

const GroupWorkout = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-background-dark dark:text-background-light">
      <div className="flex flex-col min-h-screen">
        <header className="border-b border-background-light-200 dark:border-background-dark-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center gap-4">
                <Logo />
                <h1 className="text-2xl font-bold">FitFam</h1>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a className="font-medium hover:text-primary transition-colors" href="#">Home</a>
                <a className="font-medium hover:text-primary transition-colors" href="#">Explore</a>
                <a className="font-medium text-primary" href="#">Training</a>
                <a className="font-medium hover:text-primary transition-colors" href="#">Profile</a>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-primary/20 transition-colors">
                  <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                  </svg>
                </button>
                <div className="w-12 h-12 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBF4kuCfTk_bRk5ag_VUufiF8InfhNJxEj3EkkwlA3q-vQXTvJG4Th5RAlwelHJV1WlHCfTLULUVZwhoHZ10tiQMdcrvuLC8-WNtK1dv-QmKr8UBQb-9LQIRse1SpNnj__a-i5rR3ahROvh-8XwbmzT1EJMZlcqGpCogiWfpUaj9GX9yZJDjdCtTIv0wWokzjGBY_k8SBbYlR90bQU5_Zmb6VWbC8YGHgAvfKw5hJvN5JA8bWsh7ymNrk2GpSmXM0S_hFe4bPX2oxKi")'}}></div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-background-light/50 dark:bg-background-dark-400 rounded-xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold">Morning Run</h2>
              <p className="text-background-dark/60 dark:text-background-light/60 mt-2 text-lg">Group Workout Session</p>
            </div>
            <div className="flex justify-center -space-x-4 mb-8">
              <img alt="Participant 1" className="w-14 h-14 rounded-full border-4 border-background-light dark:border-background-dark-400 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5vjznUVj8z5tHwIYeHUXC7LhWwFTwyUiS3KmRfBFjem6I3VQsPDmMiNN_aQGqy8r726kTnOYrZL04KVV_28dPmyNMGcus1q025Mhq2-jEPIQYiohvbu494TPH0SnV_Ah5WAKITDnFzjFlTQGywIxxgdFnmS8x9CN933Vi0e2f3VtmTTAgGKPGMP_TXGwSSNNYgO8iRpFxWfSB9ISsZF5TymD8nZmnPfzJbbAuhjJrzT3OSM9YLSDBmTJfdjmqZ0Sz4dAJKfi-pP9o"/>
              <img alt="Participant 2" className="w-14 h-14 rounded-full border-4 border-background-light dark:border-background-dark-400 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACTb-4cY1rder3vQF_vpd3So7tSc5DmjZ7WFBfRRQRgmcowlujaPJ46cLfWvygGB2kKYzKLt6UoDCAyvUHXHdGuqsAe5VLvHSmdrrlvW1QP252rrUyUudK91IPaNe88SFeZOdwKes1oj_I9V2LgK4KZAhTwV6NZvbPvoZmPr0_PEUsx1Ak8VPdUkull1UAXrxMt-JwES6XkZ2K6bvZ4_eRcs0tbVCvKRYNvt1O4Up1BqcXl0XOsWEkf6-H9m-wCR0Fkj95udMHDca4"/>
              <img alt="Participant 3" className="w-14 h-14 rounded-full border-4 border-background-light dark:border-background-dark-400 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfysMxvXAuQlT2j-RzAaQhfefvYSpL5DWi6EfhIuPDzbCmdWr1v2TvSdfw9zPcvmhTDBvmMUGAxfUv-0LID2FsqiRFIsBtpRFY-YWPHuvMYnAiZJLTnzQtaCl75cWXJTCK3umDNR9f9O83s59VCA-m1iJVXYUpGXKe5E2pMT4zityBUcvjMhjb7L1aXckp6XoNvywp_Bbhl7tOoGpunfhqamE250k0b3ow1v10I6e0v5AG45ctXL7MmtsmsHR05WuPfG9Jv19olHH7"/>
              <img alt="Participant 4" className="w-14 h-14 rounded-full border-4 border-background-light dark:border-background-dark-400 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmw00AjYMr4G6d_SQjRi6E-lFpt8rjzCwmRSHEx9vimhKbPK_cTejb5Bd8idXDQP_P2DkaTUfKQydTwb0tK2VFBoAmbbNX15CLFsM2WK4THG-f0B7OS7L3TJkZQlqTpcIXK0Q0IG_rni5u1BN7IZPFcnSkb8IyuZ-tLDwDnLIE7Ij73yRGZmDy3OPcj9ItPMjT44198z79X8FSKP3UyS2OoeMlwnO8EvDDTsGOSH7HunFfQYucppyF5AVURiETMTFKe7GPWRRo2lLK"/>
              <img alt="Participant 5" className="w-14 h-14 rounded-full border-4 border-background-light dark:border-background-dark-400 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-H79BgM4CNiKEDCmQP11puQtCv12ni5Y0e_3z2STZmw24mZTk_sbT2uz_lL8WqFj-COXoPk6_NCzgVYuOS9W07xyDaVPUPuTyMXZwtdEnUP0HuGMrvKsrRm18Gq21jDqaF9m_Yo5XNHYjbx1ZWesYymhPG2JLKAtMZ2C70H74nGvubnu4DlQ9roeaPq6QxQkaiFnIrYYd3kZrvyW3gJZVadHPCpub0KMF8ZwDRF2IDZ_9eSiP92Ew4BlKfSwoTHzs4Eik6WOPGDjp"/>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center mb-10">
              <div>
                <div className="bg-background-light dark:bg-background-dark-500 rounded-lg p-4">
                  <p className="text-4xl font-bold text-primary">00</p>
                </div>
                <p className="mt-2 text-sm text-background-dark/60 dark:text-background-light/60">Hours</p>
              </div>
              <div>
                <div className="bg-background-light dark:bg-background-dark-500 rounded-lg p-4">
                  <p className="text-4xl font-bold text-primary">35</p>
                </div>
                <p className="mt-2 text-sm text-background-dark/60 dark:text-background-light/60">Minutes</p>
              </div>
              <div>
                <div className="bg-background-light dark:bg-background-dark-500 rounded-lg p-4">
                  <p className="text-4xl font-bold text-primary">12</p>
                </div>
                <p className="mt-2 text-sm text-background-dark/60 dark:text-background-light/60">Seconds</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold px-4">Participants</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background-light dark:bg-background-dark-500">
                  <div className="relative w-16 h-16">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle className="text-background-dark/10 dark:text-background-light/10" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="8"></circle>
                      <circle className="text-primary transform -rotate-90 origin-center transition-all duration-1000 ease-out" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeLinecap="round" strokeWidth="8" style={{strokeDasharray: 'calc(282.74 * 80 / 100) 282.74'}}></circle>
                    </svg>
                    <img alt="Ethan's avatar" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfMdTc-ScMDUPoB6zw_6AkXIWZfFnOpfFHj7aCpyh4TmcrrAQGtLHuLeKLfsKazBHdLtg4zjLBOaCgk4mR1N3vYYONowIQzPXPdkvPSAm_RW67AqR8l57QZD9itelcNcNUCO04Q0rfrJJt3Zedi0rdaB0IYDacgg4zgTdLizjEqEJqliQP8TRe2SECCHWcPphrACQZsZ8kvkZLnS1JwfR-Vi6ICxvkvEbnJSYB-XZU1QyofIAnv5XOgqm0rVvPGjbPanP-MHgSSs4J"/>
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-lg">Ethan</p>
                    <p className="text-sm text-background-dark/60 dark:text-background-light/60">3.2 miles</p>
                  </div>
                  <div className="text-lg font-bold text-primary">80%</div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background-light dark:bg-background-dark-500">
                  <div className="relative w-16 h-16">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle className="text-background-dark/10 dark:text-background-light/10" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="8"></circle>
                      <circle className="text-primary transform -rotate-90 origin-center transition-all duration-1000 ease-out" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeLinecap="round" strokeWidth="8" style={{strokeDasharray: 'calc(282.74 * 70 / 100) 282.74'}}></circle>
                    </svg>
                    <img alt="Sophia's avatar" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDpnIDEMr2a5JhSUsV0DvLHQp6i-w2gNNcjAG0421Ci0yGHUDZW5391NvPpKylue42-FvVWh2KlGlcsQFJA8-FNNCzJtC80WamqIW3UkPLSO35St4tZozieTOKCCgr2RSpCU-J0y_2Ejp27AjQeLHZu9vTUlq4mVNvjDsR2eK4922zyycNjhXR1KARLKRaJZNDffbdKvdRxAnfku_YePmTHDFCaS4SfM8cXKL0n-gmTirvIcTW-DDzr_Lkzn6PApEiQqQZevYAXPG0"/>
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-lg">Sophia</p>
                    <p className="text-sm text-background-dark/60 dark:text-background-light/60">2.8 miles</p>
                  </div>
                  <div className="text-lg font-bold text-primary">70%</div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background-light dark:bg-background-dark-500">
                  <div className="relative w-16 h-16">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle className="text-background-dark/10 dark:text-background-light/10" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="8"></circle>
                      <circle className="text-primary transform -rotate-90 origin-center transition-all duration-1000 ease-out" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeLinecap="round" strokeWidth="8" style={{strokeDasharray: 'calc(282.74 * 90 / 100) 282.74'}}></circle>
                    </svg>
                    <img alt="Liam's avatar" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9GYDmvajHrpUfyUEhfO0p40Css-FM2EpxUAFE3EgjNxcBrCJeuNtIUhB9KJCrT5AbmKjR5b39Tz5q4aN0uKxNpVPkP3GLDAfpug_vJrUpi9sIyrWuuHzRt9snvMz89XAcVDdHR6eYxhb0DTogINejLNS-Xy61QcUlvIu4rVnMCqWPmrL4FRZzGDu6nIFDv3o8MAw6fxe7S8YDndZsFq1GDnuBoghbfR1PNDRw7zhQkUgcGqtRRgc09Q8mQF23QOlQtZQ0KnjzPsoO"/>
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-lg">Liam</p>
                    <p className="text-sm text-background-dark/60 dark:text-background-light/60">3.5 miles</p>
                  </div>
                  <div className="text-lg font-bold text-primary">90%</div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-background-dark/10 dark:border-background-light/10 flex justify-center items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <span className="text-2xl">👏</span>
                <span className="font-bold">12</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🔥</span>
                <span className="font-bold">8</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <span className="text-2xl">💪</span>
                <span className="font-bold">15</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GroupWorkout;