import { mockUsers } from './constants';

export const login = (email, password) => {
  const user = mockUsers.find((u) => u.email === email && u.password === password);
  if (!user) throw new Error('Invalid email or password');
  localStorage.setItem('user', JSON.stringify(user));
  return user;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const isAdmin = () => {
  const user = getCurrentUser();
  return user && user.role === 'ADMIN';
};
