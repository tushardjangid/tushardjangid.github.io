export interface BlogFile {
  id: string
  filename: string
  title: string
  date: string
  readTime: string
  category: string
  excerpt: string
  tags: string[]
  content: string[]
}

export interface BlogFolder {
  id: string
  folderName: string
  files: BlogFile[]
}

export const blogFolders: BlogFolder[] = [
  {
    id: 'folder-1',
    folderName: 'Agentic AI & Multi-Agent Systems',
    files: [
      {
        id: 'blog-1',
        filename: 'multi-agent-langgraph-mcp.md',
        title: 'Architecting Multi-Agent AI Systems with LangGraph & MCP Tools',
        date: 'Feb 2025',
        readTime: '8 min read',
        category: 'Agentic AI',
        excerpt:
          'A deep dive into building deterministic multi-agent state machines, combining Model Context Protocol (MCP) tool execution with LangGraph for complex document orchestration.',
        tags: ['LangGraph', 'MCP', 'Agentic AI', 'Multi-Agent', 'Python'],
        content: [
          'Multi-agent systems represent a fundamental shift from monolithic LLM prompt chains toward modular, stateful agent networks. Instead of asking a single prompt to perform complex reasoning, extraction, and validation, we divide responsibilities among specialized autonomous sub-agents governed by a central router.',
          'In our multi-agent document automation platform, we leveraged LangGraph state machine graphs alongside Model Context Protocol (MCP) tool declarations to ensure deterministic tool selection and isolated memory boundaries.',
          'Key Architectural Patterns:',
          '• Central Conductor / Router: Receives incoming user intent and dispatches tasks to specialized sub-agents (e.g. Document Parser, Task Extraction Agent, Database Indexer).',
          '• State Persistence: MongoDB-backed checkpointing allows long-running asynchronous workflows to pause for Human-in-the-Loop (HITL) verification without losing context state.',
          '• MCP Tool Standard: Standardizing tool execution via MCP protocol endpoints ensures decoupled agent isolation and secure execution allowlists.',
        ],
      },
    ],
  },
  {
    id: 'folder-2',
    folderName: 'RAG & Vector Search Systems',
    files: [
      {
        id: 'blog-2',
        filename: 'rag-hallucination-reduction.md',
        title: 'Reducing RAG Hallucinations in Enterprise Vector Search',
        date: 'Jan 2025',
        readTime: '6 min read',
        category: 'RAG & LLMs',
        excerpt:
          'Techniques for multi-stage retrieval, reranking with Cross-Encoders, and optimizing AWS Bedrock Claude embeddings for high-precision document Q&A.',
        tags: ['RAG', 'AWS Bedrock', 'AWS OpenSearch', 'LangChain', 'Vector Search'],
        content: [
          'Standard Dense Retrieval (Naïve RAG) often fails in enterprise environments due to semantic ambiguity, chunk boundary fragmentation, and keyword mismatch. To achieve high precision, we implemented a hybrid multi-stage retrieval architecture.',
          'By pairing AWS OpenSearch vector embeddings (k-NN) with lexical BM25 keyword matching and a Cross-Encoder reranking pipeline, we drastically cut hallucination rates during context synthesis.',
          'Implementation Highlights:',
          '• Hybrid Retrieval: Combining vector cosine similarity with BM25 keyword scoring to capture both semantic intent and exact domain terminology.',
          '• Reciprocal Rank Fusion (RRF): Merging rank scores across multiple vector indices before feeding context windows to Claude 3.5 on AWS Bedrock.',
          '• Context Filtering: Enforcing strict confidence thresholds so the LLM explicitly returns "Insufficient Context" rather than hallucinating answers when evidence is missing.',
        ],
      },
    ],
  },
  {
    id: 'folder-3',
    folderName: 'Computer Vision & Real-Time ML',
    files: [
      {
        id: 'blog-3',
        filename: 'yolo11-deepsort-tracking.md',
        title: 'Real-Time Object Detection & Tracking with YOLO11 & DeepSORT',
        date: 'Dec 2024',
        readTime: '7 min read',
        category: 'Computer Vision',
        excerpt:
          'Optimizing YOLO11 inference latency for multi-lane vehicle analytics, ANPR license plate extraction, and high-fps video pipeline processing.',
        tags: ['YOLO11', 'DeepSORT', 'OpenCV', 'ANPR', 'Computer Vision'],
        content: [
          'Building real-time computer vision monitoring systems requires balancing raw detection accuracy with high-throughput frame processing. In high-traffic scenarios, standard object detectors struggle with occlusion and ID-switching.',
          'By combining YOLO11 object detection with Kalman filtering and DeepSORT feature embedding tracking, we maintained consistent vehicle IDs across multi-lane camera feeds.',
          'Key Pipeline Optimization Steps:',
          '• Region of Interest (ROI) Masking: Pre-filtering video frames to focus compute resources strictly on active traffic lanes.',
          '• ANPR / OCR Integration: Triggering license plate extraction only on confirmed tracking trajectories, avoiding duplicate OCR passes on stationary vehicles.',
          '• Asynchronous Frame Buffer: Decoupling video ingestion from inference loops using multi-threaded OpenCV buffers to prevent frame dropping during peak load.',
        ],
      },
    ],
  },
]
