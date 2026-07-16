import React from "react";
import Navbar from "./components/Navbar";
import Pics from "./components/Pics";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  let [ismenuOpen, setismenuOpen] = useState(false);
  
  function menuClick() {
    if (ismenuOpen) {
      setismenuOpen(false);
    } else {
      setismenuOpen(true);
    }

    console.log(ismenuOpen);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-900">
      <Navbar banana ={menuClick}  />
      {ismenuOpen && <Sidebar/>}
      <Pics />
    </div>
  );
}

export default App;
