import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import ForgotPassword from "./pages/ForgotPassword/forgotPassword";
import register from "./pages/Register/register;


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword/>} />
          <Route path="/register" element={<register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
