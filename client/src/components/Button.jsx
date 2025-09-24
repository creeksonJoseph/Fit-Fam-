import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  to, 
  onClick, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseClasses = 'font-bold rounded-lg transition-all flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-primary text-black hover:bg-opacity-90',
    secondary: 'bg-background-light dark:bg-background-dark/80 text-black dark:text-white hover:bg-primary/20 dark:hover:bg-primary/30',
    icon: 'bg-primary text-black p-2 rounded-full hover:bg-opacity-80'
  };
  
  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6',
    lg: 'py-4 px-8 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const content = (
    <>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {children}
    </>
  );
  
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;