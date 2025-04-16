import { MilestoneTemplate } from '../types';

export const milestoneTemplates: MilestoneTemplate[] = [
  // Year 1 - Fall Semester
  {
    id: 'fin-ib-1.1',
    title: 'Complete ACC 200 - Principles of Accounting',
    description: 'Foundation course required for Finance major application. Aim for A- or higher.',
    quarter: 1,
    year: 1,
    category: 'academic',
    majorId: 'finance',
    careerId: 'investment-banker'
  },
  {
    id: 'fin-ib-1.2',
    title: 'Join Investment Banking Club',
    description: 'Attend weekly meetings and networking events. Sign up for mentorship program.',
    quarter: 1,
    year: 1,
    category: 'career',
    majorId: 'finance',
    careerId: 'investment-banker'
  },
  {
    id: 'fin-ib-1.3',
    title: 'Learn Financial Modeling Basics',
    description: 'Complete Wall Street Prep or Breaking Into Wall Street online courses.',
    quarter: 1,
    year: 1,
    category: 'preparation',
    majorId: 'finance',
    careerId: 'investment-banker'
  },

  // Year 1 - Winter Semester
  {
    id: 'fin-ib-1.4',
    title: 'Complete FIN 201 - Financial Management',
    description: 'Core finance course. Focus on understanding DCF, WACC, and capital structure.',
    quarter: 2,
    year: 1,
    category: 'academic',
    majorId: 'finance',
    careerId: 'investment-banker'
  },
  {
    id: 'fin-ib-1.5',
    title: 'Apply for BYU Investment Group',
    description: 'Submit application for student-managed investment fund position.',
    quarter: 2,
    year: 1,
    category: 'internship',
    majorId: 'finance',
    careerId: 'investment-banker'
  },
  {
    id: 'fin-ib-1.6',
    title: 'Network with Regional Banks',
    description: 'Connect with firms like Crewe Capital, D.A. Davidson, and Zions Bank.',
    quarter: 2,
    year: 1,
    category: 'career',
    majorId: 'finance',
    careerId: 'investment-banker'
  },

  // Year 1 - Spring/Summer
  {
    id: 'fin-ib-1.7',
    title: 'BYU Investment Group Internship',
    description: 'Gain hands-on experience with financial analysis and portfolio management.',
    quarter: 3,
    year: 1,
    category: 'internship',
    majorId: 'finance',
    careerId: 'investment-banker'
  },
  {
    id: 'fin-ib-1.8',
    title: 'Complete Technical Interview Prep',
    description: 'Master accounting, valuation, and technical concepts for interviews.',
    quarter: 4,
    year: 1,
    category: 'preparation',
    majorId: 'finance',
    careerId: 'investment-banker'
  },

  // Year 2 - Fall Semester
  {
    id: 'fin-ib-2.1',
    title: 'Apply for Bulge Bracket Summer Internships',
    description: 'Submit applications to Goldman Sachs, Morgan Stanley, JP Morgan (due ~14 months before start).',
    quarter: 1,
    year: 2,
    category: 'internship',
    majorId: 'finance',
    careerId: 'investment-banker'
  },
  {
    id: 'fin-ib-2.2',
    title: 'Apply to Regional Investment Banks',
    description: 'Submit applications to Crewe Capital and other regional firms as backup.',
    quarter: 1,
    year: 2,
    category: 'internship',
    majorId: 'finance',
    careerId: 'investment-banker'
  },
  {
    id: 'fin-ib-2.3',
    title: 'Complete FIN 301 - Corporate Finance',
    description: 'Advanced financial concepts and valuation techniques.',
    quarter: 1,
    year: 2,
    category: 'academic',
    majorId: 'finance',
    careerId: 'investment-banker'
  },

  // Year 2 - Winter Semester
  {
    id: 'fin-ib-2.4',
    title: 'Interview Preparation',
    description: 'Complete superday interview preparation with IB Club mentors.',
    quarter: 2,
    year: 2,
    category: 'preparation',
    majorId: 'finance',
    careerId: 'investment-banker'
  },
  {
    id: 'fin-ib-2.5',
    title: 'Secure Regional IB Internship',
    description: 'Accept summer analyst position at Crewe Capital or similar firm.',
    quarter: 2,
    year: 2,
    category: 'internship',
    majorId: 'finance',
    careerId: 'investment-banker'
  },

  // Year 2 - Spring/Summer
  {
    id: 'fin-ib-2.6',
    title: 'Regional IB Summer Internship',
    description: 'Complete summer analyst program at regional investment bank.',
    quarter: 3,
    year: 2,
    category: 'internship',
    majorId: 'finance',
    careerId: 'investment-banker'
  },
  {
    id: 'fin-ib-2.7',
    title: 'Network with BB Bank Alumni',
    description: 'Build relationships with BYU alumni at target banks.',
    quarter: 4,
    year: 2,
    category: 'career',
    majorId: 'finance',
    careerId: 'investment-banker'
  },

  // Year 3 - Fall Semester
  {
    id: 'fin-ib-3.1',
    title: 'Apply for BB Summer Internships',
    description: 'Submit applications to Goldman Sachs and other BBs for junior summer.',
    quarter: 1,
    year: 3,
    category: 'internship',
    majorId: 'finance',
    careerId: 'investment-banker'
  },
  {
    id: 'fin-ib-3.2',
    title: 'Complete FIN 401',
    description: 'Advanced financial management and M&A concepts.',
    quarter: 1,
    year: 3,
    category: 'academic',
    majorId: 'finance',
    careerId: 'investment-banker'
  },

  // Year 3 - Winter Semester
  {
    id: 'fin-ib-3.3',
    title: 'BB Superday Interviews',
    description: 'Complete final round interviews at Goldman Sachs or other BBs.',
    quarter: 2,
    year: 3,
    category: 'career',
    majorId: 'finance',
    careerId: 'investment-banker'
  },
  {
    id: 'fin-ib-3.4',
    title: 'Secure BB Summer Internship',
    description: 'Accept summer analyst offer from Goldman Sachs or similar BB bank.',
    quarter: 2,
    year: 3,
    category: 'internship',
    majorId: 'finance',
    careerId: 'investment-banker'
  },

  // Year 3 - Spring/Summer
  {
    id: 'fin-ib-3.5',
    title: 'BB Summer Internship',
    description: 'Complete summer analyst program at Goldman Sachs or similar BB bank.',
    quarter: 3,
    year: 3,
    category: 'internship',
    majorId: 'finance',
    careerId: 'investment-banker'
  },
  {
    id: 'fin-ib-3.6',
    title: 'Secure Full-Time Offer',
    description: 'Convert summer internship into full-time offer.',
    quarter: 4,
    year: 3,
    category: 'career',
    majorId: 'finance',
    careerId: 'investment-banker'
  },

  // Year 4 - Fall/Winter
  {
    id: 'fin-ib-4.1',
    title: 'Complete Advanced Finance Courses',
    description: 'Focus on M&A, LBO modeling, and advanced corporate finance.',
    quarter: 1,
    year: 4,
    category: 'academic',
    majorId: 'finance',
    careerId: 'investment-banker'
  },
  {
    id: 'fin-ib-4.2',
    title: 'Mentor Junior Students',
    description: 'Lead IB Club training sessions and mentor underclassmen.',
    quarter: 2,
    year: 4,
    category: 'career',
    majorId: 'finance',
    careerId: 'investment-banker'
  }
];

export const generateMilestonesForPath = (majorId: string, careerId: string): MilestoneTemplate[] => {
  const templates = milestoneTemplates.filter(
    template => template.majorId === majorId && template.careerId === careerId
  );

  if (templates.length === 0) {
    return generateGenericMilestones(majorId, careerId);
  }

  return templates;
};

const generateGenericMilestones = (majorId: string, careerId: string): MilestoneTemplate[] => {
  return [
    {
      id: `${majorId}-${careerId}-1.1`,
      title: 'Complete Core Prerequisites',
      description: 'Finish foundation courses required for your major.',
      quarter: 1,
      year: 1,
      category: 'academic',
      majorId,
      careerId
    },
    {
      id: `${majorId}-${careerId}-1.2`,
      title: 'Join Professional Association',
      description: 'Get involved with relevant student organizations.',
      quarter: 1,
      year: 1,
      category: 'career',
      majorId,
      careerId
    },
    {
      id: `${majorId}-${careerId}-1.3`,
      title: 'Develop Professional Skills',
      description: 'Focus on key skills needed for your career path.',
      quarter: 2,
      year: 1,
      category: 'preparation',
      majorId,
      careerId
    }
  ];
};