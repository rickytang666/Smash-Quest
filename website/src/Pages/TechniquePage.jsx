import React, { useState } from 'react';
import "./TechniquePage.css"

const TechniquePage = () => {
  const [isTipRevealed, setIsTipRevealed] = useState(false);
  const [isVideo1Revealed, setIsVideo1Revealed] = useState(false);
  const [isVideo2Revealed, setIsVideo2Revealed] = useState(false);

  const todaysTip = "Make sure that you rotate your hips and shoulders backwards during the backswing and then forward into the ball as you stroke your forehand. This motion is coordinated with a transfer of your body weight from the back foot to the front foot.";

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="cards-container">
        {/* Tip Card */}
        <div 
          className="card-container"
          onClick={() => setIsTipRevealed(!isTipRevealed)}
        >
          <div className="card-content">
            {!isTipRevealed ? (
              <h2 className="card-title">Click to see today's tip for table tennis</h2>
            ) : (
              <p className="card-text">{todaysTip}</p>
            )}
          </div>
        </div>

        {/* First Video Card */}
        <div 
          className="card-container"
          onClick={() => setIsVideo1Revealed(!isVideo1Revealed)}
        >
          <div className="card-content">
            {!isVideo1Revealed ? (
              <h2 className="card-title">Click to see today's tutorial on table tennis basics</h2>
            ) : (
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/k-MzcgTA-Mw?si=Z8AERzVdKHo9oLGu" 
                  title="Table Tennis Basics Tutorial" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>

        {/* Second Video Card */}
        <div 
          className="card-container"
          onClick={() => setIsVideo2Revealed(!isVideo2Revealed)}
        >
          <div className="card-content">
            {!isVideo2Revealed ? (
              <h2 className="card-title">Click to see today's service technqiue animation</h2>
            ) : (
              <div className="video-container">
                <iframe 
                  src="https://youtube.com/embed/JG3AYiUrblU" 
                  title="Table Tennis Serve Technique" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechniquePage;