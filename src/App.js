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
import WhyBoot from "./pages/why/whyBoot";
import Why from "./pages/why/why";
import ContactBoot from "./pages/contact/contactBoot";
import Contact from "./pages/contact/contact";
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
          <Route path="/why" element={<WhyBoot />}></Route>
          <Route path="/why-Loaded" element={<Why />}></Route>
          <Route path="/contact" element={<ContactBoot />}></Route>
          <Route path="/contact-Loaded" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
