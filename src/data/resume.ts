export const profile = {
  name: 'Adila Biswas',
  tagline: 'Computer Science · Data Analyst · Fullstack Developer',
  location: 'Newnan, Georgia',
  phone: '(678) 378-5928',
  email: 'adilabiswas2003@gmail.com',
  github: 'https://github.com/abiswas2003',
  linkedin: 'https://www.linkedin.com/in/adila-biswas-2b698921b/',
  about:
    'I build systems that turn messy operational data into clear decisions — from manufacturing analytics and supply-chain pipelines to fullstack legal tech. Magical girl energy optional; sharp analysis required.',
}

export const education = {
  school: 'Georgia State University',
  location: 'Atlanta, GA',
  degree: "Bachelor's in Computer Science",
  gpa: '3.72',
  graduation: 'May 2025',
  courses: [
    'Data Structures',
    'Database Systems',
    'Design and Algorithms',
    'Machine Learning',
    'Linear Algebra',
    'Probability and Statistics',
  ],
}

export const experience = [
  {
    role: 'Production Processor / Manufacturing Data Analyst',
    company: 'Midsouth Steel, LLC',
    location: 'College Park, GA',
    dates: 'May 2026 – Present',
    bullets: [
      'Analyze production, inventory, material, and fabrication data using Tekla PowerFab, Excel, and SQL to support planning, procurement, scheduling, and supply-chain operations.',
      'Evaluate bills of material, quantities, weights, and specifications to catch discrepancies and keep material planning accurate.',
      'Perform material utilization, CWT, pricing, nesting, and stock-length analysis to reduce scrap and control costs.',
      'Coordinate with purchasing, project management, detailing, and fabrication teams to resolve material and production issues.',
    ],
  },
  {
    role: 'Supply Chain & Inventory Analyst',
    company: 'Biswas Enterprise',
    location: 'Atlanta, GA (Remote)',
    dates: 'May 2022 – December 2024',
    bullets: [
      'Managed bulk purchasing, inventory, vendor, and replenishment data across two gas station locations.',
      'Tracked supplier pricing, purchase quantities, and demand to support cost-effective procurement.',
      'Streamlined data-entry and inventory-tracking processes, reducing processing time by 31%.',
      'Assisted with vendor management by comparing supplier costs, bulk orders, and purchasing trends.',
    ],
  },
  {
    role: 'Fullstack Developer Intern',
    company: 'Stein Law, LLC',
    location: 'Sandy Springs, GA',
    dates: 'January 2024 – August 2024',
    bullets: [
      'Developed a full-stack BOI E-Filing application with React.js to streamline FinCEN Beneficial Ownership submissions.',
      'Built multi-step forms with conditional rendering, validation, XML processing, and API key authentication.',
      'Integrated secure data handling, field-level encryption, and external API services.',
      'Collaborated with attorneys and legal staff to gather requirements, test, and ship updates.',
    ],
  },
  {
    role: 'IT Support Intern',
    company: 'Stein Law, LLC',
    location: 'Sandy Springs, GA',
    dates: 'June 2023 – August 2023',
    bullets: [
      'Diagnosed and resolved software and hardware issues across employee workstations.',
      'Installed and configured operating systems, firewalls, and legal software suites.',
      'Supported network devices, printers, and file-sharing systems across departments.',
      'Helped transition firm operations to OPNsense via Protectli firewall installation.',
    ],
  },
]

export const projects = [
  {
    title: 'Active Geospatial Operations Analytics Platform',
    bullets: [
      'Interactive Power BI geospatial dashboard monitoring construction projects across the southeastern U.S. for Midsouth Steel.',
      'API-driven pipeline integrating Tekla PowerFab, MySQL, and Power BI for automated project and production sync.',
      'Address-conflict detection and geospatial logic to improve visibility into demand and supply-chain operations.',
    ],
  },
  {
    title: 'Gene Expression Classification',
    bullets: [
      'End-to-end pipeline classifying ALL vs AML leukemia from ~7,129 gene-expression features.',
      'Compared logistic regression and random forest with cross-validation, ROC curves, and feature importance.',
      'Presented methodology and rankings through an interactive multipage Streamlit dashboard.',
    ],
  },
  {
    title: 'Federated Unlearning Research',
    bullets: [
      'Implemented six federated unlearning methods (FedEraser, FedAccum, SISA, and enhanced variants).',
      'Evaluated forgetting quality with accuracy, activation distance, JS divergence, and cosine distance on MovieLens.',
      'Showed calibrated FedEraser++ achieved the strongest forgetting while preserving model utility.',
    ],
  },
  {
    title: 'BOI E-File — Stein Law, LLC',
    bullets: [
      'Full-stack web app for FinCEN Beneficial Ownership Information e-filing.',
      'Dynamic form rendering, validation, API keys, and secure MySQL-backed data handling with PHP and JavaScript.',
    ],
  },
  {
    title: 'Firewall Security Initialization — Stein Law, LLC',
    bullets: [
      'Configured Protectli hardware firewall with OPNsense to harden network security.',
      'Custom firewall rules, VPN policies, traffic analysis, and penetration testing.',
    ],
  },
  {
    title: 'Girl Dinner — HackHers',
    bullets: [
      'Safety-focused web interface that disguises emergency outreach as a food ordering app.',
      'Built with Figma, PHP, HTML, and CSS — awarded third place for innovation and user impact.',
    ],
  },
]

export const skills = {
  languages: ['English — Native', 'Bengali — Fluent', 'Hindi — Intermediate', 'French — Intermediate'],
  technology: [
    'Power BI',
    'Tekla PowerFab',
    'Python',
    'Java',
    'C++',
    'HTML / CSS',
    'JavaScript / React',
    'MySQL',
    'Power Query',
    'Excel',
  ],
  certificates: [
    'IBM: Intro to Data Analytics',
    'Microsoft: Excel and Copilot Fundamentals',
  ],
  affiliations: [
    'Vice President, Sigma Sigma Rho Sorority Inc. (Jan–May 2024)',
    'ACM',
    'BSA',
    'MSA',
  ],
  awards: [
    'Third Place — HackHers Hackathon',
    "President's List — Summer 2023, Fall 2023",
  ],
  interests: ['Artificial Intelligence', 'Data Analysis', 'Data Science', 'Supply Chain', 'Logistics'],
}
