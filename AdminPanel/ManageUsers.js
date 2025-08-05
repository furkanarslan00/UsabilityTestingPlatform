// Updated ManageUsers.js

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
        <div className="manage-users-container-custom"> {/* Changed class name here */}
            <h1>Manage Users</h1>
            <ul className="users-list-custom"> {/* Changed class name here */}
                {users.map(user => (
                    <li key={user.id} className="user-item-custom"> {/* Changed class name here */}
                        <div className="user-info-custom"> {/* Changed class name here */}
                            <span className="username-custom">{user.username}</span> {/* Changed class name here */}
                            <span className="email-custom">{user.email}</span> {/* Changed class name here */}
                        </div>
                        <button className="delete-button-custom" onClick={() => handleDelete(user.id)}>Delete</button> {/* Changed class name here */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageUsers;
