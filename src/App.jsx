import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
