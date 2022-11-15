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
import TeamBoot from "./pages/team/teamBoot";
import Team from "./pages/team/team";
import LoopsBoot from "./pages/loops/loopsBoot";
import Loops from "./pages/loops/loops";
import MethodsBoot from "./pages/methods/methodsBoot";
import Methods from "./pages/methods/methods";
import ArraysBoot from "./pages/arrays/arraysBoot";
import Arrays from "./pages/arrays/arrays";
import StringsBoot from "./pages/strings/stringsBoot";
import Strings from "./pages/strings/strings";
import Footer from "./components/footer";
function App() {
  return (
    <div className="main h-screen">
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
          <Route path="/team" element={<TeamBoot />}></Route>
          <Route path="/team-Loaded" element={<Team />}></Route>
          <Route path="/loops" element={<LoopsBoot />}></Route>
          <Route path="/loops-Loaded" element={<Loops />}></Route>
          <Route path="/methods" element={<MethodsBoot />}></Route>
          <Route path="/methods-Loaded" element={<Methods />}></Route>
          <Route path="/arrays" element={<ArraysBoot />}></Route>
          <Route path="/arrays-Loaded" element={<Arrays />}></Route>
          <Route path="/strings" element={<StringsBoot />}></Route>
          <Route path="/strings-Loaded" element={<Strings />}></Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
