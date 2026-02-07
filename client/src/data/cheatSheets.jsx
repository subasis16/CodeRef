
import React from 'react';
import {
  SiNodedotjs, SiReact, SiPython, SiGit, SiExpress, SiDocker, SiTypescript,
  SiCss3, SiVim, SiPostgresql, SiCplusplus, SiGo, SiRust,
  SiPhp, SiRuby, SiSwift, SiKotlin, SiMongodb, SiRedis, SiKubernetes,
  SiJenkins, SiTerraform, SiAnsible, SiHtml5, SiSass,
  SiTailwindcss, SiAngular, SiSvelte, SiGraphql,
  SiLinux, SiNpm
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiSearch, FiCode, FiTerminal, FiDatabase, FiServer, FiGlobe, FiCloud, FiLayout, FiZap } from 'react-icons/fi';

export const sheets = [
  { id: 'nodejs', name: 'Node.js', category: 'Backend', version: 'v20.x', icon: <SiNodedotjs />, color: 'text-green-500', desc: 'File system, Streams, HTTP, Events.' },
  { id: 'react', name: 'React', category: 'Frontend', version: 'v19', icon: <SiReact />, color: 'text-blue-400', desc: 'Hooks, Components, Context, Refs.' },
  { id: 'python', name: 'Python', category: 'Language', version: '3.12', icon: <SiPython />, color: 'text-yellow-400', desc: 'Lists, Dicts, String methods, Async.' },
  { id: 'git', name: 'Git', category: 'Version Control', version: '2.4', icon: <SiGit />, color: 'text-orange-500', desc: 'Branching, Merging, Rebase, Stash.' },
  { id: 'express', name: 'Express', category: 'Backend', version: 'v5.0', icon: <SiExpress />, color: 'text-white', desc: 'Routing, Middleware, Request/Response.' },
  { id: 'docker', name: 'Docker', category: 'DevOps', version: 'v24', icon: <SiDocker />, color: 'text-blue-500', desc: 'Containers, Images, Compose, Network.' },
  { id: 'typescript', name: 'TypeScript', category: 'Language', version: 'v5.3', icon: <SiTypescript />, color: 'text-blue-600', desc: 'Types, Interfaces, Generics, Utility Types.' },
  { id: 'css', name: 'CSS Flexbox', category: 'Frontend', version: 'Lev 3', icon: <SiCss3 />, color: 'text-blue-400', desc: 'Container properties, Item alignment.' },
  { id: 'bash', name: 'Bash', category: 'Terminal', version: 'v5', icon: <FiTerminal />, color: 'text-white', desc: 'Shell expansion, variables, loops.' },
  { id: 'vim', name: 'Vim', category: 'Editor', version: '9.0', icon: <SiVim />, color: 'text-green-400', desc: 'Motions, Operators, Modes, Registers.' },
  { id: 'sql', name: 'SQL', category: 'Database', version: 'Std', icon: <SiPostgresql />, color: 'text-blue-300', desc: 'Joins, Aggregates, keys, constraints.' },
  { id: 'regex', name: 'Regex', category: 'Tool', version: 'PCRE', icon: <FiCode />, color: 'text-pink-400', desc: 'Anchors, Quantifiers, Groups, Lookarounds.' },

  // New Additions
  { id: 'java', name: 'Java', category: 'Language', version: '21', icon: <FaJava />, color: 'text-orange-600', desc: 'Streams, OOP, Spring Boot basics.' },
  { id: 'cpp', name: 'C++', category: 'Language', version: '20', icon: <SiCplusplus />, color: 'text-blue-700', desc: 'Pointers, References, STL, Memory Management.' },
  { id: 'go', name: 'Go', category: 'Language', version: '1.22', icon: <SiGo />, color: 'text-cyan-400', desc: 'Goroutines, Channels, Interfaces, Error handling.' },
  { id: 'rust', name: 'Rust', category: 'Language', version: '1.75', icon: <SiRust />, color: 'text-orange-500', desc: 'Ownership, Borrowing, Lifetimes, Cargo.' },
  { id: 'php', name: 'PHP', category: 'Backend', version: '8.3', icon: <SiPhp />, color: 'text-indigo-400', desc: 'Arrays, Strings, PDO, Composer.' },
  { id: 'ruby', name: 'Ruby', category: 'Language', version: '3.3', icon: <SiRuby />, color: 'text-red-500', desc: 'Blocks, Procs, Metaprogramming, Rails basics.' },
  { id: 'swift', name: 'Swift', category: 'Mobile', version: '5.9', icon: <SiSwift />, color: 'text-orange-500', desc: 'Optionals, Closures, SwiftUI basics.' },
  { id: 'kotlin', name: 'Kotlin', category: 'Mobile', version: '1.9', icon: <SiKotlin />, color: 'text-purple-500', desc: 'Coroutines, Null Safety, Extensions.' },

  { id: 'mongodb', name: 'MongoDB', category: 'Database', version: 'v7.0', icon: <SiMongodb />, color: 'text-green-500', desc: 'CRUD, Aggregation Pipeline, Indexing.' },
  { id: 'redis', name: 'Redis', category: 'Database', version: 'v7.2', icon: <SiRedis />, color: 'text-red-500', desc: 'Strings, Hashes, Lists, Sets, Pub/Sub.' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'Database', version: 'v16', icon: <SiPostgresql />, color: 'text-blue-400', desc: 'JSONB, CTEs, Window Functions, Triggers.' },

  { id: 'kubernetes', name: 'Kubernetes', category: 'DevOps', version: 'v1.29', icon: <SiKubernetes />, color: 'text-blue-600', desc: 'Pods, Services, Deployments, ConfigMaps.' },
  { id: 'aws', name: 'AWS CLI', category: 'Cloud', version: 'v2', icon: <FiCloud />, color: 'text-yellow-600', desc: 'S3, EC2, Lambda, IAM commands.' },
  { id: 'jenkins', name: 'Jenkins', category: 'DevOps', version: 'LTS', icon: <SiJenkins />, color: 'text-red-400', desc: 'Pipelines, Jenkinsfile syntax, Groovy.' },
  { id: 'terraform', name: 'Terraform', category: 'DevOps', version: '1.7', icon: <SiTerraform />, color: 'text-purple-400', desc: 'Resources, Modules, State, Providers.' },
  { id: 'ansible', name: 'Ansible', category: 'DevOps', version: '2.16', icon: <SiAnsible />, color: 'text-red-600', desc: 'Playbooks, Roles, Inventory, Modules.' },

  { id: 'html', name: 'HTML5', category: 'Frontend', version: '5.2', icon: <SiHtml5 />, color: 'text-orange-500', desc: 'Semantic tags, Forms, Canvas, Accessibility.' },
  { id: 'sass', name: 'SASS/SCSS', category: 'Frontend', version: '1.70', icon: <SiSass />, color: 'text-pink-500', desc: 'Variables, Mixins, Nesting, Functions.' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend', version: 'v3.4', icon: <SiTailwindcss />, color: 'text-cyan-400', desc: 'Utility classes, Config, Directives.' },
  { id: 'vue', name: 'Vue.js', category: 'Frontend', version: 'v3', icon: <FiLayout />, color: 'text-green-500', desc: 'Reactivity, Composition API, Directives.' },
  { id: 'angular', name: 'Angular', category: 'Frontend', version: 'v17', icon: <SiAngular />, color: 'text-red-600', desc: 'Components, Services, RxJS, Signals.' },
  { id: 'svelte', name: 'Svelte', category: 'Frontend', version: 'v4', icon: <SiSvelte />, color: 'text-orange-600', desc: 'Reactivity, Stores, Transitions, Actions.' },
  { id: 'nextjs', name: 'Next.js', category: 'Framework', version: 'v14', icon: <FiLayout />, color: 'text-white', desc: 'App Router, Server Actions, Middleware.' },
  { id: 'graphql', name: 'GraphQL', category: 'API', version: 'Spec', icon: <SiGraphql />, color: 'text-pink-600', desc: 'Queries, Mutations, Schemas, Resolvers.' },

  { id: 'linux', name: 'Linux Common', category: 'Terminal', version: 'Std', icon: <SiLinux />, color: 'text-yellow-200', desc: 'Permissions, Processes, Networking, Grep/Sed/Awk.' },
  { id: 'powershell', name: 'PowerShell', category: 'Terminal', version: 'v7', icon: <FiTerminal />, color: 'text-blue-500', desc: 'Cmdlets, Piping, Objects, Scripting.' },
  { id: 'npm', name: 'NPM/Yarn', category: 'Tool', version: 'v10', icon: <SiNpm />, color: 'text-red-500', desc: 'install, run, publish, versioning.' },

  // Deep Dive / Specific Guides
  { id: 'react-hooks', name: 'React Hooks', category: 'Frontend', version: 'v18', icon: <SiReact />, color: 'text-blue-400', desc: 'Complete guide to useState, useEffect, and custom hooks.' },
  { id: 'git-commands', name: 'Git Commands', category: 'DevOps', version: '2.4x', icon: <SiGit />, color: 'text-orange-500', desc: 'Essential git commands for daily workflow and recovery.' },
  { id: 'docker-compose', name: 'Docker Compose', category: 'DevOps', version: 'v2.24', icon: <SiDocker />, color: 'text-blue-500', desc: 'Production-ready docker-compose templates for microservices.' },
  { id: 'python-async', name: 'Python Async', category: 'Backend', version: '3.11+', icon: <SiPython />, color: 'text-yellow-400', desc: 'Deep dive into asyncio, coroutines, and event loops.' },
  { id: 'css-grid', name: 'CSS Grid', category: 'Frontend', version: 'L3', icon: <SiCss3 />, color: 'text-blue-400', desc: 'Copy-paste ready CSS grid snippets for modern web layouts.' },
  { id: 'go-concurrency', name: 'Go Concurrency', category: 'Backend', version: '1.21', icon: <SiGo />, color: 'text-cyan-400', desc: 'Visual guide to channels, waitgroups, and mutexes in Go.' },
  { id: 'nextjs-handbook', name: 'Next.js Handbook', category: 'Frontend', version: '14.1', icon: <FiLayout />, color: 'text-white', desc: 'Routing, Server Actions, and new App Router patterns.' },
  { id: 'linux-perm', name: 'Linux Permissions', category: 'DevOps', version: 'Std', icon: <SiLinux />, color: 'text-yellow-200', desc: 'Chmod, Chown, and file system permissions explained.' }
];
