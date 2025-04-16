import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { personalityTypeDetails } from '../data/mockData';
import { PersonalityType } from '../types';

const PersonalityTypePage = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const typeDetails = type ? personalityTypeDetails[type as PersonalityType] : null;

  if (!typeDetails) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-center text-gray-600">Personality type not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{typeDetails.type}</h1>
          <p className="text-xl text-gray-600">{typeDetails.name}</p>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
          <p className="text-gray-600">{typeDetails.description}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Strengths</h2>
          <ul className="list-disc list-inside text-gray-600">
            {typeDetails.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Potential Weaknesses</h2>
          <ul className="list-disc list-inside text-gray-600">
            {typeDetails.weaknesses.map((weakness, index) => (
              <li key={index}>{weakness}</li>
            ))}
          </ul>
        </section>

        <div className="flex space-x-4 pt-6">
          <a
            href="https://www.16personalities.com/free-personality-test"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 text-center transition-colors"
          >
            Retake Test
          </a>
          <button
            onClick={() => navigate(`/results/${type}`)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            View My Matches
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalityTypePage;