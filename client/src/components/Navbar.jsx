import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useAuth } from '../context/useAuth';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${scrolled
        ? 'bg-[#0a0a0a]/70 backdrop-blur-md border-b border-white/5'
        : 'bg-transparent'
        }`}
    >
      <Link to="/" className="flex items-center gap-3 cursor-pointer shrink-0">

        <span className="text-white font-bold text-xl tracking-tight">CodeFetch</span>
      </Link>

      {/* Centered Desktop Navigation - Absolute positioning for strict centering */}
      <div className="hidden md:flex absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 items-center gap-9 text-sm font-medium">
        <Link to="/cheatsheets" className={`transition-colors ${isActive('/cheatsheets')}`}>Cheat Sheets</Link>
        <Link to="/languages" className={`transition-colors ${isActive('/languages')}`}>Languages</Link>
        <Link to="/roadmap" className={`transition-colors ${isActive('/roadmap')}`}>Blueprint</Link>
        <Link to="/setup" className={`transition-colors ${isActive('/setup')}`}>Setup</Link>
        <Link to="/errors" className={`transition-colors ${isActive('/errors')}`}>Bugs & Fixes</Link>
        <Link to="/tools" className={`transition-colors ${isActive('/tools')}`}>Tools</Link>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        {/* Mobile Search Button */}
        <button
          onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          className="md:hidden p-2.5 text-ossium-muted hover:text-white transition-colors border border-white/5 rounded-lg hover:bg-white/5"
          aria-label="Search"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* Desktop Search Button */}
        <button
          onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          className="p-2 ml-2 text-ossium-muted hover:text-white transition-colors border border-white/5 rounded-lg hover:bg-white/5 group hidden md:flex items-center gap-2"
          aria-label="Search"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-[10px] font-mono border border-white/10 rounded px-1 group-hover:border-white/30">⌘K</span>
        </button>

        {user ? (
          <Link
            to="/dashboard"
            state={{ tab: 'snippets' }}
            className="hidden md:block bg-ossium-text text-ossium-darker px-4 py-2 rounded-md text-sm font-bold hover:bg-white/90 hover:scale-105 transition-all"
          >
            My Snippets
          </Link>
        ) : (
          <Link to="/login" className="hidden md:block bg-ossium-accent text-ossium-darker px-4 py-2 rounded-md text-sm font-bold hover:bg-white/90 hover:scale-105 transition-all">
            Log In
          </Link>
        )}

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden animate-fade-in-down shadow-2xl z-40">
          <Link to="/cheatsheets" className={`text-lg font-medium ${isActive('/cheatsheets')}`} onClick={() => setMobileMenuOpen(false)}>Cheat Sheets</Link>
          <Link to="/languages" className={`text-lg font-medium ${isActive('/languages')}`} onClick={() => setMobileMenuOpen(false)}>Languages</Link>
          <Link to="/roadmap" className={`text-lg font-medium ${isActive('/roadmap')}`} onClick={() => setMobileMenuOpen(false)}>Blueprint</Link>
          <Link to="/setup" className={`text-lg font-medium ${isActive('/setup')}`} onClick={() => setMobileMenuOpen(false)}>Setup</Link>
          <Link to="/errors" className={`text-lg font-medium ${isActive('/errors')}`} onClick={() => setMobileMenuOpen(false)}>Bugs & Fixes</Link>
          <Link to="/tools" className={`text-lg font-medium ${isActive('/tools')}`} onClick={() => setMobileMenuOpen(false)}>Tools</Link>
          <div className="h-px bg-white/5 w-full my-2"></div>
          {user ? (
            <Link to="/dashboard" state={{ tab: 'snippets' }} className="bg-ossium-accent text-ossium-darker px-4 py-3 rounded-md text-center font-bold hover:bg-ossium-accent-hover" onClick={() => setMobileMenuOpen(false)}>
              My Snippets
            </Link>
          ) : (
            <Link to="/login" className="bg-ossium-accent text-ossium-darker px-4 py-3 rounded-md text-center font-bold hover:bg-ossium-accent-hover" onClick={() => setMobileMenuOpen(false)}>
              Log In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
