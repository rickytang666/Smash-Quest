import React from 'react';
import '../App.css'; // Correct path to App.css
import './AboutPage.css'
import logo from '../Assets/web_logo.png';

const AboutPage = () => {
  return (
    <div className="about-content">
      <h1>About Smash Quest</h1>
      {/* Logo below the title */}
      <img src={logo} alt="Smash Quest Logo" className="about-logo" />
      
      <p>
        Smash Quest is a platform powered by AI and Dartfish, designed to help you improve your table tennis skills. By uploading your training sessions, you can earn reward points and receive AI-driven analysis of your performance. Based on the analysis, you'll get personalized video tutorials and daily tips.
      </p>
      <p>
        The more dedicated you are, the more points you accumulate, which can be used to purchase valuable items on the community page!
      </p>
    </div>
  );
};

export default AboutPage;
