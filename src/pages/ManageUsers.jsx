import React, { useState } from 'react';
import '../styles/table.css';
import { ROLES, mockUsers } from '../utils/constants';
import { getCurrentUser } from '../utils/auth';

const ManageUsers = () => {
  const currentUser = getCurrentUser();
  if (!currentUser || currentUser.role !== ROLES.ADMIN) {
    return <p>You are not authorized to view this page.</p>;
  }

  const [users, setUsers] = useState(mockUsers);

  const handleRoleChange = (userId, newRole) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === userId ? { ...user, role: newRole } : user))
    );
  };

  const handleUpdate = (userId) => {
    const updatedUser = users.find((user) => user.id === userId);
    alert(`Updated user with ID: ${userId}, new role: ${updatedUser.role}`);
    // Here you could also add logic to persist changes to a backend
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  <option value={ROLES.ADMIN}>{ROLES.ADMIN}</option>
                  <option value={ROLES.USER}>{ROLES.USER}</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleUpdate(user.id)} className="update-button">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
