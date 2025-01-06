import React from "react";
import Header from "./components/Header";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Schedule />
        <Speakers />
        <RegistrationForm />
      </main>
    </div>
  );
};

export default App;