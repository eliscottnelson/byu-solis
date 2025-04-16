import { UserPathInfo, Milestone, Major, Career } from '../types';
import { majors, careers } from '../data/mockData';
import { generateMilestonesForPath } from '../data/milestoneTemplates';

export const generateUserPath = (userInfo: UserPathInfo): Milestone[] => {
  const major = majors.find(m => m.id === userInfo.major);
  const career = careers.find(c => c.id === userInfo.targetCareer);

  if (!major || !career) {
    throw new Error('Invalid major or career selection');
  }

  const templates = generateMilestonesForPath(major.id, career.id);
  
  // Convert templates to milestones
  const milestones = templates.map(template => ({
    ...template,
    id: `${template.id}-${Date.now()}`,
    completed: false
  }));

  // Adjust timeline based on academic year
  const yearOffset = {
    freshman: 0,
    sophomore: 1,
    junior: 2,
    senior: 3
  }[userInfo.academicYear];

  return milestones.map(milestone => ({
    ...milestone,
    year: Math.min(milestone.year + yearOffset, 4)
  }));
};

export const calculateProgress = (milestones: Milestone[]): number => {
  if (milestones.length === 0) return 0;
  return Math.round((milestones.filter(m => m.completed).length / milestones.length) * 100);
};

export const getPathTitle = (majorId: string, careerId: string): string => {
  const major = majors.find(m => m.id === majorId);
  const career = careers.find(c => c.id === careerId);
  return `${major?.name || ''} to ${career?.name || ''} Path`;
};