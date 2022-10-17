import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Boot from "./pages/boot";
import Auth from "./pages/auth";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Boot />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </Router>
      <Boot />
      <h1></h1>
    </div>
  );
}

export default App;
