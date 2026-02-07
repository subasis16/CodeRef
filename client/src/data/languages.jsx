
import React from 'react';
import {
  SiJavascript, SiReact, SiPython, SiGo,
  SiRust, SiCplusplus, SiTypescript, SiPhp,
  SiRuby, SiSwift, SiKotlin, SiPostgresql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiLayout } from 'react-icons/fi';

export const languagesData = [
  {
    id: 1,
    name: 'JavaScript',
    icon: <SiJavascript />,
    type: 'Language',
    purpose: 'Web Development, Server-side',
    syntax: 'const x = 10;',
    structure: '/src, /public, package.json',
    mistakes: 'Implicit type coercion',
    color: 'text-yellow-400',
    expert_tip: "Use WeakMap for private class data to avoid memory leaks."
  },
  {
    id: 2,
    name: 'React',
    icon: <SiReact />,
    type: 'Framework',
    purpose: 'Building User Interfaces',
    syntax: 'const App = () => <div />;',
    structure: '/components, /hooks',
    mistakes: 'Mutating state directly',
    color: 'text-cyan-400',
    expert_tip: "Use useLayoutEffect for DOM measurements to prevent flicker."
  },
  {
    id: 3,
    name: 'Python',
    icon: <SiPython />,
    type: 'Language',
    purpose: 'Data Science, Backend',
    syntax: 'def func(): return "Hi"',
    structure: 'requirements.txt, /venv',
    mistakes: 'Indentation errors',
    color: 'text-blue-500',
    expert_tip: "Use __slots__ to save memory in classes with many instances."
  },
  {
    id: 4,
    name: 'Go',
    icon: <SiGo />,
    type: 'Language',
    purpose: 'Cloud, Microservices',
    syntax: 'func main() { ... }',
    structure: 'go.mod, /cmd, /pkg',
    mistakes: 'Unused variables strictness',
    color: 'text-cyan-300',
    expert_tip: "Use buffered channels to limit concurrency without blocking."
  },
  {
    id: 5,
    name: 'Vue.js',
    icon: <FiLayout />,
    type: 'Framework',
    purpose: 'Progressive Web Apps',
    syntax: '<template>{{msg}}</template>',
    structure: '/components, App.vue',
    mistakes: 'Reactivity pitfalls',
    color: 'text-green-500',
    expert_tip: "Use shallowRef for large objects to skip deep reactivity cost."
  },
  {
    id: 6,
    name: 'Rust',
    icon: <SiRust />,
    type: 'Language',
    purpose: 'Systems, WebAssembly',
    syntax: 'fn main() { ... }',
    structure: 'Cargo.toml, /src',
    mistakes: 'Borrow checker struggles',
    color: 'text-orange-500',
    expert_tip: "Use Interior Mutability (RefCell) for mocking in tests."
  },
  {
    id: 7,
    name: 'Java',
    icon: <FaJava />,
    type: 'Language',
    purpose: 'Enterprise, Android',
    syntax: 'System.out.println("Hi");',
    structure: '/src/main/java, pom.xml',
    mistakes: 'NullPointerException',
    color: 'text-orange-600',
    expert_tip: "Use CompletableFuture for non-blocking asynchronous chains."
  },
  {
    id: 8,
    name: 'C++',
    icon: <SiCplusplus />,
    type: 'Language',
    purpose: 'Game Dev, Systems',
    syntax: 'std::cout << "Hi";',
    structure: 'CMakeLists.txt, /src',
    mistakes: 'Memory leaks, Pointers',
    color: 'text-blue-700',
    expert_tip: "Use RAII (Resource Acquisition Is Initialization) for resource safety."
  },
  {
    id: 9,
    name: 'TypeScript',
    icon: <SiTypescript />,
    type: 'Language',
    purpose: 'Large Scale Web Apps',
    syntax: 'const x: number = 10;',
    structure: 'tsconfig.json, /src',
    mistakes: 'Any type overuse',
    color: 'text-blue-600',
    expert_tip: "Use discriminating unions for type-safe state reduction."
  },
  {
    id: 10,
    name: 'PHP',
    icon: <SiPhp />,
    type: 'Language',
    purpose: 'Server-side Web',
    syntax: 'echo "Hello";',
    structure: 'composer.json, /vendor',
    mistakes: 'Inconsistent naming',
    color: 'text-indigo-400',
    expert_tip: "Use Generator functions to process large datasets memory-efficiently."
  },
  {
    id: 11,
    name: 'Ruby',
    icon: <SiRuby />,
    type: 'Language',
    purpose: 'Web (Rails), Scripting',
    syntax: 'puts "Hello"',
    structure: 'Gemfile, Rakefile',
    mistakes: 'Overuse of magic',
    color: 'text-red-500',
    expert_tip: "Use memoization ( ||= ) to cache expensive method results."
  },
  {
    id: 12,
    name: 'Swift',
    icon: <SiSwift />,
    type: 'Language',
    purpose: 'Apple Ecosystem',
    syntax: 'print("Hello")',
    structure: 'Package.swift, /Sources',
    mistakes: 'Strong reference cycles',
    color: 'text-orange-500',
    expert_tip: "Use copy-on-write optimization for custom value types."
  },
  {
    id: 13,
    name: 'Kotlin',
    icon: <SiKotlin />,
    type: 'Language',
    purpose: 'Android, Multiplatform',
    syntax: 'println("Hello")',
    structure: 'build.gradle.kts, /src',
    mistakes: 'Null safety assumptions',
    color: 'text-purple-500',
    expert_tip: "Use inline functions for high-order functions to reduce overhead."
  },
  {
    id: 14,
    name: 'SQL',
    icon: <SiPostgresql />,
    type: 'Language',
    purpose: 'Database Management',
    syntax: 'SELECT * FROM users;',
    structure: 'schema.sql, migrations',
    mistakes: 'Injection vulnerability',
    color: 'text-blue-300',
    expert_tip: "Use EXPLAIN ANALYZE to optimize query execution plans."
  }
];
