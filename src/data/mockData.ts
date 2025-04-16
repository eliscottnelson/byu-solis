import { Major, Career, PersonalityType, PersonalityTypeDetails } from '../types';

export const majors: Major[] = [
  {
    id: 'accounting',
    name: 'Accounting',
    description: 'Accounting is the language of business. This major trains students to prepare, analyze, and verify financial information essential for decision-making, taxation, auditing, and reporting. BYU\'s program is nationally recognized for its rigor and high placement rate.',
    requiredSkills: [
      'Attention to detail',
      'Critical thinking',
      'Financial literacy',
      'Technical proficiency (Excel, QuickBooks, etc.)',
      'Integrity and ethics'
    ],
    sampleCourses: [
      'Financial Accounting',
      'Tax Planning and Research',
      'Audit Theory and Practice',
      'Business Law',
      'Advanced Accounting'
    ],
    careerPaths: [
      'Audit Associate',
      'Tax Consultant',
      'Financial Accountant',
      'Forensic Accountant',
      'Controller'
    ],
    jobPlacementRate: 98,
    matchPercentages: {
      INTJ: 92, INTP: 85, ENTJ: 88, ENTP: 75,
      INFJ: 70, INFP: 65, ENFJ: 72, ENFP: 60,
      ISTJ: 95, ISFJ: 88, ESTJ: 90, ESFJ: 82,
      ISTP: 80, ISFP: 70, ESTP: 75, ESFP: 65
    }
  },
  {
    id: 'entrepreneurial-management',
    name: 'Entrepreneurial Management',
    description: 'This major equips students to launch startups, innovate within companies, or scale small businesses. It emphasizes lean startup methodology, product development, and hands-on learning through competitions and mentorship.',
    requiredSkills: [
      'Initiative and self-motivation',
      'Creativity and adaptability',
      'Strategic thinking',
      'Communication and sales',
      'Risk management'
    ],
    sampleCourses: [
      'Startup Bootcamp',
      'Product Development',
      'Venture Capital',
      'Growth Strategy',
      'Innovation Management'
    ],
    careerPaths: [
      'Founder/Co-Founder',
      'Product Manager',
      'Business Development Manager',
      'Innovation Consultant',
      'Venture Analyst'
    ],
    jobPlacementRate: 85,
    matchPercentages: {
      INTJ: 85, INTP: 82, ENTJ: 95, ENTP: 92,
      INFJ: 75, INFP: 72, ENFJ: 85, ENFP: 88,
      ISTJ: 70, ISFJ: 65, ESTJ: 80, ESFJ: 75,
      ISTP: 78, ISFP: 70, ESTP: 90, ESFP: 85
    }
  },
  {
    id: 'experience-design-management',
    name: 'Experience Design & Management',
    description: 'ExDM combines psychology, design, and business to create meaningful customer experiences. Students are trained to lead in hospitality, recreation, wellness, and experience-based industries.',
    requiredSkills: [
      'Empathy and emotional intelligence',
      'Experience mapping',
      'Event and program planning',
      'Communication and facilitation',
      'Customer service orientation'
    ],
    sampleCourses: [
      'Experience Design',
      'Customer Journey Mapping',
      'Event Management',
      'Service Innovation',
      'Program Evaluation'
    ],
    careerPaths: [
      'Experience Manager',
      'Event Coordinator',
      'Guest Services Director',
      'Recreation Program Manager',
      'Wellness Program Director'
    ],
    jobPlacementRate: 88,
    matchPercentages: {
      INTJ: 70, INTP: 65, ENTJ: 80, ENTP: 75,
      INFJ: 90, INFP: 88, ENFJ: 95, ENFP: 92,
      ISTJ: 72, ISFJ: 85, ESTJ: 78, ESFJ: 92,
      ISTP: 68, ISFP: 82, ESTP: 85, ESFP: 90
    }
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Finance students learn to manage capital, assess risk, value assets, and make strategic investment decisions. The program prepares students for high-impact roles in investment banking, corporate finance, and wealth management.',
    requiredSkills: [
      'Financial modeling',
      'Quantitative reasoning',
      'Market analysis',
      'Excel, Bloomberg, Python (optional)',
      'Decision-making under pressure'
    ],
    sampleCourses: [
      'Corporate Finance',
      'Investment Analysis',
      'Financial Markets',
      'Portfolio Management',
      'Risk Management'
    ],
    careerPaths: [
      'Investment Banking Analyst',
      'Financial Analyst',
      'Private Equity Analyst',
      'Corporate Finance Associate',
      'Wealth Manager'
    ],
    jobPlacementRate: 95,
    matchPercentages: {
      INTJ: 95, INTP: 88, ENTJ: 95, ENTP: 85,
      INFJ: 70, INFP: 65, ENFJ: 75, ENFP: 68,
      ISTJ: 92, ISFJ: 75, ESTJ: 90, ESFJ: 72,
      ISTP: 85, ISFP: 70, ESTP: 88, ESFP: 75
    }
  },
  {
    id: 'global-supply-chain',
    name: 'Global Supply Chain Management',
    description: 'This major teaches students how to manage the flow of goods, services, and data across the global economy. It emphasizes operations, logistics, sourcing, and systems optimization.',
    requiredSkills: [
      'Systems thinking',
      'Process optimization',
      'Data analysis',
      'Negotiation',
      'Attention to efficiency'
    ],
    sampleCourses: [
      'Supply Chain Strategy',
      'Operations Management',
      'Global Sourcing',
      'Logistics Management',
      'Supply Chain Analytics'
    ],
    careerPaths: [
      'Supply Chain Analyst',
      'Operations Manager',
      'Procurement Specialist',
      'Logistics Planner',
      'Inventory Manager'
    ],
    jobPlacementRate: 92,
    matchPercentages: {
      INTJ: 88, INTP: 85, ENTJ: 90, ENTP: 82,
      INFJ: 75, INFP: 70, ENFJ: 80, ENFP: 72,
      ISTJ: 95, ISFJ: 85, ESTJ: 92, ESFJ: 80,
      ISTP: 90, ISFP: 75, ESTP: 85, ESFP: 78
    }
  },
  {
    id: 'human-resource-management',
    name: 'Human Resource Management',
    description: 'This major prepares students to lead in talent development, organizational behavior, and workplace culture. It covers recruiting, performance management, compensation, and employee relations.',
    requiredSkills: [
      'Communication',
      'Emotional intelligence',
      'Problem-solving',
      'Data-driven decision-making',
      'Leadership and facilitation'
    ],
    sampleCourses: [
      'Organizational Behavior',
      'HR Analytics',
      'Compensation Strategy',
      'Employment Law',
      'Training & Development'
    ],
    careerPaths: [
      'HR Generalist',
      'Talent Acquisition Specialist',
      'People Operations Analyst',
      'Compensation Analyst',
      'HR Business Partner'
    ],
    jobPlacementRate: 90,
    matchPercentages: {
      INTJ: 75, INTP: 70, ENTJ: 85, ENTP: 78,
      INFJ: 92, INFP: 88, ENFJ: 95, ENFP: 90,
      ISTJ: 85, ISFJ: 92, ESTJ: 88, ESFJ: 95,
      ISTP: 72, ISFP: 80, ESTP: 78, ESFP: 85
    }
  },
  {
    id: 'information-systems',
    name: 'Information Systems',
    description: 'Information Systems bridges business and technology. Students learn how to design, manage, and implement systems that support decision-making and operations in organizations.',
    requiredSkills: [
      'Coding (SQL, Python, JavaScript)',
      'Systems analysis and design',
      'Data analytics and visualization',
      'Technical writing',
      'Project management'
    ],
    sampleCourses: [
      'Database Design',
      'Business Programming',
      'Systems Analysis',
      'Data Analytics',
      'Cybersecurity'
    ],
    careerPaths: [
      'Business Analyst',
      'Data Analyst',
      'Systems Developer',
      'IT Consultant',
      'Product Analyst'
    ],
    jobPlacementRate: 95,
    matchPercentages: {
      INTJ: 95, INTP: 95, ENTJ: 90, ENTP: 92,
      INFJ: 75, INFP: 72, ENFJ: 78, ENFP: 75,
      ISTJ: 90, ISFJ: 80, ESTJ: 85, ESFJ: 75,
      ISTP: 92, ISFP: 78, ESTP: 82, ESFP: 70
    }
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Marketing students learn how to understand consumers, build brands, and drive demand. The program covers analytics, digital strategy, advertising, and product development.',
    requiredSkills: [
      'Communication and storytelling',
      'Creativity and design thinking',
      'Data analysis',
      'Market research',
      'Strategic planning'
    ],
    sampleCourses: [
      'Marketing Strategy',
      'Consumer Behavior',
      'Digital Marketing',
      'Brand Management',
      'Marketing Analytics'
    ],
    careerPaths: [
      'Brand Manager',
      'Marketing Analyst',
      'Digital Marketing Specialist',
      'Content Strategist',
      'Product Marketing Manager'
    ],
    jobPlacementRate: 92,
    matchPercentages: {
      INTJ: 80, INTP: 75, ENTJ: 88, ENTP: 90,
      INFJ: 85, INFP: 82, ENFJ: 92, ENFP: 95,
      ISTJ: 78, ISFJ: 82, ESTJ: 85, ESFJ: 90,
      ISTP: 72, ISFP: 85, ESTP: 92, ESFP: 88
    }
  },
  {
    id: 'strategic-management',
    name: 'Strategic Management',
    description: 'Strategic Management teaches students how to analyze industries, create competitive advantage, and lead companies through change. It emphasizes critical thinking, business analysis, and leadership.',
    requiredSkills: [
      'Strategic analysis',
      'Critical thinking',
      'Communication and presentation',
      'Leadership and decision-making',
      'Financial literacy'
    ],
    sampleCourses: [
      'Strategic Analysis',
      'Competitive Strategy',
      'Business Model Innovation',
      'Change Management',
      'Corporate Strategy'
    ],
    careerPaths: [
      'Strategy Analyst',
      'Management Consultant',
      'Corporate Development Associate',
      'Business Operations Manager',
      'Founder/CEO'
    ],
    jobPlacementRate: 93,
    matchPercentages: {
      INTJ: 95, INTP: 90, ENTJ: 98, ENTP: 92,
      INFJ: 85, INFP: 80, ENFJ: 90, ENFP: 85,
      ISTJ: 88, ISFJ: 80, ESTJ: 92, ESFJ: 85,
      ISTP: 82, ISFP: 75, ESTP: 88, ESFP: 80
    }
  }
];

export const careers: Career[] = [
  {
    id: 'product-manager',
    name: 'Product Manager',
    description: 'Leads the strategy, design, and launch of a product by coordinating between design, engineering, and business teams.',
    requiredSkills: [
      'User research',
      'Agile project management',
      'Prioritization',
      'Communication',
      'Technical fluency'
    ],
    dailyTasks: [
      'Writing product specs',
      'Leading cross-functional meetings',
      'Gathering user feedback',
      'Managing product lifecycle'
    ],
    commonTitles: [
      'Associate Product Manager',
      'Technical Product Manager',
      'Group Product Manager'
    ],
    averageSalary: 120000,
    matchPercentages: {
      INTJ: 90, INTP: 88, ENTJ: 92, ENTP: 90,
      INFJ: 82, INFP: 78, ENFJ: 85, ENFP: 82,
      ISTJ: 80, ISFJ: 75, ESTJ: 85, ESFJ: 78,
      ISTP: 82, ISFP: 75, ESTP: 85, ESFP: 78
    }
  },
  {
    id: 'financial-analyst',
    name: 'Financial Analyst',
    description: 'Analyzes financial data to guide business investment and budgeting decisions.',
    requiredSkills: [
      'Excel & modeling',
      'Financial statement analysis',
      'Forecasting',
      'Attention to detail',
      'Presentation'
    ],
    dailyTasks: [
      'Analyzing budgets and variance',
      'Creating financial models',
      'Supporting strategic initiatives',
      'Reporting key metrics'
    ],
    commonTitles: [
      'Corporate Financial Analyst',
      'FP&A Analyst',
      'Investment Analyst'
    ],
    averageSalary: 75000,
    matchPercentages: {
      INTJ: 88, INTP: 85, ENTJ: 90, ENTP: 82,
      INFJ: 75, INFP: 70, ENFJ: 78, ENFP: 72,
      ISTJ: 92, ISFJ: 85, ESTJ: 90, ESFJ: 80,
      ISTP: 85, ISFP: 75, ESTP: 80, ESFP: 72
    }
  },
  {
    id: 'hr-manager',
    name: 'Human Resources Manager',
    description: 'Oversees recruitment, employee development, and organizational culture.',
    requiredSkills: [
      'Communication',
      'Emotional intelligence',
      'Policy knowledge',
      'Strategic thinking',
      'Conflict resolution'
    ],
    dailyTasks: [
      'Leading hiring processes',
      'Conducting performance reviews',
      'Designing training programs',
      'Managing employee relations'
    ],
    commonTitles: [
      'HR Generalist',
      'HRBP',
      'Talent Manager'
    ],
    averageSalary: 85000,
    matchPercentages: {
      INTJ: 75, INTP: 70, ENTJ: 85, ENTP: 78,
      INFJ: 90, INFP: 85, ENFJ: 95, ENFP: 88,
      ISTJ: 82, ISFJ: 90, ESTJ: 85, ESFJ: 92,
      ISTP: 70, ISFP: 80, ESTP: 75, ESFP: 85
    }
  },
  {
    id: 'supply-chain-manager',
    name: 'Supply Chain Manager',
    description: 'Ensures products are efficiently sourced, produced, and delivered.',
    requiredSkills: [
      'Logistics systems',
      'ERP software',
      'Process optimization',
      'Supplier negotiation',
      'Problem-solving'
    ],
    dailyTasks: [
      'Managing vendors',
      'Forecasting demand',
      'Optimizing delivery routes',
      'Monitoring inventory'
    ],
    commonTitles: [
      'Logistics Analyst',
      'Operations Planner',
      'Procurement Manager'
    ],
    averageSalary: 90000,
    matchPercentages: {
      INTJ: 85, INTP: 82, ENTJ: 88, ENTP: 80,
      INFJ: 75, INFP: 70, ENFJ: 80, ENFP: 75,
      ISTJ: 92, ISFJ: 85, ESTJ: 90, ESFJ: 82,
      ISTP: 88, ISFP: 75, ESTP: 85, ESFP: 78
    }
  },
  {
    id: 'marketing-manager',
    name: 'Marketing Manager',
    description: 'Develops and executes campaigns to promote a product or brand.',
    requiredSkills: [
      'Content strategy',
      'SEO/digital tools',
      'Market research',
      'Branding',
      'Communication'
    ],
    dailyTasks: [
      'Planning campaigns',
      'Analyzing performance',
      'Collaborating with creative teams',
      'Managing budgets'
    ],
    commonTitles: [
      'Marketing Coordinator',
      'Digital Marketing Manager',
      'Brand Manager'
    ],
    averageSalary: 85000,
    matchPercentages: {
      INTJ: 80, INTP: 75, ENTJ: 85, ENTP: 88,
      INFJ: 85, INFP: 82, ENFJ: 90, ENFP: 92,
      ISTJ: 78, ISFJ: 80, ESTJ: 82, ESFJ: 88,
      ISTP: 72, ISFP: 85, ESTP: 88, ESFP: 90
    }
  },
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    description: 'Interprets complex datasets to support decision-making across departments.',
    requiredSkills: [
      'SQL & Excel',
      'Data visualization',
      'Python/R',
      'Attention to patterns',
      'Storytelling with data'
    ],
    dailyTasks: [
      'Querying databases',
      'Creating dashboards',
      'Running experiments',
      'Presenting insights'
    ],
    commonTitles: [
      'Business Analyst',
      'Reporting Analyst',
      'BI Specialist'
    ],
    averageSalary: 80000,
    matchPercentages: {
      INTJ: 92, INTP: 95, ENTJ: 88, ENTP: 90,
      INFJ: 80, INFP: 75, ENFJ: 78, ENFP: 75,
      ISTJ: 90, ISFJ: 82, ESTJ: 85, ESFJ: 78,
      ISTP: 88, ISFP: 75, ESTP: 80, ESFP: 72
    }
  },
  {
    id: 'corporate-lawyer',
    name: 'Corporate Lawyer',
    description: 'Advises businesses on legal obligations, contracts, and risk management.',
    requiredSkills: [
      'Legal writing',
      'Negotiation',
      'Research',
      'Regulatory understanding',
      'Client advocacy'
    ],
    dailyTasks: [
      'Drafting contracts',
      'Reviewing compliance',
      'Advising executives',
      'Supporting M&A deals'
    ],
    commonTitles: [
      'Associate Attorney',
      'Legal Counsel',
      'Corporate Partner'
    ],
    averageSalary: 150000,
    matchPercentages: {
      INTJ: 90, INTP: 85, ENTJ: 92, ENTP: 85,
      INFJ: 82, INFP: 75, ENFJ: 85, ENFP: 78,
      ISTJ: 95, ISFJ: 85, ESTJ: 92, ESFJ: 80,
      ISTP: 80, ISFP: 72, ESTP: 78, ESFP: 70
    }
  },
  {
    id: 'entrepreneur',
    name: 'Entrepreneur / Founder',
    description: 'Launches and manages new ventures with a focus on innovation and growth.',
    requiredSkills: [
      'Vision and risk tolerance',
      'Sales and fundraising',
      'Product development',
      'Grit and adaptability'
    ],
    dailyTasks: [
      'Pitching to investors',
      'Hiring early team',
      'Managing cash flow',
      'Iterating product'
    ],
    commonTitles: [
      'CEO',
      'Startup Founder',
      'Managing Partner'
    ],
    averageSalary: 100000,
    matchPercentages: {
      INTJ: 88, INTP: 85, ENTJ: 95, ENTP: 92,
      INFJ: 80, INFP: 78, ENFJ: 88, ENFP: 90,
      ISTJ: 82, ISFJ: 75, ESTJ: 88, ESFJ: 80,
      ISTP: 85, ISFP: 78, ESTP: 92, ESFP: 85
    }
  },
  {
    id: 'ux-designer',
    name: 'UX Designer',
    description: 'Designs digital experiences to be user-friendly, intuitive, and engaging.',
    requiredSkills: [
      'Wireframing tools (Figma, Sketch)',
      'Empathy and creativity',
      'User testing',
      'Design thinking'
    ],
    dailyTasks: [
      'Conducting user research',
      'Designing wireframes',
      'Testing usability',
      'Collaborating with product teams'
    ],
    commonTitles: [
      'UX/UI Designer',
      'Product Designer',
      'Interaction Designer'
    ],
    averageSalary: 90000,
    matchPercentages: {
      INTJ: 85, INTP: 82, ENTJ: 80, ENTP: 85,
      INFJ: 90, INFP: 92, ENFJ: 88, ENFP: 90,
      ISTJ: 78, ISFJ: 85, ESTJ: 75, ESFJ: 82,
      ISTP: 80, ISFP: 92, ESTP: 78, ESFP: 85
    }
  },
  {
    id: 'private-equity-analyst',
    name: 'Private Equity Analyst',
    description: 'Analyzes and supports investments in private companies with a goal of high returns.',
    requiredSkills: [
      'Financial modeling',
      'Deal analysis',
      'Due diligence',
      'Market research',
      'Investment thesis development'
    ],
    dailyTasks: [
      'Sourcing and screening targets',
      'Running LBO models',
      'Supporting acquisitions',
      'Monitoring portfolio performance'
    ],
    commonTitles: [
      'Analyst',
      'Associate',
      'Portfolio Manager'
    ],
    averageSalary: 135000,
    matchPercentages: {
      INTJ: 92, INTP: 88, ENTJ: 95, ENTP: 90,
      INFJ: 70, INFP: 65, ENFJ: 75, ENFP: 70,
      ISTJ: 90, ISFJ: 75, ESTJ: 92, ESFJ: 72,
      ISTP: 82, ISFP: 70, ESTP: 85, ESFP: 75
    }
  },
  {
    id: 'sales-manager',
    name: 'Sales Manager',
    description: 'Leads a team of salespeople and oversees revenue growth and pipeline management.',
    requiredSkills: [
      'Persuasion',
      'CRM systems',
      'Pipeline analysis',
      'Coaching',
      'Territory management'
    ],
    dailyTasks: [
      'Managing team performance',
      'Forecasting revenue',
      'Supporting key deals',
      'Coordinating with marketing'
    ],
    commonTitles: [
      'Sales Associate',
      'Account Executive',
      'Director of Sales'
    ],
    averageSalary: 100000,
    matchPercentages: {
      INTJ: 75, INTP: 70, ENTJ: 88, ENTP: 85,
      INFJ: 78, INFP: 72, ENFJ: 90, ENFP: 88,
      ISTJ: 82, ISFJ: 80, ESTJ: 90, ESFJ: 88,
      ISTP: 75, ISFP: 78, ESTP: 95, ESFP: 92
    }
  },
  {
    id: 'operations-manager',
    name: 'Operations Manager',
    description: 'Ensures efficient day-to-day business functions and workflows.',
    requiredSkills: [
      'Problem-solving',
      'Process analysis',
      'Staff coordination',
      'Time management',
      'Resource optimization'
    ],
    dailyTasks: [
      'Overseeing schedules',
      'Managing vendor relations',
      'Monitoring performance metrics',
      'Implementing SOPs'
    ],
    commonTitles: [
      'Business Operations Manager',
      'Plant Manager',
      'General Manager'
    ],
    averageSalary: 85000,
    matchPercentages: {
      INTJ: 85, INTP: 80, ENTJ: 90, ENTP: 82,
      INFJ: 78, INFP: 72, ENFJ: 85, ENFP: 78,
      ISTJ: 95, ISFJ: 88, ESTJ: 92, ESFJ: 85,
      ISTP: 88, ISFP: 75, ESTP: 85, ESFP: 80
    }
  },
  {
    id: 'venture-capital-analyst',
    name: 'Venture Capital Analyst',
    description: 'Assesses startups for investment potential and supports portfolio companies.',
    requiredSkills: [
      'Market research',
      'Startup evaluation',
      'Financial modeling',
      'Networking',
      'Due diligence'
    ],
    dailyTasks: [
      'Screening startups',
      'Attending pitch events',
      'Supporting due diligence',
      'Building investment theses'
    ],
    commonTitles: [
      'Analyst',
      'Associate',
      'Investment Partner'
    ],
    averageSalary: 110000,
    matchPercentages: {
      INTJ: 90, INTP: 88, ENTJ: 95, ENTP: 92,
      INFJ: 75, INFP: 72, ENFJ: 82, ENFP: 85,
      ISTJ: 85, ISFJ: 75, ESTJ: 88, ESFJ: 78,
      ISTP: 82, ISFP: 75, ESTP: 90, ESFP: 82
    }
  },
  {
    id: 'business-intelligence-analyst',
    name: 'Business Intelligence Analyst',
    description: 'Transforms data into actionable insights that drive strategy.',
    requiredSkills: [
      'SQL',
      'Tableau/Power BI',
      'Data storytelling',
      'KPI design',
      'Statistical analysis'
    ],
    dailyTasks: [
      'Designing dashboards',
      'Analyzing trends',
      'Supporting executives with insights',
      'Automating reports'
    ],
    commonTitles: [
      'BI Analyst',
      'Data Visualization Specialist',
      'Reporting Lead'
    ],
    averageSalary: 85000,
    matchPercentages: {
      INTJ: 92, INTP: 95, ENTJ: 88, ENTP: 90,
      INFJ: 78, INFP: 75, ENFJ: 80, ENFP: 75,
      ISTJ: 90, ISFJ: 82, ESTJ: 85, ESFJ: 78,
      ISTP: 88, ISFP: 72, ESTP: 78, ESFP: 70
    }
  },
  {
    id: 'management-consultant',
    name: 'Management Consultant',
    description: 'Advises organizations on strategy, operations, and organizational challenges.',
    requiredSkills: [
      'Strategic thinking',
      'Problem-solving',
      'Client management',
      'Data analysis',
      'Change management'
    ],
    dailyTasks: [
      'Analyzing business problems',
      'Conducting stakeholder interviews',
      'Developing recommendations',
      'Leading client workshops'
    ],
    commonTitles: [
      'Business Analyst',
      'Associate Consultant',
      'Engagement Manager'
    ],
    averageSalary: 95000,
    matchPercentages: {
      INTJ: 90, INTP: 88, ENTJ: 95, ENTP: 92,
      INFJ: 82, INFP: 78, ENFJ: 88, ENFP: 85,
      ISTJ: 85, ISFJ: 78, ESTJ: 90, ESFJ: 82,
      ISTP: 80, ISFP: 72, ESTP: 85, ESFP: 78
    }
  },
  {
    id: 'investment-banker',
    name: 'Investment Banker',
    description: 'Assists organizations in raising capital and executing financial transactions.',
    requiredSkills: [
      'Financial modeling',
      'Valuation',
      'Deal execution',
      'Client management',
      'Market analysis'
    ],
    dailyTasks: [
      'Building financial models',
      'Creating pitch books',
      'Meeting with clients',
      'Executing transactions'
    ],
    commonTitles: [
      'Investment Banking Analyst',
      'Associate',
      'Vice President'
    ],
    averageSalary: 150000,
    matchPercentages: {
      INTJ: 90, INTP: 85, ENTJ: 95, ENTP: 88,
      INFJ: 70, INFP: 65, ENFJ: 78, ENFP: 72,
      ISTJ: 92, ISFJ: 75, ESTJ: 90, ESFJ: 75,
      ISTP: 82, ISFP: 70, ESTP: 85, ESFP: 75
    }
  },
  {
    id: 'corporate-trainer',
    name: 'Corporate Trainer',
    description: 'Develops and delivers training programs to improve employee skills and leadership capabilities.',
    requiredSkills: [
      'Public speaking',
      'Curriculum design',
      'Adult learning principles',
      'Facilitation',
      'Assessment design'
    ],
    dailyTasks: [
      'Conducting training sessions',
      'Developing learning materials',
      'Evaluating program effectiveness',
      'Coaching individuals'
    ],
    commonTitles: [
      'Learning & Development Specialist',
      'Training Coordinator',
      'Leadership Development Coach'
    ],
    averageSalary: 75000,
    matchPercentages: {
      INTJ: 78, INTP: 75, ENTJ: 85, ENTP: 82,
      INFJ: 90, INFP: 88, ENFJ: 95, ENFP: 92,
      ISTJ: 80, ISFJ: 88, ESTJ: 85, ESFJ: 90,
      ISTP: 72, ISFP: 80, ESTP: 82, ESFP: 88
    }
  },
  {
    id: 'ecommerce-manager',
    name: 'E-commerce Manager',
    description: 'Oversees online retail operations and digital sales channels.',
    requiredSkills: [
      'Digital marketing',
      'Platform management',
      'Analytics',
      'Customer experience',
      'Inventory management'
    ],
    dailyTasks: [
      'Managing online storefront',
      'Optimizing conversion rates',
      'Coordinating fulfillment',
      'Analyzing sales data'
    ],
    commonTitles: [
      'Digital Commerce Manager',
      'Online Retail Director',
      'E-commerce Operations Lead'
    ],
    averageSalary: 80000,
    matchPercentages: {
      INTJ: 85, INTP: 82, ENTJ: 88, ENTP: 85,
      INFJ: 80, INFP: 78, ENFJ: 85, ENFP: 88,
      ISTJ: 90, ISFJ: 85, ESTJ: 88, ESFJ: 85,
      ISTP: 82, ISFP: 78, ESTP: 85, ESFP: 82
    }
  },
  {
    id: 'nonprofit-executive',
    name: 'Nonprofit Executive',
    description: 'Leads mission-driven organizations focused on social impact and community development.',
    requiredSkills: [
      'Fundraising',
      'Grant writing',
      'Stakeholder management',
      'Program development',
      'Community outreach'
    ],
    dailyTasks: [
      'Managing programs',
      'Writing grant proposals',
      'Building partnerships',
      'Engaging donors'
    ],
    commonTitles: [
      'Program Director',
      'Development Manager',
      'Executive Director'
    ],
    averageSalary: 85000,
    matchPercentages: {
      INTJ: 82, INTP: 78, ENTJ: 88, ENTP: 85,
      INFJ: 95, INFP: 92, ENFJ: 95, ENFP: 90,
      ISTJ: 85, ISFJ: 88, ESTJ: 85, ESFJ: 90,
      ISTP: 75, ISFP: 82, ESTP: 78, ESFP: 85
    }
  }
];

export const personalityTypes: PersonalityType[] = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
];

export const personalityTypeDetails: Record<PersonalityType, PersonalityTypeDetails> = {
  ESTP: {
    type: 'ESTP',
    name: 'The Entrepreneur',
    description: 'ESTPs are energetic, action-driven individuals who thrive on excitement and results. Known for their quick thinking and charm, they are often the first to dive into new opportunities or challenges. ESTPs learn best through doing and often grow bored with theoretical or overly structured academic environments. They are natural risk-takers and persuasive communicators, making them highly effective in competitive, fast-paced industries. In education, they excel in environments where they can lead, sell, or build something tangible. In careers, they gravitate toward roles that offer freedom, measurable outcomes, and real-time problem-solving.',
    strengths: [
      'Bold, confident, and quick to adapt',
      'Great at thinking on their feet and taking calculated risks',
      'Thrive in sales, real estate, growth marketing, or entrepreneurial ventures',
      'Naturally persuasive and socially savvy'
    ],
    weaknesses: [
      'May lack patience for long-term planning or administrative details',
      'Struggle in highly structured or academic roles',
      'Can make impulsive decisions without fully considering the consequences'
    ]
  },
  ESFP: {
    type: 'ESFP',
    name: 'The Entertainer',
    description: 'ESFPs are social, spontaneous individuals who bring enthusiasm and warmth into every room. They are highly observant and emotionally in tune, often using humor and charm to connect with others. In the classroom, ESFPs prefer active, hands-on learning and may find lecture-heavy formats draining. They\'re often drawn to creative or performance-based disciplines, where their energy and emotional intelligence shine. In their careers, ESFPs seek variety, personal connection, and environments where they can make an immediate impact.',
    strengths: [
      'Energetic, expressive, and highly emotionally aware',
      'Adapt well to change and bring teams together with their natural charisma',
      'Strong performers in public-facing roles like event planning, PR, customer success, or brand ambassadorship',
      'Naturally good at reading people and managing group dynamics'
    ],
    weaknesses: [
      'Can struggle with structure, deadlines, or long-term follow-through',
      'May avoid conflict or difficult decisions',
      'Easily bored by repetitive tasks or highly analytical work'
    ]
  },
  ENFP: {
    type: 'ENFP',
    name: 'The Campaigner',
    description: 'ENFPs are enthusiastic, big-picture thinkers who bring contagious energy and creativity to every endeavor. They love exploring new possibilities and often pursue multiple interests at once. In education, ENFPs thrive in flexible, discussion-based environments and dislike being boxed in. They\'re idea generators who excel in brainstorming and connecting seemingly unrelated dots. Career-wise, ENFPs look for roles that offer autonomy, purpose, and opportunities to connect with people. They\'re more motivated by mission and creativity than by predictability or hierarchy.',
    strengths: [
      'Innovative, inspiring, and deeply curious',
      'Strong communicators and natural networkers',
      'Great in roles like brand strategy, creative leadership, entrepreneurship, or advocacy',
      'See the potential in others and motivate teams with vision'
    ],
    weaknesses: [
      'May struggle with follow-through or time management',
      'Can become distracted by new ideas before finishing the current one',
      'Dislike routine and may resist necessary structure'
    ]
  },
  ENTP: {
    type: 'ENTP',
    name: 'The Debater',
    description: 'ENTPs are sharp, energetic, and intellectually fearless. They enjoy challenging the status quo and are constantly on the lookout for better ways of doing things. In school, ENTPs often enjoy debate, strategy, and concept-heavy subjects where they can argue their way to a deeper understanding. They\'re most alive when learning something new or disrupting stagnant systems. Professionally, ENTPs flourish in roles that allow them to innovate, pitch ideas, or lead strategic transformations—especially in fast-moving or competitive industries.',
    strengths: [
      'Energetic, persuasive, and quick-witted',
      'Thrive on change, innovation, and solving complex problems',
      'Excellent fits for venture capital, strategy consulting, product innovation, or business development',
      'Comfortable taking risks and trying untested approaches'
    ],
    weaknesses: [
      'May lose interest in execution or operational tasks',
      'Can be argumentative or dismissive of authority',
      'May take on too many projects without finishing them'
    ]
  },
  ESTJ: {
    type: 'ESTJ',
    name: 'The Executive',
    description: 'ESTJs are responsible, organized leaders who value efficiency, structure, and measurable success. They are natural managers who enjoy bringing order to chaos and seeing tangible results from their efforts. In school, ESTJs thrive in clear, disciplined environments and enjoy competing for top performance. They gravitate toward business disciplines that reward logic, leadership, and structure. Professionally, they are drawn to operations, management, finance, or law—any field that requires clear decision-making and accountability.',
    strengths: [
      'Disciplined, practical, and results-driven',
      'Excellent at managing people, systems, and processes',
      'Excel in roles like project management, supply chain, corporate finance, or legal/compliance',
      'Clear communicators who value productivity and results'
    ],
    weaknesses: [
      'May be inflexible or resistant to unconventional ideas',
      'Can overlook emotional nuance in leadership',
      'Prefer control and order—may struggle in ambiguous or unstructured environments'
    ]
  },
  ESFJ: {
    type: 'ESFJ',
    name: 'The Consul',
    description: 'ESFJs are sociable, conscientious, and highly attuned to the needs of others. They are often the first to offer help and work hard to maintain harmony within a group. In school, they are dependable and attentive students who value relationships with teachers and peers alike. ESFJs prefer collaborative, people-focused learning and excel when clear expectations are set. Career-wise, they often pursue roles that involve helping others, organizing events or processes, or providing customer support. They are motivated by approval and thrive in community-building roles.',
    strengths: [
      'Loyal, thoughtful, and warm-hearted',
      'Detail-oriented and organized, especially in interpersonal settings',
      'Thrive in careers like HR, administration, customer success, or event coordination',
      'Strong sense of duty—follow through on commitments'
    ],
    weaknesses: [
      'May take criticism personally or avoid confrontation',
      'Often put others\' needs before their own',
      'Can struggle in high-pressure roles that require rapid adaptability'
    ]
  },
  ENFJ: {
    type: 'ENFJ',
    name: 'The Protagonist',
    description: 'ENFJs are charismatic, empathetic leaders who are motivated by purpose and people. They excel at rallying others around a shared mission and are often found in mentorship or leadership roles from an early age. In school, ENFJs do well in collaborative settings and enjoy discussions that connect academic material to real-world impact. They are passionate, articulate, and committed to helping others grow. In the workplace, ENFJs are drawn to leadership, coaching, team development, and socially conscious business initiatives.',
    strengths: [
      'Emotionally intelligent, inspirational, and mission-driven',
      'Strong communicators who naturally mentor and motivate others',
      'Fit well in leadership, organizational development, education, or consulting',
      'Skilled at aligning teams around shared goals'
    ],
    weaknesses: [
      'May burn out from overcommitting or over-helping',
      'Can struggle with decisiveness if it risks disappointing others',
      'May internalize failure when others don\'t live up to their potential'
    ]
  },
  ENTJ: {
    type: 'ENTJ',
    name: 'The Commander',
    description: 'ENTJs are bold, decisive, and strategically focused. They are natural-born leaders who thrive in competitive environments and love building systems that scale. In school, ENTJs take initiative, often stepping into leadership roles during group projects. They prefer efficiency over process and want to master subjects that are practical and outcome-driven. Professionally, ENTJs are drawn to roles where they can build, optimize, and lead—whether that\'s founding a company, leading a department, or turning around an underperforming operation.',
    strengths: [
      'Confident, strategic, and highly goal-oriented',
      'Strong natural leaders who excel under pressure',
      'Perfect for consulting, executive leadership, corporate strategy, or entrepreneurship',
      'Thrive in high-stakes, results-driven environments'
    ],
    weaknesses: [
      'May intimidate others or be perceived as overly forceful',
      'Can prioritize outcomes over people',
      'May struggle in environments that require emotional sensitivity or slow consensus-building'
    ]
  },
  ISTP: {
    type: 'ISTP',
    name: 'The Virtuoso',
    description: 'ISTPs are independent thinkers with a natural talent for figuring out how things work. They\'re logical, adaptable, and thrive on hands-on problem solving. Whether it\'s technology, machines, or systems, ISTPs love experimenting and reverse-engineering to find better ways of doing things. In school, they may struggle with rigid classroom rules or theoretical lectures, but they excel when given freedom to explore real-world applications. Career-wise, they\'re drawn to fast-moving environments that reward resourcefulness and direct action over abstract planning.',
    strengths: [
      'Calm under pressure and quick-thinking in emergencies',
      'Highly analytical, especially with tangible systems',
      'Thrive in roles like supply chain, operations, IT, or product development',
      'Flexible and solution-oriented—adapt well in changing environments'
    ],
    weaknesses: [
      'May be bored by theoretical learning or routine work',
      'Can struggle with long-term commitments or structured planning',
      'Sometimes appear detached or uninterested in group dynamics'
    ]
  },
  ISFP: {
    type: 'ISFP',
    name: 'The Adventurer',
    description: 'ISFPs are gentle, creative spirits who value authenticity and beauty in their surroundings. They\'re introspective but warm, and they prefer to express themselves through art, design, or action rather than long conversations. In school, ISFPs tend to enjoy creative projects and collaborative environments, but they can be quietly overwhelmed by rigid schedules or competitive pressure. They work best when they feel emotionally connected to their work. Professionally, they flourish in roles that offer flexibility, a chance to help others, or room for creativity.',
    strengths: [
      'Creative and highly observant of subtle details',
      'Kind and empathetic—great team players in people-oriented roles',
      'Excel in marketing, branding, user experience, or event planning',
      'Bring a calm, grounded presence to emotionally charged environments'
    ],
    weaknesses: [
      'May avoid conflict or tough conversations',
      'Struggle with long-term planning or working under high-pressure deadlines',
      'Can be perfectionistic about their own work but hesitant to advocate for it'
    ]
  },
  INFP: {
    type: 'INFP',
    name: 'The Mediator',
    description: 'INFPs are deeply introspective, values-driven individuals who strive to make a difference in the world. They are imaginative, empathetic, and often idealistic, with a strong desire to live in alignment with their personal ethics. In school, INFPs are often quiet but deeply thoughtful contributors. They enjoy literature, psychology, and other fields that allow them to explore human nature. In careers, they are most satisfied when their work serves a purpose, fosters growth, or gives them creative freedom.',
    strengths: [
      'Empathetic, idealistic, and mission-driven',
      'Strong writers and communicators when given time to reflect',
      'Thrive in roles like writing, social entrepreneurship, user research, or cause-based marketing',
      'Often strong mentors or coaches—help others find purpose and direction'
    ],
    weaknesses: [
      'Can be overly idealistic or unrealistic about expectations',
      'May become discouraged by criticism or bureaucratic obstacles',
      'Struggle with assertiveness or following rigid schedules'
    ]
  },
  INTP: {
    type: 'INTP',
    name: 'The Thinker',
    description: 'INTPs are curious, independent-minded problem solvers who love diving deep into abstract concepts and theoretical frameworks. They thrive when exploring new ideas and questioning conventional wisdom. In school, they often shine in subjects like math, computer science, or philosophy—anything that rewards analytical thinking. INTPs tend to prefer individual work over group projects and are more motivated by understanding than by grades. Career-wise, they gravitate toward innovation-driven roles where they can explore, ideate, and build systems or products from scratch.',
    strengths: [
      'Exceptionally logical and innovative',
      'Comfortable with complexity and ambiguity',
      'Fit well in tech, engineering, product strategy, data science, or academic research',
      'Think long-term and enjoy solving difficult, layered problems'
    ],
    weaknesses: [
      'May struggle with deadlines or follow-through',
      'Can be overly theoretical and lose interest in execution',
      'Tend to dislike rigid rules, routine meetings, or tasks they perceive as "shallow"'
    ]
  },
  INFJ: {
    type: 'INFJ',
    name: 'The Advocate',
    description: 'INFJs are insightful, principled individuals who combine deep empathy with strategic thinking. They have an uncanny ability to understand others\' motivations and a strong drive to make the world better. In education, INFJs excel in humanities and social sciences, where they can explore human nature and complex systems. They prefer depth over breadth and often seek meaning in their studies. Professionally, INFJs are drawn to roles where they can help others develop, create positive change, or work toward a meaningful mission.',
    strengths: [
      'Insightful about people and systems',
      'Strong written and interpersonal communication',
      'Excel in counseling, organizational development, or social impact roles',
      'Able to see both big picture and important details'
    ],
    weaknesses: [
      'Can be perfectionistic and overly self-critical',
      'May have difficulty with direct confrontation',
      'Can become overwhelmed by others\' emotional needs'
    ]
  },
  INTJ: {
    type: 'INTJ',
    name: 'The Architect',
    description: 'INTJs are strategic, analytical thinkers who excel at developing complex systems and solutions. They combine creativity with logic to build comprehensive frameworks and long-term plans. In education, INTJs thrive in challenging, theoretical subjects and prefer independent study. They\'re often drawn to fields like economics, engineering, or strategy where they can apply systematic thinking to real-world problems. Professionally, INTJs excel in roles that require innovation, strategic planning, and complex problem-solving.',
    strengths: [
      'Strategic thinking and long-term planning',
      'Strong analytical and problem-solving abilities',
      'Excel in roles requiring system design or strategic planning',
      'Independent and self-motivated learners'
    ],
    weaknesses: [
      'May appear aloof or overly critical',
      'Can be impatient with less efficient methods or people',
      'May overlook practical constraints in pursuit of perfect solutions'
    ]
  },
  ISTJ: {
    type: 'ISTJ',
    name: 'The Logistician',
    description: 'ISTJs are methodical, detail-oriented individuals who value reliability and structure. They excel at creating and maintaining systems that work efficiently. In education, ISTJs appreciate clear expectations and structured learning environments. They often excel in business, accounting, or technical fields where attention to detail and systematic thinking are valued. Professionally, ISTJs are drawn to roles that require precision, organization, and consistent execution.',
    strengths: [
      'Highly organized and detail-oriented',
      'Reliable and consistent in execution',
      'Excel in roles requiring accuracy and systematic thinking',
      'Strong sense of duty and responsibility'
    ],
    weaknesses: [
      'May resist change or new approaches',
      'Can be inflexible about rules and procedures',
      'May struggle with ambiguous or rapidly changing situations'
    ]
  },
  ISFJ: {
    type: 'ISFJ',
    name: 'The Defender',
    description: 'ISFJs are caring, practical individuals who excel at creating and maintaining supportive environments. They combine attention to detail with a strong sense of empathy. In education, ISFJs are conscientious students who value practical applications and clear instruction. They often excel in fields where they can help others while maintaining structure and organization. Professionally, ISFJs thrive in roles that allow them to support others while working within established systems.',
    strengths: [
      'Detail-oriented and highly responsible',
      'Strong interpersonal awareness and empathy',
      'Excel in supportive or service-oriented roles',
      'Good at maintaining systems and relationships'
    ],
    weaknesses: [
      'May have difficulty saying no or setting boundaries',
      'Can be overly modest about their contributions',
      'May avoid necessary conflict or change'
    ]
  }
};