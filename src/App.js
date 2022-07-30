import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RepositoryAnalyzer from "./views/RepositoryAnalyzer";
import UserDashboard from "./views/UserDashboard";
import Register from "./components/Register";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Hero from "./views/Hero";
import CriticalValues from "./views/CriticalValues";

function App() {
  const [sw, setSw] = React.useState(false);
  const clickHandler = () => {
    setSw(!sw)
  }
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/repo-analyser" element={<RepositoryAnalyzer />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/critical-values" element={<CriticalValues />} />
      <Route path="/" element={<Hero />} />
      </Routes> 
    </>
  );
}

export default App;


/**
 * Better than the critical values set by you, which can be set by the user -> make a page
 * Slider
 * Make the filters work
 * Integrate
 */