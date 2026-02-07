
import React from 'react';
import {
  SiPostman, SiEslint, SiPrettier, SiDocker, SiFigma,
  SiVim, SiMongodb, SiKubernetes,
  SiGit
} from 'react-icons/si';
import { FiCode, FiGlobe, FiMoon, FiTerminal, FiZap } from 'react-icons/fi';

export const toolsData = [
  {
    id: 1,
    name: 'Postman',
    icon: <SiPostman />,
    category: 'API Testing',
    desc: 'Platform for building and using APIs. Simplifies each step of the lifecycle.',
    install: 'Download desktop app',
    workflow: 'Create Collection -> Add Request -> Send -> Inspect',
    link: 'https://www.postman.com/'
  },
  {
    id: 2,
    name: 'ESLint',
    icon: <SiEslint />,
    category: 'Linter',
    desc: 'Statically analyzes your code to quickly find problems.',
    install: 'npm install eslint --save-dev',
    workflow: 'npx eslint --init -> Configure Rules -> Run Lint',
    link: 'https://eslint.org/'
  },
  {
    id: 3,
    name: 'Prettier',
    icon: <SiPrettier />,
    category: 'Formatter',
    desc: 'An opinionated code formatter that supports many languages.',
    install: 'npm i -D prettier',
    workflow: 'Create .prettierrc -> Format on Save (VS Code)',
    link: 'https://prettier.io/'
  },
  {
    id: 4,
    name: 'Docker Desktop',
    icon: <SiDocker />,
    category: 'DevOps',
    desc: 'The fastest way to containerize applications.',
    install: 'Download from docker.com',
    workflow: 'Write Dockerfile -> docker build -> docker run',
    link: 'https://www.docker.com/products/docker-desktop/'
  },
  {
    id: 5,
    name: 'GitLens',
    icon: <SiGit />,
    category: 'VS Code Extension',
    desc: 'Supercharge Git inside VS Code. Visualize code authorship.',
    install: 'Install from Marketplace',
    workflow: 'Open file -> Hover line -> See commit history',
    link: 'https://www.gitkraken.com/gitlens'
  },
  {
    id: 8,
    name: 'Figma',
    icon: <SiFigma />,
    category: 'Design',
    desc: 'The collaborative interface design tool.',
    install: 'Web or Desktop App',
    workflow: 'Design UI -> Dev Mode -> Copy CSS',
    link: 'https://www.figma.com/'
  },
  {
    id: 9,
    name: 'VS Code',
    icon: <FiCode />,
    category: 'Editor',
    desc: 'Code editing. Redefined. The world\'s best editor.',
    install: 'code.visualstudio.com',
    workflow: 'Cmd+P (Files) -> Cmd+Shift+P (Command Palette)',
    link: 'https://code.visualstudio.com/'
  },
  {
    id: 10,
    name: 'Vim',
    icon: <SiVim />,
    category: 'Editor',
    desc: 'Highly configurable text editor built to make creating text efficient.',
    install: 'sudo apt install vim',
    workflow: ':w (save) -> :q (quit) -> i (insert)',
    link: 'https://www.vim.org/'
  },
  {
    id: 11,
    name: 'Chrome DevTools',
    icon: <FiGlobe />,
    category: 'Debug',
    desc: 'Set of web developer tools built directly into the browser.',
    install: 'Pre-installed',
    workflow: 'F12 -> Elements -> Console -> Network',
    link: 'https://developer.chrome.com/docs/devtools/'
  },
  {
    id: 12,
    name: 'Insomnia',
    icon: <FiMoon />,
    category: 'API Client',
    desc: 'The open-source, cross-platform API client for GraphQL/REST.',
    install: 'Download from insomnia.rest',
    workflow: 'New Request -> Select Method -> Send',
    link: 'https://insomnia.rest/'
  },
  {
    id: 13,
    name: 'MongoDB Compass',
    icon: <SiMongodb />,
    category: 'GUI',
    desc: 'The GUI for MongoDB. Visually explore your data.',
    install: 'Download from mongodb.com',
    workflow: 'Connect -> Select DB -> Aggregate',
    link: 'https://www.mongodb.com/products/tools/compass'
  },
  {
    id: 14,
    name: 'K8s Lens',
    icon: <SiKubernetes />,
    category: 'DevOps GUI',
    desc: 'The Kubernetes IDE. Monitor clusters in real-time.',
    install: 'Download from k8slens.dev',
    workflow: 'Add Cluster -> View Pods -> View Logs',
    link: 'https://k8slens.dev/'
  },
  {
    id: 15,
    name: 'Oh My Zsh',
    icon: <FiTerminal />,
    category: 'Terminal',
    desc: 'A framework for managing your Zsh configuration.',
    install: 'sh -c "$(curl -fsSL...)"',
    workflow: 'plugins=(git docker) -> source .zshrc',
    link: 'https://ohmyz.sh/'
  },
  {
    id: 16,
    name: 'Vite',
    icon: <FiZap />,
    category: 'Build Tool',
    desc: 'Next Generation Frontend Tooling. Instant Server Start.',
    install: 'npm create vite@latest',
    workflow: 'npm run dev -> HMR updates -> npm run build',
    link: 'https://vitejs.dev/'
  }
];
