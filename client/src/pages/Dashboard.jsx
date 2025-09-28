import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
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

  const BASE_URL = "http://localhost:5000";
  const { user } = useAuth();

  useEffect(() => {
    const fetchProgressData = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      
      try {
        const currentUserId = user.id;
        // Fetch user workout stats
        const statsRes = await fetch(`${BASE_URL}/workout-sessions/${currentUserId}/stats`, {
          credentials: 'include'
        });
        const stats = statsRes.ok ? await statsRes.json() : {};
        
        const totalWorkouts = stats.total_workouts || 0;
        const avgDuration = stats.avg_duration || 0;
        
        // Fetch user progress for weekly calculation
        const progressRes = await fetch(`${BASE_URL}/progress/${currentUserId}`, {
          credentials: 'include'
        });
        const userProgress = progressRes.ok ? await progressRes.json() : [];

        // Calculate weekly progress (last 4 weeks)
        const now = new Date();
        const weeklyProgress = [];
        for (let i = 3; i >= 0; i--) {
          const weekStart = new Date(now);
          weekStart.setDate(now.getDate() - i * 7 - now.getDay());
          const weekEnd = new Date(weekStart);
          weekEnd.setDate(weekStart.getDate() + 6);

          const weekWorkouts = Array.isArray(userProgress) ? userProgress.filter((p) => {
            const completedDate = new Date(p.time_completed);
            return completedDate >= weekStart && completedDate <= weekEnd;
          }).length : 0;

          weeklyProgress.push(weekWorkouts);
        }

        // Fetch all users for leaderboard
        const usersRes = await fetch(`${BASE_URL}/users/`, {
          credentials: 'include'
        });
        const users = usersRes.ok ? await usersRes.json() : [];

        // Calculate leaderboard
        const leaderboardPromises = Array.isArray(users) ? users.map(async (user) => {
          const userProgressRes = await fetch(
            `${BASE_URL}/progress/${user.id}`,
            { credentials: 'include' }
          );
          const userProgressData = userProgressRes.ok ? await userProgressRes.json() : [];
          return {
            id: user.id,
            username: user.username,
            workoutCount: Array.isArray(userProgressData)
              ? userProgressData.length
              : 0,
          };
        }) : [];

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
      <div className="bg-background-light font-display text-text-light">
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
    <div className="bg-background-light font-display text-text-light">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="dashboard" />
        <main className="flex-1 p-6 pb-24 lg:pb-8 lg:ml-80">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-background-dark">
                Dashboard
              </h1>
              <p className="mt-2 text-sm sm:text-base text-background-dark/60">
                Track your fitness journey and celebrate your achievements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-base text-background-dark">
                    Total Workouts
                  </h3>
                  <span className="text-primary text-2xl font-bold">
                    {progressData.totalWorkouts}
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-primary rounded-full"
                    style={{
                      width: `${Math.min((progressData.totalWorkouts / 10) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-background-dark/60">
                  Number of workouts you've grind
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-base text-background-dark">
                    Avg. Duration
                  </h3>
                  <span className="text-primary text-2xl font-bold">
                    {progressData.avgDuration}
                    <span className="text-base">min</span>
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-primary rounded-full"
                    style={{
                      width: `${Math.min((progressData.avgDuration / 60) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-background-dark/60">
                  Compared to last week
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-base text-background-dark">
                    Calories Burned
                  </h3>
                  <span className="text-primary text-2xl font-bold">
                    {progressData.totalWorkouts * 300}
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-primary rounded-full"
                    style={{
                      width: `${Math.min(((progressData.totalWorkouts * 300) / 2500) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-background-dark/60">
                  Weekly goal met
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-background-dark">
                  Workout History
                </h2>
                <div className="grid grid-flow-col grid-rows-[1fr_auto] items-end justify-items-center gap-4 h-40 px-2">
                  {progressData.weeklyProgress.map((workouts, index) => (
                    <React.Fragment key={index}>
                      <div className="w-full bg-gray-200 rounded-t-lg relative">
                        <div
                          className={`absolute bottom-0 w-full rounded-t ${
                            index === 3
                              ? "bg-primary"
                              : "bg-primary/20"
                          }`}
                          style={{
                            height: `${(workouts / maxWeeklyWorkouts) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <p
                        className={`text-xs font-medium ${
                          index === 3
                            ? "text-primary"
                            : "text-background-dark/60"
                        }`}
                      >
                        Week {index + 1}
                      </p>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-background-dark">
                  Leaderboard
                </h2>
                <div className="space-y-3">
                  {progressData.leaderboard.map((leaderboardUser, index) => {
                    const isCurrentUser = leaderboardUser.id === user?.id;
                    return (
                      <div
                        key={leaderboardUser.id}
                        className={`flex items-center justify-between ${
                          isCurrentUser
                            ? "bg-primary/20 rounded-lg p-2 -m-2"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-medium text-sm ${
                              isCurrentUser
                                ? "text-primary"
                                : "text-background-dark/60"
                            }`}
                          >
                            {index + 1}
                          </span>
                          <p
                            className={`font-medium text-sm ${
                              isCurrentUser
                                ? "font-semibold text-primary"
                                : "text-background-dark"
                            }`}
                          >
                            {isCurrentUser ? "You" : leaderboardUser.username}
                          </p>
                        </div>
                        <p
                          className={`font-semibold text-sm ${
                            isCurrentUser
                              ? "text-primary"
                              : "text-background-dark"
                          }`}
                        >
                          {leaderboardUser.workoutCount}
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