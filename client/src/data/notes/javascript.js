const javascriptNotes = [
  {
    title: 'Variables: var, let, const',
    content: 'JavaScript has three ways to declare variables. `var` is function-scoped and hoisted. `let` is block-scoped and can be reassigned. `const` is block-scoped and cannot be reassigned (but objects/arrays it references can be mutated).',
    code: `var name = "John";      // function-scoped, hoisted\nlet age = 25;           // block-scoped, reassignable\nconst PI = 3.14159;     // block-scoped, not reassignable\n\nconst user = { name: "John" };\nuser.name = "Jane";     // OK — mutating the object, not the reference`
  },
  {
    title: 'Data Types',
    content: 'JavaScript has 8 data types: 7 primitives (String, Number, BigInt, Boolean, undefined, null, Symbol) and 1 non-primitive (Object). typeof returns the type as a string. Note: typeof null returns "object" — this is a known historical bug.',
    code: `typeof "hello"      // "string"\ntypeof 42           // "number"\ntypeof true         // "boolean"\ntypeof undefined    // "undefined"\ntypeof null         // "object" (bug)\ntypeof Symbol()     // "symbol"\ntypeof {}           // "object"\ntypeof []           // "object" — use Array.isArray()`
  },
  {
    title: 'Template Literals',
    content: 'Template literals use backticks and allow embedded expressions, multi-line strings, and tagged templates. They make string interpolation much cleaner than concatenation.',
    code: `const name = "World";\nconst greeting = \`Hello, \${name}!\`;\n\n// Multi-line\nconst html = \`\n  <div>\n    <h1>\${greeting}</h1>\n  </div>\n\`;\n\n// Tagged template\nfunction highlight(strings, ...values) {\n  return strings.reduce((result, str, i) =>\n    \`\${result}\${str}<mark>\${values[i] || ''}</mark>\`, '');\n}`
  },
  {
    title: 'Arrow Functions',
    content: 'Arrow functions provide a shorter syntax and lexically bind `this`. They cannot be used as constructors, do not have their own `arguments` object, and cannot be used with `new`.',
    code: `// Traditional\nfunction add(a, b) { return a + b; }\n\n// Arrow — concise body (implicit return)\nconst add = (a, b) => a + b;\n\n// Arrow — block body\nconst greet = (name) => {\n  const msg = \`Hello, \${name}\`;\n  return msg;\n};\n\n// Lexical 'this'\nconst obj = {\n  items: [1, 2, 3],\n  print() {\n    this.items.forEach(item => console.log(item)); // 'this' works\n  }\n};`
  },
  {
    title: 'Destructuring',
    content: 'Destructuring lets you unpack values from arrays or properties from objects into distinct variables. It supports default values, renaming, nested destructuring, and rest patterns.',
    code: `// Object destructuring\nconst { name, age, role = "user" } = user;\n\n// Rename\nconst { name: userName } = user;\n\n// Array destructuring\nconst [first, second, ...rest] = [1, 2, 3, 4, 5];\n\n// Nested\nconst { address: { city } } = user;\n\n// Swap variables\nlet a = 1, b = 2;\n[a, b] = [b, a];`
  },
  {
    title: 'Spread & Rest Operators',
    content: 'The spread operator (...) expands iterables into individual elements. The rest operator (...) collects remaining elements into an array. Same syntax, different context.',
    code: `// Spread — expand arrays\nconst merged = [...arr1, ...arr2];\n\n// Spread — clone objects\nconst clone = { ...original, newProp: "value" };\n\n// Rest — collect arguments\nfunction sum(...numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\n\n// Rest in destructuring\nconst { id, ...details } = user;`
  },
  {
    title: 'The Event Loop',
    content: 'JavaScript is single-threaded but non-blocking thanks to the event loop. The call stack executes synchronous code. When async operations complete, their callbacks go to the task queue (macrotasks) or microtask queue (Promises). Microtasks always run before macrotasks.',
    code: `console.log('1');                    // Sync — runs first\n\nsetTimeout(() => console.log('2'), 0); // Macrotask\n\nPromise.resolve().then(() => console.log('3')); // Microtask\n\nconsole.log('4');                    // Sync\n\n// Output: 1, 4, 3, 2\n// Microtasks (Promise) run before macrotasks (setTimeout)`
  },
  {
    title: 'Closures',
    content: 'A closure is a function that remembers variables from its outer scope even after the outer function has returned. Closures are created every time a function is created. They are the basis for data privacy, factory functions, and partial application.',
    code: `function createCounter() {\n  let count = 0; // private variable\n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    getCount: () => count\n  };\n}\n\nconst counter = createCounter();\ncounter.increment(); // 1\ncounter.increment(); // 2\ncounter.getCount();  // 2\n// count is not accessible from outside`
  },
  {
    title: 'Promises',
    content: 'A Promise represents a value that may be available now, in the future, or never. It has three states: pending, fulfilled, or rejected. Promises can be chained with .then() and errors caught with .catch().',
    code: `const fetchUser = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    const success = true;\n    success ? resolve({ id: 1, name: "John" })\n            : reject(new Error("User not found"));\n  }, 1000);\n});\n\nfetchUser\n  .then(user => console.log(user))\n  .catch(err => console.error(err))\n  .finally(() => console.log("Done"));\n\n// Promise combinators\nPromise.all([p1, p2]);      // All must resolve\nPromise.allSettled([p1, p2]); // Wait for all\nPromise.race([p1, p2]);     // First to settle\nPromise.any([p1, p2]);      // First to resolve`
  },
  {
    title: 'Async/Await',
    content: 'async/await is syntactic sugar over Promises. An async function always returns a Promise. The await keyword pauses execution until the Promise settles. Use try/catch for error handling.',
    code: `async function getUser(id) {\n  try {\n    const response = await fetch(\`/api/users/\${id}\`);\n    if (!response.ok) throw new Error("Not found");\n    const user = await response.json();\n    return user;\n  } catch (error) {\n    console.error("Failed:", error.message);\n    throw error;\n  }\n}\n\n// Parallel execution\nconst [users, posts] = await Promise.all([\n  fetchUsers(),\n  fetchPosts()\n]);`
  },
  {
    title: 'Prototypal Inheritance',
    content: 'JavaScript uses prototypal inheritance. Every object has a hidden [[Prototype]] property that points to another object. When you access a property, JS walks up the prototype chain until it finds it or reaches null.',
    code: `const animal = {\n  speak() { return \`\${this.name} makes a sound.\`; }\n};\n\nconst dog = Object.create(animal);\ndog.name = "Rex";\ndog.speak(); // "Rex makes a sound."\n\n// Check prototype\nObject.getPrototypeOf(dog) === animal; // true\ndog.hasOwnProperty("name");  // true\ndog.hasOwnProperty("speak"); // false — inherited`
  },
  {
    title: 'Classes (ES6+)',
    content: 'ES6 classes are syntactic sugar over prototype-based inheritance. They support constructors, methods, static methods, getters/setters, inheritance with extends, and private fields with #.',
    code: `class Animal {\n  #sound; // private field\n\n  constructor(name, sound) {\n    this.name = name;\n    this.#sound = sound;\n  }\n\n  speak() { return \`\${this.name} says \${this.#sound}\`; }\n\n  static create(name, sound) {\n    return new Animal(name, sound);\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name) {\n    super(name, "Woof");\n  }\n\n  fetch(item) { return \`\${this.name} fetches \${item}\`; }\n}`
  },
  {
    title: 'Array Methods',
    content: 'JavaScript arrays have powerful built-in methods for transformation, filtering, searching, and reduction. These methods are essential for functional programming patterns.',
    code: `const nums = [1, 2, 3, 4, 5];\n\n// Transform\nnums.map(n => n * 2);          // [2, 4, 6, 8, 10]\nnums.flatMap(n => [n, n * 2]);  // [1, 2, 2, 4, 3, 6...]\n\n// Filter\nnums.filter(n => n > 3);       // [4, 5]\n\n// Reduce\nnums.reduce((sum, n) => sum + n, 0); // 15\n\n// Search\nnums.find(n => n > 3);         // 4\nnums.findIndex(n => n > 3);    // 3\nnums.includes(3);              // true\nnums.some(n => n > 4);         // true\nnums.every(n => n > 0);        // true\n\n// Sort (mutates!)\n[3,1,2].sort((a, b) => a - b); // [1, 2, 3]`
  },
  {
    title: 'Object Methods',
    content: 'Object static methods provide powerful ways to inspect, transform, and control objects. They are essential for working with key-value data.',
    code: `const user = { name: "John", age: 30, role: "dev" };\n\nObject.keys(user);    // ["name", "age", "role"]\nObject.values(user);  // ["John", 30, "dev"]\nObject.entries(user); // [["name","John"], ["age",30], ["role","dev"]]\n\n// Merge objects\nObject.assign({}, user, { role: "admin" });\n\n// Freeze — make immutable\nObject.freeze(user);\n\n// Define property with control\nObject.defineProperty(user, 'id', {\n  value: 1,\n  writable: false,\n  enumerable: false\n});`
  },
  {
    title: 'Map, Set, WeakMap, WeakSet',
    content: 'Map stores key-value pairs where keys can be any type. Set stores unique values. WeakMap and WeakSet hold weak references (keys must be objects) and allow garbage collection.',
    code: `// Map — any type as key\nconst map = new Map();\nmap.set({id: 1}, "user1");\nmap.set("key", "value");\nmap.get("key");  // "value"\nmap.has("key");  // true\nmap.size;        // 2\n\n// Set — unique values only\nconst set = new Set([1, 2, 2, 3]);\nset.add(4);\nset.has(2);      // true\nset.size;        // 4\n[...set];        // [1, 2, 3, 4]\n\n// Deduplicate array\nconst unique = [...new Set(array)];`
  },
  {
    title: 'Error Handling',
    content: 'Use try/catch/finally for error handling. Create custom error classes by extending Error. Always catch specific errors when possible and re-throw unknown ones.',
    code: `class ValidationError extends Error {\n  constructor(field, message) {\n    super(message);\n    this.name = "ValidationError";\n    this.field = field;\n  }\n}\n\ntry {\n  if (!email.includes("@"))\n    throw new ValidationError("email", "Invalid email");\n} catch (error) {\n  if (error instanceof ValidationError) {\n    console.log(\`Field: \${error.field}\`);\n  } else {\n    throw error; // re-throw unknown errors\n  }\n} finally {\n  cleanup(); // always runs\n}`
  },
  {
    title: 'Modules (ES Modules)',
    content: 'ES Modules use import/export for code organization. Named exports allow multiple exports per file. Default exports allow one main export. Modules are strict mode by default and have their own scope.',
    code: `// utils.js — Named exports\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\n\n// User.js — Default export\nexport default class User {\n  constructor(name) { this.name = name; }\n}\n\n// app.js — Imports\nimport User from './User.js';\nimport { add, subtract } from './utils.js';\nimport * as utils from './utils.js';\n\n// Dynamic import (code splitting)\nconst module = await import('./heavy-module.js');`
  },
  {
    title: 'this Keyword',
    content: 'The value of `this` depends on how a function is called. In a method, it refers to the object. In a regular function, it refers to the global object (or undefined in strict mode). Arrow functions inherit `this` from their enclosing scope.',
    code: `const obj = {\n  name: "Alice",\n  greet() { return this.name; },        // "Alice"\n  greetArrow: () => this.name,           // undefined (inherits outer)\n  delayed() {\n    setTimeout(function() {\n      console.log(this.name);            // undefined\n    }, 100);\n    setTimeout(() => {\n      console.log(this.name);            // "Alice" — arrow inherits\n    }, 100);\n  }\n};\n\n// Explicit binding\nfunc.call(obj, arg1, arg2);\nfunc.apply(obj, [arg1, arg2]);\nconst bound = func.bind(obj);`
  },
  {
    title: 'Iterators & Generators',
    content: 'Iterators define a sequence and return values one at a time via next(). Generators (function*) are functions that can pause and resume execution using yield. They are lazy — values are computed on demand.',
    code: `// Generator function\nfunction* fibonacci() {\n  let [a, b] = [0, 1];\n  while (true) {\n    yield a;\n    [a, b] = [b, a + b];\n  }\n}\n\nconst fib = fibonacci();\nfib.next().value; // 0\nfib.next().value; // 1\nfib.next().value; // 1\nfib.next().value; // 2\n\n// Custom iterable\nconst range = {\n  *[Symbol.iterator]() {\n    for (let i = 0; i < 5; i++) yield i;\n  }\n};\n\nfor (const n of range) console.log(n); // 0,1,2,3,4`
  },
  {
    title: 'Proxy & Reflect',
    content: 'Proxy wraps an object and intercepts operations like property access, assignment, and function calls. Reflect provides methods that mirror Proxy traps. Together they enable meta-programming, validation, and reactive systems.',
    code: `const handler = {\n  get(target, prop) {\n    return prop in target ? target[prop] : \`No \${prop}\`;\n  },\n  set(target, prop, value) {\n    if (typeof value !== 'string')\n      throw new TypeError('Value must be a string');\n    target[prop] = value;\n    return true;\n  }\n};\n\nconst user = new Proxy({}, handler);\nuser.name = "John";    // OK\nuser.name;             // "John"\nuser.missing;          // "No missing"\nuser.age = 25;         // TypeError!`
  },
  {
    title: 'WeakRef & FinalizationRegistry',
    content: 'WeakRef holds a weak reference to an object, allowing it to be garbage collected. FinalizationRegistry lets you register a callback when an object is collected. Use for caches and resource management.',
    code: `// WeakRef — won't prevent garbage collection\nlet obj = { data: "important" };\nconst ref = new WeakRef(obj);\n\nref.deref();    // { data: "important" }\nobj = null;     // Allow GC\n// Later: ref.deref() might return undefined\n\n// FinalizationRegistry — cleanup callback\nconst registry = new FinalizationRegistry((value) => {\n  console.log(\`Cleaning up: \${value}\`);\n});\n\nregistry.register(someObject, "resource-id");`
  },
  {
    title: 'Optional Chaining & Nullish Coalescing',
    content: 'Optional chaining (?.) safely accesses deeply nested properties — returns undefined instead of throwing if a reference is null/undefined. Nullish coalescing (??) returns the right operand when the left is null or undefined (not for falsy values like 0 or "").',
    code: `const user = { profile: { address: null } };\n\n// Optional chaining\nuser?.profile?.address?.city;    // undefined (no error)\nuser?.getAddress?.();            // undefined (safe method call)\nuser?.items?.[0];                // undefined (safe index)\n\n// Nullish coalescing\nconst port = config.port ?? 3000;   // 3000 if null/undefined\nconst port = config.port || 3000;   // 3000 if ANY falsy (0, "")\n\n// Combined\nconst city = user?.address?.city ?? "Unknown";`
  },
  {
    title: 'Symbols',
    content: 'Symbols are unique, immutable primitive values used as property keys. They are guaranteed to be unique and are not enumerable by default. Well-known symbols customize object behavior.',
    code: `const id = Symbol("id");\nconst obj = { [id]: 123 };\n\nobj[id];              // 123\nObject.keys(obj);     // [] — not enumerable\n\n// Well-known symbols\nclass Range {\n  constructor(start, end) {\n    this.start = start;\n    this.end = end;\n  }\n  [Symbol.iterator]() {\n    let current = this.start;\n    const end = this.end;\n    return {\n      next() {\n        return current <= end\n          ? { value: current++, done: false }\n          : { done: true };\n      }\n    };\n  }\n}\n\nfor (const n of new Range(1, 5)) console.log(n);`
  },
  {
    title: 'Regular Expressions',
    content: 'Regular expressions are patterns used to match character combinations in strings. JavaScript supports regex literals and the RegExp constructor with flags like g (global), i (case-insensitive), m (multiline), and s (dotAll).',
    code: `// Common patterns\nconst email = /^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/;\nconst phone = /^\\+?\\d{1,3}[-.\\s]?\\d{3,14}$/;\nconst url = /^https?:\\/\\/[\\w\\-]+(\\.[\\w\\-]+)+/;\n\n// Methods\n"hello world".match(/\\w+/g);       // ["hello", "world"]\n"hello".replace(/l/g, "L");        // "heLLo"\n/\\d+/.test("abc123");              // true\n\n// Named groups\nconst dateRegex = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;\nconst { groups } = "2024-01-15".match(dateRegex);\n// groups.year = "2024", groups.month = "01"`
  },
  {
    title: 'DOM Manipulation',
    content: 'The Document Object Model (DOM) is a tree-like representation of an HTML document. JavaScript can create, modify, and remove DOM elements to dynamically update the page.',
    code: `// Selecting elements\nconst el = document.querySelector('.my-class');\nconst all = document.querySelectorAll('div.card');\n\n// Creating & appending\nconst div = document.createElement('div');\ndiv.textContent = 'Hello';\ndiv.classList.add('card');\ndiv.setAttribute('data-id', '1');\ndocument.body.appendChild(div);\n\n// Event handling\nel.addEventListener('click', (e) => {\n  e.preventDefault();\n  e.stopPropagation();\n  console.log(e.target);\n});\n\n// Remove\nel.remove();`
  },
  {
    title: 'Event Delegation',
    content: 'Instead of attaching event listeners to each child element, attach one listener to a parent. Events bubble up through the DOM, so the parent catches them. This is more performant and works with dynamically added elements.',
    code: `// Bad: listener on each button\ndocument.querySelectorAll('.btn').forEach(btn =>\n  btn.addEventListener('click', handler)\n);\n\n// Good: single listener on parent\ndocument.querySelector('.btn-container').addEventListener('click', (e) => {\n  const btn = e.target.closest('.btn');\n  if (!btn) return;\n  \n  console.log('Clicked:', btn.dataset.action);\n});`
  },
  {
    title: 'Fetch API',
    content: 'The Fetch API provides a modern interface for making HTTP requests. It returns Promises and supports request/response headers, streaming, and various body types.',
    code: `// GET request\nconst response = await fetch('/api/users');\nconst users = await response.json();\n\n// POST with JSON\nconst res = await fetch('/api/users', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ name: 'John', email: 'john@dev.com' })\n});\n\n// With error handling\nasync function api(url, options = {}) {\n  const response = await fetch(url, {\n    headers: { 'Content-Type': 'application/json' },\n    ...options\n  });\n  if (!response.ok) throw new Error(\`HTTP \${response.status}\`);\n  return response.json();\n}`
  },
  {
    title: 'Local Storage & Session Storage',
    content: 'Web Storage API provides localStorage (persists across sessions) and sessionStorage (cleared when tab closes). Both store key-value pairs as strings. Use JSON.stringify/parse for objects.',
    code: `// Store data\nlocalStorage.setItem('user', JSON.stringify({ name: 'John' }));\n\n// Retrieve data\nconst user = JSON.parse(localStorage.getItem('user'));\n\n// Remove specific item\nlocalStorage.removeItem('user');\n\n// Clear all\nlocalStorage.clear();\n\n// Session storage (same API, cleared on tab close)\nsessionStorage.setItem('token', 'abc123');\n\n// Check storage available\nfunction storageAvailable() {\n  try {\n    localStorage.setItem('test', 'test');\n    localStorage.removeItem('test');\n    return true;\n  } catch (e) { return false; }\n}`
  },
  {
    title: 'Debounce & Throttle',
    content: 'Debounce waits until a user stops triggering an event before executing. Throttle limits execution to once per time interval. Essential for performance in search inputs, scroll handlers, and resize events.',
    code: `// Debounce — wait until user stops typing\nfunction debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\n\nconst search = debounce((query) => fetchResults(query), 300);\ninput.addEventListener('input', (e) => search(e.target.value));\n\n// Throttle — max once per interval\nfunction throttle(fn, limit) {\n  let inThrottle;\n  return (...args) => {\n    if (inThrottle) return;\n    fn(...args);\n    inThrottle = true;\n    setTimeout(() => inThrottle = false, limit);\n  };\n}\n\nwindow.addEventListener('scroll', throttle(updateUI, 100));`
  },
  {
    title: 'Currying & Partial Application',
    content: 'Currying transforms a function with multiple arguments into a sequence of functions each taking a single argument. Partial application fixes some arguments of a function, producing a new function with fewer parameters.',
    code: `// Currying\nconst multiply = (a) => (b) => a * b;\nconst double = multiply(2);\ndouble(5); // 10\n\n// Generic curry\nconst curry = (fn) => {\n  const arity = fn.length;\n  return function curried(...args) {\n    if (args.length >= arity) return fn(...args);\n    return (...moreArgs) => curried(...args, ...moreArgs);\n  };\n};\n\nconst add = curry((a, b, c) => a + b + c);\nadd(1)(2)(3);   // 6\nadd(1, 2)(3);   // 6\nadd(1)(2, 3);   // 6`
  },
  {
    title: 'Memoization',
    content: 'Memoization caches the results of expensive function calls and returns the cached result when the same inputs occur again. Essential for optimizing recursive and computationally expensive operations.',
    code: `function memoize(fn) {\n  const cache = new Map();\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}\n\n// Usage\nconst factorial = memoize((n) => {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n});\n\nfactorial(100); // Computed\nfactorial(100); // Cached — instant`
  },
  {
    title: 'Web Workers',
    content: 'Web Workers run JavaScript in background threads, keeping the main thread responsive. They communicate via postMessage and cannot access the DOM directly. Use for heavy computations.',
    code: `// main.js\nconst worker = new Worker('worker.js');\n\nworker.postMessage({ data: largeArray });\n\nworker.onmessage = (event) => {\n  console.log('Result:', event.data);\n};\n\nworker.onerror = (error) => {\n  console.error('Worker error:', error.message);\n};\n\n// worker.js\nself.onmessage = (event) => {\n  const result = heavyComputation(event.data);\n  self.postMessage(result);\n};`
  },
  {
    title: 'Intersection Observer',
    content: 'IntersectionObserver watches for elements entering or leaving the viewport. Use for lazy loading images, infinite scroll, triggering animations on scroll, and tracking ad visibility.',
    code: `const observer = new IntersectionObserver(\n  (entries) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        entry.target.classList.add('visible');\n        observer.unobserve(entry.target); // stop observing\n      }\n    });\n  },\n  { threshold: 0.1, rootMargin: '50px' }\n);\n\n// Observe all lazy elements\ndocument.querySelectorAll('.lazy').forEach(el => {\n  observer.observe(el);\n});`
  },
  {
    title: 'AbortController',
    content: 'AbortController lets you cancel fetch requests, event listeners, and other async operations. Essential for preventing race conditions and cleaning up in SPAs.',
    code: `// Cancel fetch request\nconst controller = new AbortController();\n\nfetch('/api/data', { signal: controller.signal })\n  .then(res => res.json())\n  .catch(err => {\n    if (err.name === 'AbortError') console.log('Cancelled');\n  });\n\n// Cancel after timeout\nsetTimeout(() => controller.abort(), 5000);\n\n// In React — cleanup on unmount\nuseEffect(() => {\n  const controller = new AbortController();\n  fetchData({ signal: controller.signal });\n  return () => controller.abort();\n}, []);`
  },
  {
    title: 'Structured Clone',
    content: 'structuredClone() deep clones objects including nested objects, arrays, Maps, Sets, Dates, RegExps, and ArrayBuffers. Unlike JSON.parse(JSON.stringify()), it handles circular references.',
    code: `const original = {\n  name: "John",\n  date: new Date(),\n  nested: { deep: { value: 42 } },\n  set: new Set([1, 2, 3]),\n  map: new Map([["key", "val"]])\n};\n\n// Deep clone — handles all types\nconst clone = structuredClone(original);\n\nclone.nested.deep.value = 99;\noriginal.nested.deep.value; // Still 42\n\n// Note: Cannot clone functions, DOM nodes, or Error objects`
  },
  {
    title: 'Object.groupBy & Map.groupBy',
    content: 'Object.groupBy() groups array elements by a callback return value. Returns a null-prototype object. Map.groupBy() returns a Map instead. Both are newer additions (ES2024).',
    code: `const people = [\n  { name: 'Alice', age: 25 },\n  { name: 'Bob', age: 30 },\n  { name: 'Charlie', age: 25 },\n  { name: 'Diana', age: 30 }\n];\n\n// Group by age\nconst byAge = Object.groupBy(people, person => person.age);\n// { 25: [{Alice}, {Charlie}], 30: [{Bob}, {Diana}] }\n\n// Using Map.groupBy\nconst grouped = Map.groupBy(people, p => p.age >= 28 ? 'senior' : 'junior');`
  },
  {
    title: 'String Methods',
    content: 'Modern JavaScript string methods provide powerful text processing capabilities without needing regex for common operations.',
    code: `// Search\n"hello world".includes("world");    // true\n"hello".startsWith("he");           // true\n"hello".endsWith("lo");             // true\n"hello".indexOf("l");               // 2\n\n// Transform\n"hello".toUpperCase();              // "HELLO"\n"  hello  ".trim();                 // "hello"\n"  hello  ".trimStart();            // "hello  "\n"hello".padStart(10, "0");          // "00000hello"\n"hello".repeat(3);                  // "hellohellohello"\n\n// Split & slice\n"a,b,c".split(",");                 // ["a", "b", "c"]\n"hello".slice(1, 3);                // "el"\n\n// Replace\n"aabbcc".replaceAll("a", "x");      // "xxbbcc"\n"hello".at(-1);                     // "o"`
  },
  {
    title: 'Number & Math',
    content: 'JavaScript provides Number methods for safer numeric operations and Math for mathematical calculations. Use Number.isFinite and Number.isNaN instead of global versions.',
    code: `// Number methods (safer than global)\nNumber.isInteger(42);          // true\nNumber.isFinite(Infinity);     // false\nNumber.isNaN(NaN);             // true\nNumber.parseFloat("3.14px");   // 3.14\n\n// Math utilities\nMath.round(4.5);    // 5\nMath.ceil(4.1);     // 5\nMath.floor(4.9);    // 4\nMath.trunc(4.9);    // 4 (removes decimal)\nMath.max(1, 5, 3);  // 5\nMath.min(1, 5, 3);  // 1\nMath.abs(-5);       // 5\nMath.random();      // 0 to 1\n\n// Random integer between min and max\nconst randInt = (min, max) =>\n  Math.floor(Math.random() * (max - min + 1)) + min;`
  },
  {
    title: 'Date & Intl',
    content: 'JavaScript Date handles dates and times. The Intl API provides locale-aware formatting for dates, numbers, and strings. Consider using libraries like date-fns for complex operations.',
    code: `// Current date\nconst now = new Date();\nnow.getFullYear();  // 2024\nnow.getMonth();     // 0-11 (January = 0!)\n\n// Intl formatting\nnew Intl.DateTimeFormat('en-US', {\n  year: 'numeric',\n  month: 'long',\n  day: 'numeric'\n}).format(now); // "January 15, 2024"\n\n// Relative time\nnew Intl.RelativeTimeFormat('en', { numeric: 'auto' })\n  .format(-1, 'day'); // "yesterday"\n\n// Number formatting\nnew Intl.NumberFormat('en-US', {\n  style: 'currency',\n  currency: 'USD'\n}).format(1234.56); // "$1,234.56"`
  },
  {
    title: 'JSON Methods',
    content: 'JSON.stringify() converts objects to JSON strings. JSON.parse() converts JSON strings back to objects. Both support replacer/reviver functions for custom transformation.',
    code: `const data = { name: "John", age: 30, password: "secret" };\n\n// Stringify with replacer (filter fields)\nJSON.stringify(data, (key, value) => {\n  if (key === 'password') return undefined; // omit\n  return value;\n}, 2); // 2 = indent spaces\n\n// Parse with reviver\nJSON.parse(jsonString, (key, value) => {\n  if (key === 'date') return new Date(value);\n  return value;\n});\n\n// Deep clone (simple objects only)\nconst clone = JSON.parse(JSON.stringify(obj));\n// Warning: loses functions, Dates, undefined, Infinity, NaN`
  },
  {
    title: 'Functional Patterns: Compose & Pipe',
    content: 'Compose and pipe combine multiple functions into one. Compose applies right-to-left, pipe applies left-to-right. They enable clean, readable data transformation pipelines.',
    code: `// Pipe — left to right\nconst pipe = (...fns) => (x) => fns.reduce((v, fn) => fn(v), x);\n\n// Compose — right to left\nconst compose = (...fns) => (x) => fns.reduceRight((v, fn) => fn(v), x);\n\n// Usage\nconst processUser = pipe(\n  (name) => name.trim(),\n  (name) => name.toLowerCase(),\n  (name) => name.split(' '),\n  (parts) => parts.map(p => p[0].toUpperCase() + p.slice(1)),\n  (parts) => parts.join(' ')\n);\n\nprocessUser("  jOHN  dOE  "); // "John Doe"`
  },
  {
    title: 'Design Pattern: Observer',
    content: 'The Observer pattern defines a one-to-many dependency between objects. When one object changes state, all its dependents are notified. It is the foundation of event-driven programming.',
    code: `class EventEmitter {\n  constructor() {\n    this.listeners = new Map();\n  }\n\n  on(event, callback) {\n    if (!this.listeners.has(event))\n      this.listeners.set(event, []);\n    this.listeners.get(event).push(callback);\n    return () => this.off(event, callback); // unsubscribe fn\n  }\n\n  off(event, callback) {\n    const cbs = this.listeners.get(event);\n    if (cbs) this.listeners.set(event, cbs.filter(cb => cb !== callback));\n  }\n\n  emit(event, ...args) {\n    (this.listeners.get(event) || []).forEach(cb => cb(...args));\n  }\n}\n\nconst bus = new EventEmitter();\nconst unsub = bus.on('userLogin', (user) => console.log(user));\nbus.emit('userLogin', { name: 'John' });`
  },
  {
    title: 'Design Pattern: Singleton',
    content: 'Singleton ensures a class has only one instance and provides a global point of access to it. In JavaScript, modules are already singletons — exported values are cached.',
    code: `// Module singleton (recommended)\n// db.js\nclass Database {\n  constructor() {\n    this.connection = null;\n  }\n  connect(url) {\n    if (!this.connection) {\n      this.connection = createConnection(url);\n    }\n    return this.connection;\n  }\n}\n\nexport default new Database(); // same instance everywhere\n\n// Class-based singleton\nclass Logger {\n  static instance;\n  static getInstance() {\n    if (!Logger.instance) Logger.instance = new Logger();\n    return Logger.instance;\n  }\n}`
  },
  {
    title: 'Design Pattern: Factory',
    content: 'Factory pattern creates objects without specifying the exact class. It encapsulates object creation logic and is useful when the creation process is complex or varies by type.',
    code: `function createNotification(type, message) {\n  const base = {\n    id: Date.now(),\n    message,\n    timestamp: new Date(),\n    read: false\n  };\n\n  switch (type) {\n    case 'success':\n      return { ...base, type, icon: '✓', color: 'green' };\n    case 'error':\n      return { ...base, type, icon: '✕', color: 'red', retry: true };\n    case 'warning':\n      return { ...base, type, icon: '⚠', color: 'yellow' };\n    default:\n      return { ...base, type: 'info', icon: 'ℹ', color: 'blue' };\n  }\n}\n\nconst notif = createNotification('error', 'Failed to save');`
  },
  {
    title: 'Async Patterns: Queue & Concurrency',
    content: 'Control concurrency when making multiple async requests. A task queue processes items with a maximum concurrent limit, preventing API rate limits and resource exhaustion.',
    code: `async function asyncPool(limit, items, fn) {\n  const results = [];\n  const executing = new Set();\n\n  for (const item of items) {\n    const promise = fn(item).then(result => {\n      executing.delete(promise);\n      return result;\n    });\n    executing.add(promise);\n    results.push(promise);\n\n    if (executing.size >= limit) {\n      await Promise.race(executing);\n    }\n  }\n\n  return Promise.all(results);\n}\n\n// Fetch 100 URLs, max 5 at a time\nconst data = await asyncPool(5, urls, url => fetch(url));`
  },
  {
    title: 'Performance: requestAnimationFrame',
    content: 'requestAnimationFrame schedules a function to run before the next repaint, typically at 60fps. It is the correct way to create smooth animations and is more efficient than setInterval.',
    code: `// Smooth animation\nfunction animate(element) {\n  let start = null;\n  const duration = 1000;\n\n  function step(timestamp) {\n    if (!start) start = timestamp;\n    const progress = Math.min((timestamp - start) / duration, 1);\n\n    element.style.transform = \`translateX(\${progress * 300}px)\`;\n    element.style.opacity = progress;\n\n    if (progress < 1) {\n      requestAnimationFrame(step);\n    }\n  }\n\n  requestAnimationFrame(step);\n}\n\n// Cancel\nconst id = requestAnimationFrame(callback);\ncancelAnimationFrame(id);`
  },
  {
    title: 'Async Iterators & for await...of',
    content: 'Async iterators allow you to iterate over asynchronous data sources. The for-await-of loop consumes async iterables one value at a time. Useful for streaming data, paginated APIs, and real-time feeds.',
    code: `// Async generator\nasync function* fetchPages(url) {\n  let page = 1;\n  let hasMore = true;\n\n  while (hasMore) {\n    const res = await fetch(\`\${url}?page=\${page}\`);\n    const data = await res.json();\n    yield data.items;\n    hasMore = data.hasNext;\n    page++;\n  }\n}\n\n// Consume with for-await-of\nfor await (const items of fetchPages('/api/users')) {\n  items.forEach(user => console.log(user.name));\n}`
  },
  {
    title: 'Service Workers & Caching',
    content: 'Service Workers act as a proxy between the browser and network, enabling offline support, push notifications, and background sync. They intercept fetch requests and can serve cached responses.',
    code: `// Register service worker\nif ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/sw.js');\n}\n\n// sw.js — Cache-first strategy\nconst CACHE = 'app-v1';\n\nself.addEventListener('install', (event) => {\n  event.waitUntil(\n    caches.open(CACHE).then(cache =>\n      cache.addAll(['/', '/app.js', '/style.css'])\n    )\n  );\n});\n\nself.addEventListener('fetch', (event) => {\n  event.respondWith(\n    caches.match(event.request)\n      .then(cached => cached || fetch(event.request))\n  );\n});`
  },
  {
    title: 'Private Class Fields & Methods',
    content: 'Private properties use the # prefix and are truly private — they cannot be accessed or detected outside the class. This replaces the convention of using underscores for "private" members.',
    code: `class BankAccount {\n  #balance = 0;\n  #pin;\n\n  constructor(pin) {\n    this.#pin = pin;\n  }\n\n  #validate(pin) {\n    return pin === this.#pin;\n  }\n\n  deposit(amount, pin) {\n    if (!this.#validate(pin)) throw new Error('Invalid PIN');\n    this.#balance += amount;\n    return this.#balance;\n  }\n\n  get balance() {\n    return this.#balance;\n  }\n}\n\nconst account = new BankAccount(1234);\naccount.deposit(100, 1234); // 100\naccount.#balance;           // SyntaxError!`
  },
  {
    title: 'Top-Level Await',
    content: 'Top-level await allows using await outside of async functions in ES modules. This simplifies module initialization that depends on async operations like config loading or database connections.',
    code: `// config.js — top-level await\nconst response = await fetch('/api/config');\nexport const config = await response.json();\n\n// db.js\nimport { config } from './config.js';\nconst db = await connectToDatabase(config.dbUrl);\nexport default db;\n\n// app.js — modules wait for dependencies\nimport db from './db.js'; // waits until db is connected\nimport { config } from './config.js'; // already resolved`
  },
  {
    title: 'Pattern Matching with switch(true)',
    content: 'Using switch(true) allows complex conditional logic that reads cleaner than nested if/else chains. Each case evaluates a boolean expression.',
    code: `function getShippingCost(weight, distance, member) {\n  switch (true) {\n    case weight > 100:\n      return 'Contact for quote';\n    case member && distance < 50:\n      return 'Free';\n    case distance < 50:\n      return '$5.99';\n    case distance < 200:\n      return '$12.99';\n    default:\n      return '$24.99';\n  }\n}\n\n// With object mapping (alternative)\nconst statusMessages = {\n  200: 'OK',\n  404: 'Not Found',\n  500: 'Server Error'\n};\n\nconst message = statusMessages[code] ?? 'Unknown';`
  },
];

export default javascriptNotes;
