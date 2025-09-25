import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import AppHeader from "../components/AppHeader";

const Settings = () => {
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [username, setUsername] = useState("SunriseChaser");
  const [email, setEmail] = useState("sunrise.chaser@email.com");

  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="settings" />
        <main className="flex-1 p-8 pb-24 lg:pb-8 lg:ml-80">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-background-dark dark:text-white mb-8">
              Profile
            </h2>
            <div className="space-y-8">
              <div className="bg-white dark:bg-background-dark/50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div
                      className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-full"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7qdqiXNj1XEs9_QdNO92DnYy0gUDZ7UMtbFKUQaPluA924iAHM_-aPBRCP-eFe2LWZxAMJ6sNM5HxvlOMZQSiYL7OAN6BiJphg6V7PDaM5fsW8RyKMWHk5luw4NNeufjKmaygCDCYKxdygTuOZMwVEKkkOnjabXYKbDwFGW-dyRfnLyfFY8OMJuQN-H_7czKkwH7z_GukThlP0g8YRJKzS9dZ_SdRYEdGW0XJX__0Z5EzSakZsz8cmYH0llVIYab2H0a2RV1vNsyl")',
                      }}
                    ></div>
                    <button className="absolute bottom-0 right-0 bg-primary text-background-dark p-2 rounded-full hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-background-dark/50 focus:ring-primary">
                      <svg
                        fill="currentColor"
                        height="16"
                        viewBox="0 0 256 256"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l22.63-22.62L214.63,86.05Z"></path>
                      </svg>
                    </button>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-background-dark dark:text-white">
                      {username}
                    </h3>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-medium text-background-dark/70 dark:text-white/70"
                      htmlFor="username"
                    >
                      Change Username
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="flex-grow">
                        <input
                          className="block w-full bg-background-light dark:bg-background-dark/60 border-none rounded-lg h-12 px-4 text-background-dark dark:text-white focus:ring-2 focus:ring-primary"
                          disabled={!isEditingUsername}
                          id="username"
                          name="username"
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <button
                        className="p-3 rounded-lg bg-background-light dark:bg-background-dark/60 text-background-dark dark:text-white hover:bg-primary/20 dark:hover:bg-primary/30"
                        onClick={() => setIsEditingUsername(!isEditingUsername)}
                      >
                        <svg
                          fill="currentColor"
                          height="20"
                          viewBox="0 0 256 256"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l22.63-22.62L214.63,86.05Z"></path>
                        </svg>
                      </button>
                      <button className="px-4 py-2.5 rounded-lg bg-primary text-background-dark font-bold hover:bg-primary/80">
                        Save
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-medium text-background-dark/70 dark:text-white/70"
                      htmlFor="email"
                    >
                      Change Email
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="flex-grow">
                        <input
                          className="block w-full bg-background-light dark:bg-background-dark/60 border-none rounded-lg h-12 px-4 text-background-dark dark:text-white focus:ring-2 focus:ring-primary"
                          disabled={!isEditingEmail}
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <button
                        className="p-3 rounded-lg bg-background-light dark:bg-background-dark/60 text-background-dark dark:text-white hover:bg-primary/20 dark:hover:bg-primary/30"
                        onClick={() => setIsEditingEmail(!isEditingEmail)}
                      >
                        <svg
                          fill="currentColor"
                          height="20"
                          viewBox="0 0 256 256"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l22.63-22.62L214.63,86.05Z"></path>
                        </svg>
                      </button>
                      <button className="px-4 py-2.5 rounded-lg bg-primary text-background-dark font-bold hover:bg-primary/80">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button className="w-full h-12 bg-background-light dark:bg-background-dark/50 text-background-dark dark:text-white font-bold text-lg rounded-xl hover:bg-primary/20 dark:hover:bg-primary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary transition-colors duration-200">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
