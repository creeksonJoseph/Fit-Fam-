import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Sidebar from "../components/Sidebar";
import AppHeader from "../components/AppHeader";

const Dashboard = () => {
  const [progressData, setProgressData] = useState({
    totalWorkouts: 0,
    avgDuration: 0,
    recentWorkouts: [],
    leaderboard: [],
  });
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://group-fitness-app.onrender.com";
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
        const totalDuration = stats.total_duration || 0;

        
        // Format total duration as hours/minutes/seconds
        const formatDuration = (seconds) => {
          const hours = Math.floor(seconds / 3600);
          const minutes = Math.floor((seconds % 3600) / 60);
          const remainingSeconds = seconds % 60;
          
          if (hours > 0) {
            return { value: hours, unit: 'hr' };
          } else if (minutes > 0) {
            return { value: minutes, unit: 'min' };
          } else {
            return { value: remainingSeconds, unit: 'sec' };
          }
        };
        
        const formattedDuration = formatDuration(totalDuration);

        
        // Fetch recent workout sessions
        const workoutRes = await fetch(`${BASE_URL}/workout-sessions/${currentUserId}`, {
          credentials: 'include'
        });
        const recentWorkouts = workoutRes.ok ? await workoutRes.json() : [];
        
        // Get exercise details for body parts
        const exercisesRes = await fetch('https://fit-fam-server-1.onrender.com/exercises');
        const exercises = exercisesRes.ok ? await exercisesRes.json() : [];
        
        const latestWorkouts = Array.isArray(recentWorkouts) ? recentWorkouts.slice(0, 3).map(workout => {
          const exercise = exercises.find(ex => ex.name.toLowerCase() === workout.name.toLowerCase());
          return {
            ...workout,
            bodyPart: exercise?.bodyParts?.[0] || 'Unknown'
          };
        }) : []

        // Fetch friends data to count accepted friends

        const friendsRes = await fetch(`${BASE_URL}/friends/${currentUserId}`, {
          credentials: 'include'
        });
        const friendsData = friendsRes.ok ? await friendsRes.json() : [];
        const totalFriends = Array.isArray(friendsData) ? friendsData.filter(f => f.status === 'accepted').length : 0;

        
        // Fetch all users for leaderboard

        const usersRes = await fetch(`${BASE_URL}/users/`, {
          credentials: 'include'
        });

        const users = usersRes.ok ? await usersRes.json() : [];


        // Calculate leaderboard based on total workout time

        const leaderboardPromises = Array.isArray(users) ? users.map(async (user) => {

          const userStatsRes = await fetch(
            `${BASE_URL}/workout-sessions/${user.id}/stats`,
            { credentials: 'include' }
          );
          const userStats = userStatsRes.ok ? await userStatsRes.json() : {};

          return {
            id: user.id,
            username: user.username,
            totalTime: userStats.total_duration || 0,
          };
        }) : [];

        const leaderboardData = await Promise.all(leaderboardPromises);

        const sortedLeaderboard = leaderboardData
          .sort((a, b) => b.totalTime - a.totalTime)
          .slice(0, 5);


        setProgressData({
          totalWorkouts,
          totalDuration: formattedDuration,
          totalFriends,
          recentWorkouts: latestWorkouts,
          leaderboard: sortedLeaderboard,
        });
      } catch (error) {

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
                    Total Time
                  </h3>
                  <span className="text-primary text-2xl font-bold">
                    {progressData.totalDuration?.value || 0}
                    <span className="text-base">{progressData.totalDuration?.unit || 'min'}</span>
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-primary rounded-full"
                    style={{
                      width: `${Math.min(((progressData.totalDuration?.value || 0) / (progressData.totalDuration?.unit === 'hr' ? 10 : 120)) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-background-dark/60">
                  Time spent exercising
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-base text-background-dark">
                    Total Friends
                  </h3>
                  <span className="text-primary text-2xl font-bold">
                    {progressData.totalFriends || 0}
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-primary rounded-full"
                    style={{
                      width: `${Math.min(((progressData.totalFriends || 0) / 10) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-background-dark/60">
                  Community connections
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-background-dark">
                  Recent Workouts
                </h2>
                <div className="space-y-2">
                  {progressData.recentWorkouts.length === 0 ? (
                    <p className="text-background-dark/60 text-center py-8">No workouts yet</p>
                  ) : (
                    progressData.recentWorkouts.map((workout, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start mb-1">
                          <p className="font-medium text-background-dark capitalize text-sm">{workout.name}</p>
                          <span className="text-primary font-semibold text-sm">
                            {(() => {
                              const seconds = workout.duration;
                              const hours = Math.floor(seconds / 3600);
                              const minutes = Math.floor((seconds % 3600) / 60);
                              const remainingSeconds = seconds % 60;
                              
                              if (hours > 0) return `${hours}h`;
                              if (minutes > 0) return `${minutes}m`;
                              return `${remainingSeconds}s`;
                            })()} 
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-background-dark/60 capitalize">{workout.bodyPart}</span>
                          <span className="text-xs text-background-dark/60">
                            {new Date(workout.time_completed).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
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
                          {(() => {
                            const seconds = leaderboardUser.totalTime;
                            const hours = Math.floor(seconds / 3600);
                            const minutes = Math.floor((seconds % 3600) / 60);
                            const remainingSeconds = seconds % 60;
                            
                            if (hours > 0) return `${hours}h`;
                            if (minutes > 0) return `${minutes}m`;
                            return `${remainingSeconds}s`;
                          })()} 
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