import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UsabilityProblemForm.css';

function UsabilityProblemForm() {
  const [software, setSoftware] = useState('');
  const [evaluationMethod, setEvaluationMethod] = useState('');
  const [criteria, setCriteria] = useState('');
  const [problemDetails, setProblemDetails] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (software && evaluationMethod && criteria && problemDetails) {
      setSuccessMessage("Problem added successfully!");
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      // Formu temizle
      setSoftware('');
      setEvaluationMethod('');
      setCriteria('');
      setProblemDetails('');
      setScreenshot(null);
    } else {
      setSuccessMessage("Please fill out all fields!");
    }
  };

  const handleCancel = () => {
    navigate('/usabilitypage');
  };

  return (
    <div className="UsabilityProblemFormContainer">
      <header className="UsabilityProblemFormHeader">
        <h1>Usability Problem Form</h1>
      </header>
      {successMessage && <p className="UsabilityProblemFormSuccessMessage">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="UsabilityProblemFormLabel">Select Software:</label>
          <select
            value={software}
            onChange={(e) => setSoftware(e.target.value)}
            className="UsabilityProblemFormField"
            required
          >
            <option value="">Select an option</option>
            <option value="softwareA">Software A</option>
            <option value="softwareB">Software B</option>
            <option value="softwareC">Software C</option>
          </select>
        </div>
        <div>
          <label className="UsabilityProblemFormLabel">Evaluation Method:</label>
          <select
            value={evaluationMethod}
            onChange={(e) => setEvaluationMethod(e.target.value)}
            className="UsabilityProblemFormField"
            required
          >
            <option value="">Select an option</option>
            <option value="userTesting">User Testing</option>
            <option value="heuristicEvaluation">Heuristic Evaluation</option>
            <option value="observation">Observation</option>
            <option value="interview">Interview</option>
          </select>
        </div>
        <div>
          <label className="UsabilityProblemFormLabel">Usability Criteria:</label>
          <select
            value={criteria}
            onChange={(e) => setCriteria(e.target.value)}
            className="UsabilityProblemFormField"
            required
          >
            <option value="">Select an option</option>
            <option value="efficiency">Efficiency</option>
            <option value="effectiveness">Effectiveness</option>
            <option value="learnability">Learnability</option>
            <option value="memorability">Memorability</option>
            <option value="errorPrevention">Error Prevention</option>
            <option value="errorTolerance">Error Tolerance</option>
            <option value="aesthetics">Aesthetics</option>
          </select>
        </div>
        <div>
          <label className="UsabilityProblemFormLabel">Usability Problem Details:</label>
          <textarea
            value={problemDetails}
            onChange={(e) => setProblemDetails(e.target.value)}
            className="UsabilityProblemFormField"
            required
          ></textarea>
        </div>
        <div>
          <label className="UsabilityProblemFormLabel">Upload Screenshots/Images (Optional):</label>
          <input
            type="file"
            onChange={(e) => setScreenshot(e.target.files[0])}
            accept="image/*"
            className="myUsabilityProblemFormFileInput"
          />
        </div>
        <div>
          <button type="submit" className="UsabilityProblemFormButton">Add Problem</button>
          <button type="button" onClick={handleCancel} className="UsabilityProblemFormButton UsabilityProblemFormCancelButton">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UsabilityProblemForm;
