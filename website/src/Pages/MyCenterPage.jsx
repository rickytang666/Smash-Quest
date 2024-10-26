import React from 'react';

const MyCenterPage = ({ userName, points, addPoint }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      // Handle the case when no file is selected
      return;
    }

    const fileType = file.type.split('/')[0];

    if (fileType === 'image' || fileType === 'video') {
      addPoint();
      alert('Valid file uploaded. Point added!');
    } else {
      alert('Invalid file type. Please upload an image or video.');
    }
  };

  return (
    <div>
      <h1>Hi, {userName}</h1>
      <p>Welcome to your center!</p>
      <h2>Your Points: {points}</h2>
      <form>
        <label>
          Upload Image/Video:
          <input type="file" onChange={handleFileUpload} />
        </label>
      </form>
    </div>
  );
};

export default MyCenterPage;
