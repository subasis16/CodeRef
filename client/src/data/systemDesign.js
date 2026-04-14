export const systemDesignData = [
  {
    id: 'networking',
    title: 'Networking Basics',
    description: 'Core concepts of how computers communicate over the internet.',
    items: [
      {
        name: 'OSI Model vs TCP/IP',
        desc: 'Conceptual frameworks to understand network communication.',
        def: 'The OSI (Open Systems Interconnection) model is a theoretical 7-layer framework that describes how applications communicate over a network. In contrast, TCP/IP is the practical 4-layer model that powers the modern internet, focusing on the Internet Protocol suite used for data transmission.',
        nodes: [
          { id: '1', type: 'custom', position: { x: 50, y: 150 }, data: { label: 'Client', type: 'Client', bg: 'bg-blue-500/10', color: 'text-blue-400' } },
          { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { label: 'TCP/IP Gateway', type: 'Gateway', bg: 'bg-purple-500/10', color: 'text-purple-400' } },
          { id: '3', type: 'custom', position: { x: 450, y: 150 }, data: { label: 'Server App', type: 'Service', bg: 'bg-green-500/10', color: 'text-green-400' } }
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } },
          { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } }
        ]
      },
      {
        name: 'TCP vs. UDP',
        desc: 'The two foundational transport protocols.',
        def: 'TCP is connection-oriented, ensuring reliable, ordered, and error-checked delivery of data, making it ideal for web and email. UDP is connectionless and prioritized for speed, commonly used in live streaming and gaming where occasional data loss is acceptable.',
        nodes: [
          { id: '1', type: 'custom', position: { x: 50, y: 50 }, data: { label: 'TCP Client', type: 'Client', bg: 'bg-blue-500/10', color: 'text-blue-400' } },
          { id: '2', type: 'custom', position: { x: 300, y: 50 }, data: { label: 'TCP App (Reliable)', type: 'Service', bg: 'bg-green-500/10', color: 'text-green-400' } },
          { id: '3', type: 'custom', position: { x: 50, y: 200 }, data: { label: 'UDP Client', type: 'Client', bg: 'bg-blue-500/10', color: 'text-blue-400' } },
          { id: '4', type: 'custom', position: { x: 300, y: 200 }, data: { label: 'UDP Stream (Fast)', type: 'Service', bg: 'bg-orange-500/10', color: 'text-orange-400' } }
        ],
        edges: [
          { id: 'e1-2-1', source: '1', target: '2', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } },
          { id: 'e3-4', source: '3', target: '4', animated: false, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2, strokeDasharray: '5,5' } }
        ]
      }
    ]
  },
  {
    id: 'scaling',
    title: 'Scaling Strategies',
    description: 'Approaches to handle increased load and user traffic.',
    items: [
      {
        name: 'Vertical Scaling (Scale Up)',
        desc: 'Adding more resources (CPU, RAM, Storage) to a single server.',
        def: 'Vertical scaling involves increasing the capacity of an existing hardware device. While easy to implement, it has hit upper limits of hardware growth and introduces a single point of failure for the entire system.',
        nodes: [
          { id: '1', type: 'custom', position: { x: 100, y: 150 }, data: { label: 'Small Server', type: 'Service', bg: 'bg-green-500/10', color: 'text-green-400' } },
          { id: '2', type: 'custom', position: { x: 350, y: 120 }, data: { label: 'Beefy Server (More RAM)', type: 'Database', bg: 'bg-pink-500/10', color: 'text-pink-400' } }
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } }
        ]
      },
      {
        name: 'Horizontal Scaling (Scale Out)',
        desc: 'Adding more servers to your pool of resources.',
        def: 'Horizontal scaling adds more machines to your network, distributing the load across multiple nodes. This strategy offers better fault tolerance and near-infinite scalability but requires a load balancer and distributed state management.',
        nodes: [
          { id: '1', type: 'custom', position: { x: 50, y: 150 }, data: { label: 'Load Balancer', type: 'Gateway', bg: 'bg-purple-500/10', color: 'text-purple-400' } },
          { id: '2', type: 'custom', position: { x: 300, y: 50 }, data: { label: 'Node 1', type: 'Service', bg: 'bg-green-500/10', color: 'text-green-400' } },
          { id: '3', type: 'custom', position: { x: 300, y: 150 }, data: { label: 'Node 2', type: 'Service', bg: 'bg-green-500/10', color: 'text-green-400' } },
          { id: '4', type: 'custom', position: { x: 300, y: 250 }, data: { label: 'Node 3', type: 'Service', bg: 'bg-green-500/10', color: 'text-green-400' } }
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } },
          { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } },
          { id: 'e1-4', source: '1', target: '4', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } }
        ]
      }
    ]
  },
  {
    id: 'load-balancing',
    title: 'Load Balancing',
    description: 'Distributing incoming network traffic efficiently across a group of servers.',
    items: [
      {
        name: 'Why Load Balance?',
        desc: 'Preventing single servers from overloading and crashing.',
        def: 'Load balancing acts as a traffic controller, distributing requests across a server farm to ensure no single server becomes a bottleneck. It improves overall application availability and reliability through health checking and failover mechanisms.',
        nodes: [
          { id: '1', type: 'custom', position: { x: 50, y: 50 }, data: { label: 'User A', type: 'Client', bg: 'bg-blue-500/10', color: 'text-blue-400' } },
          { id: '2', type: 'custom', position: { x: 50, y: 200 }, data: { label: 'User B', type: 'Client', bg: 'bg-blue-500/10', color: 'text-blue-400' } },
          { id: '3', type: 'custom', position: { x: 250, y: 125 }, data: { label: 'Load Balancer', type: 'Gateway', bg: 'bg-purple-500/10', color: 'text-purple-400' } },
          { id: '4', type: 'custom', position: { x: 450, y: 50 }, data: { label: 'App Node 1', type: 'Service', bg: 'bg-green-500/10', color: 'text-green-400' } },
          { id: '5', type: 'custom', position: { x: 450, y: 200 }, data: { label: 'App Node 2', type: 'Service', bg: 'bg-green-500/10', color: 'text-green-400' } }
        ],
        edges: [
          { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } },
          { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } },
          { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } },
          { id: 'e3-5', source: '3', target: '5', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } }
        ]
      },
      {
        name: 'Common Algorithms',
        desc: 'How the load balancer decides which server gets the next request.',
        def: 'Algorithms like Round Robin, Least Connections, and IP Hashing determine routing logic. Choosing the right algorithm depends on factors like server capacity, request complexity, and the need for session persistence.',
        nodes: [
          { id: '1', type: 'custom', position: { x: 50, y: 150 }, data: { label: 'Traffic', type: 'Client', bg: 'bg-blue-500/10', color: 'text-blue-400' } },
          { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { label: 'Round Robin', type: 'Gateway', bg: 'bg-purple-500/10', color: 'text-purple-400' } },
          { id: '3', type: 'custom', position: { x: 450, y: 50 }, data: { label: 'Server A', type: 'Service', bg: 'bg-green-500/10', color: 'text-green-400' } },
          { id: '4', type: 'custom', position: { x: 450, y: 250 }, data: { label: 'Server B', type: 'Service', bg: 'bg-green-500/10', color: 'text-green-400' } }
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } },
          { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } },
          { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } }
        ]
      }
    ]
  },
  {
    id: 'caching',
    title: 'Caching Strategies',
    description: 'Temporarily storing data to serve future requests faster.',
    items: [
      {
        name: 'Where to Cache',
        desc: 'Caching can happen at multiple layers of a system.',
        def: 'Caching can be implemented at the browser level, the network edge (CDN), the application level (Redis/Memcached), or even within the database itself. Each layer provides different latency benefits and trade-offs.',
        nodes: [
          { id: '1', type: 'custom', position: { x: 50, y: 150 }, data: { label: 'Browser Cache', type: 'Client', bg: 'bg-blue-500/10', color: 'text-blue-400' } },
          { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { label: 'CDN Edge', type: 'Gateway', bg: 'bg-purple-500/10', color: 'text-purple-400' } },
          { id: '3', type: 'custom', position: { x: 450, y: 150 }, data: { label: 'Redis Data', type: 'Database', bg: 'bg-yellow-500/10', color: 'text-yellow-400' } }
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } },
          { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } }
        ]
      },
      {
        name: 'Cache Eviction Policies',
        desc: 'How to make room when cache is full.',
        def: 'When a cache reaches its capacity, an eviction policy like LRU (Least Recently Used) determines which item to discard. This ensures that the most relevant data remains accessible for optimal performance.',
        nodes: [
          { id: '1', type: 'custom', position: { x: 100, y: 150 }, data: { label: 'Full Memory', type: 'Queue', bg: 'bg-orange-500/10', color: 'text-orange-400' } },
          { id: '2', type: 'custom', position: { x: 350, y: 150 }, data: { label: 'Evict LRU Item', type: 'Lambda', bg: 'bg-pink-500/10', color: 'text-pink-400' } }
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } }
        ]
      }
    ]
  },
  {
    id: 'database-scaling',
    title: 'Database Architecture',
    description: 'Dealing with massive amounts of data and query load.',
    items: [
      {
        name: 'SQL vs NoSQL',
        desc: 'Choosing the right database paradigm.',
        def: 'SQL databases are relational and structured, providing ACID compliance for transaction safety. NoSQL databases are non-relational and offer greater flexibility and easier horizontal scaling for massive, unstructured data sets.',
        nodes: [
          { id: '1', type: 'custom', position: { x: 100, y: 100 }, data: { label: 'Relational (SQL)', type: 'Database', bg: 'bg-blue-500/10', color: 'text-blue-400' } },
          { id: '2', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Document DB (NoSQL)', type: 'Database', bg: 'bg-green-500/10', color: 'text-green-400' } }
        ],
        edges: []
      },
      {
        name: 'Replication & Sharding',
        desc: 'Techniques for database scale.',
        def: 'Replication clones data across multiple nodes to increase read availability, while Sharding partitions data into separate fragments to distribute the write load. Both are essential for handling heavy throughput.',
        nodes: [
          { id: '1', type: 'custom', position: { x: 250, y: 50 }, data: { label: 'Primary (Writes)', type: 'Database', bg: 'bg-yellow-500/10', color: 'text-yellow-400' } },
          { id: '2', type: 'custom', position: { x: 100, y: 200 }, data: { label: 'Read Replica 1', type: 'Database', bg: 'bg-yellow-500/10', color: 'text-yellow-400' } },
          { id: '3', type: 'custom', position: { x: 400, y: 200 }, data: { label: 'Read Replica 2', type: 'Database', bg: 'bg-yellow-500/10', color: 'text-yellow-400' } }
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } },
          { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } }
        ]
      }
    ]
  },
  {
    id: 'cap-theorem',
    title: 'CAP Theorem',
    description: 'The fundamental trade-offs in distributed data systems.',
    items: [
      {
        name: 'Consistency, Availability, Partition Tolerance',
        desc: 'You can only guarantee 2 out of 3 in a distributed store.',
        def: 'The CAP theorem states that a distributed data store can only simultaneously provide two out of the three guarantees: Consistency, Availability, and Partition Tolerance. In modern distributed systems, Partition Tolerance is non-negotiable, requiring a choice between C and A.',
        nodes: [
          { id: '1', type: 'custom', position: { x: 250, y: 50 }, data: { label: 'Consistency', type: 'Service', bg: 'bg-blue-500/10', color: 'text-blue-400' } },
          { id: '2', type: 'custom', position: { x: 100, y: 200 }, data: { label: 'Availability', type: 'Service', bg: 'bg-green-500/10', color: 'text-green-400' } },
          { id: '3', type: 'custom', position: { x: 400, y: 200 }, data: { label: 'Partition Tolerance', type: 'Service', bg: 'bg-pink-500/10', color: 'text-pink-400' } }
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: false, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2, strokeDasharray: '5,5' } },
          { id: 'e2-3', source: '2', target: '3', animated: false, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2, strokeDasharray: '5,5' } },
          { id: 'e3-1', source: '3', target: '1', animated: false, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2, strokeDasharray: '5,5' } }
        ]
      }
    ]
  },
  {
    id: 'communication',
    title: 'System Communication',
    description: 'How microservices and different system components talk.',
    items: [
      {
        name: 'Synchronous vs Asynchronous',
        desc: 'Direct vs decoupled communication patterns.',
        def: 'Synchronous communication requires the caller to wait for a response before continuing. Asynchronous communication allows for high decoupling through message queues or event streams, making systems more resilient to transient failures.',
        nodes: [
          { id: '1', type: 'custom', position: { x: 50, y: 150 }, data: { label: 'Service A', type: 'Service', bg: 'bg-green-500/10', color: 'text-green-400' } },
          { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { label: 'Event Queue', type: 'Queue', bg: 'bg-orange-500/10', color: 'text-orange-400' } },
          { id: '3', type: 'custom', position: { x: 450, y: 150 }, data: { label: 'Service B', type: 'Service', bg: 'bg-green-500/10', color: 'text-green-400' } }
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } },
          { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: 'rgba(255,255,255,0.3)', strokeWidth: 2 } }
        ]
      }
    ]
  }
];
