
import React from 'react';
import {
  SiReact, SiJavascript, SiNodedotjs, SiGit,
  SiPython, SiDocker, SiCss3, SiTypescript
} from 'react-icons/si';

export const errorsData = [
  // Beginner
  {
    id: 1,
    tech: 'Python',
    level: 'Beginner',
    error: 'IndentationError: unexpected indent',
    cause: 'Mixing tabs and spaces or inconsistent indentation levels in your script.',
    fix: 'Use spaces only (standard is 4). Enable "Show Whitespace" in your editor.',
    icon: <SiPython />,
    color: 'text-blue-500'
  },
  {
    id: 2,
    tech: 'JavaScript',
    level: 'Beginner',
    error: "Cannot read properties of undefined (reading 'map')",
    cause: 'Attempting to use .map() on a variable that is currently null or undefined.',
    fix: 'Use optional chaining: data?.map(...) or fallback: (data || []).map(...)',
    icon: <SiJavascript />,
    color: 'text-yellow-400'
  },
  {
    id: 3,
    tech: 'CSS',
    level: 'Beginner',
    error: 'z-index not working',
    cause: 'The element has default position: static, which ignores z-index properties.',
    fix: 'Set position: relative, absolute, or fixed on the element.',
    icon: <SiCss3 />,
    color: 'text-purple-400'
  },

  // Intermediate
  {
    id: 4,
    tech: 'React',
    level: 'Intermediate',
    error: 'Hydration failed because the initial UI does not match server rendered HTML',
    cause: 'Rendering data that differs on server/client (e.g., Date.now(), window).',
    fix: 'Move client-specific logic into a useEffect hook.',
    icon: <SiReact />,
    color: 'text-blue-400'
  },
  {
    id: 5,
    tech: 'Node.js',
    level: 'Intermediate',
    error: 'Error: distinct address already in use :::3000',
    cause: 'Port 3000 is occupied by a stuck process or another running server.',
    fix: 'npx kill-port 3000 (or loops through lsof -i :3000)',
    icon: <SiNodedotjs />,
    color: 'text-green-500'
  },
  {
    id: 6,
    tech: 'Git',
    level: 'Intermediate',
    error: 'fatal: refusing to merge unrelated histories',
    cause: 'Merging two repos that started independently (common when initing a new repo vs cloning).',
    fix: 'git pull origin main --allow-unrelated-histories',
    icon: <SiGit />,
    color: 'text-orange-500'
  },

  // Advanced / Expert
  {
    id: 7,
    tech: 'React',
    level: 'Advanced',
    error: 'Error: Too many re-renders. React limits the number of renders...',
    cause: 'State update is triggering a re-render which triggers the update again immediately.',
    fix: 'Ensure setFunction is not called directly in the component body.',
    icon: <SiReact />,
    color: 'text-cyan-400'
  },
  {
    id: 8,
    tech: 'Node.js',
    level: 'Advanced',
    error: 'FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed',
    cause: 'The application consumed more memory than the default V8 limit (approx 1.5GB).',
    fix: 'node --max-old-space-size=4096 app.js',
    icon: <SiNodedotjs />,
    color: 'text-green-500'
  },
  {
    id: 9,
    tech: 'Docker',
    level: 'Advanced',
    error: 'exec user process caused: exec format error',
    cause: 'Architecture mismatch (e.g., trying to run an ARM64 M1 image on an x86 server).',
    fix: 'docker buildx build --platform linux/amd64 ...',
    icon: <SiDocker />,
    color: 'text-blue-400'
  },
  {
    id: 10,
    tech: 'TypeScript',
    level: 'Expert',
    error: 'Type instantiation is excessively deep and possibly infinite.',
    cause: 'Recursive type definitions creating an infinite loop in the compiler.',
    fix: 'Use an interface to break recursion or simplify the utility type.',
    icon: <SiTypescript />,
    color: 'text-blue-600'
  }
];
