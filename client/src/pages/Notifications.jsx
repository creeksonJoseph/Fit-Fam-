import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const Notifications = () => {
  const [friendRequests, setFriendRequests] = useState({ incoming: [], outgoing: [] });
  const [loading, setLoading] = useState(true);
  
  const BASE_URL = 'https://group-fitness-app.onrender.com';
  const { user } = useAuth();

  const fetchFriendRequests = async () => {
    if (!user) {

      setLoading(false);
      return;
    }
    

    setLoading(true);
    try {

      const [usersRes, friendsRes] = await Promise.all([
        fetch(`${BASE_URL}/users/`, { credentials: 'include' }),
        fetch(`${BASE_URL}/friends/${user.id}`, { credentials: 'include' })
      ]);
      

      
      const users = usersRes.ok ? await usersRes.json() : [];
      const friendsData = friendsRes.ok ? await friendsRes.json() : [];
      

      
      const usersMap = users.reduce((acc, u) => ({ ...acc, [u.id]: u }), {});

      
      const incomingRequests = [];
      const outgoingRequests = [];
      
      if (Array.isArray(friendsData)) {

        friendsData.forEach((friend, index) => {

          
          if (friend.status === 'pending') {
            // Incoming: where current user is followed_user_id
            if (friend.followed_user_id === user.id) {

              const requesterUser = usersMap[friend.following_user_id];
              if (requesterUser) {

                incomingRequests.push({
                  id: requesterUser.id,
                  username: requesterUser.username,
                  email: requesterUser.email,
                  mutualFriends: Math.floor(Math.random() * 5)
                });
              } else {

              }
            }
            // Outgoing: where current user is following_user_id
            else if (friend.following_user_id === user.id) {

              const followedUser = usersMap[friend.followed_user_id];
              if (followedUser) {

                outgoingRequests.push({
                  id: followedUser.id,
                  username: followedUser.username,
                  email: followedUser.email,
                  status: 'pending'
                });
              } else {

              }
            }
          } else if (friend.status === 'accepted') {

            // Show accepted requests in outgoing section
            if (friend.following_user_id === user.id) {
              const followedUser = usersMap[friend.followed_user_id];
              if (followedUser) {

                outgoingRequests.push({
                  id: followedUser.id,
                  username: followedUser.username,
                  email: followedUser.email,
                  status: 'accepted',
                  type: 'outgoing'
                });
              }
            }
            // Show accepted incoming requests
            else if (friend.followed_user_id === user.id) {
              const requesterUser = usersMap[friend.following_user_id];
              if (requesterUser) {

                outgoingRequests.push({
                  id: requesterUser.id,
                  username: requesterUser.username,
                  email: requesterUser.email,
                  status: 'accepted',
                  type: 'incoming'
                });
              }
            }
          }
        });
      } else {

      }
      

      
      setFriendRequests({ incoming: incomingRequests, outgoing: outgoingRequests });
    } catch (error) {

      setFriendRequests({ incoming: [], outgoing: [] });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFriendRequests();
  }, [user]);

  // Refetch when page becomes visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && user) {
        fetchFriendRequests();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [user]);
  
  const handleAcceptRequest = async (fromUserId) => {

    try {
      const requestBody = {
        following_user_id: fromUserId,
        followed_user_id: user.id,
        status: 'accepted'
      };

      
      const response = await fetch(`${BASE_URL}/friends/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(requestBody)
      });
      

      const responseData = await response.json();

      
      // Refetch to get updated data
      fetchFriendRequests();
    } catch (error) {

    }
  };
  
  const handleDeclineRequest = (fromUserId) => {
    // Remove from incoming requests (no backend call needed for decline)
    setFriendRequests(prev => ({
      ...prev,
      incoming: prev.incoming.filter(req => req.id !== fromUserId)
    }));
  };
  
  const handleCancelRequest = async (toUserId) => {

    try {
      const requestBody = {
        following_user_id: user.id,
        followed_user_id: toUserId
      };

      
      const response = await fetch(`${BASE_URL}/friends/request`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(requestBody)
      });
      

      const responseData = await response.json();

      
      // Refetch to get updated data
      fetchFriendRequests();
    } catch (error) {

    }
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
                    <div key={`incoming-${request.id}`} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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
                  {friendRequests.outgoing.map((request, index) => (
                    <div key={`outgoing-${request.id}-${index}`} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="rounded-full w-8 h-8 flex-shrink-0 bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-semibold text-xs">{request.username.charAt(0).toUpperCase()}</span>
                        </div>
                        <p className="text-sm text-background-dark/80 min-w-0">
                          {request.type === 'incoming' ? (
                            <><span className="font-semibold text-background-dark">{request.username}</span> requested to follow you</>
                          ) : (
                            <>You requested to follow <span className="font-semibold text-background-dark">{request.username}</span></>
                          )}
                        </p>
                      </div>
                      {request.status === 'accepted' ? (
                        <span className="flex items-center justify-center rounded-lg h-8 px-3 bg-green-100 text-green-800 font-medium text-xs">
                          Accepted
                        </span>
                      ) : (
                        <button 
                          onClick={() => handleCancelRequest(request.id)}
                          className="flex items-center justify-center rounded-lg h-8 px-3 bg-red-100 text-red-800 font-medium text-xs hover:bg-red-200 transition-colors shrink-0"
                        >
                          Cancel
                        </button>
                      )}
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