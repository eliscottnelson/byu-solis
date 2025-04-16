import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Calendar,
  GraduationCap,
  Briefcase,
  BookOpen,
  CheckCircle,
  Circle,
  ChevronRight,
} from 'lucide-react';
import { UserPathInfo, Milestone } from '../types';
import { generateUserPath, getPathTitle } from '../utils/pathUtils';

const TimelineView = ({ milestones, toggleMilestone }: { milestones: Milestone[], toggleMilestone: (id: string) => void }) => {
  const years = [1, 2, 3, 4];
  const quarters = [1, 2, 3, 4];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px] grid grid-cols-4 gap-4 p-4">
        {years.map(year => (
          <div key={year} className="space-y-4">
            <div className="text-lg font-semibold text-gray-900 pb-2 border-b">
              Year {year}
            </div>
            {quarters.map(quarter => {
              const quarterMilestones = milestones.filter(
                m => m.year === year && m.quarter === quarter
              );
              
              if (quarterMilestones.length === 0) return null;

              return (
                <div key={`${year}-${quarter}`} className="space-y-3">
                  <div className="text-sm font-medium text-gray-500">Q{quarter}</div>
                  {quarterMilestones.map(milestone => (
                    <div
                      key={milestone.id}
                      className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors"
                    >
                      <div className="flex items-start">
                        <button
                          onClick={() => toggleMilestone(milestone.id)}
                          className="flex-shrink-0 mt-1"
                        >
                          {milestone.completed ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-300" />
                          )}
                        </button>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">
                            {milestone.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {milestone.description}
                          </div>
                          <div className="mt-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              {
                                academic: 'bg-blue-50 text-blue-700',
                                career: 'bg-purple-50 text-purple-700',
                                internship: 'bg-green-50 text-green-700',
                                preparation: 'bg-orange-50 text-orange-700',
                              }[milestone.category]
                            }`}>
                              {milestone.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const RoadmapPage = () => {
  const location = useLocation();
  const userInfo = location.state?.userInfo as UserPathInfo;
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'academic' | 'career' | 'internship' | 'preparation'>('all');
  const [view, setView] = useState<'list' | 'timeline'>('timeline');

  useEffect(() => {
    if (userInfo) {
      const generatedMilestones = generateUserPath(userInfo);
      setMilestones(generatedMilestones);
    }
  }, [userInfo]);

  const toggleMilestone = (id: string) => {
    setMilestones(
      milestones.map((m) =>
        m.id === id ? { ...m, completed: !m.completed } : m
      )
    );
  };

  const filteredMilestones = activeTab === 'all'
    ? milestones
    : milestones.filter((m) => m.category === activeTab);

  if (!userInfo) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-center text-gray-600">No path information found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {getPathTitle(userInfo.major, userInfo.targetCareer)}
        </h1>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
            <GraduationCap className="w-5 h-5 mr-2" />
            <span>{userInfo.major}</span>
          </div>
          <div className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-lg">
            <Briefcase className="w-5 h-5 mr-2" />
            <span>{userInfo.targetCareer}</span>
          </div>
          <div className="flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-lg">
            <Calendar className="w-5 h-5 mr-2" />
            <span>Graduating: {new Date(userInfo.graduationDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="card p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-4 overflow-x-auto">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'academic', label: 'Academic' },
                  { id: 'career', label: 'Career' },
                  { id: 'internship', label: 'Internship' },
                  { id: 'preparation', label: 'Preparation' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setView('list')}
                  className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                    view === 'list'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  List
                </button>
                <button
                  onClick={() => setView('timeline')}
                  className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                    view === 'timeline'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Timeline
                </button>
              </div>
            </div>

            {view === 'timeline' ? (
              <TimelineView milestones={filteredMilestones} toggleMilestone={toggleMilestone} />
            ) : (
              <div className="space-y-4">
                {filteredMilestones.map((milestone) => (
                  <div
                    key={milestone.id}
                    className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <button
                      onClick={() => toggleMilestone(milestone.id)}
                      className="flex-shrink-0 mt-1"
                    >
                      {milestone.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-300" />
                      )}
                    </button>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{milestone.description}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <span className="inline-flex items-center bg-gray-100 px-2.5 py-0.5 rounded-full">
                          Year {milestone.year}, Q{milestone.quarter}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="card p-6 space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Progress</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Overall Completion</span>
                  <span>
                    {Math.round(
                      (milestones.filter((m) => m.completed).length /
                        milestones.length) *
                        100
                    )}
                    %
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{
                      width: `${
                        (milestones.filter((m) => m.completed).length /
                          milestones.length) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-sm font-medium text-gray-900 mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://marriott.byu.edu/bsfin/careers/career-tools/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 text-sm group"
                    >
                      Career Resources
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://financesociety.byu.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 text-sm group"
                    >
                      Upcoming Events
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://marriott.byu.edu/bsfin/about/contact-us/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 text-sm group"
                    >
                      Schedule Advising
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;