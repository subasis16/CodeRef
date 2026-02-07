
import React from 'react';
import {
  SiTailwindcss, SiNodedotjs, SiGoogle, SiGithub, SiStripe
} from 'react-icons/si';
import { FiCheckCircle, FiSettings } from 'react-icons/fi';

export const guidesData = [
  {
    id: 'tailwind',
    title: "Tailwind CSS Integration",
    description: "Utility-first CSS framework for rapid UI development. Learn how to install and configure it in Vite/React projects.",
    icon: <SiTailwindcss className="text-cyan-400" />,
    tags: ["CSS", "Frontend", "Vite"],
    steps: [
      {
        title: "Install Dependencies",
        desc: "Install tailwindcss and its peer dependencies via npm.",
        code: "npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p"
      },
      {
        title: "Configure Template Paths",
        desc: "Add the paths to all of your template files in your tailwind.config.js file.",
        code: `/** @type {import('tailwindcss').Config} */\nexport default {\n  content: [\n    "./index.html",\n    "./src/**/*.{js,ts,jsx,tsx}",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}`
      },
      {
        title: "Add Tailwind Directives",
        desc: "Add the @tailwind directives for each of Tailwind's layers to your main CSS file.",
        code: "@tailwind base;\n@tailwind components;\n@tailwind utilities;"
      }
    ],
    resources: [
      { title: "Official Installation Guide", url: "https://tailwindcss.com/docs/guides/vite", desc: "The definitive guide for Vite projects." },
      { title: "Tailwind Cheat Sheet", url: "https://nerdcave.com/tailwind-cheat-sheet", desc: "Quick class lookup property reference." }
    ]
  },
  {
    id: 'node-server',
    title: "Node.js Express Server",
    description: "Setup a robust backend API using Node.js and Express with ES Module support.",
    icon: <SiNodedotjs className="text-green-500" />,
    tags: ["Backend", "API", "JavaScript"],
    steps: [
      {
        title: "Initialize Project",
        desc: "Create a package.json file and set type to module.",
        code: "npm init -y\nnpm pkg set type=\"module\""
      },
      {
        title: "Install Express & CORS",
        desc: "Install the core framework and middleware.",
        code: "npm install express cors dotenv"
      },
      {
        title: "Create Server Entry",
        desc: "Basic index.js setup with routes and error handling.",
        code: `import express from 'express';\nimport cors from 'cors';\nimport dotenv from 'dotenv';\n\ndotenv.config();\nconst app = express();\n\napp.use(cors());\napp.use(express.json());\n\napp.get('/', (req, res) => res.send('API Running'));\n\nconst PORT = process.env.PORT || 5000;\napp.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));`
      }
    ]
  },
  {
    id: 'google-auth',
    title: "Google Authentication",
    description: "Implement 'Sign in with Google' using Supabase Auth or standard OAuth 2.0 flow.",
    icon: <SiGoogle className="text-white" />,
    tags: ["Auth", "Security", "OAuth"],
    steps: [
      {
        title: "Google Cloud Console",
        desc: "Create a new project in Google Cloud Console -> APIs & Services -> Credentials. Configure OAuth Consent Screen.",
        code: "Authorized Redirect URIs:\nhttps://<your-project>.supabase.co/auth/v1/callback"
      },
      {
        title: "Get Credentials",
        desc: "Create new OAuth 2.0 Client ID (Web Application). Copy Client ID and Client Secret.",
        code: "Client ID: xxxxx.apps.googleusercontent.com\nClient Secret: GOCSPX-xxxxx"
      },
      {
        title: "Supabase Configuration",
        desc: "Go to Supabase Dashboard -> Authentication -> Providers. Enable Google and paste keys.",
        code: "Enable Google: ON\nPaste Client ID and Secret.\nSave."
      },
      {
        title: "Frontend Implementation",
        desc: "Call the signInWithOAuth method.",
        code: `const { data, error } = await supabase.auth.signInWithOAuth({\n  provider: 'google',\n});`
      }
    ]
  },
  {
    id: 'github-auth',
    title: "GitHub Authentication",
    description: "Enable developer login via GitHub OAuth Apps.",
    icon: <SiGithub className="text-white" />,
    tags: ["Auth", "DevTools"],
    steps: [
      {
        title: "Register OAuth App",
        desc: "GitHub Settings -> Developer Settings -> OAuth Apps -> New OAuth App.",
        code: "Homepage URL: http://localhost:5173\nCallback URL: https://<project>.supabase.co/auth/v1/callback"
      },
      {
        title: "Generate Keys",
        desc: "Generate a new Client Secret. Copy it along with the Client ID.",
        code: "Client ID: Iv1.xxxx\nClient Secret: xxxx"
      },
      {
        title: "Connect Provider",
        desc: "Add credentials to your Auth provider settings (Supabase, Firebase, or NextAuth).",
        code: "// Supabase Login\nsupabase.auth.signInWithOAuth({\n  provider: 'github'\n})"
      }
    ]
  },
  {
    id: 'payments',
    title: "Stripe Payment Gateway",
    description: "Accept payments globally using Stripe Checkout.",
    icon: <SiStripe className="text-[#635BFF]" />,
    tags: ["Payments", "SaaS", "E-commerce"],
    steps: [
      {
        title: "Create Stripe Account",
        desc: "Register at dashboard.stripe.com. Get Publishable Key and Secret Key.",
        code: "pk_test_...\nsk_test_..."
      },
      {
        title: "Backend Checkout Session",
        desc: "Create a POST endpoint to generate a session URL.",
        code: `const session = await stripe.checkout.sessions.create({\n  line_items: [{ price: 'price_id', quantity: 1 }],\n  mode: 'payment',\n  success_url: \`\${YOUR_DOMAIN}/success\`,\n  cancel_url: \`\${YOUR_DOMAIN}/cancel\`,\n});\nres.json({ url: session.url });`
      },
      {
        title: "Frontend Redirect",
        desc: "Redirect the user to the Stripe hosted checkout page.",
        code: `const handleCheckout = async () => {\n  const res = await fetch('/api/create-checkout-session', { method: 'POST' });\n  const { url } = await res.json();\n  window.location.href = url;\n}`
      }
    ]
  }
];
