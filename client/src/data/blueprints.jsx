
import React from 'react';
import {
  SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiNextdotjs,
  SiPostgresql, SiPrisma, SiStripe, SiFirebase, SiRedux,
  SiExpo, SiVuedotjs, SiSupabase, SiPython, SiFastapi,
  SiPytorch, SiAmazonwebservices, SiDocker
} from 'react-icons/si';

export const projects = [
  {
    title: "AI Chat Application",
    description: "A full-stack AI chat interface similar to ChatGPT, featuring real-time streaming, conversation history, and user authentication.",
    image: "/project-architecture.png",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB", "Socket.io"],
    techStack: [
      { name: "React", type: "Frontend", icon: <SiReact className="text-cyan-400" /> },
      { name: "Node.js", type: "Backend", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "MongoDB", type: "Database", icon: <SiMongodb className="text-green-500" /> },
      { name: "Tailwind", type: "Styling", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    apis: [
      { name: "OpenAI API", description: "Used for generating AI responses (GPT-4/3.5) and embeddings." },
      { name: "Firebase Auth", description: "Handles user authentication and session management." },
      { name: "Socket.io", description: "Enables real-time bi-directional communication for streaming responses." }
    ],
    payment: {
      provider: "Stripe",
      details: "Implements subscription models using Stripe Checkout with webhook integration for plan updates."
    },
    fileStructure: `
/root
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatInterface.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Message.jsx
│   │   ├── hooks/
│   │   │   └── useChat.js
│   │   └── services/
│   │       └── api.js
│   └── package.json
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── chatController.js
│   ├── models/
│   │   └── Conversation.js
│   ├── routes/
│   │   └── chatRoutes.js
│   ├── utils/
│   │   └── openai.js
│   └── server.js
└── .env
      `.trim(),
    howItWorks: "The client sends a message via WebSocket or HTTP POST. The Node.js server receives it, validates the user, and forwards the prompt to OpenAI's API. The streaming response is piped back to the client in chunks for a real-time feel. Conversations are stored in MongoDB linked to the user's ID."
  },
  {
    title: "E-Commerce Platform",
    description: "A comprehensive online store with product catalog, cart functionality, secure checkout, and admin dashboard.",
    image: "https://placehold.co/800x400/1e293b/white?text=E-Commerce+Architecture",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Redux"],
    techStack: [
      { name: "Next.js", type: "Full Stack", icon: <SiNextdotjs className="text-white" /> },
      { name: "PostgreSQL", type: "Database", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "Prisma", type: "ORM", icon: <SiPrisma className="text-white" /> },
      { name: "Stripe", type: "Payments", icon: <SiStripe className="text-indigo-400" /> },
    ],
    apis: [
      { name: "Stripe API", description: "Processes credit card payments and manages order sessions." },
      { name: "SendGrid", description: "Sends transactional emails (order confirmation, shipping updates)." },
      { name: "Cloudinary", description: "Host and optimize product images." }
    ],
    payment: {
      provider: "Stripe Connect",
      details: "Handles marketplace payments and vendor payouts. Secure intent creation on server side."
    },
    fileStructure: `
/root
├── app/ (Next.js App Router)
│   ├── (shop)/
│   │   ├── product/[slug]/page.tsx
│   │   └── cart/page.tsx
│   ├── api/
│   │   └── webhook/route.ts
│   └── layout.tsx
├── components/
│   ├── ui/
│   └── cart/
├── lib/
│   ├── prisma.ts
│   └── stripe.ts
├── prisma/
│   └── schema.prisma
└── public/
      `.trim(),
    howItWorks: "Uses Next.js App Router for server-side rendering of product pages for SEO. Cart state is managed locally (Zustand/Redux) and synced to local storage. Checkout redirects to Stripe. Webhooks listen for 'checkout.session.completed' to update order status in PostgreSQL via Prisma."
  },
  {
    title: "Social Media Mobile App",
    description: "A cross-platform mobile application clone of Instagram, featuring feed, stories, real-time chat, and push notifications.",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    techStack: [
      { name: "React Native", type: "Mobile", icon: <SiReact className="text-blue-400" /> },
      { name: "Firebase", type: "Backend", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Redux", type: "State", icon: <SiRedux className="text-purple-500" /> },
      { name: "Expo", type: "Framework", icon: <SiExpo className="text-white" /> },
    ],
    apis: [
      { name: "Firebase Cloud Messaging", description: "Handles push notifications for likes, comments, and messages." },
      { name: "Google Maps API", description: "Used for location tagging in posts." },
      { name: "Algolia", description: "Provides fast, typo-tolerant search for users and hashtags." }
    ],
    payment: {
      provider: "In-App Purchases",
      details: "RevenueCat integration for managing monthly premium subscriptions (Blue Check, exclusive stickers) across iOS and Android."
    },
    fileStructure: `
/root
├── assets/
├── src/
│   ├── components/
│   │   ├── FeedItem.js
│   │   └── StoryCircle.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── ProfileScreen.js
│   │   └── CameraScreen.js
│   ├── navigation/
│   │   └── AppNavigator.js
│   ├── redux/
│   │   └── slices/
│   │       └── authSlice.js
│   └── services/
│       └── firebase.js
├── app.json
└── package.json
      `.trim(),
    howItWorks: "Built with React Native and Expo for rapid cross-platform development. Firebase handles Auth, Firestore (database), and Storage (images/videos). Redux Toolkit manages global state for user session and cached feed data. Real-time updates utilize Firestore snapshots."
  },
  {
    title: "SaaS Productivity Dashboard",
    description: "A Trello-style Kanban task management tool designed for teams, with drag-and-drop functionality and workspace analytics.",
    tags: ["Vue.js", "Supabase", "Tailwind", "Pinia"],
    techStack: [
      { name: "Vue.js", type: "Frontend", icon: <SiVuedotjs className="text-green-500" /> },
      { name: "Supabase", type: "Backend", icon: <SiSupabase className="text-green-400" /> },
      { name: "Tailwind", type: "Styling", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Docker", type: "DevOps", icon: <SiDocker className="text-blue-500" /> },
    ],
    apis: [
      { name: "Supabase Realtime", description: "Broadcasts board updates (card moves) instantly to all connected team members." },
      { name: "SendGrid", description: "Email notifications for task assignments and due dates." },
      { name: "Chart.js", description: "Visualizes team velocity and burndown charts in the analytics view." }
    ],
    payment: {
      provider: "Stripe Checkout",
      details: "SaaS subscription model (Per User/Per Month). Webhook listens for subscription.updated to adjust workspace limits."
    },
    fileStructure: `
/root
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── KanbanBoard.vue
│   │   └── TaskCard.vue
│   ├── stores/ (Pinia)
│   │   └── taskStore.js
│   ├── views/
│   │   ├── Dashboard.vue
│   │   └── Settings.vue
│   ├── router/
│   │   └── index.js
│   └── App.vue
├── supabase/
│   └── migrations/
├── docker-compose.yml
└── vite.config.js
      `.trim(),
    howItWorks: "Vue.js powers the reactive UI with Pinia for state management. 'Vue Draggable' library handles the Kanban drag-and-drop. Supabase provides an instant Postgres backend with Row Level Security (RLS) to ensure users only see their team's data. Everything is containerized with Docker for consistent dev environments."
  },
  {
    title: "Generative AI Art Studio",
    description: "A text-to-image generation platform where users can craft prompts, generate art using Stable Diffusion, and manage a public gallery.",
    tags: ["Python", "FastAPI", "React", "PyTorch", "AWS"],
    techStack: [
      { name: "Python", type: "ML Backend", icon: <SiPython className="text-yellow-400" /> },
      { name: "FastAPI", type: "API", icon: <SiFastapi className="text-teal-400" /> },
      { name: "React", type: "Frontend", icon: <SiReact className="text-cyan-400" /> },
      { name: "PyTorch", type: "Model", icon: <SiPytorch className="text-red-500" /> },
      { name: "AWS", type: "Cloud", icon: <SiAmazonwebservices className="text-orange-500" /> },
    ],
    apis: [
      { name: "Hugging Face", description: "Source for downloading pretrained Stable Diffusion models." },
      { name: "AWS S3", description: "Stores the large generated image files reliably." },
      { name: "Stripe", description: "Credit-based system where users buy 'credits' to generate images." }
    ],
    payment: {
      provider: "Stripe Elements",
      details: "One-time purchase of credit packs ($10 for 500 images). Credits are deducted from user balance in SQL upon generation."
    },
    fileStructure: `
/root
├── client/ (React)
│   ├── src/
│   │   ├── components/
│   │   │   ├── PromptInput.jsx
│   │   │   ├── GalleryGrid.jsx
│   │   └── api/
│   └── package.json
├── server/ (FastAPI)
│   ├── app/
│   │   ├── models/
│   │   │   └── diffusion.py (ML inference)
│   │   ├── routers/
│   │   │   └── generate.py
│   │   └── main.py
│   ├── requirements.txt
│   └── Dockerfile.gpu
└── terraform/
      `.trim(),
    howItWorks: "The React frontend sends a prompt to the FastAPI backend. The backend queues the request (Celery/Redis) and processes it on a GPU worker using PyTorch & Stable Diffusion. The resulting image is uploaded to AWS S3, and the URL is returned to the client and saved in a PostgreSQL database."
  }
];
