import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const Notifications = () => {
  const [friendRequests, setFriendRequests] = useState({ incoming: [], outgoing: [] });
  const [loading, setLoading] = useState(true);
  
  const BASE_URL = 'http://localhost:5000';
  const { user } = useAuth();

  const fetchFriendRequests = async () => {
    if (!user) {
      console.log('Notifications: No user found, skipping fetch');
      setLoading(false);
      return;
    }
    
    console.log('Notifications: Fetching friend requests for user:', user.id, user.username);
    setLoading(true);
    try {
      console.log('Notifications: Making API calls...');
      const [usersRes, friendsRes] = await Promise.all([
        fetch(`${BASE_URL}/users/`, { credentials: 'include' }),
        fetch(`${BASE_URL}/friends/${user.id}`, { credentials: 'include' })
      ]);
      
      console.log('Notifications: Users response status:', usersRes.status);
      console.log('Notifications: Friends response status:', friendsRes.status);
      
      const users = usersRes.ok ? await usersRes.json() : [];
      const friendsData = friendsRes.ok ? await friendsRes.json() : [];
      
      console.log('Notifications: Users data:', users);
      console.log('Notifications: Friends data:', friendsData);
      
      const usersMap = users.reduce((acc, u) => ({ ...acc, [u.id]: u }), {});
      console.log('Notifications: Users map:', usersMap);
      
      const incomingRequests = [];
      const outgoingRequests = [];
      
      if (Array.isArray(friendsData)) {
        console.log('Notifications: Processing', friendsData.length, 'friend relationships');
        friendsData.forEach((friend, index) => {
          console.log(`Notifications: Processing friend ${index + 1}:`, friend);
          
          if (friend.status === 'pending') {
            // Incoming: where current user is followed_user_id
            if (friend.followed_user_id === user.id) {
              console.log('Notifications: Found incoming request from user:', friend.following_user_id);
              const requesterUser = usersMap[friend.following_user_id];
              if (requesterUser) {
                console.log('Notifications: Adding incoming request:', requesterUser.username);
                incomingRequests.push({
                  id: requesterUser.id,
                  username: requesterUser.username,
                  email: requesterUser.email,
                  mutualFriends: Math.floor(Math.random() * 5)
                });
              } else {
                console.log('Notifications: Requester user not found in users map:', friend.following_user_id);
              }
            }
            // Outgoing: where current user is following_user_id
            else if (friend.following_user_id === user.id) {
              console.log('Notifications: Found outgoing request to user:', friend.followed_user_id);
              const followedUser = usersMap[friend.followed_user_id];
              if (followedUser) {
                console.log('Notifications: Adding outgoing request:', followedUser.username);
                outgoingRequests.push({
                  id: followedUser.id,
                  username: followedUser.username,
                  email: followedUser.email,
                  status: 'pending'
                });
              } else {
                console.log('Notifications: Followed user not found in users map:', friend.followed_user_id);
              }
            }
          } else if (friend.status === 'accepted') {
            console.log('Notifications: Found accepted friendship:', friend);
            // Show accepted requests in outgoing section
            if (friend.following_user_id === user.id) {
              const followedUser = usersMap[friend.followed_user_id];
              if (followedUser) {
                console.log('Notifications: Adding accepted outgoing:', followedUser.username);
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
                console.log('Notifications: Adding accepted incoming:', requesterUser.username);
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
        console.log('Notifications: Friends data is not an array:', typeof friendsData);
      }
      
      console.log('Notifications: Final incoming requests:', incomingRequests);
      console.log('Notifications: Final outgoing requests:', outgoingRequests);
      
      setFriendRequests({ incoming: incomingRequests, outgoing: outgoingRequests });
    } catch (error) {
      console.error('Notifications: Error fetching friend requests:', error);
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
    console.log('Notifications: Accepting request from user:', fromUserId);
    try {
      const requestBody = {
        following_user_id: fromUserId,
        followed_user_id: user.id,
        status: 'accepted'
      };
      console.log('Notifications: Accept request body:', requestBody);
      
      const response = await fetch(`${BASE_URL}/friends/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(requestBody)
      });
      
      console.log('Notifications: Accept response status:', response.status);
      const responseData = await response.json();
      console.log('Notifications: Accept response data:', responseData);
      
      // Refetch to get updated data
      fetchFriendRequests();
    } catch (error) {
      console.error('Notifications: Error accepting friend request:', error);
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
    console.log('Notifications: Cancelling request to user:', toUserId);
    try {
      const requestBody = {
        following_user_id: user.id,
        followed_user_id: toUserId
      };
      console.log('Notifications: Cancel request body:', requestBody);
      
      const response = await fetch(`${BASE_URL}/friends/request`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(requestBody)
      });
      
      console.log('Notifications: Cancel response status:', response.status);
      const responseData = await response.json();
      console.log('Notifications: Cancel response data:', responseData);
      
      // Refetch to get updated data
      fetchFriendRequests();
    } catch (error) {
      console.error('Notifications: Error cancelling friend request:', error);
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