import React, { useState } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './Pages/AboutPage';
import MyCenterPage from './Pages/MyCenterPage';
import CommunityPage from './Pages/CommunityPage';
import TechniquePage from './Pages/TechniquePage';
import MatchPage from './Pages/MatchPage';
import SignInPage from './Pages/SignInPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [points, setPoints] = useState(0);
  const navigate = useNavigate();

  const handleLogin = (name) => {
    setUserName(name);
    setIsLoggedIn(true);
    const storedUser = JSON.parse(localStorage.getItem(name));
    if (storedUser) {
      setPoints(storedUser.points || 0);
    }
  };

  const handleLogout = () => {
    setUserName('');
    setIsLoggedIn(false);
    setPoints(0);
    navigate('/about'); // Handle navigation here
  };

  const addPoint = () => {
    const newPoints = points + 1;
    setPoints(newPoints);
    const user = JSON.parse(localStorage.getItem(userName));
    user.points = newPoints;
    localStorage.setItem(userName, JSON.stringify(user));
  };

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} userName={userName} />
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/my-center" element={<MyCenterPage userName={userName} points={points} addPoint={addPoint} />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/technique" element={<TechniquePage />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/sign-in" element={<SignInPage onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
