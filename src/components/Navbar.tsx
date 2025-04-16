import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center group">
              <GraduationCap className="h-8 w-8 text-blue-600 transition-transform group-hover:scale-110" />
              <span className="ml-3 text-xl font-semibold text-gray-900">
                BYU Solis
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/my-path"
              className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              My Path
            </Link>
            <Link
              to="/browse"
              className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Browse All
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;