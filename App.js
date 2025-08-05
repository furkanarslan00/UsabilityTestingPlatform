import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';
import SoftwareOwnerRegistration from './SoftwareOwnerRegistration';
import SoftwareListing from './SoftwareListing';
import BlogPage from './BlogPage';
import UsabilityPage from './UsabilityPage';
import UsabilityProblemForm from './UsabilityProblemForm';
import AdminPanel from './AdminPanel/AdminPanel';
import AddNewSoftware from './AdminPanel/AddNewSoftware';
import ApproveFindings from './AdminPanel/ApproveFindings';
import ApproveSoftwareOwner from './AdminPanel/ApproveSoftwareOwner';
import ManageUsers from './AdminPanel/ManageUsers';
import AddBlog from './AdminPanel/AddBlog';
import Dashboard from './AdminPanel/Dashboard';
import NotFound from './NotFound';
import ForgotPassword from './ForgotPassword';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    // Authentication logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
    // For simplicity, we assume any username and password combination is valid
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/software-owner-registration" element={<SoftwareOwnerRegistration />} />
          <Route path="/software-listing" element={<SoftwareListing />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/usabilitypage" element={<UsabilityPage />} />
          <Route path="/usability-problem-form" element={<UsabilityProblemForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/add-new-software" element={<AddNewSoftware />} />
          <Route path="/approve-findings" element={<ApproveFindings />} />
          <Route path="/approve-software-owner" element={<ApproveSoftwareOwner />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/view-dashboard" element={<Dashboard />} />
          <Route path="/admin-panel" element={< AdminPanel />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/forgot-password" element={< ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
