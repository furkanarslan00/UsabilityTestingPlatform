import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPanel.css';

function AdminPanel() {
  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <div className="admin-buttons">
        <Link to="/add-new-software"><button>Add New Software</button></Link>
        <Link to="/approve-findings"><button>Approve/Reject Findings</button></Link>
        <Link to="/approve-software-owner"><button>Approve/Reject Software Owner Registrations</button></Link>
        <Link to="/manage-users"><button>Manage User Accounts</button></Link>
        <Link to="/add-blog"><button>Add Blog Post</button></Link>
        <Link to="/view-dashboard"><button>View Dashboard</button></Link>
      </div>
    </div>
  );
}

export default AdminPanel;
