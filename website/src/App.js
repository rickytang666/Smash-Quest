import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './Pages/AboutPage';
import MyCenterPage from './Pages/MyCenterPage';
import CommunityPage from './Pages/CommunityPage';
import TechniquePage from './Pages/TechniquePage';
import MatchPage from './Pages/MatchPage';
import SignInPage from './Pages/SignInPage'; // New Page for Sign In
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name) => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserName('');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} userName={userName} />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/my-center" element={<MyCenterPage userName={userName} />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/technique" element={<TechniquePage />} />
          <Route path="/match" element={<MatchPage />} />
          <Route path="/sign-in" element={<SignInPage onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
