import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
function App() {
  const [toggle, setToggle] = useState(false);
  const openToggle = () => {
    setToggle(!toggle);
  };

  const closeToggle = () => {
    setToggle(false);
  };

  return (
    <>
      <Navbar openToggle={openToggle} />
      <Sidebar closeToggle={closeToggle} toggle={toggle} />
      <Hero />
    </>
  );
}

export default App;
