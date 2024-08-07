import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  if (isAuthenticated && user) {
    navigate(`/movies/${user.favoriteMovieId}`);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 60px)', padding: '20px' }}>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
    <label style={{ marginBottom: '15px', fontSize: '16px' }}>
    Email:
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={{ width: '90%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', marginTop: '5px' }}
        required
      />
      </label>
      <label style={{ marginBottom: '15px', fontSize: '16px' }}>
            Password:
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{ width: '90%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', marginTop: '5px' }}
        required
      />
      </label>
      <button type="submit" style={{ padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#333', color: '#fff', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', transition: 'background-color 0.3s', marginBottom: '10px' }}>Login</button>
    </form>
    </div>
  );
};

export default Login;
