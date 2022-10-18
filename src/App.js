import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Screen from "./components/screen";
import Boot from "./pages/boot";
import Auth from "./pages/auth";

function App() {
  return (
    <div className="main">
      <Screen />
      <Router>
        <Routes>
          <Route path="/" element={<Boot />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
