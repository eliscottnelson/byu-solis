import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { majors, careers } from '../data/mockData';

const BrowsePage = () => {
  const [activeTab, setActiveTab] = useState<'majors' | 'careers'>('majors');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMajors = majors.filter(major =>
    major.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCareers = careers.filter(career =>
    career.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Browse All Options
      </h1>

      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-4 pr-10 py-2"
          />
        </div>
      </div>

      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('majors')}
              className={`${
                activeTab === 'majors'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Majors
            </button>
            <button
              onClick={() => setActiveTab('careers')}
              className={`${
                activeTab === 'careers'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Careers
            </button>
          </nav>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {activeTab === 'majors' ? (
          filteredMajors.map((major) => (
            <Link
              key={major.id}
              to={`/detail/major/${major.id}`}
              className="block border-b last:border-b-0 hover:bg-gray-50"
            >
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{major.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{major.description}</p>
              </div>
            </Link>
          ))
        ) : (
          filteredCareers.map((career) => (
            <Link
              key={career.id}
              to={`/detail/career/${career.id}`}
              className="block border-b last:border-b-0 hover:bg-gray-50"
            >
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{career.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{career.description}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default BrowsePage;