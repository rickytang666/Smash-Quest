import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = ({ onLogin }) => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(name);
    navigate('/my-center'); // Redirect to My Center page
  };

  return (
    <div>
      <h1>Sign Up/Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignInPage;
