import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ResultsPage from './pages/ResultsPage';
import DetailPage from './pages/DetailPage';
import BrowsePage from './pages/BrowsePage';
import PersonalityTypePage from './pages/PersonalityTypePage';
import MyPathPage from './pages/MyPathPage';
import RoadmapPage from './pages/RoadmapPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/personality/:type" element={<PersonalityTypePage />} />
          <Route path="/results/:type" element={<ResultsPage />} />
          <Route path="/detail/:category/:id" element={<DetailPage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/my-path" element={<MyPathPage />} />
          <Route path="/my-path/roadmap" element={<RoadmapPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;