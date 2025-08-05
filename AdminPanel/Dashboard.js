import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>App Usage Dashboard</h1>
            <div className="chart-container">
                {/* Insert your chart components here */}
                <div className="chart">Chart 1</div>
                <div className="chart">Chart 2</div>
                <div className="chart">Chart 3</div>
            </div>
        </div>
    );
};

export default Dashboard;
