import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Technostacks Infotech',
    role: 'Senior AI Engineer',
    startDate: 'Feb 2025',
    endDate: 'Present',
    technologies: [
      'LangChain',
      'LangGraph',
      'MCP',
      'AWS Bedrock (Claude)',
      'AWS OpenSearch',
      'YOLO11',
      'DeepSORT',
      'FastAPI',
      'scikit-learn',
      'PyTorch',
    ],
    achievements: [
      'Architected a multi-agent intelligent document automation platform featuring semantic search via LangChain/LangGraph, MongoDB-backed agent orchestration with MCP tools, and automated task indexing.',
      'Implemented an enterprise sales chatbot leveraging AWS Bedrock Claude with RAG architecture and AWS OpenSearch, boosting team efficiency by 40% through context-aware pitch generation.',
      'Developed a mass-spectrometry anomaly detection pipeline for WIFF/WIFFScan processing, incorporating automated peak detection, SNR computation, calibration curves, and MRM-ratio validation via FastAPI and scikit-learn.',
      'Built a real-time traffic monitoring system using YOLO11 & DeepSORT for vehicle tracking across zones, integrated ANPR for license plate recognition, and built analytics for peak hour flow analysis.',
    ],
  },
  {
    id: 'exp-2',
    company: 'COGBEE Technologies',
    role: 'AI/ML Developer',
    startDate: 'Sep 2022',
    endDate: 'Mar 2025',
    technologies: [
      'spaCy Transformers',
      'SBERT',
      'Hugging Face',
      'Django REST',
      'PostgreSQL',
      'Selenium',
      'OpenSearch',
      'Streamlit',
      'Ansible',
    ],
    achievements: [
      'Achieved 85% evaluation accuracy in an enterprise Resume Parsing API using Django REST and spaCy Transformers for Named Entity Recognition (NER), processing millions of document records.',
      'Developed the AutoVQA evaluation platform using Sentence Transformers (SBERT) and LangChain, achieving 70% accuracy across 5,000+ Q&A assessment pairs.',
      'Led the Python engineering team in building a large-scale data extraction web crawler using Selenium, Django, PostgreSQL, and Ansible, improving data-extraction efficiency by 80%.',
    ],
  },
  {
    id: 'exp-3',
    company: 'Fingertips Solutions',
    role: 'Data Scientist',
    startDate: 'Aug 2021',
    endDate: 'Aug 2022',
    technologies: ['TensorFlow', 'YOLOv5', 'Docker', 'OpenCV', 'SQL', 'Text-to-Speech'],
    achievements: [
      'Developed the FAICAM Security Enhancement System achieving 60-70% accuracy in real-time object detection and face recognition using TensorFlow and YOLOv5, integrated with audio alert conversion.',
      'Containerized and deployed production ML models using Docker and VM infrastructure to ensure 24/7 high-availability operational uptime.',
      'Designed SQL database schema integrations for real-time security logs, alert monitoring, and query performance optimization.',
    ],
  },
]

export const drdoPublication = {
  title: 'Automatic Extraction of Road Network from Satellite Images of Urban Areas Using a Convolution Neural Network',
  institution: 'Defense Research & Development Organization (DRDO)',
  period: 'Sep 2020 — Aug 2021',
  type: 'Peer-Reviewed Research Publication',
  description:
    'Conducted research on satellite remote sensing image segmentation for automatic road network extraction from high-resolution satellite imagery using deep Convolutional Neural Networks (CNNs). Published peer-reviewed research paper.',
  technologies: ['PyTorch', 'CNNs', 'Satellite Remote Sensing', 'OpenCV', 'Image Segmentation'],
}
