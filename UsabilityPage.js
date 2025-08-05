import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UsabilityPage.css';

const UsabilityPage = () => {
  const navigate = useNavigate();

  const goToSoftwareListing = () => {
    console.log("Navigating back to software listing...");
    navigate('/software-listing'); // Navigate to software listing
  };

  const addNewFinding = () => {
    console.log("Navigating to add new finding form...");
    navigate('/usability-problem-form'); // Navigate to the new form
  };

  const search = () => {
    console.log("Searching...");
    // Perform relevant actions here
  };

  return (
    <div className="usability-container">
      <div className="usability-header">
        <button className="usability-button" onClick={goToSoftwareListing}>Back to Software Listing</button>
        <button className="usability-button" onClick={addNewFinding}>Add New Finding</button>
      </div>
      <h1>USABILITY OF SOFTWARE NAME</h1>
      <div className="usability-form-group">
        <label htmlFor="date">DATE:</label>
        <input type="text" id="date" name="date" />
        <label htmlFor="tester">TESTER:</label>
        <input type="text" id="tester" name="tester" />
        <label htmlFor="findings">FINDINGS:</label>
        <input type="text" id="findings" name="findings" />
        <button onClick={search}>Search</button>
      </div>
      <h2>FINDINGS</h2>
      <table className="usability-table">
        <thead>
          <tr>
            <th>DATE</th>
            <th>TESTER</th>
            <th>EVAL METHOD</th>
            <th>VIOLATED CRITERIA</th>
            <th>FINDINGS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {/* Table body content goes here */}
        </tbody>
      </table>
    </div>
  );
};

export default UsabilityPage;
