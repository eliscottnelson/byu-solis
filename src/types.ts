import { PersonalityType } from './types';

export type PersonalityType = 
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

export interface Major {
  id: string;
  name: string;
  description: string;
  requiredSkills: string[];
  sampleCourses: string[];
  careerPaths: string[];
  jobPlacementRate: number;
  matchPercentages: Record<PersonalityType, number>;
}

export interface Career {
  id: string;
  name: string;
  description: string;
  requiredSkills: string[];
  dailyTasks: string[];
  commonTitles: string[];
  averageSalary: number;
  matchPercentages: Record<PersonalityType, number>;
}

export interface PersonalityTypeDetails {
  type: PersonalityType;
  name: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
}

export interface UserPathInfo {
  academicYear: 'freshman' | 'sophomore' | 'junior' | 'senior';
  graduationDate: string;
  major: string;
  targetCareer: string;
  gpa: number | null;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  quarter: 1 | 2 | 3 | 4;
  year: number;
  completed: boolean;
  category: 'academic' | 'career' | 'internship' | 'preparation';
}

export interface StudentTestimonial {
  id: string;
  name: string;
  major: string;
  graduationYear: number;
  quote: string;
  imageUrl: string;
  company?: string;
  role?: string;
}

export interface MilestoneTemplate {
  id: string;
  title: string;
  description: string;
  quarter: 1 | 2 | 3 | 4;
  year: number;
  category: 'academic' | 'career' | 'internship' | 'preparation';
  majorId: string;
  careerId: string;
}