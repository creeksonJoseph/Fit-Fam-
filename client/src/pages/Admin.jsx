import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';
import ProfilePicture from '../components/ProfilePicture';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  
  const BASE_URL = 'https://group-fitness-app.onrender.com';

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${BASE_URL}/admin/users`, {
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!confirm('Are you sure you want to delete this user?')) return;
    
    try {
      const response = await fetch(`${BASE_URL}/admin/users/${userId}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      
      if (response.ok) {
        setUsers(users.filter(u => u.id !== userId));
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (loading) {
    return (
      <div className="bg-background-light font-display">
        <AppHeader />
        <div className="flex min-h-screen">
          <Sidebar activeTab="admin" />
          <main className="flex-1 flex items-center justify-center lg:ml-80">
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
        <Sidebar activeTab="admin" />
        <main className="flex-1 p-6 pb-24 lg:pb-8 lg:ml-80">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-background-dark mb-6">Admin Dashboard</h1>
            
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-background-dark">User Management</h2>
                <p className="text-background-dark/60 mt-1">Manage all registered users</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((userData) => (
                      <tr key={userData.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <ProfilePicture 
                              profileImage={userData.profile_image}
                              username={userData.username}
                              size="sm"
                              className="w-10 h-10 mr-3"
                            />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{userData.username}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {userData.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            userData.is_admin 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {userData.is_admin ? 'Admin' : 'User'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {!userData.is_admin && userData.id !== user?.id && (
                            <button
                              onClick={() => handleDeleteUser(userData.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;