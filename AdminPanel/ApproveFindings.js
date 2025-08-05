// Updated ApproveFindings.js

import React, { useState } from 'react';
import './ApproveFindings.css';

const ApproveFindings = () => {
    const [findings, setFindings] = useState([
        { id: 1, user: 'Alice', method: 'Heuristic Evaluation', criteria: 'Consistency and Standards', finding: 'Button styles are inconsistent across pages.' },
        { id: 2, user: 'Bob', method: 'User Testing', criteria: 'Error Prevention', finding: 'No warning message before deleting a record.' },
        { id: 3, user: 'Charlie', method: 'Cognitive Walkthrough', criteria: 'Match between System and Real World', finding: 'Technical jargon in the settings menu is confusing.' }
    ]);

    const handleApprove = (id) => {
        console.log('Approved finding with ID:', id);
        // Implement the logic to handle approval
    };

    const handleDeny = (id) => {
        console.log('Denied finding with ID:', id);
        // Implement the logic to handle denial
    };

    return (
        <div className="approve-findings-container-custom"> {/* Changed class name here */}
            <h1>Approve Findings</h1>
            <table className="findings-table-custom"> {/* Changed class name here */}
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Evaluation Method</th>
                        <th>Usability Criteria</th>
                        <th>Finding</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {findings.map(finding => (
                        <tr key={finding.id}>
                            <td>{finding.user}</td>
                            <td>{finding.method}</td>
                            <td>{finding.criteria}</td>
                            <td>{finding.finding}</td>
                            <td>
                                <button className="approve-button-custom" onClick={() => handleApprove(finding.id)}>Approve</button> {/* Changed class name here */}
                                <button className="deny-button-custom" onClick={() => handleDeny(finding.id)}>Deny</button> {/* Changed class name here */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApproveFindings;
