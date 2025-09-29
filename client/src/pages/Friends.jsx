import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  
  const BASE_URL = 'https://group-fitness-app.onrender.com';
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchFriendsData = async () => {
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
        const [usersRes, friendsRes] = await Promise.all([
          fetch(`${BASE_URL}/users/`, { credentials: 'include' }),
          fetch(`${BASE_URL}/friends/${currentUserId}`, { credentials: 'include' })
        ]);
        
        const users = await usersRes.json();
        const friendsData = await friendsRes.json();
        const usersMap = users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});
        
        const acceptedFriends = [];
        const pending = [];
        
        if (Array.isArray(friendsData)) {
          friendsData.forEach(friend => {
            // For accepted friends, show the other user
            if (friend.status === 'accepted') {
              const friendUser = usersMap[friend.followed_user_id];
              if (friendUser) {
                acceptedFriends.push({
                  id: friendUser.id,
                  username: friendUser.username,
                  email: friendUser.email
                });
              }
            }
            // For pending requests, show incoming requests (where current user is followed_user_id)
            else if (friend.status === 'pending' && friend.followed_user_id === currentUserId) {
              const requesterUser = usersMap[friend.following_user_id];
              if (requesterUser) {
                pending.push({
                  id: requesterUser.id,
                  username: requesterUser.username,
                  email: requesterUser.email,
                  mutualFriends: Math.floor(Math.random() * 5)
                });
              }
            }
          });
        }
        
        setFriends(acceptedFriends);
        setPendingRequests(pending);
      } catch (error) {

      } finally {
        setLoading(false);
      }
    };
    
    fetchFriendsData();
  }, []);
  
  const handleAcceptRequest = async (fromUserId) => {
    try {
      await fetch(`${BASE_URL}/friends/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          following_user_id: fromUserId,
          followed_user_id: userId,
          status: 'accepted'
        })
      });
      
      const acceptedUser = pendingRequests.find(req => req.id === fromUserId);
      if (acceptedUser) {
        setFriends(prev => [...prev, acceptedUser]);
        setPendingRequests(prev => prev.filter(req => req.id !== fromUserId));
      }
    } catch (error) {

    }
  };
  
  const handleDeclineRequest = (fromUserId) => {
    setPendingRequests(prev => prev.filter(req => req.id !== fromUserId));
  };
  
  const filteredFriends = friends.filter(friend => 
    friend.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (loading) {
    return (
      <div className="bg-background-light font-display text-text-light">
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
    <div className="bg-background-light font-display text-text-light">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="friends" />
        <main className="flex-1 p-6 pb-24 lg:pb-8 lg:ml-80">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-background-dark">Friends</h1>
            <Link to="/add-friends" className="bg-primary text-black font-medium py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-opacity-80 transition-all text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              <span>Add Friend</span>
            </Link>
          </div>

          <div className="mb-8">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-background-dark/50" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input
                className="w-full bg-white border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-background-dark/50 text-sm"
                placeholder="Search by username..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Your Friends ({filteredFriends.length})</h3>
              {filteredFriends.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-background-dark/60 text-sm">
                    {searchTerm ? 'No friends found matching your search.' : 'No friends yet. Start by adding some friends!'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredFriends.map((friend) => (
                    <div key={friend.id} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-semibold text-base">{friend.username.charAt(0).toUpperCase()}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-base">{friend.username}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Pending Requests ({pendingRequests.length})</h3>
              {pendingRequests.length === 0 ? (
                <div className="text-center py-6">
                  <p className="text-background-dark/60 text-sm">No pending friend requests</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {pendingRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-semibold text-base">{request.username.charAt(0).toUpperCase()}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-base">{request.username}</p>
                          <p className="text-sm text-background-dark/60">
                            {request.mutualFriends} mutual friends
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAcceptRequest(request.id)}
                          className="bg-primary text-black p-2 rounded-full hover:bg-opacity-80 transition-opacity"
                          aria-label="Accept request"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDeclineRequest(request.id)}
                          className="bg-gray-200 text-background-dark p-2 rounded-full hover:bg-gray-300 transition-colors"
                          aria-label="Decline request"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
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

export default Friends;