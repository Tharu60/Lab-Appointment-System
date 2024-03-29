import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import ForgotPassword from "./pages/ForgotPassword/forgotPassword";
import Register from "./pages/Register/register"
import MakeAppointment from "./pages/Appointment/addAppointment"
import AppointmentTable from "./pages/Appointment/table"
import UpdateAppointment from "./pages/Appointment/updateAppointment"
import Dashboard from "./pages/Dashboard/dashboard"
import AddPatient from "./pages/Patient/addPatient"
import PatientTable from "./pages/Patient/table"
import UpdatePatient from "./pages/Patient/updatePatient"
import AddPayment from "./pages/Pyament/addPayment"
import PaymentTable from "./pages/Pyament/table"
import AddReceptionist from "./pages/Receptionist/addReceptionist"
import ReceptionistTable from "./pages/Receptionist/table"
import UpdateReceptionist from "./pages/Receptionist/updateReceptionist"
import AddTechnician from "./pages/Technician/addTechnician"
import TechnicianTable from "./pages/Technician/table"
import UpdateTechnician from "./pages/Technician/updateTechnician"
import AddTest from "./pages/Tests/addTest"
import TestTable from "./pages/Tests/table"
import UpdateTest from "./pages/Tests/updateTest"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appointment/newAppointment" element={<MakeAppointment />} />
          <Route path="/appointment" element={<AppointmentTable />} />
          <Route path="/appointment/rescheduleAppointment" element={<UpdateAppointment />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patient/addPatient" element={<AddPatient />} />
          <Route path="/patient" element={<PatientTable />} />
          <Route path="/patient/updatePatient" element={<UpdatePatient />} />
          <Route path="/payment/makePayment" element={<AddPayment />} />
          <Route path="/payment" element={<PaymentTable />} />
          <Route path="/receptionist/addReceptionist" element={<AddReceptionist />} />
          <Route path="/receptionist" element={<ReceptionistTable />} />
          <Route path="/receptionist/updateReceptionist" element={<UpdateReceptionist />} />
          <Route path="/technician/addTechnician" element={<AddTechnician />} />
          <Route path="/technician" element={<TechnicianTable />} />
          <Route path="/technician/updateTechnician" element={<UpdateTechnician />} />
          <Route path="/test/addTest" element={<AddTest />} />
          <Route path="/test" element={<TestTable />} />
          <Route path="/test/updateTest" element={<UpdateTest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
