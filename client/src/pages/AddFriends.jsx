import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const AddFriends = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="friends" />
        <main className="flex-1 p-3 sm:p-6 lg:p-8 pb-24 lg:pb-8">
          <div className="mx-auto max-w-7xl">
            <Link 
              to="/friends" 
              className="inline-flex items-center gap-1 sm:gap-2 mb-4 sm:mb-6 text-sm sm:text-base text-background-dark dark:text-background-light hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">Back to Friends</span>
              <span className="sm:hidden">Back</span>
            </Link>
            <div className="mb-6 sm:mb-8 text-center">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-background-dark dark:text-background-light">FitFam Community</h2>
              <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-background-dark/60 dark:text-background-light/60">Find friends and other members of the FitTogether community.</p>
            </div>
            
            <div className="mb-6 sm:mb-8 max-w-xl mx-auto">
              <div className="relative">
                <svg className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-6 sm:w-6 text-background-dark/40 dark:text-background-light/40" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
                <input 
                  className="h-10 sm:h-14 w-full rounded-lg sm:rounded-xl border-none bg-background-dark/5 dark:bg-background-light/5 py-2 sm:py-3 pl-10 sm:pl-14 pr-3 sm:pr-4 text-sm sm:text-lg text-background-dark dark:text-background-light placeholder:text-background-dark/40 dark:placeholder:text-background-light/40 focus:outline-none focus:ring-2 focus:ring-primary/50" 
                  placeholder="Search for people..." 
                  type="text"
                />
              </div>
            </div>
            
            <div className="mb-8 sm:mb-12">
              <h3 className="mb-4 sm:mb-6 text-lg sm:text-2xl font-bold text-background-dark dark:text-background-light">Suggested Members</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col items-center gap-2 sm:gap-4 rounded-lg sm:rounded-xl border border-background-dark/10 dark:border-background-light/10 bg-background-dark/5 dark:bg-background-light/5 p-3 sm:p-6">
                  <div className="h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-cover bg-center ring-2 sm:ring-4 ring-primary/50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6656qWD0tfNav90zdRmU2zMxoaLFe9ADl7laLYbXeDOAw7UQaojtsGHbOU-M8Ez4mLfq1UpcXVUfqJHfnrg8u-J84_MTfSOzScwHCJ_kw2CQJEYISVzkMj-IbjqyUyZ4w5PtcdRCoeEBMpcZg-sJpFHo_SWFiiw9BiNZ80LXMZNaq6NQhXZyMcE1onAPWGE_HibZI_H4NJsb07LmyptHXevdkY45DLECli5h1Y9VC9evmkZK7tinsiZDaj-UoW4Cip-rM-5dlteE")'}}></div>
                  <p className="text-sm sm:text-lg font-bold text-background-dark dark:text-background-light text-center">Sophia</p>
                  <button className="inline-flex w-full items-center justify-center rounded-md sm:rounded-lg bg-primary px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-base font-bold text-background-dark transition-colors hover:bg-primary/90">
                    <svg className="w-3 h-3 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                    Add
                  </button>
                </div>
                
                <div className="flex flex-col items-center gap-3 sm:gap-4 rounded-xl border border-background-dark/10 dark:border-background-light/10 bg-background-dark/5 dark:bg-background-light/5 p-4 sm:p-6">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-cover bg-center ring-4 ring-primary/50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtLVm6K9FfTDli2vceLEG0wqC8I48Tf6L8XZEe8cZ6640JoloF9qHxtxiKzDIxSBFEoyaWNrIT-iXPFjs2hh-X5OZWwM7WfTKS7LW9ZcPZCGW-MkvuHtz0mXF72JYeCn-8t3equpX_5DsmqJVLyVCtrtNRIw-8NfVes0qYbL2i7nhZuBjj-vjkXdtYqqBozv9ekft_IVNdfwfm1n0O2QOj6IiuAp2kn3kVzV7rSqoIDuDITy6YCQRjI_dSRL5_vRxx9pKicJGK3e8")'}}></div>
                  <p className="text-base sm:text-lg font-bold text-background-dark dark:text-background-light">Ethan</p>
                  <button className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm sm:text-base font-bold text-background-dark transition-colors hover:bg-primary/90">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                    Add
                  </button>
                </div>
                
                <div className="flex flex-col items-center gap-3 sm:gap-4 rounded-xl border border-background-dark/10 dark:border-background-light/10 bg-background-dark/5 dark:bg-background-light/5 p-4 sm:p-6">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-cover bg-center ring-4 ring-primary/50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOCtvKy-T5kfzmG40bZBhGAeaPO7qgsd6Za4KcBgJ4sgiNvvFwR7GDIQz6g5rIRJOUjd4zEZVX_SzqyC7hiLOWA2ZH4UJGCPHuAfi-7mun_K5o0l_vAXzMMxL0TnFOE6e3DbklYVKmg5OXSfQSdqVYujYQ8iWyJKYPnMBkN9HRBqe-KHU2Z1P9s5QhfmSBr4u2E4Ive0OGnL_koZMdVYObJuL7ke-3rWI6k_K4_2FgE7MJ9BicUOK8l3CoU55OOmXZwFqSoj4IAKU")'}}></div>
                  <p className="text-base sm:text-lg font-bold text-background-dark dark:text-background-light">Olivia</p>
                  <button className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm sm:text-base font-bold text-background-dark transition-colors hover:bg-primary/90">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                    Add
                  </button>
                </div>
                
                <div className="flex flex-col items-center gap-3 sm:gap-4 rounded-xl border border-background-dark/10 dark:border-background-light/10 bg-background-dark/5 dark:bg-background-light/5 p-4 sm:p-6">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-cover bg-center ring-4 ring-primary/50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDvHAJV5HW8OacLKeTmoV1ouJDV8niLsr_VrwK5eMaJUWPMyGjBKLrSvWpZ-mUojUmtmEK26-6l9bjrFIzkQYlK0gqIbiBDV_RZBlzUhJ4-13Ta4d-Ym01v1stt0POKCbTqztbByvmGM9Tgx-HEXFRq1Q4-IrvwLCEGy-abz8zgkbkFGIm6_4onRHRXE3yU8KKTnX13W2n2bz3j1ks-KcPZJqj-6aHn4k15bf973MKetqGToqJCmjpMfTHv4VUEwLMZq2ehhOrF9o")'}}></div>
                  <p className="text-base sm:text-lg font-bold text-background-dark dark:text-background-light">Liam</p>
                  <button className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm sm:text-base font-bold text-background-dark transition-colors hover:bg-primary/90">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                    Add
                  </button>
                </div>
                
                <div className="flex flex-col items-center gap-3 sm:gap-4 rounded-xl border border-background-dark/10 dark:border-background-light/10 bg-background-dark/5 dark:bg-background-light/5 p-4 sm:p-6">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-cover bg-center ring-4 ring-primary/50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIDS9WCX7BANcPgI26-tpyQCLX5mm6XtD5g_fniQ3rtRpXEXgBmNwvhweMgGpoaemYLeJVt3AJ2ZCP14VXlAMU24pkpBcdUmagwLtUgV2H-ZGRHgMuoXw30lTR7IokOAV1bWD77nha6Ov414w2KJRPktDfdzmSPkm7qvOKNrFwZUehim_sa_XlkBYFCwYHNKoFQF6t6YjcGYcr6_Wea4jylvgbttkKN8I6PlGp1wTCBAU3ccQ699ARH0ZhlJ_ilQLxg-lc8zrssQo")'}}></div>
                  <p className="text-base sm:text-lg font-bold text-background-dark dark:text-background-light">Ava</p>
                  <button className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm sm:text-base font-bold text-background-dark transition-colors hover:bg-primary/90">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                    Add
                  </button>
                </div>
                
                <div className="flex flex-col items-center gap-3 sm:gap-4 rounded-xl border border-background-dark/10 dark:border-background-light/10 bg-background-dark/5 dark:bg-background-light/5 p-4 sm:p-6">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-cover bg-center ring-4 ring-primary/50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCOtagfBeYARkqkYIMZO45HmZKlDrBbosNYup46nt5jZi1t4BvGNK5vnV0whLML5PEH0lIhuYSDgbIwmYHBDk7AG2t_LFsqTWYaqaVUHaq2RAiipllfd123vklvjV3w6l8Y0w5yWJPOAY-WA4N1oPHU0zN2w2mvXT6UXS_l12e4c6KhQz_qd_FmGVQtu6Puy8VJOlMJ-CLZfjR9ed7drSClhh7p-3qr7-w1ttFjK45w3m0wXW26NCc-FhDVBq69DTNXAP8XBjs4l8")'}}></div>
                  <p className="text-base sm:text-lg font-bold text-background-dark dark:text-background-light">Noah</p>
                  <button className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm sm:text-base font-bold text-background-dark transition-colors hover:bg-primary/90">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                    Add
                  </button>
                </div>
                
                <div className="flex flex-col items-center gap-3 sm:gap-4 rounded-xl border border-background-dark/10 dark:border-background-light/10 bg-background-dark/5 dark:bg-background-light/5 p-4 sm:p-6">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-cover bg-center ring-4 ring-primary/50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDIJfYLZcL2meqhBSUDxoB5Z6u3D2K6-TILHiQr5FLDPfqxr2jF_tqQ-1IluZZHDXupELF2wP8q9UN-NaHcDYi4k3mMK3gYahalk5cJ2-44OeI3AZvPwF73PKYq3_VkaavShnuJlitOp6wMyGlptxpUk6hDsCR5iz3JSb2gJbcV21dI7SZ9KbsxylK6fg2fiRJONBEgdU5xJ5_wKH50Rl_7n3kTxbryHFnZqil04mWmb5-sAM6fu2RlWbyFlkUbWlZVJXQNYtdS2s")'}}></div>
                  <p className="text-base sm:text-lg font-bold text-background-dark dark:text-background-light">Isabella</p>
                  <button className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm sm:text-base font-bold text-background-dark transition-colors hover:bg-primary/90">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                    Add
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

export default AddFriends;