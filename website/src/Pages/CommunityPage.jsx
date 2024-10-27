import React from 'react';
import './CommunityPage.css'; // Make sure to create this CSS file
import blade from '../Assets/blade.jpg';
import rubber from '../Assets/rubber.jpg'
import table from '../Assets/table.jpg';
import watch from '../Assets/watch.jpg'


const CommunityPage = () => {
  // Sample items for the shop
  const items = [
    { name: 'Butterfly Rubber', points: 500, image: rubber },
    { name: 'Cybershpae Blade', points: 700, image: blade },
    { name: 'Apple Watch', points: 850, image: watch },
    { name: 'DHS Rainbow Table', points: 1200, image: table }
  ];

  return (
    <div>
      <h1>Community</h1>
      <p>This is the Smash Store page.</p>
      <div className="shop-grid">
        {items.map((item, index) => (
          <div key={index} className="shop-item">
            {/* Use <img> to display the image */}
            <img
              src={item.image}
              alt={item.name}
              className="item-image"
            />
            <h3>{item.name}</h3>
            <p>{item.points} Pts</p>
            <button className="buy-button">Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
