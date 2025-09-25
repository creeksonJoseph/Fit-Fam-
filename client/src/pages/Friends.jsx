import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  
  const BASE_URL = 'https://group-fitness-app-db.onrender.com';
  const userId = 1;

  useEffect(() => {
    const fetchFriendsData = async () => {
      try {
        const [usersRes, friendsRes] = await Promise.all([
          fetch(`${BASE_URL}/users`),
          fetch(`${BASE_URL}/friends/${userId}`)
        ]);
        
        const users = await usersRes.json();
        const friendsData = await friendsRes.json();
        const usersMap = users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});
        
        const acceptedFriends = [];
        const pending = [];
        
        if (Array.isArray(friendsData)) {
          friendsData.forEach(friend => {
            const friendUser = usersMap[friend.followed_user_id];
            if (friendUser) {
              if (friend.status === 'accepted') {
                acceptedFriends.push({
                  id: friendUser.id,
                  username: friendUser.username,
                  email: friendUser.email,
                  isOnline: Math.random() > 0.5,
                  lastActive: Math.random() > 0.7 ? 'Active now' : `${Math.floor(Math.random() * 5) + 1}d ago`
                });
              } else if (friend.status === 'pending') {
                pending.push({
                  id: friendUser.id,
                  username: friendUser.username,
                  email: friendUser.email,
                  mutualFriends: Math.floor(Math.random() * 5)
                });
              }
            }
          });
        }
        
        setFriends(acceptedFriends);
        setPendingRequests(pending);
      } catch (error) {
        console.error('Error fetching friends data:', error);
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
        body: JSON.stringify({
          following_user_id: fromUserId,
          followed_user_id: userId,
          status: 'accepted'
        })
      });
      
      const acceptedUser = pendingRequests.find(req => req.id === fromUserId);
      if (acceptedUser) {
        setFriends(prev => [...prev, {
          ...acceptedUser,
          isOnline: Math.random() > 0.5,
          lastActive: 'Active now'
        }]);
        setPendingRequests(prev => prev.filter(req => req.id !== fromUserId));
      }
    } catch (error) {
      console.error('Error accepting friend request:', error);
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
      <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
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
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <AppHeader />
      <div className="flex min-h-screen">
        <Sidebar activeTab="friends" />
        <main className="flex-1 p-8 pb-24 lg:pb-8 lg:ml-80">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-black text-gray-900 dark:text-white">Friends</h1>
            <Link to="/add-friends" className="bg-primary text-black font-bold py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-opacity-80 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              <span>Add Friend</span>
            </Link>
          </div>

          <div className="mb-12">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/50 dark:text-white/50" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input
                className="w-full bg-white dark:bg-background-dark border border-primary/20 dark:border-primary/30 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-black/50 dark:placeholder:text-white/50"
                placeholder="Search by username..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Your Friends ({filteredFriends.length})</h3>
              {filteredFriends.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400">
                    {searchTerm ? 'No friends found matching your search.' : 'No friends yet. Start by adding some friends!'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredFriends.map((friend) => (
                    <div key={friend.id} className="flex items-center gap-4 p-4 bg-white dark:bg-black/20 rounded-xl">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-bold text-xl">{friend.username.charAt(0).toUpperCase()}</span>
                        </div>
                        {friend.isOnline && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full border-4 border-background-light dark:border-background-dark"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-lg">{friend.username}</p>
                        <p className="text-sm text-black/60 dark:text-white/60">
                          {friend.lastActive}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Pending Requests ({pendingRequests.length})</h3>
              {pendingRequests.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600 dark:text-gray-400">No pending friend requests</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {pendingRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-4 bg-white dark:bg-black/20 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-bold text-xl">{request.username.charAt(0).toUpperCase()}</span>
                        </div>
                        <div>
                          <p className="font-bold text-lg">{request.username}</p>
                          <p className="text-sm text-black/60 dark:text-white/60">
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
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDeclineRequest(request.id)}
                          className="bg-background-light dark:bg-background-dark/80 text-black dark:text-white p-2 rounded-full hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                          aria-label="Decline request"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
