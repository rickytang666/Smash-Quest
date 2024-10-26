import React from 'react';
import '../App.css'; // Correct path to App.css

const AboutPage = () => {
  return (
    <div className="about-content">
      <h1>About Table Tennis</h1>
      <p>
        Table tennis is a fast-paced and highly skilled sport featured in the Olympic Games. With its rapid rallies and precise shots, it’s a game where every rule matters. For those new to the sport or looking to brush up on the details, here's a comprehensive guide to the rules of Olympic table tennis.
      </p>
      <p>
        The Olympics split their 172 table tennis spots equally amongst men's and women's players. National Olympics Committees could enter a maximum of six table tennis players across the five events (men’s and women’s singles, men’s and women’s teams, and mixed doubles).
      </p>
      <p>
        To set up the competition, teams are often seeded based on their international rankings and recent performances. This way of setting up the bracket gives the higher-ranked teams a top seed and placed in different sections of the bracket to ensure they won’t meet until later rounds. This way of setting up a tournament sets up possible “underdog” stories where a lower seed defeats a top seeded team.
      </p>
      <p>
        Only about 70 table tennis players may participate in the men’s and women’s singles matches, depending on the number of slots available after the distribution of the mixed doubles. Each National Olympics Committee can enter up to four table tennis players (two per gender). Thirty-two spots are reserved for both the men’s and women’s tournaments. At the end of six rounds of gameplay, a winner will be crowned.
      </p>
    </div>
  );
};

export default AboutPage;
