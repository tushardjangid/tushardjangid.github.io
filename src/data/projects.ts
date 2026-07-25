import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Multi-Agent Document Automation Platform',
    description:
      'Architected an intelligent document automation system featuring semantic search via LangChain/LangGraph, MongoDB-backed multi-agent orchestration with MCP tools, and an automated task creation agent for document indexing.',
    technologies: ['LangChain', 'LangGraph', 'MCP Tools', 'MongoDB', 'Python', 'FastAPI'],
    githubUrl: 'https://github.com/tushardjangid',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Mass Spectrometry Anomaly Detection Pipeline',
    description:
      'Built an automated data processing & anomaly detection pipeline for mass spectrometry WIFF/WIFFScan files. Computes automated peak detection, SNR ratios, calibration curves, coelution checks, and MRM-ratio validation.',
    technologies: ['scikit-learn', 'FastAPI', 'AWS S3', 'AWS EC2', 'Python', 'JWT'],
    githubUrl: 'https://github.com/tushardjangid',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Real-Time Traffic Monitoring & ANPR System',
    description:
      'Developed real-time video analytics using YOLO11 and DeepSORT for vehicle detection and tracking across multi-lane zones. Integrated Automatic Number Plate Recognition (ANPR/OCR) and regional traffic flow load analytics.',
    technologies: ['YOLO11', 'DeepSORT', 'OpenCV', 'ANPR/OCR', 'Python', 'pandas'],
    githubUrl: 'https://github.com/tushardjangid',
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'Enterprise RAG Sales Chatbot',
    description:
      'Implemented a context-aware sales assistant leveraging AWS Bedrock Claude, LangChain orchestration, and an AWS OpenSearch vector database for semantic retrieval, boosting team efficiency by 40%.',
    technologies: ['AWS Bedrock', 'Claude 3.5', 'AWS OpenSearch', 'LangChain', 'Python'],
    githubUrl: 'https://github.com/tushardjangid',
    featured: true,
  },
  {
    id: 'proj-5',
    title: 'Resume Parsing & AutoVQA System',
    description:
      'Created a high-accuracy Named Entity Recognition (NER) system using spaCy Transformers for automated resume extraction, alongside an AutoVQA evaluation platform built with SBERT Sentence Transformers.',
    technologies: ['spaCy Transformers', 'SBERT', 'Django REST', 'PostgreSQL', 'Hugging Face'],
    githubUrl: 'https://github.com/tushardjangid',
    featured: false,
  },
  {
    id: 'proj-6',
    title: 'E-Court Data Extraction Automation System',
    description:
      'Led the engineering of a distributed web scraping automation system using Selenium, Django, PostgreSQL, and Ansible, coupled with Streamlit and OpenSearch for real-time backend data ingestion.',
    technologies: ['Selenium', 'Django', 'PostgreSQL', 'Ansible', 'OpenSearch', 'Streamlit'],
    githubUrl: 'https://github.com/tushardjangid',
    featured: false,
  },
]
