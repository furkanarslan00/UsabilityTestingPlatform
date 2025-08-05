import React, { useState } from 'react';
import './ManageUsers.css';

const ManageUsers = () => {
    const [users, setUsers] = useState([
        { id: 1, username: 'alicej', email: 'alice@example.com' },
        { id: 2, username: 'bobsmith', email: 'bob@example.com' },
        { id: 3, username: 'charlieb', email: 'charlie@example.com' },
    ]);

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
        console.log('Deleted user with ID:', id);
    };

    return (
        <div className="manage-users-container">
            <h1>Manage Users</h1>
            <ul className="users-list">
                {users.map(user => (
                    <li key={user.id} className="user-item">
                        <div className="user-info">
                            <span className="username">{user.username}</span>
                            <span className="email">{user.email}</span>
                        </div>
                        <button className="delete-button" onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageUsers;
