
import React from 'react';
import { PageView } from '../App';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/50 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            <img src="/intentpath-logo.png" alt="IntentPath AI" className="w-10 h-10 object-contain" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white leading-none">IntentPath AI</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Global Mobility Intelligence</p>
          </div>
        </button>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => onNavigate('framework')}
            className={`text-sm transition-colors ${currentPage === 'framework' ? 'text-indigo-400' : 'text-slate-400 hover:text-white'}`}
          >
            Framework
          </button>
          <button 
            onClick={() => onNavigate('privacy')}
            className={`text-sm transition-colors ${currentPage === 'privacy' ? 'text-indigo-400' : 'text-slate-400 hover:text-white'}`}
          >
            Privacy
          </button>
          <div className="h-4 w-px bg-slate-800"></div>
          <button 
            onClick={() => onNavigate('home')}
            className="px-4 py-1.5 text-xs font-semibold bg-white text-slate-950 rounded-full hover:bg-slate-200 transition-all"
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};
