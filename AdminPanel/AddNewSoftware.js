import React, { useState } from 'react';
import './AddNewSoftware.css';

const AddNewSoftware = () => {
    const [softwareName, setSoftwareName] = useState('');
    const [description, setDescription] = useState('');
    const [softwareOwner, setSoftwareOwner] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Software Name:', softwareName);
        console.log('Description:', description);
        console.log('Software Owner:', softwareOwner);
    };

    return (
        <div className="add-software-container-custom"> {/* Changed class name here */}
            <h1>Add New Software</h1>
            <form onSubmit={handleSubmit} className="software-form-custom"> {/* Changed class name here */}
                <label htmlFor="software-name">Software Name:</label>
                <input 
                    id="software-name"
                    type="text" 
                    value={softwareName} 
                    onChange={(e) => setSoftwareName(e.target.value)} 
                    placeholder="Enter software name" 
                    required 
                />
                
                <label htmlFor="description">Description:</label>
                <textarea 
                    id="description"
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    placeholder="Enter description" 
                    required 
                />
                
                <label htmlFor="software-owner">Software Owner:</label>
                <select 
                    id="software-owner"
                    value={softwareOwner} 
                    onChange={(e) => setSoftwareOwner(e.target.value)} 
                    required
                >
                    <option value="" disabled>Select Owner</option>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                    <option value="Charlie">Charlie</option>
                </select>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddNewSoftware;
