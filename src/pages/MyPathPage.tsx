import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Calendar, GraduationCap, Briefcase, BookOpen } from 'lucide-react';
import { UserPathInfo } from '../types';
import { majors, careers } from '../data/mockData';

const GRADUATION_MONTHS = [
  { value: '04', label: 'April' },
  { value: '08', label: 'August' },
  { value: '12', label: 'December' }
];

const GRADUATION_YEARS = Array.from({ length: 6 }, (_, i) => {
  const year = new Date().getFullYear() + i;
  return { value: year.toString(), label: year.toString() };
});

const MyPathPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState<UserPathInfo>({
    academicYear: 'freshman',
    graduationDate: '',
    major: '',
    targetCareer: '',
    gpa: null,
  });

  const [gradMonth, setGradMonth] = useState('');
  const [gradYear, setGradYear] = useState('');

  const handleGraduationChange = (month: string, year: string) => {
    if (month && year) {
      setUserInfo({
        ...userInfo,
        graduationDate: `${year}-${month}-01`
      });
    }
    setGradMonth(month);
    setGradYear(year);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      navigate(`/my-path/roadmap`, { state: { userInfo } });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Create Your Personal Roadmap
        </h1>
        <p className="text-xl text-gray-600">
          Let's build a customized path to help you achieve your academic and career goals
        </p>
      </div>

      <div className="card p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 relative z-10 
                  ${
                    step >= num
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'bg-white border-gray-300 text-gray-500'
                  }`}
              >
                {num}
              </div>
            ))}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10" />
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-blue-600 -z-10 transition-all duration-300"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Academic Year
                </label>
                <select
                  value={userInfo.academicYear}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, academicYear: e.target.value as any })
                  }
                  className="input"
                  required
                >
                  <option value="">Select your year</option>
                  <option value="freshman">Freshman</option>
                  <option value="sophomore">Sophomore</option>
                  <option value="junior">Junior</option>
                  <option value="senior">Senior</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Graduation
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={gradMonth}
                    onChange={(e) => handleGraduationChange(e.target.value, gradYear)}
                    className="input"
                    required
                  >
                    <option value="">Select Month</option>
                    {GRADUATION_MONTHS.map(month => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                  <select
                    value={gradYear}
                    onChange={(e) => handleGraduationChange(gradMonth, e.target.value)}
                    className="input"
                    required
                  >
                    <option value="">Select Year</option>
                    {GRADUATION_YEARS.map(year => (
                      <option key={year.value} value={year.value}>
                        {year.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Intended/Current Major
              </label>
              <select
                value={userInfo.major}
                onChange={(e) => setUserInfo({ ...userInfo, major: e.target.value })}
                className="input"
                required
              >
                <option value="">Select your major</option>
                {majors.map(major => (
                  <option key={major.id} value={major.id}>
                    {major.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {step === 3 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Career Path
              </label>
              <select
                value={userInfo.targetCareer}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, targetCareer: e.target.value })
                }
                className="input"
                required
              >
                <option value="">Select your target career</option>
                {careers.map(career => (
                  <option key={career.id} value={career.id}>
                    {career.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {step === 4 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current GPA (if applicable)
              </label>
              <input
                type="number"
                min="0"
                max="4"
                step="0.01"
                placeholder="e.g., 3.75"
                value={userInfo.gpa || ''}
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    gpa: e.target.value ? parseFloat(e.target.value) : null,
                  })
                }
                className="input"
              />
              <p className="mt-2 text-sm text-gray-500">
                Leave blank if you're an incoming student
              </p>
            </div>
          )}

          <div className="flex justify-end pt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="btn btn-secondary mr-4"
              >
                Back
              </button>
            )}
            <button type="submit" className="btn btn-primary">
              {step === 4 ? 'Create My Path' : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyPathPage;