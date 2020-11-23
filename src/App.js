import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container ">
      <div className="box">
        <h2>Current Note</h2>
        <button>Save Note</button>
        <button>Start/Stop</button>
      </div>
      <div className="box">
        <h2>Notes</h2>
      </div>
    </div>
  );
}

export default App;
