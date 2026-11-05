// Central content file. Edit here to update site content.

export const identity = {
  name: 'Hirushi Emeshika',
  fullName: 'S.A. Hirushi Emeshika',
  handle: '@emeshika',
  email: 'emeshi.h@outlook.com',
  github: 'https://github.com/emeshika',
  linkedin: 'https://linkedin.com/in/hirushiemeshika',
  location: 'Malabe, Sri Lanka',
  heroRole: 'Data Science Undergraduate at SLIIT · Former DS Intern at Gamage Recruiters',
  heroTagline: 'Machine Learning · NLP · Data Engineering & MLOps · Python · SQL',
  heroValue:
    'I build end-to-end data pipelines, predictive models, and ML systems that turn real-world datasets into business insights.',
  availability: 'Available for Data Science & ML roles',
};

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  subjects?: string;
}

export const educationHistory: EducationEntry[] = [
  {
    degree: 'BSc (Hons) Information Technology — Data Science',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: 'Jul 2023 – Present',
  },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyFull: string;
  period: string;
  type: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: 'gamage',
    role: 'Data Science Intern',
    company: 'Gamage Recruiters',
    companyFull: 'Gamage Recruiters (Pvt) Ltd',
    period: 'Dec 2025 – Jun 2026',
    type: 'Full-time Internship',
    bullets: [
      'Led a team of interns designing and developing data-driven software solutions using Agile practices',
      'Built automated data-processing pipelines detecting duplicate records, logical redundancies, and structural issues in complex datasets',
      'Applied SMOTE and statistical imputation to improve quality and usability of imbalanced datasets',
      'Developed time-series forecasting models for demand prediction and planning',
      'Converted relational data into metrics and KPI scorecards for business decision-making',
    ],
  },
];

// ---------------------------------------------------------------------------
// Research
// ---------------------------------------------------------------------------

export interface Research {
  title: string;
  team: string;
  myRole: string;
  institution: string;
  status: string;
  description: string;
  bullets: string[];
  tech: string[];
  repoUrl?: string;
}

export const research: Research = {
  title: 'Multi-Hazard-Aware Emergency Logistics Route Optimization for Sabaragamuwa Province',
  team: '4-member team',
  myRole: 'Component 2: Road Network Graph Construction',
  institution: 'SLIIT',
  status: 'In Progress · 2026',
  description:
    'A multi-component system providing disaster-aware routing across Sabaragamuwa Province using real flood and landslide risk data. The system exposes all origin-destination routes with an aggregated risk score per route, rather than a single optimal path.',
  bullets: [
    'Acquire OSM road data via OSMnx, clean it, and build a routable graph with NetworkX',
    'Automated OSM topology healing: snapping disconnected segments, bridging gaps, and validating graph integrity',
    'Attach per-segment flood and landslide risk scores; expose all origin-destination routes ranked by aggregated risk',
    'Apply Customizable Contraction Hierarchies (CCH) so hazard weights update quickly as rainfall data changes without recomputing the whole graph',
  ],
  tech: ['Python', 'OSMnx', 'NetworkX', 'GeoPandas', 'QGIS'],
  repoUrl: undefined,
};

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export type ProjectCategory = 'featured' | 'other';

export interface Project {
  id: string;
  title: string;
  role?: string;
  problem: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
  visible: boolean;
  category: ProjectCategory;
  status?: 'in-progress';
}

export const projects: Project[] = [
  {
    id: 'code-review-dl',
    title: 'Intelligent Code Review Assistant',
    role: 'Project Lead',
    problem:
      'AI-powered code review tool using CodeBERT and PyTorch to provide automated code analysis and improvement suggestions. Flask/FastAPI backend with a React.js + Vite frontend.',
    tags: ['Python', 'CodeBERT', 'PyTorch', 'Transformers', 'React.js', 'FastAPI'],
    repoUrl: 'https://github.com/emeshika/Intelligent_Code_Review_Assistant_Using_DL',
    visible: true,
    category: 'featured',
  },
  {
    id: 'nlp-recommendation',
    title: 'NLP Candidate Recommendation Engine',
    role: 'Project Lead',
    problem:
      'Semantic resume-to-job-description matcher using Sentence-BERT embeddings, TF-IDF, and cosine similarity to rank candidates by role fit.',
    tags: ['Python', 'Sentence-BERT', 'TF-IDF', 'Cosine Similarity', 'NLP'],
    repoUrl: 'https://github.com/emeshika/gamage-nlp-project',
    visible: true,
    category: 'featured',
  },
  {
    id: 'mlops-pipeline',
    title: 'Real-Time Fraud Detection & MLOps Pipeline',
    role: 'Individual Project',
    problem:
      'Full ML lifecycle: data ingestion, model training, drift monitoring with Deepchecks, experiment tracking with MLflow, and model serving via Flask API.',
    tags: ['Apache Airflow', 'MLflow', 'Deepchecks', 'Flask', 'Python'],
    repoUrl: 'https://github.com/emeshika/realtime-fraud-detection-mlops',
    visible: true,
    category: 'featured',
  },
  {
    id: 'datax-ride',
    title: 'DataX – Ride Cancellation Prediction',
    role: 'Individual Project',
    problem:
      'Cancellation prediction on a highly skewed dataset using a leakage-safe scikit-learn pipeline with location-specific cancellation-rate features.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Feature Engineering'],
    repoUrl: 'https://github.com/emeshika/ride-cancellation-model',
    visible: true,
    category: 'featured',
  },
  {
    id: 'lankavoyage',
    title: 'LankaVoyage – Agentic Trip Planner',
    role: 'Group Project',
    problem:
      'Budget-agent microservice (Python/Flask + MongoDB Atlas + Redis caching) within a multi-agent travel planning system.',
    tags: ['Python', 'Flask', 'MongoDB Atlas', 'Redis', 'REST APIs'],
    repoUrl: 'https://github.com/emeshika/lankavoyage',
    visible: true,
    category: 'featured',
  },
  {
    id: 'unisphere',
    title: 'UniSphere – Campus Hub Platform',
    role: 'Group Project',
    problem:
      'Asset management module with full CRUD: Spring Boot backend and React.js frontend against MongoDB Atlas.',
    tags: ['Java', 'Spring Boot', 'React.js', 'MongoDB Atlas'],
    repoUrl: 'https://github.com/emeshika/smart-campus-project',
    visible: true,
    category: 'featured',
  },
  {
    id: 'telecom-churn',
    title: 'Telecom Customer Churn & Revenue Analytics',
    role: 'Project Lead',
    problem: 'End-to-end churn prediction and revenue analytics on a real telecom dataset.',
    tags: ['Python', 'scikit-learn', 'XGBoost', 'Pandas', 'EDA'],
    repoUrl: 'https://github.com/emeshika/Telecom-Customer-Churn-Revenue-Analytics',
    visible: false,
    status: 'in-progress',
    category: 'featured',
  },
  {
    id: 'careconnect',
    title: 'CareConnect',
    problem: 'Caregiver scheduling, payments, and client management. MERN stack with user auth and admin dashboard.',
    tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
    repoUrl: 'https://github.com/emeshika/CaregiverManagementSystem',
    visible: true,
    category: 'other',
  },
  {
    id: 'budgetbuddy',
    title: 'BudgetBuddy',
    problem: 'Android finance tracker with transaction categorization, dynamic pie charts, and budget-limit alerts.',
    tags: ['Kotlin', 'Android'],
    repoUrl: 'https://github.com/emeshika/FinanceTrackerApp',
    visible: true,
    category: 'other',
  },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { label: 'ML & Data Science', skills: ['scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'NumPy', 'Pandas', 'Time-Series Forecasting', 'SMOTE'] },
  { label: 'Data Engineering & MLOps', skills: ['Apache Spark', 'Kafka', 'Airflow', 'MLflow'] },
  { label: 'NLP', skills: ['NLTK', 'Sentence-BERT', 'TF-IDF', 'Cosine Similarity'] },
  { label: 'Programming', skills: ['Python', 'SQL', 'Java', 'JavaScript'] },
  { label: 'Analytics & BI', skills: ['Power BI', 'Advanced Excel'] },
  { label: 'Databases', skills: ['PostgreSQL', 'MySQL', 'MS SQL Server', 'MongoDB Atlas'] },
  { label: 'Cloud', skills: ['Microsoft Azure', 'Azure HDInsight', 'Azure Databricks', 'AWS S3'] },
  { label: 'Web & APIs', skills: ['FastAPI', 'Flask', 'REST APIs', 'WebSockets'] },
];

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------

export interface Certification {
  name: string;
  issuer: string;
  verifyUrl?: string;
}

export const certifications: Certification[] = [
  { name: 'Use Apache Spark in Azure Databricks', issuer: 'Microsoft' },
  { name: 'Introduction to Azure HDInsight', issuer: 'Microsoft' },
  { name: 'Configure Azure Blob Storage', issuer: 'Microsoft' },
  { name: 'Cloud Practitioner', issuer: 'AWS SimuLearn' },
  { name: 'Introduction to Amazon S3', issuer: 'AWS' },
];
