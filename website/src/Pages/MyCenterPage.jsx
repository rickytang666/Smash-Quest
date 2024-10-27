import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyCenterPage = ({ userName }) => {
  const [points, setPoints] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage when component mounts
    const userData = localStorage.getItem(userName);
    if (userData) {
      const user = JSON.parse(userData);
      setPoints(user.points || 0);
    } else {
      // If no user data found, redirect to sign in
      navigate('/sign-in');
    }
  }, [userName, navigate]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const fileType = file.type.split('/')[0];

    if (fileType === 'image' || fileType === 'video') {
      // Update points in state and localStorage
      const newPoints = points + 1;
      setPoints(newPoints);
      
      // Update user data in localStorage
      const userData = JSON.parse(localStorage.getItem(userName));
      userData.points = newPoints;
      localStorage.setItem(userName, JSON.stringify(userData));
      
      alert('Valid file uploaded. Point added!');
    } else {
      alert('Invalid file type. Please upload an image or video.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Hi, {userName}</h1>
      <p className="mb-4">Welcome to your center!</p>
      <h2 className="text-xl font-semibold mb-6">Your Points: {points}</h2>
      <form>
        <label className="block">
          Upload Image/Video:
          <input 
            type="file" 
            onChange={handleFileUpload}
            accept="image/*,video/*"
            className="mt-2 block w-full"
          />
        </label>
      </form>
    </div>
  );
};

export default MyCenterPage;