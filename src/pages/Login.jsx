import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import { login } from '../utils/auth';  
import { mockUsers } from '../utils/constants';  
import '../styles/form.css';  

const Login = () => {  
    const [formData, setFormData] = useState({ email: '', password: '' });  
    const [selectedUser, setSelectedUser] = useState(mockUsers.length > 0 ? mockUsers[0] : null);  
    const navigate = useNavigate();  

    // Handle user selection  
    const handleUserChange = (e) => {  
        const user = mockUsers.find((user) => user.id === parseInt(e.target.value, 10));  
        if (user) {  
            setSelectedUser(user);  
            setFormData({ email: user.email, password: user.password });  
        }  
    };  

    // Form submission handler  
    const handleSubmit = async (e) => {  
        e.preventDefault();  
        try {  
            const user = await login(formData.email, formData.password); // Assuming login returns a promise  
            if (user) {  
                // Handle navigation based on user role  
                if (user.role === 'ADMIN') {  
                    navigate('/manage-users'); // Admin dashboard  
                } else {  
                    navigate('/'); // Home for regular users  
                }  
            } else {  
                alert('Login failed. Please check your credentials.');  
            }  
        } catch (error) {  
            alert(error.message || 'An error occurred during login.');  
        }  
    };  

    return (  
        <div className="form-container">  
            <form onSubmit={handleSubmit} className="form">  
                <h1>Login</h1>  
                <label>Select User:</label>  
                <select  
                    onChange={handleUserChange}  
                    value={selectedUser ? selectedUser.id : ''}  
                    disabled={mockUsers.length === 0}  
                >  
                    {mockUsers.length > 0 ? (  
                        mockUsers.map((user) => (  
                            <option key={user.id} value={user.id}>  
                                {user.email} - {user.role}  
                            </option>  
                        ))  
                    ) : (  
                        <option disabled>No users available</option>  
                    )}  
                </select>  
                <label>Email:</label>  
                <input type="email" value={formData.email} readOnly />  
                <label>Password:</label>  
                <input type="password" value={formData.password} readOnly />  
                <button type="submit" disabled={!selectedUser}>  
                    Login  
                </button>  
            </form>  
        </div>  
    );  
};  

export default Login;