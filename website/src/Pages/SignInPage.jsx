import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem(name);

    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.password === password) {
        onLogin(name);
        navigate('/my-center');
      } else {
        setError('Incorrect password. Please try again.');
      }
    } else {
      localStorage.setItem(name, JSON.stringify({ name, password, points: 0 }));
      onLogin(name);
      navigate('/my-center');
    }
  };

  return (
    <div>
      <h1>Sign Up/Log In</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignInPage;
