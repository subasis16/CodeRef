
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Mock Search Data Base
  const searchData = [
    { title: 'Dashboard', type: 'Page', path: '/dashboard', icon: '📊' },
    { title: 'Cheat Sheets', type: 'Section', path: '/cheatsheets', icon: '📝' },
    { title: 'Languages', type: 'Section', path: '/languages', icon: '🌐' },
    { title: 'Tools', type: 'Section', path: '/tools', icon: '🛠️' },
    { title: 'Errors', type: 'Section', path: '/errors', icon: '🐛' },
    { title: 'Roadmap', type: 'Page', path: '/roadmap', icon: '🗺️' },
    { title: 'Setup', type: 'Page', path: '/setup', icon: '⚙️' },
    { title: 'About', type: 'Page', path: '/about', icon: 'ℹ️' },
  ];

  const filteredResults = searchData.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#121212] border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">

        {/* Search Input Header */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/5">
          <svg className="w-5 h-5 text-ossium-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            autoFocus
            placeholder="Search for pages..."
            className="flex-1 bg-transparent text-white text-lg placeholder-ossium-muted/50 focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="text-[10px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-ossium-muted font-mono">
            ESC
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filteredResults.length > 0 ? (
            <div className="space-y-1">
              {filteredResults.map((result, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavigate(result.path)}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 group transition-colors text-left"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded text-lg group-hover:bg-white/10 transition-colors">
                    {result.icon}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h4 className="text-sm font-medium text-white group-hover:text-ossium-accent transition-colors truncate">
                      {result.title}
                    </h4>
                    <p className="text-xs text-ossium-muted truncate">{result.type}</p>
                  </div>
                  <svg className="w-4 h-4 text-white/20 group-hover:text-ossium-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-ossium-muted">
              <p>No results found for "{query}"</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#0a0a0a] px-4 py-2 border-t border-white/5 flex gap-4 text-[10px] text-ossium-muted">
          <span className="flex items-center gap-1">
            <kbd className="bg-white/10 px-1 rounded">↑</kbd>
            <kbd className="bg-white/10 px-1 rounded">↓</kbd>
            to navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="bg-white/10 px-1 rounded">↵</kbd>
            to select
          </span>
        </div>

      </div>
    </div>
  );
};

export default SearchModal;
