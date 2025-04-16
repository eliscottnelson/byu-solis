import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { majors, careers } from '../data/mockData';

const ResultsPage = () => {
  const { type } = useParams<{ type: string }>();

  const sortedMajors = [...majors].sort(
    (a, b) => b.matchPercentages[type as keyof typeof b.matchPercentages] - 
              a.matchPercentages[type as keyof typeof a.matchPercentages]
  );

  const sortedCareers = [...careers].sort(
    (a, b) => b.matchPercentages[type as keyof typeof b.matchPercentages] - 
              a.matchPercentages[type as keyof typeof a.matchPercentages]
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Results for {type}
      </h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Recommended Majors
          </h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {sortedMajors.map((major) => (
              <Link
                key={major.id}
                to={`/detail/major/${major.id}`}
                className="block border-b last:border-b-0 hover:bg-gray-50"
              >
                <div className="p-4 flex justify-between items-center">
                  <span className="font-medium text-gray-900">{major.name}</span>
                  <span className="text-blue-600">
                    {major.matchPercentages[type as keyof typeof major.matchPercentages]}% Match
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Recommended Careers
          </h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {sortedCareers.map((career) => (
              <Link
                key={career.id}
                to={`/detail/career/${career.id}`}
                className="block border-b last:border-b-0 hover:bg-gray-50"
              >
                <div className="p-4 flex justify-between items-center">
                  <span className="font-medium text-gray-900">{career.name}</span>
                  <span className="text-blue-600">
                    {career.matchPercentages[type as keyof typeof career.matchPercentages]}% Match
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResultsPage;