import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PersonalityType } from '../types';
import { personalityTypes } from '../data/mockData';

const LandingPage = () => {
  const [inputType, setInputType] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedType = inputType.toUpperCase().trim();
    
    if (personalityTypes.includes(formattedType as PersonalityType)) {
      setError('');
      navigate(`/personality/${formattedType}`);
    } else {
      setError('Please enter a valid Myers-Briggs type (e.g., INTJ, ENFP)');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Your Path at BYU Marriott
        </h1>
        <p className="text-xl text-gray-600">
          Discover the perfect major and career based on your Myers-Briggs personality type
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="personality-type"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter Your Myers-Briggs Type
            </label>
            <input
              type="text"
              id="personality-type"
              placeholder="e.g., INTJ"
              value={inputType}
              onChange={(e) => setInputType(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!inputType}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Continue
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Not sure about your type?{' '}
            <a
              href="https://www.16personalities.com/free-personality-test"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Take the test
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;