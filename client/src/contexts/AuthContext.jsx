import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(false);

  const checkSession = async () => {
    if (checked) return;
    
    try {
      const response = await fetch('https://group-fitness-app.onrender.com/users/session', {
        credentials: 'include'
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.authenticated && data.user) {
          setUser(data.user);
        }
      }
    } catch (error) {

    } finally {
      setLoading(false);
      setChecked(true);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  const login = (userData) => {
    setUser(userData);
    setChecked(true);
  };

  const logout = () => {
    setUser(null);
    setChecked(true);
    sessionStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, checkSession }}>
      {children}
    </AuthContext.Provider>
  );
};