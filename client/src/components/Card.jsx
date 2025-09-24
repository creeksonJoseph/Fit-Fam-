import React from 'react';

const Card = ({ children, className = '', hover = false }) => {
  const baseClasses = 'bg-white dark:bg-background-dark/50 rounded-xl shadow-sm p-6';
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-300' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;