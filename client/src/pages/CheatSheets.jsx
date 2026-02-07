
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiSearch } from 'react-icons/fi';
import { sheets } from '../data/cheatSheets';

const CheatSheets = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSheets = sheets.filter(sheet => {
    const matchesSearch = sheet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sheet.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || sheet.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-ossium-darker text-ossium-text font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 px-6 pb-20 w-full max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Cheat <span className="text-ossium-muted text-3xl font-normal">/</span> Sheets
          </h1>
          <p className="text-ossium-muted text-lg max-w-xl mx-auto leading-relaxed">
            Concentrated knowledge for fast referencing.
          </p>

          <div className="mt-10 max-w-lg mx-auto relative group">
            <input
              type="text"
              placeholder="Find a cheat sheet..."
              className="w-full bg-[#121212] border border-white/5 rounded-full py-4 px-12 text-white placeholder-ossium-muted focus:outline-none focus:border-ossium-accent/50 focus:bg-[#1a1a1a] transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-ossium-muted group-focus-within:text-ossium-accent transition-colors" size={20} />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['All', 'Frontend', 'Backend', 'Language', 'Database', 'DevOps', 'Mobile', 'Tool', 'Terminal', 'Cloud'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                  ? 'bg-ossium-accent text-ossium-darker font-bold shadow-[0_0_10px_rgba(202,255,51,0.3)]'
                  : 'bg-[#121212] border border-white/5 text-ossium-muted hover:text-white hover:border-white/10 hover:bg-white/5'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSheets.map((sheet) => (
            <Link
              key={sheet.id}
              to={`/cheatsheets/${sheet.id}`}
              className="group bg-[#0f0f0f] border border-white/5 rounded-xl p-6 hover:border-ossium-accent/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`text-3xl ${sheet.color} transition-transform group-hover:scale-110 duration-300 p-2 rounded-lg bg-white/5`}>
                  {sheet.icon}
                </div>
                <span className="text-xs font-mono text-ossium-muted bg-[#161616] px-2 py-1 rounded border border-white/5">
                  {sheet.version}
                </span>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-ossium-accent transition-colors">{sheet.name}</h3>
                <span className="text-[10px] uppercase tracking-wider text-ossium-muted font-medium bg-white/5 px-1.5 py-0.5 rounded">
                  {sheet.category}
                </span>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed mt-auto border-t border-white/5 pt-4">
                {sheet.desc}
              </p>
            </Link>
          ))}
        </div>

        {filteredSheets.length === 0 && (
          <div className="text-center py-20 text-ossium-muted">
            <p className="text-xl">No cheat sheets found.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CheatSheets;
