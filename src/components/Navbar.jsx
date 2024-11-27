import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../utils/auth';
import '../styles/navbar.css';


const Navbar = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <h2>VRV Security</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
        {user && (
          <>
            {user.role === 'ADMIN' && <li><Link to="/manage-users">Manage Users</Link></li>}
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;