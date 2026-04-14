import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const categories = [
  { id: 'docs', name: 'Documentation Page', desc: 'Primary guides and official references', path: '/documentation' },
  { id: 'ai', name: 'AI Engineering', desc: 'LLMs, RAG, and AI development patterns', path: '/ai' },
  { id: 'system-design', name: 'System Design', desc: 'Interactive architectural diagrams', path: '/system-design' },
  { id: 'setup', name: 'Setup', desc: 'Environment and tooling configuration', path: '/setup' },
  { id: 'blueprint', name: 'Blueprint', desc: 'Modern engineering roadmaps', path: '/roadmap' },
  { id: 'fundamentals', name: 'Core Fundamentals Page', desc: 'Pillars of software engineering', path: '/fundamentals' },
];

const CategoryCards = () => {
  return (
    <section className="pt-10 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Quick Access</h2>
            <p className="text-ossium-muted text-base sm:text-lg">Essential resources for your daily workflow.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              state={category.state}
              className="group relative p-6 sm:p-8 bg-[#0f0f0f] rounded-xl border border-white/5 hover:border-ossium-accent/30 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-ossium-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-ossium-muted leading-relaxed">
                    {category.desc}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 flex items-center gap-2 text-sm font-medium text-white group-hover:text-ossium-accent transition-colors">
                  Explore
                  <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
