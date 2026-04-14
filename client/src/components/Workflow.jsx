import React from 'react';

const Workflow = () => {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-[#080808] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-32 bg-ossium-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-ossium-accent to-white/50">Vibe Coders</span>.
          </h2>
          <p className="text-lg text-ossium-muted leading-relaxed font-light">
            Designed for high-velocity engineering. Access comprehensive documentation, troubleshoot errors instantly, and maintain your personal knowledge base—all in one secure platform.
          </p>

          <ul className="space-y-4 pt-4">
            {[
              'Comprehensive Syntax Cheat Sheets',
              'Common Bugs & Fixes Database',
              'Personal Cloud Developer Notes',
              'Architecture Blueprints & Roadmaps'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-ossium-muted hover:text-white transition-colors">
                <div className="h-5 w-5 rounded-full bg-ossium-accent/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-ossium-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 w-full relative group">
          {/* Subtle glow behind the card */}
          <div className="absolute inset-0 bg-white/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="relative rounded-2xl bg-[#0a0a0a] border border-white-[0.08] p-6 shadow-2xl transition-all duration-500 hover:border-white/[0.15]">
            {/* Fake Code Window Bar */}
            <div className="flex items-center gap-2 mb-6 border-b border-white-[0.03] pb-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]/90"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/90"></div>
              <div className="w-3 h-3 rounded-full bg-[#676b79]/90"></div>
              <div className="ml-auto text-[11px] text-gray-400 font-mono">workflow.tsx</div>
            </div>

            <div className="space-y-3 font-mono text-[13px] leading-relaxed">
              <div className="flex">
                <span className="text-pink-500 mr-2">const</span>
                <span className="text-blue-400 mr-2">Developer</span>
                <span className="text-white">=</span>
                <span className="text-yellow-300 ml-2">()</span>
                <span className="text-white ml-2">=&gt;</span>
                <span className="text-white ml-2">{'{'}</span>
              </div>
              <div className="pl-6">
                <span className="text-pink-500">return</span>
                <span className="text-white ml-2">(</span>
              </div>
              <div className="pl-12 text-gray-400">
                &lt;CodeFetch tab="cheat-sheet" /&gt;
              </div>
              <div className="pl-6 text-white">);</div>
              <div className="text-white">{'}'};</div>

              <div className="pt-6">
                <div className="px-3 py-1.5 bg-[#1a1a1a] rounded text-[11px] font-sans font-medium text-gray-400 border border-[#333] w-max select-none">
                  Instant bug resolution
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
