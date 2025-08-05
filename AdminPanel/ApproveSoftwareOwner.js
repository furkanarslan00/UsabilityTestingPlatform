import React, { useState } from 'react';
import './ApproveSoftwareOwner.css';

const ApproveSoftwareOwner = () => {
    const [owners, setOwners] = useState([
        { id: 1, name: 'Alice Johnson', gender: 'Female', software: 'Inventory System', details: 'Experienced in inventory management software.' },
        { id: 2, name: 'Bob Smith', gender: 'Male', software: 'CRM Tool', details: 'Expert in customer relationship management tools.' },
        { id: 3, name: 'Charlie Brown', gender: 'Male', software: 'Project Management App', details: 'Specialized in agile project management.' }
    ]);

    const handleApprove = (id) => {
        console.log('Approved owner with ID:', id);
        // Implement the logic to handle approval
    };

    const handleDeny = (id) => {
        console.log('Denied owner with ID:', id);
        // Implement the logic to handle denial
    };

    return (
        <div className="approve-software-owner-container-custom"> {/* Changed class name here */}
            <h1>Approve Software Owners</h1>
            <table className="owners-table-custom"> {/* Changed class name here */}
                <thead>
                    <tr>
                        <th>Name Surname</th>
                        <th>Gender</th>
                        <th>Software</th>
                        <th>Extra Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {owners.map(owner => (
                        <tr key={owner.id}>
                            <td>{owner.name}</td>
                            <td>{owner.gender}</td>
                            <td>{owner.software}</td>
                            <td>{owner.details}</td>
                            <td>
                                <button className="approve-button-custom" onClick={() => handleApprove(owner.id)}>Approve</button> {/* Changed class name here */}
                                <button className="deny-button-custom" onClick={() => handleDeny(owner.id)}>Deny</button> {/* Changed class name here */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApproveSoftwareOwner;
