import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import AppHeader from "../components/AppHeader";

const Settings = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="settings" />
        <main className="flex-1 p-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-background-dark dark:text-white mb-8">
              Settings
            </h2>
            <div className="space-y-12">
              <Card>
                <h3 className="text-2xl font-bold text-background-dark dark:text-white mb-6">
                  Profile
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
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
                    <div className="flex-grow">
                      <div>
                        <label
                          className="block text-sm font-medium text-background-dark/70 dark:text-white/70"
                          htmlFor="username"
                        >
                          Username
                        </label>
                        <input
                          className="mt-1 block w-full bg-background-light dark:bg-background-dark/60 border-none rounded-lg h-12 px-4 text-background-dark dark:text-white focus:ring-2 focus:ring-primary"
                          id="username"
                          name="username"
                          type="text"
                          defaultValue="SunriseChaser"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-background-dark/70 dark:text-white/70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="mt-1 block w-full bg-background-light dark:bg-background-dark/60 border-none rounded-lg h-12 px-4 text-background-dark dark:text-white focus:ring-2 focus:ring-primary"
                      id="email"
                      name="email"
                      type="email"
                      defaultValue="sunrise.chaser@email.com"
                    />
                  </div>
                </div>
              </Card>
              <Card className="p-0">
                <h3 className="text-2xl font-bold text-background-dark dark:text-white p-6">
                  Account & Privacy
                </h3>
                <div className="divide-y divide-background-light dark:divide-background-dark">
                  <a
                    className="flex items-center justify-between p-6 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-200"
                    href="#"
                  >
                    <div>
                      <p className="font-bold text-background-dark dark:text-white">
                        Privacy Settings
                      </p>
                      <p className="text-sm text-background-dark/70 dark:text-white/70">
                        Control how your data is shared
                      </p>
                    </div>
                    <svg
                      className="text-background-dark/50 dark:text-white/50"
                      fill="currentColor"
                      height="24"
                      viewBox="0 0 256 256"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M181.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L164.69,128,98.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,181.66,133.66Z"></path>
                    </svg>
                  </a>
                  <a
                    className="flex items-center justify-between p-6 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-200"
                    href="#"
                  >
                    <div>
                      <p className="font-bold text-background-dark dark:text-white">
                        Account Management
                      </p>
                      <p className="text-sm text-background-dark/70 dark:text-white/70">
                        Change password, delete account
                      </p>
                    </div>
                    <svg
                      className="text-background-dark/50 dark:text-white/50"
                      fill="currentColor"
                      height="24"
                      viewBox="0 0 256 256"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M181.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L164.69,128,98.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,181.66,133.66Z"></path>
                    </svg>
                  </a>
                </div>
              </Card>
              <div className="space-y-4">
                <Button size="lg" className="w-full h-14 text-lg rounded-xl">
                  Save Changes
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full h-14 text-lg rounded-xl"
                >
                  Log Out
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
