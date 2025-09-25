import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import AppHeader from "../components/AppHeader";

const Dashboard = () => {
  const [progressData, setProgressData] = useState({
    totalWorkouts: 0,
    avgDuration: 0,
    weeklyProgress: [],
    leaderboard: [],
  });
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://group-fitness-app-db.onrender.com";
  const userId = 1; // TODO: Get from auth context

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        // Fetch user workout stats
        const statsRes = await fetch(`${BASE_URL}/workout-sessions/${userId}/stats`);
        const stats = await statsRes.json();
        
        const totalWorkouts = stats.total_workouts || 0;
        const avgDuration = stats.avg_duration || 0;
        
        // Fetch user progress for weekly calculation
        const progressRes = await fetch(`${BASE_URL}/progress/${userId}`);
        const userProgress = await progressRes.json();

        // Calculate weekly progress (last 4 weeks)
        const now = new Date();
        const weeklyProgress = [];
        for (let i = 3; i >= 0; i--) {
          const weekStart = new Date(now);
          weekStart.setDate(now.getDate() - i * 7 - now.getDay());
          const weekEnd = new Date(weekStart);
          weekEnd.setDate(weekStart.getDate() + 6);

          const weekWorkouts = userProgress.filter((p) => {
            const completedDate = new Date(p.time_completed);
            return completedDate >= weekStart && completedDate <= weekEnd;
          }).length;

          weeklyProgress.push(weekWorkouts);
        }

        // Fetch all users for leaderboard
        const usersRes = await fetch(`${BASE_URL}/users`);
        const users = await usersRes.json();

        // Calculate leaderboard
        const leaderboardPromises = users.map(async (user) => {
          const userProgressRes = await fetch(
            `${BASE_URL}/progress/${user.id}`
          );
          const userProgressData = await userProgressRes.json();
          return {
            id: user.id,
            username: user.username,
            workoutCount: Array.isArray(userProgressData)
              ? userProgressData.length
              : 0,
          };
        });

        const leaderboardData = await Promise.all(leaderboardPromises);
        const sortedLeaderboard = leaderboardData
          .sort((a, b) => b.workoutCount - a.workoutCount)
          .slice(0, 5);

        setProgressData({
          totalWorkouts,
          avgDuration,
          weeklyProgress,
          leaderboard: sortedLeaderboard,
        });
      } catch (error) {
        console.error("Error fetching progress data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgressData();
  }, []);

  if (loading) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-white">
        <AppHeader />
        <div className="flex min-h-screen">
          <Sidebar activeTab="dashboard" />
          <main className="flex-1 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </main>
        </div>
      </div>
    );
  }

  const maxWeeklyWorkouts = Math.max(...progressData.weeklyProgress, 1);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-white">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="dashboard" />
        <main className="flex-1 p-8 pb-24 lg:pb-8 lg:ml-80">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <h1 className="text-5xl font-bold text-background-dark dark:text-white">
                Dashboard
              </h1>
              <p className="mt-2 text-lg text-background-dark/60 dark:text-white/60">
                Track your fitness journey and celebrate your achievements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-background-dark dark:text-white">
                    Total Workouts
                  </h3>
                  <span className="text-primary text-3xl font-bold">
                    {progressData.totalWorkouts}
                  </span>
                </div>
                <div className="h-2 bg-background-light dark:bg-background-dark rounded-full">
                  <div
                    className="h-2 bg-primary rounded-full"
                    style={{
                      width: `${Math.min((progressData.totalWorkouts / 10) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-background-dark/60 dark:text-white/60">
                  Number of workouts you've grind
                </p>
              </div>
              <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-background-dark dark:text-white">
                    Avg. Duration
                  </h3>
                  <span className="text-primary text-3xl font-bold">
                    {progressData.avgDuration}
                    <span className="text-lg">min</span>
                  </span>
                </div>
                <div className="h-2 bg-background-light dark:bg-background-dark rounded-full">
                  <div
                    className="h-2 bg-primary rounded-full"
                    style={{
                      width: `${Math.min((progressData.avgDuration / 60) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-background-dark/60 dark:text-white/60">
                  Compared to last week
                </p>
              </div>
              <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-background-dark dark:text-white">
                    Calories Burned
                  </h3>
                  <span className="text-primary text-3xl font-bold">
                    {progressData.totalWorkouts * 300}
                  </span>
                </div>
                <div className="h-2 bg-background-light dark:bg-background-dark rounded-full">
                  <div
                    className="h-2 bg-primary rounded-full"
                    style={{
                      width: `${Math.min(((progressData.totalWorkouts * 300) / 2500) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-background-dark/60 dark:text-white/60">
                  Weekly goal met
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 bg-white dark:bg-background-dark/50 rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6 text-background-dark dark:text-white">
                  Workout History
                </h2>
                <div className="grid grid-flow-col grid-rows-[1fr_auto] items-end justify-items-center gap-6 h-48 px-3">
                  {progressData.weeklyProgress.map((workouts, index) => (
                    <React.Fragment key={index}>
                      <div className="w-full bg-background-light dark:bg-background-dark rounded-t-lg relative">
                        <div
                          className={`absolute bottom-0 w-full rounded-t ${
                            index === 3
                              ? "bg-primary"
                              : "bg-primary/20 dark:bg-primary/30"
                          }`}
                          style={{
                            height: `${(workouts / maxWeeklyWorkouts) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <p
                        className={`text-xs font-bold ${
                          index === 3
                            ? "text-primary"
                            : "text-background-dark/60 dark:text-white/60"
                        }`}
                      >
                        Week {index + 1}
                      </p>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4 text-background-dark dark:text-white">
                  Leaderboard
                </h2>
                <div className="space-y-4">
                  {progressData.leaderboard.map((user, index) => {
                    const isCurrentUser = user.id === userId;
                    return (
                      <div
                        key={user.id}
                        className={`flex items-center justify-between ${
                          isCurrentUser
                            ? "bg-primary/20 dark:bg-primary/30 rounded-lg p-3 -m-3"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-bold ${
                              isCurrentUser
                                ? "text-primary"
                                : "text-background-dark/60 dark:text-white/60"
                            }`}
                          >
                            {index + 1}
                          </span>
                          <p
                            className={`font-medium ${
                              isCurrentUser
                                ? "font-bold text-primary"
                                : "text-background-dark dark:text-white"
                            }`}
                          >
                            {isCurrentUser ? "You" : user.username}
                          </p>
                        </div>
                        <p
                          className={`font-bold ${
                            isCurrentUser
                              ? "text-primary"
                              : "text-background-dark dark:text-white"
                          }`}
                        >
                          {user.workoutCount}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
