import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiArrowLeft, FiBook, FiCode, FiLayers, FiCpu, FiDatabase, FiTerminal } from 'react-icons/fi';
import { SiJavascript, SiReact, SiPython, SiGo, SiRust, SiCplusplus, SiTypescript, SiPhp, SiRuby, SiSwift, SiKotlin, SiPostgresql } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const notesData = {
  javascript: {
    name: 'JavaScript',
    icon: <SiJavascript />,
    color: 'text-yellow-400',
    description: 'The programming language of the Web. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.',
    sections: [
      {
        title: 'The Event Loop',
        content: 'JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.',
        code: `console.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nconsole.log('End');\n\n// Output:\n// Start\n// End\n// Timeout`
      },
      {
        title: 'Closures',
        content: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function\'s scope from an inner function. In JavaScript, closures are created every time a function is creation, at function creation time.',
        code: `function makeAdder(x) {\n  return function(y) {\n    return x + y;\n  };\n}\n\nconst add5 = makeAdder(5);\nconsole.log(add5(2)); // 7`
      },
      {
        title: 'Prototypal Inheritance',
        content: 'JavaScript is a prototype-based language. Objects can inherit properties and methods from other objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.',
        code: `const animal = {\n  eats: true\n};\nconst rabbit = {\n  jumps: true,\n  __proto__: animal\n};\n\nconsole.log(rabbit.eats); // true`
      }
    ]
  },
  react: {
    name: 'React',
    icon: <SiReact />,
    color: 'text-cyan-400',
    description: 'A JavaScript library for building user interfaces. React makes it painless to create interactive UIs.',
    sections: [
      {
        title: 'Virtual DOM',
        content: 'React creates an in-memory data structure cache, computes the resulting differences, and then updates the browser\'s displayed DOM efficiently. This process is called reconciliation. It enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state.',
        code: `// React updates only what's necessary`
      },
      {
        title: 'Hooks',
        content: 'Hooks are functions that let you "hook into" React state and lifecycle features from function components. Hooks allow you to reuse stateful logic without changing your component hierarchy.',
        code: `import { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = \`You clicked \${count} times\`;\n  });\n}`
      }
    ]
  },
  python: {
    name: 'Python',
    icon: <SiPython />,
    color: 'text-blue-500',
    description: 'Python is an interpreted, high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.',
    sections: [
      {
        title: 'Global Interpreter Lock (GIL)',
        content: 'The Python Global Interpreter Lock or GIL, in simple words, is a mutex (or a lock) that allows only one thread to hold the control of the Python interpreter. This means that only one thread can be in a state of execution at any point in time.',
        code: `# Threading in Python is limited by GIL for CPU-bound tasks`
      },
      {
        title: 'List Comprehensions',
        content: 'List comprehensions provide a concise way to create lists. Common applications are to make new lists where each element is the result of some operations applied to each member of another sequence or iterable.',
        code: `squares = [x**2 for x in range(10)]\n# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]`
      }
    ]
  },
  go: {
    name: 'Go',
    icon: <SiGo />,
    color: 'text-cyan-300',
    description: 'Go is a statically typed, compiled programming language designed at Google. It is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.',
    sections: [
      {
        title: 'Goroutines',
        content: 'A goroutine is a lightweight thread managed by the Go runtime. They are extremely cheap compared to OS threads.',
        code: `go f(x, y, z)`
      },
      {
        title: 'Channels',
        content: 'Channels are a typed conduit through which you can send and receive values with the channel operator, <-.',
        code: `ch <- v    // Send v to channel ch.\nv := <-ch  // Receive from ch, and assign value to v.`
      }
    ]
  },
  rust: {
    name: 'Rust',
    icon: <SiRust />,
    color: 'text-orange-500',
    description: 'Rust is a multi-paradigm, general-purpose programming language designed for performance and safety, especially safe concurrency.',
    sections: [
      {
        title: 'Ownership',
        content: 'Ownership is a set of rules that govern how a Rust program manages memory. If the rules are violated, the program will not compile.',
        code: `let s1 = String::from("hello");\nlet s2 = s1;\n// println!("{}, world!", s1); // Validation Error: s1 moved to s2`
      },
      {
        title: 'Borrowing',
        content: 'References allow you to refer to some value without taking ownership of it. We call having references as distinct from owning "borrowing".',
        code: `fn calculate_length(s: &String) -> usize {\n  s.len()\n}`
      }
    ]
  },
  sql: {
    name: 'SQL',
    icon: <SiPostgresql />,
    color: 'text-blue-300',
    description: 'Structured Query Language is a domain-specific language used in programming and designed for managing data held in a relational database management system.',
    sections: [
      {
        title: 'ACID Properties',
        content: 'ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties of database transactions intended to guarantee data validity despite errors, power failures, and other mishaps.',
        code: `-- Transaction example\nBEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;`
      },
      {
        title: 'Indexing',
        content: 'Indexes are special lookup tables that the database search engine can use to speed up data retrieval. Simply put, an index is a pointer to data in a table.',
        code: `CREATE INDEX idx_lastname ON employees (lastname);`
      }
    ]
  },
  java: {
    name: 'Java',
    icon: <FaJava />,
    color: 'text-orange-600',
    description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
    sections: [
      { title: 'JVM', content: 'Java Virtual Machine (JVM) is essentially a virtual computer that enables a computer to run Java programs as well as programs written in other languages that are also compiled to Java bytecode.', code: 'java MyClass' },
      { title: 'Garbage Collection', content: 'Java has automatic garbage collection, which is the process of looking at heap memory, identifying which objects are in use and which are not, and deleting the unused objects.', code: 'System.gc(); // Suggestion only' }
    ]
  },
  cpp: {
    name: 'C++',
    icon: <SiCplusplus />,
    color: 'text-blue-700',
    description: 'C++ is a high-level general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.',
    sections: [
      { title: 'Pointers', content: 'A pointer is a variable whose value is the address of another variable, i.e., direct address of the memory location.', code: 'int *ip; // pointer to an integer' },
      { title: 'RAII', content: 'Resource Acquisition Is Initialization is a programming idiom used in C++ where resource allocation is tied to object lifetime.', code: 'std::lock_guard<std::mutex> lock(mutex);' }
    ]
  },
  typescript: {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: 'text-blue-600',
    description: 'TypeScript is a syntactic superset of JavaScript which adds static typing.',
    sections: [
      { title: 'Interfaces', content: 'One of TypeScript\'s core principles is that type checking focuses on the shape that values have. This is sometimes called "duck typing" or "structural subtyping".', code: 'interface Person {\n  firstName: string;\n  lastName: string;\n}' },
      { title: 'Generics', content: 'Generics provide a way to create reusable components. A component can work with a variety of types rather than a single one.', code: 'function identity<T>(arg: T): T {\n  return arg;\n}' }
    ]
  }
};

const LanguageNotes = () => {
  const { id } = useParams();
  const langKey = id.toLowerCase().replace('c++', 'cpp').replace('.', '');
  // Mapping special cases if needed.
  // We will map "Vue.js" -> "vuejs" but our data uses "vuejs" ? no, I need to add more or handle default.

  // Minimal fallback if data is missing
  const data = notesData[langKey] || notesData[langKey.split('-')[0]] || {
    name: id,
    icon: <FiCode />,
    color: 'text-white',
    description: 'Detailed notes coming soon for this language.',
    sections: []
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans flex flex-col selection:bg-[#caff33] selection:text-black">
      <Navbar />

      <main className="flex-1 pt-32 px-6 pb-20 w-full max-w-5xl mx-auto">
        <Link to="/languages" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#caff33] mb-8 transition-colors group">
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Languages
        </Link>

        {/* Header */}
        <div className="flex items-start gap-6 mb-12 border-b border-white/5 pb-12">
          <div className={`p-6 rounded-2xl bg-[#111] border border-white/10 ${data.color} text-5xl shadow-2xl shadow-${data.color.split('-')[1]}-500/10`}>
            {data.icon}
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-white">
              {data.name} <span className="text-[#caff33] text-2xl font-normal align-top">Notes</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              {data.description}
            </p>
          </div>
        </div>

        {/* Content Sections */}
        {data.sections.length > 0 ? (
          <div className="space-y-16">
            {data.sections.map((section, index) => (
              <div key={index} className="group relative">
                {/* Vertical connecting line for timeline effect */}
                {index !== data.sections.length - 1 && (
                  <div className="absolute left-[24px] top-12 bottom-[-64px] w-px bg-white/10 group-hover:bg-[#caff33]/30 transition-colors pointer-events-none" />
                )}

                <div className="flex items-start gap-6 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/10 text-ossium-accent flex items-center justify-center font-mono font-bold text-lg shrink-0 group-hover:border-ossium-accent/50 group-hover:scale-110 transition-all duration-300 shadow-lg z-10">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-ossium-accent transition-colors">
                      {section.title}
                    </h2>

                    <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-4xl">
                      {section.content}
                    </p>

                    {section.code && (
                      <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0c0c0c] shadow-2xl group-hover:border-white/20 transition-all duration-300">
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                          </div>
                          <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Snippet</span>
                        </div>

                        <div className="p-6 overflow-x-auto">
                          <pre className="font-mono text-sm text-gray-200 leading-loose">
                            <code>{section.code}</code>
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#111] border border-white/5 rounded-xl p-16 text-center">
            <FiTerminal className="mx-auto text-gray-700 mb-6" size={64} />
            <h3 className="text-2xl font-bold text-white mb-2">Content Under Development</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We are working on detailed notes for {data.name}. This section will be updated soon with examples and best practices.
            </p>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
};

export default LanguageNotes;
