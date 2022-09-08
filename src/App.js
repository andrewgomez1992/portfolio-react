import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <About />
      <Skills />
      <Work />
      <Contact/>
    </div>
  );
}

export default App;