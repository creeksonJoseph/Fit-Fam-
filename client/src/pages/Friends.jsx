import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const Friends = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="friends" />
        <main className="flex-1 p-8 pb-24 lg:pb-8">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-black text-gray-900 dark:text-white">Friends</h1>
            <Link to="/add-friends" className="bg-primary text-black font-bold py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-opacity-80 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              <span>Add Friend</span>
            </Link>
          </div>

          <div className="mb-12">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/50 dark:text-white/50" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input
                className="w-full bg-white dark:bg-background-dark border border-primary/20 dark:border-primary/30 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-black/50 dark:placeholder:text-white/50"
                placeholder="Search by username..."
                type="text"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Your Friends</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-black/20 rounded-xl">
                  <div className="relative">
                    <img
                      alt="Sophia Carter profile picture"
                      className="size-16 rounded-full"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQlKFwEh5J3cf4Fp3UC01SvVAXcYPVsk2vhme_cHE94pCb9gahYO7qOykBTD-BgoiJ0JrybeW8fH0vq6flh5i-jrr-ChUT2PPRN8_kbkA6SP58TOae9AT_GjsmqzAAVJgPWelgqrUWu0EpND_ULXulL6DQiZaCQn1g_k-FcomCU3-E_9gFT9JmRaJuv2n6xNmanMucCRf9ob1-hVj11p4_ILFqje0iHXakJbzH-e0No9mrXGe7ZrL0h7ZL7LY2DuaHSmk_zWDSlLA"
                    />
                    <div className="absolute -top-1 -right-1 size-5 bg-primary rounded-full border-4 border-background-light dark:border-background-dark"></div>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Sophia Carter</p>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      Active now
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-black/20 rounded-xl">
                  <img
                    alt="Ethan Walker profile picture"
                    className="size-16 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr0pwCcOlPNIkNSor7DuO5OWslL17_9LMd3Ces7Y1r5Y-x3Nn85Mwf9txNbGCXFGy_g8WYb_aBGJ3a7xuAVu8lgbaAZptxeuqZZTU6NIvJavd4unWcDJsU7g-TkR9AW87l8NNEOQUjgJ3OUpnlXDFC9I8THFBgO040La31ro0OPMFnhsBII0fMJqjHMdHuvr2WyeBnwTdWLIxhFigzJtfA6yWf-i_tyuuUXfga_tIDVdGAWgmQ3Zdk5e7hdwcJ4l0JUqRA9ulCKBU"
                  />
                  <div>
                    <p className="font-bold text-lg">Ethan Walker</p>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      Last active 1d ago
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-black/20 rounded-xl">
                  <div className="relative">
                    <img
                      alt="Olivia Bennett profile picture"
                      className="size-16 rounded-full"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlGmu0Vix8QGRnb_0jLUZJ5Z7yXsXLSPOwQKQ9kimMM6gFbLATVjwySwKj6WNgjxf4HlQorbE8UJ28eNx9hpdpYgK16QCNcD82Wlz3G_Ei1kuxeKdwP4bwGQnmuUmPn5hJRIRj7XocvavTUz5iCOIQWxQC-j6z2-6j2X8VIiT2ZwqXoqCmtFPrr2G1brlovWtUC-GQtiNBNN9UtBJT8LKczPoDosoiL0vXLF8awEggQ6n1GBQTPNHDWwvI0UEY4cuAJPVteyOBMzk"
                    />
                    <div className="absolute -top-1 -right-1 size-5 bg-primary rounded-full border-4 border-background-light dark:border-background-dark"></div>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Olivia Bennett</p>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      Active 30m ago
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Pending Requests</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white dark:bg-black/20 rounded-xl">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Liam Harper profile picture"
                      className="size-16 rounded-full"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuALUhvRDeyPB0FeZ3NNSnDv2NoL48PN4pPYuMSrMQiAmNo20-oh6rfDfVElRUtSOcBRwuaVmhSRfjGflXdXZY0hRyW-jaVC8WhNU0ecPqdvn0-5YnuQYMKWJW3PXQFPuYh_xZqqJnnujV8a0YEUj6AUytSSFK-oCnNjrmzv8vkeEdsy2VlD75vIRH2PxuK3gfzDPbt9MgfZjkdAyIv4ea8O2C5aW0yrFCfz1NTMZueskdlmCwy-bYLTLuOarAJ8VLN3WGvziwgTXIA"
                    />
                    <div>
                      <p className="font-bold text-lg">Liam Harper</p>
                      <p className="text-sm text-black/60 dark:text-white/60">
                        2 mutual friends
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="bg-primary text-black p-2 rounded-full hover:bg-opacity-80 transition-opacity"
                      aria-label="Accept request"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button
                      className="bg-background-light dark:bg-background-dark/80 text-black dark:text-white p-2 rounded-full hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                      aria-label="Decline request"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white dark:bg-black/20 rounded-xl">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Ava Reynolds profile picture"
                      className="size-16 rounded-full"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2KK2BhFsY2zuixi0xzR9kYSuEbmrDiyenjr-N5E8LtAyPKfSOQJSNIxaEjNMbPD5bo9vMVTP49Ot9ImcpGARXiudiO87MU_vMsUyfSTS6rIE2S7uT1RkQ4pjtlOlxlrJJJ0YrF48HvSG0qLOD7FIvHFeeeyvjw7osdkNpRwrRlnyNprKKilWDH1Rf05Ro3g5WVxmV137s-0wCFlb2lE0b4gHUHyBKg-MF4ngJFVNR1hvJn94jwDV8kvODrvEPAFkhrlikdaFaZ0M"
                    />
                    <div>
                      <p className="font-bold text-lg">Ava Reynolds</p>
                      <p className="text-sm text-black/60 dark:text-white/60">
                        1 mutual friend
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="bg-primary text-black p-2 rounded-full hover:bg-opacity-80 transition-opacity"
                      aria-label="Accept request"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button
                      className="bg-background-light dark:bg-background-dark/80 text-black dark:text-white p-2 rounded-full hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                      aria-label="Decline request"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
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

export default Friends;
