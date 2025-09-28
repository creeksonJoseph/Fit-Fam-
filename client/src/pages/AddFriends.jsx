import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Sidebar from "../components/Sidebar";
import AppHeader from "../components/AppHeader";

const AddFriends = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [sentRequests, setSentRequests] = useState(new Set());

  const BASE_URL = "http://localhost:5000";
  const { user } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      
      try {
        const [usersRes, friendsRes] = await Promise.all([
          fetch(`${BASE_URL}/users/`, { credentials: 'include' }),
          fetch(`${BASE_URL}/friends/${user.id}`, { credentials: 'include' }),
        ]);

        const allUsers = usersRes.ok ? await usersRes.json() : [];
        const friendsData = friendsRes.ok ? await friendsRes.json() : [];

        const friendIds = new Set();
        const pendingIds = new Set();

        if (Array.isArray(friendsData)) {
          friendsData.forEach((friend) => {
            if (friend.status === "accepted") {
              friendIds.add(friend.followed_user_id);
            } else if (friend.status === "pending") {
              pendingIds.add(friend.followed_user_id);
            }
          });
        }

        // Filter out current user, existing friends, and pending requests
        const availableUsers = Array.isArray(allUsers) ? allUsers.filter(
          (u) =>
            u.id !== user.id &&
            !friendIds.has(u.id) &&
            !pendingIds.has(u.id)
        ) : [];

        setUsers(availableUsers);
        setSentRequests(pendingIds);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [user]);

  const handleAddFriend = async (targetUserId) => {
    console.log('AddFriends: Sending friend request to user:', targetUserId);
    try {
      const requestBody = {
        following_user_id: user.id,
        followed_user_id: targetUserId,
        status: "pending",
      };
      console.log('AddFriends: Request body:', requestBody);
      
      const response = await fetch(`${BASE_URL}/friends/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
        body: JSON.stringify(requestBody),
      });
      
      console.log('AddFriends: Response status:', response.status);
      const responseData = await response.json();
      console.log('AddFriends: Response data:', responseData);

      setSentRequests((prev) => new Set([...prev, targetUserId]));
    } catch (error) {
      console.error("AddFriends: Error sending friend request:", error);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display">
        <AppHeader />
        <div className="flex min-h-screen">
          <Sidebar activeTab="friends" />
          <main className="flex-1 flex items-center justify-center lg:ml-80">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="friends" />
        <main className="flex-1 p-3 sm:p-6 lg:p-8 pb-24 lg:pb-8 lg:ml-80">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/friends"
              className="inline-flex items-center gap-1 sm:gap-2 mb-4 sm:mb-6 text-sm sm:text-base text-background-dark dark:text-background-light hover:text-primary transition-colors"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hidden sm:inline">Back to Friends</span>
              <span className="sm:hidden">Back</span>
            </Link>
            <div className="mb-6 sm:mb-8 text-center">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-background-dark dark:text-background-light">
                FitFam Community
              </h2>
              <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-background-dark/60 dark:text-background-light/60">
                Find friends and other members of the FitFam community.
              </p>
            </div>

            <div className="mb-6 sm:mb-8 max-w-xl mx-auto">
              <div className="relative">
                <svg
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-6 sm:w-6 text-background-dark/40 dark:text-background-light/40"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
                <input
                  className="h-10 sm:h-14 w-full rounded-lg sm:rounded-xl border-none bg-background-dark/5 dark:bg-background-light/5 py-2 sm:py-3 pl-10 sm:pl-14 pr-3 sm:pr-4 text-sm sm:text-lg text-background-dark dark:text-background-light placeholder:text-background-dark/40 dark:placeholder:text-background-light/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Search for people..."
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-8 sm:mb-12">
              <h3 className="mb-4 sm:mb-6 text-lg sm:text-2xl font-bold text-background-dark dark:text-background-light">
                Available Members ({filteredUsers.length})
              </h3>
              {filteredUsers.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-background-dark/60 dark:text-background-light/60">
                    {searchTerm
                      ? "No users found matching your search."
                      : "No available users to add as friends."}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                  {filteredUsers.map((user) => {
                    const isRequestSent = sentRequests.has(user.id);
                    return (
                      <div
                        key={user.id}
                        className="flex flex-col items-center gap-3 sm:gap-4 rounded-xl border border-background-dark/10 dark:border-background-light/10 bg-background-dark/5 dark:bg-background-light/5 p-4 sm:p-6"
                      >
                        <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-primary/20 flex items-center justify-center ring-4 ring-primary/50">
                          <span className="text-primary font-bold text-2xl">
                            {user.username.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <p className="text-base sm:text-lg font-bold text-background-dark dark:text-background-light text-center">
                          {user.username}
                        </p>
                        <button
                          onClick={() => handleAddFriend(user.id)}
                          disabled={isRequestSent}
                          className={`inline-flex w-full items-center justify-center rounded-lg px-3 py-2 text-sm sm:text-base font-bold transition-colors ${
                            isRequestSent
                              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                              : "bg-primary text-background-dark hover:bg-primary/90"
                          }`}
                        >
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                          </svg>
                          {isRequestSent ? "Sent" : "Add"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddFriends;
