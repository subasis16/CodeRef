import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiFileText, FiRefreshCw, FiAlertTriangle } from 'react-icons/fi';

const aiWorkflowData = {
  prompts: [
    {
      title: "The Context Stacker",
      desc: "Use this pattern when asking AI to refactor complex components.",
      code: "Here is the current file: \n[PASTE CODE]\n\nMy goal is to split this large component into smaller sub-components.\nRules:\n1. Keep all logic in the parent\n2. Use pure functions for children\n3. Maintain existing styles"
    },
    {
      title: "The Debug Detective",
      desc: "For fixing cryptic error messages.",
      code: "I am getting this error: [PASTE ERROR]\n\nTech Stack: React, Vite, Tailwind.\n\nHere is the relevant code snippet: [PASTE CODE]\n\nExplain why this is happening and propose 2 potential fixes."
    },
    {
      title: "The Test Writer",
      desc: "Generate comprehensive tests without writing boilerplate.",
      code: "Write unit tests for this function using Jest/React Testing Library.\nCover:\n1. Happy path\n2. Edge cases (null/undefined inputs)\n3. Error handling"
    }
  ],
  mistakes: [
    {
      id: 1,
      title: "Blind Copy-Pasting",
      desc: "Never paste AI code without reading it. It often hallucinates imports or uses deprecated methods.",
      fix: "Review line-by-line. treat AI code like a junior dev's PR."
    },
    {
      id: 2,
      title: "Context Overload",
      desc: "Pasting 10 files into context confuses the model.",
      fix: "Isolate the problem. Only provide the relevant function or component interfaces."
    },
    {
      id: 3,
      title: "Ignoring Security",
      desc: "AI might suggest hardcoding secrets or using unsafe regex.",
      fix: "Always scan for API keys and ensure input validation is robust."
    }
  ],
  workflow: [
    { step: 1, title: 'Plan', desc: 'Write a pseudo-code outline in comments before prompting.' },
    { step: 2, title: 'Prompt', desc: 'Use structured prompts with clear constraints.' },
    { step: 3, title: 'Review', desc: 'Read the code. Does it match your style guide?' },
    { step: 4, title: 'Iterate', desc: 'Don’t accept the first answer. Ask for optimizations.' }
  ]
};

const AIWorkflow = () => {
  return (
    <div className="min-h-screen bg-ossium-darker text-white font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 px-6 pb-20 max-w-7xl mx-auto w-full">

        {/* Page Header */}
        <div className="mb-12 border-b border-white/5 pb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
            AI-Assisted <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Workflow</span>
          </h1>
          <p className="text-ossium-muted text-lg max-w-2xl">
            Master the art of "Vibe Coding". Leverage AI to ship faster without losing control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column: Prompt Library */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm">
                <FiFileText className="text-lg text-purple-400" />
              </span>
              Prompt Patterns
            </h2>
            {aiWorkflowData.prompts.map((item, idx) => (
              <div key={idx} className="bg-[#121212] border border-white/5 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-ossium-muted mb-4">{item.desc}</p>
                <div className="relative group">
                  <pre className="bg-[#0a0a0a] border border-white/5 rounded-lg p-4 text-sm font-mono text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {item.code}
                  </pre>
                  <button
                    onClick={() => navigator.clipboard.writeText(item.code)}
                    className="absolute top-2 right-2 p-2 bg-white/10 rounded hover:bg-white/20 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Copy
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Workflow & Mistakes */}
          <div className="space-y-8">

            {/* Workflow Steps */}
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm">
                <FiRefreshCw className="text-lg text-purple-400" />
              </span>
              The Loop
            </h2>
            <div className="bg-[#121212] border border-white/5 rounded-xl p-6">
              <div className="space-y-6 relative">
                {/* Connecting Line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-white/5"></div>

                {aiWorkflowData.workflow.map((step) => (
                  <div key={step.step} className="relative flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-xs font-bold text-purple-400 z-10 shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">{step.title}</h3>
                      <p className="text-xs text-ossium-muted leading-relaxed mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mistakes */}
            <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-6">
              <h2 className="text-xl font-bold text-red-200 mb-6 flex items-center gap-2">
                <FiAlertTriangle className="text-red-400" size={20} /> Common Pitfalls
              </h2>
              <div className="space-y-6">
                {aiWorkflowData.mistakes.map((mistake) => (
                  <div key={mistake.id}>
                    <h3 className="font-bold text-red-300 text-sm mb-1">{mistake.title}</h3>
                    <p className="text-xs text-red-200/70 mb-2">{mistake.desc}</p>
                    <div className="text-[10px] bg-red-500/10 p-2 rounded border border-red-500/10 text-red-300">
                      <span className="font-bold">FIX:</span> {mistake.fix}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default AIWorkflow;
