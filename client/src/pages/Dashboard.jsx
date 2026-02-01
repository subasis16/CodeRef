import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Notes from '../components/Notes';
import {
  SiReact, SiGit, SiDocker, SiPython, SiCss3, SiGo, SiLinux,
  SiTailwindcss, SiNodedotjs
} from 'react-icons/si';
import { FiSearch, FiStar, FiBook, FiLayout, FiZap, FiMenu } from 'react-icons/fi';
import { useLocation, Link } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [currentTab, setCurrentTab] = useState(location.state?.tab || 'dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filters = ['All', 'React', 'Vue', 'Node.js', 'Python', 'Go', 'DevOps'];

  const projects = [
    { id: 1, title: 'React Hooks Cheat Sheet', desc: 'Complete guide to useState, useEffect, and custom hooks.', tags: ['React', 'Frontend'], icon: <SiReact />, stars: '1.2k', path: '/cheatsheets/react-hooks' },
    { id: 2, title: 'Git Command Reference', desc: 'Essential git commands for daily workflow and recovery.', tags: ['Git', 'DevOps'], icon: <SiGit />, stars: '3.4k', path: '/cheatsheets/git-commands' },
    { id: 3, title: 'Docker Compose Patterns', desc: 'Production-ready docker-compose templates for microservices.', tags: ['DevOps', 'Docker'], icon: <SiDocker />, stars: '890', path: '/cheatsheets/docker-compose' },
    { id: 4, title: 'Python Async/Await', desc: 'Deep dive into asyncio, coroutines, and event loops.', tags: ['Python', 'Backend'], icon: <SiPython />, stars: '2.1k', path: '/cheatsheets/python-async' },
    { id: 5, title: 'CSS Grid Layouts', desc: 'Copy-paste ready CSS grid snippets for modern web layouts.', tags: ['CSS', 'Frontend'], icon: <SiCss3 />, stars: '1.5k', path: '/cheatsheets/css-grid' },
    { id: 6, title: 'Go Concurrency Patterns', desc: 'Visual guide to channels, waitgroups, and mutexes in Go.', tags: ['Go', 'Backend'], icon: <SiGo />, stars: '1.8k', path: '/cheatsheets/go-concurrency' },
    { id: 7, title: 'Next.js 14 Handbook', desc: 'Routing, Server Actions, and new App Router patterns.', tags: ['React', 'Frontend'], icon: <FiLayout />, stars: '950', path: '/cheatsheets/nextjs-handbook' },
    { id: 8, title: 'Linux PERM Guide', desc: 'Chmod, Chown, and file system permissions explained.', tags: ['Linux', 'DevOps'], icon: <SiLinux />, stars: '4.2k', path: '/cheatsheets/linux-perm' },
  ];

  const documentationLinks = [
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com/docs', icon: <SiTailwindcss />, desc: 'Utility-first CSS framework.' },
    { name: 'React', url: 'https://react.dev', icon: <SiReact />, desc: 'The library for web and native user interfaces.' },
    { name: 'Node.js', url: 'https://nodejs.org/en/docs', icon: <SiNodedotjs />, desc: 'JavaScript runtime built on Chrome\'s V8 engine.' },
    { name: 'Vite', url: 'https://vitejs.dev/guide/', icon: <FiZap />, desc: 'Next Generation Frontend Tooling.' },
    { name: 'Next.js', url: 'https://nextjs.org/docs', icon: <FiLayout />, desc: 'The React Framework for the Web.' },
    { name: 'Vue.js', url: 'https://vuejs.org/guide/introduction.html', icon: <FiLayout />, desc: 'The Progressive JavaScript Framework.' },
    { name: 'Python', url: 'https://docs.python.org/3/', icon: <SiPython />, desc: 'The Python Language Reference.' },
    { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', icon: <FiBook />, desc: 'Resources for developers, by developers.' },
  ];

  // Filter Logic
  const filteredProjects = projects.filter(project => {
    const matchesFilter = selectedFilter === 'All' || project.tags.includes(selectedFilter) || (selectedFilter === 'Node.js' && project.tags.includes('Backend')); // Approximate for Node/Backend overlap if specific tag missing
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-ossium-darker text-ossium-text flex">
      <Sidebar
        activeTab={currentTab}
        onTabChange={setCurrentTab}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 w-full min-w-0 md:ml-64 ml-0 p-4 md:p-8 transition-all duration-300">
        {/* Search & Header */}
        <div className="sticky top-0 z-30 bg-ossium-darker/80 backdrop-blur-md pb-6 pt-2">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  className="md:hidden text-white p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <FiMenu size={24} />
                </button>
                <h1 className="text-2xl font-bold capitalize text-white">{currentTab === 'docs' ? 'Documentation' : currentTab}</h1>
              </div>
              <div className="relative w-full sm:w-64 md:w-96 group">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-ossium-muted group-focus-within:text-ossium-accent transition-colors" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${currentTab === 'docs' ? 'docs' : 'references'}...`}
                  className="w-full bg-[#1A1A1A] border border-white/5 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-ossium-accent/50 transition-colors placeholder:text-ossium-muted/50 cursor-pointer text-white"
                />
              </div>
            </div>

            {/* Filters - Only show on dashboard */}
            {currentTab === 'dashboard' && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${selectedFilter === filter
                      ? 'bg-ossium-accent text-ossium-darker border-ossium-accent font-bold'
                      : 'bg-transparent text-ossium-muted border-white/10 hover:border-white/20 hover:text-white'
                      }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto mt-4">

          {/* Dashboard Grid */}
          {currentTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <Link
                    to={project.path}
                    key={project.id}
                    className="group relative bg-[#121212] border border-white/5 rounded-xl p-5 hover:border-ossium-accent/30 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 block"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl border border-white/5 group-hover:border-ossium-accent/20 transition-colors text-white">
                        {project.icon}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-ossium-muted font-mono">
                        <FiStar className="text-ossium-accent" /> {project.stars}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ossium-accent transition-colors truncate">
                      {project.title}
                    </h3>

                    <p className="text-sm text-ossium-muted mb-4 line-clamp-2 leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-ossium-muted uppercase tracking-wide border border-white/5 group-hover:border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full py-12 text-center text-ossium-muted">
                  <p className="text-lg">No cheatsheets found matching your criteria.</p>
                </div>
              )}
            </div>
          )}

          {/* Documentation Grid */}
          {currentTab === 'docs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {documentationLinks
                .filter(doc => doc.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((doc) => (
                  <a
                    key={doc.name}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-[#121212] border border-white/5 rounded-xl p-6 hover:border-ossium-accent/30 transition-all duration-300 hover:bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform text-white">
                        {doc.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-ossium-accent transition-colors">
                        {doc.name}
                      </h3>
                    </div>

                    <p className="text-sm text-ossium-muted mb-4 leading-relaxed h-10">
                      {doc.desc}
                    </p>

                    <div className="flex items-center text-xs font-mono text-ossium-accent opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      Read Documentation &rarr;
                    </div>
                  </a>
                ))}
            </div>
          )}


          {/* Notes / Snippets Section */}
          {(currentTab === 'snippets' || currentTab === 'notes') && (
            <Notes />
          )}

          {/* Work in progress placeholder for other tabs */}
          {currentTab !== 'dashboard' && currentTab !== 'docs' && currentTab !== 'snippets' && currentTab !== 'notes' && (
            <div className="flex flex-col items-center justify-center py-20 text-ossium-muted">
              <div className="text-4xl mb-4 text-ossium-accent/50">🚧</div>
              <h3 className="text-xl font-bold text-white mb-2">Work in Progress</h3>
              <p>The {currentTab} section is currently under development.</p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
