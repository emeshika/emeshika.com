// Central content file. Edit this to update site content without touching components.

export const identity = {
  name: 'Hirushi Emeshika',
  fullName: 'S.A. Hirushi Emeshika',
  handle: '@emeshika',
  email: 'emeshi.h@outlook.com',
  github: 'https://github.com/emeshika',
  linkedin: 'https://linkedin.com/in/hirushiemeshika',
  location: 'Malabe, Sri Lanka',
  cvPath: '/Hirushi_Emeshika_CV.pdf',
  heroSubtitle: 'Data Science Undergraduate · Former Data Science Intern @ Gamage Recruiters',
  heroTagline: 'Machine Learning · NLP · Data Engineering & MLOps · Python · SQL',
  heroValue:
    'I build end-to-end data pipelines, predictive models, and ML systems that turn real-world datasets into business insights.',
  openToRoles: 'Open to Data Science / ML / Data Engineering roles',
};

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  subjects?: string;
  grade?: string;
}

export const educationHistory: EducationEntry[] = [
  {
    degree: 'BSc (Hons) Information Technology — Data Science',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: 'Jul 2023 – Present',
  },
  {
    degree: 'G.C.E. Advanced Level — Physical Science Stream',
    institution: 'H/ Vijayaba National School',
    period: '2021',
    subjects: 'Combined Mathematics · Chemistry · Physics',
    grade: '3C',
  },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export interface Experience {
  role: string;
  company: string;
  companyFull: string;
  period: string;
  type: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Data Science Intern',
    company: 'Gamage Recruiters',
    companyFull: 'Gamage Recruiters (Pvt) Ltd',
    period: 'Dec 2025 – May 2026',
    type: 'Internship · 6 months',
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
// Research / FYP
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
  github?: string;
}

export const research: Research = {
  title: 'Multi-Hazard-Aware Emergency Logistics Route Optimization for Sabaragamuwa Province',
  team: '4-member team',
  myRole: 'Component 2: Road Network Graph Construction',
  institution: 'SLIIT',
  status: 'In Progress · 2026',
  description:
    'A multi-component system providing disaster-aware routing across Sabaragamuwa Province, Sri Lanka, using real flood and landslide risk data. Instead of a single "optimal" route, the system exposes all origin–destination routes with an aggregated risk score per route.',
  bullets: [
    'Acquire OSM road data via OSMnx, clean it, and build a routable graph with NetworkX',
    'Automated OSM topology healing — snapping disconnected segments, bridging gaps, and validating graph integrity',
    'Attach per-segment flood and landslide risk scores; expose all origin–destination routes ranked by aggregated risk',
    'Applying Customizable Contraction Hierarchies (CCH) so hazard weights update quickly as rainfall data changes without recomputing the whole graph',
  ],
  tech: ['Python', 'OSMnx', 'NetworkX', 'GeoPandas', 'QGIS'],
  github: undefined, // TODO: add repo URL when published
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
  github?: string;
  visible: boolean;
  category: ProjectCategory;
  status?: 'in-progress';
}

export const projects: Project[] = [
  {
    id: 'realtime-analytics',
    title: 'Real-Time Analytics Platform',
    role: 'Project Lead',
    problem:
      'Streaming analytics platform with a Kafka + Spark pipeline and a live React.js dashboard over WebSockets.',
    tags: ['Apache Kafka', 'Apache Spark', 'React.js', 'WebSockets', 'Python'],
    github: undefined, // TODO: add repo URL
    visible: true,
    category: 'featured',
  },
  {
    id: 'nlp-recommendation',
    title: 'NLP Candidate Recommendation Engine',
    role: 'Project Lead',
    problem:
      'Semantic resume-to-job-description matcher using Sentence-BERT embeddings, TF-IDF, and cosine similarity.',
    tags: ['Python', 'Sentence-BERT', 'TF-IDF', 'Cosine Similarity', 'NLP'],
    github: undefined, // TODO: add repo URL
    visible: true,
    category: 'featured',
  },
  {
    id: 'mlops-pipeline',
    title: 'Automated End-to-End MLOps Pipeline',
    problem:
      'Full ML lifecycle — data ingestion, training, drift monitoring with Deepchecks, experiment tracking with MLflow, and model serving via Flask API.',
    tags: ['Apache Airflow', 'MLflow', 'Deepchecks', 'Flask', 'Python'],
    github: undefined, // TODO: add repo URL
    visible: true,
    category: 'featured',
  },
  {
    id: 'datax-ride',
    title: 'DataX – Ride Cancellation Prediction',
    problem:
      'Cancellation prediction on a highly skewed dataset — leakage-safe scikit-learn pipeline with location-specific cancellation-rate features.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Feature Engineering'],
    github: undefined, // TODO: add repo URL
    visible: true,
    category: 'featured',
  },
  {
    id: 'lankavoyage',
    title: 'LankaVoyage – Agentic Trip Planner',
    role: 'Group Project',
    problem:
      'Built the budget-agent microservice — Python/Flask with MongoDB Atlas and Redis caching — within a multi-agent travel planning system.',
    tags: ['Python', 'Flask', 'MongoDB Atlas', 'Redis', 'REST APIs'],
    github: undefined, // TODO: add repo URL
    visible: true,
    category: 'featured',
  },
  {
    id: 'unisphere',
    title: 'UniSphere – Campus Hub Platform',
    role: 'Group Project',
    problem:
      'Asset management module with full CRUD — Spring Boot backend and React.js frontend against MongoDB Atlas.',
    tags: ['Java', 'Spring Boot', 'React.js', 'MongoDB Atlas'],
    github: undefined, // TODO: add repo URL
    visible: true,
    category: 'featured',
  },
  {
    // visible: false — project in progress; flip to true and add github + metrics when complete
    id: 'telecom-churn',
    title: 'Telecom Customer Churn & Revenue Analytics',
    role: 'Project Lead',
    problem:
      'End-to-end churn prediction and revenue analytics on a real telecom dataset.',
    // TODO: add measurable outcomes (accuracy, precision, etc.) once project is complete
    tags: ['Python', 'scikit-learn', 'XGBoost', 'Pandas', 'EDA'],
    github: undefined, // TODO: add repo URL when published
    visible: false,
    status: 'in-progress',
    category: 'featured',
  },
  // --- Other / smaller projects ---
  {
    id: 'careconnect',
    title: 'CareConnect',
    problem:
      'Caregiver scheduling, payments, and client management — MERN stack with user auth and admin dashboard.',
    tags: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
    github: 'https://github.com/emeshika/CaregiverManagementSystem',
    visible: true,
    category: 'other',
  },
  {
    id: 'budgetbuddy',
    title: 'BudgetBuddy',
    problem:
      'Android finance tracker with transaction categorization, dynamic pie charts, and budget-limit alerts.',
    tags: ['Kotlin', 'Android'],
    github: 'https://github.com/emeshika/FinanceTrackerApp',
    visible: true,
    category: 'other',
  },
  {
    id: 'moviebuddy',
    title: 'MovieBuddy',
    problem: 'Android app for browsing and saving movies.',
    tags: ['Kotlin', 'Android'],
    github: undefined, // TODO: add repo URL if published
    visible: true,
    category: 'other',
  },
  {
    id: 'ticket-booking',
    title: 'Online Ticket Booking System',
    problem:
      'PHP/MySQL web app for event ticket booking with real-time seat selection and payment confirmation.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/emeshika/BookingTickets',
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
  { label: 'Programming', skills: ['Python', 'SQL', 'Java', 'JavaScript', 'PHP', 'HTML/CSS'] },
  {
    label: 'ML & Data Science',
    skills: ['scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'NumPy', 'Pandas', 'Time-Series Forecasting', 'SMOTE'],
  },
  { label: 'NLP', skills: ['NLTK', 'Sentence-BERT', 'TF-IDF', 'Cosine Similarity'] },
  { label: 'Data Engineering & MLOps', skills: ['Apache Spark', 'Kafka', 'Airflow', 'MLflow'] },
  { label: 'Analytics & BI', skills: ['Power BI', 'Advanced Excel', 'SQL'] },
  { label: 'Databases', skills: ['PostgreSQL', 'MySQL', 'MS SQL Server', 'MongoDB Atlas'] },
  {
    label: 'Cloud',
    skills: ['Microsoft Azure', 'Azure HDInsight', 'Azure Databricks', 'AWS S3'],
  },
  {
    label: 'Web & APIs',
    skills: ['FastAPI', 'Flask', 'Spring Boot', 'React.js', 'Node.js', 'Express.js', 'REST', 'WebSockets'],
  },
  { label: 'Tools', skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Streamlit'] },
];

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------

export interface Certification {
  name: string;
  issuer: string;
  verifyUrl?: string; // TODO: add verify URLs for each cert
}

export const certifications: Certification[] = [
  { name: 'Use Apache Spark in Azure Databricks', issuer: 'Microsoft' },
  { name: 'Introduction to Azure HDInsight', issuer: 'Microsoft' },
  { name: 'Configure Azure Blob Storage', issuer: 'Microsoft' },
  { name: 'Cloud Practitioner', issuer: 'AWS SimuLearn' },
  { name: 'Introduction to Amazon S3', issuer: 'AWS' },
  { name: 'Python for Beginners', issuer: 'CODL' },
];
