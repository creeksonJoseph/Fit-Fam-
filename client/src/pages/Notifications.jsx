import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const Notifications = () => {
  const [friendRequests, setFriendRequests] = useState({ incoming: [], outgoing: [] });
  const [loading, setLoading] = useState(true);
  
  const BASE_URL = 'http://localhost:5000';
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        // Get current user from session
        const sessionRes = await fetch(`${BASE_URL}/users/session`, {
          credentials: 'include'
        });
        
        if (!sessionRes.ok) {
          setLoading(false);
          return;
        }
        
        const sessionData = await sessionRes.json();
        if (!sessionData.authenticated) {
          setLoading(false);
          return;
        }
        
        const currentUserId = sessionData.user.id;
        setUserId(currentUserId);
        // Fetch all users to get user details
        const usersRes = await fetch(`${BASE_URL}/users/`, { credentials: 'include' });
        const users = await usersRes.json();
        const usersMap = users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});
        
        // Fetch all friend relationships
        const friendsRes = await fetch(`${BASE_URL}/friends/${currentUserId}`, { credentials: 'include' });
        const friendsData = await friendsRes.json();
        
        // Get incoming requests (where current user is followed)
        const allFriendsRes = await fetch(`${BASE_URL}/users/`, { credentials: 'include' });
        const allUsers = await allFriendsRes.json();
        
        const incomingRequests = [];
        const outgoingRequests = [];
        
        // Check all users for friend relationships
        for (const user of allUsers) {
          if (user.id === currentUserId) continue;
          
          const userFriendsRes = await fetch(`${BASE_URL}/friends/${user.id}`, { credentials: 'include' });
          const userFriends = await userFriendsRes.json();
          
          // Check if this user sent a request to current user
          const sentToMe = Array.isArray(userFriends) ? userFriends.find(
            f => f.followed_user_id === currentUserId && f.status === 'pending'
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
        credentials: 'include',
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
      <div className="bg-background-light font-display">
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
    <div className="bg-background-light font-display">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 pb-24 lg:pb-8 lg:ml-80">
          <div className="w-full max-w-4xl mx-auto space-y-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-background-dark">Friend Requests</h1>
            
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-background-dark">Incoming</h2>
              {friendRequests.incoming.length === 0 ? (
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <p className="text-background-dark/60 text-sm">No incoming friend requests</p>
                </div>
              ) : (
                <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
                  {friendRequests.incoming.map((request) => (
                    <div key={request.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="rounded-full w-10 h-10 flex-shrink-0 bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-semibold text-sm">{request.username.charAt(0).toUpperCase()}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-background-dark truncate">{request.username}</p>
                          <p className="text-xs text-background-dark/60">{request.mutualFriends} mutual friends</p>
                        </div>
                      </div>
                      <div className="flex gap-2 w-full sm:w-auto">
                        <button 
                          onClick={() => handleAcceptRequest(request.id)}
                          className="flex items-center justify-center rounded-lg h-8 px-3 bg-primary text-background-dark font-medium text-xs hover:opacity-90 transition-opacity flex-1 sm:flex-none"
                        >
                          Accept
                        </button>
                        <button 
                          onClick={() => handleDeclineRequest(request.id)}
                          className="flex items-center justify-center rounded-lg h-8 px-3 bg-gray-200 text-background-dark font-medium text-xs hover:bg-gray-300 transition-colors flex-1 sm:flex-none"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-background-dark">Outgoing</h2>
              {friendRequests.outgoing.length === 0 ? (
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <p className="text-background-dark/60 text-sm">No outgoing friend requests</p>
                </div>
              ) : (
                <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
                  {friendRequests.outgoing.map((request) => (
                    <div key={request.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="rounded-full w-8 h-8 flex-shrink-0 bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-semibold text-xs">{request.username.charAt(0).toUpperCase()}</span>
                        </div>
                        <p className="text-sm text-background-dark/80 min-w-0">
                          You requested to follow <span className="font-semibold text-background-dark">{request.username}</span>
                        </p>
                      </div>
                      <button 
                        onClick={() => handleCancelRequest(request.id)}
                        className="flex items-center justify-center rounded-lg h-8 px-3 bg-gray-200 text-background-dark font-medium text-xs hover:bg-gray-300 transition-colors shrink-0"
                      >
                        Cancel
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