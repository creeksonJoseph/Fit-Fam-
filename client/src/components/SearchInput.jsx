import React from 'react';

const SearchInput = ({ placeholder = "Search...", value, onChange, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-black/50 dark:text-white/50">search</span>
      <input 
        className="w-full bg-white dark:bg-background-dark border border-primary/20 dark:border-primary/30 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-black/50 dark:placeholder:text-white/50" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="text"
      />
    </div>
  );
};

export default SearchInput;