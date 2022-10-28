import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Screen from "./components/screen";
import Boot from "./pages/boot";
import Auth from "./pages/auth";
import Off from "./pages/off";
import Idle from "./pages/idle";
import Phone from "./pages/phone";
import WhatBoot from "./pages/what/whatBoot";
import What from "./pages/what/what";
function App() {
  return (
    <div className="main">
      <Screen />
      <Router>
        <Routes>
          <Route path="/" element={<Boot />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/off" element={<Off />}></Route>
          <Route path="/idle" element={<Idle />}></Route>
          <Route path="/phone" element={<Phone />}></Route>
          <Route path="/what" element={<WhatBoot />}></Route>
          <Route path="/what-Loaded" element={<What />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
