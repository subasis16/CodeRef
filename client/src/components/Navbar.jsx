import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { useAuth } from '../context/useAuth';
import { useSearch } from '../context/SearchContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const { openSearch } = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? 'text-ossium-accent' : 'text-ossium-muted hover:text-white';
  };

  return (
    <>
    <nav
      className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-between font-black tracking-widest
        ${scrolled
          ? 'top-4 w-[95%] max-w-6xl h-14 bg-white/10 backdrop-blur-xl rounded-full px-4 sm:px-8 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)]'
          : 'top-0 w-full h-20 bg-transparent px-4 sm:px-6 md:px-12 border-transparent rounded-none'
        }`}
    >
      <Link to="/" className="flex items-center cursor-pointer shrink-0">
        <span className={`text-white font-black transition-all duration-500 ${scrolled ? 'text-xl' : 'text-2xl'} tracking-tight`}>
          CODEFETCH
        </span>
      </Link>

      {/* Centered Desktop Navigation */}
      <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-7 text-[10px] uppercase text-white/70 transition-all duration-500 ${scrolled ? 'top-[70%] opacity-100 scale-95' : 'top-[64%] opacity-80'}`}>
        <Link to="/cheatsheets" className={`transition-colors whitespace-nowrap hover:text-white ${location.pathname === '/cheatsheets' ? 'text-white' : ''}`}>Cheat Sheets</Link>
        <Link to="/languages" className={`transition-colors whitespace-nowrap hover:text-white ${location.pathname === '/languages' ? 'text-white' : ''}`}>Languages</Link>
        <Link to="/errors" className={`transition-colors whitespace-nowrap hover:text-white ${location.pathname === '/errors' ? 'text-white' : ''}`}>Bugs & Fixes</Link>
        <Link to="/tools" className={`transition-colors whitespace-nowrap hover:text-white ${location.pathname === '/tools' ? 'text-white' : ''}`}>Tools</Link>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <div className="hidden md:flex items-center gap-4">
          {/* Search Trigger (Desktop) */}
          <button 
            onClick={openSearch}
            className="flex items-center justify-center p-2 text-white/40 hover:text-white transition-all duration-300 group relative"
            title="Search (Cmd + K)"
          >
            <IoSearch size={22} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>

          <Link
            to={user ? "/dashboard" : "/login"}
            state={user ? { tab: 'notes' } : {}}
            className={`bg-white text-black rounded-full font-black uppercase tracking-[0.2em] hover:bg-gray-200 transition-all shadow-xl flex items-center justify-center
              ${scrolled ? 'px-3 py-1.5 text-[8px]' : 'px-5 py-2 text-[9px]'}
            `}
          >
            {user ? "My Notes" : "Login"}
          </Link>
        </div>


        {/* Mobile Search Trigger */}
        <button 
          onClick={openSearch}
          className="md:hidden text-white/60 p-2 hover:text-white transition-colors"
        >
          <IoSearch size={22} />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

    </nav>

    {/* Mobile Menu Overlay */}
    {mobileMenuOpen && (
      <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center p-4 lg:hidden animate-fade-in overflow-y-auto">
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors"
        >
          <FiX size={28} />
        </button>
        
        <div className="flex flex-col items-center gap-5 text-center w-full max-w-sm">
          <Link to="/cheatsheets" className={`text-base font-semibold uppercase tracking-widest transition-all ${location.pathname === '/cheatsheets' ? 'text-white' : 'text-white/70 hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>Cheat Sheets</Link>
          <Link to="/languages" className={`text-base font-semibold uppercase tracking-widest transition-all ${location.pathname === '/languages' ? 'text-white' : 'text-white/70 hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>Languages</Link>
          <Link to="/errors" className={`text-base font-semibold uppercase tracking-widest transition-all ${location.pathname === '/errors' ? 'text-white' : 'text-white/70 hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>Bugs & Fixes</Link>
          <Link to="/tools" className={`text-base font-semibold uppercase tracking-widest transition-all ${location.pathname === '/tools' ? 'text-white' : 'text-white/70 hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>Tools</Link>
          
          <div className="h-px bg-white/20 w-16 my-2"></div>
          
          <Link 
            to={user ? "/dashboard" : "/login"} 
            state={user ? { tab: 'notes' } : {}} 
            className="bg-white text-black px-10 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-95"
            onClick={() => setMobileMenuOpen(false)}
          >
            {user ? "My Notes" : "Login"}
          </Link>
        </div>
      </div>
    )}
    </>
  );
};

export default Navbar;
