import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    category: 'AI Techniques & Architecture',
    skills: [
      'Agentic AI',
      'Multi-Agent Fleets',
      'RAG Pipelines',
      'Semantic Search',
      'Fine-Tuning (LoRA, QLoRA)',
      'Prompt Engineering (CoT, Few-shot)',
      'Vector Search',
    ],
  },
  {
    category: 'AI/ML Frameworks & LLMs',
    skills: [
      'LangChain',
      'LangGraph',
      'Model Context Protocol (MCP)',
      'AWS Bedrock (Claude)',
      'PyTorch',
      'TensorFlow',
      'spaCy Transformers',
      'SBERT',
      'YOLO11 / YOLOv5',
    ],
  },
  {
    category: 'Computer Vision & Signal ML',
    skills: [
      'Object Tracking (DeepSORT)',
      'ANPR / OCR',
      'OpenCV',
      'CNN Image Segmentation',
      'Mass Spec Anomaly Detection',
      'Scikit-Learn',
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: [
      'AWS (EC2, S3, OpenSearch, Bedrock)',
      'Docker Containerization',
      'FastAPI / Microservices',
      'Django REST',
      'PostgreSQL',
      'MongoDB',
      'Qdrant',
      'Redis',
    ],
  },
]
