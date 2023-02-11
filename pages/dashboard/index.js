import React from "react";
import Navbar from "../../components/Backend/Dashboard/Navbar";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <div>
        <Navbar />
      </div>
      <div>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
