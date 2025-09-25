import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const Notifications = () => {
  const [friendRequests, setFriendRequests] = useState({ incoming: [], outgoing: [] });
  const [loading, setLoading] = useState(true);
  
  const BASE_URL = 'https://group-fitness-app-db.onrender.com';
  const userId = 1; // TODO: Get from auth context

  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        // Fetch all users to get user details
        const usersRes = await fetch(`${BASE_URL}/users`);
        const users = await usersRes.json();
        const usersMap = users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});
        
        // Fetch all friend relationships
        const friendsRes = await fetch(`${BASE_URL}/friends/${userId}`);
        const friendsData = await friendsRes.json();
        
        // Get incoming requests (where current user is followed)
        const allFriendsRes = await fetch(`${BASE_URL}/users`);
        const allUsers = await allFriendsRes.json();
        
        const incomingRequests = [];
        const outgoingRequests = [];
        
        // Check all users for friend relationships
        for (const user of allUsers) {
          if (user.id === userId) continue;
          
          const userFriendsRes = await fetch(`${BASE_URL}/friends/${user.id}`);
          const userFriends = await userFriendsRes.json();
          
          // Check if this user sent a request to current user
          const sentToMe = Array.isArray(userFriends) ? userFriends.find(
            f => f.followed_user_id === userId && f.status === 'pending'
          ) : null;
          
          if (sentToMe) {
            incomingRequests.push({
              id: user.id,
              username: user.username,
              email: user.email,
              mutualFriends: Math.floor(Math.random() * 5) // Mock mutual friends
            });
          }
        }
        
        // Get outgoing requests (current user following others with pending status)
        if (Array.isArray(friendsData)) {
          friendsData.forEach(friend => {
            if (friend.status === 'pending') {
              const followedUser = usersMap[friend.followed_user_id];
              if (followedUser) {
                outgoingRequests.push({
                  id: followedUser.id,
                  username: followedUser.username,
                  email: followedUser.email,
                  friendshipId: `${friend.following_user_id}-${friend.followed_user_id}`
                });
              }
            }
          });
        }
        
        setFriendRequests({ incoming: incomingRequests, outgoing: outgoingRequests });
      } catch (error) {
        console.error('Error fetching friend requests:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchFriendRequests();
  }, []);
  
  const handleAcceptRequest = async (fromUserId) => {
    try {
      // Update friend status to accepted
      await fetch(`${BASE_URL}/friends/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          following_user_id: userId,
          followed_user_id: fromUserId,
          status: 'accepted'
        })
      });
      
      // Remove from incoming requests
      setFriendRequests(prev => ({
        ...prev,
        incoming: prev.incoming.filter(req => req.id !== fromUserId)
      }));
    } catch (error) {
      console.error('Error accepting friend request:', error);
    }
  };
  
  const handleDeclineRequest = (fromUserId) => {
    // Remove from incoming requests (no backend call needed for decline)
    setFriendRequests(prev => ({
      ...prev,
      incoming: prev.incoming.filter(req => req.id !== fromUserId)
    }));
  };
  
  const handleCancelRequest = (toUserId) => {
    // Remove from outgoing requests
    setFriendRequests(prev => ({
      ...prev,
      outgoing: prev.outgoing.filter(req => req.id !== toUserId)
    }));
  };
  
  if (loading) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display">
        <AppHeader />
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 flex items-center justify-center">
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
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 pb-24 lg:pb-8 lg:ml-80">
          <div className="w-full max-w-4xl mx-auto space-y-6 lg:space-y-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-background-dark dark:text-background-light">Friend Requests</h1>
            
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-background-dark dark:text-background-light">Incoming</h2>
              {friendRequests.incoming.length === 0 ? (
                <div className="bg-background-light dark:bg-background-dark rounded-xl shadow-sm border border-primary/20 dark:border-primary/30 p-6 text-center">
                  <p className="text-background-dark/60 dark:text-background-light/60">No incoming friend requests</p>
                </div>
              ) : (
                <div className="bg-background-light dark:bg-background-dark rounded-xl shadow-sm border border-primary/20 dark:border-primary/30 divide-y divide-primary/20 dark:divide-primary/30">
                  {friendRequests.incoming.map((request) => (
                    <div key={request.id} className="p-3 sm:p-4 lg:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                        <div className="rounded-full w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-bold text-lg">{request.username.charAt(0).toUpperCase()}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm sm:text-base font-semibold text-background-dark dark:text-background-light truncate">{request.username}</p>
                          <p className="text-xs sm:text-sm text-background-dark/60 dark:text-background-light/60">{request.mutualFriends} mutual friends</p>
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0 w-full sm:w-auto">
                        <button 
                          onClick={() => handleAcceptRequest(request.id)}
                          className="flex items-center justify-center rounded-lg h-9 sm:h-10 px-3 sm:px-5 bg-primary text-background-dark font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity flex-1 sm:flex-none"
                        >
                          <span>Accept</span>
                        </button>
                        <button 
                          onClick={() => handleDeclineRequest(request.id)}
                          className="flex items-center justify-center rounded-lg h-9 sm:h-10 px-3 sm:px-5 bg-primary/20 dark:bg-primary/30 text-background-dark dark:text-background-light font-medium text-xs sm:text-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors flex-1 sm:flex-none"
                        >
                          <span>Decline</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-background-dark dark:text-background-light">Outgoing</h2>
              {friendRequests.outgoing.length === 0 ? (
                <div className="bg-background-light dark:bg-background-dark rounded-xl shadow-sm border border-primary/20 dark:border-primary/30 p-6 text-center">
                  <p className="text-background-dark/60 dark:text-background-light/60">No outgoing friend requests</p>
                </div>
              ) : (
                <div className="bg-background-light dark:bg-background-dark rounded-xl shadow-sm border border-primary/20 dark:border-primary/30 divide-y divide-primary/20 dark:divide-primary/30">
                  {friendRequests.outgoing.map((request) => (
                    <div key={request.id} className="p-3 sm:p-4 lg:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                        <div className="rounded-full w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-bold">{request.username.charAt(0).toUpperCase()}</span>
                        </div>
                        <p className="text-sm sm:text-base text-background-dark/80 dark:text-background-light/80 min-w-0">
                          You requested to follow <span className="font-semibold text-background-dark dark:text-background-light">{request.username}</span>
                        </p>
                      </div>
                      <button 
                        onClick={() => handleCancelRequest(request.id)}
                        className="flex items-center justify-center rounded-lg h-9 sm:h-10 px-3 sm:px-5 bg-primary/20 dark:bg-primary/30 text-background-dark dark:text-background-light font-medium text-xs sm:text-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors shrink-0"
                      >
                        <span>Cancel</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Notifications;