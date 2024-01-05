import React from "react";
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Services from "./components/Services";
import Contactus from "./components/Contactus";
import './App.css';
import './Animation.css';

function App() {
  return (
    <>
      <Navbar />
      <Aboutus />
      <Skill />
      <Project />
      <Services />
      <Contactus />
    </>
   
  );
}

export default App;
