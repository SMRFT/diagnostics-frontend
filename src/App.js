import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeRegister from "./Components/EmployeeRegister";
import Profile from "./Components/Profile";
import EmployeeList from "./Components/EmployeeList";
import Admin from "./Components/Admin";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<EmployeeRegister />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/EmployeeList" element={<EmployeeList />} />
          <Route path="/Admin" element={<Admin />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
