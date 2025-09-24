import React from 'react';
import Logo from './Logo';

const AppHeader = ({ activeTab = '' }) => {
  return (
    <header className="flex items-center justify-between px-6 sm:px-10 py-4 border-b border-primary/20 dark:border-primary/30">
      <div className="flex items-center gap-4">
        <Logo />
        <h1 className="text-2xl font-bold text-black dark:text-white">FitTogether</h1>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a className={`text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'text-primary' : 'hover:text-primary'}`} href="#">Dashboard</a>
        <a className={`text-sm font-medium transition-colors ${activeTab === 'classes' ? 'text-primary' : 'hover:text-primary'}`} href="#">Classes</a>
        <a className={`text-sm font-medium transition-colors ${activeTab === 'challenges' ? 'text-primary' : 'hover:text-primary'}`} href="#">Challenges</a>
        <a className={`text-sm font-medium transition-colors ${activeTab === 'community' ? 'text-primary' : 'hover:text-primary'}`} href="#">Community</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-primary/20 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <img alt="User profile picture" className="size-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjBAiY897rpaTFp4mHtCAPQBZ87TuHT4vgxR7Ns8ngFqtr2Mb6fwqFeR07RAfFRgmuGaiv6H23_1k_eYB1qkB1X0ngxsf5iBoBI691n5ptCe4srwZLQz9EuUP2C4FouF56Up474O-keNQoMnCmOYX5bNooy6c3OB3egxOUt9SX3kNtvju7VOjCSkvyUGYE3x-EEkaixk_W68m30er5iuVM7m9zS4QkC0qcJtv5FiDgfGQNmKtTW8XA-_yjeg6BPe12W4SDt4H7BDE"/>
      </div>
    </header>
  );
};

export default AppHeader;