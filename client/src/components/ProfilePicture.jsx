import React from 'react';

const ProfilePicture = ({ 
  profileImage, 
  username, 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-base',
    lg: 'w-20 h-20 text-2xl',
    xl: 'w-24 h-24 text-2xl'
  };

  const baseClasses = `rounded-full flex items-center justify-center ${sizeClasses[size]} ${className}`;

  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt={`${username}'s profile`}
        className={`${baseClasses} object-cover`}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
    );
  }

  return (
    <div className={`${baseClasses} bg-primary/20`}>
      <span className="text-primary font-semibold">
        {username?.charAt(0)?.toUpperCase() || '?'}
      </span>
    </div>
  );
};

export default ProfilePicture;