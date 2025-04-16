import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { majors, careers } from '../data/mockData';

const getIllustrationUrl = (id: string, category: string) => {
  const illustrations: Record<string, string> = {
    // Majors
    'accounting': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    'entrepreneurial-management': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
    'experience-design-management': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    'finance': 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200',
    'global-supply-chain': 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200',
    'human-resource-management': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200',
    'information-systems': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    'marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    'strategic-management': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    // Careers
    'product-manager': 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1200',
    'financial-analyst': 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1200',
    'hr-manager': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
    'supply-chain-manager': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    'marketing-manager': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    'data-analyst': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    'corporate-lawyer': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
    'entrepreneur': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
    'ux-designer': 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1200',
    'private-equity-analyst': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    'sales-manager': 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1200',
    'operations-manager': 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200',
    'venture-capital-analyst': 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1200',
    'business-intelligence-analyst': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    'management-consultant': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    'investment-banker': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    'corporate-trainer': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
    'ecommerce-manager': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    'nonprofit-executive': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200'
  };
  
  return illustrations[id] || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200';
};

const DetailPage = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const navigate = useNavigate();
  
  const item = category === 'major'
    ? majors.find(m => m.id === id)
    : careers.find(c => c.id === id);

  if (!item) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-center text-gray-600">Item not found</p>
      </div>
    );
  }

  const isMajor = category === 'major';
  const illustrationUrl = getIllustrationUrl(id!, category!);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <button
        onClick={() => navigate(-1)}
        className="group flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
        Back
      </button>

      <div className="relative h-80 mb-12 rounded-2xl overflow-hidden">
        <img
          src={illustrationUrl}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            {item.name}
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl">
            {item.description}
          </p>
        </div>
      </div>

      <div className="card p-8 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Required Skills</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {item.requiredSkills.map((skill, index) => (
              <li key={index} className="flex items-center bg-blue-50/50 text-blue-700 px-6 py-3 rounded-xl border border-blue-100">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {isMajor ? (
          <>
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sample Courses</h2>
              <ul className="grid gap-4">
                {(item as typeof majors[0]).sampleCourses.map((course, index) => (
                  <li key={index} className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-4"></span>
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Career Paths</h2>
              <ul className="grid gap-4">
                {(item as typeof majors[0]).careerPaths.map((path, index) => (
                  <li key={index} className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-4"></span>
                    <span className="text-gray-700">{path}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Job Placement Rate</h2>
              <div className="inline-flex items-center bg-green-50 text-green-700 px-6 py-4 rounded-xl border border-green-100">
                <span className="text-2xl font-semibold">{(item as typeof majors[0]).jobPlacementRate}%</span>
                <span className="ml-2">placement rate</span>
              </div>
            </section>
          </>
        ) : (
          <>
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Daily Tasks</h2>
              <ul className="grid gap-4">
                {(item as typeof careers[0]).dailyTasks.map((task, index) => (
                  <li key={index} className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-4"></span>
                    <span className="text-gray-700">{task}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Job Titles</h2>
              <ul className="grid gap-4">
                {(item as typeof careers[0]).commonTitles.map((title, index) => (
                  <li key={index} className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-4"></span>
                    <span className="text-gray-700">{title}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Average Salary</h2>
              <div className="inline-flex items-center bg-green-50 text-green-700 px-6 py-4 rounded-xl border border-green-100">
                <span className="text-2xl font-semibold">${(item as typeof careers[0]).averageSalary.toLocaleString()}</span>
                <span className="ml-2">per year</span>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailPage;