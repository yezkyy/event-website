import React from "react";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import RegistrationForm from "./components/RegistrationForm";
import About from "./components/About";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
    <Hero />
      <main>
        <About />
        <Schedule />
        <Speakers />
        <RegistrationForm />
      </main>
    </div>
  );
};

export default App;