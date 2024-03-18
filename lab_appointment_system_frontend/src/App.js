import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import ForgotPassword from "./pages/ForgotPassword/forgotPassword";
import makeAppointment from "./pages/Appointment/addAppointment";
import appointmentTable from "./pages/Appointment/table";
import updateAppointment from "./pages/Appointment/updateAppointment";
import dashboard from "./pages/Dashboard/dashboard";
import addPatient from "./pages/Patient/addPatient";
import patientTable from "./pages/Patient/table";
import updatePatient from "./pages/Patient/updatePatient";
import addPayment from "./pages/Pyament/addPayment";
import paymentTable from "./pages/Pyament/table";
import addReceptionist from "./pages/Receptionist/addReceptionist";
import receptionistTable from "./pages/Receptionist/table";
import updateReceptionist from "./pages/Receptionist/updateReceptionist";
import register from "./pages/Register/register";
import addTechnician from "./pages/Technician/addTechnician";
import technicianTable from "./pages/Technician/table";
import updateTechnician from "./pages/Technician/updateTechnician";
import addTest from "./pages/Tests/addTest";
import testTable from "./pages/Tests/table";
import updateTest from "./pages/Tests/updateTest";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword/>} />
          <Route path="/register" element={<register/>} />
          <Route path="/dashboard" element={<dashboard/>} />
          <Route path="/makeAppointment" element={<makeAppointment/>} />
          <Route path="/forgotPassword" element={<ForgotPassword/>} />
          <Route path="/forgotPassword" element={<ForgotPassword/>} />
          <Route path="/forgotPassword" element={<ForgotPassword/>} />
          <Route path="/forgotPassword" element={<ForgotPassword/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
