import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (name.length < 3) {
      setError('Name must be at least 3 characters long');
      return;
    }

    const storedUser = localStorage.getItem(name);

    if (storedUser) {
      // Login case
      const user = JSON.parse(storedUser);
      if (user.password === password) {
        onLogin(name);
        navigate('/my-center');
      } else {
        setError('Incorrect Password');
      }
    } else {
      // Sign up case
      localStorage.setItem(name, JSON.stringify({ 
        name, 
        password, 
        points: 0,
        createdAt: new Date().toISOString()
      }));
      onLogin(name);
      navigate('/my-center');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Sign Up/Log In</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border rounded mt-1"
              minLength={3}
            />
          </label>
        </div>
        <div>
          <label className="block mb-2">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border rounded mt-1"
            />
          </label>
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignInPage;