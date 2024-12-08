// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSession from "./components/WorkoutSession";
import BMICalculator from "./components/BMICalculator";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSession />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;
