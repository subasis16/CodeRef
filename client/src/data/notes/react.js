const reactNotes = [
  {
    title: 'JSX Fundamentals',
    content: 'JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside JavaScript. It gets compiled to React.createElement() calls. Expressions go in curly braces. JSX must have one root element (or use fragments).',
    code: `// JSX expressions\nconst name = "World";\nconst element = <h1>Hello, {name}!</h1>;\n\n// Conditional rendering\nconst greeting = isLoggedIn ? <Dashboard /> : <Login />;\n\n// Fragment — avoid extra DOM nodes\nreturn (\n  <>\n    <Header />\n    <Main />\n    <Footer />\n  </>\n);`
  },
  {
    title: 'Components & Props',
    content: 'Components are reusable UI building blocks. They accept props (read-only) and return JSX. Use function components with hooks. Props flow one way: parent to child.',
    code: `// Function component with props\nfunction UserCard({ name, role, avatar, onEdit }) {\n  return (\n    <div className="card">\n      <img src={avatar} alt={name} />\n      <h2>{name}</h2>\n      <span>{role}</span>\n      <button onClick={onEdit}>Edit</button>\n    </div>\n  );\n}\n\n// Default props\nfunction Button({ variant = "primary", children }) {\n  return <button className={variant}>{children}</button>;\n}\n\n// Usage\n<UserCard name="John" role="Dev" onEdit={() => {}} />`
  },
  {
    title: 'useState Hook',
    content: 'useState adds state to function components. It returns a state value and a setter function. State updates are asynchronous and batched. Use the function form of setState when the new state depends on the previous state.',
    code: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  // Direct update\n  const reset = () => setCount(0);\n\n  // Functional update (when depending on prev state)\n  const increment = () => setCount(prev => prev + 1);\n\n  // Object state\n  const [user, setUser] = useState({ name: '', email: '' });\n  const updateName = (name) => setUser(prev => ({ ...prev, name }));\n\n  // Lazy initialization (expensive initial value)\n  const [data, setData] = useState(() => computeExpensiveValue());\n}`
  },
  {
    title: 'useEffect Hook',
    content: 'useEffect handles side effects: data fetching, subscriptions, DOM manipulation, timers. It runs after render. The dependency array controls when it re-runs. Return a cleanup function to prevent memory leaks.',
    code: `import { useState, useEffect } from 'react';\n\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n\n  useEffect(() => {\n    // Setup\n    const controller = new AbortController();\n    \n    fetch(\`/api/users/\${userId}\`, { signal: controller.signal })\n      .then(res => res.json())\n      .then(setUser);\n\n    // Cleanup — runs on unmount or before re-run\n    return () => controller.abort();\n  }, [userId]); // Re-run only when userId changes\n\n  // No deps array → runs every render\n  // Empty [] → runs once on mount\n  // [dep] → runs when dep changes\n}`
  },
  {
    title: 'useRef Hook',
    content: 'useRef creates a mutable ref object whose .current property persists across renders without causing re-renders. Use for DOM access, storing previous values, and holding mutable values like timers.',
    code: `import { useRef, useEffect } from 'react';\n\nfunction TextInput() {\n  const inputRef = useRef(null);\n  const timerRef = useRef(null);\n  const renderCount = useRef(0);\n\n  useEffect(() => {\n    renderCount.current += 1; // doesn't cause re-render\n    inputRef.current.focus(); // DOM access\n\n    timerRef.current = setInterval(() => {}, 1000);\n    return () => clearInterval(timerRef.current);\n  }, []);\n\n  return <input ref={inputRef} />;\n}\n\n// Callback ref for dynamic elements\nfunction MeasuredElement() {\n  const measuredRef = useCallback(node => {\n    if (node) console.log(node.getBoundingClientRect());\n  }, []);\n  return <div ref={measuredRef}>Measured</div>;\n}`
  },
  {
    title: 'useMemo & useCallback',
    content: 'useMemo caches a computed value. useCallback caches a function reference. Both accept a dependency array. Use them to avoid expensive recalculations and unnecessary re-renders of child components.',
    code: `import { useMemo, useCallback } from 'react';\n\nfunction ProductList({ products, filter }) {\n  // Memoize expensive computation\n  const filtered = useMemo(() => {\n    return products.filter(p => p.category === filter)\n                   .sort((a, b) => a.price - b.price);\n  }, [products, filter]);\n\n  // Memoize callback to prevent child re-renders\n  const handleDelete = useCallback((id) => {\n    setProducts(prev => prev.filter(p => p.id !== id));\n  }, []);\n\n  return filtered.map(product => (\n    <ProductCard\n      key={product.id}\n      product={product}\n      onDelete={handleDelete} // stable reference\n    />\n  ));\n}`
  },
  {
    title: 'useContext Hook',
    content: 'useContext consumes context values created by React.createContext(). It avoids prop drilling by providing data directly to deeply nested components. Combine with useReducer for complex state management.',
    code: `import { createContext, useContext, useState } from 'react';\n\n// 1. Create context\nconst ThemeContext = createContext();\n\n// 2. Provider component\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('dark');\n  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark');\n\n  return (\n    <ThemeContext.Provider value={{ theme, toggle }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\n// 3. Custom hook (recommended pattern)\nfunction useTheme() {\n  const context = useContext(ThemeContext);\n  if (!context) throw new Error('useTheme must be within ThemeProvider');\n  return context;\n}\n\n// 4. Consume\nfunction Header() {\n  const { theme, toggle } = useTheme();\n  return <button onClick={toggle}>{theme}</button>;\n}`
  },
  {
    title: 'useReducer Hook',
    content: 'useReducer is preferred over useState for complex state logic, multiple sub-values, or when the next state depends on the previous. It follows the Redux pattern: dispatch actions to a reducer function.',
    code: `import { useReducer } from 'react';\n\nconst initialState = { count: 0, step: 1 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return { ...state, count: state.count + state.step };\n    case 'DECREMENT':\n      return { ...state, count: state.count - state.step };\n    case 'SET_STEP':\n      return { ...state, step: action.payload };\n    case 'RESET':\n      return initialState;\n    default:\n      throw new Error(\`Unknown action: \${action.type}\`);\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n\n  return (\n    <div>\n      <span>{state.count}</span>\n      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>\n    </div>\n  );\n}`
  },
  {
    title: 'Custom Hooks',
    content: 'Custom hooks extract reusable stateful logic. They start with "use" and can call other hooks. They share logic, not state — each component using a custom hook gets its own copy of state.',
    code: `// useLocalStorage — persist state\nfunction useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    const stored = localStorage.getItem(key);\n    return stored ? JSON.parse(stored) : initialValue;\n  });\n\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n\n  return [value, setValue];\n}\n\n// useFetch — data fetching\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const controller = new AbortController();\n    setLoading(true);\n    fetch(url, { signal: controller.signal })\n      .then(res => res.json())\n      .then(setData)\n      .catch(setError)\n      .finally(() => setLoading(false));\n    return () => controller.abort();\n  }, [url]);\n\n  return { data, loading, error };\n}`
  },
  {
    title: 'Conditional Rendering',
    content: 'React supports multiple conditional rendering patterns. Choose based on readability: ternary for inline, && for simple show/hide, early return for guard clauses.',
    code: `function Dashboard({ user, isLoading, error }) {\n  // Early return (guard clause)\n  if (isLoading) return <Spinner />;\n  if (error) return <ErrorMessage error={error} />;\n  if (!user) return <LoginPrompt />;\n\n  return (\n    <div>\n      {/* Ternary */}\n      {user.isAdmin ? <AdminPanel /> : <UserPanel />}\n\n      {/* Logical AND (show/hide) */}\n      {user.notifications.length > 0 && <NotificationBadge />}\n\n      {/* IIFE for complex logic */}\n      {(() => {\n        switch (user.role) {\n          case 'admin': return <AdminView />;\n          case 'editor': return <EditorView />;\n          default: return <ReaderView />;\n        }\n      })()}\n    </div>\n  );\n}`
  },
  {
    title: 'Lists & Keys',
    content: 'Use .map() to render lists. Keys help React identify which items changed, were added, or removed. Keys must be unique among siblings and stable (not index-based if the list can reorder).',
    code: `function TodoList({ todos }) {\n  return (\n    <ul>\n      {todos.map(todo => (\n        // Always use unique, stable keys\n        <li key={todo.id}>\n          <span>{todo.text}</span>\n          <button onClick={() => removeTodo(todo.id)}>×</button>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\n// ❌ Bad — index as key (causes issues on reorder)\ntodos.map((todo, index) => <li key={index}>{todo}</li>)\n\n// ❌ Bad — random key (re-mounts every render)\ntodos.map(todo => <li key={Math.random()}>{todo}</li>)\n\n// ✅ Good — use unique ID from data\ntodos.map(todo => <li key={todo.id}>{todo.text}</li>)`
  },
  {
    title: 'Forms: Controlled Components',
    content: 'In controlled components, form data is handled by React state. The input value is driven by state and onChange updates it. This gives React full control over the form.',
    code: `function LoginForm() {\n  const [formData, setFormData] = useState({\n    email: '', password: ''\n  });\n  const [errors, setErrors] = useState({});\n\n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({ ...prev, [name]: value }));\n    setErrors(prev => ({ ...prev, [name]: '' }));\n  };\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    const newErrors = validate(formData);\n    if (Object.keys(newErrors).length) {\n      setErrors(newErrors);\n      return;\n    }\n    submitForm(formData);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        name="email"\n        value={formData.email}\n        onChange={handleChange}\n      />\n      {errors.email && <span>{errors.email}</span>}\n    </form>\n  );\n}`
  },
  {
    title: 'React.memo & Performance',
    content: 'React.memo is a higher-order component that memoizes a component — it only re-renders when its props change. Use it for components that receive the same props frequently. Combine with useCallback for function props.',
    code: `import { memo, useCallback } from 'react';\n\n// Memoized component — won't re-render if props haven't changed\nconst ExpensiveCard = memo(function ExpensiveCard({ title, onClick }) {\n  console.log('Rendering:', title);\n  return (\n    <div onClick={onClick}>\n      <h3>{title}</h3>\n      <HeavyChart />\n    </div>\n  );\n});\n\n// Custom comparison (optional)\nconst MemoizedList = memo(MyList, (prevProps, nextProps) => {\n  return prevProps.items.length === nextProps.items.length;\n});\n\n// Parent — stable callbacks\nfunction Parent() {\n  const handleClick = useCallback((id) => {\n    console.log(id);\n  }, []);\n\n  return <ExpensiveCard title="Chart" onClick={handleClick} />;\n}`
  },
  {
    title: 'useTransition & useDeferredValue',
    content: 'useTransition marks state updates as non-urgent, letting urgent updates (like typing) happen first. useDeferredValue defers re-rendering of a value. Both improve perceived performance for expensive renders.',
    code: `import { useState, useTransition, useDeferredValue } from 'react';\n\nfunction SearchPage() {\n  const [query, setQuery] = useState('');\n  const [isPending, startTransition] = useTransition();\n  const deferredQuery = useDeferredValue(query);\n\n  const handleChange = (e) => {\n    // Urgent: update input immediately\n    setQuery(e.target.value);\n\n    // Non-urgent: filter list can wait\n    startTransition(() => {\n      setFilteredItems(filterItems(e.target.value));\n    });\n  };\n\n  return (\n    <div>\n      <input value={query} onChange={handleChange} />\n      {isPending && <Spinner />}\n      {/* Uses deferred value — won't block typing */}\n      <HeavyList query={deferredQuery} />\n    </div>\n  );\n}`
  },
  {
    title: 'Error Boundaries',
    content: 'Error boundaries catch JavaScript errors in their child component tree and display a fallback UI. They must be class components. They do not catch errors in event handlers, async code, or server-side rendering.',
    code: `import { Component } from 'react';\n\nclass ErrorBoundary extends Component {\n  state = { hasError: false, error: null };\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true, error };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    logErrorToService(error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return (\n        <div className="error-fallback">\n          <h2>Something went wrong</h2>\n          <button onClick={() => this.setState({ hasError: false })}>\n            Try Again\n          </button>\n        </div>\n      );\n    }\n    return this.props.children;\n  }\n}\n\n// Usage\n<ErrorBoundary>\n  <RiskyComponent />\n</ErrorBoundary>`
  },
  {
    title: 'React Router Essentials',
    content: 'React Router handles client-side routing in SPAs. It provides declarative navigation, URL parameters, nested routes, protected routes, and programmatic navigation.',
    code: `import { BrowserRouter, Routes, Route, Link,\n  useParams, useNavigate, Navigate, Outlet } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/" element={<Layout />}>\n          <Route index element={<Home />} />\n          <Route path="users/:id" element={<UserProfile />} />\n          <Route path="dashboard" element={\n            <ProtectedRoute><Dashboard /></ProtectedRoute>\n          } />\n          <Route path="*" element={<NotFound />} />\n        </Route>\n      </Routes>\n    </BrowserRouter>\n  );\n}\n\n// URL params\nfunction UserProfile() {\n  const { id } = useParams();\n  const navigate = useNavigate();\n  return <button onClick={() => navigate('/')}>Home</button>;\n}\n\n// Protected route\nfunction ProtectedRoute({ children }) {\n  const { user } = useAuth();\n  return user ? children : <Navigate to="/login" />;\n}`
  },
  {
    title: 'Portals',
    content: 'Portals render children into a DOM node outside the parent component hierarchy. Useful for modals, tooltips, and dropdowns that need to break out of overflow:hidden or z-index contexts.',
    code: `import { createPortal } from 'react-dom';\n\nfunction Modal({ isOpen, onClose, children }) {\n  if (!isOpen) return null;\n\n  return createPortal(\n    <div className="modal-overlay" onClick={onClose}>\n      <div className="modal-content" onClick={e => e.stopPropagation()}>\n        <button onClick={onClose}>×</button>\n        {children}\n      </div>\n    </div>,\n    document.getElementById('modal-root') // render outside #root\n  );\n}\n\n// Usage — events still bubble through React tree\nfunction App() {\n  const [showModal, setShowModal] = useState(false);\n  return (\n    <div onClick={() => console.log('App clicked')}>\n      <button onClick={() => setShowModal(true)}>Open</button>\n      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>\n        <p>Modal content here</p>\n      </Modal>\n    </div>\n  );\n}`
  },
  {
    title: 'Suspense & Lazy Loading',
    content: 'React.lazy() enables code-splitting by loading components on demand. Suspense shows a fallback while the lazy component loads. This reduces initial bundle size for better performance.',
    code: `import { lazy, Suspense } from 'react';\n\n// Lazy load components\nconst Dashboard = lazy(() => import('./pages/Dashboard'));\nconst Settings = lazy(() => import('./pages/Settings'));\n\n// Named export lazy loading\nconst MyComponent = lazy(() =>\n  import('./MyModule').then(module => ({\n    default: module.MyComponent\n  }))\n);\n\nfunction App() {\n  return (\n    <Suspense fallback={<LoadingSpinner />}>\n      <Routes>\n        <Route path="/dashboard" element={<Dashboard />} />\n        <Route path="/settings" element={<Settings />} />\n      </Routes>\n    </Suspense>\n  );\n}\n\n// Nested Suspense for granular loading\n<Suspense fallback={<PageSkeleton />}>\n  <Header />\n  <Suspense fallback={<ContentSkeleton />}>\n    <MainContent />\n  </Suspense>\n</Suspense>`
  },
  {
    title: 'forwardRef',
    content: 'forwardRef lets a component expose a DOM node to its parent component. This is essential when building reusable input components, design system elements, or any component that needs to accept a ref.',
    code: `import { forwardRef, useRef } from 'react';\n\n// Component that forwards ref to its inner DOM element\nconst TextInput = forwardRef(function TextInput(\n  { label, ...props }, ref\n) {\n  return (\n    <div>\n      <label>{label}</label>\n      <input ref={ref} {...props} />\n    </div>\n  );\n});\n\n// Parent can now access the input DOM node\nfunction Form() {\n  const inputRef = useRef(null);\n\n  const focusInput = () => {\n    inputRef.current.focus();\n  };\n\n  return (\n    <>\n      <TextInput ref={inputRef} label="Email" />\n      <button onClick={focusInput}>Focus Email</button>\n    </>\n  );\n}`
  },
  {
    title: 'useImperativeHandle',
    content: 'useImperativeHandle customizes the ref value exposed to parent components. Use it with forwardRef to expose specific methods instead of the full DOM node. This provides a controlled API.',
    code: `import { forwardRef, useRef, useImperativeHandle } from 'react';\n\nconst VideoPlayer = forwardRef(function VideoPlayer(props, ref) {\n  const videoRef = useRef(null);\n\n  // Expose only specific methods to parent\n  useImperativeHandle(ref, () => ({\n    play() { videoRef.current.play(); },\n    pause() { videoRef.current.pause(); },\n    seek(time) { videoRef.current.currentTime = time; },\n    getDuration() { return videoRef.current.duration; }\n  }));\n\n  return <video ref={videoRef} src={props.src} />;\n});\n\n// Parent gets clean API, not raw DOM node\nfunction App() {\n  const playerRef = useRef(null);\n  return (\n    <>\n      <VideoPlayer ref={playerRef} src="video.mp4" />\n      <button onClick={() => playerRef.current.play()}>Play</button>\n      <button onClick={() => playerRef.current.seek(30)}>Skip</button>\n    </>\n  );\n}`
  },
  {
    title: 'Compound Components Pattern',
    content: 'Compound components work together to form a complete UI. They share implicit state via context, giving users flexibility in composition. Common in design systems for tabs, accordions, and menus.',
    code: `const TabsContext = createContext();\n\nfunction Tabs({ children, defaultTab }) {\n  const [activeTab, setActiveTab] = useState(defaultTab);\n  return (\n    <TabsContext.Provider value={{ activeTab, setActiveTab }}>\n      <div className="tabs">{children}</div>\n    </TabsContext.Provider>\n  );\n}\n\nTabs.List = function TabList({ children }) {\n  return <div className="tab-list">{children}</div>;\n};\n\nTabs.Tab = function Tab({ value, children }) {\n  const { activeTab, setActiveTab } = useContext(TabsContext);\n  return (\n    <button\n      className={activeTab === value ? 'active' : ''}\n      onClick={() => setActiveTab(value)}\n    >{children}</button>\n  );\n};\n\nTabs.Panel = function TabPanel({ value, children }) {\n  const { activeTab } = useContext(TabsContext);\n  return activeTab === value ? <div>{children}</div> : null;\n};\n\n// Usage\n<Tabs defaultTab="code">\n  <Tabs.List>\n    <Tabs.Tab value="code">Code</Tabs.Tab>\n    <Tabs.Tab value="preview">Preview</Tabs.Tab>\n  </Tabs.List>\n  <Tabs.Panel value="code"><Editor /></Tabs.Panel>\n  <Tabs.Panel value="preview"><Preview /></Tabs.Panel>\n</Tabs>`
  },
  {
    title: 'Render Props Pattern',
    content: 'Render props is a technique where a component receives a function as a prop that returns React elements. It enables sharing behavior and state between components. Largely replaced by custom hooks, but still useful.',
    code: `// Mouse tracker with render prop\nfunction MouseTracker({ render }) {\n  const [position, setPosition] = useState({ x: 0, y: 0 });\n\n  useEffect(() => {\n    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });\n    window.addEventListener('mousemove', handleMove);\n    return () => window.removeEventListener('mousemove', handleMove);\n  }, []);\n\n  return render(position);\n}\n\n// Usage\n<MouseTracker\n  render={({ x, y }) => (\n    <div style={{ position: 'fixed', left: x, top: y }}>\n      Cursor: {x}, {y}\n    </div>\n  )}\n/>\n\n// Modern alternative: custom hook\nfunction useMousePosition() {\n  const [pos, setPos] = useState({ x: 0, y: 0 });\n  // ... same logic\n  return pos;\n}`
  },
  {
    title: 'Higher-Order Components (HOC)',
    content: 'A Higher-Order Component is a function that takes a component and returns a new component with additional props or behavior. It is a pattern for reusing component logic. HOCs are being replaced by hooks but are still common in older codebases.',
    code: `// withAuth HOC — adds authentication check\nfunction withAuth(WrappedComponent) {\n  return function AuthenticatedComponent(props) {\n    const { user, loading } = useAuth();\n\n    if (loading) return <Spinner />;\n    if (!user) return <Navigate to="/login" />;\n\n    return <WrappedComponent {...props} user={user} />;\n  };\n}\n\n// withLogging HOC\nfunction withLogging(WrappedComponent, componentName) {\n  return function LoggedComponent(props) {\n    useEffect(() => {\n      console.log(\`\${componentName} mounted\`);\n      return () => console.log(\`\${componentName} unmounted\`);\n    }, []);\n\n    return <WrappedComponent {...props} />;\n  };\n}\n\n// Usage\nconst ProtectedDashboard = withAuth(Dashboard);\nconst LoggedHeader = withLogging(Header, 'Header');`
  },
  {
    title: 'useId Hook',
    content: 'useId generates unique IDs that are stable across server and client rendering. Use it for accessible form labels, ARIA attributes, and any case where you need a unique identifier.',
    code: `import { useId } from 'react';\n\nfunction FormField({ label, type = "text", ...props }) {\n  const id = useId();\n  const errorId = \`\${id}-error\`;\n\n  return (\n    <div>\n      <label htmlFor={id}>{label}</label>\n      <input\n        id={id}\n        type={type}\n        aria-describedby={props.error ? errorId : undefined}\n        {...props}\n      />\n      {props.error && (\n        <span id={errorId} role="alert">{props.error}</span>\n      )}\n    </div>\n  );\n}\n\n// Each instance gets a unique ID\n<FormField label="Email" />\n<FormField label="Password" />`
  },
  {
    title: 'useSyncExternalStore',
    content: 'useSyncExternalStore subscribes to external stores (browser APIs, third-party state managers) in a way that works with concurrent features. It replaces the need for manual subscription patterns.',
    code: `import { useSyncExternalStore } from 'react';\n\n// Subscribe to browser online/offline status\nfunction useOnlineStatus() {\n  return useSyncExternalStore(\n    // subscribe function\n    (callback) => {\n      window.addEventListener('online', callback);\n      window.addEventListener('offline', callback);\n      return () => {\n        window.removeEventListener('online', callback);\n        window.removeEventListener('offline', callback);\n      };\n    },\n    // getSnapshot (client)\n    () => navigator.onLine,\n    // getServerSnapshot (SSR)\n    () => true\n  );\n}\n\nfunction StatusBar() {\n  const isOnline = useOnlineStatus();\n  return <span>{isOnline ? 'Online' : 'Offline'}</span>;\n}`
  },
  {
    title: 'State Management: Zustand',
    content: 'Zustand is a lightweight state management alternative to Redux. It uses hooks, has no boilerplate, supports middleware, and works outside React components.',
    code: `import { create } from 'zustand';\nimport { persist } from 'zustand/middleware';\n\n// Create store\nconst useStore = create(\n  persist(\n    (set, get) => ({\n      // State\n      items: [],\n      total: 0,\n\n      // Actions\n      addItem: (item) => set(state => ({\n        items: [...state.items, item],\n        total: state.total + item.price\n      })),\n\n      removeItem: (id) => set(state => ({\n        items: state.items.filter(i => i.id !== id)\n      })),\n\n      clear: () => set({ items: [], total: 0 }),\n\n      // Computed (using get)\n      getItemCount: () => get().items.length,\n    }),\n    { name: 'cart-storage' } // localStorage key\n  )\n);\n\n// Use in components — auto re-renders on change\nfunction Cart() {\n  const items = useStore(state => state.items);\n  const addItem = useStore(state => state.addItem);\n}`
  },
  {
    title: 'Data Fetching: React Query/TanStack',
    content: 'TanStack Query (React Query) handles server-state: caching, background updates, stale data, pagination, and optimistic updates. It eliminates most data-fetching boilerplate.',
    code: `import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';\n\n// Fetch data with caching\nfunction UserList() {\n  const { data, isLoading, error } = useQuery({\n    queryKey: ['users'],\n    queryFn: () => fetch('/api/users').then(r => r.json()),\n    staleTime: 5 * 60 * 1000, // 5 min cache\n  });\n\n  if (isLoading) return <Spinner />;\n  if (error) return <Error message={error.message} />;\n  return data.map(user => <UserCard key={user.id} user={user} />);\n}\n\n// Mutation with optimistic update\nfunction CreateUser() {\n  const queryClient = useQueryClient();\n  const mutation = useMutation({\n    mutationFn: (newUser) => fetch('/api/users', {\n      method: 'POST',\n      body: JSON.stringify(newUser)\n    }),\n    onSuccess: () => queryClient.invalidateQueries(['users']),\n  });\n}`
  },
  {
    title: 'CSS-in-JS: Styled Components',
    content: 'Styled-components uses tagged template literals to style React components. Styles are scoped, support props-based dynamic styling, theming, and generate unique class names.',
    code: `import styled from 'styled-components';\n\nconst Button = styled.button\`\n  padding: \${props => props.size === 'lg' ? '16px 32px' : '8px 16px'};\n  background: \${props => props.variant === 'primary' ? '#007bff' : 'transparent'};\n  color: \${props => props.variant === 'primary' ? '#fff' : '#007bff'};\n  border: 2px solid #007bff;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    opacity: 0.8;\n    transform: translateY(-1px);\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n\`;\n\n// Extend styles\nconst PrimaryButton = styled(Button)\`\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  border: none;\n\`;\n\n<Button variant="primary" size="lg">Click Me</Button>`
  },
  {
    title: 'Testing: React Testing Library',
    content: 'React Testing Library encourages testing from the user perspective: query by role, label, text — not implementation details. It promotes accessible markup and better test practices.',
    code: `import { render, screen, fireEvent, waitFor } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\n\ntest('submits login form', async () => {\n  const handleSubmit = jest.fn();\n  render(<LoginForm onSubmit={handleSubmit} />);\n\n  // Query by accessible role\n  const emailInput = screen.getByRole('textbox', { name: /email/i });\n  const passwordInput = screen.getByLabelText(/password/i);\n  const submitBtn = screen.getByRole('button', { name: /log in/i });\n\n  // Simulate user interaction\n  await userEvent.type(emailInput, 'john@test.com');\n  await userEvent.type(passwordInput, 'password123');\n  await userEvent.click(submitBtn);\n\n  // Assert\n  await waitFor(() => {\n    expect(handleSubmit).toHaveBeenCalledWith({\n      email: 'john@test.com',\n      password: 'password123'\n    });\n  });\n});`
  },
  {
    title: 'Accessibility (a11y) in React',
    content: 'Building accessible React apps means using semantic HTML, ARIA attributes, keyboard navigation, and screen reader support. React supports all ARIA attributes via camelCase props.',
    code: `// Accessible form\nfunction SearchForm() {\n  const [results, setResults] = useState([]);\n\n  return (\n    <form role="search" aria-label="Site search">\n      <label htmlFor="search-input">Search</label>\n      <input\n        id="search-input"\n        type="search"\n        aria-describedby="search-help"\n        aria-autocomplete="list"\n        aria-expanded={results.length > 0}\n      />\n      <p id="search-help">Type to search docs</p>\n\n      {/* Live region for screen readers */}\n      <div aria-live="polite" aria-atomic="true">\n        {results.length} results found\n      </div>\n\n      {/* Keyboard-accessible custom button */}\n      <div\n        role="button"\n        tabIndex={0}\n        onClick={handleClick}\n        onKeyDown={(e) => {\n          if (e.key === 'Enter' || e.key === ' ') handleClick();\n        }}\n      >\n        Custom Button\n      </div>\n    </form>\n  );\n}`
  },
  {
    title: 'Virtual DOM & Reconciliation',
    content: 'React creates a virtual DOM tree (JavaScript objects). When state changes, it creates a new tree and diffs it against the previous one. Only the actual changes are applied to the real DOM (reconciliation). This makes updates efficient.',
    code: `// React's reconciliation rules:\n\n// 1. Different element types → tear down old, build new\n// <div> → <span> = full remount\n\n// 2. Same element type → update attributes only\n// <div className="old"> → <div className="new"> = update class\n\n// 3. Keys help identify list items\n// Without key: React re-renders all items on reorder\n// With key: React moves DOM nodes instead\n\n// Force remount with key change\nfunction App() {\n  const [userId, setUserId] = useState(1);\n  // key change = fresh component instance\n  return <Profile key={userId} userId={userId} />;\n}\n\n// React Fiber: the reconciliation algorithm\n// - Work is split into units (fibers)\n// - Can pause, resume, and prioritize work\n// - Enables concurrent features`
  },
  {
    title: 'Optimizing Re-renders',
    content: 'Unnecessary re-renders are the most common React performance issue. Understand what triggers re-renders and use the right tools to prevent them.',
    code: `// What causes re-renders:\n// 1. State change in the component\n// 2. Parent re-renders (all children re-render)\n// 3. Context value changes\n\n// Solution 1: Move state down\n// Bad: entire App re-renders on input change\nfunction App() {\n  const [search, setSearch] = useState('');\n  return <><SearchInput value={search} /><HeavyList /></>;\n}\n\n// Good: only SearchInput re-renders\nfunction SearchInput() {\n  const [search, setSearch] = useState('');\n  return <input value={search} onChange={e => setSearch(e.target.value)} />;\n}\n\n// Solution 2: Children as props (composition)\n// Children don't re-render when parent state changes\nfunction Layout({ children }) {\n  const [theme, setTheme] = useState('dark');\n  return <div className={theme}>{children}</div>;\n}\n\n// Solution 3: React.memo for expensive components\nconst HeavyChart = memo(function HeavyChart({ data }) {\n  return <canvas>{/* expensive rendering */}</canvas>;\n});`
  },
  {
    title: 'Server Components (RSC)',
    content: 'React Server Components run on the server and send rendered HTML to the client. They can directly access databases and file systems, have zero client-side JavaScript, and reduce bundle size. Client Components use "use client" directive.',
    code: `// Server Component (default in Next.js App Router)\n// — runs on server, zero JS sent to client\nasync function ProductPage({ params }) {\n  // Direct database access — no API needed\n  const product = await db.products.findById(params.id);\n  const reviews = await db.reviews.findByProduct(params.id);\n\n  return (\n    <div>\n      <h1>{product.name}</h1>\n      <p>{product.description}</p>\n      {/* Client component for interactivity */}\n      <AddToCartButton productId={product.id} />\n      <ReviewList reviews={reviews} />\n    </div>\n  );\n}\n\n// Client Component — needs "use client" directive\n'use client';\nimport { useState } from 'react';\n\nfunction AddToCartButton({ productId }) {\n  const [added, setAdded] = useState(false);\n  return (\n    <button onClick={() => setAdded(true)}>\n      {added ? 'Added ✓' : 'Add to Cart'}\n    </button>\n  );\n}`
  },
  {
    title: 'Environment Variables',
    content: 'React apps use environment variables for configuration. In Create React App, prefix with REACT_APP_. In Vite, prefix with VITE_. Never expose secrets in client-side code.',
    code: `// .env file\nVITE_API_URL=https://api.example.com\nVITE_APP_NAME=MyApp\n\n// Access in code (Vite)\nconst apiUrl = import.meta.env.VITE_API_URL;\nconst isDev = import.meta.env.DEV;\nconst isProd = import.meta.env.PROD;\n\n// Create React App\n// REACT_APP_API_URL=https://api.example.com\n// const apiUrl = process.env.REACT_APP_API_URL;\n\n// ⚠️ NEVER put secrets in client env vars!\n// These are embedded in the built JS and visible to anyone\n// Use server-side API routes for secrets`
  },
  {
    title: 'useLayoutEffect',
    content: 'useLayoutEffect fires synchronously after DOM mutations but before the browser paints. Use it for DOM measurements and synchronous visual updates. Prefer useEffect for most cases.',
    code: `import { useState, useLayoutEffect, useRef } from 'react';\n\nfunction Tooltip({ children, text }) {\n  const [position, setPosition] = useState({ top: 0, left: 0 });\n  const ref = useRef();\n\n  // useLayoutEffect prevents visual flicker\n  // It runs BEFORE the browser paints\n  useLayoutEffect(() => {\n    const rect = ref.current.getBoundingClientRect();\n    setPosition({\n      top: rect.top - 30,\n      left: rect.left + rect.width / 2\n    });\n  }, []);\n\n  // vs useEffect: runs AFTER paint → can cause flicker\n  // useEffect(() => { /* same code */ }, []);\n\n  return (\n    <>\n      <span ref={ref}>{children}</span>\n      <div style={{ position: 'fixed', ...position }}>{text}</div>\n    </>\n  );\n}`
  },
  {
    title: 'Animations with Framer Motion',
    content: 'Framer Motion provides declarative animations for React. It supports enter/exit animations, gestures, layout animations, and spring physics with minimal code.',
    code: `import { motion, AnimatePresence } from 'framer-motion';\n\n// Basic animation\n<motion.div\n  initial={{ opacity: 0, y: 20 }}\n  animate={{ opacity: 1, y: 0 }}\n  exit={{ opacity: 0, y: -20 }}\n  transition={{ duration: 0.3, ease: 'easeOut' }}\n>\n  Content\n</motion.div>\n\n// AnimatePresence for exit animations\nfunction Notifications({ items }) {\n  return (\n    <AnimatePresence>\n      {items.map(item => (\n        <motion.div\n          key={item.id}\n          initial={{ opacity: 0, height: 0 }}\n          animate={{ opacity: 1, height: 'auto' }}\n          exit={{ opacity: 0, height: 0 }}\n          layout // smooth reflow when items change\n        >\n          {item.text}\n        </motion.div>\n      ))}\n    </AnimatePresence>\n  );\n}\n\n// Gesture animations\n<motion.button\n  whileHover={{ scale: 1.05 }}\n  whileTap={{ scale: 0.95 }}\n  drag="x"\n  dragConstraints={{ left: -100, right: 100 }}\n/>`
  },
  {
    title: 'useDebugValue',
    content: 'useDebugValue adds a label to custom hooks in React DevTools. Use it to display formatted debug information for your custom hooks, making them easier to inspect.',
    code: `import { useDebugValue } from 'react';\n\nfunction useOnlineStatus() {\n  const isOnline = useSyncExternalStore(subscribe, getSnapshot);\n\n  // Shows in React DevTools next to the hook\n  useDebugValue(isOnline ? 'Online' : 'Offline');\n\n  return isOnline;\n}\n\n// With formatter (deferred — only computed when inspected)\nfunction useUser(userId) {\n  const user = useFetch(\`/api/users/\${userId}\`);\n\n  useDebugValue(user, (user) => {\n    // Only called when DevTools inspects this hook\n    return user ? \`User: \${user.name}\` : 'Loading...';\n  });\n\n  return user;\n}\n\n// In DevTools:\n// ▶ OnlineStatus: "Online"\n// ▶ User: "User: John Doe"`
  },
  {
    title: 'Strict Mode',
    content: 'React StrictMode helps find bugs early by activating extra checks in development. It double-invokes render, effects, and reducers to find impure code. It highlights deprecated APIs.',
    code: `import { StrictMode } from 'react';\n\n// Wrap your app\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);\n\n// What StrictMode does in development:\n// 1. Double-renders components to find impure renders\n// 2. Double-runs effects to find missing cleanup\n// 3. Warns about deprecated APIs\n\n// Example: this bug is caught by StrictMode\nfunction BadComponent() {\n  const items = []; // ❌ Shared mutable variable\n  // StrictMode double-render reveals duplicates\n\n  return items.map(i => <div key={i}>{i}</div>);\n}\n\n// Fix: use state\nfunction GoodComponent() {\n  const [items] = useState([]); // ✅ React state\n  return items.map(i => <div key={i}>{i}</div>);\n}`
  },
  {
    title: 'React Patterns: Container/Presentational',
    content: 'Separate logic (container) from UI (presentational). Container components handle data and state. Presentational components are pure UI that receive everything via props. This improves reusability and testability.',
    code: `// Presentational — pure UI, no logic\nfunction UserList({ users, onSelect, isLoading }) {\n  if (isLoading) return <Skeleton count={5} />;\n\n  return (\n    <ul>\n      {users.map(user => (\n        <li key={user.id} onClick={() => onSelect(user)}>\n          <img src={user.avatar} alt="" />\n          <span>{user.name}</span>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\n// Container — logic and data\nfunction UserListContainer() {\n  const { data: users, isLoading } = useQuery({\n    queryKey: ['users'],\n    queryFn: fetchUsers\n  });\n  const navigate = useNavigate();\n\n  return (\n    <UserList\n      users={users || []}\n      isLoading={isLoading}\n      onSelect={(user) => navigate(\`/users/\${user.id}\`)}\n    />\n  );\n}`
  },
  {
    title: 'File & Folder Structure',
    content: 'A well-organized React project structure scales with your team. Group by feature (not by type) for larger apps. Keep components close to where they are used.',
    code: `// Feature-based structure (recommended for large apps)\nsrc/\n├── features/\n│   ├── auth/\n│   │   ├── components/\n│   │   │   ├── LoginForm.jsx\n│   │   │   └── SignupForm.jsx\n│   │   ├── hooks/\n│   │   │   └── useAuth.js\n│   │   ├── api.js\n│   │   └── index.js\n│   ├── dashboard/\n│   │   ├── components/\n│   │   ├── hooks/\n│   │   └── index.js\n├── components/         # Shared/common components\n│   ├── ui/\n│   │   ├── Button.jsx\n│   │   ├── Input.jsx\n│   │   └── Modal.jsx\n│   └── layout/\n│       ├── Header.jsx\n│       └── Footer.jsx\n├── hooks/              # Shared hooks\n├── utils/              # Helper functions\n├── lib/                # Third-party configs\n├── styles/             # Global styles\n├── App.jsx\n└── main.jsx`
  },
  {
    title: 'React Developer Tools',
    content: 'React DevTools browser extension helps debug components, inspect props/state, profile performance, and examine the component tree. The Profiler identifies rendering bottlenecks.',
    code: `// React DevTools features:\n\n// 1. Component Tree — inspect props, state, hooks\n// 2. Profiler — record renders, find bottlenecks\n// 3. Highlight Updates — see what re-renders\n\n// Profiler API — measure programmatically\nimport { Profiler } from 'react';\n\nfunction onRender(id, phase, actualDuration) {\n  console.log(\`\${id} (\${phase}): \${actualDuration}ms\`);\n}\n\nfunction App() {\n  return (\n    <Profiler id="App" onRender={onRender}>\n      <Dashboard />\n    </Profiler>\n  );\n}\n\n// Debug tips:\n// - Use React.StrictMode to find bugs\n// - Check "Highlight updates" in DevTools\n// - Use why-did-you-render library for detailed logs`
  },
  {
    title: 'Deployment & Build Optimization',
    content: 'Optimizing your React build for production involves code splitting, tree shaking, lazy loading, asset optimization, and proper caching strategies.',
    code: `// vite.config.js — production optimizations\nimport { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({\n  plugins: [react()],\n  build: {\n    rollupOptions: {\n      output: {\n        // Code splitting by vendor\n        manualChunks: {\n          vendor: ['react', 'react-dom'],\n          router: ['react-router-dom'],\n        }\n      }\n    },\n    // Enable source maps for debugging\n    sourcemap: true,\n    // Minify\n    minify: 'terser',\n  }\n});\n\n// Bundle analysis\n// npm install -D rollup-plugin-visualizer\n// Generates visual map of bundle contents\n\n// Performance checklist:\n// ✅ Lazy load routes\n// ✅ Optimize images (WebP, srcset)\n// ✅ Use React.memo strategically\n// ✅ Enable gzip/brotli compression\n// ✅ Set proper cache headers`
  },
  {
    title: 'Common Anti-Patterns',
    content: 'Avoid these common React mistakes that cause bugs, performance issues, and maintenance headaches.',
    code: `// ❌ Mutating state directly\nconst [items, setItems] = useState([1, 2, 3]);\nitems.push(4); // BAD — won't trigger re-render\nsetItems([...items, 4]); // ✅ Create new array\n\n// ❌ useEffect as event handler\nuseEffect(() => {\n  if (submitted) saveData(); // BAD\n}, [submitted]);\n// ✅ Call saveData in the submit handler directly\n\n// ❌ Unnecessary state\nconst [fullName, setFullName] = useState(''); // BAD\nuseEffect(() => {\n  setFullName(firstName + ' ' + lastName);\n}, [firstName, lastName]);\n// ✅ Derive it\nconst fullName = firstName + ' ' + lastName;\n\n// ❌ Missing cleanup\nuseEffect(() => {\n  const id = setInterval(tick, 1000);\n  // Missing: return () => clearInterval(id);\n}, []);\n\n// ❌ Object/array as dependency (always new reference)\nuseEffect(() => {}, [{ id: 1 }]); // Runs every render!\n// ✅ Use primitive values or useMemo`
  },
  {
    title: 'useActionState (React 19)',
    content: 'useActionState (previously useFormState) manages form state with server actions. It handles pending states, validation errors, and progressive enhancement automatically.',
    code: `'use client';\nimport { useActionState } from 'react';\n\nasync function submitForm(prevState, formData) {\n  const email = formData.get('email');\n  const password = formData.get('password');\n\n  if (!email.includes('@')) {\n    return { error: 'Invalid email', success: false };\n  }\n\n  await createUser({ email, password });\n  return { error: null, success: true };\n}\n\nfunction SignupForm() {\n  const [state, formAction, isPending] = useActionState(\n    submitForm,\n    { error: null, success: false }\n  );\n\n  return (\n    <form action={formAction}>\n      <input name="email" type="email" required />\n      <input name="password" type="password" required />\n      {state.error && <p className="error">{state.error}</p>}\n      <button disabled={isPending}>\n        {isPending ? 'Signing up...' : 'Sign Up'}\n      </button>\n      {state.success && <p>Account created!</p>}\n    </form>\n  );\n}`
  },
  {
    title: 'React Compiler (React 19+)',
    content: 'The React Compiler automatically memoizes components, hooks, and expressions — replacing manual useMemo, useCallback, and React.memo. It analyzes your code at build time and adds optimization automatically.',
    code: `// Before React Compiler — manual memoization\nfunction ProductList({ products, filter }) {\n  const filtered = useMemo(\n    () => products.filter(p => p.cat === filter),\n    [products, filter]\n  );\n\n  const handleClick = useCallback((id) => {\n    console.log(id);\n  }, []);\n\n  return filtered.map(p => (\n    <MemoizedCard key={p.id} product={p} onClick={handleClick} />\n  ));\n}\n\n// After React Compiler — just write natural code\n// The compiler handles memoization automatically\nfunction ProductList({ products, filter }) {\n  const filtered = products.filter(p => p.cat === filter);\n\n  const handleClick = (id) => console.log(id);\n\n  return filtered.map(p => (\n    <ProductCard key={p.id} product={p} onClick={handleClick} />\n  ));\n}\n\n// Setup in vite.config.js:\n// plugins: [react({ babel: { plugins: ['babel-plugin-react-compiler'] } })]`
  },
];

export default reactNotes;
